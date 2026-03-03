(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/Documents/hr/Hrms/src/styles.js [app-client] (ecmascript)", ((__turbopack_context__) => {
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
        background: 'rgba(241, 245, 249, 0.6)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        zIndex: 1000,
        backdropFilter: 'blur(4px)',
        padding: '24px',
        animation: 'fadeIn 0.3s ease-out'
    }
};
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Documents/hr/Hrms/src/components/LoginForm/index.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__,
    "validatePassword",
    ()=>validatePassword
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$hr$2f$Hrms$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/hr/Hrms/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$hr$2f$Hrms$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/hr/Hrms/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$hr$2f$Hrms$2f$src$2f$firebase$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/hr/Hrms/src/firebase.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$hr$2f$Hrms$2f$node_modules$2f$firebase$2f$auth$2f$dist$2f$esm$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/Documents/hr/Hrms/node_modules/firebase/auth/dist/esm/index.esm.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$hr$2f$Hrms$2f$node_modules$2f40$firebase$2f$auth$2f$dist$2f$esm$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/hr/Hrms/node_modules/@firebase/auth/dist/esm/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$hr$2f$Hrms$2f$node_modules$2f$firebase$2f$firestore$2f$dist$2f$esm$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/Documents/hr/Hrms/node_modules/firebase/firestore/dist/esm/index.esm.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$hr$2f$Hrms$2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/hr/Hrms/node_modules/@firebase/firestore/dist/index.esm.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$hr$2f$Hrms$2f$src$2f$styles$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/hr/Hrms/src/styles.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
;
;
;
;
;
;
const ADMIN_CREDENTIALS = {
    email: 'admin@hrmate.com',
    password: 'adminPassword123'
};
const MAX_ATTEMPTS = 5;
const LOCKOUT_DURATION_MS = 15 * 60 * 1000; // 15 min lockout
const validatePassword = (pw)=>{
    const rules = [
        {
            test: pw.length >= 8,
            label: 'At least 8 characters'
        },
        {
            test: /[A-Z]/.test(pw),
            label: 'One uppercase letter'
        },
        {
            test: /[a-z]/.test(pw),
            label: 'One lowercase letter'
        },
        {
            test: /[0-9]/.test(pw),
            label: 'One number'
        },
        {
            test: /[^A-Za-z0-9]/.test(pw),
            label: 'One special character'
        }
    ];
    return {
        rules,
        isValid: rules.every((r)=>r.test)
    };
};
const LoginForm = ({ onLoginSuccess, userType = 'employee' })=>{
    _s();
    const [email, setEmail] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$hr$2f$Hrms$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('');
    const [password, setPassword] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$hr$2f$Hrms$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('');
    const [loading, setLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$hr$2f$Hrms$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [error, setError] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$hr$2f$Hrms$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('');
    const [attempts, setAttempts] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$hr$2f$Hrms$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0);
    const [lockUntil, setLockUntil] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$hr$2f$Hrms$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0);
    const [lockRemaining, setLockRemaining] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$hr$2f$Hrms$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0);
    // Hydrate lockout state
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$hr$2f$Hrms$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "LoginForm.useEffect": ()=>{
            try {
                const stored = sessionStorage.getItem('login_lockout');
                if (stored) {
                    const { until, count } = JSON.parse(stored);
                    if (Date.now() < until) {
                        setLockUntil(until);
                        setAttempts(count);
                    } else sessionStorage.removeItem('login_lockout');
                }
            } catch (_) {}
        }
    }["LoginForm.useEffect"], []);
    // Countdown timer
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$hr$2f$Hrms$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "LoginForm.useEffect": ()=>{
            if (!lockUntil || Date.now() >= lockUntil) {
                setLockRemaining(0);
                return;
            }
            const interval = setInterval({
                "LoginForm.useEffect.interval": ()=>{
                    const remaining = Math.max(0, lockUntil - Date.now());
                    setLockRemaining(remaining);
                    if (remaining <= 0) {
                        clearInterval(interval);
                        setLockUntil(0);
                        setAttempts(0);
                        sessionStorage.removeItem('login_lockout');
                    }
                }
            }["LoginForm.useEffect.interval"], 1000);
            return ({
                "LoginForm.useEffect": ()=>clearInterval(interval)
            })["LoginForm.useEffect"];
        }
    }["LoginForm.useEffect"], [
        lockUntil
    ]);
    const recordFailedAttempt = ()=>{
        const newCount = attempts + 1;
        setAttempts(newCount);
        if (newCount >= MAX_ATTEMPTS) {
            const until = Date.now() + LOCKOUT_DURATION_MS;
            setLockUntil(until);
            sessionStorage.setItem('login_lockout', JSON.stringify({
                until,
                count: newCount
            }));
            setError(`Too many failed attempts. Locked for 15 minutes.`);
            // Log the lockout
            try {
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$hr$2f$Hrms$2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["addDoc"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$hr$2f$Hrms$2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["collection"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$hr$2f$Hrms$2f$src$2f$firebase$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["db"], 'auditLog'), {
                    action: 'LOGIN_LOCKOUT',
                    details: {
                        email
                    },
                    timestamp: new Date().toISOString(),
                    performedBy: 'system'
                });
            } catch (_) {}
        } else {
            setError(`Invalid credentials. ${MAX_ATTEMPTS - newCount} attempts remaining.`);
        }
    };
    const submit = async (e)=>{
        e.preventDefault();
        setError('');
        if (lockUntil && Date.now() < lockUntil) {
            setError('Account temporarily locked. Please wait.');
            return;
        }
        setLoading(true);
        if (email === ADMIN_CREDENTIALS.email && password === ADMIN_CREDENTIALS.password) {
            if (userType === 'admin') {
                setAttempts(0);
                try {
                    sessionStorage.removeItem('login_lockout');
                } catch (_) {}
                try {
                    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$hr$2f$Hrms$2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["addDoc"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$hr$2f$Hrms$2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["collection"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$hr$2f$Hrms$2f$src$2f$firebase$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["db"], 'auditLog'), {
                        action: 'ADMIN_LOGIN',
                        details: {
                            email
                        },
                        timestamp: new Date().toISOString(),
                        performedBy: email
                    });
                } catch (_) {}
                onLoginSuccess({
                    email,
                    uid: 'hardcoded-admin',
                    isAdmin: true
                });
                setLoading(false);
                return;
            } else {
                setError("Admin accounts must use the admin portal (/admin-login).");
                setLoading(false);
                return;
            }
        }
        try {
            const authUser = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$hr$2f$Hrms$2f$node_modules$2f40$firebase$2f$auth$2f$dist$2f$esm$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["signInWithEmailAndPassword"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$hr$2f$Hrms$2f$src$2f$firebase$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["auth"], email, password);
            setAttempts(0);
            try {
                sessionStorage.removeItem('login_lockout');
            } catch (_) {}
            onLoginSuccess(authUser.user);
        } catch (err) {
            try {
                const q = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$hr$2f$Hrms$2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["query"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$hr$2f$Hrms$2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["collection"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$hr$2f$Hrms$2f$src$2f$firebase$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["db"], 'employees'), (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$hr$2f$Hrms$2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["where"])('email', '==', email), (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$hr$2f$Hrms$2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["where"])('password', '==', password));
                const snapshot = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$hr$2f$Hrms$2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getDocs"])(q);
                if (!snapshot.empty) {
                    const empData = snapshot.docs[0].data();
                    setAttempts(0);
                    try {
                        sessionStorage.removeItem('login_lockout');
                    } catch (_) {}
                    onLoginSuccess({
                        ...empData,
                        uid: snapshot.docs[0].id
                    });
                } else {
                    recordFailedAttempt();
                }
            } catch (fError) {
                console.error(fError);
                setError("Authentication system failure.");
            }
        } finally{
            setLoading(false);
        }
    };
    const isLocked = lockUntil && Date.now() < lockUntil;
    const lockMins = Math.ceil(lockRemaining / 60000);
    const lockSecs = Math.floor(lockRemaining % 60000 / 1000);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$hr$2f$Hrms$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        style: {
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            minHeight: '100vh',
            backgroundColor: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$hr$2f$Hrms$2f$src$2f$styles$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["tokens"].colors.background,
            backgroundImage: 'radial-gradient(circle at 20% 20%, #CCFBF1 0%, transparent 40%), radial-gradient(circle at 80% 80%, #F1F5F9 0%, transparent 40%)',
            fontFamily: '"Funnel Display", sans-serif'
        },
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$hr$2f$Hrms$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
            onSubmit: submit,
            style: {
                width: '100%',
                maxWidth: '440px',
                backgroundColor: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$hr$2f$Hrms$2f$src$2f$styles$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["tokens"].colors.white,
                padding: '56px 48px',
                borderRadius: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$hr$2f$Hrms$2f$src$2f$styles$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["tokens"].radius.xl,
                boxShadow: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$hr$2f$Hrms$2f$src$2f$styles$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["tokens"].shadow.xl,
                border: `1px solid ${__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$hr$2f$Hrms$2f$src$2f$styles$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["tokens"].colors.border}`
            },
            className: "animate-fade",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$hr$2f$Hrms$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    style: {
                        textAlign: 'center',
                        marginBottom: '48px'
                    },
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$hr$2f$Hrms$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            style: {
                                width: '56px',
                                height: '56px',
                                background: `linear-gradient(135deg, ${__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$hr$2f$Hrms$2f$src$2f$styles$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["tokens"].colors.accent} 0%, #065F46 100%)`,
                                borderRadius: '16px',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                margin: '0 auto 20px',
                                boxShadow: '0 12px 24px -8px rgba(13, 148, 136, 0.4)'
                            },
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$hr$2f$Hrms$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "material-symbols-outlined",
                                style: {
                                    color: '#FFF',
                                    fontSize: '28px'
                                },
                                children: "bolt"
                            }, void 0, false, {
                                fileName: "[project]/Documents/hr/Hrms/src/components/LoginForm/index.js",
                                lineNumber: 150,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0))
                        }, void 0, false, {
                            fileName: "[project]/Documents/hr/Hrms/src/components/LoginForm/index.js",
                            lineNumber: 144,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$hr$2f$Hrms$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                            style: {
                                fontSize: '28px',
                                fontWeight: '800',
                                color: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$hr$2f$Hrms$2f$src$2f$styles$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["tokens"].colors.primary,
                                marginBottom: '8px',
                                letterSpacing: '-0.02em'
                            },
                            children: "Cyberseal HRMS"
                        }, void 0, false, {
                            fileName: "[project]/Documents/hr/Hrms/src/components/LoginForm/index.js",
                            lineNumber: 152,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$hr$2f$Hrms$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            style: {
                                color: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$hr$2f$Hrms$2f$src$2f$styles$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["tokens"].colors.secondary,
                                fontSize: '15px'
                            },
                            children: userType === 'admin' ? 'Administrative Gateway' : 'Global Workforce Entry'
                        }, void 0, false, {
                            fileName: "[project]/Documents/hr/Hrms/src/components/LoginForm/index.js",
                            lineNumber: 153,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0))
                    ]
                }, void 0, true, {
                    fileName: "[project]/Documents/hr/Hrms/src/components/LoginForm/index.js",
                    lineNumber: 143,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0)),
                error && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$hr$2f$Hrms$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    style: {
                        padding: '12px 16px',
                        borderRadius: '10px',
                        marginBottom: '20px',
                        fontSize: '13px',
                        fontWeight: '600',
                        background: '#FEF2F2',
                        border: '1px solid #FECACA',
                        color: '#DC2626',
                        display: 'flex',
                        alignItems: 'center',
                        gap: '8px'
                    },
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$hr$2f$Hrms$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "material-symbols-outlined",
                            style: {
                                fontSize: '16px'
                            },
                            children: "error"
                        }, void 0, false, {
                            fileName: "[project]/Documents/hr/Hrms/src/components/LoginForm/index.js",
                            lineNumber: 164,
                            columnNumber: 13
                        }, ("TURBOPACK compile-time value", void 0)),
                        error
                    ]
                }, void 0, true, {
                    fileName: "[project]/Documents/hr/Hrms/src/components/LoginForm/index.js",
                    lineNumber: 159,
                    columnNumber: 11
                }, ("TURBOPACK compile-time value", void 0)),
                isLocked && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$hr$2f$Hrms$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    style: {
                        padding: '16px',
                        borderRadius: '12px',
                        marginBottom: '20px',
                        textAlign: 'center',
                        background: '#FEF3C7',
                        border: '1px solid #FDE68A'
                    },
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$hr$2f$Hrms$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "material-symbols-outlined",
                            style: {
                                fontSize: '28px',
                                color: '#D97706',
                                display: 'block',
                                marginBottom: '8px'
                            },
                            children: "lock_clock"
                        }, void 0, false, {
                            fileName: "[project]/Documents/hr/Hrms/src/components/LoginForm/index.js",
                            lineNumber: 174,
                            columnNumber: 13
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$hr$2f$Hrms$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            style: {
                                fontSize: '14px',
                                fontWeight: '700',
                                color: '#92400E'
                            },
                            children: "Account Locked"
                        }, void 0, false, {
                            fileName: "[project]/Documents/hr/Hrms/src/components/LoginForm/index.js",
                            lineNumber: 175,
                            columnNumber: 13
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$hr$2f$Hrms$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            style: {
                                fontSize: '24px',
                                fontWeight: '800',
                                color: '#D97706',
                                fontFamily: 'monospace',
                                margin: '8px 0'
                            },
                            children: [
                                String(lockMins).padStart(2, '0'),
                                ":",
                                String(lockSecs).padStart(2, '0')
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Documents/hr/Hrms/src/components/LoginForm/index.js",
                            lineNumber: 176,
                            columnNumber: 13
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$hr$2f$Hrms$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            style: {
                                fontSize: '12px',
                                color: '#92400E'
                            },
                            children: "Too many failed attempts"
                        }, void 0, false, {
                            fileName: "[project]/Documents/hr/Hrms/src/components/LoginForm/index.js",
                            lineNumber: 179,
                            columnNumber: 13
                        }, ("TURBOPACK compile-time value", void 0))
                    ]
                }, void 0, true, {
                    fileName: "[project]/Documents/hr/Hrms/src/components/LoginForm/index.js",
                    lineNumber: 170,
                    columnNumber: 11
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$hr$2f$Hrms$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    style: {
                        marginBottom: '24px'
                    },
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$hr$2f$Hrms$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                            style: {
                                display: 'block',
                                fontSize: '13px',
                                fontWeight: '700',
                                color: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$hr$2f$Hrms$2f$src$2f$styles$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["tokens"].colors.primary,
                                marginBottom: '8px',
                                textTransform: 'uppercase',
                                letterSpacing: '0.05em'
                            },
                            children: "Corporate Email"
                        }, void 0, false, {
                            fileName: "[project]/Documents/hr/Hrms/src/components/LoginForm/index.js",
                            lineNumber: 184,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$hr$2f$Hrms$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                            style: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$hr$2f$Hrms$2f$src$2f$styles$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["styles"].input,
                            placeholder: "name@cyberseal.com",
                            type: "email",
                            required: true,
                            value: email,
                            onChange: (e)=>setEmail(e.target.value),
                            disabled: isLocked
                        }, void 0, false, {
                            fileName: "[project]/Documents/hr/Hrms/src/components/LoginForm/index.js",
                            lineNumber: 185,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0))
                    ]
                }, void 0, true, {
                    fileName: "[project]/Documents/hr/Hrms/src/components/LoginForm/index.js",
                    lineNumber: 183,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$hr$2f$Hrms$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    style: {
                        marginBottom: '40px'
                    },
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$hr$2f$Hrms$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                            style: {
                                display: 'block',
                                fontSize: '13px',
                                fontWeight: '700',
                                color: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$hr$2f$Hrms$2f$src$2f$styles$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["tokens"].colors.primary,
                                marginBottom: '8px',
                                textTransform: 'uppercase',
                                letterSpacing: '0.05em'
                            },
                            children: "Secure Passcode"
                        }, void 0, false, {
                            fileName: "[project]/Documents/hr/Hrms/src/components/LoginForm/index.js",
                            lineNumber: 189,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$hr$2f$Hrms$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                            style: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$hr$2f$Hrms$2f$src$2f$styles$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["styles"].input,
                            placeholder: "••••••••",
                            type: "password",
                            required: true,
                            value: password,
                            onChange: (e)=>setPassword(e.target.value),
                            disabled: isLocked
                        }, void 0, false, {
                            fileName: "[project]/Documents/hr/Hrms/src/components/LoginForm/index.js",
                            lineNumber: 190,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0))
                    ]
                }, void 0, true, {
                    fileName: "[project]/Documents/hr/Hrms/src/components/LoginForm/index.js",
                    lineNumber: 188,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$hr$2f$Hrms$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                    style: {
                        ...__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$hr$2f$Hrms$2f$src$2f$styles$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["styles"].button.primary,
                        width: '100%',
                        height: '48px',
                        fontSize: '15px',
                        opacity: isLocked ? 0.5 : 1
                    },
                    disabled: loading || isLocked,
                    children: loading ? 'Authenticating...' : isLocked ? 'Locked' : 'Establish Connection'
                }, void 0, false, {
                    fileName: "[project]/Documents/hr/Hrms/src/components/LoginForm/index.js",
                    lineNumber: 193,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$hr$2f$Hrms$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    style: {
                        marginTop: '40px',
                        textAlign: 'center',
                        fontSize: '12px',
                        color: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$hr$2f$Hrms$2f$src$2f$styles$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["tokens"].colors.secondary,
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        gap: '6px'
                    },
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$hr$2f$Hrms$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "material-symbols-outlined",
                            style: {
                                fontSize: '14px'
                            },
                            children: "lock"
                        }, void 0, false, {
                            fileName: "[project]/Documents/hr/Hrms/src/components/LoginForm/index.js",
                            lineNumber: 198,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0)),
                        "Restricted access. Authorized personnel only."
                    ]
                }, void 0, true, {
                    fileName: "[project]/Documents/hr/Hrms/src/components/LoginForm/index.js",
                    lineNumber: 197,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0))
            ]
        }, void 0, true, {
            fileName: "[project]/Documents/hr/Hrms/src/components/LoginForm/index.js",
            lineNumber: 138,
            columnNumber: 7
        }, ("TURBOPACK compile-time value", void 0))
    }, void 0, false, {
        fileName: "[project]/Documents/hr/Hrms/src/components/LoginForm/index.js",
        lineNumber: 132,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
_s(LoginForm, "5XYv676aFpseGQ8rk9FIjLNmf5g=");
_c = LoginForm;
const __TURBOPACK__default__export__ = LoginForm;
var _c;
__turbopack_context__.k.register(_c, "LoginForm");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Documents/hr/Hrms/src/app/admin-login/page.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>AdminLoginPage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$hr$2f$Hrms$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/hr/Hrms/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$hr$2f$Hrms$2f$src$2f$components$2f$LoginForm$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/hr/Hrms/src/components/LoginForm/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$hr$2f$Hrms$2f$src$2f$context$2f$AuthContext$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/hr/Hrms/src/context/AuthContext.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$hr$2f$Hrms$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/hr/Hrms/node_modules/next/navigation.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$hr$2f$Hrms$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/hr/Hrms/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
;
function AdminLoginPage() {
    _s();
    const { user, setUser } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$hr$2f$Hrms$2f$src$2f$context$2f$AuthContext$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAuth"])();
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$hr$2f$Hrms$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"])();
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$hr$2f$Hrms$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "AdminLoginPage.useEffect": ()=>{
            if (user) router.push('/');
        }
    }["AdminLoginPage.useEffect"], [
        user,
        router
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$hr$2f$Hrms$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$hr$2f$Hrms$2f$src$2f$components$2f$LoginForm$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
        onLoginSuccess: (u)=>setUser(u),
        userType: "admin"
    }, void 0, false, {
        fileName: "[project]/Documents/hr/Hrms/src/app/admin-login/page.js",
        lineNumber: 16,
        columnNumber: 12
    }, this);
}
_s(AdminLoginPage, "b/qarASTW83tsH01cT+P6KJVyYA=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$hr$2f$Hrms$2f$src$2f$context$2f$AuthContext$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAuth"],
        __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$hr$2f$Hrms$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"]
    ];
});
_c = AdminLoginPage;
var _c;
__turbopack_context__.k.register(_c, "AdminLoginPage");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Documents/hr/Hrms/node_modules/next/navigation.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {

module.exports = __turbopack_context__.r("[project]/Documents/hr/Hrms/node_modules/next/dist/client/components/navigation.js [app-client] (ecmascript)");
}),
]);

//# sourceMappingURL=Documents_hr_Hrms_ceef50f2._.js.map