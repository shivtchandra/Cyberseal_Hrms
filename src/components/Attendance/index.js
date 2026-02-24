import React, { useState, useEffect } from 'react';
import { db } from '../../firebase';
import {
  collection,
  onSnapshot,
  addDoc,
  updateDoc,
  doc,
} from 'firebase/firestore';
import { styles } from '../../styles';

// We'll presume there's a single user for demo; in a real app you'd use auth.currentUser.uid
const Attendance = () => {
  const [attendance, setAttendance] = useState([]);
  const [clockedIn, setClockedIn] = useState(false);

  // fetch records
  useEffect(() => {
    const unsub = onSnapshot(collection(db, 'attendance'), snapshot => {
      setAttendance(snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() })));
    });
    return unsub;
  }, []);

  const toggleClock = async () => {
    setClockedIn(prev => !prev);
    const today = new Date().toISOString().split('T')[0];
    try {
      // either add new record or update existing
      const existing = attendance.find(a => a.date === today);
      if (existing) {
        await updateDoc(doc(db, 'attendance', existing.id), {
          status: clockedIn ? 'absent' : 'present',
        });
      } else {
        await addDoc(collection(db, 'attendance'), {
          date: today,
          status: clockedIn ? 'absent' : 'present',
        });
      }
    } catch (err) {
      console.error('toggle clock', err);
    }
  };

  // generate calendar cells for current month
  const year = new Date().getFullYear();
  const month = new Date().getMonth();
  const daysInMonth = new Date(year, month + 1, 0).getDate();
  const firstDay = new Date(year, month, 1).getDay();

  const [showDateModal, setShowDateModal] = useState(false);
  const [selectedDate, setSelectedDate] = useState(null);
  const [selectedStatus, setSelectedStatus] = useState('');

  const handleDateClick = (date, status) => {
    setSelectedDate(date);
    setSelectedStatus(status);
    setShowDateModal(true);
  };

  const handleStatusChange = async (newStatus) => {
    try {
      const record = attendance.find(a => a.date === selectedDate);
      if (record) {
        await updateDoc(doc(db, 'attendance', record.id), { status: newStatus });
      } else {
        await addDoc(collection(db, 'attendance'), { date: selectedDate, status: newStatus });
      }
      setShowDateModal(false);
    } catch (err) {
      console.error('change status', err);
    }
  };

  const calendarCells = [];
  for (let i = 0; i < firstDay; i++) {
    calendarCells.push(<div key={`empty-${i}`} style={styles.calDay}></div>);
  }
  for (let d = 1; d <= daysInMonth; d++) {
    const dateStr = `${year}-${(month + 1).toString().padStart(2, '0')}-${d.toString().padStart(2, '0')}`;
    const record = attendance.find(a => a.date === dateStr);
    const isPresent = record ? record.status === 'present' : false;
    calendarCells.push(
      <div
        key={d}
        style={{ ...styles.calDay, ...(isPresent ? styles.presentDay : styles.absentDay) }}
        className="float"
        onClick={() => handleDateClick(dateStr, isPresent ? 'present' : 'absent')}
      >
        {d}
      </div>
    );
  }

  return (
    <>
      <div style={styles.clockCard}>
        <div>
          <div style={{ fontSize: '24px', fontWeight: '600' }}>{clockedIn ? 'Clocked In' : 'Clocked Out'}</div>
          <div style={{ opacity: 0.9 }}>{clockedIn ? 'You are on shift' : 'Click to start your shift'}</div>
        </div>
        <button
          style={styles.clockButton}
          onClick={toggleClock}
          className={clockedIn ? 'pulse' : ''}
        >
          {clockedIn ? 'Clock Out' : 'Clock In'}
        </button>
      </div>

      <div style={styles.calendarContainer}>
        <h3>{`${new Intl.DateTimeFormat('en-US', { month: 'long' }).format(new Date())} ${year}`} Attendance</h3>
        <div style={styles.calendarGrid}>
          {['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].map(day => (
            <div key={day} style={styles.calDayHeader}>{day}</div>
          ))}
          {calendarCells}
        </div>
        <div style={{ display: 'flex', gap: '20px', marginTop: '15px' }}>
          <span><span style={{ background: '#c6f6d5', width: '14px', height: '14px', display: 'inline-block', borderRadius: '4px', marginRight: '5px' }}></span> Present</span>
          <span><span style={{ background: '#fed7d7', width: '14px', height: '14px', display: 'inline-block', borderRadius: '4px', marginRight: '5px' }}></span> Absent</span>
        </div>
      </div>

      {showDateModal && (
        <div style={styles.modalOverlay} onClick={() => setShowDateModal(false)}>
          <div style={{ ...styles.modal, ...styles.dateModal }} onClick={e => e.stopPropagation()}>
            <div style={styles.dateModalDate}>{selectedDate}</div>
            <p>Current status: <strong>{selectedStatus}</strong></p>
            <div style={styles.dateModalButtons}>
              <button
                style={{ ...styles.saveButton, background: '#48bb78' }}
                onClick={() => handleStatusChange('present')}
              >
                Mark Present
              </button>
              <button
                style={{ ...styles.saveButton, background: '#f56565' }}
                onClick={() => handleStatusChange('absent')}
              >
                Mark Absent
              </button>
            </div>
            <button style={{ ...styles.cancelButton, marginTop: '20px' }} onClick={() => setShowDateModal(false)}>
              Close
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default Attendance;