'use client';
import React, { useState, useEffect } from 'react';
import { db } from '../../firebase';
import { collection, onSnapshot, addDoc, updateDoc, doc, query, orderBy } from 'firebase/firestore';
import { styles, tokens } from '../../styles';
import { logAction } from '../../utils/auditLog';

const EXIT_REASONS = ['Resignation', 'Termination', 'Retirement', 'Contract End', 'Mutual Separation'];
const CHECKLIST_ITEMS = [
    { id: 'laptop', label: 'Laptop Returned', icon: 'laptop' },
    { id: 'idcard', label: 'ID Card Returned', icon: 'badge' },
    { id: 'accesscard', label: 'Access Card Returned', icon: 'credit_card' },
    { id: 'email', label: 'Email Deactivated', icon: 'email' },
    { id: 'software', label: 'Software Licenses Revoked', icon: 'apps' },
    { id: 'knowledge', label: 'Knowledge Transfer Done', icon: 'swap_horiz' },
    { id: 'fnf', label: 'F&F Settlement Processed', icon: 'payments' },
    { id: 'noc', label: 'NOC from all Depts', icon: 'fact_check' },
    { id: 'exit_interview', label: 'Exit Interview Completed', icon: 'record_voice_over' },
];

const ExitManagement = ({ adminEmail = 'admin' }) => {
    const [exits, setExits] = useState([]);
    const [employees, setEmployees] = useState([]);
    const [showModal, setShowModal] = useState(false);
    const [selectedExit, setSelectedExit] = useState(null);
    const [form, setForm] = useState({ employeeId: '', reason: 'Resignation', resignationDate: '', lastWorkingDay: '', noticePeriodDays: 30, notes: '' });

    useEffect(() => {
        const u1 = onSnapshot(query(collection(db, 'exits'), orderBy('createdAt', 'desc')), s => setExits(s.docs.map(d => ({ id: d.id, ...d.data() }))));
        const u2 = onSnapshot(collection(db, 'employees'), s => setEmployees(s.docs.map(d => ({ id: d.id, ...d.data() }))));
        return () => { u1(); u2(); };
    }, []);

    const handleCreate = async () => {
        if (!form.employeeId) return;
        const emp = employees.find(e => e.id === form.employeeId);
        try {
            const checklist = {};
            CHECKLIST_ITEMS.forEach(c => checklist[c.id] = false);
            await addDoc(collection(db, 'exits'), { ...form, employeeName: emp?.name || '', status: 'Initiated', checklist, createdAt: new Date().toISOString() });
            await updateDoc(doc(db, 'employees', form.employeeId), { status: 'Notice Period' });
            await logAction('EXIT_INITIATED', { employeeId: form.employeeId, reason: form.reason }, adminEmail);
            setShowModal(false);
        } catch (err) { console.error(err); }
    };

    const toggleChecklist = async (exitId, itemId) => {
        const exit = exits.find(e => e.id === exitId);
        if (!exit) return;
        const updated = { ...exit.checklist, [itemId]: !exit.checklist?.[itemId] };
        try {
            await updateDoc(doc(db, 'exits', exitId), { checklist: updated });
        } catch (err) { console.error(err); }
    };

    const completeExit = async (exit) => {
        if (!confirm(`Complete exit for ${exit.employeeName}? Employee status will be set to Exited.`)) return;
        try {
            await updateDoc(doc(db, 'exits', exit.id), { status: 'Completed', completedAt: new Date().toISOString() });
            await updateDoc(doc(db, 'employees', exit.employeeId), { status: 'Exited', exitDate: new Date().toISOString().split('T')[0] });
            await logAction('EXIT_COMPLETED', { employeeId: exit.employeeId }, adminEmail);
        } catch (err) { console.error(err); }
    };

    const getEmpName = (id) => employees.find(e => e.id === id)?.name || id;
    const getChecklistProgress = (exit) => { const items = CHECKLIST_ITEMS.length; const done = CHECKLIST_ITEMS.filter(c => exit.checklist?.[c.id]).length; return { done, total: items, pct: Math.round((done / items) * 100) }; };

    if (selectedExit) {
        const prog = getChecklistProgress(selectedExit);
        return (
            <div className="animate-fade">
                <button onClick={() => setSelectedExit(null)} style={{ ...styles.button.outline, padding: '8px 16px', fontSize: '13px', fontWeight: '700', marginBottom: '24px' }}>
                    <span className="material-symbols-outlined" style={{ fontSize: '16px' }}>arrow_back</span> Back
                </button>
                <div style={{ ...styles.card, padding: '32px' }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '24px' }}>
                        <div>
                            <h2 style={{ fontSize: '22px', fontWeight: '800', color: tokens.colors.primary }}>{selectedExit.employeeName}</h2>
                            <div style={{ display: 'flex', gap: '10px', marginTop: '8px' }}>
                                <span style={{ fontSize: '12px', fontWeight: '600', padding: '3px 10px', borderRadius: '999px', background: '#FEF2F2', color: '#DC2626' }}>{selectedExit.reason}</span>
                                <span style={{ fontSize: '12px', fontWeight: '600', padding: '3px 10px', borderRadius: '999px', background: selectedExit.status === 'Completed' ? '#F0FDF4' : '#FEF3C7', color: selectedExit.status === 'Completed' ? '#22C55E' : '#D97706' }}>{selectedExit.status}</span>
                            </div>
                        </div>
                        {selectedExit.status !== 'Completed' && (
                            <button onClick={() => completeExit(selectedExit)} disabled={prog.pct < 100}
                                style={{ ...styles.button.primary, padding: '10px 20px', fontSize: '13px', opacity: prog.pct < 100 ? 0.5 : 1 }}>
                                <span className="material-symbols-outlined" style={{ fontSize: '16px' }}>check_circle</span> Complete Exit
                            </button>
                        )}
                    </div>
                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '12px', marginBottom: '24px' }}>
                        <div style={{ padding: '12px', borderRadius: '10px', background: '#F8FAFC' }}>
                            <div style={{ fontSize: '11px', fontWeight: '700', color: tokens.colors.secondary }}>Resignation Date</div>
                            <div style={{ fontSize: '14px', fontWeight: '700', color: tokens.colors.primary }}>{selectedExit.resignationDate || '—'}</div>
                        </div>
                        <div style={{ padding: '12px', borderRadius: '10px', background: '#F8FAFC' }}>
                            <div style={{ fontSize: '11px', fontWeight: '700', color: tokens.colors.secondary }}>Last Working Day</div>
                            <div style={{ fontSize: '14px', fontWeight: '700', color: tokens.colors.primary }}>{selectedExit.lastWorkingDay || '—'}</div>
                        </div>
                        <div style={{ padding: '12px', borderRadius: '10px', background: '#F8FAFC' }}>
                            <div style={{ fontSize: '11px', fontWeight: '700', color: tokens.colors.secondary }}>Notice Period</div>
                            <div style={{ fontSize: '14px', fontWeight: '700', color: tokens.colors.primary }}>{selectedExit.noticePeriodDays || 30} days</div>
                        </div>
                    </div>
                    {/* Progress */}
                    <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '20px' }}>
                        <div style={{ flex: 1, height: '8px', borderRadius: '4px', background: '#F1F5F9', overflow: 'hidden' }}>
                            <div style={{ width: `${prog.pct}%`, height: '100%', borderRadius: '4px', background: prog.pct === 100 ? '#22C55E' : 'linear-gradient(90deg, #D97706, #F59E0B)', transition: 'width 0.3s ease' }} />
                        </div>
                        <span style={{ fontSize: '13px', fontWeight: '800', color: prog.pct === 100 ? '#22C55E' : '#D97706' }}>{prog.done}/{prog.total}</span>
                    </div>
                    {/* Checklist */}
                    <div style={{ display: 'grid', gap: '8px' }}>
                        {CHECKLIST_ITEMS.map(item => (
                            <label key={item.id} style={{ display: 'flex', alignItems: 'center', gap: '12px', padding: '12px 16px', borderRadius: '10px', cursor: 'pointer', border: `1px solid ${selectedExit.checklist?.[item.id] ? '#BBF7D0' : tokens.colors.border}`, background: selectedExit.checklist?.[item.id] ? '#F0FDF4' : 'transparent', transition: 'all 0.2s ease' }}
                                onClick={() => selectedExit.status !== 'Completed' && toggleChecklist(selectedExit.id, item.id)}>
                                <input type="checkbox" checked={!!selectedExit.checklist?.[item.id]} readOnly style={{ width: '18px', height: '18px', accentColor: '#22C55E' }} />
                                <span className="material-symbols-outlined" style={{ fontSize: '18px', color: selectedExit.checklist?.[item.id] ? '#22C55E' : tokens.colors.secondary }}>{item.icon}</span>
                                <span style={{ fontSize: '14px', fontWeight: '600', color: selectedExit.checklist?.[item.id] ? '#22C55E' : tokens.colors.primary, textDecoration: selectedExit.checklist?.[item.id] ? 'line-through' : 'none' }}>{item.label}</span>
                            </label>
                        ))}
                    </div>
                </div>
            </div>
        );
    }

    return (
        <div className="animate-fade">
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '28px' }}>
                <div>
                    <h2 style={{ fontSize: '24px', fontWeight: '800', color: tokens.colors.primary }}>Exit Management</h2>
                    <p style={{ color: tokens.colors.secondary, fontSize: '14px' }}>Offboarding workflow with clearance checklist.</p>
                </div>
                <button onClick={() => setShowModal(true)} style={{ ...styles.button.primary, padding: '10px 18px', fontSize: '13px', fontWeight: '700' }}>
                    <span className="material-symbols-outlined" style={{ fontSize: '18px' }}>person_off</span> Initiate Exit
                </button>
            </div>

            <div style={{ display: 'grid', gap: '12px' }}>
                {exits.map(e => {
                    const prog = getChecklistProgress(e);
                    return (
                        <div key={e.id} onClick={() => setSelectedExit(e)} style={{ ...styles.card, padding: '20px', cursor: 'pointer', display: 'flex', gap: '16px', alignItems: 'center' }}>
                            <div style={{ width: '44px', height: '44px', borderRadius: '12px', background: e.status === 'Completed' ? '#F0FDF4' : '#FEF3C7', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                                <span className="material-symbols-outlined" style={{ fontSize: '22px', color: e.status === 'Completed' ? '#22C55E' : '#D97706' }}>{e.status === 'Completed' ? 'check_circle' : 'pending'}</span>
                            </div>
                            <div style={{ flex: 1 }}>
                                <div style={{ fontSize: '15px', fontWeight: '700', color: tokens.colors.primary }}>{e.employeeName}</div>
                                <div style={{ fontSize: '12px', color: tokens.colors.secondary }}>{e.reason} · LWD: {e.lastWorkingDay || '—'}</div>
                            </div>
                            <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                                <div style={{ width: '60px', height: '6px', borderRadius: '3px', background: '#F1F5F9', overflow: 'hidden' }}>
                                    <div style={{ width: `${prog.pct}%`, height: '100%', borderRadius: '3px', background: prog.pct === 100 ? '#22C55E' : '#D97706' }} />
                                </div>
                                <span style={{ fontSize: '12px', fontWeight: '700', color: tokens.colors.secondary }}>{prog.done}/{prog.total}</span>
                            </div>
                        </div>
                    );
                })}
                {exits.length === 0 && <div style={{ ...styles.card, padding: '50px', textAlign: 'center', color: tokens.colors.secondary }}>
                    <span className="material-symbols-outlined" style={{ fontSize: '40px', color: '#CBD5E1', display: 'block', marginBottom: '8px' }}>person_off</span>No exits initiated.</div>}
            </div>

            {showModal && <div style={styles.modal} onClick={() => setShowModal(false)}><div style={{ ...styles.card, width: '100%', maxWidth: '480px', padding: '32px' }} onClick={e => e.stopPropagation()}>
                <h3 style={{ fontSize: '20px', fontWeight: '800', color: tokens.colors.primary, marginBottom: '24px' }}>Initiate Exit</h3>
                <div style={{ display: 'grid', gap: '16px', marginBottom: '24px' }}>
                    <div><label style={{ fontSize: '12px', fontWeight: '700', color: tokens.colors.secondary, display: 'block', marginBottom: '6px' }}>Employee</label>
                        <select style={styles.input} value={form.employeeId} onChange={e => setForm({ ...form, employeeId: e.target.value })}>
                            <option value="">Select</option>{employees.filter(e => e.status !== 'Exited').map(e => <option key={e.id} value={e.id}>{e.name}</option>)}</select></div>
                    <div><label style={{ fontSize: '12px', fontWeight: '700', color: tokens.colors.secondary, display: 'block', marginBottom: '6px' }}>Reason</label>
                        <select style={styles.input} value={form.reason} onChange={e => setForm({ ...form, reason: e.target.value })}>
                            {EXIT_REASONS.map(r => <option key={r}>{r}</option>)}</select></div>
                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px' }}>
                        <div><label style={{ fontSize: '12px', fontWeight: '700', color: tokens.colors.secondary, display: 'block', marginBottom: '6px' }}>Resignation Date</label>
                            <input style={styles.input} type="date" value={form.resignationDate} onChange={e => setForm({ ...form, resignationDate: e.target.value })} /></div>
                        <div><label style={{ fontSize: '12px', fontWeight: '700', color: tokens.colors.secondary, display: 'block', marginBottom: '6px' }}>Last Working Day</label>
                            <input style={styles.input} type="date" value={form.lastWorkingDay} onChange={e => setForm({ ...form, lastWorkingDay: e.target.value })} /></div>
                    </div>
                </div>
                <div style={{ display: 'flex', gap: '12px', justifyContent: 'flex-end' }}>
                    <button onClick={() => setShowModal(false)} style={{ ...styles.button.outline, padding: '10px 20px' }}>Cancel</button>
                    <button onClick={handleCreate} disabled={!form.employeeId} style={{ ...styles.button.primary, padding: '10px 20px' }}>Initiate</button>
                </div>
            </div></div>}
        </div>
    );
};

export default ExitManagement;
