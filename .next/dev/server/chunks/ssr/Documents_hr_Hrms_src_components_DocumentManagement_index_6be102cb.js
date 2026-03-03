module.exports = [
"[project]/Documents/hr/Hrms/src/components/DocumentManagement/index.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
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
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$hr$2f$Hrms$2f$src$2f$utils$2f$auditLog$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/hr/Hrms/src/utils/auditLog.js [app-ssr] (ecmascript)");
'use client';
;
;
;
;
;
;
/* ─── Document Classification ─── */ const DOC_CATEGORIES = [
    {
        id: 'policy',
        label: 'Policy',
        icon: 'gavel',
        color: '#7C3AED'
    },
    {
        id: 'sop',
        label: 'SOP',
        icon: 'assignment',
        color: '#0D9488'
    },
    {
        id: 'template',
        label: 'Template',
        icon: 'description',
        color: '#2563EB'
    },
    {
        id: 'compliance',
        label: 'Compliance',
        icon: 'verified_user',
        color: '#D97706'
    },
    {
        id: 'training',
        label: 'Training',
        icon: 'school',
        color: '#DC2626'
    },
    {
        id: 'general',
        label: 'General',
        icon: 'folder',
        color: '#6B7280'
    }
];
const CLASSIFICATIONS = [
    'Public',
    'Internal',
    'Confidential',
    'Restricted'
];
const DocumentManagement = ({ adminEmail = 'admin', user = {} })=>{
    const [documents, setDocuments] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$hr$2f$Hrms$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])([]);
    const [acknowledgements, setAcknowledgements] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$hr$2f$Hrms$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])([]);
    const [employees, setEmployees] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$hr$2f$Hrms$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])([]);
    const [showModal, setShowModal] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$hr$2f$Hrms$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [editing, setEditing] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$hr$2f$Hrms$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    const [selectedDoc, setSelectedDoc] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$hr$2f$Hrms$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    const [filterCategory, setFilterCategory] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$hr$2f$Hrms$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])('all');
    const [searchTerm, setSearchTerm] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$hr$2f$Hrms$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])('');
    const fileRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$hr$2f$Hrms$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    const [form, setForm] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$hr$2f$Hrms$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])({
        title: '',
        description: '',
        category: 'policy',
        classification: 'Internal',
        version: '1.0',
        requiresAck: false,
        content: '',
        fileName: ''
    });
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$hr$2f$Hrms$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        const u1 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$hr$2f$Hrms$2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["onSnapshot"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$hr$2f$Hrms$2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["query"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$hr$2f$Hrms$2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["collection"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$hr$2f$Hrms$2f$src$2f$firebase$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["db"], 'documents'), (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$hr$2f$Hrms$2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["orderBy"])('updatedAt', 'desc')), (s)=>setDocuments(s.docs.map((d)=>({
                    id: d.id,
                    ...d.data()
                }))));
        const u2 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$hr$2f$Hrms$2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["onSnapshot"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$hr$2f$Hrms$2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["collection"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$hr$2f$Hrms$2f$src$2f$firebase$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["db"], 'document_acknowledgements'), (s)=>setAcknowledgements(s.docs.map((d)=>({
                    id: d.id,
                    ...d.data()
                }))));
        const u3 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$hr$2f$Hrms$2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["onSnapshot"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$hr$2f$Hrms$2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["collection"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$hr$2f$Hrms$2f$src$2f$firebase$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["db"], 'employees'), (s)=>setEmployees(s.docs.map((d)=>({
                    id: d.id,
                    ...d.data()
                }))));
        return ()=>{
            u1();
            u2();
            u3();
        };
    }, []);
    const openCreate = ()=>{
        setForm({
            title: '',
            description: '',
            category: 'policy',
            classification: 'Internal',
            version: '1.0',
            requiresAck: false,
            content: '',
            fileName: ''
        });
        setEditing(null);
        setShowModal(true);
    };
    const openEdit = (doc)=>{
        setForm({
            title: doc.title || '',
            description: doc.description || '',
            category: doc.category || 'general',
            classification: doc.classification || 'Internal',
            version: doc.version || '1.0',
            requiresAck: doc.requiresAck || false,
            content: doc.content || '',
            fileName: doc.fileName || ''
        });
        setEditing(doc);
        setShowModal(true);
    };
    const handleSave = async ()=>{
        try {
            const data = {
                ...form,
                updatedAt: new Date().toISOString(),
                updatedBy: adminEmail
            };
            if (editing) {
                // Save version history
                await (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$hr$2f$Hrms$2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["addDoc"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$hr$2f$Hrms$2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["collection"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$hr$2f$Hrms$2f$src$2f$firebase$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["db"], 'document_versions'), {
                    documentId: editing.id,
                    version: editing.version,
                    title: editing.title,
                    content: editing.content,
                    savedAt: new Date().toISOString(),
                    savedBy: adminEmail
                });
                await (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$hr$2f$Hrms$2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["updateDoc"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$hr$2f$Hrms$2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["doc"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$hr$2f$Hrms$2f$src$2f$firebase$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["db"], 'documents', editing.id), data);
                await (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$hr$2f$Hrms$2f$src$2f$utils$2f$auditLog$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["logAction"])('DOCUMENT_UPDATED', {
                    title: form.title,
                    version: form.version
                }, adminEmail);
            } else {
                data.createdAt = new Date().toISOString();
                data.createdBy = adminEmail;
                await (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$hr$2f$Hrms$2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["addDoc"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$hr$2f$Hrms$2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["collection"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$hr$2f$Hrms$2f$src$2f$firebase$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["db"], 'documents'), data);
                await (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$hr$2f$Hrms$2f$src$2f$utils$2f$auditLog$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["logAction"])('DOCUMENT_CREATED', {
                    title: form.title,
                    category: form.category
                }, adminEmail);
            }
            setShowModal(false);
        } catch (err) {
            console.error(err);
        }
    };
    const handleDelete = async (d)=>{
        if (!confirm(`Delete "${d.title}"? This action cannot be undone.`)) return;
        try {
            await (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$hr$2f$Hrms$2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["deleteDoc"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$hr$2f$Hrms$2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["doc"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$hr$2f$Hrms$2f$src$2f$firebase$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["db"], 'documents', d.id));
            await (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$hr$2f$Hrms$2f$src$2f$utils$2f$auditLog$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["logAction"])('DOCUMENT_DELETED', {
                title: d.title
            }, adminEmail);
        } catch (err) {
            console.error(err);
        }
    };
    const handleAcknowledge = async (docId)=>{
        try {
            await (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$hr$2f$Hrms$2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["addDoc"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$hr$2f$Hrms$2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["collection"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$hr$2f$Hrms$2f$src$2f$firebase$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["db"], 'document_acknowledgements'), {
                documentId: docId,
                userId: user.uid || user.id,
                userName: user.name || user.email,
                acknowledgedAt: new Date().toISOString()
            });
            await (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$hr$2f$Hrms$2f$src$2f$utils$2f$auditLog$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["logAction"])('DOCUMENT_ACKNOWLEDGED', {
                documentId: docId
            }, user.email || adminEmail);
        } catch (err) {
            console.error(err);
        }
    };
    const isAcknowledged = (docId)=>acknowledgements.some((a)=>a.documentId === docId && (a.userId === user?.uid || a.userId === user?.id));
    const getAckCount = (docId)=>acknowledgements.filter((a)=>a.documentId === docId).length;
    const getCategoryMeta = (cat)=>DOC_CATEGORIES.find((c)=>c.id === cat) || DOC_CATEGORIES[5];
    const filtered = documents.filter((d)=>{
        if (filterCategory !== 'all' && d.category !== filterCategory) return false;
        if (searchTerm && !d.title.toLowerCase().includes(searchTerm.toLowerCase())) return false;
        return true;
    });
    /* ─── Detail View ─── */ if (selectedDoc) {
        const cat = getCategoryMeta(selectedDoc.category);
        const docAcks = acknowledgements.filter((a)=>a.documentId === selectedDoc.id);
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$hr$2f$Hrms$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "animate-fade",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$hr$2f$Hrms$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                    onClick: ()=>setSelectedDoc(null),
                    style: {
                        ...__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$hr$2f$Hrms$2f$src$2f$styles$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["styles"].button.outline,
                        padding: '8px 16px',
                        fontSize: '13px',
                        fontWeight: '700',
                        marginBottom: '24px'
                    },
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$hr$2f$Hrms$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "material-symbols-outlined",
                            style: {
                                fontSize: '16px'
                            },
                            children: "arrow_back"
                        }, void 0, false, {
                            fileName: "[project]/Documents/hr/Hrms/src/components/DocumentManagement/index.js",
                            lineNumber: 141,
                            columnNumber: 21
                        }, ("TURBOPACK compile-time value", void 0)),
                        " Back to Documents"
                    ]
                }, void 0, true, {
                    fileName: "[project]/Documents/hr/Hrms/src/components/DocumentManagement/index.js",
                    lineNumber: 140,
                    columnNumber: 17
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$hr$2f$Hrms$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    style: {
                        ...__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$hr$2f$Hrms$2f$src$2f$styles$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["styles"].card,
                        padding: '32px'
                    },
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$hr$2f$Hrms$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            style: {
                                display: 'flex',
                                gap: '16px',
                                alignItems: 'flex-start',
                                marginBottom: '24px'
                            },
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$hr$2f$Hrms$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    style: {
                                        width: '48px',
                                        height: '48px',
                                        borderRadius: '14px',
                                        background: `${cat.color}15`,
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        flexShrink: 0
                                    },
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$hr$2f$Hrms$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "material-symbols-outlined",
                                        style: {
                                            fontSize: '24px',
                                            color: cat.color
                                        },
                                        children: cat.icon
                                    }, void 0, false, {
                                        fileName: "[project]/Documents/hr/Hrms/src/components/DocumentManagement/index.js",
                                        lineNumber: 146,
                                        columnNumber: 29
                                    }, ("TURBOPACK compile-time value", void 0))
                                }, void 0, false, {
                                    fileName: "[project]/Documents/hr/Hrms/src/components/DocumentManagement/index.js",
                                    lineNumber: 145,
                                    columnNumber: 25
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$hr$2f$Hrms$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    style: {
                                        flex: 1
                                    },
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$hr$2f$Hrms$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                            style: {
                                                fontSize: '22px',
                                                fontWeight: '800',
                                                color: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$hr$2f$Hrms$2f$src$2f$styles$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["tokens"].colors.primary,
                                                marginBottom: '4px'
                                            },
                                            children: selectedDoc.title
                                        }, void 0, false, {
                                            fileName: "[project]/Documents/hr/Hrms/src/components/DocumentManagement/index.js",
                                            lineNumber: 149,
                                            columnNumber: 29
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$hr$2f$Hrms$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            style: {
                                                display: 'flex',
                                                gap: '12px',
                                                flexWrap: 'wrap',
                                                alignItems: 'center'
                                            },
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$hr$2f$Hrms$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    style: {
                                                        fontSize: '12px',
                                                        fontWeight: '600',
                                                        padding: '3px 10px',
                                                        borderRadius: '999px',
                                                        background: `${cat.color}15`,
                                                        color: cat.color
                                                    },
                                                    children: cat.label
                                                }, void 0, false, {
                                                    fileName: "[project]/Documents/hr/Hrms/src/components/DocumentManagement/index.js",
                                                    lineNumber: 151,
                                                    columnNumber: 33
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$hr$2f$Hrms$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    style: {
                                                        fontSize: '12px',
                                                        fontWeight: '600',
                                                        padding: '3px 10px',
                                                        borderRadius: '999px',
                                                        background: '#F1F5F9',
                                                        color: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$hr$2f$Hrms$2f$src$2f$styles$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["tokens"].colors.secondary
                                                    },
                                                    children: [
                                                        "v",
                                                        selectedDoc.version
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/Documents/hr/Hrms/src/components/DocumentManagement/index.js",
                                                    lineNumber: 152,
                                                    columnNumber: 33
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$hr$2f$Hrms$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    style: {
                                                        fontSize: '12px',
                                                        fontWeight: '600',
                                                        padding: '3px 10px',
                                                        borderRadius: '999px',
                                                        background: selectedDoc.classification === 'Restricted' ? '#FEE2E2' : selectedDoc.classification === 'Confidential' ? '#FEF3C7' : '#F1F5F9',
                                                        color: selectedDoc.classification === 'Restricted' ? '#DC2626' : selectedDoc.classification === 'Confidential' ? '#D97706' : __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$hr$2f$Hrms$2f$src$2f$styles$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["tokens"].colors.secondary
                                                    },
                                                    children: selectedDoc.classification
                                                }, void 0, false, {
                                                    fileName: "[project]/Documents/hr/Hrms/src/components/DocumentManagement/index.js",
                                                    lineNumber: 153,
                                                    columnNumber: 33
                                                }, ("TURBOPACK compile-time value", void 0))
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/Documents/hr/Hrms/src/components/DocumentManagement/index.js",
                                            lineNumber: 150,
                                            columnNumber: 29
                                        }, ("TURBOPACK compile-time value", void 0))
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Documents/hr/Hrms/src/components/DocumentManagement/index.js",
                                    lineNumber: 148,
                                    columnNumber: 25
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Documents/hr/Hrms/src/components/DocumentManagement/index.js",
                            lineNumber: 144,
                            columnNumber: 21
                        }, ("TURBOPACK compile-time value", void 0)),
                        selectedDoc.description && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$hr$2f$Hrms$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            style: {
                                fontSize: '14px',
                                color: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$hr$2f$Hrms$2f$src$2f$styles$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["tokens"].colors.secondary,
                                lineHeight: '1.6',
                                marginBottom: '20px'
                            },
                            children: selectedDoc.description
                        }, void 0, false, {
                            fileName: "[project]/Documents/hr/Hrms/src/components/DocumentManagement/index.js",
                            lineNumber: 158,
                            columnNumber: 25
                        }, ("TURBOPACK compile-time value", void 0)),
                        selectedDoc.content && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$hr$2f$Hrms$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            style: {
                                background: '#F8FAFC',
                                borderRadius: '12px',
                                padding: '24px',
                                fontSize: '14px',
                                color: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$hr$2f$Hrms$2f$src$2f$styles$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["tokens"].colors.primary,
                                lineHeight: '1.8',
                                whiteSpace: 'pre-wrap',
                                marginBottom: '20px',
                                border: `1px solid ${__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$hr$2f$Hrms$2f$src$2f$styles$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["tokens"].colors.border}`
                            },
                            children: selectedDoc.content
                        }, void 0, false, {
                            fileName: "[project]/Documents/hr/Hrms/src/components/DocumentManagement/index.js",
                            lineNumber: 161,
                            columnNumber: 25
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$hr$2f$Hrms$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            style: {
                                fontSize: '12px',
                                color: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$hr$2f$Hrms$2f$src$2f$styles$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["tokens"].colors.secondary,
                                marginBottom: '20px'
                            },
                            children: [
                                "Last updated: ",
                                selectedDoc.updatedAt ? new Date(selectedDoc.updatedAt).toLocaleString('en-IN') : '—',
                                " by ",
                                selectedDoc.updatedBy || '—'
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Documents/hr/Hrms/src/components/DocumentManagement/index.js",
                            lineNumber: 165,
                            columnNumber: 21
                        }, ("TURBOPACK compile-time value", void 0)),
                        selectedDoc.requiresAck && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$hr$2f$Hrms$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            style: {
                                borderTop: `1px solid ${__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$hr$2f$Hrms$2f$src$2f$styles$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["tokens"].colors.border}`,
                                paddingTop: '20px'
                            },
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$hr$2f$Hrms$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    style: {
                                        display: 'flex',
                                        justifyContent: 'space-between',
                                        alignItems: 'center',
                                        marginBottom: '16px'
                                    },
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$hr$2f$Hrms$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                            style: {
                                                fontSize: '16px',
                                                fontWeight: '800',
                                                color: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$hr$2f$Hrms$2f$src$2f$styles$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["tokens"].colors.primary
                                            },
                                            children: [
                                                "Acknowledgements (",
                                                docAcks.length,
                                                " / ",
                                                employees.length,
                                                ")"
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/Documents/hr/Hrms/src/components/DocumentManagement/index.js",
                                            lineNumber: 171,
                                            columnNumber: 33
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        !isAcknowledged(selectedDoc.id) && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$hr$2f$Hrms$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            onClick: ()=>handleAcknowledge(selectedDoc.id),
                                            style: {
                                                ...__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$hr$2f$Hrms$2f$src$2f$styles$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["styles"].button.primary,
                                                padding: '8px 20px',
                                                fontSize: '13px'
                                            },
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$hr$2f$Hrms$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "material-symbols-outlined",
                                                    style: {
                                                        fontSize: '16px'
                                                    },
                                                    children: "check_circle"
                                                }, void 0, false, {
                                                    fileName: "[project]/Documents/hr/Hrms/src/components/DocumentManagement/index.js",
                                                    lineNumber: 174,
                                                    columnNumber: 41
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                " Acknowledge"
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/Documents/hr/Hrms/src/components/DocumentManagement/index.js",
                                            lineNumber: 173,
                                            columnNumber: 37
                                        }, ("TURBOPACK compile-time value", void 0))
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Documents/hr/Hrms/src/components/DocumentManagement/index.js",
                                    lineNumber: 170,
                                    columnNumber: 29
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$hr$2f$Hrms$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    style: {
                                        display: 'grid',
                                        gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))',
                                        gap: '8px'
                                    },
                                    children: docAcks.map((a)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$hr$2f$Hrms$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            style: {
                                                display: 'flex',
                                                alignItems: 'center',
                                                gap: '8px',
                                                padding: '8px 12px',
                                                borderRadius: '8px',
                                                background: '#F0FDF4',
                                                border: '1px solid #BBF7D0'
                                            },
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$hr$2f$Hrms$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "material-symbols-outlined",
                                                    style: {
                                                        fontSize: '16px',
                                                        color: '#22C55E'
                                                    },
                                                    children: "check_circle"
                                                }, void 0, false, {
                                                    fileName: "[project]/Documents/hr/Hrms/src/components/DocumentManagement/index.js",
                                                    lineNumber: 181,
                                                    columnNumber: 41
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$hr$2f$Hrms$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$hr$2f$Hrms$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            style: {
                                                                fontSize: '12px',
                                                                fontWeight: '700',
                                                                color: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$hr$2f$Hrms$2f$src$2f$styles$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["tokens"].colors.primary
                                                            },
                                                            children: a.userName
                                                        }, void 0, false, {
                                                            fileName: "[project]/Documents/hr/Hrms/src/components/DocumentManagement/index.js",
                                                            lineNumber: 183,
                                                            columnNumber: 45
                                                        }, ("TURBOPACK compile-time value", void 0)),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$hr$2f$Hrms$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            style: {
                                                                fontSize: '11px',
                                                                color: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$hr$2f$Hrms$2f$src$2f$styles$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["tokens"].colors.secondary
                                                            },
                                                            children: new Date(a.acknowledgedAt).toLocaleDateString('en-IN')
                                                        }, void 0, false, {
                                                            fileName: "[project]/Documents/hr/Hrms/src/components/DocumentManagement/index.js",
                                                            lineNumber: 184,
                                                            columnNumber: 45
                                                        }, ("TURBOPACK compile-time value", void 0))
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/Documents/hr/Hrms/src/components/DocumentManagement/index.js",
                                                    lineNumber: 182,
                                                    columnNumber: 41
                                                }, ("TURBOPACK compile-time value", void 0))
                                            ]
                                        }, a.id, true, {
                                            fileName: "[project]/Documents/hr/Hrms/src/components/DocumentManagement/index.js",
                                            lineNumber: 180,
                                            columnNumber: 37
                                        }, ("TURBOPACK compile-time value", void 0)))
                                }, void 0, false, {
                                    fileName: "[project]/Documents/hr/Hrms/src/components/DocumentManagement/index.js",
                                    lineNumber: 178,
                                    columnNumber: 29
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Documents/hr/Hrms/src/components/DocumentManagement/index.js",
                            lineNumber: 169,
                            columnNumber: 25
                        }, ("TURBOPACK compile-time value", void 0))
                    ]
                }, void 0, true, {
                    fileName: "[project]/Documents/hr/Hrms/src/components/DocumentManagement/index.js",
                    lineNumber: 143,
                    columnNumber: 17
                }, ("TURBOPACK compile-time value", void 0))
            ]
        }, void 0, true, {
            fileName: "[project]/Documents/hr/Hrms/src/components/DocumentManagement/index.js",
            lineNumber: 139,
            columnNumber: 13
        }, ("TURBOPACK compile-time value", void 0));
    }
    /* ─── List View ─── */ return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$hr$2f$Hrms$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "animate-fade",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$hr$2f$Hrms$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'flex-start',
                    marginBottom: '28px'
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$hr$2f$Hrms$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$hr$2f$Hrms$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                style: {
                                    fontSize: '24px',
                                    fontWeight: '800',
                                    color: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$hr$2f$Hrms$2f$src$2f$styles$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["tokens"].colors.primary
                                },
                                children: "Document Management"
                            }, void 0, false, {
                                fileName: "[project]/Documents/hr/Hrms/src/components/DocumentManagement/index.js",
                                lineNumber: 202,
                                columnNumber: 21
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$hr$2f$Hrms$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                style: {
                                    color: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$hr$2f$Hrms$2f$src$2f$styles$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["tokens"].colors.secondary,
                                    fontSize: '14px'
                                },
                                children: "ISO 27001 A.7.5 — Documented Information management."
                            }, void 0, false, {
                                fileName: "[project]/Documents/hr/Hrms/src/components/DocumentManagement/index.js",
                                lineNumber: 203,
                                columnNumber: 21
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Documents/hr/Hrms/src/components/DocumentManagement/index.js",
                        lineNumber: 201,
                        columnNumber: 17
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$hr$2f$Hrms$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: openCreate,
                        style: {
                            ...__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$hr$2f$Hrms$2f$src$2f$styles$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["styles"].button.primary,
                            padding: '10px 18px',
                            fontSize: '13px',
                            fontWeight: '700'
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$hr$2f$Hrms$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "material-symbols-outlined",
                                style: {
                                    fontSize: '18px'
                                },
                                children: "note_add"
                            }, void 0, false, {
                                fileName: "[project]/Documents/hr/Hrms/src/components/DocumentManagement/index.js",
                                lineNumber: 206,
                                columnNumber: 21
                            }, ("TURBOPACK compile-time value", void 0)),
                            "New Document"
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Documents/hr/Hrms/src/components/DocumentManagement/index.js",
                        lineNumber: 205,
                        columnNumber: 17
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/Documents/hr/Hrms/src/components/DocumentManagement/index.js",
                lineNumber: 200,
                columnNumber: 13
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$hr$2f$Hrms$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    display: 'flex',
                    gap: '12px',
                    marginBottom: '24px',
                    flexWrap: 'wrap',
                    alignItems: 'center'
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$hr$2f$Hrms$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            display: 'flex',
                            gap: '4px',
                            background: '#F1F5F9',
                            borderRadius: '12px',
                            padding: '4px'
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$hr$2f$Hrms$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: ()=>setFilterCategory('all'),
                                style: {
                                    padding: '6px 14px',
                                    borderRadius: '10px',
                                    border: 'none',
                                    fontSize: '12px',
                                    fontWeight: '700',
                                    cursor: 'pointer',
                                    background: filterCategory === 'all' ? __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$hr$2f$Hrms$2f$src$2f$styles$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["tokens"].colors.white : 'transparent',
                                    color: filterCategory === 'all' ? __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$hr$2f$Hrms$2f$src$2f$styles$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["tokens"].colors.accent : __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$hr$2f$Hrms$2f$src$2f$styles$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["tokens"].colors.secondary,
                                    boxShadow: filterCategory === 'all' ? __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$hr$2f$Hrms$2f$src$2f$styles$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["tokens"].shadow.sm : 'none'
                                },
                                children: "All"
                            }, void 0, false, {
                                fileName: "[project]/Documents/hr/Hrms/src/components/DocumentManagement/index.js",
                                lineNumber: 214,
                                columnNumber: 21
                            }, ("TURBOPACK compile-time value", void 0)),
                            DOC_CATEGORIES.map((c)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$hr$2f$Hrms$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    onClick: ()=>setFilterCategory(c.id),
                                    style: {
                                        padding: '6px 14px',
                                        borderRadius: '10px',
                                        border: 'none',
                                        fontSize: '12px',
                                        fontWeight: '700',
                                        cursor: 'pointer',
                                        background: filterCategory === c.id ? __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$hr$2f$Hrms$2f$src$2f$styles$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["tokens"].colors.white : 'transparent',
                                        color: filterCategory === c.id ? c.color : __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$hr$2f$Hrms$2f$src$2f$styles$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["tokens"].colors.secondary,
                                        boxShadow: filterCategory === c.id ? __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$hr$2f$Hrms$2f$src$2f$styles$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["tokens"].shadow.sm : 'none'
                                    },
                                    children: c.label
                                }, c.id, false, {
                                    fileName: "[project]/Documents/hr/Hrms/src/components/DocumentManagement/index.js",
                                    lineNumber: 221,
                                    columnNumber: 25
                                }, ("TURBOPACK compile-time value", void 0)))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Documents/hr/Hrms/src/components/DocumentManagement/index.js",
                        lineNumber: 213,
                        columnNumber: 17
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$hr$2f$Hrms$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            position: 'relative',
                            flex: 1,
                            maxWidth: '280px'
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$hr$2f$Hrms$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                style: {
                                    ...__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$hr$2f$Hrms$2f$src$2f$styles$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["styles"].input,
                                    paddingLeft: '36px'
                                },
                                placeholder: "Search documents...",
                                value: searchTerm,
                                onChange: (e)=>setSearchTerm(e.target.value)
                            }, void 0, false, {
                                fileName: "[project]/Documents/hr/Hrms/src/components/DocumentManagement/index.js",
                                lineNumber: 230,
                                columnNumber: 21
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$hr$2f$Hrms$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "material-symbols-outlined",
                                style: {
                                    position: 'absolute',
                                    left: '12px',
                                    top: '50%',
                                    transform: 'translateY(-50%)',
                                    fontSize: '16px',
                                    color: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$hr$2f$Hrms$2f$src$2f$styles$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["tokens"].colors.secondary
                                },
                                children: "search"
                            }, void 0, false, {
                                fileName: "[project]/Documents/hr/Hrms/src/components/DocumentManagement/index.js",
                                lineNumber: 231,
                                columnNumber: 21
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Documents/hr/Hrms/src/components/DocumentManagement/index.js",
                        lineNumber: 229,
                        columnNumber: 17
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/Documents/hr/Hrms/src/components/DocumentManagement/index.js",
                lineNumber: 212,
                columnNumber: 13
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$hr$2f$Hrms$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))',
                    gap: '16px'
                },
                children: [
                    filtered.map((d)=>{
                        const cat = getCategoryMeta(d.category);
                        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$hr$2f$Hrms$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            style: {
                                ...__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$hr$2f$Hrms$2f$src$2f$styles$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["styles"].card,
                                padding: '24px',
                                cursor: 'pointer',
                                transition: 'all 0.2s ease'
                            },
                            onClick: ()=>setSelectedDoc(d),
                            onMouseOver: (e)=>{
                                e.currentTarget.style.transform = 'translateY(-2px)';
                                e.currentTarget.style.boxShadow = __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$hr$2f$Hrms$2f$src$2f$styles$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["tokens"].shadow.lg;
                            },
                            onMouseOut: (e)=>{
                                e.currentTarget.style.transform = 'none';
                                e.currentTarget.style.boxShadow = '';
                            },
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$hr$2f$Hrms$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    style: {
                                        display: 'flex',
                                        gap: '12px',
                                        alignItems: 'flex-start',
                                        marginBottom: '12px'
                                    },
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$hr$2f$Hrms$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            style: {
                                                width: '40px',
                                                height: '40px',
                                                borderRadius: '12px',
                                                background: `${cat.color}15`,
                                                display: 'flex',
                                                alignItems: 'center',
                                                justifyContent: 'center',
                                                flexShrink: 0
                                            },
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$hr$2f$Hrms$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "material-symbols-outlined",
                                                style: {
                                                    fontSize: '20px',
                                                    color: cat.color
                                                },
                                                children: cat.icon
                                            }, void 0, false, {
                                                fileName: "[project]/Documents/hr/Hrms/src/components/DocumentManagement/index.js",
                                                lineNumber: 246,
                                                columnNumber: 37
                                            }, ("TURBOPACK compile-time value", void 0))
                                        }, void 0, false, {
                                            fileName: "[project]/Documents/hr/Hrms/src/components/DocumentManagement/index.js",
                                            lineNumber: 245,
                                            columnNumber: 33
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$hr$2f$Hrms$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            style: {
                                                flex: 1,
                                                minWidth: 0
                                            },
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$hr$2f$Hrms$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    style: {
                                                        fontSize: '15px',
                                                        fontWeight: '700',
                                                        color: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$hr$2f$Hrms$2f$src$2f$styles$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["tokens"].colors.primary,
                                                        whiteSpace: 'nowrap',
                                                        overflow: 'hidden',
                                                        textOverflow: 'ellipsis'
                                                    },
                                                    children: d.title
                                                }, void 0, false, {
                                                    fileName: "[project]/Documents/hr/Hrms/src/components/DocumentManagement/index.js",
                                                    lineNumber: 249,
                                                    columnNumber: 37
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$hr$2f$Hrms$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    style: {
                                                        fontSize: '12px',
                                                        color: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$hr$2f$Hrms$2f$src$2f$styles$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["tokens"].colors.secondary
                                                    },
                                                    children: [
                                                        cat.label,
                                                        " · v",
                                                        d.version
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/Documents/hr/Hrms/src/components/DocumentManagement/index.js",
                                                    lineNumber: 250,
                                                    columnNumber: 37
                                                }, ("TURBOPACK compile-time value", void 0))
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/Documents/hr/Hrms/src/components/DocumentManagement/index.js",
                                            lineNumber: 248,
                                            columnNumber: 33
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$hr$2f$Hrms$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            style: {
                                                display: 'flex',
                                                gap: '4px'
                                            },
                                            onClick: (e)=>e.stopPropagation(),
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$hr$2f$Hrms$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                    onClick: ()=>openEdit(d),
                                                    style: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$hr$2f$Hrms$2f$src$2f$styles$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["styles"].button.ghost,
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$hr$2f$Hrms$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "material-symbols-outlined",
                                                        style: {
                                                            fontSize: '16px'
                                                        },
                                                        children: "edit"
                                                    }, void 0, false, {
                                                        fileName: "[project]/Documents/hr/Hrms/src/components/DocumentManagement/index.js",
                                                        lineNumber: 254,
                                                        columnNumber: 41
                                                    }, ("TURBOPACK compile-time value", void 0))
                                                }, void 0, false, {
                                                    fileName: "[project]/Documents/hr/Hrms/src/components/DocumentManagement/index.js",
                                                    lineNumber: 253,
                                                    columnNumber: 37
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$hr$2f$Hrms$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                    onClick: ()=>handleDelete(d),
                                                    style: {
                                                        ...__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$hr$2f$Hrms$2f$src$2f$styles$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["styles"].button.ghost,
                                                        color: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$hr$2f$Hrms$2f$src$2f$styles$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["tokens"].colors.error
                                                    },
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$hr$2f$Hrms$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "material-symbols-outlined",
                                                        style: {
                                                            fontSize: '16px'
                                                        },
                                                        children: "delete"
                                                    }, void 0, false, {
                                                        fileName: "[project]/Documents/hr/Hrms/src/components/DocumentManagement/index.js",
                                                        lineNumber: 257,
                                                        columnNumber: 41
                                                    }, ("TURBOPACK compile-time value", void 0))
                                                }, void 0, false, {
                                                    fileName: "[project]/Documents/hr/Hrms/src/components/DocumentManagement/index.js",
                                                    lineNumber: 256,
                                                    columnNumber: 37
                                                }, ("TURBOPACK compile-time value", void 0))
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/Documents/hr/Hrms/src/components/DocumentManagement/index.js",
                                            lineNumber: 252,
                                            columnNumber: 33
                                        }, ("TURBOPACK compile-time value", void 0))
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Documents/hr/Hrms/src/components/DocumentManagement/index.js",
                                    lineNumber: 244,
                                    columnNumber: 29
                                }, ("TURBOPACK compile-time value", void 0)),
                                d.description && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$hr$2f$Hrms$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    style: {
                                        fontSize: '13px',
                                        color: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$hr$2f$Hrms$2f$src$2f$styles$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["tokens"].colors.secondary,
                                        lineHeight: '1.5',
                                        marginBottom: '12px',
                                        display: '-webkit-box',
                                        WebkitLineClamp: 2,
                                        WebkitBoxOrient: 'vertical',
                                        overflow: 'hidden'
                                    },
                                    children: d.description
                                }, void 0, false, {
                                    fileName: "[project]/Documents/hr/Hrms/src/components/DocumentManagement/index.js",
                                    lineNumber: 262,
                                    columnNumber: 33
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$hr$2f$Hrms$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    style: {
                                        display: 'flex',
                                        justifyContent: 'space-between',
                                        alignItems: 'center'
                                    },
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$hr$2f$Hrms$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            style: {
                                                fontSize: '11px',
                                                fontWeight: '600',
                                                padding: '3px 10px',
                                                borderRadius: '999px',
                                                background: d.classification === 'Restricted' ? '#FEE2E2' : d.classification === 'Confidential' ? '#FEF3C7' : '#F1F5F9',
                                                color: d.classification === 'Restricted' ? '#DC2626' : d.classification === 'Confidential' ? '#D97706' : __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$hr$2f$Hrms$2f$src$2f$styles$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["tokens"].colors.secondary
                                            },
                                            children: d.classification
                                        }, void 0, false, {
                                            fileName: "[project]/Documents/hr/Hrms/src/components/DocumentManagement/index.js",
                                            lineNumber: 265,
                                            columnNumber: 33
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$hr$2f$Hrms$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            style: {
                                                display: 'flex',
                                                alignItems: 'center',
                                                gap: '6px'
                                            },
                                            children: [
                                                d.requiresAck && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$hr$2f$Hrms$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    style: {
                                                        display: 'flex',
                                                        alignItems: 'center',
                                                        gap: '4px',
                                                        fontSize: '11px',
                                                        color: isAcknowledged(d.id) ? '#22C55E' : '#D97706'
                                                    },
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$hr$2f$Hrms$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "material-symbols-outlined",
                                                            style: {
                                                                fontSize: '14px'
                                                            },
                                                            children: isAcknowledged(d.id) ? 'check_circle' : 'pending'
                                                        }, void 0, false, {
                                                            fileName: "[project]/Documents/hr/Hrms/src/components/DocumentManagement/index.js",
                                                            lineNumber: 269,
                                                            columnNumber: 45
                                                        }, ("TURBOPACK compile-time value", void 0)),
                                                        getAckCount(d.id),
                                                        "/",
                                                        employees.length
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/Documents/hr/Hrms/src/components/DocumentManagement/index.js",
                                                    lineNumber: 268,
                                                    columnNumber: 41
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$hr$2f$Hrms$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    style: {
                                                        fontSize: '11px',
                                                        color: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$hr$2f$Hrms$2f$src$2f$styles$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["tokens"].colors.secondary
                                                    },
                                                    children: d.updatedAt ? new Date(d.updatedAt).toLocaleDateString('en-IN') : ''
                                                }, void 0, false, {
                                                    fileName: "[project]/Documents/hr/Hrms/src/components/DocumentManagement/index.js",
                                                    lineNumber: 273,
                                                    columnNumber: 37
                                                }, ("TURBOPACK compile-time value", void 0))
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/Documents/hr/Hrms/src/components/DocumentManagement/index.js",
                                            lineNumber: 266,
                                            columnNumber: 33
                                        }, ("TURBOPACK compile-time value", void 0))
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Documents/hr/Hrms/src/components/DocumentManagement/index.js",
                                    lineNumber: 264,
                                    columnNumber: 29
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, d.id, true, {
                            fileName: "[project]/Documents/hr/Hrms/src/components/DocumentManagement/index.js",
                            lineNumber: 240,
                            columnNumber: 25
                        }, ("TURBOPACK compile-time value", void 0));
                    }),
                    filtered.length === 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$hr$2f$Hrms$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            ...__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$hr$2f$Hrms$2f$src$2f$styles$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["styles"].card,
                            padding: '60px',
                            textAlign: 'center',
                            gridColumn: '1 / -1'
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$hr$2f$Hrms$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "material-symbols-outlined",
                                style: {
                                    fontSize: '48px',
                                    color: '#CBD5E1',
                                    display: 'block',
                                    marginBottom: '12px'
                                },
                                children: "folder_open"
                            }, void 0, false, {
                                fileName: "[project]/Documents/hr/Hrms/src/components/DocumentManagement/index.js",
                                lineNumber: 281,
                                columnNumber: 25
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$hr$2f$Hrms$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                style: {
                                    fontSize: '15px',
                                    fontWeight: '700',
                                    color: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$hr$2f$Hrms$2f$src$2f$styles$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["tokens"].colors.primary,
                                    marginBottom: '8px'
                                },
                                children: "No documents found"
                            }, void 0, false, {
                                fileName: "[project]/Documents/hr/Hrms/src/components/DocumentManagement/index.js",
                                lineNumber: 282,
                                columnNumber: 25
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$hr$2f$Hrms$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                style: {
                                    fontSize: '13px',
                                    color: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$hr$2f$Hrms$2f$src$2f$styles$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["tokens"].colors.secondary
                                },
                                children: "Create your first document to get started."
                            }, void 0, false, {
                                fileName: "[project]/Documents/hr/Hrms/src/components/DocumentManagement/index.js",
                                lineNumber: 283,
                                columnNumber: 25
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Documents/hr/Hrms/src/components/DocumentManagement/index.js",
                        lineNumber: 280,
                        columnNumber: 21
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/Documents/hr/Hrms/src/components/DocumentManagement/index.js",
                lineNumber: 236,
                columnNumber: 13
            }, ("TURBOPACK compile-time value", void 0)),
            showModal && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$hr$2f$Hrms$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$hr$2f$Hrms$2f$src$2f$styles$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["styles"].modal,
                onClick: ()=>setShowModal(false),
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$hr$2f$Hrms$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    style: {
                        ...__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$hr$2f$Hrms$2f$src$2f$styles$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["styles"].card,
                        width: '100%',
                        maxWidth: '640px',
                        maxHeight: '85vh',
                        overflow: 'auto',
                        padding: '32px'
                    },
                    onClick: (e)=>e.stopPropagation(),
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$hr$2f$Hrms$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                            style: {
                                fontSize: '20px',
                                fontWeight: '800',
                                color: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$hr$2f$Hrms$2f$src$2f$styles$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["tokens"].colors.primary,
                                marginBottom: '24px'
                            },
                            children: editing ? 'Update Document' : 'Create Document'
                        }, void 0, false, {
                            fileName: "[project]/Documents/hr/Hrms/src/components/DocumentManagement/index.js",
                            lineNumber: 293,
                            columnNumber: 25
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$hr$2f$Hrms$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            style: {
                                display: 'grid',
                                gap: '16px',
                                marginBottom: '24px'
                            },
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$hr$2f$Hrms$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$hr$2f$Hrms$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                            style: {
                                                fontSize: '12px',
                                                fontWeight: '700',
                                                color: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$hr$2f$Hrms$2f$src$2f$styles$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["tokens"].colors.secondary,
                                                display: 'block',
                                                marginBottom: '6px'
                                            },
                                            children: "Document Title"
                                        }, void 0, false, {
                                            fileName: "[project]/Documents/hr/Hrms/src/components/DocumentManagement/index.js",
                                            lineNumber: 298,
                                            columnNumber: 33
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$hr$2f$Hrms$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                            style: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$hr$2f$Hrms$2f$src$2f$styles$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["styles"].input,
                                            value: form.title,
                                            onChange: (e)=>setForm({
                                                    ...form,
                                                    title: e.target.value
                                                }),
                                            placeholder: "e.g. Information Security Policy"
                                        }, void 0, false, {
                                            fileName: "[project]/Documents/hr/Hrms/src/components/DocumentManagement/index.js",
                                            lineNumber: 299,
                                            columnNumber: 33
                                        }, ("TURBOPACK compile-time value", void 0))
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Documents/hr/Hrms/src/components/DocumentManagement/index.js",
                                    lineNumber: 297,
                                    columnNumber: 29
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$hr$2f$Hrms$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$hr$2f$Hrms$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                            style: {
                                                fontSize: '12px',
                                                fontWeight: '700',
                                                color: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$hr$2f$Hrms$2f$src$2f$styles$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["tokens"].colors.secondary,
                                                display: 'block',
                                                marginBottom: '6px'
                                            },
                                            children: "Description"
                                        }, void 0, false, {
                                            fileName: "[project]/Documents/hr/Hrms/src/components/DocumentManagement/index.js",
                                            lineNumber: 302,
                                            columnNumber: 33
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$hr$2f$Hrms$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("textarea", {
                                            style: {
                                                ...__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$hr$2f$Hrms$2f$src$2f$styles$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["styles"].input,
                                                minHeight: '60px',
                                                resize: 'none'
                                            },
                                            value: form.description,
                                            onChange: (e)=>setForm({
                                                    ...form,
                                                    description: e.target.value
                                                }),
                                            placeholder: "Brief summary of this document"
                                        }, void 0, false, {
                                            fileName: "[project]/Documents/hr/Hrms/src/components/DocumentManagement/index.js",
                                            lineNumber: 303,
                                            columnNumber: 33
                                        }, ("TURBOPACK compile-time value", void 0))
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Documents/hr/Hrms/src/components/DocumentManagement/index.js",
                                    lineNumber: 301,
                                    columnNumber: 29
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$hr$2f$Hrms$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    style: {
                                        display: 'grid',
                                        gridTemplateColumns: '1fr 1fr 1fr',
                                        gap: '12px'
                                    },
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$hr$2f$Hrms$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$hr$2f$Hrms$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                    style: {
                                                        fontSize: '12px',
                                                        fontWeight: '700',
                                                        color: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$hr$2f$Hrms$2f$src$2f$styles$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["tokens"].colors.secondary,
                                                        display: 'block',
                                                        marginBottom: '6px'
                                                    },
                                                    children: "Category"
                                                }, void 0, false, {
                                                    fileName: "[project]/Documents/hr/Hrms/src/components/DocumentManagement/index.js",
                                                    lineNumber: 307,
                                                    columnNumber: 37
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$hr$2f$Hrms$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                                    style: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$hr$2f$Hrms$2f$src$2f$styles$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["styles"].input,
                                                    value: form.category,
                                                    onChange: (e)=>setForm({
                                                            ...form,
                                                            category: e.target.value
                                                        }),
                                                    children: DOC_CATEGORIES.map((c)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$hr$2f$Hrms$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                            value: c.id,
                                                            children: c.label
                                                        }, c.id, false, {
                                                            fileName: "[project]/Documents/hr/Hrms/src/components/DocumentManagement/index.js",
                                                            lineNumber: 309,
                                                            columnNumber: 66
                                                        }, ("TURBOPACK compile-time value", void 0)))
                                                }, void 0, false, {
                                                    fileName: "[project]/Documents/hr/Hrms/src/components/DocumentManagement/index.js",
                                                    lineNumber: 308,
                                                    columnNumber: 37
                                                }, ("TURBOPACK compile-time value", void 0))
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/Documents/hr/Hrms/src/components/DocumentManagement/index.js",
                                            lineNumber: 306,
                                            columnNumber: 33
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$hr$2f$Hrms$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$hr$2f$Hrms$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                    style: {
                                                        fontSize: '12px',
                                                        fontWeight: '700',
                                                        color: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$hr$2f$Hrms$2f$src$2f$styles$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["tokens"].colors.secondary,
                                                        display: 'block',
                                                        marginBottom: '6px'
                                                    },
                                                    children: "Classification"
                                                }, void 0, false, {
                                                    fileName: "[project]/Documents/hr/Hrms/src/components/DocumentManagement/index.js",
                                                    lineNumber: 313,
                                                    columnNumber: 37
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$hr$2f$Hrms$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                                    style: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$hr$2f$Hrms$2f$src$2f$styles$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["styles"].input,
                                                    value: form.classification,
                                                    onChange: (e)=>setForm({
                                                            ...form,
                                                            classification: e.target.value
                                                        }),
                                                    children: CLASSIFICATIONS.map((c)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$hr$2f$Hrms$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                            value: c,
                                                            children: c
                                                        }, c, false, {
                                                            fileName: "[project]/Documents/hr/Hrms/src/components/DocumentManagement/index.js",
                                                            lineNumber: 315,
                                                            columnNumber: 67
                                                        }, ("TURBOPACK compile-time value", void 0)))
                                                }, void 0, false, {
                                                    fileName: "[project]/Documents/hr/Hrms/src/components/DocumentManagement/index.js",
                                                    lineNumber: 314,
                                                    columnNumber: 37
                                                }, ("TURBOPACK compile-time value", void 0))
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/Documents/hr/Hrms/src/components/DocumentManagement/index.js",
                                            lineNumber: 312,
                                            columnNumber: 33
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$hr$2f$Hrms$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$hr$2f$Hrms$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                    style: {
                                                        fontSize: '12px',
                                                        fontWeight: '700',
                                                        color: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$hr$2f$Hrms$2f$src$2f$styles$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["tokens"].colors.secondary,
                                                        display: 'block',
                                                        marginBottom: '6px'
                                                    },
                                                    children: "Version"
                                                }, void 0, false, {
                                                    fileName: "[project]/Documents/hr/Hrms/src/components/DocumentManagement/index.js",
                                                    lineNumber: 319,
                                                    columnNumber: 37
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$hr$2f$Hrms$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                    style: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$hr$2f$Hrms$2f$src$2f$styles$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["styles"].input,
                                                    value: form.version,
                                                    onChange: (e)=>setForm({
                                                            ...form,
                                                            version: e.target.value
                                                        }),
                                                    placeholder: "1.0"
                                                }, void 0, false, {
                                                    fileName: "[project]/Documents/hr/Hrms/src/components/DocumentManagement/index.js",
                                                    lineNumber: 320,
                                                    columnNumber: 37
                                                }, ("TURBOPACK compile-time value", void 0))
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/Documents/hr/Hrms/src/components/DocumentManagement/index.js",
                                            lineNumber: 318,
                                            columnNumber: 33
                                        }, ("TURBOPACK compile-time value", void 0))
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Documents/hr/Hrms/src/components/DocumentManagement/index.js",
                                    lineNumber: 305,
                                    columnNumber: 29
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$hr$2f$Hrms$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$hr$2f$Hrms$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                            style: {
                                                fontSize: '12px',
                                                fontWeight: '700',
                                                color: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$hr$2f$Hrms$2f$src$2f$styles$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["tokens"].colors.secondary,
                                                display: 'block',
                                                marginBottom: '6px'
                                            },
                                            children: "Document Content"
                                        }, void 0, false, {
                                            fileName: "[project]/Documents/hr/Hrms/src/components/DocumentManagement/index.js",
                                            lineNumber: 324,
                                            columnNumber: 33
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$hr$2f$Hrms$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("textarea", {
                                            style: {
                                                ...__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$hr$2f$Hrms$2f$src$2f$styles$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["styles"].input,
                                                minHeight: '200px',
                                                resize: 'vertical',
                                                fontFamily: 'monospace',
                                                fontSize: '13px',
                                                lineHeight: '1.6'
                                            },
                                            value: form.content,
                                            onChange: (e)=>setForm({
                                                    ...form,
                                                    content: e.target.value
                                                }),
                                            placeholder: "Enter or paste document content here..."
                                        }, void 0, false, {
                                            fileName: "[project]/Documents/hr/Hrms/src/components/DocumentManagement/index.js",
                                            lineNumber: 325,
                                            columnNumber: 33
                                        }, ("TURBOPACK compile-time value", void 0))
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Documents/hr/Hrms/src/components/DocumentManagement/index.js",
                                    lineNumber: 323,
                                    columnNumber: 29
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$hr$2f$Hrms$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                    style: {
                                        display: 'flex',
                                        alignItems: 'center',
                                        gap: '10px',
                                        cursor: 'pointer',
                                        padding: '12px 16px',
                                        borderRadius: '10px',
                                        background: form.requiresAck ? '#F0FDF4' : '#F8FAFC',
                                        border: `1px solid ${form.requiresAck ? '#BBF7D0' : __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$hr$2f$Hrms$2f$src$2f$styles$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["tokens"].colors.border}`,
                                        transition: 'all 0.2s ease'
                                    },
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$hr$2f$Hrms$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                            type: "checkbox",
                                            checked: form.requiresAck,
                                            onChange: (e)=>setForm({
                                                    ...form,
                                                    requiresAck: e.target.checked
                                                }),
                                            style: {
                                                width: '18px',
                                                height: '18px',
                                                accentColor: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$hr$2f$Hrms$2f$src$2f$styles$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["tokens"].colors.accent
                                            }
                                        }, void 0, false, {
                                            fileName: "[project]/Documents/hr/Hrms/src/components/DocumentManagement/index.js",
                                            lineNumber: 328,
                                            columnNumber: 33
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$hr$2f$Hrms$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$hr$2f$Hrms$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    style: {
                                                        fontSize: '13px',
                                                        fontWeight: '700',
                                                        color: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$hr$2f$Hrms$2f$src$2f$styles$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["tokens"].colors.primary
                                                    },
                                                    children: "Require Acknowledgement"
                                                }, void 0, false, {
                                                    fileName: "[project]/Documents/hr/Hrms/src/components/DocumentManagement/index.js",
                                                    lineNumber: 331,
                                                    columnNumber: 37
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$hr$2f$Hrms$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    style: {
                                                        fontSize: '12px',
                                                        color: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$hr$2f$Hrms$2f$src$2f$styles$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["tokens"].colors.secondary
                                                    },
                                                    children: "All employees must acknowledge reading this document"
                                                }, void 0, false, {
                                                    fileName: "[project]/Documents/hr/Hrms/src/components/DocumentManagement/index.js",
                                                    lineNumber: 332,
                                                    columnNumber: 37
                                                }, ("TURBOPACK compile-time value", void 0))
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/Documents/hr/Hrms/src/components/DocumentManagement/index.js",
                                            lineNumber: 330,
                                            columnNumber: 33
                                        }, ("TURBOPACK compile-time value", void 0))
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Documents/hr/Hrms/src/components/DocumentManagement/index.js",
                                    lineNumber: 327,
                                    columnNumber: 29
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Documents/hr/Hrms/src/components/DocumentManagement/index.js",
                            lineNumber: 296,
                            columnNumber: 25
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$hr$2f$Hrms$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            style: {
                                display: 'flex',
                                gap: '12px',
                                justifyContent: 'flex-end'
                            },
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$hr$2f$Hrms$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    onClick: ()=>setShowModal(false),
                                    style: {
                                        ...__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$hr$2f$Hrms$2f$src$2f$styles$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["styles"].button.outline,
                                        padding: '10px 20px'
                                    },
                                    children: "Cancel"
                                }, void 0, false, {
                                    fileName: "[project]/Documents/hr/Hrms/src/components/DocumentManagement/index.js",
                                    lineNumber: 337,
                                    columnNumber: 29
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$hr$2f$Hrms$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    onClick: handleSave,
                                    disabled: !form.title,
                                    style: {
                                        ...__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$hr$2f$Hrms$2f$src$2f$styles$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["styles"].button.primary,
                                        padding: '10px 20px'
                                    },
                                    children: editing ? 'Update Document' : 'Create Document'
                                }, void 0, false, {
                                    fileName: "[project]/Documents/hr/Hrms/src/components/DocumentManagement/index.js",
                                    lineNumber: 338,
                                    columnNumber: 29
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Documents/hr/Hrms/src/components/DocumentManagement/index.js",
                            lineNumber: 336,
                            columnNumber: 25
                        }, ("TURBOPACK compile-time value", void 0))
                    ]
                }, void 0, true, {
                    fileName: "[project]/Documents/hr/Hrms/src/components/DocumentManagement/index.js",
                    lineNumber: 291,
                    columnNumber: 21
                }, ("TURBOPACK compile-time value", void 0))
            }, void 0, false, {
                fileName: "[project]/Documents/hr/Hrms/src/components/DocumentManagement/index.js",
                lineNumber: 290,
                columnNumber: 17
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/Documents/hr/Hrms/src/components/DocumentManagement/index.js",
        lineNumber: 198,
        columnNumber: 9
    }, ("TURBOPACK compile-time value", void 0));
};
const __TURBOPACK__default__export__ = DocumentManagement;
}),
];

//# sourceMappingURL=Documents_hr_Hrms_src_components_DocumentManagement_index_6be102cb.js.map