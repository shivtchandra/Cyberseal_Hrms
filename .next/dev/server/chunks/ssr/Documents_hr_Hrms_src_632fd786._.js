module.exports = [
"[project]/Documents/hr/Hrms/src/context/RBACContext.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ADMIN_EMAILS",
    ()=>ADMIN_EMAILS,
    "DEFAULT_ROLES",
    ()=>DEFAULT_ROLES,
    "RBACProvider",
    ()=>RBACProvider,
    "useRBAC",
    ()=>useRBAC
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$hr$2f$Hrms$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/hr/Hrms/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$hr$2f$Hrms$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/hr/Hrms/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$hr$2f$Hrms$2f$src$2f$firebase$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/hr/Hrms/src/firebase.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$hr$2f$Hrms$2f$node_modules$2f$firebase$2f$firestore$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/Documents/hr/Hrms/node_modules/firebase/firestore/dist/index.mjs [app-ssr] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$hr$2f$Hrms$2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/hr/Hrms/node_modules/@firebase/firestore/dist/index.node.mjs [app-ssr] (ecmascript)");
'use client';
;
;
;
;
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
 */ const RBACContext = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$hr$2f$Hrms$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createContext"])({
    role: null,
    roleName: null,
    permissions: [],
    loading: true,
    isAdmin: false,
    hasPermission: ()=>false,
    hasAnyPermission: ()=>false
});
/* ─── Default Permission Map (used when Firestore roles not yet seeded) ─── */ const DEFAULT_ROLES = {
    super_admin: {
        name: 'Super Admin',
        permissions: [
            '*'
        ]
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
            'policies.*'
        ]
    },
    finance: {
        name: 'Finance Admin',
        permissions: [
            'dashboard.view',
            'employees.view',
            'payroll.*',
            'reports.payroll',
            'audit.view'
        ]
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
            'profile.own'
        ]
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
            'performance.own'
        ]
    }
};
/* ─── Admin emails (backward-compat with existing hardcoded check) ─── */ const ADMIN_EMAILS = [
    'admin@hrmate.com'
];
/**
 * Check if a permission code matches against a list of granted permissions.
 * Supports wildcard: '*' matches everything, 'module.*' matches 'module.anything'.
 */ const matchPermission = (granted, required)=>{
    if (granted.includes('*')) return true;
    if (granted.includes(required)) return true;
    // Check wildcard like 'employees.*' matching 'employees.edit'
    const requiredParts = required.split('.');
    for (const g of granted){
        const gParts = g.split('.');
        if (gParts.length === 2 && gParts[1] === '*' && gParts[0] === requiredParts[0]) {
            return true;
        }
    }
    return false;
};
const RBACProvider = ({ children, user })=>{
    const [role, setRole] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$hr$2f$Hrms$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    const [roleName, setRoleName] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$hr$2f$Hrms$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    const [permissions, setPermissions] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$hr$2f$Hrms$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])([]);
    const [loading, setLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$hr$2f$Hrms$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(true);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$hr$2f$Hrms$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (!user) {
            setRole(null);
            setRoleName(null);
            setPermissions([]);
            setLoading(false);
            return;
        }
        const loadRole = async ()=>{
            try {
                // 1) Check if user has an explicit role assignment in Firestore
                const userRoleDoc = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$hr$2f$Hrms$2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getDoc"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$hr$2f$Hrms$2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["doc"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$hr$2f$Hrms$2f$src$2f$firebase$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["db"], 'user_roles', user.uid));
                if (userRoleDoc.exists()) {
                    const { roleId } = userRoleDoc.data();
                    // Try loading role from Firestore
                    const roleDoc = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$hr$2f$Hrms$2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getDoc"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$hr$2f$Hrms$2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["doc"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$hr$2f$Hrms$2f$src$2f$firebase$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["db"], 'roles', roleId));
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
                const empDoc = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$hr$2f$Hrms$2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getDoc"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$hr$2f$Hrms$2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["doc"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$hr$2f$Hrms$2f$src$2f$firebase$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["db"], 'employees', user.uid));
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
            } finally{
                setLoading(false);
            }
        };
        loadRole();
    }, [
        user
    ]);
    const isAdmin = role === 'super_admin' || role === 'hr_admin';
    const hasPermission = (code)=>matchPermission(permissions, code);
    const hasAnyPermission = (...codes)=>codes.some((c)=>matchPermission(permissions, c));
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$hr$2f$Hrms$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(RBACContext.Provider, {
        value: {
            role,
            roleName,
            permissions,
            loading,
            isAdmin,
            hasPermission,
            hasAnyPermission
        },
        children: children
    }, void 0, false, {
        fileName: "[project]/Documents/hr/Hrms/src/context/RBACContext.js",
        lineNumber: 208,
        columnNumber: 9
    }, ("TURBOPACK compile-time value", void 0));
};
const useRBAC = ()=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$hr$2f$Hrms$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useContext"])(RBACContext);
;
}),
"[project]/Documents/hr/Hrms/src/styles.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/* ─── Design Tokens ──────────────────────────────────────────── */ __turbopack_context__.s([
    "styles",
    ()=>styles,
    "tokens",
    ()=>tokens
]);
const tokens = {
    colors: {
        primary: 'var(--color-primary)',
        secondary: 'var(--color-secondary)',
        accent: 'var(--color-accent)',
        success: 'var(--color-success)',
        error: 'var(--color-error)',
        warning: 'var(--color-warning)',
        background: 'var(--color-background)',
        surface: 'var(--color-surface)',
        border: 'var(--color-border)',
        white: 'var(--color-white)',
        glass: 'rgba(255, 255, 255, 0.7)'
    },
    radius: {
        sm: '8px',
        md: '12px',
        lg: '16px',
        xl: '24px',
        full: '9999px'
    },
    shadow: {
        sm: 'var(--shadow-sm)',
        md: 'var(--shadow-md)',
        lg: 'var(--shadow-lg)',
        xl: 'var(--shadow-xl)'
    }
};
const styles = {
    app: {
        display: 'flex',
        minHeight: '100vh',
        backgroundColor: 'var(--color-background)',
        color: 'var(--color-primary)',
        fontFamily: '"Funnel Display", sans-serif',
        WebkitFontSmoothing: 'antialiased'
    },
    sidebar: {
        width: '280px',
        minWidth: '280px',
        backgroundColor: 'var(--color-sidebar-bg)',
        display: 'flex',
        flexDirection: 'column',
        padding: '40px 0',
        borderRight: '1px solid var(--color-border)',
        position: 'relative',
        zIndex: 10,
        transition: 'background-color 0.3s ease'
    },
    logo: {
        fontSize: '22px',
        fontWeight: '800',
        padding: '0 32px',
        marginBottom: '48px',
        display: 'flex',
        alignItems: 'center',
        gap: '12px',
        color: 'var(--color-primary)',
        letterSpacing: '-0.5px'
    },
    menuItem: (active)=>({
            margin: '4px 20px',
            padding: '14px 16px',
            display: 'flex',
            alignItems: 'center',
            gap: '12px',
            cursor: 'pointer',
            borderRadius: '12px',
            backgroundColor: active ? 'var(--color-hover)' : 'transparent',
            color: active ? 'var(--color-accent)' : 'var(--color-secondary)',
            fontSize: '14px',
            fontWeight: active ? '600' : '500',
            transition: 'all 0.2s cubic-bezier(0.4, 0, 0.2, 1)'
        }),
    main: {
        flex: 1,
        padding: '48px 64px',
        overflowY: 'auto',
        backgroundColor: 'var(--color-background)'
    },
    header: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: '48px'
    },
    topbar: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingBottom: '32px',
        borderBottom: '1px solid var(--color-border)',
        marginBottom: '40px',
        backgroundColor: 'var(--color-topbar-bg)'
    },
    greeting: {
        fontSize: '28px',
        fontWeight: '800',
        color: 'var(--color-primary)',
        letterSpacing: '-0.02em'
    },
    card: {
        backgroundColor: 'var(--color-card-bg)',
        border: '1px solid var(--color-border)',
        padding: '32px',
        borderRadius: '16px',
        boxShadow: 'var(--shadow-sm)',
        transition: 'box-shadow 0.3s ease, background-color 0.3s ease'
    },
    button: {
        primary: {
            backgroundColor: 'var(--color-accent)',
            color: '#FFFFFF',
            border: 'none',
            padding: '12px 24px',
            borderRadius: '12px',
            fontWeight: '600',
            fontSize: '14px',
            cursor: 'pointer',
            transition: 'all 0.2s ease',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '8px',
            boxShadow: '0 4px 6px -1px rgba(13, 148, 136, 0.2)'
        },
        outline: {
            backgroundColor: 'var(--color-white)',
            color: 'var(--color-primary)',
            border: '1px solid var(--color-border)',
            padding: '12px 24px',
            borderRadius: '12px',
            fontWeight: '600',
            fontSize: '14px',
            cursor: 'pointer',
            transition: 'all 0.2s ease',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '8px'
        },
        ghost: {
            background: 'none',
            border: 'none',
            padding: '8px 12px',
            borderRadius: '8px',
            fontWeight: '600',
            fontSize: '13px',
            cursor: 'pointer',
            color: 'var(--color-secondary)',
            transition: 'all 0.2s ease'
        }
    },
    input: {
        width: '100%',
        padding: '12px 16px',
        border: '1px solid var(--color-border)',
        borderRadius: '12px',
        fontSize: '14px',
        outline: 'none',
        fontFamily: 'inherit',
        transition: 'all 0.2s ease',
        backgroundColor: 'var(--color-input-bg)',
        color: 'var(--color-primary)'
    },
    badge: (type)=>({
            padding: '6px 12px',
            borderRadius: '9999px',
            fontSize: '12px',
            fontWeight: '600',
            display: 'inline-flex',
            alignItems: 'center',
            gap: '6px',
            backgroundColor: type === 'primary' ? 'rgba(13,148,136,0.1)' : 'var(--color-hover)',
            color: type === 'primary' ? 'var(--color-accent)' : 'var(--color-secondary)',
            border: `1px solid ${type === 'primary' ? 'rgba(13,148,136,0.2)' : 'var(--color-border)'}`
        }),
    th: {
        textAlign: 'left',
        padding: '20px 16px',
        fontSize: '12px',
        fontWeight: '700',
        textTransform: 'uppercase',
        color: 'var(--color-secondary)',
        borderBottom: '1px solid var(--color-border)',
        letterSpacing: '0.05em',
        backgroundColor: 'var(--color-table-header)'
    },
    td: {
        padding: '20px 16px',
        fontSize: '14px',
        borderBottom: '1px solid var(--color-border)',
        color: 'var(--color-primary)'
    },
    modal: {
        position: 'fixed',
        inset: 0,
        background: 'rgba(0, 0, 0, 0.6)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        zIndex: 1000,
        backdropFilter: 'blur(12px)',
        padding: '24px',
        animation: 'fadeIn 0.3s ease-out'
    }
};
}),
"[project]/Documents/hr/Hrms/src/utils/salaryCalc.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * Indian Payroll Calculation Utility
 * Based on standard Indian salary structure (CTC breakdown).
 */ /** Format a number as Indian Rupees (₹) with lakh/crore aware commas */ __turbopack_context__.s([
    "calcSalary",
    ()=>calcSalary,
    "formatINR",
    ()=>formatINR,
    "formatLPA",
    ()=>formatLPA
]);
const formatINR = (amount)=>{
    const n = Math.round(Number(amount) || 0);
    return '₹' + n.toLocaleString('en-IN');
};
const formatLPA = (annual)=>{
    const l = (Number(annual) || 0) / 100000;
    return l % 1 === 0 ? `${l}L` : `${l.toFixed(2)}L`;
};
const calcSalary = ({ ctcAnnual = 0, isMetro = true, tdsMonthly = 0 })=>{
    const ctc = Number(ctcAnnual) || 0;
    const monthly = ctc / 12;
    // Employer PF = 12% of Basic; Basic = 40% of CTC/12
    const basic = Math.round(monthly * 0.40);
    const employerPF = Math.round(basic * 0.12);
    const gross = Math.round(monthly - employerPF); // Gross = CTC/12 - Employer PF
    const hra = Math.round(basic * (isMetro ? 0.50 : 0.40));
    const specialAllow = Math.max(0, gross - basic - hra);
    // Deductions
    const employeePF = Math.round(basic * 0.12); // Employee PF (12% of Basic)
    const profTax = 200; // Professional Tax: ₹200/month (most states)
    const tds = Math.round(Number(tdsMonthly) || 0);
    const totalDeductions = employeePF + profTax + tds;
    const netInHand = gross - totalDeductions;
    return {
        // Earnings
        ctcAnnual: ctc,
        ctcMonthly: Math.round(monthly),
        basic,
        hra,
        specialAllow,
        gross,
        // Employer-side (part of CTC, not in-hand)
        employerPF,
        // Deductions from gross
        employeePF,
        profTax,
        tds,
        totalDeductions,
        // Take-home
        netInHand
    };
};
}),
"[project]/Documents/hr/Hrms/src/utils/exportCSV.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * Export data to a CSV file — no libraries needed.
 * @param {object[]} rows   - Array of plain objects
 * @param {string}   filename  - e.g. 'attendance-report.csv'
 * @param {string[]} [columns] - Optional ordered column keys; defaults to first row's keys
 */ __turbopack_context__.s([
    "exportToCSV",
    ()=>exportToCSV
]);
const exportToCSV = (rows, filename, columns)=>{
    if (!rows || rows.length === 0) {
        alert('No data to export.');
        return;
    }
    const cols = columns || Object.keys(rows[0]);
    const header = cols.join(',');
    const body = rows.map((row)=>cols.map((col)=>{
            const val = row[col] ?? '';
            // Wrap in quotes if contains comma, newline, or quotes
            const str = String(val).replace(/"/g, '""');
            return /[,\n"]/.test(str) ? `"${str}"` : str;
        }).join(',')).join('\n');
    const csv = `${header}\n${body}`;
    const blob = new Blob([
        csv
    ], {
        type: 'text/csv;charset=utf-8;'
    });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = filename;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
};
}),
"[project]/Documents/hr/Hrms/src/utils/auditLog.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "logAction",
    ()=>logAction
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$hr$2f$Hrms$2f$node_modules$2f$firebase$2f$firestore$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/Documents/hr/Hrms/node_modules/firebase/firestore/dist/index.mjs [app-ssr] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$hr$2f$Hrms$2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/hr/Hrms/node_modules/@firebase/firestore/dist/index.node.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$hr$2f$Hrms$2f$src$2f$firebase$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/hr/Hrms/src/firebase.js [app-ssr] (ecmascript)");
;
;
const logAction = async (action, details = {}, adminEmail = 'system')=>{
    try {
        await (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$hr$2f$Hrms$2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["addDoc"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$hr$2f$Hrms$2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["collection"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$hr$2f$Hrms$2f$src$2f$firebase$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["db"], 'auditLog'), {
            action,
            details,
            performedBy: adminEmail,
            timestamp: new Date().toISOString()
        });
    } catch (err) {
        // Never let audit logging break the main flow
        console.warn('Audit log write failed:', err);
    }
};
}),
"[project]/Documents/hr/Hrms/src/app/page.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Home
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$hr$2f$Hrms$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/hr/Hrms/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$hr$2f$Hrms$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/hr/Hrms/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$hr$2f$Hrms$2f$src$2f$context$2f$AuthContext$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/hr/Hrms/src/context/AuthContext.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$hr$2f$Hrms$2f$src$2f$context$2f$RBACContext$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/hr/Hrms/src/context/RBACContext.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$hr$2f$Hrms$2f$src$2f$components$2f$LoginForm$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/hr/Hrms/src/components/LoginForm/index.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$hr$2f$Hrms$2f$src$2f$components$2f$AdminArea$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/hr/Hrms/src/components/AdminArea/index.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$hr$2f$Hrms$2f$src$2f$components$2f$EmployeeArea$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/hr/Hrms/src/components/EmployeeArea/index.js [app-ssr] (ecmascript)");
'use client';
;
;
;
;
;
;
;
const ADMIN_EMAILS = [
    'admin@hrmate.com'
];
function Home() {
    const { user, loading, setUser } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$hr$2f$Hrms$2f$src$2f$context$2f$AuthContext$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useAuth"])();
    if (loading) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$hr$2f$Hrms$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            style: {
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                height: '100vh',
                backgroundColor: '#F9FAFB'
            },
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$hr$2f$Hrms$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    textAlign: 'center'
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$hr$2f$Hrms$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            width: '48px',
                            height: '48px',
                            background: '#111827',
                            borderRadius: '12px',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            margin: '0 auto 16px',
                            animation: 'pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite'
                        },
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$hr$2f$Hrms$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "material-symbols-outlined",
                            style: {
                                color: '#FFF',
                                fontSize: '24px'
                            },
                            children: "terminal"
                        }, void 0, false, {
                            fileName: "[project]/Documents/hr/Hrms/src/app/page.js",
                            lineNumber: 24,
                            columnNumber: 25
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/Documents/hr/Hrms/src/app/page.js",
                        lineNumber: 19,
                        columnNumber: 21
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$hr$2f$Hrms$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            fontSize: '20px',
                            fontWeight: '800',
                            color: '#111827',
                            marginBottom: '8px'
                        },
                        children: "Cyberseal HRMS"
                    }, void 0, false, {
                        fileName: "[project]/Documents/hr/Hrms/src/app/page.js",
                        lineNumber: 26,
                        columnNumber: 21
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$hr$2f$Hrms$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("style", {
                        children: `@keyframes pulse { 0%, 100% { opacity: 1; } 50% { opacity: .5; } }`
                    }, void 0, false, {
                        fileName: "[project]/Documents/hr/Hrms/src/app/page.js",
                        lineNumber: 27,
                        columnNumber: 21
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$hr$2f$Hrms$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            fontSize: '14px',
                            fontWeight: '500',
                            color: '#6B7280'
                        },
                        children: "Loading secure environment..."
                    }, void 0, false, {
                        fileName: "[project]/Documents/hr/Hrms/src/app/page.js",
                        lineNumber: 28,
                        columnNumber: 21
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Documents/hr/Hrms/src/app/page.js",
                lineNumber: 18,
                columnNumber: 17
            }, this)
        }, void 0, false, {
            fileName: "[project]/Documents/hr/Hrms/src/app/page.js",
            lineNumber: 17,
            columnNumber: 13
        }, this);
    }
    if (!user) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$hr$2f$Hrms$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$hr$2f$Hrms$2f$src$2f$components$2f$LoginForm$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
            onLoginSuccess: (u)=>setUser(u)
        }, void 0, false, {
            fileName: "[project]/Documents/hr/Hrms/src/app/page.js",
            lineNumber: 35,
            columnNumber: 16
        }, this);
    }
    const isAdmin = ADMIN_EMAILS.includes(user.email) || user.isAdmin;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$hr$2f$Hrms$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$hr$2f$Hrms$2f$src$2f$context$2f$RBACContext$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["RBACProvider"], {
        user: user,
        children: isAdmin ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$hr$2f$Hrms$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$hr$2f$Hrms$2f$src$2f$components$2f$AdminArea$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
            user: user
        }, void 0, false, {
            fileName: "[project]/Documents/hr/Hrms/src/app/page.js",
            lineNumber: 41,
            columnNumber: 24
        }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$hr$2f$Hrms$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$hr$2f$Hrms$2f$src$2f$components$2f$EmployeeArea$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
            user: user
        }, void 0, false, {
            fileName: "[project]/Documents/hr/Hrms/src/app/page.js",
            lineNumber: 41,
            columnNumber: 52
        }, this)
    }, void 0, false, {
        fileName: "[project]/Documents/hr/Hrms/src/app/page.js",
        lineNumber: 40,
        columnNumber: 9
    }, this);
}
}),
];

//# sourceMappingURL=Documents_hr_Hrms_src_632fd786._.js.map