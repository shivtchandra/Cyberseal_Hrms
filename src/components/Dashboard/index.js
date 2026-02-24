import React, { useState, useEffect } from 'react';
import { db } from '../../firebase';
import { collection, onSnapshot } from 'firebase/firestore';
import { styles } from '../../styles';

const Dashboard = () => {
  const [employees, setEmployees] = useState([]);
  const [leaveRequests, setLeaveRequests] = useState([]);
  const [attendance, setAttendance] = useState([]);

  // subscribe to Firestore collections
  useEffect(() => {
    const empUnsub = onSnapshot(collection(db, 'employees'), snapshot => {
      setEmployees(snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() })));
    });

    const leaveUnsub = onSnapshot(collection(db, 'leaveRequests'), snapshot => {
      setLeaveRequests(snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() })));
    });

    const attUnsub = onSnapshot(collection(db, 'attendance'), snapshot => {
      setAttendance(snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() })));
    });

    return () => {
      empUnsub();
      leaveUnsub();
      attUnsub();
    };
  }, []);

  // dashboard metrics
  const totalEmployees = employees.length;
  const activeTasks = 12; // static for now
  const pendingLeaves = leaveRequests.filter(l => l.status === 'pending').length;
  const avgAttendance = attendance.length
    ? `${Math.round((attendance.filter(a => a.status === 'present').length / attendance.length) * 100)}%`
    : '0%';

  return (
    <>
      <div style={styles.statsGrid}>
        <div style={styles.statCard} className="float">
          <div>
            <div style={styles.statValue}>{totalEmployees}</div>
            <div style={styles.statLabel}>Total Employees</div>
          </div>
          <span style={{ fontSize: '48px' }}>👥</span>
        </div>
        <div style={styles.statCard} className="float">
          <div>
            <div style={styles.statValue}>{activeTasks}</div>
            <div style={styles.statLabel}>Active Tasks</div>
          </div>
          <span style={{ fontSize: '48px' }}>📋</span>
        </div>
        <div style={styles.statCard} className="float">
          <div>
            <div style={styles.statValue}>{pendingLeaves}</div>
            <div style={styles.statLabel}>Pending Leaves</div>
          </div>
          <span style={{ fontSize: '48px' }}>🏖️</span>
        </div>
        <div style={styles.statCard} className="float">
          <div>
            <div style={styles.statValue}>{avgAttendance}</div>
            <div style={styles.statLabel}>Avg. Attendance</div>
          </div>
          <span style={{ fontSize: '48px' }}>📊</span>
        </div>
      </div>
      <div style={styles.tableContainer}>
        <h3 style={{ marginBottom: '20px' }}>Recent Employees</h3>
        <table style={styles.table}>
          <thead>
            <tr>
              <th style={styles.th}>Name</th>
              <th style={styles.th}>Department</th>
              <th style={styles.th}>Role</th>
            </tr>
          </thead>
          <tbody>
            {employees.slice(0, 3).map(emp => (
              <tr key={emp.id}>
                <td style={styles.td}>{emp.name}</td>
                <td style={styles.td}>{emp.dept}</td>
                <td style={styles.td}>{emp.role}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default Dashboard;