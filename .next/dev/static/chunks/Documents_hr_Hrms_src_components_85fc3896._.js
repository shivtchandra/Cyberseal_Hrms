(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/Documents/hr/Hrms/src/components/LoginForm/index.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
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
const LoginForm = ({ onLoginSuccess, userType = 'employee' })=>{
    _s();
    const [email, setEmail] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$hr$2f$Hrms$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('');
    const [password, setPassword] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$hr$2f$Hrms$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('');
    const [loading, setLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$hr$2f$Hrms$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
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
            const authUser = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$hr$2f$Hrms$2f$node_modules$2f40$firebase$2f$auth$2f$dist$2f$esm$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["signInWithEmailAndPassword"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$hr$2f$Hrms$2f$src$2f$firebase$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["auth"], email, password);
            onLoginSuccess(authUser.user);
        } catch (err) {
            try {
                const q = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$hr$2f$Hrms$2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["query"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$hr$2f$Hrms$2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["collection"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$hr$2f$Hrms$2f$src$2f$firebase$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["db"], 'employees'), (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$hr$2f$Hrms$2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["where"])('email', '==', email), (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$hr$2f$Hrms$2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["where"])('password', '==', password));
                const snapshot = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$hr$2f$Hrms$2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getDocs"])(q);
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
        backgroundColor: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$hr$2f$Hrms$2f$src$2f$styles$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["tokens"].colors.background,
        backgroundImage: 'radial-gradient(circle at 20% 20%, #CCFBF1 0%, transparent 40%), radial-gradient(circle at 80% 80%, #F1F5F9 0%, transparent 40%)',
        fontFamily: '"Funnel Display", sans-serif'
    };
    const formStyle = {
        width: '100%',
        maxWidth: '440px',
        backgroundColor: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$hr$2f$Hrms$2f$src$2f$styles$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["tokens"].colors.white,
        padding: '56px 48px',
        borderRadius: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$hr$2f$Hrms$2f$src$2f$styles$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["tokens"].radius.xl,
        boxShadow: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$hr$2f$Hrms$2f$src$2f$styles$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["tokens"].shadow.xl,
        border: `1px solid ${__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$hr$2f$Hrms$2f$src$2f$styles$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["tokens"].colors.border}`
    };
    const labelStyle = {
        display: 'block',
        fontSize: '13px',
        fontWeight: '700',
        color: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$hr$2f$Hrms$2f$src$2f$styles$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["tokens"].colors.primary,
        marginBottom: '8px',
        textTransform: 'uppercase',
        letterSpacing: '0.05em'
    };
    const footerStyle = {
        marginTop: '40px',
        textAlign: 'center',
        fontSize: '12px',
        color: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$hr$2f$Hrms$2f$src$2f$styles$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["tokens"].colors.secondary,
        lineHeight: '1.6'
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$hr$2f$Hrms$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        style: containerStyle,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$hr$2f$Hrms$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
            onSubmit: submit,
            style: formStyle,
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
                                lineNumber: 112,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0))
                        }, void 0, false, {
                            fileName: "[project]/Documents/hr/Hrms/src/components/LoginForm/index.js",
                            lineNumber: 101,
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
                            lineNumber: 114,
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
                            lineNumber: 115,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0))
                    ]
                }, void 0, true, {
                    fileName: "[project]/Documents/hr/Hrms/src/components/LoginForm/index.js",
                    lineNumber: 100,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$hr$2f$Hrms$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    style: {
                        marginBottom: '24px'
                    },
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$hr$2f$Hrms$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                            style: labelStyle,
                            children: "Corporate Email"
                        }, void 0, false, {
                            fileName: "[project]/Documents/hr/Hrms/src/components/LoginForm/index.js",
                            lineNumber: 121,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$hr$2f$Hrms$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                            style: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$hr$2f$Hrms$2f$src$2f$styles$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["styles"].input,
                            placeholder: "name@hrmate.com",
                            type: "email",
                            required: true,
                            value: email,
                            onChange: (e)=>setEmail(e.target.value)
                        }, void 0, false, {
                            fileName: "[project]/Documents/hr/Hrms/src/components/LoginForm/index.js",
                            lineNumber: 122,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0))
                    ]
                }, void 0, true, {
                    fileName: "[project]/Documents/hr/Hrms/src/components/LoginForm/index.js",
                    lineNumber: 120,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$hr$2f$Hrms$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    style: {
                        marginBottom: '40px'
                    },
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$hr$2f$Hrms$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                            style: labelStyle,
                            children: "Secure Passcode"
                        }, void 0, false, {
                            fileName: "[project]/Documents/hr/Hrms/src/components/LoginForm/index.js",
                            lineNumber: 133,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$hr$2f$Hrms$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                            style: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$hr$2f$Hrms$2f$src$2f$styles$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["styles"].input,
                            placeholder: "••••••••",
                            type: "password",
                            required: true,
                            value: password,
                            onChange: (e)=>setPassword(e.target.value)
                        }, void 0, false, {
                            fileName: "[project]/Documents/hr/Hrms/src/components/LoginForm/index.js",
                            lineNumber: 134,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0))
                    ]
                }, void 0, true, {
                    fileName: "[project]/Documents/hr/Hrms/src/components/LoginForm/index.js",
                    lineNumber: 132,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$hr$2f$Hrms$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                    style: {
                        ...__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$hr$2f$Hrms$2f$src$2f$styles$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["styles"].button.primary,
                        width: '100%',
                        height: '48px',
                        fontSize: '15px'
                    },
                    disabled: loading,
                    children: loading ? 'Authenticating...' : 'Establish Connection'
                }, void 0, false, {
                    fileName: "[project]/Documents/hr/Hrms/src/components/LoginForm/index.js",
                    lineNumber: 144,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$hr$2f$Hrms$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    style: {
                        ...footerStyle,
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
                            lineNumber: 149,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0)),
                        "Restricted access. Authorized personnel only."
                    ]
                }, void 0, true, {
                    fileName: "[project]/Documents/hr/Hrms/src/components/LoginForm/index.js",
                    lineNumber: 148,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0))
            ]
        }, void 0, true, {
            fileName: "[project]/Documents/hr/Hrms/src/components/LoginForm/index.js",
            lineNumber: 99,
            columnNumber: 7
        }, ("TURBOPACK compile-time value", void 0))
    }, void 0, false, {
        fileName: "[project]/Documents/hr/Hrms/src/components/LoginForm/index.js",
        lineNumber: 98,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
_s(LoginForm, "Tug1/1aWx/KAV2WSZABTI7relys=");
_c = LoginForm;
const __TURBOPACK__default__export__ = LoginForm;
var _c;
__turbopack_context__.k.register(_c, "LoginForm");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Documents/hr/Hrms/src/components/Dashboard/index.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$hr$2f$Hrms$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/hr/Hrms/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$hr$2f$Hrms$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/hr/Hrms/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$hr$2f$Hrms$2f$src$2f$firebase$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/hr/Hrms/src/firebase.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$hr$2f$Hrms$2f$node_modules$2f$firebase$2f$firestore$2f$dist$2f$esm$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/Documents/hr/Hrms/node_modules/firebase/firestore/dist/esm/index.esm.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$hr$2f$Hrms$2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/hr/Hrms/node_modules/@firebase/firestore/dist/index.esm.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$hr$2f$Hrms$2f$src$2f$styles$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/hr/Hrms/src/styles.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
;
;
;
;
const Dashboard = ({ setActiveTab, isAdmin, user })=>{
    _s();
    const [employees, setEmployees] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$hr$2f$Hrms$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [leaveRequests, setLeaveRequests] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$hr$2f$Hrms$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [announcements, setAnnouncements] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$hr$2f$Hrms$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [personalAttendance, setPersonalAttendance] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$hr$2f$Hrms$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [holidays, setHolidays] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$hr$2f$Hrms$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$hr$2f$Hrms$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Dashboard.useEffect": ()=>{
            const unsubEmp = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$hr$2f$Hrms$2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["onSnapshot"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$hr$2f$Hrms$2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["collection"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$hr$2f$Hrms$2f$src$2f$firebase$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["db"], 'employees'), {
                "Dashboard.useEffect.unsubEmp": (s)=>setEmployees(s.docs.map({
                        "Dashboard.useEffect.unsubEmp": (d)=>({
                                id: d.id,
                                ...d.data()
                            })
                    }["Dashboard.useEffect.unsubEmp"]))
            }["Dashboard.useEffect.unsubEmp"]);
            const unsubLeave = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$hr$2f$Hrms$2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["onSnapshot"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$hr$2f$Hrms$2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["collection"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$hr$2f$Hrms$2f$src$2f$firebase$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["db"], 'leaveRequests'), {
                "Dashboard.useEffect.unsubLeave": (s)=>{
                    const all = s.docs.map({
                        "Dashboard.useEffect.unsubLeave.all": (d)=>d.data()
                    }["Dashboard.useEffect.unsubLeave.all"]);
                    setLeaveRequests(isAdmin ? all : all.filter({
                        "Dashboard.useEffect.unsubLeave": (l)=>l.userEmail === user.email
                    }["Dashboard.useEffect.unsubLeave"]));
                }
            }["Dashboard.useEffect.unsubLeave"]);
            const unsubAnnounce = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$hr$2f$Hrms$2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["onSnapshot"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$hr$2f$Hrms$2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["collection"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$hr$2f$Hrms$2f$src$2f$firebase$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["db"], 'announcements'), {
                "Dashboard.useEffect.unsubAnnounce": (s)=>setAnnouncements(s.docs.map({
                        "Dashboard.useEffect.unsubAnnounce": (d)=>({
                                id: d.id,
                                ...d.data()
                            })
                    }["Dashboard.useEffect.unsubAnnounce"]))
            }["Dashboard.useEffect.unsubAnnounce"]);
            const unsubHolidays = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$hr$2f$Hrms$2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["onSnapshot"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$hr$2f$Hrms$2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["collection"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$hr$2f$Hrms$2f$src$2f$firebase$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["db"], 'holidays'), {
                "Dashboard.useEffect.unsubHolidays": (s)=>setHolidays(s.docs.map({
                        "Dashboard.useEffect.unsubHolidays": (d)=>({
                                id: d.id,
                                ...d.data()
                            })
                    }["Dashboard.useEffect.unsubHolidays"]))
            }["Dashboard.useEffect.unsubHolidays"]);
            let unsubAtt;
            if (!isAdmin && user) {
                unsubAtt = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$hr$2f$Hrms$2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["onSnapshot"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$hr$2f$Hrms$2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["collection"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$hr$2f$Hrms$2f$src$2f$firebase$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["db"], 'attendance'), {
                    "Dashboard.useEffect": (s)=>{
                        setPersonalAttendance(s.docs.map({
                            "Dashboard.useEffect": (d)=>d.data()
                        }["Dashboard.useEffect"]).filter({
                            "Dashboard.useEffect": (a)=>a.userEmail === user.email
                        }["Dashboard.useEffect"]));
                    }
                }["Dashboard.useEffect"]);
            }
            return ({
                "Dashboard.useEffect": ()=>{
                    unsubEmp();
                    unsubLeave();
                    unsubAnnounce();
                    unsubHolidays();
                    if (unsubAtt) unsubAtt();
                }
            })["Dashboard.useEffect"];
        }
    }["Dashboard.useEffect"], [
        isAdmin,
        user
    ]);
    const currentUser = employees.find((e)=>e.email === user.email) || user;
    const deptColleagues = employees.filter((e)=>e.dept === currentUser.dept && e.email !== currentUser.email);
    const today = new Date().toISOString().split('T')[0];
    const punchedInToday = personalAttendance.some((a)=>a.type === 'in' && a.timestamp?.toDate().toISOString().split('T')[0] === today);
    const pendingLeaves = leaveRequests.filter((l)=>l.status === 'pending').length;
    const approvedLeaves = leaveRequests.filter((l)=>l.status === 'approved').length;
    const upcomingHoliday = holidays.filter((h)=>new Date(h.date) >= new Date()).sort((a, b)=>new Date(a.date) - new Date(b.date))[0];
    const employeeStats = [
        {
            label: 'Attendance Today',
            value: punchedInToday ? 'Clocked In' : 'Not Clocked In',
            icon: 'timer',
            color: punchedInToday ? __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$hr$2f$Hrms$2f$src$2f$styles$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["tokens"].colors.success : __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$hr$2f$Hrms$2f$src$2f$styles$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["tokens"].colors.warning,
            bg: punchedInToday ? '#F0FDF4' : '#FFFBEB',
            action: ()=>setActiveTab('attendance')
        },
        {
            label: 'Leave Balance',
            value: `${approvedLeaves} / 12 used`,
            icon: 'beach_access',
            color: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$hr$2f$Hrms$2f$src$2f$styles$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["tokens"].colors.accent,
            bg: '#F0FDFA',
            action: ()=>setActiveTab('leaves')
        },
        {
            label: 'Next Holiday',
            value: upcomingHoliday?.name || 'None Scheduled',
            icon: 'celebration',
            color: '#8B5CF6',
            bg: '#F5F3FF',
            action: null
        }
    ];
    const adminStats = [
        {
            label: 'Total Headcount',
            value: employees.length,
            icon: 'groups',
            color: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$hr$2f$Hrms$2f$src$2f$styles$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["tokens"].colors.accent,
            bg: '#F0FDFA',
            action: ()=>setActiveTab('employees')
        },
        {
            label: 'Pending Leaves',
            value: pendingLeaves,
            icon: 'event_busy',
            color: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$hr$2f$Hrms$2f$src$2f$styles$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["tokens"].colors.warning,
            bg: '#FFFBEB',
            action: ()=>setActiveTab('admin_leaves')
        },
        {
            label: 'Monthly Payroll',
            value: `$${Math.round(employees.reduce((acc, cur)=>acc + (Number(cur.salary) || 0), 0) / 12).toLocaleString()}`,
            icon: 'payments',
            color: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$hr$2f$Hrms$2f$src$2f$styles$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["tokens"].colors.success,
            bg: '#F0FDF4',
            action: null
        }
    ];
    const stats = isAdmin ? adminStats : employeeStats;
    const quickLinks = isAdmin ? [
        {
            label: 'Workforce Directory',
            icon: 'group',
            action: ()=>setActiveTab('employees'),
            desc: 'View all employees'
        },
        {
            label: 'Leave Requests',
            icon: 'event_available',
            action: ()=>setActiveTab('admin_leaves'),
            desc: 'Pending approvals'
        },
        {
            label: 'Attendance Feed',
            icon: 'history',
            action: ()=>setActiveTab('admin_attendance'),
            desc: 'Daily clock-in log'
        },
        {
            label: 'Broadcasts',
            icon: 'campaign',
            action: ()=>setActiveTab('admin_broadcast'),
            desc: 'Post announcements'
        }
    ] : [
        {
            label: 'Punch Clock',
            icon: 'timer',
            action: ()=>setActiveTab('attendance'),
            desc: 'Clock in or out'
        },
        {
            label: 'Request Leave',
            icon: 'event_available',
            action: ()=>setActiveTab('leaves'),
            desc: 'Submit time off'
        },
        {
            label: 'My Profile',
            icon: 'person',
            action: ()=>setActiveTab('profile'),
            desc: 'View & edit details'
        },
        {
            label: 'Policies',
            icon: 'gavel',
            action: ()=>setActiveTab('admin_policies'),
            desc: 'Company guidelines'
        }
    ];
    const timeOfDay = ()=>{
        const h = new Date().getHours();
        if (h < 12) return 'Good morning';
        if (h < 17) return 'Good afternoon';
        return 'Good evening';
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$hr$2f$Hrms$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "animate-fade",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$hr$2f$Hrms$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    marginBottom: '32px'
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$hr$2f$Hrms$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$hr$2f$Hrms$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                style: {
                                    ...__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$hr$2f$Hrms$2f$src$2f$styles$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["styles"].greeting,
                                    marginBottom: '4px'
                                },
                                children: isAdmin ? 'Admin Overview' : `${timeOfDay()}, ${currentUser.name?.split(' ')[0] || 'there'}`
                            }, void 0, false, {
                                fileName: "[project]/Documents/hr/Hrms/src/components/Dashboard/index.js",
                                lineNumber: 121,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$hr$2f$Hrms$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                style: {
                                    fontSize: '14px',
                                    color: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$hr$2f$Hrms$2f$src$2f$styles$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["tokens"].colors.secondary
                                },
                                children: isAdmin ? 'Platform analytics and workforce health at a glance.' : `Today is ${new Date().toLocaleDateString(undefined, {
                                    weekday: 'long',
                                    month: 'long',
                                    day: 'numeric'
                                })}.`
                            }, void 0, false, {
                                fileName: "[project]/Documents/hr/Hrms/src/components/Dashboard/index.js",
                                lineNumber: 124,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Documents/hr/Hrms/src/components/Dashboard/index.js",
                        lineNumber: 120,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    !isAdmin && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$hr$2f$Hrms$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            display: 'flex',
                            alignItems: 'center',
                            gap: '8px',
                            padding: '8px 16px',
                            background: '#F0FDFA',
                            border: '1px solid #CCFBF1',
                            borderRadius: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$hr$2f$Hrms$2f$src$2f$styles$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["tokens"].radius.full
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$hr$2f$Hrms$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                style: {
                                    fontSize: '12px',
                                    fontWeight: '700',
                                    color: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$hr$2f$Hrms$2f$src$2f$styles$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["tokens"].colors.accent
                                },
                                children: currentUser.dept || 'General'
                            }, void 0, false, {
                                fileName: "[project]/Documents/hr/Hrms/src/components/Dashboard/index.js",
                                lineNumber: 130,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$hr$2f$Hrms$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                style: {
                                    width: '4px',
                                    height: '4px',
                                    borderRadius: '50%',
                                    background: '#CCFBF1',
                                    display: 'inline-block'
                                }
                            }, void 0, false, {
                                fileName: "[project]/Documents/hr/Hrms/src/components/Dashboard/index.js",
                                lineNumber: 131,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$hr$2f$Hrms$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                style: {
                                    fontSize: '12px',
                                    fontWeight: '600',
                                    color: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$hr$2f$Hrms$2f$src$2f$styles$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["tokens"].colors.secondary
                                },
                                children: currentUser.role || 'Associate'
                            }, void 0, false, {
                                fileName: "[project]/Documents/hr/Hrms/src/components/Dashboard/index.js",
                                lineNumber: 132,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Documents/hr/Hrms/src/components/Dashboard/index.js",
                        lineNumber: 129,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/Documents/hr/Hrms/src/components/Dashboard/index.js",
                lineNumber: 119,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$hr$2f$Hrms$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    display: 'grid',
                    gridTemplateColumns: 'repeat(3, 1fr)',
                    gap: '20px',
                    marginBottom: '28px'
                },
                children: stats.map((s)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$hr$2f$Hrms$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        onClick: s.action || undefined,
                        style: {
                            ...__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$hr$2f$Hrms$2f$src$2f$styles$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["styles"].card,
                            padding: '24px 28px',
                            display: 'flex',
                            alignItems: 'center',
                            gap: '20px',
                            cursor: s.action ? 'pointer' : 'default',
                            borderLeft: `3px solid ${s.color}`,
                            transition: 'box-shadow 0.2s ease'
                        },
                        onMouseOver: (e)=>{
                            if (s.action) e.currentTarget.style.boxShadow = __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$hr$2f$Hrms$2f$src$2f$styles$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["tokens"].shadow.md;
                        },
                        onMouseOut: (e)=>{
                            if (s.action) e.currentTarget.style.boxShadow = __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$hr$2f$Hrms$2f$src$2f$styles$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["tokens"].shadow.sm;
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$hr$2f$Hrms$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                style: {
                                    width: '48px',
                                    height: '48px',
                                    background: s.bg,
                                    borderRadius: '14px',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    flexShrink: 0
                                },
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$hr$2f$Hrms$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "material-symbols-outlined",
                                    style: {
                                        fontSize: '24px',
                                        color: s.color
                                    },
                                    children: s.icon
                                }, void 0, false, {
                                    fileName: "[project]/Documents/hr/Hrms/src/components/Dashboard/index.js",
                                    lineNumber: 157,
                                    columnNumber: 15
                                }, ("TURBOPACK compile-time value", void 0))
                            }, void 0, false, {
                                fileName: "[project]/Documents/hr/Hrms/src/components/Dashboard/index.js",
                                lineNumber: 156,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$hr$2f$Hrms$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$hr$2f$Hrms$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        style: {
                                            fontSize: '11px',
                                            fontWeight: '700',
                                            color: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$hr$2f$Hrms$2f$src$2f$styles$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["tokens"].colors.secondary,
                                            textTransform: 'uppercase',
                                            letterSpacing: '0.06em',
                                            marginBottom: '4px'
                                        },
                                        children: s.label
                                    }, void 0, false, {
                                        fileName: "[project]/Documents/hr/Hrms/src/components/Dashboard/index.js",
                                        lineNumber: 160,
                                        columnNumber: 15
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$hr$2f$Hrms$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        style: {
                                            fontSize: '20px',
                                            fontWeight: '800',
                                            color: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$hr$2f$Hrms$2f$src$2f$styles$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["tokens"].colors.primary,
                                            letterSpacing: '-0.02em'
                                        },
                                        children: s.value
                                    }, void 0, false, {
                                        fileName: "[project]/Documents/hr/Hrms/src/components/Dashboard/index.js",
                                        lineNumber: 161,
                                        columnNumber: 15
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Documents/hr/Hrms/src/components/Dashboard/index.js",
                                lineNumber: 159,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, s.label, true, {
                        fileName: "[project]/Documents/hr/Hrms/src/components/Dashboard/index.js",
                        lineNumber: 140,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0)))
            }, void 0, false, {
                fileName: "[project]/Documents/hr/Hrms/src/components/Dashboard/index.js",
                lineNumber: 138,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$hr$2f$Hrms$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    display: 'grid',
                    gridTemplateColumns: '1fr 320px',
                    gap: '24px',
                    alignItems: 'start'
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$hr$2f$Hrms$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$hr$2f$Hrms$2f$src$2f$styles$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["styles"].card,
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$hr$2f$Hrms$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                style: {
                                    display: 'flex',
                                    justifyContent: 'space-between',
                                    alignItems: 'center',
                                    marginBottom: '24px'
                                },
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$hr$2f$Hrms$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$hr$2f$Hrms$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                style: {
                                                    fontSize: '16px',
                                                    fontWeight: '800',
                                                    color: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$hr$2f$Hrms$2f$src$2f$styles$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["tokens"].colors.primary
                                                },
                                                children: "Announcements"
                                            }, void 0, false, {
                                                fileName: "[project]/Documents/hr/Hrms/src/components/Dashboard/index.js",
                                                lineNumber: 174,
                                                columnNumber: 15
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$hr$2f$Hrms$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                style: {
                                                    fontSize: '13px',
                                                    color: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$hr$2f$Hrms$2f$src$2f$styles$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["tokens"].colors.secondary,
                                                    marginTop: '2px'
                                                },
                                                children: "Latest updates from HR & Management"
                                            }, void 0, false, {
                                                fileName: "[project]/Documents/hr/Hrms/src/components/Dashboard/index.js",
                                                lineNumber: 175,
                                                columnNumber: 15
                                            }, ("TURBOPACK compile-time value", void 0))
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Documents/hr/Hrms/src/components/Dashboard/index.js",
                                        lineNumber: 173,
                                        columnNumber: 13
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    isAdmin && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$hr$2f$Hrms$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        onClick: ()=>setActiveTab('admin_broadcast'),
                                        style: {
                                            ...__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$hr$2f$Hrms$2f$src$2f$styles$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["styles"].button.ghost,
                                            fontSize: '13px'
                                        },
                                        children: [
                                            "Manage",
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$hr$2f$Hrms$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "material-symbols-outlined",
                                                style: {
                                                    fontSize: '16px'
                                                },
                                                children: "arrow_forward"
                                            }, void 0, false, {
                                                fileName: "[project]/Documents/hr/Hrms/src/components/Dashboard/index.js",
                                                lineNumber: 180,
                                                columnNumber: 17
                                            }, ("TURBOPACK compile-time value", void 0))
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Documents/hr/Hrms/src/components/Dashboard/index.js",
                                        lineNumber: 178,
                                        columnNumber: 15
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Documents/hr/Hrms/src/components/Dashboard/index.js",
                                lineNumber: 172,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0)),
                            announcements.length === 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$hr$2f$Hrms$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                style: {
                                    padding: '40px',
                                    textAlign: 'center'
                                },
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$hr$2f$Hrms$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        style: {
                                            width: '56px',
                                            height: '56px',
                                            background: '#F8FAFC',
                                            borderRadius: '50%',
                                            display: 'flex',
                                            alignItems: 'center',
                                            justifyContent: 'center',
                                            margin: '0 auto 12px'
                                        },
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$hr$2f$Hrms$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "material-symbols-outlined",
                                            style: {
                                                fontSize: '28px',
                                                color: '#CBD5E1'
                                            },
                                            children: "notifications_off"
                                        }, void 0, false, {
                                            fileName: "[project]/Documents/hr/Hrms/src/components/Dashboard/index.js",
                                            lineNumber: 188,
                                            columnNumber: 17
                                        }, ("TURBOPACK compile-time value", void 0))
                                    }, void 0, false, {
                                        fileName: "[project]/Documents/hr/Hrms/src/components/Dashboard/index.js",
                                        lineNumber: 187,
                                        columnNumber: 15
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$hr$2f$Hrms$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        style: {
                                            fontSize: '14px',
                                            fontWeight: '600',
                                            color: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$hr$2f$Hrms$2f$src$2f$styles$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["tokens"].colors.secondary
                                        },
                                        children: "No announcements"
                                    }, void 0, false, {
                                        fileName: "[project]/Documents/hr/Hrms/src/components/Dashboard/index.js",
                                        lineNumber: 190,
                                        columnNumber: 15
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$hr$2f$Hrms$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        style: {
                                            fontSize: '12px',
                                            color: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$hr$2f$Hrms$2f$src$2f$styles$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["tokens"].colors.secondary,
                                            marginTop: '4px',
                                            opacity: 0.7
                                        },
                                        children: "Check back later for updates."
                                    }, void 0, false, {
                                        fileName: "[project]/Documents/hr/Hrms/src/components/Dashboard/index.js",
                                        lineNumber: 191,
                                        columnNumber: 15
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Documents/hr/Hrms/src/components/Dashboard/index.js",
                                lineNumber: 186,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0)) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$hr$2f$Hrms$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                style: {
                                    display: 'flex',
                                    flexDirection: 'column',
                                    gap: '12px'
                                },
                                children: announcements.slice(0, 4).map((a)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$hr$2f$Hrms$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        style: {
                                            padding: '16px 20px',
                                            borderRadius: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$hr$2f$Hrms$2f$src$2f$styles$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["tokens"].radius.md,
                                            background: '#F8FAFC',
                                            border: `1px solid ${__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$hr$2f$Hrms$2f$src$2f$styles$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["tokens"].colors.border}`
                                        },
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$hr$2f$Hrms$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                style: {
                                                    fontSize: '14px',
                                                    fontWeight: '600',
                                                    color: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$hr$2f$Hrms$2f$src$2f$styles$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["tokens"].colors.primary,
                                                    lineHeight: '1.5',
                                                    marginBottom: '6px'
                                                },
                                                children: a.content
                                            }, void 0, false, {
                                                fileName: "[project]/Documents/hr/Hrms/src/components/Dashboard/index.js",
                                                lineNumber: 197,
                                                columnNumber: 19
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$hr$2f$Hrms$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                style: {
                                                    display: 'flex',
                                                    alignItems: 'center',
                                                    gap: '6px',
                                                    fontSize: '12px',
                                                    color: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$hr$2f$Hrms$2f$src$2f$styles$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["tokens"].colors.secondary
                                                },
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$hr$2f$Hrms$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "material-symbols-outlined",
                                                        style: {
                                                            fontSize: '14px'
                                                        },
                                                        children: "calendar_today"
                                                    }, void 0, false, {
                                                        fileName: "[project]/Documents/hr/Hrms/src/components/Dashboard/index.js",
                                                        lineNumber: 199,
                                                        columnNumber: 21
                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                    new Date(a.date).toLocaleDateString(undefined, {
                                                        month: 'short',
                                                        day: 'numeric',
                                                        year: 'numeric'
                                                    })
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/Documents/hr/Hrms/src/components/Dashboard/index.js",
                                                lineNumber: 198,
                                                columnNumber: 19
                                            }, ("TURBOPACK compile-time value", void 0))
                                        ]
                                    }, a.id, true, {
                                        fileName: "[project]/Documents/hr/Hrms/src/components/Dashboard/index.js",
                                        lineNumber: 196,
                                        columnNumber: 17
                                    }, ("TURBOPACK compile-time value", void 0)))
                            }, void 0, false, {
                                fileName: "[project]/Documents/hr/Hrms/src/components/Dashboard/index.js",
                                lineNumber: 194,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0)),
                            !isAdmin && deptColleagues.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$hr$2f$Hrms$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                style: {
                                    marginTop: '28px',
                                    paddingTop: '24px',
                                    borderTop: `1px solid ${__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$hr$2f$Hrms$2f$src$2f$styles$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["tokens"].colors.border}`
                                },
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$hr$2f$Hrms$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        style: {
                                            fontSize: '12px',
                                            fontWeight: '700',
                                            color: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$hr$2f$Hrms$2f$src$2f$styles$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["tokens"].colors.secondary,
                                            textTransform: 'uppercase',
                                            letterSpacing: '0.06em',
                                            marginBottom: '16px'
                                        },
                                        children: "Your Team"
                                    }, void 0, false, {
                                        fileName: "[project]/Documents/hr/Hrms/src/components/Dashboard/index.js",
                                        lineNumber: 210,
                                        columnNumber: 15
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$hr$2f$Hrms$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        style: {
                                            display: 'flex',
                                            flexWrap: 'wrap',
                                            gap: '10px'
                                        },
                                        children: deptColleagues.slice(0, 6).map((col)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$hr$2f$Hrms$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                title: col.name,
                                                style: {
                                                    display: 'flex',
                                                    alignItems: 'center',
                                                    gap: '8px',
                                                    padding: '8px 14px',
                                                    borderRadius: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$hr$2f$Hrms$2f$src$2f$styles$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["tokens"].radius.full,
                                                    background: '#F8FAFC',
                                                    border: `1px solid ${__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$hr$2f$Hrms$2f$src$2f$styles$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["tokens"].colors.border}`
                                                },
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$hr$2f$Hrms$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        style: {
                                                            width: '24px',
                                                            height: '24px',
                                                            borderRadius: '50%',
                                                            background: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$hr$2f$Hrms$2f$src$2f$styles$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["tokens"].colors.accent + '18',
                                                            display: 'flex',
                                                            alignItems: 'center',
                                                            justifyContent: 'center',
                                                            fontSize: '11px',
                                                            fontWeight: '700',
                                                            color: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$hr$2f$Hrms$2f$src$2f$styles$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["tokens"].colors.accent
                                                        },
                                                        children: col.name.charAt(0)
                                                    }, void 0, false, {
                                                        fileName: "[project]/Documents/hr/Hrms/src/components/Dashboard/index.js",
                                                        lineNumber: 214,
                                                        columnNumber: 21
                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$hr$2f$Hrms$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        style: {
                                                            fontSize: '13px',
                                                            fontWeight: '600',
                                                            color: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$hr$2f$Hrms$2f$src$2f$styles$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["tokens"].colors.primary
                                                        },
                                                        children: col.name.split(' ')[0]
                                                    }, void 0, false, {
                                                        fileName: "[project]/Documents/hr/Hrms/src/components/Dashboard/index.js",
                                                        lineNumber: 217,
                                                        columnNumber: 21
                                                    }, ("TURBOPACK compile-time value", void 0))
                                                ]
                                            }, col.id, true, {
                                                fileName: "[project]/Documents/hr/Hrms/src/components/Dashboard/index.js",
                                                lineNumber: 213,
                                                columnNumber: 19
                                            }, ("TURBOPACK compile-time value", void 0)))
                                    }, void 0, false, {
                                        fileName: "[project]/Documents/hr/Hrms/src/components/Dashboard/index.js",
                                        lineNumber: 211,
                                        columnNumber: 15
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Documents/hr/Hrms/src/components/Dashboard/index.js",
                                lineNumber: 209,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Documents/hr/Hrms/src/components/Dashboard/index.js",
                        lineNumber: 171,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$hr$2f$Hrms$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            display: 'flex',
                            flexDirection: 'column',
                            gap: '8px'
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$hr$2f$Hrms$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                style: {
                                    fontSize: '12px',
                                    fontWeight: '700',
                                    color: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$hr$2f$Hrms$2f$src$2f$styles$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["tokens"].colors.secondary,
                                    textTransform: 'uppercase',
                                    letterSpacing: '0.06em',
                                    marginBottom: '8px',
                                    paddingLeft: '4px'
                                },
                                children: "Quick Actions"
                            }, void 0, false, {
                                fileName: "[project]/Documents/hr/Hrms/src/components/Dashboard/index.js",
                                lineNumber: 227,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0)),
                            quickLinks.map((link)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$hr$2f$Hrms$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    onClick: link.action,
                                    style: {
                                        width: '100%',
                                        display: 'flex',
                                        alignItems: 'center',
                                        gap: '14px',
                                        padding: '16px 18px',
                                        background: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$hr$2f$Hrms$2f$src$2f$styles$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["tokens"].colors.white,
                                        border: `1px solid ${__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$hr$2f$Hrms$2f$src$2f$styles$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["tokens"].colors.border}`,
                                        borderRadius: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$hr$2f$Hrms$2f$src$2f$styles$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["tokens"].radius.md,
                                        cursor: 'pointer',
                                        textAlign: 'left',
                                        transition: 'all 0.15s ease'
                                    },
                                    onMouseOver: (e)=>{
                                        e.currentTarget.style.borderColor = __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$hr$2f$Hrms$2f$src$2f$styles$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["tokens"].colors.accent;
                                        e.currentTarget.style.background = '#F0FDFA';
                                    },
                                    onMouseOut: (e)=>{
                                        e.currentTarget.style.borderColor = __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$hr$2f$Hrms$2f$src$2f$styles$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["tokens"].colors.border;
                                        e.currentTarget.style.background = __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$hr$2f$Hrms$2f$src$2f$styles$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["tokens"].colors.white;
                                    },
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$hr$2f$Hrms$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            style: {
                                                width: '36px',
                                                height: '36px',
                                                background: '#F8FAFC',
                                                borderRadius: '10px',
                                                display: 'flex',
                                                alignItems: 'center',
                                                justifyContent: 'center',
                                                flexShrink: 0,
                                                transition: 'background 0.15s'
                                            },
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$hr$2f$Hrms$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "material-symbols-outlined",
                                                style: {
                                                    fontSize: '20px',
                                                    color: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$hr$2f$Hrms$2f$src$2f$styles$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["tokens"].colors.secondary
                                                },
                                                children: link.icon
                                            }, void 0, false, {
                                                fileName: "[project]/Documents/hr/Hrms/src/components/Dashboard/index.js",
                                                lineNumber: 249,
                                                columnNumber: 17
                                            }, ("TURBOPACK compile-time value", void 0))
                                        }, void 0, false, {
                                            fileName: "[project]/Documents/hr/Hrms/src/components/Dashboard/index.js",
                                            lineNumber: 248,
                                            columnNumber: 15
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$hr$2f$Hrms$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            style: {
                                                flex: 1,
                                                minWidth: 0
                                            },
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$hr$2f$Hrms$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    style: {
                                                        fontSize: '14px',
                                                        fontWeight: '700',
                                                        color: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$hr$2f$Hrms$2f$src$2f$styles$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["tokens"].colors.primary
                                                    },
                                                    children: link.label
                                                }, void 0, false, {
                                                    fileName: "[project]/Documents/hr/Hrms/src/components/Dashboard/index.js",
                                                    lineNumber: 252,
                                                    columnNumber: 17
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$hr$2f$Hrms$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    style: {
                                                        fontSize: '12px',
                                                        color: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$hr$2f$Hrms$2f$src$2f$styles$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["tokens"].colors.secondary
                                                    },
                                                    children: link.desc
                                                }, void 0, false, {
                                                    fileName: "[project]/Documents/hr/Hrms/src/components/Dashboard/index.js",
                                                    lineNumber: 253,
                                                    columnNumber: 17
                                                }, ("TURBOPACK compile-time value", void 0))
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/Documents/hr/Hrms/src/components/Dashboard/index.js",
                                            lineNumber: 251,
                                            columnNumber: 15
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$hr$2f$Hrms$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "material-symbols-outlined",
                                            style: {
                                                fontSize: '18px',
                                                color: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$hr$2f$Hrms$2f$src$2f$styles$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["tokens"].colors.secondary,
                                                opacity: 0.5
                                            },
                                            children: "chevron_right"
                                        }, void 0, false, {
                                            fileName: "[project]/Documents/hr/Hrms/src/components/Dashboard/index.js",
                                            lineNumber: 255,
                                            columnNumber: 15
                                        }, ("TURBOPACK compile-time value", void 0))
                                    ]
                                }, link.label, true, {
                                    fileName: "[project]/Documents/hr/Hrms/src/components/Dashboard/index.js",
                                    lineNumber: 229,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0)))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Documents/hr/Hrms/src/components/Dashboard/index.js",
                        lineNumber: 226,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/Documents/hr/Hrms/src/components/Dashboard/index.js",
                lineNumber: 168,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/Documents/hr/Hrms/src/components/Dashboard/index.js",
        lineNumber: 116,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
