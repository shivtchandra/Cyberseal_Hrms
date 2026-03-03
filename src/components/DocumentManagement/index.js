'use client';
import React, { useState, useEffect, useRef } from 'react';
import { db } from '../../firebase';
import {
    collection, onSnapshot, addDoc, updateDoc, deleteDoc, doc, query, where, orderBy
} from 'firebase/firestore';
import { styles, tokens } from '../../styles';
import { logAction } from '../../utils/auditLog';

/* ─── Document Classification ─── */
const DOC_CATEGORIES = [
    { id: 'policy', label: 'Policy', icon: 'gavel', color: '#7C3AED' },
    { id: 'sop', label: 'SOP', icon: 'assignment', color: '#0D9488' },
    { id: 'template', label: 'Template', icon: 'description', color: '#2563EB' },
    { id: 'compliance', label: 'Compliance', icon: 'verified_user', color: '#D97706' },
    { id: 'training', label: 'Training', icon: 'school', color: '#DC2626' },
    { id: 'general', label: 'General', icon: 'folder', color: '#6B7280' },
];

const CLASSIFICATIONS = ['Public', 'Internal', 'Confidential', 'Restricted'];

const DocumentManagement = ({ adminEmail = 'admin', user = {} }) => {
    const [documents, setDocuments] = useState([]);
    const [acknowledgements, setAcknowledgements] = useState([]);
    const [employees, setEmployees] = useState([]);
    const [showModal, setShowModal] = useState(false);
    const [editing, setEditing] = useState(null);
    const [selectedDoc, setSelectedDoc] = useState(null);
    const [filterCategory, setFilterCategory] = useState('all');
    const [searchTerm, setSearchTerm] = useState('');
    const fileRef = useRef(null);

    const [form, setForm] = useState({
        title: '', description: '', category: 'policy',
        classification: 'Internal', version: '1.0',
        requiresAck: false, content: '', fileName: '',
    });

    useEffect(() => {
        const u1 = onSnapshot(
            query(collection(db, 'documents'), orderBy('updatedAt', 'desc')),
            s => setDocuments(s.docs.map(d => ({ id: d.id, ...d.data() })))
        );
        const u2 = onSnapshot(collection(db, 'document_acknowledgements'), s =>
            setAcknowledgements(s.docs.map(d => ({ id: d.id, ...d.data() })))
        );
        const u3 = onSnapshot(collection(db, 'employees'), s =>
            setEmployees(s.docs.map(d => ({ id: d.id, ...d.data() })))
        );
        return () => { u1(); u2(); u3(); };
    }, []);

    const openCreate = () => {
        setForm({ title: '', description: '', category: 'policy', classification: 'Internal', version: '1.0', requiresAck: false, content: '', fileName: '' });
        setEditing(null);
        setShowModal(true);
    };

    const openEdit = (doc) => {
        setForm({
            title: doc.title || '', description: doc.description || '',
            category: doc.category || 'general', classification: doc.classification || 'Internal',
            version: doc.version || '1.0', requiresAck: doc.requiresAck || false,
            content: doc.content || '', fileName: doc.fileName || '',
        });
        setEditing(doc);
        setShowModal(true);
    };

    const handleSave = async () => {
        try {
            const data = {
                ...form,
                updatedAt: new Date().toISOString(),
                updatedBy: adminEmail,
            };
            if (editing) {
                // Save version history
                await addDoc(collection(db, 'document_versions'), {
                    documentId: editing.id,
                    version: editing.version,
                    title: editing.title,
                    content: editing.content,
                    savedAt: new Date().toISOString(),
                    savedBy: adminEmail,
                });
                await updateDoc(doc(db, 'documents', editing.id), data);
                await logAction('DOCUMENT_UPDATED', { title: form.title, version: form.version }, adminEmail);
            } else {
                data.createdAt = new Date().toISOString();
                data.createdBy = adminEmail;
                await addDoc(collection(db, 'documents'), data);
                await logAction('DOCUMENT_CREATED', { title: form.title, category: form.category }, adminEmail);
            }
            setShowModal(false);
        } catch (err) {
            console.error(err);
        }
    };

    const handleDelete = async (d) => {
        if (!confirm(`Delete "${d.title}"? This action cannot be undone.`)) return;
        try {
            await deleteDoc(doc(db, 'documents', d.id));
            await logAction('DOCUMENT_DELETED', { title: d.title }, adminEmail);
        } catch (err) { console.error(err); }
    };

    const handleAcknowledge = async (docId) => {
        try {
            await addDoc(collection(db, 'document_acknowledgements'), {
                documentId: docId,
                userId: user.uid || user.id,
                userName: user.name || user.email,
                acknowledgedAt: new Date().toISOString(),
            });
            await logAction('DOCUMENT_ACKNOWLEDGED', { documentId: docId }, user.email || adminEmail);
        } catch (err) { console.error(err); }
    };

    const isAcknowledged = (docId) =>
        acknowledgements.some(a => a.documentId === docId && (a.userId === user?.uid || a.userId === user?.id));

    const getAckCount = (docId) => acknowledgements.filter(a => a.documentId === docId).length;

    const getCategoryMeta = (cat) => DOC_CATEGORIES.find(c => c.id === cat) || DOC_CATEGORIES[5];

    const filtered = documents.filter(d => {
        if (filterCategory !== 'all' && d.category !== filterCategory) return false;
        if (searchTerm && !d.title.toLowerCase().includes(searchTerm.toLowerCase())) return false;
        return true;
    });

    /* ─── Detail View ─── */
    if (selectedDoc) {
        const cat = getCategoryMeta(selectedDoc.category);
        const docAcks = acknowledgements.filter(a => a.documentId === selectedDoc.id);
        return (
            <div className="animate-fade">
                <button onClick={() => setSelectedDoc(null)} style={{ ...styles.button.outline, padding: '8px 16px', fontSize: '13px', fontWeight: '700', marginBottom: '24px' }}>
                    <span className="material-symbols-outlined" style={{ fontSize: '16px' }}>arrow_back</span> Back to Documents
                </button>
                <div style={{ ...styles.card, padding: '32px' }}>
                    <div style={{ display: 'flex', gap: '16px', alignItems: 'flex-start', marginBottom: '24px' }}>
                        <div style={{ width: '48px', height: '48px', borderRadius: '14px', background: `${cat.color}15`, display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                            <span className="material-symbols-outlined" style={{ fontSize: '24px', color: cat.color }}>{cat.icon}</span>
                        </div>
                        <div style={{ flex: 1 }}>
                            <h2 style={{ fontSize: '22px', fontWeight: '800', color: tokens.colors.primary, marginBottom: '4px' }}>{selectedDoc.title}</h2>
                            <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap', alignItems: 'center' }}>
                                <span style={{ fontSize: '12px', fontWeight: '600', padding: '3px 10px', borderRadius: '999px', background: `${cat.color}15`, color: cat.color }}>{cat.label}</span>
                                <span style={{ fontSize: '12px', fontWeight: '600', padding: '3px 10px', borderRadius: '999px', background: '#F1F5F9', color: tokens.colors.secondary }}>v{selectedDoc.version}</span>
                                <span style={{ fontSize: '12px', fontWeight: '600', padding: '3px 10px', borderRadius: '999px', background: selectedDoc.classification === 'Restricted' ? '#FEE2E2' : selectedDoc.classification === 'Confidential' ? '#FEF3C7' : '#F1F5F9', color: selectedDoc.classification === 'Restricted' ? '#DC2626' : selectedDoc.classification === 'Confidential' ? '#D97706' : tokens.colors.secondary }}>{selectedDoc.classification}</span>
                            </div>
                        </div>
                    </div>
                    {selectedDoc.description && (
                        <p style={{ fontSize: '14px', color: tokens.colors.secondary, lineHeight: '1.6', marginBottom: '20px' }}>{selectedDoc.description}</p>
                    )}
                    {selectedDoc.content && (
                        <div style={{ background: '#F8FAFC', borderRadius: '12px', padding: '24px', fontSize: '14px', color: tokens.colors.primary, lineHeight: '1.8', whiteSpace: 'pre-wrap', marginBottom: '20px', border: `1px solid ${tokens.colors.border}` }}>
                            {selectedDoc.content}
                        </div>
                    )}
                    <div style={{ fontSize: '12px', color: tokens.colors.secondary, marginBottom: '20px' }}>
                        Last updated: {selectedDoc.updatedAt ? new Date(selectedDoc.updatedAt).toLocaleString('en-IN') : '—'} by {selectedDoc.updatedBy || '—'}
                    </div>
                    {selectedDoc.requiresAck && (
                        <div style={{ borderTop: `1px solid ${tokens.colors.border}`, paddingTop: '20px' }}>
                            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '16px' }}>
                                <h3 style={{ fontSize: '16px', fontWeight: '800', color: tokens.colors.primary }}>Acknowledgements ({docAcks.length} / {employees.length})</h3>
                                {!isAcknowledged(selectedDoc.id) && (
                                    <button onClick={() => handleAcknowledge(selectedDoc.id)} style={{ ...styles.button.primary, padding: '8px 20px', fontSize: '13px' }}>
                                        <span className="material-symbols-outlined" style={{ fontSize: '16px' }}>check_circle</span> Acknowledge
                                    </button>
                                )}
                            </div>
                            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))', gap: '8px' }}>
                                {docAcks.map(a => (
                                    <div key={a.id} style={{ display: 'flex', alignItems: 'center', gap: '8px', padding: '8px 12px', borderRadius: '8px', background: '#F0FDF4', border: '1px solid #BBF7D0' }}>
                                        <span className="material-symbols-outlined" style={{ fontSize: '16px', color: '#22C55E' }}>check_circle</span>
                                        <div>
                                            <div style={{ fontSize: '12px', fontWeight: '700', color: tokens.colors.primary }}>{a.userName}</div>
                                            <div style={{ fontSize: '11px', color: tokens.colors.secondary }}>{new Date(a.acknowledgedAt).toLocaleDateString('en-IN')}</div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    )}
                </div>
            </div>
        );
    }

    /* ─── List View ─── */
    return (
        <div className="animate-fade">
            {/* Header */}
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '28px' }}>
                <div>
                    <h2 style={{ fontSize: '24px', fontWeight: '800', color: tokens.colors.primary }}>Document Management</h2>
                    <p style={{ color: tokens.colors.secondary, fontSize: '14px' }}>ISO 27001 A.7.5 — Documented Information management.</p>
                </div>
                <button onClick={openCreate} style={{ ...styles.button.primary, padding: '10px 18px', fontSize: '13px', fontWeight: '700' }}>
                    <span className="material-symbols-outlined" style={{ fontSize: '18px' }}>note_add</span>
                    New Document
                </button>
            </div>

            {/* Filters */}
            <div style={{ display: 'flex', gap: '12px', marginBottom: '24px', flexWrap: 'wrap', alignItems: 'center' }}>
                <div style={{ display: 'flex', gap: '4px', background: '#F1F5F9', borderRadius: '12px', padding: '4px' }}>
                    <button onClick={() => setFilterCategory('all')} style={{
                        padding: '6px 14px', borderRadius: '10px', border: 'none', fontSize: '12px', fontWeight: '700', cursor: 'pointer',
                        background: filterCategory === 'all' ? tokens.colors.white : 'transparent',
                        color: filterCategory === 'all' ? tokens.colors.accent : tokens.colors.secondary,
                        boxShadow: filterCategory === 'all' ? tokens.shadow.sm : 'none',
                    }}>All</button>
                    {DOC_CATEGORIES.map(c => (
                        <button key={c.id} onClick={() => setFilterCategory(c.id)} style={{
                            padding: '6px 14px', borderRadius: '10px', border: 'none', fontSize: '12px', fontWeight: '700', cursor: 'pointer',
                            background: filterCategory === c.id ? tokens.colors.white : 'transparent',
                            color: filterCategory === c.id ? c.color : tokens.colors.secondary,
                            boxShadow: filterCategory === c.id ? tokens.shadow.sm : 'none',
                        }}>{c.label}</button>
                    ))}
                </div>
                <div style={{ position: 'relative', flex: 1, maxWidth: '280px' }}>
                    <input style={{ ...styles.input, paddingLeft: '36px' }} placeholder="Search documents..." value={searchTerm} onChange={e => setSearchTerm(e.target.value)} />
                    <span className="material-symbols-outlined" style={{ position: 'absolute', left: '12px', top: '50%', transform: 'translateY(-50%)', fontSize: '16px', color: tokens.colors.secondary }}>search</span>
                </div>
            </div>

            {/* Documents Grid */}
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))', gap: '16px' }}>
                {filtered.map(d => {
                    const cat = getCategoryMeta(d.category);
                    return (
                        <div key={d.id} style={{ ...styles.card, padding: '24px', cursor: 'pointer', transition: 'all 0.2s ease' }}
                            onClick={() => setSelectedDoc(d)}
                            onMouseOver={e => { e.currentTarget.style.transform = 'translateY(-2px)'; e.currentTarget.style.boxShadow = tokens.shadow.lg; }}
                            onMouseOut={e => { e.currentTarget.style.transform = 'none'; e.currentTarget.style.boxShadow = ''; }}>
                            <div style={{ display: 'flex', gap: '12px', alignItems: 'flex-start', marginBottom: '12px' }}>
                                <div style={{ width: '40px', height: '40px', borderRadius: '12px', background: `${cat.color}15`, display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                                    <span className="material-symbols-outlined" style={{ fontSize: '20px', color: cat.color }}>{cat.icon}</span>
                                </div>
                                <div style={{ flex: 1, minWidth: 0 }}>
                                    <div style={{ fontSize: '15px', fontWeight: '700', color: tokens.colors.primary, whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>{d.title}</div>
                                    <div style={{ fontSize: '12px', color: tokens.colors.secondary }}>{cat.label} · v{d.version}</div>
                                </div>
                                <div style={{ display: 'flex', gap: '4px' }} onClick={e => e.stopPropagation()}>
                                    <button onClick={() => openEdit(d)} style={styles.button.ghost}>
                                        <span className="material-symbols-outlined" style={{ fontSize: '16px' }}>edit</span>
                                    </button>
                                    <button onClick={() => handleDelete(d)} style={{ ...styles.button.ghost, color: tokens.colors.error }}>
                                        <span className="material-symbols-outlined" style={{ fontSize: '16px' }}>delete</span>
                                    </button>
                                </div>
                            </div>
                            {d.description && (
                                <p style={{ fontSize: '13px', color: tokens.colors.secondary, lineHeight: '1.5', marginBottom: '12px', display: '-webkit-box', WebkitLineClamp: 2, WebkitBoxOrient: 'vertical', overflow: 'hidden' }}>{d.description}</p>
                            )}
                            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                                <span style={{ fontSize: '11px', fontWeight: '600', padding: '3px 10px', borderRadius: '999px', background: d.classification === 'Restricted' ? '#FEE2E2' : d.classification === 'Confidential' ? '#FEF3C7' : '#F1F5F9', color: d.classification === 'Restricted' ? '#DC2626' : d.classification === 'Confidential' ? '#D97706' : tokens.colors.secondary }}>{d.classification}</span>
                                <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                                    {d.requiresAck && (
                                        <span style={{ display: 'flex', alignItems: 'center', gap: '4px', fontSize: '11px', color: isAcknowledged(d.id) ? '#22C55E' : '#D97706' }}>
                                            <span className="material-symbols-outlined" style={{ fontSize: '14px' }}>{isAcknowledged(d.id) ? 'check_circle' : 'pending'}</span>
                                            {getAckCount(d.id)}/{employees.length}
                                        </span>
                                    )}
                                    <span style={{ fontSize: '11px', color: tokens.colors.secondary }}>{d.updatedAt ? new Date(d.updatedAt).toLocaleDateString('en-IN') : ''}</span>
                                </div>
                            </div>
                        </div>
                    );
                })}
                {filtered.length === 0 && (
                    <div style={{ ...styles.card, padding: '60px', textAlign: 'center', gridColumn: '1 / -1' }}>
                        <span className="material-symbols-outlined" style={{ fontSize: '48px', color: '#CBD5E1', display: 'block', marginBottom: '12px' }}>folder_open</span>
                        <div style={{ fontSize: '15px', fontWeight: '700', color: tokens.colors.primary, marginBottom: '8px' }}>No documents found</div>
                        <div style={{ fontSize: '13px', color: tokens.colors.secondary }}>Create your first document to get started.</div>
                    </div>
                )}
            </div>

            {/* Create/Edit Modal */}
            {showModal && (
                <div style={styles.modal} onClick={() => setShowModal(false)}>
                    <div style={{ ...styles.card, width: '100%', maxWidth: '640px', maxHeight: '85vh', overflow: 'auto', padding: '32px' }}
                        onClick={e => e.stopPropagation()}>
                        <h3 style={{ fontSize: '20px', fontWeight: '800', color: tokens.colors.primary, marginBottom: '24px' }}>
                            {editing ? 'Update Document' : 'Create Document'}
                        </h3>
                        <div style={{ display: 'grid', gap: '16px', marginBottom: '24px' }}>
                            <div>
                                <label style={{ fontSize: '12px', fontWeight: '700', color: tokens.colors.secondary, display: 'block', marginBottom: '6px' }}>Document Title</label>
                                <input style={styles.input} value={form.title} onChange={e => setForm({ ...form, title: e.target.value })} placeholder="e.g. Information Security Policy" />
                            </div>
                            <div>
                                <label style={{ fontSize: '12px', fontWeight: '700', color: tokens.colors.secondary, display: 'block', marginBottom: '6px' }}>Description</label>
                                <textarea style={{ ...styles.input, minHeight: '60px', resize: 'none' }} value={form.description} onChange={e => setForm({ ...form, description: e.target.value })} placeholder="Brief summary of this document" />
                            </div>
                            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '12px' }}>
                                <div>
                                    <label style={{ fontSize: '12px', fontWeight: '700', color: tokens.colors.secondary, display: 'block', marginBottom: '6px' }}>Category</label>
                                    <select style={styles.input} value={form.category} onChange={e => setForm({ ...form, category: e.target.value })}>
                                        {DOC_CATEGORIES.map(c => <option key={c.id} value={c.id}>{c.label}</option>)}
                                    </select>
                                </div>
                                <div>
                                    <label style={{ fontSize: '12px', fontWeight: '700', color: tokens.colors.secondary, display: 'block', marginBottom: '6px' }}>Classification</label>
                                    <select style={styles.input} value={form.classification} onChange={e => setForm({ ...form, classification: e.target.value })}>
                                        {CLASSIFICATIONS.map(c => <option key={c} value={c}>{c}</option>)}
                                    </select>
                                </div>
                                <div>
                                    <label style={{ fontSize: '12px', fontWeight: '700', color: tokens.colors.secondary, display: 'block', marginBottom: '6px' }}>Version</label>
                                    <input style={styles.input} value={form.version} onChange={e => setForm({ ...form, version: e.target.value })} placeholder="1.0" />
                                </div>
                            </div>
                            <div>
                                <label style={{ fontSize: '12px', fontWeight: '700', color: tokens.colors.secondary, display: 'block', marginBottom: '6px' }}>Document Content</label>
                                <textarea style={{ ...styles.input, minHeight: '200px', resize: 'vertical', fontFamily: 'monospace', fontSize: '13px', lineHeight: '1.6' }} value={form.content} onChange={e => setForm({ ...form, content: e.target.value })} placeholder="Enter or paste document content here..." />
                            </div>
                            <label style={{ display: 'flex', alignItems: 'center', gap: '10px', cursor: 'pointer', padding: '12px 16px', borderRadius: '10px', background: form.requiresAck ? '#F0FDF4' : '#F8FAFC', border: `1px solid ${form.requiresAck ? '#BBF7D0' : tokens.colors.border}`, transition: 'all 0.2s ease' }}>
                                <input type="checkbox" checked={form.requiresAck} onChange={e => setForm({ ...form, requiresAck: e.target.checked })}
                                    style={{ width: '18px', height: '18px', accentColor: tokens.colors.accent }} />
                                <div>
                                    <div style={{ fontSize: '13px', fontWeight: '700', color: tokens.colors.primary }}>Require Acknowledgement</div>
                                    <div style={{ fontSize: '12px', color: tokens.colors.secondary }}>All employees must acknowledge reading this document</div>
                                </div>
                            </label>
                        </div>
                        <div style={{ display: 'flex', gap: '12px', justifyContent: 'flex-end' }}>
                            <button onClick={() => setShowModal(false)} style={{ ...styles.button.outline, padding: '10px 20px' }}>Cancel</button>
                            <button onClick={handleSave} disabled={!form.title} style={{ ...styles.button.primary, padding: '10px 20px' }}>
                                {editing ? 'Update Document' : 'Create Document'}
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default DocumentManagement;
