import React, { useState, useEffect } from 'react';
import { db } from '../../firebase';
import { collection, onSnapshot } from 'firebase/firestore';
import { styles, tokens } from '../../styles';

const Dashboard = ({ setActiveTab, isAdmin, user }) => {
  const [employees, setEmployees] = useState([]);
  const [leaveRequests, setLeaveRequests] = useState([]);
  const [announcements, setAnnouncements] = useState([]);
  const [personalAttendance, setPersonalAttendance] = useState([]);
  const [holidays, setHolidays] = useState([]);

  useEffect(() => {
    const unsubEmp = onSnapshot(collection(db, 'employees'), s => setEmployees(s.docs.map(d => ({ id: d.id, ...d.data() }))));
    const unsubLeave = onSnapshot(collection(db, 'leaveRequests'), s => {
      const all = s.docs.map(d => d.data());
      setLeaveRequests(isAdmin ? all : all.filter(l => l.userEmail === user.email));
    });
    const unsubAnnounce = onSnapshot(collection(db, 'announcements'), s => setAnnouncements(s.docs.map(d => ({ id: d.id, ...d.data() }))));
    const unsubHolidays = onSnapshot(collection(db, 'holidays'), s => setHolidays(s.docs.map(d => ({ id: d.id, ...d.data() }))));

    let unsubAtt;
    if (!isAdmin && user) {
      unsubAtt = onSnapshot(collection(db, 'attendance'), s => {
        setPersonalAttendance(s.docs.map(d => d.data()).filter(a => a.userEmail === user.email));
      });
    }
    return () => { unsubEmp(); unsubLeave(); unsubAnnounce(); unsubHolidays(); if (unsubAtt) unsubAtt(); };
  }, [isAdmin, user]);

  const currentUser = employees.find(e => e.email === user.email) || user;
  const deptColleagues = employees.filter(e => e.dept === currentUser.dept && e.email !== currentUser.email);

  const today = new Date().toISOString().split('T')[0];
  const punchedInToday = personalAttendance.some(a => a.type === 'in' && a.timestamp?.toDate().toISOString().split('T')[0] === today);
  const pendingLeaves = leaveRequests.filter(l => l.status === 'pending').length;
  const approvedLeaves = leaveRequests.filter(l => l.status === 'approved').length;
  const upcomingHoliday = holidays.filter(h => new Date(h.date) >= new Date()).sort((a, b) => new Date(a.date) - new Date(b.date))[0];

  const employeeStats = [
    {
      label: 'Attendance Today',
      value: punchedInToday ? 'Clocked In' : 'Not Clocked In',
      icon: 'timer',
      color: punchedInToday ? tokens.colors.success : tokens.colors.warning,
      bg: punchedInToday ? '#F0FDF4' : '#FFFBEB',
      action: () => setActiveTab('attendance'),
    },
    {
      label: 'Leave Balance',
      value: `${approvedLeaves} / 12 used`,
      icon: 'beach_access',
      color: tokens.colors.accent,
      bg: '#F0FDFA',
      action: () => setActiveTab('leaves'),
    },
    {
      label: 'Next Holiday',
      value: upcomingHoliday?.name || 'None Scheduled',
      icon: 'celebration',
      color: '#8B5CF6',
      bg: '#F5F3FF',
      action: null,
    },
  ];

  const adminStats = [
    {
      label: 'Total Headcount',
      value: employees.length,
      icon: 'groups',
      color: tokens.colors.accent,
      bg: '#F0FDFA',
      action: () => setActiveTab('employees'),
    },
    {
      label: 'Pending Leaves',
      value: pendingLeaves,
      icon: 'event_busy',
      color: tokens.colors.warning,
      bg: '#FFFBEB',
      action: () => setActiveTab('admin_leaves'),
    },
    {
      label: 'Monthly Payroll',
      value: `$${Math.round(employees.reduce((acc, cur) => acc + (Number(cur.salary) || 0), 0) / 12).toLocaleString()}`,
      icon: 'payments',
      color: tokens.colors.success,
      bg: '#F0FDF4',
      action: null,
    },
  ];

  const stats = isAdmin ? adminStats : employeeStats;

  const quickLinks = isAdmin ? [
    { label: 'Workforce Directory', icon: 'group', action: () => setActiveTab('employees'), desc: 'View all employees' },
    { label: 'Leave Requests', icon: 'event_available', action: () => setActiveTab('admin_leaves'), desc: 'Pending approvals' },
    { label: 'Attendance Feed', icon: 'history', action: () => setActiveTab('admin_attendance'), desc: 'Daily clock-in log' },
    { label: 'Broadcasts', icon: 'campaign', action: () => setActiveTab('admin_broadcast'), desc: 'Post announcements' },
  ] : [
    { label: 'Punch Clock', icon: 'timer', action: () => setActiveTab('attendance'), desc: 'Clock in or out' },
    { label: 'Request Leave', icon: 'event_available', action: () => setActiveTab('leaves'), desc: 'Submit time off' },
    { label: 'My Profile', icon: 'person', action: () => setActiveTab('profile'), desc: 'View & edit details' },
    { label: 'Policies', icon: 'gavel', action: () => setActiveTab('admin_policies'), desc: 'Company guidelines' },
  ];

  const timeOfDay = () => {
    const h = new Date().getHours();
    if (h < 12) return 'Good morning';
    if (h < 17) return 'Good afternoon';
    return 'Good evening';
  };

  return (
    <div className="animate-fade">

      {/* ── Greeting Row ── */}
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '32px' }}>
        <div>
          <h1 style={{ ...styles.greeting, marginBottom: '4px' }}>
            {isAdmin ? 'Admin Overview' : `${timeOfDay()}, ${currentUser.name?.split(' ')[0] || 'there'}`}
          </h1>
          <p style={{ fontSize: '14px', color: tokens.colors.secondary }}>
            {isAdmin ? 'Platform analytics and workforce health at a glance.' : `Today is ${new Date().toLocaleDateString(undefined, { weekday: 'long', month: 'long', day: 'numeric' })}.`}
          </p>
        </div>
        {!isAdmin && (
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px', padding: '8px 16px', background: '#F0FDFA', border: '1px solid #CCFBF1', borderRadius: tokens.radius.full }}>
            <span style={{ fontSize: '12px', fontWeight: '700', color: tokens.colors.accent }}>{currentUser.dept || 'General'}</span>
            <span style={{ width: '4px', height: '4px', borderRadius: '50%', background: '#CCFBF1', display: 'inline-block' }} />
            <span style={{ fontSize: '12px', fontWeight: '600', color: tokens.colors.secondary }}>{currentUser.role || 'Associate'}</span>
          </div>
        )}
      </div>

      {/* ── Stat Cards ── */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '20px', marginBottom: '28px' }}>
        {stats.map(s => (
          <div
            key={s.label}
            onClick={s.action || undefined}
            style={{
              ...styles.card,
              padding: '24px 28px',
              display: 'flex',
              alignItems: 'center',
              gap: '20px',
              cursor: s.action ? 'pointer' : 'default',
              borderLeft: `3px solid ${s.color}`,
              transition: 'box-shadow 0.2s ease',
            }}
            onMouseOver={e => { if (s.action) e.currentTarget.style.boxShadow = tokens.shadow.md; }}
            onMouseOut={e => { if (s.action) e.currentTarget.style.boxShadow = tokens.shadow.sm; }}
          >
            <div style={{ width: '48px', height: '48px', background: s.bg, borderRadius: '14px', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
              <span className="material-symbols-outlined" style={{ fontSize: '24px', color: s.color }}>{s.icon}</span>
            </div>
            <div>
              <div style={{ fontSize: '11px', fontWeight: '700', color: tokens.colors.secondary, textTransform: 'uppercase', letterSpacing: '0.06em', marginBottom: '4px' }}>{s.label}</div>
              <div style={{ fontSize: '20px', fontWeight: '800', color: tokens.colors.primary, letterSpacing: '-0.02em' }}>{s.value}</div>
            </div>
          </div>
        ))}
      </div>

      {/* ── Body ── */}
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 320px', gap: '24px', alignItems: 'start' }}>

        {/* Announcements */}
        <div style={styles.card}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '24px' }}>
            <div>
              <h3 style={{ fontSize: '16px', fontWeight: '800', color: tokens.colors.primary }}>Announcements</h3>
              <p style={{ fontSize: '13px', color: tokens.colors.secondary, marginTop: '2px' }}>Latest updates from HR &amp; Management</p>
            </div>
            {isAdmin && (
              <button onClick={() => setActiveTab('admin_broadcast')} style={{ ...styles.button.ghost, fontSize: '13px' }}>
                Manage
                <span className="material-symbols-outlined" style={{ fontSize: '16px' }}>arrow_forward</span>
              </button>
            )}
          </div>

          {announcements.length === 0 ? (
            <div style={{ padding: '40px', textAlign: 'center' }}>
              <div style={{ width: '56px', height: '56px', background: '#F8FAFC', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 12px' }}>
                <span className="material-symbols-outlined" style={{ fontSize: '28px', color: '#CBD5E1' }}>notifications_off</span>
              </div>
              <div style={{ fontSize: '14px', fontWeight: '600', color: tokens.colors.secondary }}>No announcements</div>
              <div style={{ fontSize: '12px', color: tokens.colors.secondary, marginTop: '4px', opacity: 0.7 }}>Check back later for updates.</div>
            </div>
          ) : (
            <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
              {announcements.slice(0, 4).map(a => (
                <div key={a.id} style={{ padding: '16px 20px', borderRadius: tokens.radius.md, background: '#F8FAFC', border: `1px solid ${tokens.colors.border}` }}>
                  <div style={{ fontSize: '14px', fontWeight: '600', color: tokens.colors.primary, lineHeight: '1.5', marginBottom: '6px' }}>{a.content}</div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '6px', fontSize: '12px', color: tokens.colors.secondary }}>
                    <span className="material-symbols-outlined" style={{ fontSize: '14px' }}>calendar_today</span>
                    {new Date(a.date).toLocaleDateString(undefined, { month: 'short', day: 'numeric', year: 'numeric' })}
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* Team strip for employees */}
          {!isAdmin && deptColleagues.length > 0 && (
            <div style={{ marginTop: '28px', paddingTop: '24px', borderTop: `1px solid ${tokens.colors.border}` }}>
              <div style={{ fontSize: '12px', fontWeight: '700', color: tokens.colors.secondary, textTransform: 'uppercase', letterSpacing: '0.06em', marginBottom: '16px' }}>Your Team</div>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px' }}>
                {deptColleagues.slice(0, 6).map(col => (
                  <div key={col.id} title={col.name} style={{ display: 'flex', alignItems: 'center', gap: '8px', padding: '8px 14px', borderRadius: tokens.radius.full, background: '#F8FAFC', border: `1px solid ${tokens.colors.border}` }}>
                    <div style={{ width: '24px', height: '24px', borderRadius: '50%', background: tokens.colors.accent + '18', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '11px', fontWeight: '700', color: tokens.colors.accent }}>
                      {col.name.charAt(0)}
                    </div>
                    <span style={{ fontSize: '13px', fontWeight: '600', color: tokens.colors.primary }}>{col.name.split(' ')[0]}</span>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Quick Links panel */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
          <div style={{ fontSize: '12px', fontWeight: '700', color: tokens.colors.secondary, textTransform: 'uppercase', letterSpacing: '0.06em', marginBottom: '8px', paddingLeft: '4px' }}>Quick Actions</div>
          {quickLinks.map(link => (
            <button
              key={link.label}
              onClick={link.action}
              style={{
                width: '100%',
                display: 'flex',
                alignItems: 'center',
                gap: '14px',
                padding: '16px 18px',
                background: tokens.colors.white,
                border: `1px solid ${tokens.colors.border}`,
                borderRadius: tokens.radius.md,
                cursor: 'pointer',
                textAlign: 'left',
                transition: 'all 0.15s ease',
              }}
              onMouseOver={e => { e.currentTarget.style.borderColor = tokens.colors.accent; e.currentTarget.style.background = '#F0FDFA'; }}
              onMouseOut={e => { e.currentTarget.style.borderColor = tokens.colors.border; e.currentTarget.style.background = tokens.colors.white; }}
            >
              <div style={{ width: '36px', height: '36px', background: '#F8FAFC', borderRadius: '10px', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, transition: 'background 0.15s' }}>
                <span className="material-symbols-outlined" style={{ fontSize: '20px', color: tokens.colors.secondary }}>{link.icon}</span>
              </div>
              <div style={{ flex: 1, minWidth: 0 }}>
                <div style={{ fontSize: '14px', fontWeight: '700', color: tokens.colors.primary }}>{link.label}</div>
                <div style={{ fontSize: '12px', color: tokens.colors.secondary }}>{link.desc}</div>
              </div>
              <span className="material-symbols-outlined" style={{ fontSize: '18px', color: tokens.colors.secondary, opacity: 0.5 }}>chevron_right</span>
            </button>
          ))}
        </div>

      </div>
    </div>
  );
};

export default Dashboard;