(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/Documents/help/HRMS/src/styles.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "styles",
    ()=>styles,
    "tokens",
    ()=>tokens
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$help$2f$HRMS$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_type_of$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/help/HRMS/node_modules/@swc/helpers/esm/_type_of.js [app-client] (ecmascript)");
;
var tokens = {
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
var styles = {
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
        borderRight: "1px solid ".concat(tokens.colors.border),
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
    menuItem: function(active) {
        return {
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
        };
    },
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
        borderBottom: "1px solid #E2E8F0",
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
        border: "1px solid ".concat(tokens.colors.border),
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
            border: "1px solid ".concat(tokens.colors.border),
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
        border: "1px solid ".concat(tokens.colors.border),
        borderRadius: tokens.radius.md,
        fontSize: '14px',
        outline: 'none',
        fontFamily: 'inherit',
        transition: 'all 0.2s ease',
        backgroundColor: '#FAFBFC',
        color: tokens.colors.primary
    },
    badge: function(type) {
        return {
            padding: '6px 12px',
            borderRadius: tokens.radius.full,
            fontSize: '12px',
            fontWeight: '600',
            display: 'inline-flex',
            alignItems: 'center',
            gap: '6px',
            backgroundColor: type === 'primary' ? '#F0FDFA' : '#F8FAFC',
            color: type === 'primary' ? tokens.colors.accent : tokens.colors.secondary,
            border: "1px solid ".concat(type === 'primary' ? '#CCFBF1' : tokens.colors.border)
        };
    },
    th: {
        textAlign: 'left',
        padding: '20px 16px',
        fontSize: '12px',
        fontWeight: '700',
        textTransform: 'uppercase',
        color: tokens.colors.secondary,
        borderBottom: "1px solid ".concat(tokens.colors.border),
        letterSpacing: '0.05em'
    },
    td: {
        padding: '20px 16px',
        fontSize: '14px',
        borderBottom: "1px solid ".concat(tokens.colors.border),
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
if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$help$2f$HRMS$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_type_of$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(globalThis.$RefreshHelpers$) === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Documents/help/HRMS/src/utils/salaryCalc.js [app-client] (ecmascript)", ((__turbopack_context__) => {
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
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$help$2f$HRMS$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_type_of$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/help/HRMS/node_modules/@swc/helpers/esm/_type_of.js [app-client] (ecmascript)");
;
var formatINR = function(amount) {
    var n = Math.round(Number(amount) || 0);
    return '₹' + n.toLocaleString('en-IN');
};
var formatLPA = function(annual) {
    var l = (Number(annual) || 0) / 100000;
    return l % 1 === 0 ? "".concat(l, "L") : "".concat(l.toFixed(2), "L");
};
var calcSalary = function(param) {
    var _param_ctcAnnual = param.ctcAnnual, ctcAnnual = _param_ctcAnnual === void 0 ? 0 : _param_ctcAnnual, _param_isMetro = param.isMetro, isMetro = _param_isMetro === void 0 ? true : _param_isMetro, _param_tdsMonthly = param.tdsMonthly, tdsMonthly = _param_tdsMonthly === void 0 ? 0 : _param_tdsMonthly;
    var ctc = Number(ctcAnnual) || 0;
    var monthly = ctc / 12;
    // Employer PF = 12% of Basic; Basic = 40% of CTC/12
    var basic = Math.round(monthly * 0.40);
    var employerPF = Math.round(basic * 0.12);
    var gross = Math.round(monthly - employerPF); // Gross = CTC/12 - Employer PF
    var hra = Math.round(basic * (isMetro ? 0.50 : 0.40));
    var specialAllow = Math.max(0, gross - basic - hra);
    // Deductions
    var employeePF = Math.round(basic * 0.12); // Employee PF (12% of Basic)
    var profTax = 200; // Professional Tax: ₹200/month (most states)
    var tds = Math.round(Number(tdsMonthly) || 0);
    var totalDeductions = employeePF + profTax + tds;
    var netInHand = gross - totalDeductions;
    return {
        // Earnings
        ctcAnnual: ctc,
        ctcMonthly: Math.round(monthly),
        basic: basic,
        hra: hra,
        specialAllow: specialAllow,
        gross: gross,
        // Employer-side (part of CTC, not in-hand)
        employerPF: employerPF,
        // Deductions from gross
        employeePF: employeePF,
        profTax: profTax,
        tds: tds,
        totalDeductions: totalDeductions,
        // Take-home
        netInHand: netInHand
    };
};
if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$help$2f$HRMS$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_type_of$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(globalThis.$RefreshHelpers$) === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Documents/help/HRMS/src/app/page.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Home
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$help$2f$HRMS$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_type_of$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/help/HRMS/node_modules/@swc/helpers/esm/_type_of.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$help$2f$HRMS$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/help/HRMS/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$help$2f$HRMS$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/help/HRMS/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$help$2f$HRMS$2f$src$2f$context$2f$AuthContext$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/help/HRMS/src/context/AuthContext.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$help$2f$HRMS$2f$src$2f$components$2f$LoginForm$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/help/HRMS/src/components/LoginForm/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$help$2f$HRMS$2f$src$2f$components$2f$AdminArea$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/help/HRMS/src/components/AdminArea/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$help$2f$HRMS$2f$src$2f$components$2f$EmployeeArea$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/help/HRMS/src/components/EmployeeArea/index.js [app-client] (ecmascript)");
;
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
;
;
var ADMIN_EMAILS = [
    'admin@hrmate.com'
];
function Home() {
    _s();
    var _useAuth = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$help$2f$HRMS$2f$src$2f$context$2f$AuthContext$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAuth"])(), user = _useAuth.user, loading = _useAuth.loading, setUser = _useAuth.setUser;
    if (loading) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$help$2f$HRMS$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            style: {
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                height: '100vh',
                backgroundColor: '#F9FAFB'
            },
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$help$2f$HRMS$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    textAlign: 'center'
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$help$2f$HRMS$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
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
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$help$2f$HRMS$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
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
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$help$2f$HRMS$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
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
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$help$2f$HRMS$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("style", {
                        children: "@keyframes pulse { 0%, 100% { opacity: 1; } 50% { opacity: .5; } }"
                    }, void 0, false, {
                        fileName: "[project]/Documents/help/HRMS/src/app/page.js",
                        lineNumber: 26,
                        columnNumber: 21
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$help$2f$HRMS$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
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
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$help$2f$HRMS$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$help$2f$HRMS$2f$src$2f$components$2f$LoginForm$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
            onLoginSuccess: function(u) {
                return setUser(u);
            }
        }, void 0, false, {
            fileName: "[project]/Documents/help/HRMS/src/app/page.js",
            lineNumber: 34,
            columnNumber: 16
        }, this);
    }
    var isAdmin = ADMIN_EMAILS.includes(user.email) || user.isAdmin;
    return isAdmin ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$help$2f$HRMS$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$help$2f$HRMS$2f$src$2f$components$2f$AdminArea$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
        user: user
    }, void 0, false, {
        fileName: "[project]/Documents/help/HRMS/src/app/page.js",
        lineNumber: 38,
        columnNumber: 22
    }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$help$2f$HRMS$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$help$2f$HRMS$2f$src$2f$components$2f$EmployeeArea$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
        user: user
    }, void 0, false, {
        fileName: "[project]/Documents/help/HRMS/src/app/page.js",
        lineNumber: 38,
        columnNumber: 50
    }, this);
}
_s(Home, "SzBnKAq2N6wNY6WfNtzc9NPeEIo=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$help$2f$HRMS$2f$src$2f$context$2f$AuthContext$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAuth"]
    ];
});
_c = Home;
var _c;
__turbopack_context__.k.register(_c, "Home");
if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$help$2f$HRMS$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_type_of$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(globalThis.$RefreshHelpers$) === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=Documents_help_HRMS_src_a3cd92a1._.js.map