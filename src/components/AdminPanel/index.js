import React, { useState, useEffect } from 'react';
import { db } from '../../firebase';
import { collection, onSnapshot, query, limit, orderBy, doc, updateDoc, addDoc, setDoc } from 'firebase/firestore';
import { styles, tokens } from '../../styles';
import { exportToCSV } from '../../utils/exportCSV';
import { logAction } from '../../utils/auditLog';

/* Helper used by leave approval to feed admin email through */
const AdminPanel = ({ fixedModule, adminEmail = 'admin' }) => {
  const [currentModule, setCurrentModule] = useState(fixedModule);
  const [allAttendance, setAllAttendance] = useState([]);
  const [announcements, setAnnouncements] = useState([]);
  const [newAnnouncement, setNewAnnouncement] = useState('');
  const [workingDays, setWorkingDays] = useState(['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday']);
  const [holidays, setHolidays] = useState([]);
  const [newHoliday, setNewHoliday] = useState({ name: '', date: '' });
  const [leavePolicy, setLeavePolicy] = useState({ sick: 10, casual: 12, paid: 15 });
  const [leavePolicySaving, setLeavePolicySaving] = useState(false);
  const [leaveRequests, setLeaveRequests] = useState([]);
  const [employees, setEmployees] = useState([]);
  const [employeeFilter, setEmployeeFilter] = useState('all');
  const [dateFilter, setDateFilter] = useState('');

  // Leave rejection reason state
  const [rejectingId, setRejectingId] = useState(null);
  const [rejectReason, setRejectReason] = useState('');

  // Attendance correction state
  const [showAddPunch, setShowAddPunch] = useState(false);
  const [punchForm, setPunchForm] = useState({ userEmail: '', date: '', time: '', type: 'in' });
  const [savingPunch, setSavingPunch] = useState(false);

  useEffect(() => { setCurrentModule(fixedModule); }, [fixedModule]);

  useEffect(() => {
    const unsub = [
      onSnapshot(query(collection(db, 'attendance'), orderBy('timestamp', 'desc'), limit(200)), s =>
        setAllAttendance(s.docs.map(d => ({ id: d.id, ...d.data() })))),
      onSnapshot(collection(db, 'leaveRequests'), s =>
        setLeaveRequests(s.docs.map(d => ({ id: d.id, ...d.data() })))),
      onSnapshot(collection(db, 'holidays'), s =>
        setHolidays(s.docs.map(d => ({ id: d.id, ...d.data() })))),
      onSnapshot(query(collection(db, 'announcements'), orderBy('date', 'desc'), limit(5)), s =>
        setAnnouncements(s.docs.map(d => ({ id: d.id, ...d.data() })))),
      onSnapshot(collection(db, 'employees'), s =>
        setEmployees(s.docs.map(d => ({ id: d.id, ...d.data() })))),
      onSnapshot(doc(db, 'config', 'leavePolicy'), snap => { if (snap.exists()) setLeavePolicy(snap.data()); }),
    ];
    return () => unsub.forEach(fn => fn());
  }, []);

  const moduleHeaderStyle = {
    display: 'flex', justifyContent: 'space-between', alignItems: 'center',
    marginBottom: '32px', paddingBottom: '20px', borderBottom: `1px solid ${tokens.colors.border}`,
  };

  /* ─── Leave Approval Actions ─── */
  const handleApprove = async (req) => {
    await updateDoc(doc(db, 'leaveRequests', req.id), { status: 'approved' });
    await logAction('LEAVE_APPROVED', { employee: req.userEmail, type: req.type, start: req.start, end: req.end }, adminEmail);
  };

  const handleReject = async () => {
    if (!rejectingId) return;
    await updateDoc(doc(db, 'leaveRequests', rejectingId), { status: 'rejected', rejectionReason: rejectReason.trim() || 'No reason provided.' });
    await logAction('LEAVE_REJECTED', { leaveId: rejectingId, reason: rejectReason }, adminEmail);
    setRejectingId(null);
    setRejectReason('');
  };

  /* ─── Manual Punch Add ─── */
  const handleAddPunch = async () => {
    if (!punchForm.userEmail || !punchForm.date || !punchForm.time) return;
    setSavingPunch(true);
    const datetime = new Date(`${punchForm.date}T${punchForm.time}`);
    await addDoc(collection(db, 'attendance'), {
      userEmail: punchForm.userEmail, type: punchForm.type,
      timestamp: datetime, date: punchForm.date, timeString: punchForm.time,
      manuallyAdded: true, addedBy: adminEmail,
    });
    await logAction('ATTENDANCE_CORRECTION', { employee: punchForm.userEmail, type: punchForm.type, date: punchForm.date, time: punchForm.time }, adminEmail);
    setPunchForm({ userEmail: '', date: '', time: '', type: 'in' });
    setShowAddPunch(false);
    setSavingPunch(false);
  };

  const renderModule = () => {
    switch (currentModule) {

      /* ═══════════════ LEAVES ═══════════════ */
      case 'leaves': {
        const filteredLeaves = leaveRequests.filter(l =>
          (employeeFilter === 'all' || l.userEmail === employeeFilter) && l.status === 'pending'
        );
        return (
          <div className="animate-fade">
            {/* Rejection reason modal overlay */}
            {rejectingId && (
              <div style={styles.modal}>
                <div style={{ background: '#fff', borderRadius: tokens.radius.xl, width: '420px', padding: '32px', boxShadow: tokens.shadow.xl }}>
                  <div style={{ fontSize: '18px', fontWeight: '800', color: tokens.colors.primary, marginBottom: '8px' }}>Decline Leave Request</div>
                  <p style={{ fontSize: '13px', color: tokens.colors.secondary, marginBottom: '20px' }}>Provide a reason for declining — this will be visible to the employee.</p>
                  <textarea
                    style={{ ...styles.input, minHeight: '100px', resize: 'none' }}
                    placeholder="e.g. Team capacity issue during this period..."
                    value={rejectReason}
                    onChange={e => setRejectReason(e.target.value)}
                  />
                  <div style={{ display: 'flex', gap: '12px', marginTop: '16px' }}>
                    <button onClick={() => { setRejectingId(null); setRejectReason(''); }} style={{ ...styles.button.outline, flex: 1, justifyContent: 'center' }}>Cancel</button>
                    <button onClick={handleReject} style={{ ...styles.button.primary, flex: 2, justifyContent: 'center', background: '#EF4444' }}>
                      <span className="material-symbols-outlined" style={{ fontSize: '18px' }}>block</span> Confirm Decline
                    </button>
                  </div>
                </div>
              </div>
            )}

            <div style={moduleHeaderStyle}>
              <div>
                <h2 style={{ fontSize: '24px', fontWeight: '800', color: tokens.colors.primary }}>Leave Applications</h2>
                <p style={{ color: tokens.colors.secondary, fontSize: '14px' }}>Review and manage employee time-off requests.</p>
              </div>
              <select style={{ ...styles.input, width: '200px' }} value={employeeFilter} onChange={e => setEmployeeFilter(e.target.value)}>
                <option value="all">All Employees</option>
                {employees.map(emp => <option key={emp.id} value={emp.email}>{emp.name}</option>)}
              </select>
            </div>

            <div style={styles.card}>
              <table style={{ width: '100%', borderCollapse: 'collapse' }}>
                <thead><tr>
                  <th style={styles.th}>Employee</th>
                  <th style={styles.th}>Type</th>
                  <th style={styles.th}>Period</th>
                  <th style={styles.th}>Reason</th>
                  <th style={{ ...styles.th, textAlign: 'right' }}>Actions</th>
                </tr></thead>
                <tbody>
                  {filteredLeaves.map(req => (
                    <tr key={req.id}>
                      <td style={styles.td}>
                        <div style={{ fontWeight: '600', color: tokens.colors.primary }}>{req.userEmail?.split('@')[0]}</div>
                        <div style={{ fontSize: '12px', color: tokens.colors.secondary }}>{req.userEmail}</div>
                      </td>
                      <td style={styles.td}><div style={styles.badge('primary')}>{req.type}</div></td>
                      <td style={styles.td}><div style={{ fontSize: '14px' }}>{req.start} → {req.end}</div></td>
                      <td style={{ ...styles.td, maxWidth: '200px' }}>
                        <div style={{ fontSize: '13px', color: tokens.colors.secondary, overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>{req.reason || '—'}</div>
                      </td>
                      <td style={{ ...styles.td, textAlign: 'right' }}>
                        <div style={{ display: 'flex', gap: '8px', justifyContent: 'flex-end' }}>
                          <button onClick={() => handleApprove(req)} style={{ ...styles.button.primary, padding: '6px 14px', fontSize: '13px', background: tokens.colors.success }}>Approve</button>
                          <button onClick={() => setRejectingId(req.id)} style={{ ...styles.button.outline, padding: '6px 14px', fontSize: '13px', color: tokens.colors.error, borderColor: tokens.colors.error }}>Decline</button>
                        </div>
                      </td>
                    </tr>
                  ))}
                  {filteredLeaves.length === 0 && (
                    <tr><td colSpan="5" style={{ textAlign: 'center', padding: '60px', color: tokens.colors.secondary }}>
                      <span className="material-symbols-outlined" style={{ fontSize: '48px', color: '#E5E7EB', marginBottom: '12px', display: 'block' }}>done_all</span>
                      No pending leave requests.
                    </td></tr>
                  )}
                </tbody>
              </table>
            </div>
          </div>
        );
      }

      /* ═══════════════ ATTENDANCE ═══════════════ */
      case 'attendance': {
        const groupedAttendance = allAttendance.reduce((acc, log) => {
          if (!log.timestamp) return acc;
          const d = log.timestamp.toDate ? log.timestamp.toDate() : new Date(log.timestamp);
          const dateStr = d.toLocaleDateString(undefined, { month: 'short', day: 'numeric', year: 'numeric' });
          const key = `${log.userEmail}_${dateStr}`;
          if (!acc[key]) acc[key] = { userEmail: log.userEmail, date: dateStr, in: null, out: null, rawDate: d, manual: false };
          const timeStr = d.toLocaleTimeString(undefined, { hour: '2-digit', minute: '2-digit' });
          if (log.type === 'in') { acc[key].in = timeStr; if (log.manuallyAdded) acc[key].manual = true; }
          if (log.type === 'out') { acc[key].out = timeStr; if (log.manuallyAdded) acc[key].manual = true; }
          return acc;
        }, {});

        const attendanceRows = Object.values(groupedAttendance)
          .filter(log => {
            const matchesEmp = employeeFilter === 'all' || log.userEmail === employeeFilter;
            const rawDateStr = log.rawDate.toISOString().split('T')[0];
            const matchesDate = !dateFilter || rawDateStr === dateFilter;
            return matchesEmp && matchesDate;
          })
          .sort((a, b) => b.rawDate - a.rawDate);

        const handleExportAttendance = () => {
          exportToCSV(
            attendanceRows.map(r => ({ Employee: r.userEmail, Date: r.date, 'Clock In': r.in || '', 'Clock Out': r.out || '', Manual: r.manual ? 'Yes' : 'No' })),
            `attendance-${dateFilter || 'all'}.csv`
          );
        };

        return (
          <div className="animate-fade">
            <div style={moduleHeaderStyle}>
              <div>
                <h2 style={{ fontSize: '24px', fontWeight: '800', color: tokens.colors.primary, letterSpacing: '-0.02em' }}>Attendance Log</h2>
                <p style={{ color: tokens.colors.secondary, fontSize: '14px', marginTop: '4px' }}>Consolidated view of workforce activity. Add manual corrections below.</p>
              </div>
              <div style={{ display: 'flex', gap: '10px', alignItems: 'center', flexWrap: 'wrap' }}>
                <input type="date" style={{ ...styles.input, width: '160px' }} value={dateFilter} onChange={e => setDateFilter(e.target.value)} />
                <select style={{ ...styles.input, width: '180px' }} value={employeeFilter} onChange={e => setEmployeeFilter(e.target.value)}>
                  <option value="all">All Employees</option>
                  {employees.map(emp => <option key={emp.id} value={emp.email}>{emp.name}</option>)}
                </select>
                <button onClick={() => setShowAddPunch(o => !o)} style={{ ...styles.button.outline, padding: '10px 16px' }}>
                  <span className="material-symbols-outlined" style={{ fontSize: '18px' }}>{showAddPunch ? 'close' : 'add_circle'}</span>
                  Add Punch
                </button>
                <button onClick={handleExportAttendance} style={{ ...styles.button.outline, padding: '10px 16px' }}>
                  <span className="material-symbols-outlined" style={{ fontSize: '18px' }}>ios_share</span>
                  CSV
                </button>
              </div>
            </div>

            {/* Add Punch inline form */}
            {showAddPunch && (
              <div style={{ ...styles.card, marginBottom: '20px', background: '#F8FAFC', border: `1.5px dashed ${tokens.colors.accent}` }}>
                <div style={{ fontSize: '14px', fontWeight: '800', color: tokens.colors.primary, marginBottom: '16px', display: 'flex', alignItems: 'center', gap: '8px' }}>
                  <span className="material-symbols-outlined" style={{ fontSize: '18px', color: tokens.colors.accent }}>edit_square</span>
                  Manual Attendance Correction
                </div>
                <div style={{ display: 'grid', gridTemplateColumns: '2fr 1fr 1fr 1fr auto', gap: '12px', alignItems: 'end' }}>
                  <div>
                    <label style={{ fontSize: '11px', fontWeight: '700', color: tokens.colors.secondary, display: 'block', marginBottom: '5px', textTransform: 'uppercase' }}>Employee</label>
                    <select style={styles.input} value={punchForm.userEmail} onChange={e => setPunchForm({ ...punchForm, userEmail: e.target.value })}>
                      <option value="">Select employee</option>
                      {employees.map(e => <option key={e.id} value={e.email}>{e.name} ({e.email})</option>)}
                    </select>
                  </div>
                  <div>
                    <label style={{ fontSize: '11px', fontWeight: '700', color: tokens.colors.secondary, display: 'block', marginBottom: '5px', textTransform: 'uppercase' }}>Date</label>
                    <input type="date" style={styles.input} value={punchForm.date} onChange={e => setPunchForm({ ...punchForm, date: e.target.value })} />
                  </div>
                  <div>
                    <label style={{ fontSize: '11px', fontWeight: '700', color: tokens.colors.secondary, display: 'block', marginBottom: '5px', textTransform: 'uppercase' }}>Time</label>
                    <input type="time" style={styles.input} value={punchForm.time} onChange={e => setPunchForm({ ...punchForm, time: e.target.value })} />
                  </div>
                  <div>
                    <label style={{ fontSize: '11px', fontWeight: '700', color: tokens.colors.secondary, display: 'block', marginBottom: '5px', textTransform: 'uppercase' }}>Type</label>
                    <select style={styles.input} value={punchForm.type} onChange={e => setPunchForm({ ...punchForm, type: e.target.value })}>
                      <option value="in">Clock In</option>
                      <option value="out">Clock Out</option>
                    </select>
                  </div>
                  <button onClick={handleAddPunch} disabled={savingPunch || !punchForm.userEmail || !punchForm.date || !punchForm.time}
                    style={{ ...styles.button.primary, padding: '10px 18px', opacity: (!punchForm.userEmail || !punchForm.date || !punchForm.time) ? 0.5 : 1 }}>
                    <span className="material-symbols-outlined" style={{ fontSize: '18px' }}>check</span>
                    {savingPunch ? 'Saving…' : 'Save'}
                  </button>
                </div>
              </div>
            )}

            <div style={{ ...styles.card, padding: '0', overflow: 'hidden' }}>
              <table style={{ width: '100%', borderCollapse: 'collapse' }}>
                <thead><tr style={{ backgroundColor: '#F8FAFC' }}>
                  <th style={{ ...styles.th, paddingLeft: '32px' }}>Member</th>
                  <th style={styles.th}>Date</th>
                  <th style={styles.th}>Clock In / Out</th>
                  <th style={{ ...styles.th, textAlign: 'right', paddingRight: '32px' }}>Status</th>
                </tr></thead>
                <tbody>
                  {attendanceRows.map((row, idx) => (
                    <tr key={idx} style={{ transition: 'background-color 0.2s ease', borderBottom: idx === attendanceRows.length - 1 ? 'none' : `1px solid ${tokens.colors.border}` }}
                      onMouseOver={e => e.currentTarget.style.backgroundColor = '#F9FAFB'}
                      onMouseOut={e => e.currentTarget.style.backgroundColor = 'transparent'}>
                      <td style={{ ...styles.td, paddingLeft: '32px' }}>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                          <div style={{ width: '36px', height: '36px', borderRadius: '50%', background: tokens.colors.accent + '10', color: tokens.colors.accent, display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: '700', fontSize: '13px' }}>
                            {row.userEmail?.charAt(0).toUpperCase()}
                          </div>
                          <div>
                            <div style={{ fontWeight: '700', fontSize: '14px', color: tokens.colors.primary }}>{row.userEmail?.split('@')[0]}</div>
                            <div style={{ fontSize: '12px', color: tokens.colors.secondary }}>{row.userEmail}</div>
                          </div>
                        </div>
                      </td>
                      <td style={{ ...styles.td, color: tokens.colors.primary, fontWeight: '500' }}>{row.date}</td>
                      <td style={styles.td}>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                          <div style={{ padding: '6px 12px', background: row.in ? '#ECFDF5' : '#F1F5F9', color: row.in ? tokens.colors.success : tokens.colors.secondary, borderRadius: '8px', fontSize: '13px', fontWeight: '700', border: `1px solid ${row.in ? '#D1FAE5' : tokens.colors.border}` }}>
                            {row.in || '--:--'}
                          </div>
                          <span className="material-symbols-outlined" style={{ fontSize: '16px', color: tokens.colors.border }}>east</span>
                          <div style={{ padding: '6px 12px', background: row.out ? '#F1F5F9' : '#FFF1F2', color: row.out ? tokens.colors.secondary : tokens.colors.error, borderRadius: '8px', fontSize: '13px', fontWeight: '700', border: `1px solid ${row.out ? tokens.colors.border : '#FFE4E6'}` }}>
                            {row.out || 'Active'}
                          </div>
                        </div>
                      </td>
                      <td style={{ ...styles.td, textAlign: 'right', paddingRight: '32px' }}>
                        {row.manual ? (
                          <span style={{ padding: '3px 10px', borderRadius: '999px', fontSize: '11px', fontWeight: '700', background: '#FFF7ED', color: '#D97706', border: '1px solid #FDE68A' }}>⚙ Manual</span>
                        ) : (
                          <span style={{ padding: '3px 10px', borderRadius: '999px', fontSize: '11px', fontWeight: '700', background: '#F0FDFA', color: tokens.colors.accent, border: '1px solid #A7F3D0' }}>✓ Verified</span>
                        )}
                      </td>
                    </tr>
                  ))}
                  {attendanceRows.length === 0 && (
                    <tr><td colSpan="4" style={{ textAlign: 'center', padding: '80px', color: tokens.colors.secondary }}>
                      <div style={{ width: '64px', height: '64px', background: '#F1F5F9', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 16px' }}>
                        <span className="material-symbols-outlined" style={{ fontSize: '32px', color: '#CBD5E1' }}>history</span>
                      </div>
                      <div style={{ fontWeight: '700', fontSize: '16px', color: tokens.colors.primary }}>No Activity Logs</div>
                      <div style={{ fontSize: '14px', marginTop: '4px' }}>Adjust your filters or add a manual punch above.</div>
                    </td></tr>
                  )}
                </tbody>
              </table>
            </div>
          </div>
        );
      }

      /* ═══════════════ BROADCAST ═══════════════ */
      case 'broadcast':
        return (
          <div className="animate-fade">
            <div style={moduleHeaderStyle}>
              <div>
                <h2 style={{ fontSize: '24px', fontWeight: '800', color: tokens.colors.primary }}>Company Broadcasts</h2>
                <p style={{ color: tokens.colors.secondary, fontSize: '14px' }}>Send announcements and alerts to all staff members.</p>
              </div>
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '32px' }}>
              <div style={styles.card}>
                <h3 style={{ fontSize: '18px', fontWeight: '700', marginBottom: '24px' }}>Draft Announcement</h3>
                <textarea style={{ ...styles.input, minHeight: '160px', marginBottom: '20px', resize: 'none' }} placeholder="Type your message..." value={newAnnouncement} onChange={e => setNewAnnouncement(e.target.value)} />
                <button onClick={async () => {
                  if (!newAnnouncement.trim()) return;
                  await addDoc(collection(db, 'announcements'), { content: newAnnouncement, date: new Date().toISOString() });
                  await logAction('BROADCAST_SENT', { preview: newAnnouncement.slice(0, 80) }, adminEmail);
                  setNewAnnouncement('');
                }} style={{ ...styles.button.primary, width: '100%', justifyContent: 'center', padding: '12px' }}>
                  <span className="material-symbols-outlined" style={{ fontSize: '20px' }}>send</span> Dispatch Notice
                </button>
              </div>
              <div style={styles.card}>
                <h3 style={{ fontSize: '18px', fontWeight: '700', marginBottom: '24px' }}>Recent Broadcasts</h3>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                  {announcements.map(a => (
                    <div key={a.id} style={{ padding: '16px', borderRadius: '12px', border: `1px solid ${tokens.colors.border}`, backgroundColor: '#F9FAFB' }}>
                      <div style={{ fontWeight: '600', color: tokens.colors.primary, fontSize: '14px', marginBottom: '6px' }}>{a.content}</div>
                      <div style={{ fontSize: '12px', color: tokens.colors.secondary }}>Sent on {new Date(a.date).toLocaleDateString()}</div>
                    </div>
                  ))}
                  {announcements.length === 0 && <div style={{ textAlign: 'center', padding: '40px', color: tokens.colors.secondary }}>No history found.</div>}
                </div>
              </div>
            </div>
          </div>
        );

      /* ═══════════════ POLICIES ═══════════════ */
      case 'policies':
        return (
          <div className="animate-fade">
            <div style={moduleHeaderStyle}>
              <div>
                <h2 style={{ fontSize: '24px', fontWeight: '800', color: tokens.colors.primary }}>Company Policies</h2>
                <p style={{ color: tokens.colors.secondary, fontSize: '14px' }}>Configure working days, holidays, and leave entitlements.</p>
              </div>
            </div>

            {/* Leave Quota */}
            <div style={{ ...styles.card, marginBottom: '28px' }}>
              <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', marginBottom: '24px' }}>
                <div>
                  <h3 style={{ fontSize: '16px', fontWeight: '800', color: tokens.colors.primary }}>Annual Leave Entitlements</h3>
                  <p style={{ fontSize: '13px', color: tokens.colors.secondary, marginTop: '4px' }}>Set how many days employees receive per leave category each year.</p>
                </div>
                <button onClick={async () => {
                  setLeavePolicySaving(true);
                  try { await setDoc(doc(db, 'config', 'leavePolicy'), leavePolicy); } catch (e) { console.error(e); }
                  setLeavePolicySaving(false);
                }} style={{ ...styles.button.primary, padding: '10px 20px', fontSize: '13px' }}>
                  <span className="material-symbols-outlined" style={{ fontSize: '16px' }}>{leavePolicySaving ? 'hourglass_empty' : 'save'}</span>
                  {leavePolicySaving ? 'Saving…' : 'Save Policy'}
                </button>
              </div>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '20px' }}>
                {[
                  { key: 'sick', label: 'Sick Leave', icon: 'medical_services', color: '#F97316', bg: '#FFF7ED' },
                  { key: 'casual', label: 'Casual Leave', icon: 'beach_access', color: '#8B5CF6', bg: '#F5F3FF' },
                  { key: 'paid', label: 'Paid Leave', icon: 'payments', color: tokens.colors.accent, bg: '#F0FDFA' },
                ].map(lt => (
                  <div key={lt.key} style={{ padding: '20px', borderRadius: tokens.radius.md, border: `1px solid ${tokens.colors.border}`, background: lt.bg }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '16px' }}>
                      <div style={{ width: '32px', height: '32px', borderRadius: '10px', background: lt.color + '18', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                        <span className="material-symbols-outlined" style={{ fontSize: '16px', color: lt.color }}>{lt.icon}</span>
                      </div>
                      <span style={{ fontSize: '13px', fontWeight: '700', color: tokens.colors.primary }}>{lt.label}</span>
                    </div>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                      <button type="button" onClick={() => setLeavePolicy(p => ({ ...p, [lt.key]: Math.max(0, (p[lt.key] || 0) - 1) }))}
                        style={{ width: '32px', height: '32px', borderRadius: '50%', border: `1px solid ${tokens.colors.border}`, background: tokens.colors.white, cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                        <span className="material-symbols-outlined" style={{ fontSize: '18px' }}>remove</span>
                      </button>
                      <input type="number" min="0" max="365" value={leavePolicy[lt.key] ?? 0}
                        onChange={e => setLeavePolicy(p => ({ ...p, [lt.key]: parseInt(e.target.value) || 0 }))}
                        style={{ ...styles.input, textAlign: 'center', fontWeight: '800', fontSize: '22px', padding: '8px', flex: 1 }} />
                      <button type="button" onClick={() => setLeavePolicy(p => ({ ...p, [lt.key]: (p[lt.key] || 0) + 1 }))}
                        style={{ width: '32px', height: '32px', borderRadius: '50%', border: `1px solid ${tokens.colors.border}`, background: tokens.colors.white, cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                        <span className="material-symbols-outlined" style={{ fontSize: '18px' }}>add</span>
                      </button>
                    </div>
                    <div style={{ fontSize: '11px', color: tokens.colors.secondary, textAlign: 'center', marginTop: '8px' }}>days per year</div>
                  </div>
                ))}
              </div>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '28px' }}>
              {/* Work Week */}
              <div style={styles.card}>
                <h3 style={{ fontSize: '16px', fontWeight: '800', marginBottom: '24px' }}>Standard Work Week</h3>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                  {['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'].map(day => (
                    <div key={day} style={{ padding: '14px 16px', border: `1px solid ${workingDays.includes(day) ? tokens.colors.accent + '40' : tokens.colors.border}`, borderRadius: '12px', backgroundColor: workingDays.includes(day) ? '#F0FDFA' : '#FFFFFF', color: workingDays.includes(day) ? tokens.colors.accent : tokens.colors.secondary, fontWeight: '600', fontSize: '14px', cursor: 'pointer', display: 'flex', justifyContent: 'space-between', alignItems: 'center', transition: 'all 0.15s ease' }}
                      onClick={() => setWorkingDays(prev => prev.includes(day) ? prev.filter(d => d !== day) : [...prev, day])}>
                      {day}
                      <span className="material-symbols-outlined" style={{ fontSize: '20px', color: workingDays.includes(day) ? tokens.colors.accent : '#E5E7EB' }}>check_circle</span>
                    </div>
                  ))}
                </div>
              </div>
              {/* Holidays */}
              <div style={styles.card}>
                <h3 style={{ fontSize: '16px', fontWeight: '800', marginBottom: '24px' }}>Public Holidays</h3>
                <div style={{ display: 'flex', gap: '12px', marginBottom: '24px' }}>
                  <input style={{ ...styles.input, flex: 2 }} placeholder="Holiday Name" value={newHoliday.name} onChange={e => setNewHoliday({ ...newHoliday, name: e.target.value })} />
                  <input type="date" style={{ ...styles.input, flex: 1.5 }} value={newHoliday.date} onChange={e => setNewHoliday({ ...newHoliday, date: e.target.value })} />
                  <button onClick={async () => { if (!newHoliday.name || !newHoliday.date) return; await addDoc(collection(db, 'holidays'), newHoliday); setNewHoliday({ name: '', date: '' }); }}
                    style={{ ...styles.button.primary, flex: 0.5, justifyContent: 'center', padding: '10px' }}>Add</button>
                </div>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                  {holidays.sort((a, b) => new Date(a.date) - new Date(b.date)).map(h => (
                    <div key={h.id} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '12px 14px', borderRadius: '10px', background: '#F8FAFC', border: `1px solid ${tokens.colors.border}` }}>
                      <span style={{ fontWeight: '600', color: tokens.colors.primary, fontSize: '14px' }}>{h.name}</span>
                      <span style={{ color: tokens.colors.secondary, fontSize: '13px' }}>{new Date(h.date).toLocaleDateString(undefined, { month: 'short', day: 'numeric', year: 'numeric' })}</span>
                    </div>
                  ))}
                  {holidays.length === 0 && <div style={{ textAlign: 'center', padding: '32px', color: tokens.colors.secondary, fontSize: '14px' }}>No holidays added yet.</div>}
                </div>
              </div>
            </div>
          </div>
        );

      default:
        return <div style={{ textAlign: 'center', padding: '100px', color: tokens.colors.secondary }}>Module not found.</div>;
    }
  };

  return renderModule();
};

export default AdminPanel;
