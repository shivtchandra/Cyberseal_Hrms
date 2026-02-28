import React, { useState, useEffect } from 'react';
import { db } from '../../firebase';
import { collection, onSnapshot, addDoc, query, where, serverTimestamp } from 'firebase/firestore';
import { styles, tokens } from '../../styles';

const Attendance = ({ user }) => {
  const [logs, setLogs] = useState([]);
  const [activeShift, setActiveShift] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const q = query(
      collection(db, 'attendance'),
      where('userEmail', '==', user.email)
    );
    // Removed orderBy to avoid missing index errors that can cause stuck loading screens.
    // We will sort client-side instead.

    const unsub = onSnapshot(q, (s) => {
      const data = s.docs
        .map(d => ({ id: d.id, ...d.data() }))
        .sort((a, b) => (b.timestamp?.seconds || 0) - (a.timestamp?.seconds || 0));

      setLogs(data);
      if (data[0]?.type === 'in') setActiveShift(data[0]);
      else setActiveShift(null);
      setLoading(false);
    }, (err) => {
      console.error("Attendance feed error:", err);
      setLoading(false);
    });
    return unsub;
  }, [user.email]);

  const toggleShift = async () => {
    const type = activeShift ? 'out' : 'in';
    await addDoc(collection(db, 'attendance'), {
      userEmail: user.email,
      type,
      timestamp: serverTimestamp(),
      manual: false
    });
  };

  if (loading) return <div style={{ fontSize: '15px', fontWeight: '500', padding: '40px', color: tokens.colors.textMuted }}>Loading attendance data...</div>;

  return (
    <div className="animate-fade">
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1.5fr', gap: '32px' }}>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '32px' }}>
          <div style={{ ...styles.card, textAlign: 'center', padding: '40px' }}>
            <div style={{ fontSize: '14px', fontWeight: '600', color: tokens.colors.textMuted, marginBottom: '16px' }}>Shift Management</div>
            <div style={{ fontSize: '20px', fontWeight: '700', marginBottom: '32px' }}>
              Current Status: <span style={{ color: activeShift ? tokens.colors.success : tokens.colors.textMuted }}>{activeShift ? 'Active' : 'Standby'}</span>
            </div>

            <button
              onClick={toggleShift}
              style={{
                ...styles.button.primary,
                width: '100%',
                padding: '16px',
                fontSize: '15px',
                justifyContent: 'center',
                backgroundColor: activeShift ? tokens.colors.secondary : tokens.colors.primary
              }}
            >
              <span className="material-symbols-outlined" style={{ fontSize: '20px' }}>{activeShift ? 'logout' : 'login'}</span>
              {activeShift ? 'Clock Out Now' : 'Clock In Now'}
            </button>
          </div>

          <div style={styles.card}>
            <h3 style={{ fontSize: '16px', fontWeight: '700', marginBottom: '16px' }}>Attendance Metrics</h3>
            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '10px' }}>
              <span style={{ fontSize: '13px', fontWeight: '550', color: tokens.colors.secondary }}>Monthly Punctuality</span>
              <span style={{ fontSize: '13px', fontWeight: '700', color: tokens.colors.primary }}>96%</span>
            </div>
            <div style={{ height: '8px', background: '#F3F4F6', borderRadius: '4px', overflow: 'hidden' }}>
              <div style={{ width: '96%', height: '100%', background: tokens.colors.primary, borderRadius: '4px' }}></div>
            </div>
          </div>
        </div>

        <div style={styles.card}>
          <h3 style={{ fontSize: '16px', fontWeight: '700', marginBottom: '20px' }}>Attendance Log</h3>
          <table style={{ width: '100%', borderCollapse: 'collapse' }}>
            <thead>
              <tr>
                <th style={styles.th}>Event Type</th>
                <th style={styles.th}>Date & Time</th>
                <th style={{ ...styles.th, textAlign: 'right' }}>Source</th>
              </tr>
            </thead>
            <tbody>
              {logs.map(log => (
                <tr key={log.id}>
                  <td style={styles.td}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                      <span className="material-symbols-outlined" style={{ fontSize: '18px', color: log.type === 'in' ? tokens.colors.success : tokens.colors.secondary }}>
                        {log.type === 'in' ? 'check_circle' : 'cancel'}
                      </span>
                      <span style={{ fontWeight: '600' }}>{log.type === 'in' ? 'Clocked In' : 'Clocked Out'}</span>
                    </div>
                  </td>
                  <td style={styles.td}>{log.timestamp?.toDate().toLocaleString(undefined, { dateStyle: 'medium', timeStyle: 'short' }) || 'Processing...'}</td>
                  <td style={{ ...styles.td, textAlign: 'right' }}>
                    <div style={{ ...styles.badge('outline'), fontSize: '11px' }}>
                      {log.manual ? 'Manual Entry' : 'System Auto'}
                    </div>
                  </td>
                </tr>
              ))}
              {logs.length === 0 && (
                <tr>
                  <td colSpan="3" style={{ ...styles.td, textAlign: 'center', padding: '40px', color: tokens.colors.textMuted }}>
                    No attendance logs recorded yet.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Attendance;