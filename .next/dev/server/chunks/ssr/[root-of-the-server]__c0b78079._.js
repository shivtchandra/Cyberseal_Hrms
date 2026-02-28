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
        accent: '#4F46E5',
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
        fontFamily: '"Outfit", "Inter", sans-serif',
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
            boxShadow: '0 4px 6px -1px rgba(79, 70, 229, 0.2)'
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
            backgroundColor: type === 'primary' ? '#EEF2FF' : '#F8FAFC',
            color: type === 'primary' ? tokens.colors.accent : tokens.colors.secondary,
            border: `1px solid ${type === 'primary' ? '#E0E7FF' : tokens.colors.border}`
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
"[project]/Documents/help/HRMS/src/components/LoginForm/index.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$help$2f$HRMS$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/help/HRMS/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$help$2f$HRMS$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/help/HRMS/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$help$2f$HRMS$2f$src$2f$firebase$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/help/HRMS/src/firebase.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$help$2f$HRMS$2f$node_modules$2f$firebase$2f$auth$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/Documents/help/HRMS/node_modules/firebase/auth/dist/index.mjs [app-ssr] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$help$2f$HRMS$2f$node_modules$2f40$firebase$2f$auth$2f$dist$2f$node$2d$esm$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/help/HRMS/node_modules/@firebase/auth/dist/node-esm/index.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$help$2f$HRMS$2f$node_modules$2f$firebase$2f$firestore$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/Documents/help/HRMS/node_modules/firebase/firestore/dist/index.mjs [app-ssr] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$help$2f$HRMS$2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/help/HRMS/node_modules/@firebase/firestore/dist/index.node.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$help$2f$HRMS$2f$src$2f$styles$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/help/HRMS/src/styles.js [app-ssr] (ecmascript)");
;
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
const LoginForm = ({ onLoginSuccess, userType = 'employee' })=>{
    const [email, setEmail] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$help$2f$HRMS$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])('');
    const [password, setPassword] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$help$2f$HRMS$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])('');
    const [loading, setLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$help$2f$HRMS$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const submit = async (e)=>{
        e.preventDefault();
        setLoading(true);
        if (email === ADMIN_CREDENTIALS.email && password === ADMIN_CREDENTIALS.password) {
            if (userType === 'admin') {
                onLoginSuccess({
                    email: email,
                    uid: 'hardcoded-admin',
                    isAdmin: true
                });
                setLoading(false);
                return;
            } else {
                alert("Admin accounts must use the designated admin portal (/admin-login).");
                setLoading(false);
                return;
            }
        }
        try {
            const authUser = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$help$2f$HRMS$2f$node_modules$2f40$firebase$2f$auth$2f$dist$2f$node$2d$esm$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["signInWithEmailAndPassword"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$help$2f$HRMS$2f$src$2f$firebase$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["auth"], email, password);
            onLoginSuccess(authUser.user);
        } catch (err) {
            try {
                const q = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$help$2f$HRMS$2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["query"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$help$2f$HRMS$2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["collection"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$help$2f$HRMS$2f$src$2f$firebase$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["db"], 'employees'), (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$help$2f$HRMS$2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["where"])('email', '==', email), (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$help$2f$HRMS$2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["where"])('password', '==', password));
                const snapshot = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$help$2f$HRMS$2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getDocs"])(q);
                if (!snapshot.empty) {
                    const empData = snapshot.docs[0].data();
                    onLoginSuccess({
                        ...empData,
                        uid: snapshot.docs[0].id
                    });
                } else {
                    alert("Invalid credentials or access denied.");
                }
            } catch (fError) {
                console.error(fError);
                alert("Authentication system failure.");
            }
        } finally{
            setLoading(false);
        }
    };
    const containerStyle = {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        minHeight: '100vh',
        backgroundColor: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$help$2f$HRMS$2f$src$2f$styles$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["tokens"].colors.background,
        backgroundImage: 'radial-gradient(circle at 20% 20%, #E0E7FF 0%, transparent 40%), radial-gradient(circle at 80% 80%, #F1F5F9 0%, transparent 40%)',
        fontFamily: '"Outfit", sans-serif'
    };
    const formStyle = {
        width: '100%',
        maxWidth: '440px',
        backgroundColor: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$help$2f$HRMS$2f$src$2f$styles$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["tokens"].colors.white,
        padding: '56px 48px',
        borderRadius: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$help$2f$HRMS$2f$src$2f$styles$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["tokens"].radius.xl,
        boxShadow: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$help$2f$HRMS$2f$src$2f$styles$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["tokens"].shadow.xl,
        border: `1px solid ${__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$help$2f$HRMS$2f$src$2f$styles$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["tokens"].colors.border}`
    };
    const labelStyle = {
        display: 'block',
        fontSize: '13px',
        fontWeight: '700',
        color: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$help$2f$HRMS$2f$src$2f$styles$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["tokens"].colors.primary,
        marginBottom: '8px',
        textTransform: 'uppercase',
        letterSpacing: '0.05em'
    };
    const footerStyle = {
        marginTop: '40px',
        textAlign: 'center',
        fontSize: '12px',
        color: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$help$2f$HRMS$2f$src$2f$styles$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["tokens"].colors.secondary,
        lineHeight: '1.6'
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$help$2f$HRMS$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        style: containerStyle,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$help$2f$HRMS$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
            onSubmit: submit,
            style: formStyle,
            className: "animate-fade",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$help$2f$HRMS$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    style: {
                        textAlign: 'center',
                        marginBottom: '48px'
                    },
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$help$2f$HRMS$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            style: {
                                width: '56px',
                                height: '56px',
                                background: `linear-gradient(135deg, ${__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$help$2f$HRMS$2f$src$2f$styles$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["tokens"].colors.accent} 0%, #312E81 100%)`,
                                borderRadius: '16px',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                margin: '0 auto 20px',
                                boxShadow: '0 12px 24px -8px rgba(79, 70, 229, 0.4)'
                            },
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$help$2f$HRMS$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "material-symbols-outlined",
                                style: {
                                    color: '#FFF',
                                    fontSize: '28px'
                                },
                                children: "bolt"
                            }, void 0, false, {
                                fileName: "[project]/Documents/help/HRMS/src/components/LoginForm/index.js",
                                lineNumber: 112,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0))
                        }, void 0, false, {
                            fileName: "[project]/Documents/help/HRMS/src/components/LoginForm/index.js",
                            lineNumber: 101,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$help$2f$HRMS$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                            style: {
                                fontSize: '28px',
                                fontWeight: '800',
                                color: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$help$2f$HRMS$2f$src$2f$styles$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["tokens"].colors.primary,
                                marginBottom: '8px',
                                letterSpacing: '-0.02em'
                            },
                            children: "HRMate Login"
                        }, void 0, false, {
                            fileName: "[project]/Documents/help/HRMS/src/components/LoginForm/index.js",
                            lineNumber: 114,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$help$2f$HRMS$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            style: {
                                color: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$help$2f$HRMS$2f$src$2f$styles$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["tokens"].colors.secondary,
                                fontSize: '15px'
                            },
                            children: userType === 'admin' ? 'Administrative Gateway' : 'Global Workforce Entry'
                        }, void 0, false, {
                            fileName: "[project]/Documents/help/HRMS/src/components/LoginForm/index.js",
                            lineNumber: 115,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0))
                    ]
                }, void 0, true, {
                    fileName: "[project]/Documents/help/HRMS/src/components/LoginForm/index.js",
                    lineNumber: 100,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$help$2f$HRMS$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    style: {
                        marginBottom: '24px'
                    },
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$help$2f$HRMS$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                            style: labelStyle,
                            children: "Corporate Email"
                        }, void 0, false, {
                            fileName: "[project]/Documents/help/HRMS/src/components/LoginForm/index.js",
                            lineNumber: 121,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$help$2f$HRMS$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                            style: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$help$2f$HRMS$2f$src$2f$styles$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["styles"].input,
                            placeholder: "name@hrmate.com",
                            type: "email",
                            required: true,
                            value: email,
                            onChange: (e)=>setEmail(e.target.value)
                        }, void 0, false, {
                            fileName: "[project]/Documents/help/HRMS/src/components/LoginForm/index.js",
                            lineNumber: 122,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0))
                    ]
                }, void 0, true, {
                    fileName: "[project]/Documents/help/HRMS/src/components/LoginForm/index.js",
                    lineNumber: 120,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$help$2f$HRMS$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    style: {
                        marginBottom: '40px'
                    },
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$help$2f$HRMS$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                            style: labelStyle,
                            children: "Secure Passcode"
                        }, void 0, false, {
                            fileName: "[project]/Documents/help/HRMS/src/components/LoginForm/index.js",
                            lineNumber: 133,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$help$2f$HRMS$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                            style: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$help$2f$HRMS$2f$src$2f$styles$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["styles"].input,
                            placeholder: "••••••••",
                            type: "password",
                            required: true,
                            value: password,
                            onChange: (e)=>setPassword(e.target.value)
                        }, void 0, false, {
                            fileName: "[project]/Documents/help/HRMS/src/components/LoginForm/index.js",
                            lineNumber: 134,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0))
                    ]
                }, void 0, true, {
                    fileName: "[project]/Documents/help/HRMS/src/components/LoginForm/index.js",
                    lineNumber: 132,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$help$2f$HRMS$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                    style: {
                        ...__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$help$2f$HRMS$2f$src$2f$styles$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["styles"].button.primary,
                        width: '100%',
                        height: '48px',
                        fontSize: '15px'
                    },
                    disabled: loading,
                    children: loading ? 'Authenticating...' : 'Establish Connection'
                }, void 0, false, {
                    fileName: "[project]/Documents/help/HRMS/src/components/LoginForm/index.js",
                    lineNumber: 144,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$help$2f$HRMS$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    style: footerStyle,
                    children: "🔒 Restricted access notice. Authorized personnel are required to use authenticated workstation IP."
                }, void 0, false, {
                    fileName: "[project]/Documents/help/HRMS/src/components/LoginForm/index.js",
                    lineNumber: 148,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0))
            ]
        }, void 0, true, {
            fileName: "[project]/Documents/help/HRMS/src/components/LoginForm/index.js",
            lineNumber: 99,
            columnNumber: 7
        }, ("TURBOPACK compile-time value", void 0))
    }, void 0, false, {
        fileName: "[project]/Documents/help/HRMS/src/components/LoginForm/index.js",
        lineNumber: 98,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
const __TURBOPACK__default__export__ = LoginForm;
}),
"[project]/Documents/help/HRMS/src/components/Sidebar/index.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$help$2f$HRMS$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/help/HRMS/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$help$2f$HRMS$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/help/HRMS/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$help$2f$HRMS$2f$src$2f$styles$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/help/HRMS/src/styles.js [app-ssr] (ecmascript)");
;
;
;
const Sidebar = ({ activeTab, setActiveTab, isAdmin })=>{
    const menuItems = isAdmin ? [
        {
            id: 'dashboard',
            label: 'Overview',
            icon: 'grid_view'
        },
        {
            id: 'employees',
            label: 'Workforce Directory',
            icon: 'group'
        },
        {
            id: 'admin_leaves',
            label: 'Leave Management',
            icon: 'event_available'
        },
        {
            id: 'admin_attendance',
            label: 'Attendance Feed',
            icon: 'history'
        },
        {
            id: 'admin_broadcast',
            label: 'Broadcasts',
            icon: 'campaign'
        },
        {
            id: 'admin_policies',
            label: 'Company Policies',
            icon: 'gavel'
        }
    ] : [
        {
            id: 'dashboard',
            label: 'Overview',
            icon: 'grid_view'
        },
        {
            id: 'attendance',
            label: 'Punch Clock',
            icon: 'timer'
        },
        {
            id: 'leaves',
            label: 'My Leaves',
            icon: 'beach_access'
        },
        {
            id: 'profile',
            label: 'My Profile',
            icon: 'person'
        }
    ];
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$help$2f$HRMS$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        style: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$help$2f$HRMS$2f$src$2f$styles$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["styles"].sidebar,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$help$2f$HRMS$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    ...__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$help$2f$HRMS$2f$src$2f$styles$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["styles"].logo,
                    padding: '0 28px',
                    marginBottom: '40px'
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$help$2f$HRMS$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            width: '32px',
                            height: '32px',
                            background: `linear-gradient(135deg, ${__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$help$2f$HRMS$2f$src$2f$styles$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["tokens"].colors.accent} 0%, #312E81 100%)`,
                            borderRadius: '10px',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            boxShadow: '0 8px 16px -4px rgba(79, 70, 229, 0.4)'
                        },
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$help$2f$HRMS$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "material-symbols-outlined",
                            style: {
                                color: '#FFF',
                                fontSize: '18px'
                            },
                            children: "bolt"
                        }, void 0, false, {
                            fileName: "[project]/Documents/help/HRMS/src/components/Sidebar/index.js",
                            lineNumber: 32,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0))
                    }, void 0, false, {
                        fileName: "[project]/Documents/help/HRMS/src/components/Sidebar/index.js",
                        lineNumber: 22,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$help$2f$HRMS$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        style: {
                            fontWeight: '800',
                            letterSpacing: '-0.03em',
                            fontSize: '22px'
                        },
                        children: "HRMate"
                    }, void 0, false, {
                        fileName: "[project]/Documents/help/HRMS/src/components/Sidebar/index.js",
                        lineNumber: 34,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/Documents/help/HRMS/src/components/Sidebar/index.js",
                lineNumber: 21,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$help$2f$HRMS$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    flex: 1,
                    overflowY: 'auto',
                    padding: '0 8px'
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$help$2f$HRMS$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            color: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$help$2f$HRMS$2f$src$2f$styles$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["tokens"].colors.secondary,
                            fontSize: '11px',
                            fontWeight: '800',
                            textTransform: 'uppercase',
                            letterSpacing: '0.1em',
                            marginBottom: '12px',
                            paddingLeft: '24px',
                            opacity: 0.8
                        },
                        children: "Principal Space"
                    }, void 0, false, {
                        fileName: "[project]/Documents/help/HRMS/src/components/Sidebar/index.js",
                        lineNumber: 38,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    menuItems.map((item)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$help$2f$HRMS$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            style: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$help$2f$HRMS$2f$src$2f$styles$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["styles"].menuItem(activeTab === item.id),
                            onClick: ()=>setActiveTab(item.id),
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$help$2f$HRMS$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "material-symbols-outlined",
                                    style: {
                                        fontSize: '20px',
                                        color: activeTab === item.id ? __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$help$2f$HRMS$2f$src$2f$styles$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["tokens"].colors.accent : __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$help$2f$HRMS$2f$src$2f$styles$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["tokens"].colors.secondary,
                                        opacity: activeTab === item.id ? 1 : 0.7
                                    },
                                    children: item.icon
                                }, void 0, false, {
                                    fileName: "[project]/Documents/help/HRMS/src/components/Sidebar/index.js",
                                    lineNumber: 48,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0)),
                                item.label
                            ]
                        }, item.id, true, {
                            fileName: "[project]/Documents/help/HRMS/src/components/Sidebar/index.js",
                            lineNumber: 43,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0))),
                    isAdmin && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$help$2f$HRMS$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            marginTop: '32px'
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$help$2f$HRMS$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                style: {
                                    color: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$help$2f$HRMS$2f$src$2f$styles$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["tokens"].colors.secondary,
                                    fontSize: '11px',
                                    fontWeight: '800',
                                    textTransform: 'uppercase',
                                    letterSpacing: '0.1em',
                                    marginBottom: '12px',
                                    paddingLeft: '24px',
                                    opacity: 0.8
                                },
                                children: "Configuration"
                            }, void 0, false, {
                                fileName: "[project]/Documents/help/HRMS/src/components/Sidebar/index.js",
                                lineNumber: 59,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$help$2f$HRMS$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                style: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$help$2f$HRMS$2f$src$2f$styles$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["styles"].menuItem(activeTab === 'settings'),
                                onClick: ()=>setActiveTab('settings'),
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$help$2f$HRMS$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "material-symbols-outlined",
                                        style: {
                                            fontSize: '20px',
                                            opacity: 0.7
                                        },
                                        children: "settings"
                                    }, void 0, false, {
                                        fileName: "[project]/Documents/help/HRMS/src/components/Sidebar/index.js",
                                        lineNumber: 66,
                                        columnNumber: 15
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    "Global Settings"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Documents/help/HRMS/src/components/Sidebar/index.js",
                                lineNumber: 62,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Documents/help/HRMS/src/components/Sidebar/index.js",
                        lineNumber: 58,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/Documents/help/HRMS/src/components/Sidebar/index.js",
                lineNumber: 37,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$help$2f$HRMS$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    padding: '24px 16px',
                    borderTop: `1px solid ${__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$help$2f$HRMS$2f$src$2f$styles$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["tokens"].colors.border}`,
                    marginTop: 'auto'
                },
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$help$2f$HRMS$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    style: {
                        display: 'flex',
                        alignItems: 'center',
                        gap: '12px',
                        padding: '12px',
                        borderRadius: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$help$2f$HRMS$2f$src$2f$styles$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["tokens"].radius.md,
                        backgroundColor: '#F8FAFC',
                        border: '1px solid transparent',
                        transition: 'all 0.2s ease',
                        cursor: 'default'
                    },
                    onMouseOver: (e)=>{
                        e.currentTarget.style.borderColor = __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$help$2f$HRMS$2f$src$2f$styles$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["tokens"].colors.border;
                        e.currentTarget.style.backgroundColor = '#FFFFFF';
                    },
                    onMouseOut: (e)=>{
                        e.currentTarget.style.borderColor = 'transparent';
                        e.currentTarget.style.backgroundColor = '#F8FAFC';
                    },
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$help$2f$HRMS$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            style: {
                                width: '40px',
                                height: '40px',
                                background: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$help$2f$HRMS$2f$src$2f$styles$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["tokens"].colors.primary,
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                fontWeight: '700',
                                color: '#FFF',
                                fontSize: '14px',
                                borderRadius: '12px',
                                backgroundImage: 'linear-gradient(45deg, #0F172A 0%, #1E293B 100%)'
                            },
                            children: isAdmin ? 'A' : 'S'
                        }, void 0, false, {
                            fileName: "[project]/Documents/help/HRMS/src/components/Sidebar/index.js",
                            lineNumber: 89,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$help$2f$HRMS$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            style: {
                                flex: 1,
                                minWidth: 0
                            },
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$help$2f$HRMS$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    style: {
                                        fontSize: '13px',
                                        fontWeight: '700',
                                        color: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$help$2f$HRMS$2f$src$2f$styles$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["tokens"].colors.primary,
                                        whiteSpace: 'nowrap',
                                        overflow: 'hidden',
                                        textOverflow: 'ellipsis'
                                    },
                                    children: isAdmin ? 'Root Admin' : 'Workforce User'
                                }, void 0, false, {
                                    fileName: "[project]/Documents/help/HRMS/src/components/Sidebar/index.js",
                                    lineNumber: 105,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$help$2f$HRMS$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    style: {
                                        fontSize: '11px',
                                        color: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$help$2f$HRMS$2f$src$2f$styles$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["tokens"].colors.secondary
                                    },
                                    children: "Engine v2.1.2"
                                }, void 0, false, {
                                    fileName: "[project]/Documents/help/HRMS/src/components/Sidebar/index.js",
                                    lineNumber: 108,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Documents/help/HRMS/src/components/Sidebar/index.js",
                            lineNumber: 104,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0))
                    ]
                }, void 0, true, {
                    fileName: "[project]/Documents/help/HRMS/src/components/Sidebar/index.js",
                    lineNumber: 74,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0))
            }, void 0, false, {
                fileName: "[project]/Documents/help/HRMS/src/components/Sidebar/index.js",
                lineNumber: 73,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/Documents/help/HRMS/src/components/Sidebar/index.js",
        lineNumber: 20,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
const __TURBOPACK__default__export__ = Sidebar;
}),
"[project]/Documents/help/HRMS/src/components/Dashboard/index.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$help$2f$HRMS$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/help/HRMS/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$help$2f$HRMS$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/help/HRMS/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$help$2f$HRMS$2f$src$2f$firebase$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/help/HRMS/src/firebase.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$help$2f$HRMS$2f$node_modules$2f$firebase$2f$firestore$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/Documents/help/HRMS/node_modules/firebase/firestore/dist/index.mjs [app-ssr] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$help$2f$HRMS$2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/help/HRMS/node_modules/@firebase/firestore/dist/index.node.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$help$2f$HRMS$2f$src$2f$styles$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/help/HRMS/src/styles.js [app-ssr] (ecmascript)");
;
;
;
;
;
const Dashboard = ({ setActiveTab, isAdmin, user })=>{
    const [employees, setEmployees] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$help$2f$HRMS$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])([]);
    const [leaveRequests, setLeaveRequests] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$help$2f$HRMS$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])([]);
    const [announcements, setAnnouncements] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$help$2f$HRMS$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])([]);
    const [personalAttendance, setPersonalAttendance] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$help$2f$HRMS$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])([]);
    const [holidays, setHolidays] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$help$2f$HRMS$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])([]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$help$2f$HRMS$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        const unsubEmp = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$help$2f$HRMS$2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["onSnapshot"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$help$2f$HRMS$2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["collection"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$help$2f$HRMS$2f$src$2f$firebase$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["db"], 'employees'), (s)=>setEmployees(s.docs.map((d)=>({
                    id: d.id,
                    ...d.data()
                }))));
        const unsubLeave = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$help$2f$HRMS$2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["onSnapshot"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$help$2f$HRMS$2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["collection"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$help$2f$HRMS$2f$src$2f$firebase$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["db"], 'leaveRequests'), (s)=>{
            const allLeaves = s.docs.map((d)=>d.data());
            if (isAdmin) {
                setLeaveRequests(allLeaves);
            } else {
                setLeaveRequests(allLeaves.filter((l)=>l.userEmail === user.email));
            }
        });
        const unsubAnnounce = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$help$2f$HRMS$2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["onSnapshot"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$help$2f$HRMS$2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["collection"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$help$2f$HRMS$2f$src$2f$firebase$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["db"], 'announcements'), (s)=>setAnnouncements(s.docs.map((d)=>({
                    id: d.id,
                    ...d.data()
                }))));
        const unsubHolidays = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$help$2f$HRMS$2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["onSnapshot"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$help$2f$HRMS$2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["collection"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$help$2f$HRMS$2f$src$2f$firebase$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["db"], 'holidays'), (s)=>setHolidays(s.docs.map((d)=>({
                    id: d.id,
                    ...d.data()
                }))));
        let unsubPersonalAtt;
        if (!isAdmin && user) {
            unsubPersonalAtt = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$help$2f$HRMS$2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["onSnapshot"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$help$2f$HRMS$2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["collection"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$help$2f$HRMS$2f$src$2f$firebase$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["db"], 'attendance'), (s)=>{
                setPersonalAttendance(s.docs.map((d)=>d.data()).filter((a)=>a.userEmail === user.email));
            });
        }
        return ()=>{
            unsubEmp();
            unsubLeave();
            unsubAnnounce();
            unsubHolidays();
            if (unsubPersonalAtt) unsubPersonalAtt();
        };
    }, [
        isAdmin,
        user
    ]);
    const currentUser = employees.find((e)=>e.email === user.email) || user;
    const deptColleagues = employees.filter((e)=>e.dept === currentUser.dept && e.email !== currentUser.email);
    const adminStats = [
        {
            label: 'Total Headcount',
            value: employees.length,
            icon: 'groups',
            color: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$help$2f$HRMS$2f$src$2f$styles$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["tokens"].colors.accent
        },
        {
            label: 'Pending Leaves',
            value: leaveRequests.filter((l)=>l.status === 'pending').length,
            icon: 'event_busy',
            color: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$help$2f$HRMS$2f$src$2f$styles$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["tokens"].colors.warning
        },
        {
            label: 'Monthly Payroll',
            value: `$${Math.round(employees.reduce((acc, curr)=>acc + (Number(curr.salary) || 0), 0) / 12).toLocaleString()}`,
            icon: 'payments',
            color: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$help$2f$HRMS$2f$src$2f$styles$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["tokens"].colors.success
        }
    ];
    const today = new Date().toISOString().split('T')[0];
    const punchedInToday = personalAttendance.some((a)=>a.type === 'in' && a.timestamp?.toDate().toISOString().split('T')[0] === today);
    const upcomingHoliday = holidays.filter((h)=>new Date(h.date) >= new Date()).sort((a, b)=>new Date(a.date) - new Date(b.date))[0];
    const employeeStats = [
        {
            label: 'Attendance Today',
            value: punchedInToday ? 'Clocked In' : 'Pending',
            icon: 'timer',
            color: punchedInToday ? __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$help$2f$HRMS$2f$src$2f$styles$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["tokens"].colors.success : __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$help$2f$HRMS$2f$src$2f$styles$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["tokens"].colors.warning
        },
        {
            label: 'Leave Balance',
            value: `${leaveRequests.filter((l)=>l.status === 'approved').length} / 12`,
            icon: 'beach_access',
            color: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$help$2f$HRMS$2f$src$2f$styles$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["tokens"].colors.accent
        },
        {
            label: 'Next Holiday',
            value: upcomingHoliday ? upcomingHoliday.name : 'None Scheduled',
            icon: 'celebration',
            color: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$help$2f$HRMS$2f$src$2f$styles$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["tokens"].colors.secondary
        }
    ];
    const stats = isAdmin ? adminStats : employeeStats;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$help$2f$HRMS$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "animate-fade",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$help$2f$HRMS$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    marginBottom: '48px',
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'flex-start'
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$help$2f$HRMS$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$help$2f$HRMS$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                style: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$help$2f$HRMS$2f$src$2f$styles$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["styles"].greeting,
                                children: isAdmin ? 'Executive Suite' : `Welcome back, ${currentUser.name?.split(' ')[0] || 'Staff'}`
                            }, void 0, false, {
                                fileName: "[project]/Documents/help/HRMS/src/components/Dashboard/index.js",
                                lineNumber: 67,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$help$2f$HRMS$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                style: {
                                    color: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$help$2f$HRMS$2f$src$2f$styles$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["tokens"].colors.secondary,
                                    fontSize: '15px',
                                    marginTop: '4px'
                                },
                                children: isAdmin ? 'Platform analytics and system health metrics at a glance.' : 'Have a productive day at HRMate.'
                            }, void 0, false, {
                                fileName: "[project]/Documents/help/HRMS/src/components/Dashboard/index.js",
                                lineNumber: 70,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Documents/help/HRMS/src/components/Dashboard/index.js",
                        lineNumber: 66,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    !isAdmin && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$help$2f$HRMS$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            ...__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$help$2f$HRMS$2f$src$2f$styles$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["styles"].badge('primary'),
                            padding: '10px 18px'
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$help$2f$HRMS$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                style: {
                                    fontWeight: '700'
                                },
                                children: currentUser.dept || 'Operations'
                            }, void 0, false, {
                                fileName: "[project]/Documents/help/HRMS/src/components/Dashboard/index.js",
                                lineNumber: 76,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$help$2f$HRMS$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                style: {
                                    margin: '0 8px',
                                    opacity: 0.3
                                },
                                children: "|"
                            }, void 0, false, {
                                fileName: "[project]/Documents/help/HRMS/src/components/Dashboard/index.js",
                                lineNumber: 77,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$help$2f$HRMS$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                children: currentUser.role || 'Associate'
                            }, void 0, false, {
                                fileName: "[project]/Documents/help/HRMS/src/components/Dashboard/index.js",
                                lineNumber: 78,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Documents/help/HRMS/src/components/Dashboard/index.js",
                        lineNumber: 75,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/Documents/help/HRMS/src/components/Dashboard/index.js",
                lineNumber: 65,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$help$2f$HRMS$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    display: 'grid',
                    gridTemplateColumns: 'repeat(3, 1fr)',
                    gap: '32px',
                    marginBottom: '48px'
                },
                children: stats.map((stat)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$help$2f$HRMS$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            ...__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$help$2f$HRMS$2f$src$2f$styles$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["styles"].card,
                            borderLeft: `4px solid ${stat.color || __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$help$2f$HRMS$2f$src$2f$styles$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["tokens"].colors.accent}`
                        },
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$help$2f$HRMS$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            style: {
                                display: 'flex',
                                justifyContent: 'space-between',
                                alignItems: 'center'
                            },
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$help$2f$HRMS$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$help$2f$HRMS$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            style: {
                                                fontSize: '12px',
                                                fontWeight: '700',
                                                color: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$help$2f$HRMS$2f$src$2f$styles$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["tokens"].colors.secondary,
                                                textTransform: 'uppercase',
                                                letterSpacing: '0.05em',
                                                marginBottom: '12px'
                                            },
                                            children: stat.label
                                        }, void 0, false, {
                                            fileName: "[project]/Documents/help/HRMS/src/components/Dashboard/index.js",
                                            lineNumber: 88,
                                            columnNumber: 17
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$help$2f$HRMS$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            style: {
                                                fontSize: '26px',
                                                fontWeight: '800',
                                                color: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$help$2f$HRMS$2f$src$2f$styles$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["tokens"].colors.primary
                                            },
                                            children: stat.value
                                        }, void 0, false, {
                                            fileName: "[project]/Documents/help/HRMS/src/components/Dashboard/index.js",
                                            lineNumber: 89,
                                            columnNumber: 17
                                        }, ("TURBOPACK compile-time value", void 0))
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Documents/help/HRMS/src/components/Dashboard/index.js",
                                    lineNumber: 87,
                                    columnNumber: 15
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$help$2f$HRMS$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    style: {
                                        width: '56px',
                                        height: '56px',
                                        background: `${stat.color}10`,
                                        borderRadius: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$help$2f$HRMS$2f$src$2f$styles$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["tokens"].radius.md,
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'center'
                                    },
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$help$2f$HRMS$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "material-symbols-outlined",
                                        style: {
                                            fontSize: '28px',
                                            color: stat.color
                                        },
                                        children: stat.icon
                                    }, void 0, false, {
                                        fileName: "[project]/Documents/help/HRMS/src/components/Dashboard/index.js",
                                        lineNumber: 100,
                                        columnNumber: 17
                                    }, ("TURBOPACK compile-time value", void 0))
                                }, void 0, false, {
                                    fileName: "[project]/Documents/help/HRMS/src/components/Dashboard/index.js",
                                    lineNumber: 91,
                                    columnNumber: 15
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Documents/help/HRMS/src/components/Dashboard/index.js",
                            lineNumber: 86,
                            columnNumber: 13
                        }, ("TURBOPACK compile-time value", void 0))
                    }, stat.label, false, {
                        fileName: "[project]/Documents/help/HRMS/src/components/Dashboard/index.js",
                        lineNumber: 85,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0)))
            }, void 0, false, {
                fileName: "[project]/Documents/help/HRMS/src/components/Dashboard/index.js",
                lineNumber: 83,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$help$2f$HRMS$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    display: 'grid',
                    gridTemplateColumns: '1.4fr 1fr',
                    gap: '32px'
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$help$2f$HRMS$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            display: 'flex',
                            flexDirection: 'column',
                            gap: '32px'
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$help$2f$HRMS$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                style: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$help$2f$HRMS$2f$src$2f$styles$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["styles"].card,
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$help$2f$HRMS$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        style: {
                                            display: 'flex',
                                            justifyContent: 'space-between',
                                            alignItems: 'center',
                                            marginBottom: '32px'
                                        },
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$help$2f$HRMS$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$help$2f$HRMS$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                        style: {
                                                            fontSize: '18px',
                                                            fontWeight: '800'
                                                        },
                                                        children: "Organization Broadcasts"
                                                    }, void 0, false, {
                                                        fileName: "[project]/Documents/help/HRMS/src/components/Dashboard/index.js",
                                                        lineNumber: 112,
                                                        columnNumber: 17
                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$help$2f$HRMS$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        style: {
                                                            fontSize: '13px',
                                                            color: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$help$2f$HRMS$2f$src$2f$styles$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["tokens"].colors.secondary,
                                                            marginTop: '2px'
                                                        },
                                                        children: "Latest updates from HR and Management"
                                                    }, void 0, false, {
                                                        fileName: "[project]/Documents/help/HRMS/src/components/Dashboard/index.js",
                                                        lineNumber: 113,
                                                        columnNumber: 17
                                                    }, ("TURBOPACK compile-time value", void 0))
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/Documents/help/HRMS/src/components/Dashboard/index.js",
                                                lineNumber: 111,
                                                columnNumber: 15
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            isAdmin && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$help$2f$HRMS$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                onClick: ()=>setActiveTab('admin_broadcast'),
                                                style: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$help$2f$HRMS$2f$src$2f$styles$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["styles"].button.ghost,
                                                children: "View Archives"
                                            }, void 0, false, {
                                                fileName: "[project]/Documents/help/HRMS/src/components/Dashboard/index.js",
                                                lineNumber: 116,
                                                columnNumber: 17
                                            }, ("TURBOPACK compile-time value", void 0))
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Documents/help/HRMS/src/components/Dashboard/index.js",
                                        lineNumber: 110,
                                        columnNumber: 13
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$help$2f$HRMS$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        style: {
                                            display: 'flex',
                                            flexDirection: 'column',
                                            gap: '20px'
                                        },
                                        children: [
                                            announcements.slice(0, 3).map((a)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$help$2f$HRMS$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    style: {
                                                        padding: '20px',
                                                        borderRadius: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$help$2f$HRMS$2f$src$2f$styles$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["tokens"].radius.md,
                                                        backgroundColor: '#F8FAFC',
                                                        border: `1px solid ${__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$help$2f$HRMS$2f$src$2f$styles$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["tokens"].colors.border}`,
                                                        transition: 'all 0.2s ease',
                                                        cursor: 'default'
                                                    },
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$help$2f$HRMS$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            style: {
                                                                fontWeight: '600',
                                                                fontSize: '14px',
                                                                marginBottom: '6px',
                                                                color: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$help$2f$HRMS$2f$src$2f$styles$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["tokens"].colors.primary,
                                                                lineHeight: '1.5'
                                                            },
                                                            children: a.content
                                                        }, void 0, false, {
                                                            fileName: "[project]/Documents/help/HRMS/src/components/Dashboard/index.js",
                                                            lineNumber: 125,
                                                            columnNumber: 19
                                                        }, ("TURBOPACK compile-time value", void 0)),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$help$2f$HRMS$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            style: {
                                                                display: 'flex',
                                                                alignItems: 'center',
                                                                gap: '8px',
                                                                fontSize: '12px',
                                                                color: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$help$2f$HRMS$2f$src$2f$styles$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["tokens"].colors.secondary
                                                            },
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$help$2f$HRMS$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                    className: "material-symbols-outlined",
                                                                    style: {
                                                                        fontSize: '14px'
                                                                    },
                                                                    children: "calendar_today"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/Documents/help/HRMS/src/components/Dashboard/index.js",
                                                                    lineNumber: 127,
                                                                    columnNumber: 21
                                                                }, ("TURBOPACK compile-time value", void 0)),
                                                                new Date(a.date).toLocaleDateString(undefined, {
                                                                    month: 'short',
                                                                    day: 'numeric',
                                                                    year: 'numeric'
                                                                })
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/Documents/help/HRMS/src/components/Dashboard/index.js",
                                                            lineNumber: 126,
                                                            columnNumber: 19
                                                        }, ("TURBOPACK compile-time value", void 0))
                                                    ]
                                                }, a.id, true, {
                                                    fileName: "[project]/Documents/help/HRMS/src/components/Dashboard/index.js",
                                                    lineNumber: 124,
                                                    columnNumber: 17
                                                }, ("TURBOPACK compile-time value", void 0))),
                                            announcements.length === 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$help$2f$HRMS$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                style: {
                                                    padding: '48px',
                                                    textAlign: 'center'
                                                },
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$help$2f$HRMS$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        style: {
                                                            width: '64px',
                                                            height: '64px',
                                                            backgroundColor: '#F1F5F9',
                                                            borderRadius: '50%',
                                                            display: 'flex',
                                                            alignItems: 'center',
                                                            justifyContent: 'center',
                                                            margin: '0 auto 16px'
                                                        },
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$help$2f$HRMS$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "material-symbols-outlined",
                                                            style: {
                                                                fontSize: '32px',
                                                                color: '#CBD5E1'
                                                            },
                                                            children: "notifications_off"
                                                        }, void 0, false, {
                                                            fileName: "[project]/Documents/help/HRMS/src/components/Dashboard/index.js",
                                                            lineNumber: 135,
                                                            columnNumber: 21
                                                        }, ("TURBOPACK compile-time value", void 0))
                                                    }, void 0, false, {
                                                        fileName: "[project]/Documents/help/HRMS/src/components/Dashboard/index.js",
                                                        lineNumber: 134,
                                                        columnNumber: 19
                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$help$2f$HRMS$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        style: {
                                                            fontSize: '14px',
                                                            fontWeight: '600',
                                                            color: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$help$2f$HRMS$2f$src$2f$styles$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["tokens"].colors.secondary
                                                        },
                                                        children: "Inbox Clear"
                                                    }, void 0, false, {
                                                        fileName: "[project]/Documents/help/HRMS/src/components/Dashboard/index.js",
                                                        lineNumber: 137,
                                                        columnNumber: 19
                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$help$2f$HRMS$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        style: {
                                                            fontSize: '12px',
                                                            color: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$help$2f$HRMS$2f$src$2f$styles$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["tokens"].colors.secondary
                                                        },
                                                        children: "Check back later for system-wide updates."
                                                    }, void 0, false, {
                                                        fileName: "[project]/Documents/help/HRMS/src/components/Dashboard/index.js",
                                                        lineNumber: 138,
                                                        columnNumber: 19
                                                    }, ("TURBOPACK compile-time value", void 0))
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/Documents/help/HRMS/src/components/Dashboard/index.js",
                                                lineNumber: 133,
                                                columnNumber: 17
                                            }, ("TURBOPACK compile-time value", void 0))
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Documents/help/HRMS/src/components/Dashboard/index.js",
                                        lineNumber: 122,
                                        columnNumber: 13
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Documents/help/HRMS/src/components/Dashboard/index.js",
                                lineNumber: 109,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0)),
                            !isAdmin && deptColleagues.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$help$2f$HRMS$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                style: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$help$2f$HRMS$2f$src$2f$styles$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["styles"].card,
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$help$2f$HRMS$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                        style: {
                                            fontSize: '18px',
                                            fontWeight: '800',
                                            marginBottom: '24px'
                                        },
                                        children: "Team Directory"
                                    }, void 0, false, {
                                        fileName: "[project]/Documents/help/HRMS/src/components/Dashboard/index.js",
                                        lineNumber: 146,
                                        columnNumber: 15
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$help$2f$HRMS$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        style: {
                                            display: 'grid',
                                            gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))',
                                            gap: '16px'
                                        },
                                        children: deptColleagues.map((col)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$help$2f$HRMS$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                style: {
                                                    display: 'flex',
                                                    alignItems: 'center',
                                                    gap: '12px',
                                                    padding: '12px',
                                                    borderRadius: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$help$2f$HRMS$2f$src$2f$styles$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["tokens"].radius.md,
                                                    border: `1px solid ${__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$help$2f$HRMS$2f$src$2f$styles$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["tokens"].colors.border}`,
                                                    backgroundColor: '#FFFFFF'
                                                },
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$help$2f$HRMS$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        style: {
                                                            width: '36px',
                                                            height: '36px',
                                                            borderRadius: '50%',
                                                            background: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$help$2f$HRMS$2f$src$2f$styles$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["tokens"].colors.accent + '15',
                                                            display: 'flex',
                                                            alignItems: 'center',
                                                            justifyContent: 'center',
                                                            fontWeight: '700',
                                                            fontSize: '14px',
                                                            color: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$help$2f$HRMS$2f$src$2f$styles$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["tokens"].colors.accent
                                                        },
                                                        children: col.name.charAt(0)
                                                    }, void 0, false, {
                                                        fileName: "[project]/Documents/help/HRMS/src/components/Dashboard/index.js",
                                                        lineNumber: 150,
                                                        columnNumber: 21
                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$help$2f$HRMS$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        style: {
                                                            overflow: 'hidden'
                                                        },
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$help$2f$HRMS$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                style: {
                                                                    fontSize: '13px',
                                                                    fontWeight: '600',
                                                                    color: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$help$2f$HRMS$2f$src$2f$styles$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["tokens"].colors.primary,
                                                                    whiteSpace: 'nowrap',
                                                                    overflow: 'hidden',
                                                                    textOverflow: 'ellipsis'
                                                                },
                                                                children: col.name
                                                            }, void 0, false, {
                                                                fileName: "[project]/Documents/help/HRMS/src/components/Dashboard/index.js",
                                                                lineNumber: 154,
                                                                columnNumber: 23
                                                            }, ("TURBOPACK compile-time value", void 0)),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$help$2f$HRMS$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                style: {
                                                                    fontSize: '11px',
                                                                    color: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$help$2f$HRMS$2f$src$2f$styles$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["tokens"].colors.secondary,
                                                                    whiteSpace: 'nowrap',
                                                                    overflow: 'hidden',
                                                                    textOverflow: 'ellipsis'
                                                                },
                                                                children: col.role
                                                            }, void 0, false, {
                                                                fileName: "[project]/Documents/help/HRMS/src/components/Dashboard/index.js",
                                                                lineNumber: 155,
                                                                columnNumber: 23
                                                            }, ("TURBOPACK compile-time value", void 0))
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/Documents/help/HRMS/src/components/Dashboard/index.js",
                                                        lineNumber: 153,
                                                        columnNumber: 21
                                                    }, ("TURBOPACK compile-time value", void 0))
                                                ]
                                            }, col.id, true, {
                                                fileName: "[project]/Documents/help/HRMS/src/components/Dashboard/index.js",
                                                lineNumber: 149,
                                                columnNumber: 19
                                            }, ("TURBOPACK compile-time value", void 0)))
                                    }, void 0, false, {
                                        fileName: "[project]/Documents/help/HRMS/src/components/Dashboard/index.js",
                                        lineNumber: 147,
                                        columnNumber: 15
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Documents/help/HRMS/src/components/Dashboard/index.js",
                                lineNumber: 145,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Documents/help/HRMS/src/components/Dashboard/index.js",
                        lineNumber: 108,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$help$2f$HRMS$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            ...__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$help$2f$HRMS$2f$src$2f$styles$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["styles"].card,
                            backgroundColor: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$help$2f$HRMS$2f$src$2f$styles$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["tokens"].colors.primary,
                            color: 'white',
                            border: 'none',
                            padding: '40px',
                            backgroundImage: 'linear-gradient(135deg, #0F172A 0%, #1E293B 100%)',
                            display: 'flex',
                            flexDirection: 'column'
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$help$2f$HRMS$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                style: {
                                    fontSize: '20px',
                                    fontWeight: '800',
                                    marginBottom: '8px'
                                },
                                children: isAdmin ? 'System Terminal' : 'Quick Gateway'
                            }, void 0, false, {
                                fileName: "[project]/Documents/help/HRMS/src/components/Dashboard/index.js",
                                lineNumber: 174,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$help$2f$HRMS$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                style: {
                                    color: '#94A3B8',
                                    marginBottom: '40px',
                                    fontSize: '14px',
                                    lineHeight: '1.5'
                                },
                                children: isAdmin ? 'Access core management engine and organization oversight modules.' : 'Essential shortcuts for your daily workflow and personal requests.'
                            }, void 0, false, {
                                fileName: "[project]/Documents/help/HRMS/src/components/Dashboard/index.js",
                                lineNumber: 177,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$help$2f$HRMS$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                style: {
                                    display: 'grid',
                                    gridTemplateColumns: '1fr',
                                    gap: '12px'
                                },
                                children: (isAdmin ? [
                                    {
                                        label: 'Policy Engine',
                                        icon: 'gavel',
                                        action: ()=>setActiveTab('admin_policies')
                                    },
                                    {
                                        label: 'Workforce Comms',
                                        icon: 'campaign',
                                        action: ()=>setActiveTab('admin_broadcast')
                                    },
                                    {
                                        label: 'Leave Requests',
                                        icon: 'event_available',
                                        action: ()=>setActiveTab('admin_leaves')
                                    },
                                    {
                                        label: 'Attendance Feed',
                                        icon: 'history',
                                        action: ()=>setActiveTab('admin_attendance')
                                    }
                                ] : [
                                    {
                                        label: 'Access Punch Clock',
                                        icon: 'timer',
                                        action: ()=>setActiveTab('attendance')
                                    },
                                    {
                                        label: 'Request Time Off',
                                        icon: 'event_available',
                                        action: ()=>setActiveTab('leaves')
                                    },
                                    {
                                        label: 'Employee Profile',
                                        icon: 'person',
                                        action: ()=>setActiveTab('profile')
                                    },
                                    {
                                        label: 'Company Policies',
                                        icon: 'gavel',
                                        action: ()=>setActiveTab('admin_policies')
                                    }
                                ]).map((tool)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$help$2f$HRMS$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        onClick: tool.action,
                                        style: {
                                            padding: '16px 20px',
                                            background: 'rgba(255, 255, 255, 0.05)',
                                            border: '1px solid rgba(255, 255, 255, 0.1)',
                                            color: 'white',
                                            cursor: 'pointer',
                                            borderRadius: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$help$2f$HRMS$2f$src$2f$styles$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["tokens"].radius.md,
                                            display: 'flex',
                                            alignItems: 'center',
                                            gap: '16px',
                                            transition: 'all 0.2s ease',
                                            textAlign: 'left'
                                        },
                                        onMouseOver: (e)=>{
                                            e.currentTarget.style.background = 'rgba(255, 255, 255, 0.1)';
                                            e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.2)';
                                        },
                                        onMouseOut: (e)=>{
                                            e.currentTarget.style.background = 'rgba(255, 255, 255, 0.05)';
                                            e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.1)';
                                        },
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$help$2f$HRMS$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                style: {
                                                    width: '40px',
                                                    height: '40px',
                                                    background: 'rgba(255, 255, 255, 0.1)',
                                                    borderRadius: '10px',
                                                    display: 'flex',
                                                    alignItems: 'center',
                                                    justifyContent: 'center'
                                                },
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$help$2f$HRMS$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "material-symbols-outlined",
                                                    style: {
                                                        fontSize: '20px'
                                                    },
                                                    children: tool.icon
                                                }, void 0, false, {
                                                    fileName: "[project]/Documents/help/HRMS/src/components/Dashboard/index.js",
                                                    lineNumber: 213,
                                                    columnNumber: 19
                                                }, ("TURBOPACK compile-time value", void 0))
                                            }, void 0, false, {
                                                fileName: "[project]/Documents/help/HRMS/src/components/Dashboard/index.js",
                                                lineNumber: 212,
                                                columnNumber: 17
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$help$2f$HRMS$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                style: {
                                                    fontWeight: '600',
                                                    fontSize: '14px'
                                                },
                                                children: tool.label
                                            }, void 0, false, {
                                                fileName: "[project]/Documents/help/HRMS/src/components/Dashboard/index.js",
                                                lineNumber: 215,
                                                columnNumber: 17
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$help$2f$HRMS$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "material-symbols-outlined",
                                                style: {
                                                    marginLeft: 'auto',
                                                    fontSize: '18px',
                                                    opacity: 0.5
                                                },
                                                children: "chevron_right"
                                            }, void 0, false, {
                                                fileName: "[project]/Documents/help/HRMS/src/components/Dashboard/index.js",
                                                lineNumber: 216,
                                                columnNumber: 17
                                            }, ("TURBOPACK compile-time value", void 0))
                                        ]
                                    }, tool.label, true, {
                                        fileName: "[project]/Documents/help/HRMS/src/components/Dashboard/index.js",
                                        lineNumber: 193,
                                        columnNumber: 15
                                    }, ("TURBOPACK compile-time value", void 0)))
                            }, void 0, false, {
                                fileName: "[project]/Documents/help/HRMS/src/components/Dashboard/index.js",
                                lineNumber: 181,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Documents/help/HRMS/src/components/Dashboard/index.js",
                        lineNumber: 164,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/Documents/help/HRMS/src/components/Dashboard/index.js",
                lineNumber: 107,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/Documents/help/HRMS/src/components/Dashboard/index.js",
        lineNumber: 64,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
const __TURBOPACK__default__export__ = Dashboard;
}),
"[project]/Documents/help/HRMS/src/components/Employees/index.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {

