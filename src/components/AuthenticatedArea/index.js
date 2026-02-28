import React, { useState, useEffect } from 'react';
import { signOut } from 'firebase/auth';
import { auth } from '../../firebase';
import { styles, tokens } from '../../styles';
import { useAuth } from '../../context/AuthContext';
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
  const { logout } = useAuth();
  const [activeTab, setActiveTab] = useState('dashboard');
  const [searchTerm, setSearchTerm] = useState('');
  const [needsProfileSetup, setNeedsProfileSetup] = useState(false);
  const [profileData, setProfileData] = useState({});

  const adminEmails = ['admin@hrmate.com'];
  const isAdmin = adminEmails.includes(user.email) || user.isAdmin;

  useEffect(() => {
    const checkProfile = async () => {
      if (isAdmin) return;
      if (user.profileComplete === false) {
        setNeedsProfileSetup(true);
        setProfileData(user);
      } else {
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
      <div style={{ ...styles.app, background: tokens.colors.background, alignItems: 'center', justifyContent: 'center', padding: '24px', backgroundImage: 'radial-gradient(circle at 10% 10%, #CCFBF1 0%, transparent 30%)' }}>
        <div style={{ ...styles.card, width: '100%', maxWidth: '440px', padding: '48px', boxShadow: tokens.shadow.xl }}>
          <div style={{ textAlign: 'center', marginBottom: '40px' }}>
            <div style={{
              width: '48px', height: '48px',
              background: tokens.colors.accent + '10',
              color: tokens.colors.accent,
              borderRadius: '12px',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              margin: '0 auto 16px'
            }}>
              <span className="material-symbols-outlined" style={{ fontSize: '24px' }}>id_card</span>
            </div>
            <div style={{ fontSize: '24px', fontWeight: '800', color: tokens.colors.primary, marginBottom: '8px', letterSpacing: '-0.02em' }}>Finalize Identity</div>
            <p style={{ fontSize: '14px', color: tokens.colors.secondary, lineHeight: '1.6' }}>Synchronize your professional record to activate your workspace access.</p>
          </div>
          <form onSubmit={handleProfileComplete} style={{ display: 'grid', gap: '24px' }}>
            <div>
              <label style={{ fontSize: '11px', fontWeight: '800', color: tokens.colors.secondary, textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '8px', display: 'block' }}>Phone Number</label>
              <input style={styles.input} required value={profileData.phone || ''} onChange={e => setProfileData({ ...profileData, phone: e.target.value })} placeholder="+1 (555) 000-0000" />
            </div>
            <div>
              <label style={{ fontSize: '11px', fontWeight: '800', color: tokens.colors.secondary, textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '8px', display: 'block' }}>Date of Birth</label>
              <input type="date" style={styles.input} required value={profileData.dob || ''} onChange={e => setProfileData({ ...profileData, dob: e.target.value })} />
            </div>
            <div>
              <label style={{ fontSize: '11px', fontWeight: '800', color: tokens.colors.secondary, textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '8px', display: 'block' }}>Home Address</label>
              <textarea style={{ ...styles.input, minHeight: '100px', resize: 'none' }} required value={profileData.address || ''} onChange={e => setProfileData({ ...profileData, address: e.target.value })} placeholder="123 Main St, City, Country" />
            </div>
            <button style={{ ...styles.button.primary, width: '100%', padding: '14px', marginTop: '8px', fontSize: '15px' }}>Activate Workforce ID</button>
          </form>
        </div>
      </div>
    );
  }

  const handleLogout = async () => {
    try {
      // Sign out from Firebase Auth if it's a real auth session
      if (user.uid !== 'hardcoded-admin') {
        await signOut(auth);
      }
    } catch (_) { }
    // Always clear sessionStorage via context logout
    logout();
  };

  return (
    <div style={styles.app} className="animate-fade">
      <Sidebar activeTab={activeTab} setActiveTab={setActiveTab} isAdmin={isAdmin} />

      <div style={styles.main}>
        <div style={{ ...styles.header, paddingBottom: '32px', borderBottom: `1px solid ${tokens.colors.border}`, marginBottom: '40px' }}>
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: tokens.colors.secondary, fontSize: '12px', fontWeight: '700', textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '4px' }}>
              <span className="material-symbols-outlined" style={{ fontSize: '14px', color: tokens.colors.accent }}>meeting_room</span>
              Instance: {user.email}
            </div>
            <div style={{ ...styles.greeting, fontSize: '32px' }}>{isAdmin ? 'System Administrator' : user.name || user.displayName || user.email.split('@')[0]}</div>
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
            {activeTab === 'employees' && (
              <div style={{ position: 'relative' }}>
                <input
                  style={{
                    ...styles.input,
                    paddingLeft: '44px',
                    width: '320px',
                    backgroundColor: tokens.colors.white,
                    border: `1px solid ${tokens.colors.border}`,
                    boxShadow: tokens.shadow.sm
                  }}
                  placeholder="Global Workforce Search..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
                <span className="material-symbols-outlined" style={{ position: 'absolute', left: '16px', top: '50%', transform: 'translateY(-50%)', fontSize: '18px', color: tokens.colors.secondary }}>search</span>
              </div>
            )}

            <button
              onClick={handleLogout}
              style={{
                ...styles.button.outline,
                padding: '10px 18px',
                fontSize: '13px',
                fontWeight: '700',
                background: tokens.colors.white,
                color: tokens.colors.error,
                borderColor: '#FEE2E2',
                transition: 'all 0.2s ease'
              }}
              onMouseOver={e => { e.currentTarget.style.backgroundColor = '#FEF2F2'; e.currentTarget.style.borderColor = '#FCA5A5'; }}
              onMouseOut={e => { e.currentTarget.style.backgroundColor = tokens.colors.white; e.currentTarget.style.borderColor = '#FEE2E2'; }}
            >
              Sign Out
              <span className="material-symbols-outlined" style={{ fontSize: '18px' }}>logout</span>
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
