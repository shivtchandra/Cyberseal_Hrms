import React, { useState, useEffect } from 'react';
import { signOut } from 'firebase/auth';
import { auth } from '../../firebase';
import { styles, tokens } from '../../styles';
import Sidebar from '../Sidebar';
import Dashboard from '../Dashboard';
import Employees from '../Employees';
import Attendance from '../Attendance';
import Leaves from '../Leaves';
import AdminPanel from '../AdminPanel';
import Profile from '../Profile';

import { doc, updateDoc, getDoc } from 'firebase/firestore';
import { db } from '../../firebase';

const AuthenticatedArea = ({ user }) => {
  const [activeTab, setActiveTab] = useState('dashboard');
  const [searchTerm, setSearchTerm] = useState('');
  const [needsProfileSetup, setNeedsProfileSetup] = useState(false);
  const [profileData, setProfileData] = useState({});

  const adminEmails = ['admin@hrmate.com'];
  const isAdmin = adminEmails.includes(user.email) || user.isAdmin;

  useEffect(() => {
    const checkProfile = async () => {
      if (isAdmin) return;
      // If we logged in via Firestore, we might already have the data
      if (user.profileComplete === false) {
        setNeedsProfileSetup(true);
        setProfileData(user);
      } else {
        // Double check Firestore for Auth users
        const docRef = doc(db, 'employees', user.uid);
        const docSnap = await getDoc(docRef);
        if (docSnap.exists() && docSnap.data().profileComplete === false) {
          setNeedsProfileSetup(true);
          setProfileData({ ...docSnap.data(), uid: user.uid });
        }
      }
    };
    checkProfile();
  }, [user, isAdmin]);

  const handleProfileComplete = async (e) => {
    e.preventDefault();
    try {
      const { uid, ...dataToSave } = profileData;
      await updateDoc(doc(db, 'employees', uid || user.uid), {
        ...dataToSave,
        profileComplete: true
      });
      setNeedsProfileSetup(false);
    } catch (err) {
      console.error(err);
    }
  };

  if (needsProfileSetup) {
    return (
      <div style={{ ...styles.app, background: tokens.colors.background, alignItems: 'center', justifyContent: 'center', padding: '24px' }}>
        <div style={{ ...styles.card, width: '100%', maxWidth: '440px', padding: '40px' }}>
          <div style={{ textAlign: 'center', marginBottom: '40px' }}>
            <div style={{ fontSize: '24px', fontWeight: '800', color: tokens.colors.primary, marginBottom: '8px' }}>Complete Profile</div>
            <p style={{ fontSize: '14px', color: tokens.colors.textMuted }}>Please provide a few more details to activate your account.</p>
          </div>

          <form onSubmit={handleProfileComplete} style={{ display: 'grid', gap: '20px' }}>
            <div>
              <label style={{ fontSize: '13px', fontWeight: '600', color: tokens.colors.secondary, marginBottom: '6px', display: 'block' }}>Phone Number</label>
              <input
                style={styles.input}
                required
                value={profileData.phone || ''}
                onChange={e => setProfileData({ ...profileData, phone: e.target.value })}
                placeholder="+1 (555) 000-0000"
              />
            </div>
            <div>
              <label style={{ fontSize: '13px', fontWeight: '600', color: tokens.colors.secondary, marginBottom: '6px', display: 'block' }}>Date of Birth</label>
              <input
                type="date"
                style={styles.input}
                required
                value={profileData.dob || ''}
                onChange={e => setProfileData({ ...profileData, dob: e.target.value })}
              />
            </div>
            <div>
              <label style={{ fontSize: '13px', fontWeight: '600', color: tokens.colors.secondary, marginBottom: '6px', display: 'block' }}>Home Address</label>
              <textarea
                style={{ ...styles.input, minHeight: '100px', resize: 'none' }}
                required
                value={profileData.address || ''}
                onChange={e => setProfileData({ ...profileData, address: e.target.value })}
                placeholder="123 Main St, City, Country"
              />
            </div>
            <button style={{ ...styles.button.primary, width: '100%', marginTop: '8px', justifyContent: 'center' }}>Activate Account</button>
          </form>
        </div>
      </div>
    );
  }

  const handleLogout = () => {
    if (user.uid === 'hardcoded-admin') {
      // For hardcoded users, we need to refresh or manually update App state
      // Simplest is to reload or we could pass a logout prop
      window.location.reload();
    } else {
      signOut(auth);
    }
  };

  return (
    <div style={styles.app} className="animate-fade">
      <Sidebar activeTab={activeTab} setActiveTab={setActiveTab} isAdmin={isAdmin} />

      <div style={styles.main}>
        <div style={styles.header}>
          <div>
            <div style={{ color: tokens.colors.textMuted, fontSize: '13px', fontWeight: '600', letterSpacing: '0.02em', marginBottom: '2px' }}>
              Welcome back, {isAdmin ? 'Administrator' : 'Staff Member'}
            </div>
            <div style={styles.greeting}>{user.email.split('@')[0]}</div>
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: '20px' }}>
            {activeTab === 'employees' && (
              <div style={{ position: 'relative' }}>
                <input
                  style={{ ...styles.input, paddingLeft: '40px', width: '280px', backgroundColor: '#FFF', border: `1px solid ${tokens.colors.border}` }}
                  placeholder="Search directory..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
                <span className="material-symbols-outlined" style={{ position: 'absolute', left: '12px', top: '50%', transform: 'translateY(-50%)', fontSize: '20px', color: tokens.colors.textMuted }}>search</span>
              </div>
            )}

            <button
              onClick={handleLogout}
              style={{
                ...styles.button.outline,
                padding: '8px 16px',
                fontSize: '13px',
                fontWeight: '600',
              }}
            >
              Log Out <span className="material-symbols-outlined" style={{ fontSize: '18px' }}>logout</span>
            </button>
          </div>
        </div>

        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          {activeTab === 'dashboard' && <Dashboard setActiveTab={setActiveTab} isAdmin={isAdmin} user={user} />}
          {activeTab === 'employees' && <Employees searchTerm={searchTerm} isAdmin={isAdmin} />}
          {activeTab === 'attendance' && !isAdmin && <Attendance user={user} />}
          {activeTab === 'leaves' && !isAdmin && <Leaves user={user} />}
          {activeTab === 'profile' && !isAdmin && <Profile user={user} />}
          {activeTab.startsWith('admin_') && isAdmin && <AdminPanel fixedModule={activeTab.split('_')[1]} />}
        </div>
      </div>
    </div>
  );
};

export default AuthenticatedArea;