_s(Dashboard, "B9zBfMGjJ61535f3HHWLPM2/UTc=");
_c = Dashboard;
const __TURBOPACK__default__export__ = Dashboard;
var _c;
__turbopack_context__.k.register(_c, "Dashboard");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Documents/hr/Hrms/src/components/Timesheet/index.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "AdminTimesheets",
    ()=>AdminTimesheets,
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$hr$2f$Hrms$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/hr/Hrms/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$hr$2f$Hrms$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/hr/Hrms/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$hr$2f$Hrms$2f$src$2f$firebase$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/hr/Hrms/src/firebase.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$hr$2f$Hrms$2f$node_modules$2f$firebase$2f$firestore$2f$dist$2f$esm$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/Documents/hr/Hrms/node_modules/firebase/firestore/dist/esm/index.esm.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$hr$2f$Hrms$2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/hr/Hrms/node_modules/@firebase/firestore/dist/index.esm.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$hr$2f$Hrms$2f$src$2f$styles$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/hr/Hrms/src/styles.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$hr$2f$Hrms$2f$src$2f$utils$2f$salaryCalc$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/hr/Hrms/src/utils/salaryCalc.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature(), _s1 = __turbopack_context__.k.signature();
'use client';
;
;
;
;
;
/* ─── Helper ─── */ const getWeekDates = (offset = 0)=>{
    const now = new Date();
    const day = now.getDay(); // 0=Sun
    const monday = new Date(now);
    monday.setDate(now.getDate() - (day === 0 ? 6 : day - 1) + offset * 7);
    monday.setHours(0, 0, 0, 0);
    return Array.from({
        length: 7
    }, (_, i)=>{
        const d = new Date(monday);
        d.setDate(monday.getDate() + i);
        return d;
    });
};
const fmt = (d)=>d.toISOString().split('T')[0];
const DAYS = [
    'Mon',
    'Tue',
    'Wed',
    'Thu',
    'Fri',
    'Sat',
    'Sun'
];
/* ─── Employee Timesheet View ─── */ const EmployeeTimesheet = ({ user })=>{
    _s();
    const [weekOffset, setWeekOffset] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$hr$2f$Hrms$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0);
    const [entries, setEntries] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$hr$2f$Hrms$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({});
    const [status, setStatus] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$hr$2f$Hrms$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('draft');
    const [saving, setSaving] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$hr$2f$Hrms$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [submitting, setSubmitting] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$hr$2f$Hrms$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const weekDates = getWeekDates(weekOffset);
    const weekId = `${user.email}_${fmt(weekDates[0])}`;
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$hr$2f$Hrms$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "EmployeeTimesheet.useEffect": ()=>{
            let isMounted = true;
            const unsub = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$hr$2f$Hrms$2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["onSnapshot"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$hr$2f$Hrms$2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["doc"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$hr$2f$Hrms$2f$src$2f$firebase$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["db"], 'timesheets', weekId), {
                "EmployeeTimesheet.useEffect.unsub": (snap)=>{
                    if (!isMounted) return;
                    if (snap.exists()) {
                        const data = snap.data();
                        setEntries(data.entries || {});
                        setStatus(data.status || 'draft');
                    } else {
                        setEntries({});
                        setStatus('draft');
                    }
                }
            }["EmployeeTimesheet.useEffect.unsub"]);
            return ({
                "EmployeeTimesheet.useEffect": ()=>{
                    isMounted = false;
                    unsub();
                }
            })["EmployeeTimesheet.useEffect"];
        }
    }["EmployeeTimesheet.useEffect"], [
        weekId
    ]);
    const totalHours = Object.values(entries).reduce((sum, e)=>sum + (parseFloat(e.hours) || 0), 0);
    const handleChange = (dateKey, field, value)=>{
        setEntries((prev)=>({
                ...prev,
                [dateKey]: {
                    ...prev[dateKey],
                    [field]: value
                }
            }));
    };
    const handleSave = async ()=>{
        setSaving(true);
        await (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$hr$2f$Hrms$2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["setDoc"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$hr$2f$Hrms$2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["doc"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$hr$2f$Hrms$2f$src$2f$firebase$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["db"], 'timesheets', weekId), {
            weekId,
            userEmail: user.email,
            userName: user.name || user.email,
            weekStart: fmt(weekDates[0]),
            weekEnd: fmt(weekDates[6]),
            entries,
            status: status === 'approved' ? 'approved' : 'draft',
            updatedAt: new Date().toISOString()
        }, {
            merge: true
        });
        setSaving(false);
    };
    const handleSubmit = async ()=>{
        setSubmitting(true);
        await (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$hr$2f$Hrms$2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["setDoc"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$hr$2f$Hrms$2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["doc"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$hr$2f$Hrms$2f$src$2f$firebase$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["db"], 'timesheets', weekId), {
            weekId,
            userEmail: user.email,
            userName: user.name || user.email,
            weekStart: fmt(weekDates[0]),
            weekEnd: fmt(weekDates[6]),
            entries,
            status: 'submitted',
            submittedAt: new Date().toISOString()
        }, {
            merge: true
        });
        setSubmitting(false);
    };
    const isLocked = status === 'submitted' || status === 'approved';
    const statusColor = {
        draft: '#D97706',
        submitted: '#3B82F6',
        approved: '#059669',
        rejected: '#DC2626'
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$hr$2f$Hrms$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "animate-fade",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$hr$2f$Hrms$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    marginBottom: '28px'
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$hr$2f$Hrms$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$hr$2f$Hrms$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                style: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$hr$2f$Hrms$2f$src$2f$styles$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["styles"].greeting,
                                children: "My Timesheet"
                            }, void 0, false, {
                                fileName: "[project]/Documents/hr/Hrms/src/components/Timesheet/index.js",
                                lineNumber: 86,
                                columnNumber: 21
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$hr$2f$Hrms$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                style: {
                                    color: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$hr$2f$Hrms$2f$src$2f$styles$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["tokens"].colors.secondary,
                                    fontSize: '14px',
                                    marginTop: '4px'
                                },
                                children: "Log and submit your weekly hours."
                            }, void 0, false, {
                                fileName: "[project]/Documents/hr/Hrms/src/components/Timesheet/index.js",
                                lineNumber: 87,
                                columnNumber: 21
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Documents/hr/Hrms/src/components/Timesheet/index.js",
                        lineNumber: 85,
                        columnNumber: 17
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$hr$2f$Hrms$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            display: 'flex',
                            gap: '10px',
                            alignItems: 'center'
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$hr$2f$Hrms$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: ()=>setWeekOffset((o)=>o - 1),
                                style: {
                                    ...__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$hr$2f$Hrms$2f$src$2f$styles$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["styles"].button.outline,
                                    padding: '8px 14px'
                                },
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$hr$2f$Hrms$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "material-symbols-outlined",
                                    style: {
                                        fontSize: '18px'
                                    },
                                    children: "chevron_left"
                                }, void 0, false, {
                                    fileName: "[project]/Documents/hr/Hrms/src/components/Timesheet/index.js",
                                    lineNumber: 91,
                                    columnNumber: 25
                                }, ("TURBOPACK compile-time value", void 0))
                            }, void 0, false, {
                                fileName: "[project]/Documents/hr/Hrms/src/components/Timesheet/index.js",
                                lineNumber: 90,
                                columnNumber: 21
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$hr$2f$Hrms$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                style: {
                                    fontSize: '14px',
                                    fontWeight: '700',
                                    color: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$hr$2f$Hrms$2f$src$2f$styles$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["tokens"].colors.primary
                                },
                                children: [
                                    weekDates[0].toLocaleDateString('en-IN', {
                                        day: 'numeric',
                                        month: 'short'
                                    }),
                                    " – ",
                                    weekDates[6].toLocaleDateString('en-IN', {
                                        day: 'numeric',
                                        month: 'short',
                                        year: 'numeric'
                                    })
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Documents/hr/Hrms/src/components/Timesheet/index.js",
                                lineNumber: 93,
                                columnNumber: 21
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$hr$2f$Hrms$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: ()=>setWeekOffset((o)=>o + 1),
                                disabled: weekOffset >= 0,
                                style: {
                                    ...__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$hr$2f$Hrms$2f$src$2f$styles$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["styles"].button.outline,
                                    padding: '8px 14px',
                                    opacity: weekOffset >= 0 ? 0.4 : 1
                                },
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$hr$2f$Hrms$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "material-symbols-outlined",
                                    style: {
                                        fontSize: '18px'
                                    },
                                    children: "chevron_right"
                                }, void 0, false, {
                                    fileName: "[project]/Documents/hr/Hrms/src/components/Timesheet/index.js",
                                    lineNumber: 97,
                                    columnNumber: 25
                                }, ("TURBOPACK compile-time value", void 0))
                            }, void 0, false, {
                                fileName: "[project]/Documents/hr/Hrms/src/components/Timesheet/index.js",
                                lineNumber: 96,
                                columnNumber: 21
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Documents/hr/Hrms/src/components/Timesheet/index.js",
                        lineNumber: 89,
                        columnNumber: 17
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/Documents/hr/Hrms/src/components/Timesheet/index.js",
                lineNumber: 84,
                columnNumber: 13
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$hr$2f$Hrms$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    display: 'flex',
                    gap: '16px',
                    marginBottom: '20px'
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$hr$2f$Hrms$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            ...__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$hr$2f$Hrms$2f$src$2f$styles$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["styles"].card,
                            padding: '16px 24px',
                            flex: 1,
                            borderLeft: `3px solid ${statusColor[status] || '#94A3B8'}`
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$hr$2f$Hrms$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                style: {
                                    fontSize: '11px',
                                    fontWeight: '700',
                                    color: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$hr$2f$Hrms$2f$src$2f$styles$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["tokens"].colors.secondary,
                                    textTransform: 'uppercase',
                                    letterSpacing: '0.06em',
                                    marginBottom: '4px'
                                },
                                children: "Status"
                            }, void 0, false, {
                                fileName: "[project]/Documents/hr/Hrms/src/components/Timesheet/index.js",
                                lineNumber: 105,
                                columnNumber: 21
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$hr$2f$Hrms$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                style: {
                                    fontSize: '18px',
                                    fontWeight: '800',
                                    color: statusColor[status],
                                    textTransform: 'capitalize'
                                },
                                children: status
                            }, void 0, false, {
                                fileName: "[project]/Documents/hr/Hrms/src/components/Timesheet/index.js",
                                lineNumber: 106,
                                columnNumber: 21
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Documents/hr/Hrms/src/components/Timesheet/index.js",
                        lineNumber: 104,
                        columnNumber: 17
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$hr$2f$Hrms$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            ...__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$hr$2f$Hrms$2f$src$2f$styles$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["styles"].card,
                            padding: '16px 24px',
                            flex: 1,
                            borderLeft: `3px solid ${__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$hr$2f$Hrms$2f$src$2f$styles$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["tokens"].colors.accent}`
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$hr$2f$Hrms$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                style: {
                                    fontSize: '11px',
                                    fontWeight: '700',
                                    color: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$hr$2f$Hrms$2f$src$2f$styles$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["tokens"].colors.secondary,
                                    textTransform: 'uppercase',
                                    letterSpacing: '0.06em',
                                    marginBottom: '4px'
                                },
                                children: "Total Hours"
                            }, void 0, false, {
                                fileName: "[project]/Documents/hr/Hrms/src/components/Timesheet/index.js",
                                lineNumber: 109,
                                columnNumber: 21
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$hr$2f$Hrms$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                style: {
                                    fontSize: '18px',
                                    fontWeight: '800',
                                    color: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$hr$2f$Hrms$2f$src$2f$styles$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["tokens"].colors.primary
                                },
                                children: [
                                    totalHours.toFixed(1),
                                    "h ",
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$hr$2f$Hrms$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        style: {
                                            fontSize: '13px',
                                            color: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$hr$2f$Hrms$2f$src$2f$styles$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["tokens"].colors.secondary,
                                            fontWeight: '500'
                                        },
                                        children: "this week"
                                    }, void 0, false, {
                                        fileName: "[project]/Documents/hr/Hrms/src/components/Timesheet/index.js",
                                        lineNumber: 110,
                                        columnNumber: 129
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Documents/hr/Hrms/src/components/Timesheet/index.js",
                                lineNumber: 110,
                                columnNumber: 21
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Documents/hr/Hrms/src/components/Timesheet/index.js",
                        lineNumber: 108,
                        columnNumber: 17
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/Documents/hr/Hrms/src/components/Timesheet/index.js",
                lineNumber: 103,
                columnNumber: 13
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$hr$2f$Hrms$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$hr$2f$Hrms$2f$src$2f$styles$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["styles"].card,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$hr$2f$Hrms$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            display: 'grid',
                            gridTemplateColumns: '100px repeat(7, 1fr)',
                            gap: '1px',
                            background: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$hr$2f$Hrms$2f$src$2f$styles$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["tokens"].colors.border,
                            borderRadius: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$hr$2f$Hrms$2f$src$2f$styles$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["tokens"].radius.md,
                            overflow: 'hidden'
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$hr$2f$Hrms$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                style: {
                                    background: '#F8FAFC',
                                    padding: '12px',
                                    fontSize: '11px',
                                    fontWeight: '700',
                                    color: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$hr$2f$Hrms$2f$src$2f$styles$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["tokens"].colors.secondary,
                                    textTransform: 'uppercase',
                                    letterSpacing: '0.06em'
                                },
                                children: "Field"
                            }, void 0, false, {
                                fileName: "[project]/Documents/hr/Hrms/src/components/Timesheet/index.js",
                                lineNumber: 118,
                                columnNumber: 21
                            }, ("TURBOPACK compile-time value", void 0)),
                            weekDates.map((d, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$hr$2f$Hrms$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    style: {
                                        background: '#F8FAFC',
                                        padding: '12px 8px',
                                        textAlign: 'center'
                                    },
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$hr$2f$Hrms$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            style: {
                                                fontSize: '11px',
                                                fontWeight: '700',
                                                color: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$hr$2f$Hrms$2f$src$2f$styles$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["tokens"].colors.secondary
                                            },
                                            children: DAYS[i]
                                        }, void 0, false, {
                                            fileName: "[project]/Documents/hr/Hrms/src/components/Timesheet/index.js",
                                            lineNumber: 121,
                                            columnNumber: 29
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$hr$2f$Hrms$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            style: {
                                                fontSize: '14px',
                                                fontWeight: '800',
                                                color: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$hr$2f$Hrms$2f$src$2f$styles$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["tokens"].colors.primary
                                            },
                                            children: d.getDate()
                                        }, void 0, false, {
                                            fileName: "[project]/Documents/hr/Hrms/src/components/Timesheet/index.js",
                                            lineNumber: 122,
                                            columnNumber: 29
                                        }, ("TURBOPACK compile-time value", void 0))
                                    ]
                                }, i, true, {
                                    fileName: "[project]/Documents/hr/Hrms/src/components/Timesheet/index.js",
                                    lineNumber: 120,
                                    columnNumber: 25
                                }, ("TURBOPACK compile-time value", void 0))),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$hr$2f$Hrms$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                style: {
                                    background: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$hr$2f$Hrms$2f$src$2f$styles$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["tokens"].colors.white,
                                    padding: '12px',
                                    fontSize: '12px',
                                    fontWeight: '700',
                                    color: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$hr$2f$Hrms$2f$src$2f$styles$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["tokens"].colors.secondary,
                                    display: 'flex',
                                    alignItems: 'center'
                                },
                                children: "Hours"
                            }, void 0, false, {
                                fileName: "[project]/Documents/hr/Hrms/src/components/Timesheet/index.js",
                                lineNumber: 127,
                                columnNumber: 21
                            }, ("TURBOPACK compile-time value", void 0)),
                            weekDates.map((d, i)=>{
                                const key = fmt(d);
                                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$hr$2f$Hrms$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    style: {
                                        background: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$hr$2f$Hrms$2f$src$2f$styles$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["tokens"].colors.white,
                                        padding: '8px 6px'
                                    },
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$hr$2f$Hrms$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                        type: "number",
                                        min: "0",
                                        max: "24",
                                        step: "0.5",
                                        disabled: isLocked,
                                        value: entries[key]?.hours || '',
                                        onChange: (e)=>handleChange(key, 'hours', e.target.value),
                                        style: {
                                            ...__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$hr$2f$Hrms$2f$src$2f$styles$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["styles"].input,
                                            textAlign: 'center',
                                            padding: '8px 4px',
                                            fontSize: '14px',
                                            fontWeight: '700',
                                            background: isLocked ? '#F8FAFC' : '#fff',
                                            cursor: isLocked ? 'not-allowed' : 'text'
                                        },
                                        placeholder: "0"
                                    }, void 0, false, {
                                        fileName: "[project]/Documents/hr/Hrms/src/components/Timesheet/index.js",
                                        lineNumber: 132,
                                        columnNumber: 33
                                    }, ("TURBOPACK compile-time value", void 0))
                                }, i, false, {
                                    fileName: "[project]/Documents/hr/Hrms/src/components/Timesheet/index.js",
                                    lineNumber: 131,
                                    columnNumber: 29
                                }, ("TURBOPACK compile-time value", void 0));
                            }),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$hr$2f$Hrms$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                style: {
                                    background: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$hr$2f$Hrms$2f$src$2f$styles$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["tokens"].colors.white,
                                    padding: '12px',
                                    fontSize: '12px',
                                    fontWeight: '700',
                                    color: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$hr$2f$Hrms$2f$src$2f$styles$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["tokens"].colors.secondary,
                                    display: 'flex',
                                    alignItems: 'center'
                                },
                                children: "Notes"
                            }, void 0, false, {
                                fileName: "[project]/Documents/hr/Hrms/src/components/Timesheet/index.js",
                                lineNumber: 145,
                                columnNumber: 21
                            }, ("TURBOPACK compile-time value", void 0)),
                            weekDates.map((d, i)=>{
                                const key = fmt(d);
                                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$hr$2f$Hrms$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    style: {
                                        background: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$hr$2f$Hrms$2f$src$2f$styles$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["tokens"].colors.white,
                                        padding: '8px 6px'
                                    },
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$hr$2f$Hrms$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("textarea", {
                                        rows: 2,
                                        disabled: isLocked,
                                        value: entries[key]?.notes || '',
                                        onChange: (e)=>handleChange(key, 'notes', e.target.value),
                                        style: {
                                            ...__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$hr$2f$Hrms$2f$src$2f$styles$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["styles"].input,
                                            padding: '6px',
                                            fontSize: '12px',
                                            resize: 'none',
                                            minHeight: 'unset',
                                            background: isLocked ? '#F8FAFC' : '#fff',
                                            cursor: isLocked ? 'not-allowed' : 'text'
                                        },
                                        placeholder: "Task…"
                                    }, void 0, false, {
                                        fileName: "[project]/Documents/hr/Hrms/src/components/Timesheet/index.js",
                                        lineNumber: 150,
                                        columnNumber: 33
                                    }, ("TURBOPACK compile-time value", void 0))
                                }, i, false, {
                                    fileName: "[project]/Documents/hr/Hrms/src/components/Timesheet/index.js",
                                    lineNumber: 149,
                                    columnNumber: 29
                                }, ("TURBOPACK compile-time value", void 0));
                            })
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Documents/hr/Hrms/src/components/Timesheet/index.js",
                        lineNumber: 116,
                        columnNumber: 17
                    }, ("TURBOPACK compile-time value", void 0)),
                    !isLocked && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$hr$2f$Hrms$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            display: 'flex',
                            gap: '12px',
                            marginTop: '20px'
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$hr$2f$Hrms$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: handleSave,
                                disabled: saving,
                                style: {
                                    ...__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$hr$2f$Hrms$2f$src$2f$styles$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["styles"].button.outline,
                                    flex: 1,
                                    padding: '12px',
                                    justifyContent: 'center'
                                },
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$hr$2f$Hrms$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "material-symbols-outlined",
                                        style: {
                                            fontSize: '18px'
                                        },
                                        children: "save"
                                    }, void 0, false, {
                                        fileName: "[project]/Documents/hr/Hrms/src/components/Timesheet/index.js",
                                        lineNumber: 167,
                                        columnNumber: 29
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    saving ? 'Saving…' : 'Save Draft'
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Documents/hr/Hrms/src/components/Timesheet/index.js",
                                lineNumber: 166,
                                columnNumber: 25
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$hr$2f$Hrms$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: handleSubmit,
                                disabled: submitting || totalHours === 0,
                                style: {
                                    ...__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$hr$2f$Hrms$2f$src$2f$styles$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["styles"].button.primary,
                                    flex: 2,
                                    padding: '12px',
                                    justifyContent: 'center',
                                    opacity: totalHours === 0 ? 0.5 : 1
                                },
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$hr$2f$Hrms$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "material-symbols-outlined",
                                        style: {
                                            fontSize: '18px'
                                        },
                                        children: "send"
                                    }, void 0, false, {
                                        fileName: "[project]/Documents/hr/Hrms/src/components/Timesheet/index.js",
                                        lineNumber: 171,
                                        columnNumber: 29
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    submitting ? 'Submitting…' : 'Submit for Approval'
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Documents/hr/Hrms/src/components/Timesheet/index.js",
                                lineNumber: 170,
                                columnNumber: 25
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Documents/hr/Hrms/src/components/Timesheet/index.js",
                        lineNumber: 165,
                        columnNumber: 21
                    }, ("TURBOPACK compile-time value", void 0)),
                    status === 'submitted' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$hr$2f$Hrms$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            marginTop: '16px',
                            textAlign: 'center',
                            fontSize: '13px',
                            color: '#3B82F6',
                            fontWeight: '600',
                            background: '#EFF6FF',
                            padding: '10px',
                            borderRadius: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$hr$2f$Hrms$2f$src$2f$styles$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["tokens"].radius.md
                        },
                        children: "⏳ Submitted — awaiting manager review."
                    }, void 0, false, {
                        fileName: "[project]/Documents/hr/Hrms/src/components/Timesheet/index.js",
                        lineNumber: 177,
                        columnNumber: 21
                    }, ("TURBOPACK compile-time value", void 0)),
                    status === 'approved' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$hr$2f$Hrms$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            marginTop: '16px',
                            textAlign: 'center',
                            fontSize: '13px',
                            color: '#059669',
                            fontWeight: '600',
                            background: '#ECFDF5',
                            padding: '10px',
                            borderRadius: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$hr$2f$Hrms$2f$src$2f$styles$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["tokens"].radius.md
                        },
                        children: "✅ Approved by admin."
                    }, void 0, false, {
                        fileName: "[project]/Documents/hr/Hrms/src/components/Timesheet/index.js",
                        lineNumber: 182,
                        columnNumber: 21
                    }, ("TURBOPACK compile-time value", void 0)),
                    status === 'rejected' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$hr$2f$Hrms$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            marginTop: '16px',
                            textAlign: 'center',
                            fontSize: '13px',
                            color: '#DC2626',
                            fontWeight: '600',
                            background: '#FEF2F2',
                            padding: '10px',
                            borderRadius: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$hr$2f$Hrms$2f$src$2f$styles$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["tokens"].radius.md
                        },
                        children: "❌ Rejected — please revise and resubmit."
                    }, void 0, false, {
                        fileName: "[project]/Documents/hr/Hrms/src/components/Timesheet/index.js",
                        lineNumber: 187,
                        columnNumber: 21
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/Documents/hr/Hrms/src/components/Timesheet/index.js",
                lineNumber: 115,
                columnNumber: 13
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/Documents/hr/Hrms/src/components/Timesheet/index.js",
        lineNumber: 83,
        columnNumber: 9
    }, ("TURBOPACK compile-time value", void 0));
};
_s(EmployeeTimesheet, "WU4gnnaR1WV+aWvq9/XXEhIxUFQ=");
_c = EmployeeTimesheet;
const AdminTimesheets = ()=>{
    _s1();
    const [timesheets, setTimesheets] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$hr$2f$Hrms$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [selected, setSelected] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$hr$2f$Hrms$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [filter, setFilter] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$hr$2f$Hrms$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('submitted');
    const [actioning, setActioning] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$hr$2f$Hrms$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$hr$2f$Hrms$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "AdminTimesheets.useEffect": ()=>{
            const unsub = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$hr$2f$Hrms$2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["onSnapshot"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$hr$2f$Hrms$2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["collection"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$hr$2f$Hrms$2f$src$2f$firebase$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["db"], 'timesheets'), {
                "AdminTimesheets.useEffect.unsub": (s)=>{
                    setTimesheets(s.docs.map({
                        "AdminTimesheets.useEffect.unsub": (d)=>({
                                id: d.id,
                                ...d.data()
                            })
                    }["AdminTimesheets.useEffect.unsub"]).sort({
                        "AdminTimesheets.useEffect.unsub": (a, b)=>(b.submittedAt || '') > (a.submittedAt || '') ? 1 : -1
                    }["AdminTimesheets.useEffect.unsub"]));
                }
            }["AdminTimesheets.useEffect.unsub"]);
            return unsub;
        }
    }["AdminTimesheets.useEffect"], []);
    const take = async (id, newStatus)=>{
        setActioning(true);
        await (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$hr$2f$Hrms$2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["updateDoc"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$hr$2f$Hrms$2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["doc"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$hr$2f$Hrms$2f$src$2f$firebase$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["db"], 'timesheets', id), {
            status: newStatus,
            reviewedAt: new Date().toISOString()
        });
        setActioning(false);
        setSelected(null);
    };
    const statusColor = {
        draft: '#D97706',
        submitted: '#3B82F6',
        approved: '#059669',
        rejected: '#DC2626'
    };
    const filtered = timesheets.filter((t)=>filter === 'all' || t.status === filter);
    if (selected) {
        const week = Object.keys(selected.entries || {}).sort();
        const totalHours = Object.values(selected.entries || {}).reduce((s, e)=>s + (parseFloat(e.hours) || 0), 0);
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$hr$2f$Hrms$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "animate-fade",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$hr$2f$Hrms$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    style: {
                        display: 'flex',
                        alignItems: 'center',
                        gap: '16px',
                        marginBottom: '28px'
                    },
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$hr$2f$Hrms$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            onClick: ()=>setSelected(null),
                            style: {
                                ...__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$hr$2f$Hrms$2f$src$2f$styles$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["styles"].button.outline,
                                padding: '8px',
                                borderRadius: '50%',
                                width: '40px',
                                height: '40px',
                                justifyContent: 'center'
                            },
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$hr$2f$Hrms$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "material-symbols-outlined",
                                style: {
                                    fontSize: '20px'
                                },
                                children: "arrow_back"
                            }, void 0, false, {
                                fileName: "[project]/Documents/hr/Hrms/src/components/Timesheet/index.js",
                                lineNumber: 227,
                                columnNumber: 25
                            }, ("TURBOPACK compile-time value", void 0))
                        }, void 0, false, {
                            fileName: "[project]/Documents/hr/Hrms/src/components/Timesheet/index.js",
                            lineNumber: 226,
                            columnNumber: 21
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$hr$2f$Hrms$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$hr$2f$Hrms$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                    style: {
                                        fontSize: '20px',
                                        fontWeight: '800',
                                        color: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$hr$2f$Hrms$2f$src$2f$styles$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["tokens"].colors.primary
                                    },
                                    children: [
                                        selected.userName,
                                        "'s Timesheet"
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Documents/hr/Hrms/src/components/Timesheet/index.js",
                                    lineNumber: 230,
                                    columnNumber: 25
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$hr$2f$Hrms$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    style: {
                                        fontSize: '13px',
                                        color: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$hr$2f$Hrms$2f$src$2f$styles$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["tokens"].colors.secondary
                                    },
                                    children: [
                                        selected.weekStart,
                                        " → ",
                                        selected.weekEnd,
                                        " · ",
                                        totalHours.toFixed(1),
                                        "h total"
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Documents/hr/Hrms/src/components/Timesheet/index.js",
                                    lineNumber: 231,
                                    columnNumber: 25
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Documents/hr/Hrms/src/components/Timesheet/index.js",
                            lineNumber: 229,
                            columnNumber: 21
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$hr$2f$Hrms$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            style: {
                                marginLeft: 'auto',
                                padding: '4px 14px',
                                borderRadius: '999px',
                                fontSize: '12px',
                                fontWeight: '700',
                                background: `${statusColor[selected.status]}20`,
                                color: statusColor[selected.status]
                            },
                            children: selected.status
                        }, void 0, false, {
                            fileName: "[project]/Documents/hr/Hrms/src/components/Timesheet/index.js",
                            lineNumber: 233,
                            columnNumber: 21
                        }, ("TURBOPACK compile-time value", void 0))
                    ]
                }, void 0, true, {
                    fileName: "[project]/Documents/hr/Hrms/src/components/Timesheet/index.js",
                    lineNumber: 225,
                    columnNumber: 17
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$hr$2f$Hrms$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    style: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$hr$2f$Hrms$2f$src$2f$styles$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["styles"].card,
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$hr$2f$Hrms$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("table", {
                            style: {
                                width: '100%',
                                borderCollapse: 'collapse'
                            },
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$hr$2f$Hrms$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("thead", {
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$hr$2f$Hrms$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$hr$2f$Hrms$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                style: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$hr$2f$Hrms$2f$src$2f$styles$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["styles"].th,
                                                children: "Date"
                                            }, void 0, false, {
                                                fileName: "[project]/Documents/hr/Hrms/src/components/Timesheet/index.js",
                                                lineNumber: 238,
                                                columnNumber: 29
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$hr$2f$Hrms$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                style: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$hr$2f$Hrms$2f$src$2f$styles$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["styles"].th,
                                                children: "Hours"
                                            }, void 0, false, {
                                                fileName: "[project]/Documents/hr/Hrms/src/components/Timesheet/index.js",
                                                lineNumber: 239,
                                                columnNumber: 29
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$hr$2f$Hrms$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                style: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$hr$2f$Hrms$2f$src$2f$styles$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["styles"].th,
                                                children: "Notes"
                                            }, void 0, false, {
                                                fileName: "[project]/Documents/hr/Hrms/src/components/Timesheet/index.js",
                                                lineNumber: 240,
                                                columnNumber: 29
                                            }, ("TURBOPACK compile-time value", void 0))
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Documents/hr/Hrms/src/components/Timesheet/index.js",
                                        lineNumber: 237,
                                        columnNumber: 32
                                    }, ("TURBOPACK compile-time value", void 0))
                                }, void 0, false, {
                                    fileName: "[project]/Documents/hr/Hrms/src/components/Timesheet/index.js",
                                    lineNumber: 237,
                                    columnNumber: 25
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$hr$2f$Hrms$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tbody", {
                                    children: week.map((k)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$hr$2f$Hrms$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$hr$2f$Hrms$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                    style: {
                                                        ...__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$hr$2f$Hrms$2f$src$2f$styles$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["styles"].td,
                                                        fontWeight: '600'
                                                    },
                                                    children: new Date(k + 'T00:00:00').toLocaleDateString('en-IN', {
                                                        weekday: 'short',
                                                        day: 'numeric',
                                                        month: 'short'
                                                    })
                                                }, void 0, false, {
                                                    fileName: "[project]/Documents/hr/Hrms/src/components/Timesheet/index.js",
                                                    lineNumber: 245,
                                                    columnNumber: 37
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$hr$2f$Hrms$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                    style: {
                                                        ...__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$hr$2f$Hrms$2f$src$2f$styles$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["styles"].td,
                                                        fontWeight: '800',
                                                        color: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$hr$2f$Hrms$2f$src$2f$styles$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["tokens"].colors.accent
                                                    },
                                                    children: [
                                                        selected.entries[k]?.hours || 0,
                                                        "h"
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/Documents/hr/Hrms/src/components/Timesheet/index.js",
                                                    lineNumber: 246,
                                                    columnNumber: 37
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$hr$2f$Hrms$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                    style: {
                                                        ...__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$hr$2f$Hrms$2f$src$2f$styles$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["styles"].td,
                                                        color: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$hr$2f$Hrms$2f$src$2f$styles$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["tokens"].colors.secondary,
                                                        fontSize: '13px'
                                                    },
                                                    children: selected.entries[k]?.notes || '—'
                                                }, void 0, false, {
                                                    fileName: "[project]/Documents/hr/Hrms/src/components/Timesheet/index.js",
                                                    lineNumber: 247,
                                                    columnNumber: 37
                                                }, ("TURBOPACK compile-time value", void 0))
                                            ]
                                        }, k, true, {
                                            fileName: "[project]/Documents/hr/Hrms/src/components/Timesheet/index.js",
                                            lineNumber: 244,
                                            columnNumber: 33
                                        }, ("TURBOPACK compile-time value", void 0)))
                                }, void 0, false, {
                                    fileName: "[project]/Documents/hr/Hrms/src/components/Timesheet/index.js",
                                    lineNumber: 242,
                                    columnNumber: 25
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Documents/hr/Hrms/src/components/Timesheet/index.js",
                            lineNumber: 236,
                            columnNumber: 21
                        }, ("TURBOPACK compile-time value", void 0)),
                        selected.status === 'submitted' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$hr$2f$Hrms$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            style: {
                                display: 'flex',
                                gap: '12px',
                                marginTop: '20px'
                            },
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$hr$2f$Hrms$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    onClick: ()=>take(selected.id, 'rejected'),
                                    disabled: actioning,
                                    style: {
                                        ...__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$hr$2f$Hrms$2f$src$2f$styles$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["styles"].button.outline,
                                        flex: 1,
                                        justifyContent: 'center',
                                        color: '#DC2626',
                                        borderColor: '#FCA5A5',
                                        padding: '12px'
                                    },
                                    children: "Reject"
                                }, void 0, false, {
                                    fileName: "[project]/Documents/hr/Hrms/src/components/Timesheet/index.js",
                                    lineNumber: 254,
                                    columnNumber: 29
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$hr$2f$Hrms$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    onClick: ()=>take(selected.id, 'approved'),
                                    disabled: actioning,
                                    style: {
                                        ...__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$hr$2f$Hrms$2f$src$2f$styles$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["styles"].button.primary,
                                        flex: 2,
                                        justifyContent: 'center',
                                        padding: '12px'
                                    },
                                    children: "Approve"
                                }, void 0, false, {
                                    fileName: "[project]/Documents/hr/Hrms/src/components/Timesheet/index.js",
                                    lineNumber: 255,
                                    columnNumber: 29
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Documents/hr/Hrms/src/components/Timesheet/index.js",
                            lineNumber: 253,
                            columnNumber: 25
                        }, ("TURBOPACK compile-time value", void 0))
                    ]
                }, void 0, true, {
                    fileName: "[project]/Documents/hr/Hrms/src/components/Timesheet/index.js",
                    lineNumber: 235,
                    columnNumber: 17
                }, ("TURBOPACK compile-time value", void 0))
            ]
        }, void 0, true, {
            fileName: "[project]/Documents/hr/Hrms/src/components/Timesheet/index.js",
            lineNumber: 224,
            columnNumber: 13
        }, ("TURBOPACK compile-time value", void 0));
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$hr$2f$Hrms$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "animate-fade",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$hr$2f$Hrms$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    marginBottom: '28px'
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$hr$2f$Hrms$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$hr$2f$Hrms$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                style: {
                                    fontSize: '24px',
                                    fontWeight: '800',
                                    color: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$hr$2f$Hrms$2f$src$2f$styles$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["tokens"].colors.primary
                                },
                                children: "Timesheet Review"
                            }, void 0, false, {
                                fileName: "[project]/Documents/hr/Hrms/src/components/Timesheet/index.js",
                                lineNumber: 267,
                                columnNumber: 21
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$hr$2f$Hrms$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                style: {
                                    color: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$hr$2f$Hrms$2f$src$2f$styles$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["tokens"].colors.secondary,
                                    fontSize: '14px'
                                },
                                children: "Review and approve employee weekly timesheets."
                            }, void 0, false, {
                                fileName: "[project]/Documents/hr/Hrms/src/components/Timesheet/index.js",
                                lineNumber: 268,
                                columnNumber: 21
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Documents/hr/Hrms/src/components/Timesheet/index.js",
                        lineNumber: 266,
                        columnNumber: 17
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$hr$2f$Hrms$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                        style: {
                            ...__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$hr$2f$Hrms$2f$src$2f$styles$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["styles"].input,
                            width: '160px'
                        },
                        value: filter,
                        onChange: (e)=>setFilter(e.target.value),
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$hr$2f$Hrms$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                value: "all",
                                children: "All"
                            }, void 0, false, {
                                fileName: "[project]/Documents/hr/Hrms/src/components/Timesheet/index.js",
                                lineNumber: 271,
                                columnNumber: 21
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$hr$2f$Hrms$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                value: "submitted",
                                children: "Pending"
                            }, void 0, false, {
                                fileName: "[project]/Documents/hr/Hrms/src/components/Timesheet/index.js",
                                lineNumber: 272,
                                columnNumber: 21
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$hr$2f$Hrms$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                value: "approved",
                                children: "Approved"
                            }, void 0, false, {
                                fileName: "[project]/Documents/hr/Hrms/src/components/Timesheet/index.js",
                                lineNumber: 273,
                                columnNumber: 21
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$hr$2f$Hrms$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                value: "rejected",
                                children: "Rejected"
                            }, void 0, false, {
                                fileName: "[project]/Documents/hr/Hrms/src/components/Timesheet/index.js",
                                lineNumber: 274,
                                columnNumber: 21
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$hr$2f$Hrms$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                value: "draft",
                                children: "Drafts"
                            }, void 0, false, {
                                fileName: "[project]/Documents/hr/Hrms/src/components/Timesheet/index.js",
                                lineNumber: 275,
                                columnNumber: 21
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Documents/hr/Hrms/src/components/Timesheet/index.js",
                        lineNumber: 270,
                        columnNumber: 17
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/Documents/hr/Hrms/src/components/Timesheet/index.js",
                lineNumber: 265,
                columnNumber: 13
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$hr$2f$Hrms$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$hr$2f$Hrms$2f$src$2f$styles$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["styles"].card,
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$hr$2f$Hrms$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("table", {
                    style: {
                        width: '100%',
                        borderCollapse: 'collapse'
                    },
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$hr$2f$Hrms$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("thead", {
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$hr$2f$Hrms$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$hr$2f$Hrms$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                        style: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$hr$2f$Hrms$2f$src$2f$styles$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["styles"].th,
                                        children: "Employee"
                                    }, void 0, false, {
                                        fileName: "[project]/Documents/hr/Hrms/src/components/Timesheet/index.js",
                                        lineNumber: 281,
                                        columnNumber: 25
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$hr$2f$Hrms$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                        style: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$hr$2f$Hrms$2f$src$2f$styles$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["styles"].th,
                                        children: "Week"
                                    }, void 0, false, {
                                        fileName: "[project]/Documents/hr/Hrms/src/components/Timesheet/index.js",
                                        lineNumber: 282,
                                        columnNumber: 25
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$hr$2f$Hrms$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                        style: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$hr$2f$Hrms$2f$src$2f$styles$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["styles"].th,
                                        children: "Hours"
                                    }, void 0, false, {
                                        fileName: "[project]/Documents/hr/Hrms/src/components/Timesheet/index.js",
                                        lineNumber: 283,
                                        columnNumber: 25
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$hr$2f$Hrms$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                        style: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$hr$2f$Hrms$2f$src$2f$styles$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["styles"].th,
                                        children: "Status"
                                    }, void 0, false, {
                                        fileName: "[project]/Documents/hr/Hrms/src/components/Timesheet/index.js",
                                        lineNumber: 284,
                                        columnNumber: 25
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$hr$2f$Hrms$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                        style: {
                                            ...__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$hr$2f$Hrms$2f$src$2f$styles$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["styles"].th,
                                            textAlign: 'right'
                                        },
                                        children: "Action"
                                    }, void 0, false, {
                                        fileName: "[project]/Documents/hr/Hrms/src/components/Timesheet/index.js",
                                        lineNumber: 285,
                                        columnNumber: 25
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Documents/hr/Hrms/src/components/Timesheet/index.js",
                                lineNumber: 280,
                                columnNumber: 28
                            }, ("TURBOPACK compile-time value", void 0))
                        }, void 0, false, {
                            fileName: "[project]/Documents/hr/Hrms/src/components/Timesheet/index.js",
                            lineNumber: 280,
                            columnNumber: 21
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$hr$2f$Hrms$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tbody", {
                            children: [
                                filtered.map((t)=>{
                                    const hrs = Object.values(t.entries || {}).reduce((s, e)=>s + (parseFloat(e.hours) || 0), 0);
                                    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$hr$2f$Hrms$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$hr$2f$Hrms$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                style: {
                                                    ...__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$hr$2f$Hrms$2f$src$2f$styles$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["styles"].td,
                                                    fontWeight: '600'
                                                },
                                                children: t.userName
                                            }, void 0, false, {
                                                fileName: "[project]/Documents/hr/Hrms/src/components/Timesheet/index.js",
                                                lineNumber: 292,
                                                columnNumber: 37
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$hr$2f$Hrms$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                style: {
                                                    ...__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$hr$2f$Hrms$2f$src$2f$styles$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["styles"].td,
                                                    fontSize: '13px',
                                                    color: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$hr$2f$Hrms$2f$src$2f$styles$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["tokens"].colors.secondary
                                                },
                                                children: [
                                                    t.weekStart,
                                                    " – ",
                                                    t.weekEnd
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/Documents/hr/Hrms/src/components/Timesheet/index.js",
                                                lineNumber: 293,
                                                columnNumber: 37
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$hr$2f$Hrms$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                style: {
                                                    ...__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$hr$2f$Hrms$2f$src$2f$styles$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["styles"].td,
                                                    fontWeight: '700'
                                                },
                                                children: [
                                                    hrs.toFixed(1),
                                                    "h"
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/Documents/hr/Hrms/src/components/Timesheet/index.js",
                                                lineNumber: 294,
                                                columnNumber: 37
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$hr$2f$Hrms$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                style: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$hr$2f$Hrms$2f$src$2f$styles$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["styles"].td,
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$hr$2f$Hrms$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    style: {
                                                        padding: '3px 10px',
                                                        borderRadius: '999px',
                                                        fontSize: '11px',
                                                        fontWeight: '700',
                                                        background: `${statusColor[t.status]}18`,
                                                        color: statusColor[t.status]
                                                    },
                                                    children: t.status
                                                }, void 0, false, {
                                                    fileName: "[project]/Documents/hr/Hrms/src/components/Timesheet/index.js",
                                                    lineNumber: 296,
                                                    columnNumber: 41
                                                }, ("TURBOPACK compile-time value", void 0))
                                            }, void 0, false, {
                                                fileName: "[project]/Documents/hr/Hrms/src/components/Timesheet/index.js",
                                                lineNumber: 295,
                                                columnNumber: 37
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$hr$2f$Hrms$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                style: {
                                                    ...__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$hr$2f$Hrms$2f$src$2f$styles$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["styles"].td,
                                                    textAlign: 'right'
                                                },
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$hr$2f$Hrms$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                    onClick: ()=>setSelected(t),
                                                    style: {
                                                        ...__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$hr$2f$Hrms$2f$src$2f$styles$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["styles"].button.outline,
                                                        padding: '6px 14px',
                                                        fontSize: '13px'
                                                    },
                                                    children: "View"
                                                }, void 0, false, {
                                                    fileName: "[project]/Documents/hr/Hrms/src/components/Timesheet/index.js",
                                                    lineNumber: 299,
                                                    columnNumber: 41
                                                }, ("TURBOPACK compile-time value", void 0))
                                            }, void 0, false, {
                                                fileName: "[project]/Documents/hr/Hrms/src/components/Timesheet/index.js",
                                                lineNumber: 298,
                                                columnNumber: 37
                                            }, ("TURBOPACK compile-time value", void 0))
                                        ]
                                    }, t.id, true, {
                                        fileName: "[project]/Documents/hr/Hrms/src/components/Timesheet/index.js",
                                        lineNumber: 291,
                                        columnNumber: 33
                                    }, ("TURBOPACK compile-time value", void 0));
                                }),
                                filtered.length === 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$hr$2f$Hrms$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$hr$2f$Hrms$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                        colSpan: "5",
                                        style: {
                                            textAlign: 'center',
                                            padding: '40px',
                                            color: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$hr$2f$Hrms$2f$src$2f$styles$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["tokens"].colors.secondary
                                        },
                                        children: "No timesheets found."
                                    }, void 0, false, {
                                        fileName: "[project]/Documents/hr/Hrms/src/components/Timesheet/index.js",
                                        lineNumber: 304,
                                        columnNumber: 55
                                    }, ("TURBOPACK compile-time value", void 0))
                                }, void 0, false, {
                                    fileName: "[project]/Documents/hr/Hrms/src/components/Timesheet/index.js",
                                    lineNumber: 304,
                                    columnNumber: 51
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Documents/hr/Hrms/src/components/Timesheet/index.js",
                            lineNumber: 287,
                            columnNumber: 21
                        }, ("TURBOPACK compile-time value", void 0))
                    ]
                }, void 0, true, {
                    fileName: "[project]/Documents/hr/Hrms/src/components/Timesheet/index.js",
                    lineNumber: 279,
                    columnNumber: 17
                }, ("TURBOPACK compile-time value", void 0))
            }, void 0, false, {
                fileName: "[project]/Documents/hr/Hrms/src/components/Timesheet/index.js",
                lineNumber: 278,
                columnNumber: 13
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/Documents/hr/Hrms/src/components/Timesheet/index.js",
        lineNumber: 264,
        columnNumber: 9
    }, ("TURBOPACK compile-time value", void 0));
};
_s1(AdminTimesheets, "nTaqzcctkVJa/voojzFavEUQ8SY=");
_c1 = AdminTimesheets;
const __TURBOPACK__default__export__ = EmployeeTimesheet;
var _c, _c1;
__turbopack_context__.k.register(_c, "EmployeeTimesheet");
__turbopack_context__.k.register(_c1, "AdminTimesheets");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Documents/hr/Hrms/src/components/Notifications/index.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$hr$2f$Hrms$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/hr/Hrms/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$hr$2f$Hrms$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/hr/Hrms/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$hr$2f$Hrms$2f$src$2f$firebase$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/hr/Hrms/src/firebase.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$hr$2f$Hrms$2f$node_modules$2f$firebase$2f$firestore$2f$dist$2f$esm$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/Documents/hr/Hrms/node_modules/firebase/firestore/dist/esm/index.esm.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$hr$2f$Hrms$2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/hr/Hrms/node_modules/@firebase/firestore/dist/index.esm.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$hr$2f$Hrms$2f$src$2f$styles$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/hr/Hrms/src/styles.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
;
;
;
;
/**
 * In-app notification bell.
 * - Admin: shows unread count of pending leave requests
 * - Employee: shows approved/rejected leave decisions they haven't seen
 */ const NotificationBell = ({ user, isAdmin })=>{
    _s();
    const [notifications, setNotifications] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$hr$2f$Hrms$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [open, setOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$hr$2f$Hrms$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const ref = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$hr$2f$Hrms$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$hr$2f$Hrms$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "NotificationBell.useEffect": ()=>{
            let unsub;
            if (isAdmin) {
                // Admin: pending leave requests are notifications
                unsub = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$hr$2f$Hrms$2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["onSnapshot"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$hr$2f$Hrms$2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["query"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$hr$2f$Hrms$2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["collection"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$hr$2f$Hrms$2f$src$2f$firebase$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["db"], 'leaveRequests'), (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$hr$2f$Hrms$2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["where"])('status', '==', 'pending')), {
                    "NotificationBell.useEffect": (s)=>setNotifications(s.docs.map({
                            "NotificationBell.useEffect": (d)=>({
                                    id: d.id,
                                    type: 'leave_pending',
                                    title: 'Leave Request',
                                    body: `${d.data().userEmail?.split('@')[0]} requested ${d.data().type} leave`,
                                    time: d.data().createdAt || '',
                                    read: d.data().adminRead === true,
                                    ref: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$hr$2f$Hrms$2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["doc"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$hr$2f$Hrms$2f$src$2f$firebase$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["db"], 'leaveRequests', d.id),
                                    field: 'adminRead'
                                })
                        }["NotificationBell.useEffect"]))
                }["NotificationBell.useEffect"]);
            } else {
                // Employee: decisions on their own leave requests
                unsub = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$hr$2f$Hrms$2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["onSnapshot"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$hr$2f$Hrms$2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["query"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$hr$2f$Hrms$2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["collection"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$hr$2f$Hrms$2f$src$2f$firebase$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["db"], 'leaveRequests'), (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$hr$2f$Hrms$2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["where"])('userEmail', '==', user.email), (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$hr$2f$Hrms$2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["where"])('status', 'in', [
                    'approved',
                    'rejected'
                ])), {
                    "NotificationBell.useEffect": (s)=>setNotifications(s.docs.filter({
                            "NotificationBell.useEffect": (d)=>d.data().notificationRead !== true
                        }["NotificationBell.useEffect"]).map({
                            "NotificationBell.useEffect": (d)=>({
                                    id: d.id,
                                    type: d.data().status,
                                    title: d.data().status === 'approved' ? '✅ Leave Approved' : '❌ Leave Declined',
                                    body: d.data().status === 'rejected' && d.data().rejectionReason ? `Reason: ${d.data().rejectionReason}` : `Your ${d.data().type} leave (${d.data().start} → ${d.data().end}) was ${d.data().status}.`,
                                    time: d.data().updatedAt || '',
                                    read: false,
                                    ref: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$hr$2f$Hrms$2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["doc"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$hr$2f$Hrms$2f$src$2f$firebase$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["db"], 'leaveRequests', d.id),
                                    field: 'notificationRead'
                                })
                        }["NotificationBell.useEffect"]))
                }["NotificationBell.useEffect"]);
            }
            return ({
                "NotificationBell.useEffect": ()=>unsub?.()
            })["NotificationBell.useEffect"];
        }
    }["NotificationBell.useEffect"], [
        user?.email,
        isAdmin
    ]);
    // Close on outside click
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$hr$2f$Hrms$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "NotificationBell.useEffect": ()=>{
            const handler = {
                "NotificationBell.useEffect.handler": (e)=>{
                    if (ref.current && !ref.current.contains(e.target)) setOpen(false);
                }
            }["NotificationBell.useEffect.handler"];
            document.addEventListener('mousedown', handler);
            return ({
                "NotificationBell.useEffect": ()=>document.removeEventListener('mousedown', handler)
            })["NotificationBell.useEffect"];
        }
    }["NotificationBell.useEffect"], []);
    const unread = notifications.filter((n)=>!n.read).length;
    const markRead = async (n)=>{
        try {
            await (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$hr$2f$Hrms$2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["updateDoc"])(n.ref, {
                [n.field]: true
            });
        } catch (e) {
            console.error(e);
        }
    };
    const markAllRead = ()=>notifications.forEach((n)=>markRead(n));
    const statusColors = {
        leave_pending: {
            bg: '#FFFBEB',
            color: '#D97706',
            icon: 'event_available'
        },
        approved: {
            bg: '#ECFDF5',
            color: '#059669',
            icon: 'check_circle'
        },
        rejected: {
            bg: '#FEF2F2',
            color: '#DC2626',
            icon: 'cancel'
        }
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$hr$2f$Hrms$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        ref: ref,
        style: {
            position: 'relative'
        },
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$hr$2f$Hrms$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                onClick: ()=>setOpen((o)=>!o),
                style: {
                    position: 'relative',
                    background: 'none',
                    border: `1px solid ${__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$hr$2f$Hrms$2f$src$2f$styles$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["tokens"].colors.border}`,
                    borderRadius: '12px',
                    padding: '8px 12px',
                    cursor: 'pointer',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '6px',
                    color: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$hr$2f$Hrms$2f$src$2f$styles$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["tokens"].colors.secondary,
                    transition: 'all 0.2s'
                },
                onMouseOver: (e)=>{
                    e.currentTarget.style.background = '#F8FAFC';
                    e.currentTarget.style.borderColor = __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$hr$2f$Hrms$2f$src$2f$styles$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["tokens"].colors.accent;
                },
                onMouseOut: (e)=>{
                    e.currentTarget.style.background = 'none';
                    e.currentTarget.style.borderColor = __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$hr$2f$Hrms$2f$src$2f$styles$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["tokens"].colors.border;
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$hr$2f$Hrms$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "material-symbols-outlined",
                        style: {
                            fontSize: '20px',
                            color: unread > 0 ? __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$hr$2f$Hrms$2f$src$2f$styles$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["tokens"].colors.accent : __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$hr$2f$Hrms$2f$src$2f$styles$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["tokens"].colors.secondary
                        },
                        children: unread > 0 ? 'notifications_active' : 'notifications'
                    }, void 0, false, {
                        fileName: "[project]/Documents/hr/Hrms/src/components/Notifications/index.js",
                        lineNumber: 89,
                        columnNumber: 17
                    }, ("TURBOPACK compile-time value", void 0)),
                    unread > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$hr$2f$Hrms$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        style: {
                            position: 'absolute',
                            top: '-6px',
                            right: '-6px',
                            background: '#EF4444',
                            color: '#fff',
                            borderRadius: '999px',
                            fontSize: '10px',
                            fontWeight: '800',
                            minWidth: '18px',
                            height: '18px',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            padding: '0 4px',
                            border: '2px solid #fff'
                        },
                        children: unread > 9 ? '9+' : unread
                    }, void 0, false, {
                        fileName: "[project]/Documents/hr/Hrms/src/components/Notifications/index.js",
                        lineNumber: 93,
                        columnNumber: 21
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/Documents/hr/Hrms/src/components/Notifications/index.js",
                lineNumber: 83,
                columnNumber: 13
            }, ("TURBOPACK compile-time value", void 0)),
            open && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$hr$2f$Hrms$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    position: 'absolute',
                    top: 'calc(100% + 10px)',
                    right: 0,
                    width: '360px',
                    background: '#fff',
                    borderRadius: '16px',
                    boxShadow: '0 20px 60px -10px rgba(0,0,0,0.15)',
                    border: `1px solid ${__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$hr$2f$Hrms$2f$src$2f$styles$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["tokens"].colors.border}`,
                    zIndex: 1000,
                    overflow: 'hidden'
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$hr$2f$Hrms$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            padding: '16px 20px',
                            borderBottom: `1px solid ${__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$hr$2f$Hrms$2f$src$2f$styles$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["tokens"].colors.border}`,
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'space-between'
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$hr$2f$Hrms$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                style: {
                                    fontSize: '14px',
                                    fontWeight: '800',
                                    color: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$hr$2f$Hrms$2f$src$2f$styles$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["tokens"].colors.primary
                                },
                                children: [
                                    "Notifications ",
                                    unread > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$hr$2f$Hrms$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        style: {
                                            fontSize: '12px',
                                            background: '#EF444415',
                                            color: '#EF4444',
                                            padding: '2px 8px',
                                            borderRadius: '999px',
                                            marginLeft: '6px'
                                        },
                                        children: [
                                            unread,
                                            " new"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Documents/hr/Hrms/src/components/Notifications/index.js",
                                        lineNumber: 104,
                                        columnNumber: 58
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Documents/hr/Hrms/src/components/Notifications/index.js",
                                lineNumber: 103,
                                columnNumber: 25
                            }, ("TURBOPACK compile-time value", void 0)),
                            unread > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$hr$2f$Hrms$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: markAllRead,
                                style: {
                                    background: 'none',
                                    border: 'none',
                                    fontSize: '12px',
                                    color: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$hr$2f$Hrms$2f$src$2f$styles$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["tokens"].colors.accent,
                                    cursor: 'pointer',
                                    fontWeight: '700'
                                },
                                children: "Mark all read"
                            }, void 0, false, {
                                fileName: "[project]/Documents/hr/Hrms/src/components/Notifications/index.js",
                                lineNumber: 107,
                                columnNumber: 29
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Documents/hr/Hrms/src/components/Notifications/index.js",
                        lineNumber: 102,
                        columnNumber: 21
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$hr$2f$Hrms$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            maxHeight: '380px',
                            overflowY: 'auto'
                        },
                        children: notifications.length === 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$hr$2f$Hrms$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            style: {
                                textAlign: 'center',
                                padding: '48px 20px',
                                color: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$hr$2f$Hrms$2f$src$2f$styles$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["tokens"].colors.secondary
                            },
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$hr$2f$Hrms$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "material-symbols-outlined",
                                    style: {
                                        fontSize: '40px',
                                        color: '#CBD5E1',
                                        display: 'block',
                                        marginBottom: '8px'
                                    },
                                    children: "notifications_off"
                                }, void 0, false, {
                                    fileName: "[project]/Documents/hr/Hrms/src/components/Notifications/index.js",
                                    lineNumber: 114,
                                    columnNumber: 33
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$hr$2f$Hrms$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    style: {
                                        fontSize: '13px'
                                    },
                                    children: "You're all caught up!"
                                }, void 0, false, {
                                    fileName: "[project]/Documents/hr/Hrms/src/components/Notifications/index.js",
                                    lineNumber: 115,
                                    columnNumber: 33
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Documents/hr/Hrms/src/components/Notifications/index.js",
                            lineNumber: 113,
                            columnNumber: 29
                        }, ("TURBOPACK compile-time value", void 0)) : notifications.map((n)=>{
                            const c = statusColors[n.type] || statusColors.leave_pending;
                            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$hr$2f$Hrms$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                onClick: ()=>markRead(n),
                                style: {
                                    padding: '14px 20px',
                                    borderBottom: `1px solid ${__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$hr$2f$Hrms$2f$src$2f$styles$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["tokens"].colors.border}`,
                                    cursor: 'pointer',
                                    background: n.read ? '#fff' : '#FAFAFA',
                                    transition: 'background 0.15s',
                                    display: 'flex',
                                    gap: '12px',
                                    alignItems: 'flex-start'
                                },
                                onMouseOver: (e)=>e.currentTarget.style.background = '#F8FAFC',
                                onMouseOut: (e)=>e.currentTarget.style.background = n.read ? '#fff' : '#FAFAFA',
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$hr$2f$Hrms$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        style: {
                                            width: '36px',
                                            height: '36px',
                                            borderRadius: '10px',
                                            background: c.bg,
                                            display: 'flex',
                                            alignItems: 'center',
                                            justifyContent: 'center',
                                            flexShrink: 0
                                        },
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$hr$2f$Hrms$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "material-symbols-outlined",
                                            style: {
                                                fontSize: '18px',
                                                color: c.color
                                            },
                                            children: c.icon
                                        }, void 0, false, {
                                            fileName: "[project]/Documents/hr/Hrms/src/components/Notifications/index.js",
                                            lineNumber: 126,
                                            columnNumber: 45
                                        }, ("TURBOPACK compile-time value", void 0))
                                    }, void 0, false, {
                                        fileName: "[project]/Documents/hr/Hrms/src/components/Notifications/index.js",
                                        lineNumber: 125,
                                        columnNumber: 41
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$hr$2f$Hrms$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        style: {
                                            flex: 1,
                                            minWidth: 0
                                        },
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$hr$2f$Hrms$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                style: {
                                                    fontSize: '13px',
                                                    fontWeight: '700',
                                                    color: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$hr$2f$Hrms$2f$src$2f$styles$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["tokens"].colors.primary,
                                                    marginBottom: '3px',
                                                    display: 'flex',
                                                    alignItems: 'center',
                                                    gap: '6px'
                                                },
                                                children: [
                                                    n.title,
                                                    !n.read && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$hr$2f$Hrms$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        style: {
                                                            width: '7px',
                                                            height: '7px',
                                                            borderRadius: '50%',
                                                            background: '#EF4444',
                                                            display: 'inline-block'
                                                        }
                                                    }, void 0, false, {
                                                        fileName: "[project]/Documents/hr/Hrms/src/components/Notifications/index.js",
                                                        lineNumber: 131,
                                                        columnNumber: 61
                                                    }, ("TURBOPACK compile-time value", void 0))
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/Documents/hr/Hrms/src/components/Notifications/index.js",
                                                lineNumber: 129,
                                                columnNumber: 45
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$hr$2f$Hrms$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                style: {
                                                    fontSize: '12px',
                                                    color: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$hr$2f$Hrms$2f$src$2f$styles$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["tokens"].colors.secondary,
                                                    lineHeight: '1.5'
                                                },
                                                children: n.body
                                            }, void 0, false, {
                                                fileName: "[project]/Documents/hr/Hrms/src/components/Notifications/index.js",
                                                lineNumber: 133,
                                                columnNumber: 45
                                            }, ("TURBOPACK compile-time value", void 0))
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Documents/hr/Hrms/src/components/Notifications/index.js",
                                        lineNumber: 128,
                                        columnNumber: 41
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, n.id, true, {
                                fileName: "[project]/Documents/hr/Hrms/src/components/Notifications/index.js",
                                lineNumber: 121,
                                columnNumber: 37
                            }, ("TURBOPACK compile-time value", void 0));
                        })
                    }, void 0, false, {
                        fileName: "[project]/Documents/hr/Hrms/src/components/Notifications/index.js",
                        lineNumber: 111,
                        columnNumber: 21
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/Documents/hr/Hrms/src/components/Notifications/index.js",
                lineNumber: 100,
                columnNumber: 17
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/Documents/hr/Hrms/src/components/Notifications/index.js",
        lineNumber: 82,
        columnNumber: 9
    }, ("TURBOPACK compile-time value", void 0));
};
_s(NotificationBell, "fWTW1MzmIbKmDFTmycvmdS/0x2w=");
_c = NotificationBell;
const __TURBOPACK__default__export__ = NotificationBell;
var _c;
__turbopack_context__.k.register(_c, "NotificationBell");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Documents/hr/Hrms/src/components/AuditLog/index.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$hr$2f$Hrms$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/hr/Hrms/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$hr$2f$Hrms$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/hr/Hrms/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$hr$2f$Hrms$2f$src$2f$firebase$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/hr/Hrms/src/firebase.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$hr$2f$Hrms$2f$node_modules$2f$firebase$2f$firestore$2f$dist$2f$esm$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/Documents/hr/Hrms/node_modules/firebase/firestore/dist/esm/index.esm.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$hr$2f$Hrms$2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/hr/Hrms/node_modules/@firebase/firestore/dist/index.esm.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$hr$2f$Hrms$2f$src$2f$styles$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/hr/Hrms/src/styles.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
;
;
;
;
const ACTION_META = {
    LEAVE_APPROVED: {
        label: 'Leave Approved',
        icon: 'check_circle',
        color: '#059669',
        bg: '#ECFDF5'
    },
    LEAVE_REJECTED: {
        label: 'Leave Declined',
        icon: 'cancel',
        color: '#DC2626',
        bg: '#FEF2F2'
    },
    ATTENDANCE_CORRECTION: {
        label: 'Attendance Corrected',
        icon: 'edit_square',
        color: '#D97706',
        bg: '#FFFBEB'
    },
    BROADCAST_SENT: {
        label: 'Broadcast Sent',
        icon: 'campaign',
        color: '#3B82F6',
        bg: '#EFF6FF'
    },
    PAYROLL_RUN: {
        label: 'Payroll Processed',
        icon: 'payments',
        color: '#8B5CF6',
        bg: '#F5F3FF'
    },
    EMPLOYEE_CREATED: {
        label: 'Employee Added',
        icon: 'person_add',
        color: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$hr$2f$Hrms$2f$src$2f$styles$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["tokens"]?.colors?.accent || '#0D9488',
        bg: '#F0FDFA'
    },
    EMPLOYEE_UPDATED: {
        label: 'Employee Updated',
        icon: 'manage_accounts',
        color: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$hr$2f$Hrms$2f$src$2f$styles$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["tokens"]?.colors?.accent || '#0D9488',
        bg: '#F0FDFA'
    }
};
const AuditLog = ()=>{
    _s();
    const [logs, setLogs] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$hr$2f$Hrms$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [filter, setFilter] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$hr$2f$Hrms$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('all');
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$hr$2f$Hrms$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "AuditLog.useEffect": ()=>{
            const unsub = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$hr$2f$Hrms$2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["onSnapshot"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$hr$2f$Hrms$2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["query"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$hr$2f$Hrms$2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["collection"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$hr$2f$Hrms$2f$src$2f$firebase$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["db"], 'auditLog'), (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$hr$2f$Hrms$2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["orderBy"])('timestamp', 'desc'), (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$hr$2f$Hrms$2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["limit"])(200)), {
                "AuditLog.useEffect.unsub": (s)=>setLogs(s.docs.map({
                        "AuditLog.useEffect.unsub": (d)=>({
                                id: d.id,
                                ...d.data()
                            })
                    }["AuditLog.useEffect.unsub"]))
            }["AuditLog.useEffect.unsub"]);
            return unsub;
        }
    }["AuditLog.useEffect"], []);
    const filtered = filter === 'all' ? logs : logs.filter((l)=>l.action === filter);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$hr$2f$Hrms$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "animate-fade",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$hr$2f$Hrms$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    marginBottom: '28px'
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$hr$2f$Hrms$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$hr$2f$Hrms$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                style: {
                                    fontSize: '24px',
                                    fontWeight: '800',
                                    color: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$hr$2f$Hrms$2f$src$2f$styles$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["tokens"].colors.primary
                                },
                                children: "Audit Log"
                            }, void 0, false, {
                                fileName: "[project]/Documents/hr/Hrms/src/components/AuditLog/index.js",
                                lineNumber: 34,
                                columnNumber: 21
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$hr$2f$Hrms$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                style: {
                                    color: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$hr$2f$Hrms$2f$src$2f$styles$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["tokens"].colors.secondary,
                                    fontSize: '14px'
                                },
                                children: "Complete history of all administrative actions — last 200 entries."
                            }, void 0, false, {
                                fileName: "[project]/Documents/hr/Hrms/src/components/AuditLog/index.js",
                                lineNumber: 35,
                                columnNumber: 21
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Documents/hr/Hrms/src/components/AuditLog/index.js",
                        lineNumber: 33,
                        columnNumber: 17
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$hr$2f$Hrms$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                        style: {
                            ...__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$hr$2f$Hrms$2f$src$2f$styles$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["styles"].input,
                            width: '200px'
                        },
                        value: filter,
                        onChange: (e)=>setFilter(e.target.value),
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$hr$2f$Hrms$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                value: "all",
                                children: "All Actions"
                            }, void 0, false, {
                                fileName: "[project]/Documents/hr/Hrms/src/components/AuditLog/index.js",
                                lineNumber: 38,
                                columnNumber: 21
                            }, ("TURBOPACK compile-time value", void 0)),
                            Object.keys(ACTION_META).map((k)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$hr$2f$Hrms$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                    value: k,
                                    children: ACTION_META[k].label
                                }, k, false, {
                                    fileName: "[project]/Documents/hr/Hrms/src/components/AuditLog/index.js",
                                    lineNumber: 39,
                                    columnNumber: 56
                                }, ("TURBOPACK compile-time value", void 0)))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Documents/hr/Hrms/src/components/AuditLog/index.js",
                        lineNumber: 37,
                        columnNumber: 17
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/Documents/hr/Hrms/src/components/AuditLog/index.js",
                lineNumber: 32,
                columnNumber: 13
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$hr$2f$Hrms$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$hr$2f$Hrms$2f$src$2f$styles$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["styles"].card,
                children: filtered.length === 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$hr$2f$Hrms$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    style: {
                        textAlign: 'center',
                        padding: '60px',
                        color: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$hr$2f$Hrms$2f$src$2f$styles$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["tokens"].colors.secondary
                    },
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$hr$2f$Hrms$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "material-symbols-outlined",
                            style: {
                                fontSize: '48px',
                                color: '#CBD5E1',
                                display: 'block',
                                marginBottom: '12px'
                            },
                            children: "manage_search"
                        }, void 0, false, {
                            fileName: "[project]/Documents/hr/Hrms/src/components/AuditLog/index.js",
                            lineNumber: 46,
                            columnNumber: 25
                        }, ("TURBOPACK compile-time value", void 0)),
                        "No audit entries yet. Actions will appear here as admins perform them."
                    ]
                }, void 0, true, {
                    fileName: "[project]/Documents/hr/Hrms/src/components/AuditLog/index.js",
                    lineNumber: 45,
                    columnNumber: 21
                }, ("TURBOPACK compile-time value", void 0)) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$hr$2f$Hrms$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    style: {
                        display: 'flex',
                        flexDirection: 'column',
                        gap: '0'
                    },
                    children: filtered.map((log, idx)=>{
                        const meta = ACTION_META[log.action] || {
                            label: log.action,
                            icon: 'info',
                            color: '#64748B',
                            bg: '#F8FAFC'
                        };
                        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$hr$2f$Hrms$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            style: {
                                display: 'flex',
                                gap: '14px',
                                padding: '16px 20px',
                                borderBottom: idx < filtered.length - 1 ? `1px solid ${__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$hr$2f$Hrms$2f$src$2f$styles$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["tokens"].colors.border}` : 'none',
                                alignItems: 'flex-start',
                                transition: 'background 0.15s'
                            },
                            onMouseOver: (e)=>e.currentTarget.style.background = '#F8FAFC',
                            onMouseOut: (e)=>e.currentTarget.style.background = 'transparent',
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$hr$2f$Hrms$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    style: {
                                        width: '38px',
                                        height: '38px',
                                        borderRadius: '10px',
                                        background: meta.bg,
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        flexShrink: 0
                                    },
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$hr$2f$Hrms$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "material-symbols-outlined",
                                        style: {
                                            fontSize: '18px',
                                            color: meta.color
                                        },
                                        children: meta.icon
                                    }, void 0, false, {
                                        fileName: "[project]/Documents/hr/Hrms/src/components/AuditLog/index.js",
                                        lineNumber: 58,
                                        columnNumber: 41
                                    }, ("TURBOPACK compile-time value", void 0))
                                }, void 0, false, {
                                    fileName: "[project]/Documents/hr/Hrms/src/components/AuditLog/index.js",
                                    lineNumber: 57,
                                    columnNumber: 37
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$hr$2f$Hrms$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    style: {
                                        flex: 1,
                                        minWidth: 0
                                    },
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$hr$2f$Hrms$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            style: {
                                                display: 'flex',
                                                alignItems: 'center',
                                                gap: '8px',
                                                marginBottom: '4px'
                                            },
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$hr$2f$Hrms$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    style: {
                                                        fontSize: '13px',
                                                        fontWeight: '800',
                                                        color: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$hr$2f$Hrms$2f$src$2f$styles$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["tokens"].colors.primary
                                                    },
                                                    children: meta.label
                                                }, void 0, false, {
                                                    fileName: "[project]/Documents/hr/Hrms/src/components/AuditLog/index.js",
                                                    lineNumber: 62,
                                                    columnNumber: 45
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$hr$2f$Hrms$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    style: {
                                                        fontSize: '11px',
                                                        background: `${meta.color}15`,
                                                        color: meta.color,
                                                        padding: '2px 8px',
                                                        borderRadius: '999px',
                                                        fontWeight: '700'
                                                    },
                                                    children: log.action
                                                }, void 0, false, {
                                                    fileName: "[project]/Documents/hr/Hrms/src/components/AuditLog/index.js",
                                                    lineNumber: 63,
                                                    columnNumber: 45
                                                }, ("TURBOPACK compile-time value", void 0))
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/Documents/hr/Hrms/src/components/AuditLog/index.js",
                                            lineNumber: 61,
                                            columnNumber: 41
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$hr$2f$Hrms$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            style: {
                                                fontSize: '12px',
                                                color: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$hr$2f$Hrms$2f$src$2f$styles$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["tokens"].colors.secondary,
                                                lineHeight: '1.6'
                                            },
                                            children: Object.entries(log.details || {}).map(([k, v])=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$hr$2f$Hrms$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    style: {
                                                        marginRight: '12px'
                                                    },
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$hr$2f$Hrms$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                                            children: [
                                                                k,
                                                                ":"
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/Documents/hr/Hrms/src/components/AuditLog/index.js",
                                                            lineNumber: 67,
                                                            columnNumber: 95
                                                        }, ("TURBOPACK compile-time value", void 0)),
                                                        " ",
                                                        String(v)
                                                    ]
                                                }, k, true, {
                                                    fileName: "[project]/Documents/hr/Hrms/src/components/AuditLog/index.js",
                                                    lineNumber: 67,
                                                    columnNumber: 49
                                                }, ("TURBOPACK compile-time value", void 0)))
                                        }, void 0, false, {
                                            fileName: "[project]/Documents/hr/Hrms/src/components/AuditLog/index.js",
                                            lineNumber: 65,
                                            columnNumber: 41
                                        }, ("TURBOPACK compile-time value", void 0))
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Documents/hr/Hrms/src/components/AuditLog/index.js",
                                    lineNumber: 60,
                                    columnNumber: 37
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$hr$2f$Hrms$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    style: {
                                        textAlign: 'right',
                                        flexShrink: 0
                                    },
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$hr$2f$Hrms$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            style: {
                                                fontSize: '12px',
                                                fontWeight: '700',
                                                color: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$hr$2f$Hrms$2f$src$2f$styles$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["tokens"].colors.primary
                                            },
                                            children: log.performedBy
                                        }, void 0, false, {
                                            fileName: "[project]/Documents/hr/Hrms/src/components/AuditLog/index.js",
                                            lineNumber: 72,
                                            columnNumber: 41
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$hr$2f$Hrms$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            style: {
                                                fontSize: '11px',
                                                color: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$hr$2f$Hrms$2f$src$2f$styles$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["tokens"].colors.secondary,
                                                marginTop: '2px'
                                            },
                                            children: log.timestamp ? new Date(log.timestamp).toLocaleString('en-IN', {
                                                dateStyle: 'medium',
                                                timeStyle: 'short'
                                            }) : '—'
                                        }, void 0, false, {
                                            fileName: "[project]/Documents/hr/Hrms/src/components/AuditLog/index.js",
                                            lineNumber: 73,
                                            columnNumber: 41
                                        }, ("TURBOPACK compile-time value", void 0))
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Documents/hr/Hrms/src/components/AuditLog/index.js",
                                    lineNumber: 71,
                                    columnNumber: 37
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, log.id, true, {
                            fileName: "[project]/Documents/hr/Hrms/src/components/AuditLog/index.js",
                            lineNumber: 54,
                            columnNumber: 33
                        }, ("TURBOPACK compile-time value", void 0));
                    })
                }, void 0, false, {
                    fileName: "[project]/Documents/hr/Hrms/src/components/AuditLog/index.js",
                    lineNumber: 50,
                    columnNumber: 21
                }, ("TURBOPACK compile-time value", void 0))
            }, void 0, false, {
                fileName: "[project]/Documents/hr/Hrms/src/components/AuditLog/index.js",
                lineNumber: 43,
                columnNumber: 13
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/Documents/hr/Hrms/src/components/AuditLog/index.js",
        lineNumber: 31,
        columnNumber: 9
    }, ("TURBOPACK compile-time value", void 0));
};
_s(AuditLog, "DxJ32XOCTWkp3BakC56nULL5v20=");
_c = AuditLog;
const __TURBOPACK__default__export__ = AuditLog;
var _c;
__turbopack_context__.k.register(_c, "AuditLog");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Documents/hr/Hrms/src/components/RoleManager/index.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$hr$2f$Hrms$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/hr/Hrms/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$hr$2f$Hrms$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/hr/Hrms/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$hr$2f$Hrms$2f$src$2f$firebase$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/hr/Hrms/src/firebase.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$hr$2f$Hrms$2f$node_modules$2f$firebase$2f$firestore$2f$dist$2f$esm$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/Documents/hr/Hrms/node_modules/firebase/firestore/dist/esm/index.esm.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$hr$2f$Hrms$2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/hr/Hrms/node_modules/@firebase/firestore/dist/index.esm.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$hr$2f$Hrms$2f$src$2f$styles$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/hr/Hrms/src/styles.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$hr$2f$Hrms$2f$src$2f$context$2f$RBACContext$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/hr/Hrms/src/context/RBACContext.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$hr$2f$Hrms$2f$src$2f$utils$2f$auditLog$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/hr/Hrms/src/utils/auditLog.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
;
;
;
/* ─── All available permissions ─── */ const ALL_PERMISSIONS = [
    {
        code: '*',
        label: 'Full Access (Wildcard)',
        group: 'System'
    },
    {
        code: 'dashboard.view',
        label: 'View Dashboard',
        group: 'Core'
    },
    {
        code: 'employees.*',
        label: 'All Employee Actions',
        group: 'Employees'
    },
    {
        code: 'employees.view',
        label: 'View Employees',
        group: 'Employees'
    },
    {
        code: 'employees.edit',
        label: 'Edit Employees',
        group: 'Employees'
    },
    {
        code: 'employees.create',
        label: 'Create Employees',
        group: 'Employees'
    },
    {
        code: 'employees.delete',
        label: 'Delete Employees',
        group: 'Employees'
    },
    {
        code: 'attendance.*',
        label: 'All Attendance Actions',
        group: 'Attendance'
    },
    {
        code: 'attendance.own',
        label: 'Own Attendance',
        group: 'Attendance'
    },
    {
        code: 'attendance.view',
        label: 'View All Attendance',
        group: 'Attendance'
    },
    {
        code: 'leaves.*',
        label: 'All Leave Actions',
        group: 'Leave'
    },
    {
        code: 'leaves.own',
        label: 'Own Leaves',
        group: 'Leave'
    },
    {
        code: 'leaves.approve',
        label: 'Approve Leaves',
        group: 'Leave'
    },
    {
        code: 'payroll.*',
        label: 'All Payroll Actions',
        group: 'Payroll'
    },
    {
        code: 'payroll.view',
        label: 'View Payroll',
        group: 'Payroll'
    },
    {
        code: 'payslips.own',
        label: 'Own Payslips',
        group: 'Payroll'
    },
    {
        code: 'timesheets.*',
        label: 'All Timesheet Actions',
        group: 'Timesheet'
    },
    {
        code: 'timesheets.own',
        label: 'Own Timesheet',
        group: 'Timesheet'
    },
    {
        code: 'timesheets.approve',
        label: 'Approve Timesheets',
        group: 'Timesheet'
    },
    {
        code: 'documents.*',
        label: 'All Document Actions',
        group: 'Documents'
    },
    {
        code: 'documents.view',
        label: 'View Documents',
        group: 'Documents'
    },
    {
        code: 'training.*',
        label: 'All Training Actions',
        group: 'Training'
    },
    {
        code: 'training.own',
        label: 'Own Training',
        group: 'Training'
    },
    {
        code: 'assets.*',
        label: 'All Asset Actions',
        group: 'Assets'
    },
    {
        code: 'exit.*',
        label: 'All Exit Actions',
        group: 'Exit'
    },
    {
        code: 'performance.*',
        label: 'All Performance Actions',
        group: 'Performance'
    },
    {
        code: 'performance.own',
        label: 'Own Performance',
        group: 'Performance'
    },
    {
        code: 'audit.view',
        label: 'View Audit Log',
        group: 'Governance'
    },
    {
        code: 'reports.view',
        label: 'View Reports',
        group: 'Governance'
    },
    {
        code: 'reports.payroll',
        label: 'Payroll Reports',
        group: 'Governance'
    },
    {
        code: 'broadcast.*',
        label: 'Send Broadcasts',
        group: 'Communication'
    },
    {
        code: 'policies.*',
        label: 'Manage Policies',
        group: 'Communication'
    },
    {
        code: 'profile.own',
        label: 'Own Profile',
        group: 'Profile'
    },
    {
        code: 'roles.*',
        label: 'Manage Roles',
        group: 'System'
    }
];
/** Group permissions by group name */ const groupedPermissions = ALL_PERMISSIONS.reduce((acc, p)=>{
    if (!acc[p.group]) acc[p.group] = [];
    acc[p.group].push(p);
    return acc;
}, {});
/* ─── Role Manager Component ─── */ const RoleManager = ({ adminEmail = 'admin' })=>{
    _s();
    const [roles, setRoles] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$hr$2f$Hrms$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [userRoles, setUserRoles] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$hr$2f$Hrms$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [employees, setEmployees] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$hr$2f$Hrms$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [editingRole, setEditingRole] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$hr$2f$Hrms$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [showModal, setShowModal] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$hr$2f$Hrms$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [assignModal, setAssignModal] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$hr$2f$Hrms$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [assignData, setAssignData] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$hr$2f$Hrms$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({
        userId: '',
        roleId: ''
    });
    const [seeding, setSeeding] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$hr$2f$Hrms$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    // Form state
    const [form, setForm] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$hr$2f$Hrms$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({
        id: '',
        name: '',
        description: '',
        permissions: []
    });
    /* ─── Load roles ─── */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$hr$2f$Hrms$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "RoleManager.useEffect": ()=>{
            const u1 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$hr$2f$Hrms$2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["onSnapshot"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$hr$2f$Hrms$2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["collection"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$hr$2f$Hrms$2f$src$2f$firebase$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["db"], 'roles'), {
                "RoleManager.useEffect.u1": (s)=>setRoles(s.docs.map({
                        "RoleManager.useEffect.u1": (d)=>({
                                id: d.id,
                                ...d.data()
                            })
                    }["RoleManager.useEffect.u1"]))
            }["RoleManager.useEffect.u1"]);
            const u2 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$hr$2f$Hrms$2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["onSnapshot"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$hr$2f$Hrms$2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["collection"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$hr$2f$Hrms$2f$src$2f$firebase$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["db"], 'user_roles'), {
                "RoleManager.useEffect.u2": (s)=>setUserRoles(s.docs.map({
                        "RoleManager.useEffect.u2": (d)=>({
                                id: d.id,
                                ...d.data()
                            })
                    }["RoleManager.useEffect.u2"]))
            }["RoleManager.useEffect.u2"]);
            const u3 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$hr$2f$Hrms$2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["onSnapshot"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$hr$2f$Hrms$2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["collection"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$hr$2f$Hrms$2f$src$2f$firebase$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["db"], 'employees'), {
                "RoleManager.useEffect.u3": (s)=>setEmployees(s.docs.map({
                        "RoleManager.useEffect.u3": (d)=>({
                                id: d.id,
                                ...d.data()
                            })
                    }["RoleManager.useEffect.u3"]))
            }["RoleManager.useEffect.u3"]);
            return ({
                "RoleManager.useEffect": ()=>{
                    u1();
                    u2();
                    u3();
                }
            })["RoleManager.useEffect"];
        }
    }["RoleManager.useEffect"], []);
    /* ─── Seed default roles ─── */ const seedRoles = async ()=>{
        setSeeding(true);
        try {
            for (const [id, role] of Object.entries(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$hr$2f$Hrms$2f$src$2f$context$2f$RBACContext$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DEFAULT_ROLES"])){
                await (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$hr$2f$Hrms$2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["setDoc"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$hr$2f$Hrms$2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["doc"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$hr$2f$Hrms$2f$src$2f$firebase$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["db"], 'roles', id), {
                    name: role.name,
                    description: `Default ${role.name} role`,
                    permissions: role.permissions,
                    createdAt: new Date().toISOString()
                });
            }
            await (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$hr$2f$Hrms$2f$src$2f$utils$2f$auditLog$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["logAction"])('ROLES_SEEDED', {
                count: Object.keys(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$hr$2f$Hrms$2f$src$2f$context$2f$RBACContext$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DEFAULT_ROLES"]).length
            }, adminEmail);
        } catch (err) {
            console.error('Seed failed:', err);
        } finally{
            setSeeding(false);
        }
    };
    /* ─── Open modal for create/edit ─── */ const openCreate = ()=>{
        setForm({
            id: '',
            name: '',
            description: '',
            permissions: []
        });
        setEditingRole(null);
        setShowModal(true);
    };
    const openEdit = (role)=>{
        setForm({
            id: role.id,
            name: role.name,
            description: role.description || '',
            permissions: [
                ...role.permissions || []
            ]
        });
        setEditingRole(role);
        setShowModal(true);
    };
    /* ─── Toggle permission ─── */ const togglePerm = (code)=>{
        setForm((f)=>({
                ...f,
                permissions: f.permissions.includes(code) ? f.permissions.filter((p)=>p !== code) : [
                    ...f.permissions,
                    code
                ]
            }));
    };
    /* ─── Save role ─── */ const handleSaveRole = async ()=>{
        const roleId = form.id || form.name.toLowerCase().replace(/\s+/g, '_');
        try {
            await (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$hr$2f$Hrms$2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["setDoc"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$hr$2f$Hrms$2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["doc"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$hr$2f$Hrms$2f$src$2f$firebase$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["db"], 'roles', roleId), {
                name: form.name,
                description: form.description,
                permissions: form.permissions,
                updatedAt: new Date().toISOString()
            }, {
                merge: true
            });
            await (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$hr$2f$Hrms$2f$src$2f$utils$2f$auditLog$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["logAction"])(editingRole ? 'ROLE_UPDATED' : 'ROLE_CREATED', {
                roleId,
                name: form.name
            }, adminEmail);
            setShowModal(false);
        } catch (err) {
            console.error(err);
            alert('Failed to save role.');
        }
    };
    /* ─── Delete role ─── */ const handleDeleteRole = async (roleId)=>{
        if (!confirm('Delete this role? Users assigned to it will lose access.')) return;
        try {
            await (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$hr$2f$Hrms$2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["deleteDoc"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$hr$2f$Hrms$2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["doc"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$hr$2f$Hrms$2f$src$2f$firebase$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["db"], 'roles', roleId));
            await (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$hr$2f$Hrms$2f$src$2f$utils$2f$auditLog$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["logAction"])('ROLE_DELETED', {
                roleId
            }, adminEmail);
        } catch (err) {
            console.error(err);
        }
    };
    /* ─── Assign role to user ─── */ const handleAssignRole = async ()=>{
        if (!assignData.userId || !assignData.roleId) return;
        try {
            await (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$hr$2f$Hrms$2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["setDoc"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$hr$2f$Hrms$2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["doc"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$hr$2f$Hrms$2f$src$2f$firebase$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["db"], 'user_roles', assignData.userId), {
                userId: assignData.userId,
                roleId: assignData.roleId,
                assignedAt: new Date().toISOString()
            });
            await (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$hr$2f$Hrms$2f$src$2f$utils$2f$auditLog$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["logAction"])('ROLE_ASSIGNED', {
                userId: assignData.userId,
                roleId: assignData.roleId,
                employee: employees.find((e)=>e.id === assignData.userId)?.name || assignData.userId
            }, adminEmail);
            setAssignModal(false);
            setAssignData({
                userId: '',
                roleId: ''
            });
        } catch (err) {
            console.error(err);
        }
    };
    /* ─── Remove role assignment ─── */ const handleRemoveAssignment = async (userId)=>{
        if (!confirm('Remove role assignment for this user?')) return;
        try {
            await (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$hr$2f$Hrms$2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["deleteDoc"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$hr$2f$Hrms$2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["doc"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$hr$2f$Hrms$2f$src$2f$firebase$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["db"], 'user_roles', userId));
            await (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$hr$2f$Hrms$2f$src$2f$utils$2f$auditLog$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["logAction"])('ROLE_UNASSIGNED', {
                userId
            }, adminEmail);
        } catch (err) {
            console.error(err);
        }
    };
    const getRoleName = (roleId)=>{
        const r = roles.find((r)=>r.id === roleId);
        return r?.name || __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$hr$2f$Hrms$2f$src$2f$context$2f$RBACContext$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DEFAULT_ROLES"][roleId]?.name || roleId;
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$hr$2f$Hrms$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "animate-fade",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$hr$2f$Hrms$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'flex-start',
                    marginBottom: '28px'
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$hr$2f$Hrms$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$hr$2f$Hrms$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                style: {
                                    fontSize: '24px',
                                    fontWeight: '800',
                                    color: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$hr$2f$Hrms$2f$src$2f$styles$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["tokens"].colors.primary
                                },
                                children: "Roles & Permissions"
                            }, void 0, false, {
                                fileName: "[project]/Documents/hr/Hrms/src/components/RoleManager/index.js",
                                lineNumber: 197,
                                columnNumber: 21
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$hr$2f$Hrms$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                style: {
                                    color: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$hr$2f$Hrms$2f$src$2f$styles$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["tokens"].colors.secondary,
                                    fontSize: '14px'
                                },
                                children: "ISO 27001 A.5.15 — Access Control management."
                            }, void 0, false, {
                                fileName: "[project]/Documents/hr/Hrms/src/components/RoleManager/index.js",
                                lineNumber: 198,
                                columnNumber: 21
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Documents/hr/Hrms/src/components/RoleManager/index.js",
                        lineNumber: 196,
                        columnNumber: 17
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$hr$2f$Hrms$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            display: 'flex',
                            gap: '12px'
                        },
                        children: [
                            roles.length === 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$hr$2f$Hrms$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: seedRoles,
                                disabled: seeding,
                                style: {
                                    ...__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$hr$2f$Hrms$2f$src$2f$styles$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["styles"].button.outline,
                                    padding: '10px 18px',
                                    fontSize: '13px',
                                    fontWeight: '700'
                                },
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$hr$2f$Hrms$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "material-symbols-outlined",
                                        style: {
                                            fontSize: '18px'
                                        },
                                        children: "database"
                                    }, void 0, false, {
                                        fileName: "[project]/Documents/hr/Hrms/src/components/RoleManager/index.js",
                                        lineNumber: 204,
                                        columnNumber: 29
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    seeding ? 'Seeding...' : 'Seed Default Roles'
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Documents/hr/Hrms/src/components/RoleManager/index.js",
                                lineNumber: 202,
                                columnNumber: 25
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$hr$2f$Hrms$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: ()=>setAssignModal(true),
                                style: {
                                    ...__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$hr$2f$Hrms$2f$src$2f$styles$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["styles"].button.outline,
                                    padding: '10px 18px',
                                    fontSize: '13px',
                                    fontWeight: '700'
                                },
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$hr$2f$Hrms$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "material-symbols-outlined",
                                        style: {
                                            fontSize: '18px'
                                        },
                                        children: "person_add"
                                    }, void 0, false, {
                                        fileName: "[project]/Documents/hr/Hrms/src/components/RoleManager/index.js",
                                        lineNumber: 210,
                                        columnNumber: 25
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    "Assign Role"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Documents/hr/Hrms/src/components/RoleManager/index.js",
                                lineNumber: 208,
                                columnNumber: 21
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$hr$2f$Hrms$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: openCreate,
                                style: {
                                    ...__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$hr$2f$Hrms$2f$src$2f$styles$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["styles"].button.primary,
                                    padding: '10px 18px',
                                    fontSize: '13px',
                                    fontWeight: '700'
                                },
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$hr$2f$Hrms$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "material-symbols-outlined",
                                        style: {
                                            fontSize: '18px'
                                        },
                                        children: "add"
                                    }, void 0, false, {
                                        fileName: "[project]/Documents/hr/Hrms/src/components/RoleManager/index.js",
                                        lineNumber: 215,
                                        columnNumber: 25
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    "Create Role"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Documents/hr/Hrms/src/components/RoleManager/index.js",
                                lineNumber: 213,
                                columnNumber: 21
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Documents/hr/Hrms/src/components/RoleManager/index.js",
                        lineNumber: 200,
                        columnNumber: 17
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/Documents/hr/Hrms/src/components/RoleManager/index.js",
                lineNumber: 195,
                columnNumber: 13
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$hr$2f$Hrms$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fill, minmax(340px, 1fr))',
                    gap: '20px',
                    marginBottom: '40px'
                },
                children: [
                    roles.map((role)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$hr$2f$Hrms$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            style: {
                                ...__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$hr$2f$Hrms$2f$src$2f$styles$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["styles"].card,
                                padding: '24px'
                            },
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$hr$2f$Hrms$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    style: {
                                        display: 'flex',
                                        justifyContent: 'space-between',
                                        alignItems: 'center',
                                        marginBottom: '12px'
                                    },
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$hr$2f$Hrms$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            style: {
                                                display: 'flex',
                                                alignItems: 'center',
                                                gap: '10px'
                                            },
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$hr$2f$Hrms$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    style: {
                                                        width: '36px',
                                                        height: '36px',
                                                        borderRadius: '10px',
                                                        background: role.permissions?.includes('*') ? 'linear-gradient(135deg, #DC2626, #991B1B)' : 'linear-gradient(135deg, #0D9488, #065F46)',
                                                        display: 'flex',
                                                        alignItems: 'center',
                                                        justifyContent: 'center'
                                                    },
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$hr$2f$Hrms$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "material-symbols-outlined",
                                                        style: {
                                                            color: '#FFF',
                                                            fontSize: '18px'
                                                        },
                                                        children: role.permissions?.includes('*') ? 'admin_panel_settings' : 'shield'
                                                    }, void 0, false, {
                                                        fileName: "[project]/Documents/hr/Hrms/src/components/RoleManager/index.js",
                                                        lineNumber: 228,
                                                        columnNumber: 37
                                                    }, ("TURBOPACK compile-time value", void 0))
                                                }, void 0, false, {
                                                    fileName: "[project]/Documents/hr/Hrms/src/components/RoleManager/index.js",
                                                    lineNumber: 227,
                                                    columnNumber: 33
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$hr$2f$Hrms$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$hr$2f$Hrms$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            style: {
                                                                fontSize: '15px',
                                                                fontWeight: '800',
                                                                color: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$hr$2f$Hrms$2f$src$2f$styles$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["tokens"].colors.primary
                                                            },
                                                            children: role.name
                                                        }, void 0, false, {
                                                            fileName: "[project]/Documents/hr/Hrms/src/components/RoleManager/index.js",
                                                            lineNumber: 233,
                                                            columnNumber: 37
                                                        }, ("TURBOPACK compile-time value", void 0)),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$hr$2f$Hrms$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            style: {
                                                                fontSize: '12px',
                                                                color: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$hr$2f$Hrms$2f$src$2f$styles$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["tokens"].colors.secondary
                                                            },
                                                            children: role.id
                                                        }, void 0, false, {
                                                            fileName: "[project]/Documents/hr/Hrms/src/components/RoleManager/index.js",
                                                            lineNumber: 234,
                                                            columnNumber: 37
                                                        }, ("TURBOPACK compile-time value", void 0))
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/Documents/hr/Hrms/src/components/RoleManager/index.js",
                                                    lineNumber: 232,
                                                    columnNumber: 33
                                                }, ("TURBOPACK compile-time value", void 0))
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/Documents/hr/Hrms/src/components/RoleManager/index.js",
                                            lineNumber: 226,
                                            columnNumber: 29
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$hr$2f$Hrms$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            style: {
                                                display: 'flex',
                                                gap: '4px'
                                            },
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$hr$2f$Hrms$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                    onClick: ()=>openEdit(role),
                                                    style: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$hr$2f$Hrms$2f$src$2f$styles$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["styles"].button.ghost,
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$hr$2f$Hrms$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "material-symbols-outlined",
                                                        style: {
                                                            fontSize: '18px'
                                                        },
                                                        children: "edit"
                                                    }, void 0, false, {
                                                        fileName: "[project]/Documents/hr/Hrms/src/components/RoleManager/index.js",
                                                        lineNumber: 239,
                                                        columnNumber: 37
                                                    }, ("TURBOPACK compile-time value", void 0))
                                                }, void 0, false, {
                                                    fileName: "[project]/Documents/hr/Hrms/src/components/RoleManager/index.js",
                                                    lineNumber: 238,
                                                    columnNumber: 33
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$hr$2f$Hrms$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                    onClick: ()=>handleDeleteRole(role.id),
                                                    style: {
                                                        ...__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$hr$2f$Hrms$2f$src$2f$styles$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["styles"].button.ghost,
                                                        color: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$hr$2f$Hrms$2f$src$2f$styles$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["tokens"].colors.error
                                                    },
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$hr$2f$Hrms$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "material-symbols-outlined",
                                                        style: {
                                                            fontSize: '18px'
                                                        },
                                                        children: "delete"
                                                    }, void 0, false, {
                                                        fileName: "[project]/Documents/hr/Hrms/src/components/RoleManager/index.js",
                                                        lineNumber: 242,
                                                        columnNumber: 37
                                                    }, ("TURBOPACK compile-time value", void 0))
                                                }, void 0, false, {
                                                    fileName: "[project]/Documents/hr/Hrms/src/components/RoleManager/index.js",
                                                    lineNumber: 241,
                                                    columnNumber: 33
                                                }, ("TURBOPACK compile-time value", void 0))
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/Documents/hr/Hrms/src/components/RoleManager/index.js",
                                            lineNumber: 237,
                                            columnNumber: 29
                                        }, ("TURBOPACK compile-time value", void 0))
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Documents/hr/Hrms/src/components/RoleManager/index.js",
                                    lineNumber: 225,
                                    columnNumber: 25
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$hr$2f$Hrms$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    style: {
                                        fontSize: '13px',
                                        color: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$hr$2f$Hrms$2f$src$2f$styles$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["tokens"].colors.secondary,
                                        marginBottom: '12px'
                                    },
                                    children: role.description || 'No description'
                                }, void 0, false, {
                                    fileName: "[project]/Documents/hr/Hrms/src/components/RoleManager/index.js",
                                    lineNumber: 246,
                                    columnNumber: 25
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$hr$2f$Hrms$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    style: {
                                        display: 'flex',
                                        flexWrap: 'wrap',
                                        gap: '6px'
                                    },
                                    children: [
                                        (role.permissions || []).slice(0, 6).map((p)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$hr$2f$Hrms$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                style: {
                                                    padding: '3px 10px',
                                                    borderRadius: '999px',
                                                    fontSize: '11px',
                                                    fontWeight: '600',
                                                    background: 'rgba(13,148,136,0.1)',
                                                    color: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$hr$2f$Hrms$2f$src$2f$styles$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["tokens"].colors.accent,
                                                    border: '1px solid rgba(13,148,136,0.2)'
                                                },
                                                children: p
                                            }, p, false, {
                                                fileName: "[project]/Documents/hr/Hrms/src/components/RoleManager/index.js",
                                                lineNumber: 249,
                                                columnNumber: 33
                                            }, ("TURBOPACK compile-time value", void 0))),
                                        (role.permissions || []).length > 6 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$hr$2f$Hrms$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            style: {
                                                padding: '3px 10px',
                                                borderRadius: '999px',
                                                fontSize: '11px',
                                                fontWeight: '600',
                                                color: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$hr$2f$Hrms$2f$src$2f$styles$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["tokens"].colors.secondary
                                            },
                                            children: [
                                                "+",
                                                role.permissions.length - 6,
                                                " more"
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/Documents/hr/Hrms/src/components/RoleManager/index.js",
                                            lineNumber: 252,
                                            columnNumber: 33
                                        }, ("TURBOPACK compile-time value", void 0))
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Documents/hr/Hrms/src/components/RoleManager/index.js",
                                    lineNumber: 247,
                                    columnNumber: 25
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$hr$2f$Hrms$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    style: {
                                        marginTop: '12px',
                                        fontSize: '12px',
                                        color: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$hr$2f$Hrms$2f$src$2f$styles$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["tokens"].colors.secondary,
                                        display: 'flex',
                                        alignItems: 'center',
                                        gap: '4px'
                                    },
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$hr$2f$Hrms$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "material-symbols-outlined",
                                            style: {
                                                fontSize: '14px'
                                            },
                                            children: "group"
                                        }, void 0, false, {
                                            fileName: "[project]/Documents/hr/Hrms/src/components/RoleManager/index.js",
                                            lineNumber: 257,
                                            columnNumber: 29
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        userRoles.filter((ur)=>ur.roleId === role.id).length,
                                        " user(s) assigned"
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Documents/hr/Hrms/src/components/RoleManager/index.js",
                                    lineNumber: 256,
                                    columnNumber: 25
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, role.id, true, {
                            fileName: "[project]/Documents/hr/Hrms/src/components/RoleManager/index.js",
                            lineNumber: 224,
                            columnNumber: 21
                        }, ("TURBOPACK compile-time value", void 0))),
                    roles.length === 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$hr$2f$Hrms$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            ...__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$hr$2f$Hrms$2f$src$2f$styles$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["styles"].card,
                            padding: '60px',
                            textAlign: 'center',
                            gridColumn: '1 / -1'
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$hr$2f$Hrms$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "material-symbols-outlined",
                                style: {
                                    fontSize: '48px',
                                    color: '#CBD5E1',
                                    display: 'block',
                                    marginBottom: '12px'
                                },
                                children: "shield"
                            }, void 0, false, {
                                fileName: "[project]/Documents/hr/Hrms/src/components/RoleManager/index.js",
                                lineNumber: 264,
                                columnNumber: 25
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$hr$2f$Hrms$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                style: {
                                    fontSize: '15px',
                                    fontWeight: '700',
                                    color: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$hr$2f$Hrms$2f$src$2f$styles$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["tokens"].colors.primary,
                                    marginBottom: '8px'
                                },
                                children: "No roles defined yet"
                            }, void 0, false, {
                                fileName: "[project]/Documents/hr/Hrms/src/components/RoleManager/index.js",
                                lineNumber: 265,
                                columnNumber: 25
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$hr$2f$Hrms$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                style: {
                                    fontSize: '13px',
                                    color: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$hr$2f$Hrms$2f$src$2f$styles$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["tokens"].colors.secondary
                                },
                                children: 'Click "Seed Default Roles" to create the 5 standard roles, or create a custom one.'
                            }, void 0, false, {
                                fileName: "[project]/Documents/hr/Hrms/src/components/RoleManager/index.js",
                                lineNumber: 266,
                                columnNumber: 25
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Documents/hr/Hrms/src/components/RoleManager/index.js",
                        lineNumber: 263,
                        columnNumber: 21
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/Documents/hr/Hrms/src/components/RoleManager/index.js",
                lineNumber: 222,
                columnNumber: 13
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$hr$2f$Hrms$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    marginBottom: '32px'
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$hr$2f$Hrms$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                        style: {
                            fontSize: '18px',
                            fontWeight: '800',
                            color: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$hr$2f$Hrms$2f$src$2f$styles$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["tokens"].colors.primary,
                            marginBottom: '16px'
                        },
                        children: "User Assignments"
                    }, void 0, false, {
                        fileName: "[project]/Documents/hr/Hrms/src/components/RoleManager/index.js",
                        lineNumber: 273,
                        columnNumber: 17
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$hr$2f$Hrms$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$hr$2f$Hrms$2f$src$2f$styles$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["styles"].card,
                        children: userRoles.length === 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$hr$2f$Hrms$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            style: {
                                textAlign: 'center',
                                padding: '40px',
                                color: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$hr$2f$Hrms$2f$src$2f$styles$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["tokens"].colors.secondary
                            },
                            children: 'No role assignments yet. Use "Assign Role" to map users to roles.'
                        }, void 0, false, {
                            fileName: "[project]/Documents/hr/Hrms/src/components/RoleManager/index.js",
                            lineNumber: 276,
                            columnNumber: 25
                        }, ("TURBOPACK compile-time value", void 0)) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$hr$2f$Hrms$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("table", {
                            style: {
                                width: '100%',
                                borderCollapse: 'collapse'
                            },
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$hr$2f$Hrms$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("thead", {
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$hr$2f$Hrms$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$hr$2f$Hrms$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                style: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$hr$2f$Hrms$2f$src$2f$styles$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["styles"].th,
                                                children: "User"
                                            }, void 0, false, {
                                                fileName: "[project]/Documents/hr/Hrms/src/components/RoleManager/index.js",
                                                lineNumber: 283,
                                                columnNumber: 37
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$hr$2f$Hrms$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                style: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$hr$2f$Hrms$2f$src$2f$styles$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["styles"].th,
                                                children: "Role"
                                            }, void 0, false, {
                                                fileName: "[project]/Documents/hr/Hrms/src/components/RoleManager/index.js",
                                                lineNumber: 284,
                                                columnNumber: 37
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$hr$2f$Hrms$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                style: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$hr$2f$Hrms$2f$src$2f$styles$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["styles"].th,
                                                children: "Assigned"
                                            }, void 0, false, {
                                                fileName: "[project]/Documents/hr/Hrms/src/components/RoleManager/index.js",
                                                lineNumber: 285,
                                                columnNumber: 37
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$hr$2f$Hrms$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                style: {
                                                    ...__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$hr$2f$Hrms$2f$src$2f$styles$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["styles"].th,
                                                    textAlign: 'right'
                                                },
                                                children: "Actions"
                                            }, void 0, false, {
                                                fileName: "[project]/Documents/hr/Hrms/src/components/RoleManager/index.js",
                                                lineNumber: 286,
                                                columnNumber: 37
                                            }, ("TURBOPACK compile-time value", void 0))
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Documents/hr/Hrms/src/components/RoleManager/index.js",
                                        lineNumber: 282,
                                        columnNumber: 33
                                    }, ("TURBOPACK compile-time value", void 0))
                                }, void 0, false, {
                                    fileName: "[project]/Documents/hr/Hrms/src/components/RoleManager/index.js",
                                    lineNumber: 281,
                                    columnNumber: 29
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$hr$2f$Hrms$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tbody", {
                                    children: userRoles.map((ur)=>{
                                        const emp = employees.find((e)=>e.id === ur.userId);
                                        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$hr$2f$Hrms$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$hr$2f$Hrms$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                    style: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$hr$2f$Hrms$2f$src$2f$styles$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["styles"].td,
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$hr$2f$Hrms$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            style: {
                                                                fontWeight: '700'
                                                            },
                                                            children: emp?.name || ur.userId
                                                        }, void 0, false, {
                                                            fileName: "[project]/Documents/hr/Hrms/src/components/RoleManager/index.js",
                                                            lineNumber: 295,
                                                            columnNumber: 49
                                                        }, ("TURBOPACK compile-time value", void 0)),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$hr$2f$Hrms$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            style: {
                                                                fontSize: '12px',
                                                                color: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$hr$2f$Hrms$2f$src$2f$styles$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["tokens"].colors.secondary
                                                            },
                                                            children: emp?.email || ''
                                                        }, void 0, false, {
                                                            fileName: "[project]/Documents/hr/Hrms/src/components/RoleManager/index.js",
                                                            lineNumber: 296,
                                                            columnNumber: 49
                                                        }, ("TURBOPACK compile-time value", void 0))
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/Documents/hr/Hrms/src/components/RoleManager/index.js",
                                                    lineNumber: 294,
                                                    columnNumber: 45
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$hr$2f$Hrms$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                    style: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$hr$2f$Hrms$2f$src$2f$styles$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["styles"].td,
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$hr$2f$Hrms$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        style: {
                                                            ...__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$hr$2f$Hrms$2f$src$2f$styles$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["styles"].badge('primary'),
                                                            fontSize: '12px'
                                                        },
                                                        children: getRoleName(ur.roleId)
                                                    }, void 0, false, {
                                                        fileName: "[project]/Documents/hr/Hrms/src/components/RoleManager/index.js",
                                                        lineNumber: 299,
                                                        columnNumber: 49
                                                    }, ("TURBOPACK compile-time value", void 0))
                                                }, void 0, false, {
                                                    fileName: "[project]/Documents/hr/Hrms/src/components/RoleManager/index.js",
                                                    lineNumber: 298,
                                                    columnNumber: 45
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$hr$2f$Hrms$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                    style: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$hr$2f$Hrms$2f$src$2f$styles$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["styles"].td,
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$hr$2f$Hrms$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        style: {
                                                            fontSize: '12px',
                                                            color: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$hr$2f$Hrms$2f$src$2f$styles$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["tokens"].colors.secondary
                                                        },
                                                        children: ur.assignedAt ? new Date(ur.assignedAt).toLocaleDateString('en-IN') : '—'
                                                    }, void 0, false, {
                                                        fileName: "[project]/Documents/hr/Hrms/src/components/RoleManager/index.js",
                                                        lineNumber: 302,
                                                        columnNumber: 49
                                                    }, ("TURBOPACK compile-time value", void 0))
                                                }, void 0, false, {
                                                    fileName: "[project]/Documents/hr/Hrms/src/components/RoleManager/index.js",
                                                    lineNumber: 301,
                                                    columnNumber: 45
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$hr$2f$Hrms$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                    style: {
                                                        ...__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$hr$2f$Hrms$2f$src$2f$styles$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["styles"].td,
                                                        textAlign: 'right'
                                                    },
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$hr$2f$Hrms$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                        onClick: ()=>handleRemoveAssignment(ur.userId),
                                                        style: {
                                                            ...__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$hr$2f$Hrms$2f$src$2f$styles$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["styles"].button.ghost,
                                                            color: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$hr$2f$Hrms$2f$src$2f$styles$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["tokens"].colors.error
                                                        },
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$hr$2f$Hrms$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "material-symbols-outlined",
                                                            style: {
                                                                fontSize: '18px'
                                                            },
                                                            children: "person_remove"
                                                        }, void 0, false, {
                                                            fileName: "[project]/Documents/hr/Hrms/src/components/RoleManager/index.js",
                                                            lineNumber: 308,
                                                            columnNumber: 53
                                                        }, ("TURBOPACK compile-time value", void 0))
                                                    }, void 0, false, {
                                                        fileName: "[project]/Documents/hr/Hrms/src/components/RoleManager/index.js",
                                                        lineNumber: 307,
                                                        columnNumber: 49
                                                    }, ("TURBOPACK compile-time value", void 0))
                                                }, void 0, false, {
                                                    fileName: "[project]/Documents/hr/Hrms/src/components/RoleManager/index.js",
                                                    lineNumber: 306,
                                                    columnNumber: 45
                                                }, ("TURBOPACK compile-time value", void 0))
                                            ]
                                        }, ur.id, true, {
                                            fileName: "[project]/Documents/hr/Hrms/src/components/RoleManager/index.js",
                                            lineNumber: 293,
                                            columnNumber: 41
                                        }, ("TURBOPACK compile-time value", void 0));
                                    })
                                }, void 0, false, {
                                    fileName: "[project]/Documents/hr/Hrms/src/components/RoleManager/index.js",
                                    lineNumber: 289,
                                    columnNumber: 29
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Documents/hr/Hrms/src/components/RoleManager/index.js",
                            lineNumber: 280,
                            columnNumber: 25
                        }, ("TURBOPACK compile-time value", void 0))
                    }, void 0, false, {
                        fileName: "[project]/Documents/hr/Hrms/src/components/RoleManager/index.js",
                        lineNumber: 274,
                        columnNumber: 17
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/Documents/hr/Hrms/src/components/RoleManager/index.js",
                lineNumber: 272,
                columnNumber: 13
            }, ("TURBOPACK compile-time value", void 0)),
            showModal && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$hr$2f$Hrms$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$hr$2f$Hrms$2f$src$2f$styles$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["styles"].modal,
                onClick: ()=>setShowModal(false),
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$hr$2f$Hrms$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    style: {
                        ...__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$hr$2f$Hrms$2f$src$2f$styles$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["styles"].card,
                        width: '100%',
                        maxWidth: '600px',
                        maxHeight: '80vh',
                        overflow: 'auto',
                        padding: '32px'
                    },
                    onClick: (e)=>e.stopPropagation(),
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$hr$2f$Hrms$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                            style: {
                                fontSize: '20px',
                                fontWeight: '800',
                                color: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$hr$2f$Hrms$2f$src$2f$styles$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["tokens"].colors.primary,
                                marginBottom: '24px'
                            },
                            children: editingRole ? 'Edit Role' : 'Create Role'
                        }, void 0, false, {
                            fileName: "[project]/Documents/hr/Hrms/src/components/RoleManager/index.js",
                            lineNumber: 325,
                            columnNumber: 25
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$hr$2f$Hrms$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            style: {
                                display: 'grid',
                                gap: '16px',
                                marginBottom: '24px'
                            },
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$hr$2f$Hrms$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$hr$2f$Hrms$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                            style: {
                                                fontSize: '11px',
                                                fontWeight: '800',
                                                color: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$hr$2f$Hrms$2f$src$2f$styles$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["tokens"].colors.secondary,
                                                textTransform: 'uppercase',
                                                letterSpacing: '0.05em',
                                                marginBottom: '6px',
                                                display: 'block'
                                            },
                                            children: "Role Name"
                                        }, void 0, false, {
                                            fileName: "[project]/Documents/hr/Hrms/src/components/RoleManager/index.js",
                                            lineNumber: 330,
                                            columnNumber: 33
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$hr$2f$Hrms$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                            style: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$hr$2f$Hrms$2f$src$2f$styles$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["styles"].input,
                                            value: form.name,
                                            onChange: (e)=>setForm({
                                                    ...form,
                                                    name: e.target.value
                                                }),
                                            placeholder: "e.g. HR Admin"
                                        }, void 0, false, {
                                            fileName: "[project]/Documents/hr/Hrms/src/components/RoleManager/index.js",
                                            lineNumber: 331,
                                            columnNumber: 33
                                        }, ("TURBOPACK compile-time value", void 0))
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Documents/hr/Hrms/src/components/RoleManager/index.js",
                                    lineNumber: 329,
                                    columnNumber: 29
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$hr$2f$Hrms$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$hr$2f$Hrms$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                            style: {
                                                fontSize: '11px',
                                                fontWeight: '800',
                                                color: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$hr$2f$Hrms$2f$src$2f$styles$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["tokens"].colors.secondary,
                                                textTransform: 'uppercase',
                                                letterSpacing: '0.05em',
                                                marginBottom: '6px',
                                                display: 'block'
                                            },
                                            children: "Description"
                                        }, void 0, false, {
                                            fileName: "[project]/Documents/hr/Hrms/src/components/RoleManager/index.js",
                                            lineNumber: 334,
                                            columnNumber: 33
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$hr$2f$Hrms$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                            style: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$hr$2f$Hrms$2f$src$2f$styles$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["styles"].input,
                                            value: form.description,
                                            onChange: (e)=>setForm({
                                                    ...form,
                                                    description: e.target.value
                                                }),
                                            placeholder: "Brief description"
                                        }, void 0, false, {
                                            fileName: "[project]/Documents/hr/Hrms/src/components/RoleManager/index.js",
                                            lineNumber: 335,
                                            columnNumber: 33
                                        }, ("TURBOPACK compile-time value", void 0))
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Documents/hr/Hrms/src/components/RoleManager/index.js",
                                    lineNumber: 333,
                                    columnNumber: 29
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Documents/hr/Hrms/src/components/RoleManager/index.js",
                            lineNumber: 328,
                            columnNumber: 25
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$hr$2f$Hrms$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            style: {
                                marginBottom: '24px'
                            },
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$hr$2f$Hrms$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                    style: {
                                        fontSize: '11px',
                                        fontWeight: '800',
                                        color: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$hr$2f$Hrms$2f$src$2f$styles$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["tokens"].colors.secondary,
                                        textTransform: 'uppercase',
                                        letterSpacing: '0.05em',
                                        marginBottom: '12px',
                                        display: 'block'
                                    },
                                    children: "Permissions"
                                }, void 0, false, {
                                    fileName: "[project]/Documents/hr/Hrms/src/components/RoleManager/index.js",
                                    lineNumber: 339,
                                    columnNumber: 29
                                }, ("TURBOPACK compile-time value", void 0)),
                                Object.entries(groupedPermissions).map(([group, perms])=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$hr$2f$Hrms$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        style: {
                                            marginBottom: '16px'
                                        },
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$hr$2f$Hrms$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                style: {
                                                    fontSize: '12px',
                                                    fontWeight: '700',
                                                    color: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$hr$2f$Hrms$2f$src$2f$styles$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["tokens"].colors.primary,
                                                    marginBottom: '8px'
                                                },
                                                children: group
                                            }, void 0, false, {
                                                fileName: "[project]/Documents/hr/Hrms/src/components/RoleManager/index.js",
                                                lineNumber: 342,
                                                columnNumber: 37
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$hr$2f$Hrms$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                style: {
                                                    display: 'flex',
                                                    flexWrap: 'wrap',
                                                    gap: '8px'
                                                },
                                                children: perms.map((p)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$hr$2f$Hrms$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                        style: {
                                                            display: 'flex',
                                                            alignItems: 'center',
                                                            gap: '6px',
                                                            padding: '6px 12px',
                                                            borderRadius: '8px',
                                                            fontSize: '12px',
                                                            fontWeight: '600',
                                                            cursor: 'pointer',
                                                            background: form.permissions.includes(p.code) ? 'rgba(13,148,136,0.1)' : 'transparent',
                                                            border: `1px solid ${form.permissions.includes(p.code) ? 'rgba(13,148,136,0.3)' : __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$hr$2f$Hrms$2f$src$2f$styles$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["tokens"].colors.border}`,
                                                            color: form.permissions.includes(p.code) ? __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$hr$2f$Hrms$2f$src$2f$styles$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["tokens"].colors.accent : __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$hr$2f$Hrms$2f$src$2f$styles$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["tokens"].colors.secondary,
                                                            transition: 'all 0.15s ease'
                                                        },
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$hr$2f$Hrms$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                type: "checkbox",
                                                                checked: form.permissions.includes(p.code),
                                                                onChange: ()=>togglePerm(p.code),
                                                                style: {
                                                                    display: 'none'
                                                                }
                                                            }, void 0, false, {
                                                                fileName: "[project]/Documents/hr/Hrms/src/components/RoleManager/index.js",
                                                                lineNumber: 353,
                                                                columnNumber: 49
                                                            }, ("TURBOPACK compile-time value", void 0)),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$hr$2f$Hrms$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: "material-symbols-outlined",
                                                                style: {
                                                                    fontSize: '14px'
                                                                },
                                                                children: form.permissions.includes(p.code) ? 'check_box' : 'check_box_outline_blank'
                                                            }, void 0, false, {
                                                                fileName: "[project]/Documents/hr/Hrms/src/components/RoleManager/index.js",
                                                                lineNumber: 354,
                                                                columnNumber: 49
                                                            }, ("TURBOPACK compile-time value", void 0)),
                                                            p.label
                                                        ]
                                                    }, p.code, true, {
                                                        fileName: "[project]/Documents/hr/Hrms/src/components/RoleManager/index.js",
                                                        lineNumber: 345,
                                                        columnNumber: 45
                                                    }, ("TURBOPACK compile-time value", void 0)))
                                            }, void 0, false, {
                                                fileName: "[project]/Documents/hr/Hrms/src/components/RoleManager/index.js",
                                                lineNumber: 343,
                                                columnNumber: 37
                                            }, ("TURBOPACK compile-time value", void 0))
                                        ]
                                    }, group, true, {
                                        fileName: "[project]/Documents/hr/Hrms/src/components/RoleManager/index.js",
                                        lineNumber: 341,
                                        columnNumber: 33
                                    }, ("TURBOPACK compile-time value", void 0)))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Documents/hr/Hrms/src/components/RoleManager/index.js",
                            lineNumber: 338,
                            columnNumber: 25
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$hr$2f$Hrms$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            style: {
                                display: 'flex',
                                gap: '12px',
                                justifyContent: 'flex-end'
                            },
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$hr$2f$Hrms$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    onClick: ()=>setShowModal(false),
                                    style: {
                                        ...__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$hr$2f$Hrms$2f$src$2f$styles$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["styles"].button.outline,
                                        padding: '10px 20px'
                                    },
                                    children: "Cancel"
                                }, void 0, false, {
                                    fileName: "[project]/Documents/hr/Hrms/src/components/RoleManager/index.js",
                                    lineNumber: 365,
                                    columnNumber: 29
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$hr$2f$Hrms$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    onClick: handleSaveRole,
                                    disabled: !form.name,
                                    style: {
                                        ...__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$hr$2f$Hrms$2f$src$2f$styles$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["styles"].button.primary,
                                        padding: '10px 20px'
                                    },
                                    children: editingRole ? 'Update Role' : 'Create Role'
                                }, void 0, false, {
                                    fileName: "[project]/Documents/hr/Hrms/src/components/RoleManager/index.js",
                                    lineNumber: 366,
                                    columnNumber: 29
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Documents/hr/Hrms/src/components/RoleManager/index.js",
                            lineNumber: 364,
                            columnNumber: 25
                        }, ("TURBOPACK compile-time value", void 0))
                    ]
                }, void 0, true, {
                    fileName: "[project]/Documents/hr/Hrms/src/components/RoleManager/index.js",
                    lineNumber: 323,
                    columnNumber: 21
                }, ("TURBOPACK compile-time value", void 0))
            }, void 0, false, {
                fileName: "[project]/Documents/hr/Hrms/src/components/RoleManager/index.js",
                lineNumber: 322,
                columnNumber: 17
            }, ("TURBOPACK compile-time value", void 0)),
            assignModal && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$hr$2f$Hrms$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$hr$2f$Hrms$2f$src$2f$styles$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["styles"].modal,
                onClick: ()=>setAssignModal(false),
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$hr$2f$Hrms$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    style: {
                        ...__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$hr$2f$Hrms$2f$src$2f$styles$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["styles"].card,
                        width: '100%',
                        maxWidth: '440px',
                        padding: '32px'
                    },
                    onClick: (e)=>e.stopPropagation(),
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$hr$2f$Hrms$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                            style: {
                                fontSize: '20px',
                                fontWeight: '800',
                                color: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$hr$2f$Hrms$2f$src$2f$styles$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["tokens"].colors.primary,
                                marginBottom: '24px'
                            },
                            children: "Assign Role to User"
                        }, void 0, false, {
                            fileName: "[project]/Documents/hr/Hrms/src/components/RoleManager/index.js",
                            lineNumber: 379,
                            columnNumber: 25
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$hr$2f$Hrms$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            style: {
                                display: 'grid',
                                gap: '16px',
                                marginBottom: '24px'
                            },
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$hr$2f$Hrms$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$hr$2f$Hrms$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                            style: {
                                                fontSize: '11px',
                                                fontWeight: '800',
                                                color: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$hr$2f$Hrms$2f$src$2f$styles$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["tokens"].colors.secondary,
                                                textTransform: 'uppercase',
                                                letterSpacing: '0.05em',
                                                marginBottom: '6px',
                                                display: 'block'
                                            },
                                            children: "Employee"
                                        }, void 0, false, {
                                            fileName: "[project]/Documents/hr/Hrms/src/components/RoleManager/index.js",
                                            lineNumber: 382,
                                            columnNumber: 33
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$hr$2f$Hrms$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                            style: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$hr$2f$Hrms$2f$src$2f$styles$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["styles"].input,
                                            value: assignData.userId,
                                            onChange: (e)=>setAssignData({
                                                    ...assignData,
                                                    userId: e.target.value
                                                }),
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$hr$2f$Hrms$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                    value: "",
                                                    children: "Select employee..."
                                                }, void 0, false, {
                                                    fileName: "[project]/Documents/hr/Hrms/src/components/RoleManager/index.js",
                                                    lineNumber: 384,
                                                    columnNumber: 37
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                employees.map((emp)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$hr$2f$Hrms$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                        value: emp.id,
                                                        children: [
                                                            emp.name || emp.email,
                                                            " (",
                                                            emp.email,
                                                            ")"
                                                        ]
                                                    }, emp.id, true, {
                                                        fileName: "[project]/Documents/hr/Hrms/src/components/RoleManager/index.js",
                                                        lineNumber: 386,
                                                        columnNumber: 41
                                                    }, ("TURBOPACK compile-time value", void 0)))
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/Documents/hr/Hrms/src/components/RoleManager/index.js",
                                            lineNumber: 383,
                                            columnNumber: 33
                                        }, ("TURBOPACK compile-time value", void 0))
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Documents/hr/Hrms/src/components/RoleManager/index.js",
                                    lineNumber: 381,
                                    columnNumber: 29
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$hr$2f$Hrms$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$hr$2f$Hrms$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                            style: {
                                                fontSize: '11px',
                                                fontWeight: '800',
                                                color: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$hr$2f$Hrms$2f$src$2f$styles$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["tokens"].colors.secondary,
                                                textTransform: 'uppercase',
                                                letterSpacing: '0.05em',
                                                marginBottom: '6px',
                                                display: 'block'
                                            },
                                            children: "Role"
                                        }, void 0, false, {
                                            fileName: "[project]/Documents/hr/Hrms/src/components/RoleManager/index.js",
                                            lineNumber: 391,
                                            columnNumber: 33
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$hr$2f$Hrms$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                            style: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$hr$2f$Hrms$2f$src$2f$styles$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["styles"].input,
                                            value: assignData.roleId,
                                            onChange: (e)=>setAssignData({
                                                    ...assignData,
                                                    roleId: e.target.value
                                                }),
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$hr$2f$Hrms$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                    value: "",
                                                    children: "Select role..."
                                                }, void 0, false, {
                                                    fileName: "[project]/Documents/hr/Hrms/src/components/RoleManager/index.js",
                                                    lineNumber: 393,
                                                    columnNumber: 37
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                roles.map((r)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$hr$2f$Hrms$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                        value: r.id,
                                                        children: r.name
                                                    }, r.id, false, {
                                                        fileName: "[project]/Documents/hr/Hrms/src/components/RoleManager/index.js",
                                                        lineNumber: 395,
                                                        columnNumber: 41
                                                    }, ("TURBOPACK compile-time value", void 0))),
                                                roles.length === 0 && Object.entries(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$hr$2f$Hrms$2f$src$2f$context$2f$RBACContext$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DEFAULT_ROLES"]).map(([id, r])=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$hr$2f$Hrms$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                        value: id,
                                                        children: r.name
                                                    }, id, false, {
                                                        fileName: "[project]/Documents/hr/Hrms/src/components/RoleManager/index.js",
                                                        lineNumber: 398,
                                                        columnNumber: 41
                                                    }, ("TURBOPACK compile-time value", void 0)))
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/Documents/hr/Hrms/src/components/RoleManager/index.js",
                                            lineNumber: 392,
                                            columnNumber: 33
                                        }, ("TURBOPACK compile-time value", void 0))
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Documents/hr/Hrms/src/components/RoleManager/index.js",
                                    lineNumber: 390,
                                    columnNumber: 29
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Documents/hr/Hrms/src/components/RoleManager/index.js",
                            lineNumber: 380,
                            columnNumber: 25
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$hr$2f$Hrms$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            style: {
                                display: 'flex',
                                gap: '12px',
                                justifyContent: 'flex-end'
                            },
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$hr$2f$Hrms$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    onClick: ()=>setAssignModal(false),
                                    style: {
                                        ...__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$hr$2f$Hrms$2f$src$2f$styles$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["styles"].button.outline,
                                        padding: '10px 20px'
                                    },
                                    children: "Cancel"
                                }, void 0, false, {
                                    fileName: "[project]/Documents/hr/Hrms/src/components/RoleManager/index.js",
                                    lineNumber: 404,
                                    columnNumber: 29
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$hr$2f$Hrms$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    onClick: handleAssignRole,
                                    disabled: !assignData.userId || !assignData.roleId,
                                    style: {
                                        ...__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$hr$2f$Hrms$2f$src$2f$styles$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["styles"].button.primary,
                                        padding: '10px 20px'
                                    },
                                    children: "Assign Role"
                                }, void 0, false, {
                                    fileName: "[project]/Documents/hr/Hrms/src/components/RoleManager/index.js",
                                    lineNumber: 405,
                                    columnNumber: 29
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Documents/hr/Hrms/src/components/RoleManager/index.js",
                            lineNumber: 403,
                            columnNumber: 25
                        }, ("TURBOPACK compile-time value", void 0))
                    ]
                }, void 0, true, {
                    fileName: "[project]/Documents/hr/Hrms/src/components/RoleManager/index.js",
                    lineNumber: 377,
                    columnNumber: 21
                }, ("TURBOPACK compile-time value", void 0))
            }, void 0, false, {
                fileName: "[project]/Documents/hr/Hrms/src/components/RoleManager/index.js",
                lineNumber: 376,
                columnNumber: 17
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/Documents/hr/Hrms/src/components/RoleManager/index.js",
        lineNumber: 193,
        columnNumber: 9
    }, ("TURBOPACK compile-time value", void 0));
};
_s(RoleManager, "Bp8W88JvJqeR4jQ2tsKK9mLPSVo=");
_c = RoleManager;
const __TURBOPACK__default__export__ = RoleManager;
var _c;
__turbopack_context__.k.register(_c, "RoleManager");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Documents/hr/Hrms/src/components/DeptDesignation/index.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$hr$2f$Hrms$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/hr/Hrms/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$hr$2f$Hrms$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/hr/Hrms/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$hr$2f$Hrms$2f$src$2f$firebase$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/hr/Hrms/src/firebase.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$hr$2f$Hrms$2f$node_modules$2f$firebase$2f$firestore$2f$dist$2f$esm$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/Documents/hr/Hrms/node_modules/firebase/firestore/dist/esm/index.esm.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$hr$2f$Hrms$2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/hr/Hrms/node_modules/@firebase/firestore/dist/index.esm.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$hr$2f$Hrms$2f$src$2f$styles$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/hr/Hrms/src/styles.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$hr$2f$Hrms$2f$src$2f$utils$2f$auditLog$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/hr/Hrms/src/utils/auditLog.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
;
;
/**
 * Department & Designation Manager (Admin only)
 * Replaces hardcoded department/designation dropdowns with Firestore-backed data.
 */ const DeptDesignation = ({ adminEmail = 'admin' })=>{
    _s();
    const [departments, setDepartments] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$hr$2f$Hrms$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [designations, setDesignations] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$hr$2f$Hrms$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [tab, setTab] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$hr$2f$Hrms$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('departments');
    const [showModal, setShowModal] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$hr$2f$Hrms$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [form, setForm] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$hr$2f$Hrms$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({
        name: '',
        level: ''
    });
    const [editing, setEditing] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$hr$2f$Hrms$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$hr$2f$Hrms$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "DeptDesignation.useEffect": ()=>{
            const u1 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$hr$2f$Hrms$2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["onSnapshot"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$hr$2f$Hrms$2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["collection"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$hr$2f$Hrms$2f$src$2f$firebase$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["db"], 'departments'), {
                "DeptDesignation.useEffect.u1": (s)=>setDepartments(s.docs.map({
                        "DeptDesignation.useEffect.u1": (d)=>({
                                id: d.id,
                                ...d.data()
                            })
                    }["DeptDesignation.useEffect.u1"]))
            }["DeptDesignation.useEffect.u1"]);
            const u2 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$hr$2f$Hrms$2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["onSnapshot"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$hr$2f$Hrms$2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["collection"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$hr$2f$Hrms$2f$src$2f$firebase$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["db"], 'designations'), {
                "DeptDesignation.useEffect.u2": (s)=>setDesignations(s.docs.map({
                        "DeptDesignation.useEffect.u2": (d)=>({
                                id: d.id,
                                ...d.data()
                            })
                    }["DeptDesignation.useEffect.u2"]))
            }["DeptDesignation.useEffect.u2"]);
            return ({
                "DeptDesignation.useEffect": ()=>{
                    u1();
                    u2();
                }
            })["DeptDesignation.useEffect"];
        }
    }["DeptDesignation.useEffect"], []);
    const openCreate = ()=>{
        setForm({
            name: '',
            level: ''
        });
        setEditing(null);
        setShowModal(true);
    };
    const openEdit = (item)=>{
        setForm({
            name: item.name,
            level: item.level || ''
        });
        setEditing(item);
        setShowModal(true);
    };
    const handleSave = async ()=>{
        if (!form.name.trim()) return;
        const col = tab === 'departments' ? 'departments' : 'designations';
        try {
            if (editing) {
                await (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$hr$2f$Hrms$2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["setDoc"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$hr$2f$Hrms$2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["doc"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$hr$2f$Hrms$2f$src$2f$firebase$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["db"], col, editing.id), {
                    name: form.name.trim(),
                    ...tab === 'designations' && form.level ? {
                        level: parseInt(form.level)
                    } : {},
                    updatedAt: new Date().toISOString()
                }, {
                    merge: true
                });
                await (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$hr$2f$Hrms$2f$src$2f$utils$2f$auditLog$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["logAction"])(`${col.toUpperCase()}_UPDATED`, {
                    name: form.name
                }, adminEmail);
            } else {
                await (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$hr$2f$Hrms$2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["addDoc"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$hr$2f$Hrms$2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["collection"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$hr$2f$Hrms$2f$src$2f$firebase$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["db"], col), {
                    name: form.name.trim(),
                    ...tab === 'designations' && form.level ? {
                        level: parseInt(form.level)
                    } : {},
                    createdAt: new Date().toISOString()
                });
                await (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$hr$2f$Hrms$2f$src$2f$utils$2f$auditLog$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["logAction"])(`${col.toUpperCase()}_CREATED`, {
                    name: form.name
                }, adminEmail);
            }
            setShowModal(false);
        } catch (err) {
            console.error(err);
        }
    };
    const handleDelete = async (item)=>{
        const col = tab === 'departments' ? 'departments' : 'designations';
        if (!confirm(`Delete "${item.name}"? This will not remove it from existing employee records.`)) return;
        try {
            await (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$hr$2f$Hrms$2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["deleteDoc"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$hr$2f$Hrms$2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["doc"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$hr$2f$Hrms$2f$src$2f$firebase$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["db"], col, item.id));
            await (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$hr$2f$Hrms$2f$src$2f$utils$2f$auditLog$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["logAction"])(`${col.toUpperCase()}_DELETED`, {
                name: item.name
            }, adminEmail);
        } catch (err) {
            console.error(err);
        }
    };
    const items = tab === 'departments' ? departments : designations;
    /* Seed default Cyberseal departments */ const seedDefaults = async ()=>{
        const depts = [
            'Security Operations',
            'Offensive Security',
            'GRC & Compliance',
            'Engineering',
            'HR & Admin',
            'Finance',
            'Sales & Marketing',
            'Management'
        ];
        const desigs = [
            {
                name: 'CEO',
                level: 1
            },
            {
                name: 'CTO',
                level: 1
            },
            {
                name: 'Director',
                level: 2
            },
            {
                name: 'Manager',
                level: 3
            },
            {
                name: 'Team Lead',
                level: 4
            },
            {
                name: 'Senior Analyst',
                level: 5
            },
            {
                name: 'Analyst',
                level: 6
            },
            {
                name: 'Associate',
                level: 7
            },
            {
                name: 'Intern',
                level: 8
            },
            {
                name: 'OJT Trainee',
                level: 8
            }
        ];
        try {
            for (const name of depts)await (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$hr$2f$Hrms$2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["addDoc"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$hr$2f$Hrms$2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["collection"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$hr$2f$Hrms$2f$src$2f$firebase$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["db"], 'departments'), {
                name,
                createdAt: new Date().toISOString()
            });
            for (const d of desigs)await (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$hr$2f$Hrms$2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["addDoc"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$hr$2f$Hrms$2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["collection"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$hr$2f$Hrms$2f$src$2f$firebase$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["db"], 'designations'), {
                name: d.name,
                level: d.level,
                createdAt: new Date().toISOString()
            });
            await (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$hr$2f$Hrms$2f$src$2f$utils$2f$auditLog$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["logAction"])('DEPT_DESIG_SEEDED', {
                departments: depts.length,
                designations: desigs.length
            }, adminEmail);
        } catch (err) {
            console.error(err);
        }
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$hr$2f$Hrms$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "animate-fade",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$hr$2f$Hrms$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'flex-start',
                    marginBottom: '28px'
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$hr$2f$Hrms$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$hr$2f$Hrms$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                style: {
                                    fontSize: '24px',
                                    fontWeight: '800',
                                    color: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$hr$2f$Hrms$2f$src$2f$styles$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["tokens"].colors.primary
                                },
                                children: "Organization Structure"
                            }, void 0, false, {
                                fileName: "[project]/Documents/hr/Hrms/src/components/DeptDesignation/index.js",
                                lineNumber: 89,
                                columnNumber: 21
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$hr$2f$Hrms$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                style: {
                                    color: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$hr$2f$Hrms$2f$src$2f$styles$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["tokens"].colors.secondary,
                                    fontSize: '14px'
                                },
                                children: "Manage departments and designations."
                            }, void 0, false, {
                                fileName: "[project]/Documents/hr/Hrms/src/components/DeptDesignation/index.js",
                                lineNumber: 90,
                                columnNumber: 21
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Documents/hr/Hrms/src/components/DeptDesignation/index.js",
                        lineNumber: 88,
                        columnNumber: 17
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$hr$2f$Hrms$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            display: 'flex',
                            gap: '12px'
                        },
                        children: [
                            departments.length === 0 && designations.length === 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$hr$2f$Hrms$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: seedDefaults,
                                style: {
                                    ...__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$hr$2f$Hrms$2f$src$2f$styles$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["styles"].button.outline,
                                    padding: '10px 18px',
                                    fontSize: '13px',
                                    fontWeight: '700'
                                },
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$hr$2f$Hrms$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "material-symbols-outlined",
                                        style: {
                                            fontSize: '18px'
                                        },
                                        children: "database"
                                    }, void 0, false, {
                                        fileName: "[project]/Documents/hr/Hrms/src/components/DeptDesignation/index.js",
                                        lineNumber: 95,
                                        columnNumber: 29
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    "Seed Defaults"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Documents/hr/Hrms/src/components/DeptDesignation/index.js",
                                lineNumber: 94,
                                columnNumber: 25
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$hr$2f$Hrms$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: openCreate,
                                style: {
                                    ...__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$hr$2f$Hrms$2f$src$2f$styles$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["styles"].button.primary,
                                    padding: '10px 18px',
                                    fontSize: '13px',
                                    fontWeight: '700'
                                },
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$hr$2f$Hrms$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "material-symbols-outlined",
                                        style: {
                                            fontSize: '18px'
                                        },
                                        children: "add"
                                    }, void 0, false, {
                                        fileName: "[project]/Documents/hr/Hrms/src/components/DeptDesignation/index.js",
                                        lineNumber: 100,
                                        columnNumber: 25
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    "Add ",
                                    tab === 'departments' ? 'Department' : 'Designation'
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Documents/hr/Hrms/src/components/DeptDesignation/index.js",
                                lineNumber: 99,
                                columnNumber: 21
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Documents/hr/Hrms/src/components/DeptDesignation/index.js",
                        lineNumber: 92,
                        columnNumber: 17
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/Documents/hr/Hrms/src/components/DeptDesignation/index.js",
                lineNumber: 87,
                columnNumber: 13
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$hr$2f$Hrms$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    display: 'flex',
                    gap: '4px',
                    marginBottom: '24px',
                    background: '#F1F5F9',
                    borderRadius: '12px',
                    padding: '4px',
                    width: 'fit-content'
                },
                children: [
                    'departments',
                    'designations'
                ].map((t)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$hr$2f$Hrms$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: ()=>setTab(t),
                        style: {
                            padding: '8px 20px',
                            borderRadius: '10px',
                            border: 'none',
                            fontSize: '13px',
                            fontWeight: '700',
                            cursor: 'pointer',
                            background: tab === t ? __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$hr$2f$Hrms$2f$src$2f$styles$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["tokens"].colors.white : 'transparent',
                            color: tab === t ? __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$hr$2f$Hrms$2f$src$2f$styles$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["tokens"].colors.accent : __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$hr$2f$Hrms$2f$src$2f$styles$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["tokens"].colors.secondary,
                            boxShadow: tab === t ? __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$hr$2f$Hrms$2f$src$2f$styles$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["tokens"].shadow.sm : 'none',
                            transition: 'all 0.2s ease'
                        },
                        children: t === 'departments' ? 'Departments' : 'Designations'
                    }, t, false, {
                        fileName: "[project]/Documents/hr/Hrms/src/components/DeptDesignation/index.js",
                        lineNumber: 109,
                        columnNumber: 21
                    }, ("TURBOPACK compile-time value", void 0)))
            }, void 0, false, {
                fileName: "[project]/Documents/hr/Hrms/src/components/DeptDesignation/index.js",
                lineNumber: 107,
                columnNumber: 13
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$hr$2f$Hrms$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fill, minmax(240px, 1fr))',
                    gap: '16px'
                },
                children: [
                    items.map((item)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$hr$2f$Hrms$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            style: {
                                ...__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$hr$2f$Hrms$2f$src$2f$styles$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["styles"].card,
                                padding: '20px',
                                display: 'flex',
                                justifyContent: 'space-between',
                                alignItems: 'center'
                            },
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$hr$2f$Hrms$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$hr$2f$Hrms$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            style: {
                                                fontSize: '15px',
                                                fontWeight: '700',
                                                color: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$hr$2f$Hrms$2f$src$2f$styles$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["tokens"].colors.primary
                                            },
                                            children: item.name
                                        }, void 0, false, {
                                            fileName: "[project]/Documents/hr/Hrms/src/components/DeptDesignation/index.js",
                                            lineNumber: 126,
                                            columnNumber: 29
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        item.level && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$hr$2f$Hrms$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            style: {
                                                fontSize: '12px',
                                                color: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$hr$2f$Hrms$2f$src$2f$styles$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["tokens"].colors.secondary
                                            },
                                            children: [
                                                "Level ",
                                                item.level
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/Documents/hr/Hrms/src/components/DeptDesignation/index.js",
                                            lineNumber: 127,
                                            columnNumber: 44
                                        }, ("TURBOPACK compile-time value", void 0))
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Documents/hr/Hrms/src/components/DeptDesignation/index.js",
                                    lineNumber: 125,
                                    columnNumber: 25
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$hr$2f$Hrms$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    style: {
                                        display: 'flex',
                                        gap: '4px'
                                    },
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$hr$2f$Hrms$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            onClick: ()=>openEdit(item),
                                            style: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$hr$2f$Hrms$2f$src$2f$styles$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["styles"].button.ghost,
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$hr$2f$Hrms$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "material-symbols-outlined",
                                                style: {
                                                    fontSize: '18px'
                                                },
                                                children: "edit"
                                            }, void 0, false, {
                                                fileName: "[project]/Documents/hr/Hrms/src/components/DeptDesignation/index.js",
                                                lineNumber: 131,
                                                columnNumber: 33
                                            }, ("TURBOPACK compile-time value", void 0))
                                        }, void 0, false, {
                                            fileName: "[project]/Documents/hr/Hrms/src/components/DeptDesignation/index.js",
                                            lineNumber: 130,
                                            columnNumber: 29
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$hr$2f$Hrms$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            onClick: ()=>handleDelete(item),
                                            style: {
                                                ...__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$hr$2f$Hrms$2f$src$2f$styles$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["styles"].button.ghost,
                                                color: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$hr$2f$Hrms$2f$src$2f$styles$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["tokens"].colors.error
                                            },
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$hr$2f$Hrms$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "material-symbols-outlined",
                                                style: {
                                                    fontSize: '18px'
                                                },
                                                children: "delete"
                                            }, void 0, false, {
                                                fileName: "[project]/Documents/hr/Hrms/src/components/DeptDesignation/index.js",
                                                lineNumber: 134,
                                                columnNumber: 33
                                            }, ("TURBOPACK compile-time value", void 0))
                                        }, void 0, false, {
                                            fileName: "[project]/Documents/hr/Hrms/src/components/DeptDesignation/index.js",
                                            lineNumber: 133,
                                            columnNumber: 29
                                        }, ("TURBOPACK compile-time value", void 0))
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Documents/hr/Hrms/src/components/DeptDesignation/index.js",
                                    lineNumber: 129,
                                    columnNumber: 25
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, item.id, true, {
                            fileName: "[project]/Documents/hr/Hrms/src/components/DeptDesignation/index.js",
                            lineNumber: 124,
                            columnNumber: 21
                        }, ("TURBOPACK compile-time value", void 0))),
                    items.length === 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$hr$2f$Hrms$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            ...__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$hr$2f$Hrms$2f$src$2f$styles$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["styles"].card,
                            padding: '50px',
                            textAlign: 'center',
                            gridColumn: '1 / -1',
                            color: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$hr$2f$Hrms$2f$src$2f$styles$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["tokens"].colors.secondary
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$hr$2f$Hrms$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "material-symbols-outlined",
                                style: {
                                    fontSize: '40px',
                                    color: '#CBD5E1',
                                    display: 'block',
                                    marginBottom: '8px'
                                },
                                children: tab === 'departments' ? 'business' : 'badge'
                            }, void 0, false, {
                                fileName: "[project]/Documents/hr/Hrms/src/components/DeptDesignation/index.js",
                                lineNumber: 141,
                                columnNumber: 25
                            }, ("TURBOPACK compile-time value", void 0)),
                            "No ",
                            tab,
                            " found. Add one or seed defaults."
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Documents/hr/Hrms/src/components/DeptDesignation/index.js",
                        lineNumber: 140,
                        columnNumber: 21
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/Documents/hr/Hrms/src/components/DeptDesignation/index.js",
                lineNumber: 122,
                columnNumber: 13
            }, ("TURBOPACK compile-time value", void 0)),
            showModal && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$hr$2f$Hrms$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$hr$2f$Hrms$2f$src$2f$styles$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["styles"].modal,
                onClick: ()=>setShowModal(false),
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$hr$2f$Hrms$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    style: {
                        ...__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$hr$2f$Hrms$2f$src$2f$styles$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["styles"].card,
                        width: '100%',
                        maxWidth: '400px',
                        padding: '32px'
                    },
                    onClick: (e)=>e.stopPropagation(),
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$hr$2f$Hrms$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                            style: {
                                fontSize: '18px',
                                fontWeight: '800',
                                color: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$hr$2f$Hrms$2f$src$2f$styles$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["tokens"].colors.primary,
                                marginBottom: '20px'
                            },
                            children: [
                                editing ? 'Edit' : 'Create',
                                " ",
                                tab === 'departments' ? 'Department' : 'Designation'
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Documents/hr/Hrms/src/components/DeptDesignation/index.js",
                            lineNumber: 153,
                            columnNumber: 25
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$hr$2f$Hrms$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            style: {
                                display: 'grid',
                                gap: '16px',
                                marginBottom: '24px'
                            },
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$hr$2f$Hrms$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$hr$2f$Hrms$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                            style: {
                                                fontSize: '12px',
                                                fontWeight: '700',
                                                color: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$hr$2f$Hrms$2f$src$2f$styles$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["tokens"].colors.secondary,
                                                display: 'block',
                                                marginBottom: '6px'
                                            },
                                            children: "Name"
                                        }, void 0, false, {
                                            fileName: "[project]/Documents/hr/Hrms/src/components/DeptDesignation/index.js",
                                            lineNumber: 158,
                                            columnNumber: 33
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$hr$2f$Hrms$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                            style: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$hr$2f$Hrms$2f$src$2f$styles$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["styles"].input,
                                            value: form.name,
                                            onChange: (e)=>setForm({
                                                    ...form,
                                                    name: e.target.value
                                                }),
                                            placeholder: tab === 'departments' ? 'e.g. Security Operations' : 'e.g. Senior Analyst'
                                        }, void 0, false, {
                                            fileName: "[project]/Documents/hr/Hrms/src/components/DeptDesignation/index.js",
                                            lineNumber: 159,
                                            columnNumber: 33
                                        }, ("TURBOPACK compile-time value", void 0))
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Documents/hr/Hrms/src/components/DeptDesignation/index.js",
                                    lineNumber: 157,
                                    columnNumber: 29
                                }, ("TURBOPACK compile-time value", void 0)),
                                tab === 'designations' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$hr$2f$Hrms$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$hr$2f$Hrms$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                            style: {
                                                fontSize: '12px',
                                                fontWeight: '700',
                                                color: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$hr$2f$Hrms$2f$src$2f$styles$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["tokens"].colors.secondary,
                                                display: 'block',
                                                marginBottom: '6px'
                                            },
                                            children: "Level (1 = highest)"
                                        }, void 0, false, {
                                            fileName: "[project]/Documents/hr/Hrms/src/components/DeptDesignation/index.js",
                                            lineNumber: 163,
                                            columnNumber: 37
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$hr$2f$Hrms$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                            style: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$hr$2f$Hrms$2f$src$2f$styles$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["styles"].input,
                                            type: "number",
                                            min: "1",
                                            value: form.level,
                                            onChange: (e)=>setForm({
                                                    ...form,
                                                    level: e.target.value
                                                }),
                                            placeholder: "e.g. 5"
                                        }, void 0, false, {
                                            fileName: "[project]/Documents/hr/Hrms/src/components/DeptDesignation/index.js",
                                            lineNumber: 164,
                                            columnNumber: 37
                                        }, ("TURBOPACK compile-time value", void 0))
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Documents/hr/Hrms/src/components/DeptDesignation/index.js",
                                    lineNumber: 162,
                                    columnNumber: 33
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Documents/hr/Hrms/src/components/DeptDesignation/index.js",
                            lineNumber: 156,
                            columnNumber: 25
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$hr$2f$Hrms$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            style: {
                                display: 'flex',
                                gap: '12px',
                                justifyContent: 'flex-end'
                            },
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$hr$2f$Hrms$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    onClick: ()=>setShowModal(false),
                                    style: {
                                        ...__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$hr$2f$Hrms$2f$src$2f$styles$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["styles"].button.outline,
                                        padding: '10px 20px'
                                    },
                                    children: "Cancel"
                                }, void 0, false, {
                                    fileName: "[project]/Documents/hr/Hrms/src/components/DeptDesignation/index.js",
                                    lineNumber: 169,
                                    columnNumber: 29
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$hr$2f$Hrms$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    onClick: handleSave,
                                    disabled: !form.name.trim(),
                                    style: {
                                        ...__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$hr$2f$Hrms$2f$src$2f$styles$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["styles"].button.primary,
                                        padding: '10px 20px'
                                    },
                                    children: editing ? 'Update' : 'Create'
                                }, void 0, false, {
                                    fileName: "[project]/Documents/hr/Hrms/src/components/DeptDesignation/index.js",
                                    lineNumber: 170,
                                    columnNumber: 29
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Documents/hr/Hrms/src/components/DeptDesignation/index.js",
                            lineNumber: 168,
                            columnNumber: 25
                        }, ("TURBOPACK compile-time value", void 0))
                    ]
                }, void 0, true, {
                    fileName: "[project]/Documents/hr/Hrms/src/components/DeptDesignation/index.js",
                    lineNumber: 152,
                    columnNumber: 21
                }, ("TURBOPACK compile-time value", void 0))
            }, void 0, false, {
                fileName: "[project]/Documents/hr/Hrms/src/components/DeptDesignation/index.js",
                lineNumber: 151,
                columnNumber: 17
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/Documents/hr/Hrms/src/components/DeptDesignation/index.js",
        lineNumber: 86,
        columnNumber: 9
    }, ("TURBOPACK compile-time value", void 0));
};
_s(DeptDesignation, "cJqEmCnF9GFUHXBqV9SR2Puwvqs=");
_c = DeptDesignation;
const __TURBOPACK__default__export__ = DeptDesignation;
var _c;
__turbopack_context__.k.register(_c, "DeptDesignation");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Documents/hr/Hrms/src/components/AdminArea/index.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$hr$2f$Hrms$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/hr/Hrms/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$hr$2f$Hrms$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/hr/Hrms/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$hr$2f$Hrms$2f$node_modules$2f$firebase$2f$auth$2f$dist$2f$esm$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/Documents/hr/Hrms/node_modules/firebase/auth/dist/esm/index.esm.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$hr$2f$Hrms$2f$node_modules$2f40$firebase$2f$auth$2f$dist$2f$esm$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/hr/Hrms/node_modules/@firebase/auth/dist/esm/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$hr$2f$Hrms$2f$src$2f$firebase$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/hr/Hrms/src/firebase.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$hr$2f$Hrms$2f$src$2f$context$2f$AuthContext$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/hr/Hrms/src/context/AuthContext.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$hr$2f$Hrms$2f$src$2f$context$2f$RBACContext$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/hr/Hrms/src/context/RBACContext.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$hr$2f$Hrms$2f$src$2f$context$2f$ThemeContext$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/hr/Hrms/src/context/ThemeContext.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$hr$2f$Hrms$2f$src$2f$styles$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/hr/Hrms/src/styles.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$hr$2f$Hrms$2f$src$2f$components$2f$Employees$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/hr/Hrms/src/components/Employees/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$hr$2f$Hrms$2f$src$2f$components$2f$Dashboard$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/hr/Hrms/src/components/Dashboard/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$hr$2f$Hrms$2f$src$2f$components$2f$AdminPanel$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/hr/Hrms/src/components/AdminPanel/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$hr$2f$Hrms$2f$src$2f$components$2f$Timesheet$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/hr/Hrms/src/components/Timesheet/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$hr$2f$Hrms$2f$src$2f$components$2f$Payroll$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/hr/Hrms/src/components/Payroll/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$hr$2f$Hrms$2f$src$2f$components$2f$Notifications$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/hr/Hrms/src/components/Notifications/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$hr$2f$Hrms$2f$src$2f$components$2f$AuditLog$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/hr/Hrms/src/components/AuditLog/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$hr$2f$Hrms$2f$src$2f$components$2f$RoleManager$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/hr/Hrms/src/components/RoleManager/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$hr$2f$Hrms$2f$src$2f$components$2f$DeptDesignation$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/hr/Hrms/src/components/DeptDesignation/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature(), _s1 = __turbopack_context__.k.signature();
'use client';
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
;
;
/* ─── Admin Sidebar ──────────────────────────────── */ const AdminSidebar = ({ activeTab, setActiveTab, user })=>{
    _s();
    const { theme, toggleTheme } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$hr$2f$Hrms$2f$src$2f$context$2f$ThemeContext$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTheme"])();
    const { roleName } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$hr$2f$Hrms$2f$src$2f$context$2f$RBACContext$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRBAC"])();
    const primaryNav = [
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
            id: 'admin_timesheets',
            label: 'Timesheets',
            icon: 'assignment'
        },
        {
            id: 'admin_broadcast',
            label: 'Broadcasts',
            icon: 'campaign'
        }
    ];
    const financeNav = [
        {
            id: 'admin_payroll',
            label: 'Payroll',
            icon: 'payments'
        }
    ];
    const configNav = [
        {
            id: 'admin_policies',
            label: 'Company Policies',
            icon: 'gavel'
        },
        {
            id: 'audit_log',
            label: 'Audit Log',
            icon: 'manage_search'
        },
        {
            id: 'roles',
            label: 'Roles & Permissions',
            icon: 'admin_panel_settings'
        },
        {
            id: 'departments',
            label: 'Organization Structure',
            icon: 'account_tree'
        }
    ];
    const NavItem = ({ item })=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$hr$2f$Hrms$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            style: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$hr$2f$Hrms$2f$src$2f$styles$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["styles"].menuItem(activeTab === item.id),
            onClick: ()=>setActiveTab(item.id),
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$hr$2f$Hrms$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    className: "material-symbols-outlined",
                    style: {
                        fontSize: '20px',
                        color: activeTab === item.id ? __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$hr$2f$Hrms$2f$src$2f$styles$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["tokens"].colors.accent : __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$hr$2f$Hrms$2f$src$2f$styles$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["tokens"].colors.secondary,
                        opacity: activeTab === item.id ? 1 : 0.7
                    },
                    children: item.icon
                }, void 0, false, {
                    fileName: "[project]/Documents/hr/Hrms/src/components/AdminArea/index.js",
                    lineNumber: 46,
                    columnNumber: 13
                }, ("TURBOPACK compile-time value", void 0)),
                item.label
            ]
        }, void 0, true, {
            fileName: "[project]/Documents/hr/Hrms/src/components/AdminArea/index.js",
            lineNumber: 42,
            columnNumber: 9
        }, ("TURBOPACK compile-time value", void 0));
    const SectionLabel = ({ label })=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$hr$2f$Hrms$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            style: {
                color: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$hr$2f$Hrms$2f$src$2f$styles$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["tokens"].colors.secondary,
                fontSize: '11px',
                fontWeight: '800',
                textTransform: 'uppercase',
                letterSpacing: '0.1em',
                marginBottom: '12px',
                paddingLeft: '24px',
                opacity: 0.8
            },
            children: label
        }, void 0, false, {
            fileName: "[project]/Documents/hr/Hrms/src/components/AdminArea/index.js",
            lineNumber: 56,
            columnNumber: 9
        }, ("TURBOPACK compile-time value", void 0));
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$hr$2f$Hrms$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        style: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$hr$2f$Hrms$2f$src$2f$styles$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["styles"].sidebar,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$hr$2f$Hrms$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    ...__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$hr$2f$Hrms$2f$src$2f$styles$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["styles"].logo,
                    padding: '0 28px',
                    marginBottom: '40px'
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$hr$2f$Hrms$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            width: '32px',
                            height: '32px',
                            background: `linear-gradient(135deg, ${__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$hr$2f$Hrms$2f$src$2f$styles$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["tokens"].colors.accent} 0%, #065F46 100%)`,
                            borderRadius: '10px',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            boxShadow: '0 8px 16px -4px rgba(13,148,136,0.4)'
                        },
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$hr$2f$Hrms$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "material-symbols-outlined",
                            style: {
                                color: '#FFF',
                                fontSize: '18px'
                            },
                            children: "bolt"
                        }, void 0, false, {
                            fileName: "[project]/Documents/hr/Hrms/src/components/AdminArea/index.js",
                            lineNumber: 66,
                            columnNumber: 21
                        }, ("TURBOPACK compile-time value", void 0))
                    }, void 0, false, {
                        fileName: "[project]/Documents/hr/Hrms/src/components/AdminArea/index.js",
                        lineNumber: 65,
                        columnNumber: 17
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$hr$2f$Hrms$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        style: {
                            fontWeight: '800',
                            letterSpacing: '-0.03em',
                            fontSize: '20px'
                        },
                        children: "Cyberseal HRMS"
                    }, void 0, false, {
                        fileName: "[project]/Documents/hr/Hrms/src/components/AdminArea/index.js",
                        lineNumber: 68,
                        columnNumber: 17
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/Documents/hr/Hrms/src/components/AdminArea/index.js",
                lineNumber: 64,
                columnNumber: 13
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$hr$2f$Hrms$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    flex: 1,
                    overflowY: 'auto',
                    padding: '0 8px'
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$hr$2f$Hrms$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            margin: '0 16px 20px',
                            padding: '8px 14px',
                            borderRadius: '10px',
                            background: 'linear-gradient(135deg, #134E4A 0%, #0F766E 100%)',
                            display: 'flex',
                            alignItems: 'center',
                            gap: '8px'
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$hr$2f$Hrms$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "material-symbols-outlined",
                                style: {
                                    fontSize: '16px',
                                    color: '#5EEAD4'
                                },
                                children: "shield_person"
                            }, void 0, false, {
                                fileName: "[project]/Documents/hr/Hrms/src/components/AdminArea/index.js",
                                lineNumber: 74,
                                columnNumber: 21
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$hr$2f$Hrms$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                style: {
                                    fontSize: '12px',
                                    fontWeight: '800',
                                    color: '#CCFBF1',
                                    letterSpacing: '0.04em'
                                },
                                children: (roleName || 'SYSTEM ADMINISTRATOR').toUpperCase()
                            }, void 0, false, {
                                fileName: "[project]/Documents/hr/Hrms/src/components/AdminArea/index.js",
                                lineNumber: 75,
                                columnNumber: 21
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Documents/hr/Hrms/src/components/AdminArea/index.js",
                        lineNumber: 73,
                        columnNumber: 17
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$hr$2f$Hrms$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(SectionLabel, {
                        label: "Management"
                    }, void 0, false, {
                        fileName: "[project]/Documents/hr/Hrms/src/components/AdminArea/index.js",
                        lineNumber: 78,
                        columnNumber: 17
                    }, ("TURBOPACK compile-time value", void 0)),
                    primaryNav.map((item)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$hr$2f$Hrms$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(NavItem, {
                            item: item
                        }, item.id, false, {
                            fileName: "[project]/Documents/hr/Hrms/src/components/AdminArea/index.js",
                            lineNumber: 79,
                            columnNumber: 41
                        }, ("TURBOPACK compile-time value", void 0))),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$hr$2f$Hrms$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            marginTop: '28px'
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$hr$2f$Hrms$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(SectionLabel, {
                                label: "Finance"
                            }, void 0, false, {
                                fileName: "[project]/Documents/hr/Hrms/src/components/AdminArea/index.js",
                                lineNumber: 82,
                                columnNumber: 21
                            }, ("TURBOPACK compile-time value", void 0)),
                            financeNav.map((item)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$hr$2f$Hrms$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(NavItem, {
                                    item: item
                                }, item.id, false, {
                                    fileName: "[project]/Documents/hr/Hrms/src/components/AdminArea/index.js",
                                    lineNumber: 83,
                                    columnNumber: 45
                                }, ("TURBOPACK compile-time value", void 0)))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Documents/hr/Hrms/src/components/AdminArea/index.js",
                        lineNumber: 81,
                        columnNumber: 17
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$hr$2f$Hrms$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            marginTop: '28px'
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$hr$2f$Hrms$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(SectionLabel, {
                                label: "Configuration"
                            }, void 0, false, {
                                fileName: "[project]/Documents/hr/Hrms/src/components/AdminArea/index.js",
                                lineNumber: 87,
                                columnNumber: 21
                            }, ("TURBOPACK compile-time value", void 0)),
                            configNav.map((item)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$hr$2f$Hrms$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(NavItem, {
                                    item: item
                                }, item.id, false, {
                                    fileName: "[project]/Documents/hr/Hrms/src/components/AdminArea/index.js",
                                    lineNumber: 88,
                                    columnNumber: 44
                                }, ("TURBOPACK compile-time value", void 0)))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Documents/hr/Hrms/src/components/AdminArea/index.js",
                        lineNumber: 86,
                        columnNumber: 17
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/Documents/hr/Hrms/src/components/AdminArea/index.js",
                lineNumber: 71,
                columnNumber: 13
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$hr$2f$Hrms$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    padding: '24px 16px',
                    borderTop: '1px solid var(--color-border)',
                    marginTop: 'auto'
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$hr$2f$Hrms$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: toggleTheme,
                        style: {
                            ...__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$hr$2f$Hrms$2f$src$2f$styles$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["styles"].button.outline,
                            width: '100%',
                            justifyContent: 'center',
                            marginBottom: '12px',
                            padding: '10px',
                            fontSize: '13px',
                            fontWeight: '700'
                        },
                        title: theme === 'dark' ? 'Switch to Light Mode' : 'Switch to Dark Mode',
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$hr$2f$Hrms$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "material-symbols-outlined",
                                style: {
                                    fontSize: '18px'
                                },
                                children: theme === 'dark' ? 'light_mode' : 'dark_mode'
                            }, void 0, false, {
                                fileName: "[project]/Documents/hr/Hrms/src/components/AdminArea/index.js",
                                lineNumber: 98,
                                columnNumber: 21
                            }, ("TURBOPACK compile-time value", void 0)),
                            theme === 'dark' ? 'Light Mode' : 'Dark Mode'
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Documents/hr/Hrms/src/components/AdminArea/index.js",
                        lineNumber: 95,
                        columnNumber: 17
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$hr$2f$Hrms$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            display: 'flex',
                            alignItems: 'center',
                            gap: '12px',
                            padding: '12px',
                            transition: 'all 0.2s ease'
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$hr$2f$Hrms$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                style: {
                                    width: '40px',
                                    height: '40px',
                                    background: 'var(--color-accent)',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    fontWeight: '700',
                                    color: '#FFFFFF',
                                    fontSize: '14px',
                                    borderRadius: '12px'
                                },
                                children: user?.email?.charAt(0)?.toUpperCase() || 'A'
                            }, void 0, false, {
                                fileName: "[project]/Documents/hr/Hrms/src/components/AdminArea/index.js",
                                lineNumber: 102,
                                columnNumber: 21
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$hr$2f$Hrms$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                style: {
                                    flex: 1,
                                    minWidth: 0
                                },
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$hr$2f$Hrms$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        style: {
                                            fontSize: '13px',
                                            fontWeight: '700',
                                            color: 'var(--color-primary)',
                                            whiteSpace: 'nowrap',
                                            overflow: 'hidden',
                                            textOverflow: 'ellipsis'
                                        },
                                        children: roleName || 'Admin'
                                    }, void 0, false, {
                                        fileName: "[project]/Documents/hr/Hrms/src/components/AdminArea/index.js",
                                        lineNumber: 106,
                                        columnNumber: 25
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$hr$2f$Hrms$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        style: {
                                            fontSize: '11px',
                                            color: 'var(--color-secondary)'
                                        },
                                        children: user?.email || 'admin@hrmate.com'
                                    }, void 0, false, {
                                        fileName: "[project]/Documents/hr/Hrms/src/components/AdminArea/index.js",
                                        lineNumber: 107,
                                        columnNumber: 25
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Documents/hr/Hrms/src/components/AdminArea/index.js",
                                lineNumber: 105,
                                columnNumber: 21
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Documents/hr/Hrms/src/components/AdminArea/index.js",
                        lineNumber: 101,
                        columnNumber: 17
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/Documents/hr/Hrms/src/components/AdminArea/index.js",
                lineNumber: 93,
                columnNumber: 13
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/Documents/hr/Hrms/src/components/AdminArea/index.js",
        lineNumber: 62,
        columnNumber: 9
    }, ("TURBOPACK compile-time value", void 0));
};
_s(AdminSidebar, "ajwujJkYhD/CtHo9avsUQIkNyrU=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$hr$2f$Hrms$2f$src$2f$context$2f$ThemeContext$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTheme"],
        __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$hr$2f$Hrms$2f$src$2f$context$2f$RBACContext$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRBAC"]
    ];
});
_c = AdminSidebar;
/* ─── Admin Area (Main Layout) ───────────────────── */ const AdminArea = ({ user })=>{
    _s1();
    const { logout } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$hr$2f$Hrms$2f$src$2f$context$2f$AuthContext$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAuth"])();
    const [activeTab, setActiveTab] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$hr$2f$Hrms$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('dashboard');
    const [searchTerm, setSearchTerm] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$hr$2f$Hrms$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('');
    const handleLogout = async ()=>{
        logout();
        if (user.uid !== 'hardcoded-admin') {
            try {
                await (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$hr$2f$Hrms$2f$node_modules$2f40$firebase$2f$auth$2f$dist$2f$esm$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["signOut"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$hr$2f$Hrms$2f$src$2f$firebase$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["auth"]);
            } catch (e) {
                console.error(e);
            }
        }
    };
    const pageTitle = {
        dashboard: 'System Overview',
        employees: 'Workforce Directory',
        admin_leaves: 'Leave Applications',
        admin_attendance: 'Attendance Feed',
        admin_timesheets: 'Timesheet Review',
        admin_broadcast: 'Broadcasts',
        admin_payroll: 'Payroll Management',
        admin_policies: 'Company Policies',
        audit_log: 'Audit Log',
        roles: 'Roles & Permissions',
        departments: 'Organization Structure'
    }[activeTab] || 'Admin Panel';
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$hr$2f$Hrms$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        style: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$hr$2f$Hrms$2f$src$2f$styles$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["styles"].app,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$hr$2f$Hrms$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(AdminSidebar, {
                activeTab: activeTab,
                setActiveTab: setActiveTab,
                user: user
            }, void 0, false, {
                fileName: "[project]/Documents/hr/Hrms/src/components/AdminArea/index.js",
                lineNumber: 144,
                columnNumber: 13
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$hr$2f$Hrms$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$hr$2f$Hrms$2f$src$2f$styles$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["styles"].main,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$hr$2f$Hrms$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$hr$2f$Hrms$2f$src$2f$styles$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["styles"].topbar,
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$hr$2f$Hrms$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$hr$2f$Hrms$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        style: {
                                            fontSize: '11px',
                                            fontWeight: '700',
                                            color: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$hr$2f$Hrms$2f$src$2f$styles$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["tokens"].colors.secondary,
                                            textTransform: 'uppercase',
                                            letterSpacing: '0.08em',
                                            marginBottom: '4px'
                                        },
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$hr$2f$Hrms$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "material-symbols-outlined",
                                                style: {
                                                    fontSize: '12px',
                                                    verticalAlign: 'middle',
                                                    marginRight: '4px'
                                                },
                                                children: "shield_person"
                                            }, void 0, false, {
                                                fileName: "[project]/Documents/hr/Hrms/src/components/AdminArea/index.js",
                                                lineNumber: 151,
                                                columnNumber: 29
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            "INSTANCE: ",
                                            user?.email?.toUpperCase()
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Documents/hr/Hrms/src/components/AdminArea/index.js",
                                        lineNumber: 150,
                                        columnNumber: 25
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$hr$2f$Hrms$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                        style: {
                                            fontSize: '24px',
                                            fontWeight: '800',
                                            color: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$hr$2f$Hrms$2f$src$2f$styles$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["tokens"].colors.primary,
                                            letterSpacing: '-0.02em'
                                        },
                                        children: pageTitle
                                    }, void 0, false, {
                                        fileName: "[project]/Documents/hr/Hrms/src/components/AdminArea/index.js",
                                        lineNumber: 154,
                                        columnNumber: 25
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Documents/hr/Hrms/src/components/AdminArea/index.js",
                                lineNumber: 149,
                                columnNumber: 21
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$hr$2f$Hrms$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                style: {
                                    display: 'flex',
                                    alignItems: 'center',
                                    gap: '16px'
                                },
                                children: [
                                    activeTab === 'employees' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$hr$2f$Hrms$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        style: {
                                            position: 'relative'
                                        },
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$hr$2f$Hrms$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                style: {
                                                    ...__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$hr$2f$Hrms$2f$src$2f$styles$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["styles"].input,
                                                    paddingLeft: '44px',
                                                    width: '280px',
                                                    backgroundColor: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$hr$2f$Hrms$2f$src$2f$styles$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["tokens"].colors.white,
                                                    boxShadow: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$hr$2f$Hrms$2f$src$2f$styles$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["tokens"].shadow.sm
                                                },
                                                placeholder: "Search workforce...",
                                                value: searchTerm,
                                                onChange: (e)=>setSearchTerm(e.target.value)
                                            }, void 0, false, {
                                                fileName: "[project]/Documents/hr/Hrms/src/components/AdminArea/index.js",
                                                lineNumber: 162,
                                                columnNumber: 33
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$hr$2f$Hrms$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "material-symbols-outlined",
                                                style: {
                                                    position: 'absolute',
                                                    left: '14px',
                                                    top: '50%',
                                                    transform: 'translateY(-50%)',
                                                    fontSize: '18px',
                                                    color: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$hr$2f$Hrms$2f$src$2f$styles$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["tokens"].colors.secondary
                                                },
                                                children: "search"
                                            }, void 0, false, {
                                                fileName: "[project]/Documents/hr/Hrms/src/components/AdminArea/index.js",
                                                lineNumber: 168,
                                                columnNumber: 33
                                            }, ("TURBOPACK compile-time value", void 0))
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Documents/hr/Hrms/src/components/AdminArea/index.js",
                                        lineNumber: 161,
                                        columnNumber: 29
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$hr$2f$Hrms$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$hr$2f$Hrms$2f$src$2f$components$2f$Notifications$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                        user: user,
                                        isAdmin: true
                                    }, void 0, false, {
                                        fileName: "[project]/Documents/hr/Hrms/src/components/AdminArea/index.js",
                                        lineNumber: 171,
                                        columnNumber: 25
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$hr$2f$Hrms$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        onClick: handleLogout,
                                        style: {
                                            ...__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$hr$2f$Hrms$2f$src$2f$styles$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["styles"].button.outline,
                                            padding: '10px 18px',
                                            fontSize: '13px',
                                            fontWeight: '700',
                                            background: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$hr$2f$Hrms$2f$src$2f$styles$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["tokens"].colors.white,
                                            color: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$hr$2f$Hrms$2f$src$2f$styles$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["tokens"].colors.error,
                                            borderColor: '#FEE2E2'
                                        },
                                        onMouseOver: (e)=>{
                                            e.currentTarget.style.backgroundColor = '#FEF2F2';
                                            e.currentTarget.style.borderColor = '#FCA5A5';
                                        },
                                        onMouseOut: (e)=>{
                                            e.currentTarget.style.backgroundColor = __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$hr$2f$Hrms$2f$src$2f$styles$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["tokens"].colors.white;
                                            e.currentTarget.style.borderColor = '#FEE2E2';
                                        },
                                        children: [
                                            "Sign Out",
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$hr$2f$Hrms$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "material-symbols-outlined",
                                                style: {
                                                    fontSize: '18px'
                                                },
                                                children: "logout"
                                            }, void 0, false, {
                                                fileName: "[project]/Documents/hr/Hrms/src/components/AdminArea/index.js",
                                                lineNumber: 176,
                                                columnNumber: 29
                                            }, ("TURBOPACK compile-time value", void 0))
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Documents/hr/Hrms/src/components/AdminArea/index.js",
                                        lineNumber: 172,
                                        columnNumber: 25
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Documents/hr/Hrms/src/components/AdminArea/index.js",
                                lineNumber: 159,
                                columnNumber: 21
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Documents/hr/Hrms/src/components/AdminArea/index.js",
                        lineNumber: 148,
                        columnNumber: 17
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$hr$2f$Hrms$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            maxWidth: '1200px',
                            margin: '0 auto'
                        },
                        children: [
                            activeTab === 'dashboard' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$hr$2f$Hrms$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$hr$2f$Hrms$2f$src$2f$components$2f$Dashboard$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                setActiveTab: setActiveTab,
                                isAdmin: true,
                                user: user
                            }, void 0, false, {
                                fileName: "[project]/Documents/hr/Hrms/src/components/AdminArea/index.js",
                                lineNumber: 183,
                                columnNumber: 51
                            }, ("TURBOPACK compile-time value", void 0)),
                            activeTab === 'employees' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$hr$2f$Hrms$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$hr$2f$Hrms$2f$src$2f$components$2f$Employees$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                searchTerm: searchTerm,
                                isAdmin: true
                            }, void 0, false, {
                                fileName: "[project]/Documents/hr/Hrms/src/components/AdminArea/index.js",
                                lineNumber: 184,
                                columnNumber: 51
                            }, ("TURBOPACK compile-time value", void 0)),
                            activeTab === 'admin_timesheets' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$hr$2f$Hrms$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$hr$2f$Hrms$2f$src$2f$components$2f$Timesheet$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AdminTimesheets"], {}, void 0, false, {
                                fileName: "[project]/Documents/hr/Hrms/src/components/AdminArea/index.js",
                                lineNumber: 185,
                                columnNumber: 58
                            }, ("TURBOPACK compile-time value", void 0)),
                            activeTab === 'admin_payroll' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$hr$2f$Hrms$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$hr$2f$Hrms$2f$src$2f$components$2f$Payroll$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AdminPayroll"], {}, void 0, false, {
                                fileName: "[project]/Documents/hr/Hrms/src/components/AdminArea/index.js",
                                lineNumber: 186,
                                columnNumber: 55
                            }, ("TURBOPACK compile-time value", void 0)),
                            activeTab === 'audit_log' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$hr$2f$Hrms$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$hr$2f$Hrms$2f$src$2f$components$2f$AuditLog$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                                fileName: "[project]/Documents/hr/Hrms/src/components/AdminArea/index.js",
                                lineNumber: 187,
                                columnNumber: 51
                            }, ("TURBOPACK compile-time value", void 0)),
                            activeTab === 'roles' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$hr$2f$Hrms$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$hr$2f$Hrms$2f$src$2f$components$2f$RoleManager$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                adminEmail: user?.email
                            }, void 0, false, {
                                fileName: "[project]/Documents/hr/Hrms/src/components/AdminArea/index.js",
                                lineNumber: 188,
                                columnNumber: 47
                            }, ("TURBOPACK compile-time value", void 0)),
                            activeTab === 'departments' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$hr$2f$Hrms$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$hr$2f$Hrms$2f$src$2f$components$2f$DeptDesignation$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                adminEmail: user?.email
                            }, void 0, false, {
                                fileName: "[project]/Documents/hr/Hrms/src/components/AdminArea/index.js",
                                lineNumber: 189,
                                columnNumber: 53
                            }, ("TURBOPACK compile-time value", void 0)),
                            (activeTab === 'admin_leaves' || activeTab === 'admin_attendance' || activeTab === 'admin_broadcast' || activeTab === 'admin_policies') && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$hr$2f$Hrms$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$hr$2f$Hrms$2f$src$2f$components$2f$AdminPanel$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                fixedModule: activeTab.replace('admin_', ''),
                                adminEmail: user?.email
                            }, void 0, false, {
                                fileName: "[project]/Documents/hr/Hrms/src/components/AdminArea/index.js",
                                lineNumber: 191,
                                columnNumber: 25
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Documents/hr/Hrms/src/components/AdminArea/index.js",
                        lineNumber: 182,
                        columnNumber: 17
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/Documents/hr/Hrms/src/components/AdminArea/index.js",
                lineNumber: 146,
                columnNumber: 13
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/Documents/hr/Hrms/src/components/AdminArea/index.js",
        lineNumber: 143,
        columnNumber: 9
    }, ("TURBOPACK compile-time value", void 0));
};
_s1(AdminArea, "PQ5ohTkDRIwIH1VBCtU44ggXB6Y=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$hr$2f$Hrms$2f$src$2f$context$2f$AuthContext$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAuth"]
    ];
});
_c1 = AdminArea;
const __TURBOPACK__default__export__ = AdminArea;
var _c, _c1;
__turbopack_context__.k.register(_c, "AdminSidebar");
__turbopack_context__.k.register(_c1, "AdminArea");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Documents/hr/Hrms/src/components/Attendance/index.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$hr$2f$Hrms$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/hr/Hrms/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$hr$2f$Hrms$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/hr/Hrms/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$hr$2f$Hrms$2f$src$2f$firebase$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/hr/Hrms/src/firebase.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$hr$2f$Hrms$2f$node_modules$2f$firebase$2f$firestore$2f$dist$2f$esm$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/Documents/hr/Hrms/node_modules/firebase/firestore/dist/esm/index.esm.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$hr$2f$Hrms$2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/hr/Hrms/node_modules/@firebase/firestore/dist/index.esm.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$hr$2f$Hrms$2f$src$2f$styles$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/hr/Hrms/src/styles.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
;
;
;
;
const Attendance = ({ user })=>{
    _s();
    const [logs, setLogs] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$hr$2f$Hrms$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [activeShift, setActiveShift] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$hr$2f$Hrms$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [loading, setLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$hr$2f$Hrms$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(true);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$hr$2f$Hrms$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Attendance.useEffect": ()=>{
            const q = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$hr$2f$Hrms$2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["query"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$hr$2f$Hrms$2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["collection"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$hr$2f$Hrms$2f$src$2f$firebase$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["db"], 'attendance'), (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$hr$2f$Hrms$2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["where"])('userEmail', '==', user.email));
            // Removed orderBy to avoid missing index errors that can cause stuck loading screens.
            // We will sort client-side instead.
            const unsub = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$hr$2f$Hrms$2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["onSnapshot"])(q, {
                "Attendance.useEffect.unsub": (s)=>{
                    const data = s.docs.map({
                        "Attendance.useEffect.unsub.data": (d)=>({
                                id: d.id,
                                ...d.data()
                            })
                    }["Attendance.useEffect.unsub.data"]).sort({
                        "Attendance.useEffect.unsub.data": (a, b)=>(b.timestamp?.seconds || 0) - (a.timestamp?.seconds || 0)
                    }["Attendance.useEffect.unsub.data"]);
                    setLogs(data);
                    if (data[0]?.type === 'in') setActiveShift(data[0]);
                    else setActiveShift(null);
                    setLoading(false);
                }
            }["Attendance.useEffect.unsub"], {
                "Attendance.useEffect.unsub": (err)=>{
                    console.error("Attendance feed error:", err);
                    setLoading(false);
                }
            }["Attendance.useEffect.unsub"]);
            return unsub;
        }
    }["Attendance.useEffect"], [
        user.email
    ]);
    const toggleShift = async ()=>{
        const type = activeShift ? 'out' : 'in';
        await (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$hr$2f$Hrms$2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["addDoc"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$hr$2f$Hrms$2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["collection"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$hr$2f$Hrms$2f$src$2f$firebase$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["db"], 'attendance'), {
            userEmail: user.email,
            type,
            timestamp: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$hr$2f$Hrms$2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["serverTimestamp"])(),
            manual: false
        });
    };
    if (loading) return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$hr$2f$Hrms$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        style: {
            fontSize: '15px',
            fontWeight: '500',
            padding: '40px',
            color: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$hr$2f$Hrms$2f$src$2f$styles$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["tokens"].colors.textMuted
        },
        children: "Loading attendance data..."
    }, void 0, false, {
        fileName: "[project]/Documents/hr/Hrms/src/components/Attendance/index.js",
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
    if (loading) return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$hr$2f$Hrms$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        style: {
            fontSize: '15px',
            fontWeight: '600',
            padding: '60px',
            textAlign: 'center',
            color: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$hr$2f$Hrms$2f$src$2f$styles$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["tokens"].colors.secondary
        },
        children: "Establishing secure connection to records..."
    }, void 0, false, {
        fileName: "[project]/Documents/hr/Hrms/src/components/Attendance/index.js",
        lineNumber: 61,
        columnNumber: 23
    }, ("TURBOPACK compile-time value", void 0));
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$hr$2f$Hrms$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "animate-fade",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$hr$2f$Hrms$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    marginBottom: '40px'
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$hr$2f$Hrms$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                        style: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$hr$2f$Hrms$2f$src$2f$styles$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["styles"].greeting,
                        children: "Time & Attendance"
                    }, void 0, false, {
                        fileName: "[project]/Documents/hr/Hrms/src/components/Attendance/index.js",
                        lineNumber: 66,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$hr$2f$Hrms$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        style: {
                            color: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$hr$2f$Hrms$2f$src$2f$styles$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["tokens"].colors.secondary,
                            fontSize: '15px',
                            marginTop: '4px'
                        },
                        children: "Log your clinical hours and monitor shifting schedules."
                    }, void 0, false, {
                        fileName: "[project]/Documents/hr/Hrms/src/components/Attendance/index.js",
                        lineNumber: 67,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/Documents/hr/Hrms/src/components/Attendance/index.js",
                lineNumber: 65,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$hr$2f$Hrms$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    display: 'grid',
                    gridTemplateColumns: '1fr 2fr',
                    gap: '32px'
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$hr$2f$Hrms$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            display: 'flex',
                            flexDirection: 'column',
                            gap: '32px'
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$hr$2f$Hrms$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                style: {
                                    ...__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$hr$2f$Hrms$2f$src$2f$styles$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["styles"].card,
                                    textAlign: 'center',
                                    padding: '48px 32px',
                                    position: 'relative',
                                    overflow: 'hidden'
                                },
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$hr$2f$Hrms$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        style: {
                                            position: 'absolute',
                                            top: '-20px',
                                            right: '-20px',
                                            width: '120px',
                                            height: '120px',
                                            background: activeShift ? __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$hr$2f$Hrms$2f$src$2f$styles$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["tokens"].colors.success + '10' : __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$hr$2f$Hrms$2f$src$2f$styles$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["tokens"].colors.accent + '05',
                                            borderRadius: '50%',
                                            zIndex: 0
                                        }
                                    }, void 0, false, {
                                        fileName: "[project]/Documents/hr/Hrms/src/components/Attendance/index.js",
                                        lineNumber: 73,
                                        columnNumber: 13
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$hr$2f$Hrms$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        style: {
                                            position: 'relative',
                                            zIndex: 1
                                        },
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$hr$2f$Hrms$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                style: {
                                                    fontSize: '11px',
                                                    fontWeight: '800',
                                                    color: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$hr$2f$Hrms$2f$src$2f$styles$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["tokens"].colors.secondary,
                                                    textTransform: 'uppercase',
                                                    letterSpacing: '0.1em',
                                                    marginBottom: '24px'
                                                },
                                                children: "Shift Status"
                                            }, void 0, false, {
                                                fileName: "[project]/Documents/hr/Hrms/src/components/Attendance/index.js",
                                                lineNumber: 85,
                                                columnNumber: 15
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$hr$2f$Hrms$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                style: {
                                                    width: '80px',
                                                    height: '80px',
                                                    borderRadius: '24px',
                                                    background: activeShift ? __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$hr$2f$Hrms$2f$src$2f$styles$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["tokens"].colors.success + '15' : '#F1F5F9',
                                                    color: activeShift ? __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$hr$2f$Hrms$2f$src$2f$styles$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["tokens"].colors.success : __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$hr$2f$Hrms$2f$src$2f$styles$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["tokens"].colors.secondary,
                                                    display: 'flex',
                                                    alignItems: 'center',
                                                    justifyContent: 'center',
                                                    margin: '0 auto 20px',
                                                    border: `1px solid ${activeShift ? __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$hr$2f$Hrms$2f$src$2f$styles$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["tokens"].colors.success + '30' : __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$hr$2f$Hrms$2f$src$2f$styles$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["tokens"].colors.border}`
                                                },
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$hr$2f$Hrms$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "material-symbols-outlined",
                                                    style: {
                                                        fontSize: '40px'
                                                    },
                                                    children: activeShift ? 'timer' : 'timer_off'
                                                }, void 0, false, {
                                                    fileName: "[project]/Documents/hr/Hrms/src/components/Attendance/index.js",
                                                    lineNumber: 99,
                                                    columnNumber: 17
                                                }, ("TURBOPACK compile-time value", void 0))
                                            }, void 0, false, {
                                                fileName: "[project]/Documents/hr/Hrms/src/components/Attendance/index.js",
                                                lineNumber: 87,
                                                columnNumber: 15
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$hr$2f$Hrms$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                style: {
                                                    fontSize: '24px',
                                                    fontWeight: '800',
                                                    color: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$hr$2f$Hrms$2f$src$2f$styles$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["tokens"].colors.primary,
                                                    marginBottom: '8px',
                                                    letterSpacing: '-0.02em'
                                                },
                                                children: activeShift ? 'Currently Logged In' : 'Account On Standby'
                                            }, void 0, false, {
                                                fileName: "[project]/Documents/hr/Hrms/src/components/Attendance/index.js",
                                                lineNumber: 102,
                                                columnNumber: 15
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$hr$2f$Hrms$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                style: {
                                                    fontSize: '13px',
                                                    color: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$hr$2f$Hrms$2f$src$2f$styles$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["tokens"].colors.secondary,
                                                    marginBottom: '40px'
                                                },
                                                children: activeShift ? `Shift started at ${activeShift.timestamp?.toDate().toLocaleTimeString([], {
                                                    hour: '2-digit',
                                                    minute: '2-digit'
                                                })}` : 'Ready to begin your scheduled session?'
                                            }, void 0, false, {
                                                fileName: "[project]/Documents/hr/Hrms/src/components/Attendance/index.js",
                                                lineNumber: 105,
                                                columnNumber: 15
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$hr$2f$Hrms$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                onClick: toggleShift,
                                                style: {
                                                    ...__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$hr$2f$Hrms$2f$src$2f$styles$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["styles"].button.primary,
                                                    width: '100%',
                                                    padding: '16px',
                                                    fontSize: '15px',
                                                    backgroundColor: activeShift ? __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$hr$2f$Hrms$2f$src$2f$styles$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["tokens"].colors.primary : __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$hr$2f$Hrms$2f$src$2f$styles$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["tokens"].colors.accent,
                                                    boxShadow: activeShift ? 'none' : __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$hr$2f$Hrms$2f$src$2f$styles$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["styles"].button.primary.boxShadow
                                                },
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$hr$2f$Hrms$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "material-symbols-outlined",
                                                        style: {
                                                            fontSize: '20px'
                                                        },
                                                        children: activeShift ? 'logout' : 'bolt'
                                                    }, void 0, false, {
                                                        fileName: "[project]/Documents/hr/Hrms/src/components/Attendance/index.js",
                                                        lineNumber: 120,
                                                        columnNumber: 17
                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                    activeShift ? 'Terminate Session' : 'Establish Pulse'
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/Documents/hr/Hrms/src/components/Attendance/index.js",
                                                lineNumber: 109,
                                                columnNumber: 15
                                            }, ("TURBOPACK compile-time value", void 0))
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Documents/hr/Hrms/src/components/Attendance/index.js",
                                        lineNumber: 84,
                                        columnNumber: 13
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Documents/hr/Hrms/src/components/Attendance/index.js",
                                lineNumber: 72,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$hr$2f$Hrms$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                style: {
                                    ...__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$hr$2f$Hrms$2f$src$2f$styles$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["styles"].card,
                                    padding: '32px'
                                },
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$hr$2f$Hrms$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                        style: {
                                            fontSize: '16px',
                                            fontWeight: '800',
                                            marginBottom: '24px',
                                            color: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$hr$2f$Hrms$2f$src$2f$styles$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["tokens"].colors.primary
                                        },
                                        children: "Efficiency Metrics"
                                    }, void 0, false, {
                                        fileName: "[project]/Documents/hr/Hrms/src/components/Attendance/index.js",
                                        lineNumber: 127,
                                        columnNumber: 13
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$hr$2f$Hrms$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        style: {
                                            display: 'flex',
                                            justifyContent: 'space-between',
                                            marginBottom: '12px',
                                            alignItems: 'flex-end'
                                        },
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$hr$2f$Hrms$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                style: {
                                                    fontSize: '13px',
                                                    fontWeight: '700',
                                                    color: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$hr$2f$Hrms$2f$src$2f$styles$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["tokens"].colors.secondary
                                                },
                                                children: "Monthly Compliance"
                                            }, void 0, false, {
                                                fileName: "[project]/Documents/hr/Hrms/src/components/Attendance/index.js",
                                                lineNumber: 129,
                                                columnNumber: 15
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$hr$2f$Hrms$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                style: {
                                                    fontSize: '18px',
                                                    fontWeight: '800',
                                                    color: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$hr$2f$Hrms$2f$src$2f$styles$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["tokens"].colors.primary
                                                },
                                                children: "98.4%"
                                            }, void 0, false, {
                                                fileName: "[project]/Documents/hr/Hrms/src/components/Attendance/index.js",
                                                lineNumber: 130,
                                                columnNumber: 15
                                            }, ("TURBOPACK compile-time value", void 0))
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Documents/hr/Hrms/src/components/Attendance/index.js",
                                        lineNumber: 128,
                                        columnNumber: 13
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$hr$2f$Hrms$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        style: {
                                            height: '10px',
                                            background: '#F1F5F9',
                                            borderRadius: '5px',
                                            overflow: 'hidden'
                                        },
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$hr$2f$Hrms$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            style: {
                                                width: '98.4%',
                                                height: '100%',
                                                background: `linear-gradient(to right, ${__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$hr$2f$Hrms$2f$src$2f$styles$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["tokens"].colors.accent}, ${__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$hr$2f$Hrms$2f$src$2f$styles$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["tokens"].colors.success})`,
                                                borderRadius: '5px'
                                            }
                                        }, void 0, false, {
                                            fileName: "[project]/Documents/hr/Hrms/src/components/Attendance/index.js",
                                            lineNumber: 133,
                                            columnNumber: 15
                                        }, ("TURBOPACK compile-time value", void 0))
                                    }, void 0, false, {
                                        fileName: "[project]/Documents/hr/Hrms/src/components/Attendance/index.js",
                                        lineNumber: 132,
                                        columnNumber: 13
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$hr$2f$Hrms$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        style: {
                                            fontSize: '12px',
                                            color: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$hr$2f$Hrms$2f$src$2f$styles$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["tokens"].colors.secondary,
                                            marginTop: '16px',
                                            lineHeight: '1.5'
                                        },
                                        children: "Your attendance record remains above the workspace average. Excellent discipline."
                                    }, void 0, false, {
                                        fileName: "[project]/Documents/hr/Hrms/src/components/Attendance/index.js",
                                        lineNumber: 135,
                                        columnNumber: 13
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Documents/hr/Hrms/src/components/Attendance/index.js",
                                lineNumber: 126,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Documents/hr/Hrms/src/components/Attendance/index.js",
                        lineNumber: 71,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$hr$2f$Hrms$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            ...__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$hr$2f$Hrms$2f$src$2f$styles$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["styles"].card,
                            padding: '0',
                            overflow: 'hidden'
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$hr$2f$Hrms$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                style: {
                                    padding: '32px',
                                    borderBottom: `1px solid ${__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$hr$2f$Hrms$2f$src$2f$styles$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["tokens"].colors.border}`,
                                    display: 'flex',
                                    justifyContent: 'space-between',
                                    alignItems: 'center'
                                },
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$hr$2f$Hrms$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                        style: {
                                            fontSize: '18px',
                                            fontWeight: '800',
                                            color: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$hr$2f$Hrms$2f$src$2f$styles$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["tokens"].colors.primary
                                        },
                                        children: "Activity History"
                                    }, void 0, false, {
                                        fileName: "[project]/Documents/hr/Hrms/src/components/Attendance/index.js",
                                        lineNumber: 141,
                                        columnNumber: 13
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$hr$2f$Hrms$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        style: {
                                            ...__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$hr$2f$Hrms$2f$src$2f$styles$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["styles"].badge('primary'),
                                            textTransform: 'uppercase',
                                            fontSize: '10px'
                                        },
                                        children: "March 2026"
                                    }, void 0, false, {
                                        fileName: "[project]/Documents/hr/Hrms/src/components/Attendance/index.js",
                                        lineNumber: 142,
                                        columnNumber: 13
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Documents/hr/Hrms/src/components/Attendance/index.js",
                                lineNumber: 140,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$hr$2f$Hrms$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                style: {
                                    overflowX: 'auto'
                                },
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$hr$2f$Hrms$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("table", {
                                    style: {
                                        width: '100%',
                                        borderCollapse: 'collapse'
                                    },
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$hr$2f$Hrms$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("thead", {
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$hr$2f$Hrms$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                                style: {
                                                    backgroundColor: '#F8FAFC'
                                                },
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$hr$2f$Hrms$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                        style: {
                                                            ...__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$hr$2f$Hrms$2f$src$2f$styles$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["styles"].th,
                                                            paddingLeft: '32px'
                                                        },
                                                        children: "Operational Date"
                                                    }, void 0, false, {
                                                        fileName: "[project]/Documents/hr/Hrms/src/components/Attendance/index.js",
                                                        lineNumber: 149,
                                                        columnNumber: 19
                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$hr$2f$Hrms$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                        style: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$hr$2f$Hrms$2f$src$2f$styles$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["styles"].th,
                                                        children: "Timeline (In/Out)"
                                                    }, void 0, false, {
                                                        fileName: "[project]/Documents/hr/Hrms/src/components/Attendance/index.js",
                                                        lineNumber: 150,
                                                        columnNumber: 19
                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$hr$2f$Hrms$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                        style: {
                                                            ...__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$hr$2f$Hrms$2f$src$2f$styles$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["styles"].th,
                                                            textAlign: 'right',
                                                            paddingRight: '32px'
                                                        },
                                                        children: "System Status"
                                                    }, void 0, false, {
                                                        fileName: "[project]/Documents/hr/Hrms/src/components/Attendance/index.js",
                                                        lineNumber: 151,
                                                        columnNumber: 19
                                                    }, ("TURBOPACK compile-time value", void 0))
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/Documents/hr/Hrms/src/components/Attendance/index.js",
                                                lineNumber: 148,
                                                columnNumber: 17
                                            }, ("TURBOPACK compile-time value", void 0))
                                        }, void 0, false, {
                                            fileName: "[project]/Documents/hr/Hrms/src/components/Attendance/index.js",
                                            lineNumber: 147,
                                            columnNumber: 15
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$hr$2f$Hrms$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tbody", {
                                            children: [
                                                logRows.map(([date, times], idx)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$hr$2f$Hrms$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                                        style: {
                                                            borderBottom: idx === logRows.length - 1 ? 'none' : `1px solid ${__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$hr$2f$Hrms$2f$src$2f$styles$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["tokens"].colors.border}`,
                                                            transition: 'background-color 0.2s ease'
                                                        },
                                                        onMouseOver: (e)=>e.currentTarget.style.backgroundColor = '#F9FAFB',
                                                        onMouseOut: (e)=>e.currentTarget.style.backgroundColor = 'transparent',
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$hr$2f$Hrms$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                                style: {
                                                                    ...__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$hr$2f$Hrms$2f$src$2f$styles$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["styles"].td,
                                                                    paddingLeft: '32px',
                                                                    fontWeight: '700',
                                                                    color: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$hr$2f$Hrms$2f$src$2f$styles$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["tokens"].colors.primary
                                                                },
                                                                children: date
                                                            }, void 0, false, {
                                                                fileName: "[project]/Documents/hr/Hrms/src/components/Attendance/index.js",
                                                                lineNumber: 160,
                                                                columnNumber: 21
                                                            }, ("TURBOPACK compile-time value", void 0)),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$hr$2f$Hrms$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                                style: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$hr$2f$Hrms$2f$src$2f$styles$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["styles"].td,
                                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$hr$2f$Hrms$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    style: {
                                                                        display: 'flex',
                                                                        alignItems: 'center',
                                                                        gap: '8px'
                                                                    },
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$hr$2f$Hrms$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                            style: {
                                                                                padding: '6px 10px',
                                                                                background: times.in ? '#ECFDF5' : '#F1F5F9',
                                                                                color: times.in ? __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$hr$2f$Hrms$2f$src$2f$styles$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["tokens"].colors.success : __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$hr$2f$Hrms$2f$src$2f$styles$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["tokens"].colors.secondary,
                                                                                borderRadius: '8px',
                                                                                fontSize: '12px',
                                                                                fontWeight: '700',
                                                                                border: `1px solid ${times.in ? '#D1FAE5' : __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$hr$2f$Hrms$2f$src$2f$styles$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["tokens"].colors.border}`
                                                                            },
                                                                            children: times.in || '--:--'
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/Documents/hr/Hrms/src/components/Attendance/index.js",
                                                                            lineNumber: 163,
                                                                            columnNumber: 25
                                                                        }, ("TURBOPACK compile-time value", void 0)),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$hr$2f$Hrms$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                            className: "material-symbols-outlined",
                                                                            style: {
                                                                                fontSize: '14px',
                                                                                color: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$hr$2f$Hrms$2f$src$2f$styles$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["tokens"].colors.border
                                                                            },
                                                                            children: "arrow_forward"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/Documents/hr/Hrms/src/components/Attendance/index.js",
                                                                            lineNumber: 174,
                                                                            columnNumber: 25
                                                                        }, ("TURBOPACK compile-time value", void 0)),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$hr$2f$Hrms$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                            style: {
                                                                                padding: '6px 10px',
                                                                                background: times.out ? '#F1F5F9' : '#FFF1F2',
                                                                                color: times.out ? __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$hr$2f$Hrms$2f$src$2f$styles$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["tokens"].colors.secondary : __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$hr$2f$Hrms$2f$src$2f$styles$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["tokens"].colors.error,
                                                                                borderRadius: '8px',
                                                                                fontSize: '12px',
                                                                                fontWeight: '700',
                                                                                border: `1px solid ${times.out ? __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$hr$2f$Hrms$2f$src$2f$styles$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["tokens"].colors.border : '#FFE4E6'}`
                                                                            },
                                                                            children: times.out || 'Active'
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/Documents/hr/Hrms/src/components/Attendance/index.js",
                                                                            lineNumber: 175,
                                                                            columnNumber: 25
                                                                        }, ("TURBOPACK compile-time value", void 0))
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/Documents/hr/Hrms/src/components/Attendance/index.js",
                                                                    lineNumber: 162,
                                                                    columnNumber: 23
                                                                }, ("TURBOPACK compile-time value", void 0))
                                                            }, void 0, false, {
                                                                fileName: "[project]/Documents/hr/Hrms/src/components/Attendance/index.js",
                                                                lineNumber: 161,
                                                                columnNumber: 21
                                                            }, ("TURBOPACK compile-time value", void 0)),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$hr$2f$Hrms$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                                style: {
                                                                    ...__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$hr$2f$Hrms$2f$src$2f$styles$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["styles"].td,
                                                                    textAlign: 'right',
                                                                    paddingRight: '32px'
                                                                },
                                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$hr$2f$Hrms$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    style: {
                                                                        display: 'inline-flex',
                                                                        alignItems: 'center',
                                                                        gap: '6px',
                                                                        color: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$hr$2f$Hrms$2f$src$2f$styles$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["tokens"].colors.success,
                                                                        fontSize: '12px',
                                                                        fontWeight: '700'
                                                                    },
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$hr$2f$Hrms$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                            className: "material-symbols-outlined",
                                                                            style: {
                                                                                fontSize: '16px'
                                                                            },
                                                                            children: "verified"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/Documents/hr/Hrms/src/components/Attendance/index.js",
                                                                            lineNumber: 190,
                                                                            columnNumber: 25
                                                                        }, ("TURBOPACK compile-time value", void 0)),
                                                                        "Validated"
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/Documents/hr/Hrms/src/components/Attendance/index.js",
                                                                    lineNumber: 189,
                                                                    columnNumber: 23
                                                                }, ("TURBOPACK compile-time value", void 0))
                                                            }, void 0, false, {
                                                                fileName: "[project]/Documents/hr/Hrms/src/components/Attendance/index.js",
                                                                lineNumber: 188,
                                                                columnNumber: 21
                                                            }, ("TURBOPACK compile-time value", void 0))
                                                        ]
                                                    }, date, true, {
                                                        fileName: "[project]/Documents/hr/Hrms/src/components/Attendance/index.js",
                                                        lineNumber: 156,
                                                        columnNumber: 19
                                                    }, ("TURBOPACK compile-time value", void 0))),
                                                logRows.length === 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$hr$2f$Hrms$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$hr$2f$Hrms$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                        colSpan: "3",
                                                        style: {
                                                            ...__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$hr$2f$Hrms$2f$src$2f$styles$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["styles"].td,
                                                            textAlign: 'center',
                                                            padding: '80px',
                                                            color: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$hr$2f$Hrms$2f$src$2f$styles$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["tokens"].colors.secondary
                                                        },
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$hr$2f$Hrms$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                style: {
                                                                    opacity: 0.5,
                                                                    marginBottom: '16px'
                                                                },
                                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$hr$2f$Hrms$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                    className: "material-symbols-outlined",
                                                                    style: {
                                                                        fontSize: '48px'
                                                                    },
                                                                    children: "history"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/Documents/hr/Hrms/src/components/Attendance/index.js",
                                                                    lineNumber: 200,
                                                                    columnNumber: 25
                                                                }, ("TURBOPACK compile-time value", void 0))
                                                            }, void 0, false, {
                                                                fileName: "[project]/Documents/hr/Hrms/src/components/Attendance/index.js",
                                                                lineNumber: 199,
                                                                columnNumber: 23
                                                            }, ("TURBOPACK compile-time value", void 0)),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$hr$2f$Hrms$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                style: {
                                                                    fontWeight: '700',
                                                                    fontSize: '16px',
                                                                    color: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$hr$2f$Hrms$2f$src$2f$styles$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["tokens"].colors.primary
                                                                },
                                                                children: "No Recent Activity"
                                                            }, void 0, false, {
                                                                fileName: "[project]/Documents/hr/Hrms/src/components/Attendance/index.js",
                                                                lineNumber: 202,
                                                                columnNumber: 23
                                                            }, ("TURBOPACK compile-time value", void 0)),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$hr$2f$Hrms$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                children: "Your shift logs will appear here once you clock in."
                                                            }, void 0, false, {
                                                                fileName: "[project]/Documents/hr/Hrms/src/components/Attendance/index.js",
                                                                lineNumber: 203,
                                                                columnNumber: 23
                                                            }, ("TURBOPACK compile-time value", void 0))
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/Documents/hr/Hrms/src/components/Attendance/index.js",
                                                        lineNumber: 198,
                                                        columnNumber: 21
                                                    }, ("TURBOPACK compile-time value", void 0))
                                                }, void 0, false, {
                                                    fileName: "[project]/Documents/hr/Hrms/src/components/Attendance/index.js",
                                                    lineNumber: 197,
                                                    columnNumber: 19
                                                }, ("TURBOPACK compile-time value", void 0))
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/Documents/hr/Hrms/src/components/Attendance/index.js",
                                            lineNumber: 154,
                                            columnNumber: 15
                                        }, ("TURBOPACK compile-time value", void 0))
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Documents/hr/Hrms/src/components/Attendance/index.js",
                                    lineNumber: 146,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0))
                            }, void 0, false, {
                                fileName: "[project]/Documents/hr/Hrms/src/components/Attendance/index.js",
                                lineNumber: 145,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Documents/hr/Hrms/src/components/Attendance/index.js",
                        lineNumber: 139,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/Documents/hr/Hrms/src/components/Attendance/index.js",
                lineNumber: 70,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/Documents/hr/Hrms/src/components/Attendance/index.js",
        lineNumber: 64,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
_s(Attendance, "jmJfZGoSL2Prvbp8KaIxfahYU0A=");
_c = Attendance;
const __TURBOPACK__default__export__ = Attendance;
var _c;
__turbopack_context__.k.register(_c, "Attendance");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Documents/hr/Hrms/src/components/Leaves/index.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$hr$2f$Hrms$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/hr/Hrms/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$hr$2f$Hrms$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/hr/Hrms/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$hr$2f$Hrms$2f$src$2f$firebase$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/hr/Hrms/src/firebase.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$hr$2f$Hrms$2f$node_modules$2f$firebase$2f$firestore$2f$dist$2f$esm$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/Documents/hr/Hrms/node_modules/firebase/firestore/dist/esm/index.esm.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$hr$2f$Hrms$2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/hr/Hrms/node_modules/@firebase/firestore/dist/index.esm.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$hr$2f$Hrms$2f$src$2f$styles$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/hr/Hrms/src/styles.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature(), _s1 = __turbopack_context__.k.signature();
;
;
;
;
/* ─── Mini Calendar Component ────────────────────────────── */ const MiniCalendar = ({ selected, onChange, minDate, label })=>{
    _s();
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    const min = minDate ? new Date(minDate + 'T00:00:00') : today;
    const [viewDate, setViewDate] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$hr$2f$Hrms$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({
        "MiniCalendar.useState": ()=>{
            const base = selected ? new Date(selected + 'T00:00:00') : minDate ? new Date(minDate + 'T00:00:00') : new Date();
            return new Date(base.getFullYear(), base.getMonth(), 1);
        }
    }["MiniCalendar.useState"]);
    const [open, setOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$hr$2f$Hrms$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const ref = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$hr$2f$Hrms$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$hr$2f$Hrms$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "MiniCalendar.useEffect": ()=>{
            const handler = {
                "MiniCalendar.useEffect.handler": (e)=>{
                    if (ref.current && !ref.current.contains(e.target)) setOpen(false);
                }
            }["MiniCalendar.useEffect.handler"];
            document.addEventListener('mousedown', handler);
            return ({
                "MiniCalendar.useEffect": ()=>document.removeEventListener('mousedown', handler)
            })["MiniCalendar.useEffect"];
        }
    }["MiniCalendar.useEffect"], []);
    const year = viewDate.getFullYear();
    const month = viewDate.getMonth();
    const firstDay = new Date(year, month, 1).getDay();
    const daysInMonth = new Date(year, month + 1, 0).getDate();
    const MONTHS = [
        'January',
        'February',
        'March',
        'April',
        'May',
        'June',
        'July',
        'August',
        'September',
        'October',
        'November',
        'December'
    ];
    const DAYS = [
        'Su',
        'Mo',
        'Tu',
        'We',
        'Th',
        'Fr',
        'Sa'
    ];
    const prevMonth = ()=>setViewDate(new Date(year, month - 1, 1));
    const nextMonth = ()=>setViewDate(new Date(year, month + 1, 1));
    const selectDay = (d)=>{
        const date = new Date(year, month, d);
        if (date < min) return;
        const iso = `${year}-${String(month + 1).padStart(2, '0')}-${String(d).padStart(2, '0')}`;
        onChange(iso);
        setOpen(false);
    };
    const displayValue = selected ? new Date(selected + 'T00:00:00').toLocaleDateString(undefined, {
        month: 'short',
        day: 'numeric',
        year: 'numeric'
    }) : 'Select date';
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$hr$2f$Hrms$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        ref: ref,
        style: {
            position: 'relative'
        },
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$hr$2f$Hrms$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                style: {
                    fontSize: '12px',
                    fontWeight: '700',
                    color: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$hr$2f$Hrms$2f$src$2f$styles$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["tokens"].colors.secondary,
                    textTransform: 'uppercase',
                    letterSpacing: '0.06em',
                    display: 'block',
                    marginBottom: '8px'
                },
                children: label
            }, void 0, false, {
                fileName: "[project]/Documents/hr/Hrms/src/components/Leaves/index.js",
                lineNumber: 50,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$hr$2f$Hrms$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                type: "button",
                onClick: ()=>setOpen((o)=>!o),
                style: {
                    width: '100%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    padding: '10px 14px',
                    background: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$hr$2f$Hrms$2f$src$2f$styles$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["tokens"].colors.white,
                    border: `1px solid ${open ? __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$hr$2f$Hrms$2f$src$2f$styles$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["tokens"].colors.accent : __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$hr$2f$Hrms$2f$src$2f$styles$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["tokens"].colors.border}`,
                    borderRadius: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$hr$2f$Hrms$2f$src$2f$styles$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["tokens"].radius.md,
                    cursor: 'pointer',
                    fontSize: '14px',
                    fontWeight: selected ? '600' : '400',
                    color: selected ? __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$hr$2f$Hrms$2f$src$2f$styles$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["tokens"].colors.primary : __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$hr$2f$Hrms$2f$src$2f$styles$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["tokens"].colors.secondary,
                    transition: 'border-color 0.15s ease'
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$hr$2f$Hrms$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        style: {
                            display: 'flex',
                            alignItems: 'center',
                            gap: '8px'
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$hr$2f$Hrms$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "material-symbols-outlined",
                                style: {
                                    fontSize: '18px',
                                    color: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$hr$2f$Hrms$2f$src$2f$styles$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["tokens"].colors.accent
                                },
                                children: "calendar_today"
                            }, void 0, false, {
                                fileName: "[project]/Documents/hr/Hrms/src/components/Leaves/index.js",
                                lineNumber: 65,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0)),
                            displayValue
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Documents/hr/Hrms/src/components/Leaves/index.js",
                        lineNumber: 64,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$hr$2f$Hrms$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "material-symbols-outlined",
                        style: {
                            fontSize: '18px',
                            color: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$hr$2f$Hrms$2f$src$2f$styles$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["tokens"].colors.secondary,
                            transform: open ? 'rotate(180deg)' : 'none',
                            transition: 'transform 0.15s'
                        },
                        children: "expand_more"
                    }, void 0, false, {
                        fileName: "[project]/Documents/hr/Hrms/src/components/Leaves/index.js",
                        lineNumber: 68,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/Documents/hr/Hrms/src/components/Leaves/index.js",
                lineNumber: 51,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            open && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$hr$2f$Hrms$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    position: 'absolute',
                    top: 'calc(100% + 8px)',
                    left: 0,
                    zIndex: 100,
                    background: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$hr$2f$Hrms$2f$src$2f$styles$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["tokens"].colors.white,
                    borderRadius: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$hr$2f$Hrms$2f$src$2f$styles$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["tokens"].radius.lg,
                    boxShadow: '0 8px 32px -8px rgba(0,0,0,0.18)',
                    border: `1px solid ${__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$hr$2f$Hrms$2f$src$2f$styles$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["tokens"].colors.border}`,
                    padding: '16px',
                    width: '280px'
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$hr$2f$Hrms$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'space-between',
                            marginBottom: '12px'
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$hr$2f$Hrms$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                type: "button",
                                onClick: prevMonth,
                                style: {
                                    background: 'none',
                                    border: 'none',
                                    cursor: 'pointer',
                                    padding: '4px',
                                    borderRadius: '8px',
                                    display: 'flex',
                                    alignItems: 'center'
                                },
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$hr$2f$Hrms$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "material-symbols-outlined",
                                    style: {
                                        fontSize: '18px',
                                        color: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$hr$2f$Hrms$2f$src$2f$styles$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["tokens"].colors.secondary
                                    },
                                    children: "chevron_left"
                                }, void 0, false, {
                                    fileName: "[project]/Documents/hr/Hrms/src/components/Leaves/index.js",
                                    lineNumber: 81,
                                    columnNumber: 15
                                }, ("TURBOPACK compile-time value", void 0))
                            }, void 0, false, {
                                fileName: "[project]/Documents/hr/Hrms/src/components/Leaves/index.js",
                                lineNumber: 80,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$hr$2f$Hrms$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                style: {
                                    fontSize: '14px',
                                    fontWeight: '700',
                                    color: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$hr$2f$Hrms$2f$src$2f$styles$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["tokens"].colors.primary
                                },
                                children: [
                                    MONTHS[month],
                                    " ",
                                    year
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Documents/hr/Hrms/src/components/Leaves/index.js",
                                lineNumber: 83,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$hr$2f$Hrms$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                type: "button",
                                onClick: nextMonth,
                                style: {
                                    background: 'none',
                                    border: 'none',
                                    cursor: 'pointer',
                                    padding: '4px',
                                    borderRadius: '8px',
                                    display: 'flex',
                                    alignItems: 'center'
                                },
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$hr$2f$Hrms$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "material-symbols-outlined",
                                    style: {
                                        fontSize: '18px',
                                        color: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$hr$2f$Hrms$2f$src$2f$styles$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["tokens"].colors.secondary
                                    },
                                    children: "chevron_right"
                                }, void 0, false, {
                                    fileName: "[project]/Documents/hr/Hrms/src/components/Leaves/index.js",
                                    lineNumber: 85,
                                    columnNumber: 15
                                }, ("TURBOPACK compile-time value", void 0))
                            }, void 0, false, {
                                fileName: "[project]/Documents/hr/Hrms/src/components/Leaves/index.js",
                                lineNumber: 84,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Documents/hr/Hrms/src/components/Leaves/index.js",
                        lineNumber: 79,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$hr$2f$Hrms$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            display: 'grid',
                            gridTemplateColumns: 'repeat(7, 1fr)',
                            gap: '2px',
                            marginBottom: '8px'
                        },
                        children: DAYS.map((d)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$hr$2f$Hrms$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                style: {
                                    textAlign: 'center',
                                    fontSize: '11px',
                                    fontWeight: '700',
                                    color: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$hr$2f$Hrms$2f$src$2f$styles$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["tokens"].colors.secondary,
                                    padding: '4px 0'
                                },
                                children: d
                            }, d, false, {
                                fileName: "[project]/Documents/hr/Hrms/src/components/Leaves/index.js",
                                lineNumber: 91,
                                columnNumber: 15
                            }, ("TURBOPACK compile-time value", void 0)))
                    }, void 0, false, {
                        fileName: "[project]/Documents/hr/Hrms/src/components/Leaves/index.js",
                        lineNumber: 89,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$hr$2f$Hrms$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            display: 'grid',
                            gridTemplateColumns: 'repeat(7, 1fr)',
                            gap: '2px'
                        },
                        children: [
                            Array.from({
                                length: firstDay
                            }).map((_, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$hr$2f$Hrms$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {}, `e${i}`, false, {
                                    fileName: "[project]/Documents/hr/Hrms/src/components/Leaves/index.js",
                                    lineNumber: 96,
                                    columnNumber: 61
                                }, ("TURBOPACK compile-time value", void 0))),
                            Array.from({
                                length: daysInMonth
                            }, (_, i)=>i + 1).map((d)=>{
                                const date = new Date(year, month, d);
                                const isPast = date < min;
                                const isSelected = selected === `${year}-${String(month + 1).padStart(2, '0')}-${String(d).padStart(2, '0')}`;
                                const isToday = date.toDateString() === new Date().toDateString();
                                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$hr$2f$Hrms$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    type: "button",
                                    onClick: ()=>selectDay(d),
                                    disabled: isPast,
                                    style: {
                                        aspectRatio: '1',
                                        borderRadius: '8px',
                                        border: 'none',
                                        fontSize: '13px',
                                        fontWeight: isSelected ? '800' : isToday ? '700' : '500',
                                        cursor: isPast ? 'not-allowed' : 'pointer',
                                        background: isSelected ? __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$hr$2f$Hrms$2f$src$2f$styles$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["tokens"].colors.accent : 'transparent',
                                        color: isSelected ? '#fff' : isPast ? '#CBD5E1' : isToday ? __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$hr$2f$Hrms$2f$src$2f$styles$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["tokens"].colors.accent : __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$hr$2f$Hrms$2f$src$2f$styles$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["tokens"].colors.primary,
                                        outline: isToday && !isSelected ? `2px solid ${__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$hr$2f$Hrms$2f$src$2f$styles$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["tokens"].colors.accent}30` : 'none',
                                        transition: 'background 0.1s ease'
                                    },
                                    onMouseOver: (e)=>{
                                        if (!isPast && !isSelected) e.target.style.background = '#F0FDFA';
                                    },
                                    onMouseOut: (e)=>{
                                        if (!isSelected) e.target.style.background = 'transparent';
                                    },
                                    children: d
                                }, d, false, {
                                    fileName: "[project]/Documents/hr/Hrms/src/components/Leaves/index.js",
                                    lineNumber: 103,
                                    columnNumber: 17
                                }, ("TURBOPACK compile-time value", void 0));
                            })
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Documents/hr/Hrms/src/components/Leaves/index.js",
                        lineNumber: 95,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/Documents/hr/Hrms/src/components/Leaves/index.js",
                lineNumber: 72,
                columnNumber: 9
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/Documents/hr/Hrms/src/components/Leaves/index.js",
        lineNumber: 49,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
