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
    EMPLOYEE_CREATED: { label: 'Employee Added', icon: 'person_add', color: '#0D9488', bg: '#F0FDFA' },
    EMPLOYEE_UPDATED: { label: 'Employee Updated', icon: 'manage_accounts', color: '#0D9488', bg: '#F0FDFA' },
    ROLE_CREATED: { label: 'Role Created', icon: 'admin_panel_settings', color: '#7C3AED', bg: '#F5F3FF' },
    ROLE_UPDATED: { label: 'Role Updated', icon: 'admin_panel_settings', color: '#7C3AED', bg: '#F5F3FF' },
    ROLE_DELETED: { label: 'Role Deleted', icon: 'delete', color: '#DC2626', bg: '#FEF2F2' },
    USER_ROLE_CHANGED: { label: 'User Role Changed', icon: 'swap_horiz', color: '#7C3AED', bg: '#F5F3FF' },
    DOCUMENT_CREATED: { label: 'Document Created', icon: 'note_add', color: '#2563EB', bg: '#EFF6FF' },
    DOCUMENT_UPDATED: { label: 'Document Updated', icon: 'edit_document', color: '#2563EB', bg: '#EFF6FF' },
    DOCUMENT_DELETED: { label: 'Document Deleted', icon: 'delete', color: '#DC2626', bg: '#FEF2F2' },
    DOCUMENT_ACKNOWLEDGED: { label: 'Document Acknowledged', icon: 'fact_check', color: '#059669', bg: '#ECFDF5' },
    GOAL_CREATED: { label: 'Goal Set', icon: 'flag', color: '#0D9488', bg: '#F0FDFA' },
    REVIEW_CREATED: { label: 'Review Created', icon: 'rate_review', color: '#D97706', bg: '#FFFBEB' },
    TRAINING_COURSE_CREATED: { label: 'Training Course Added', icon: 'school', color: '#DC2626', bg: '#FEF2F2' },
    TRAINING_ENROLLED: { label: 'Training Enrolled', icon: 'person_add', color: '#3B82F6', bg: '#EFF6FF' },
    ASSET_CREATED: { label: 'Asset Added', icon: 'inventory_2', color: '#3B82F6', bg: '#EFF6FF' },
    ASSET_ASSIGNED: { label: 'Asset Assigned', icon: 'assignment_ind', color: '#D97706', bg: '#FFFBEB' },
    ASSET_RETURNED: { label: 'Asset Returned', icon: 'undo', color: '#059669', bg: '#ECFDF5' },
    EXIT_INITIATED: { label: 'Exit Initiated', icon: 'person_off', color: '#DC2626', bg: '#FEF2F2' },
    EXIT_COMPLETED: { label: 'Exit Completed', icon: 'check_circle', color: '#059669', bg: '#ECFDF5' },
    DEPARTMENTS_CREATED: { label: 'Department Created', icon: 'business', color: '#0D9488', bg: '#F0FDFA' },
    DESIGNATIONS_CREATED: { label: 'Designation Created', icon: 'badge', color: '#0D9488', bg: '#F0FDFA' },
    DEPT_DESIG_SEEDED: { label: 'Org Structure Seeded', icon: 'database', color: '#7C3AED', bg: '#F5F3FF' },
};

