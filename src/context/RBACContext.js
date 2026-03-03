'use client';

import React, { createContext, useContext, useState, useEffect } from 'react';
import { db } from '../firebase';
import { doc, getDoc, collection, getDocs } from 'firebase/firestore';

/**
 * RBAC Context — Role-Based Access Control for Cyberseal HRMS.
 *
 * Firestore layout:
 *   roles/{roleId}         → { name, description, permissions: ['perm.code', ...] }
 *   user_roles/{odcId}     → { userId, roleId }
 *
 * Predefined roles:
 *   super_admin  — full system access
 *   hr_admin     — employee & HR control
 *   finance      — payroll access
 *   manager      — team approval access
 *   employee     — self-service access
 */

const RBACContext = createContext({
    role: null,
    roleName: null,
    permissions: [],
    loading: true,
    isAdmin: false,
    hasPermission: () => false,
    hasAnyPermission: () => false,
});

/* ─── Default Permission Map (used when Firestore roles not yet seeded) ─── */
const DEFAULT_ROLES = {
    super_admin: {
        name: 'Super Admin',
        permissions: ['*'], // wildcard = everything
    },
    hr_admin: {
        name: 'HR Admin',
        permissions: [
            'dashboard.view',
            'employees.*',
            'attendance.*',
            'leaves.*',
            'payroll.view',
            'documents.*',
            'training.*',
            'assets.*',
            'exit.*',
            'audit.view',
            'reports.view',
            'broadcast.*',
            'policies.*',
        ],
    },
    finance: {
        name: 'Finance Admin',
        permissions: [
            'dashboard.view',
            'employees.view',
            'payroll.*',
            'reports.payroll',
            'audit.view',
        ],
    },
    manager: {
        name: 'Manager',
        permissions: [
            'dashboard.view',
            'employees.view',
            'attendance.view',
            'attendance.own',
            'leaves.view',
            'leaves.approve',
            'leaves.own',
            'timesheets.view',
            'timesheets.approve',
            'performance.*',
            'profile.own',
        ],
    },
    employee: {
        name: 'Employee',
        permissions: [
            'dashboard.view',
            'attendance.own',
            'leaves.own',
            'timesheets.own',
            'profile.own',
            'payslips.own',
            'documents.view',
            'training.own',
            'performance.own',
        ],
    },
};

/* ─── Admin emails (backward-compat with existing hardcoded check) ─── */
const ADMIN_EMAILS = ['admin@hrmate.com'];

/**
 * Check if a permission code matches against a list of granted permissions.
 * Supports wildcard: '*' matches everything, 'module.*' matches 'module.anything'.
 */
const matchPermission = (granted, required) => {
    if (granted.includes('*')) return true;
    if (granted.includes(required)) return true;
    // Check wildcard like 'employees.*' matching 'employees.edit'
    const requiredParts = required.split('.');
    for (const g of granted) {
        const gParts = g.split('.');
        if (gParts.length === 2 && gParts[1] === '*' && gParts[0] === requiredParts[0]) {
            return true;
        }
    }
    return false;
};

export const RBACProvider = ({ children, user }) => {
    const [role, setRole] = useState(null);
    const [roleName, setRoleName] = useState(null);
    const [permissions, setPermissions] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        if (!user) {
            setRole(null);
            setRoleName(null);
            setPermissions([]);
            setLoading(false);
            return;
        }

        const loadRole = async () => {
            try {
                // 1) Check if user has an explicit role assignment in Firestore
                const userRoleDoc = await getDoc(doc(db, 'user_roles', user.uid));

                if (userRoleDoc.exists()) {
                    const { roleId } = userRoleDoc.data();
                    // Try loading role from Firestore
                    const roleDoc = await getDoc(doc(db, 'roles', roleId));
                    if (roleDoc.exists()) {
                        const roleData = roleDoc.data();
                        setRole(roleId);
                        setRoleName(roleData.name);
                        setPermissions(roleData.permissions || []);
                        setLoading(false);
                        return;
                    }
                    // Fallback to default map
                    if (DEFAULT_ROLES[roleId]) {
                        setRole(roleId);
                        setRoleName(DEFAULT_ROLES[roleId].name);
                        setPermissions(DEFAULT_ROLES[roleId].permissions);
                        setLoading(false);
                        return;
                    }
                }

                // 2) Backward compatibility: check hardcoded admin emails
                if (ADMIN_EMAILS.includes(user.email) || user.isAdmin) {
                    setRole('super_admin');
                    setRoleName('Super Admin');
                    setPermissions(DEFAULT_ROLES.super_admin.permissions);
                    setLoading(false);
                    return;
                }

                // 3) Check employee doc for role field
                const empDoc = await getDoc(doc(db, 'employees', user.uid));
                if (empDoc.exists()) {
                    const empData = empDoc.data();
                    const empRole = empData.role || 'employee';
                    if (DEFAULT_ROLES[empRole]) {
                        setRole(empRole);
                        setRoleName(DEFAULT_ROLES[empRole].name);
                        setPermissions(DEFAULT_ROLES[empRole].permissions);
                        setLoading(false);
                        return;
                    }
                }

                // 4) Default to employee
                setRole('employee');
                setRoleName('Employee');
                setPermissions(DEFAULT_ROLES.employee.permissions);
            } catch (err) {
                console.warn('RBAC load failed, defaulting to employee:', err);
                setRole('employee');
                setRoleName('Employee');
                setPermissions(DEFAULT_ROLES.employee.permissions);
            } finally {
                setLoading(false);
            }
        };

        loadRole();
    }, [user]);

    const isAdmin = role === 'super_admin' || role === 'hr_admin';

    const hasPermission = (code) => matchPermission(permissions, code);

    const hasAnyPermission = (...codes) => codes.some(c => matchPermission(permissions, c));

    return (
        <RBACContext.Provider value={{
            role,
            roleName,
            permissions,
            loading,
            isAdmin,
            hasPermission,
            hasAnyPermission,
        }}>
            {children}
        </RBACContext.Provider>
    );
};

export const useRBAC = () => useContext(RBACContext);

/** Export defaults so other code can reference them */
export { DEFAULT_ROLES, ADMIN_EMAILS };
