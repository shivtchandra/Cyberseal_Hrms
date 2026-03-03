import React from 'react';
import { styles, tokens } from '../../styles';

const Sidebar = ({ activeTab, setActiveTab, isAdmin }) => {
  const menuItems = isAdmin ? [
    { id: 'dashboard', label: 'Overview', icon: 'grid_view' },
    { id: 'employees', label: 'Workforce Directory', icon: 'group' },
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
      <div style={{ ...styles.logo, padding: '0 28px', marginBottom: '40px' }}>
        <div style={{
          width: '32px',
          height: '32px',
          background: `linear-gradient(135deg, ${tokens.colors.accent} 0%, #065F46 100%)`,
          borderRadius: '10px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          boxShadow: '0 8px 16px -4px rgba(13, 148, 136, 0.4)'
        }}>
          <span className="material-symbols-outlined" style={{ color: '#FFF', fontSize: '18px' }}>bolt</span>
        </div>
        <span style={{ fontWeight: '800', letterSpacing: '-0.03em', fontSize: '20px' }}>Cyberseal HRMS</span>
      </div>

      <div style={{ flex: 1, overflowY: 'auto', padding: '0 8px' }}>
        <div style={{ color: tokens.colors.secondary, fontSize: '11px', fontWeight: '800', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '12px', paddingLeft: '24px', opacity: 0.8 }}>
          Principal Space
        </div>

        {menuItems.map(item => (
          <div
            key={item.id}
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
        ))}

        {isAdmin && (
          <div style={{ marginTop: '32px' }}>
            <div style={{ color: tokens.colors.secondary, fontSize: '11px', fontWeight: '800', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '12px', paddingLeft: '24px', opacity: 0.8 }}>
              Configuration
            </div>
            <div
              style={styles.menuItem(activeTab === 'settings')}
              onClick={() => setActiveTab('settings')}
            >
              <span className="material-symbols-outlined" style={{ fontSize: '20px', opacity: 0.7 }}>settings</span>
              Global Settings
            </div>
          </div>
        )}
      </div>

      <div style={{ padding: '24px 16px', borderTop: `1px solid ${tokens.colors.border}`, marginTop: 'auto' }}>
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '12px',
            padding: '12px',
            borderRadius: tokens.radius.md,
            backgroundColor: '#F8FAFC',
            border: '1px solid transparent',
            transition: 'all 0.2s ease',
            cursor: 'default'
          }}
          onMouseOver={e => { e.currentTarget.style.borderColor = tokens.colors.border; e.currentTarget.style.backgroundColor = '#FFFFFF'; }}
          onMouseOut={e => { e.currentTarget.style.borderColor = 'transparent'; e.currentTarget.style.backgroundColor = '#F8FAFC'; }}
        >
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
            borderRadius: '12px',
            backgroundImage: 'linear-gradient(45deg, #0F172A 0%, #1E293B 100%)'
          }}>
            {isAdmin ? 'A' : 'S'}
          </div>
          <div style={{ flex: 1, minWidth: 0 }}>
            <div style={{ fontSize: '13px', fontWeight: '700', color: tokens.colors.primary, whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>
              {isAdmin ? 'Root Admin' : 'Workforce User'}
            </div>
            <div style={{ fontSize: '11px', color: tokens.colors.secondary }}>Engine v2.1.2</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;