const e = new Error("Could not parse module '[project]/Documents/help/HRMS/src/components/Employees/index.js'\n\nUnterminated regexp literal");
e.code = 'MODULE_UNPARSABLE';
throw e;
}),
"[project]/Documents/help/HRMS/src/components/Attendance/index.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$help$2f$HRMS$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/help/HRMS/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$help$2f$HRMS$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/help/HRMS/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$help$2f$HRMS$2f$src$2f$firebase$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/help/HRMS/src/firebase.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$help$2f$HRMS$2f$node_modules$2f$firebase$2f$firestore$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/Documents/help/HRMS/node_modules/firebase/firestore/dist/index.mjs [app-ssr] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$help$2f$HRMS$2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/help/HRMS/node_modules/@firebase/firestore/dist/index.node.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$help$2f$HRMS$2f$src$2f$styles$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/help/HRMS/src/styles.js [app-ssr] (ecmascript)");
;
;
;
;
;
const Attendance = ({ user })=>{
    const [logs, setLogs] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$help$2f$HRMS$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])([]);
    const [activeShift, setActiveShift] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$help$2f$HRMS$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    const [loading, setLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$help$2f$HRMS$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(true);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$help$2f$HRMS$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        const q = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$help$2f$HRMS$2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["query"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$help$2f$HRMS$2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["collection"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$help$2f$HRMS$2f$src$2f$firebase$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["db"], 'attendance'), (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$help$2f$HRMS$2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["where"])('userEmail', '==', user.email));
        // Removed orderBy to avoid missing index errors that can cause stuck loading screens.
        // We will sort client-side instead.
        const unsub = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$help$2f$HRMS$2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["onSnapshot"])(q, (s)=>{
            const data = s.docs.map((d)=>({
                    id: d.id,
                    ...d.data()
                })).sort((a, b)=>(b.timestamp?.seconds || 0) - (a.timestamp?.seconds || 0));
            setLogs(data);
            if (data[0]?.type === 'in') setActiveShift(data[0]);
            else setActiveShift(null);
            setLoading(false);
        }, (err)=>{
            console.error("Attendance feed error:", err);
            setLoading(false);
        });
        return unsub;
    }, [
        user.email
    ]);
    const toggleShift = async ()=>{
        const type = activeShift ? 'out' : 'in';
        await (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$help$2f$HRMS$2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["addDoc"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$help$2f$HRMS$2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["collection"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$help$2f$HRMS$2f$src$2f$firebase$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["db"], 'attendance'), {
            userEmail: user.email,
            type,
            timestamp: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$help$2f$HRMS$2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["serverTimestamp"])(),
            manual: false
        });
    };
    if (loading) return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$help$2f$HRMS$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        style: {
            fontSize: '15px',
            fontWeight: '500',
            padding: '40px',
            color: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$help$2f$HRMS$2f$src$2f$styles$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["tokens"].colors.textMuted
        },
        children: "Loading attendance data..."
    }, void 0, false, {
        fileName: "[project]/Documents/help/HRMS/src/components/Attendance/index.js",
        lineNumber: 45,
        columnNumber: 23
    }, ("TURBOPACK compile-time value", void 0));
    const groupedLogs = logs.reduce((acc, log)=>{
        if (!log.timestamp) return acc;
        const dateStr = log.timestamp.toDate().toLocaleDateString(undefined, {
            month: 'short',
            day: 'numeric',
            year: 'numeric'
        });
        if (!acc[dateStr]) {
            acc[dateStr] = {
                in: null,
                out: null,
                rawDate: log.timestamp.toDate()
            };
        }
        const timeStr = log.timestamp.toDate().toLocaleTimeString(undefined, {
            hour: '2-digit',
            minute: '2-digit'
        });
        if (log.type === 'in') acc[dateStr].in = timeStr;
        if (log.type === 'out') acc[dateStr].out = timeStr;
        return acc;
    }, {});
    const logRows = Object.entries(groupedLogs).sort((a, b)=>b[1].rawDate - a[1].rawDate);
    if (loading) return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$help$2f$HRMS$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        style: {
            fontSize: '15px',
            fontWeight: '600',
            padding: '60px',
            textAlign: 'center',
            color: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$help$2f$HRMS$2f$src$2f$styles$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["tokens"].colors.secondary
        },
        children: "Establishing secure connection to records..."
    }, void 0, false, {
        fileName: "[project]/Documents/help/HRMS/src/components/Attendance/index.js",
        lineNumber: 61,
        columnNumber: 23
    }, ("TURBOPACK compile-time value", void 0));
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$help$2f$HRMS$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "animate-fade",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$help$2f$HRMS$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    marginBottom: '40px'
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$help$2f$HRMS$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                        style: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$help$2f$HRMS$2f$src$2f$styles$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["styles"].greeting,
                        children: "Time & Attendance"
                    }, void 0, false, {
                        fileName: "[project]/Documents/help/HRMS/src/components/Attendance/index.js",
                        lineNumber: 66,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$help$2f$HRMS$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        style: {
                            color: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$help$2f$HRMS$2f$src$2f$styles$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["tokens"].colors.secondary,
                            fontSize: '15px',
                            marginTop: '4px'
                        },
                        children: "Log your clinical hours and monitor shifting schedules."
                    }, void 0, false, {
                        fileName: "[project]/Documents/help/HRMS/src/components/Attendance/index.js",
                        lineNumber: 67,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/Documents/help/HRMS/src/components/Attendance/index.js",
                lineNumber: 65,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$help$2f$HRMS$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    display: 'grid',
                    gridTemplateColumns: '1fr 2fr',
                    gap: '32px'
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$help$2f$HRMS$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            display: 'flex',
                            flexDirection: 'column',
                            gap: '32px'
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$help$2f$HRMS$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                style: {
                                    ...__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$help$2f$HRMS$2f$src$2f$styles$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["styles"].card,
                                    textAlign: 'center',
                                    padding: '48px 32px',
                                    position: 'relative',
                                    overflow: 'hidden'
                                },
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$help$2f$HRMS$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        style: {
                                            position: 'absolute',
                                            top: '-20px',
                                            right: '-20px',
                                            width: '120px',
                                            height: '120px',
                                            background: activeShift ? __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$help$2f$HRMS$2f$src$2f$styles$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["tokens"].colors.success + '10' : __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$help$2f$HRMS$2f$src$2f$styles$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["tokens"].colors.accent + '05',
                                            borderRadius: '50%',
                                            zIndex: 0
                                        }
                                    }, void 0, false, {
                                        fileName: "[project]/Documents/help/HRMS/src/components/Attendance/index.js",
                                        lineNumber: 73,
                                        columnNumber: 13
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$help$2f$HRMS$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        style: {
                                            position: 'relative',
                                            zIndex: 1
                                        },
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$help$2f$HRMS$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                style: {
                                                    fontSize: '11px',
                                                    fontWeight: '800',
                                                    color: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$help$2f$HRMS$2f$src$2f$styles$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["tokens"].colors.secondary,
                                                    textTransform: 'uppercase',
                                                    letterSpacing: '0.1em',
                                                    marginBottom: '24px'
                                                },
                                                children: "Shift Status"
                                            }, void 0, false, {
                                                fileName: "[project]/Documents/help/HRMS/src/components/Attendance/index.js",
                                                lineNumber: 85,
                                                columnNumber: 15
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$help$2f$HRMS$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                style: {
                                                    width: '80px',
                                                    height: '80px',
                                                    borderRadius: '24px',
                                                    background: activeShift ? __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$help$2f$HRMS$2f$src$2f$styles$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["tokens"].colors.success + '15' : '#F1F5F9',
                                                    color: activeShift ? __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$help$2f$HRMS$2f$src$2f$styles$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["tokens"].colors.success : __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$help$2f$HRMS$2f$src$2f$styles$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["tokens"].colors.secondary,
                                                    display: 'flex',
                                                    alignItems: 'center',
                                                    justifyContent: 'center',
                                                    margin: '0 auto 20px',
                                                    border: `1px solid ${activeShift ? __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$help$2f$HRMS$2f$src$2f$styles$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["tokens"].colors.success + '30' : __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$help$2f$HRMS$2f$src$2f$styles$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["tokens"].colors.border}`
                                                },
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$help$2f$HRMS$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "material-symbols-outlined",
                                                    style: {
                                                        fontSize: '40px'
                                                    },
                                                    children: activeShift ? 'timer' : 'timer_off'
                                                }, void 0, false, {
                                                    fileName: "[project]/Documents/help/HRMS/src/components/Attendance/index.js",
                                                    lineNumber: 99,
                                                    columnNumber: 17
                                                }, ("TURBOPACK compile-time value", void 0))
                                            }, void 0, false, {
                                                fileName: "[project]/Documents/help/HRMS/src/components/Attendance/index.js",
                                                lineNumber: 87,
                                                columnNumber: 15
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$help$2f$HRMS$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                style: {
                                                    fontSize: '24px',
                                                    fontWeight: '800',
                                                    color: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$help$2f$HRMS$2f$src$2f$styles$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["tokens"].colors.primary,
                                                    marginBottom: '8px',
                                                    letterSpacing: '-0.02em'
                                                },
                                                children: activeShift ? 'Currently Logged In' : 'Account On Standby'
                                            }, void 0, false, {
                                                fileName: "[project]/Documents/help/HRMS/src/components/Attendance/index.js",
                                                lineNumber: 102,
                                                columnNumber: 15
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$help$2f$HRMS$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                style: {
                                                    fontSize: '13px',
                                                    color: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$help$2f$HRMS$2f$src$2f$styles$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["tokens"].colors.secondary,
                                                    marginBottom: '40px'
                                                },
                                                children: activeShift ? `Shift started at ${activeShift.timestamp?.toDate().toLocaleTimeString([], {
                                                    hour: '2-digit',
                                                    minute: '2-digit'
                                                })}` : 'Ready to begin your scheduled session?'
                                            }, void 0, false, {
                                                fileName: "[project]/Documents/help/HRMS/src/components/Attendance/index.js",
                                                lineNumber: 105,
                                                columnNumber: 15
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$help$2f$HRMS$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                onClick: toggleShift,
                                                style: {
                                                    ...__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$help$2f$HRMS$2f$src$2f$styles$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["styles"].button.primary,
                                                    width: '100%',
                                                    padding: '16px',
                                                    fontSize: '15px',
                                                    backgroundColor: activeShift ? __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$help$2f$HRMS$2f$src$2f$styles$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["tokens"].colors.primary : __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$help$2f$HRMS$2f$src$2f$styles$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["tokens"].colors.accent,
                                                    boxShadow: activeShift ? 'none' : __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$help$2f$HRMS$2f$src$2f$styles$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["tokens"].button.primary.boxShadow
                                                },
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$help$2f$HRMS$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "material-symbols-outlined",
                                                        style: {
                                                            fontSize: '20px'
                                                        },
                                                        children: activeShift ? 'logout' : 'bolt'
                                                    }, void 0, false, {
                                                        fileName: "[project]/Documents/help/HRMS/src/components/Attendance/index.js",
                                                        lineNumber: 120,
                                                        columnNumber: 17
                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                    activeShift ? 'Terminate Session' : 'Establish Pulse'
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/Documents/help/HRMS/src/components/Attendance/index.js",
                                                lineNumber: 109,
                                                columnNumber: 15
                                            }, ("TURBOPACK compile-time value", void 0))
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Documents/help/HRMS/src/components/Attendance/index.js",
                                        lineNumber: 84,
                                        columnNumber: 13
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Documents/help/HRMS/src/components/Attendance/index.js",
                                lineNumber: 72,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$help$2f$HRMS$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                style: {
                                    ...__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$help$2f$HRMS$2f$src$2f$styles$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["styles"].card,
                                    padding: '32px'
                                },
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$help$2f$HRMS$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                        style: {
                                            fontSize: '16px',
                                            fontWeight: '800',
                                            marginBottom: '24px',
                                            color: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$help$2f$HRMS$2f$src$2f$styles$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["tokens"].colors.primary
                                        },
                                        children: "Efficiency Metrics"
                                    }, void 0, false, {
                                        fileName: "[project]/Documents/help/HRMS/src/components/Attendance/index.js",
                                        lineNumber: 127,
                                        columnNumber: 13
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$help$2f$HRMS$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        style: {
                                            display: 'flex',
                                            justifyContent: 'space-between',
                                            marginBottom: '12px',
                                            alignItems: 'flex-end'
                                        },
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$help$2f$HRMS$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                style: {
                                                    fontSize: '13px',
                                                    fontWeight: '700',
                                                    color: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$help$2f$HRMS$2f$src$2f$styles$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["tokens"].colors.secondary
                                                },
                                                children: "Monthly Compliance"
                                            }, void 0, false, {
                                                fileName: "[project]/Documents/help/HRMS/src/components/Attendance/index.js",
                                                lineNumber: 129,
                                                columnNumber: 15
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$help$2f$HRMS$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                style: {
                                                    fontSize: '18px',
                                                    fontWeight: '800',
                                                    color: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$help$2f$HRMS$2f$src$2f$styles$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["tokens"].colors.primary
                                                },
                                                children: "98.4%"
                                            }, void 0, false, {
                                                fileName: "[project]/Documents/help/HRMS/src/components/Attendance/index.js",
                                                lineNumber: 130,
                                                columnNumber: 15
                                            }, ("TURBOPACK compile-time value", void 0))
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Documents/help/HRMS/src/components/Attendance/index.js",
                                        lineNumber: 128,
                                        columnNumber: 13
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$help$2f$HRMS$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        style: {
                                            height: '10px',
                                            background: '#F1F5F9',
                                            borderRadius: '5px',
                                            overflow: 'hidden'
                                        },
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$help$2f$HRMS$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            style: {
                                                width: '98.4%',
                                                height: '100%',
                                                background: `linear-gradient(to right, ${__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$help$2f$HRMS$2f$src$2f$styles$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["tokens"].colors.accent}, ${__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$help$2f$HRMS$2f$src$2f$styles$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["tokens"].colors.success})`,
                                                borderRadius: '5px'
                                            }
                                        }, void 0, false, {
                                            fileName: "[project]/Documents/help/HRMS/src/components/Attendance/index.js",
                                            lineNumber: 133,
                                            columnNumber: 15
                                        }, ("TURBOPACK compile-time value", void 0))
                                    }, void 0, false, {
                                        fileName: "[project]/Documents/help/HRMS/src/components/Attendance/index.js",
                                        lineNumber: 132,
                                        columnNumber: 13
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$help$2f$HRMS$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        style: {
                                            fontSize: '12px',
                                            color: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$help$2f$HRMS$2f$src$2f$styles$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["tokens"].colors.secondary,
                                            marginTop: '16px',
                                            lineHeight: '1.5'
                                        },
                                        children: "Your attendance record remains above the workspace average. Excellent discipline."
                                    }, void 0, false, {
                                        fileName: "[project]/Documents/help/HRMS/src/components/Attendance/index.js",
                                        lineNumber: 135,
                                        columnNumber: 13
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Documents/help/HRMS/src/components/Attendance/index.js",
                                lineNumber: 126,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Documents/help/HRMS/src/components/Attendance/index.js",
                        lineNumber: 71,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$help$2f$HRMS$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            ...__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$help$2f$HRMS$2f$src$2f$styles$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["styles"].card,
                            padding: '0',
                            overflow: 'hidden'
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$help$2f$HRMS$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                style: {
                                    padding: '32px',
                                    borderBottom: `1px solid ${__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$help$2f$HRMS$2f$src$2f$styles$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["tokens"].colors.border}`,
                                    display: 'flex',
                                    justifyContent: 'space-between',
                                    alignItems: 'center'
                                },
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$help$2f$HRMS$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                        style: {
                                            fontSize: '18px',
                                            fontWeight: '800',
                                            color: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$help$2f$HRMS$2f$src$2f$styles$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["tokens"].colors.primary
                                        },
                                        children: "Activity History"
                                    }, void 0, false, {
                                        fileName: "[project]/Documents/help/HRMS/src/components/Attendance/index.js",
                                        lineNumber: 141,
                                        columnNumber: 13
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$help$2f$HRMS$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        style: {
                                            ...__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$help$2f$HRMS$2f$src$2f$styles$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["styles"].badge('primary'),
                                            textTransform: 'uppercase',
                                            fontSize: '10px'
                                        },
                                        children: "March 2026"
                                    }, void 0, false, {
                                        fileName: "[project]/Documents/help/HRMS/src/components/Attendance/index.js",
                                        lineNumber: 142,
                                        columnNumber: 13
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Documents/help/HRMS/src/components/Attendance/index.js",
                                lineNumber: 140,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$help$2f$HRMS$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                style: {
                                    overflowX: 'auto'
                                },
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$help$2f$HRMS$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("table", {
                                    style: {
                                        width: '100%',
                                        borderCollapse: 'collapse'
                                    },
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$help$2f$HRMS$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("thead", {
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$help$2f$HRMS$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                                style: {
                                                    backgroundColor: '#F8FAFC'
                                                },
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$help$2f$HRMS$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                        style: {
                                                            ...__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$help$2f$HRMS$2f$src$2f$styles$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["styles"].th,
                                                            paddingLeft: '32px'
                                                        },
                                                        children: "Operational Date"
                                                    }, void 0, false, {
                                                        fileName: "[project]/Documents/help/HRMS/src/components/Attendance/index.js",
                                                        lineNumber: 149,
                                                        columnNumber: 19
                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$help$2f$HRMS$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                        style: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$help$2f$HRMS$2f$src$2f$styles$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["styles"].th,
                                                        children: "Timeline (In/Out)"
                                                    }, void 0, false, {
                                                        fileName: "[project]/Documents/help/HRMS/src/components/Attendance/index.js",
                                                        lineNumber: 150,
                                                        columnNumber: 19
                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$help$2f$HRMS$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                        style: {
                                                            ...__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$help$2f$HRMS$2f$src$2f$styles$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["styles"].th,
                                                            textAlign: 'right',
                                                            paddingRight: '32px'
                                                        },
                                                        children: "System Status"
                                                    }, void 0, false, {
                                                        fileName: "[project]/Documents/help/HRMS/src/components/Attendance/index.js",
                                                        lineNumber: 151,
                                                        columnNumber: 19
                                                    }, ("TURBOPACK compile-time value", void 0))
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/Documents/help/HRMS/src/components/Attendance/index.js",
                                                lineNumber: 148,
                                                columnNumber: 17
                                            }, ("TURBOPACK compile-time value", void 0))
                                        }, void 0, false, {
                                            fileName: "[project]/Documents/help/HRMS/src/components/Attendance/index.js",
                                            lineNumber: 147,
                                            columnNumber: 15
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$help$2f$HRMS$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("tbody", {
                                            children: [
                                                logRows.map(([date, times], idx)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$help$2f$HRMS$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                                        style: {
                                                            borderBottom: idx === logRows.length - 1 ? 'none' : `1px solid ${__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$help$2f$HRMS$2f$src$2f$styles$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["tokens"].colors.border}`,
                                                            transition: 'background-color 0.2s ease'
                                                        },
                                                        onMouseOver: (e)=>e.currentTarget.style.backgroundColor = '#F9FAFB',
                                                        onMouseOut: (e)=>e.currentTarget.style.backgroundColor = 'transparent',
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$help$2f$HRMS$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                                style: {
                                                                    ...__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$help$2f$HRMS$2f$src$2f$styles$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["styles"].td,
                                                                    paddingLeft: '32px',
                                                                    fontWeight: '700',
                                                                    color: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$help$2f$HRMS$2f$src$2f$styles$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["tokens"].colors.primary
                                                                },
                                                                children: date
                                                            }, void 0, false, {
                                                                fileName: "[project]/Documents/help/HRMS/src/components/Attendance/index.js",
                                                                lineNumber: 160,
                                                                columnNumber: 21
                                                            }, ("TURBOPACK compile-time value", void 0)),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$help$2f$HRMS$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                                style: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$help$2f$HRMS$2f$src$2f$styles$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["styles"].td,
                                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$help$2f$HRMS$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    style: {
                                                                        display: 'flex',
                                                                        alignItems: 'center',
                                                                        gap: '8px'
                                                                    },
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$help$2f$HRMS$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                            style: {
                                                                                padding: '6px 10px',
                                                                                background: times.in ? '#ECFDF5' : '#F1F5F9',
                                                                                color: times.in ? __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$help$2f$HRMS$2f$src$2f$styles$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["tokens"].colors.success : __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$help$2f$HRMS$2f$src$2f$styles$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["tokens"].colors.secondary,
                                                                                borderRadius: '8px',
                                                                                fontSize: '12px',
                                                                                fontWeight: '700',
                                                                                border: `1px solid ${times.in ? '#D1FAE5' : __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$help$2f$HRMS$2f$src$2f$styles$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["tokens"].colors.border}`
                                                                            },
                                                                            children: times.in || '--:--'
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/Documents/help/HRMS/src/components/Attendance/index.js",
                                                                            lineNumber: 163,
                                                                            columnNumber: 25
                                                                        }, ("TURBOPACK compile-time value", void 0)),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$help$2f$HRMS$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                            className: "material-symbols-outlined",
                                                                            style: {
                                                                                fontSize: '14px',
                                                                                color: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$help$2f$HRMS$2f$src$2f$styles$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["tokens"].colors.border
                                                                            },
                                                                            children: "arrow_forward"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/Documents/help/HRMS/src/components/Attendance/index.js",
                                                                            lineNumber: 174,
                                                                            columnNumber: 25
                                                                        }, ("TURBOPACK compile-time value", void 0)),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$help$2f$HRMS$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                            style: {
                                                                                padding: '6px 10px',
                                                                                background: times.out ? '#F1F5F9' : '#FFF1F2',
                                                                                color: times.out ? __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$help$2f$HRMS$2f$src$2f$styles$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["tokens"].colors.secondary : __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$help$2f$HRMS$2f$src$2f$styles$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["tokens"].colors.error,
                                                                                borderRadius: '8px',
                                                                                fontSize: '12px',
                                                                                fontWeight: '700',
                                                                                border: `1px solid ${times.out ? __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$help$2f$HRMS$2f$src$2f$styles$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["tokens"].colors.border : '#FFE4E6'}`
                                                                            },
                                                                            children: times.out || 'Active'
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/Documents/help/HRMS/src/components/Attendance/index.js",
                                                                            lineNumber: 175,
                                                                            columnNumber: 25
                                                                        }, ("TURBOPACK compile-time value", void 0))
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/Documents/help/HRMS/src/components/Attendance/index.js",
                                                                    lineNumber: 162,
                                                                    columnNumber: 23
                                                                }, ("TURBOPACK compile-time value", void 0))
                                                            }, void 0, false, {
                                                                fileName: "[project]/Documents/help/HRMS/src/components/Attendance/index.js",
                                                                lineNumber: 161,
                                                                columnNumber: 21
                                                            }, ("TURBOPACK compile-time value", void 0)),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$help$2f$HRMS$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                                style: {
                                                                    ...__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$help$2f$HRMS$2f$src$2f$styles$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["styles"].td,
                                                                    textAlign: 'right',
                                                                    paddingRight: '32px'
                                                                },
                                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$help$2f$HRMS$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    style: {
                                                                        display: 'inline-flex',
                                                                        alignItems: 'center',
                                                                        gap: '6px',
                                                                        color: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$help$2f$HRMS$2f$src$2f$styles$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["tokens"].colors.success,
                                                                        fontSize: '12px',
                                                                        fontWeight: '700'
                                                                    },
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$help$2f$HRMS$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                            className: "material-symbols-outlined",
                                                                            style: {
                                                                                fontSize: '16px'
                                                                            },
                                                                            children: "verified"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/Documents/help/HRMS/src/components/Attendance/index.js",
                                                                            lineNumber: 190,
                                                                            columnNumber: 25
                                                                        }, ("TURBOPACK compile-time value", void 0)),
                                                                        "Validated"
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/Documents/help/HRMS/src/components/Attendance/index.js",
                                                                    lineNumber: 189,
                                                                    columnNumber: 23
                                                                }, ("TURBOPACK compile-time value", void 0))
                                                            }, void 0, false, {
                                                                fileName: "[project]/Documents/help/HRMS/src/components/Attendance/index.js",
                                                                lineNumber: 188,
                                                                columnNumber: 21
                                                            }, ("TURBOPACK compile-time value", void 0))
                                                        ]
                                                    }, date, true, {
                                                        fileName: "[project]/Documents/help/HRMS/src/components/Attendance/index.js",
                                                        lineNumber: 156,
                                                        columnNumber: 19
                                                    }, ("TURBOPACK compile-time value", void 0))),
                                                logRows.length === 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$help$2f$HRMS$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$help$2f$HRMS$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                        colSpan: "3",
                                                        style: {
                                                            ...__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$help$2f$HRMS$2f$src$2f$styles$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["styles"].td,
                                                            textAlign: 'center',
                                                            padding: '80px',
                                                            color: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$help$2f$HRMS$2f$src$2f$styles$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["tokens"].colors.secondary
                                                        },
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$help$2f$HRMS$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                style: {
                                                                    opacity: 0.5,
                                                                    marginBottom: '16px'
                                                                },
                                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$help$2f$HRMS$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                    className: "material-symbols-outlined",
                                                                    style: {
                                                                        fontSize: '48px'
                                                                    },
                                                                    children: "history"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/Documents/help/HRMS/src/components/Attendance/index.js",
                                                                    lineNumber: 200,
                                                                    columnNumber: 25
                                                                }, ("TURBOPACK compile-time value", void 0))
                                                            }, void 0, false, {
                                                                fileName: "[project]/Documents/help/HRMS/src/components/Attendance/index.js",
                                                                lineNumber: 199,
                                                                columnNumber: 23
                                                            }, ("TURBOPACK compile-time value", void 0)),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$help$2f$HRMS$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                style: {
                                                                    fontWeight: '700',
                                                                    fontSize: '16px',
                                                                    color: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$help$2f$HRMS$2f$src$2f$styles$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["tokens"].colors.primary
                                                                },
                                                                children: "No Recent Activity"
                                                            }, void 0, false, {
                                                                fileName: "[project]/Documents/help/HRMS/src/components/Attendance/index.js",
                                                                lineNumber: 202,
                                                                columnNumber: 23
                                                            }, ("TURBOPACK compile-time value", void 0)),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$help$2f$HRMS$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                children: "Your shift logs will appear here once you clock in."
                                                            }, void 0, false, {
                                                                fileName: "[project]/Documents/help/HRMS/src/components/Attendance/index.js",
                                                                lineNumber: 203,
                                                                columnNumber: 23
                                                            }, ("TURBOPACK compile-time value", void 0))
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/Documents/help/HRMS/src/components/Attendance/index.js",
                                                        lineNumber: 198,
                                                        columnNumber: 21
                                                    }, ("TURBOPACK compile-time value", void 0))
                                                }, void 0, false, {
                                                    fileName: "[project]/Documents/help/HRMS/src/components/Attendance/index.js",
                                                    lineNumber: 197,
                                                    columnNumber: 19
                                                }, ("TURBOPACK compile-time value", void 0))
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/Documents/help/HRMS/src/components/Attendance/index.js",
                                            lineNumber: 154,
                                            columnNumber: 15
                                        }, ("TURBOPACK compile-time value", void 0))
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Documents/help/HRMS/src/components/Attendance/index.js",
                                    lineNumber: 146,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0))
                            }, void 0, false, {
                                fileName: "[project]/Documents/help/HRMS/src/components/Attendance/index.js",
                                lineNumber: 145,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Documents/help/HRMS/src/components/Attendance/index.js",
                        lineNumber: 139,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/Documents/help/HRMS/src/components/Attendance/index.js",
                lineNumber: 70,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/Documents/help/HRMS/src/components/Attendance/index.js",
        lineNumber: 64,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
const __TURBOPACK__default__export__ = Attendance;
}),
"[project]/Documents/help/HRMS/src/components/Leaves/index.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$help$2f$HRMS$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/help/HRMS/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$help$2f$HRMS$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/help/HRMS/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$help$2f$HRMS$2f$src$2f$firebase$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/help/HRMS/src/firebase.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$help$2f$HRMS$2f$node_modules$2f$firebase$2f$firestore$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/Documents/help/HRMS/node_modules/firebase/firestore/dist/index.mjs [app-ssr] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$help$2f$HRMS$2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/help/HRMS/node_modules/@firebase/firestore/dist/index.node.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$help$2f$HRMS$2f$src$2f$styles$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/help/HRMS/src/styles.js [app-ssr] (ecmascript)");
;
;
;
;
;
const Leaves = ({ user })=>{
    const [leaveRequests, setLeaveRequests] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$help$2f$HRMS$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])([]);
    const [loading, setLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$help$2f$HRMS$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(true);
    const [showForm, setShowForm] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$help$2f$HRMS$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [newLeave, setNewLeave] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$help$2f$HRMS$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])({
        type: 'Annual',
        start: '',
        end: '',
        reason: ''
    });
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$help$2f$HRMS$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        const q = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$help$2f$HRMS$2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["query"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$help$2f$HRMS$2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["collection"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$help$2f$HRMS$2f$src$2f$firebase$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["db"], 'leaveRequests'), (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$help$2f$HRMS$2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["where"])('userEmail', '==', user.email));
        // Removed orderBy to avoid index requirement for small personal datasets
        const unsub = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$help$2f$HRMS$2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["onSnapshot"])(q, (s)=>{
            const data = s.docs.map((d)=>({
                    id: d.id,
                    ...d.data()
                })).sort((a, b)=>(b.timestamp?.seconds || 0) - (a.timestamp?.seconds || 0));
            setLeaveRequests(data);
            setLoading(false);
        }, (err)=>{
            console.error("Leave history error:", err);
            setLoading(false);
        });
        return unsub;
    }, [
        user.email
    ]);
    const handleSubmit = async (e)=>{
        e.preventDefault();
        try {
            await (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$help$2f$HRMS$2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["addDoc"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$help$2f$HRMS$2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["collection"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$help$2f$HRMS$2f$src$2f$firebase$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["db"], 'leaveRequests'), {
                ...newLeave,
                userEmail: user.email,
                status: 'pending',
                timestamp: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$help$2f$HRMS$2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["serverTimestamp"])()
            });
            setShowForm(false);
            setNewLeave({
                type: 'Annual',
                start: '',
                end: '',
                reason: ''
            });
        } catch (err) {
            console.error(err);
        }
    };
    if (loading) return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$help$2f$HRMS$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        style: {
            fontSize: '15px',
            fontWeight: '500',
            padding: '40px',
            color: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$help$2f$HRMS$2f$src$2f$styles$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["tokens"].colors.textMuted
        },
        children: "Loading leave history..."
    }, void 0, false, {
        fileName: "[project]/Documents/help/HRMS/src/components/Leaves/index.js",
        lineNumber: 47,
        columnNumber: 23
    }, ("TURBOPACK compile-time value", void 0));
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$help$2f$HRMS$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "animate-fade",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$help$2f$HRMS$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    marginBottom: '32px'
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$help$2f$HRMS$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$help$2f$HRMS$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                style: {
                                    fontSize: '24px',
                                    fontWeight: '800',
                                    color: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$help$2f$HRMS$2f$src$2f$styles$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["tokens"].colors.primary
                                },
                                children: "Leave Management"
                            }, void 0, false, {
                                fileName: "[project]/Documents/help/HRMS/src/components/Leaves/index.js",
                                lineNumber: 53,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$help$2f$HRMS$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                style: {
                                    color: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$help$2f$HRMS$2f$src$2f$styles$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["tokens"].colors.textMuted,
                                    fontSize: '14px'
                                },
                                children: "Request and track your personal time off."
                            }, void 0, false, {
                                fileName: "[project]/Documents/help/HRMS/src/components/Leaves/index.js",
                                lineNumber: 54,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Documents/help/HRMS/src/components/Leaves/index.js",
                        lineNumber: 52,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$help$2f$HRMS$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: ()=>setShowForm(!showForm),
                        style: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$help$2f$HRMS$2f$src$2f$styles$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["styles"].button.primary,
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$help$2f$HRMS$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "material-symbols-outlined",
                                style: {
                                    fontSize: '18px'
                                },
                                children: showForm ? 'close' : 'add'
                            }, void 0, false, {
                                fileName: "[project]/Documents/help/HRMS/src/components/Leaves/index.js",
                                lineNumber: 57,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0)),
                            showForm ? 'Discard Request' : 'New Leave Request'
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Documents/help/HRMS/src/components/Leaves/index.js",
                        lineNumber: 56,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/Documents/help/HRMS/src/components/Leaves/index.js",
                lineNumber: 51,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            showForm && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$help$2f$HRMS$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    ...__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$help$2f$HRMS$2f$src$2f$styles$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["styles"].card,
                    marginBottom: '32px',
                    border: `1px solid ${__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$help$2f$HRMS$2f$src$2f$styles$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["tokens"].colors.primary}`
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$help$2f$HRMS$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                        style: {
                            fontSize: '18px',
                            fontWeight: '700',
                            marginBottom: '24px'
                        },
                        children: "New Application"
                    }, void 0, false, {
                        fileName: "[project]/Documents/help/HRMS/src/components/Leaves/index.js",
                        lineNumber: 64,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$help$2f$HRMS$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
                        onSubmit: handleSubmit,
                        style: {
                            display: 'grid',
                            gridTemplateColumns: '1fr 1fr',
                            gap: '20px'
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$help$2f$HRMS$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                style: {
                                    gridColumn: 'span 2'
                                },
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$help$2f$HRMS$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                        style: {
                                            fontSize: '13px',
                                            fontWeight: '600',
                                            color: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$help$2f$HRMS$2f$src$2f$styles$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["tokens"].colors.secondary,
                                            display: 'block',
                                            marginBottom: '6px'
                                        },
                                        children: "Leave Category"
                                    }, void 0, false, {
                                        fileName: "[project]/Documents/help/HRMS/src/components/Leaves/index.js",
                                        lineNumber: 67,
                                        columnNumber: 15
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$help$2f$HRMS$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                        style: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$help$2f$HRMS$2f$src$2f$styles$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["styles"].input,
                                        value: newLeave.type,
                                        onChange: (e)=>setNewLeave({
                                                ...newLeave,
                                                type: e.target.value
                                            }),
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$help$2f$HRMS$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                children: "Annual"
                                            }, void 0, false, {
                                                fileName: "[project]/Documents/help/HRMS/src/components/Leaves/index.js",
                                                lineNumber: 73,
                                                columnNumber: 17
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$help$2f$HRMS$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                children: "Sick"
                                            }, void 0, false, {
                                                fileName: "[project]/Documents/help/HRMS/src/components/Leaves/index.js",
                                                lineNumber: 74,
                                                columnNumber: 17
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$help$2f$HRMS$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                children: "Personal"
                                            }, void 0, false, {
                                                fileName: "[project]/Documents/help/HRMS/src/components/Leaves/index.js",
                                                lineNumber: 75,
                                                columnNumber: 17
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$help$2f$HRMS$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                children: "Training"
                                            }, void 0, false, {
                                                fileName: "[project]/Documents/help/HRMS/src/components/Leaves/index.js",
                                                lineNumber: 76,
                                                columnNumber: 17
                                            }, ("TURBOPACK compile-time value", void 0))
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Documents/help/HRMS/src/components/Leaves/index.js",
                                        lineNumber: 68,
                                        columnNumber: 15
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Documents/help/HRMS/src/components/Leaves/index.js",
                                lineNumber: 66,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$help$2f$HRMS$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$help$2f$HRMS$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                        style: {
                                            fontSize: '13px',
                                            fontWeight: '600',
                                            color: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$help$2f$HRMS$2f$src$2f$styles$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["tokens"].colors.secondary,
                                            display: 'block',
                                            marginBottom: '6px'
                                        },
                                        children: "Start Date"
                                    }, void 0, false, {
                                        fileName: "[project]/Documents/help/HRMS/src/components/Leaves/index.js",
                                        lineNumber: 80,
                                        columnNumber: 15
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$help$2f$HRMS$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                        type: "date",
                                        style: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$help$2f$HRMS$2f$src$2f$styles$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["styles"].input,
                                        value: newLeave.start,
                                        onChange: (e)=>setNewLeave({
                                                ...newLeave,
                                                start: e.target.value
                                            }),
                                        required: true
                                    }, void 0, false, {
                                        fileName: "[project]/Documents/help/HRMS/src/components/Leaves/index.js",
                                        lineNumber: 81,
                                        columnNumber: 15
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Documents/help/HRMS/src/components/Leaves/index.js",
                                lineNumber: 79,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$help$2f$HRMS$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$help$2f$HRMS$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                        style: {
                                            fontSize: '13px',
                                            fontWeight: '600',
                                            color: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$help$2f$HRMS$2f$src$2f$styles$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["tokens"].colors.secondary,
                                            display: 'block',
                                            marginBottom: '6px'
                                        },
                                        children: "End Date"
                                    }, void 0, false, {
                                        fileName: "[project]/Documents/help/HRMS/src/components/Leaves/index.js",
                                        lineNumber: 84,
                                        columnNumber: 15
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$help$2f$HRMS$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                        type: "date",
                                        style: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$help$2f$HRMS$2f$src$2f$styles$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["styles"].input,
                                        value: newLeave.end,
                                        onChange: (e)=>setNewLeave({
                                                ...newLeave,
                                                end: e.target.value
                                            }),
                                        required: true
                                    }, void 0, false, {
                                        fileName: "[project]/Documents/help/HRMS/src/components/Leaves/index.js",
                                        lineNumber: 85,
                                        columnNumber: 15
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Documents/help/HRMS/src/components/Leaves/index.js",
                                lineNumber: 83,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$help$2f$HRMS$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                style: {
                                    gridColumn: 'span 2'
                                },
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$help$2f$HRMS$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                        style: {
                                            fontSize: '13px',
                                            fontWeight: '600',
                                            color: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$help$2f$HRMS$2f$src$2f$styles$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["tokens"].colors.secondary,
                                            display: 'block',
                                            marginBottom: '6px'
                                        },
                                        children: "Reason / Justification"
                                    }, void 0, false, {
                                        fileName: "[project]/Documents/help/HRMS/src/components/Leaves/index.js",
                                        lineNumber: 88,
                                        columnNumber: 15
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$help$2f$HRMS$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("textarea", {
                                        style: {
                                            ...__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$help$2f$HRMS$2f$src$2f$styles$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["styles"].input,
                                            minHeight: '100px',
                                            resize: 'none'
                                        },
                                        value: newLeave.reason,
                                        onChange: (e)=>setNewLeave({
                                                ...newLeave,
                                                reason: e.target.value
                                            }),
                                        required: true,
                                        placeholder: "Briefly describe the reason for your leave..."
                                    }, void 0, false, {
                                        fileName: "[project]/Documents/help/HRMS/src/components/Leaves/index.js",
                                        lineNumber: 89,
                                        columnNumber: 15
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Documents/help/HRMS/src/components/Leaves/index.js",
                                lineNumber: 87,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$help$2f$HRMS$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                type: "submit",
                                style: {
                                    ...__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$help$2f$HRMS$2f$src$2f$styles$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["styles"].button.primary,
                                    gridColumn: 'span 2',
                                    justifyContent: 'center',
                                    padding: '12px'
                                },
                                children: "Submit Request"
                            }, void 0, false, {
                                fileName: "[project]/Documents/help/HRMS/src/components/Leaves/index.js",
                                lineNumber: 91,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Documents/help/HRMS/src/components/Leaves/index.js",
                        lineNumber: 65,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/Documents/help/HRMS/src/components/Leaves/index.js",
                lineNumber: 63,
                columnNumber: 9
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$help$2f$HRMS$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$help$2f$HRMS$2f$src$2f$styles$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["styles"].card,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$help$2f$HRMS$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                        style: {
                            fontSize: '18px',
                            fontWeight: '700',
                            marginBottom: '20px'
                        },
                        children: "Request History"
                    }, void 0, false, {
                        fileName: "[project]/Documents/help/HRMS/src/components/Leaves/index.js",
                        lineNumber: 97,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$help$2f$HRMS$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("table", {
                        style: {
                            width: '100%',
                            borderCollapse: 'collapse'
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$help$2f$HRMS$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("thead", {
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$help$2f$HRMS$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$help$2f$HRMS$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                            style: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$help$2f$HRMS$2f$src$2f$styles$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["styles"].th,
                                            children: "Category"
                                        }, void 0, false, {
                                            fileName: "[project]/Documents/help/HRMS/src/components/Leaves/index.js",
                                            lineNumber: 101,
                                            columnNumber: 15
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$help$2f$HRMS$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                            style: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$help$2f$HRMS$2f$src$2f$styles$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["styles"].th,
                                            children: "Period"
                                        }, void 0, false, {
                                            fileName: "[project]/Documents/help/HRMS/src/components/Leaves/index.js",
                                            lineNumber: 102,
                                            columnNumber: 15
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$help$2f$HRMS$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                            style: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$help$2f$HRMS$2f$src$2f$styles$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["styles"].th,
                                            children: "Status"
                                        }, void 0, false, {
                                            fileName: "[project]/Documents/help/HRMS/src/components/Leaves/index.js",
                                            lineNumber: 103,
                                            columnNumber: 15
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$help$2f$HRMS$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                            style: {
                                                ...__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$help$2f$HRMS$2f$src$2f$styles$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["styles"].th,
                                                textAlign: 'right'
                                            },
                                            children: "Applied On"
                                        }, void 0, false, {
                                            fileName: "[project]/Documents/help/HRMS/src/components/Leaves/index.js",
                                            lineNumber: 104,
                                            columnNumber: 15
                                        }, ("TURBOPACK compile-time value", void 0))
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Documents/help/HRMS/src/components/Leaves/index.js",
                                    lineNumber: 100,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0))
                            }, void 0, false, {
                                fileName: "[project]/Documents/help/HRMS/src/components/Leaves/index.js",
                                lineNumber: 99,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$help$2f$HRMS$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("tbody", {
                                children: [
                                    leaveRequests.map((item)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$help$2f$HRMS$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$help$2f$HRMS$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                    style: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$help$2f$HRMS$2f$src$2f$styles$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["styles"].td,
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$help$2f$HRMS$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        style: {
                                                            fontWeight: '600',
                                                            color: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$help$2f$HRMS$2f$src$2f$styles$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["tokens"].colors.primary
                                                        },
                                                        children: item.type
                                                    }, void 0, false, {
                                                        fileName: "[project]/Documents/help/HRMS/src/components/Leaves/index.js",
                                                        lineNumber: 111,
                                                        columnNumber: 19
                                                    }, ("TURBOPACK compile-time value", void 0))
                                                }, void 0, false, {
                                                    fileName: "[project]/Documents/help/HRMS/src/components/Leaves/index.js",
                                                    lineNumber: 110,
                                                    columnNumber: 17
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$help$2f$HRMS$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                    style: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$help$2f$HRMS$2f$src$2f$styles$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["styles"].td,
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$help$2f$HRMS$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        style: {
                                                            fontSize: '14px'
                                                        },
                                                        children: [
                                                            new Date(item.start).toLocaleDateString(),
                                                            " — ",
                                                            new Date(item.end).toLocaleDateString()
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/Documents/help/HRMS/src/components/Leaves/index.js",
                                                        lineNumber: 114,
                                                        columnNumber: 19
                                                    }, ("TURBOPACK compile-time value", void 0))
                                                }, void 0, false, {
                                                    fileName: "[project]/Documents/help/HRMS/src/components/Leaves/index.js",
                                                    lineNumber: 113,
                                                    columnNumber: 17
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$help$2f$HRMS$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                    style: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$help$2f$HRMS$2f$src$2f$styles$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["styles"].td,
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$help$2f$HRMS$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        style: {
                                                            ...__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$help$2f$HRMS$2f$src$2f$styles$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["styles"].badge(item.status === 'approved' ? 'primary' : 'outline'),
                                                            backgroundColor: item.status === 'approved' ? '#ECFDF5' : item.status === 'pending' ? '#FFFBEB' : '#FEF2F2',
                                                            color: item.status === 'approved' ? '#059669' : item.status === 'pending' ? '#D97706' : '#DC2626',
                                                            borderColor: item.status === 'approved' ? '#10B981' : item.status === 'pending' ? '#F59E0B' : '#EF4444',
                                                            textTransform: 'capitalize'
                                                        },
                                                        children: item.status
                                                    }, void 0, false, {
                                                        fileName: "[project]/Documents/help/HRMS/src/components/Leaves/index.js",
                                                        lineNumber: 117,
                                                        columnNumber: 19
                                                    }, ("TURBOPACK compile-time value", void 0))
                                                }, void 0, false, {
                                                    fileName: "[project]/Documents/help/HRMS/src/components/Leaves/index.js",
                                                    lineNumber: 116,
                                                    columnNumber: 17
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$help$2f$HRMS$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                    style: {
                                                        ...__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$help$2f$HRMS$2f$src$2f$styles$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["styles"].td,
                                                        textAlign: 'right',
                                                        color: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$help$2f$HRMS$2f$src$2f$styles$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["tokens"].colors.textMuted
                                                    },
                                                    children: item.timestamp?.toDate().toLocaleDateString(undefined, {
                                                        month: 'short',
                                                        day: 'numeric',
                                                        year: 'numeric'
                                                    }) || 'Pending...'
                                                }, void 0, false, {
                                                    fileName: "[project]/Documents/help/HRMS/src/components/Leaves/index.js",
                                                    lineNumber: 127,
                                                    columnNumber: 17
                                                }, ("TURBOPACK compile-time value", void 0))
                                            ]
                                        }, item.id, true, {
                                            fileName: "[project]/Documents/help/HRMS/src/components/Leaves/index.js",
                                            lineNumber: 109,
                                            columnNumber: 15
                                        }, ("TURBOPACK compile-time value", void 0))),
                                    leaveRequests.length === 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$help$2f$HRMS$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$help$2f$HRMS$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                            colSpan: "4",
                                            style: {
                                                textAlign: 'center',
                                                padding: '60px'
                                            },
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$help$2f$HRMS$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "material-symbols-outlined",
                                                    style: {
                                                        fontSize: '48px',
                                                        color: '#E5E7EB',
                                                        marginBottom: '12px'
                                                    },
                                                    children: "event_busy"
                                                }, void 0, false, {
                                                    fileName: "[project]/Documents/help/HRMS/src/components/Leaves/index.js",
                                                    lineNumber: 135,
                                                    columnNumber: 19
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$help$2f$HRMS$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    style: {
                                                        fontSize: '14px',
                                                        color: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$help$2f$HRMS$2f$src$2f$styles$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["tokens"].colors.textMuted
                                                    },
                                                    children: "No leave history found."
                                                }, void 0, false, {
                                                    fileName: "[project]/Documents/help/HRMS/src/components/Leaves/index.js",
                                                    lineNumber: 136,
                                                    columnNumber: 19
                                                }, ("TURBOPACK compile-time value", void 0))
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/Documents/help/HRMS/src/components/Leaves/index.js",
                                            lineNumber: 134,
                                            columnNumber: 17
                                        }, ("TURBOPACK compile-time value", void 0))
                                    }, void 0, false, {
                                        fileName: "[project]/Documents/help/HRMS/src/components/Leaves/index.js",
                                        lineNumber: 133,
                                        columnNumber: 15
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Documents/help/HRMS/src/components/Leaves/index.js",
                                lineNumber: 107,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Documents/help/HRMS/src/components/Leaves/index.js",
                        lineNumber: 98,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/Documents/help/HRMS/src/components/Leaves/index.js",
                lineNumber: 96,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/Documents/help/HRMS/src/components/Leaves/index.js",
        lineNumber: 50,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
const __TURBOPACK__default__export__ = Leaves;
}),
"[project]/Documents/help/HRMS/src/components/AdminPanel/index.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$help$2f$HRMS$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/help/HRMS/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$help$2f$HRMS$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/help/HRMS/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$help$2f$HRMS$2f$src$2f$firebase$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/help/HRMS/src/firebase.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$help$2f$HRMS$2f$node_modules$2f$firebase$2f$firestore$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/Documents/help/HRMS/node_modules/firebase/firestore/dist/index.mjs [app-ssr] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$help$2f$HRMS$2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/help/HRMS/node_modules/@firebase/firestore/dist/index.node.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$help$2f$HRMS$2f$src$2f$styles$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/help/HRMS/src/styles.js [app-ssr] (ecmascript)");
;
;
;
;
;
const AdminPanel = ({ fixedModule })=>{
    const [currentModule, setCurrentModule] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$help$2f$HRMS$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(fixedModule);
    const [allAttendance, setAllAttendance] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$help$2f$HRMS$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])([]);
    const [announcements, setAnnouncements] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$help$2f$HRMS$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])([]);
    const [newAnnouncement, setNewAnnouncement] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$help$2f$HRMS$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])('');
    const [workingDays, setWorkingDays] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$help$2f$HRMS$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])([
        'Monday',
        'Tuesday',
        'Wednesday',
        'Thursday',
        'Friday'
    ]);
    const [holidays, setHolidays] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$help$2f$HRMS$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])([]);
    const [newHoliday, setNewHoliday] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$help$2f$HRMS$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])({
        name: '',
        date: ''
    });
    const [leaveRequests, setLeaveRequests] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$help$2f$HRMS$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])([]);
    const [employees, setEmployees] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$help$2f$HRMS$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])([]);
    const [employeeFilter, setEmployeeFilter] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$help$2f$HRMS$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])('all');
    const [dateFilter, setDateFilter] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$help$2f$HRMS$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])('');
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$help$2f$HRMS$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        setCurrentModule(fixedModule);
    }, [
        fixedModule
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$help$2f$HRMS$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        const unsub = [
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$help$2f$HRMS$2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["onSnapshot"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$help$2f$HRMS$2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["query"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$help$2f$HRMS$2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["collection"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$help$2f$HRMS$2f$src$2f$firebase$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["db"], 'attendance'), (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$help$2f$HRMS$2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["orderBy"])('timestamp', 'desc'), (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$help$2f$HRMS$2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["limit"])(100)), (s)=>setAllAttendance(s.docs.map((d)=>({
                        id: d.id,
                        ...d.data()
                    })))),
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$help$2f$HRMS$2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["onSnapshot"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$help$2f$HRMS$2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["collection"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$help$2f$HRMS$2f$src$2f$firebase$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["db"], 'leaveRequests'), (s)=>setLeaveRequests(s.docs.map((d)=>({
                        id: d.id,
                        ...d.data()
                    })))),
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$help$2f$HRMS$2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["onSnapshot"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$help$2f$HRMS$2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["collection"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$help$2f$HRMS$2f$src$2f$firebase$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["db"], 'holidays'), (s)=>setHolidays(s.docs.map((d)=>({
                        id: d.id,
                        ...d.data()
                    })))),
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$help$2f$HRMS$2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["onSnapshot"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$help$2f$HRMS$2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["query"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$help$2f$HRMS$2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["collection"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$help$2f$HRMS$2f$src$2f$firebase$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["db"], 'announcements'), (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$help$2f$HRMS$2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["orderBy"])('date', 'desc'), (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$help$2f$HRMS$2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["limit"])(5)), (s)=>setAnnouncements(s.docs.map((d)=>({
                        id: d.id,
                        ...d.data()
                    })))),
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$help$2f$HRMS$2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["onSnapshot"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$help$2f$HRMS$2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["collection"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$help$2f$HRMS$2f$src$2f$firebase$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["db"], 'employees'), (s)=>setEmployees(s.docs.map((d)=>({
                        id: d.id,
                        ...d.data()
                    }))))
        ];
        return ()=>unsub.forEach((fn)=>fn());
    }, []);
    const moduleHeaderStyle = {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: '32px',
        paddingBottom: '20px',
        borderBottom: `1px solid ${__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$help$2f$HRMS$2f$src$2f$styles$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["tokens"].colors.border}`
    };
    const renderModule = ()=>{
        switch(currentModule){
            case 'leaves':
                const filteredLeaves = leaveRequests.filter((l)=>{
                    const matchesEmp = employeeFilter === 'all' || l.userEmail === employeeFilter;
                    return matchesEmp && l.status === 'pending';
                });
                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$help$2f$HRMS$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "animate-fade",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$help$2f$HRMS$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            style: moduleHeaderStyle,
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$help$2f$HRMS$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$help$2f$HRMS$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                            style: {
                                                fontSize: '24px',
                                                fontWeight: '800',
                                                color: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$help$2f$HRMS$2f$src$2f$styles$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["tokens"].colors.primary
                                            },
                                            children: "Leave Applications"
                                        }, void 0, false, {
                                            fileName: "[project]/Documents/help/HRMS/src/components/AdminPanel/index.js",
                                            lineNumber: 55,
                                            columnNumber: 17
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$help$2f$HRMS$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            style: {
                                                color: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$help$2f$HRMS$2f$src$2f$styles$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["tokens"].colors.textMuted,
                                                fontSize: '14px'
                                            },
                                            children: "Review and manage employee time-off requests."
                                        }, void 0, false, {
                                            fileName: "[project]/Documents/help/HRMS/src/components/AdminPanel/index.js",
                                            lineNumber: 56,
                                            columnNumber: 17
                                        }, ("TURBOPACK compile-time value", void 0))
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Documents/help/HRMS/src/components/AdminPanel/index.js",
                                    lineNumber: 54,
                                    columnNumber: 15
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$help$2f$HRMS$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    style: {
                                        display: 'flex',
                                        gap: '12px'
                                    },
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$help$2f$HRMS$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                        style: {
                                            ...__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$help$2f$HRMS$2f$src$2f$styles$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["styles"].input,
                                            width: '200px'
                                        },
                                        value: employeeFilter,
                                        onChange: (e)=>setEmployeeFilter(e.target.value),
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$help$2f$HRMS$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                value: "all",
                                                children: "All Employees"
                                            }, void 0, false, {
                                                fileName: "[project]/Documents/help/HRMS/src/components/AdminPanel/index.js",
                                                lineNumber: 64,
                                                columnNumber: 19
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            employees.map((emp)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$help$2f$HRMS$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                    value: emp.email,
                                                    children: emp.name
                                                }, emp.id, false, {
                                                    fileName: "[project]/Documents/help/HRMS/src/components/AdminPanel/index.js",
                                                    lineNumber: 66,
                                                    columnNumber: 21
                                                }, ("TURBOPACK compile-time value", void 0)))
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Documents/help/HRMS/src/components/AdminPanel/index.js",
                                        lineNumber: 59,
                                        columnNumber: 17
                                    }, ("TURBOPACK compile-time value", void 0))
                                }, void 0, false, {
                                    fileName: "[project]/Documents/help/HRMS/src/components/AdminPanel/index.js",
                                    lineNumber: 58,
                                    columnNumber: 15
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Documents/help/HRMS/src/components/AdminPanel/index.js",
                            lineNumber: 53,
                            columnNumber: 13
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$help$2f$HRMS$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            style: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$help$2f$HRMS$2f$src$2f$styles$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["styles"].card,
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$help$2f$HRMS$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("table", {
                                style: {
                                    width: '100%',
                                    borderCollapse: 'collapse'
                                },
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$help$2f$HRMS$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("thead", {
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$help$2f$HRMS$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$help$2f$HRMS$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                    style: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$help$2f$HRMS$2f$src$2f$styles$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["styles"].th,
                                                    children: "Employee"
                                                }, void 0, false, {
                                                    fileName: "[project]/Documents/help/HRMS/src/components/AdminPanel/index.js",
                                                    lineNumber: 75,
                                                    columnNumber: 21
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$help$2f$HRMS$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                    style: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$help$2f$HRMS$2f$src$2f$styles$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["styles"].th,
                                                    children: "Type"
                                                }, void 0, false, {
                                                    fileName: "[project]/Documents/help/HRMS/src/components/AdminPanel/index.js",
                                                    lineNumber: 76,
                                                    columnNumber: 21
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$help$2f$HRMS$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                    style: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$help$2f$HRMS$2f$src$2f$styles$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["styles"].th,
                                                    children: "Period"
                                                }, void 0, false, {
                                                    fileName: "[project]/Documents/help/HRMS/src/components/AdminPanel/index.js",
                                                    lineNumber: 77,
                                                    columnNumber: 21
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$help$2f$HRMS$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                    style: {
                                                        ...__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$help$2f$HRMS$2f$src$2f$styles$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["styles"].th,
                                                        textAlign: 'right'
                                                    },
                                                    children: "Actions"
                                                }, void 0, false, {
                                                    fileName: "[project]/Documents/help/HRMS/src/components/AdminPanel/index.js",
                                                    lineNumber: 78,
                                                    columnNumber: 21
                                                }, ("TURBOPACK compile-time value", void 0))
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/Documents/help/HRMS/src/components/AdminPanel/index.js",
                                            lineNumber: 74,
                                            columnNumber: 19
                                        }, ("TURBOPACK compile-time value", void 0))
                                    }, void 0, false, {
                                        fileName: "[project]/Documents/help/HRMS/src/components/AdminPanel/index.js",
                                        lineNumber: 73,
                                        columnNumber: 17
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$help$2f$HRMS$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("tbody", {
                                        children: [
                                            filteredLeaves.map((req)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$help$2f$HRMS$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$help$2f$HRMS$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                            style: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$help$2f$HRMS$2f$src$2f$styles$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["styles"].td,
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$help$2f$HRMS$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    style: {
                                                                        fontWeight: '600',
                                                                        fontSize: '15px',
                                                                        color: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$help$2f$HRMS$2f$src$2f$styles$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["tokens"].colors.primary
                                                                    },
                                                                    children: req.userEmail?.split('@')[0]
                                                                }, void 0, false, {
                                                                    fileName: "[project]/Documents/help/HRMS/src/components/AdminPanel/index.js",
                                                                    lineNumber: 85,
                                                                    columnNumber: 25
                                                                }, ("TURBOPACK compile-time value", void 0)),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$help$2f$HRMS$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    style: {
                                                                        fontSize: '12px',
                                                                        color: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$help$2f$HRMS$2f$src$2f$styles$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["tokens"].colors.textMuted
                                                                    },
                                                                    children: req.userEmail
                                                                }, void 0, false, {
                                                                    fileName: "[project]/Documents/help/HRMS/src/components/AdminPanel/index.js",
                                                                    lineNumber: 86,
                                                                    columnNumber: 25
                                                                }, ("TURBOPACK compile-time value", void 0))
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/Documents/help/HRMS/src/components/AdminPanel/index.js",
                                                            lineNumber: 84,
                                                            columnNumber: 23
                                                        }, ("TURBOPACK compile-time value", void 0)),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$help$2f$HRMS$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                            style: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$help$2f$HRMS$2f$src$2f$styles$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["styles"].td,
                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$help$2f$HRMS$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                style: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$help$2f$HRMS$2f$src$2f$styles$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["styles"].badge('primary'),
                                                                children: req.type
                                                            }, void 0, false, {
                                                                fileName: "[project]/Documents/help/HRMS/src/components/AdminPanel/index.js",
                                                                lineNumber: 89,
                                                                columnNumber: 25
                                                            }, ("TURBOPACK compile-time value", void 0))
                                                        }, void 0, false, {
                                                            fileName: "[project]/Documents/help/HRMS/src/components/AdminPanel/index.js",
                                                            lineNumber: 88,
                                                            columnNumber: 23
                                                        }, ("TURBOPACK compile-time value", void 0)),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$help$2f$HRMS$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                            style: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$help$2f$HRMS$2f$src$2f$styles$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["styles"].td,
                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$help$2f$HRMS$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                style: {
                                                                    fontSize: '14px'
                                                                },
                                                                children: [
                                                                    req.start,
                                                                    " to ",
                                                                    req.end
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/Documents/help/HRMS/src/components/AdminPanel/index.js",
                                                                lineNumber: 92,
                                                                columnNumber: 25
                                                            }, ("TURBOPACK compile-time value", void 0))
                                                        }, void 0, false, {
                                                            fileName: "[project]/Documents/help/HRMS/src/components/AdminPanel/index.js",
                                                            lineNumber: 91,
                                                            columnNumber: 23
                                                        }, ("TURBOPACK compile-time value", void 0)),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$help$2f$HRMS$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                            style: {
                                                                ...__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$help$2f$HRMS$2f$src$2f$styles$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["styles"].td,
                                                                textAlign: 'right'
                                                            },
                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$help$2f$HRMS$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                style: {
                                                                    display: 'flex',
                                                                    gap: '8px',
                                                                    justifyContent: 'flex-end'
                                                                },
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$help$2f$HRMS$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                        onClick: ()=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$help$2f$HRMS$2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["updateDoc"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$help$2f$HRMS$2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["doc"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$help$2f$HRMS$2f$src$2f$firebase$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["db"], 'leaveRequests', req.id), {
                                                                                status: 'approved'
                                                                            }),
                                                                        style: {
                                                                            ...__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$help$2f$HRMS$2f$src$2f$styles$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["styles"].button.primary,
                                                                            padding: '6px 14px',
                                                                            fontSize: '13px',
                                                                            backgroundColor: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$help$2f$HRMS$2f$src$2f$styles$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["tokens"].colors.success
                                                                        },
                                                                        children: "Approve"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/Documents/help/HRMS/src/components/AdminPanel/index.js",
                                                                        lineNumber: 96,
                                                                        columnNumber: 27
                                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$help$2f$HRMS$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                        onClick: ()=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$help$2f$HRMS$2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["updateDoc"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$help$2f$HRMS$2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["doc"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$help$2f$HRMS$2f$src$2f$firebase$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["db"], 'leaveRequests', req.id), {
                                                                                status: 'rejected'
                                                                            }),
                                                                        style: {
                                                                            ...__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$help$2f$HRMS$2f$src$2f$styles$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["styles"].button.outline,
                                                                            padding: '6px 14px',
                                                                            fontSize: '13px',
                                                                            color: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$help$2f$HRMS$2f$src$2f$styles$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["tokens"].colors.error,
                                                                            borderColor: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$help$2f$HRMS$2f$src$2f$styles$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["tokens"].colors.error
                                                                        },
                                                                        children: "Decline"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/Documents/help/HRMS/src/components/AdminPanel/index.js",
                                                                        lineNumber: 100,
                                                                        columnNumber: 27
                                                                    }, ("TURBOPACK compile-time value", void 0))
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/Documents/help/HRMS/src/components/AdminPanel/index.js",
                                                                lineNumber: 95,
                                                                columnNumber: 25
                                                            }, ("TURBOPACK compile-time value", void 0))
                                                        }, void 0, false, {
                                                            fileName: "[project]/Documents/help/HRMS/src/components/AdminPanel/index.js",
                                                            lineNumber: 94,
                                                            columnNumber: 23
                                                        }, ("TURBOPACK compile-time value", void 0))
                                                    ]
                                                }, req.id, true, {
                                                    fileName: "[project]/Documents/help/HRMS/src/components/AdminPanel/index.js",
                                                    lineNumber: 83,
                                                    columnNumber: 21
                                                }, ("TURBOPACK compile-time value", void 0))),
                                            filteredLeaves.length === 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$help$2f$HRMS$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$help$2f$HRMS$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                    colSpan: "4",
                                                    style: {
                                                        textAlign: 'center',
                                                        padding: '60px',
                                                        color: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$help$2f$HRMS$2f$src$2f$styles$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["tokens"].colors.textMuted
                                                    },
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$help$2f$HRMS$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "material-symbols-outlined",
                                                            style: {
                                                                fontSize: '48px',
                                                                color: '#E5E7EB',
                                                                marginBottom: '12px',
                                                                display: 'block'
                                                            },
                                                            children: "done_all"
                                                        }, void 0, false, {
                                                            fileName: "[project]/Documents/help/HRMS/src/components/AdminPanel/index.js",
                                                            lineNumber: 111,
                                                            columnNumber: 25
                                                        }, ("TURBOPACK compile-time value", void 0)),
                                                        employeeFilter === 'all' ? 'No pending leave requests.' : 'No pending requests for this employee.'
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/Documents/help/HRMS/src/components/AdminPanel/index.js",
                                                    lineNumber: 110,
                                                    columnNumber: 23
                                                }, ("TURBOPACK compile-time value", void 0))
                                            }, void 0, false, {
                                                fileName: "[project]/Documents/help/HRMS/src/components/AdminPanel/index.js",
                                                lineNumber: 109,
                                                columnNumber: 21
                                            }, ("TURBOPACK compile-time value", void 0))
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Documents/help/HRMS/src/components/AdminPanel/index.js",
                                        lineNumber: 81,
                                        columnNumber: 17
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Documents/help/HRMS/src/components/AdminPanel/index.js",
                                lineNumber: 72,
                                columnNumber: 15
                            }, ("TURBOPACK compile-time value", void 0))
                        }, void 0, false, {
                            fileName: "[project]/Documents/help/HRMS/src/components/AdminPanel/index.js",
                            lineNumber: 71,
                            columnNumber: 13
                        }, ("TURBOPACK compile-time value", void 0))
                    ]
                }, void 0, true, {
                    fileName: "[project]/Documents/help/HRMS/src/components/AdminPanel/index.js",
                    lineNumber: 52,
                    columnNumber: 11
                }, ("TURBOPACK compile-time value", void 0));
            case 'attendance':
                // Grouping attendance by date and email
                const groupedAttendance = allAttendance.reduce((acc, log)=>{
                    if (!log.timestamp) return acc;
                    const dateStr = log.timestamp.toDate().toLocaleDateString(undefined, {
                        month: 'short',
                        day: 'numeric',
                        year: 'numeric'
                    });
                    const key = `${log.userEmail}_${dateStr}`;
                    if (!acc[key]) {
                        acc[key] = {
                            userEmail: log.userEmail,
                            date: dateStr,
                            in: null,
                            out: null,
                            rawDate: log.timestamp.toDate()
                        };
                    }
                    const timeStr = log.timestamp.toDate().toLocaleTimeString(undefined, {
                        hour: '2-digit',
                        minute: '2-digit'
                    });
                    if (log.type === 'in') acc[key].in = timeStr;
                    if (log.type === 'out') acc[key].out = timeStr;
                    return acc;
                }, {});
                const attendanceRows = Object.values(groupedAttendance).filter((log)=>{
                    const matchesEmp = employeeFilter === 'all' || log.userEmail === employeeFilter;
                    // dateFilter is YYYY-MM-DD, our dateStr is MMM DD, YYYY. Let's adjust filter logic.
                    const rawDateStr = log.rawDate.toISOString().split('T')[0];
                    const matchesDate = !dateFilter || rawDateStr === dateFilter;
                    return matchesEmp && matchesDate;
                }).sort((a, b)=>b.rawDate - a.rawDate);
                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$help$2f$HRMS$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "animate-fade",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$help$2f$HRMS$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            style: moduleHeaderStyle,
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$help$2f$HRMS$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$help$2f$HRMS$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                            style: {
                                                fontSize: '24px',
                                                fontWeight: '800',
                                                color: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$help$2f$HRMS$2f$src$2f$styles$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["tokens"].colors.primary,
                                                letterSpacing: '-0.02em'
                                            },
                                            children: "Attendance Log"
                                        }, void 0, false, {
                                            fileName: "[project]/Documents/help/HRMS/src/components/AdminPanel/index.js",
                                            lineNumber: 159,
                                            columnNumber: 17
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$help$2f$HRMS$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            style: {
                                                color: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$help$2f$HRMS$2f$src$2f$styles$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["tokens"].colors.secondary,
                                                fontSize: '14px',
                                                marginTop: '4px'
                                            },
                                            children: "A consolidated view of daily workforce activity."
                                        }, void 0, false, {
                                            fileName: "[project]/Documents/help/HRMS/src/components/AdminPanel/index.js",
                                            lineNumber: 160,
                                            columnNumber: 17
                                        }, ("TURBOPACK compile-time value", void 0))
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Documents/help/HRMS/src/components/AdminPanel/index.js",
                                    lineNumber: 158,
                                    columnNumber: 15
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$help$2f$HRMS$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    style: {
                                        display: 'flex',
                                        gap: '12px',
                                        alignItems: 'center'
                                    },
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$help$2f$HRMS$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            style: {
                                                position: 'relative'
                                            },
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$help$2f$HRMS$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                    type: "date",
                                                    style: {
                                                        ...__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$help$2f$HRMS$2f$src$2f$styles$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["styles"].input,
                                                        width: '160px',
                                                        paddingLeft: '40px'
                                                    },
                                                    value: dateFilter,
                                                    onChange: (e)=>setDateFilter(e.target.value)
                                                }, void 0, false, {
                                                    fileName: "[project]/Documents/help/HRMS/src/components/AdminPanel/index.js",
                                                    lineNumber: 164,
                                                    columnNumber: 19
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$help$2f$HRMS$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "material-symbols-outlined",
                                                    style: {
                                                        position: 'absolute',
                                                        left: '12px',
                                                        top: '50%',
                                                        transform: 'translateY(-50%)',
                                                        fontSize: '18px',
                                                        color: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$help$2f$HRMS$2f$src$2f$styles$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["tokens"].colors.secondary
                                                    },
                                                    children: "calendar_today"
                                                }, void 0, false, {
                                                    fileName: "[project]/Documents/help/HRMS/src/components/AdminPanel/index.js",
                                                    lineNumber: 170,
                                                    columnNumber: 19
                                                }, ("TURBOPACK compile-time value", void 0))
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/Documents/help/HRMS/src/components/AdminPanel/index.js",
                                            lineNumber: 163,
                                            columnNumber: 17
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$help$2f$HRMS$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                            style: {
                                                ...__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$help$2f$HRMS$2f$src$2f$styles$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["styles"].input,
                                                width: '200px'
                                            },
                                            value: employeeFilter,
                                            onChange: (e)=>setEmployeeFilter(e.target.value),
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$help$2f$HRMS$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                    value: "all",
                                                    children: "Global View"
                                                }, void 0, false, {
                                                    fileName: "[project]/Documents/help/HRMS/src/components/AdminPanel/index.js",
                                                    lineNumber: 177,
                                                    columnNumber: 19
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                employees.map((emp)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$help$2f$HRMS$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                        value: emp.email,
                                                        children: emp.name
                                                    }, emp.id, false, {
                                                        fileName: "[project]/Documents/help/HRMS/src/components/AdminPanel/index.js",
                                                        lineNumber: 179,
                                                        columnNumber: 21
                                                    }, ("TURBOPACK compile-time value", void 0)))
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/Documents/help/HRMS/src/components/AdminPanel/index.js",
                                            lineNumber: 172,
                                            columnNumber: 17
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$help$2f$HRMS$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            onClick: ()=>alert(`Generating CSV for export...`),
                                            style: {
                                                ...__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$help$2f$HRMS$2f$src$2f$styles$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["styles"].button.outline,
                                                padding: '10px 16px'
                                            },
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$help$2f$HRMS$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "material-symbols-outlined",
                                                style: {
                                                    fontSize: '18px'
                                                },
                                                children: "ios_share"
                                            }, void 0, false, {
                                                fileName: "[project]/Documents/help/HRMS/src/components/AdminPanel/index.js",
                                                lineNumber: 186,
                                                columnNumber: 19
                                            }, ("TURBOPACK compile-time value", void 0))
                                        }, void 0, false, {
                                            fileName: "[project]/Documents/help/HRMS/src/components/AdminPanel/index.js",
                                            lineNumber: 182,
                                            columnNumber: 17
                                        }, ("TURBOPACK compile-time value", void 0))
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Documents/help/HRMS/src/components/AdminPanel/index.js",
                                    lineNumber: 162,
                                    columnNumber: 15
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Documents/help/HRMS/src/components/AdminPanel/index.js",
                            lineNumber: 157,
                            columnNumber: 13
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$help$2f$HRMS$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            style: {
                                ...__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$help$2f$HRMS$2f$src$2f$styles$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["styles"].card,
                                padding: '0',
                                overflow: 'hidden'
                            },
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$help$2f$HRMS$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("table", {
                                style: {
                                    width: '100%',
                                    borderCollapse: 'collapse'
                                },
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$help$2f$HRMS$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("thead", {
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$help$2f$HRMS$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                            style: {
                                                backgroundColor: '#F8FAFC'
                                            },
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$help$2f$HRMS$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                    style: {
                                                        ...__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$help$2f$HRMS$2f$src$2f$styles$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["styles"].th,
                                                        paddingLeft: '32px'
                                                    },
                                                    children: "Member"
                                                }, void 0, false, {
                                                    fileName: "[project]/Documents/help/HRMS/src/components/AdminPanel/index.js",
                                                    lineNumber: 195,
                                                    columnNumber: 21
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$help$2f$HRMS$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                    style: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$help$2f$HRMS$2f$src$2f$styles$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["styles"].th,
                                                    children: "Date"
                                                }, void 0, false, {
                                                    fileName: "[project]/Documents/help/HRMS/src/components/AdminPanel/index.js",
                                                    lineNumber: 196,
                                                    columnNumber: 21
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$help$2f$HRMS$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                    style: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$help$2f$HRMS$2f$src$2f$styles$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["styles"].th,
                                                    children: "Timeline (In/Out)"
                                                }, void 0, false, {
                                                    fileName: "[project]/Documents/help/HRMS/src/components/AdminPanel/index.js",
                                                    lineNumber: 197,
                                                    columnNumber: 21
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$help$2f$HRMS$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                    style: {
                                                        ...__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$help$2f$HRMS$2f$src$2f$styles$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["styles"].th,
                                                        textAlign: 'right',
                                                        paddingRight: '32px'
                                                    },
                                                    children: "Verification"
                                                }, void 0, false, {
                                                    fileName: "[project]/Documents/help/HRMS/src/components/AdminPanel/index.js",
                                                    lineNumber: 198,
                                                    columnNumber: 21
                                                }, ("TURBOPACK compile-time value", void 0))
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/Documents/help/HRMS/src/components/AdminPanel/index.js",
                                            lineNumber: 194,
                                            columnNumber: 19
                                        }, ("TURBOPACK compile-time value", void 0))
                                    }, void 0, false, {
                                        fileName: "[project]/Documents/help/HRMS/src/components/AdminPanel/index.js",
                                        lineNumber: 193,
                                        columnNumber: 17
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$help$2f$HRMS$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("tbody", {
                                        children: [
                                            attendanceRows.map((row, idx)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$help$2f$HRMS$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                                    style: {
                                                        transition: 'background-color 0.2s ease',
                                                        borderBottom: idx === attendanceRows.length - 1 ? 'none' : `1px solid ${__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$help$2f$HRMS$2f$src$2f$styles$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["tokens"].colors.border}`
                                                    },
                                                    onMouseOver: (e)=>e.currentTarget.style.backgroundColor = '#F9FAFB',
                                                    onMouseOut: (e)=>e.currentTarget.style.backgroundColor = 'transparent',
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$help$2f$HRMS$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                            style: {
                                                                ...__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$help$2f$HRMS$2f$src$2f$styles$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["styles"].td,
                                                                paddingLeft: '32px'
                                                            },
                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$help$2f$HRMS$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                style: {
                                                                    display: 'flex',
                                                                    alignItems: 'center',
                                                                    gap: '12px'
                                                                },
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$help$2f$HRMS$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                        style: {
                                                                            width: '36px',
                                                                            height: '36px',
                                                                            borderRadius: '50%',
                                                                            background: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$help$2f$HRMS$2f$src$2f$styles$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["tokens"].colors.accent + '10',
                                                                            color: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$help$2f$HRMS$2f$src$2f$styles$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["tokens"].colors.accent,
                                                                            display: 'flex',
                                                                            alignItems: 'center',
                                                                            justifyContent: 'center',
                                                                            fontWeight: '700',
                                                                            fontSize: '13px'
                                                                        },
                                                                        children: row.userEmail?.charAt(0).toUpperCase()
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/Documents/help/HRMS/src/components/AdminPanel/index.js",
                                                                        lineNumber: 209,
                                                                        columnNumber: 27
                                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$help$2f$HRMS$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                        children: [
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$help$2f$HRMS$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                style: {
                                                                                    fontWeight: '700',
                                                                                    fontSize: '14px',
                                                                                    color: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$help$2f$HRMS$2f$src$2f$styles$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["tokens"].colors.primary
                                                                                },
                                                                                children: row.userEmail?.split('@')[0]
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/Documents/help/HRMS/src/components/AdminPanel/index.js",
                                                                                lineNumber: 213,
                                                                                columnNumber: 29
                                                                            }, ("TURBOPACK compile-time value", void 0)),
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$help$2f$HRMS$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                style: {
                                                                                    fontSize: '12px',
                                                                                    color: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$help$2f$HRMS$2f$src$2f$styles$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["tokens"].colors.secondary
                                                                                },
                                                                                children: row.userEmail
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/Documents/help/HRMS/src/components/AdminPanel/index.js",
                                                                                lineNumber: 214,
                                                                                columnNumber: 29
                                                                            }, ("TURBOPACK compile-time value", void 0))
                                                                        ]
                                                                    }, void 0, true, {
                                                                        fileName: "[project]/Documents/help/HRMS/src/components/AdminPanel/index.js",
                                                                        lineNumber: 212,
                                                                        columnNumber: 27
                                                                    }, ("TURBOPACK compile-time value", void 0))
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/Documents/help/HRMS/src/components/AdminPanel/index.js",
                                                                lineNumber: 208,
                                                                columnNumber: 25
                                                            }, ("TURBOPACK compile-time value", void 0))
                                                        }, void 0, false, {
                                                            fileName: "[project]/Documents/help/HRMS/src/components/AdminPanel/index.js",
                                                            lineNumber: 207,
                                                            columnNumber: 23
                                                        }, ("TURBOPACK compile-time value", void 0)),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$help$2f$HRMS$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                            style: {
                                                                ...__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$help$2f$HRMS$2f$src$2f$styles$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["styles"].td,
                                                                color: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$help$2f$HRMS$2f$src$2f$styles$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["tokens"].colors.primary,
                                                                fontWeight: '500'
                                                            },
                                                            children: row.date
                                                        }, void 0, false, {
                                                            fileName: "[project]/Documents/help/HRMS/src/components/AdminPanel/index.js",
                                                            lineNumber: 218,
                                                            columnNumber: 23
                                                        }, ("TURBOPACK compile-time value", void 0)),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$help$2f$HRMS$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                            style: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$help$2f$HRMS$2f$src$2f$styles$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["styles"].td,
                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$help$2f$HRMS$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                style: {
                                                                    display: 'flex',
                                                                    alignItems: 'center',
                                                                    gap: '12px'
                                                                },
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$help$2f$HRMS$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                        style: {
                                                                            padding: '6px 12px',
                                                                            background: row.in ? '#ECFDF5' : '#F1F5F9',
                                                                            color: row.in ? __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$help$2f$HRMS$2f$src$2f$styles$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["tokens"].colors.success : __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$help$2f$HRMS$2f$src$2f$styles$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["tokens"].colors.secondary,
                                                                            borderRadius: '8px',
                                                                            fontSize: '13px',
                                                                            fontWeight: '700',
                                                                            border: `1px solid ${row.in ? '#D1FAE5' : __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$help$2f$HRMS$2f$src$2f$styles$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["tokens"].colors.border}`
                                                                        },
                                                                        children: row.in || '--:--'
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/Documents/help/HRMS/src/components/AdminPanel/index.js",
                                                                        lineNumber: 223,
                                                                        columnNumber: 27
                                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$help$2f$HRMS$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                        className: "material-symbols-outlined",
                                                                        style: {
                                                                            fontSize: '16px',
                                                                            color: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$help$2f$HRMS$2f$src$2f$styles$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["tokens"].colors.border
                                                                        },
                                                                        children: "east"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/Documents/help/HRMS/src/components/AdminPanel/index.js",
                                                                        lineNumber: 234,
                                                                        columnNumber: 27
                                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$help$2f$HRMS$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                        style: {
                                                                            padding: '6px 12px',
                                                                            background: row.out ? '#F1F5F9' : '#FFF1F2',
                                                                            color: row.out ? __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$help$2f$HRMS$2f$src$2f$styles$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["tokens"].colors.secondary : __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$help$2f$HRMS$2f$src$2f$styles$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["tokens"].colors.error,
                                                                            borderRadius: '8px',
                                                                            fontSize: '13px',
                                                                            fontWeight: '700',
                                                                            border: `1px solid ${row.out ? __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$help$2f$HRMS$2f$src$2f$styles$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["tokens"].colors.border : '#FFE4E6'}`
                                                                        },
                                                                        children: row.out || 'Active'
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/Documents/help/HRMS/src/components/AdminPanel/index.js",
                                                                        lineNumber: 235,
                                                                        columnNumber: 27
                                                                    }, ("TURBOPACK compile-time value", void 0))
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/Documents/help/HRMS/src/components/AdminPanel/index.js",
                                                                lineNumber: 222,
                                                                columnNumber: 25
                                                            }, ("TURBOPACK compile-time value", void 0))
                                                        }, void 0, false, {
                                                            fileName: "[project]/Documents/help/HRMS/src/components/AdminPanel/index.js",
                                                            lineNumber: 221,
                                                            columnNumber: 23
                                                        }, ("TURBOPACK compile-time value", void 0)),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$help$2f$HRMS$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                            style: {
                                                                ...__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$help$2f$HRMS$2f$src$2f$styles$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["styles"].td,
                                                                textAlign: 'right',
                                                                paddingRight: '32px'
                                                            },
                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$help$2f$HRMS$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                style: {
                                                                    ...__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$help$2f$HRMS$2f$src$2f$styles$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["styles"].badge('primary'),
                                                                    backgroundColor: '#EEF2FF',
                                                                    color: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$help$2f$HRMS$2f$src$2f$styles$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["tokens"].colors.accent,
                                                                    borderColor: '#E0E7FF'
                                                                },
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$help$2f$HRMS$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                        className: "material-symbols-outlined",
                                                                        style: {
                                                                            fontSize: '14px'
                                                                        },
                                                                        children: "verified_user"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/Documents/help/HRMS/src/components/AdminPanel/index.js",
                                                                        lineNumber: 250,
                                                                        columnNumber: 27
                                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                                    "Secured"
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/Documents/help/HRMS/src/components/AdminPanel/index.js",
                                                                lineNumber: 249,
                                                                columnNumber: 25
                                                            }, ("TURBOPACK compile-time value", void 0))
                                                        }, void 0, false, {
                                                            fileName: "[project]/Documents/help/HRMS/src/components/AdminPanel/index.js",
                                                            lineNumber: 248,
                                                            columnNumber: 23
                                                        }, ("TURBOPACK compile-time value", void 0))
                                                    ]
                                                }, idx, true, {
                                                    fileName: "[project]/Documents/help/HRMS/src/components/AdminPanel/index.js",
                                                    lineNumber: 203,
                                                    columnNumber: 21
                                                }, ("TURBOPACK compile-time value", void 0))),
                                            attendanceRows.length === 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$help$2f$HRMS$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$help$2f$HRMS$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                    colSpan: "4",
                                                    style: {
                                                        textAlign: 'center',
                                                        padding: '80px',
                                                        color: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$help$2f$HRMS$2f$src$2f$styles$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["tokens"].colors.secondary
                                                    },
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$help$2f$HRMS$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            style: {
                                                                width: '64px',
                                                                height: '64px',
                                                                background: '#F1F5F9',
                                                                borderRadius: '50%',
                                                                display: 'flex',
                                                                alignItems: 'center',
                                                                justifyContent: 'center',
                                                                margin: '0 auto 16px'
                                                            },
                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$help$2f$HRMS$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: "material-symbols-outlined",
                                                                style: {
                                                                    fontSize: '32px',
                                                                    color: '#CBD5E1'
                                                                },
                                                                children: "history"
                                                            }, void 0, false, {
                                                                fileName: "[project]/Documents/help/HRMS/src/components/AdminPanel/index.js",
                                                                lineNumber: 260,
                                                                columnNumber: 27
                                                            }, ("TURBOPACK compile-time value", void 0))
                                                        }, void 0, false, {
                                                            fileName: "[project]/Documents/help/HRMS/src/components/AdminPanel/index.js",
                                                            lineNumber: 259,
                                                            columnNumber: 25
                                                        }, ("TURBOPACK compile-time value", void 0)),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$help$2f$HRMS$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            style: {
                                                                fontWeight: '700',
                                                                fontSize: '16px',
                                                                color: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$help$2f$HRMS$2f$src$2f$styles$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["tokens"].colors.primary
                                                            },
                                                            children: "No Activity Logs"
                                                        }, void 0, false, {
                                                            fileName: "[project]/Documents/help/HRMS/src/components/AdminPanel/index.js",
                                                            lineNumber: 262,
                                                            columnNumber: 25
                                                        }, ("TURBOPACK compile-time value", void 0)),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$help$2f$HRMS$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            style: {
                                                                fontSize: '14px',
                                                                marginTop: '4px'
                                                            },
                                                            children: "Adjust your filters to see historical data."
                                                        }, void 0, false, {
                                                            fileName: "[project]/Documents/help/HRMS/src/components/AdminPanel/index.js",
                                                            lineNumber: 263,
                                                            columnNumber: 25
                                                        }, ("TURBOPACK compile-time value", void 0))
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/Documents/help/HRMS/src/components/AdminPanel/index.js",
                                                    lineNumber: 258,
                                                    columnNumber: 23
                                                }, ("TURBOPACK compile-time value", void 0))
                                            }, void 0, false, {
                                                fileName: "[project]/Documents/help/HRMS/src/components/AdminPanel/index.js",
                                                lineNumber: 257,
                                                columnNumber: 21
                                            }, ("TURBOPACK compile-time value", void 0))
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Documents/help/HRMS/src/components/AdminPanel/index.js",
                                        lineNumber: 201,
                                        columnNumber: 17
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Documents/help/HRMS/src/components/AdminPanel/index.js",
                                lineNumber: 192,
                                columnNumber: 15
                            }, ("TURBOPACK compile-time value", void 0))
                        }, void 0, false, {
                            fileName: "[project]/Documents/help/HRMS/src/components/AdminPanel/index.js",
                            lineNumber: 191,
                            columnNumber: 13
                        }, ("TURBOPACK compile-time value", void 0))
                    ]
                }, void 0, true, {
                    fileName: "[project]/Documents/help/HRMS/src/components/AdminPanel/index.js",
                    lineNumber: 156,
                    columnNumber: 11
                }, ("TURBOPACK compile-time value", void 0));
            case 'broadcast':
                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$help$2f$HRMS$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "animate-fade",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$help$2f$HRMS$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            style: moduleHeaderStyle,
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$help$2f$HRMS$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$help$2f$HRMS$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                        style: {
                                            fontSize: '24px',
                                            fontWeight: '800',
                                            color: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$help$2f$HRMS$2f$src$2f$styles$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["tokens"].colors.primary
                                        },
                                        children: "Company Broadcasts"
                                    }, void 0, false, {
                                        fileName: "[project]/Documents/help/HRMS/src/components/AdminPanel/index.js",
                                        lineNumber: 277,
                                        columnNumber: 17
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$help$2f$HRMS$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        style: {
                                            color: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$help$2f$HRMS$2f$src$2f$styles$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["tokens"].colors.textMuted,
                                            fontSize: '14px'
                                        },
                                        children: "Send announcements and alerts to all staff members."
                                    }, void 0, false, {
                                        fileName: "[project]/Documents/help/HRMS/src/components/AdminPanel/index.js",
                                        lineNumber: 278,
                                        columnNumber: 17
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Documents/help/HRMS/src/components/AdminPanel/index.js",
                                lineNumber: 276,
                                columnNumber: 15
                            }, ("TURBOPACK compile-time value", void 0))
                        }, void 0, false, {
                            fileName: "[project]/Documents/help/HRMS/src/components/AdminPanel/index.js",
                            lineNumber: 275,
                            columnNumber: 13
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$help$2f$HRMS$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            style: {
                                display: 'grid',
                                gridTemplateColumns: '1fr 1fr',
                                gap: '32px'
                            },
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$help$2f$HRMS$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    style: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$help$2f$HRMS$2f$src$2f$styles$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["styles"].card,
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$help$2f$HRMS$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                            style: {
                                                fontSize: '18px',
                                                fontWeight: '700',
                                                marginBottom: '24px'
                                            },
                                            children: "Draft Announcement"
                                        }, void 0, false, {
                                            fileName: "[project]/Documents/help/HRMS/src/components/AdminPanel/index.js",
                                            lineNumber: 283,
                                            columnNumber: 17
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$help$2f$HRMS$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("textarea", {
                                            style: {
                                                ...__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$help$2f$HRMS$2f$src$2f$styles$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["styles"].input,
                                                minHeight: '160px',
                                                marginBottom: '20px',
                                                resize: 'none'
                                            },
                                            placeholder: "Type your message here...",
                                            value: newAnnouncement,
                                            onChange: (e)=>setNewAnnouncement(e.target.value)
                                        }, void 0, false, {
                                            fileName: "[project]/Documents/help/HRMS/src/components/AdminPanel/index.js",
                                            lineNumber: 284,
                                            columnNumber: 17
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$help$2f$HRMS$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            onClick: async ()=>{
                                                if (!newAnnouncement.trim()) return;
                                                await (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$help$2f$HRMS$2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["addDoc"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$help$2f$HRMS$2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["collection"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$help$2f$HRMS$2f$src$2f$firebase$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["db"], 'announcements'), {
                                                    content: newAnnouncement,
                                                    date: new Date().toISOString()
                                                });
                                                setNewAnnouncement('');
                                            },
                                            style: {
                                                ...__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$help$2f$HRMS$2f$src$2f$styles$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["styles"].button.primary,
                                                width: '100%',
                                                justifyContent: 'center',
                                                padding: '12px'
                                            },
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$help$2f$HRMS$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "material-symbols-outlined",
                                                    style: {
                                                        fontSize: '20px'
                                                    },
                                                    children: "send"
                                                }, void 0, false, {
                                                    fileName: "[project]/Documents/help/HRMS/src/components/AdminPanel/index.js",
                                                    lineNumber: 298,
                                                    columnNumber: 19
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                " Dispatch Notice"
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/Documents/help/HRMS/src/components/AdminPanel/index.js",
                                            lineNumber: 290,
                                            columnNumber: 17
                                        }, ("TURBOPACK compile-time value", void 0))
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Documents/help/HRMS/src/components/AdminPanel/index.js",
                                    lineNumber: 282,
                                    columnNumber: 15
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$help$2f$HRMS$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    style: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$help$2f$HRMS$2f$src$2f$styles$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["styles"].card,
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$help$2f$HRMS$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                            style: {
                                                fontSize: '18px',
                                                fontWeight: '700',
                                                marginBottom: '24px'
                                            },
                                            children: "Recent Broadcasts"
                                        }, void 0, false, {
                                            fileName: "[project]/Documents/help/HRMS/src/components/AdminPanel/index.js",
                                            lineNumber: 302,
                                            columnNumber: 17
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$help$2f$HRMS$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            style: {
                                                display: 'flex',
                                                flexDirection: 'column',
                                                gap: '16px'
                                            },
                                            children: [
                                                announcements.map((a)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$help$2f$HRMS$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        style: {
                                                            padding: '16px',
                                                            borderRadius: '12px',
                                                            border: `1px solid ${__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$help$2f$HRMS$2f$src$2f$styles$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["tokens"].colors.border}`,
                                                            backgroundColor: '#F9FAFB'
                                                        },
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$help$2f$HRMS$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                style: {
                                                                    fontWeight: '600',
                                                                    color: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$help$2f$HRMS$2f$src$2f$styles$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["tokens"].colors.primary,
                                                                    fontSize: '14px',
                                                                    marginBottom: '6px'
                                                                },
                                                                children: a.content
                                                            }, void 0, false, {
                                                                fileName: "[project]/Documents/help/HRMS/src/components/AdminPanel/index.js",
                                                                lineNumber: 306,
                                                                columnNumber: 23
                                                            }, ("TURBOPACK compile-time value", void 0)),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$help$2f$HRMS$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                style: {
                                                                    fontSize: '12px',
                                                                    color: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$help$2f$HRMS$2f$src$2f$styles$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["tokens"].colors.textMuted
                                                                },
                                                                children: [
                                                                    "Sent on ",
                                                                    new Date(a.date).toLocaleDateString()
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/Documents/help/HRMS/src/components/AdminPanel/index.js",
                                                                lineNumber: 307,
                                                                columnNumber: 23
                                                            }, ("TURBOPACK compile-time value", void 0))
                                                        ]
                                                    }, a.id, true, {
                                                        fileName: "[project]/Documents/help/HRMS/src/components/AdminPanel/index.js",
                                                        lineNumber: 305,
                                                        columnNumber: 21
                                                    }, ("TURBOPACK compile-time value", void 0))),
                                                announcements.length === 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$help$2f$HRMS$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    style: {
                                                        textAlign: 'center',
                                                        padding: '40px',
                                                        color: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$help$2f$HRMS$2f$src$2f$styles$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["tokens"].colors.textMuted
                                                    },
                                                    children: "No history found."
                                                }, void 0, false, {
                                                    fileName: "[project]/Documents/help/HRMS/src/components/AdminPanel/index.js",
                                                    lineNumber: 311,
                                                    columnNumber: 21
                                                }, ("TURBOPACK compile-time value", void 0))
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/Documents/help/HRMS/src/components/AdminPanel/index.js",
                                            lineNumber: 303,
                                            columnNumber: 17
                                        }, ("TURBOPACK compile-time value", void 0))
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Documents/help/HRMS/src/components/AdminPanel/index.js",
                                    lineNumber: 301,
                                    columnNumber: 15
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Documents/help/HRMS/src/components/AdminPanel/index.js",
                            lineNumber: 281,
                            columnNumber: 13
                        }, ("TURBOPACK compile-time value", void 0))
                    ]
                }, void 0, true, {
                    fileName: "[project]/Documents/help/HRMS/src/components/AdminPanel/index.js",
                    lineNumber: 274,
                    columnNumber: 11
                }, ("TURBOPACK compile-time value", void 0));
            case 'policies':
                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$help$2f$HRMS$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "animate-fade",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$help$2f$HRMS$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            style: moduleHeaderStyle,
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$help$2f$HRMS$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$help$2f$HRMS$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                        style: {
                                            fontSize: '24px',
                                            fontWeight: '800',
                                            color: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$help$2f$HRMS$2f$src$2f$styles$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["tokens"].colors.primary
                                        },
                                        children: "Company Policies"
                                    }, void 0, false, {
                                        fileName: "[project]/Documents/help/HRMS/src/components/AdminPanel/index.js",
                                        lineNumber: 323,
                                        columnNumber: 17
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$help$2f$HRMS$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        style: {
                                            color: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$help$2f$HRMS$2f$src$2f$styles$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["tokens"].colors.textMuted,
                                            fontSize: '14px'
                                        },
                                        children: "Configure working days and standard annual holidays."
                                    }, void 0, false, {
                                        fileName: "[project]/Documents/help/HRMS/src/components/AdminPanel/index.js",
                                        lineNumber: 324,
                                        columnNumber: 17
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Documents/help/HRMS/src/components/AdminPanel/index.js",
                                lineNumber: 322,
                                columnNumber: 15
                            }, ("TURBOPACK compile-time value", void 0))
                        }, void 0, false, {
                            fileName: "[project]/Documents/help/HRMS/src/components/AdminPanel/index.js",
                            lineNumber: 321,
                            columnNumber: 13
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$help$2f$HRMS$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            style: {
                                display: 'grid',
                                gridTemplateColumns: '1fr 1fr',
                                gap: '32px'
                            },
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$help$2f$HRMS$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    style: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$help$2f$HRMS$2f$src$2f$styles$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["styles"].card,
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$help$2f$HRMS$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                            style: {
                                                fontSize: '18px',
                                                fontWeight: '700',
                                                marginBottom: '24px'
                                            },
                                            children: "Standard Work Week"
                                        }, void 0, false, {
                                            fileName: "[project]/Documents/help/HRMS/src/components/AdminPanel/index.js",
                                            lineNumber: 329,
                                            columnNumber: 17
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$help$2f$HRMS$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            style: {
                                                display: 'flex',
                                                flexDirection: 'column',
                                                gap: '10px'
                                            },
                                            children: [
                                                'Monday',
                                                'Tuesday',
                                                'Wednesday',
                                                'Thursday',
                                                'Friday',
                                                'Saturday',
                                                'Sunday'
                                            ].map((day)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$help$2f$HRMS$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    style: {
                                                        padding: '16px',
                                                        border: `1px solid ${__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$help$2f$HRMS$2f$src$2f$styles$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["tokens"].colors.border}`,
                                                        borderRadius: '12px',
                                                        backgroundColor: workingDays.includes(day) ? '#F3F4F6' : '#FFFFFF',
                                                        color: workingDays.includes(day) ? __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$help$2f$HRMS$2f$src$2f$styles$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["tokens"].colors.primary : __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$help$2f$HRMS$2f$src$2f$styles$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["tokens"].colors.textMuted,
                                                        fontWeight: '600',
                                                        fontSize: '14px',
                                                        cursor: 'pointer',
                                                        display: 'flex',
                                                        justifyContent: 'space-between',
                                                        alignItems: 'center',
                                                        transition: 'all 0.2s ease'
                                                    },
                                                    onClick: ()=>setWorkingDays((prev)=>prev.includes(day) ? prev.filter((d)=>d !== day) : [
                                                                ...prev,
                                                                day
                                                            ]),
                                                    children: [
                                                        day,
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$help$2f$HRMS$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "material-symbols-outlined",
                                                            style: {
                                                                fontSize: '20px',
                                                                color: workingDays.includes(day) ? __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$help$2f$HRMS$2f$src$2f$styles$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["tokens"].colors.primary : 'transparent'
                                                            },
                                                            children: "check_circle"
                                                        }, void 0, false, {
                                                            fileName: "[project]/Documents/help/HRMS/src/components/AdminPanel/index.js",
                                                            lineNumber: 351,
                                                            columnNumber: 23
                                                        }, ("TURBOPACK compile-time value", void 0))
                                                    ]
                                                }, day, true, {
                                                    fileName: "[project]/Documents/help/HRMS/src/components/AdminPanel/index.js",
                                                    lineNumber: 332,
                                                    columnNumber: 21
                                                }, ("TURBOPACK compile-time value", void 0)))
                                        }, void 0, false, {
                                            fileName: "[project]/Documents/help/HRMS/src/components/AdminPanel/index.js",
                                            lineNumber: 330,
                                            columnNumber: 17
                                        }, ("TURBOPACK compile-time value", void 0))
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Documents/help/HRMS/src/components/AdminPanel/index.js",
                                    lineNumber: 328,
                                    columnNumber: 15
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$help$2f$HRMS$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    style: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$help$2f$HRMS$2f$src$2f$styles$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["styles"].card,
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$help$2f$HRMS$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                            style: {
                                                fontSize: '18px',
                                                fontWeight: '700',
                                                marginBottom: '24px'
                                            },
                                            children: "Public Holidays"
                                        }, void 0, false, {
                                            fileName: "[project]/Documents/help/HRMS/src/components/AdminPanel/index.js",
                                            lineNumber: 360,
                                            columnNumber: 17
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$help$2f$HRMS$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            style: {
                                                display: 'flex',
                                                gap: '12px',
                                                marginBottom: '24px'
                                            },
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$help$2f$HRMS$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                    style: {
                                                        ...__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$help$2f$HRMS$2f$src$2f$styles$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["styles"].input,
                                                        flex: 2
                                                    },
                                                    placeholder: "Holiday Name",
                                                    value: newHoliday.name,
                                                    onChange: (e)=>setNewHoliday({
                                                            ...newHoliday,
                                                            name: e.target.value
                                                        })
                                                }, void 0, false, {
                                                    fileName: "[project]/Documents/help/HRMS/src/components/AdminPanel/index.js",
                                                    lineNumber: 362,
                                                    columnNumber: 19
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$help$2f$HRMS$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                    type: "date",
                                                    style: {
                                                        ...__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$help$2f$HRMS$2f$src$2f$styles$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["styles"].input,
                                                        flex: 1.5
                                                    },
                                                    value: newHoliday.date,
                                                    onChange: (e)=>setNewHoliday({
                                                            ...newHoliday,
                                                            date: e.target.value
                                                        })
                                                }, void 0, false, {
                                                    fileName: "[project]/Documents/help/HRMS/src/components/AdminPanel/index.js",
                                                    lineNumber: 368,
                                                    columnNumber: 19
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$help$2f$HRMS$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                    onClick: async ()=>{
                                                        if (!newHoliday.name || !newHoliday.date) return;
                                                        await (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$help$2f$HRMS$2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["addDoc"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$help$2f$HRMS$2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["collection"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$help$2f$HRMS$2f$src$2f$firebase$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["db"], 'holidays'), newHoliday);
                                                        setNewHoliday({
                                                            name: '',
                                                            date: ''
                                                        });
                                                    },
                                                    style: {
                                                        ...__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$help$2f$HRMS$2f$src$2f$styles$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["styles"].button.primary,
                                                        flex: 0.5,
                                                        justifyContent: 'center',
                                                        padding: '10px'
                                                    },
                                                    children: "Add"
                                                }, void 0, false, {
                                                    fileName: "[project]/Documents/help/HRMS/src/components/AdminPanel/index.js",
                                                    lineNumber: 374,
                                                    columnNumber: 19
                                                }, ("TURBOPACK compile-time value", void 0))
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/Documents/help/HRMS/src/components/AdminPanel/index.js",
                                            lineNumber: 361,
                                            columnNumber: 17
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$help$2f$HRMS$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            style: {
                                                display: 'flex',
                                                flexDirection: 'column',
                                                gap: '12px'
                                            },
                                            children: holidays.map((h)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$help$2f$HRMS$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    style: {
                                                        display: 'flex',
                                                        justifyContent: 'space-between',
                                                        padding: '14px',
                                                        borderBottom: `1px solid ${__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$help$2f$HRMS$2f$src$2f$styles$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["tokens"].colors.border}`
                                                    },
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$help$2f$HRMS$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            style: {
                                                                fontWeight: '600',
                                                                color: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$help$2f$HRMS$2f$src$2f$styles$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["tokens"].colors.primary
                                                            },
                                                            children: h.name
                                                        }, void 0, false, {
                                                            fileName: "[project]/Documents/help/HRMS/src/components/AdminPanel/index.js",
                                                            lineNumber: 382,
                                                            columnNumber: 23
                                                        }, ("TURBOPACK compile-time value", void 0)),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$help$2f$HRMS$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            style: {
                                                                color: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$help$2f$HRMS$2f$src$2f$styles$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["tokens"].colors.textMuted,
                                                                fontSize: '14px'
                                                            },
                                                            children: new Date(h.date).toLocaleDateString(undefined, {
                                                                month: 'short',
                                                                day: 'numeric',
                                                                year: 'numeric'
                                                            })
                                                        }, void 0, false, {
                                                            fileName: "[project]/Documents/help/HRMS/src/components/AdminPanel/index.js",
                                                            lineNumber: 383,
                                                            columnNumber: 23
                                                        }, ("TURBOPACK compile-time value", void 0))
                                                    ]
                                                }, h.id, true, {
                                                    fileName: "[project]/Documents/help/HRMS/src/components/AdminPanel/index.js",
                                                    lineNumber: 381,
                                                    columnNumber: 21
                                                }, ("TURBOPACK compile-time value", void 0)))
                                        }, void 0, false, {
                                            fileName: "[project]/Documents/help/HRMS/src/components/AdminPanel/index.js",
                                            lineNumber: 379,
                                            columnNumber: 17
                                        }, ("TURBOPACK compile-time value", void 0))
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Documents/help/HRMS/src/components/AdminPanel/index.js",
                                    lineNumber: 359,
                                    columnNumber: 15
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Documents/help/HRMS/src/components/AdminPanel/index.js",
                            lineNumber: 327,
                            columnNumber: 13
                        }, ("TURBOPACK compile-time value", void 0))
                    ]
                }, void 0, true, {
                    fileName: "[project]/Documents/help/HRMS/src/components/AdminPanel/index.js",
                    lineNumber: 320,
                    columnNumber: 11
                }, ("TURBOPACK compile-time value", void 0));
            default:
                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$help$2f$HRMS$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    style: {
                        textAlign: 'center',
                        padding: '100px',
                        color: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$help$2f$HRMS$2f$src$2f$styles$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["tokens"].colors.textMuted
                    },
                    children: "Module not found."
                }, void 0, false, {
                    fileName: "[project]/Documents/help/HRMS/src/components/AdminPanel/index.js",
                    lineNumber: 392,
                    columnNumber: 16
                }, ("TURBOPACK compile-time value", void 0));
        }
    };
    return renderModule();
};
const __TURBOPACK__default__export__ = AdminPanel;
}),
"[project]/Documents/help/HRMS/src/components/Profile/index.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$help$2f$HRMS$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/help/HRMS/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$help$2f$HRMS$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/help/HRMS/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$help$2f$HRMS$2f$src$2f$firebase$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/help/HRMS/src/firebase.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$help$2f$HRMS$2f$node_modules$2f$firebase$2f$firestore$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/Documents/help/HRMS/node_modules/firebase/firestore/dist/index.mjs [app-ssr] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$help$2f$HRMS$2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/help/HRMS/node_modules/@firebase/firestore/dist/index.node.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$help$2f$HRMS$2f$src$2f$styles$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/help/HRMS/src/styles.js [app-ssr] (ecmascript)");
;
;
;
;
;
const Profile = ({ user })=>{
    const [profile, setProfile] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$help$2f$HRMS$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    const [editing, setEditing] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$help$2f$HRMS$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [formData, setFormData] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$help$2f$HRMS$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])({});
    const [showPasswordModal, setShowPasswordModal] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$help$2f$HRMS$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [newPass, setNewPass] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$help$2f$HRMS$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])({
        current: '',
        next: '',
        confirm: ''
    });
    const [loading, setLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$help$2f$HRMS$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(true);
    const [error, setError] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$help$2f$HRMS$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$help$2f$HRMS$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (!user.uid) return;
        const checkByUid = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$help$2f$HRMS$2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["onSnapshot"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$help$2f$HRMS$2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["doc"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$help$2f$HRMS$2f$src$2f$firebase$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["db"], 'employees', user.uid), (snapshot)=>{
            if (snapshot.exists()) {
                const data = snapshot.data();
                setProfile(data);
                setFormData(data);
                setLoading(false);
            } else {
                // If not found by UID, try finding by email (common for Auth users)
                setLoading(true);
                const q = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$help$2f$HRMS$2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["query"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$help$2f$HRMS$2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["collection"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$help$2f$HRMS$2f$src$2f$firebase$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["db"], 'employees'), (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$help$2f$HRMS$2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["where"])('email', '==', user.email));
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$help$2f$HRMS$2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getDocs"])(q).then((snap)=>{
                    if (!snap.empty) {
                        const data = snap.docs[0].data();
                        setProfile({
                            ...data,
                            id: snap.docs[0].id
                        });
                        setFormData(data);
                    } else {
                        setError("Profile record not found in directory.");
                    }
                    setLoading(false);
                }).catch((err)=>{
                    console.error(err);
                    setError("Failed to fetch profile data.");
                    setLoading(false);
                });
            }
        }, (err)=>{
            console.error(err);
            setError("Connection to profile service lost.");
            setLoading(false);
        });
        return ()=>checkByUid();
    }, [
        user.uid,
        user.email
    ]);
    const handlePasswordUpdate = async (e)=>{
        e.preventDefault();
        if (newPass.next !== newPass.confirm) return alert("Passwords do not match.");
        if (newPass.current !== profile.password) return alert("Incorrect current password.");
        try {
            await (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$help$2f$HRMS$2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["updateDoc"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$help$2f$HRMS$2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["doc"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$help$2f$HRMS$2f$src$2f$firebase$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["db"], 'employees', user.uid), {
                password: newPass.next
            });
            setShowPasswordModal(false);
            setNewPass({
                current: '',
                next: '',
                confirm: ''
            });
            alert("Password updated successfully!");
        } catch (err) {
            console.error(err);
            alert("Failed to update password.");
        }
    };
    const handleUpdate = async ()=>{
        try {
            await (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$help$2f$HRMS$2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["updateDoc"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$help$2f$HRMS$2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["doc"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$help$2f$HRMS$2f$src$2f$firebase$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["db"], 'employees', user.uid), {
                phone: formData.phone || '',
                address: formData.address || '',
                bio: formData.bio || '',
                skills: formData.skills || [],
                emergencyContact: formData.emergencyContact || 'Sarah Doe (Spouse)',
                emergencyPhone: formData.emergencyPhone || '+1 (555) 999-8888'
            });
            setEditing(false);
        } catch (err) {
            console.error(err);
            alert("Failed to update profile.");
        }
    };
    if (loading) return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$help$2f$HRMS$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        style: {
            padding: '40px',
            color: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$help$2f$HRMS$2f$src$2f$styles$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["tokens"].colors.textMuted
        },
        children: "Loading profile..."
    }, void 0, false, {
        fileName: "[project]/Documents/help/HRMS/src/components/Profile/index.js",
        lineNumber: 87,
        columnNumber: 25
    }, ("TURBOPACK compile-time value", void 0));
    if (error) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$help$2f$HRMS$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            style: {
                padding: '60px',
                textAlign: 'center',
                background: '#FEF2F2',
                borderRadius: '12px',
                border: '1px solid #FCA5A5'
            },
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$help$2f$HRMS$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    className: "material-symbols-outlined",
                    style: {
                        fontSize: '48px',
                        color: '#DC2626',
                        marginBottom: '16px'
                    },
                    children: "error"
                }, void 0, false, {
                    fileName: "[project]/Documents/help/HRMS/src/components/Profile/index.js",
                    lineNumber: 92,
                    columnNumber: 17
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$help$2f$HRMS$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    style: {
                        fontSize: '18px',
                        fontWeight: '700',
                        color: '#991B1B',
                        marginBottom: '8px'
                    },
                    children: error
                }, void 0, false, {
                    fileName: "[project]/Documents/help/HRMS/src/components/Profile/index.js",
                    lineNumber: 93,
                    columnNumber: 17
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$help$2f$HRMS$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    style: {
                        color: '#B91C1C',
                        fontSize: '14px'
                    },
                    children: [
                        "Please contact HR to ensure your employee record is correctly linked to your login (Email: ",
                        user.email,
                        ")."
                    ]
                }, void 0, true, {
                    fileName: "[project]/Documents/help/HRMS/src/components/Profile/index.js",
                    lineNumber: 94,
                    columnNumber: 17
                }, ("TURBOPACK compile-time value", void 0))
            ]
        }, void 0, true, {
            fileName: "[project]/Documents/help/HRMS/src/components/Profile/index.js",
            lineNumber: 91,
            columnNumber: 13
        }, ("TURBOPACK compile-time value", void 0));
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$help$2f$HRMS$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "animate-fade",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$help$2f$HRMS$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    marginBottom: '40px'
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$help$2f$HRMS$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                        style: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$help$2f$HRMS$2f$src$2f$styles$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["styles"].greeting,
                        children: "Member Identity"
                    }, void 0, false, {
                        fileName: "[project]/Documents/help/HRMS/src/components/Profile/index.js",
                        lineNumber: 102,
                        columnNumber: 17
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$help$2f$HRMS$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        style: {
                            color: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$help$2f$HRMS$2f$src$2f$styles$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["tokens"].colors.secondary,
                            fontSize: '15px',
                            marginTop: '4px'
                        },
                        children: "Secured access to your corporate profile and employment details."
                    }, void 0, false, {
                        fileName: "[project]/Documents/help/HRMS/src/components/Profile/index.js",
                        lineNumber: 103,
                        columnNumber: 17
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/Documents/help/HRMS/src/components/Profile/index.js",
                lineNumber: 101,
                columnNumber: 13
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$help$2f$HRMS$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    display: 'grid',
                    gridTemplateColumns: 'minmax(300px, 1fr) 2fr',
                    gap: '40px'
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$help$2f$HRMS$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            display: 'flex',
                            flexDirection: 'column',
                            gap: '32px'
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$help$2f$HRMS$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                style: {
                                    ...__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$help$2f$HRMS$2f$src$2f$styles$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["styles"].card,
                                    textAlign: 'center',
                                    padding: '40px 32px'
                                },
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$help$2f$HRMS$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        style: {
                                            width: '100px',
                                            height: '100px',
                                            background: `linear-gradient(135deg, ${__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$help$2f$HRMS$2f$src$2f$styles$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["tokens"].colors.accent}15 0%, ${__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$help$2f$HRMS$2f$src$2f$styles$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["tokens"].colors.accent}30 100%)`,
                                            borderRadius: '32px',
                                            display: 'flex',
                                            alignItems: 'center',
                                            justifyContent: 'center',
                                            margin: '0 auto 24px',
                                            fontSize: '40px',
                                            fontWeight: '800',
                                            color: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$help$2f$HRMS$2f$src$2f$styles$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["tokens"].colors.accent,
                                            boxShadow: `0 20px 40px -12px ${__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$help$2f$HRMS$2f$src$2f$styles$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["tokens"].colors.accent}20`
                                        },
                                        children: profile.name?.charAt(0)
                                    }, void 0, false, {
                                        fileName: "[project]/Documents/help/HRMS/src/components/Profile/index.js",
                                        lineNumber: 109,
                                        columnNumber: 25
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$help$2f$HRMS$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                        style: {
                                            fontSize: '22px',
                                            fontWeight: '800',
                                            color: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$help$2f$HRMS$2f$src$2f$styles$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["tokens"].colors.primary,
                                            marginBottom: '4px',
                                            letterSpacing: '-0.02em'
                                        },
                                        children: profile.name
                                    }, void 0, false, {
                                        fileName: "[project]/Documents/help/HRMS/src/components/Profile/index.js",
                                        lineNumber: 125,
                                        columnNumber: 25
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$help$2f$HRMS$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        style: {
                                            display: 'flex',
                                            alignItems: 'center',
                                            justifyContent: 'center',
                                            gap: '8px',
                                            marginBottom: '32px'
                                        },
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$help$2f$HRMS$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                style: {
                                                    ...__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$help$2f$HRMS$2f$src$2f$styles$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["styles"].badge('primary'),
                                                    fontSize: '11px'
                                                },
                                                children: profile.role
                                            }, void 0, false, {
                                                fileName: "[project]/Documents/help/HRMS/src/components/Profile/index.js",
                                                lineNumber: 127,
                                                columnNumber: 29
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$help$2f$HRMS$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                style: {
                                                    color: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$help$2f$HRMS$2f$src$2f$styles$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["tokens"].colors.border
                                                },
                                                children: "•"
                                            }, void 0, false, {
                                                fileName: "[project]/Documents/help/HRMS/src/components/Profile/index.js",
                                                lineNumber: 128,
                                                columnNumber: 29
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$help$2f$HRMS$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                style: {
                                                    fontSize: '12px',
                                                    fontWeight: '600',
                                                    color: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$help$2f$HRMS$2f$src$2f$styles$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["tokens"].colors.secondary
                                                },
                                                children: profile.dept
                                            }, void 0, false, {
                                                fileName: "[project]/Documents/help/HRMS/src/components/Profile/index.js",
                                                lineNumber: 129,
                                                columnNumber: 29
                                            }, ("TURBOPACK compile-time value", void 0))
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Documents/help/HRMS/src/components/Profile/index.js",
                                        lineNumber: 126,
                                        columnNumber: 25
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$help$2f$HRMS$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        style: {
                                            textAlign: 'left',
                                            display: 'flex',
                                            flexDirection: 'column',
                                            gap: '16px'
                                        },
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$help$2f$HRMS$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                style: {
                                                    display: 'flex',
                                                    justifyContent: 'space-between',
                                                    padding: '12px 16px',
                                                    backgroundColor: '#F8FAFC',
                                                    borderRadius: '12px',
                                                    border: `1px solid ${__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$help$2f$HRMS$2f$src$2f$styles$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["tokens"].colors.border}`
                                                },
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$help$2f$HRMS$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        style: {
                                                            color: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$help$2f$HRMS$2f$src$2f$styles$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["tokens"].colors.secondary,
                                                            fontSize: '13px',
                                                            fontWeight: '600'
                                                        },
                                                        children: "Account Status"
                                                    }, void 0, false, {
                                                        fileName: "[project]/Documents/help/HRMS/src/components/Profile/index.js",
                                                        lineNumber: 134,
                                                        columnNumber: 33
                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$help$2f$HRMS$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        style: {
                                                            fontWeight: '800',
                                                            color: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$help$2f$HRMS$2f$src$2f$styles$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["tokens"].colors.success,
                                                            fontSize: '13px'
                                                        },
                                                        children: "Verified"
                                                    }, void 0, false, {
                                                        fileName: "[project]/Documents/help/HRMS/src/components/Profile/index.js",
                                                        lineNumber: 135,
                                                        columnNumber: 33
                                                    }, ("TURBOPACK compile-time value", void 0))
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/Documents/help/HRMS/src/components/Profile/index.js",
                                                lineNumber: 133,
                                                columnNumber: 29
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$help$2f$HRMS$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                style: {
                                                    display: 'flex',
                                                    justifyContent: 'space-between',
                                                    padding: '12px 16px'
                                                },
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$help$2f$HRMS$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        style: {
                                                            color: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$help$2f$HRMS$2f$src$2f$styles$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["tokens"].colors.secondary,
                                                            fontSize: '13px',
                                                            fontWeight: '600'
                                                        },
                                                        children: "Joined On"
                                                    }, void 0, false, {
                                                        fileName: "[project]/Documents/help/HRMS/src/components/Profile/index.js",
                                                        lineNumber: 138,
                                                        columnNumber: 33
                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$help$2f$HRMS$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        style: {
                                                            fontWeight: '700',
                                                            color: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$help$2f$HRMS$2f$src$2f$styles$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["tokens"].colors.primary,
                                                            fontSize: '13px'
                                                        },
                                                        children: new Date(profile.joinedDate).toLocaleDateString(undefined, {
                                                            month: 'short',
                                                            day: 'numeric',
                                                            year: 'numeric'
                                                        })
                                                    }, void 0, false, {
                                                        fileName: "[project]/Documents/help/HRMS/src/components/Profile/index.js",
                                                        lineNumber: 139,
                                                        columnNumber: 33
                                                    }, ("TURBOPACK compile-time value", void 0))
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/Documents/help/HRMS/src/components/Profile/index.js",
                                                lineNumber: 137,
                                                columnNumber: 29
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$help$2f$HRMS$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                style: {
                                                    display: 'flex',
                                                    justifyContent: 'space-between',
                                                    padding: '12px 16px'
                                                },
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$help$2f$HRMS$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        style: {
                                                            color: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$help$2f$HRMS$2f$src$2f$styles$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["tokens"].colors.secondary,
                                                            fontSize: '13px',
                                                            fontWeight: '600'
                                                        },
                                                        children: "Work Email"
                                                    }, void 0, false, {
                                                        fileName: "[project]/Documents/help/HRMS/src/components/Profile/index.js",
                                                        lineNumber: 142,
                                                        columnNumber: 33
                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$help$2f$HRMS$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        style: {
                                                            fontWeight: '700',
                                                            color: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$help$2f$HRMS$2f$src$2f$styles$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["tokens"].colors.primary,
                                                            fontSize: '13px'
                                                        },
                                                        children: profile.email
                                                    }, void 0, false, {
                                                        fileName: "[project]/Documents/help/HRMS/src/components/Profile/index.js",
                                                        lineNumber: 143,
                                                        columnNumber: 33
                                                    }, ("TURBOPACK compile-time value", void 0))
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/Documents/help/HRMS/src/components/Profile/index.js",
                                                lineNumber: 141,
                                                columnNumber: 29
                                            }, ("TURBOPACK compile-time value", void 0))
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Documents/help/HRMS/src/components/Profile/index.js",
                                        lineNumber: 132,
                                        columnNumber: 25
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Documents/help/HRMS/src/components/Profile/index.js",
                                lineNumber: 108,
                                columnNumber: 21
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$help$2f$HRMS$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                style: {
                                    ...__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$help$2f$HRMS$2f$src$2f$styles$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["styles"].card,
                                    backgroundImage: 'linear-gradient(135deg, #0F172A 0%, #1E293B 100%)',
                                    color: 'white',
                                    border: 'none',
                                    padding: '32px',
                                    overflow: 'hidden',
                                    position: 'relative'
                                },
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$help$2f$HRMS$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    style: {
                                        position: 'relative',
                                        zIndex: 1
                                    },
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$help$2f$HRMS$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                            style: {
                                                fontSize: '18px',
                                                fontWeight: '800',
                                                marginBottom: '8px'
                                            },
                                            children: "Digital Work Pass"
                                        }, void 0, false, {
                                            fileName: "[project]/Documents/help/HRMS/src/components/Profile/index.js",
                                            lineNumber: 158,
                                            columnNumber: 29
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$help$2f$HRMS$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            style: {
                                                fontSize: '12px',
                                                color: '#94A3B8',
                                                marginBottom: '24px',
                                                lineHeight: '1.6'
                                            },
                                            children: "Use this encrypted QR for building entry and terminal authorization."
                                        }, void 0, false, {
                                            fileName: "[project]/Documents/help/HRMS/src/components/Profile/index.js",
                                            lineNumber: 159,
                                            columnNumber: 29
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$help$2f$HRMS$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            style: {
                                                background: 'rgba(255, 255, 255, 1)',
                                                padding: '20px',
                                                borderRadius: '20px',
                                                width: 'fit-content',
                                                margin: '0 auto',
                                                boxShadow: '0 20px 40px rgba(0,0,0,0.4)'
                                            },
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$help$2f$HRMS$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "material-symbols-outlined",
                                                style: {
                                                    color: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$help$2f$HRMS$2f$src$2f$styles$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["tokens"].colors.primary,
                                                    fontSize: '140px'
                                                },
                                                children: "qr_code_2"
                                            }, void 0, false, {
                                                fileName: "[project]/Documents/help/HRMS/src/components/Profile/index.js",
                                                lineNumber: 161,
                                                columnNumber: 33
                                            }, ("TURBOPACK compile-time value", void 0))
                                        }, void 0, false, {
                                            fileName: "[project]/Documents/help/HRMS/src/components/Profile/index.js",
                                            lineNumber: 160,
                                            columnNumber: 29
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$help$2f$HRMS$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            style: {
                                                textAlign: 'center',
                                                marginTop: '20px',
                                                fontSize: '11px',
                                                color: '#64748B',
                                                letterSpacing: '0.1em',
                                                fontWeight: '700',
                                                textTransform: 'uppercase'
                                            },
                                            children: [
                                                "Auth ID: ",
                                                profile.email?.split('@')[0],
                                                "-X92"
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/Documents/help/HRMS/src/components/Profile/index.js",
                                            lineNumber: 163,
                                            columnNumber: 29
                                        }, ("TURBOPACK compile-time value", void 0))
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Documents/help/HRMS/src/components/Profile/index.js",
                                    lineNumber: 157,
                                    columnNumber: 25
                                }, ("TURBOPACK compile-time value", void 0))
                            }, void 0, false, {
                                fileName: "[project]/Documents/help/HRMS/src/components/Profile/index.js",
                                lineNumber: 148,
                                columnNumber: 21
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Documents/help/HRMS/src/components/Profile/index.js",
                        lineNumber: 107,
                        columnNumber: 17
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$help$2f$HRMS$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            display: 'flex',
                            flexDirection: 'column',
                            gap: '32px'
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$help$2f$HRMS$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                style: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$help$2f$HRMS$2f$src$2f$styles$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["styles"].card,
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$help$2f$HRMS$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        style: {
                                            display: 'flex',
                                            justifyContent: 'space-between',
                                            alignItems: 'center',
                                            marginBottom: '32px'
                                        },
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$help$2f$HRMS$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                style: {
                                                    fontSize: '18px',
                                                    fontWeight: '800',
                                                    color: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$help$2f$HRMS$2f$src$2f$styles$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["tokens"].colors.primary
                                                },
                                                children: "Personal Information"
                                            }, void 0, false, {
                                                fileName: "[project]/Documents/help/HRMS/src/components/Profile/index.js",
                                                lineNumber: 173,
                                                columnNumber: 29
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$help$2f$HRMS$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                onClick: ()=>editing ? handleUpdate() : setEditing(true),
                                                style: {
                                                    ...__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$help$2f$HRMS$2f$src$2f$styles$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["styles"].button.outline,
                                                    padding: '10px 20px'
                                                },
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$help$2f$HRMS$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "material-symbols-outlined",
                                                        style: {
                                                            fontSize: '18px'
                                                        },
                                                        children: editing ? 'check_circle' : 'edit_note'
                                                    }, void 0, false, {
                                                        fileName: "[project]/Documents/help/HRMS/src/components/Profile/index.js",
                                                        lineNumber: 178,
                                                        columnNumber: 33
                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                    editing ? 'Finalize Changes' : 'Update details'
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/Documents/help/HRMS/src/components/Profile/index.js",
                                                lineNumber: 174,
                                                columnNumber: 29
                                            }, ("TURBOPACK compile-time value", void 0))
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Documents/help/HRMS/src/components/Profile/index.js",
                                        lineNumber: 172,
                                        columnNumber: 25
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$help$2f$HRMS$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        style: {
                                            display: 'grid',
                                            gridTemplateColumns: '1fr 1fr',
                                            gap: '32px'
                                        },
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$help$2f$HRMS$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                style: {
                                                    gridColumn: editing ? 'span 2' : 'auto'
                                                },
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$help$2f$HRMS$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                        style: {
                                                            fontSize: '11px',
                                                            fontWeight: '800',
                                                            color: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$help$2f$HRMS$2f$src$2f$styles$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["tokens"].colors.secondary,
                                                            textTransform: 'uppercase',
                                                            letterSpacing: '0.08em',
                                                            display: 'block',
                                                            marginBottom: '8px'
                                                        },
                                                        children: "Primary Contact"
                                                    }, void 0, false, {
                                                        fileName: "[project]/Documents/help/HRMS/src/components/Profile/index.js",
                                                        lineNumber: 185,
                                                        columnNumber: 33
                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                    editing ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$help$2f$HRMS$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                        style: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$help$2f$HRMS$2f$src$2f$styles$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["styles"].input,
                                                        value: formData.phone,
                                                        onChange: (e)=>setFormData({
                                                                ...formData,
                                                                phone: e.target.value
                                                            }),
                                                        placeholder: "+1 (555) 000-0000"
                                                    }, void 0, false, {
                                                        fileName: "[project]/Documents/help/HRMS/src/components/Profile/index.js",
                                                        lineNumber: 187,
                                                        columnNumber: 37
                                                    }, ("TURBOPACK compile-time value", void 0)) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$help$2f$HRMS$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        style: {
                                                            fontWeight: '700',
                                                            fontSize: '15px',
                                                            color: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$help$2f$HRMS$2f$src$2f$styles$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["tokens"].colors.primary
                                                        },
                                                        children: profile.phone || 'Not registered'
                                                    }, void 0, false, {
                                                        fileName: "[project]/Documents/help/HRMS/src/components/Profile/index.js",
                                                        lineNumber: 194,
                                                        columnNumber: 37
                                                    }, ("TURBOPACK compile-time value", void 0))
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/Documents/help/HRMS/src/components/Profile/index.js",
                                                lineNumber: 184,
                                                columnNumber: 29
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            !editing && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$help$2f$HRMS$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$help$2f$HRMS$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                        style: {
                                                            fontSize: '11px',
                                                            fontWeight: '800',
                                                            color: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$help$2f$HRMS$2f$src$2f$styles$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["tokens"].colors.secondary,
                                                            textTransform: 'uppercase',
                                                            letterSpacing: '0.08em',
                                                            display: 'block',
                                                            marginBottom: '8px'
                                                        },
                                                        children: "Date of Birth"
                                                    }, void 0, false, {
                                                        fileName: "[project]/Documents/help/HRMS/src/components/Profile/index.js",
                                                        lineNumber: 199,
                                                        columnNumber: 37
                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$help$2f$HRMS$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        style: {
                                                            fontWeight: '700',
                                                            fontSize: '15px',
                                                            color: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$help$2f$HRMS$2f$src$2f$styles$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["tokens"].colors.primary
                                                        },
                                                        children: profile.dob || 'Private'
                                                    }, void 0, false, {
                                                        fileName: "[project]/Documents/help/HRMS/src/components/Profile/index.js",
                                                        lineNumber: 200,
                                                        columnNumber: 37
                                                    }, ("TURBOPACK compile-time value", void 0))
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/Documents/help/HRMS/src/components/Profile/index.js",
                                                lineNumber: 198,
                                                columnNumber: 33
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$help$2f$HRMS$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                style: {
                                                    gridColumn: 'span 2'
                                                },
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$help$2f$HRMS$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                        style: {
                                                            fontSize: '11px',
                                                            fontWeight: '800',
                                                            color: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$help$2f$HRMS$2f$src$2f$styles$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["tokens"].colors.secondary,
                                                            textTransform: 'uppercase',
                                                            letterSpacing: '0.08em',
                                                            display: 'block',
                                                            marginBottom: '8px'
                                                        },
                                                        children: "Residential Address"
                                                    }, void 0, false, {
                                                        fileName: "[project]/Documents/help/HRMS/src/components/Profile/index.js",
                                                        lineNumber: 204,
                                                        columnNumber: 33
                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                    editing ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$help$2f$HRMS$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("textarea", {
                                                        style: {
                                                            ...__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$help$2f$HRMS$2f$src$2f$styles$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["styles"].input,
                                                            minHeight: '80px'
                                                        },
                                                        value: formData.address,
                                                        onChange: (e)=>setFormData({
                                                                ...formData,
                                                                address: e.target.value
                                                            }),
                                                        placeholder: "Full address details..."
                                                    }, void 0, false, {
                                                        fileName: "[project]/Documents/help/HRMS/src/components/Profile/index.js",
                                                        lineNumber: 206,
                                                        columnNumber: 37
                                                    }, ("TURBOPACK compile-time value", void 0)) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$help$2f$HRMS$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        style: {
                                                            fontWeight: '700',
                                                            fontSize: '15px',
                                                            color: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$help$2f$HRMS$2f$src$2f$styles$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["tokens"].colors.primary,
                                                            lineHeight: '1.6'
                                                        },
                                                        children: profile.address || 'Not specified'
                                                    }, void 0, false, {
                                                        fileName: "[project]/Documents/help/HRMS/src/components/Profile/index.js",
                                                        lineNumber: 213,
                                                        columnNumber: 37
                                                    }, ("TURBOPACK compile-time value", void 0))
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/Documents/help/HRMS/src/components/Profile/index.js",
                                                lineNumber: 203,
                                                columnNumber: 29
                                            }, ("TURBOPACK compile-time value", void 0))
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Documents/help/HRMS/src/components/Profile/index.js",
                                        lineNumber: 183,
                                        columnNumber: 25
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Documents/help/HRMS/src/components/Profile/index.js",
                                lineNumber: 171,
                                columnNumber: 21
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$help$2f$HRMS$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                style: {
                                    display: 'grid',
                                    gridTemplateColumns: '1fr 1fr',
                                    gap: '32px'
                                },
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$help$2f$HRMS$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        style: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$help$2f$HRMS$2f$src$2f$styles$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["styles"].card,
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$help$2f$HRMS$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                style: {
                                                    fontSize: '16px',
                                                    fontWeight: '800',
                                                    marginBottom: '24px',
                                                    color: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$help$2f$HRMS$2f$src$2f$styles$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["tokens"].colors.primary
                                                },
                                                children: "Emergency"
                                            }, void 0, false, {
                                                fileName: "[project]/Documents/help/HRMS/src/components/Profile/index.js",
                                                lineNumber: 221,
                                                columnNumber: 29
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$help$2f$HRMS$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                style: {
                                                    display: 'flex',
                                                    flexDirection: 'column',
                                                    gap: '20px'
                                                },
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$help$2f$HRMS$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$help$2f$HRMS$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                                style: {
                                                                    fontSize: '11px',
                                                                    color: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$help$2f$HRMS$2f$src$2f$styles$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["tokens"].colors.secondary,
                                                                    fontWeight: '700',
                                                                    textTransform: 'uppercase',
                                                                    marginBottom: '6px',
                                                                    display: 'block'
                                                                },
                                                                children: "Contact Name"
                                                            }, void 0, false, {
                                                                fileName: "[project]/Documents/help/HRMS/src/components/Profile/index.js",
                                                                lineNumber: 224,
                                                                columnNumber: 37
                                                            }, ("TURBOPACK compile-time value", void 0)),
                                                            editing ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$help$2f$HRMS$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                style: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$help$2f$HRMS$2f$src$2f$styles$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["styles"].input,
                                                                value: formData.emergencyContact || '',
                                                                onChange: (e)=>setFormData({
                                                                        ...formData,
                                                                        emergencyContact: e.target.value
                                                                    }),
                                                                placeholder: "Sarah Doe (Spouse)"
                                                            }, void 0, false, {
                                                                fileName: "[project]/Documents/help/HRMS/src/components/Profile/index.js",
                                                                lineNumber: 226,
                                                                columnNumber: 41
                                                            }, ("TURBOPACK compile-time value", void 0)) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$help$2f$HRMS$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                style: {
                                                                    fontWeight: '700',
                                                                    color: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$help$2f$HRMS$2f$src$2f$styles$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["tokens"].colors.primary
                                                                },
                                                                children: profile.emergencyContact || 'Sarah Doe (Spouse)'
                                                            }, void 0, false, {
                                                                fileName: "[project]/Documents/help/HRMS/src/components/Profile/index.js",
                                                                lineNumber: 233,
                                                                columnNumber: 41
                                                            }, ("TURBOPACK compile-time value", void 0))
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/Documents/help/HRMS/src/components/Profile/index.js",
                                                        lineNumber: 223,
                                                        columnNumber: 33
                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$help$2f$HRMS$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$help$2f$HRMS$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                                style: {
                                                                    fontSize: '11px',
                                                                    color: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$help$2f$HRMS$2f$src$2f$styles$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["tokens"].colors.secondary,
                                                                    fontWeight: '700',
                                                                    textTransform: 'uppercase',
                                                                    marginBottom: '6px',
                                                                    display: 'block'
                                                                },
                                                                children: "Emergency Phone"
                                                            }, void 0, false, {
                                                                fileName: "[project]/Documents/help/HRMS/src/components/Profile/index.js",
                                                                lineNumber: 237,
                                                                columnNumber: 37
                                                            }, ("TURBOPACK compile-time value", void 0)),
                                                            editing ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$help$2f$HRMS$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                style: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$help$2f$HRMS$2f$src$2f$styles$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["styles"].input,
                                                                value: formData.emergencyPhone || '',
                                                                onChange: (e)=>setFormData({
                                                                        ...formData,
                                                                        emergencyPhone: e.target.value
                                                                    }),
                                                                placeholder: "+1 (555) 000-0000"
                                                            }, void 0, false, {
                                                                fileName: "[project]/Documents/help/HRMS/src/components/Profile/index.js",
                                                                lineNumber: 239,
                                                                columnNumber: 41
                                                            }, ("TURBOPACK compile-time value", void 0)) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$help$2f$HRMS$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                style: {
                                                                    fontWeight: '700',
                                                                    color: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$help$2f$HRMS$2f$src$2f$styles$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["tokens"].colors.primary
                                                                },
                                                                children: profile.emergencyPhone || '+1 (555) 999-8888'
                                                            }, void 0, false, {
                                                                fileName: "[project]/Documents/help/HRMS/src/components/Profile/index.js",
                                                                lineNumber: 246,
                                                                columnNumber: 41
                                                            }, ("TURBOPACK compile-time value", void 0))
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/Documents/help/HRMS/src/components/Profile/index.js",
                                                        lineNumber: 236,
                                                        columnNumber: 33
                                                    }, ("TURBOPACK compile-time value", void 0))
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/Documents/help/HRMS/src/components/Profile/index.js",
                                                lineNumber: 222,
                                                columnNumber: 29
                                            }, ("TURBOPACK compile-time value", void 0))
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Documents/help/HRMS/src/components/Profile/index.js",
                                        lineNumber: 220,
                                        columnNumber: 25
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$help$2f$HRMS$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        style: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$help$2f$HRMS$2f$src$2f$styles$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["styles"].card,
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$help$2f$HRMS$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                style: {
                                                    fontSize: '16px',
                                                    fontWeight: '800',
                                                    marginBottom: '24px',
                                                    color: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$help$2f$HRMS$2f$src$2f$styles$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["tokens"].colors.primary
                                                },
                                                children: "Account Security"
                                            }, void 0, false, {
                                                fileName: "[project]/Documents/help/HRMS/src/components/Profile/index.js",
                                                lineNumber: 253,
                                                columnNumber: 29
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$help$2f$HRMS$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                style: {
                                                    display: 'flex',
                                                    flexDirection: 'column',
                                                    gap: '12px'
                                                },
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$help$2f$HRMS$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                        onClick: ()=>setShowPasswordModal(true),
                                                        style: {
                                                            ...__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$help$2f$HRMS$2f$src$2f$styles$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["styles"].button.outline,
                                                            width: '100%',
                                                            justifyContent: 'space-between',
                                                            padding: '14px 16px'
                                                        },
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$help$2f$HRMS$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                style: {
                                                                    fontSize: '13px',
                                                                    fontWeight: '700'
                                                                },
                                                                children: "Change Passcode"
                                                            }, void 0, false, {
                                                                fileName: "[project]/Documents/help/HRMS/src/components/Profile/index.js",
                                                                lineNumber: 259,
                                                                columnNumber: 37
                                                            }, ("TURBOPACK compile-time value", void 0)),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$help$2f$HRMS$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: "material-symbols-outlined",
                                                                style: {
                                                                    fontSize: '20px',
                                                                    color: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$help$2f$HRMS$2f$src$2f$styles$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["tokens"].colors.accent
                                                                },
                                                                children: "shield_lock"
                                                            }, void 0, false, {
                                                                fileName: "[project]/Documents/help/HRMS/src/components/Profile/index.js",
                                                                lineNumber: 260,
                                                                columnNumber: 37
                                                            }, ("TURBOPACK compile-time value", void 0))
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/Documents/help/HRMS/src/components/Profile/index.js",
                                                        lineNumber: 255,
                                                        columnNumber: 33
                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$help$2f$HRMS$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                        style: {
                                                            ...__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$help$2f$HRMS$2f$src$2f$styles$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["styles"].button.outline,
                                                            width: '100%',
                                                            justifyContent: 'space-between',
                                                            padding: '14px 16px',
                                                            opacity: 0.6
                                                        },
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$help$2f$HRMS$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                style: {
                                                                    fontSize: '13px',
                                                                    fontWeight: '700'
                                                                },
                                                                children: "Auth Persistence"
                                                            }, void 0, false, {
                                                                fileName: "[project]/Documents/help/HRMS/src/components/Profile/index.js",
                                                                lineNumber: 263,
                                                                columnNumber: 37
                                                            }, ("TURBOPACK compile-time value", void 0)),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$help$2f$HRMS$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: "material-symbols-outlined",
                                                                style: {
                                                                    fontSize: '20px'
                                                                },
                                                                children: "history"
                                                            }, void 0, false, {
                                                                fileName: "[project]/Documents/help/HRMS/src/components/Profile/index.js",
                                                                lineNumber: 264,
                                                                columnNumber: 37
                                                            }, ("TURBOPACK compile-time value", void 0))
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/Documents/help/HRMS/src/components/Profile/index.js",
                                                        lineNumber: 262,
                                                        columnNumber: 33
                                                    }, ("TURBOPACK compile-time value", void 0))
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/Documents/help/HRMS/src/components/Profile/index.js",
                                                lineNumber: 254,
                                                columnNumber: 29
                                            }, ("TURBOPACK compile-time value", void 0))
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Documents/help/HRMS/src/components/Profile/index.js",
                                        lineNumber: 252,
                                        columnNumber: 25
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Documents/help/HRMS/src/components/Profile/index.js",
                                lineNumber: 219,
                                columnNumber: 21
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$help$2f$HRMS$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                style: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$help$2f$HRMS$2f$src$2f$styles$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["styles"].card,
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$help$2f$HRMS$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        style: {
                                            display: 'flex',
                                            justifyContent: 'space-between',
                                            alignItems: 'center',
                                            marginBottom: '24px'
                                        },
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$help$2f$HRMS$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                            style: {
                                                fontSize: '18px',
                                                fontWeight: '800',
                                                color: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$help$2f$HRMS$2f$src$2f$styles$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["tokens"].colors.primary
                                            },
                                            children: "Expertise & Background"
                                        }, void 0, false, {
                                            fileName: "[project]/Documents/help/HRMS/src/components/Profile/index.js",
                                            lineNumber: 272,
                                            columnNumber: 29
                                        }, ("TURBOPACK compile-time value", void 0))
                                    }, void 0, false, {
                                        fileName: "[project]/Documents/help/HRMS/src/components/Profile/index.js",
                                        lineNumber: 271,
                                        columnNumber: 25
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$help$2f$HRMS$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        style: {
                                            marginBottom: '32px'
                                        },
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$help$2f$HRMS$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                style: {
                                                    fontSize: '11px',
                                                    color: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$help$2f$HRMS$2f$src$2f$styles$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["tokens"].colors.secondary,
                                                    fontWeight: '800',
                                                    textTransform: 'uppercase',
                                                    marginBottom: '12px',
                                                    display: 'block',
                                                    letterSpacing: '0.05em'
                                                },
                                                children: "Skill Matrix"
                                            }, void 0, false, {
                                                fileName: "[project]/Documents/help/HRMS/src/components/Profile/index.js",
                                                lineNumber: 275,
                                                columnNumber: 29
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$help$2f$HRMS$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                style: {
                                                    display: 'flex',
                                                    flexWrap: 'wrap',
                                                    gap: '10px'
                                                },
                                                children: [
                                                    (formData.skills || [
                                                        'Management',
                                                        'Communication',
                                                        'Strategic Planning'
                                                    ]).map((skill)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$help$2f$HRMS$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            style: {
                                                                ...__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$help$2f$HRMS$2f$src$2f$styles$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["styles"].badge('primary'),
                                                                padding: '8px 16px',
                                                                fontSize: '12px',
                                                                display: 'flex',
                                                                alignItems: 'center',
                                                                gap: '8px',
                                                                backgroundColor: '#EEF2FF',
                                                                color: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$help$2f$HRMS$2f$src$2f$styles$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["tokens"].colors.accent,
                                                                border: '1px solid #E0E7FF'
                                                            },
                                                            children: [
                                                                skill,
                                                                editing && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$help$2f$HRMS$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                    className: "material-symbols-outlined",
                                                                    style: {
                                                                        fontSize: '16px',
                                                                        cursor: 'pointer',
                                                                        opacity: 0.5
                                                                    },
                                                                    onClick: ()=>setFormData({
                                                                            ...formData,
                                                                            skills: (formData.skills || []).filter((s)=>s !== skill)
                                                                        }),
                                                                    children: "close"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/Documents/help/HRMS/src/components/Profile/index.js",
                                                                    lineNumber: 291,
                                                                    columnNumber: 45
                                                                }, ("TURBOPACK compile-time value", void 0))
                                                            ]
                                                        }, skill, true, {
                                                            fileName: "[project]/Documents/help/HRMS/src/components/Profile/index.js",
                                                            lineNumber: 278,
                                                            columnNumber: 37
                                                        }, ("TURBOPACK compile-time value", void 0))),
                                                    editing && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$help$2f$HRMS$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                        style: {
                                                            ...__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$help$2f$HRMS$2f$src$2f$styles$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["styles"].input,
                                                            width: '140px',
                                                            padding: '8px 12px',
                                                            fontSize: '12px',
                                                            background: 'transparent',
                                                            borderStyle: 'dashed'
                                                        },
                                                        placeholder: "+ Add Insight",
                                                        onKeyDown: (e)=>{
                                                            if (e.key === 'Enter') {
                                                                e.preventDefault();
                                                                const val = e.target.value.trim();
                                                                if (val && !(formData.skills || []).includes(val)) {
                                                                    setFormData({
                                                                        ...formData,
                                                                        skills: [
                                                                            ...formData.skills || [],
                                                                            val
                                                                        ]
                                                                    });
                                                                    e.target.value = '';
                                                                }
                                                            }
                                                        }
                                                    }, void 0, false, {
                                                        fileName: "[project]/Documents/help/HRMS/src/components/Profile/index.js",
                                                        lineNumber: 300,
                                                        columnNumber: 37
                                                    }, ("TURBOPACK compile-time value", void 0))
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/Documents/help/HRMS/src/components/Profile/index.js",
                                                lineNumber: 276,
                                                columnNumber: 29
                                            }, ("TURBOPACK compile-time value", void 0))
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Documents/help/HRMS/src/components/Profile/index.js",
                                        lineNumber: 274,
                                        columnNumber: 25
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$help$2f$HRMS$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$help$2f$HRMS$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                style: {
                                                    fontSize: '11px',
                                                    color: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$help$2f$HRMS$2f$src$2f$styles$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["tokens"].colors.secondary,
                                                    fontWeight: '800',
                                                    textTransform: 'uppercase',
                                                    marginBottom: '12px',
                                                    display: 'block',
                                                    letterSpacing: '0.05em'
                                                },
                                                children: "Professional Bio"
                                            }, void 0, false, {
                                                fileName: "[project]/Documents/help/HRMS/src/components/Profile/index.js",
                                                lineNumber: 318,
                                                columnNumber: 29
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            editing ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$help$2f$HRMS$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("textarea", {
                                                style: {
                                                    ...__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$help$2f$HRMS$2f$src$2f$styles$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["styles"].input,
                                                    minHeight: '120px'
                                                },
                                                value: formData.bio || '',
                                                onChange: (e)=>setFormData({
                                                        ...formData,
                                                        bio: e.target.value
                                                    }),
                                                placeholder: "Brief summary of your professional journey..."
                                            }, void 0, false, {
                                                fileName: "[project]/Documents/help/HRMS/src/components/Profile/index.js",
                                                lineNumber: 320,
                                                columnNumber: 33
                                            }, ("TURBOPACK compile-time value", void 0)) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$help$2f$HRMS$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                style: {
                                                    fontSize: '15px',
                                                    color: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$help$2f$HRMS$2f$src$2f$styles$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["tokens"].colors.primary,
                                                    lineHeight: '1.7',
                                                    fontWeight: '500'
                                                },
                                                children: profile.bio || "Provision a professional summary to enhance your corporate identity."
                                            }, void 0, false, {
                                                fileName: "[project]/Documents/help/HRMS/src/components/Profile/index.js",
                                                lineNumber: 327,
                                                columnNumber: 33
                                            }, ("TURBOPACK compile-time value", void 0))
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Documents/help/HRMS/src/components/Profile/index.js",
                                        lineNumber: 317,
                                        columnNumber: 25
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Documents/help/HRMS/src/components/Profile/index.js",
                                lineNumber: 270,
                                columnNumber: 21
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Documents/help/HRMS/src/components/Profile/index.js",
                        lineNumber: 170,
                        columnNumber: 17
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/Documents/help/HRMS/src/components/Profile/index.js",
                lineNumber: 106,
                columnNumber: 13
            }, ("TURBOPACK compile-time value", void 0)),
            showPasswordModal && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$help$2f$HRMS$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$help$2f$HRMS$2f$src$2f$styles$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["styles"].modal,
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$help$2f$HRMS$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    style: {
                        ...__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$help$2f$HRMS$2f$src$2f$styles$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["styles"].card,
                        width: '100%',
                        maxWidth: '440px',
                        padding: '0',
                        overflow: 'hidden'
                    },
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$help$2f$HRMS$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            style: {
                                padding: '32px',
                                borderBottom: `1px solid ${__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$help$2f$HRMS$2f$src$2f$styles$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["tokens"].colors.border}`,
                                display: 'flex',
                                justifyContent: 'space-between',
                                alignItems: 'center'
                            },
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$help$2f$HRMS$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$help$2f$HRMS$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                            style: {
                                                fontSize: '20px',
                                                fontWeight: '800',
                                                color: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$help$2f$HRMS$2f$src$2f$styles$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["tokens"].colors.primary
                                            },
                                            children: "Passcode Engine"
                                        }, void 0, false, {
                                            fileName: "[project]/Documents/help/HRMS/src/components/Profile/index.js",
                                            lineNumber: 341,
                                            columnNumber: 33
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$help$2f$HRMS$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            style: {
                                                fontSize: '13px',
                                                color: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$help$2f$HRMS$2f$src$2f$styles$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["tokens"].colors.secondary,
                                                marginTop: '4px'
                                            },
                                            children: "Establish a new secure authentication key."
                                        }, void 0, false, {
                                            fileName: "[project]/Documents/help/HRMS/src/components/Profile/index.js",
                                            lineNumber: 342,
                                            columnNumber: 33
                                        }, ("TURBOPACK compile-time value", void 0))
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Documents/help/HRMS/src/components/Profile/index.js",
                                    lineNumber: 340,
                                    columnNumber: 29
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$help$2f$HRMS$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    onClick: ()=>setShowPasswordModal(false),
                                    style: {
                                        ...__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$help$2f$HRMS$2f$src$2f$styles$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["styles"].button.ghost,
                                        padding: '4px'
                                    },
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$help$2f$HRMS$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "material-symbols-outlined",
                                        style: {
                                            fontSize: '20px'
                                        },
                                        children: "close"
                                    }, void 0, false, {
                                        fileName: "[project]/Documents/help/HRMS/src/components/Profile/index.js",
                                        lineNumber: 345,
                                        columnNumber: 33
                                    }, ("TURBOPACK compile-time value", void 0))
                                }, void 0, false, {
                                    fileName: "[project]/Documents/help/HRMS/src/components/Profile/index.js",
                                    lineNumber: 344,
                                    columnNumber: 29
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Documents/help/HRMS/src/components/Profile/index.js",
                            lineNumber: 339,
                            columnNumber: 25
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$help$2f$HRMS$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
                            onSubmit: handlePasswordUpdate,
                            style: {
                                padding: '32px'
                            },
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$help$2f$HRMS$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    style: {
                                        marginBottom: '20px'
                                    },
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$help$2f$HRMS$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                            style: {
                                                fontSize: '12px',
                                                fontWeight: '700',
                                                textTransform: 'uppercase',
                                                color: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$help$2f$HRMS$2f$src$2f$styles$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["tokens"].colors.secondary,
                                                marginBottom: '8px',
                                                display: 'block'
                                            },
                                            children: "Current Credentials"
                                        }, void 0, false, {
                                            fileName: "[project]/Documents/help/HRMS/src/components/Profile/index.js",
                                            lineNumber: 350,
                                            columnNumber: 33
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$help$2f$HRMS$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                            type: "password",
                                            style: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$help$2f$HRMS$2f$src$2f$styles$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["styles"].input,
                                            required: true,
                                            value: newPass.current,
                                            onChange: (e)=>setNewPass({
                                                    ...newPass,
                                                    current: e.target.value
                                                })
                                        }, void 0, false, {
                                            fileName: "[project]/Documents/help/HRMS/src/components/Profile/index.js",
                                            lineNumber: 351,
                                            columnNumber: 33
                                        }, ("TURBOPACK compile-time value", void 0))
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Documents/help/HRMS/src/components/Profile/index.js",
                                    lineNumber: 349,
                                    columnNumber: 29
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$help$2f$HRMS$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    style: {
                                        marginBottom: '20px'
                                    },
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$help$2f$HRMS$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                            style: {
                                                fontSize: '12px',
                                                fontWeight: '700',
                                                textTransform: 'uppercase',
                                                color: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$help$2f$HRMS$2f$src$2f$styles$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["tokens"].colors.secondary,
                                                marginBottom: '8px',
                                                display: 'block'
                                            },
                                            children: "New Secret Key"
                                        }, void 0, false, {
                                            fileName: "[project]/Documents/help/HRMS/src/components/Profile/index.js",
                                            lineNumber: 360,
                                            columnNumber: 33
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$help$2f$HRMS$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                            type: "password",
                                            style: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$help$2f$HRMS$2f$src$2f$styles$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["styles"].input,
                                            required: true,
                                            value: newPass.next,
                                            onChange: (e)=>setNewPass({
                                                    ...newPass,
                                                    next: e.target.value
                                                })
                                        }, void 0, false, {
                                            fileName: "[project]/Documents/help/HRMS/src/components/Profile/index.js",
                                            lineNumber: 361,
                                            columnNumber: 33
                                        }, ("TURBOPACK compile-time value", void 0))
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Documents/help/HRMS/src/components/Profile/index.js",
                                    lineNumber: 359,
                                    columnNumber: 29
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$help$2f$HRMS$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    style: {
                                        marginBottom: '32px'
                                    },
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$help$2f$HRMS$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                            style: {
                                                fontSize: '12px',
                                                fontWeight: '700',
                                                textTransform: 'uppercase',
                                                color: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$help$2f$HRMS$2f$src$2f$styles$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["tokens"].colors.secondary,
                                                marginBottom: '8px',
                                                display: 'block'
                                            },
                                            children: "Validate Protocol"
                                        }, void 0, false, {
                                            fileName: "[project]/Documents/help/HRMS/src/components/Profile/index.js",
                                            lineNumber: 370,
                                            columnNumber: 33
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$help$2f$HRMS$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                            type: "password",
                                            style: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$help$2f$HRMS$2f$src$2f$styles$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["styles"].input,
                                            required: true,
                                            value: newPass.confirm,
                                            onChange: (e)=>setNewPass({
                                                    ...newPass,
                                                    confirm: e.target.value
                                                })
                                        }, void 0, false, {
                                            fileName: "[project]/Documents/help/HRMS/src/components/Profile/index.js",
                                            lineNumber: 371,
                                            columnNumber: 33
                                        }, ("TURBOPACK compile-time value", void 0))
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Documents/help/HRMS/src/components/Profile/index.js",
                                    lineNumber: 369,
                                    columnNumber: 29
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$help$2f$HRMS$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    style: {
                                        display: 'flex',
                                        gap: '12px'
                                    },
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$help$2f$HRMS$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            type: "button",
                                            onClick: ()=>setShowPasswordModal(false),
                                            style: {
                                                ...__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$help$2f$HRMS$2f$src$2f$styles$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["styles"].button.outline,
                                                flex: 1
                                            },
                                            children: "Abort"
                                        }, void 0, false, {
                                            fileName: "[project]/Documents/help/HRMS/src/components/Profile/index.js",
                                            lineNumber: 380,
                                            columnNumber: 33
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$help$2f$HRMS$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            type: "submit",
                                            style: {
                                                ...__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$help$2f$HRMS$2f$src$2f$styles$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["styles"].button.primary,
                                                flex: 2
                                            },
                                            children: "Synchronize Passcode"
                                        }, void 0, false, {
                                            fileName: "[project]/Documents/help/HRMS/src/components/Profile/index.js",
                                            lineNumber: 381,
                                            columnNumber: 33
                                        }, ("TURBOPACK compile-time value", void 0))
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Documents/help/HRMS/src/components/Profile/index.js",
                                    lineNumber: 379,
                                    columnNumber: 29
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Documents/help/HRMS/src/components/Profile/index.js",
                            lineNumber: 348,
                            columnNumber: 25
                        }, ("TURBOPACK compile-time value", void 0))
                    ]
                }, void 0, true, {
                    fileName: "[project]/Documents/help/HRMS/src/components/Profile/index.js",
                    lineNumber: 338,
                    columnNumber: 21
                }, ("TURBOPACK compile-time value", void 0))
            }, void 0, false, {
                fileName: "[project]/Documents/help/HRMS/src/components/Profile/index.js",
                lineNumber: 337,
                columnNumber: 17
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/Documents/help/HRMS/src/components/Profile/index.js",
        lineNumber: 100,
        columnNumber: 9
    }, ("TURBOPACK compile-time value", void 0));
};
const __TURBOPACK__default__export__ = Profile;
}),
"[project]/Documents/help/HRMS/src/components/AuthenticatedArea/index.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$help$2f$HRMS$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/help/HRMS/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$help$2f$HRMS$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/help/HRMS/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$help$2f$HRMS$2f$node_modules$2f$firebase$2f$auth$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/Documents/help/HRMS/node_modules/firebase/auth/dist/index.mjs [app-ssr] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$help$2f$HRMS$2f$node_modules$2f40$firebase$2f$auth$2f$dist$2f$node$2d$esm$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/help/HRMS/node_modules/@firebase/auth/dist/node-esm/index.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$help$2f$HRMS$2f$src$2f$firebase$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/help/HRMS/src/firebase.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$help$2f$HRMS$2f$src$2f$styles$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/help/HRMS/src/styles.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$help$2f$HRMS$2f$src$2f$components$2f$Sidebar$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/help/HRMS/src/components/Sidebar/index.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$help$2f$HRMS$2f$src$2f$components$2f$Dashboard$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/help/HRMS/src/components/Dashboard/index.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$help$2f$HRMS$2f$src$2f$components$2f$Employees$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/help/HRMS/src/components/Employees/index.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$help$2f$HRMS$2f$src$2f$components$2f$Attendance$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/help/HRMS/src/components/Attendance/index.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$help$2f$HRMS$2f$src$2f$components$2f$Leaves$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/help/HRMS/src/components/Leaves/index.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$help$2f$HRMS$2f$src$2f$components$2f$AdminPanel$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/help/HRMS/src/components/AdminPanel/index.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$help$2f$HRMS$2f$src$2f$components$2f$Profile$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/help/HRMS/src/components/Profile/index.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$help$2f$HRMS$2f$node_modules$2f$firebase$2f$firestore$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/Documents/help/HRMS/node_modules/firebase/firestore/dist/index.mjs [app-ssr] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$help$2f$HRMS$2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/help/HRMS/node_modules/@firebase/firestore/dist/index.node.mjs [app-ssr] (ecmascript)");
;
;
;
;
;
;
;
;
;
;
;
;
;
;
const AuthenticatedArea = ({ user })=>{
    const [activeTab, setActiveTab] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$help$2f$HRMS$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])('dashboard');
    const [searchTerm, setSearchTerm] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$help$2f$HRMS$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])('');
    const [needsProfileSetup, setNeedsProfileSetup] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$help$2f$HRMS$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [profileData, setProfileData] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$help$2f$HRMS$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])({});
    const adminEmails = [
        'admin@hrmate.com'
    ];
    const isAdmin = adminEmails.includes(user.email) || user.isAdmin;
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$help$2f$HRMS$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        const checkProfile = async ()=>{
            if (isAdmin) return;
            // If we logged in via Firestore, we might already have the data
            if (user.profileComplete === false) {
                setNeedsProfileSetup(true);
                setProfileData(user);
            } else {
                // Double check Firestore for Auth users
                const docRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$help$2f$HRMS$2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["doc"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$help$2f$HRMS$2f$src$2f$firebase$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["db"], 'employees', user.uid);
                const docSnap = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$help$2f$HRMS$2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getDoc"])(docRef);
                if (docSnap.exists() && docSnap.data().profileComplete === false) {
                    setNeedsProfileSetup(true);
                    setProfileData({
                        ...docSnap.data(),
                        uid: user.uid
                    });
                }
            }
        };
        checkProfile();
    }, [
        user,
        isAdmin
    ]);
    const handleProfileComplete = async (e)=>{
        e.preventDefault();
        try {
            const { uid, ...dataToSave } = profileData;
            await (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$help$2f$HRMS$2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["updateDoc"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$help$2f$HRMS$2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["doc"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$help$2f$HRMS$2f$src$2f$firebase$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["db"], 'employees', uid || user.uid), {
                ...dataToSave,
                profileComplete: true
            });
            setNeedsProfileSetup(false);
        } catch (err) {
            console.error(err);
        }
    };
    if (needsProfileSetup) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$help$2f$HRMS$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            style: {
                ...__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$help$2f$HRMS$2f$src$2f$styles$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["styles"].app,
                background: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$help$2f$HRMS$2f$src$2f$styles$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["tokens"].colors.background,
                alignItems: 'center',
                justifyContent: 'center',
                padding: '24px',
                backgroundImage: 'radial-gradient(circle at 10% 10%, #E0E7FF 0%, transparent 30%)'
            },
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$help$2f$HRMS$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    ...__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$help$2f$HRMS$2f$src$2f$styles$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["styles"].card,
                    width: '100%',
                    maxWidth: '440px',
                    padding: '48px',
                    boxShadow: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$help$2f$HRMS$2f$src$2f$styles$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["tokens"].shadow.xl
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$help$2f$HRMS$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            textAlign: 'center',
                            marginBottom: '40px'
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$help$2f$HRMS$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                style: {
                                    width: '48px',
                                    height: '48px',
                                    background: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$help$2f$HRMS$2f$src$2f$styles$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["tokens"].colors.accent + '10',
                                    color: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$help$2f$HRMS$2f$src$2f$styles$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["tokens"].colors.accent,
                                    borderRadius: '12px',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    margin: '0 auto 16px'
                                },
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$help$2f$HRMS$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "material-symbols-outlined",
                                    style: {
                                        fontSize: '24px'
                                    },
                                    children: "id_card"
                                }, void 0, false, {
                                    fileName: "[project]/Documents/help/HRMS/src/components/AuthenticatedArea/index.js",
                                    lineNumber: 75,
                                    columnNumber: 15
                                }, ("TURBOPACK compile-time value", void 0))
                            }, void 0, false, {
                                fileName: "[project]/Documents/help/HRMS/src/components/AuthenticatedArea/index.js",
                                lineNumber: 64,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$help$2f$HRMS$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                style: {
                                    fontSize: '24px',
                                    fontWeight: '800',
                                    color: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$help$2f$HRMS$2f$src$2f$styles$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["tokens"].colors.primary,
                                    marginBottom: '8px',
                                    letterSpacing: '-0.02em'
                                },
                                children: "Finalize Identity"
                            }, void 0, false, {
                                fileName: "[project]/Documents/help/HRMS/src/components/AuthenticatedArea/index.js",
                                lineNumber: 77,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$help$2f$HRMS$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                style: {
                                    fontSize: '14px',
                                    color: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$help$2f$HRMS$2f$src$2f$styles$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["tokens"].colors.secondary,
                                    lineHeight: '1.6'
                                },
                                children: "Synchronize your professional record to activate your workspace access."
                            }, void 0, false, {
                                fileName: "[project]/Documents/help/HRMS/src/components/AuthenticatedArea/index.js",
                                lineNumber: 78,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Documents/help/HRMS/src/components/AuthenticatedArea/index.js",
                        lineNumber: 63,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$help$2f$HRMS$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
                        onSubmit: handleProfileComplete,
                        style: {
                            display: 'grid',
                            gap: '24px'
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$help$2f$HRMS$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$help$2f$HRMS$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                        style: {
                                            fontSize: '11px',
                                            fontWeight: '800',
                                            color: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$help$2f$HRMS$2f$src$2f$styles$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["tokens"].colors.secondary,
                                            textTransform: 'uppercase',
                                            letterSpacing: '0.05em',
                                            marginBottom: '8px',
                                            display: 'block'
                                        },
                                        children: "Primary Telephone"
                                    }, void 0, false, {
                                        fileName: "[project]/Documents/help/HRMS/src/components/AuthenticatedArea/index.js",
                                        lineNumber: 83,
                                        columnNumber: 15
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$help$2f$HRMS$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                        style: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$help$2f$HRMS$2f$src$2f$styles$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["styles"].input,
                                        required: true,
                                        value: profileData.phone || '',
                                        onChange: (e)=>setProfileData({
                                                ...profileData,
                                                phone: e.target.value
                                            }),
                                        placeholder: "+1 (555) 000-0000"
                                    }, void 0, false, {
                                        fileName: "[project]/Documents/help/HRMS/src/components/AuthenticatedArea/index.js",
                                        lineNumber: 84,
                                        columnNumber: 15
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Documents/help/HRMS/src/components/AuthenticatedArea/index.js",
                                lineNumber: 82,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$help$2f$HRMS$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$help$2f$HRMS$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                        style: {
                                            fontSize: '11px',
                                            fontWeight: '800',
                                            color: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$help$2f$HRMS$2f$src$2f$styles$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["tokens"].colors.secondary,
                                            textTransform: 'uppercase',
                                            letterSpacing: '0.05em',
                                            marginBottom: '8px',
                                            display: 'block'
                                        },
                                        children: "Date of Birth"
                                    }, void 0, false, {
                                        fileName: "[project]/Documents/help/HRMS/src/components/AuthenticatedArea/index.js",
                                        lineNumber: 93,
                                        columnNumber: 15
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$help$2f$HRMS$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                        type: "date",
                                        style: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$help$2f$HRMS$2f$src$2f$styles$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["styles"].input,
                                        required: true,
                                        value: profileData.dob || '',
                                        onChange: (e)=>setProfileData({
                                                ...profileData,
                                                dob: e.target.value
                                            })
                                    }, void 0, false, {
                                        fileName: "[project]/Documents/help/HRMS/src/components/AuthenticatedArea/index.js",
                                        lineNumber: 94,
                                        columnNumber: 15
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Documents/help/HRMS/src/components/AuthenticatedArea/index.js",
                                lineNumber: 92,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$help$2f$HRMS$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$help$2f$HRMS$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                        style: {
                                            fontSize: '11px',
                                            fontWeight: '800',
                                            color: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$help$2f$HRMS$2f$src$2f$styles$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["tokens"].colors.secondary,
                                            textTransform: 'uppercase',
                                            letterSpacing: '0.05em',
                                            marginBottom: '8px',
                                            display: 'block'
                                        },
                                        children: "Residential Address"
                                    }, void 0, false, {
                                        fileName: "[project]/Documents/help/HRMS/src/components/AuthenticatedArea/index.js",
                                        lineNumber: 103,
                                        columnNumber: 15
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$help$2f$HRMS$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("textarea", {
                                        style: {
                                            ...__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$help$2f$HRMS$2f$src$2f$styles$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["styles"].input,
                                            minHeight: '100px',
                                            resize: 'none'
                                        },
                                        required: true,
                                        value: profileData.address || '',
                                        onChange: (e)=>setProfileData({
                                                ...profileData,
                                                address: e.target.value
                                            }),
                                        placeholder: "123 Main St, City, Country"
                                    }, void 0, false, {
                                        fileName: "[project]/Documents/help/HRMS/src/components/AuthenticatedArea/index.js",
                                        lineNumber: 104,
                                        columnNumber: 15
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Documents/help/HRMS/src/components/AuthenticatedArea/index.js",
                                lineNumber: 102,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$help$2f$HRMS$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                style: {
                                    ...__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$help$2f$HRMS$2f$src$2f$styles$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["styles"].button.primary,
                                    width: '100%',
                                    padding: '14px',
                                    marginTop: '8px',
                                    fontSize: '15px'
                                },
                                children: "Activate Workforce ID"
                            }, void 0, false, {
                                fileName: "[project]/Documents/help/HRMS/src/components/AuthenticatedArea/index.js",
                                lineNumber: 112,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Documents/help/HRMS/src/components/AuthenticatedArea/index.js",
                        lineNumber: 81,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/Documents/help/HRMS/src/components/AuthenticatedArea/index.js",
                lineNumber: 62,
                columnNumber: 9
            }, ("TURBOPACK compile-time value", void 0))
        }, void 0, false, {
            fileName: "[project]/Documents/help/HRMS/src/components/AuthenticatedArea/index.js",
            lineNumber: 61,
            columnNumber: 7
        }, ("TURBOPACK compile-time value", void 0));
    }
    const handleLogout = ()=>{
        if (user.uid === 'hardcoded-admin') {
            window.location.reload();
        } else {
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$help$2f$HRMS$2f$node_modules$2f40$firebase$2f$auth$2f$dist$2f$node$2d$esm$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["signOut"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$help$2f$HRMS$2f$src$2f$firebase$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["auth"]);
        }
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$help$2f$HRMS$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        style: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$help$2f$HRMS$2f$src$2f$styles$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["styles"].app,
        className: "animate-fade",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$help$2f$HRMS$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$help$2f$HRMS$2f$src$2f$components$2f$Sidebar$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                activeTab: activeTab,
                setActiveTab: setActiveTab,
                isAdmin: isAdmin
            }, void 0, false, {
                fileName: "[project]/Documents/help/HRMS/src/components/AuthenticatedArea/index.js",
                lineNumber: 129,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$help$2f$HRMS$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$help$2f$HRMS$2f$src$2f$styles$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["styles"].main,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$help$2f$HRMS$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            ...__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$help$2f$HRMS$2f$src$2f$styles$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["styles"].header,
                            paddingBottom: '32px',
                            borderBottom: `1px solid ${__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$help$2f$HRMS$2f$src$2f$styles$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["tokens"].colors.border}`,
                            marginBottom: '40px'
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$help$2f$HRMS$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$help$2f$HRMS$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        style: {
                                            display: 'flex',
                                            alignItems: 'center',
                                            gap: '8px',
                                            color: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$help$2f$HRMS$2f$src$2f$styles$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["tokens"].colors.secondary,
                                            fontSize: '12px',
                                            fontWeight: '700',
                                            textTransform: 'uppercase',
                                            letterSpacing: '0.05em',
                                            marginBottom: '4px'
                                        },
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$help$2f$HRMS$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "material-symbols-outlined",
                                                style: {
                                                    fontSize: '14px',
                                                    color: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$help$2f$HRMS$2f$src$2f$styles$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["tokens"].colors.accent
                                                },
                                                children: "meeting_room"
                                            }, void 0, false, {
                                                fileName: "[project]/Documents/help/HRMS/src/components/AuthenticatedArea/index.js",
                                                lineNumber: 135,
                                                columnNumber: 15
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            "Instance: ",
                                            user.email
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Documents/help/HRMS/src/components/AuthenticatedArea/index.js",
                                        lineNumber: 134,
                                        columnNumber: 13
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$help$2f$HRMS$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        style: {
                                            ...__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$help$2f$HRMS$2f$src$2f$styles$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["styles"].greeting,
                                            fontSize: '32px'
                                        },
                                        children: isAdmin ? 'System Administrator' : user.name || user.displayName || user.email.split('@')[0]
                                    }, void 0, false, {
                                        fileName: "[project]/Documents/help/HRMS/src/components/AuthenticatedArea/index.js",
                                        lineNumber: 138,
                                        columnNumber: 13
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Documents/help/HRMS/src/components/AuthenticatedArea/index.js",
                                lineNumber: 133,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$help$2f$HRMS$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                style: {
                                    display: 'flex',
                                    alignItems: 'center',
                                    gap: '16px'
                                },
                                children: [
                                    activeTab === 'employees' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$help$2f$HRMS$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        style: {
                                            position: 'relative'
                                        },
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$help$2f$HRMS$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                style: {
                                                    ...__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$help$2f$HRMS$2f$src$2f$styles$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["styles"].input,
                                                    paddingLeft: '44px',
                                                    width: '320px',
                                                    backgroundColor: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$help$2f$HRMS$2f$src$2f$styles$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["tokens"].colors.white,
                                                    border: `1px solid ${__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$help$2f$HRMS$2f$src$2f$styles$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["tokens"].colors.border}`,
                                                    boxShadow: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$help$2f$HRMS$2f$src$2f$styles$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["tokens"].shadow.sm
                                                },
                                                placeholder: "Global Workforce Search...",
                                                value: searchTerm,
                                                onChange: (e)=>setSearchTerm(e.target.value)
                                            }, void 0, false, {
                                                fileName: "[project]/Documents/help/HRMS/src/components/AuthenticatedArea/index.js",
                                                lineNumber: 144,
                                                columnNumber: 17
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$help$2f$HRMS$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "material-symbols-outlined",
                                                style: {
                                                    position: 'absolute',
                                                    left: '16px',
                                                    top: '50%',
                                                    transform: 'translateY(-50%)',
                                                    fontSize: '18px',
                                                    color: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$help$2f$HRMS$2f$src$2f$styles$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["tokens"].colors.secondary
                                                },
                                                children: "search"
                                            }, void 0, false, {
                                                fileName: "[project]/Documents/help/HRMS/src/components/AuthenticatedArea/index.js",
                                                lineNumber: 157,
                                                columnNumber: 17
                                            }, ("TURBOPACK compile-time value", void 0))
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Documents/help/HRMS/src/components/AuthenticatedArea/index.js",
                                        lineNumber: 143,
                                        columnNumber: 15
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$help$2f$HRMS$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        onClick: handleLogout,
                                        style: {
                                            ...__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$help$2f$HRMS$2f$src$2f$styles$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["styles"].button.outline,
                                            padding: '10px 18px',
                                            fontSize: '13px',
                                            fontWeight: '700',
                                            background: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$help$2f$HRMS$2f$src$2f$styles$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["tokens"].colors.white,
                                            color: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$help$2f$HRMS$2f$src$2f$styles$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["tokens"].colors.error,
                                            borderColor: '#FEE2E2',
                                            transition: 'all 0.2s ease'
                                        },
                                        onMouseOver: (e)=>{
                                            e.currentTarget.style.backgroundColor = '#FEF2F2';
                                            e.currentTarget.style.borderColor = '#FCA5A5';
                                        },
                                        onMouseOut: (e)=>{
                                            e.currentTarget.style.backgroundColor = __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$help$2f$HRMS$2f$src$2f$styles$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["tokens"].colors.white;
                                            e.currentTarget.style.borderColor = '#FEE2E2';
                                        },
                                        children: [
                                            "Sign Out",
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$help$2f$HRMS$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "material-symbols-outlined",
                                                style: {
                                                    fontSize: '18px'
                                                },
                                                children: "logout"
                                            }, void 0, false, {
                                                fileName: "[project]/Documents/help/HRMS/src/components/AuthenticatedArea/index.js",
                                                lineNumber: 177,
                                                columnNumber: 15
                                            }, ("TURBOPACK compile-time value", void 0))
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Documents/help/HRMS/src/components/AuthenticatedArea/index.js",
                                        lineNumber: 161,
                                        columnNumber: 13
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Documents/help/HRMS/src/components/AuthenticatedArea/index.js",
                                lineNumber: 141,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Documents/help/HRMS/src/components/AuthenticatedArea/index.js",
                        lineNumber: 132,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$help$2f$HRMS$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            maxWidth: '1200px',
                            margin: '0 auto'
                        },
                        children: [
                            activeTab === 'dashboard' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$help$2f$HRMS$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$help$2f$HRMS$2f$src$2f$components$2f$Dashboard$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                setActiveTab: setActiveTab,
                                isAdmin: isAdmin,
                                user: user
                            }, void 0, false, {
                                fileName: "[project]/Documents/help/HRMS/src/components/AuthenticatedArea/index.js",
                                lineNumber: 183,
                                columnNumber: 41
                            }, ("TURBOPACK compile-time value", void 0)),
                            activeTab === 'employees' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$help$2f$HRMS$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$help$2f$HRMS$2f$src$2f$components$2f$Employees$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                searchTerm: searchTerm,
                                isAdmin: isAdmin
                            }, void 0, false, {
                                fileName: "[project]/Documents/help/HRMS/src/components/AuthenticatedArea/index.js",
                                lineNumber: 184,
                                columnNumber: 41
                            }, ("TURBOPACK compile-time value", void 0)),
                            activeTab === 'attendance' && !isAdmin && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$help$2f$HRMS$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$help$2f$HRMS$2f$src$2f$components$2f$Attendance$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                user: user
                            }, void 0, false, {
                                fileName: "[project]/Documents/help/HRMS/src/components/AuthenticatedArea/index.js",
                                lineNumber: 185,
                                columnNumber: 54
                            }, ("TURBOPACK compile-time value", void 0)),
                            activeTab === 'leaves' && !isAdmin && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$help$2f$HRMS$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$help$2f$HRMS$2f$src$2f$components$2f$Leaves$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                user: user
                            }, void 0, false, {
                                fileName: "[project]/Documents/help/HRMS/src/components/AuthenticatedArea/index.js",
                                lineNumber: 186,
                                columnNumber: 50
                            }, ("TURBOPACK compile-time value", void 0)),
                            activeTab === 'profile' && !isAdmin && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$help$2f$HRMS$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$help$2f$HRMS$2f$src$2f$components$2f$Profile$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                user: user
                            }, void 0, false, {
                                fileName: "[project]/Documents/help/HRMS/src/components/AuthenticatedArea/index.js",
                                lineNumber: 187,
                                columnNumber: 51
                            }, ("TURBOPACK compile-time value", void 0)),
                            activeTab.startsWith('admin_') && isAdmin && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$help$2f$HRMS$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$help$2f$HRMS$2f$src$2f$components$2f$AdminPanel$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                fixedModule: activeTab.split('_')[1]
                            }, void 0, false, {
                                fileName: "[project]/Documents/help/HRMS/src/components/AuthenticatedArea/index.js",
                                lineNumber: 188,
                                columnNumber: 57
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Documents/help/HRMS/src/components/AuthenticatedArea/index.js",
                        lineNumber: 182,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/Documents/help/HRMS/src/components/AuthenticatedArea/index.js",
                lineNumber: 131,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/Documents/help/HRMS/src/components/AuthenticatedArea/index.js",
        lineNumber: 128,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
const __TURBOPACK__default__export__ = AuthenticatedArea;
}),
"[externals]/next/dist/server/app-render/action-async-storage.external.js [external] (next/dist/server/app-render/action-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/server/app-render/action-async-storage.external.js", () => require("next/dist/server/app-render/action-async-storage.external.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/app-render/work-unit-async-storage.external.js [external] (next/dist/server/app-render/work-unit-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/server/app-render/work-unit-async-storage.external.js", () => require("next/dist/server/app-render/work-unit-async-storage.external.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/app-render/work-async-storage.external.js [external] (next/dist/server/app-render/work-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/server/app-render/work-async-storage.external.js", () => require("next/dist/server/app-render/work-async-storage.external.js"));

module.exports = mod;
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
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$help$2f$HRMS$2f$src$2f$components$2f$AuthenticatedArea$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/help/HRMS/src/components/AuthenticatedArea/index.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$help$2f$HRMS$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/help/HRMS/node_modules/next/navigation.js [app-ssr] (ecmascript)");
'use client';
;
;
;
;
;
;
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
                            lineNumber: 27,
                            columnNumber: 25
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/Documents/help/HRMS/src/app/page.js",
                        lineNumber: 16,
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
                        lineNumber: 29,
                        columnNumber: 21
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$help$2f$HRMS$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("style", {
                        children: `@keyframes pulse { 0%, 100% { opacity: 1; } 50% { opacity: .5; } }`
                    }, void 0, false, {
                        fileName: "[project]/Documents/help/HRMS/src/app/page.js",
                        lineNumber: 30,
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
                        lineNumber: 31,
                        columnNumber: 21
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Documents/help/HRMS/src/app/page.js",
                lineNumber: 15,
                columnNumber: 17
            }, this)
        }, void 0, false, {
            fileName: "[project]/Documents/help/HRMS/src/app/page.js",
            lineNumber: 14,
            columnNumber: 13
        }, this);
    }
    if (!user) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$help$2f$HRMS$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$help$2f$HRMS$2f$src$2f$components$2f$LoginForm$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
            onLoginSuccess: (u)=>setUser(u),
            userType: "employee"
        }, void 0, false, {
            fileName: "[project]/Documents/help/HRMS/src/app/page.js",
            lineNumber: 38,
            columnNumber: 16
        }, this);
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$help$2f$HRMS$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$help$2f$HRMS$2f$src$2f$components$2f$AuthenticatedArea$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
        user: user
    }, void 0, false, {
        fileName: "[project]/Documents/help/HRMS/src/app/page.js",
        lineNumber: 41,
        columnNumber: 12
    }, this);
}
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__c0b78079._.js.map