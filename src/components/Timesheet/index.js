'use client';
import React, { useState, useEffect } from 'react';
import { db } from '../../firebase';
import { collection, onSnapshot, doc, setDoc, updateDoc, query, where, getDoc } from 'firebase/firestore';
import { styles, tokens } from '../../styles';
import { calcSalary, formatINR, formatLPA } from '../../utils/salaryCalc';

/* ─── Helper ─── */
const getWeekDates = (offset = 0) => {
    const now = new Date();
    const day = now.getDay(); // 0=Sun
    const monday = new Date(now);
    monday.setDate(now.getDate() - (day === 0 ? 6 : day - 1) + offset * 7);
    monday.setHours(0, 0, 0, 0);
    return Array.from({ length: 7 }, (_, i) => {
        const d = new Date(monday);
        d.setDate(monday.getDate() + i);
        return d;
    });
};

const fmt = (d) => d.toISOString().split('T')[0];
const DAYS = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];

/* ─── Employee Timesheet View ─── */
const EmployeeTimesheet = ({ user }) => {
    const [weekOffset, setWeekOffset] = useState(0);
    const [entries, setEntries] = useState({});
    const [status, setStatus] = useState('draft');
    const [saving, setSaving] = useState(false);
    const [submitting, setSubmitting] = useState(false);

    const weekDates = getWeekDates(weekOffset);
    const weekId = `${user.email}_${fmt(weekDates[0])}`;

    useEffect(() => {
        let isMounted = true;
        const unsub = onSnapshot(doc(db, 'timesheets', weekId), snap => {
            if (!isMounted) return;
            if (snap.exists()) {
                const data = snap.data();
                setEntries(data.entries || {});
                setStatus(data.status || 'draft');
            } else {
                setEntries({});
                setStatus('draft');
            }
        });
        return () => { isMounted = false; unsub(); };
    }, [weekId]);

    const totalHours = Object.values(entries).reduce((sum, e) => sum + (parseFloat(e.hours) || 0), 0);

    const handleChange = (dateKey, field, value) => {
        setEntries(prev => ({ ...prev, [dateKey]: { ...prev[dateKey], [field]: value } }));
    };

    const handleSave = async () => {
        setSaving(true);
        await setDoc(doc(db, 'timesheets', weekId), {
            weekId, userEmail: user.email, userName: user.name || user.email,
            weekStart: fmt(weekDates[0]), weekEnd: fmt(weekDates[6]),
            entries, status: status === 'approved' ? 'approved' : 'draft',
            updatedAt: new Date().toISOString(),
        }, { merge: true });
        setSaving(false);
    };

    const handleSubmit = async () => {
        setSubmitting(true);
        await setDoc(doc(db, 'timesheets', weekId), {
            weekId, userEmail: user.email, userName: user.name || user.email,
            weekStart: fmt(weekDates[0]), weekEnd: fmt(weekDates[6]),
            entries, status: 'submitted', submittedAt: new Date().toISOString(),
        }, { merge: true });
        setSubmitting(false);
    };

    const isLocked = status === 'submitted' || status === 'approved';
    const statusColor = { draft: '#D97706', submitted: '#3B82F6', approved: '#059669', rejected: '#DC2626' };

    return (
        <div className="animate-fade">
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '28px' }}>
                <div>
                    <h2 style={styles.greeting}>My Timesheet</h2>
                    <p style={{ color: tokens.colors.secondary, fontSize: '14px', marginTop: '4px' }}>Log and submit your weekly hours.</p>
                </div>
                <div style={{ display: 'flex', gap: '10px', alignItems: 'center' }}>
                    <button onClick={() => setWeekOffset(o => o - 1)} style={{ ...styles.button.outline, padding: '8px 14px' }}>
                        <span className="material-symbols-outlined" style={{ fontSize: '18px' }}>chevron_left</span>
                    </button>
                    <span style={{ fontSize: '14px', fontWeight: '700', color: tokens.colors.primary }}>
                        {weekDates[0].toLocaleDateString('en-IN', { day: 'numeric', month: 'short' })} – {weekDates[6].toLocaleDateString('en-IN', { day: 'numeric', month: 'short', year: 'numeric' })}
                    </span>
                    <button onClick={() => setWeekOffset(o => o + 1)} disabled={weekOffset >= 0} style={{ ...styles.button.outline, padding: '8px 14px', opacity: weekOffset >= 0 ? 0.4 : 1 }}>
                        <span className="material-symbols-outlined" style={{ fontSize: '18px' }}>chevron_right</span>
                    </button>
                </div>
            </div>

            {/* Status + total */}
            <div style={{ display: 'flex', gap: '16px', marginBottom: '20px' }}>
                <div style={{ ...styles.card, padding: '16px 24px', flex: 1, borderLeft: `3px solid ${statusColor[status] || '#94A3B8'}` }}>
                    <div style={{ fontSize: '11px', fontWeight: '700', color: tokens.colors.secondary, textTransform: 'uppercase', letterSpacing: '0.06em', marginBottom: '4px' }}>Status</div>
                    <div style={{ fontSize: '18px', fontWeight: '800', color: statusColor[status], textTransform: 'capitalize' }}>{status}</div>
                </div>
                <div style={{ ...styles.card, padding: '16px 24px', flex: 1, borderLeft: `3px solid ${tokens.colors.accent}` }}>
                    <div style={{ fontSize: '11px', fontWeight: '700', color: tokens.colors.secondary, textTransform: 'uppercase', letterSpacing: '0.06em', marginBottom: '4px' }}>Total Hours</div>
                    <div style={{ fontSize: '18px', fontWeight: '800', color: tokens.colors.primary }}>{totalHours.toFixed(1)}h <span style={{ fontSize: '13px', color: tokens.colors.secondary, fontWeight: '500' }}>this week</span></div>
                </div>
            </div>

            {/* Grid */}
            <div style={styles.card}>
                <div style={{ display: 'grid', gridTemplateColumns: '100px repeat(7, 1fr)', gap: '1px', background: tokens.colors.border, borderRadius: tokens.radius.md, overflow: 'hidden' }}>
                    {/* Header */}
                    <div style={{ background: '#F8FAFC', padding: '12px', fontSize: '11px', fontWeight: '700', color: tokens.colors.secondary, textTransform: 'uppercase', letterSpacing: '0.06em' }}>Field</div>
                    {weekDates.map((d, i) => (
                        <div key={i} style={{ background: '#F8FAFC', padding: '12px 8px', textAlign: 'center' }}>
                            <div style={{ fontSize: '11px', fontWeight: '700', color: tokens.colors.secondary }}>{DAYS[i]}</div>
                            <div style={{ fontSize: '14px', fontWeight: '800', color: tokens.colors.primary }}>{d.getDate()}</div>
                        </div>
                    ))}

                    {/* Hours row */}
                    <div style={{ background: tokens.colors.white, padding: '12px', fontSize: '12px', fontWeight: '700', color: tokens.colors.secondary, display: 'flex', alignItems: 'center' }}>Hours</div>
                    {weekDates.map((d, i) => {
                        const key = fmt(d);
                        return (
                            <div key={i} style={{ background: tokens.colors.white, padding: '8px 6px' }}>
                                <input
                                    type="number" min="0" max="24" step="0.5"
                                    disabled={isLocked}
                                    value={entries[key]?.hours || ''}
                                    onChange={e => handleChange(key, 'hours', e.target.value)}
                                    style={{ ...styles.input, textAlign: 'center', padding: '8px 4px', fontSize: '14px', fontWeight: '700', background: isLocked ? '#F8FAFC' : '#fff', cursor: isLocked ? 'not-allowed' : 'text' }}
                                    placeholder="0"
                                />
                            </div>
                        );
                    })}

                    {/* Notes row */}
                    <div style={{ background: tokens.colors.white, padding: '12px', fontSize: '12px', fontWeight: '700', color: tokens.colors.secondary, display: 'flex', alignItems: 'center' }}>Notes</div>
                    {weekDates.map((d, i) => {
                        const key = fmt(d);
                        return (
                            <div key={i} style={{ background: tokens.colors.white, padding: '8px 6px' }}>
                                <textarea
                                    rows={2}
                                    disabled={isLocked}
                                    value={entries[key]?.notes || ''}
                                    onChange={e => handleChange(key, 'notes', e.target.value)}
                                    style={{ ...styles.input, padding: '6px', fontSize: '12px', resize: 'none', minHeight: 'unset', background: isLocked ? '#F8FAFC' : '#fff', cursor: isLocked ? 'not-allowed' : 'text' }}
                                    placeholder="Task…"
                                />
                            </div>
                        );
                    })}
                </div>

                {/* Actions */}
                {!isLocked && (
                    <div style={{ display: 'flex', gap: '12px', marginTop: '20px' }}>
                        <button onClick={handleSave} disabled={saving} style={{ ...styles.button.outline, flex: 1, padding: '12px', justifyContent: 'center' }}>
                            <span className="material-symbols-outlined" style={{ fontSize: '18px' }}>save</span>
                            {saving ? 'Saving…' : 'Save Draft'}
                        </button>
                        <button onClick={handleSubmit} disabled={submitting || totalHours === 0} style={{ ...styles.button.primary, flex: 2, padding: '12px', justifyContent: 'center', opacity: totalHours === 0 ? 0.5 : 1 }}>
                            <span className="material-symbols-outlined" style={{ fontSize: '18px' }}>send</span>
                            {submitting ? 'Submitting…' : 'Submit for Approval'}
                        </button>
                    </div>
                )}
                {status === 'submitted' && (
                    <div style={{ marginTop: '16px', textAlign: 'center', fontSize: '13px', color: '#3B82F6', fontWeight: '600', background: '#EFF6FF', padding: '10px', borderRadius: tokens.radius.md }}>
                        ⏳ Submitted — awaiting manager review.
                    </div>
                )}
                {status === 'approved' && (
                    <div style={{ marginTop: '16px', textAlign: 'center', fontSize: '13px', color: '#059669', fontWeight: '600', background: '#ECFDF5', padding: '10px', borderRadius: tokens.radius.md }}>
                        ✅ Approved by admin.
                    </div>
                )}
                {status === 'rejected' && (
                    <div style={{ marginTop: '16px', textAlign: 'center', fontSize: '13px', color: '#DC2626', fontWeight: '600', background: '#FEF2F2', padding: '10px', borderRadius: tokens.radius.md }}>
                        ❌ Rejected — please revise and resubmit.
                    </div>
                )}
            </div>
        </div>
    );
};

