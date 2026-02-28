import React, { useState, useEffect } from 'react';
import { db } from '../../firebase';
import { collection, onSnapshot, query, where, orderBy } from 'firebase/firestore';
import { styles, tokens } from '../../styles';

const EmployeeInsight = ({ employee, onBack }) => {
    const [attendance, setAttendance] = useState([]);
    const [leaves, setLeaves] = useState([]);

    useEffect(() => {
        // Fetch individual attendance
        const qAtt = query(
            collection(db, 'attendance'),
            where('userEmail', '==', employee.email),
            orderBy('timestamp', 'desc')
        );
        const unsubAtt = onSnapshot(qAtt, s => {
            setAttendance(s.docs.map(d => ({ id: d.id, ...d.data() })));
        });

        const qLea = query(
            collection(db, 'leaveRequests'),
            where('userEmail', '==', employee.email)
        );
        const unsubLea = onSnapshot(qLea, s => {
            setLeaves(s.docs.map(d => ({ id: d.id, ...d.data() })));
        });

        return () => { unsubAtt(); unsubLea(); };
    }, [employee.email]);

    // Calculate Avg Working Hours
    const calculateStats = () => {
        if (attendance.length === 0) return { avg: 0, total: 0, punctuality: 0 };

        // Simplistic calculation for demo: diff between in and out
        let totalHours = 0;
        let counts = 0;

        // Group by date
        const daily = {};
        attendance.forEach(a => {
            if (!daily[a.date]) daily[a.date] = {};
            daily[a.date][a.type] = a.timestamp?.toDate();
        });

        Object.values(daily).forEach(day => {
            if (day.in && day.out) {
                const diff = (day.out - day.in) / (1000 * 60 * 60);
                totalHours += diff;
                counts++;
            }
        });

        const avg = counts > 0 ? (totalHours / counts).toFixed(1) : 0;
        return { avg, total: totalHours.toFixed(1), punctuality: 98 }; // Mock punctuality
    };

    const stats = calculateStats();

    return (
        <div className="animate-fade">
            <div style={{ display: 'flex', alignItems: 'center', gap: '16px', marginBottom: '32px' }}>
                <button
                    onClick={onBack}
                    style={{ ...styles.button.outline, padding: '8px', borderRadius: '50%', width: '40px', height: '40px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}
                >
                    <span className="material-symbols-outlined">arrow_back</span>
                </button>
                <div>
                    <h2 style={{ fontSize: '28px', fontWeight: '800' }}>{employee.name}'s Insight</h2>
                    <p style={{ color: tokens.colors.textMuted }}>{employee.role} • {employee.dept}</p>
                </div>
            </div>

            <div style={styles.statsGrid}>
                <div style={styles.statCard}>
                    <div style={styles.statLabel}>Avg. Daily Hours</div>
                    <div style={styles.statValue}>{stats.avg}h</div>
                    <div style={styles.badge('success')}>Target: 8.0h</div>
                </div>
                <div style={styles.statCard}>
                    <div style={styles.statLabel}>Punctuality Score</div>
                    <div style={styles.statValue}>{stats.punctuality}%</div>
                    <div style={styles.badge('primary')}>Elite Performance</div>
                </div>
                <div style={styles.statCard}>
                    <div style={styles.statLabel}>Monthly Salary</div>
                    <div style={styles.statValue}>${employee.salary || '4,500'}</div>
                    <div style={{ fontSize: '12px', color: tokens.colors.textMuted }}>Next Payout: Mar 1, 2026</div>
                </div>
                <div style={styles.statCard}>
                    <div style={styles.statLabel}>Leave Utilization</div>
                    <div style={styles.statValue}>{leaves.filter(l => l.status === 'approved').length}</div>
                    <div style={styles.badge('warning')}>Used this year</div>
                </div>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: '1.5fr 1fr', gap: '32px' }}>
                <div style={styles.card}>
                    <h3 style={{ fontSize: '20px', fontWeight: '800', marginBottom: '24px' }}>Recent Timesheet Activity</h3>
                    <table style={{ width: '100%', borderCollapse: 'collapse' }}>
                        <thead>
                            <tr>
                                <th style={styles.th}>Date</th>
                                <th style={styles.th}>Event</th>
                                <th style={styles.th}>Time</th>
                                <th style={{ ...styles.th, textAlign: 'right' }}>Status</th>
                            </tr>
                        </thead>
                        <tbody>
                            {attendance.map(log => (
                                <tr key={log.id}>
                                    <td style={styles.td}>{log.date}</td>
                                    <td style={styles.td}>
                                        <span style={{ fontWeight: '700', color: log.type === 'in' ? tokens.colors.success : tokens.colors.error }}>
                                            {log.type === 'in' ? 'CLOCK IN' : 'CLOCK OUT'}
                                        </span>
                                    </td>
                                    <td style={styles.td}>{log.timeString || 'N/A'}</td>
                                    <td style={{ ...styles.td, textAlign: 'right' }}>
                                        <div style={styles.badge('success')}>Verified</div>
                                    </td>
                                </tr>
                            ))}
                            {attendance.length === 0 && (
                                <tr><td colSpan="4" style={{ textAlign: 'center', padding: '40px', color: tokens.colors.textMuted }}>No logs found.</td></tr>
                            )}
                        </tbody>
                    </table>
                </div>

                <div style={styles.card}>
                    <h3 style={{ fontSize: '20px', fontWeight: '800', marginBottom: '24px' }}>Employment Documents</h3>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                        {[
                            { name: 'Offer Letter.pdf', size: '1.2MB' },
                            { name: 'NDA Agreement.pdf', size: '850KB' },
                            { name: 'Contract_v2.pdf', size: '2.4MB' }
                        ].map(doc => (
                            <div key={doc.name} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '16px', borderRadius: '12px', border: '1px solid #E2E8F0' }}>
                                <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                                    <span className="material-symbols-outlined" style={{ color: tokens.colors.primary }}>description</span>
                                    <div>
                                        <div style={{ fontSize: '14px', fontWeight: '700' }}>{doc.name}</div>
                                        <div style={{ fontSize: '12px', color: tokens.colors.textMuted }}>{doc.size}</div>
                                    </div>
                                </div>
                                <button style={{ border: 'none', background: 'none', cursor: 'pointer', color: tokens.colors.primary }}>
                                    <span className="material-symbols-outlined">download</span>
                                </button>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default EmployeeInsight;
