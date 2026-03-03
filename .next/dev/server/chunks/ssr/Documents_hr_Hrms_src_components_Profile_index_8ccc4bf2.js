module.exports = [
"[project]/Documents/hr/Hrms/src/components/Profile/index.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$hr$2f$Hrms$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/hr/Hrms/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$hr$2f$Hrms$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/hr/Hrms/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$hr$2f$Hrms$2f$src$2f$firebase$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/hr/Hrms/src/firebase.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$hr$2f$Hrms$2f$node_modules$2f$firebase$2f$firestore$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/Documents/hr/Hrms/node_modules/firebase/firestore/dist/index.mjs [app-ssr] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$hr$2f$Hrms$2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/hr/Hrms/node_modules/@firebase/firestore/dist/index.node.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$hr$2f$Hrms$2f$src$2f$styles$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/hr/Hrms/src/styles.js [app-ssr] (ecmascript)");
;
;
;
;
;
const Profile = ({ user })=>{
    const [profile, setProfile] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$hr$2f$Hrms$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    const [editing, setEditing] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$hr$2f$Hrms$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [formData, setFormData] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$hr$2f$Hrms$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])({});
    const [showPasswordModal, setShowPasswordModal] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$hr$2f$Hrms$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [newPass, setNewPass] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$hr$2f$Hrms$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])({
        current: '',
        next: '',
        confirm: ''
    });
    const [loading, setLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$hr$2f$Hrms$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(true);
    const [error, setError] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$hr$2f$Hrms$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$hr$2f$Hrms$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (!user.uid) return;
        const checkByUid = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$hr$2f$Hrms$2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["onSnapshot"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$hr$2f$Hrms$2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["doc"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$hr$2f$Hrms$2f$src$2f$firebase$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["db"], 'employees', user.uid), (snapshot)=>{
            if (snapshot.exists()) {
                const data = snapshot.data();
                // Doc ID matches Firebase Auth UID
                setProfile({
                    ...data,
                    _docId: user.uid
                });
                setFormData({
                    ...data,
                    _docId: user.uid
                });
                setLoading(false);
            } else {
                // Firestore employee doc was created with auto-generated ID — find by email
                setLoading(true);
                const q = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$hr$2f$Hrms$2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["query"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$hr$2f$Hrms$2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["collection"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$hr$2f$Hrms$2f$src$2f$firebase$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["db"], 'employees'), (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$hr$2f$Hrms$2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["where"])('email', '==', user.email));
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$hr$2f$Hrms$2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getDocs"])(q).then((snap)=>{
                    if (!snap.empty) {
                        const data = snap.docs[0].data();
                        const docId = snap.docs[0].id;
                        setProfile({
                            ...data,
                            _docId: docId
                        });
                        setFormData({
                            ...data,
                            _docId: docId
                        });
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
            const docId = profile._docId || user.uid;
            await (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$hr$2f$Hrms$2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["updateDoc"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$hr$2f$Hrms$2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["doc"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$hr$2f$Hrms$2f$src$2f$firebase$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["db"], 'employees', docId), {
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
            const docId = profile._docId || user.uid;
            await (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$hr$2f$Hrms$2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["updateDoc"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$hr$2f$Hrms$2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["doc"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$hr$2f$Hrms$2f$src$2f$firebase$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["db"], 'employees', docId), {
                phone: formData.phone || '',
                address: formData.address || '',
                bio: formData.bio || '',
                skills: formData.skills || [],
                emergencyContact: formData.emergencyContact || '',
                emergencyPhone: formData.emergencyPhone || ''
            });
            setEditing(false);
        } catch (err) {
            console.error(err);
            alert("Failed to update profile.");
        }
    };
    const Label = ({ children })=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$hr$2f$Hrms$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            style: {
                fontSize: '11px',
                fontWeight: '800',
                color: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$hr$2f$Hrms$2f$src$2f$styles$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["tokens"].colors.secondary,
                textTransform: 'uppercase',
                letterSpacing: '0.08em',
                marginBottom: '6px'
            },
            children: children
        }, void 0, false, {
            fileName: "[project]/Documents/hr/Hrms/src/components/Profile/index.js",
            lineNumber: 87,
            columnNumber: 9
        }, ("TURBOPACK compile-time value", void 0));
    const Value = ({ children, muted })=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$hr$2f$Hrms$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            style: {
                fontSize: '14px',
                fontWeight: '600',
                color: muted ? __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$hr$2f$Hrms$2f$src$2f$styles$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["tokens"].colors.secondary : __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$hr$2f$Hrms$2f$src$2f$styles$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["tokens"].colors.primary
            },
            children: children
        }, void 0, false, {
            fileName: "[project]/Documents/hr/Hrms/src/components/Profile/index.js",
            lineNumber: 93,
            columnNumber: 9
        }, ("TURBOPACK compile-time value", void 0));
    if (loading) return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$hr$2f$Hrms$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        style: {
            display: 'flex',
            alignItems: 'center',
            gap: '12px',
            padding: '48px',
            color: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$hr$2f$Hrms$2f$src$2f$styles$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["tokens"].colors.secondary
        },
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$hr$2f$Hrms$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                className: "material-symbols-outlined",
                style: {
                    fontSize: '20px'
                },
                children: "hourglass_top"
            }, void 0, false, {
                fileName: "[project]/Documents/hr/Hrms/src/components/Profile/index.js",
                lineNumber: 100,
                columnNumber: 13
            }, ("TURBOPACK compile-time value", void 0)),
            "Loading profile..."
        ]
    }, void 0, true, {
        fileName: "[project]/Documents/hr/Hrms/src/components/Profile/index.js",
        lineNumber: 99,
        columnNumber: 9
    }, ("TURBOPACK compile-time value", void 0));
    if (error) return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$hr$2f$Hrms$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        style: {
            padding: '48px',
            textAlign: 'center',
            background: '#FEF2F2',
            borderRadius: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$hr$2f$Hrms$2f$src$2f$styles$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["tokens"].radius.lg,
            border: '1px solid #FCA5A5'
        },
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$hr$2f$Hrms$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                className: "material-symbols-outlined",
                style: {
                    fontSize: '48px',
                    color: '#DC2626',
                    display: 'block',
                    marginBottom: '16px'
                },
                children: "error"
            }, void 0, false, {
                fileName: "[project]/Documents/hr/Hrms/src/components/Profile/index.js",
                lineNumber: 107,
                columnNumber: 13
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$hr$2f$Hrms$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    fontSize: '18px',
                    fontWeight: '700',
                    color: '#991B1B',
                    marginBottom: '8px'
                },
                children: error
            }, void 0, false, {
                fileName: "[project]/Documents/hr/Hrms/src/components/Profile/index.js",
                lineNumber: 108,
                columnNumber: 13
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$hr$2f$Hrms$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                style: {
                    color: '#B91C1C',
                    fontSize: '14px'
                },
                children: [
                    "Contact HR to link your record (Email: ",
                    user.email,
                    ")."
                ]
            }, void 0, true, {
                fileName: "[project]/Documents/hr/Hrms/src/components/Profile/index.js",
                lineNumber: 109,
                columnNumber: 13
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/Documents/hr/Hrms/src/components/Profile/index.js",
        lineNumber: 106,
        columnNumber: 9
    }, ("TURBOPACK compile-time value", void 0));
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$hr$2f$Hrms$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "animate-fade",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$hr$2f$Hrms$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    marginBottom: '32px'
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$hr$2f$Hrms$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                        style: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$hr$2f$Hrms$2f$src$2f$styles$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["styles"].greeting,
                        children: "My Profile"
                    }, void 0, false, {
                        fileName: "[project]/Documents/hr/Hrms/src/components/Profile/index.js",
                        lineNumber: 118,
                        columnNumber: 17
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$hr$2f$Hrms$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        style: {
                            color: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$hr$2f$Hrms$2f$src$2f$styles$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["tokens"].colors.secondary,
                            fontSize: '14px',
                            marginTop: '4px'
                        },
                        children: "Your corporate identity and personal record."
                    }, void 0, false, {
                        fileName: "[project]/Documents/hr/Hrms/src/components/Profile/index.js",
                        lineNumber: 119,
                        columnNumber: 17
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/Documents/hr/Hrms/src/components/Profile/index.js",
                lineNumber: 117,
                columnNumber: 13
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$hr$2f$Hrms$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    ...__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$hr$2f$Hrms$2f$src$2f$styles$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["styles"].card,
                    padding: '32px 40px',
                    marginBottom: '24px',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '32px'
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$hr$2f$Hrms$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            width: '88px',
                            height: '88px',
                            flexShrink: 0,
                            borderRadius: '24px',
                            background: `linear-gradient(135deg, ${__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$hr$2f$Hrms$2f$src$2f$styles$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["tokens"].colors.accent}18 0%, ${__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$hr$2f$Hrms$2f$src$2f$styles$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["tokens"].colors.accent}35 100%)`,
                            border: `2px solid ${__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$hr$2f$Hrms$2f$src$2f$styles$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["tokens"].colors.accent}25`,
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            fontSize: '36px',
                            fontWeight: '800',
                            color: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$hr$2f$Hrms$2f$src$2f$styles$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["tokens"].colors.accent
                        },
                        children: profile.name?.charAt(0).toUpperCase()
                    }, void 0, false, {
                        fileName: "[project]/Documents/hr/Hrms/src/components/Profile/index.js",
                        lineNumber: 134,
                        columnNumber: 17
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$hr$2f$Hrms$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            flex: 1,
                            minWidth: 0
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$hr$2f$Hrms$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                style: {
                                    fontSize: '24px',
                                    fontWeight: '800',
                                    color: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$hr$2f$Hrms$2f$src$2f$styles$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["tokens"].colors.primary,
                                    letterSpacing: '-0.02em',
                                    marginBottom: '4px'
                                },
                                children: profile.name
                            }, void 0, false, {
                                fileName: "[project]/Documents/hr/Hrms/src/components/Profile/index.js",
                                lineNumber: 147,
                                columnNumber: 21
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$hr$2f$Hrms$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                style: {
                                    display: 'flex',
                                    alignItems: 'center',
                                    gap: '10px',
                                    flexWrap: 'wrap'
                                },
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$hr$2f$Hrms$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        style: {
                                            fontSize: '14px',
                                            color: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$hr$2f$Hrms$2f$src$2f$styles$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["tokens"].colors.secondary,
                                            fontWeight: '500'
                                        },
                                        children: profile.role
                                    }, void 0, false, {
                                        fileName: "[project]/Documents/hr/Hrms/src/components/Profile/index.js",
                                        lineNumber: 151,
                                        columnNumber: 25
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$hr$2f$Hrms$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        style: {
                                            width: '4px',
                                            height: '4px',
                                            borderRadius: '50%',
                                            background: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$hr$2f$Hrms$2f$src$2f$styles$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["tokens"].colors.border,
                                            display: 'inline-block'
                                        }
                                    }, void 0, false, {
                                        fileName: "[project]/Documents/hr/Hrms/src/components/Profile/index.js",
                                        lineNumber: 152,
                                        columnNumber: 25
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$hr$2f$Hrms$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        style: {
                                            fontSize: '14px',
                                            color: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$hr$2f$Hrms$2f$src$2f$styles$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["tokens"].colors.secondary,
                                            fontWeight: '500'
                                        },
                                        children: profile.dept
                                    }, void 0, false, {
                                        fileName: "[project]/Documents/hr/Hrms/src/components/Profile/index.js",
                                        lineNumber: 153,
                                        columnNumber: 25
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Documents/hr/Hrms/src/components/Profile/index.js",
                                lineNumber: 150,
                                columnNumber: 21
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Documents/hr/Hrms/src/components/Profile/index.js",
                        lineNumber: 146,
                        columnNumber: 17
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$hr$2f$Hrms$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            display: 'flex',
                            gap: '32px',
                            flexShrink: 0
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$hr$2f$Hrms$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                style: {
                                    textAlign: 'center'
                                },
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$hr$2f$Hrms$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        style: {
                                            fontSize: '11px',
                                            fontWeight: '700',
                                            color: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$hr$2f$Hrms$2f$src$2f$styles$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["tokens"].colors.secondary,
                                            textTransform: 'uppercase',
                                            letterSpacing: '0.06em',
                                            marginBottom: '4px'
                                        },
                                        children: "Status"
                                    }, void 0, false, {
                                        fileName: "[project]/Documents/hr/Hrms/src/components/Profile/index.js",
                                        lineNumber: 160,
                                        columnNumber: 25
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$hr$2f$Hrms$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        style: {
                                            display: 'flex',
                                            alignItems: 'center',
                                            gap: '6px'
                                        },
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$hr$2f$Hrms$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                style: {
                                                    width: '8px',
                                                    height: '8px',
                                                    borderRadius: '50%',
                                                    background: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$hr$2f$Hrms$2f$src$2f$styles$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["tokens"].colors.success,
                                                    display: 'inline-block'
                                                }
                                            }, void 0, false, {
                                                fileName: "[project]/Documents/hr/Hrms/src/components/Profile/index.js",
                                                lineNumber: 162,
                                                columnNumber: 29
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$hr$2f$Hrms$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                style: {
                                                    fontSize: '13px',
                                                    fontWeight: '700',
                                                    color: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$hr$2f$Hrms$2f$src$2f$styles$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["tokens"].colors.success
                                                },
                                                children: "Active"
                                            }, void 0, false, {
                                                fileName: "[project]/Documents/hr/Hrms/src/components/Profile/index.js",
                                                lineNumber: 163,
                                                columnNumber: 29
                                            }, ("TURBOPACK compile-time value", void 0))
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Documents/hr/Hrms/src/components/Profile/index.js",
                                        lineNumber: 161,
                                        columnNumber: 25
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Documents/hr/Hrms/src/components/Profile/index.js",
                                lineNumber: 159,
                                columnNumber: 21
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$hr$2f$Hrms$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                style: {
                                    width: '1px',
                                    background: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$hr$2f$Hrms$2f$src$2f$styles$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["tokens"].colors.border
                                }
                            }, void 0, false, {
                                fileName: "[project]/Documents/hr/Hrms/src/components/Profile/index.js",
                                lineNumber: 166,
                                columnNumber: 21
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$hr$2f$Hrms$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                style: {
                                    textAlign: 'center'
                                },
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$hr$2f$Hrms$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        style: {
                                            fontSize: '11px',
                                            fontWeight: '700',
                                            color: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$hr$2f$Hrms$2f$src$2f$styles$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["tokens"].colors.secondary,
                                            textTransform: 'uppercase',
                                            letterSpacing: '0.06em',
                                            marginBottom: '4px'
                                        },
                                        children: "Joined"
                                    }, void 0, false, {
                                        fileName: "[project]/Documents/hr/Hrms/src/components/Profile/index.js",
                                        lineNumber: 168,
                                        columnNumber: 25
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$hr$2f$Hrms$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        style: {
                                            fontSize: '13px',
                                            fontWeight: '700',
                                            color: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$hr$2f$Hrms$2f$src$2f$styles$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["tokens"].colors.primary
                                        },
                                        children: new Date(profile.joinedDate).toLocaleDateString(undefined, {
                                            month: 'short',
                                            year: 'numeric'
                                        })
                                    }, void 0, false, {
                                        fileName: "[project]/Documents/hr/Hrms/src/components/Profile/index.js",
                                        lineNumber: 169,
                                        columnNumber: 25
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Documents/hr/Hrms/src/components/Profile/index.js",
                                lineNumber: 167,
                                columnNumber: 21
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$hr$2f$Hrms$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                style: {
                                    width: '1px',
                                    background: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$hr$2f$Hrms$2f$src$2f$styles$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["tokens"].colors.border
                                }
                            }, void 0, false, {
                                fileName: "[project]/Documents/hr/Hrms/src/components/Profile/index.js",
                                lineNumber: 173,
                                columnNumber: 21
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$hr$2f$Hrms$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                style: {
                                    textAlign: 'center'
                                },
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$hr$2f$Hrms$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        style: {
                                            fontSize: '11px',
                                            fontWeight: '700',
                                            color: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$hr$2f$Hrms$2f$src$2f$styles$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["tokens"].colors.secondary,
                                            textTransform: 'uppercase',
                                            letterSpacing: '0.06em',
                                            marginBottom: '4px'
                                        },
                                        children: "Email"
                                    }, void 0, false, {
                                        fileName: "[project]/Documents/hr/Hrms/src/components/Profile/index.js",
                                        lineNumber: 175,
                                        columnNumber: 25
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$hr$2f$Hrms$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        style: {
                                            fontSize: '13px',
                                            fontWeight: '700',
                                            color: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$hr$2f$Hrms$2f$src$2f$styles$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["tokens"].colors.primary
                                        },
                                        children: profile.email
                                    }, void 0, false, {
                                        fileName: "[project]/Documents/hr/Hrms/src/components/Profile/index.js",
                                        lineNumber: 176,
                                        columnNumber: 25
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Documents/hr/Hrms/src/components/Profile/index.js",
                                lineNumber: 174,
                                columnNumber: 21
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Documents/hr/Hrms/src/components/Profile/index.js",
                        lineNumber: 158,
                        columnNumber: 17
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$hr$2f$Hrms$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: ()=>editing ? handleUpdate() : setEditing(true),
                        style: {
                            ...__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$hr$2f$Hrms$2f$src$2f$styles$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["styles"].button[editing ? 'primary' : 'outline'],
                            padding: '10px 20px',
                            flexShrink: 0
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$hr$2f$Hrms$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "material-symbols-outlined",
                                style: {
                                    fontSize: '18px'
                                },
                                children: editing ? 'check' : 'edit'
                            }, void 0, false, {
                                fileName: "[project]/Documents/hr/Hrms/src/components/Profile/index.js",
                                lineNumber: 185,
                                columnNumber: 21
                            }, ("TURBOPACK compile-time value", void 0)),
                            editing ? 'Save' : 'Edit Profile'
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Documents/hr/Hrms/src/components/Profile/index.js",
                        lineNumber: 181,
                        columnNumber: 17
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/Documents/hr/Hrms/src/components/Profile/index.js",
                lineNumber: 125,
                columnNumber: 13
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$hr$2f$Hrms$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    display: 'grid',
                    gridTemplateColumns: '1fr 1fr',
                    gap: '24px'
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$hr$2f$Hrms$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            ...__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$hr$2f$Hrms$2f$src$2f$styles$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["styles"].card,
                            padding: '28px 32px'
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$hr$2f$Hrms$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                style: {
                                    display: 'flex',
                                    alignItems: 'center',
                                    gap: '10px',
                                    marginBottom: '24px'
                                },
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$hr$2f$Hrms$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        style: {
                                            width: '32px',
                                            height: '32px',
                                            borderRadius: '10px',
                                            background: '#F0FDFA',
                                            display: 'flex',
                                            alignItems: 'center',
                                            justifyContent: 'center'
                                        },
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$hr$2f$Hrms$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "material-symbols-outlined",
                                            style: {
                                                fontSize: '18px',
                                                color: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$hr$2f$Hrms$2f$src$2f$styles$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["tokens"].colors.accent
                                            },
                                            children: "person"
                                        }, void 0, false, {
                                            fileName: "[project]/Documents/hr/Hrms/src/components/Profile/index.js",
                                            lineNumber: 197,
                                            columnNumber: 29
                                        }, ("TURBOPACK compile-time value", void 0))
                                    }, void 0, false, {
                                        fileName: "[project]/Documents/hr/Hrms/src/components/Profile/index.js",
                                        lineNumber: 196,
                                        columnNumber: 25
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$hr$2f$Hrms$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                        style: {
                                            fontSize: '16px',
                                            fontWeight: '800',
                                            color: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$hr$2f$Hrms$2f$src$2f$styles$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["tokens"].colors.primary
                                        },
                                        children: "Personal Info"
                                    }, void 0, false, {
                                        fileName: "[project]/Documents/hr/Hrms/src/components/Profile/index.js",
                                        lineNumber: 199,
                                        columnNumber: 25
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Documents/hr/Hrms/src/components/Profile/index.js",
                                lineNumber: 195,
                                columnNumber: 21
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$hr$2f$Hrms$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                style: {
                                    display: 'flex',
                                    flexDirection: 'column',
                                    gap: '20px'
                                },
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$hr$2f$Hrms$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$hr$2f$Hrms$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(Label, {
                                                children: "Phone Number"
                                            }, void 0, false, {
                                                fileName: "[project]/Documents/hr/Hrms/src/components/Profile/index.js",
                                                lineNumber: 203,
                                                columnNumber: 29
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            editing ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$hr$2f$Hrms$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                style: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$hr$2f$Hrms$2f$src$2f$styles$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["styles"].input,
                                                value: formData.phone || '',
                                                onChange: (e)=>setFormData({
                                                        ...formData,
                                                        phone: e.target.value
                                                    }),
                                                placeholder: "+1 (555) 000-0000"
                                            }, void 0, false, {
                                                fileName: "[project]/Documents/hr/Hrms/src/components/Profile/index.js",
                                                lineNumber: 205,
                                                columnNumber: 33
                                            }, ("TURBOPACK compile-time value", void 0)) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$hr$2f$Hrms$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(Value, {
                                                muted: !profile.phone,
                                                children: profile.phone || 'Not registered'
                                            }, void 0, false, {
                                                fileName: "[project]/Documents/hr/Hrms/src/components/Profile/index.js",
                                                lineNumber: 207,
                                                columnNumber: 33
                                            }, ("TURBOPACK compile-time value", void 0))
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Documents/hr/Hrms/src/components/Profile/index.js",
                                        lineNumber: 202,
                                        columnNumber: 25
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$hr$2f$Hrms$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$hr$2f$Hrms$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(Label, {
                                                children: "Date of Birth"
                                            }, void 0, false, {
                                                fileName: "[project]/Documents/hr/Hrms/src/components/Profile/index.js",
                                                lineNumber: 211,
                                                columnNumber: 29
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$hr$2f$Hrms$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(Value, {
                                                muted: !profile.dob,
                                                children: profile.dob || 'Private'
                                            }, void 0, false, {
                                                fileName: "[project]/Documents/hr/Hrms/src/components/Profile/index.js",
                                                lineNumber: 212,
                                                columnNumber: 29
                                            }, ("TURBOPACK compile-time value", void 0))
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Documents/hr/Hrms/src/components/Profile/index.js",
                                        lineNumber: 210,
                                        columnNumber: 25
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$hr$2f$Hrms$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$hr$2f$Hrms$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(Label, {
                                                children: "Home Address"
                                            }, void 0, false, {
                                                fileName: "[project]/Documents/hr/Hrms/src/components/Profile/index.js",
                                                lineNumber: 215,
                                                columnNumber: 29
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            editing ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$hr$2f$Hrms$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("textarea", {
                                                style: {
                                                    ...__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$hr$2f$Hrms$2f$src$2f$styles$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["styles"].input,
                                                    minHeight: '72px',
                                                    resize: 'none'
                                                },
                                                value: formData.address || '',
                                                onChange: (e)=>setFormData({
                                                        ...formData,
                                                        address: e.target.value
                                                    }),
                                                placeholder: "Full address..."
                                            }, void 0, false, {
                                                fileName: "[project]/Documents/hr/Hrms/src/components/Profile/index.js",
                                                lineNumber: 217,
                                                columnNumber: 33
                                            }, ("TURBOPACK compile-time value", void 0)) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$hr$2f$Hrms$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(Value, {
                                                muted: !profile.address,
                                                children: profile.address || 'Not specified'
                                            }, void 0, false, {
                                                fileName: "[project]/Documents/hr/Hrms/src/components/Profile/index.js",
                                                lineNumber: 219,
                                                columnNumber: 33
                                            }, ("TURBOPACK compile-time value", void 0))
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Documents/hr/Hrms/src/components/Profile/index.js",
                                        lineNumber: 214,
                                        columnNumber: 25
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Documents/hr/Hrms/src/components/Profile/index.js",
                                lineNumber: 201,
                                columnNumber: 21
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Documents/hr/Hrms/src/components/Profile/index.js",
                        lineNumber: 194,
                        columnNumber: 17
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$hr$2f$Hrms$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            ...__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$hr$2f$Hrms$2f$src$2f$styles$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["styles"].card,
                            padding: '28px 32px'
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$hr$2f$Hrms$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                style: {
                                    display: 'flex',
                                    alignItems: 'center',
                                    gap: '10px',
                                    marginBottom: '24px'
                                },
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$hr$2f$Hrms$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        style: {
                                            width: '32px',
                                            height: '32px',
                                            borderRadius: '10px',
                                            background: '#FFF7ED',
                                            display: 'flex',
                                            alignItems: 'center',
                                            justifyContent: 'center'
                                        },
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$hr$2f$Hrms$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "material-symbols-outlined",
                                            style: {
                                                fontSize: '18px',
                                                color: '#F97316'
                                            },
                                            children: "emergency_home"
                                        }, void 0, false, {
                                            fileName: "[project]/Documents/hr/Hrms/src/components/Profile/index.js",
                                            lineNumber: 229,
                                            columnNumber: 29
                                        }, ("TURBOPACK compile-time value", void 0))
                                    }, void 0, false, {
                                        fileName: "[project]/Documents/hr/Hrms/src/components/Profile/index.js",
                                        lineNumber: 228,
                                        columnNumber: 25
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$hr$2f$Hrms$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                        style: {
                                            fontSize: '16px',
                                            fontWeight: '800',
                                            color: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$hr$2f$Hrms$2f$src$2f$styles$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["tokens"].colors.primary
                                        },
                                        children: "Emergency Contact"
                                    }, void 0, false, {
                                        fileName: "[project]/Documents/hr/Hrms/src/components/Profile/index.js",
                                        lineNumber: 231,
                                        columnNumber: 25
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Documents/hr/Hrms/src/components/Profile/index.js",
                                lineNumber: 227,
                                columnNumber: 21
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$hr$2f$Hrms$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                style: {
                                    display: 'flex',
                                    flexDirection: 'column',
                                    gap: '20px'
                                },
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$hr$2f$Hrms$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$hr$2f$Hrms$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(Label, {
                                                children: "Contact Name"
                                            }, void 0, false, {
                                                fileName: "[project]/Documents/hr/Hrms/src/components/Profile/index.js",
                                                lineNumber: 235,
                                                columnNumber: 29
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            editing ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$hr$2f$Hrms$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                style: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$hr$2f$Hrms$2f$src$2f$styles$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["styles"].input,
                                                value: formData.emergencyContact || '',
                                                onChange: (e)=>setFormData({
                                                        ...formData,
                                                        emergencyContact: e.target.value
                                                    }),
                                                placeholder: "Full name & relation"
                                            }, void 0, false, {
                                                fileName: "[project]/Documents/hr/Hrms/src/components/Profile/index.js",
                                                lineNumber: 237,
                                                columnNumber: 33
                                            }, ("TURBOPACK compile-time value", void 0)) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$hr$2f$Hrms$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(Value, {
                                                muted: !profile.emergencyContact,
                                                children: profile.emergencyContact || 'Not set'
                                            }, void 0, false, {
                                                fileName: "[project]/Documents/hr/Hrms/src/components/Profile/index.js",
                                                lineNumber: 239,
                                                columnNumber: 33
                                            }, ("TURBOPACK compile-time value", void 0))
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Documents/hr/Hrms/src/components/Profile/index.js",
                                        lineNumber: 234,
                                        columnNumber: 25
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$hr$2f$Hrms$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$hr$2f$Hrms$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(Label, {
                                                children: "Phone"
                                            }, void 0, false, {
                                                fileName: "[project]/Documents/hr/Hrms/src/components/Profile/index.js",
                                                lineNumber: 243,
                                                columnNumber: 29
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            editing ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$hr$2f$Hrms$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                style: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$hr$2f$Hrms$2f$src$2f$styles$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["styles"].input,
                                                value: formData.emergencyPhone || '',
                                                onChange: (e)=>setFormData({
                                                        ...formData,
                                                        emergencyPhone: e.target.value
                                                    }),
                                                placeholder: "+1 (555) 000-0000"
                                            }, void 0, false, {
                                                fileName: "[project]/Documents/hr/Hrms/src/components/Profile/index.js",
                                                lineNumber: 245,
                                                columnNumber: 33
                                            }, ("TURBOPACK compile-time value", void 0)) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$hr$2f$Hrms$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(Value, {
                                                muted: !profile.emergencyPhone,
                                                children: profile.emergencyPhone || 'Not set'
                                            }, void 0, false, {
                                                fileName: "[project]/Documents/hr/Hrms/src/components/Profile/index.js",
                                                lineNumber: 247,
                                                columnNumber: 33
                                            }, ("TURBOPACK compile-time value", void 0))
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Documents/hr/Hrms/src/components/Profile/index.js",
                                        lineNumber: 242,
                                        columnNumber: 25
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Documents/hr/Hrms/src/components/Profile/index.js",
                                lineNumber: 233,
                                columnNumber: 21
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Documents/hr/Hrms/src/components/Profile/index.js",
                        lineNumber: 226,
                        columnNumber: 17
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$hr$2f$Hrms$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            ...__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$hr$2f$Hrms$2f$src$2f$styles$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["styles"].card,
                            padding: '28px 32px'
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$hr$2f$Hrms$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                style: {
                                    display: 'flex',
                                    alignItems: 'center',
                                    gap: '10px',
                                    marginBottom: '24px'
                                },
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$hr$2f$Hrms$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        style: {
                                            width: '32px',
                                            height: '32px',
                                            borderRadius: '10px',
                                            background: '#F0FDFA',
                                            display: 'flex',
                                            alignItems: 'center',
                                            justifyContent: 'center'
                                        },
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$hr$2f$Hrms$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "material-symbols-outlined",
                                            style: {
                                                fontSize: '18px',
                                                color: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$hr$2f$Hrms$2f$src$2f$styles$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["tokens"].colors.accent
                                            },
                                            children: "psychology"
                                        }, void 0, false, {
                                            fileName: "[project]/Documents/hr/Hrms/src/components/Profile/index.js",
                                            lineNumber: 257,
                                            columnNumber: 29
                                        }, ("TURBOPACK compile-time value", void 0))
                                    }, void 0, false, {
                                        fileName: "[project]/Documents/hr/Hrms/src/components/Profile/index.js",
                                        lineNumber: 256,
                                        columnNumber: 25
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$hr$2f$Hrms$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                        style: {
                                            fontSize: '16px',
                                            fontWeight: '800',
                                            color: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$hr$2f$Hrms$2f$src$2f$styles$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["tokens"].colors.primary
                                        },
                                        children: "Skills & Bio"
                                    }, void 0, false, {
                                        fileName: "[project]/Documents/hr/Hrms/src/components/Profile/index.js",
                                        lineNumber: 259,
                                        columnNumber: 25
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Documents/hr/Hrms/src/components/Profile/index.js",
                                lineNumber: 255,
                                columnNumber: 21
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$hr$2f$Hrms$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                style: {
                                    marginBottom: '20px'
                                },
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$hr$2f$Hrms$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(Label, {
                                        children: "Skill Matrix"
                                    }, void 0, false, {
                                        fileName: "[project]/Documents/hr/Hrms/src/components/Profile/index.js",
                                        lineNumber: 262,
                                        columnNumber: 25
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$hr$2f$Hrms$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        style: {
                                            display: 'flex',
                                            flexWrap: 'wrap',
                                            gap: '8px',
                                            marginTop: '8px'
                                        },
                                        children: [
                                            (formData.skills || [
                                                'Management',
                                                'Communication',
                                                'Strategic Planning'
                                            ]).map((skill)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$hr$2f$Hrms$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    style: {
                                                        display: 'inline-flex',
                                                        alignItems: 'center',
                                                        gap: '6px',
                                                        padding: '5px 12px',
                                                        fontSize: '12px',
                                                        fontWeight: '600',
                                                        background: '#F0FDFA',
                                                        color: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$hr$2f$Hrms$2f$src$2f$styles$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["tokens"].colors.accent,
                                                        border: '1px solid #CCFBF1',
                                                        borderRadius: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$hr$2f$Hrms$2f$src$2f$styles$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["tokens"].radius.full
                                                    },
                                                    children: [
                                                        skill,
                                                        editing && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$hr$2f$Hrms$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "material-symbols-outlined",
                                                            style: {
                                                                fontSize: '14px',
                                                                cursor: 'pointer',
                                                                opacity: 0.5
                                                            },
                                                            onClick: ()=>setFormData({
                                                                    ...formData,
                                                                    skills: (formData.skills || []).filter((s)=>s !== skill)
                                                                }),
                                                            children: "close"
                                                        }, void 0, false, {
                                                            fileName: "[project]/Documents/hr/Hrms/src/components/Profile/index.js",
                                                            lineNumber: 268,
                                                            columnNumber: 41
                                                        }, ("TURBOPACK compile-time value", void 0))
                                                    ]
                                                }, skill, true, {
                                                    fileName: "[project]/Documents/hr/Hrms/src/components/Profile/index.js",
                                                    lineNumber: 265,
                                                    columnNumber: 33
                                                }, ("TURBOPACK compile-time value", void 0))),
                                            editing && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$hr$2f$Hrms$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                style: {
                                                    ...__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$hr$2f$Hrms$2f$src$2f$styles$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["styles"].input,
                                                    width: '120px',
                                                    padding: '5px 12px',
                                                    fontSize: '12px',
                                                    borderStyle: 'dashed',
                                                    background: 'transparent'
                                                },
                                                placeholder: "+ Add skill",
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
                                                fileName: "[project]/Documents/hr/Hrms/src/components/Profile/index.js",
                                                lineNumber: 273,
                                                columnNumber: 33
                                            }, ("TURBOPACK compile-time value", void 0))
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Documents/hr/Hrms/src/components/Profile/index.js",
                                        lineNumber: 263,
                                        columnNumber: 25
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Documents/hr/Hrms/src/components/Profile/index.js",
                                lineNumber: 261,
                                columnNumber: 21
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$hr$2f$Hrms$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$hr$2f$Hrms$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(Label, {
                                        children: "Professional Bio"
                                    }, void 0, false, {
                                        fileName: "[project]/Documents/hr/Hrms/src/components/Profile/index.js",
                                        lineNumber: 291,
                                        columnNumber: 25
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    editing ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$hr$2f$Hrms$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("textarea", {
                                        style: {
                                            ...__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$hr$2f$Hrms$2f$src$2f$styles$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["styles"].input,
                                            minHeight: '100px',
                                            resize: 'none',
                                            marginTop: '8px'
                                        },
                                        value: formData.bio || '',
                                        onChange: (e)=>setFormData({
                                                ...formData,
                                                bio: e.target.value
                                            }),
                                        placeholder: "Brief professional summary..."
                                    }, void 0, false, {
                                        fileName: "[project]/Documents/hr/Hrms/src/components/Profile/index.js",
                                        lineNumber: 293,
                                        columnNumber: 29
                                    }, ("TURBOPACK compile-time value", void 0)) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$hr$2f$Hrms$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        style: {
                                            fontSize: '14px',
                                            color: profile.bio ? __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$hr$2f$Hrms$2f$src$2f$styles$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["tokens"].colors.primary : __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$hr$2f$Hrms$2f$src$2f$styles$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["tokens"].colors.secondary,
                                            lineHeight: '1.7',
                                            fontWeight: '500',
                                            marginTop: '4px'
                                        },
                                        children: profile.bio || 'No bio added yet. Click Edit Profile to add one.'
                                    }, void 0, false, {
                                        fileName: "[project]/Documents/hr/Hrms/src/components/Profile/index.js",
                                        lineNumber: 295,
                                        columnNumber: 29
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Documents/hr/Hrms/src/components/Profile/index.js",
                                lineNumber: 290,
                                columnNumber: 21
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Documents/hr/Hrms/src/components/Profile/index.js",
                        lineNumber: 254,
                        columnNumber: 17
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$hr$2f$Hrms$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            ...__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$hr$2f$Hrms$2f$src$2f$styles$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["styles"].card,
                            padding: '28px 32px'
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$hr$2f$Hrms$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                style: {
                                    display: 'flex',
                                    alignItems: 'center',
                                    gap: '10px',
                                    marginBottom: '24px'
                                },
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$hr$2f$Hrms$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        style: {
                                            width: '32px',
                                            height: '32px',
                                            borderRadius: '10px',
                                            background: '#F8FAFC',
                                            display: 'flex',
                                            alignItems: 'center',
                                            justifyContent: 'center'
                                        },
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$hr$2f$Hrms$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "material-symbols-outlined",
                                            style: {
                                                fontSize: '18px',
                                                color: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$hr$2f$Hrms$2f$src$2f$styles$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["tokens"].colors.secondary
                                            },
                                            children: "shield"
                                        }, void 0, false, {
                                            fileName: "[project]/Documents/hr/Hrms/src/components/Profile/index.js",
                                            lineNumber: 306,
                                            columnNumber: 29
                                        }, ("TURBOPACK compile-time value", void 0))
                                    }, void 0, false, {
                                        fileName: "[project]/Documents/hr/Hrms/src/components/Profile/index.js",
                                        lineNumber: 305,
                                        columnNumber: 25
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$hr$2f$Hrms$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                        style: {
                                            fontSize: '16px',
                                            fontWeight: '800',
                                            color: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$hr$2f$Hrms$2f$src$2f$styles$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["tokens"].colors.primary
                                        },
                                        children: "Account Security"
                                    }, void 0, false, {
                                        fileName: "[project]/Documents/hr/Hrms/src/components/Profile/index.js",
                                        lineNumber: 308,
                                        columnNumber: 25
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Documents/hr/Hrms/src/components/Profile/index.js",
                                lineNumber: 304,
                                columnNumber: 21
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$hr$2f$Hrms$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: ()=>setShowPasswordModal(true),
                                style: {
                                    width: '100%',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'space-between',
                                    padding: '16px',
                                    background: '#F8FAFC',
                                    border: `1px solid ${__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$hr$2f$Hrms$2f$src$2f$styles$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["tokens"].colors.border}`,
                                    borderRadius: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$hr$2f$Hrms$2f$src$2f$styles$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["tokens"].radius.md,
                                    cursor: 'pointer',
                                    transition: 'all 0.2s',
                                    marginBottom: '12px'
                                },
                                onMouseOver: (e)=>e.currentTarget.style.borderColor = __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$hr$2f$Hrms$2f$src$2f$styles$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["tokens"].colors.accent,
                                onMouseOut: (e)=>e.currentTarget.style.borderColor = __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$hr$2f$Hrms$2f$src$2f$styles$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["tokens"].colors.border,
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$hr$2f$Hrms$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        style: {
                                            display: 'flex',
                                            alignItems: 'center',
                                            gap: '12px'
                                        },
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$hr$2f$Hrms$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "material-symbols-outlined",
                                                style: {
                                                    fontSize: '20px',
                                                    color: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$hr$2f$Hrms$2f$src$2f$styles$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["tokens"].colors.accent
                                                },
                                                children: "lock_reset"
                                            }, void 0, false, {
                                                fileName: "[project]/Documents/hr/Hrms/src/components/Profile/index.js",
                                                lineNumber: 318,
                                                columnNumber: 29
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$hr$2f$Hrms$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                style: {
                                                    textAlign: 'left'
                                                },
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$hr$2f$Hrms$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        style: {
                                                            fontSize: '14px',
                                                            fontWeight: '700',
                                                            color: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$hr$2f$Hrms$2f$src$2f$styles$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["tokens"].colors.primary
                                                        },
                                                        children: "Change Password"
                                                    }, void 0, false, {
                                                        fileName: "[project]/Documents/hr/Hrms/src/components/Profile/index.js",
                                                        lineNumber: 320,
                                                        columnNumber: 33
                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$hr$2f$Hrms$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        style: {
                                                            fontSize: '12px',
                                                            color: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$hr$2f$Hrms$2f$src$2f$styles$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["tokens"].colors.secondary
                                                        },
                                                        children: "Update your login credentials"
                                                    }, void 0, false, {
                                                        fileName: "[project]/Documents/hr/Hrms/src/components/Profile/index.js",
                                                        lineNumber: 321,
                                                        columnNumber: 33
                                                    }, ("TURBOPACK compile-time value", void 0))
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/Documents/hr/Hrms/src/components/Profile/index.js",
                                                lineNumber: 319,
                                                columnNumber: 29
                                            }, ("TURBOPACK compile-time value", void 0))
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Documents/hr/Hrms/src/components/Profile/index.js",
                                        lineNumber: 317,
                                        columnNumber: 25
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$hr$2f$Hrms$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "material-symbols-outlined",
                                        style: {
                                            fontSize: '18px',
                                            color: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$hr$2f$Hrms$2f$src$2f$styles$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["tokens"].colors.secondary
                                        },
                                        children: "chevron_right"
                                    }, void 0, false, {
                                        fileName: "[project]/Documents/hr/Hrms/src/components/Profile/index.js",
                                        lineNumber: 324,
                                        columnNumber: 25
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Documents/hr/Hrms/src/components/Profile/index.js",
                                lineNumber: 311,
                                columnNumber: 21
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$hr$2f$Hrms$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                style: {
                                    padding: '16px',
                                    background: '#F8FAFC',
                                    border: `1px solid ${__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$hr$2f$Hrms$2f$src$2f$styles$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["tokens"].colors.border}`,
                                    borderRadius: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$hr$2f$Hrms$2f$src$2f$styles$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["tokens"].radius.md,
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'space-between',
                                    opacity: 0.5
                                },
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$hr$2f$Hrms$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        style: {
                                            display: 'flex',
                                            alignItems: 'center',
                                            gap: '12px'
                                        },
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$hr$2f$Hrms$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "material-symbols-outlined",
                                                style: {
                                                    fontSize: '20px',
                                                    color: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$hr$2f$Hrms$2f$src$2f$styles$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["tokens"].colors.secondary
                                                },
                                                children: "history"
                                            }, void 0, false, {
                                                fileName: "[project]/Documents/hr/Hrms/src/components/Profile/index.js",
                                                lineNumber: 329,
                                                columnNumber: 29
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$hr$2f$Hrms$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$hr$2f$Hrms$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        style: {
                                                            fontSize: '14px',
                                                            fontWeight: '700',
                                                            color: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$hr$2f$Hrms$2f$src$2f$styles$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["tokens"].colors.primary
                                                        },
                                                        children: "Session History"
                                                    }, void 0, false, {
                                                        fileName: "[project]/Documents/hr/Hrms/src/components/Profile/index.js",
                                                        lineNumber: 331,
                                                        columnNumber: 33
                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$hr$2f$Hrms$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        style: {
                                                            fontSize: '12px',
                                                            color: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$hr$2f$Hrms$2f$src$2f$styles$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["tokens"].colors.secondary
                                                        },
                                                        children: "Coming soon"
                                                    }, void 0, false, {
                                                        fileName: "[project]/Documents/hr/Hrms/src/components/Profile/index.js",
                                                        lineNumber: 332,
                                                        columnNumber: 33
                                                    }, ("TURBOPACK compile-time value", void 0))
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/Documents/hr/Hrms/src/components/Profile/index.js",
                                                lineNumber: 330,
                                                columnNumber: 29
                                            }, ("TURBOPACK compile-time value", void 0))
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Documents/hr/Hrms/src/components/Profile/index.js",
                                        lineNumber: 328,
                                        columnNumber: 25
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$hr$2f$Hrms$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        style: {
                                            fontSize: '11px',
                                            fontWeight: '700',
                                            color: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$hr$2f$Hrms$2f$src$2f$styles$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["tokens"].colors.secondary,
                                            background: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$hr$2f$Hrms$2f$src$2f$styles$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["tokens"].colors.border,
                                            padding: '3px 10px',
                                            borderRadius: '999px'
                                        },
                                        children: "Soon"
                                    }, void 0, false, {
                                        fileName: "[project]/Documents/hr/Hrms/src/components/Profile/index.js",
                                        lineNumber: 335,
                                        columnNumber: 25
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Documents/hr/Hrms/src/components/Profile/index.js",
                                lineNumber: 327,
                                columnNumber: 21
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Documents/hr/Hrms/src/components/Profile/index.js",
                        lineNumber: 303,
                        columnNumber: 17
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/Documents/hr/Hrms/src/components/Profile/index.js",
                lineNumber: 191,
                columnNumber: 13
            }, ("TURBOPACK compile-time value", void 0)),
            showPasswordModal && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$hr$2f$Hrms$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$hr$2f$Hrms$2f$src$2f$styles$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["styles"].modal,
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$hr$2f$Hrms$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    style: {
                        ...__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$hr$2f$Hrms$2f$src$2f$styles$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["styles"].card,
                        width: '100%',
                        maxWidth: '420px',
                        padding: 0,
                        overflow: 'hidden',
                        boxShadow: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$hr$2f$Hrms$2f$src$2f$styles$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["tokens"].shadow.xl
                    },
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$hr$2f$Hrms$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            style: {
                                padding: '28px 32px',
                                borderBottom: `1px solid ${__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$hr$2f$Hrms$2f$src$2f$styles$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["tokens"].colors.border}`,
                                display: 'flex',
                                justifyContent: 'space-between',
                                alignItems: 'center'
                            },
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$hr$2f$Hrms$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$hr$2f$Hrms$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                            style: {
                                                fontSize: '18px',
                                                fontWeight: '800',
                                                color: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$hr$2f$Hrms$2f$src$2f$styles$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["tokens"].colors.primary
                                            },
                                            children: "Change Password"
                                        }, void 0, false, {
                                            fileName: "[project]/Documents/hr/Hrms/src/components/Profile/index.js",
                                            lineNumber: 347,
                                            columnNumber: 33
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$hr$2f$Hrms$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            style: {
                                                fontSize: '13px',
                                                color: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$hr$2f$Hrms$2f$src$2f$styles$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["tokens"].colors.secondary,
                                                marginTop: '2px'
                                            },
                                            children: "Set a new secure credential."
                                        }, void 0, false, {
                                            fileName: "[project]/Documents/hr/Hrms/src/components/Profile/index.js",
                                            lineNumber: 348,
                                            columnNumber: 33
                                        }, ("TURBOPACK compile-time value", void 0))
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Documents/hr/Hrms/src/components/Profile/index.js",
                                    lineNumber: 346,
                                    columnNumber: 29
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$hr$2f$Hrms$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    onClick: ()=>setShowPasswordModal(false),
                                    style: {
                                        background: '#F1F5F9',
                                        border: 'none',
                                        borderRadius: '50%',
                                        width: '34px',
                                        height: '34px',
                                        cursor: 'pointer',
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'center'
                                    },
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$hr$2f$Hrms$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "material-symbols-outlined",
                                        style: {
                                            fontSize: '18px',
                                            color: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$hr$2f$Hrms$2f$src$2f$styles$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["tokens"].colors.secondary
                                        },
                                        children: "close"
                                    }, void 0, false, {
                                        fileName: "[project]/Documents/hr/Hrms/src/components/Profile/index.js",
                                        lineNumber: 351,
                                        columnNumber: 33
                                    }, ("TURBOPACK compile-time value", void 0))
                                }, void 0, false, {
                                    fileName: "[project]/Documents/hr/Hrms/src/components/Profile/index.js",
                                    lineNumber: 350,
                                    columnNumber: 29
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Documents/hr/Hrms/src/components/Profile/index.js",
                            lineNumber: 345,
                            columnNumber: 25
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$hr$2f$Hrms$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
                            onSubmit: handlePasswordUpdate,
                            style: {
                                padding: '28px 32px',
                                display: 'flex',
                                flexDirection: 'column',
                                gap: '20px'
                            },
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$hr$2f$Hrms$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$hr$2f$Hrms$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                            style: {
                                                fontSize: '12px',
                                                fontWeight: '700',
                                                color: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$hr$2f$Hrms$2f$src$2f$styles$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["tokens"].colors.secondary,
                                                textTransform: 'uppercase',
                                                letterSpacing: '0.06em',
                                                display: 'block',
                                                marginBottom: '8px'
                                            },
                                            children: "Current Password"
                                        }, void 0, false, {
                                            fileName: "[project]/Documents/hr/Hrms/src/components/Profile/index.js",
                                            lineNumber: 356,
                                            columnNumber: 33
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$hr$2f$Hrms$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                            type: "password",
                                            style: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$hr$2f$Hrms$2f$src$2f$styles$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["styles"].input,
                                            required: true,
                                            value: newPass.current,
                                            onChange: (e)=>setNewPass({
                                                    ...newPass,
                                                    current: e.target.value
                                                }),
                                            placeholder: "••••••••"
                                        }, void 0, false, {
                                            fileName: "[project]/Documents/hr/Hrms/src/components/Profile/index.js",
                                            lineNumber: 357,
                                            columnNumber: 33
                                        }, ("TURBOPACK compile-time value", void 0))
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Documents/hr/Hrms/src/components/Profile/index.js",
                                    lineNumber: 355,
                                    columnNumber: 29
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$hr$2f$Hrms$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$hr$2f$Hrms$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                            style: {
                                                fontSize: '12px',
                                                fontWeight: '700',
                                                color: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$hr$2f$Hrms$2f$src$2f$styles$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["tokens"].colors.secondary,
                                                textTransform: 'uppercase',
                                                letterSpacing: '0.06em',
                                                display: 'block',
                                                marginBottom: '8px'
                                            },
                                            children: "New Password"
                                        }, void 0, false, {
                                            fileName: "[project]/Documents/hr/Hrms/src/components/Profile/index.js",
                                            lineNumber: 360,
                                            columnNumber: 33
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$hr$2f$Hrms$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                            type: "password",
                                            style: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$hr$2f$Hrms$2f$src$2f$styles$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["styles"].input,
                                            required: true,
                                            value: newPass.next,
                                            onChange: (e)=>setNewPass({
                                                    ...newPass,
                                                    next: e.target.value
                                                }),
                                            placeholder: "••••••••"
                                        }, void 0, false, {
                                            fileName: "[project]/Documents/hr/Hrms/src/components/Profile/index.js",
                                            lineNumber: 361,
                                            columnNumber: 33
                                        }, ("TURBOPACK compile-time value", void 0))
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Documents/hr/Hrms/src/components/Profile/index.js",
                                    lineNumber: 359,
                                    columnNumber: 29
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$hr$2f$Hrms$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$hr$2f$Hrms$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                            style: {
                                                fontSize: '12px',
                                                fontWeight: '700',
                                                color: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$hr$2f$Hrms$2f$src$2f$styles$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["tokens"].colors.secondary,
                                                textTransform: 'uppercase',
                                                letterSpacing: '0.06em',
                                                display: 'block',
                                                marginBottom: '8px'
                                            },
                                            children: "Confirm New Password"
                                        }, void 0, false, {
                                            fileName: "[project]/Documents/hr/Hrms/src/components/Profile/index.js",
                                            lineNumber: 364,
                                            columnNumber: 33
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$hr$2f$Hrms$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                            type: "password",
                                            style: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$hr$2f$Hrms$2f$src$2f$styles$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["styles"].input,
                                            required: true,
                                            value: newPass.confirm,
                                            onChange: (e)=>setNewPass({
                                                    ...newPass,
                                                    confirm: e.target.value
                                                }),
                                            placeholder: "••••••••"
                                        }, void 0, false, {
                                            fileName: "[project]/Documents/hr/Hrms/src/components/Profile/index.js",
                                            lineNumber: 365,
                                            columnNumber: 33
                                        }, ("TURBOPACK compile-time value", void 0))
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Documents/hr/Hrms/src/components/Profile/index.js",
                                    lineNumber: 363,
                                    columnNumber: 29
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$hr$2f$Hrms$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    style: {
                                        display: 'flex',
                                        gap: '12px',
                                        marginTop: '4px'
                                    },
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$hr$2f$Hrms$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            type: "button",
                                            onClick: ()=>setShowPasswordModal(false),
                                            style: {
                                                ...__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$hr$2f$Hrms$2f$src$2f$styles$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["styles"].button.outline,
                                                flex: 1
                                            },
                                            children: "Cancel"
                                        }, void 0, false, {
                                            fileName: "[project]/Documents/hr/Hrms/src/components/Profile/index.js",
                                            lineNumber: 368,
                                            columnNumber: 33
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$hr$2f$Hrms$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            type: "submit",
                                            style: {
                                                ...__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$hr$2f$Hrms$2f$src$2f$styles$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["styles"].button.primary,
                                                flex: 2
                                            },
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$hr$2f$Hrms$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "material-symbols-outlined",
                                                    style: {
                                                        fontSize: '18px'
                                                    },
                                                    children: "check"
                                                }, void 0, false, {
                                                    fileName: "[project]/Documents/hr/Hrms/src/components/Profile/index.js",
                                                    lineNumber: 370,
                                                    columnNumber: 37
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                "Update Password"
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/Documents/hr/Hrms/src/components/Profile/index.js",
                                            lineNumber: 369,
                                            columnNumber: 33
                                        }, ("TURBOPACK compile-time value", void 0))
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Documents/hr/Hrms/src/components/Profile/index.js",
                                    lineNumber: 367,
                                    columnNumber: 29
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Documents/hr/Hrms/src/components/Profile/index.js",
                            lineNumber: 354,
                            columnNumber: 25
                        }, ("TURBOPACK compile-time value", void 0))
                    ]
                }, void 0, true, {
                    fileName: "[project]/Documents/hr/Hrms/src/components/Profile/index.js",
                    lineNumber: 344,
                    columnNumber: 21
                }, ("TURBOPACK compile-time value", void 0))
            }, void 0, false, {
                fileName: "[project]/Documents/hr/Hrms/src/components/Profile/index.js",
                lineNumber: 343,
                columnNumber: 17
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/Documents/hr/Hrms/src/components/Profile/index.js",
        lineNumber: 114,
        columnNumber: 9
    }, ("TURBOPACK compile-time value", void 0));
};
const __TURBOPACK__default__export__ = Profile;
}),
];

//# sourceMappingURL=Documents_hr_Hrms_src_components_Profile_index_8ccc4bf2.js.map