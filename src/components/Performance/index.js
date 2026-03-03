'use client';
import React, { useState, useEffect } from 'react';
import { db } from '../../firebase';
import { collection, onSnapshot, addDoc, updateDoc, deleteDoc, doc, query, orderBy } from 'firebase/firestore';
import { styles, tokens } from '../../styles';
import { logAction } from '../../utils/auditLog';

const RATING_LABELS = ['Needs Improvement', 'Below Expectations', 'Meets Expectations', 'Exceeds Expectations', 'Outstanding'];
const REVIEW_TYPES = ['Quarterly', 'Half-Yearly', 'Annual', 'Probation'];

const Performance = ({ adminEmail = 'admin', user = {}, isAdmin = true }) => {
    const [goals, setGoals] = useState([]);
    const [reviews, setReviews] = useState([]);
    const [employees, setEmployees] = useState([]);
    const [activeTab, setActiveTab] = useState('goals');
    const [showModal, setShowModal] = useState(false);
    const [modalType, setModalType] = useState('goal');
    const [form, setForm] = useState({});

    useEffect(() => {
        const u1 = onSnapshot(query(collection(db, 'goals'), orderBy('createdAt', 'desc')), s => setGoals(s.docs.map(d => ({ id: d.id, ...d.data() }))));
        const u2 = onSnapshot(query(collection(db, 'reviews'), orderBy('createdAt', 'desc')), s => setReviews(s.docs.map(d => ({ id: d.id, ...d.data() }))));
        const u3 = onSnapshot(collection(db, 'employees'), s => setEmployees(s.docs.map(d => ({ id: d.id, ...d.data() }))));
        return () => { u1(); u2(); u3(); };
    }, []);

    const openGoal = () => { setForm({ employeeId: '', title: '', description: '', quarter: `Q${Math.ceil((new Date().getMonth() + 1) / 3)} ${new Date().getFullYear()}`, status: 'Draft', weight: 25, progress: 0 }); setModalType('goal'); setShowModal(true); };
    const openReview = () => { setForm({ employeeId: '', reviewType: 'Quarterly', period: '', rating: 3, strengths: '', improvements: '', comments: '' }); setModalType('review'); setShowModal(true); };

    const handleSave = async () => {
        try {
            const col = modalType === 'goal' ? 'goals' : 'reviews';
            await addDoc(collection(db, col), { ...form, createdAt: new Date().toISOString(), createdBy: adminEmail });
            await logAction(`${modalType.toUpperCase()}_CREATED`, { employee: form.employeeId, title: form.title || form.reviewType }, adminEmail);
            setShowModal(false);
        } catch (err) { console.error(err); }
    };

    const updateGoalStatus = async (goalId, status) => {
        try {
            await updateDoc(doc(db, 'goals', goalId), { status, updatedAt: new Date().toISOString() });
        } catch (err) { console.error(err); }
    };

    const getEmpName = (id) => employees.find(e => e.id === id)?.name || id;
    const myGoals = isAdmin ? goals : goals.filter(g => g.employeeId === (user.uid || user.id));
    const myReviews = isAdmin ? reviews : reviews.filter(r => r.employeeId === (user.uid || user.id));

    return (
        <div className="animate-fade">
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '28px' }}>
                <div>
                    <h2 style={{ fontSize: '24px', fontWeight: '800', color: tokens.colors.primary }}>Performance Management</h2>
                    <p style={{ color: tokens.colors.secondary, fontSize: '14px' }}>Goal tracking and performance reviews.</p>
                </div>
                {isAdmin && (
                    <div style={{ display: 'flex', gap: '12px' }}>
                        <button onClick={openReview} style={{ ...styles.button.outline, padding: '10px 18px', fontSize: '13px', fontWeight: '700' }}>
                            <span className="material-symbols-outlined" style={{ fontSize: '18px' }}>rate_review</span> New Review
                        </button>
                        <button onClick={openGoal} style={{ ...styles.button.primary, padding: '10px 18px', fontSize: '13px', fontWeight: '700' }}>
                            <span className="material-symbols-outlined" style={{ fontSize: '18px' }}>flag</span> Set Goal
                        </button>
                    </div>
                )}
            </div>

            {/* Tabs */}
            <div style={{ display: 'flex', gap: '4px', marginBottom: '24px', background: '#F1F5F9', borderRadius: '12px', padding: '4px', width: 'fit-content' }}>
                {[{ id: 'goals', label: 'Goals & KPIs' }, { id: 'reviews', label: 'Reviews' }].map(t => (
                    <button key={t.id} onClick={() => setActiveTab(t.id)} style={{
                        padding: '8px 20px', borderRadius: '10px', border: 'none', fontSize: '13px', fontWeight: '700', cursor: 'pointer',
                        background: activeTab === t.id ? tokens.colors.white : 'transparent',
                        color: activeTab === t.id ? tokens.colors.accent : tokens.colors.secondary,
                        boxShadow: activeTab === t.id ? tokens.shadow.sm : 'none',
                    }}>{t.label}</button>
                ))}
            </div>

            {activeTab === 'goals' && (
                <div style={{ display: 'grid', gap: '12px' }}>
                    {myGoals.map(g => (
                        <div key={g.id} style={{ ...styles.card, padding: '20px', display: 'flex', gap: '16px', alignItems: 'center' }}>
                            <div style={{ width: '44px', height: '44px', borderRadius: '12px', background: g.status === 'Completed' ? '#F0FDF4' : g.status === 'In Progress' ? '#EFF6FF' : '#F8FAFC', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                                <span className="material-symbols-outlined" style={{ fontSize: '22px', color: g.status === 'Completed' ? '#22C55E' : g.status === 'In Progress' ? '#3B82F6' : '#94A3B8' }}>
                                    {g.status === 'Completed' ? 'check_circle' : g.status === 'In Progress' ? 'pending' : 'flag'}
                                </span>
                            </div>
                            <div style={{ flex: 1 }}>
                                <div style={{ display: 'flex', gap: '8px', alignItems: 'center', marginBottom: '4px' }}>
                                    <span style={{ fontSize: '15px', fontWeight: '700', color: tokens.colors.primary }}>{g.title}</span>
                                    <span style={{ fontSize: '11px', fontWeight: '600', padding: '2px 8px', borderRadius: '999px', background: '#F1F5F9', color: tokens.colors.secondary }}>{g.quarter}</span>
                                </div>
                                {isAdmin && <div style={{ fontSize: '12px', color: tokens.colors.secondary }}>{getEmpName(g.employeeId)}</div>}
                                {g.description && <div style={{ fontSize: '13px', color: tokens.colors.secondary, marginTop: '4px' }}>{g.description}</div>}
                                {/* Progress bar */}
                                <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginTop: '8px' }}>
                                    <div style={{ flex: 1, height: '6px', borderRadius: '3px', background: '#F1F5F9', overflow: 'hidden' }}>
                                        <div style={{ width: `${g.progress || 0}%`, height: '100%', borderRadius: '3px', background: 'linear-gradient(90deg, #0D9488, #14B8A6)', transition: 'width 0.3s ease' }} />
                                    </div>
                                    <span style={{ fontSize: '12px', fontWeight: '700', color: tokens.colors.accent, minWidth: '32px' }}>{g.progress || 0}%</span>
                                </div>
                            </div>
                            {isAdmin && (
                                <select value={g.status} onChange={e => updateGoalStatus(g.id, e.target.value)}
                                    style={{ ...styles.input, width: '140px', fontSize: '12px', padding: '6px 10px' }}>
                                    <option value="Draft">Draft</option>
                                    <option value="In Progress">In Progress</option>
                                    <option value="Completed">Completed</option>
                                    <option value="Cancelled">Cancelled</option>
                                </select>
                            )}
                        </div>
                    ))}
                    {myGoals.length === 0 && (
                        <div style={{ ...styles.card, padding: '50px', textAlign: 'center', color: tokens.colors.secondary }}>
                            <span className="material-symbols-outlined" style={{ fontSize: '40px', color: '#CBD5E1', display: 'block', marginBottom: '8px' }}>flag</span>
                            No goals set yet.
                        </div>
                    )}
                </div>
            )}

            {activeTab === 'reviews' && (
                <div style={{ display: 'grid', gap: '12px' }}>
                    {myReviews.map(r => (
                        <div key={r.id} style={{ ...styles.card, padding: '20px' }}>
                            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '12px' }}>
                                <div>
                                    <span style={{ fontSize: '15px', fontWeight: '700', color: tokens.colors.primary }}>{r.reviewType} Review</span>
                                    {isAdmin && <span style={{ fontSize: '13px', color: tokens.colors.secondary, marginLeft: '8px' }}>— {getEmpName(r.employeeId)}</span>}
                                </div>
                                <div style={{ display: 'flex', gap: '4px' }}>
                                    {[1, 2, 3, 4, 5].map(s => (
                                        <span key={s} className="material-symbols-outlined" style={{ fontSize: '18px', color: s <= (r.rating || 0) ? '#FBBF24' : '#CBD5E1' }}>star</span>
                                    ))}
                                </div>
                            </div>
                            <div style={{ fontSize: '13px', fontWeight: '600', color: tokens.colors.accent, marginBottom: '8px' }}>{RATING_LABELS[(r.rating || 1) - 1]}</div>
                            {r.strengths && <div style={{ fontSize: '13px', color: tokens.colors.primary, marginBottom: '6px' }}><strong>Strengths:</strong> {r.strengths}</div>}
                            {r.improvements && <div style={{ fontSize: '13px', color: tokens.colors.primary, marginBottom: '6px' }}><strong>Areas for Improvement:</strong> {r.improvements}</div>}
                            <div style={{ fontSize: '11px', color: tokens.colors.secondary, marginTop: '8px' }}>{r.period} · {r.createdAt ? new Date(r.createdAt).toLocaleDateString('en-IN') : ''}</div>
                        </div>
                    ))}
                    {myReviews.length === 0 && (
                        <div style={{ ...styles.card, padding: '50px', textAlign: 'center', color: tokens.colors.secondary }}>
                            <span className="material-symbols-outlined" style={{ fontSize: '40px', color: '#CBD5E1', display: 'block', marginBottom: '8px' }}>rate_review</span>
                            No reviews yet.
                        </div>
                    )}
                </div>
            )}

            {/* Modal */}
            {showModal && (
                <div style={styles.modal} onClick={() => setShowModal(false)}>
                    <div style={{ ...styles.card, width: '100%', maxWidth: '520px', maxHeight: '80vh', overflow: 'auto', padding: '32px' }} onClick={e => e.stopPropagation()}>
                        <h3 style={{ fontSize: '20px', fontWeight: '800', color: tokens.colors.primary, marginBottom: '24px' }}>
                            {modalType === 'goal' ? 'Set Goal' : 'Create Review'}
                        </h3>
                        <div style={{ display: 'grid', gap: '16px', marginBottom: '24px' }}>
                            <div>
                                <label style={{ fontSize: '12px', fontWeight: '700', color: tokens.colors.secondary, display: 'block', marginBottom: '6px' }}>Employee</label>
                                <select style={styles.input} value={form.employeeId} onChange={e => setForm({ ...form, employeeId: e.target.value })}>
                                    <option value="">Select employee</option>
                                    {employees.map(e => <option key={e.id} value={e.id}>{e.name} ({e.dept || ''})</option>)}
                                </select>
                            </div>
                            {modalType === 'goal' ? (
                                <>
                                    <div><label style={{ fontSize: '12px', fontWeight: '700', color: tokens.colors.secondary, display: 'block', marginBottom: '6px' }}>Goal Title</label>
                                        <input style={styles.input} value={form.title} onChange={e => setForm({ ...form, title: e.target.value })} placeholder="e.g. Complete ISO 27001 audit" /></div>
                                    <div><label style={{ fontSize: '12px', fontWeight: '700', color: tokens.colors.secondary, display: 'block', marginBottom: '6px' }}>Description</label>
                                        <textarea style={{ ...styles.input, minHeight: '80px', resize: 'none' }} value={form.description} onChange={e => setForm({ ...form, description: e.target.value })} /></div>
                                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px' }}>
                                        <div><label style={{ fontSize: '12px', fontWeight: '700', color: tokens.colors.secondary, display: 'block', marginBottom: '6px' }}>Quarter</label>
                                            <input style={styles.input} value={form.quarter} onChange={e => setForm({ ...form, quarter: e.target.value })} /></div>
                                        <div><label style={{ fontSize: '12px', fontWeight: '700', color: tokens.colors.secondary, display: 'block', marginBottom: '6px' }}>Weight (%)</label>
                                            <input style={styles.input} type="number" min="0" max="100" value={form.weight} onChange={e => setForm({ ...form, weight: parseInt(e.target.value) || 0 })} /></div>
                                    </div>
                                </>
                            ) : (
                                <>
                                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px' }}>
                                        <div><label style={{ fontSize: '12px', fontWeight: '700', color: tokens.colors.secondary, display: 'block', marginBottom: '6px' }}>Review Type</label>
                                            <select style={styles.input} value={form.reviewType} onChange={e => setForm({ ...form, reviewType: e.target.value })}>
                                                {REVIEW_TYPES.map(t => <option key={t}>{t}</option>)}</select></div>
                                        <div><label style={{ fontSize: '12px', fontWeight: '700', color: tokens.colors.secondary, display: 'block', marginBottom: '6px' }}>Period</label>
                                            <input style={styles.input} value={form.period} onChange={e => setForm({ ...form, period: e.target.value })} placeholder="e.g. Q4 2025" /></div>
                                    </div>
                                    <div><label style={{ fontSize: '12px', fontWeight: '700', color: tokens.colors.secondary, display: 'block', marginBottom: '6px' }}>Rating (1-5)</label>
                                        <div style={{ display: 'flex', gap: '8px' }}>
                                            {[1, 2, 3, 4, 5].map(s => (
                                                <button key={s} type="button" onClick={() => setForm({ ...form, rating: s })} style={{
                                                    padding: '8px 12px', borderRadius: '8px', border: `1.5px solid ${form.rating >= s ? '#FBBF24' : tokens.colors.border}`,
                                                    background: form.rating >= s ? '#FFFBEB' : 'transparent', cursor: 'pointer', fontSize: '16px',
                                                }}><span className="material-symbols-outlined" style={{ color: form.rating >= s ? '#FBBF24' : '#CBD5E1' }}>star</span></button>
                                            ))}
                                        </div>
                                        <div style={{ fontSize: '12px', color: tokens.colors.accent, marginTop: '4px', fontWeight: '600' }}>{RATING_LABELS[(form.rating || 1) - 1]}</div>
                                    </div>
                                    <div><label style={{ fontSize: '12px', fontWeight: '700', color: tokens.colors.secondary, display: 'block', marginBottom: '6px' }}>Strengths</label>
                                        <textarea style={{ ...styles.input, minHeight: '60px', resize: 'none' }} value={form.strengths} onChange={e => setForm({ ...form, strengths: e.target.value })} /></div>
                                    <div><label style={{ fontSize: '12px', fontWeight: '700', color: tokens.colors.secondary, display: 'block', marginBottom: '6px' }}>Areas for Improvement</label>
                                        <textarea style={{ ...styles.input, minHeight: '60px', resize: 'none' }} value={form.improvements} onChange={e => setForm({ ...form, improvements: e.target.value })} /></div>
                                </>
                            )}
                        </div>
                        <div style={{ display: 'flex', gap: '12px', justifyContent: 'flex-end' }}>
                            <button onClick={() => setShowModal(false)} style={{ ...styles.button.outline, padding: '10px 20px' }}>Cancel</button>
                            <button onClick={handleSave} disabled={!form.employeeId} style={{ ...styles.button.primary, padding: '10px 20px' }}>Save</button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Performance;