/* ─── Admin Timesheet Viewer ─── */
export const AdminTimesheets = () => {
    const [timesheets, setTimesheets] = useState([]);
    const [selected, setSelected] = useState(null);
    const [filter, setFilter] = useState('submitted');
    const [actioning, setActioning] = useState(false);

    useEffect(() => {
        const unsub = onSnapshot(collection(db, 'timesheets'), s => {
            setTimesheets(s.docs.map(d => ({ id: d.id, ...d.data() })).sort((a, b) => (b.submittedAt || '') > (a.submittedAt || '') ? 1 : -1));
        });
        return unsub;
    }, []);

    const take = async (id, newStatus) => {
        setActioning(true);
        await updateDoc(doc(db, 'timesheets', id), { status: newStatus, reviewedAt: new Date().toISOString() });
        setActioning(false);
        setSelected(null);
    };

    const statusColor = { draft: '#D97706', submitted: '#3B82F6', approved: '#059669', rejected: '#DC2626' };
    const filtered = timesheets.filter(t => filter === 'all' || t.status === filter);

    if (selected) {
        const week = Object.keys(selected.entries || {}).sort();
        const totalHours = Object.values(selected.entries || {}).reduce((s, e) => s + (parseFloat(e.hours) || 0), 0);
        return (
            <div className="animate-fade">
                <div style={{ display: 'flex', alignItems: 'center', gap: '16px', marginBottom: '28px' }}>
                    <button onClick={() => setSelected(null)} style={{ ...styles.button.outline, padding: '8px', borderRadius: '50%', width: '40px', height: '40px', justifyContent: 'center' }}>
                        <span className="material-symbols-outlined" style={{ fontSize: '20px' }}>arrow_back</span>
                    </button>
                    <div>
                        <h3 style={{ fontSize: '20px', fontWeight: '800', color: tokens.colors.primary }}>{selected.userName}'s Timesheet</h3>
                        <p style={{ fontSize: '13px', color: tokens.colors.secondary }}>{selected.weekStart} → {selected.weekEnd} · {totalHours.toFixed(1)}h total</p>
                    </div>
                    <span style={{ marginLeft: 'auto', padding: '4px 14px', borderRadius: '999px', fontSize: '12px', fontWeight: '700', background: `${statusColor[selected.status]}20`, color: statusColor[selected.status] }}>{selected.status}</span>
                </div>
                <div style={styles.card}>
                    <table style={{ width: '100%', borderCollapse: 'collapse' }}>
                        <thead><tr>
                            <th style={styles.th}>Date</th>
                            <th style={styles.th}>Hours</th>
                            <th style={styles.th}>Notes</th>
                        </tr></thead>
                        <tbody>
                            {week.map(k => (
                                <tr key={k}>
                                    <td style={{ ...styles.td, fontWeight: '600' }}>{new Date(k + 'T00:00:00').toLocaleDateString('en-IN', { weekday: 'short', day: 'numeric', month: 'short' })}</td>
                                    <td style={{ ...styles.td, fontWeight: '800', color: tokens.colors.accent }}>{selected.entries[k]?.hours || 0}h</td>
                                    <td style={{ ...styles.td, color: tokens.colors.secondary, fontSize: '13px' }}>{selected.entries[k]?.notes || '—'}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                    {selected.status === 'submitted' && (
                        <div style={{ display: 'flex', gap: '12px', marginTop: '20px' }}>
                            <button onClick={() => take(selected.id, 'rejected')} disabled={actioning} style={{ ...styles.button.outline, flex: 1, justifyContent: 'center', color: '#DC2626', borderColor: '#FCA5A5', padding: '12px' }}>Reject</button>
                            <button onClick={() => take(selected.id, 'approved')} disabled={actioning} style={{ ...styles.button.primary, flex: 2, justifyContent: 'center', padding: '12px' }}>Approve</button>
                        </div>
                    )}
                </div>
            </div>
        );
    }

    return (
        <div className="animate-fade">
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '28px' }}>
                <div>
                    <h2 style={{ fontSize: '24px', fontWeight: '800', color: tokens.colors.primary }}>Timesheet Review</h2>
                    <p style={{ color: tokens.colors.secondary, fontSize: '14px' }}>Review and approve employee weekly timesheets.</p>
                </div>
                <select style={{ ...styles.input, width: '160px' }} value={filter} onChange={e => setFilter(e.target.value)}>
                    <option value="all">All</option>
                    <option value="submitted">Pending</option>
                    <option value="approved">Approved</option>
                    <option value="rejected">Rejected</option>
                    <option value="draft">Drafts</option>
                </select>
            </div>
            <div style={styles.card}>
                <table style={{ width: '100%', borderCollapse: 'collapse' }}>
                    <thead><tr>
                        <th style={styles.th}>Employee</th>
                        <th style={styles.th}>Week</th>
                        <th style={styles.th}>Hours</th>
                        <th style={styles.th}>Status</th>
                        <th style={{ ...styles.th, textAlign: 'right' }}>Action</th>
                    </tr></thead>
                    <tbody>
                        {filtered.map(t => {
                            const hrs = Object.values(t.entries || {}).reduce((s, e) => s + (parseFloat(e.hours) || 0), 0);
                            return (
                                <tr key={t.id}>
                                    <td style={{ ...styles.td, fontWeight: '600' }}>{t.userName}</td>
                                    <td style={{ ...styles.td, fontSize: '13px', color: tokens.colors.secondary }}>{t.weekStart} – {t.weekEnd}</td>
                                    <td style={{ ...styles.td, fontWeight: '700' }}>{hrs.toFixed(1)}h</td>
                                    <td style={styles.td}>
                                        <span style={{ padding: '3px 10px', borderRadius: '999px', fontSize: '11px', fontWeight: '700', background: `${statusColor[t.status]}18`, color: statusColor[t.status] }}>{t.status}</span>
                                    </td>
                                    <td style={{ ...styles.td, textAlign: 'right' }}>
                                        <button onClick={() => setSelected(t)} style={{ ...styles.button.outline, padding: '6px 14px', fontSize: '13px' }}>View</button>
                                    </td>
                                </tr>
                            );
                        })}
                        {filtered.length === 0 && <tr><td colSpan="5" style={{ textAlign: 'center', padding: '40px', color: tokens.colors.secondary }}>No timesheets found.</td></tr>}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default EmployeeTimesheet;