const AuditLog = () => {
    const [logs, setLogs] = useState([]);
    const [filter, setFilter] = useState('all');
    const [searchTerm, setSearchTerm] = useState('');
    const [dateFrom, setDateFrom] = useState('');
    const [dateTo, setDateTo] = useState('');

    useEffect(() => {
        const unsub = onSnapshot(
            query(collection(db, 'auditLog'), orderBy('timestamp', 'desc'), limit(500)),
            s => setLogs(s.docs.map(d => ({ id: d.id, ...d.data() })))
        );
        return unsub;
    }, []);

    const filtered = logs.filter(l => {
        if (filter !== 'all' && l.action !== filter) return false;
        if (searchTerm) {
            const term = searchTerm.toLowerCase();
            const matchAction = (l.action || '').toLowerCase().includes(term);
            const matchUser = (l.performedBy || '').toLowerCase().includes(term);
            const matchDetails = JSON.stringify(l.details || {}).toLowerCase().includes(term);
            if (!matchAction && !matchUser && !matchDetails) return false;
        }
        if (dateFrom && l.timestamp && new Date(l.timestamp) < new Date(dateFrom)) return false;
        if (dateTo && l.timestamp && new Date(l.timestamp) > new Date(dateTo + 'T23:59:59')) return false;
        return true;
    });

    const exportCSV = () => {
        const headers = ['Timestamp', 'Action', 'Label', 'Performed By', 'Details'];
        const rows = filtered.map(l => {
            const meta = ACTION_META[l.action] || { label: l.action };
            return [
                l.timestamp ? new Date(l.timestamp).toISOString() : '',
                l.action || '',
                meta.label || '',
                l.performedBy || '',
                JSON.stringify(l.details || {}),
            ].map(v => `"${String(v).replace(/"/g, '""')}"`).join(',');
        });
        const csv = [headers.join(','), ...rows].join('\n');
        const blob = new Blob([csv], { type: 'text/csv' });
        const url = URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url; a.download = `audit_log_${new Date().toISOString().split('T')[0]}.csv`; a.click();
        URL.revokeObjectURL(url);
    };

    // Group unique actions for filter
    const uniqueActions = [...new Set(logs.map(l => l.action))].sort();

    return (
        <div className="animate-fade">
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '24px' }}>
                <div>
                    <h2 style={{ fontSize: '24px', fontWeight: '800', color: tokens.colors.primary }}>Audit Log</h2>
                    <p style={{ color: tokens.colors.secondary, fontSize: '14px' }}>ISO 27001 A.8.15 — Complete tamper-evident activity log ({filtered.length} of {logs.length} entries)</p>
                </div>
                <button onClick={exportCSV} style={{ ...styles.button.outline, padding: '10px 18px', fontSize: '13px', fontWeight: '700' }}>
                    <span className="material-symbols-outlined" style={{ fontSize: '18px' }}>download</span> Export CSV
                </button>
            </div>

            {/* Filters */}
            <div style={{ display: 'flex', gap: '12px', marginBottom: '20px', flexWrap: 'wrap', alignItems: 'center' }}>
                <div style={{ position: 'relative', flex: 1, maxWidth: '260px' }}>
                    <input style={{ ...styles.input, paddingLeft: '36px' }} placeholder="Search logs..." value={searchTerm} onChange={e => setSearchTerm(e.target.value)} />
                    <span className="material-symbols-outlined" style={{ position: 'absolute', left: '12px', top: '50%', transform: 'translateY(-50%)', fontSize: '16px', color: tokens.colors.secondary }}>search</span>
                </div>
                <select style={{ ...styles.input, width: '200px' }} value={filter} onChange={e => setFilter(e.target.value)}>
                    <option value="all">All Actions ({logs.length})</option>
                    {uniqueActions.map(k => {
                        const meta = ACTION_META[k] || { label: k };
                        const count = logs.filter(l => l.action === k).length;
                        return <option key={k} value={k}>{meta.label} ({count})</option>;
                    })}
                </select>
                <input style={{ ...styles.input, width: '150px' }} type="date" value={dateFrom} onChange={e => setDateFrom(e.target.value)} placeholder="From" />
                <input style={{ ...styles.input, width: '150px' }} type="date" value={dateTo} onChange={e => setDateTo(e.target.value)} placeholder="To" />
                {(searchTerm || filter !== 'all' || dateFrom || dateTo) && (
                    <button onClick={() => { setSearchTerm(''); setFilter('all'); setDateFrom(''); setDateTo(''); }}
                        style={{ ...styles.button.ghost, fontSize: '12px', fontWeight: '700', color: tokens.colors.error }}>Clear</button>
                )}
            </div>

            <div style={styles.card}>
                {filtered.length === 0 ? (
                    <div style={{ textAlign: 'center', padding: '60px', color: tokens.colors.secondary }}>
                        <span className="material-symbols-outlined" style={{ fontSize: '48px', color: '#CBD5E1', display: 'block', marginBottom: '12px' }}>manage_search</span>
                        {logs.length === 0 ? 'No audit entries yet. Actions will appear as admins perform them.' : 'No entries match your filters.'}
                    </div>
                ) : (
                    <div style={{ display: 'flex', flexDirection: 'column' }}>
                        {filtered.map((log, idx) => {
                            const meta = ACTION_META[log.action] || { label: log.action, icon: 'info', color: '#64748B', bg: '#F8FAFC' };
                            return (
                                <div key={log.id} style={{ display: 'flex', gap: '14px', padding: '14px 20px', borderBottom: idx < filtered.length - 1 ? `1px solid ${tokens.colors.border}` : 'none', alignItems: 'flex-start', transition: 'background 0.15s' }}
                                    onMouseOver={e => e.currentTarget.style.background = '#F8FAFC'}
                                    onMouseOut={e => e.currentTarget.style.background = 'transparent'}>
                                    <div style={{ width: '36px', height: '36px', borderRadius: '10px', background: meta.bg, display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                                        <span className="material-symbols-outlined" style={{ fontSize: '17px', color: meta.color }}>{meta.icon}</span>
                                    </div>
                                    <div style={{ flex: 1, minWidth: 0 }}>
                                        <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '3px' }}>
                                            <span style={{ fontSize: '13px', fontWeight: '700', color: tokens.colors.primary }}>{meta.label}</span>
                                            <span style={{ fontSize: '10px', background: `${meta.color}15`, color: meta.color, padding: '1px 7px', borderRadius: '999px', fontWeight: '700', fontFamily: 'monospace' }}>{log.action}</span>
                                        </div>
                                        <div style={{ fontSize: '12px', color: tokens.colors.secondary, lineHeight: '1.5' }}>
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
