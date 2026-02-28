import React, { useState, useEffect } from 'react';
import { db } from '../../firebase';
import { collection, onSnapshot, query, where, doc, addDoc, deleteDoc, updateDoc } from 'firebase/firestore';
import { styles, tokens } from '../../styles';
import { calcSalary, formatINR, formatLPA } from '../../utils/salaryCalc';

const EmployeeInsight = ({ employee, onBack, isAdmin }) => {
    const [attendance, setAttendance] = useState([]);
    const [leaves, setLeaves] = useState([]);
    const [documents, setDocuments] = useState([]);
    const [showAddDoc, setShowAddDoc] = useState(false);
    const [newDoc, setNewDoc] = useState({ name: '', url: '', size: '' });
    const [savingDoc, setSavingDoc] = useState(false);
    const [editingComp, setEditingComp] = useState(false);
    const [compForm, setCompForm] = useState({
        ctcAnnual: employee.ctcAnnual || '',
        isMetro: employee.isMetro !== false,
        tdsMonthly: employee.tdsMonthly || '0',
    });
    const [savingComp, setSavingComp] = useState(false);

    useEffect(() => {
        let isMounted = true;
        const qAtt = query(collection(db, 'attendance'), where('userEmail', '==', employee.email));
        const unsubAtt = onSnapshot(qAtt, s => {
            if (!isMounted) return;
            setAttendance(s.docs.map(d => ({ id: d.id, ...d.data() })).sort((a, b) => (b.timestamp?.seconds || 0) - (a.timestamp?.seconds || 0)));
        }, err => { if (!isMounted) return; console.error(err); });
        const qLea = query(collection(db, 'leaveRequests'), where('userEmail', '==', employee.email));
        const unsubLea = onSnapshot(qLea, s => {
            if (!isMounted) return;
            setLeaves(s.docs.map(d => ({ id: d.id, ...d.data() })));
        }, err => { if (!isMounted) return; console.error(err); });
        const unsubDocs = onSnapshot(collection(db, 'employees', employee.id, 'documents'), s => {
            if (!isMounted) return;
            setDocuments(s.docs.map(d => ({ id: d.id, ...d.data() })));
        }, err => { if (!isMounted) return; console.error(err); });
        return () => { isMounted = false; unsubAtt(); unsubLea(); unsubDocs(); };
    }, [employee.email, employee.id]);

    const salary = calcSalary({ ctcAnnual: compForm.ctcAnnual, isMetro: compForm.isMetro, tdsMonthly: compForm.tdsMonthly });
    const approvedLeaves = leaves.filter(l => l.status === 'approved').length;
    const initials = employee.name?.split(' ').map(n => n[0]).join('').slice(0, 2).toUpperCase() || '?';

    const calculateAttendanceStats = () => {
        const daily = {};
        attendance.forEach(a => {
            if (!daily[a.date]) daily[a.date] = {};
            daily[a.date][a.type] = a.timestamp?.toDate();
        });
        let totalHours = 0, counts = 0;
        Object.values(daily).forEach(day => {
            if (day.in && day.out) { totalHours += (day.out - day.in) / 3600000; counts++; }
        });
        return { avg: counts > 0 ? (totalHours / counts).toFixed(1) : 0 };
    };
    const attStats = calculateAttendanceStats();

    const nextPayout = () => {
        const d = new Date(); d.setMonth(d.getMonth() + 1, 1);
        return d.toLocaleDateString('en-IN', { month: 'short', day: 'numeric', year: 'numeric' });
    };

    const handleSaveComp = async () => {
        setSavingComp(true);
        try {
            await updateDoc(doc(db, 'employees', employee.id), {
                ctcAnnual: compForm.ctcAnnual,
                isMetro: compForm.isMetro,
                tdsMonthly: compForm.tdsMonthly,
            });
            setEditingComp(false);
        } catch (e) { console.error(e); }
        setSavingComp(false);
    };

    const handleAddDocument = async () => {
        if (!newDoc.name.trim()) return;
        setSavingDoc(true);
        try {
            await addDoc(collection(db, 'employees', employee.id, 'documents'), {
                name: newDoc.name.trim(), url: newDoc.url.trim(),
                size: newDoc.size.trim() || '—', uploadedAt: new Date().toISOString(),
            });
            setNewDoc({ name: '', url: '', size: '' });
            setShowAddDoc(false);
        } catch (e) { console.error(e); }
        setSavingDoc(false);
    };

    const handleDeleteDocument = async (docId) => {
        if (!window.confirm('Remove this document?')) return;
        try { await deleteDoc(doc(db, 'employees', employee.id, 'documents', docId)); } catch (e) { console.error(e); }
    };

    const statCards = [
        { label: 'Avg. Daily Hours', value: `${attStats.avg}h`, sub: 'Target: 8.0h', subColor: tokens.colors.accent, icon: 'schedule', color: '#3B82F6', bg: '#EFF6FF' },
        { label: 'Punctuality Score', value: '98%', sub: 'Elite Performance', subColor: '#059669', icon: 'emoji_events', color: '#059669', bg: '#ECFDF5' },
        { label: 'CTC Per Annum', value: compForm.ctcAnnual ? formatLPA(compForm.ctcAnnual) : '—', sub: compForm.ctcAnnual ? `${formatINR(salary.netInHand)}/mo in-hand` : 'Not configured', subColor: '#8B5CF6', icon: 'payments', color: '#8B5CF6', bg: '#F5F3FF' },
        { label: 'Leave Utilization', value: String(approvedLeaves), sub: 'Days approved this year', subColor: '#D97706', icon: 'beach_access', color: '#F97316', bg: '#FFF7ED' },
    ];

    return (
        <div className="animate-fade">
            {/* ── Hero Header ── */}
            <div style={{ background: 'linear-gradient(135deg, #0F172A 0%, #1E293B 60%, #134E4A 100%)', borderRadius: tokens.radius.xl, padding: '32px 36px', marginBottom: '28px', display: 'flex', alignItems: 'center', gap: '24px', position: 'relative', overflow: 'hidden' }}>
                <div style={{ position: 'absolute', top: '-40px', right: '80px', width: '200px', height: '200px', borderRadius: '50%', background: 'rgba(13,148,136,0.08)' }} />
                <div style={{ position: 'absolute', bottom: '-30px', right: '-20px', width: '160px', height: '160px', borderRadius: '50%', background: 'rgba(13,148,136,0.05)' }} />
                <button onClick={onBack} style={{ background: 'rgba(255,255,255,0.1)', border: '1px solid rgba(255,255,255,0.15)', borderRadius: '50%', width: '40px', height: '40px', cursor: 'pointer', flexShrink: 0, display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#fff' }}>
                    <span className="material-symbols-outlined" style={{ fontSize: '20px' }}>arrow_back</span>
                </button>
                <div style={{ width: '72px', height: '72px', borderRadius: '20px', flexShrink: 0, background: 'linear-gradient(135deg, #0D9488 0%, #0F766E 100%)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '26px', fontWeight: '800', color: '#CCFBF1' }}>
                    {initials}
                </div>
                <div style={{ flex: 1, minWidth: 0 }}>
                    <div style={{ fontSize: '24px', fontWeight: '800', color: '#fff', letterSpacing: '-0.02em', marginBottom: '6px' }}>{employee.name}</div>
                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
                        <span style={{ fontSize: '13px', background: 'rgba(255,255,255,0.1)', color: 'rgba(255,255,255,0.75)', padding: '4px 12px', borderRadius: '999px', fontWeight: '600' }}>{employee.role}</span>
                        <span style={{ color: 'rgba(255,255,255,0.3)' }}>·</span>
                        <span style={{ fontSize: '13px', background: 'rgba(13,148,136,0.2)', color: '#5EEAD4', padding: '4px 12px', borderRadius: '999px', fontWeight: '600' }}>{employee.dept}</span>
                        <span style={{ fontSize: '13px', background: employee.profileComplete ? 'rgba(16,185,129,0.15)' : 'rgba(239,68,68,0.15)', color: employee.profileComplete ? '#34D399' : '#F87171', padding: '4px 12px', borderRadius: '999px', fontWeight: '600' }}>
                            {employee.profileComplete ? '● Active' : '○ Pending Setup'}
                        </span>
                    </div>
                    {employee.email && <div style={{ marginTop: '8px', fontSize: '13px', color: 'rgba(255,255,255,0.45)', display: 'flex', alignItems: 'center', gap: '6px' }}><span className="material-symbols-outlined" style={{ fontSize: '14px' }}>mail</span>{employee.email}</div>}
                </div>
                <div style={{ textAlign: 'right', flexShrink: 0 }}>
                    <div style={{ fontSize: '11px', color: 'rgba(255,255,255,0.4)', fontWeight: '700', textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: '4px' }}>Emp ID</div>
                    <div style={{ fontSize: '14px', fontWeight: '800', color: 'rgba(255,255,255,0.7)', fontFamily: 'monospace' }}>{employee.id?.slice(0, 8).toUpperCase()}</div>
                </div>
            </div>

            {/* ── Stat Cards ── */}
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '16px', marginBottom: '28px' }}>
                {statCards.map((s, i) => (
                    <div key={i} style={{ ...styles.card, padding: '20px 24px', borderLeft: `3px solid ${s.color}` }}>
                        <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', marginBottom: '12px' }}>
                            <div style={{ fontSize: '12px', fontWeight: '700', color: tokens.colors.secondary, textTransform: 'uppercase', letterSpacing: '0.06em' }}>{s.label}</div>
                            <div style={{ width: '32px', height: '32px', borderRadius: '10px', background: s.bg, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                                <span className="material-symbols-outlined" style={{ fontSize: '16px', color: s.color }}>{s.icon}</span>
                            </div>
                        </div>
                        <div style={{ fontSize: '26px', fontWeight: '800', color: tokens.colors.primary, letterSpacing: '-0.02em', marginBottom: '8px' }}>{s.value}</div>
                        <div style={{ fontSize: '12px', fontWeight: '600', color: s.subColor }}>{s.sub}</div>
                    </div>
                ))}
            </div>

            {/* ── Bottom Grid ── */}
            <div style={{ display: 'grid', gridTemplateColumns: '1.5fr 1fr', gap: '24px' }}>
                {/* Timesheet */}
                <div style={styles.card}>
                    <h3 style={{ fontSize: '16px', fontWeight: '800', color: tokens.colors.primary, marginBottom: '20px', display: 'flex', alignItems: 'center', gap: '8px' }}>
                        <span className="material-symbols-outlined" style={{ fontSize: '18px', color: tokens.colors.accent }}>receipt_long</span>
                        Recent Timesheet Activity
                    </h3>
                    <table style={{ width: '100%', borderCollapse: 'collapse' }}>
                        <thead><tr>
                            <th style={styles.th}>Date</th>
                            <th style={styles.th}>Event</th>
                            <th style={styles.th}>Time</th>
                            <th style={{ ...styles.th, textAlign: 'right' }}>Status</th>
                        </tr></thead>
                        <tbody>
                            {attendance.slice(0, 8).map(log => (
                                <tr key={log.id}>
                                    <td style={{ ...styles.td, fontSize: '13px', color: tokens.colors.secondary }}>{log.date || '—'}</td>
                                    <td style={styles.td}>
                                        <div style={{ display: 'inline-flex', alignItems: 'center', gap: '6px' }}>
                                            <span style={{ width: '8px', height: '8px', borderRadius: '50%', background: log.type === 'in' ? '#10B981' : '#EF4444' }} />
                                            <span style={{ fontSize: '12px', fontWeight: '800', letterSpacing: '0.04em', color: log.type === 'in' ? '#059669' : '#DC2626' }}>{log.type === 'in' ? 'CLOCK IN' : 'CLOCK OUT'}</span>
                                        </div>
                                    </td>
                                    <td style={{ ...styles.td, fontWeight: '600' }}>{log.timeString || '—'}</td>
                                    <td style={{ ...styles.td, textAlign: 'right' }}>
                                        <span style={{ fontSize: '11px', fontWeight: '700', background: '#ECFDF5', color: '#059669', padding: '3px 10px', borderRadius: '999px' }}>Verified</span>
                                    </td>
                                </tr>
                            ))}
                            {attendance.length === 0 && <tr><td colSpan="4" style={{ textAlign: 'center', padding: '40px', color: tokens.colors.secondary }}>No attendance logs found.</td></tr>}
                        </tbody>
                    </table>
                </div>

                {/* Right Column */}
                <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>

                    {/* Compensation (admin editable) */}
                    <div style={styles.card}>
                        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '16px' }}>
                            <h3 style={{ fontSize: '16px', fontWeight: '800', color: tokens.colors.primary, display: 'flex', alignItems: 'center', gap: '8px' }}>
                                <span className="material-symbols-outlined" style={{ fontSize: '18px', color: '#8B5CF6' }}>payments</span>
                                Compensation
                            </h3>
                            {isAdmin && !editingComp && (
                                <button onClick={() => setEditingComp(true)} style={{ ...styles.button.outline, padding: '5px 12px', fontSize: '12px' }}>
                                    <span className="material-symbols-outlined" style={{ fontSize: '14px' }}>edit</span> Edit
                                </button>
                            )}
                        </div>

                        {editingComp ? (
                            <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                                <div>
                                    <label style={{ fontSize: '11px', fontWeight: '700', color: tokens.colors.secondary, display: 'block', marginBottom: '5px', textTransform: 'uppercase' }}>CTC Per Annum (₹)</label>
                                    <div style={{ position: 'relative' }}>
                                        <span style={{ position: 'absolute', left: '12px', top: '50%', transform: 'translateY(-50%)', fontWeight: '700', color: tokens.colors.secondary }}>₹</span>
                                        <input type="number" min="0" style={{ ...styles.input, paddingLeft: '26px' }} value={compForm.ctcAnnual} onChange={e => setCompForm({ ...compForm, ctcAnnual: e.target.value })} placeholder="e.g. 600000" />
                                    </div>
                                    {compForm.ctcAnnual > 0 && <div style={{ fontSize: '12px', color: tokens.colors.accent, marginTop: '3px', fontWeight: '600' }}>{formatLPA(compForm.ctcAnnual)} p.a.</div>}
                                </div>
                                <div>
                                    <label style={{ fontSize: '11px', fontWeight: '700', color: tokens.colors.secondary, display: 'block', marginBottom: '5px', textTransform: 'uppercase' }}>City Type</label>
                                    <div style={{ display: 'flex', gap: '8px' }}>
                                        {['Metro', 'Non-Metro'].map(c => (
                                            <button key={c} type="button" onClick={() => setCompForm({ ...compForm, isMetro: c === 'Metro' })}
                                                style={{ flex: 1, padding: '8px', borderRadius: tokens.radius.md, fontSize: '12px', fontWeight: '700', cursor: 'pointer', border: `1.5px solid ${(compForm.isMetro ? 'Metro' : 'Non-Metro') === c ? tokens.colors.accent : tokens.colors.border}`, background: (compForm.isMetro ? 'Metro' : 'Non-Metro') === c ? '#F0FDFA' : '#fff', color: (compForm.isMetro ? 'Metro' : 'Non-Metro') === c ? tokens.colors.accent : tokens.colors.secondary }}
                                            >{c}</button>
                                        ))}
                                    </div>
                                </div>
                                <div>
                                    <label style={{ fontSize: '11px', fontWeight: '700', color: tokens.colors.secondary, display: 'block', marginBottom: '5px', textTransform: 'uppercase' }}>Monthly TDS (₹)</label>
                                    <input type="number" min="0" style={styles.input} value={compForm.tdsMonthly} onChange={e => setCompForm({ ...compForm, tdsMonthly: e.target.value })} placeholder="0" />
                                </div>
                                <div style={{ display: 'flex', gap: '8px' }}>
                                    <button onClick={() => { setEditingComp(false); setCompForm({ ctcAnnual: employee.ctcAnnual || '', isMetro: employee.isMetro !== false, tdsMonthly: employee.tdsMonthly || '0' }); }} style={{ ...styles.button.outline, flex: 1, justifyContent: 'center' }}>Cancel</button>
                                    <button onClick={handleSaveComp} disabled={savingComp} style={{ ...styles.button.primary, flex: 2, justifyContent: 'center' }}>{savingComp ? 'Saving…' : 'Save'}</button>
                                </div>
                            </div>
                        ) : compForm.ctcAnnual ? (
                            <div>
                                <div style={{ marginBottom: '12px' }}>
                                    <div style={{ fontSize: '11px', color: tokens.colors.secondary, fontWeight: '600', marginBottom: '2px' }}>CTC</div>
                                    <div style={{ fontSize: '20px', fontWeight: '800', color: tokens.colors.primary }}>{formatLPA(compForm.ctcAnnual)} p.a.</div>
                                </div>
                                {/* Salary breakdown table */}
                                <div style={{ fontSize: '12px' }}>
                                    <div style={{ fontWeight: '700', color: '#059669', marginBottom: '6px', textTransform: 'uppercase', letterSpacing: '0.05em', fontSize: '10px' }}>Earnings</div>
                                    {[
                                        { l: 'Basic', v: salary.basic },
                                        { l: 'HRA', v: salary.hra },
                                        { l: 'Special Allowance', v: salary.specialAllow },
                                    ].map(r => (
                                        <div key={r.l} style={{ display: 'flex', justifyContent: 'space-between', padding: '4px 0', borderBottom: `1px solid ${tokens.colors.border}` }}>
                                            <span style={{ color: tokens.colors.secondary }}>{r.l}</span>
                                            <span style={{ fontWeight: '700' }}>{formatINR(r.v)}</span>
                                        </div>
                                    ))}
                                    <div style={{ display: 'flex', justifyContent: 'space-between', padding: '6px 0', fontWeight: '800', fontSize: '13px' }}>
                                        <span>Gross</span><span style={{ color: tokens.colors.accent }}>{formatINR(salary.gross)}</span>
                                    </div>
                                    <div style={{ fontWeight: '700', color: '#DC2626', marginTop: '8px', marginBottom: '6px', textTransform: 'uppercase', letterSpacing: '0.05em', fontSize: '10px' }}>Deductions</div>
                                    {[
                                        { l: 'Employee PF (12%)', v: salary.employeePF },
                                        { l: 'Professional Tax', v: salary.profTax },
                                        { l: 'TDS', v: salary.tds },
                                    ].map(r => (
                                        <div key={r.l} style={{ display: 'flex', justifyContent: 'space-between', padding: '4px 0', borderBottom: `1px solid ${tokens.colors.border}` }}>
                                            <span style={{ color: tokens.colors.secondary }}>{r.l}</span>
                                            <span style={{ fontWeight: '700', color: '#DC2626' }}>{formatINR(r.v)}</span>
                                        </div>
                                    ))}
                                    <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '10px', padding: '10px 12px', background: 'linear-gradient(135deg, #F0FDFA, #ECFDF5)', borderRadius: '8px', fontWeight: '800', fontSize: '14px' }}>
                                        <span>Net In-Hand</span><span style={{ color: '#059669' }}>{formatINR(salary.netInHand)}</span>
                                    </div>
                                    <div style={{ marginTop: '8px', fontSize: '11px', background: '#F5F3FF', color: '#7C3AED', padding: '6px 10px', borderRadius: '8px', fontWeight: '600' }}>
                                        Next Payout: {nextPayout()} · {compForm.isMetro ? 'Metro' : 'Non-Metro'}
                                    </div>
                                </div>
                            </div>
                        ) : (
                            <div style={{ textAlign: 'center', padding: '20px', color: tokens.colors.secondary, fontSize: '13px' }}>
                                <span className="material-symbols-outlined" style={{ display: 'block', fontSize: '32px', color: '#CBD5E1', marginBottom: '8px' }}>payments</span>
                                {isAdmin ? 'Click Edit to set CTC.' : 'Compensation details not configured.'}
                            </div>
                        )}
                    </div>

                    {/* Leave Summary */}
                    <div style={styles.card}>
                        <h3 style={{ fontSize: '16px', fontWeight: '800', color: tokens.colors.primary, marginBottom: '16px', display: 'flex', alignItems: 'center', gap: '8px' }}>
                            <span className="material-symbols-outlined" style={{ fontSize: '18px', color: '#F97316' }}>event_available</span>
                            Leave Summary
                        </h3>
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                            {[
                                { label: 'Pending', count: leaves.filter(l => l.status === 'pending').length, color: '#D97706', bg: '#FFFBEB' },
                                { label: 'Approved', count: leaves.filter(l => l.status === 'approved').length, color: '#059669', bg: '#ECFDF5' },
                                { label: 'Rejected', count: leaves.filter(l => l.status === 'rejected').length, color: '#DC2626', bg: '#FEF2F2' },
                            ].map(row => (
                                <div key={row.label} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '10px 14px', borderRadius: '10px', background: row.bg }}>
                                    <span style={{ fontSize: '13px', fontWeight: '600', color: row.color }}>{row.label}</span>
                                    <span style={{ fontSize: '18px', fontWeight: '800', color: row.color }}>{row.count}</span>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Documents */}
                    <div style={styles.card}>
                        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '16px' }}>
                            <h3 style={{ fontSize: '16px', fontWeight: '800', color: tokens.colors.primary, display: 'flex', alignItems: 'center', gap: '8px' }}>
                                <span className="material-symbols-outlined" style={{ fontSize: '18px', color: '#6366F1' }}>folder_shared</span>
                                Documents
                            </h3>
                            {isAdmin && (
                                <button onClick={() => setShowAddDoc(o => !o)} style={{ ...styles.button.primary, padding: '6px 14px', fontSize: '12px' }}>
                                    <span className="material-symbols-outlined" style={{ fontSize: '14px' }}>{showAddDoc ? 'close' : 'upload_file'}</span>
                                    {showAddDoc ? 'Cancel' : 'Add'}
                                </button>
                            )}
                        </div>
                        {isAdmin && showAddDoc && (
                            <div style={{ marginBottom: '16px', padding: '14px', background: '#F8FAFC', borderRadius: '10px', border: `1px solid ${tokens.colors.border}` }}>
                                <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                                    <div><label style={{ fontSize: '11px', fontWeight: '700', color: tokens.colors.secondary, display: 'block', marginBottom: '4px', textTransform: 'uppercase' }}>Document Name *</label><input style={styles.input} value={newDoc.name} onChange={e => setNewDoc({ ...newDoc, name: e.target.value })} placeholder="e.g. Offer Letter.pdf" /></div>
                                    <div><label style={{ fontSize: '11px', fontWeight: '700', color: tokens.colors.secondary, display: 'block', marginBottom: '4px', textTransform: 'uppercase' }}>File URL (optional)</label><input style={styles.input} value={newDoc.url} onChange={e => setNewDoc({ ...newDoc, url: e.target.value })} placeholder="https://drive.google.com/..." /></div>
                                    <div><label style={{ fontSize: '11px', fontWeight: '700', color: tokens.colors.secondary, display: 'block', marginBottom: '4px', textTransform: 'uppercase' }}>Size (optional)</label><input style={styles.input} value={newDoc.size} onChange={e => setNewDoc({ ...newDoc, size: e.target.value })} placeholder="e.g. 1.2 MB" /></div>
                                    <button onClick={handleAddDocument} disabled={savingDoc || !newDoc.name.trim()} style={{ ...styles.button.primary, justifyContent: 'center', opacity: !newDoc.name.trim() ? 0.5 : 1 }}>{savingDoc ? 'Saving…' : 'Save Document'}</button>
                                </div>
                            </div>
                        )}
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                            {documents.map(d => (
                                <div key={d.id} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '12px 14px', borderRadius: '10px', border: `1px solid ${tokens.colors.border}`, background: '#FAFBFC' }}>
                                    <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                                        <div style={{ width: '34px', height: '34px', borderRadius: '10px', background: '#EEF2FF', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                                            <span className="material-symbols-outlined" style={{ fontSize: '16px', color: '#6366F1' }}>description</span>
                                        </div>
                                        <div>
                                            <div style={{ fontSize: '13px', fontWeight: '700', color: tokens.colors.primary }}>{d.name}</div>
                                            <div style={{ fontSize: '11px', color: tokens.colors.secondary }}>{d.size}</div>
                                        </div>
                                    </div>
                                    <div style={{ display: 'flex', gap: '4px' }}>
                                        {d.url && <a href={d.url} target="_blank" rel="noopener noreferrer" style={{ border: 'none', background: 'none', cursor: 'pointer', padding: '6px', borderRadius: '8px', color: tokens.colors.secondary, display: 'flex' }}><span className="material-symbols-outlined" style={{ fontSize: '18px' }}>download</span></a>}
                                        {isAdmin && <button onClick={() => handleDeleteDocument(d.id)} style={{ border: 'none', background: 'none', cursor: 'pointer', padding: '6px', borderRadius: '8px', color: '#EF4444', display: 'flex' }}><span className="material-symbols-outlined" style={{ fontSize: '18px' }}>delete</span></button>}
                                    </div>
                                </div>
                            ))}
                            {documents.length === 0 && (
                                <div style={{ textAlign: 'center', padding: '24px', color: tokens.colors.secondary, fontSize: '13px' }}>
                                    <span className="material-symbols-outlined" style={{ display: 'block', fontSize: '28px', color: '#CBD5E1', marginBottom: '6px' }}>folder_open</span>
                                    {isAdmin ? 'Use "Add" to attach documents.' : 'No documents available.'}
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default EmployeeInsight;
