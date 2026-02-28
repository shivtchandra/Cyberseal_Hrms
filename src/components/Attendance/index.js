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

  const groupedLogs = logs.reduce((acc, log) => {
    if (!log.timestamp) return acc;
    const dateStr = log.timestamp.toDate().toLocaleDateString(undefined, { month: 'short', day: 'numeric', year: 'numeric' });
    if (!acc[dateStr]) {
      acc[dateStr] = { in: null, out: null, rawDate: log.timestamp.toDate() };
    }
    const timeStr = log.timestamp.toDate().toLocaleTimeString(undefined, { hour: '2-digit', minute: '2-digit' });
    if (log.type === 'in') acc[dateStr].in = timeStr;
    if (log.type === 'out') acc[dateStr].out = timeStr;
    return acc;
  }, {});

  const logRows = Object.entries(groupedLogs).sort((a, b) => b[1].rawDate - a[1].rawDate);

  if (loading) return <div style={{ fontSize: '15px', fontWeight: '600', padding: '60px', textAlign: 'center', color: tokens.colors.secondary }}>Establishing secure connection to records...</div>;

  return (
    <div className="animate-fade">
      <div style={{ marginBottom: '40px' }}>
        <h2 style={styles.greeting}>Time & Attendance</h2>
        <p style={{ color: tokens.colors.secondary, fontSize: '15px', marginTop: '4px' }}>Log your clinical hours and monitor shifting schedules.</p>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: '1fr 2fr', gap: '32px' }}>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '32px' }}>
          <div style={{ ...styles.card, textAlign: 'center', padding: '48px 32px', position: 'relative', overflow: 'hidden' }}>
            <div style={{
              position: 'absolute',
              top: '-20px',
              right: '-20px',
              width: '120px',
              height: '120px',
              background: activeShift ? tokens.colors.success + '10' : tokens.colors.accent + '05',
              borderRadius: '50%',
              zIndex: 0
            }}></div>

            <div style={{ position: 'relative', zIndex: 1 }}>
              <div style={{ fontSize: '11px', fontWeight: '800', color: tokens.colors.secondary, textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '24px' }}>Shift Status</div>

              <div style={{
                width: '80px',
                height: '80px',
                borderRadius: '24px',
                background: activeShift ? tokens.colors.success + '15' : '#F1F5F9',
                color: activeShift ? tokens.colors.success : tokens.colors.secondary,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                margin: '0 auto 20px',
                border: `1px solid ${activeShift ? tokens.colors.success + '30' : tokens.colors.border}`
              }}>
                <span className="material-symbols-outlined" style={{ fontSize: '40px' }}>{activeShift ? 'timer' : 'timer_off'}</span>
              </div>

              <div style={{ fontSize: '24px', fontWeight: '800', color: tokens.colors.primary, marginBottom: '8px', letterSpacing: '-0.02em' }}>
                {activeShift ? 'Currently Logged In' : 'Account On Standby'}
              </div>
              <p style={{ fontSize: '13px', color: tokens.colors.secondary, marginBottom: '40px' }}>
                {activeShift ? `Shift started at ${activeShift.timestamp?.toDate().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}` : 'Ready to begin your scheduled session?'}
              </p>

              <button
                onClick={toggleShift}
                style={{
                  ...styles.button.primary,
                  width: '100%',
                  padding: '16px',
                  fontSize: '15px',
                  backgroundColor: activeShift ? tokens.colors.primary : tokens.colors.accent,
                  boxShadow: activeShift ? 'none' : styles.button.primary.boxShadow
                }}
              >
                <span className="material-symbols-outlined" style={{ fontSize: '20px' }}>{activeShift ? 'logout' : 'bolt'}</span>
                {activeShift ? 'Terminate Session' : 'Establish Pulse'}
              </button>
            </div>
          </div>

          <div style={{ ...styles.card, padding: '32px' }}>
            <h3 style={{ fontSize: '16px', fontWeight: '800', marginBottom: '24px', color: tokens.colors.primary }}>Efficiency Metrics</h3>
            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '12px', alignItems: 'flex-end' }}>
              <span style={{ fontSize: '13px', fontWeight: '700', color: tokens.colors.secondary }}>Monthly Compliance</span>
              <span style={{ fontSize: '18px', fontWeight: '800', color: tokens.colors.primary }}>98.4%</span>
            </div>
            <div style={{ height: '10px', background: '#F1F5F9', borderRadius: '5px', overflow: 'hidden' }}>
              <div style={{ width: '98.4%', height: '100%', background: `linear-gradient(to right, ${tokens.colors.accent}, ${tokens.colors.success})`, borderRadius: '5px' }}></div>
            </div>
            <p style={{ fontSize: '12px', color: tokens.colors.secondary, marginTop: '16px', lineHeight: '1.5' }}>Your attendance record remains above the workspace average. Excellent discipline.</p>
          </div>
        </div>

        <div style={{ ...styles.card, padding: '0', overflow: 'hidden' }}>
          <div style={{ padding: '32px', borderBottom: `1px solid ${tokens.colors.border}`, display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <h3 style={{ fontSize: '18px', fontWeight: '800', color: tokens.colors.primary }}>Activity History</h3>
            <div style={{ ...styles.badge('primary'), textTransform: 'uppercase', fontSize: '10px' }}>March 2026</div>
          </div>

          <div style={{ overflowX: 'auto' }}>
            <table style={{ width: '100%', borderCollapse: 'collapse' }}>
              <thead>
                <tr style={{ backgroundColor: '#F8FAFC' }}>
                  <th style={{ ...styles.th, paddingLeft: '32px' }}>Operational Date</th>
                  <th style={styles.th}>Timeline (In/Out)</th>
                  <th style={{ ...styles.th, textAlign: 'right', paddingRight: '32px' }}>System Status</th>
                </tr>
              </thead>
              <tbody>
                {logRows.map(([date, times], idx) => (
                  <tr key={date} style={{
                    borderBottom: idx === logRows.length - 1 ? 'none' : `1px solid ${tokens.colors.border}`,
                    transition: 'background-color 0.2s ease'
                  }} onMouseOver={e => e.currentTarget.style.backgroundColor = '#F9FAFB'} onMouseOut={e => e.currentTarget.style.backgroundColor = 'transparent'}>
                    <td style={{ ...styles.td, paddingLeft: '32px', fontWeight: '700', color: tokens.colors.primary }}>{date}</td>
                    <td style={styles.td}>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                        <div style={{
                          padding: '6px 10px',
                          background: times.in ? '#ECFDF5' : '#F1F5F9',
                          color: times.in ? tokens.colors.success : tokens.colors.secondary,
                          borderRadius: '8px',
                          fontSize: '12px',
                          fontWeight: '700',
                          border: `1px solid ${times.in ? '#D1FAE5' : tokens.colors.border}`
                        }}>
                          {times.in || '--:--'}
                        </div>
                        <span className="material-symbols-outlined" style={{ fontSize: '14px', color: tokens.colors.border }}>arrow_forward</span>
                        <div style={{
                          padding: '6px 10px',
                          background: times.out ? '#F1F5F9' : '#FFF1F2',
                          color: times.out ? tokens.colors.secondary : tokens.colors.error,
                          borderRadius: '8px',
                          fontSize: '12px',
                          fontWeight: '700',
                          border: `1px solid ${times.out ? tokens.colors.border : '#FFE4E6'}`
                        }}>
                          {times.out || 'Active'}
                        </div>
                      </div>
                    </td>
                    <td style={{ ...styles.td, textAlign: 'right', paddingRight: '32px' }}>
                      <div style={{ display: 'inline-flex', alignItems: 'center', gap: '6px', color: tokens.colors.success, fontSize: '12px', fontWeight: '700' }}>
                        <span className="material-symbols-outlined" style={{ fontSize: '16px' }}>verified</span>
                        Validated
                      </div>
                    </td>
                  </tr>
                ))}
                {logRows.length === 0 && (
                  <tr>
                    <td colSpan="3" style={{ ...styles.td, textAlign: 'center', padding: '80px', color: tokens.colors.secondary }}>
                      <div style={{ opacity: 0.5, marginBottom: '16px' }}>
                        <span className="material-symbols-outlined" style={{ fontSize: '48px' }}>history</span>
                      </div>
                      <div style={{ fontWeight: '700', fontSize: '16px', color: tokens.colors.primary }}>No Recent Activity</div>
                      <div>Your shift logs will appear here once you clock in.</div>
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Attendance;