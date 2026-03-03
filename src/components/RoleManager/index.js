'use client';
import React, { useState, useEffect } from 'react';
import { db } from '../../firebase';
import {
    collection, onSnapshot, doc, setDoc, updateDoc, deleteDoc, getDocs
} from 'firebase/firestore';
import { styles, tokens } from '../../styles';
import { DEFAULT_ROLES } from '../../context/RBACContext';
import { logAction } from '../../utils/auditLog';

/* ─── All available permissions ─── */
const ALL_PERMISSIONS = [
    { code: '*', label: 'Full Access (Wildcard)', group: 'System' },
    { code: 'dashboard.view', label: 'View Dashboard', group: 'Core' },
    { code: 'employees.*', label: 'All Employee Actions', group: 'Employees' },
    { code: 'employees.view', label: 'View Employees', group: 'Employees' },
    { code: 'employees.edit', label: 'Edit Employees', group: 'Employees' },
    { code: 'employees.create', label: 'Create Employees', group: 'Employees' },
    { code: 'employees.delete', label: 'Delete Employees', group: 'Employees' },
    { code: 'attendance.*', label: 'All Attendance Actions', group: 'Attendance' },
    { code: 'attendance.own', label: 'Own Attendance', group: 'Attendance' },
    { code: 'attendance.view', label: 'View All Attendance', group: 'Attendance' },
    { code: 'leaves.*', label: 'All Leave Actions', group: 'Leave' },
    { code: 'leaves.own', label: 'Own Leaves', group: 'Leave' },
    { code: 'leaves.approve', label: 'Approve Leaves', group: 'Leave' },
    { code: 'payroll.*', label: 'All Payroll Actions', group: 'Payroll' },
    { code: 'payroll.view', label: 'View Payroll', group: 'Payroll' },
    { code: 'payslips.own', label: 'Own Payslips', group: 'Payroll' },
    { code: 'timesheets.*', label: 'All Timesheet Actions', group: 'Timesheet' },
    { code: 'timesheets.own', label: 'Own Timesheet', group: 'Timesheet' },
    { code: 'timesheets.approve', label: 'Approve Timesheets', group: 'Timesheet' },
    { code: 'documents.*', label: 'All Document Actions', group: 'Documents' },
    { code: 'documents.view', label: 'View Documents', group: 'Documents' },
    { code: 'training.*', label: 'All Training Actions', group: 'Training' },
    { code: 'training.own', label: 'Own Training', group: 'Training' },
    { code: 'assets.*', label: 'All Asset Actions', group: 'Assets' },
    { code: 'exit.*', label: 'All Exit Actions', group: 'Exit' },
    { code: 'performance.*', label: 'All Performance Actions', group: 'Performance' },
    { code: 'performance.own', label: 'Own Performance', group: 'Performance' },
    { code: 'audit.view', label: 'View Audit Log', group: 'Governance' },
    { code: 'reports.view', label: 'View Reports', group: 'Governance' },
    { code: 'reports.payroll', label: 'Payroll Reports', group: 'Governance' },
    { code: 'broadcast.*', label: 'Send Broadcasts', group: 'Communication' },
    { code: 'policies.*', label: 'Manage Policies', group: 'Communication' },
    { code: 'profile.own', label: 'Own Profile', group: 'Profile' },
    { code: 'roles.*', label: 'Manage Roles', group: 'System' },
];

/** Group permissions by group name */
const groupedPermissions = ALL_PERMISSIONS.reduce((acc, p) => {
    if (!acc[p.group]) acc[p.group] = [];
    acc[p.group].push(p);
    return acc;
}, {});

