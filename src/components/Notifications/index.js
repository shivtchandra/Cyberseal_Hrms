import React, { useState, useEffect, useRef } from 'react';
import { db } from '../../firebase';
import { collection, onSnapshot, query, where, updateDoc, doc } from 'firebase/firestore';
import { tokens } from '../../styles';

/**
 * In-app notification bell.
 * - Admin: shows unread count of pending leave requests
 * - Employee: shows approved/rejected leave decisions they haven't seen
 */
const NotificationBell = ({ user, isAdmin }) => {
    const [notifications, setNotifications] = useState([]);
    const [open, setOpen] = useState(false);
    const ref = useRef(null);

    useEffect(() => {
        let unsub;
        if (isAdmin) {
            // Admin: pending leave requests are notifications
            unsub = onSnapshot(
                query(collection(db, 'leaveRequests'), where('status', '==', 'pending')),
                s => setNotifications(s.docs.map(d => ({
                    id: d.id, type: 'leave_pending',
                    title: 'Leave Request',
                    body: `${d.data().userEmail?.split('@')[0]} requested ${d.data().type} leave`,
                    time: d.data().createdAt || '',
                    read: d.data().adminRead === true,
                    ref: doc(db, 'leaveRequests', d.id),
                    field: 'adminRead',
                })))
            );
        } else {
            // Employee: decisions on their own leave requests
            unsub = onSnapshot(
                query(
                    collection(db, 'leaveRequests'),
                    where('userEmail', '==', user.email),
                    where('status', 'in', ['approved', 'rejected'])
                ),
                s => setNotifications(s.docs
                    .filter(d => d.data().notificationRead !== true)
                    .map(d => ({
                        id: d.id,
                        type: d.data().status,
                        title: d.data().status === 'approved' ? '✅ Leave Approved' : '❌ Leave Declined',
                        body: d.data().status === 'rejected' && d.data().rejectionReason
                            ? `Reason: ${d.data().rejectionReason}`
                            : `Your ${d.data().type} leave (${d.data().start} → ${d.data().end}) was ${d.data().status}.`,
                        time: d.data().updatedAt || '',
                        read: false,
                        ref: doc(db, 'leaveRequests', d.id),
                        field: 'notificationRead',
                    }))
                )
            );
        }
        return () => unsub?.();
    }, [user?.email, isAdmin]);

    // Close on outside click
    useEffect(() => {
        const handler = (e) => { if (ref.current && !ref.current.contains(e.target)) setOpen(false); };
        document.addEventListener('mousedown', handler);
        return () => document.removeEventListener('mousedown', handler);
    }, []);

    const unread = notifications.filter(n => !n.read).length;

    const markRead = async (n) => {
        try { await updateDoc(n.ref, { [n.field]: true }); } catch (e) { console.error(e); }
    };

    const markAllRead = () => notifications.forEach(n => markRead(n));

    const statusColors = {
        leave_pending: { bg: '#FFFBEB', color: '#D97706', icon: 'event_available' },
        approved: { bg: '#ECFDF5', color: '#059669', icon: 'check_circle' },
        rejected: { bg: '#FEF2F2', color: '#DC2626', icon: 'cancel' },
    };

    return (
        <div ref={ref} style={{ position: 'relative' }}>
            <button
                onClick={() => setOpen(o => !o)}
                style={{ position: 'relative', background: 'none', border: `1px solid ${tokens.colors.border}`, borderRadius: '12px', padding: '8px 12px', cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '6px', color: tokens.colors.secondary, transition: 'all 0.2s' }}
                onMouseOver={e => { e.currentTarget.style.background = '#F8FAFC'; e.currentTarget.style.borderColor = tokens.colors.accent; }}
                onMouseOut={e => { e.currentTarget.style.background = 'none'; e.currentTarget.style.borderColor = tokens.colors.border; }}
            >
                <span className="material-symbols-outlined" style={{ fontSize: '20px', color: unread > 0 ? tokens.colors.accent : tokens.colors.secondary }}>
                    {unread > 0 ? 'notifications_active' : 'notifications'}
                </span>
                {unread > 0 && (
                    <span style={{ position: 'absolute', top: '-6px', right: '-6px', background: '#EF4444', color: '#fff', borderRadius: '999px', fontSize: '10px', fontWeight: '800', minWidth: '18px', height: '18px', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '0 4px', border: '2px solid #fff' }}>
                        {unread > 9 ? '9+' : unread}
                    </span>
                )}
            </button>

            {open && (
                <div style={{ position: 'absolute', top: 'calc(100% + 10px)', right: 0, width: '360px', background: '#fff', borderRadius: '16px', boxShadow: '0 20px 60px -10px rgba(0,0,0,0.15)', border: `1px solid ${tokens.colors.border}`, zIndex: 1000, overflow: 'hidden' }}>
                    {/* Header */}
                    <div style={{ padding: '16px 20px', borderBottom: `1px solid ${tokens.colors.border}`, display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                        <div style={{ fontSize: '14px', fontWeight: '800', color: tokens.colors.primary }}>
                            Notifications {unread > 0 && <span style={{ fontSize: '12px', background: '#EF444415', color: '#EF4444', padding: '2px 8px', borderRadius: '999px', marginLeft: '6px' }}>{unread} new</span>}
                        </div>
                        {unread > 0 && (
                            <button onClick={markAllRead} style={{ background: 'none', border: 'none', fontSize: '12px', color: tokens.colors.accent, cursor: 'pointer', fontWeight: '700' }}>Mark all read</button>
                        )}
                    </div>
                    {/* List */}
                    <div style={{ maxHeight: '380px', overflowY: 'auto' }}>
                        {notifications.length === 0 ? (
                            <div style={{ textAlign: 'center', padding: '48px 20px', color: tokens.colors.secondary }}>
                                <span className="material-symbols-outlined" style={{ fontSize: '40px', color: '#CBD5E1', display: 'block', marginBottom: '8px' }}>notifications_off</span>
                                <div style={{ fontSize: '13px' }}>You're all caught up!</div>
                            </div>
                        ) : (
                            notifications.map(n => {
                                const c = statusColors[n.type] || statusColors.leave_pending;
                                return (
                                    <div key={n.id} onClick={() => markRead(n)}
                                        style={{ padding: '14px 20px', borderBottom: `1px solid ${tokens.colors.border}`, cursor: 'pointer', background: n.read ? '#fff' : '#FAFAFA', transition: 'background 0.15s', display: 'flex', gap: '12px', alignItems: 'flex-start' }}
                                        onMouseOver={e => e.currentTarget.style.background = '#F8FAFC'}
                                        onMouseOut={e => e.currentTarget.style.background = n.read ? '#fff' : '#FAFAFA'}>
                                        <div style={{ width: '36px', height: '36px', borderRadius: '10px', background: c.bg, display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                                            <span className="material-symbols-outlined" style={{ fontSize: '18px', color: c.color }}>{c.icon}</span>
                                        </div>
                                        <div style={{ flex: 1, minWidth: 0 }}>
                                            <div style={{ fontSize: '13px', fontWeight: '700', color: tokens.colors.primary, marginBottom: '3px', display: 'flex', alignItems: 'center', gap: '6px' }}>
                                                {n.title}
                                                {!n.read && <span style={{ width: '7px', height: '7px', borderRadius: '50%', background: '#EF4444', display: 'inline-block' }} />}
                                            </div>
                                            <div style={{ fontSize: '12px', color: tokens.colors.secondary, lineHeight: '1.5' }}>{n.body}</div>
                                        </div>
                                    </div>
                                );
                            })
                        )}
                    </div>
                </div>
            )}
        </div>
    );
};

export default NotificationBell;
