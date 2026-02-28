(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/Documents/help/HRMS/src/styles.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/* ─── Design Tokens ──────────────────────────────────────────── */ __turbopack_context__.s([
    "styles",
    ()=>styles,
    "tokens",
    ()=>tokens
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$help$2f$HRMS$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_type_of$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/help/HRMS/node_modules/@swc/helpers/esm/_type_of.js [app-client] (ecmascript)");
;
var tokens = {
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
var styles = {
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
    menuItem: function(active) {
        return {
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
        };
    },
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
    badge: function(type) {
        return {
            padding: '6px 12px',
            borderRadius: '9999px',
            fontSize: '12px',
            fontWeight: '600',
            display: 'inline-flex',
            alignItems: 'center',
            gap: '6px',
            backgroundColor: type === 'primary' ? 'rgba(13,148,136,0.1)' : 'var(--color-hover)',
            color: type === 'primary' ? 'var(--color-accent)' : 'var(--color-secondary)',
            border: "1px solid ".concat(type === 'primary' ? 'rgba(13,148,136,0.2)' : 'var(--color-border)')
        };
    },
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
if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$help$2f$HRMS$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_type_of$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(globalThis.$RefreshHelpers$) === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Documents/help/HRMS/src/components/LoginForm/index.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$help$2f$HRMS$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_async_to_generator$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/help/HRMS/node_modules/@swc/helpers/esm/_async_to_generator.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$help$2f$HRMS$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_object_spread$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/help/HRMS/node_modules/@swc/helpers/esm/_object_spread.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$help$2f$HRMS$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_object_spread_props$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/help/HRMS/node_modules/@swc/helpers/esm/_object_spread_props.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$help$2f$HRMS$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_sliced_to_array$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/help/HRMS/node_modules/@swc/helpers/esm/_sliced_to_array.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$help$2f$HRMS$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_type_of$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/help/HRMS/node_modules/@swc/helpers/esm/_type_of.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$help$2f$HRMS$2f$node_modules$2f$tslib$2f$tslib$2e$es6$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$5f$_generator__as__$5f3e$__ = __turbopack_context__.i("[project]/Documents/help/HRMS/node_modules/tslib/tslib.es6.mjs [app-client] (ecmascript) <export __generator as _>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$help$2f$HRMS$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/help/HRMS/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$help$2f$HRMS$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/help/HRMS/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$help$2f$HRMS$2f$src$2f$firebase$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/help/HRMS/src/firebase.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$help$2f$HRMS$2f$node_modules$2f$firebase$2f$auth$2f$dist$2f$esm$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/Documents/help/HRMS/node_modules/firebase/auth/dist/esm/index.esm.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$help$2f$HRMS$2f$node_modules$2f40$firebase$2f$auth$2f$dist$2f$esm$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/help/HRMS/node_modules/@firebase/auth/dist/esm/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$help$2f$HRMS$2f$node_modules$2f$firebase$2f$firestore$2f$dist$2f$esm$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/Documents/help/HRMS/node_modules/firebase/firestore/dist/esm/index.esm.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$help$2f$HRMS$2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/help/HRMS/node_modules/@firebase/firestore/dist/index.esm.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$help$2f$HRMS$2f$src$2f$styles$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/help/HRMS/src/styles.js [app-client] (ecmascript)");
;
;
;
;
;
;
var _this = ("TURBOPACK compile-time value", void 0);
;
var _s = __turbopack_context__.k.signature();
;
;
;
;
;
;
var ADMIN_CREDENTIALS = {
    email: 'admin@hrmate.com',
    password: 'adminPassword123'
};
var LoginForm = function(param) {
    var onLoginSuccess = param.onLoginSuccess, _param_userType = param.userType, userType = _param_userType === void 0 ? 'employee' : _param_userType;
    _s();
    var _useState = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$help$2f$HRMS$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_sliced_to_array$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$help$2f$HRMS$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(''), 2), email = _useState[0], setEmail = _useState[1];
    var _useState1 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$help$2f$HRMS$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_sliced_to_array$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$help$2f$HRMS$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(''), 2), password = _useState1[0], setPassword = _useState1[1];
    var _useState2 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$help$2f$HRMS$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_sliced_to_array$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$help$2f$HRMS$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false), 2), loading = _useState2[0], setLoading = _useState2[1];
    var submit = function(e) {
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$help$2f$HRMS$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_async_to_generator$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(function() {
            var authUser, err, q, snapshot, empData, fError;
            return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$help$2f$HRMS$2f$node_modules$2f$tslib$2f$tslib$2e$es6$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$5f$_generator__as__$5f3e$__["_"])(this, function(_state) {
                switch(_state.label){
                    case 0:
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
                                return [
                                    2
                                ];
                            } else {
                                alert("Admin accounts must use the designated admin portal (/admin-login).");
                                setLoading(false);
                                return [
                                    2
                                ];
                            }
                        }
                        _state.label = 1;
                    case 1:
                        _state.trys.push([
                            1,
                            3,
                            8,
                            9
                        ]);
                        return [
                            4,
                            (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$help$2f$HRMS$2f$node_modules$2f40$firebase$2f$auth$2f$dist$2f$esm$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["signInWithEmailAndPassword"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$help$2f$HRMS$2f$src$2f$firebase$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["auth"], email, password)
                        ];
                    case 2:
                        authUser = _state.sent();
                        onLoginSuccess(authUser.user);
                        return [
                            3,
                            9
                        ];
                    case 3:
                        err = _state.sent();
                        _state.label = 4;
                    case 4:
                        _state.trys.push([
                            4,
                            6,
                            ,
                            7
                        ]);
                        q = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$help$2f$HRMS$2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["query"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$help$2f$HRMS$2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["collection"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$help$2f$HRMS$2f$src$2f$firebase$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["db"], 'employees'), (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$help$2f$HRMS$2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["where"])('email', '==', email), (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$help$2f$HRMS$2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["where"])('password', '==', password));
                        return [
                            4,
                            (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$help$2f$HRMS$2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getDocs"])(q)
                        ];
                    case 5:
                        snapshot = _state.sent();
                        if (!snapshot.empty) {
                            empData = snapshot.docs[0].data();
                            onLoginSuccess((0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$help$2f$HRMS$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_object_spread_props$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$help$2f$HRMS$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_object_spread$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])({}, empData), {
                                uid: snapshot.docs[0].id
                            }));
                        } else {
                            alert("Invalid credentials or access denied.");
                        }
                        return [
                            3,
                            7
                        ];
                    case 6:
                        fError = _state.sent();
                        console.error(fError);
                        alert("Authentication system failure.");
                        return [
                            3,
                            7
                        ];
                    case 7:
                        return [
                            3,
                            9
                        ];
                    case 8:
                        setLoading(false);
                        return [
                            7
                        ];
                    case 9:
                        return [
                            2
                        ];
                }
            });
        })();
    };
    var containerStyle = {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        minHeight: '100vh',
        backgroundColor: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$help$2f$HRMS$2f$src$2f$styles$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["tokens"].colors.background,
        backgroundImage: 'radial-gradient(circle at 20% 20%, #CCFBF1 0%, transparent 40%), radial-gradient(circle at 80% 80%, #F1F5F9 0%, transparent 40%)',
        fontFamily: '"Funnel Display", sans-serif'
    };
    var formStyle = {
        width: '100%',
        maxWidth: '440px',
        backgroundColor: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$help$2f$HRMS$2f$src$2f$styles$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["tokens"].colors.white,
        padding: '56px 48px',
        borderRadius: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$help$2f$HRMS$2f$src$2f$styles$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["tokens"].radius.xl,
        boxShadow: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$help$2f$HRMS$2f$src$2f$styles$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["tokens"].shadow.xl,
        border: "1px solid ".concat(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$help$2f$HRMS$2f$src$2f$styles$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["tokens"].colors.border)
    };
    var labelStyle = {
        display: 'block',
        fontSize: '13px',
        fontWeight: '700',
        color: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$help$2f$HRMS$2f$src$2f$styles$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["tokens"].colors.primary,
        marginBottom: '8px',
        textTransform: 'uppercase',
        letterSpacing: '0.05em'
    };
    var footerStyle = {
        marginTop: '40px',
        textAlign: 'center',
        fontSize: '12px',
        color: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$help$2f$HRMS$2f$src$2f$styles$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["tokens"].colors.secondary,
        lineHeight: '1.6'
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$help$2f$HRMS$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        style: containerStyle,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$help$2f$HRMS$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
            onSubmit: submit,
            style: formStyle,
            className: "animate-fade",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$help$2f$HRMS$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    style: {
                        textAlign: 'center',
                        marginBottom: '48px'
                    },
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$help$2f$HRMS$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            style: {
                                width: '56px',
                                height: '56px',
                                background: "linear-gradient(135deg, ".concat(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$help$2f$HRMS$2f$src$2f$styles$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["tokens"].colors.accent, " 0%, #065F46 100%)"),
                                borderRadius: '16px',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                margin: '0 auto 20px',
                                boxShadow: '0 12px 24px -8px rgba(13, 148, 136, 0.4)'
                            },
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$help$2f$HRMS$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
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
                            }, _this)
                        }, void 0, false, {
                            fileName: "[project]/Documents/help/HRMS/src/components/LoginForm/index.js",
                            lineNumber: 101,
                            columnNumber: 11
                        }, _this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$help$2f$HRMS$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                            style: {
                                fontSize: '28px',
                                fontWeight: '800',
                                color: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$help$2f$HRMS$2f$src$2f$styles$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["tokens"].colors.primary,
                                marginBottom: '8px',
                                letterSpacing: '-0.02em'
                            },
                            children: "HRMate Login"
                        }, void 0, false, {
                            fileName: "[project]/Documents/help/HRMS/src/components/LoginForm/index.js",
                            lineNumber: 114,
                            columnNumber: 11
                        }, _this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$help$2f$HRMS$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            style: {
                                color: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$help$2f$HRMS$2f$src$2f$styles$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["tokens"].colors.secondary,
                                fontSize: '15px'
                            },
                            children: userType === 'admin' ? 'Administrative Gateway' : 'Global Workforce Entry'
                        }, void 0, false, {
                            fileName: "[project]/Documents/help/HRMS/src/components/LoginForm/index.js",
                            lineNumber: 115,
                            columnNumber: 11
                        }, _this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/Documents/help/HRMS/src/components/LoginForm/index.js",
                    lineNumber: 100,
                    columnNumber: 9
                }, _this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$help$2f$HRMS$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    style: {
                        marginBottom: '24px'
                    },
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$help$2f$HRMS$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                            style: labelStyle,
                            children: "Corporate Email"
                        }, void 0, false, {
                            fileName: "[project]/Documents/help/HRMS/src/components/LoginForm/index.js",
                            lineNumber: 121,
                            columnNumber: 11
                        }, _this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$help$2f$HRMS$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                            style: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$help$2f$HRMS$2f$src$2f$styles$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["styles"].input,
                            placeholder: "name@hrmate.com",
                            type: "email",
                            required: true,
                            value: email,
                            onChange: function(e) {
                                return setEmail(e.target.value);
                            }
                        }, void 0, false, {
                            fileName: "[project]/Documents/help/HRMS/src/components/LoginForm/index.js",
                            lineNumber: 122,
                            columnNumber: 11
                        }, _this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/Documents/help/HRMS/src/components/LoginForm/index.js",
                    lineNumber: 120,
                    columnNumber: 9
                }, _this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$help$2f$HRMS$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    style: {
                        marginBottom: '40px'
                    },
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$help$2f$HRMS$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                            style: labelStyle,
                            children: "Secure Passcode"
                        }, void 0, false, {
                            fileName: "[project]/Documents/help/HRMS/src/components/LoginForm/index.js",
                            lineNumber: 133,
                            columnNumber: 11
                        }, _this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$help$2f$HRMS$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                            style: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$help$2f$HRMS$2f$src$2f$styles$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["styles"].input,
                            placeholder: "••••••••",
                            type: "password",
                            required: true,
                            value: password,
                            onChange: function(e) {
                                return setPassword(e.target.value);
                            }
                        }, void 0, false, {
                            fileName: "[project]/Documents/help/HRMS/src/components/LoginForm/index.js",
                            lineNumber: 134,
                            columnNumber: 11
                        }, _this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/Documents/help/HRMS/src/components/LoginForm/index.js",
                    lineNumber: 132,
                    columnNumber: 9
                }, _this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$help$2f$HRMS$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                    style: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$help$2f$HRMS$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_object_spread_props$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$help$2f$HRMS$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_object_spread$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])({}, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$help$2f$HRMS$2f$src$2f$styles$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["styles"].button.primary), {
                        width: '100%',
                        height: '48px',
                        fontSize: '15px'
                    }),
                    disabled: loading,
                    children: loading ? 'Authenticating...' : 'Establish Connection'
                }, void 0, false, {
                    fileName: "[project]/Documents/help/HRMS/src/components/LoginForm/index.js",
                    lineNumber: 144,
                    columnNumber: 9
                }, _this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$help$2f$HRMS$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    style: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$help$2f$HRMS$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_object_spread_props$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$help$2f$HRMS$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_object_spread$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])({}, footerStyle), {
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        gap: '6px'
                    }),
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$help$2f$HRMS$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "material-symbols-outlined",
                            style: {
                                fontSize: '14px'
                            },
                            children: "lock"
                        }, void 0, false, {
                            fileName: "[project]/Documents/help/HRMS/src/components/LoginForm/index.js",
                            lineNumber: 149,
                            columnNumber: 11
                        }, _this),
                        "Restricted access. Authorized personnel only."
                    ]
                }, void 0, true, {
                    fileName: "[project]/Documents/help/HRMS/src/components/LoginForm/index.js",
                    lineNumber: 148,
                    columnNumber: 9
                }, _this)
            ]
        }, void 0, true, {
            fileName: "[project]/Documents/help/HRMS/src/components/LoginForm/index.js",
            lineNumber: 99,
            columnNumber: 7
        }, _this)
    }, void 0, false, {
        fileName: "[project]/Documents/help/HRMS/src/components/LoginForm/index.js",
        lineNumber: 98,
        columnNumber: 5
    }, _this);
};
_s(LoginForm, "Tug1/1aWx/KAV2WSZABTI7relys=");
_c = LoginForm;
const __TURBOPACK__default__export__ = LoginForm;
var _c;
__turbopack_context__.k.register(_c, "LoginForm");
if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$help$2f$HRMS$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_type_of$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(globalThis.$RefreshHelpers$) === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Documents/help/HRMS/src/app/admin-login/page.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>AdminLoginPage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$help$2f$HRMS$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_type_of$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/help/HRMS/node_modules/@swc/helpers/esm/_type_of.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$help$2f$HRMS$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/help/HRMS/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$help$2f$HRMS$2f$src$2f$components$2f$LoginForm$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/help/HRMS/src/components/LoginForm/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$help$2f$HRMS$2f$src$2f$context$2f$AuthContext$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/help/HRMS/src/context/AuthContext.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$help$2f$HRMS$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/help/HRMS/node_modules/next/navigation.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$help$2f$HRMS$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/help/HRMS/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
;
function AdminLoginPage() {
    _s();
    var _useAuth = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$help$2f$HRMS$2f$src$2f$context$2f$AuthContext$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAuth"])(), user = _useAuth.user, setUser = _useAuth.setUser;
    var router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$help$2f$HRMS$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"])();
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$help$2f$HRMS$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "AdminLoginPage.useEffect": function() {
            if (user) router.push('/');
        }
    }["AdminLoginPage.useEffect"], [
        user,
        router
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$help$2f$HRMS$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$help$2f$HRMS$2f$src$2f$components$2f$LoginForm$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
        onLoginSuccess: function(u) {
            return setUser(u);
        },
        userType: "admin"
    }, void 0, false, {
        fileName: "[project]/Documents/help/HRMS/src/app/admin-login/page.js",
        lineNumber: 16,
        columnNumber: 12
    }, this);
}
_s(AdminLoginPage, "b/qarASTW83tsH01cT+P6KJVyYA=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$help$2f$HRMS$2f$src$2f$context$2f$AuthContext$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAuth"],
        __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$help$2f$HRMS$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"]
    ];
});
_c = AdminLoginPage;
var _c;
__turbopack_context__.k.register(_c, "AdminLoginPage");
if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$help$2f$HRMS$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_type_of$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(globalThis.$RefreshHelpers$) === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Documents/help/HRMS/node_modules/next/navigation.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {

module.exports = __turbopack_context__.r("[project]/Documents/help/HRMS/node_modules/next/dist/client/components/navigation.js [app-client] (ecmascript)");
}),
]);

//# sourceMappingURL=Documents_help_HRMS_1c55e48e._.js.map