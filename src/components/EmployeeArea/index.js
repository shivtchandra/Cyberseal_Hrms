'use client';
import React, { useState, useEffect } from 'react';
import { signOut } from 'firebase/auth';
import { auth, db } from '../../firebase';
import { doc, getDoc, updateDoc } from 'firebase/firestore';
import { useAuth } from '../../context/AuthContext';
import { useTheme } from '../../context/ThemeContext';
import { styles, tokens } from '../../styles';
import Dashboard from '../Dashboard';
import Attendance from '../Attendance';
import Leaves from '../Leaves';
import Profile from '../Profile';
import AdminPanel from '../AdminPanel';
import EmployeeTimesheet from '../Timesheet';
import EmployeePayslips from '../Payroll';
import NotificationBell from '../Notifications';

/* ─── Employee Sidebar ───────────────────────────── */
const EmployeeSidebar = ({ activeTab, setActiveTab, user }) => {
    const { theme, toggleTheme } = useTheme();
    const mySpace = [
        { id: 'dashboard', label: 'Overview', icon: 'grid_view' },
        { id: 'attendance', label: 'Punch Clock', icon: 'timer' },
        { id: 'timesheet', label: 'My Timesheet', icon: 'assignment' },
        { id: 'leaves', label: 'My Leaves', icon: 'beach_access' },
        { id: 'profile', label: 'My Profile', icon: 'person' },
    ];
    const finance = [
        { id: 'payslips', label: 'My Payslips', icon: 'payments' },
    ];
    const company = [
        { id: 'employee_policies', label: 'Policies & Holidays', icon: 'gavel' },
    ];

    const NavItem = ({ item }) => (
        <div style={styles.menuItem(activeTab === item.id)} onClick={() => setActiveTab(item.id)}>
            <span className="material-symbols-outlined" style={{ fontSize: '20px', color: activeTab === item.id ? tokens.colors.accent : tokens.colors.secondary, opacity: activeTab === item.id ? 1 : 0.7 }}>{item.icon}</span>
            {item.label}
        </div>
    );

    const SectionLabel = ({ label }) => (
        <div style={{ color: tokens.colors.secondary, fontSize: '11px', fontWeight: '800', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '12px', paddingLeft: '24px', opacity: 0.8 }}>{label}</div>
    );

    return (
        <div style={styles.sidebar}>
            {/* Logo */}
            <div style={{ ...styles.logo, padding: '0 28px', marginBottom: '40px' }}>
                <div style={{ width: '32px', height: '32px', background: `linear-gradient(135deg, ${tokens.colors.accent} 0%, #065F46 100%)`, borderRadius: '10px', display: 'flex', alignItems: 'center', justifyContent: 'center', boxShadow: '0 8px 16px -4px rgba(13,148,136,0.4)' }}>
                    <span className="material-symbols-outlined" style={{ color: '#FFF', fontSize: '18px' }}>bolt</span>
                </div>
                <span style={{ fontWeight: '800', letterSpacing: '-0.03em', fontSize: '22px' }}>HRMate</span>
            </div>

            <div style={{ flex: 1, overflowY: 'auto', padding: '0 8px' }}>
                <SectionLabel label="My Space" />
                {mySpace.map(item => <NavItem key={item.id} item={item} />)}

                <div style={{ marginTop: '28px' }}>
                    <SectionLabel label="Finance" />
                    {finance.map(item => <NavItem key={item.id} item={item} />)}
                </div>

                <div style={{ marginTop: '28px' }}>
                    <SectionLabel label="Company" />
                    {company.map(item => <NavItem key={item.id} item={item} />)}
                </div>
            </div>

            {/* User card + dark mode toggle */}
            <div style={{ padding: '24px 16px', borderTop: '1px solid var(--color-border)', marginTop: 'auto' }}>
                <button onClick={toggleTheme}
                    style={{ ...styles.button.outline, width: '100%', justifyContent: 'center', marginBottom: '12px', padding: '10px', fontSize: '13px', fontWeight: '700' }}
                    title={theme === 'dark' ? 'Switch to Light Mode' : 'Switch to Dark Mode'}>
                    <span className="material-symbols-outlined" style={{ fontSize: '18px' }}>{theme === 'dark' ? 'light_mode' : 'dark_mode'}</span>
                    {theme === 'dark' ? 'Light Mode' : 'Dark Mode'}
                </button>
                <div style={{ display: 'flex', alignItems: 'center', gap: '12px', padding: '12px', borderRadius: tokens.radius.md, backgroundColor: '#F8FAFC', border: '1px solid transparent', transition: 'all 0.2s ease' }}
                    onMouseOver={e => { e.currentTarget.style.borderColor = tokens.colors.border; e.currentTarget.style.backgroundColor = '#FFFFFF'; }}
                    onMouseOut={e => { e.currentTarget.style.borderColor = 'transparent'; e.currentTarget.style.backgroundColor = '#F8FAFC'; }}>
                    <div style={{ width: '40px', height: '40px', background: 'linear-gradient(45deg, #0F172A 0%, #1E293B 100%)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: '700', color: '#FFF', fontSize: '14px', borderRadius: '12px' }}>
                        {(user?.name || user?.email || 'S').charAt(0).toUpperCase()}
                    </div>
                    <div style={{ flex: 1, minWidth: 0 }}>
                        <div style={{ fontSize: '13px', fontWeight: '700', color: tokens.colors.primary, whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>{user?.name || 'Employee'}</div>
                        <div style={{ fontSize: '11px', color: tokens.colors.secondary, whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>{user?.email}</div>
                    </div>
                </div>
            </div>
        </div>
    );
};

/* ─── Employee Area (Main Layout) ────────────────── */
const EmployeeArea = ({ user }) => {
    const { logout } = useAuth();
    const [activeTab, setActiveTab] = useState('dashboard');
    const [needsProfileSetup, setNeedsProfileSetup] = useState(false);
    const [profileData, setProfileData] = useState({});

    useEffect(() => {
        const check = async () => {
            if (user.profileComplete === false) { setNeedsProfileSetup(true); setProfileData(user); return; }
            try {
                const snap = await getDoc(doc(db, 'employees', user.uid));
                if (snap.exists() && snap.data().profileComplete === false) {
                    setNeedsProfileSetup(true);
                    setProfileData({ ...snap.data(), uid: user.uid });
                }
            } catch (_) { }
        };
        check();
    }, [user]);

    const handleProfileComplete = async (e) => {
        e.preventDefault();
        try {
            const { uid, ...dataToSave } = profileData;
            await updateDoc(doc(db, 'employees', uid || user.uid), { ...dataToSave, profileComplete: true });
            setNeedsProfileSetup(false);
        } catch (err) { console.error(err); }
    };

    const handleLogout = async () => {
        try { if (user.uid !== 'hardcoded-admin') await signOut(auth); } catch (_) { }
        logout();
    };

    if (needsProfileSetup) {
        return (
            <div style={{ ...styles.app, background: tokens.colors.background, alignItems: 'center', justifyContent: 'center', padding: '24px', backgroundImage: 'radial-gradient(circle at 10% 10%, #CCFBF1 0%, transparent 30%)' }}>
                <div style={{ ...styles.card, width: '100%', maxWidth: '440px', padding: '48px', boxShadow: tokens.shadow.xl }}>
                    <div style={{ textAlign: 'center', marginBottom: '40px' }}>
                        <div style={{ width: '48px', height: '48px', background: tokens.colors.accent + '10', color: tokens.colors.accent, borderRadius: '12px', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 16px' }}>
                            <span className="material-symbols-outlined" style={{ fontSize: '24px' }}>id_card</span>
                        </div>
                        <div style={{ fontSize: '24px', fontWeight: '800', color: tokens.colors.primary, marginBottom: '8px', letterSpacing: '-0.02em' }}>Finalize Identity</div>
                        <p style={{ fontSize: '14px', color: tokens.colors.secondary, lineHeight: '1.6' }}>Complete your profile to activate workspace access.</p>
                    </div>
                    <form onSubmit={handleProfileComplete} style={{ display: 'grid', gap: '20px' }}>
                        <div>
                            <label style={{ fontSize: '11px', fontWeight: '800', color: tokens.colors.secondary, textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '8px', display: 'block' }}>Phone Number</label>
                            <input style={styles.input} required value={profileData.phone || ''} onChange={e => setProfileData({ ...profileData, phone: e.target.value })} placeholder="+91 98765 43210" />
                        </div>
                        <div>
                            <label style={{ fontSize: '11px', fontWeight: '800', color: tokens.colors.secondary, textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '8px', display: 'block' }}>Date of Birth</label>
                            <input type="date" style={styles.input} required value={profileData.dob || ''} onChange={e => setProfileData({ ...profileData, dob: e.target.value })} />
                        </div>
                        <div>
                            <label style={{ fontSize: '11px', fontWeight: '800', color: tokens.colors.secondary, textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '8px', display: 'block' }}>Home Address</label>
                            <textarea style={{ ...styles.input, minHeight: '100px', resize: 'none' }} required value={profileData.address || ''} onChange={e => setProfileData({ ...profileData, address: e.target.value })} placeholder="Street, City, State, PIN" />
                        </div>
                        <button style={{ ...styles.button.primary, width: '100%', padding: '14px', marginTop: '8px', fontSize: '15px' }}>
                            Activate Workforce ID
                        </button>
                    </form>
                </div>
            </div>
        );
    }

    const pageTitle = {
        dashboard: 'My Dashboard',
        attendance: 'Punch Clock',
        timesheet: 'My Timesheet',
        leaves: 'My Leaves',
        profile: 'My Profile',
        payslips: 'My Payslips',
        employee_policies: 'Company Policies',
    }[activeTab] || 'Workspace';

    return (
        <div style={styles.app}>
            <EmployeeSidebar activeTab={activeTab} setActiveTab={setActiveTab} user={user} />

            <div style={styles.main}>
                <div style={styles.topbar}>
                    <div>
                        <div style={{ fontSize: '11px', fontWeight: '700', color: tokens.colors.secondary, textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: '4px' }}>
                            <span className="material-symbols-outlined" style={{ fontSize: '12px', verticalAlign: 'middle', marginRight: '4px' }}>meeting_room</span>
                            WORKSPACE: {user?.email?.toUpperCase()}
                        </div>
                        <h1 style={{ fontSize: '24px', fontWeight: '800', color: tokens.colors.primary, letterSpacing: '-0.02em' }}>{pageTitle}</h1>
                    </div>
                    <NotificationBell user={user} isAdmin={false} />
                    <button onClick={handleLogout} style={{ ...styles.button.outline, padding: '10px 18px', fontSize: '13px', fontWeight: '700', background: tokens.colors.white, color: tokens.colors.error, borderColor: '#FEE2E2' }}
                        onMouseOver={e => { e.currentTarget.style.backgroundColor = '#FEF2F2'; e.currentTarget.style.borderColor = '#FCA5A5'; }}
                        onMouseOut={e => { e.currentTarget.style.backgroundColor = tokens.colors.white; e.currentTarget.style.borderColor = '#FEE2E2'; }}>
                        Sign Out
                        <span className="material-symbols-outlined" style={{ fontSize: '18px' }}>logout</span>
                    </button>
                </div>

                <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
                    {activeTab === 'dashboard' && <Dashboard setActiveTab={setActiveTab} isAdmin={false} user={user} />}
                    {activeTab === 'attendance' && <Attendance user={user} />}
                    {activeTab === 'timesheet' && <EmployeeTimesheet user={user} />}
                    {activeTab === 'leaves' && <Leaves user={user} />}
                    {activeTab === 'profile' && <Profile user={user} />}
                    {activeTab === 'payslips' && <EmployeePayslips user={user} />}
                    {activeTab === 'employee_policies' && <AdminPanel fixedModule="policies" readOnly />}
                </div>
            </div>
        </div>
    );
};

export default EmployeeArea;