_s(MiniCalendar, "q/7ZzxLzJvcT1iiALTsr04+G63Q=");
_c = MiniCalendar;
/* ─── Main Leaves Component ───────────────────────────────── */ const Leaves = ({ user })=>{
    _s1();
    const [leaveRequests, setLeaveRequests] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$hr$2f$Hrms$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [loading, setLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$hr$2f$Hrms$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(true);
    const [showForm, setShowForm] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$hr$2f$Hrms$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [leaveConfig, setLeaveConfig] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$hr$2f$Hrms$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({
        sick: 10,
        casual: 12,
        paid: 15
    });
    const [newLeave, setNewLeave] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$hr$2f$Hrms$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({
        type: 'Casual',
        start: '',
        end: '',
        reason: ''
    });
    const today = new Date().toISOString().split('T')[0];
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$hr$2f$Hrms$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Leaves.useEffect": ()=>{
            const q = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$hr$2f$Hrms$2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["query"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$hr$2f$Hrms$2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["collection"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$hr$2f$Hrms$2f$src$2f$firebase$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["db"], 'leaveRequests'), (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$hr$2f$Hrms$2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["where"])('userEmail', '==', user.email));
            const unsub = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$hr$2f$Hrms$2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["onSnapshot"])(q, {
                "Leaves.useEffect.unsub": (s)=>{
                    const data = s.docs.map({
                        "Leaves.useEffect.unsub.data": (d)=>({
                                id: d.id,
                                ...d.data()
                            })
                    }["Leaves.useEffect.unsub.data"]).sort({
                        "Leaves.useEffect.unsub.data": (a, b)=>(b.timestamp?.seconds || 0) - (a.timestamp?.seconds || 0)
                    }["Leaves.useEffect.unsub.data"]);
                    setLeaveRequests(data);
                    setLoading(false);
                }
            }["Leaves.useEffect.unsub"], {
                "Leaves.useEffect.unsub": (err)=>{
                    console.error(err);
                    setLoading(false);
                }
            }["Leaves.useEffect.unsub"]);
            // Load admin leave config
            const configUnsub = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$hr$2f$Hrms$2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["onSnapshot"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$hr$2f$Hrms$2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["doc"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$hr$2f$Hrms$2f$src$2f$firebase$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["db"], 'config', 'leavePolicy'), {
                "Leaves.useEffect.configUnsub": (snap)=>{
                    if (snap.exists()) setLeaveConfig(snap.data());
                }
            }["Leaves.useEffect.configUnsub"]);
            return ({
                "Leaves.useEffect": ()=>{
                    unsub();
                    configUnsub();
                }
            })["Leaves.useEffect"];
        }
    }["Leaves.useEffect"], [
        user.email
    ]);
    const handleSubmit = async (e)=>{
        e.preventDefault();
        if (!newLeave.start || !newLeave.end) return;
        if (new Date(newLeave.end) < new Date(newLeave.start)) {
            alert('End date cannot be before start date.');
            return;
        }
        try {
            await (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$hr$2f$Hrms$2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["addDoc"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$hr$2f$Hrms$2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["collection"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$hr$2f$Hrms$2f$src$2f$firebase$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["db"], 'leaveRequests'), {
                ...newLeave,
                userEmail: user.email,
                status: 'pending',
                timestamp: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$hr$2f$Hrms$2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["serverTimestamp"])()
            });
            setShowForm(false);
            setNewLeave({
                type: 'Casual',
                start: '',
                end: '',
                reason: ''
            });
        } catch (err) {
            console.error(err);
        }
    };
    const approved = leaveRequests.filter((l)=>l.status === 'approved');
    const pending = leaveRequests.filter((l)=>l.status === 'pending');
    const leaveTypes = [
        {
            key: 'Sick',
            quota: leaveConfig.sick,
            color: '#F97316',
            bg: '#FFF7ED',
            used: approved.filter((l)=>l.type === 'Sick').length
        },
        {
            key: 'Casual',
            quota: leaveConfig.casual,
            color: '#8B5CF6',
            bg: '#F5F3FF',
            used: approved.filter((l)=>l.type === 'Casual').length
        },
        {
            key: 'Paid',
            quota: leaveConfig.paid,
            color: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$hr$2f$Hrms$2f$src$2f$styles$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["tokens"].colors.accent,
            bg: '#F0FDFA',
            used: approved.filter((l)=>l.type === 'Paid').length
        }
    ];
    const statusStyle = (status)=>({
            display: 'inline-flex',
            alignItems: 'center',
            gap: '5px',
            padding: '3px 10px',
            borderRadius: '999px',
            fontSize: '12px',
            fontWeight: '700',
            background: status === 'approved' ? '#ECFDF5' : status === 'pending' ? '#FFFBEB' : '#FEF2F2',
            color: status === 'approved' ? '#059669' : status === 'pending' ? '#D97706' : '#DC2626'
        });
    if (loading) return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$hr$2f$Hrms$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        style: {
            padding: '40px',
            color: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$hr$2f$Hrms$2f$src$2f$styles$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["tokens"].colors.secondary
        },
        children: "Loading leave history..."
    }, void 0, false, {
        fileName: "[project]/Documents/hr/Hrms/src/components/Leaves/index.js",
        lineNumber: 196,
        columnNumber: 23
    }, ("TURBOPACK compile-time value", void 0));
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$hr$2f$Hrms$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "animate-fade",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$hr$2f$Hrms$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    marginBottom: '28px'
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$hr$2f$Hrms$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$hr$2f$Hrms$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                style: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$hr$2f$Hrms$2f$src$2f$styles$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["styles"].greeting,
                                children: "Leave Management"
                            }, void 0, false, {
                                fileName: "[project]/Documents/hr/Hrms/src/components/Leaves/index.js",
                                lineNumber: 204,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$hr$2f$Hrms$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                style: {
                                    color: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$hr$2f$Hrms$2f$src$2f$styles$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["tokens"].colors.secondary,
                                    fontSize: '14px',
                                    marginTop: '4px'
                                },
                                children: "Request and track your personal time off."
                            }, void 0, false, {
                                fileName: "[project]/Documents/hr/Hrms/src/components/Leaves/index.js",
                                lineNumber: 205,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Documents/hr/Hrms/src/components/Leaves/index.js",
                        lineNumber: 203,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$hr$2f$Hrms$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: ()=>setShowForm(!showForm),
                        style: showForm ? {
                            ...__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$hr$2f$Hrms$2f$src$2f$styles$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["styles"].button.outline,
                            borderColor: '#FEE2E2',
                            color: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$hr$2f$Hrms$2f$src$2f$styles$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["tokens"].colors.error
                        } : __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$hr$2f$Hrms$2f$src$2f$styles$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["styles"].button.primary,
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$hr$2f$Hrms$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "material-symbols-outlined",
                                style: {
                                    fontSize: '18px'
                                },
                                children: showForm ? 'close' : 'add'
                            }, void 0, false, {
                                fileName: "[project]/Documents/hr/Hrms/src/components/Leaves/index.js",
                                lineNumber: 208,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0)),
                            showForm ? 'Discard' : 'New Request'
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Documents/hr/Hrms/src/components/Leaves/index.js",
                        lineNumber: 207,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/Documents/hr/Hrms/src/components/Leaves/index.js",
                lineNumber: 202,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$hr$2f$Hrms$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    display: 'grid',
                    gridTemplateColumns: 'repeat(3, 1fr)',
                    gap: '16px',
                    marginBottom: '24px'
                },
                children: leaveTypes.map((lt)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$hr$2f$Hrms$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            ...__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$hr$2f$Hrms$2f$src$2f$styles$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["styles"].card,
                            padding: '20px 24px',
                            borderLeft: `3px solid ${lt.color}`
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$hr$2f$Hrms$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                style: {
                                    fontSize: '11px',
                                    fontWeight: '700',
                                    color: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$hr$2f$Hrms$2f$src$2f$styles$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["tokens"].colors.secondary,
                                    textTransform: 'uppercase',
                                    letterSpacing: '0.06em',
                                    marginBottom: '6px'
                                },
                                children: [
                                    lt.key,
                                    " Leave"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Documents/hr/Hrms/src/components/Leaves/index.js",
                                lineNumber: 217,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$hr$2f$Hrms$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                style: {
                                    fontSize: '24px',
                                    fontWeight: '800',
                                    color: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$hr$2f$Hrms$2f$src$2f$styles$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["tokens"].colors.primary,
                                    letterSpacing: '-0.02em'
                                },
                                children: [
                                    lt.quota - lt.used,
                                    " ",
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$hr$2f$Hrms$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        style: {
                                            fontSize: '14px',
                                            fontWeight: '500',
                                            color: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$hr$2f$Hrms$2f$src$2f$styles$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["tokens"].colors.secondary
                                        },
                                        children: [
                                            "/ ",
                                            lt.quota,
                                            " left"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Documents/hr/Hrms/src/components/Leaves/index.js",
                                        lineNumber: 218,
                                        columnNumber: 143
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Documents/hr/Hrms/src/components/Leaves/index.js",
                                lineNumber: 218,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$hr$2f$Hrms$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                style: {
                                    height: '4px',
                                    background: '#F1F5F9',
                                    borderRadius: '999px',
                                    marginTop: '12px',
                                    overflow: 'hidden'
                                },
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$hr$2f$Hrms$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    style: {
                                        height: '100%',
                                        width: `${Math.min(lt.used / lt.quota * 100, 100)}%`,
                                        background: lt.color,
                                        borderRadius: '999px',
                                        transition: 'width 0.4s ease'
                                    }
                                }, void 0, false, {
                                    fileName: "[project]/Documents/hr/Hrms/src/components/Leaves/index.js",
                                    lineNumber: 221,
                                    columnNumber: 15
                                }, ("TURBOPACK compile-time value", void 0))
                            }, void 0, false, {
                                fileName: "[project]/Documents/hr/Hrms/src/components/Leaves/index.js",
                                lineNumber: 220,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, lt.key, true, {
                        fileName: "[project]/Documents/hr/Hrms/src/components/Leaves/index.js",
                        lineNumber: 216,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0)))
            }, void 0, false, {
                fileName: "[project]/Documents/hr/Hrms/src/components/Leaves/index.js",
                lineNumber: 214,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            showForm && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$hr$2f$Hrms$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    ...__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$hr$2f$Hrms$2f$src$2f$styles$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["styles"].card,
                    padding: '28px 32px',
                    marginBottom: '24px',
                    border: `1px solid ${__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$hr$2f$Hrms$2f$src$2f$styles$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["tokens"].colors.accent}30`
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$hr$2f$Hrms$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                        style: {
                            fontSize: '16px',
                            fontWeight: '800',
                            color: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$hr$2f$Hrms$2f$src$2f$styles$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["tokens"].colors.primary,
                            marginBottom: '24px'
                        },
                        children: "New Leave Application"
                    }, void 0, false, {
                        fileName: "[project]/Documents/hr/Hrms/src/components/Leaves/index.js",
                        lineNumber: 230,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$hr$2f$Hrms$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
                        onSubmit: handleSubmit,
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$hr$2f$Hrms$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                style: {
                                    marginBottom: '20px'
                                },
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$hr$2f$Hrms$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                        style: {
                                            fontSize: '12px',
                                            fontWeight: '700',
                                            color: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$hr$2f$Hrms$2f$src$2f$styles$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["tokens"].colors.secondary,
                                            textTransform: 'uppercase',
                                            letterSpacing: '0.06em',
                                            display: 'block',
                                            marginBottom: '8px'
                                        },
                                        children: "Leave Type"
                                    }, void 0, false, {
                                        fileName: "[project]/Documents/hr/Hrms/src/components/Leaves/index.js",
                                        lineNumber: 234,
                                        columnNumber: 15
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$hr$2f$Hrms$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        style: {
                                            display: 'flex',
                                            gap: '10px',
                                            flexWrap: 'wrap'
                                        },
                                        children: leaveTypes.map((lt)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$hr$2f$Hrms$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                type: "button",
                                                onClick: ()=>setNewLeave({
                                                        ...newLeave,
                                                        type: lt.key
                                                    }),
                                                style: {
                                                    padding: '8px 18px',
                                                    borderRadius: '999px',
                                                    fontSize: '13px',
                                                    fontWeight: '700',
                                                    cursor: 'pointer',
                                                    border: `1.5px solid ${newLeave.type === lt.key ? lt.color : __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$hr$2f$Hrms$2f$src$2f$styles$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["tokens"].colors.border}`,
                                                    background: newLeave.type === lt.key ? lt.bg : __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$hr$2f$Hrms$2f$src$2f$styles$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["tokens"].colors.white,
                                                    color: newLeave.type === lt.key ? lt.color : __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$hr$2f$Hrms$2f$src$2f$styles$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["tokens"].colors.secondary,
                                                    transition: 'all 0.15s'
                                                },
                                                children: lt.key
                                            }, lt.key, false, {
                                                fileName: "[project]/Documents/hr/Hrms/src/components/Leaves/index.js",
                                                lineNumber: 237,
                                                columnNumber: 19
                                            }, ("TURBOPACK compile-time value", void 0)))
                                    }, void 0, false, {
                                        fileName: "[project]/Documents/hr/Hrms/src/components/Leaves/index.js",
                                        lineNumber: 235,
                                        columnNumber: 15
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Documents/hr/Hrms/src/components/Leaves/index.js",
                                lineNumber: 233,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$hr$2f$Hrms$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                style: {
                                    display: 'grid',
                                    gridTemplateColumns: '1fr 1fr',
                                    gap: '20px',
                                    marginBottom: '20px'
                                },
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$hr$2f$Hrms$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(MiniCalendar, {
                                        label: "Start Date",
                                        selected: newLeave.start,
                                        minDate: today,
                                        onChange: (date)=>setNewLeave({
                                                ...newLeave,
                                                start: date,
                                                end: newLeave.end && newLeave.end < date ? '' : newLeave.end
                                            })
                                    }, void 0, false, {
                                        fileName: "[project]/Documents/hr/Hrms/src/components/Leaves/index.js",
                                        lineNumber: 256,
                                        columnNumber: 15
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$hr$2f$Hrms$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(MiniCalendar, {
                                        label: "End Date",
                                        selected: newLeave.end,
                                        minDate: newLeave.start || today,
                                        onChange: (date)=>setNewLeave({
                                                ...newLeave,
                                                end: date
                                            })
                                    }, void 0, false, {
                                        fileName: "[project]/Documents/hr/Hrms/src/components/Leaves/index.js",
                                        lineNumber: 262,
                                        columnNumber: 15
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Documents/hr/Hrms/src/components/Leaves/index.js",
                                lineNumber: 255,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$hr$2f$Hrms$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                style: {
                                    marginBottom: '24px'
                                },
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$hr$2f$Hrms$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                        style: {
                                            fontSize: '12px',
                                            fontWeight: '700',
                                            color: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$hr$2f$Hrms$2f$src$2f$styles$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["tokens"].colors.secondary,
                                            textTransform: 'uppercase',
                                            letterSpacing: '0.06em',
                                            display: 'block',
                                            marginBottom: '8px'
                                        },
                                        children: "Reason"
                                    }, void 0, false, {
                                        fileName: "[project]/Documents/hr/Hrms/src/components/Leaves/index.js",
                                        lineNumber: 272,
                                        columnNumber: 15
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$hr$2f$Hrms$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("textarea", {
                                        style: {
                                            ...__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$hr$2f$Hrms$2f$src$2f$styles$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["styles"].input,
                                            minHeight: '88px',
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
                                        fileName: "[project]/Documents/hr/Hrms/src/components/Leaves/index.js",
                                        lineNumber: 273,
                                        columnNumber: 15
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Documents/hr/Hrms/src/components/Leaves/index.js",
                                lineNumber: 271,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$hr$2f$Hrms$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                type: "submit",
                                disabled: !newLeave.start || !newLeave.end,
                                style: {
                                    ...__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$hr$2f$Hrms$2f$src$2f$styles$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["styles"].button.primary,
                                    width: '100%',
                                    justifyContent: 'center',
                                    padding: '13px',
                                    opacity: !newLeave.start || !newLeave.end ? 0.5 : 1
                                },
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$hr$2f$Hrms$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "material-symbols-outlined",
                                        style: {
                                            fontSize: '18px'
                                        },
                                        children: "send"
                                    }, void 0, false, {
                                        fileName: "[project]/Documents/hr/Hrms/src/components/Leaves/index.js",
                                        lineNumber: 291,
                                        columnNumber: 15
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    "Submit Request"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Documents/hr/Hrms/src/components/Leaves/index.js",
                                lineNumber: 282,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Documents/hr/Hrms/src/components/Leaves/index.js",
                        lineNumber: 231,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/Documents/hr/Hrms/src/components/Leaves/index.js",
                lineNumber: 229,
                columnNumber: 9
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$hr$2f$Hrms$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$hr$2f$Hrms$2f$src$2f$styles$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["styles"].card,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$hr$2f$Hrms$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'space-between',
                            marginBottom: '20px'
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$hr$2f$Hrms$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                style: {
                                    fontSize: '16px',
                                    fontWeight: '800',
                                    color: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$hr$2f$Hrms$2f$src$2f$styles$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["tokens"].colors.primary
                                },
                                children: "Request History"
                            }, void 0, false, {
                                fileName: "[project]/Documents/hr/Hrms/src/components/Leaves/index.js",
                                lineNumber: 301,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0)),
                            pending.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$hr$2f$Hrms$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                style: {
                                    fontSize: '12px',
                                    fontWeight: '700',
                                    background: '#FFFBEB',
                                    color: '#D97706',
                                    padding: '4px 12px',
                                    borderRadius: '999px'
                                },
                                children: [
                                    pending.length,
                                    " pending"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Documents/hr/Hrms/src/components/Leaves/index.js",
                                lineNumber: 303,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Documents/hr/Hrms/src/components/Leaves/index.js",
                        lineNumber: 300,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    leaveRequests.length === 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$hr$2f$Hrms$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            padding: '48px',
                            textAlign: 'center'
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$hr$2f$Hrms$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "material-symbols-outlined",
                                style: {
                                    fontSize: '48px',
                                    color: '#CBD5E1',
                                    display: 'block',
                                    marginBottom: '12px'
                                },
                                children: "event_busy"
                            }, void 0, false, {
                                fileName: "[project]/Documents/hr/Hrms/src/components/Leaves/index.js",
                                lineNumber: 311,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$hr$2f$Hrms$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                style: {
                                    fontSize: '14px',
                                    color: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$hr$2f$Hrms$2f$src$2f$styles$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["tokens"].colors.secondary
                                },
                                children: "No leave requests yet."
                            }, void 0, false, {
                                fileName: "[project]/Documents/hr/Hrms/src/components/Leaves/index.js",
                                lineNumber: 312,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Documents/hr/Hrms/src/components/Leaves/index.js",
                        lineNumber: 310,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0)) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$hr$2f$Hrms$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("table", {
                        style: {
                            width: '100%',
                            borderCollapse: 'collapse'
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$hr$2f$Hrms$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("thead", {
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$hr$2f$Hrms$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$hr$2f$Hrms$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                            style: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$hr$2f$Hrms$2f$src$2f$styles$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["styles"].th,
                                            children: "Type"
                                        }, void 0, false, {
                                            fileName: "[project]/Documents/hr/Hrms/src/components/Leaves/index.js",
                                            lineNumber: 318,
                                            columnNumber: 17
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$hr$2f$Hrms$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                            style: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$hr$2f$Hrms$2f$src$2f$styles$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["styles"].th,
                                            children: "Period"
                                        }, void 0, false, {
                                            fileName: "[project]/Documents/hr/Hrms/src/components/Leaves/index.js",
                                            lineNumber: 319,
                                            columnNumber: 17
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$hr$2f$Hrms$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                            style: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$hr$2f$Hrms$2f$src$2f$styles$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["styles"].th,
                                            children: "Duration"
                                        }, void 0, false, {
                                            fileName: "[project]/Documents/hr/Hrms/src/components/Leaves/index.js",
                                            lineNumber: 320,
                                            columnNumber: 17
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$hr$2f$Hrms$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                            style: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$hr$2f$Hrms$2f$src$2f$styles$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["styles"].th,
                                            children: "Status / Reason"
                                        }, void 0, false, {
                                            fileName: "[project]/Documents/hr/Hrms/src/components/Leaves/index.js",
                                            lineNumber: 321,
                                            columnNumber: 17
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$hr$2f$Hrms$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                            style: {
                                                ...__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$hr$2f$Hrms$2f$src$2f$styles$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["styles"].th,
                                                textAlign: 'right'
                                            },
                                            children: "Applied"
                                        }, void 0, false, {
                                            fileName: "[project]/Documents/hr/Hrms/src/components/Leaves/index.js",
                                            lineNumber: 322,
                                            columnNumber: 17
                                        }, ("TURBOPACK compile-time value", void 0))
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Documents/hr/Hrms/src/components/Leaves/index.js",
                                    lineNumber: 317,
                                    columnNumber: 15
                                }, ("TURBOPACK compile-time value", void 0))
                            }, void 0, false, {
                                fileName: "[project]/Documents/hr/Hrms/src/components/Leaves/index.js",
                                lineNumber: 316,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$hr$2f$Hrms$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tbody", {
                                children: leaveRequests.map((item)=>{
                                    const start = new Date(item.start + 'T00:00:00');
                                    const end = new Date(item.end + 'T00:00:00');
                                    const days = Math.round((end - start) / (1000 * 60 * 60 * 24)) + 1;
                                    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$hr$2f$Hrms$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$hr$2f$Hrms$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                style: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$hr$2f$Hrms$2f$src$2f$styles$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["styles"].td,
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$hr$2f$Hrms$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    style: {
                                                        fontSize: '14px',
                                                        fontWeight: '700',
                                                        color: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$hr$2f$Hrms$2f$src$2f$styles$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["tokens"].colors.primary
                                                    },
                                                    children: item.type
                                                }, void 0, false, {
                                                    fileName: "[project]/Documents/hr/Hrms/src/components/Leaves/index.js",
                                                    lineNumber: 333,
                                                    columnNumber: 23
                                                }, ("TURBOPACK compile-time value", void 0))
                                            }, void 0, false, {
                                                fileName: "[project]/Documents/hr/Hrms/src/components/Leaves/index.js",
                                                lineNumber: 332,
                                                columnNumber: 21
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$hr$2f$Hrms$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                style: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$hr$2f$Hrms$2f$src$2f$styles$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["styles"].td,
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$hr$2f$Hrms$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    style: {
                                                        fontSize: '13px',
                                                        color: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$hr$2f$Hrms$2f$src$2f$styles$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["tokens"].colors.secondary
                                                    },
                                                    children: [
                                                        start.toLocaleDateString(undefined, {
                                                            month: 'short',
                                                            day: 'numeric'
                                                        }),
                                                        " → ",
                                                        end.toLocaleDateString(undefined, {
                                                            month: 'short',
                                                            day: 'numeric',
                                                            year: 'numeric'
                                                        })
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/Documents/hr/Hrms/src/components/Leaves/index.js",
                                                    lineNumber: 336,
                                                    columnNumber: 23
                                                }, ("TURBOPACK compile-time value", void 0))
                                            }, void 0, false, {
                                                fileName: "[project]/Documents/hr/Hrms/src/components/Leaves/index.js",
                                                lineNumber: 335,
                                                columnNumber: 21
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$hr$2f$Hrms$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                style: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$hr$2f$Hrms$2f$src$2f$styles$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["styles"].td,
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$hr$2f$Hrms$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    style: {
                                                        fontSize: '13px',
                                                        fontWeight: '600',
                                                        color: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$hr$2f$Hrms$2f$src$2f$styles$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["tokens"].colors.primary
                                                    },
                                                    children: [
                                                        days,
                                                        "d"
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/Documents/hr/Hrms/src/components/Leaves/index.js",
                                                    lineNumber: 341,
                                                    columnNumber: 23
                                                }, ("TURBOPACK compile-time value", void 0))
                                            }, void 0, false, {
                                                fileName: "[project]/Documents/hr/Hrms/src/components/Leaves/index.js",
                                                lineNumber: 340,
                                                columnNumber: 21
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$hr$2f$Hrms$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                style: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$hr$2f$Hrms$2f$src$2f$styles$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["styles"].td,
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$hr$2f$Hrms$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$hr$2f$Hrms$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            style: statusStyle(item.status),
                                                            children: item.status
                                                        }, void 0, false, {
                                                            fileName: "[project]/Documents/hr/Hrms/src/components/Leaves/index.js",
                                                            lineNumber: 345,
                                                            columnNumber: 25
                                                        }, ("TURBOPACK compile-time value", void 0)),
                                                        item.status === 'rejected' && item.rejectionReason && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$hr$2f$Hrms$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            style: {
                                                                fontSize: '12px',
                                                                color: '#DC2626',
                                                                marginTop: '6px',
                                                                fontStyle: 'italic',
                                                                maxWidth: '200px',
                                                                lineHeight: '1.4'
                                                            },
                                                            children: [
                                                                "💬 ",
                                                                item.rejectionReason
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/Documents/hr/Hrms/src/components/Leaves/index.js",
                                                            lineNumber: 347,
                                                            columnNumber: 27
                                                        }, ("TURBOPACK compile-time value", void 0))
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/Documents/hr/Hrms/src/components/Leaves/index.js",
                                                    lineNumber: 344,
                                                    columnNumber: 23
                                                }, ("TURBOPACK compile-time value", void 0))
                                            }, void 0, false, {
                                                fileName: "[project]/Documents/hr/Hrms/src/components/Leaves/index.js",
                                                lineNumber: 343,
                                                columnNumber: 21
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$hr$2f$Hrms$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                style: {
                                                    ...__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$hr$2f$Hrms$2f$src$2f$styles$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["styles"].td,
                                                    textAlign: 'right',
                                                    fontSize: '12px',
                                                    color: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$hr$2f$Hrms$2f$src$2f$styles$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["tokens"].colors.secondary
                                                },
                                                children: item.timestamp?.toDate().toLocaleDateString(undefined, {
                                                    month: 'short',
                                                    day: 'numeric',
                                                    year: 'numeric'
                                                }) || '—'
                                            }, void 0, false, {
                                                fileName: "[project]/Documents/hr/Hrms/src/components/Leaves/index.js",
                                                lineNumber: 353,
                                                columnNumber: 21
                                            }, ("TURBOPACK compile-time value", void 0))
                                        ]
                                    }, item.id, true, {
                                        fileName: "[project]/Documents/hr/Hrms/src/components/Leaves/index.js",
                                        lineNumber: 331,
                                        columnNumber: 19
                                    }, ("TURBOPACK compile-time value", void 0));
                                })
                            }, void 0, false, {
                                fileName: "[project]/Documents/hr/Hrms/src/components/Leaves/index.js",
                                lineNumber: 325,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Documents/hr/Hrms/src/components/Leaves/index.js",
                        lineNumber: 315,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/Documents/hr/Hrms/src/components/Leaves/index.js",
                lineNumber: 299,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/Documents/hr/Hrms/src/components/Leaves/index.js",
        lineNumber: 199,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
_s1(Leaves, "NU8euhVGy6iLE4YXPr9A06egp4w=");
_c1 = Leaves;
const __TURBOPACK__default__export__ = Leaves;
var _c, _c1;
__turbopack_context__.k.register(_c, "MiniCalendar");
__turbopack_context__.k.register(_c1, "Leaves");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Documents/hr/Hrms/src/components/EmployeeArea/index.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$hr$2f$Hrms$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/hr/Hrms/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$hr$2f$Hrms$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/hr/Hrms/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$hr$2f$Hrms$2f$node_modules$2f$firebase$2f$auth$2f$dist$2f$esm$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/Documents/hr/Hrms/node_modules/firebase/auth/dist/esm/index.esm.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$hr$2f$Hrms$2f$node_modules$2f40$firebase$2f$auth$2f$dist$2f$esm$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/hr/Hrms/node_modules/@firebase/auth/dist/esm/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$hr$2f$Hrms$2f$src$2f$firebase$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/hr/Hrms/src/firebase.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$hr$2f$Hrms$2f$node_modules$2f$firebase$2f$firestore$2f$dist$2f$esm$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/Documents/hr/Hrms/node_modules/firebase/firestore/dist/esm/index.esm.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$hr$2f$Hrms$2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/hr/Hrms/node_modules/@firebase/firestore/dist/index.esm.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$hr$2f$Hrms$2f$src$2f$context$2f$AuthContext$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/hr/Hrms/src/context/AuthContext.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$hr$2f$Hrms$2f$src$2f$context$2f$RBACContext$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/hr/Hrms/src/context/RBACContext.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$hr$2f$Hrms$2f$src$2f$context$2f$ThemeContext$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/hr/Hrms/src/context/ThemeContext.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$hr$2f$Hrms$2f$src$2f$styles$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/hr/Hrms/src/styles.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$hr$2f$Hrms$2f$src$2f$components$2f$Dashboard$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/hr/Hrms/src/components/Dashboard/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$hr$2f$Hrms$2f$src$2f$components$2f$Attendance$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/hr/Hrms/src/components/Attendance/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$hr$2f$Hrms$2f$src$2f$components$2f$Leaves$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/hr/Hrms/src/components/Leaves/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$hr$2f$Hrms$2f$src$2f$components$2f$Profile$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/hr/Hrms/src/components/Profile/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$hr$2f$Hrms$2f$src$2f$components$2f$AdminPanel$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/hr/Hrms/src/components/AdminPanel/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$hr$2f$Hrms$2f$src$2f$components$2f$Timesheet$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/hr/Hrms/src/components/Timesheet/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$hr$2f$Hrms$2f$src$2f$components$2f$Payroll$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/hr/Hrms/src/components/Payroll/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$hr$2f$Hrms$2f$src$2f$components$2f$Notifications$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/hr/Hrms/src/components/Notifications/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature(), _s1 = __turbopack_context__.k.signature();
'use client';
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
;
;
/* ─── Employee Sidebar ───────────────────────────── */ const EmployeeSidebar = ({ activeTab, setActiveTab, user })=>{
    _s();
    const { theme, toggleTheme } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$hr$2f$Hrms$2f$src$2f$context$2f$ThemeContext$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTheme"])();
    const mySpace = [
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
            id: 'timesheet',
            label: 'My Timesheet',
            icon: 'assignment'
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
    const finance = [
        {
            id: 'payslips',
            label: 'My Payslips',
            icon: 'payments'
        }
    ];
    const company = [
        {
            id: 'employee_policies',
            label: 'Policies & Holidays',
            icon: 'gavel'
        }
    ];
    const NavItem = ({ item })=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$hr$2f$Hrms$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            style: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$hr$2f$Hrms$2f$src$2f$styles$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["styles"].menuItem(activeTab === item.id),
            onClick: ()=>setActiveTab(item.id),
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$hr$2f$Hrms$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    className: "material-symbols-outlined",
                    style: {
                        fontSize: '20px',
                        color: activeTab === item.id ? __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$hr$2f$Hrms$2f$src$2f$styles$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["tokens"].colors.accent : __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$hr$2f$Hrms$2f$src$2f$styles$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["tokens"].colors.secondary,
                        opacity: activeTab === item.id ? 1 : 0.7
                    },
                    children: item.icon
                }, void 0, false, {
                    fileName: "[project]/Documents/hr/Hrms/src/components/EmployeeArea/index.js",
                    lineNumber: 38,
                    columnNumber: 13
                }, ("TURBOPACK compile-time value", void 0)),
                item.label
            ]
        }, void 0, true, {
            fileName: "[project]/Documents/hr/Hrms/src/components/EmployeeArea/index.js",
            lineNumber: 37,
            columnNumber: 9
        }, ("TURBOPACK compile-time value", void 0));
    const SectionLabel = ({ label })=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$hr$2f$Hrms$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            style: {
                color: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$hr$2f$Hrms$2f$src$2f$styles$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["tokens"].colors.secondary,
                fontSize: '11px',
                fontWeight: '800',
                textTransform: 'uppercase',
                letterSpacing: '0.1em',
                marginBottom: '12px',
                paddingLeft: '24px',
                opacity: 0.8
            },
            children: label
        }, void 0, false, {
            fileName: "[project]/Documents/hr/Hrms/src/components/EmployeeArea/index.js",
            lineNumber: 44,
            columnNumber: 9
        }, ("TURBOPACK compile-time value", void 0));
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$hr$2f$Hrms$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        style: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$hr$2f$Hrms$2f$src$2f$styles$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["styles"].sidebar,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$hr$2f$Hrms$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    ...__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$hr$2f$Hrms$2f$src$2f$styles$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["styles"].logo,
                    padding: '0 28px',
                    marginBottom: '40px'
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$hr$2f$Hrms$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            width: '32px',
                            height: '32px',
                            background: `linear-gradient(135deg, ${__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$hr$2f$Hrms$2f$src$2f$styles$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["tokens"].colors.accent} 0%, #065F46 100%)`,
                            borderRadius: '10px',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            boxShadow: '0 8px 16px -4px rgba(13,148,136,0.4)'
                        },
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$hr$2f$Hrms$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "material-symbols-outlined",
                            style: {
                                color: '#FFF',
                                fontSize: '18px'
                            },
                            children: "bolt"
                        }, void 0, false, {
                            fileName: "[project]/Documents/hr/Hrms/src/components/EmployeeArea/index.js",
                            lineNumber: 52,
                            columnNumber: 21
                        }, ("TURBOPACK compile-time value", void 0))
                    }, void 0, false, {
                        fileName: "[project]/Documents/hr/Hrms/src/components/EmployeeArea/index.js",
                        lineNumber: 51,
                        columnNumber: 17
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$hr$2f$Hrms$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        style: {
                            fontWeight: '800',
                            letterSpacing: '-0.03em',
                            fontSize: '20px'
                        },
                        children: "Cyberseal HRMS"
                    }, void 0, false, {
                        fileName: "[project]/Documents/hr/Hrms/src/components/EmployeeArea/index.js",
                        lineNumber: 54,
                        columnNumber: 17
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/Documents/hr/Hrms/src/components/EmployeeArea/index.js",
                lineNumber: 50,
                columnNumber: 13
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$hr$2f$Hrms$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    flex: 1,
                    overflowY: 'auto',
                    padding: '0 8px'
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$hr$2f$Hrms$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(SectionLabel, {
                        label: "My Space"
                    }, void 0, false, {
                        fileName: "[project]/Documents/hr/Hrms/src/components/EmployeeArea/index.js",
                        lineNumber: 58,
                        columnNumber: 17
                    }, ("TURBOPACK compile-time value", void 0)),
                    mySpace.map((item)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$hr$2f$Hrms$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(NavItem, {
                            item: item
                        }, item.id, false, {
                            fileName: "[project]/Documents/hr/Hrms/src/components/EmployeeArea/index.js",
                            lineNumber: 59,
                            columnNumber: 38
                        }, ("TURBOPACK compile-time value", void 0))),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$hr$2f$Hrms$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            marginTop: '28px'
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$hr$2f$Hrms$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(SectionLabel, {
                                label: "Finance"
                            }, void 0, false, {
                                fileName: "[project]/Documents/hr/Hrms/src/components/EmployeeArea/index.js",
                                lineNumber: 62,
                                columnNumber: 21
                            }, ("TURBOPACK compile-time value", void 0)),
                            finance.map((item)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$hr$2f$Hrms$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(NavItem, {
                                    item: item
                                }, item.id, false, {
                                    fileName: "[project]/Documents/hr/Hrms/src/components/EmployeeArea/index.js",
                                    lineNumber: 63,
                                    columnNumber: 42
                                }, ("TURBOPACK compile-time value", void 0)))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Documents/hr/Hrms/src/components/EmployeeArea/index.js",
                        lineNumber: 61,
                        columnNumber: 17
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$hr$2f$Hrms$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            marginTop: '28px'
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$hr$2f$Hrms$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(SectionLabel, {
                                label: "Company"
                            }, void 0, false, {
                                fileName: "[project]/Documents/hr/Hrms/src/components/EmployeeArea/index.js",
                                lineNumber: 67,
                                columnNumber: 21
                            }, ("TURBOPACK compile-time value", void 0)),
                            company.map((item)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$hr$2f$Hrms$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(NavItem, {
                                    item: item
                                }, item.id, false, {
                                    fileName: "[project]/Documents/hr/Hrms/src/components/EmployeeArea/index.js",
                                    lineNumber: 68,
                                    columnNumber: 42
                                }, ("TURBOPACK compile-time value", void 0)))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Documents/hr/Hrms/src/components/EmployeeArea/index.js",
                        lineNumber: 66,
                        columnNumber: 17
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/Documents/hr/Hrms/src/components/EmployeeArea/index.js",
                lineNumber: 57,
                columnNumber: 13
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$hr$2f$Hrms$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    padding: '24px 16px',
                    borderTop: '1px solid var(--color-border)',
                    marginTop: 'auto'
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$hr$2f$Hrms$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: toggleTheme,
                        style: {
                            ...__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$hr$2f$Hrms$2f$src$2f$styles$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["styles"].button.outline,
                            width: '100%',
                            justifyContent: 'center',
                            marginBottom: '12px',
                            padding: '10px',
                            fontSize: '13px',
                            fontWeight: '700'
                        },
                        title: theme === 'dark' ? 'Switch to Light Mode' : 'Switch to Dark Mode',
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$hr$2f$Hrms$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "material-symbols-outlined",
                                style: {
                                    fontSize: '18px'
                                },
                                children: theme === 'dark' ? 'light_mode' : 'dark_mode'
                            }, void 0, false, {
                                fileName: "[project]/Documents/hr/Hrms/src/components/EmployeeArea/index.js",
                                lineNumber: 77,
                                columnNumber: 21
                            }, ("TURBOPACK compile-time value", void 0)),
                            theme === 'dark' ? 'Light Mode' : 'Dark Mode'
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Documents/hr/Hrms/src/components/EmployeeArea/index.js",
                        lineNumber: 74,
                        columnNumber: 17
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$hr$2f$Hrms$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            display: 'flex',
                            alignItems: 'center',
                            gap: '12px',
                            padding: '12px',
                            transition: 'all 0.2s ease'
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$hr$2f$Hrms$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                style: {
                                    width: '40px',
                                    height: '40px',
                                    background: 'var(--color-accent)',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    fontWeight: '700',
                                    color: '#FFFFFF',
                                    fontSize: '14px',
                                    borderRadius: '12px'
                                },
                                children: user?.email?.charAt(0)?.toUpperCase() || 'E'
                            }, void 0, false, {
                                fileName: "[project]/Documents/hr/Hrms/src/components/EmployeeArea/index.js",
                                lineNumber: 81,
                                columnNumber: 21
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$hr$2f$Hrms$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                style: {
                                    flex: 1,
                                    minWidth: 0
                                },
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$hr$2f$Hrms$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        style: {
                                            fontSize: '13px',
                                            fontWeight: '700',
                                            color: 'var(--color-primary)',
                                            whiteSpace: 'nowrap',
                                            overflow: 'hidden',
                                            textOverflow: 'ellipsis'
                                        },
                                        children: user?.email?.split('@')[0]
                                    }, void 0, false, {
                                        fileName: "[project]/Documents/hr/Hrms/src/components/EmployeeArea/index.js",
                                        lineNumber: 85,
                                        columnNumber: 25
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$hr$2f$Hrms$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        style: {
                                            fontSize: '11px',
                                            color: 'var(--color-secondary)'
                                        },
                                        children: user?.email
                                    }, void 0, false, {
                                        fileName: "[project]/Documents/hr/Hrms/src/components/EmployeeArea/index.js",
                                        lineNumber: 86,
                                        columnNumber: 25
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Documents/hr/Hrms/src/components/EmployeeArea/index.js",
                                lineNumber: 84,
                                columnNumber: 21
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Documents/hr/Hrms/src/components/EmployeeArea/index.js",
                        lineNumber: 80,
                        columnNumber: 17
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/Documents/hr/Hrms/src/components/EmployeeArea/index.js",
                lineNumber: 73,
                columnNumber: 13
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/Documents/hr/Hrms/src/components/EmployeeArea/index.js",
        lineNumber: 48,
        columnNumber: 9
    }, ("TURBOPACK compile-time value", void 0));
};
_s(EmployeeSidebar, "Q4eAjrIZ0CuRuhycs6byifK2KBk=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$hr$2f$Hrms$2f$src$2f$context$2f$ThemeContext$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTheme"]
    ];
});
_c = EmployeeSidebar;
/* ─── Employee Area (Main Layout) ────────────────── */ const EmployeeArea = ({ user })=>{
    _s1();
    const { logout } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$hr$2f$Hrms$2f$src$2f$context$2f$AuthContext$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAuth"])();
    const [activeTab, setActiveTab] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$hr$2f$Hrms$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('dashboard');
    const [needsProfileSetup, setNeedsProfileSetup] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$hr$2f$Hrms$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [profileData, setProfileData] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$hr$2f$Hrms$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({});
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$hr$2f$Hrms$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "EmployeeArea.useEffect": ()=>{
            const check = {
                "EmployeeArea.useEffect.check": async ()=>{
                    if (user.profileComplete === false) {
                        setNeedsProfileSetup(true);
                        setProfileData(user);
                        return;
                    }
                    try {
                        const snap = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$hr$2f$Hrms$2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getDoc"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$hr$2f$Hrms$2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["doc"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$hr$2f$Hrms$2f$src$2f$firebase$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["db"], 'employees', user.uid));
                        if (snap.exists() && snap.data().profileComplete === false) {
                            setNeedsProfileSetup(true);
                            setProfileData({
                                ...snap.data(),
                                uid: user.uid
                            });
                        }
                    } catch (_) {}
                }
            }["EmployeeArea.useEffect.check"];
            check();
        }
    }["EmployeeArea.useEffect"], [
        user
    ]);
    const handleProfileComplete = async (e)=>{
        e.preventDefault();
        try {
            const { uid, ...dataToSave } = profileData;
            await (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$hr$2f$Hrms$2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["updateDoc"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$hr$2f$Hrms$2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["doc"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$hr$2f$Hrms$2f$src$2f$firebase$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["db"], 'employees', uid || user.uid), {
                ...dataToSave,
                profileComplete: true
            });
            setNeedsProfileSetup(false);
        } catch (err) {
            console.error(err);
        }
    };
    const handleLogout = async ()=>{
        try {
            if (user.uid !== 'hardcoded-admin') await (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$hr$2f$Hrms$2f$node_modules$2f40$firebase$2f$auth$2f$dist$2f$esm$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["signOut"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$hr$2f$Hrms$2f$src$2f$firebase$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["auth"]);
        } catch (_) {}
        logout();
    };
    if (needsProfileSetup) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$hr$2f$Hrms$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            style: {
                ...__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$hr$2f$Hrms$2f$src$2f$styles$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["styles"].app,
                background: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$hr$2f$Hrms$2f$src$2f$styles$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["tokens"].colors.background,
                alignItems: 'center',
                justifyContent: 'center',
                padding: '24px',
                backgroundImage: 'radial-gradient(circle at 10% 10%, #CCFBF1 0%, transparent 30%)'
            },
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$hr$2f$Hrms$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    ...__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$hr$2f$Hrms$2f$src$2f$styles$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["styles"].card,
                    width: '100%',
                    maxWidth: '440px',
                    padding: '48px',
                    boxShadow: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$hr$2f$Hrms$2f$src$2f$styles$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["tokens"].shadow.xl
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$hr$2f$Hrms$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            textAlign: 'center',
                            marginBottom: '40px'
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$hr$2f$Hrms$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                style: {
                                    width: '48px',
                                    height: '48px',
                                    background: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$hr$2f$Hrms$2f$src$2f$styles$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["tokens"].colors.accent + '10',
                                    color: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$hr$2f$Hrms$2f$src$2f$styles$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["tokens"].colors.accent,
                                    borderRadius: '12px',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    margin: '0 auto 16px'
                                },
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$hr$2f$Hrms$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "material-symbols-outlined",
                                    style: {
                                        fontSize: '24px'
                                    },
                                    children: "id_card"
                                }, void 0, false, {
                                    fileName: "[project]/Documents/hr/Hrms/src/components/EmployeeArea/index.js",
                                    lineNumber: 135,
                                    columnNumber: 29
                                }, ("TURBOPACK compile-time value", void 0))
                            }, void 0, false, {
                                fileName: "[project]/Documents/hr/Hrms/src/components/EmployeeArea/index.js",
                                lineNumber: 134,
                                columnNumber: 25
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$hr$2f$Hrms$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                style: {
                                    fontSize: '24px',
                                    fontWeight: '800',
                                    color: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$hr$2f$Hrms$2f$src$2f$styles$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["tokens"].colors.primary,
                                    marginBottom: '8px',
                                    letterSpacing: '-0.02em'
                                },
                                children: "Finalize Identity"
                            }, void 0, false, {
                                fileName: "[project]/Documents/hr/Hrms/src/components/EmployeeArea/index.js",
                                lineNumber: 137,
                                columnNumber: 25
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$hr$2f$Hrms$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                style: {
                                    fontSize: '14px',
                                    color: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$hr$2f$Hrms$2f$src$2f$styles$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["tokens"].colors.secondary,
                                    lineHeight: '1.6'
                                },
                                children: "Complete your profile to activate workspace access."
                            }, void 0, false, {
                                fileName: "[project]/Documents/hr/Hrms/src/components/EmployeeArea/index.js",
                                lineNumber: 138,
                                columnNumber: 25
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Documents/hr/Hrms/src/components/EmployeeArea/index.js",
                        lineNumber: 133,
                        columnNumber: 21
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$hr$2f$Hrms$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
                        onSubmit: handleProfileComplete,
                        style: {
                            display: 'grid',
                            gap: '20px'
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$hr$2f$Hrms$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$hr$2f$Hrms$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                        style: {
                                            fontSize: '11px',
                                            fontWeight: '800',
                                            color: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$hr$2f$Hrms$2f$src$2f$styles$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["tokens"].colors.secondary,
                                            textTransform: 'uppercase',
                                            letterSpacing: '0.05em',
                                            marginBottom: '8px',
                                            display: 'block'
                                        },
                                        children: "Phone Number"
                                    }, void 0, false, {
                                        fileName: "[project]/Documents/hr/Hrms/src/components/EmployeeArea/index.js",
                                        lineNumber: 142,
                                        columnNumber: 29
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$hr$2f$Hrms$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                        style: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$hr$2f$Hrms$2f$src$2f$styles$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["styles"].input,
                                        required: true,
                                        value: profileData.phone || '',
                                        onChange: (e)=>setProfileData({
                                                ...profileData,
                                                phone: e.target.value
                                            }),
                                        placeholder: "+91 98765 43210"
                                    }, void 0, false, {
                                        fileName: "[project]/Documents/hr/Hrms/src/components/EmployeeArea/index.js",
                                        lineNumber: 143,
                                        columnNumber: 29
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Documents/hr/Hrms/src/components/EmployeeArea/index.js",
                                lineNumber: 141,
                                columnNumber: 25
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$hr$2f$Hrms$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$hr$2f$Hrms$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                        style: {
                                            fontSize: '11px',
                                            fontWeight: '800',
                                            color: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$hr$2f$Hrms$2f$src$2f$styles$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["tokens"].colors.secondary,
                                            textTransform: 'uppercase',
                                            letterSpacing: '0.05em',
                                            marginBottom: '8px',
                                            display: 'block'
                                        },
                                        children: "Date of Birth"
                                    }, void 0, false, {
                                        fileName: "[project]/Documents/hr/Hrms/src/components/EmployeeArea/index.js",
                                        lineNumber: 146,
                                        columnNumber: 29
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$hr$2f$Hrms$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                        type: "date",
                                        style: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$hr$2f$Hrms$2f$src$2f$styles$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["styles"].input,
                                        required: true,
                                        value: profileData.dob || '',
                                        onChange: (e)=>setProfileData({
                                                ...profileData,
                                                dob: e.target.value
                                            })
                                    }, void 0, false, {
                                        fileName: "[project]/Documents/hr/Hrms/src/components/EmployeeArea/index.js",
                                        lineNumber: 147,
                                        columnNumber: 29
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Documents/hr/Hrms/src/components/EmployeeArea/index.js",
                                lineNumber: 145,
                                columnNumber: 25
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$hr$2f$Hrms$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$hr$2f$Hrms$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                        style: {
                                            fontSize: '11px',
                                            fontWeight: '800',
                                            color: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$hr$2f$Hrms$2f$src$2f$styles$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["tokens"].colors.secondary,
                                            textTransform: 'uppercase',
                                            letterSpacing: '0.05em',
                                            marginBottom: '8px',
                                            display: 'block'
                                        },
                                        children: "Home Address"
                                    }, void 0, false, {
                                        fileName: "[project]/Documents/hr/Hrms/src/components/EmployeeArea/index.js",
                                        lineNumber: 150,
                                        columnNumber: 29
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$hr$2f$Hrms$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("textarea", {
                                        style: {
                                            ...__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$hr$2f$Hrms$2f$src$2f$styles$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["styles"].input,
                                            minHeight: '100px',
                                            resize: 'none'
                                        },
                                        required: true,
                                        value: profileData.address || '',
                                        onChange: (e)=>setProfileData({
                                                ...profileData,
                                                address: e.target.value
                                            }),
                                        placeholder: "Street, City, State, PIN"
                                    }, void 0, false, {
                                        fileName: "[project]/Documents/hr/Hrms/src/components/EmployeeArea/index.js",
                                        lineNumber: 151,
                                        columnNumber: 29
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Documents/hr/Hrms/src/components/EmployeeArea/index.js",
                                lineNumber: 149,
                                columnNumber: 25
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$hr$2f$Hrms$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                style: {
                                    ...__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$hr$2f$Hrms$2f$src$2f$styles$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["styles"].button.primary,
                                    width: '100%',
                                    padding: '14px',
                                    marginTop: '8px',
                                    fontSize: '15px'
                                },
                                children: "Activate Workforce ID"
                            }, void 0, false, {
                                fileName: "[project]/Documents/hr/Hrms/src/components/EmployeeArea/index.js",
                                lineNumber: 153,
                                columnNumber: 25
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Documents/hr/Hrms/src/components/EmployeeArea/index.js",
                        lineNumber: 140,
                        columnNumber: 21
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/Documents/hr/Hrms/src/components/EmployeeArea/index.js",
                lineNumber: 132,
                columnNumber: 17
            }, ("TURBOPACK compile-time value", void 0))
        }, void 0, false, {
            fileName: "[project]/Documents/hr/Hrms/src/components/EmployeeArea/index.js",
            lineNumber: 131,
            columnNumber: 13
        }, ("TURBOPACK compile-time value", void 0));
    }
    const pageTitle = {
        dashboard: 'My Dashboard',
        attendance: 'Punch Clock',
        timesheet: 'My Timesheet',
        leaves: 'My Leaves',
        profile: 'My Profile',
        payslips: 'My Payslips',
        employee_policies: 'Company Policies'
    }[activeTab] || 'Workspace';
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$hr$2f$Hrms$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        style: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$hr$2f$Hrms$2f$src$2f$styles$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["styles"].app,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$hr$2f$Hrms$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(EmployeeSidebar, {
                activeTab: activeTab,
                setActiveTab: setActiveTab,
                user: user
            }, void 0, false, {
                fileName: "[project]/Documents/hr/Hrms/src/components/EmployeeArea/index.js",
                lineNumber: 174,
                columnNumber: 13
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$hr$2f$Hrms$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$hr$2f$Hrms$2f$src$2f$styles$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["styles"].main,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$hr$2f$Hrms$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$hr$2f$Hrms$2f$src$2f$styles$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["styles"].topbar,
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$hr$2f$Hrms$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$hr$2f$Hrms$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        style: {
                                            fontSize: '11px',
                                            fontWeight: '700',
                                            color: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$hr$2f$Hrms$2f$src$2f$styles$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["tokens"].colors.secondary,
                                            textTransform: 'uppercase',
                                            letterSpacing: '0.08em',
                                            marginBottom: '4px'
                                        },
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$hr$2f$Hrms$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "material-symbols-outlined",
                                                style: {
                                                    fontSize: '12px',
                                                    verticalAlign: 'middle',
                                                    marginRight: '4px'
                                                },
                                                children: "meeting_room"
                                            }, void 0, false, {
                                                fileName: "[project]/Documents/hr/Hrms/src/components/EmployeeArea/index.js",
                                                lineNumber: 180,
                                                columnNumber: 29
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            "WORKSPACE: ",
                                            user?.email?.toUpperCase()
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Documents/hr/Hrms/src/components/EmployeeArea/index.js",
                                        lineNumber: 179,
                                        columnNumber: 25
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$hr$2f$Hrms$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                        style: {
                                            fontSize: '24px',
                                            fontWeight: '800',
                                            color: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$hr$2f$Hrms$2f$src$2f$styles$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["tokens"].colors.primary,
                                            letterSpacing: '-0.02em'
                                        },
                                        children: pageTitle
                                    }, void 0, false, {
                                        fileName: "[project]/Documents/hr/Hrms/src/components/EmployeeArea/index.js",
                                        lineNumber: 183,
                                        columnNumber: 25
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Documents/hr/Hrms/src/components/EmployeeArea/index.js",
                                lineNumber: 178,
                                columnNumber: 21
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$hr$2f$Hrms$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$hr$2f$Hrms$2f$src$2f$components$2f$Notifications$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                user: user,
                                isAdmin: false
                            }, void 0, false, {
                                fileName: "[project]/Documents/hr/Hrms/src/components/EmployeeArea/index.js",
                                lineNumber: 185,
                                columnNumber: 21
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$hr$2f$Hrms$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: handleLogout,
                                style: {
                                    ...__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$hr$2f$Hrms$2f$src$2f$styles$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["styles"].button.outline,
                                    padding: '10px 18px',
                                    fontSize: '13px',
                                    fontWeight: '700',
                                    background: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$hr$2f$Hrms$2f$src$2f$styles$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["tokens"].colors.white,
                                    color: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$hr$2f$Hrms$2f$src$2f$styles$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["tokens"].colors.error,
                                    borderColor: '#FEE2E2'
                                },
                                onMouseOver: (e)=>{
                                    e.currentTarget.style.backgroundColor = '#FEF2F2';
                                    e.currentTarget.style.borderColor = '#FCA5A5';
                                },
                                onMouseOut: (e)=>{
                                    e.currentTarget.style.backgroundColor = __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$hr$2f$Hrms$2f$src$2f$styles$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["tokens"].colors.white;
                                    e.currentTarget.style.borderColor = '#FEE2E2';
                                },
                                children: [
                                    "Sign Out",
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$hr$2f$Hrms$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "material-symbols-outlined",
                                        style: {
                                            fontSize: '18px'
                                        },
                                        children: "logout"
                                    }, void 0, false, {
                                        fileName: "[project]/Documents/hr/Hrms/src/components/EmployeeArea/index.js",
                                        lineNumber: 190,
                                        columnNumber: 25
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Documents/hr/Hrms/src/components/EmployeeArea/index.js",
                                lineNumber: 186,
                                columnNumber: 21
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Documents/hr/Hrms/src/components/EmployeeArea/index.js",
                        lineNumber: 177,
                        columnNumber: 17
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$hr$2f$Hrms$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            maxWidth: '1200px',
                            margin: '0 auto'
                        },
                        children: [
                            activeTab === 'dashboard' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$hr$2f$Hrms$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$hr$2f$Hrms$2f$src$2f$components$2f$Dashboard$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                setActiveTab: setActiveTab,
                                isAdmin: false,
                                user: user
                            }, void 0, false, {
                                fileName: "[project]/Documents/hr/Hrms/src/components/EmployeeArea/index.js",
                                lineNumber: 195,
                                columnNumber: 51
                            }, ("TURBOPACK compile-time value", void 0)),
                            activeTab === 'attendance' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$hr$2f$Hrms$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$hr$2f$Hrms$2f$src$2f$components$2f$Attendance$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                user: user
                            }, void 0, false, {
                                fileName: "[project]/Documents/hr/Hrms/src/components/EmployeeArea/index.js",
                                lineNumber: 196,
                                columnNumber: 52
                            }, ("TURBOPACK compile-time value", void 0)),
                            activeTab === 'timesheet' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$hr$2f$Hrms$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$hr$2f$Hrms$2f$src$2f$components$2f$Timesheet$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                user: user
                            }, void 0, false, {
                                fileName: "[project]/Documents/hr/Hrms/src/components/EmployeeArea/index.js",
                                lineNumber: 197,
                                columnNumber: 51
                            }, ("TURBOPACK compile-time value", void 0)),
                            activeTab === 'leaves' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$hr$2f$Hrms$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$hr$2f$Hrms$2f$src$2f$components$2f$Leaves$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                user: user
                            }, void 0, false, {
                                fileName: "[project]/Documents/hr/Hrms/src/components/EmployeeArea/index.js",
                                lineNumber: 198,
                                columnNumber: 48
                            }, ("TURBOPACK compile-time value", void 0)),
                            activeTab === 'profile' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$hr$2f$Hrms$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$hr$2f$Hrms$2f$src$2f$components$2f$Profile$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                user: user
                            }, void 0, false, {
                                fileName: "[project]/Documents/hr/Hrms/src/components/EmployeeArea/index.js",
                                lineNumber: 199,
                                columnNumber: 49
                            }, ("TURBOPACK compile-time value", void 0)),
                            activeTab === 'payslips' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$hr$2f$Hrms$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$hr$2f$Hrms$2f$src$2f$components$2f$Payroll$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                user: user
                            }, void 0, false, {
                                fileName: "[project]/Documents/hr/Hrms/src/components/EmployeeArea/index.js",
                                lineNumber: 200,
                                columnNumber: 50
                            }, ("TURBOPACK compile-time value", void 0)),
                            activeTab === 'employee_policies' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$hr$2f$Hrms$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$hr$2f$Hrms$2f$src$2f$components$2f$AdminPanel$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                fixedModule: "policies",
                                readOnly: true
                            }, void 0, false, {
                                fileName: "[project]/Documents/hr/Hrms/src/components/EmployeeArea/index.js",
                                lineNumber: 201,
                                columnNumber: 59
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Documents/hr/Hrms/src/components/EmployeeArea/index.js",
                        lineNumber: 194,
                        columnNumber: 17
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/Documents/hr/Hrms/src/components/EmployeeArea/index.js",
                lineNumber: 176,
                columnNumber: 13
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/Documents/hr/Hrms/src/components/EmployeeArea/index.js",
        lineNumber: 173,
        columnNumber: 9
    }, ("TURBOPACK compile-time value", void 0));
};
_s1(EmployeeArea, "662x29ukxuzwwi47hkpJgZE412U=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$hr$2f$Hrms$2f$src$2f$context$2f$AuthContext$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAuth"]
    ];
});
_c1 = EmployeeArea;
const __TURBOPACK__default__export__ = EmployeeArea;
var _c, _c1;
__turbopack_context__.k.register(_c, "EmployeeSidebar");
__turbopack_context__.k.register(_c1, "EmployeeArea");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=Documents_hr_Hrms_src_components_85fc3896._.js.map