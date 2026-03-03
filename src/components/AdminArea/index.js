'use client';
import React, { useState } from 'react';
import { signOut } from 'firebase/auth';
import { auth } from '../../firebase';
import { useAuth } from '../../context/AuthContext';
import { useRBAC } from '../../context/RBACContext';
import { useTheme } from '../../context/ThemeContext';
import { styles, tokens } from '../../styles';
import Employees from '../Employees';
import Dashboard from '../Dashboard';
import AdminPanel from '../AdminPanel';
import { AdminTimesheets } from '../Timesheet';
import { AdminPayroll } from '../Payroll';
import NotificationBell from '../Notifications';
import AuditLog from '../AuditLog';
import RoleManager from '../RoleManager';
import DeptDesignation from '../DeptDesignation';
import DocumentManagement from '../DocumentManagement';
import Performance from '../Performance';
import Training from '../Training';
import AssetManager from '../AssetManager';
import ExitManagement from '../ExitManagement';

/* ─── Admin Sidebar ──────────────────────────────── */
const AdminSidebar = ({ activeTab, setActiveTab, user }) => {
    const { theme, toggleTheme } = useTheme();
    const { roleName } = useRBAC();
    const primaryNav = [
        { id: 'dashboard', label: 'Overview', icon: 'grid_view' },
        { id: 'employees', label: 'Workforce Directory', icon: 'group' },
        { id: 'admin_leaves', label: 'Leave Management', icon: 'event_available' },
        { id: 'admin_attendance', label: 'Attendance Feed', icon: 'history' },
        { id: 'admin_timesheets', label: 'Timesheets', icon: 'assignment' },
        { id: 'admin_broadcast', label: 'Broadcasts', icon: 'campaign' },
        { id: 'performance', label: 'Performance', icon: 'trending_up' },
        { id: 'training', label: 'Training', icon: 'school' },
        { id: 'assets', label: 'Assets', icon: 'inventory_2' },
        { id: 'exit', label: 'Exits', icon: 'person_off' },
    ];
    const financeNav = [
        { id: 'admin_payroll', label: 'Payroll', icon: 'payments' },
    ];
    const configNav = [
        { id: 'admin_policies', label: 'Company Policies', icon: 'gavel' },
        { id: 'audit_log', label: 'Audit Log', icon: 'manage_search' },
        { id: 'roles', label: 'Roles & Permissions', icon: 'admin_panel_settings' },
        { id: 'departments', label: 'Organization Structure', icon: 'account_tree' },
        { id: 'documents', label: 'Documents', icon: 'folder_managed' },
    ];

    const NavItem = ({ item }) => (
        <div
            style={styles.menuItem(activeTab === item.id)}
            onClick={() => setActiveTab(item.id)}
        >
            <span className="material-symbols-outlined" style={{
                fontSize: '20px',
                color: activeTab === item.id ? tokens.colors.accent : tokens.colors.secondary,
                opacity: activeTab === item.id ? 1 : 0.7
            }}>{item.icon}</span>
            {item.label}
        </div>
    );

    const SectionLabel = ({ label }) => (
        <div style={{ color: tokens.colors.secondary, fontSize: '11px', fontWeight: '800', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '12px', paddingLeft: '24px', opacity: 0.8 }}>
            {label}
        </div>
    );

    return (
        <div style={styles.sidebar}>
            {/* Logo */}
            <div style={{ ...styles.logo, padding: '0 28px', marginBottom: '40px' }}>
                <div style={{ width: '32px', height: '32px', background: `linear-gradient(135deg, ${tokens.colors.accent} 0%, #065F46 100%)`, borderRadius: '10px', display: 'flex', alignItems: 'center', justifyContent: 'center', boxShadow: '0 8px 16px -4px rgba(13,148,136,0.4)' }}>
                    <span className="material-symbols-outlined" style={{ color: '#FFF', fontSize: '18px' }}>bolt</span>
                </div>
                <span style={{ fontWeight: '800', letterSpacing: '-0.03em', fontSize: '20px' }}>Cyberseal HRMS</span>
            </div>

            <div style={{ flex: 1, overflowY: 'auto', padding: '0 8px' }}>
                {/* Admin badge */}
                <div style={{ margin: '0 16px 20px', padding: '8px 14px', borderRadius: '10px', background: 'linear-gradient(135deg, #134E4A 0%, #0F766E 100%)', display: 'flex', alignItems: 'center', gap: '8px' }}>
                    <span className="material-symbols-outlined" style={{ fontSize: '16px', color: '#5EEAD4' }}>shield_person</span>
                    <span style={{ fontSize: '12px', fontWeight: '800', color: '#CCFBF1', letterSpacing: '0.04em' }}>{(roleName || 'SYSTEM ADMINISTRATOR').toUpperCase()}</span>
                </div>

                <SectionLabel label="Management" />
                {primaryNav.map(item => <NavItem key={item.id} item={item} />)}

                <div style={{ marginTop: '28px' }}>
                    <SectionLabel label="Finance" />
                    {financeNav.map(item => <NavItem key={item.id} item={item} />)}
                </div>

                <div style={{ marginTop: '28px' }}>
                    <SectionLabel label="Configuration" />
                    {configNav.map(item => <NavItem key={item.id} item={item} />)}
                </div>
            </div>

            {/* Admin user card + dark mode toggle */}
            <div style={{ padding: '24px 16px', borderTop: '1px solid var(--color-border)', marginTop: 'auto' }}>
                {/* Theme toggle */}
                <button onClick={toggleTheme}
                    style={{ ...styles.button.outline, width: '100%', justifyContent: 'center', marginBottom: '12px', padding: '10px', fontSize: '13px', fontWeight: '700' }}
                    title={theme === 'dark' ? 'Switch to Light Mode' : 'Switch to Dark Mode'}>
                    <span className="material-symbols-outlined" style={{ fontSize: '18px' }}>{theme === 'dark' ? 'light_mode' : 'dark_mode'}</span>
                    {theme === 'dark' ? 'Light Mode' : 'Dark Mode'}
                </button>
                <div style={{ display: 'flex', alignItems: 'center', gap: '12px', padding: '12px', transition: 'all 0.2s ease' }}>
                    <div style={{ width: '40px', height: '40px', background: 'var(--color-accent)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: '700', color: '#FFFFFF', fontSize: '14px', borderRadius: '12px' }}>
                        {user?.email?.charAt(0)?.toUpperCase() || 'A'}
                    </div>
                    <div style={{ flex: 1, minWidth: 0 }}>
                        <div style={{ fontSize: '13px', fontWeight: '700', color: 'var(--color-primary)', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>{roleName || 'Admin'}</div>
                        <div style={{ fontSize: '11px', color: 'var(--color-secondary)' }}>{user?.email || 'admin@hrmate.com'}</div>
                    </div>
                </div>
            </div>
        </div>
    );
};

/* ─── Admin Area (Main Layout) ───────────────────── */
const AdminArea = ({ user }) => {
    const { logout } = useAuth();
    const [activeTab, setActiveTab] = useState('dashboard');
    const [searchTerm, setSearchTerm] = useState('');

    const handleLogout = async () => {
        logout();
        if (user.uid !== 'hardcoded-admin') {
            try { await signOut(auth); } catch (e) { console.error(e); }
        }
    };

    const pageTitle = {
        dashboard: 'System Overview',
        employees: 'Workforce Directory',
        admin_leaves: 'Leave Applications',
        admin_attendance: 'Attendance Feed',
        admin_timesheets: 'Timesheet Review',
        admin_broadcast: 'Broadcasts',
        admin_payroll: 'Payroll Management',
        admin_policies: 'Company Policies',
        audit_log: 'Audit Log',
        roles: 'Roles & Permissions',
        departments: 'Organization Structure',
        documents: 'Document Management',
        performance: 'Performance Management',
        training: 'Training & Compliance',
        assets: 'Asset Management',
        exit: 'Exit Management',
    }[activeTab] || 'Admin Panel';

    return (
        <div style={styles.app}>
            <AdminSidebar activeTab={activeTab} setActiveTab={setActiveTab} user={user} />

            <div style={styles.main}>
                {/* Top bar */}
                <div style={styles.topbar}>
                    <div>
                        <div style={{ fontSize: '11px', fontWeight: '700', color: tokens.colors.secondary, textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: '4px' }}>
                            <span className="material-symbols-outlined" style={{ fontSize: '12px', verticalAlign: 'middle', marginRight: '4px' }}>shield_person</span>
                            INSTANCE: {user?.email?.toUpperCase()}
                        </div>
                        <h1 style={{ fontSize: '24px', fontWeight: '800', color: tokens.colors.primary, letterSpacing: '-0.02em' }}>
                            {pageTitle}
                        </h1>
                    </div>

                    <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
                        {activeTab === 'employees' && (
                            <div style={{ position: 'relative' }}>
                                <input
                                    style={{ ...styles.input, paddingLeft: '44px', width: '280px', backgroundColor: tokens.colors.white, boxShadow: tokens.shadow.sm }}
                                    placeholder="Search workforce..."
                                    value={searchTerm}
                                    onChange={e => setSearchTerm(e.target.value)}
                                />
                                <span className="material-symbols-outlined" style={{ position: 'absolute', left: '14px', top: '50%', transform: 'translateY(-50%)', fontSize: '18px', color: tokens.colors.secondary }}>search</span>
                            </div>
                        )}
                        <NotificationBell user={user} isAdmin={true} />
                        <button onClick={handleLogout} style={{ ...styles.button.outline, padding: '10px 18px', fontSize: '13px', fontWeight: '700', background: tokens.colors.white, color: tokens.colors.error, borderColor: '#FEE2E2' }}
                            onMouseOver={e => { e.currentTarget.style.backgroundColor = '#FEF2F2'; e.currentTarget.style.borderColor = '#FCA5A5'; }}
                            onMouseOut={e => { e.currentTarget.style.backgroundColor = tokens.colors.white; e.currentTarget.style.borderColor = '#FEE2E2'; }}>
                            Sign Out
                            <span className="material-symbols-outlined" style={{ fontSize: '18px' }}>logout</span>
                        </button>
                    </div>
                </div>

                {/* Content */}
                <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
                    {activeTab === 'dashboard' && <Dashboard setActiveTab={setActiveTab} isAdmin={true} user={user} />}
                    {activeTab === 'employees' && <Employees searchTerm={searchTerm} isAdmin={true} />}
                    {activeTab === 'admin_timesheets' && <AdminTimesheets />}
                    {activeTab === 'admin_payroll' && <AdminPayroll />}
                    {activeTab === 'audit_log' && <AuditLog />}
                    {activeTab === 'roles' && <RoleManager adminEmail={user?.email} />}
                    {activeTab === 'departments' && <DeptDesignation adminEmail={user?.email} />}
                    {activeTab === 'documents' && <DocumentManagement adminEmail={user?.email} user={user} />}
                    {activeTab === 'performance' && <Performance adminEmail={user?.email} user={user} isAdmin={true} />}
                    {activeTab === 'training' && <Training adminEmail={user?.email} user={user} isAdmin={true} />}
                    {activeTab === 'assets' && <AssetManager adminEmail={user?.email} />}
                    {activeTab === 'exit' && <ExitManagement adminEmail={user?.email} />}
                    {(activeTab === 'admin_leaves' || activeTab === 'admin_attendance' || activeTab === 'admin_broadcast' || activeTab === 'admin_policies') &&
                        <AdminPanel fixedModule={activeTab.replace('admin_', '')} adminEmail={user?.email} />
                    }
                </div>
            </div>
        </div>
    );
};

export default AdminArea;
