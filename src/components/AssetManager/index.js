'use client';
import React, { useState, useEffect } from 'react';
import { db } from '../../firebase';
import { collection, onSnapshot, addDoc, updateDoc, doc, query, orderBy } from 'firebase/firestore';
import { styles, tokens } from '../../styles';
import { logAction } from '../../utils/auditLog';

const ASSET_TYPES = ['Laptop', 'Desktop', 'Monitor', 'Keyboard/Mouse', 'ID Card', 'Access Card', 'Mobile', 'Software License', 'Other'];
const ASSET_CONDITIONS = ['New', 'Good', 'Fair', 'Damaged', 'Retired'];

const AssetManager = ({ adminEmail = 'admin' }) => {
    const [assets, setAssets] = useState([]);
    const [assignments, setAssignments] = useState([]);
    const [employees, setEmployees] = useState([]);
    const [showModal, setShowModal] = useState(false);
    const [assignModal, setAssignModal] = useState(false);
    const [form, setForm] = useState({});
    const [assignForm, setAssignForm] = useState({ assetId: '', employeeId: '', issuedDate: '' });
    const [filterType, setFilterType] = useState('all');

    useEffect(() => {
        const u1 = onSnapshot(query(collection(db, 'assets'), orderBy('createdAt', 'desc')), s => setAssets(s.docs.map(d => ({ id: d.id, ...d.data() }))));
        const u2 = onSnapshot(collection(db, 'asset_assignments'), s => setAssignments(s.docs.map(d => ({ id: d.id, ...d.data() }))));
        const u3 = onSnapshot(collection(db, 'employees'), s => setEmployees(s.docs.map(d => ({ id: d.id, ...d.data() }))));
        return () => { u1(); u2(); u3(); };
    }, []);

    const openCreate = () => { setForm({ name: '', type: 'Laptop', serialNumber: '', condition: 'New', purchaseDate: '', value: '' }); setShowModal(true); };

    const handleSave = async () => {
        try {
            await addDoc(collection(db, 'assets'), { ...form, status: 'Available', createdAt: new Date().toISOString() });
            await logAction('ASSET_CREATED', { name: form.name, type: form.type }, adminEmail);
            setShowModal(false);
        } catch (err) { console.error(err); }
    };

    const handleAssign = async () => {
        if (!assignForm.assetId || !assignForm.employeeId) return;
        try {
            await addDoc(collection(db, 'asset_assignments'), { ...assignForm, issuedDate: assignForm.issuedDate || new Date().toISOString().split('T')[0], status: 'Issued', assignedAt: new Date().toISOString() });
            await updateDoc(doc(db, 'assets', assignForm.assetId), { status: 'Assigned' });
            await logAction('ASSET_ASSIGNED', { assetId: assignForm.assetId, employeeId: assignForm.employeeId }, adminEmail);
            setAssignModal(false);
        } catch (err) { console.error(err); }
    };

    const handleReturn = async (assignment) => {
        if (!confirm('Mark this asset as returned?')) return;
        try {
            await updateDoc(doc(db, 'asset_assignments', assignment.id), { status: 'Returned', returnedAt: new Date().toISOString() });
            await updateDoc(doc(db, 'assets', assignment.assetId), { status: 'Available' });
            await logAction('ASSET_RETURNED', { assetId: assignment.assetId }, adminEmail);
        } catch (err) { console.error(err); }
    };

    const getEmpName = (id) => employees.find(e => e.id === id)?.name || id;
    const activeAssignments = assignments.filter(a => a.status === 'Issued');
    const filtered = assets.filter(a => filterType === 'all' || a.type === filterType);
    const stats = { total: assets.length, available: assets.filter(a => a.status === 'Available').length, assigned: assets.filter(a => a.status === 'Assigned').length };

    return (
        <div className="animate-fade">
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '28px' }}>
                <div>
                    <h2 style={{ fontSize: '24px', fontWeight: '800', color: tokens.colors.primary }}>Asset Management</h2>
                    <p style={{ color: tokens.colors.secondary, fontSize: '14px' }}>ISO 27001 A.5.9 — Inventory of information & assets.</p>
                </div>
                <div style={{ display: 'flex', gap: '12px' }}>
                    <button onClick={() => setAssignModal(true)} style={{ ...styles.button.outline, padding: '10px 18px', fontSize: '13px', fontWeight: '700' }}>
                        <span className="material-symbols-outlined" style={{ fontSize: '18px' }}>assignment_ind</span> Assign
                    </button>
                    <button onClick={openCreate} style={{ ...styles.button.primary, padding: '10px 18px', fontSize: '13px', fontWeight: '700' }}>
                        <span className="material-symbols-outlined" style={{ fontSize: '18px' }}>add</span> Add Asset
                    </button>
                </div>
            </div>

            {/* Stats */}
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '16px', marginBottom: '24px' }}>
                {[{ label: 'Total', value: stats.total, icon: 'inventory_2', color: '#3B82F6' }, { label: 'Available', value: stats.available, icon: 'check_circle', color: '#22C55E' }, { label: 'Assigned', value: stats.assigned, icon: 'assignment_ind', color: '#D97706' }].map(s => (
                    <div key={s.label} style={{ ...styles.card, padding: '20px', display: 'flex', gap: '16px', alignItems: 'center' }}>
                        <div style={{ width: '44px', height: '44px', borderRadius: '12px', background: `${s.color}15`, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                            <span className="material-symbols-outlined" style={{ fontSize: '22px', color: s.color }}>{s.icon}</span>
                        </div>
                        <div><div style={{ fontSize: '24px', fontWeight: '800', color: tokens.colors.primary }}>{s.value}</div><div style={{ fontSize: '12px', color: tokens.colors.secondary }}>{s.label}</div></div>
                    </div>
                ))}
            </div>

            {/* Filter */}
            <div style={{ display: 'flex', gap: '4px', marginBottom: '20px', background: '#F1F5F9', borderRadius: '12px', padding: '4px', width: 'fit-content', flexWrap: 'wrap' }}>
                {['all', ...ASSET_TYPES.slice(0, 5)].map(t => (
                    <button key={t} onClick={() => setFilterType(t)} style={{ padding: '6px 14px', borderRadius: '10px', border: 'none', fontSize: '12px', fontWeight: '700', cursor: 'pointer', background: filterType === t ? tokens.colors.white : 'transparent', color: filterType === t ? tokens.colors.accent : tokens.colors.secondary, boxShadow: filterType === t ? tokens.shadow.sm : 'none' }}>{t === 'all' ? 'All' : t}</button>
                ))}
            </div>

            {/* Table */}
            <div style={styles.card}>
                {filtered.length === 0 ? <div style={{ textAlign: 'center', padding: '50px', color: tokens.colors.secondary }}>No assets found.</div> : (
                    <table style={{ width: '100%', borderCollapse: 'collapse' }}>
                        <thead><tr><th style={styles.th}>Asset</th><th style={styles.th}>Type</th><th style={styles.th}>Serial</th><th style={styles.th}>Condition</th><th style={styles.th}>Status</th><th style={styles.th}>Assigned To</th></tr></thead>
                        <tbody>{filtered.map(a => {
                            const asgn = activeAssignments.find(x => x.assetId === a.id);
                            return (<tr key={a.id}><td style={styles.td}><strong>{a.name}</strong></td><td style={styles.td}>{a.type}</td><td style={{ ...styles.td, fontFamily: 'monospace', fontSize: '12px' }}>{a.serialNumber || '—'}</td><td style={styles.td}>{a.condition}</td><td style={styles.td}><span style={{ ...styles.badge('outline'), fontSize: '11px', color: a.status === 'Available' ? '#22C55E' : '#D97706' }}>{a.status}</span></td><td style={styles.td}>{asgn ? <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>{getEmpName(asgn.employeeId)} <button onClick={() => handleReturn(asgn)} style={{ ...styles.button.ghost, color: tokens.colors.accent, padding: '2px' }}><span className="material-symbols-outlined" style={{ fontSize: '14px' }}>undo</span></button></div> : '—'}</td></tr>);
                        })}</tbody>
                    </table>
                )}
            </div>

            {/* Add Modal */}
            {showModal && <div style={styles.modal} onClick={() => setShowModal(false)}><div style={{ ...styles.card, width: '100%', maxWidth: '480px', padding: '32px' }} onClick={e => e.stopPropagation()}>
                <h3 style={{ fontSize: '20px', fontWeight: '800', color: tokens.colors.primary, marginBottom: '24px' }}>Add Asset</h3>
                <div style={{ display: 'grid', gap: '16px', marginBottom: '24px' }}>
                    <div><label style={{ fontSize: '12px', fontWeight: '700', color: tokens.colors.secondary, display: 'block', marginBottom: '6px' }}>Name</label><input style={styles.input} value={form.name} onChange={e => setForm({ ...form, name: e.target.value })} placeholder="e.g. Dell Latitude 5540" /></div>
                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px' }}>
                        <div><label style={{ fontSize: '12px', fontWeight: '700', color: tokens.colors.secondary, display: 'block', marginBottom: '6px' }}>Type</label><select style={styles.input} value={form.type} onChange={e => setForm({ ...form, type: e.target.value })}>{ASSET_TYPES.map(t => <option key={t}>{t}</option>)}</select></div>
                        <div><label style={{ fontSize: '12px', fontWeight: '700', color: tokens.colors.secondary, display: 'block', marginBottom: '6px' }}>Condition</label><select style={styles.input} value={form.condition} onChange={e => setForm({ ...form, condition: e.target.value })}>{ASSET_CONDITIONS.map(c => <option key={c}>{c}</option>)}</select></div>
                    </div>
                    <div><label style={{ fontSize: '12px', fontWeight: '700', color: tokens.colors.secondary, display: 'block', marginBottom: '6px' }}>Serial Number</label><input style={{ ...styles.input, fontFamily: 'monospace' }} value={form.serialNumber} onChange={e => setForm({ ...form, serialNumber: e.target.value })} /></div>
                </div>
                <div style={{ display: 'flex', gap: '12px', justifyContent: 'flex-end' }}>
                    <button onClick={() => setShowModal(false)} style={{ ...styles.button.outline, padding: '10px 20px' }}>Cancel</button>
                    <button onClick={handleSave} disabled={!form.name} style={{ ...styles.button.primary, padding: '10px 20px' }}>Add Asset</button>
                </div>
            </div></div>}

            {/* Assign Modal */}
            {assignModal && <div style={styles.modal} onClick={() => setAssignModal(false)}><div style={{ ...styles.card, width: '100%', maxWidth: '440px', padding: '32px' }} onClick={e => e.stopPropagation()}>
                <h3 style={{ fontSize: '20px', fontWeight: '800', color: tokens.colors.primary, marginBottom: '24px' }}>Assign Asset</h3>
                <div style={{ display: 'grid', gap: '16px', marginBottom: '24px' }}>
                    <div><label style={{ fontSize: '12px', fontWeight: '700', color: tokens.colors.secondary, display: 'block', marginBottom: '6px' }}>Asset</label><select style={styles.input} value={assignForm.assetId} onChange={e => setAssignForm({ ...assignForm, assetId: e.target.value })}><option value="">Select</option>{assets.filter(a => a.status === 'Available').map(a => <option key={a.id} value={a.id}>{a.name} — {a.type}</option>)}</select></div>
                    <div><label style={{ fontSize: '12px', fontWeight: '700', color: tokens.colors.secondary, display: 'block', marginBottom: '6px' }}>Employee</label><select style={styles.input} value={assignForm.employeeId} onChange={e => setAssignForm({ ...assignForm, employeeId: e.target.value })}><option value="">Select</option>{employees.map(e => <option key={e.id} value={e.id}>{e.name}</option>)}</select></div>
                    <div><label style={{ fontSize: '12px', fontWeight: '700', color: tokens.colors.secondary, display: 'block', marginBottom: '6px' }}>Issue Date</label><input style={styles.input} type="date" value={assignForm.issuedDate} onChange={e => setAssignForm({ ...assignForm, issuedDate: e.target.value })} /></div>
                </div>
                <div style={{ display: 'flex', gap: '12px', justifyContent: 'flex-end' }}>
                    <button onClick={() => setAssignModal(false)} style={{ ...styles.button.outline, padding: '10px 20px' }}>Cancel</button>
                    <button onClick={handleAssign} disabled={!assignForm.assetId || !assignForm.employeeId} style={{ ...styles.button.primary, padding: '10px 20px' }}>Assign</button>
                </div>
            </div></div>}
        </div>
    );
};

export default AssetManager;
