'use client';
import React, { useState, useEffect } from 'react';
import { db } from '../../firebase';
import { collection, onSnapshot, addDoc, updateDoc, deleteDoc, doc, query, orderBy } from 'firebase/firestore';
import { styles, tokens } from '../../styles';
import { logAction } from '../../utils/auditLog';

const COURSE_TYPES = ['Mandatory', 'Optional', 'Certification', 'Orientation'];
const STATUSES = ['Not Started', 'In Progress', 'Completed', 'Overdue'];

const Training = ({ adminEmail = 'admin', user = {}, isAdmin = true }) => {
    const [courses, setCourses] = useState([]);
    const [enrollments, setEnrollments] = useState([]);
    const [employees, setEmployees] = useState([]);
    const [showModal, setShowModal] = useState(false);
    const [modalType, setModalType] = useState('course');
    const [form, setForm] = useState({});

    useEffect(() => {
        const u1 = onSnapshot(query(collection(db, 'training_courses'), orderBy('createdAt', 'desc')), s => setCourses(s.docs.map(d => ({ id: d.id, ...d.data() }))));
        const u2 = onSnapshot(collection(db, 'training_enrollments'), s => setEnrollments(s.docs.map(d => ({ id: d.id, ...d.data() }))));
        const u3 = onSnapshot(collection(db, 'employees'), s => setEmployees(s.docs.map(d => ({ id: d.id, ...d.data() }))));
        return () => { u1(); u2(); u3(); };
    }, []);

    const openCourse = () => { setForm({ name: '', description: '', type: 'Mandatory', duration: '', frequency: 'Once', dueDate: '' }); setModalType('course'); setShowModal(true); };
    const openEnroll = () => { setForm({ courseId: '', employeeId: '', dueDate: '', status: 'Not Started' }); setModalType('enroll'); setShowModal(true); };

    const handleSave = async () => {
        try {
            if (modalType === 'course') {
                await addDoc(collection(db, 'training_courses'), { ...form, createdAt: new Date().toISOString() });
                await logAction('TRAINING_COURSE_CREATED', { name: form.name }, adminEmail);
            } else {
                await addDoc(collection(db, 'training_enrollments'), { ...form, enrolledAt: new Date().toISOString() });
                await logAction('TRAINING_ENROLLED', { courseId: form.courseId, employeeId: form.employeeId }, adminEmail);
            }
            setShowModal(false);
        } catch (err) { console.error(err); }
    };

    const updateEnrollment = async (id, status) => {
        try {
            const data = { status, updatedAt: new Date().toISOString() };
            if (status === 'Completed') data.completedAt = new Date().toISOString();
            await updateDoc(doc(db, 'training_enrollments', id), data);
        } catch (err) { console.error(err); }
    };

    const getCourseName = (id) => courses.find(c => c.id === id)?.name || id;
    const getEmpName = (id) => employees.find(e => e.id === id)?.name || id;
    const getEnrollCount = (courseId) => enrollments.filter(e => e.courseId === courseId).length;
    const getCompletedCount = (courseId) => enrollments.filter(e => e.courseId === courseId && e.status === 'Completed').length;

    const myEnrollments = isAdmin ? enrollments : enrollments.filter(e => e.employeeId === (user.uid || user.id));

    return (
        <div className="animate-fade">
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '28px' }}>
                <div>
                    <h2 style={{ fontSize: '24px', fontWeight: '800', color: tokens.colors.primary }}>Training & Compliance</h2>
                    <p style={{ color: tokens.colors.secondary, fontSize: '14px' }}>ISO 27001 A.6.3 — Information security awareness & training.</p>
                </div>
                {isAdmin && (
                    <div style={{ display: 'flex', gap: '12px' }}>
                        <button onClick={openEnroll} style={{ ...styles.button.outline, padding: '10px 18px', fontSize: '13px', fontWeight: '700' }}>
                            <span className="material-symbols-outlined" style={{ fontSize: '18px' }}>person_add</span> Enroll
                        </button>
                        <button onClick={openCourse} style={{ ...styles.button.primary, padding: '10px 18px', fontSize: '13px', fontWeight: '700' }}>
                            <span className="material-symbols-outlined" style={{ fontSize: '18px' }}>add</span> New Course
                        </button>
                    </div>
                )}
            </div>

            {/* Courses Grid */}
            {isAdmin && (
                <>
                    <h3 style={{ fontSize: '16px', fontWeight: '800', color: tokens.colors.primary, marginBottom: '16px' }}>Training Courses</h3>
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))', gap: '16px', marginBottom: '32px' }}>
                        {courses.map(c => (
                            <div key={c.id} style={{ ...styles.card, padding: '20px' }}>
                                <div style={{ display: 'flex', gap: '12px', alignItems: 'flex-start', marginBottom: '12px' }}>
                                    <div style={{ width: '40px', height: '40px', borderRadius: '12px', background: c.type === 'Mandatory' ? '#FEF2F2' : '#EFF6FF', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                                        <span className="material-symbols-outlined" style={{ fontSize: '20px', color: c.type === 'Mandatory' ? '#DC2626' : '#3B82F6' }}>school</span>
                                    </div>
                                    <div style={{ flex: 1 }}>
                                        <div style={{ fontSize: '15px', fontWeight: '700', color: tokens.colors.primary }}>{c.name}</div>
                                        <div style={{ fontSize: '12px', color: tokens.colors.secondary }}>{c.type} · {c.duration || 'N/A'} · {c.frequency}</div>
                                    </div>
                                </div>
                                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                                    <span style={{ fontSize: '12px', color: tokens.colors.secondary }}>{getCompletedCount(c.id)}/{getEnrollCount(c.id)} completed</span>
                                    <div style={{ width: '60px', height: '4px', borderRadius: '2px', background: '#F1F5F9', overflow: 'hidden' }}>
                                        <div style={{ width: `${getEnrollCount(c.id) ? (getCompletedCount(c.id) / getEnrollCount(c.id)) * 100 : 0}%`, height: '100%', background: tokens.colors.accent, borderRadius: '2px' }} />
                                    </div>
                                </div>
                            </div>
                        ))}
                        {courses.length === 0 && (
                            <div style={{ ...styles.card, padding: '50px', textAlign: 'center', gridColumn: '1 / -1', color: tokens.colors.secondary }}>
                                <span className="material-symbols-outlined" style={{ fontSize: '40px', color: '#CBD5E1', display: 'block', marginBottom: '8px' }}>school</span>
                                No training courses. Create one to get started.
                            </div>
                        )}
                    </div>
                </>
            )}

            {/* Enrollments */}
            <h3 style={{ fontSize: '16px', fontWeight: '800', color: tokens.colors.primary, marginBottom: '16px' }}>{isAdmin ? 'All Enrollments' : 'My Training'}</h3>
            <div style={styles.card}>
                {myEnrollments.length === 0 ? (
                    <div style={{ textAlign: 'center', padding: '40px', color: tokens.colors.secondary }}>No enrollments found.</div>
                ) : (
                    <table style={{ width: '100%', borderCollapse: 'collapse' }}>
                        <thead><tr>
                            {isAdmin && <th style={styles.th}>Employee</th>}
                            <th style={styles.th}>Course</th>
                            <th style={styles.th}>Due Date</th>
                            <th style={styles.th}>Status</th>
                            {isAdmin && <th style={{ ...styles.th, textAlign: 'right' }}>Action</th>}
                        </tr></thead>
                        <tbody>
                            {myEnrollments.map(e => (
                                <tr key={e.id}>
                                    {isAdmin && <td style={styles.td}>{getEmpName(e.employeeId)}</td>}
                                    <td style={styles.td}><span style={{ fontWeight: '600' }}>{getCourseName(e.courseId)}</span></td>
                                    <td style={styles.td}>{e.dueDate || '—'}</td>
                                    <td style={styles.td}>
                                        <span style={{
                                            ...styles.badge(e.status === 'Completed' ? 'primary' : 'outline'), fontSize: '11px',
                                            color: e.status === 'Completed' ? '#22C55E' : e.status === 'Overdue' ? '#DC2626' : tokens.colors.secondary,
                                            borderColor: e.status === 'Completed' ? '#BBF7D0' : e.status === 'Overdue' ? '#FCA5A5' : tokens.colors.border
                                        }}>{e.status}</span>
                                    </td>
                                    {isAdmin && (
                                        <td style={{ ...styles.td, textAlign: 'right' }}>
                                            <select value={e.status} onChange={ev => updateEnrollment(e.id, ev.target.value)}
                                                style={{ ...styles.input, width: '130px', fontSize: '11px', padding: '4px 8px' }}>
                                                {STATUSES.map(s => <option key={s}>{s}</option>)}
                                            </select>
                                        </td>
                                    )}
                                </tr>
                            ))}
                        </tbody>
                    </table>
                )}
            </div>

            {/* Modal */}
            {showModal && (
                <div style={styles.modal} onClick={() => setShowModal(false)}>
                    <div style={{ ...styles.card, width: '100%', maxWidth: '480px', padding: '32px' }} onClick={e => e.stopPropagation()}>
                        <h3 style={{ fontSize: '20px', fontWeight: '800', color: tokens.colors.primary, marginBottom: '24px' }}>
                            {modalType === 'course' ? 'New Training Course' : 'Enroll Employee'}
                        </h3>
                        <div style={{ display: 'grid', gap: '16px', marginBottom: '24px' }}>
                            {modalType === 'course' ? (
                                <>
                                    <div><label style={{ fontSize: '12px', fontWeight: '700', color: tokens.colors.secondary, display: 'block', marginBottom: '6px' }}>Course Name</label>
                                        <input style={styles.input} value={form.name} onChange={e => setForm({ ...form, name: e.target.value })} placeholder="e.g. ISMS Awareness Training" /></div>
                                    <div><label style={{ fontSize: '12px', fontWeight: '700', color: tokens.colors.secondary, display: 'block', marginBottom: '6px' }}>Description</label>
                                        <textarea style={{ ...styles.input, minHeight: '60px', resize: 'none' }} value={form.description} onChange={e => setForm({ ...form, description: e.target.value })} /></div>
                                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px' }}>
                                        <div><label style={{ fontSize: '12px', fontWeight: '700', color: tokens.colors.secondary, display: 'block', marginBottom: '6px' }}>Type</label>
                                            <select style={styles.input} value={form.type} onChange={e => setForm({ ...form, type: e.target.value })}>
                                                {COURSE_TYPES.map(t => <option key={t}>{t}</option>)}</select></div>
                                        <div><label style={{ fontSize: '12px', fontWeight: '700', color: tokens.colors.secondary, display: 'block', marginBottom: '6px' }}>Duration</label>
                                            <input style={styles.input} value={form.duration} onChange={e => setForm({ ...form, duration: e.target.value })} placeholder="e.g. 2 hours" /></div>
                                    </div>
                                </>
                            ) : (
                                <>
                                    <div><label style={{ fontSize: '12px', fontWeight: '700', color: tokens.colors.secondary, display: 'block', marginBottom: '6px' }}>Course</label>
                                        <select style={styles.input} value={form.courseId} onChange={e => setForm({ ...form, courseId: e.target.value })}>
                                            <option value="">Select course</option>
                                            {courses.map(c => <option key={c.id} value={c.id}>{c.name}</option>)}</select></div>
                                    <div><label style={{ fontSize: '12px', fontWeight: '700', color: tokens.colors.secondary, display: 'block', marginBottom: '6px' }}>Employee</label>
                                        <select style={styles.input} value={form.employeeId} onChange={e => setForm({ ...form, employeeId: e.target.value })}>
                                            <option value="">Select employee</option>
                                            {employees.map(e => <option key={e.id} value={e.id}>{e.name}</option>)}</select></div>
                                    <div><label style={{ fontSize: '12px', fontWeight: '700', color: tokens.colors.secondary, display: 'block', marginBottom: '6px' }}>Due Date</label>
                                        <input style={styles.input} type="date" value={form.dueDate} onChange={e => setForm({ ...form, dueDate: e.target.value })} /></div>
                                </>
                            )}
                        </div>
                        <div style={{ display: 'flex', gap: '12px', justifyContent: 'flex-end' }}>
                            <button onClick={() => setShowModal(false)} style={{ ...styles.button.outline, padding: '10px 20px' }}>Cancel</button>
                            <button onClick={handleSave} style={{ ...styles.button.primary, padding: '10px 20px' }}>Save</button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Training;
