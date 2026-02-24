import React from 'react';
import { styles } from '../../styles';

const Sidebar = ({ activeTab, setActiveTab }) => (
  <div style={styles.sidebar}>
    <div style={styles.logo} className="glow">✨ HRMate</div>
    <div>
      <div style={styles.menuItem(activeTab === 'dashboard')} onClick={() => setActiveTab('dashboard')}>
        <span>📊</span> Dashboard
      </div>
      <div style={styles.menuItem(activeTab === 'employees')} onClick={() => setActiveTab('employees')}>
        <span>👥</span> Employees
      </div>
      <div style={styles.menuItem(activeTab === 'attendance')} onClick={() => setActiveTab('attendance')}>
        <span>📅</span> Attendance
      </div>
      <div style={styles.menuItem(activeTab === 'leaves')} onClick={() => setActiveTab('leaves')}>
        <span>🏖️</span> Leaves
      </div>
      <div style={styles.menuItem(false)}>
        <span>⚙️</span> Settings
      </div>
    </div>
  </div>
);

export default Sidebar;