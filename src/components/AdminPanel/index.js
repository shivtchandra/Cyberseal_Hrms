import React, { useState, useEffect } from 'react';
import { db } from '../../firebase';
import { collection, onSnapshot, query, limit, orderBy, doc, updateDoc, addDoc } from 'firebase/firestore';
import { styles, tokens } from '../../styles';

const AdminPanel = ({ fixedModule }) => {
  const [currentModule, setCurrentModule] = useState(fixedModule);
  const [allAttendance, setAllAttendance] = useState([]);
  const [announcements, setAnnouncements] = useState([]);
  const [newAnnouncement, setNewAnnouncement] = useState('');
  const [workingDays, setWorkingDays] = useState(['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday']);
  const [holidays, setHolidays] = useState([]);
  const [newHoliday, setNewHoliday] = useState({ name: '', date: '' });
  const [leaveRequests, setLeaveRequests] = useState([]);
  const [employees, setEmployees] = useState([]);
  const [employeeFilter, setEmployeeFilter] = useState('all');
  const [dateFilter, setDateFilter] = useState('');

  useEffect(() => {
    setCurrentModule(fixedModule);
  }, [fixedModule]);

  useEffect(() => {
    const unsub = [
      onSnapshot(query(collection(db, 'attendance'), orderBy('timestamp', 'desc'), limit(100)), s => setAllAttendance(s.docs.map(d => ({ id: d.id, ...d.data() })))),
      onSnapshot(collection(db, 'leaveRequests'), s => setLeaveRequests(s.docs.map(d => ({ id: d.id, ...d.data() })))),
      onSnapshot(collection(db, 'holidays'), s => setHolidays(s.docs.map(d => ({ id: d.id, ...d.data() })))),
      onSnapshot(query(collection(db, 'announcements'), orderBy('date', 'desc'), limit(5)), s => setAnnouncements(s.docs.map(d => ({ id: d.id, ...d.data() })))),
      onSnapshot(collection(db, 'employees'), s => setEmployees(s.docs.map(d => ({ id: d.id, ...d.data() }))))
    ];
    return () => unsub.forEach(fn => fn());
  }, []);

  const moduleHeaderStyle = {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: '32px',
    paddingBottom: '20px',
    borderBottom: `1px solid ${tokens.colors.border}`,
  };

  const renderModule = () => {
    switch (currentModule) {
      case 'leaves':
        const filteredLeaves = leaveRequests.filter(l => {
          const matchesEmp = employeeFilter === 'all' || l.userEmail === employeeFilter;
          return matchesEmp && l.status === 'pending';
        });

        return (
          <div className="animate-fade">
            <div style={moduleHeaderStyle}>
              <div>
                <h2 style={{ fontSize: '24px', fontWeight: '800', color: tokens.colors.primary }}>Leave Applications</h2>
                <p style={{ color: tokens.colors.textMuted, fontSize: '14px' }}>Review and manage employee time-off requests.</p>
              </div>
              <div style={{ display: 'flex', gap: '12px' }}>
                <select
                  style={{ ...styles.input, width: '200px' }}
                  value={employeeFilter}
                  onChange={e => setEmployeeFilter(e.target.value)}
                >
                  <option value="all">All Employees</option>
                  {employees.map(emp => (
                    <option key={emp.id} value={emp.email}>{emp.name}</option>
                  ))}
                </select>
              </div>
            </div>
            <div style={styles.card}>
              <table style={{ width: '100%', borderCollapse: 'collapse' }}>
                <thead>
                  <tr>
                    <th style={styles.th}>Employee</th>
                    <th style={styles.th}>Type</th>
                    <th style={styles.th}>Period</th>
                    <th style={{ ...styles.th, textAlign: 'right' }}>Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {filteredLeaves.map(req => (
                    <tr key={req.id}>
                      <td style={styles.td}>
                        <div style={{ fontWeight: '600', fontSize: '15px', color: tokens.colors.primary }}>{req.userEmail?.split('@')[0]}</div>
                        <div style={{ fontSize: '12px', color: tokens.colors.textMuted }}>{req.userEmail}</div>
                      </td>
                      <td style={styles.td}>
                        <div style={styles.badge('primary')}>{req.type}</div>
                      </td>
                      <td style={styles.td}>
                        <div style={{ fontSize: '14px' }}>{req.start} to {req.end}</div>
                      </td>
                      <td style={{ ...styles.td, textAlign: 'right' }}>
                        <div style={{ display: 'flex', gap: '8px', justifyContent: 'flex-end' }}>
                          <button
                            onClick={() => updateDoc(doc(db, 'leaveRequests', req.id), { status: 'approved' })}
                            style={{ ...styles.button.primary, padding: '6px 14px', fontSize: '13px', backgroundColor: tokens.colors.success }}
                          >Approve</button>
                          <button
                            onClick={() => updateDoc(doc(db, 'leaveRequests', req.id), { status: 'rejected' })}
                            style={{ ...styles.button.outline, padding: '6px 14px', fontSize: '13px', color: tokens.colors.error, borderColor: tokens.colors.error }}
                          >Decline</button>
                        </div>
                      </td>
                    </tr>
                  ))}
                  {filteredLeaves.length === 0 && (
                    <tr>
                      <td colSpan="4" style={{ textAlign: 'center', padding: '60px', color: tokens.colors.textMuted }}>
                        <span className="material-symbols-outlined" style={{ fontSize: '48px', color: '#E5E7EB', marginBottom: '12px', display: 'block' }}>done_all</span>
                        {employeeFilter === 'all' ? 'No pending leave requests.' : 'No pending requests for this employee.'}
                      </td>
                    </tr>
                  )}
                </tbody>
              </table>
            </div>
          </div>
        );
      case 'attendance':
        const filteredAttendance = allAttendance.filter(log => {
          const matchesEmp = employeeFilter === 'all' || log.userEmail === employeeFilter;
          const logDate = log.timestamp?.toDate().toISOString().split('T')[0];
          const matchesDate = !dateFilter || logDate === dateFilter;
          return matchesEmp && matchesDate;
        });

        return (
          <div className="animate-fade">
            <div style={moduleHeaderStyle}>
              <div>
                <h2 style={{ fontSize: '24px', fontWeight: '800', color: tokens.colors.primary }}>Attendance Records</h2>
                <p style={{ color: tokens.colors.textMuted, fontSize: '14px' }}>Monitoring real-time workforce logs and punch-ins.</p>
              </div>
              <div style={{ display: 'flex', gap: '12px' }}>
                <input
                  type="date"
                  style={{ ...styles.input, width: '160px' }}
                  value={dateFilter}
                  onChange={e => setDateFilter(e.target.value)}
                />
                <select
                  style={{ ...styles.input, width: '200px' }}
                  value={employeeFilter}
                  onChange={e => setEmployeeFilter(e.target.value)}
                >
                  <option value="all">All Employees</option>
                  {employees.map(emp => (
                    <option key={emp.id} value={emp.email}>{emp.name}</option>
                  ))}
                </select>
                <button
                  onClick={() => alert(`Exporting report for ${employeeFilter}...`)}
                  style={{ ...styles.button.outline, padding: '8px 16px', fontSize: '13px' }}
                >
                  <span className="material-symbols-outlined" style={{ fontSize: '18px' }}>download</span> Export
                </button>
              </div>
            </div>
            <div style={styles.card}>
              <table style={{ width: '100%', borderCollapse: 'collapse' }}>
                <thead>
                  <tr>
                    <th style={styles.th}>Member</th>
                    <th style={styles.th}>Activity</th>
                    <th style={styles.th}>Timestamp</th>
                    <th style={{ ...styles.th, textAlign: 'right' }}>Status</th>
                  </tr>
                </thead>
                <tbody>
                  {filteredAttendance.map(log => (
                    <tr key={log.id}>
                      <td style={styles.td}>
                        <div style={{ fontWeight: '600', fontSize: '15px', color: tokens.colors.primary }}>{log.userEmail?.split('@')[0]}</div>
                        <div style={{ fontSize: '12px', color: tokens.colors.textMuted }}>{log.userEmail}</div>
                      </td>
                      <td style={styles.td}>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                          <span style={{
                            width: '8px',
                            height: '8px',
                            borderRadius: '50%',
                            backgroundColor: log.type === 'in' ? tokens.colors.success : tokens.colors.secondary
                          }}></span>
                          <span style={{ fontWeight: '600', textTransform: 'capitalize' }}>{log.type === 'in' ? 'Clock In' : 'Clock Out'}</span>
                        </div>
                      </td>
                      <td style={{ ...styles.td, fontSize: '14px' }}>{log.timestamp?.toDate().toLocaleString(undefined, { dateStyle: 'medium', timeStyle: 'short' }) || 'Processing...'}</td>
                      <td style={{ ...styles.td, textAlign: 'right' }}>
                        <div style={{ ...styles.badge('primary'), fontSize: '11px', color: tokens.colors.success, borderColor: tokens.colors.success }}>Verified</div>
                      </td>
                    </tr>
                  ))}
                  {filteredAttendance.length === 0 && (
                    <tr>
                      <td colSpan="4" style={{ textAlign: 'center', padding: '60px', color: tokens.colors.textMuted }}>
                        <span className="material-symbols-outlined" style={{ fontSize: '48px', color: '#E5E7EB', marginBottom: '12px', display: 'block' }}>history</span>
                        No records found for the selected filters.
                      </td>
                    </tr>
                  )}
                </tbody>
              </table>
            </div>
          </div>
        );
      case 'broadcast':
        return (
          <div className="animate-fade">
            <div style={moduleHeaderStyle}>
              <div>
                <h2 style={{ fontSize: '24px', fontWeight: '800', color: tokens.colors.primary }}>Company Broadcasts</h2>
                <p style={{ color: tokens.colors.textMuted, fontSize: '14px' }}>Send announcements and alerts to all staff members.</p>
              </div>
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '32px' }}>
              <div style={styles.card}>
                <h3 style={{ fontSize: '18px', fontWeight: '700', marginBottom: '24px' }}>Draft Announcement</h3>
                <textarea
                  style={{ ...styles.input, minHeight: '160px', marginBottom: '20px', resize: 'none' }}
                  placeholder="Type your message here..."
                  value={newAnnouncement}
                  onChange={e => setNewAnnouncement(e.target.value)}
                />
                <button
                  onClick={async () => {
                    if (!newAnnouncement.trim()) return;
                    await addDoc(collection(db, 'announcements'), { content: newAnnouncement, date: new Date().toISOString() });
                    setNewAnnouncement('');
                  }}
                  style={{ ...styles.button.primary, width: '100%', justifyContent: 'center', padding: '12px' }}
                >
                  <span className="material-symbols-outlined" style={{ fontSize: '20px' }}>send</span> Dispatch Notice
                </button>
              </div>
              <div style={styles.card}>
                <h3 style={{ fontSize: '18px', fontWeight: '700', marginBottom: '24px' }}>Recent Broadcasts</h3>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                  {announcements.map(a => (
                    <div key={a.id} style={{ padding: '16px', borderRadius: '12px', border: `1px solid ${tokens.colors.border}`, backgroundColor: '#F9FAFB' }}>
                      <div style={{ fontWeight: '600', color: tokens.colors.primary, fontSize: '14px', marginBottom: '6px' }}>{a.content}</div>
                      <div style={{ fontSize: '12px', color: tokens.colors.textMuted }}>Sent on {new Date(a.date).toLocaleDateString()}</div>
                    </div>
                  ))}
                  {announcements.length === 0 && (
                    <div style={{ textAlign: 'center', padding: '40px', color: tokens.colors.textMuted }}>No history found.</div>
                  )}
                </div>
              </div>
            </div>
          </div>
        );
      case 'policies':
        return (
          <div className="animate-fade">
            <div style={moduleHeaderStyle}>
              <div>
                <h2 style={{ fontSize: '24px', fontWeight: '800', color: tokens.colors.primary }}>Company Policies</h2>
                <p style={{ color: tokens.colors.textMuted, fontSize: '14px' }}>Configure working days and standard annual holidays.</p>
              </div>
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '32px' }}>
              <div style={styles.card}>
                <h3 style={{ fontSize: '18px', fontWeight: '700', marginBottom: '24px' }}>Standard Work Week</h3>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                  {['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'].map(day => (
                    <div
                      key={day}
                      style={{
                        padding: '16px',
                        border: `1px solid ${tokens.colors.border}`,
                        borderRadius: '12px',
                        backgroundColor: workingDays.includes(day) ? '#F3F4F6' : '#FFFFFF',
                        color: workingDays.includes(day) ? tokens.colors.primary : tokens.colors.textMuted,
                        fontWeight: '600',
                        fontSize: '14px',
                        cursor: 'pointer',
                        display: 'flex',
                        justifyContent: 'space-between',
                        alignItems: 'center',
                        transition: 'all 0.2s ease'
                      }}
                      onClick={() => setWorkingDays(prev => prev.includes(day) ? prev.filter(d => d !== day) : [...prev, day])}
                    >
                      {day}
                      <span className="material-symbols-outlined" style={{
                        fontSize: '20px',
                        color: workingDays.includes(day) ? tokens.colors.primary : 'transparent'
                      }}>check_circle</span>
                    </div>
                  ))}
                </div>
              </div>
              <div style={styles.card}>
                <h3 style={{ fontSize: '18px', fontWeight: '700', marginBottom: '24px' }}>Public Holidays</h3>
                <div style={{ display: 'flex', gap: '12px', marginBottom: '24px' }}>
                  <input
                    style={{ ...styles.input, flex: 2 }}
                    placeholder="Holiday Name"
                    value={newHoliday.name}
                    onChange={e => setNewHoliday({ ...newHoliday, name: e.target.value })}
                  />
                  <input
                    type="date"
                    style={{ ...styles.input, flex: 1.5 }}
                    value={newHoliday.date}
                    onChange={e => setNewHoliday({ ...newHoliday, date: e.target.value })}
                  />
                  <button
                    onClick={async () => { if (!newHoliday.name || !newHoliday.date) return; await addDoc(collection(db, 'holidays'), newHoliday); setNewHoliday({ name: '', date: '' }); }}
                    style={{ ...styles.button.primary, flex: 0.5, justifyContent: 'center', padding: '10px' }}
                  >Add</button>
                </div>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                  {holidays.map(h => (
                    <div key={h.id} style={{ display: 'flex', justifyContent: 'space-between', padding: '14px', borderBottom: `1px solid ${tokens.colors.border}` }}>
                      <span style={{ fontWeight: '600', color: tokens.colors.primary }}>{h.name}</span>
                      <span style={{ color: tokens.colors.textMuted, fontSize: '14px' }}>{new Date(h.date).toLocaleDateString(undefined, { month: 'short', day: 'numeric', year: 'numeric' })}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        );
      default:
        return <div style={{ textAlign: 'center', padding: '100px', color: tokens.colors.textMuted }}>Module not found.</div>;
    }
  };

  return renderModule();
};

export default AdminPanel;
