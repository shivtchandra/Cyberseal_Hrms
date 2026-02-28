module.exports = [
"[project]/Documents/help/HRMS/src/styles.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "styles",
    ()=>styles,
    "tokens",
    ()=>tokens
]);
const tokens = {
    colors: {
        primary: '#0F172A',
        secondary: '#64748B',
        accent: '#0D9488',
        success: '#10B981',
        error: '#EF4444',
        warning: '#F59E0B',
        background: '#F8FAFC',
        surface: '#FFFFFF',
        border: '#E2E8F0',
        white: '#FFFFFF',
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
        sm: '0 1px 2px 0 rgb(0 0 0 / 0.05)',
        md: '0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1)',
        lg: '0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1)',
        xl: '0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1)'
    }
};
const styles = {
    app: {
        display: 'flex',
        minHeight: '100vh',
        backgroundColor: tokens.colors.background,
        color: tokens.colors.primary,
        fontFamily: '"Funnel Display", sans-serif',
        WebkitFontSmoothing: 'antialiased'
    },
    sidebar: {
        width: '280px',
        backgroundColor: tokens.colors.white,
        display: 'flex',
        flexDirection: 'column',
        padding: '40px 0',
        borderRight: `1px solid ${tokens.colors.border}`,
        position: 'relative',
        zIndex: 10
    },
    logo: {
        fontSize: '22px',
        fontWeight: '800',
        padding: '0 32px',
        marginBottom: '48px',
        display: 'flex',
        alignItems: 'center',
        gap: '12px',
        color: tokens.colors.primary,
        letterSpacing: '-0.5px'
    },
    menuItem: (active)=>({
            margin: '4px 20px',
            padding: '14px 16px',
            display: 'flex',
            alignItems: 'center',
            gap: '12px',
            cursor: 'pointer',
            borderRadius: tokens.radius.md,
            backgroundColor: active ? '#F1F5F9' : 'transparent',
            color: active ? tokens.colors.accent : tokens.colors.secondary,
            fontSize: '14px',
            fontWeight: active ? '600' : '500',
            transition: 'all 0.2s cubic-bezier(0.4, 0, 0.2, 1)'
        }),
    main: {
        flex: 1,
        padding: '48px 64px',
        overflowY: 'auto'
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
        borderBottom: `1px solid #E2E8F0`,
        marginBottom: '40px'
    },
    greeting: {
        fontSize: '28px',
        fontWeight: '800',
        color: tokens.colors.primary,
        letterSpacing: '-0.02em'
    },
    card: {
        backgroundColor: tokens.colors.surface,
        border: `1px solid ${tokens.colors.border}`,
        padding: '32px',
        borderRadius: tokens.radius.lg,
        boxShadow: tokens.shadow.sm,
        transition: 'box-shadow 0.3s ease'
    },
    button: {
        primary: {
            backgroundColor: tokens.colors.accent,
            color: '#FFFFFF',
            border: 'none',
            padding: '12px 24px',
            borderRadius: tokens.radius.md,
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
            backgroundColor: tokens.colors.white,
            color: tokens.colors.primary,
            border: `1px solid ${tokens.colors.border}`,
            padding: '12px 24px',
            borderRadius: tokens.radius.md,
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
            borderRadius: tokens.radius.sm,
            fontWeight: '600',
            fontSize: '13px',
            cursor: 'pointer',
            color: tokens.colors.secondary,
            transition: 'all 0.2s ease'
        }
    },
    input: {
        width: '100%',
        padding: '12px 16px',
        border: `1px solid ${tokens.colors.border}`,
        borderRadius: tokens.radius.md,
        fontSize: '14px',
        outline: 'none',
        fontFamily: 'inherit',
        transition: 'all 0.2s ease',
        backgroundColor: '#FAFBFC',
        color: tokens.colors.primary
    },
    badge: (type)=>({
            padding: '6px 12px',
            borderRadius: tokens.radius.full,
            fontSize: '12px',
            fontWeight: '600',
            display: 'inline-flex',
            alignItems: 'center',
            gap: '6px',
            backgroundColor: type === 'primary' ? '#F0FDFA' : '#F8FAFC',
            color: type === 'primary' ? tokens.colors.accent : tokens.colors.secondary,
            border: `1px solid ${type === 'primary' ? '#CCFBF1' : tokens.colors.border}`
        }),
    th: {
        textAlign: 'left',
        padding: '20px 16px',
        fontSize: '12px',
        fontWeight: '700',
        textTransform: 'uppercase',
        color: tokens.colors.secondary,
        borderBottom: `1px solid ${tokens.colors.border}`,
        letterSpacing: '0.05em'
    },
    td: {
        padding: '20px 16px',
        fontSize: '14px',
        borderBottom: `1px solid ${tokens.colors.border}`,
        color: tokens.colors.primary
    },
    modal: {
        position: 'fixed',
        inset: 0,
        background: 'rgba(15, 23, 42, 0.6)',
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
"[project]/Documents/help/HRMS/src/utils/salaryCalc.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
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
"[project]/Documents/help/HRMS/src/app/page.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Home
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$help$2f$HRMS$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/help/HRMS/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$help$2f$HRMS$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/help/HRMS/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$help$2f$HRMS$2f$src$2f$context$2f$AuthContext$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/help/HRMS/src/context/AuthContext.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$help$2f$HRMS$2f$src$2f$components$2f$LoginForm$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/help/HRMS/src/components/LoginForm/index.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$help$2f$HRMS$2f$src$2f$components$2f$AdminArea$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/help/HRMS/src/components/AdminArea/index.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$help$2f$HRMS$2f$src$2f$components$2f$EmployeeArea$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/help/HRMS/src/components/EmployeeArea/index.js [app-ssr] (ecmascript)");
'use client';
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
    const { user, loading, setUser } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$help$2f$HRMS$2f$src$2f$context$2f$AuthContext$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useAuth"])();
    if (loading) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$help$2f$HRMS$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            style: {
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                height: '100vh',
                backgroundColor: '#F9FAFB'
            },
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$help$2f$HRMS$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    textAlign: 'center'
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$help$2f$HRMS$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
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
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$help$2f$HRMS$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "material-symbols-outlined",
                            style: {
                                color: '#FFF',
                                fontSize: '24px'
                            },
                            children: "terminal"
                        }, void 0, false, {
                            fileName: "[project]/Documents/help/HRMS/src/app/page.js",
                            lineNumber: 23,
                            columnNumber: 25
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/Documents/help/HRMS/src/app/page.js",
                        lineNumber: 18,
                        columnNumber: 21
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$help$2f$HRMS$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            fontSize: '20px',
                            fontWeight: '800',
                            color: '#111827',
                            marginBottom: '8px'
                        },
                        children: "HRMate"
                    }, void 0, false, {
                        fileName: "[project]/Documents/help/HRMS/src/app/page.js",
                        lineNumber: 25,
                        columnNumber: 21
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$help$2f$HRMS$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("style", {
                        children: `@keyframes pulse { 0%, 100% { opacity: 1; } 50% { opacity: .5; } }`
                    }, void 0, false, {
                        fileName: "[project]/Documents/help/HRMS/src/app/page.js",
                        lineNumber: 26,
                        columnNumber: 21
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$help$2f$HRMS$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            fontSize: '14px',
                            fontWeight: '500',
                            color: '#6B7280'
                        },
                        children: "Loading secure environment..."
                    }, void 0, false, {
                        fileName: "[project]/Documents/help/HRMS/src/app/page.js",
                        lineNumber: 27,
                        columnNumber: 21
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Documents/help/HRMS/src/app/page.js",
                lineNumber: 17,
                columnNumber: 17
            }, this)
        }, void 0, false, {
            fileName: "[project]/Documents/help/HRMS/src/app/page.js",
            lineNumber: 16,
            columnNumber: 13
        }, this);
    }
    if (!user) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$help$2f$HRMS$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$help$2f$HRMS$2f$src$2f$components$2f$LoginForm$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
            onLoginSuccess: (u)=>setUser(u)
        }, void 0, false, {
            fileName: "[project]/Documents/help/HRMS/src/app/page.js",
            lineNumber: 34,
            columnNumber: 16
        }, this);
    }
    const isAdmin = ADMIN_EMAILS.includes(user.email) || user.isAdmin;
    return isAdmin ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$help$2f$HRMS$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$help$2f$HRMS$2f$src$2f$components$2f$AdminArea$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
        user: user
    }, void 0, false, {
        fileName: "[project]/Documents/help/HRMS/src/app/page.js",
        lineNumber: 38,
        columnNumber: 22
    }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$help$2f$HRMS$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$help$2f$HRMS$2f$src$2f$components$2f$EmployeeArea$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
        user: user
    }, void 0, false, {
        fileName: "[project]/Documents/help/HRMS/src/app/page.js",
        lineNumber: 38,
        columnNumber: 50
    }, this);
}
}),
];

//# sourceMappingURL=Documents_help_HRMS_src_192c5a93._.js.map