/* ─── Role Manager Component ─── */
const RoleManager = ({ adminEmail = 'admin' }) => {
    const [roles, setRoles] = useState([]);
    const [userRoles, setUserRoles] = useState([]);
    const [employees, setEmployees] = useState([]);
    const [editingRole, setEditingRole] = useState(null);
    const [showModal, setShowModal] = useState(false);
    const [assignModal, setAssignModal] = useState(false);
    const [assignData, setAssignData] = useState({ userId: '', roleId: '' });
    const [seeding, setSeeding] = useState(false);

    // Form state
    const [form, setForm] = useState({ id: '', name: '', description: '', permissions: [] });

    /* ─── Load roles ─── */
    useEffect(() => {
        const u1 = onSnapshot(collection(db, 'roles'), s =>
            setRoles(s.docs.map(d => ({ id: d.id, ...d.data() })))
        );
        const u2 = onSnapshot(collection(db, 'user_roles'), s =>
            setUserRoles(s.docs.map(d => ({ id: d.id, ...d.data() })))
        );
        const u3 = onSnapshot(collection(db, 'employees'), s =>
            setEmployees(s.docs.map(d => ({ id: d.id, ...d.data() })))
        );
        return () => { u1(); u2(); u3(); };
    }, []);

    /* ─── Seed default roles ─── */
    const seedRoles = async () => {
        setSeeding(true);
        try {
            for (const [id, role] of Object.entries(DEFAULT_ROLES)) {
                await setDoc(doc(db, 'roles', id), {
                    name: role.name,
                    description: `Default ${role.name} role`,
                    permissions: role.permissions,
                    createdAt: new Date().toISOString(),
                });
            }
            await logAction('ROLES_SEEDED', { count: Object.keys(DEFAULT_ROLES).length }, adminEmail);
        } catch (err) {
            console.error('Seed failed:', err);
        } finally {
            setSeeding(false);
        }
    };

    /* ─── Open modal for create/edit ─── */
    const openCreate = () => {
        setForm({ id: '', name: '', description: '', permissions: [] });
        setEditingRole(null);
        setShowModal(true);
    };
    const openEdit = (role) => {
        setForm({ id: role.id, name: role.name, description: role.description || '', permissions: [...(role.permissions || [])] });
        setEditingRole(role);
        setShowModal(true);
    };

    /* ─── Toggle permission ─── */
    const togglePerm = (code) => {
        setForm(f => ({
            ...f,
            permissions: f.permissions.includes(code)
                ? f.permissions.filter(p => p !== code)
                : [...f.permissions, code]
        }));
    };

    /* ─── Save role ─── */
    const handleSaveRole = async () => {
        const roleId = form.id || form.name.toLowerCase().replace(/\s+/g, '_');
        try {
            await setDoc(doc(db, 'roles', roleId), {
                name: form.name,
                description: form.description,
                permissions: form.permissions,
                updatedAt: new Date().toISOString(),
            }, { merge: true });
            await logAction(editingRole ? 'ROLE_UPDATED' : 'ROLE_CREATED', { roleId, name: form.name }, adminEmail);
            setShowModal(false);
        } catch (err) {
            console.error(err);
            alert('Failed to save role.');
        }
    };

    /* ─── Delete role ─── */
    const handleDeleteRole = async (roleId) => {
        if (!confirm('Delete this role? Users assigned to it will lose access.')) return;
        try {
            await deleteDoc(doc(db, 'roles', roleId));
            await logAction('ROLE_DELETED', { roleId }, adminEmail);
        } catch (err) {
            console.error(err);
        }
    };

    /* ─── Assign role to user ─── */
    const handleAssignRole = async () => {
        if (!assignData.userId || !assignData.roleId) return;
        try {
            await setDoc(doc(db, 'user_roles', assignData.userId), {
                userId: assignData.userId,
                roleId: assignData.roleId,
                assignedAt: new Date().toISOString(),
            });
            await logAction('ROLE_ASSIGNED', {
                userId: assignData.userId,
                roleId: assignData.roleId,
                employee: employees.find(e => e.id === assignData.userId)?.name || assignData.userId
            }, adminEmail);
            setAssignModal(false);
            setAssignData({ userId: '', roleId: '' });
        } catch (err) {
            console.error(err);
        }
    };

    /* ─── Remove role assignment ─── */
    const handleRemoveAssignment = async (userId) => {
        if (!confirm('Remove role assignment for this user?')) return;
        try {
            await deleteDoc(doc(db, 'user_roles', userId));
            await logAction('ROLE_UNASSIGNED', { userId }, adminEmail);
        } catch (err) {
            console.error(err);
        }
    };

    const getRoleName = (roleId) => {
        const r = roles.find(r => r.id === roleId);
        return r?.name || DEFAULT_ROLES[roleId]?.name || roleId;
    };

    return (
        <div className="animate-fade">
            {/* Header */}
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '28px' }}>
                <div>
                    <h2 style={{ fontSize: '24px', fontWeight: '800', color: tokens.colors.primary }}>Roles & Permissions</h2>
                    <p style={{ color: tokens.colors.secondary, fontSize: '14px' }}>ISO 27001 A.5.15 — Access Control management.</p>
                </div>
                <div style={{ display: 'flex', gap: '12px' }}>
                    {roles.length === 0 && (
                        <button onClick={seedRoles} disabled={seeding}
                            style={{ ...styles.button.outline, padding: '10px 18px', fontSize: '13px', fontWeight: '700' }}>
                            <span className="material-symbols-outlined" style={{ fontSize: '18px' }}>database</span>
                            {seeding ? 'Seeding...' : 'Seed Default Roles'}
                        </button>
                    )}
                    <button onClick={() => setAssignModal(true)}
                        style={{ ...styles.button.outline, padding: '10px 18px', fontSize: '13px', fontWeight: '700' }}>
                        <span className="material-symbols-outlined" style={{ fontSize: '18px' }}>person_add</span>
                        Assign Role
                    </button>
                    <button onClick={openCreate}
                        style={{ ...styles.button.primary, padding: '10px 18px', fontSize: '13px', fontWeight: '700' }}>
                        <span className="material-symbols-outlined" style={{ fontSize: '18px' }}>add</span>
                        Create Role
                    </button>
                </div>
            </div>

            {/* Roles Grid */}
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(340px, 1fr))', gap: '20px', marginBottom: '40px' }}>
                {roles.map(role => (
                    <div key={role.id} style={{ ...styles.card, padding: '24px' }}>
                        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '12px' }}>
                            <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                                <div style={{ width: '36px', height: '36px', borderRadius: '10px', background: role.permissions?.includes('*') ? 'linear-gradient(135deg, #DC2626, #991B1B)' : 'linear-gradient(135deg, #0D9488, #065F46)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                                    <span className="material-symbols-outlined" style={{ color: '#FFF', fontSize: '18px' }}>
                                        {role.permissions?.includes('*') ? 'admin_panel_settings' : 'shield'}
                                    </span>
                                </div>
                                <div>
                                    <div style={{ fontSize: '15px', fontWeight: '800', color: tokens.colors.primary }}>{role.name}</div>
                                    <div style={{ fontSize: '12px', color: tokens.colors.secondary }}>{role.id}</div>
                                </div>
                            </div>
                            <div style={{ display: 'flex', gap: '4px' }}>
                                <button onClick={() => openEdit(role)} style={styles.button.ghost}>
                                    <span className="material-symbols-outlined" style={{ fontSize: '18px' }}>edit</span>
                                </button>
                                <button onClick={() => handleDeleteRole(role.id)} style={{ ...styles.button.ghost, color: tokens.colors.error }}>
                                    <span className="material-symbols-outlined" style={{ fontSize: '18px' }}>delete</span>
                                </button>
                            </div>
                        </div>
                        <p style={{ fontSize: '13px', color: tokens.colors.secondary, marginBottom: '12px' }}>{role.description || 'No description'}</p>
                        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px' }}>
                            {(role.permissions || []).slice(0, 6).map(p => (
                                <span key={p} style={{ padding: '3px 10px', borderRadius: '999px', fontSize: '11px', fontWeight: '600', background: 'rgba(13,148,136,0.1)', color: tokens.colors.accent, border: '1px solid rgba(13,148,136,0.2)' }}>{p}</span>
                            ))}
                            {(role.permissions || []).length > 6 && (
                                <span style={{ padding: '3px 10px', borderRadius: '999px', fontSize: '11px', fontWeight: '600', color: tokens.colors.secondary }}>+{role.permissions.length - 6} more</span>
                            )}
                        </div>
                        {/* Show assigned users count */}
                        <div style={{ marginTop: '12px', fontSize: '12px', color: tokens.colors.secondary, display: 'flex', alignItems: 'center', gap: '4px' }}>
                            <span className="material-symbols-outlined" style={{ fontSize: '14px' }}>group</span>
                            {userRoles.filter(ur => ur.roleId === role.id).length} user(s) assigned
                        </div>
                    </div>
                ))}
                {roles.length === 0 && (
                    <div style={{ ...styles.card, padding: '60px', textAlign: 'center', gridColumn: '1 / -1' }}>
                        <span className="material-symbols-outlined" style={{ fontSize: '48px', color: '#CBD5E1', display: 'block', marginBottom: '12px' }}>shield</span>
                        <div style={{ fontSize: '15px', fontWeight: '700', color: tokens.colors.primary, marginBottom: '8px' }}>No roles defined yet</div>
                        <div style={{ fontSize: '13px', color: tokens.colors.secondary }}>Click "Seed Default Roles" to create the 5 standard roles, or create a custom one.</div>
                    </div>
                )}
            </div>

            {/* User-Role Assignments Table */}
            <div style={{ marginBottom: '32px' }}>
                <h3 style={{ fontSize: '18px', fontWeight: '800', color: tokens.colors.primary, marginBottom: '16px' }}>User Assignments</h3>
                <div style={styles.card}>
                    {userRoles.length === 0 ? (
                        <div style={{ textAlign: 'center', padding: '40px', color: tokens.colors.secondary }}>
                            No role assignments yet. Use "Assign Role" to map users to roles.
                        </div>
                    ) : (
                        <table style={{ width: '100%', borderCollapse: 'collapse' }}>
                            <thead>
                                <tr>
                                    <th style={styles.th}>User</th>
                                    <th style={styles.th}>Role</th>
                                    <th style={styles.th}>Assigned</th>
                                    <th style={{ ...styles.th, textAlign: 'right' }}>Actions</th>
                                </tr>
                            </thead>
                            <tbody>
                                {userRoles.map(ur => {
                                    const emp = employees.find(e => e.id === ur.userId);
                                    return (
                                        <tr key={ur.id}>
                                            <td style={styles.td}>
                                                <div style={{ fontWeight: '700' }}>{emp?.name || ur.userId}</div>
                                                <div style={{ fontSize: '12px', color: tokens.colors.secondary }}>{emp?.email || ''}</div>
                                            </td>
                                            <td style={styles.td}>
                                                <span style={{ ...styles.badge('primary'), fontSize: '12px' }}>{getRoleName(ur.roleId)}</span>
                                            </td>
                                            <td style={styles.td}>
                                                <span style={{ fontSize: '12px', color: tokens.colors.secondary }}>
                                                    {ur.assignedAt ? new Date(ur.assignedAt).toLocaleDateString('en-IN') : '—'}
                                                </span>
                                            </td>
                                            <td style={{ ...styles.td, textAlign: 'right' }}>
                                                <button onClick={() => handleRemoveAssignment(ur.userId)} style={{ ...styles.button.ghost, color: tokens.colors.error }}>
                                                    <span className="material-symbols-outlined" style={{ fontSize: '18px' }}>person_remove</span>
                                                </button>
                                            </td>
                                        </tr>
                                    );
                                })}
                            </tbody>
                        </table>
                    )}
                </div>
            </div>

            {/* Create/Edit Role Modal */}
            {showModal && (
                <div style={styles.modal} onClick={() => setShowModal(false)}>
                    <div style={{ ...styles.card, width: '100%', maxWidth: '600px', maxHeight: '80vh', overflow: 'auto', padding: '32px' }}
                        onClick={e => e.stopPropagation()}>
                        <h3 style={{ fontSize: '20px', fontWeight: '800', color: tokens.colors.primary, marginBottom: '24px' }}>
                            {editingRole ? 'Edit Role' : 'Create Role'}
                        </h3>
                        <div style={{ display: 'grid', gap: '16px', marginBottom: '24px' }}>
                            <div>
                                <label style={{ fontSize: '11px', fontWeight: '800', color: tokens.colors.secondary, textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '6px', display: 'block' }}>Role Name</label>
                                <input style={styles.input} value={form.name} onChange={e => setForm({ ...form, name: e.target.value })} placeholder="e.g. HR Admin" />
                            </div>
                            <div>
                                <label style={{ fontSize: '11px', fontWeight: '800', color: tokens.colors.secondary, textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '6px', display: 'block' }}>Description</label>
                                <input style={styles.input} value={form.description} onChange={e => setForm({ ...form, description: e.target.value })} placeholder="Brief description" />
                            </div>
                        </div>
                        <div style={{ marginBottom: '24px' }}>
                            <label style={{ fontSize: '11px', fontWeight: '800', color: tokens.colors.secondary, textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '12px', display: 'block' }}>Permissions</label>
                            {Object.entries(groupedPermissions).map(([group, perms]) => (
                                <div key={group} style={{ marginBottom: '16px' }}>
                                    <div style={{ fontSize: '12px', fontWeight: '700', color: tokens.colors.primary, marginBottom: '8px' }}>{group}</div>
                                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
                                        {perms.map(p => (
                                            <label key={p.code} style={{
                                                display: 'flex', alignItems: 'center', gap: '6px',
                                                padding: '6px 12px', borderRadius: '8px', fontSize: '12px', fontWeight: '600', cursor: 'pointer',
                                                background: form.permissions.includes(p.code) ? 'rgba(13,148,136,0.1)' : 'transparent',
                                                border: `1px solid ${form.permissions.includes(p.code) ? 'rgba(13,148,136,0.3)' : tokens.colors.border}`,
                                                color: form.permissions.includes(p.code) ? tokens.colors.accent : tokens.colors.secondary,
                                                transition: 'all 0.15s ease',
                                            }}>
                                                <input type="checkbox" checked={form.permissions.includes(p.code)} onChange={() => togglePerm(p.code)} style={{ display: 'none' }} />
                                                <span className="material-symbols-outlined" style={{ fontSize: '14px' }}>
                                                    {form.permissions.includes(p.code) ? 'check_box' : 'check_box_outline_blank'}
                                                </span>
                                                {p.label}
                                            </label>
                                        ))}
                                    </div>
                                </div>
                            ))}
                        </div>
                        <div style={{ display: 'flex', gap: '12px', justifyContent: 'flex-end' }}>
                            <button onClick={() => setShowModal(false)} style={{ ...styles.button.outline, padding: '10px 20px' }}>Cancel</button>
                            <button onClick={handleSaveRole} disabled={!form.name} style={{ ...styles.button.primary, padding: '10px 20px' }}>
                                {editingRole ? 'Update Role' : 'Create Role'}
                            </button>
                        </div>
                    </div>
                </div>
            )}

            {/* Assign Role Modal */}
            {assignModal && (
                <div style={styles.modal} onClick={() => setAssignModal(false)}>
                    <div style={{ ...styles.card, width: '100%', maxWidth: '440px', padding: '32px' }}
                        onClick={e => e.stopPropagation()}>
                        <h3 style={{ fontSize: '20px', fontWeight: '800', color: tokens.colors.primary, marginBottom: '24px' }}>Assign Role to User</h3>
                        <div style={{ display: 'grid', gap: '16px', marginBottom: '24px' }}>
                            <div>
                                <label style={{ fontSize: '11px', fontWeight: '800', color: tokens.colors.secondary, textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '6px', display: 'block' }}>Employee</label>
                                <select style={styles.input} value={assignData.userId} onChange={e => setAssignData({ ...assignData, userId: e.target.value })}>
                                    <option value="">Select employee...</option>
                                    {employees.map(emp => (
                                        <option key={emp.id} value={emp.id}>{emp.name || emp.email} ({emp.email})</option>
                                    ))}
                                </select>
                            </div>
                            <div>
                                <label style={{ fontSize: '11px', fontWeight: '800', color: tokens.colors.secondary, textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '6px', display: 'block' }}>Role</label>
                                <select style={styles.input} value={assignData.roleId} onChange={e => setAssignData({ ...assignData, roleId: e.target.value })}>
                                    <option value="">Select role...</option>
                                    {roles.map(r => (
                                        <option key={r.id} value={r.id}>{r.name}</option>
                                    ))}
                                    {roles.length === 0 && Object.entries(DEFAULT_ROLES).map(([id, r]) => (
                                        <option key={id} value={id}>{r.name}</option>
                                    ))}
                                </select>
                            </div>
                        </div>
                        <div style={{ display: 'flex', gap: '12px', justifyContent: 'flex-end' }}>
                            <button onClick={() => setAssignModal(false)} style={{ ...styles.button.outline, padding: '10px 20px' }}>Cancel</button>
                            <button onClick={handleAssignRole} disabled={!assignData.userId || !assignData.roleId} style={{ ...styles.button.primary, padding: '10px 20px' }}>
                                Assign Role
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default RoleManager;
