import React, { useState, useEffect } from 'react';
import { db } from '../../firebase';
import { collection, onSnapshot, addDoc } from 'firebase/firestore';
import { styles } from '../../styles';

const Leaves = () => {
  const [leaveRequests, setLeaveRequests] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [formData, setFormData] = useState({ type: 'Annual', start: '', end: '' });

  // static balances; in a real app you'd fetch/update these as well
  const leaveBalances = {
    annual: { used: 13, total: 20 },
    sick: { used: 3, total: 10 },
    casual: { used: 1, total: 5 },
    unpaid: { used: 0, total: 5 },
  };

  useEffect(() => {
    const unsub = onSnapshot(collection(db, 'leaveRequests'), snapshot => {
      setLeaveRequests(snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() })));
    });
    return unsub;
  }, []);

  const applyForLeave = async () => {
    const { type, start, end } = formData;
    if (!type || !start || !end) return;
    try {
      await addDoc(collection(db, 'leaveRequests'), {
        type,
        start,
        end,
        status: 'pending',
      });
      setShowModal(false);
      setFormData({ type: 'Annual', start: '', end: '' });
    } catch (err) {
      console.error('apply leave', err);
      alert('Failed to submit leave request');
    }
  };

  return (
    <>
      <div style={styles.leaveBalanceGrid}>
        {Object.entries(leaveBalances).map(([key, val]) => (
          <div key={key} style={styles.leaveBalanceCard} className="float">
            <div style={styles.leaveBalanceLabel}>{key.toUpperCase()}</div>
            <div style={styles.leaveBalanceValue}>{val.used}/{val.total}</div>
            <div style={styles.leaveBalanceSub}>Remaining: {val.total - val.used}</div>
          </div>
        ))}
      </div>
      <div style={styles.tableContainer}>
        <div style={styles.tableHeader}>
          <h3>Leave Requests</h3>
          <button style={styles.addButton} onClick={() => setShowModal(true)}>+ Apply</button>
        </div>
        {leaveRequests.map(req => (
          <div key={req.id} style={styles.requestCard}>
            <div>
              <strong>{req.type}</strong> – {req.start} to {req.end}
            </div>
            <span style={styles.statusBadge(req.status)}>{req.status}</span>
          </div>
        ))}
      </div>

      {showModal && (
        <div style={styles.modalOverlay} onClick={() => setShowModal(false)}>
          <div style={styles.modal} onClick={e => e.stopPropagation()}>
            <h3 style={styles.modalTitle}>Apply for Leave</h3>
            <div style={{ marginBottom: '15px' }}>
              <label>
                Type:
                <select
                  value={formData.type}
                  onChange={e => setFormData({ ...formData, type: e.target.value })}
                  style={{ width: '100%', padding: '10px', marginTop: '5px' }}
                >
                  <option>Annual</option>
                  <option>Sick</option>
                  <option>Casual</option>
                  <option>Unpaid</option>
                </select>
              </label>
            </div>
            <div style={{ marginBottom: '15px' }}>
              <label>
                Start date:
                <input
                  type="date"
                  value={formData.start}
                  onChange={e => setFormData({ ...formData, start: e.target.value })}
                  style={{ width: '100%', padding: '10px', marginTop: '5px' }}
                />
              </label>
            </div>
            <div style={{ marginBottom: '25px' }}>
              <label>
                End date:
                <input
                  type="date"
                  value={formData.end}
                  onChange={e => setFormData({ ...formData, end: e.target.value })}
                  style={{ width: '100%', padding: '10px', marginTop: '5px' }}
                />
              </label>
            </div>
            <div style={styles.modalButtons}>
              <button style={styles.cancelButton} onClick={() => setShowModal(false)}>Cancel</button>
              <button style={styles.saveButton} onClick={applyForLeave}>Submit</button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Leaves;