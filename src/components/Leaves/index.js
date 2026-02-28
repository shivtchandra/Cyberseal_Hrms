import React, { useState, useEffect, useRef } from 'react';
import { db } from '../../firebase';
import { collection, onSnapshot, addDoc, query, where, serverTimestamp, doc, getDoc } from 'firebase/firestore';
import { styles, tokens } from '../../styles';

/* ─── Mini Calendar Component ────────────────────────────── */
const MiniCalendar = ({ selected, onChange, minDate, label }) => {
  const today = new Date();
  today.setHours(0, 0, 0, 0);
  const min = minDate ? new Date(minDate + 'T00:00:00') : today;

  const [viewDate, setViewDate] = useState(() => {
    const base = selected ? new Date(selected + 'T00:00:00') : (minDate ? new Date(minDate + 'T00:00:00') : new Date());
    return new Date(base.getFullYear(), base.getMonth(), 1);
  });

  const [open, setOpen] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const handler = (e) => { if (ref.current && !ref.current.contains(e.target)) setOpen(false); };
    document.addEventListener('mousedown', handler);
    return () => document.removeEventListener('mousedown', handler);
  }, []);

  const year = viewDate.getFullYear();
  const month = viewDate.getMonth();
  const firstDay = new Date(year, month, 1).getDay();
  const daysInMonth = new Date(year, month + 1, 0).getDate();
  const MONTHS = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
  const DAYS = ['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'];

  const prevMonth = () => setViewDate(new Date(year, month - 1, 1));
  const nextMonth = () => setViewDate(new Date(year, month + 1, 1));

  const selectDay = (d) => {
    const date = new Date(year, month, d);
    if (date < min) return;
    const iso = `${year}-${String(month + 1).padStart(2, '0')}-${String(d).padStart(2, '0')}`;
    onChange(iso);
    setOpen(false);
  };

  const displayValue = selected
    ? new Date(selected + 'T00:00:00').toLocaleDateString(undefined, { month: 'short', day: 'numeric', year: 'numeric' })
    : 'Select date';

  return (
    <div ref={ref} style={{ position: 'relative' }}>
      <label style={{ fontSize: '12px', fontWeight: '700', color: tokens.colors.secondary, textTransform: 'uppercase', letterSpacing: '0.06em', display: 'block', marginBottom: '8px' }}>{label}</label>
      <button
        type="button"
        onClick={() => setOpen(o => !o)}
        style={{
          width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'space-between',
          padding: '10px 14px', background: tokens.colors.white,
          border: `1px solid ${open ? tokens.colors.accent : tokens.colors.border}`,
          borderRadius: tokens.radius.md, cursor: 'pointer', fontSize: '14px',
          fontWeight: selected ? '600' : '400',
          color: selected ? tokens.colors.primary : tokens.colors.secondary,
          transition: 'border-color 0.15s ease',
        }}
      >
        <span style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
          <span className="material-symbols-outlined" style={{ fontSize: '18px', color: tokens.colors.accent }}>calendar_today</span>
          {displayValue}
        </span>
        <span className="material-symbols-outlined" style={{ fontSize: '18px', color: tokens.colors.secondary, transform: open ? 'rotate(180deg)' : 'none', transition: 'transform 0.15s' }}>expand_more</span>
      </button>

      {open && (
        <div style={{
          position: 'absolute', top: 'calc(100% + 8px)', left: 0, zIndex: 100,
          background: tokens.colors.white, borderRadius: tokens.radius.lg,
          boxShadow: '0 8px 32px -8px rgba(0,0,0,0.18)', border: `1px solid ${tokens.colors.border}`,
          padding: '16px', width: '280px',
        }}>
          {/* Nav */}
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '12px' }}>
            <button type="button" onClick={prevMonth} style={{ background: 'none', border: 'none', cursor: 'pointer', padding: '4px', borderRadius: '8px', display: 'flex', alignItems: 'center' }}>
              <span className="material-symbols-outlined" style={{ fontSize: '18px', color: tokens.colors.secondary }}>chevron_left</span>
            </button>
            <span style={{ fontSize: '14px', fontWeight: '700', color: tokens.colors.primary }}>{MONTHS[month]} {year}</span>
            <button type="button" onClick={nextMonth} style={{ background: 'none', border: 'none', cursor: 'pointer', padding: '4px', borderRadius: '8px', display: 'flex', alignItems: 'center' }}>
              <span className="material-symbols-outlined" style={{ fontSize: '18px', color: tokens.colors.secondary }}>chevron_right</span>
            </button>
          </div>
          {/* Day headers */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(7, 1fr)', gap: '2px', marginBottom: '8px' }}>
            {DAYS.map(d => (
              <div key={d} style={{ textAlign: 'center', fontSize: '11px', fontWeight: '700', color: tokens.colors.secondary, padding: '4px 0' }}>{d}</div>
            ))}
          </div>
          {/* Day cells */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(7, 1fr)', gap: '2px' }}>
            {Array.from({ length: firstDay }).map((_, i) => <div key={`e${i}`} />)}
            {Array.from({ length: daysInMonth }, (_, i) => i + 1).map(d => {
              const date = new Date(year, month, d);
              const isPast = date < min;
              const isSelected = selected === `${year}-${String(month + 1).padStart(2, '0')}-${String(d).padStart(2, '0')}`;
              const isToday = date.toDateString() === new Date().toDateString();
              return (
                <button
                  key={d}
                  type="button"
                  onClick={() => selectDay(d)}
                  disabled={isPast}
                  style={{
                    aspectRatio: '1',
                    borderRadius: '8px',
                    border: 'none',
                    fontSize: '13px',
                    fontWeight: isSelected ? '800' : isToday ? '700' : '500',
                    cursor: isPast ? 'not-allowed' : 'pointer',
                    background: isSelected ? tokens.colors.accent : 'transparent',
                    color: isSelected ? '#fff' : isPast ? '#CBD5E1' : isToday ? tokens.colors.accent : tokens.colors.primary,
                    outline: isToday && !isSelected ? `2px solid ${tokens.colors.accent}30` : 'none',
                    transition: 'background 0.1s ease',
                  }}
                  onMouseOver={e => { if (!isPast && !isSelected) e.target.style.background = '#F0FDFA'; }}
                  onMouseOut={e => { if (!isSelected) e.target.style.background = 'transparent'; }}
                >
                  {d}
                </button>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
};

/* ─── Main Leaves Component ───────────────────────────────── */
const Leaves = ({ user }) => {
  const [leaveRequests, setLeaveRequests] = useState([]);
  const [loading, setLoading] = useState(true);
  const [showForm, setShowForm] = useState(false);
  const [leaveConfig, setLeaveConfig] = useState({ sick: 10, casual: 12, paid: 15 });
  const [newLeave, setNewLeave] = useState({ type: 'Casual', start: '', end: '', reason: '' });
  const today = new Date().toISOString().split('T')[0];

  useEffect(() => {
    const q = query(collection(db, 'leaveRequests'), where('userEmail', '==', user.email));
    const unsub = onSnapshot(q, s => {
      const data = s.docs.map(d => ({ id: d.id, ...d.data() })).sort((a, b) => (b.timestamp?.seconds || 0) - (a.timestamp?.seconds || 0));
      setLeaveRequests(data);
      setLoading(false);
    }, err => { console.error(err); setLoading(false); });

    // Load admin leave config
    const configUnsub = onSnapshot(doc(db, 'config', 'leavePolicy'), snap => {
      if (snap.exists()) setLeaveConfig(snap.data());
    });

    return () => { unsub(); configUnsub(); };
  }, [user.email]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!newLeave.start || !newLeave.end) return;
    if (new Date(newLeave.end) < new Date(newLeave.start)) {
      alert('End date cannot be before start date.');
      return;
    }
    try {
      await addDoc(collection(db, 'leaveRequests'), {
        ...newLeave,
        userEmail: user.email,
        status: 'pending',
        timestamp: serverTimestamp()
      });
      setShowForm(false);
      setNewLeave({ type: 'Casual', start: '', end: '', reason: '' });
    } catch (err) {
      console.error(err);
    }
  };

  const approved = leaveRequests.filter(l => l.status === 'approved');
  const pending = leaveRequests.filter(l => l.status === 'pending');

  const leaveTypes = [
    { key: 'Sick', quota: leaveConfig.sick, color: '#F97316', bg: '#FFF7ED', used: approved.filter(l => l.type === 'Sick').length },
    { key: 'Casual', quota: leaveConfig.casual, color: '#8B5CF6', bg: '#F5F3FF', used: approved.filter(l => l.type === 'Casual').length },
    { key: 'Paid', quota: leaveConfig.paid, color: tokens.colors.accent, bg: '#F0FDFA', used: approved.filter(l => l.type === 'Paid').length },
  ];

  const statusStyle = (status) => ({
    display: 'inline-flex', alignItems: 'center', gap: '5px',
    padding: '3px 10px', borderRadius: '999px', fontSize: '12px', fontWeight: '700',
    background: status === 'approved' ? '#ECFDF5' : status === 'pending' ? '#FFFBEB' : '#FEF2F2',
    color: status === 'approved' ? '#059669' : status === 'pending' ? '#D97706' : '#DC2626',
  });

  if (loading) return <div style={{ padding: '40px', color: tokens.colors.secondary }}>Loading leave history...</div>;

  return (
    <div className="animate-fade">

      {/* ── Header ── */}
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '28px' }}>
        <div>
          <h2 style={styles.greeting}>Leave Management</h2>
          <p style={{ color: tokens.colors.secondary, fontSize: '14px', marginTop: '4px' }}>Request and track your personal time off.</p>
        </div>
        <button onClick={() => setShowForm(!showForm)} style={showForm ? { ...styles.button.outline, borderColor: '#FEE2E2', color: tokens.colors.error } : styles.button.primary}>
          <span className="material-symbols-outlined" style={{ fontSize: '18px' }}>{showForm ? 'close' : 'add'}</span>
          {showForm ? 'Discard' : 'New Request'}
        </button>
      </div>

      {/* ── Quota Cards ── */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '16px', marginBottom: '24px' }}>
        {leaveTypes.map(lt => (
          <div key={lt.key} style={{ ...styles.card, padding: '20px 24px', borderLeft: `3px solid ${lt.color}` }}>
            <div style={{ fontSize: '11px', fontWeight: '700', color: tokens.colors.secondary, textTransform: 'uppercase', letterSpacing: '0.06em', marginBottom: '6px' }}>{lt.key} Leave</div>
            <div style={{ fontSize: '24px', fontWeight: '800', color: tokens.colors.primary, letterSpacing: '-0.02em' }}>{lt.quota - lt.used} <span style={{ fontSize: '14px', fontWeight: '500', color: tokens.colors.secondary }}>/ {lt.quota} left</span></div>
            {/* Progress bar */}
            <div style={{ height: '4px', background: '#F1F5F9', borderRadius: '999px', marginTop: '12px', overflow: 'hidden' }}>
              <div style={{ height: '100%', width: `${Math.min((lt.used / lt.quota) * 100, 100)}%`, background: lt.color, borderRadius: '999px', transition: 'width 0.4s ease' }} />
            </div>
          </div>
        ))}
      </div>

      {/* ── Request Form ── */}
      {showForm && (
        <div style={{ ...styles.card, padding: '28px 32px', marginBottom: '24px', border: `1px solid ${tokens.colors.accent}30` }}>
          <h3 style={{ fontSize: '16px', fontWeight: '800', color: tokens.colors.primary, marginBottom: '24px' }}>New Leave Application</h3>
          <form onSubmit={handleSubmit}>
            {/* Leave type */}
            <div style={{ marginBottom: '20px' }}>
              <label style={{ fontSize: '12px', fontWeight: '700', color: tokens.colors.secondary, textTransform: 'uppercase', letterSpacing: '0.06em', display: 'block', marginBottom: '8px' }}>Leave Type</label>
              <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap' }}>
                {leaveTypes.map(lt => (
                  <button
                    key={lt.key} type="button"
                    onClick={() => setNewLeave({ ...newLeave, type: lt.key })}
                    style={{
                      padding: '8px 18px', borderRadius: '999px', fontSize: '13px', fontWeight: '700', cursor: 'pointer',
                      border: `1.5px solid ${newLeave.type === lt.key ? lt.color : tokens.colors.border}`,
                      background: newLeave.type === lt.key ? lt.bg : tokens.colors.white,
                      color: newLeave.type === lt.key ? lt.color : tokens.colors.secondary,
                      transition: 'all 0.15s',
                    }}
                  >
                    {lt.key}
                  </button>
                ))}
              </div>
            </div>

            {/* Date pickers */}
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px', marginBottom: '20px' }}>
              <MiniCalendar
                label="Start Date"
                selected={newLeave.start}
                minDate={today}
                onChange={(date) => setNewLeave({ ...newLeave, start: date, end: newLeave.end && newLeave.end < date ? '' : newLeave.end })}
              />
              <MiniCalendar
                label="End Date"
                selected={newLeave.end}
                minDate={newLeave.start || today}
                onChange={(date) => setNewLeave({ ...newLeave, end: date })}
              />
            </div>

            {/* Reason */}
            <div style={{ marginBottom: '24px' }}>
              <label style={{ fontSize: '12px', fontWeight: '700', color: tokens.colors.secondary, textTransform: 'uppercase', letterSpacing: '0.06em', display: 'block', marginBottom: '8px' }}>Reason</label>
              <textarea
                style={{ ...styles.input, minHeight: '88px', resize: 'none' }}
                value={newLeave.reason}
                onChange={e => setNewLeave({ ...newLeave, reason: e.target.value })}
                required
                placeholder="Briefly describe the reason for your leave..."
              />
            </div>

            <button
              type="submit"
              disabled={!newLeave.start || !newLeave.end}
              style={{
                ...styles.button.primary,
                width: '100%', justifyContent: 'center', padding: '13px',
                opacity: (!newLeave.start || !newLeave.end) ? 0.5 : 1,
              }}
            >
              <span className="material-symbols-outlined" style={{ fontSize: '18px' }}>send</span>
              Submit Request
            </button>
          </form>
        </div>
      )}

      {/* ── History ── */}
      <div style={styles.card}>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '20px' }}>
          <h3 style={{ fontSize: '16px', fontWeight: '800', color: tokens.colors.primary }}>Request History</h3>
          {pending.length > 0 && (
            <span style={{ fontSize: '12px', fontWeight: '700', background: '#FFFBEB', color: '#D97706', padding: '4px 12px', borderRadius: '999px' }}>
              {pending.length} pending
            </span>
          )}
        </div>

        {leaveRequests.length === 0 ? (
          <div style={{ padding: '48px', textAlign: 'center' }}>
            <span className="material-symbols-outlined" style={{ fontSize: '48px', color: '#CBD5E1', display: 'block', marginBottom: '12px' }}>event_busy</span>
            <div style={{ fontSize: '14px', color: tokens.colors.secondary }}>No leave requests yet.</div>
          </div>
        ) : (
          <table style={{ width: '100%', borderCollapse: 'collapse' }}>
            <thead>
              <tr>
                <th style={styles.th}>Type</th>
                <th style={styles.th}>Period</th>
                <th style={styles.th}>Duration</th>
                <th style={styles.th}>Status / Reason</th>
                <th style={{ ...styles.th, textAlign: 'right' }}>Applied</th>
              </tr>
            </thead>
            <tbody>
              {leaveRequests.map(item => {
                const start = new Date(item.start + 'T00:00:00');
                const end = new Date(item.end + 'T00:00:00');
                const days = Math.round((end - start) / (1000 * 60 * 60 * 24)) + 1;
                return (
                  <tr key={item.id}>
                    <td style={styles.td}>
                      <span style={{ fontSize: '14px', fontWeight: '700', color: tokens.colors.primary }}>{item.type}</span>
                    </td>
                    <td style={styles.td}>
                      <span style={{ fontSize: '13px', color: tokens.colors.secondary }}>
                        {start.toLocaleDateString(undefined, { month: 'short', day: 'numeric' })} → {end.toLocaleDateString(undefined, { month: 'short', day: 'numeric', year: 'numeric' })}
                      </span>
                    </td>
                    <td style={styles.td}>
                      <span style={{ fontSize: '13px', fontWeight: '600', color: tokens.colors.primary }}>{days}d</span>
                    </td>
                    <td style={styles.td}>
                      <div>
                        <span style={statusStyle(item.status)}>{item.status}</span>
                        {item.status === 'rejected' && item.rejectionReason && (
                          <div style={{ fontSize: '12px', color: '#DC2626', marginTop: '6px', fontStyle: 'italic', maxWidth: '200px', lineHeight: '1.4' }}>
                            💬 {item.rejectionReason}
                          </div>
                        )}
                      </div>
                    </td>
                    <td style={{ ...styles.td, textAlign: 'right', fontSize: '12px', color: tokens.colors.secondary }}>
                      {item.timestamp?.toDate().toLocaleDateString(undefined, { month: 'short', day: 'numeric', year: 'numeric' }) || '—'}
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        )}
      </div>
    </div>
  );
};

export default Leaves;