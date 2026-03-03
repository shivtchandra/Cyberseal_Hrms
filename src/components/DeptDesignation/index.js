'use client';
import React, { useState, useEffect } from 'react';
import { db } from '../../firebase';
import { collection, onSnapshot, doc, setDoc, deleteDoc, addDoc } from 'firebase/firestore';
import { styles, tokens } from '../../styles';
import { logAction } from '../../utils/auditLog';

/**
 * Department & Designation Manager (Admin only)
 * Replaces hardcoded department/designation dropdowns with Firestore-backed data.
 */
const DeptDesignation = ({ adminEmail = 'admin' }) => {
    const [departments, setDepartments] = useState([]);
    const [designations, setDesignations] = useState([]);
    const [tab, setTab] = useState('departments');
    const [showModal, setShowModal] = useState(false);
    const [form, setForm] = useState({ name: '', level: '' });
    const [editing, setEditing] = useState(null);

    useEffect(() => {
        const u1 = onSnapshot(collection(db, 'departments'), s =>
            setDepartments(s.docs.map(d => ({ id: d.id, ...d.data() })))
        );
        const u2 = onSnapshot(collection(db, 'designations'), s =>
            setDesignations(s.docs.map(d => ({ id: d.id, ...d.data() })))
        );
        return () => { u1(); u2(); };
    }, []);

    const openCreate = () => { setForm({ name: '', level: '' }); setEditing(null); setShowModal(true); };
    const openEdit = (item) => { setForm({ name: item.name, level: item.level || '' }); setEditing(item); setShowModal(true); };

    const handleSave = async () => {
        if (!form.name.trim()) return;
        const col = tab === 'departments' ? 'departments' : 'designations';
        try {
            if (editing) {
                await setDoc(doc(db, col, editing.id), {
                    name: form.name.trim(),
                    ...(tab === 'designations' && form.level ? { level: parseInt(form.level) } : {}),
                    updatedAt: new Date().toISOString(),
                }, { merge: true });
                await logAction(`${col.toUpperCase()}_UPDATED`, { name: form.name }, adminEmail);
            } else {
                await addDoc(collection(db, col), {
                    name: form.name.trim(),
                    ...(tab === 'designations' && form.level ? { level: parseInt(form.level) } : {}),
                    createdAt: new Date().toISOString(),
                });
                await logAction(`${col.toUpperCase()}_CREATED`, { name: form.name }, adminEmail);
            }
            setShowModal(false);
        } catch (err) {
            console.error(err);
        }
    };

    const handleDelete = async (item) => {
        const col = tab === 'departments' ? 'departments' : 'designations';
        if (!confirm(`Delete "${item.name}"? This will not remove it from existing employee records.`)) return;
        try {
            await deleteDoc(doc(db, col, item.id));
            await logAction(`${col.toUpperCase()}_DELETED`, { name: item.name }, adminEmail);
        } catch (err) { console.error(err); }
    };

    const items = tab === 'departments' ? departments : designations;

    /* Seed default Cyberseal departments */
    const seedDefaults = async () => {
        const depts = ['Security Operations', 'Offensive Security', 'GRC & Compliance', 'Engineering', 'HR & Admin', 'Finance', 'Sales & Marketing', 'Management'];
        const desigs = [
            { name: 'CEO', level: 1 }, { name: 'CTO', level: 1 }, { name: 'Director', level: 2 },
            { name: 'Manager', level: 3 }, { name: 'Team Lead', level: 4 }, { name: 'Senior Analyst', level: 5 },
            { name: 'Analyst', level: 6 }, { name: 'Associate', level: 7 }, { name: 'Intern', level: 8 },
            { name: 'OJT Trainee', level: 8 },
        ];
        try {
            for (const name of depts) await addDoc(collection(db, 'departments'), { name, createdAt: new Date().toISOString() });
            for (const d of desigs) await addDoc(collection(db, 'designations'), { name: d.name, level: d.level, createdAt: new Date().toISOString() });
            await logAction('DEPT_DESIG_SEEDED', { departments: depts.length, designations: desigs.length }, adminEmail);
        } catch (err) { console.error(err); }
    };

    return (
        <div className="animate-fade">
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '28px' }}>
                <div>
                    <h2 style={{ fontSize: '24px', fontWeight: '800', color: tokens.colors.primary }}>Organization Structure</h2>
                    <p style={{ color: tokens.colors.secondary, fontSize: '14px' }}>Manage departments and designations.</p>
                </div>
                <div style={{ display: 'flex', gap: '12px' }}>
                    {departments.length === 0 && designations.length === 0 && (
                        <button onClick={seedDefaults} style={{ ...styles.button.outline, padding: '10px 18px', fontSize: '13px', fontWeight: '700' }}>
                            <span className="material-symbols-outlined" style={{ fontSize: '18px' }}>database</span>
                            Seed Defaults
                        </button>
                    )}
                    <button onClick={openCreate} style={{ ...styles.button.primary, padding: '10px 18px', fontSize: '13px', fontWeight: '700' }}>
                        <span className="material-symbols-outlined" style={{ fontSize: '18px' }}>add</span>
                        Add {tab === 'departments' ? 'Department' : 'Designation'}
                    </button>
                </div>
            </div>

            {/* Tabs */}
            <div style={{ display: 'flex', gap: '4px', marginBottom: '24px', background: '#F1F5F9', borderRadius: '12px', padding: '4px', width: 'fit-content' }}>
                {['departments', 'designations'].map(t => (
                    <button key={t} onClick={() => setTab(t)} style={{
                        padding: '8px 20px', borderRadius: '10px', border: 'none', fontSize: '13px', fontWeight: '700', cursor: 'pointer',
                        background: tab === t ? tokens.colors.white : 'transparent',
                        color: tab === t ? tokens.colors.accent : tokens.colors.secondary,
                        boxShadow: tab === t ? tokens.shadow.sm : 'none',
                        transition: 'all 0.2s ease',
                    }}>
                        {t === 'departments' ? 'Departments' : 'Designations'}
                    </button>
                ))}
            </div>

            {/* Grid */}
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(240px, 1fr))', gap: '16px' }}>
                {items.map(item => (
                    <div key={item.id} style={{ ...styles.card, padding: '20px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                        <div>
                            <div style={{ fontSize: '15px', fontWeight: '700', color: tokens.colors.primary }}>{item.name}</div>
                            {item.level && <div style={{ fontSize: '12px', color: tokens.colors.secondary }}>Level {item.level}</div>}
                        </div>
                        <div style={{ display: 'flex', gap: '4px' }}>
                            <button onClick={() => openEdit(item)} style={styles.button.ghost}>
                                <span className="material-symbols-outlined" style={{ fontSize: '18px' }}>edit</span>
                            </button>
                            <button onClick={() => handleDelete(item)} style={{ ...styles.button.ghost, color: tokens.colors.error }}>
                                <span className="material-symbols-outlined" style={{ fontSize: '18px' }}>delete</span>
                            </button>
                        </div>
                    </div>
                ))}
                {items.length === 0 && (
                    <div style={{ ...styles.card, padding: '50px', textAlign: 'center', gridColumn: '1 / -1', color: tokens.colors.secondary }}>
                        <span className="material-symbols-outlined" style={{ fontSize: '40px', color: '#CBD5E1', display: 'block', marginBottom: '8px' }}>
                            {tab === 'departments' ? 'business' : 'badge'}
                        </span>
                        No {tab} found. Add one or seed defaults.
                    </div>
                )}
            </div>

            {/* Modal */}
            {showModal && (
                <div style={styles.modal} onClick={() => setShowModal(false)}>
                    <div style={{ ...styles.card, width: '100%', maxWidth: '400px', padding: '32px' }} onClick={e => e.stopPropagation()}>
                        <h3 style={{ fontSize: '18px', fontWeight: '800', color: tokens.colors.primary, marginBottom: '20px' }}>
                            {editing ? 'Edit' : 'Create'} {tab === 'departments' ? 'Department' : 'Designation'}
                        </h3>
                        <div style={{ display: 'grid', gap: '16px', marginBottom: '24px' }}>
                            <div>
                                <label style={{ fontSize: '12px', fontWeight: '700', color: tokens.colors.secondary, display: 'block', marginBottom: '6px' }}>Name</label>
                                <input style={styles.input} value={form.name} onChange={e => setForm({ ...form, name: e.target.value })} placeholder={tab === 'departments' ? 'e.g. Security Operations' : 'e.g. Senior Analyst'} />
                            </div>
                            {tab === 'designations' && (
                                <div>
                                    <label style={{ fontSize: '12px', fontWeight: '700', color: tokens.colors.secondary, display: 'block', marginBottom: '6px' }}>Level (1 = highest)</label>
                                    <input style={styles.input} type="number" min="1" value={form.level} onChange={e => setForm({ ...form, level: e.target.value })} placeholder="e.g. 5" />
                                </div>
                            )}
                        </div>
                        <div style={{ display: 'flex', gap: '12px', justifyContent: 'flex-end' }}>
                            <button onClick={() => setShowModal(false)} style={{ ...styles.button.outline, padding: '10px 20px' }}>Cancel</button>
                            <button onClick={handleSave} disabled={!form.name.trim()} style={{ ...styles.button.primary, padding: '10px 20px' }}>
                                {editing ? 'Update' : 'Create'}
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default DeptDesignation;
