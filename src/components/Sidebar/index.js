import React from 'react';
import { styles, tokens } from '../../styles';

const Sidebar = ({ activeTab, setActiveTab, isAdmin }) => {
  const menuItems = isAdmin ? [
    { id: 'dashboard', label: 'Overview', icon: 'grid_view' },
    { id: 'employees', label: 'Workforce', icon: 'group' },
    { id: 'admin_leaves', label: 'Leave Management', icon: 'event_available' },
    { id: 'admin_attendance', label: 'Attendance Feed', icon: 'history' },
    { id: 'admin_broadcast', label: 'Broadcasts', icon: 'campaign' },
    { id: 'admin_policies', label: 'Company Policies', icon: 'gavel' },
  ] : [
    { id: 'dashboard', label: 'Overview', icon: 'grid_view' },
    { id: 'attendance', label: 'Punch Clock', icon: 'timer' },
    { id: 'leaves', label: 'My Leaves', icon: 'beach_access' },
    { id: 'profile', label: 'My Profile', icon: 'person' },
  ];

  return (
    <div style={styles.sidebar}>
      <div style={styles.logo}>
        <div style={{
          width: '36px',
          height: '36px',
          background: tokens.colors.primary,
          borderRadius: '8px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center'
        }}>
          <span className="material-symbols-outlined" style={{ color: '#FFF', fontSize: '20px' }}>terminal</span>
        </div>
        <span style={{ letterSpacing: '0.02em' }}>HRM_SYS</span>
      </div>

      <div style={{ flex: 1 }}>
        <div style={{ color: tokens.colors.textMuted, fontSize: '12px', fontWeight: '700', textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '16px', paddingLeft: '32px' }}>
          Menu
        </div>

        {menuItems.map(item => (
          <div
            key={item.id}
            style={styles.menuItem(activeTab === item.id)}
            onClick={() => setActiveTab(item.id)}
          >
            <span className="material-symbols-outlined" style={{ fontSize: '20px' }}>{item.icon}</span>
            {item.label}
          </div>
        ))}
      </div>

      <div style={{ marginTop: 'auto', padding: '24px 16px', borderTop: `1px solid ${tokens.colors.border}` }}>
        <div style={{
          display: 'flex',
          alignItems: 'center',
          gap: '12px',
          padding: '12px',
          borderRadius: '12px',
          backgroundColor: '#FAFAFA'
        }}>
          <div style={{
            width: '40px',
            height: '40px',
            background: tokens.colors.primary,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            fontWeight: '700',
            color: '#FFF',
            fontSize: '14px',
            borderRadius: '50%'
          }}>
            {isAdmin ? 'A' : 'S'}
          </div>
          <div style={{ flex: 1, minWidth: 0 }}>
            <div style={{ fontSize: '14px', fontWeight: '600', color: tokens.colors.primary, whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>
              {isAdmin ? 'Administrator' : 'Staff Member'}
            </div>
            <div style={{ fontSize: '11px', color: tokens.colors.textMuted }}>v2.0.26</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;