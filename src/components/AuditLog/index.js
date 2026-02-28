import React, { useState, useEffect } from 'react';
import { db } from '../../firebase';
import { collection, onSnapshot, query, orderBy, limit } from 'firebase/firestore';
import { styles, tokens } from '../../styles';

const ACTION_META = {
    LEAVE_APPROVED: { label: 'Leave Approved', icon: 'check_circle', color: '#059669', bg: '#ECFDF5' },
    LEAVE_REJECTED: { label: 'Leave Declined', icon: 'cancel', color: '#DC2626', bg: '#FEF2F2' },
    ATTENDANCE_CORRECTION: { label: 'Attendance Corrected', icon: 'edit_square', color: '#D97706', bg: '#FFFBEB' },
    BROADCAST_SENT: { label: 'Broadcast Sent', icon: 'campaign', color: '#3B82F6', bg: '#EFF6FF' },
    PAYROLL_RUN: { label: 'Payroll Processed', icon: 'payments', color: '#8B5CF6', bg: '#F5F3FF' },
    EMPLOYEE_CREATED: { label: 'Employee Added', icon: 'person_add', color: tokens?.colors?.accent || '#0D9488', bg: '#F0FDFA' },
    EMPLOYEE_UPDATED: { label: 'Employee Updated', icon: 'manage_accounts', color: tokens?.colors?.accent || '#0D9488', bg: '#F0FDFA' },
};

const AuditLog = () => {
    const [logs, setLogs] = useState([]);
    const [filter, setFilter] = useState('all');

    useEffect(() => {
        const unsub = onSnapshot(
            query(collection(db, 'auditLog'), orderBy('timestamp', 'desc'), limit(200)),
            s => setLogs(s.docs.map(d => ({ id: d.id, ...d.data() })))
        );
        return unsub;
    }, []);

    const filtered = filter === 'all' ? logs : logs.filter(l => l.action === filter);

    return (
        <div className="animate-fade">
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '28px' }}>
                <div>
                    <h2 style={{ fontSize: '24px', fontWeight: '800', color: tokens.colors.primary }}>Audit Log</h2>
                    <p style={{ color: tokens.colors.secondary, fontSize: '14px' }}>Complete history of all administrative actions — last 200 entries.</p>
                </div>
                <select style={{ ...styles.input, width: '200px' }} value={filter} onChange={e => setFilter(e.target.value)}>
                    <option value="all">All Actions</option>
                    {Object.keys(ACTION_META).map(k => <option key={k} value={k}>{ACTION_META[k].label}</option>)}
                </select>
            </div>

            <div style={styles.card}>
                {filtered.length === 0 ? (
                    <div style={{ textAlign: 'center', padding: '60px', color: tokens.colors.secondary }}>
                        <span className="material-symbols-outlined" style={{ fontSize: '48px', color: '#CBD5E1', display: 'block', marginBottom: '12px' }}>manage_search</span>
                        No audit entries yet. Actions will appear here as admins perform them.
                    </div>
                ) : (
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '0' }}>
                        {filtered.map((log, idx) => {
                            const meta = ACTION_META[log.action] || { label: log.action, icon: 'info', color: '#64748B', bg: '#F8FAFC' };
                            return (
                                <div key={log.id} style={{ display: 'flex', gap: '14px', padding: '16px 20px', borderBottom: idx < filtered.length - 1 ? `1px solid ${tokens.colors.border}` : 'none', alignItems: 'flex-start', transition: 'background 0.15s' }}
                                    onMouseOver={e => e.currentTarget.style.background = '#F8FAFC'}
                                    onMouseOut={e => e.currentTarget.style.background = 'transparent'}>
                                    <div style={{ width: '38px', height: '38px', borderRadius: '10px', background: meta.bg, display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                                        <span className="material-symbols-outlined" style={{ fontSize: '18px', color: meta.color }}>{meta.icon}</span>
                                    </div>
                                    <div style={{ flex: 1, minWidth: 0 }}>
                                        <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '4px' }}>
                                            <span style={{ fontSize: '13px', fontWeight: '800', color: tokens.colors.primary }}>{meta.label}</span>
                                            <span style={{ fontSize: '11px', background: `${meta.color}15`, color: meta.color, padding: '2px 8px', borderRadius: '999px', fontWeight: '700' }}>{log.action}</span>
                                        </div>
                                        <div style={{ fontSize: '12px', color: tokens.colors.secondary, lineHeight: '1.6' }}>
                                            {Object.entries(log.details || {}).map(([k, v]) => (
                                                <span key={k} style={{ marginRight: '12px' }}><strong>{k}:</strong> {String(v)}</span>
                                            ))}
                                        </div>
                                    </div>
                                    <div style={{ textAlign: 'right', flexShrink: 0 }}>
                                        <div style={{ fontSize: '12px', fontWeight: '700', color: tokens.colors.primary }}>{log.performedBy}</div>
                                        <div style={{ fontSize: '11px', color: tokens.colors.secondary, marginTop: '2px' }}>
                                            {log.timestamp ? new Date(log.timestamp).toLocaleString('en-IN', { dateStyle: 'medium', timeStyle: 'short' }) : '—'}
                                        </div>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                )}
            </div>
        </div>
    );
};

export default AuditLog;
