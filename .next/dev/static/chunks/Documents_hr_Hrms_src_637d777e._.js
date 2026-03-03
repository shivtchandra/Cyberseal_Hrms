(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/Documents/hr/Hrms/src/firebase.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "auth",
    ()=>auth,
    "db",
    ()=>db
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$hr$2f$Hrms$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/Documents/hr/Hrms/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$hr$2f$Hrms$2f$node_modules$2f$firebase$2f$app$2f$dist$2f$esm$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/Documents/hr/Hrms/node_modules/firebase/app/dist/esm/index.esm.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$hr$2f$Hrms$2f$node_modules$2f40$firebase$2f$app$2f$dist$2f$esm$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/hr/Hrms/node_modules/@firebase/app/dist/esm/index.esm.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$hr$2f$Hrms$2f$node_modules$2f$firebase$2f$auth$2f$dist$2f$esm$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/Documents/hr/Hrms/node_modules/firebase/auth/dist/esm/index.esm.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$hr$2f$Hrms$2f$node_modules$2f40$firebase$2f$auth$2f$dist$2f$esm$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/hr/Hrms/node_modules/@firebase/auth/dist/esm/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$hr$2f$Hrms$2f$node_modules$2f$firebase$2f$firestore$2f$dist$2f$esm$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/Documents/hr/Hrms/node_modules/firebase/firestore/dist/esm/index.esm.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$hr$2f$Hrms$2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/hr/Hrms/node_modules/@firebase/firestore/dist/index.esm.js [app-client] (ecmascript)");
;
;
;
const firebaseConfig = {
    apiKey: ("TURBOPACK compile-time value", "AIzaSyDdbx45hPE-dL_qoMLgIIaMJ4uBU4w4O7M"),
    authDomain: ("TURBOPACK compile-time value", "hrms-55be6.firebaseapp.com"),
    projectId: ("TURBOPACK compile-time value", "hrms-55be6"),
    storageBucket: ("TURBOPACK compile-time value", "hrms-55be6.firebasestorage.app"),
    messagingSenderId: ("TURBOPACK compile-time value", "975239505108"),
    appId: ("TURBOPACK compile-time value", "1:975239505108:web:88567f8137352ee450c741")
};
const app = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$hr$2f$Hrms$2f$node_modules$2f40$firebase$2f$app$2f$dist$2f$esm$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["initializeApp"])(firebaseConfig);
const auth = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$hr$2f$Hrms$2f$node_modules$2f40$firebase$2f$auth$2f$dist$2f$esm$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getAuth"])(app);
const db = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$hr$2f$Hrms$2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getFirestore"])(app);
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Documents/hr/Hrms/src/context/AuthContext.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "AuthProvider",
    ()=>AuthProvider,
    "useAuth",
    ()=>useAuth
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$hr$2f$Hrms$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/hr/Hrms/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$hr$2f$Hrms$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/hr/Hrms/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$hr$2f$Hrms$2f$src$2f$firebase$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/hr/Hrms/src/firebase.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$hr$2f$Hrms$2f$node_modules$2f$firebase$2f$auth$2f$dist$2f$esm$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/Documents/hr/Hrms/node_modules/firebase/auth/dist/esm/index.esm.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$hr$2f$Hrms$2f$node_modules$2f40$firebase$2f$auth$2f$dist$2f$esm$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/hr/Hrms/node_modules/@firebase/auth/dist/esm/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature(), _s1 = __turbopack_context__.k.signature();
'use client';
;
;
;
const SESSION_KEY = 'hrmate_session';
const LAST_ACTIVITY_KEY = 'hrmate_last_activity';
const SESSION_TIMEOUT_MS = 30 * 60 * 1000; // 30 min idle timeout
const AuthContext = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$hr$2f$Hrms$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createContext"])({
    user: null,
    loading: true,
    setUser: ()=>{},
    logout: ()=>{},
    sessionExpired: false
});
const AuthProvider = ({ children })=>{
    _s();
    const [user, setUserState] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$hr$2f$Hrms$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [loading, setLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$hr$2f$Hrms$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(true);
    const [sessionExpired, setSessionExpired] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$hr$2f$Hrms$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const timeoutRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$hr$2f$Hrms$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const clearSession = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$hr$2f$Hrms$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "AuthProvider.useCallback[clearSession]": ()=>{
            try {
                sessionStorage.removeItem(SESSION_KEY);
            } catch (_) {}
            try {
                sessionStorage.removeItem(LAST_ACTIVITY_KEY);
            } catch (_) {}
            setUserState(null);
        }
    }["AuthProvider.useCallback[clearSession]"], []);
    const handleTimeout = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$hr$2f$Hrms$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "AuthProvider.useCallback[handleTimeout]": ()=>{
            clearSession();
            setSessionExpired(true);
        }
    }["AuthProvider.useCallback[handleTimeout]"], [
        clearSession
    ]);
    // Touch activity timestamp
    const touchActivity = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$hr$2f$Hrms$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "AuthProvider.useCallback[touchActivity]": ()=>{
            try {
                sessionStorage.setItem(LAST_ACTIVITY_KEY, Date.now().toString());
            } catch (_) {}
            setSessionExpired(false);
            // Reset the idle timer
            if (timeoutRef.current) clearTimeout(timeoutRef.current);
            timeoutRef.current = setTimeout(handleTimeout, SESSION_TIMEOUT_MS);
        }
    }["AuthProvider.useCallback[touchActivity]"], [
        handleTimeout
    ]);
    // Check if session is stale on load
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$hr$2f$Hrms$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "AuthProvider.useEffect": ()=>{
            try {
                const lastActivity = sessionStorage.getItem(LAST_ACTIVITY_KEY);
                if (lastActivity && Date.now() - parseInt(lastActivity) > SESSION_TIMEOUT_MS) {
                    handleTimeout();
                    return;
                }
            } catch (_) {}
            // Hydrate from sessionStorage
            try {
                const stored = sessionStorage.getItem(SESSION_KEY);
                if (stored) {
                    setUserState(JSON.parse(stored));
                    touchActivity();
                }
            } catch (_) {}
        }
    }["AuthProvider.useEffect"], []);
    // Listen to user activity for idle timeout
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$hr$2f$Hrms$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "AuthProvider.useEffect": ()=>{
            if (!user) return;
            const events = [
                'mousedown',
                'keydown',
                'scroll',
                'touchstart'
            ];
            const handler = {
                "AuthProvider.useEffect.handler": ()=>touchActivity()
            }["AuthProvider.useEffect.handler"];
            events.forEach({
                "AuthProvider.useEffect": (e)=>window.addEventListener(e, handler, {
                        passive: true
                    })
            }["AuthProvider.useEffect"]);
            // Start the timer
            touchActivity();
            return ({
                "AuthProvider.useEffect": ()=>{
                    events.forEach({
                        "AuthProvider.useEffect": (e)=>window.removeEventListener(e, handler)
                    }["AuthProvider.useEffect"]);
                    if (timeoutRef.current) clearTimeout(timeoutRef.current);
                }
            })["AuthProvider.useEffect"];
        }
    }["AuthProvider.useEffect"], [
        user,
        touchActivity
    ]);
    // Firebase Auth listener
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$hr$2f$Hrms$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "AuthProvider.useEffect": ()=>{
            const unsub = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$hr$2f$Hrms$2f$node_modules$2f40$firebase$2f$auth$2f$dist$2f$esm$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["onAuthStateChanged"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$hr$2f$Hrms$2f$src$2f$firebase$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["auth"], {
                "AuthProvider.useEffect.unsub": (u)=>{
                    if (u) {
                        const serialized = {
                            uid: u.uid,
                            email: u.email,
                            displayName: u.displayName,
                            photoURL: u.photoURL
                        };
                        try {
                            sessionStorage.setItem(SESSION_KEY, JSON.stringify(serialized));
                        } catch (_) {}
                        setUserState(serialized);
                        touchActivity();
                    } else {
                        try {
                            const stored = sessionStorage.getItem(SESSION_KEY);
                            if (!stored) setUserState(null);
                        } catch (_) {
                            setUserState(null);
                        }
                    }
                    setLoading(false);
                }
            }["AuthProvider.useEffect.unsub"]);
            return unsub;
        }
    }["AuthProvider.useEffect"], []);
    const setUser = (u)=>{
        if (u) {
            try {
                sessionStorage.setItem(SESSION_KEY, JSON.stringify(u));
            } catch (_) {}
            touchActivity();
        } else {
            clearSession();
        }
        setUserState(u);
    };
    const logout = ()=>{
        clearSession();
        setSessionExpired(false);
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$hr$2f$Hrms$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(AuthContext.Provider, {
        value: {
            user,
            loading,
            setUser,
            logout,
            sessionExpired
        },
        children: children
    }, void 0, false, {
        fileName: "[project]/Documents/hr/Hrms/src/context/AuthContext.js",
        lineNumber: 125,
        columnNumber: 9
    }, ("TURBOPACK compile-time value", void 0));
};
_s(AuthProvider, "zWkm/8YZjGz6k6Yt+mNkPDgab/I=");
_c = AuthProvider;
const useAuth = ()=>{
    _s1();
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$hr$2f$Hrms$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useContext"])(AuthContext);
};
_s1(useAuth, "gDsCjeeItUuvgOWf1v4qoK9RF6k=");
var _c;
__turbopack_context__.k.register(_c, "AuthProvider");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Documents/hr/Hrms/src/context/ThemeContext.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ThemeProvider",
    ()=>ThemeProvider,
    "useTheme",
    ()=>useTheme
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$hr$2f$Hrms$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/hr/Hrms/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$hr$2f$Hrms$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/hr/Hrms/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature(), _s1 = __turbopack_context__.k.signature();
'use client';
;
const ThemeContext = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$hr$2f$Hrms$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createContext"])({
    theme: 'light',
    toggleTheme: ()=>{}
});
const ThemeProvider = ({ children })=>{
    _s();
    const [theme, setTheme] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$hr$2f$Hrms$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({
        "ThemeProvider.useState": ()=>{
            if ("TURBOPACK compile-time truthy", 1) return localStorage.getItem('hrmate-theme') || 'light';
            //TURBOPACK unreachable
            ;
        }
    }["ThemeProvider.useState"]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$hr$2f$Hrms$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "ThemeProvider.useEffect": ()=>{
            document.documentElement.setAttribute('data-theme', theme);
            localStorage.setItem('hrmate-theme', theme);
        }
    }["ThemeProvider.useEffect"], [
        theme
    ]);
    const toggleTheme = ()=>setTheme((t)=>t === 'light' ? 'dark' : 'light');
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$hr$2f$Hrms$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(ThemeContext.Provider, {
        value: {
            theme,
            toggleTheme
        },
        children: children
    }, void 0, false, {
        fileName: "[project]/Documents/hr/Hrms/src/context/ThemeContext.js",
        lineNumber: 20,
        columnNumber: 9
    }, ("TURBOPACK compile-time value", void 0));
};
_s(ThemeProvider, "DG65HVwzT9LIR1rUbLkkZLRUqaM=");
_c = ThemeProvider;
const useTheme = ()=>{
    _s1();
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$hr$2f$Hrms$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useContext"])(ThemeContext);
};
_s1(useTheme, "gDsCjeeItUuvgOWf1v4qoK9RF6k=");
var _c;
__turbopack_context__.k.register(_c, "ThemeProvider");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=Documents_hr_Hrms_src_637d777e._.js.map