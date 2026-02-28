import React, { useState, useEffect } from 'react';
import { db } from '../../firebase';
import { collection, onSnapshot, addDoc, query, where, serverTimestamp } from 'firebase/firestore';
import { styles, tokens } from '../../styles';

const Leaves = ({ user }) => {
  const [leaveRequests, setLeaveRequests] = useState([]);
  const [loading, setLoading] = useState(true);
  const [showForm, setShowForm] = useState(false);
  const [newLeave, setNewLeave] = useState({ type: 'Annual', start: '', end: '', reason: '' });

  useEffect(() => {
    const q = query(
      collection(db, 'leaveRequests'),
      where('userEmail', '==', user.email)
    );
    // Removed orderBy to avoid index requirement for small personal datasets
    const unsub = onSnapshot(q, s => {
      const data = s.docs
        .map(d => ({ id: d.id, ...d.data() }))
        .sort((a, b) => (b.timestamp?.seconds || 0) - (a.timestamp?.seconds || 0));
      setLeaveRequests(data);
      setLoading(false);
    }, (err) => {
      console.error("Leave history error:", err);
      setLoading(false);
    });
    return unsub;
  }, [user.email]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await addDoc(collection(db, 'leaveRequests'), {
        ...newLeave,
        userEmail: user.email,
        status: 'pending',
        timestamp: serverTimestamp()
      });
      setShowForm(false);
      setNewLeave({ type: 'Annual', start: '', end: '', reason: '' });
    } catch (err) {
      console.error(err);
    }
  };

  if (loading) return <div style={{ fontSize: '15px', fontWeight: '500', padding: '40px', color: tokens.colors.textMuted }}>Loading leave history...</div>;

  return (
    <div className="animate-fade">
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '32px' }}>
        <div>
          <h2 style={{ fontSize: '24px', fontWeight: '800', color: tokens.colors.primary }}>Leave Management</h2>
          <p style={{ color: tokens.colors.textMuted, fontSize: '14px' }}>Request and track your personal time off.</p>
        </div>
        <button onClick={() => setShowForm(!showForm)} style={styles.button.primary}>
          <span className="material-symbols-outlined" style={{ fontSize: '18px' }}>{showForm ? 'close' : 'add'}</span>
          {showForm ? 'Discard Request' : 'New Leave Request'}
        </button>
      </div>

      {showForm && (
        <div style={{ ...styles.card, marginBottom: '32px', border: `1px solid ${tokens.colors.primary}` }}>
          <h3 style={{ fontSize: '18px', fontWeight: '700', marginBottom: '24px' }}>New Application</h3>
          <form onSubmit={handleSubmit} style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px' }}>
            <div style={{ gridColumn: 'span 2' }}>
              <label style={{ fontSize: '13px', fontWeight: '600', color: tokens.colors.secondary, display: 'block', marginBottom: '6px' }}>Leave Category</label>
              <select
                style={styles.input}
                value={newLeave.type}
                onChange={e => setNewLeave({ ...newLeave, type: e.target.value })}
              >
                <option>Annual</option>
                <option>Sick</option>
                <option>Personal</option>
                <option>Training</option>
              </select>
            </div>
            <div>
              <label style={{ fontSize: '13px', fontWeight: '600', color: tokens.colors.secondary, display: 'block', marginBottom: '6px' }}>Start Date</label>
              <input type="date" style={styles.input} value={newLeave.start} onChange={e => setNewLeave({ ...newLeave, start: e.target.value })} required />
            </div>
            <div>
              <label style={{ fontSize: '13px', fontWeight: '600', color: tokens.colors.secondary, display: 'block', marginBottom: '6px' }}>End Date</label>
              <input type="date" style={styles.input} value={newLeave.end} onChange={e => setNewLeave({ ...newLeave, end: e.target.value })} required />
            </div>
            <div style={{ gridColumn: 'span 2' }}>
              <label style={{ fontSize: '13px', fontWeight: '600', color: tokens.colors.secondary, display: 'block', marginBottom: '6px' }}>Reason / Justification</label>
              <textarea style={{ ...styles.input, minHeight: '100px', resize: 'none' }} value={newLeave.reason} onChange={e => setNewLeave({ ...newLeave, reason: e.target.value })} required placeholder="Briefly describe the reason for your leave..." />
            </div>
            <button type="submit" style={{ ...styles.button.primary, gridColumn: 'span 2', justifyContent: 'center', padding: '12px' }}>Submit Request</button>
          </form>
        </div>
      )}

      <div style={styles.card}>
        <h3 style={{ fontSize: '18px', fontWeight: '700', marginBottom: '20px' }}>Request History</h3>
        <table style={{ width: '100%', borderCollapse: 'collapse' }}>
          <thead>
            <tr>
              <th style={styles.th}>Category</th>
              <th style={styles.th}>Period</th>
              <th style={styles.th}>Status</th>
              <th style={{ ...styles.th, textAlign: 'right' }}>Applied On</th>
            </tr>
          </thead>
          <tbody>
            {leaveRequests.map(item => (
              <tr key={item.id}>
                <td style={styles.td}>
                  <div style={{ fontWeight: '600', color: tokens.colors.primary }}>{item.type}</div>
                </td>
                <td style={styles.td}>
                  <div style={{ fontSize: '14px' }}>{new Date(item.start).toLocaleDateString()} — {new Date(item.end).toLocaleDateString()}</div>
                </td>
                <td style={styles.td}>
                  <div style={{
                    ...styles.badge(item.status === 'approved' ? 'primary' : 'outline'),
                    backgroundColor: item.status === 'approved' ? '#ECFDF5' : (item.status === 'pending' ? '#FFFBEB' : '#FEF2F2'),
                    color: item.status === 'approved' ? '#059669' : (item.status === 'pending' ? '#D97706' : '#DC2626'),
                    borderColor: item.status === 'approved' ? '#10B981' : (item.status === 'pending' ? '#F59E0B' : '#EF4444'),
                    textTransform: 'capitalize'
                  }}>
                    {item.status}
                  </div>
                </td>
                <td style={{ ...styles.td, textAlign: 'right', color: tokens.colors.textMuted }}>
                  {item.timestamp?.toDate().toLocaleDateString(undefined, { month: 'short', day: 'numeric', year: 'numeric' }) || 'Pending...'}
                </td>
              </tr>
            ))}
            {leaveRequests.length === 0 && (
              <tr>
                <td colSpan="4" style={{ textAlign: 'center', padding: '60px' }}>
                  <span className="material-symbols-outlined" style={{ fontSize: '48px', color: '#E5E7EB', marginBottom: '12px' }}>event_busy</span>
                  <div style={{ fontSize: '14px', color: tokens.colors.textMuted }}>No leave history found.</div>
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Leaves;