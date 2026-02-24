import React, { useState } from 'react';
import { signOut } from 'firebase/auth';
import { auth } from '../../firebase';
import { styles } from '../../styles';
import Sidebar from '../Sidebar';
import Dashboard from '../Dashboard';
import Employees from '../Employees';
import Attendance from '../Attendance';
import Leaves from '../Leaves';

const AuthenticatedArea = ({ user }) => {
  const [activeTab, setActiveTab] = useState('employees');
  const [searchTerm, setSearchTerm] = useState('');

  // simple admin lookup; replace with a real rule as needed
  const adminEmails = ['admin@example.com'];
  const isAdmin = adminEmails.includes(user.email);


  return (
    <>
      <Sidebar activeTab={activeTab} setActiveTab={setActiveTab} />

      <div style={styles.main}>
        <div style={styles.header}>
          <div style={styles.greeting}>Hello, {user.email || 'User'}! 😊</div>
          <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
            {activeTab === 'employees' && (
              <div style={styles.searchBar}>
                <span style={{ marginRight: '8px', color: '#a0aec0' }}>🔍</span>
                <input
                  style={styles.searchInput}
                  placeholder="Search employees..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
              </div>
            )}
            <div>
              <button
                onClick={() => signOut(auth)}
                style={{
                  padding: '8px 12px',
                  borderRadius: 8,
                  border: '1px solid rgba(0,0,0,0.06)',
                  background: '#fff',
                }}
              >
                Sign out
              </button>
            </div>
          </div>
        </div>

        {activeTab === 'dashboard' && <Dashboard />}
        {activeTab === 'employees' && <Employees searchTerm={searchTerm} isAdmin={isAdmin} />}
        {activeTab === 'attendance' && <Attendance />}
        {activeTab === 'leaves' && <Leaves />}
      </div>
    </>
  );
};

export default AuthenticatedArea;
