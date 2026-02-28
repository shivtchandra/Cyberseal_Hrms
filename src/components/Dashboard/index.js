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
      const allLeaves = s.docs.map(d => d.data());
      if (isAdmin) {
        setLeaveRequests(allLeaves);
      } else {
        setLeaveRequests(allLeaves.filter(l => l.userEmail === user.email));
      }
    });
    const unsubAnnounce = onSnapshot(collection(db, 'announcements'), s => setAnnouncements(s.docs.map(d => ({ id: d.id, ...d.data() }))));
    const unsubHolidays = onSnapshot(collection(db, 'holidays'), s => setHolidays(s.docs.map(d => ({ id: d.id, ...d.data() }))));

    let unsubPersonalAtt;
    if (!isAdmin && user) {
      unsubPersonalAtt = onSnapshot(collection(db, 'attendance'), s => {
        setPersonalAttendance(s.docs.map(d => d.data()).filter(a => a.userEmail === user.email));
      });
    }

    return () => {
      unsubEmp(); unsubLeave(); unsubAnnounce(); unsubHolidays();
      if (unsubPersonalAtt) unsubPersonalAtt();
    };
  }, [isAdmin, user]);

  const currentUser = employees.find(e => e.email === user.email) || user;
  const deptColleagues = employees.filter(e => e.dept === currentUser.dept && e.email !== currentUser.email);

  const adminStats = [
    { label: 'Total Headcount', value: employees.length, icon: 'groups' },
    { label: 'Pending Leaves', value: leaveRequests.filter(l => l.status === 'pending').length, icon: 'event_busy' },
    { label: 'Monthly Payroll', value: `$${Math.round(employees.reduce((acc, curr) => acc + (Number(curr.salary) || 0), 0) / 12).toLocaleString()}`, icon: 'payments' },
  ];

  const today = new Date().toISOString().split('T')[0];
  const punchedInToday = personalAttendance.some(a => a.type === 'in' && a.timestamp?.toDate().toISOString().split('T')[0] === today);

  const upcomingHoliday = holidays
    .filter(h => new Date(h.date) >= new Date())
    .sort((a, b) => new Date(a.date) - new Date(b.date))[0];

  const employeeStats = [
    { label: 'Attendance Today', value: punchedInToday ? 'Clocked In' : 'Pending', icon: 'timer', color: punchedInToday ? tokens.colors.success : tokens.colors.warning },
    { label: 'Leave Balance', value: `${leaveRequests.filter(l => l.status === 'approved').length} / 12`, icon: 'beach_access' },
    { label: 'Next Holiday', value: upcomingHoliday ? upcomingHoliday.name : 'No upcoming', icon: 'celebration' },
  ];

  const stats = isAdmin ? adminStats : employeeStats;

  return (
    <div className="animate-fade">
      <div style={{ marginBottom: '40px', display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
        <div>
          <h1 style={{ fontSize: '28px', fontWeight: '800', color: tokens.colors.primary, marginBottom: '4px' }}>
            {isAdmin ? 'Executive Overview' : `Morning, ${currentUser.name?.split(' ')[0] || 'Staff'}`}
          </h1>
          <p style={{ color: tokens.colors.textMuted, fontSize: '15px' }}>
            {isAdmin ? 'Real-time organization metrics and system insights.' : 'Welcome to your employee workstation. Here is your overview for today.'}
          </p>
        </div>
        {!isAdmin && (
          <div style={{ ...styles.badge('primary'), padding: '8px 16px', borderRadius: '12px' }}>
            <span style={{ fontWeight: '700' }}>{currentUser.dept || 'General'}</span> • {currentUser.role || 'Member'}
          </div>
        )}
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '24px', marginBottom: '40px' }}>
        {stats.map(stat => (
          <div key={stat.label} style={styles.card}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <div>
                <div style={{ fontSize: '14px', fontWeight: '600', color: tokens.colors.textMuted, marginBottom: '8px' }}>{stat.label}</div>
                <div style={{ fontSize: '20px', fontWeight: '800', color: stat.color || tokens.colors.primary }}>{stat.value}</div>
              </div>
              <div style={{
                width: '48px',
                height: '48px',
                background: '#F3F4F6',
                borderRadius: '12px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
              }}>
                <span className="material-symbols-outlined" style={{ fontSize: '24px', color: stat.color || tokens.colors.primary }}>{stat.icon}</span>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: '1.4fr 1fr', gap: '24px' }}>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
          <div style={styles.card}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '24px' }}>
              <h3 style={{ fontSize: '18px', fontWeight: '700' }}>Recent Announcements</h3>
              {isAdmin && (
                <button
                  onClick={() => setActiveTab('admin_broadcast')}
                  style={{ ...styles.button.outline, padding: '6px 12px', fontSize: '12px' }}
                >View All</button>
              )}
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
              {announcements.slice(0, 2).map(a => (
                <div key={a.id} style={{ padding: '16px', borderRadius: '12px', backgroundColor: '#F9FAFB', border: `1px solid ${tokens.colors.border}` }}>
                  <div style={{ fontWeight: '600', fontSize: '14px', marginBottom: '4px', color: tokens.colors.primary }}>{a.content}</div>
                  <div style={{ fontSize: '12px', color: tokens.colors.textMuted }}>{new Date(a.date).toLocaleDateString(undefined, { month: 'long', day: 'numeric', year: 'numeric' })}</div>
                </div>
              ))}
              {announcements.length === 0 && (
                <div style={{ padding: '40px', textAlign: 'center' }}>
                  <span className="material-symbols-outlined" style={{ fontSize: '48px', color: '#E5E7EB', marginBottom: '12px' }}>notifications_off</span>
                  <div style={{ fontSize: '14px', color: tokens.colors.textMuted }}>No recent announcements found.</div>
                </div>
              )}
            </div>
          </div>

          {!isAdmin && deptColleagues.length > 0 && (
            <div style={styles.card}>
              <h3 style={{ fontSize: '18px', fontWeight: '700', marginBottom: '24px' }}>Team Members</h3>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '16px' }}>
                {deptColleagues.map(col => (
                  <div key={col.id} style={{ display: 'flex', alignItems: 'center', gap: '12px', padding: '8px 16px', borderRadius: '12px', border: `1px solid ${tokens.colors.border}`, minWidth: '180px' }}>
                    <div style={{ width: '32px', height: '32px', borderRadius: '50%', background: '#F3F4F6', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: '700', fontSize: '12px', color: tokens.colors.primary }}>
                      {col.name.charAt(0)}
                    </div>
                    <div>
                      <div style={{ fontSize: '13px', fontWeight: '600' }}>{col.name}</div>
                      <div style={{ fontSize: '11px', color: tokens.colors.textMuted }}>{col.role}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>

        <div style={{ ...styles.card, backgroundColor: '#111827', color: 'white', border: 'none' }}>
          <h3 style={{ fontSize: '18px', fontWeight: '700', marginBottom: '8px' }}>
            {isAdmin ? 'Administrative Tools' : 'Quick Actions'}
          </h3>
          <p style={{ color: '#9CA3AF', marginBottom: '32px', fontSize: '14px' }}>
            {isAdmin ? 'Quick access to core management modules.' : 'Useful links for your daily tasks.'}
          </p>

          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px' }}>
            {(isAdmin ? [
              { label: 'Policies', icon: 'gavel', action: () => setActiveTab('admin_policies') },
              { label: 'Broadcast', icon: 'campaign', action: () => setActiveTab('admin_broadcast') },
              { label: 'Leaves', icon: 'event_available', action: () => setActiveTab('admin_leaves') },
              { label: 'Attendance', icon: 'history', action: () => setActiveTab('admin_attendance') }
            ] : [
              { label: 'Punch Clock', icon: 'timer', action: () => setActiveTab('attendance') },
              { label: 'Request Leave', icon: 'event_available', action: () => setActiveTab('leaves') },
              { label: 'My Documents', icon: 'folder_open', action: () => alert('Personal documents coming soon!') },
              { label: 'Payslips', icon: 'receipt_long', action: () => alert('Electronic payslips coming soon!') }
            ]).map(tool => (
              <button
                key={tool.label}
                onClick={tool.action}
                style={{
                  padding: '20px 12px',
                  background: '#1F2937',
                  border: '1px solid #374151',
                  color: 'white',
                  cursor: 'pointer',
                  borderRadius: '12px',
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  gap: '12px',
                  transition: 'all 0.2s ease',
                }}
              >
                <span className="material-symbols-outlined" style={{ fontSize: '24px' }}>{tool.icon}</span>
                <span style={{ fontWeight: '600', fontSize: '13px' }}>{tool.label}</span>
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;