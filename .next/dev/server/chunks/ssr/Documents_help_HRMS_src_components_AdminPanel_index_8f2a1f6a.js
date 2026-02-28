module.exports = [
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
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$help$2f$HRMS$2f$src$2f$utils$2f$exportCSV$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/help/HRMS/src/utils/exportCSV.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$help$2f$HRMS$2f$src$2f$utils$2f$auditLog$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/help/HRMS/src/utils/auditLog.js [app-ssr] (ecmascript)");
;
;
;
;
;
;
;
/* Helper used by leave approval to feed admin email through */ const AdminPanel = ({ fixedModule, adminEmail = 'admin' })=>{
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
    const [leavePolicy, setLeavePolicy] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$help$2f$HRMS$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])({
        sick: 10,
        casual: 12,
        paid: 15
    });
    const [leavePolicySaving, setLeavePolicySaving] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$help$2f$HRMS$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [leaveRequests, setLeaveRequests] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$help$2f$HRMS$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])([]);
    const [employees, setEmployees] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$help$2f$HRMS$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])([]);
    const [employeeFilter, setEmployeeFilter] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$help$2f$HRMS$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])('all');
    const [dateFilter, setDateFilter] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$help$2f$HRMS$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])('');
    // Leave rejection reason state
    const [rejectingId, setRejectingId] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$help$2f$HRMS$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    const [rejectReason, setRejectReason] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$help$2f$HRMS$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])('');
    // Attendance correction state
    const [showAddPunch, setShowAddPunch] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$help$2f$HRMS$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [punchForm, setPunchForm] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$help$2f$HRMS$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])({
        userEmail: '',
        date: '',
        time: '',
        type: 'in'
    });
    const [savingPunch, setSavingPunch] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$help$2f$HRMS$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$help$2f$HRMS$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        setCurrentModule(fixedModule);
    }, [
        fixedModule
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$help$2f$HRMS$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        const unsub = [
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$help$2f$HRMS$2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["onSnapshot"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$help$2f$HRMS$2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["query"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$help$2f$HRMS$2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["collection"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$help$2f$HRMS$2f$src$2f$firebase$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["db"], 'attendance'), (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$help$2f$HRMS$2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["orderBy"])('timestamp', 'desc'), (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$help$2f$HRMS$2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["limit"])(200)), (s)=>setAllAttendance(s.docs.map((d)=>({
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
                    })))),
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$help$2f$HRMS$2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["onSnapshot"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$help$2f$HRMS$2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["doc"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$help$2f$HRMS$2f$src$2f$firebase$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["db"], 'config', 'leavePolicy'), (snap)=>{
                if (snap.exists()) setLeavePolicy(snap.data());
            })
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
    /* ─── Leave Approval Actions ─── */ const handleApprove = async (req)=>{
        await (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$help$2f$HRMS$2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["updateDoc"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$help$2f$HRMS$2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["doc"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$help$2f$HRMS$2f$src$2f$firebase$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["db"], 'leaveRequests', req.id), {
            status: 'approved'
        });
        await (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$help$2f$HRMS$2f$src$2f$utils$2f$auditLog$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["logAction"])('LEAVE_APPROVED', {
            employee: req.userEmail,
            type: req.type,
            start: req.start,
            end: req.end
        }, adminEmail);
    };
    const handleReject = async ()=>{
        if (!rejectingId) return;
        await (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$help$2f$HRMS$2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["updateDoc"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$help$2f$HRMS$2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["doc"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$help$2f$HRMS$2f$src$2f$firebase$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["db"], 'leaveRequests', rejectingId), {
            status: 'rejected',
            rejectionReason: rejectReason.trim() || 'No reason provided.'
        });
        await (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$help$2f$HRMS$2f$src$2f$utils$2f$auditLog$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["logAction"])('LEAVE_REJECTED', {
            leaveId: rejectingId,
            reason: rejectReason
        }, adminEmail);
        setRejectingId(null);
        setRejectReason('');
    };
    /* ─── Manual Punch Add ─── */ const handleAddPunch = async ()=>{
        if (!punchForm.userEmail || !punchForm.date || !punchForm.time) return;
        setSavingPunch(true);
        const datetime = new Date(`${punchForm.date}T${punchForm.time}`);
        await (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$help$2f$HRMS$2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["addDoc"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$help$2f$HRMS$2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["collection"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$help$2f$HRMS$2f$src$2f$firebase$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["db"], 'attendance'), {
            userEmail: punchForm.userEmail,
            type: punchForm.type,
            timestamp: datetime,
            date: punchForm.date,
            timeString: punchForm.time,
            manuallyAdded: true,
            addedBy: adminEmail
        });
        await (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$help$2f$HRMS$2f$src$2f$utils$2f$auditLog$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["logAction"])('ATTENDANCE_CORRECTION', {
            employee: punchForm.userEmail,
            type: punchForm.type,
            date: punchForm.date,
            time: punchForm.time
        }, adminEmail);
        setPunchForm({
            userEmail: '',
            date: '',
            time: '',
            type: 'in'
        });
        setShowAddPunch(false);
        setSavingPunch(false);
    };
    const renderModule = ()=>{
        switch(currentModule){
            /* ═══════════════ LEAVES ═══════════════ */ case 'leaves':
                {
                    const filteredLeaves = leaveRequests.filter((l)=>(employeeFilter === 'all' || l.userEmail === employeeFilter) && l.status === 'pending');
                    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$help$2f$HRMS$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "animate-fade",
                        children: [
                            rejectingId && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$help$2f$HRMS$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                style: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$help$2f$HRMS$2f$src$2f$styles$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["styles"].modal,
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$help$2f$HRMS$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    style: {
                                        background: '#fff',
                                        borderRadius: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$help$2f$HRMS$2f$src$2f$styles$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["tokens"].radius.xl,
                                        width: '420px',
                                        padding: '32px',
                                        boxShadow: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$help$2f$HRMS$2f$src$2f$styles$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["tokens"].shadow.xl
                                    },
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$help$2f$HRMS$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            style: {
                                                fontSize: '18px',
                                                fontWeight: '800',
                                                color: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$help$2f$HRMS$2f$src$2f$styles$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["tokens"].colors.primary,
                                                marginBottom: '8px'
                                            },
                                            children: "Decline Leave Request"
                                        }, void 0, false, {
                                            fileName: "[project]/Documents/help/HRMS/src/components/AdminPanel/index.js",
                                            lineNumber: 101,
                                            columnNumber: 19
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$help$2f$HRMS$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            style: {
                                                fontSize: '13px',
                                                color: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$help$2f$HRMS$2f$src$2f$styles$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["tokens"].colors.secondary,
                                                marginBottom: '20px'
                                            },
                                            children: "Provide a reason for declining — this will be visible to the employee."
                                        }, void 0, false, {
                                            fileName: "[project]/Documents/help/HRMS/src/components/AdminPanel/index.js",
                                            lineNumber: 102,
                                            columnNumber: 19
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$help$2f$HRMS$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("textarea", {
                                            style: {
                                                ...__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$help$2f$HRMS$2f$src$2f$styles$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["styles"].input,
                                                minHeight: '100px',
                                                resize: 'none'
                                            },
                                            placeholder: "e.g. Team capacity issue during this period...",
                                            value: rejectReason,
                                            onChange: (e)=>setRejectReason(e.target.value)
                                        }, void 0, false, {
                                            fileName: "[project]/Documents/help/HRMS/src/components/AdminPanel/index.js",
                                            lineNumber: 103,
                                            columnNumber: 19
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$help$2f$HRMS$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            style: {
                                                display: 'flex',
                                                gap: '12px',
                                                marginTop: '16px'
                                            },
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$help$2f$HRMS$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                    onClick: ()=>{
                                                        setRejectingId(null);
                                                        setRejectReason('');
                                                    },
                                                    style: {
                                                        ...__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$help$2f$HRMS$2f$src$2f$styles$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["styles"].button.outline,
                                                        flex: 1,
                                                        justifyContent: 'center'
                                                    },
                                                    children: "Cancel"
                                                }, void 0, false, {
                                                    fileName: "[project]/Documents/help/HRMS/src/components/AdminPanel/index.js",
                                                    lineNumber: 110,
                                                    columnNumber: 21
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$help$2f$HRMS$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                    onClick: handleReject,
                                                    style: {
                                                        ...__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$help$2f$HRMS$2f$src$2f$styles$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["styles"].button.primary,
                                                        flex: 2,
                                                        justifyContent: 'center',
                                                        background: '#EF4444'
                                                    },
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$help$2f$HRMS$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "material-symbols-outlined",
                                                            style: {
                                                                fontSize: '18px'
                                                            },
                                                            children: "block"
                                                        }, void 0, false, {
                                                            fileName: "[project]/Documents/help/HRMS/src/components/AdminPanel/index.js",
                                                            lineNumber: 112,
                                                            columnNumber: 23
                                                        }, ("TURBOPACK compile-time value", void 0)),
                                                        " Confirm Decline"
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/Documents/help/HRMS/src/components/AdminPanel/index.js",
                                                    lineNumber: 111,
                                                    columnNumber: 21
                                                }, ("TURBOPACK compile-time value", void 0))
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/Documents/help/HRMS/src/components/AdminPanel/index.js",
                                            lineNumber: 109,
                                            columnNumber: 19
                                        }, ("TURBOPACK compile-time value", void 0))
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Documents/help/HRMS/src/components/AdminPanel/index.js",
                                    lineNumber: 100,
                                    columnNumber: 17
                                }, ("TURBOPACK compile-time value", void 0))
                            }, void 0, false, {
                                fileName: "[project]/Documents/help/HRMS/src/components/AdminPanel/index.js",
                                lineNumber: 99,
                                columnNumber: 15
                            }, ("TURBOPACK compile-time value", void 0)),
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
                                                lineNumber: 121,
                                                columnNumber: 17
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$help$2f$HRMS$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                style: {
                                                    color: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$help$2f$HRMS$2f$src$2f$styles$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["tokens"].colors.secondary,
                                                    fontSize: '14px'
                                                },
                                                children: "Review and manage employee time-off requests."
                                            }, void 0, false, {
                                                fileName: "[project]/Documents/help/HRMS/src/components/AdminPanel/index.js",
                                                lineNumber: 122,
                                                columnNumber: 17
                                            }, ("TURBOPACK compile-time value", void 0))
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Documents/help/HRMS/src/components/AdminPanel/index.js",
                                        lineNumber: 120,
                                        columnNumber: 15
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
                                                children: "All Employees"
                                            }, void 0, false, {
                                                fileName: "[project]/Documents/help/HRMS/src/components/AdminPanel/index.js",
                                                lineNumber: 125,
                                                columnNumber: 17
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            employees.map((emp)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$help$2f$HRMS$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                    value: emp.email,
                                                    children: emp.name
                                                }, emp.id, false, {
                                                    fileName: "[project]/Documents/help/HRMS/src/components/AdminPanel/index.js",
                                                    lineNumber: 126,
                                                    columnNumber: 39
                                                }, ("TURBOPACK compile-time value", void 0)))
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Documents/help/HRMS/src/components/AdminPanel/index.js",
                                        lineNumber: 124,
                                        columnNumber: 15
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Documents/help/HRMS/src/components/AdminPanel/index.js",
                                lineNumber: 119,
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
                                                        lineNumber: 133,
                                                        columnNumber: 19
                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$help$2f$HRMS$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                        style: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$help$2f$HRMS$2f$src$2f$styles$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["styles"].th,
                                                        children: "Type"
                                                    }, void 0, false, {
                                                        fileName: "[project]/Documents/help/HRMS/src/components/AdminPanel/index.js",
                                                        lineNumber: 134,
                                                        columnNumber: 19
                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$help$2f$HRMS$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                        style: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$help$2f$HRMS$2f$src$2f$styles$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["styles"].th,
                                                        children: "Period"
                                                    }, void 0, false, {
                                                        fileName: "[project]/Documents/help/HRMS/src/components/AdminPanel/index.js",
                                                        lineNumber: 135,
                                                        columnNumber: 19
                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$help$2f$HRMS$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                        style: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$help$2f$HRMS$2f$src$2f$styles$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["styles"].th,
                                                        children: "Reason"
                                                    }, void 0, false, {
                                                        fileName: "[project]/Documents/help/HRMS/src/components/AdminPanel/index.js",
                                                        lineNumber: 136,
                                                        columnNumber: 19
                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$help$2f$HRMS$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                        style: {
                                                            ...__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$help$2f$HRMS$2f$src$2f$styles$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["styles"].th,
                                                            textAlign: 'right'
                                                        },
                                                        children: "Actions"
                                                    }, void 0, false, {
                                                        fileName: "[project]/Documents/help/HRMS/src/components/AdminPanel/index.js",
                                                        lineNumber: 137,
                                                        columnNumber: 19
                                                    }, ("TURBOPACK compile-time value", void 0))
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/Documents/help/HRMS/src/components/AdminPanel/index.js",
                                                lineNumber: 132,
                                                columnNumber: 24
                                            }, ("TURBOPACK compile-time value", void 0))
                                        }, void 0, false, {
                                            fileName: "[project]/Documents/help/HRMS/src/components/AdminPanel/index.js",
                                            lineNumber: 132,
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
                                                                            color: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$help$2f$HRMS$2f$src$2f$styles$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["tokens"].colors.primary
                                                                        },
                                                                        children: req.userEmail?.split('@')[0]
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/Documents/help/HRMS/src/components/AdminPanel/index.js",
                                                                        lineNumber: 143,
                                                                        columnNumber: 25
                                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$help$2f$HRMS$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                        style: {
                                                                            fontSize: '12px',
                                                                            color: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$help$2f$HRMS$2f$src$2f$styles$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["tokens"].colors.secondary
                                                                        },
                                                                        children: req.userEmail
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/Documents/help/HRMS/src/components/AdminPanel/index.js",
                                                                        lineNumber: 144,
                                                                        columnNumber: 25
                                                                    }, ("TURBOPACK compile-time value", void 0))
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/Documents/help/HRMS/src/components/AdminPanel/index.js",
                                                                lineNumber: 142,
                                                                columnNumber: 23
                                                            }, ("TURBOPACK compile-time value", void 0)),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$help$2f$HRMS$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                                style: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$help$2f$HRMS$2f$src$2f$styles$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["styles"].td,
                                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$help$2f$HRMS$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    style: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$help$2f$HRMS$2f$src$2f$styles$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["styles"].badge('primary'),
                                                                    children: req.type
                                                                }, void 0, false, {
                                                                    fileName: "[project]/Documents/help/HRMS/src/components/AdminPanel/index.js",
                                                                    lineNumber: 146,
                                                                    columnNumber: 45
                                                                }, ("TURBOPACK compile-time value", void 0))
                                                            }, void 0, false, {
                                                                fileName: "[project]/Documents/help/HRMS/src/components/AdminPanel/index.js",
                                                                lineNumber: 146,
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
                                                                        " → ",
                                                                        req.end
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/Documents/help/HRMS/src/components/AdminPanel/index.js",
                                                                    lineNumber: 147,
                                                                    columnNumber: 45
                                                                }, ("TURBOPACK compile-time value", void 0))
                                                            }, void 0, false, {
                                                                fileName: "[project]/Documents/help/HRMS/src/components/AdminPanel/index.js",
                                                                lineNumber: 147,
                                                                columnNumber: 23
                                                            }, ("TURBOPACK compile-time value", void 0)),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$help$2f$HRMS$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                                style: {
                                                                    ...__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$help$2f$HRMS$2f$src$2f$styles$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["styles"].td,
                                                                    maxWidth: '200px'
                                                                },
                                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$help$2f$HRMS$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    style: {
                                                                        fontSize: '13px',
                                                                        color: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$help$2f$HRMS$2f$src$2f$styles$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["tokens"].colors.secondary,
                                                                        overflow: 'hidden',
                                                                        textOverflow: 'ellipsis',
                                                                        whiteSpace: 'nowrap'
                                                                    },
                                                                    children: req.reason || '—'
                                                                }, void 0, false, {
                                                                    fileName: "[project]/Documents/help/HRMS/src/components/AdminPanel/index.js",
                                                                    lineNumber: 149,
                                                                    columnNumber: 25
                                                                }, ("TURBOPACK compile-time value", void 0))
                                                            }, void 0, false, {
                                                                fileName: "[project]/Documents/help/HRMS/src/components/AdminPanel/index.js",
                                                                lineNumber: 148,
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
                                                                            onClick: ()=>handleApprove(req),
                                                                            style: {
                                                                                ...__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$help$2f$HRMS$2f$src$2f$styles$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["styles"].button.primary,
                                                                                padding: '6px 14px',
                                                                                fontSize: '13px',
                                                                                background: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$help$2f$HRMS$2f$src$2f$styles$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["tokens"].colors.success
                                                                            },
                                                                            children: "Approve"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/Documents/help/HRMS/src/components/AdminPanel/index.js",
                                                                            lineNumber: 153,
                                                                            columnNumber: 27
                                                                        }, ("TURBOPACK compile-time value", void 0)),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$help$2f$HRMS$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                            onClick: ()=>setRejectingId(req.id),
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
                                                                            lineNumber: 154,
                                                                            columnNumber: 27
                                                                        }, ("TURBOPACK compile-time value", void 0))
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/Documents/help/HRMS/src/components/AdminPanel/index.js",
                                                                    lineNumber: 152,
                                                                    columnNumber: 25
                                                                }, ("TURBOPACK compile-time value", void 0))
                                                            }, void 0, false, {
                                                                fileName: "[project]/Documents/help/HRMS/src/components/AdminPanel/index.js",
                                                                lineNumber: 151,
                                                                columnNumber: 23
                                                            }, ("TURBOPACK compile-time value", void 0))
                                                        ]
                                                    }, req.id, true, {
                                                        fileName: "[project]/Documents/help/HRMS/src/components/AdminPanel/index.js",
                                                        lineNumber: 141,
                                                        columnNumber: 21
                                                    }, ("TURBOPACK compile-time value", void 0))),
                                                filteredLeaves.length === 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$help$2f$HRMS$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$help$2f$HRMS$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                        colSpan: "5",
                                                        style: {
                                                            textAlign: 'center',
                                                            padding: '60px',
                                                            color: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$help$2f$HRMS$2f$src$2f$styles$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["tokens"].colors.secondary
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
                                                                lineNumber: 161,
                                                                columnNumber: 23
                                                            }, ("TURBOPACK compile-time value", void 0)),
                                                            "No pending leave requests."
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/Documents/help/HRMS/src/components/AdminPanel/index.js",
                                                        lineNumber: 160,
                                                        columnNumber: 25
                                                    }, ("TURBOPACK compile-time value", void 0))
                                                }, void 0, false, {
                                                    fileName: "[project]/Documents/help/HRMS/src/components/AdminPanel/index.js",
                                                    lineNumber: 160,
                                                    columnNumber: 21
                                                }, ("TURBOPACK compile-time value", void 0))
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/Documents/help/HRMS/src/components/AdminPanel/index.js",
                                            lineNumber: 139,
                                            columnNumber: 17
                                        }, ("TURBOPACK compile-time value", void 0))
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Documents/help/HRMS/src/components/AdminPanel/index.js",
                                    lineNumber: 131,
                                    columnNumber: 15
                                }, ("TURBOPACK compile-time value", void 0))
                            }, void 0, false, {
                                fileName: "[project]/Documents/help/HRMS/src/components/AdminPanel/index.js",
                                lineNumber: 130,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Documents/help/HRMS/src/components/AdminPanel/index.js",
                        lineNumber: 96,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0));
                }
            /* ═══════════════ ATTENDANCE ═══════════════ */ case 'attendance':
                {
                    const groupedAttendance = allAttendance.reduce((acc, log)=>{
                        if (!log.timestamp) return acc;
                        const d = log.timestamp.toDate ? log.timestamp.toDate() : new Date(log.timestamp);
                        const dateStr = d.toLocaleDateString(undefined, {
                            month: 'short',
                            day: 'numeric',
                            year: 'numeric'
                        });
                        const key = `${log.userEmail}_${dateStr}`;
                        if (!acc[key]) acc[key] = {
                            userEmail: log.userEmail,
                            date: dateStr,
                            in: null,
                            out: null,
                            rawDate: d,
                            manual: false
                        };
                        const timeStr = d.toLocaleTimeString(undefined, {
                            hour: '2-digit',
                            minute: '2-digit'
                        });
                        if (log.type === 'in') {
                            acc[key].in = timeStr;
                            if (log.manuallyAdded) acc[key].manual = true;
                        }
                        if (log.type === 'out') {
                            acc[key].out = timeStr;
                            if (log.manuallyAdded) acc[key].manual = true;
                        }
                        return acc;
                    }, {});
                    const attendanceRows = Object.values(groupedAttendance).filter((log)=>{
                        const matchesEmp = employeeFilter === 'all' || log.userEmail === employeeFilter;
                        const rawDateStr = log.rawDate.toISOString().split('T')[0];
                        const matchesDate = !dateFilter || rawDateStr === dateFilter;
                        return matchesEmp && matchesDate;
                    }).sort((a, b)=>b.rawDate - a.rawDate);
                    const handleExportAttendance = ()=>{
                        (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$help$2f$HRMS$2f$src$2f$utils$2f$exportCSV$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["exportToCSV"])(attendanceRows.map((r)=>({
                                Employee: r.userEmail,
                                Date: r.date,
                                'Clock In': r.in || '',
                                'Clock Out': r.out || '',
                                Manual: r.manual ? 'Yes' : 'No'
                            })), `attendance-${dateFilter || 'all'}.csv`);
                    };
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
                                                lineNumber: 206,
                                                columnNumber: 17
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$help$2f$HRMS$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                style: {
                                                    color: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$help$2f$HRMS$2f$src$2f$styles$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["tokens"].colors.secondary,
                                                    fontSize: '14px',
                                                    marginTop: '4px'
                                                },
                                                children: "Consolidated view of workforce activity. Add manual corrections below."
                                            }, void 0, false, {
                                                fileName: "[project]/Documents/help/HRMS/src/components/AdminPanel/index.js",
                                                lineNumber: 207,
                                                columnNumber: 17
                                            }, ("TURBOPACK compile-time value", void 0))
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Documents/help/HRMS/src/components/AdminPanel/index.js",
                                        lineNumber: 205,
                                        columnNumber: 15
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$help$2f$HRMS$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        style: {
                                            display: 'flex',
                                            gap: '10px',
                                            alignItems: 'center',
                                            flexWrap: 'wrap'
                                        },
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$help$2f$HRMS$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                type: "date",
                                                style: {
                                                    ...__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$help$2f$HRMS$2f$src$2f$styles$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["styles"].input,
                                                    width: '160px'
                                                },
                                                value: dateFilter,
                                                onChange: (e)=>setDateFilter(e.target.value)
                                            }, void 0, false, {
                                                fileName: "[project]/Documents/help/HRMS/src/components/AdminPanel/index.js",
                                                lineNumber: 210,
                                                columnNumber: 17
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$help$2f$HRMS$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                                style: {
                                                    ...__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$help$2f$HRMS$2f$src$2f$styles$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["styles"].input,
                                                    width: '180px'
                                                },
                                                value: employeeFilter,
                                                onChange: (e)=>setEmployeeFilter(e.target.value),
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$help$2f$HRMS$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                        value: "all",
                                                        children: "All Employees"
                                                    }, void 0, false, {
                                                        fileName: "[project]/Documents/help/HRMS/src/components/AdminPanel/index.js",
                                                        lineNumber: 212,
                                                        columnNumber: 19
                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                    employees.map((emp)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$help$2f$HRMS$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                            value: emp.email,
                                                            children: emp.name
                                                        }, emp.id, false, {
                                                            fileName: "[project]/Documents/help/HRMS/src/components/AdminPanel/index.js",
                                                            lineNumber: 213,
                                                            columnNumber: 41
                                                        }, ("TURBOPACK compile-time value", void 0)))
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/Documents/help/HRMS/src/components/AdminPanel/index.js",
                                                lineNumber: 211,
                                                columnNumber: 17
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$help$2f$HRMS$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                onClick: ()=>setShowAddPunch((o)=>!o),
                                                style: {
                                                    ...__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$help$2f$HRMS$2f$src$2f$styles$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["styles"].button.outline,
                                                    padding: '10px 16px'
                                                },
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$help$2f$HRMS$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "material-symbols-outlined",
                                                        style: {
                                                            fontSize: '18px'
                                                        },
                                                        children: showAddPunch ? 'close' : 'add_circle'
                                                    }, void 0, false, {
                                                        fileName: "[project]/Documents/help/HRMS/src/components/AdminPanel/index.js",
                                                        lineNumber: 216,
                                                        columnNumber: 19
                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                    "Add Punch"
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/Documents/help/HRMS/src/components/AdminPanel/index.js",
                                                lineNumber: 215,
                                                columnNumber: 17
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$help$2f$HRMS$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                onClick: handleExportAttendance,
                                                style: {
                                                    ...__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$help$2f$HRMS$2f$src$2f$styles$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["styles"].button.outline,
                                                    padding: '10px 16px'
                                                },
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$help$2f$HRMS$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "material-symbols-outlined",
                                                        style: {
                                                            fontSize: '18px'
                                                        },
                                                        children: "ios_share"
                                                    }, void 0, false, {
                                                        fileName: "[project]/Documents/help/HRMS/src/components/AdminPanel/index.js",
                                                        lineNumber: 220,
                                                        columnNumber: 19
                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                    "CSV"
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/Documents/help/HRMS/src/components/AdminPanel/index.js",
                                                lineNumber: 219,
                                                columnNumber: 17
                                            }, ("TURBOPACK compile-time value", void 0))
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Documents/help/HRMS/src/components/AdminPanel/index.js",
                                        lineNumber: 209,
                                        columnNumber: 15
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Documents/help/HRMS/src/components/AdminPanel/index.js",
                                lineNumber: 204,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0)),
                            showAddPunch && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$help$2f$HRMS$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                style: {
                                    ...__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$help$2f$HRMS$2f$src$2f$styles$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["styles"].card,
                                    marginBottom: '20px',
                                    background: '#F8FAFC',
                                    border: `1.5px dashed ${__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$help$2f$HRMS$2f$src$2f$styles$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["tokens"].colors.accent}`
                                },
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$help$2f$HRMS$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        style: {
                                            fontSize: '14px',
                                            fontWeight: '800',
                                            color: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$help$2f$HRMS$2f$src$2f$styles$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["tokens"].colors.primary,
                                            marginBottom: '16px',
                                            display: 'flex',
                                            alignItems: 'center',
                                            gap: '8px'
                                        },
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$help$2f$HRMS$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "material-symbols-outlined",
                                                style: {
                                                    fontSize: '18px',
                                                    color: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$help$2f$HRMS$2f$src$2f$styles$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["tokens"].colors.accent
                                                },
                                                children: "edit_square"
                                            }, void 0, false, {
                                                fileName: "[project]/Documents/help/HRMS/src/components/AdminPanel/index.js",
                                                lineNumber: 230,
                                                columnNumber: 19
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            "Manual Attendance Correction"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Documents/help/HRMS/src/components/AdminPanel/index.js",
                                        lineNumber: 229,
                                        columnNumber: 17
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$help$2f$HRMS$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        style: {
                                            display: 'grid',
                                            gridTemplateColumns: '2fr 1fr 1fr 1fr auto',
                                            gap: '12px',
                                            alignItems: 'end'
                                        },
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$help$2f$HRMS$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$help$2f$HRMS$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                        style: {
                                                            fontSize: '11px',
                                                            fontWeight: '700',
                                                            color: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$help$2f$HRMS$2f$src$2f$styles$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["tokens"].colors.secondary,
                                                            display: 'block',
                                                            marginBottom: '5px',
                                                            textTransform: 'uppercase'
                                                        },
                                                        children: "Employee"
                                                    }, void 0, false, {
                                                        fileName: "[project]/Documents/help/HRMS/src/components/AdminPanel/index.js",
                                                        lineNumber: 235,
                                                        columnNumber: 21
                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$help$2f$HRMS$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                                        style: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$help$2f$HRMS$2f$src$2f$styles$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["styles"].input,
                                                        value: punchForm.userEmail,
                                                        onChange: (e)=>setPunchForm({
                                                                ...punchForm,
                                                                userEmail: e.target.value
                                                            }),
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$help$2f$HRMS$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                value: "",
                                                                children: "Select employee"
                                                            }, void 0, false, {
                                                                fileName: "[project]/Documents/help/HRMS/src/components/AdminPanel/index.js",
                                                                lineNumber: 237,
                                                                columnNumber: 23
                                                            }, ("TURBOPACK compile-time value", void 0)),
                                                            employees.map((e)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$help$2f$HRMS$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                    value: e.email,
                                                                    children: [
                                                                        e.name,
                                                                        " (",
                                                                        e.email,
                                                                        ")"
                                                                    ]
                                                                }, e.id, true, {
                                                                    fileName: "[project]/Documents/help/HRMS/src/components/AdminPanel/index.js",
                                                                    lineNumber: 238,
                                                                    columnNumber: 43
                                                                }, ("TURBOPACK compile-time value", void 0)))
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/Documents/help/HRMS/src/components/AdminPanel/index.js",
                                                        lineNumber: 236,
                                                        columnNumber: 21
                                                    }, ("TURBOPACK compile-time value", void 0))
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/Documents/help/HRMS/src/components/AdminPanel/index.js",
                                                lineNumber: 234,
                                                columnNumber: 19
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$help$2f$HRMS$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$help$2f$HRMS$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                        style: {
                                                            fontSize: '11px',
                                                            fontWeight: '700',
                                                            color: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$help$2f$HRMS$2f$src$2f$styles$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["tokens"].colors.secondary,
                                                            display: 'block',
                                                            marginBottom: '5px',
                                                            textTransform: 'uppercase'
                                                        },
                                                        children: "Date"
                                                    }, void 0, false, {
                                                        fileName: "[project]/Documents/help/HRMS/src/components/AdminPanel/index.js",
                                                        lineNumber: 242,
                                                        columnNumber: 21
                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$help$2f$HRMS$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                        type: "date",
                                                        style: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$help$2f$HRMS$2f$src$2f$styles$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["styles"].input,
                                                        value: punchForm.date,
                                                        onChange: (e)=>setPunchForm({
                                                                ...punchForm,
                                                                date: e.target.value
                                                            })
                                                    }, void 0, false, {
                                                        fileName: "[project]/Documents/help/HRMS/src/components/AdminPanel/index.js",
                                                        lineNumber: 243,
                                                        columnNumber: 21
                                                    }, ("TURBOPACK compile-time value", void 0))
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/Documents/help/HRMS/src/components/AdminPanel/index.js",
                                                lineNumber: 241,
                                                columnNumber: 19
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$help$2f$HRMS$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$help$2f$HRMS$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                        style: {
                                                            fontSize: '11px',
                                                            fontWeight: '700',
                                                            color: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$help$2f$HRMS$2f$src$2f$styles$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["tokens"].colors.secondary,
                                                            display: 'block',
                                                            marginBottom: '5px',
                                                            textTransform: 'uppercase'
                                                        },
                                                        children: "Time"
                                                    }, void 0, false, {
                                                        fileName: "[project]/Documents/help/HRMS/src/components/AdminPanel/index.js",
                                                        lineNumber: 246,
                                                        columnNumber: 21
                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$help$2f$HRMS$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                        type: "time",
                                                        style: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$help$2f$HRMS$2f$src$2f$styles$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["styles"].input,
                                                        value: punchForm.time,
                                                        onChange: (e)=>setPunchForm({
                                                                ...punchForm,
                                                                time: e.target.value
                                                            })
                                                    }, void 0, false, {
                                                        fileName: "[project]/Documents/help/HRMS/src/components/AdminPanel/index.js",
                                                        lineNumber: 247,
                                                        columnNumber: 21
                                                    }, ("TURBOPACK compile-time value", void 0))
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/Documents/help/HRMS/src/components/AdminPanel/index.js",
                                                lineNumber: 245,
                                                columnNumber: 19
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$help$2f$HRMS$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$help$2f$HRMS$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                        style: {
                                                            fontSize: '11px',
                                                            fontWeight: '700',
                                                            color: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$help$2f$HRMS$2f$src$2f$styles$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["tokens"].colors.secondary,
                                                            display: 'block',
                                                            marginBottom: '5px',
                                                            textTransform: 'uppercase'
                                                        },
                                                        children: "Type"
                                                    }, void 0, false, {
                                                        fileName: "[project]/Documents/help/HRMS/src/components/AdminPanel/index.js",
                                                        lineNumber: 250,
                                                        columnNumber: 21
                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$help$2f$HRMS$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                                        style: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$help$2f$HRMS$2f$src$2f$styles$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["styles"].input,
                                                        value: punchForm.type,
                                                        onChange: (e)=>setPunchForm({
                                                                ...punchForm,
                                                                type: e.target.value
                                                            }),
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$help$2f$HRMS$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                value: "in",
                                                                children: "Clock In"
                                                            }, void 0, false, {
                                                                fileName: "[project]/Documents/help/HRMS/src/components/AdminPanel/index.js",
                                                                lineNumber: 252,
                                                                columnNumber: 23
                                                            }, ("TURBOPACK compile-time value", void 0)),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$help$2f$HRMS$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                value: "out",
                                                                children: "Clock Out"
                                                            }, void 0, false, {
                                                                fileName: "[project]/Documents/help/HRMS/src/components/AdminPanel/index.js",
                                                                lineNumber: 253,
                                                                columnNumber: 23
                                                            }, ("TURBOPACK compile-time value", void 0))
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/Documents/help/HRMS/src/components/AdminPanel/index.js",
                                                        lineNumber: 251,
                                                        columnNumber: 21
                                                    }, ("TURBOPACK compile-time value", void 0))
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/Documents/help/HRMS/src/components/AdminPanel/index.js",
                                                lineNumber: 249,
                                                columnNumber: 19
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$help$2f$HRMS$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                onClick: handleAddPunch,
                                                disabled: savingPunch || !punchForm.userEmail || !punchForm.date || !punchForm.time,
                                                style: {
                                                    ...__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$help$2f$HRMS$2f$src$2f$styles$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["styles"].button.primary,
                                                    padding: '10px 18px',
                                                    opacity: !punchForm.userEmail || !punchForm.date || !punchForm.time ? 0.5 : 1
                                                },
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$help$2f$HRMS$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "material-symbols-outlined",
                                                        style: {
                                                            fontSize: '18px'
                                                        },
                                                        children: "check"
                                                    }, void 0, false, {
                                                        fileName: "[project]/Documents/help/HRMS/src/components/AdminPanel/index.js",
                                                        lineNumber: 258,
                                                        columnNumber: 21
                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                    savingPunch ? 'Saving…' : 'Save'
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/Documents/help/HRMS/src/components/AdminPanel/index.js",
                                                lineNumber: 256,
                                                columnNumber: 19
                                            }, ("TURBOPACK compile-time value", void 0))
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Documents/help/HRMS/src/components/AdminPanel/index.js",
                                        lineNumber: 233,
                                        columnNumber: 17
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Documents/help/HRMS/src/components/AdminPanel/index.js",
                                lineNumber: 228,
                                columnNumber: 15
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
                                                        lineNumber: 268,
                                                        columnNumber: 19
                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$help$2f$HRMS$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                        style: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$help$2f$HRMS$2f$src$2f$styles$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["styles"].th,
                                                        children: "Date"
                                                    }, void 0, false, {
                                                        fileName: "[project]/Documents/help/HRMS/src/components/AdminPanel/index.js",
                                                        lineNumber: 269,
                                                        columnNumber: 19
                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$help$2f$HRMS$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                        style: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$help$2f$HRMS$2f$src$2f$styles$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["styles"].th,
                                                        children: "Clock In / Out"
                                                    }, void 0, false, {
                                                        fileName: "[project]/Documents/help/HRMS/src/components/AdminPanel/index.js",
                                                        lineNumber: 270,
                                                        columnNumber: 19
                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$help$2f$HRMS$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                        style: {
                                                            ...__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$help$2f$HRMS$2f$src$2f$styles$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["styles"].th,
                                                            textAlign: 'right',
                                                            paddingRight: '32px'
                                                        },
                                                        children: "Status"
                                                    }, void 0, false, {
                                                        fileName: "[project]/Documents/help/HRMS/src/components/AdminPanel/index.js",
                                                        lineNumber: 271,
                                                        columnNumber: 19
                                                    }, ("TURBOPACK compile-time value", void 0))
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/Documents/help/HRMS/src/components/AdminPanel/index.js",
                                                lineNumber: 267,
                                                columnNumber: 24
                                            }, ("TURBOPACK compile-time value", void 0))
                                        }, void 0, false, {
                                            fileName: "[project]/Documents/help/HRMS/src/components/AdminPanel/index.js",
                                            lineNumber: 267,
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
                                                                            lineNumber: 280,
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
                                                                                    lineNumber: 284,
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
                                                                                    lineNumber: 285,
                                                                                    columnNumber: 29
                                                                                }, ("TURBOPACK compile-time value", void 0))
                                                                            ]
                                                                        }, void 0, true, {
                                                                            fileName: "[project]/Documents/help/HRMS/src/components/AdminPanel/index.js",
                                                                            lineNumber: 283,
                                                                            columnNumber: 27
                                                                        }, ("TURBOPACK compile-time value", void 0))
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/Documents/help/HRMS/src/components/AdminPanel/index.js",
                                                                    lineNumber: 279,
                                                                    columnNumber: 25
                                                                }, ("TURBOPACK compile-time value", void 0))
                                                            }, void 0, false, {
                                                                fileName: "[project]/Documents/help/HRMS/src/components/AdminPanel/index.js",
                                                                lineNumber: 278,
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
                                                                lineNumber: 289,
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
                                                                            lineNumber: 292,
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
                                                                            lineNumber: 295,
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
                                                                            lineNumber: 296,
                                                                            columnNumber: 27
                                                                        }, ("TURBOPACK compile-time value", void 0))
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/Documents/help/HRMS/src/components/AdminPanel/index.js",
                                                                    lineNumber: 291,
                                                                    columnNumber: 25
                                                                }, ("TURBOPACK compile-time value", void 0))
                                                            }, void 0, false, {
                                                                fileName: "[project]/Documents/help/HRMS/src/components/AdminPanel/index.js",
                                                                lineNumber: 290,
                                                                columnNumber: 23
                                                            }, ("TURBOPACK compile-time value", void 0)),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$help$2f$HRMS$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                                style: {
                                                                    ...__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$help$2f$HRMS$2f$src$2f$styles$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["styles"].td,
                                                                    textAlign: 'right',
                                                                    paddingRight: '32px'
                                                                },
                                                                children: row.manual ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$help$2f$HRMS$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                    style: {
                                                                        padding: '3px 10px',
                                                                        borderRadius: '999px',
                                                                        fontSize: '11px',
                                                                        fontWeight: '700',
                                                                        background: '#FFF7ED',
                                                                        color: '#D97706',
                                                                        border: '1px solid #FDE68A'
                                                                    },
                                                                    children: "⚙ Manual"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/Documents/help/HRMS/src/components/AdminPanel/index.js",
                                                                    lineNumber: 303,
                                                                    columnNumber: 27
                                                                }, ("TURBOPACK compile-time value", void 0)) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$help$2f$HRMS$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                    style: {
                                                                        padding: '3px 10px',
                                                                        borderRadius: '999px',
                                                                        fontSize: '11px',
                                                                        fontWeight: '700',
                                                                        background: '#F0FDFA',
                                                                        color: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$help$2f$HRMS$2f$src$2f$styles$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["tokens"].colors.accent,
                                                                        border: '1px solid #A7F3D0'
                                                                    },
                                                                    children: "✓ Verified"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/Documents/help/HRMS/src/components/AdminPanel/index.js",
                                                                    lineNumber: 305,
                                                                    columnNumber: 27
                                                                }, ("TURBOPACK compile-time value", void 0))
                                                            }, void 0, false, {
                                                                fileName: "[project]/Documents/help/HRMS/src/components/AdminPanel/index.js",
                                                                lineNumber: 301,
                                                                columnNumber: 23
                                                            }, ("TURBOPACK compile-time value", void 0))
                                                        ]
                                                    }, idx, true, {
                                                        fileName: "[project]/Documents/help/HRMS/src/components/AdminPanel/index.js",
                                                        lineNumber: 275,
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
                                                                    lineNumber: 313,
                                                                    columnNumber: 25
                                                                }, ("TURBOPACK compile-time value", void 0))
                                                            }, void 0, false, {
                                                                fileName: "[project]/Documents/help/HRMS/src/components/AdminPanel/index.js",
                                                                lineNumber: 312,
                                                                columnNumber: 23
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
                                                                lineNumber: 315,
                                                                columnNumber: 23
                                                            }, ("TURBOPACK compile-time value", void 0)),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$help$2f$HRMS$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                style: {
                                                                    fontSize: '14px',
                                                                    marginTop: '4px'
                                                                },
                                                                children: "Adjust your filters or add a manual punch above."
                                                            }, void 0, false, {
                                                                fileName: "[project]/Documents/help/HRMS/src/components/AdminPanel/index.js",
                                                                lineNumber: 316,
                                                                columnNumber: 23
                                                            }, ("TURBOPACK compile-time value", void 0))
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/Documents/help/HRMS/src/components/AdminPanel/index.js",
                                                        lineNumber: 311,
                                                        columnNumber: 25
                                                    }, ("TURBOPACK compile-time value", void 0))
                                                }, void 0, false, {
                                                    fileName: "[project]/Documents/help/HRMS/src/components/AdminPanel/index.js",
                                                    lineNumber: 311,
                                                    columnNumber: 21
                                                }, ("TURBOPACK compile-time value", void 0))
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/Documents/help/HRMS/src/components/AdminPanel/index.js",
                                            lineNumber: 273,
                                            columnNumber: 17
                                        }, ("TURBOPACK compile-time value", void 0))
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Documents/help/HRMS/src/components/AdminPanel/index.js",
                                    lineNumber: 266,
                                    columnNumber: 15
                                }, ("TURBOPACK compile-time value", void 0))
                            }, void 0, false, {
                                fileName: "[project]/Documents/help/HRMS/src/components/AdminPanel/index.js",
                                lineNumber: 265,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Documents/help/HRMS/src/components/AdminPanel/index.js",
                        lineNumber: 203,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0));
                }
            /* ═══════════════ BROADCAST ═══════════════ */ case 'broadcast':
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
                                        lineNumber: 332,
                                        columnNumber: 17
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$help$2f$HRMS$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        style: {
                                            color: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$help$2f$HRMS$2f$src$2f$styles$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["tokens"].colors.secondary,
                                            fontSize: '14px'
                                        },
                                        children: "Send announcements and alerts to all staff members."
                                    }, void 0, false, {
                                        fileName: "[project]/Documents/help/HRMS/src/components/AdminPanel/index.js",
                                        lineNumber: 333,
                                        columnNumber: 17
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Documents/help/HRMS/src/components/AdminPanel/index.js",
                                lineNumber: 331,
                                columnNumber: 15
                            }, ("TURBOPACK compile-time value", void 0))
                        }, void 0, false, {
                            fileName: "[project]/Documents/help/HRMS/src/components/AdminPanel/index.js",
                            lineNumber: 330,
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
                                            lineNumber: 338,
                                            columnNumber: 17
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$help$2f$HRMS$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("textarea", {
                                            style: {
                                                ...__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$help$2f$HRMS$2f$src$2f$styles$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["styles"].input,
                                                minHeight: '160px',
                                                marginBottom: '20px',
                                                resize: 'none'
                                            },
                                            placeholder: "Type your message...",
                                            value: newAnnouncement,
                                            onChange: (e)=>setNewAnnouncement(e.target.value)
                                        }, void 0, false, {
                                            fileName: "[project]/Documents/help/HRMS/src/components/AdminPanel/index.js",
                                            lineNumber: 339,
                                            columnNumber: 17
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$help$2f$HRMS$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            onClick: async ()=>{
                                                if (!newAnnouncement.trim()) return;
                                                await (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$help$2f$HRMS$2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["addDoc"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$help$2f$HRMS$2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["collection"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$help$2f$HRMS$2f$src$2f$firebase$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["db"], 'announcements'), {
                                                    content: newAnnouncement,
                                                    date: new Date().toISOString()
                                                });
                                                await (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$help$2f$HRMS$2f$src$2f$utils$2f$auditLog$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["logAction"])('BROADCAST_SENT', {
                                                    preview: newAnnouncement.slice(0, 80)
                                                }, adminEmail);
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
                                                    lineNumber: 346,
                                                    columnNumber: 19
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                " Dispatch Notice"
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/Documents/help/HRMS/src/components/AdminPanel/index.js",
                                            lineNumber: 340,
                                            columnNumber: 17
                                        }, ("TURBOPACK compile-time value", void 0))
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Documents/help/HRMS/src/components/AdminPanel/index.js",
                                    lineNumber: 337,
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
                                            lineNumber: 350,
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
                                                                lineNumber: 354,
                                                                columnNumber: 23
                                                            }, ("TURBOPACK compile-time value", void 0)),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$help$2f$HRMS$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                style: {
                                                                    fontSize: '12px',
                                                                    color: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$help$2f$HRMS$2f$src$2f$styles$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["tokens"].colors.secondary
                                                                },
                                                                children: [
                                                                    "Sent on ",
                                                                    new Date(a.date).toLocaleDateString()
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/Documents/help/HRMS/src/components/AdminPanel/index.js",
                                                                lineNumber: 355,
                                                                columnNumber: 23
                                                            }, ("TURBOPACK compile-time value", void 0))
                                                        ]
                                                    }, a.id, true, {
                                                        fileName: "[project]/Documents/help/HRMS/src/components/AdminPanel/index.js",
                                                        lineNumber: 353,
                                                        columnNumber: 21
                                                    }, ("TURBOPACK compile-time value", void 0))),
                                                announcements.length === 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$help$2f$HRMS$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    style: {
                                                        textAlign: 'center',
                                                        padding: '40px',
                                                        color: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$help$2f$HRMS$2f$src$2f$styles$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["tokens"].colors.secondary
                                                    },
                                                    children: "No history found."
                                                }, void 0, false, {
                                                    fileName: "[project]/Documents/help/HRMS/src/components/AdminPanel/index.js",
                                                    lineNumber: 358,
                                                    columnNumber: 50
                                                }, ("TURBOPACK compile-time value", void 0))
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/Documents/help/HRMS/src/components/AdminPanel/index.js",
                                            lineNumber: 351,
                                            columnNumber: 17
                                        }, ("TURBOPACK compile-time value", void 0))
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Documents/help/HRMS/src/components/AdminPanel/index.js",
                                    lineNumber: 349,
                                    columnNumber: 15
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Documents/help/HRMS/src/components/AdminPanel/index.js",
                            lineNumber: 336,
                            columnNumber: 13
                        }, ("TURBOPACK compile-time value", void 0))
                    ]
                }, void 0, true, {
                    fileName: "[project]/Documents/help/HRMS/src/components/AdminPanel/index.js",
                    lineNumber: 329,
                    columnNumber: 11
                }, ("TURBOPACK compile-time value", void 0));
            /* ═══════════════ POLICIES ═══════════════ */ case 'policies':
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
                                        lineNumber: 371,
                                        columnNumber: 17
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$help$2f$HRMS$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        style: {
                                            color: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$help$2f$HRMS$2f$src$2f$styles$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["tokens"].colors.secondary,
                                            fontSize: '14px'
                                        },
                                        children: "Configure working days, holidays, and leave entitlements."
                                    }, void 0, false, {
                                        fileName: "[project]/Documents/help/HRMS/src/components/AdminPanel/index.js",
                                        lineNumber: 372,
                                        columnNumber: 17
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Documents/help/HRMS/src/components/AdminPanel/index.js",
                                lineNumber: 370,
                                columnNumber: 15
                            }, ("TURBOPACK compile-time value", void 0))
                        }, void 0, false, {
                            fileName: "[project]/Documents/help/HRMS/src/components/AdminPanel/index.js",
                            lineNumber: 369,
                            columnNumber: 13
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$help$2f$HRMS$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            style: {
                                ...__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$help$2f$HRMS$2f$src$2f$styles$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["styles"].card,
                                marginBottom: '28px'
                            },
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$help$2f$HRMS$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    style: {
                                        display: 'flex',
                                        alignItems: 'flex-start',
                                        justifyContent: 'space-between',
                                        marginBottom: '24px'
                                    },
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$help$2f$HRMS$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$help$2f$HRMS$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                    style: {
                                                        fontSize: '16px',
                                                        fontWeight: '800',
                                                        color: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$help$2f$HRMS$2f$src$2f$styles$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["tokens"].colors.primary
                                                    },
                                                    children: "Annual Leave Entitlements"
                                                }, void 0, false, {
                                                    fileName: "[project]/Documents/help/HRMS/src/components/AdminPanel/index.js",
                                                    lineNumber: 380,
                                                    columnNumber: 19
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$help$2f$HRMS$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    style: {
                                                        fontSize: '13px',
                                                        color: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$help$2f$HRMS$2f$src$2f$styles$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["tokens"].colors.secondary,
                                                        marginTop: '4px'
                                                    },
                                                    children: "Set how many days employees receive per leave category each year."
                                                }, void 0, false, {
                                                    fileName: "[project]/Documents/help/HRMS/src/components/AdminPanel/index.js",
                                                    lineNumber: 381,
                                                    columnNumber: 19
                                                }, ("TURBOPACK compile-time value", void 0))
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/Documents/help/HRMS/src/components/AdminPanel/index.js",
                                            lineNumber: 379,
                                            columnNumber: 17
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$help$2f$HRMS$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            onClick: async ()=>{
                                                setLeavePolicySaving(true);
                                                try {
                                                    await (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$help$2f$HRMS$2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["setDoc"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$help$2f$HRMS$2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["doc"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$help$2f$HRMS$2f$src$2f$firebase$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["db"], 'config', 'leavePolicy'), leavePolicy);
                                                } catch (e) {
                                                    console.error(e);
                                                }
                                                setLeavePolicySaving(false);
                                            },
                                            style: {
                                                ...__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$help$2f$HRMS$2f$src$2f$styles$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["styles"].button.primary,
                                                padding: '10px 20px',
                                                fontSize: '13px'
                                            },
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$help$2f$HRMS$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "material-symbols-outlined",
                                                    style: {
                                                        fontSize: '16px'
                                                    },
                                                    children: leavePolicySaving ? 'hourglass_empty' : 'save'
                                                }, void 0, false, {
                                                    fileName: "[project]/Documents/help/HRMS/src/components/AdminPanel/index.js",
                                                    lineNumber: 388,
                                                    columnNumber: 19
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                leavePolicySaving ? 'Saving…' : 'Save Policy'
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/Documents/help/HRMS/src/components/AdminPanel/index.js",
                                            lineNumber: 383,
                                            columnNumber: 17
                                        }, ("TURBOPACK compile-time value", void 0))
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Documents/help/HRMS/src/components/AdminPanel/index.js",
                                    lineNumber: 378,
                                    columnNumber: 15
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$help$2f$HRMS$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    style: {
                                        display: 'grid',
                                        gridTemplateColumns: 'repeat(3, 1fr)',
                                        gap: '20px'
                                    },
                                    children: [
                                        {
                                            key: 'sick',
                                            label: 'Sick Leave',
                                            icon: 'medical_services',
                                            color: '#F97316',
                                            bg: '#FFF7ED'
                                        },
                                        {
                                            key: 'casual',
                                            label: 'Casual Leave',
                                            icon: 'beach_access',
                                            color: '#8B5CF6',
                                            bg: '#F5F3FF'
                                        },
                                        {
                                            key: 'paid',
                                            label: 'Paid Leave',
                                            icon: 'payments',
                                            color: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$help$2f$HRMS$2f$src$2f$styles$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["tokens"].colors.accent,
                                            bg: '#F0FDFA'
                                        }
                                    ].map((lt)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$help$2f$HRMS$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            style: {
                                                padding: '20px',
                                                borderRadius: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$help$2f$HRMS$2f$src$2f$styles$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["tokens"].radius.md,
                                                border: `1px solid ${__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$help$2f$HRMS$2f$src$2f$styles$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["tokens"].colors.border}`,
                                                background: lt.bg
                                            },
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$help$2f$HRMS$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    style: {
                                                        display: 'flex',
                                                        alignItems: 'center',
                                                        gap: '8px',
                                                        marginBottom: '16px'
                                                    },
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$help$2f$HRMS$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            style: {
                                                                width: '32px',
                                                                height: '32px',
                                                                borderRadius: '10px',
                                                                background: lt.color + '18',
                                                                display: 'flex',
                                                                alignItems: 'center',
                                                                justifyContent: 'center'
                                                            },
                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$help$2f$HRMS$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: "material-symbols-outlined",
                                                                style: {
                                                                    fontSize: '16px',
                                                                    color: lt.color
                                                                },
                                                                children: lt.icon
                                                            }, void 0, false, {
                                                                fileName: "[project]/Documents/help/HRMS/src/components/AdminPanel/index.js",
                                                                lineNumber: 401,
                                                                columnNumber: 25
                                                            }, ("TURBOPACK compile-time value", void 0))
                                                        }, void 0, false, {
                                                            fileName: "[project]/Documents/help/HRMS/src/components/AdminPanel/index.js",
                                                            lineNumber: 400,
                                                            columnNumber: 23
                                                        }, ("TURBOPACK compile-time value", void 0)),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$help$2f$HRMS$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            style: {
                                                                fontSize: '13px',
                                                                fontWeight: '700',
                                                                color: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$help$2f$HRMS$2f$src$2f$styles$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["tokens"].colors.primary
                                                            },
                                                            children: lt.label
                                                        }, void 0, false, {
                                                            fileName: "[project]/Documents/help/HRMS/src/components/AdminPanel/index.js",
                                                            lineNumber: 403,
                                                            columnNumber: 23
                                                        }, ("TURBOPACK compile-time value", void 0))
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/Documents/help/HRMS/src/components/AdminPanel/index.js",
                                                    lineNumber: 399,
                                                    columnNumber: 21
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$help$2f$HRMS$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    style: {
                                                        display: 'flex',
                                                        alignItems: 'center',
                                                        gap: '12px'
                                                    },
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$help$2f$HRMS$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                            type: "button",
                                                            onClick: ()=>setLeavePolicy((p)=>({
                                                                        ...p,
                                                                        [lt.key]: Math.max(0, (p[lt.key] || 0) - 1)
                                                                    })),
                                                            style: {
                                                                width: '32px',
                                                                height: '32px',
                                                                borderRadius: '50%',
                                                                border: `1px solid ${__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$help$2f$HRMS$2f$src$2f$styles$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["tokens"].colors.border}`,
                                                                background: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$help$2f$HRMS$2f$src$2f$styles$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["tokens"].colors.white,
                                                                cursor: 'pointer',
                                                                display: 'flex',
                                                                alignItems: 'center',
                                                                justifyContent: 'center',
                                                                flexShrink: 0
                                                            },
                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$help$2f$HRMS$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: "material-symbols-outlined",
                                                                style: {
                                                                    fontSize: '18px'
                                                                },
                                                                children: "remove"
                                                            }, void 0, false, {
                                                                fileName: "[project]/Documents/help/HRMS/src/components/AdminPanel/index.js",
                                                                lineNumber: 408,
                                                                columnNumber: 25
                                                            }, ("TURBOPACK compile-time value", void 0))
                                                        }, void 0, false, {
                                                            fileName: "[project]/Documents/help/HRMS/src/components/AdminPanel/index.js",
                                                            lineNumber: 406,
                                                            columnNumber: 23
                                                        }, ("TURBOPACK compile-time value", void 0)),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$help$2f$HRMS$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                            type: "number",
                                                            min: "0",
                                                            max: "365",
                                                            value: leavePolicy[lt.key] ?? 0,
                                                            onChange: (e)=>setLeavePolicy((p)=>({
                                                                        ...p,
                                                                        [lt.key]: parseInt(e.target.value) || 0
                                                                    })),
                                                            style: {
                                                                ...__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$help$2f$HRMS$2f$src$2f$styles$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["styles"].input,
                                                                textAlign: 'center',
                                                                fontWeight: '800',
                                                                fontSize: '22px',
                                                                padding: '8px',
                                                                flex: 1
                                                            }
                                                        }, void 0, false, {
                                                            fileName: "[project]/Documents/help/HRMS/src/components/AdminPanel/index.js",
                                                            lineNumber: 410,
                                                            columnNumber: 23
                                                        }, ("TURBOPACK compile-time value", void 0)),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$help$2f$HRMS$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                            type: "button",
                                                            onClick: ()=>setLeavePolicy((p)=>({
                                                                        ...p,
                                                                        [lt.key]: (p[lt.key] || 0) + 1
                                                                    })),
                                                            style: {
                                                                width: '32px',
                                                                height: '32px',
                                                                borderRadius: '50%',
                                                                border: `1px solid ${__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$help$2f$HRMS$2f$src$2f$styles$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["tokens"].colors.border}`,
                                                                background: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$help$2f$HRMS$2f$src$2f$styles$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["tokens"].colors.white,
                                                                cursor: 'pointer',
                                                                display: 'flex',
                                                                alignItems: 'center',
                                                                justifyContent: 'center',
                                                                flexShrink: 0
                                                            },
                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$help$2f$HRMS$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: "material-symbols-outlined",
                                                                style: {
                                                                    fontSize: '18px'
                                                                },
                                                                children: "add"
                                                            }, void 0, false, {
                                                                fileName: "[project]/Documents/help/HRMS/src/components/AdminPanel/index.js",
                                                                lineNumber: 415,
                                                                columnNumber: 25
                                                            }, ("TURBOPACK compile-time value", void 0))
                                                        }, void 0, false, {
                                                            fileName: "[project]/Documents/help/HRMS/src/components/AdminPanel/index.js",
                                                            lineNumber: 413,
                                                            columnNumber: 23
                                                        }, ("TURBOPACK compile-time value", void 0))
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/Documents/help/HRMS/src/components/AdminPanel/index.js",
                                                    lineNumber: 405,
                                                    columnNumber: 21
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$help$2f$HRMS$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    style: {
                                                        fontSize: '11px',
                                                        color: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$help$2f$HRMS$2f$src$2f$styles$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["tokens"].colors.secondary,
                                                        textAlign: 'center',
                                                        marginTop: '8px'
                                                    },
                                                    children: "days per year"
                                                }, void 0, false, {
                                                    fileName: "[project]/Documents/help/HRMS/src/components/AdminPanel/index.js",
                                                    lineNumber: 418,
                                                    columnNumber: 21
                                                }, ("TURBOPACK compile-time value", void 0))
                                            ]
                                        }, lt.key, true, {
                                            fileName: "[project]/Documents/help/HRMS/src/components/AdminPanel/index.js",
                                            lineNumber: 398,
                                            columnNumber: 19
                                        }, ("TURBOPACK compile-time value", void 0)))
                                }, void 0, false, {
                                    fileName: "[project]/Documents/help/HRMS/src/components/AdminPanel/index.js",
                                    lineNumber: 392,
                                    columnNumber: 15
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Documents/help/HRMS/src/components/AdminPanel/index.js",
                            lineNumber: 377,
                            columnNumber: 13
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$help$2f$HRMS$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            style: {
                                display: 'grid',
                                gridTemplateColumns: '1fr 1fr',
                                gap: '28px'
                            },
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$help$2f$HRMS$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    style: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$help$2f$HRMS$2f$src$2f$styles$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["styles"].card,
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$help$2f$HRMS$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                            style: {
                                                fontSize: '16px',
                                                fontWeight: '800',
                                                marginBottom: '24px'
                                            },
                                            children: "Standard Work Week"
                                        }, void 0, false, {
                                            fileName: "[project]/Documents/help/HRMS/src/components/AdminPanel/index.js",
                                            lineNumber: 427,
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
                                                        padding: '14px 16px',
                                                        border: `1px solid ${workingDays.includes(day) ? __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$help$2f$HRMS$2f$src$2f$styles$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["tokens"].colors.accent + '40' : __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$help$2f$HRMS$2f$src$2f$styles$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["tokens"].colors.border}`,
                                                        borderRadius: '12px',
                                                        backgroundColor: workingDays.includes(day) ? '#F0FDFA' : '#FFFFFF',
                                                        color: workingDays.includes(day) ? __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$help$2f$HRMS$2f$src$2f$styles$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["tokens"].colors.accent : __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$help$2f$HRMS$2f$src$2f$styles$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["tokens"].colors.secondary,
                                                        fontWeight: '600',
                                                        fontSize: '14px',
                                                        cursor: 'pointer',
                                                        display: 'flex',
                                                        justifyContent: 'space-between',
                                                        alignItems: 'center',
                                                        transition: 'all 0.15s ease'
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
                                                                color: workingDays.includes(day) ? __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$help$2f$HRMS$2f$src$2f$styles$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["tokens"].colors.accent : '#E5E7EB'
                                                            },
                                                            children: "check_circle"
                                                        }, void 0, false, {
                                                            fileName: "[project]/Documents/help/HRMS/src/components/AdminPanel/index.js",
                                                            lineNumber: 433,
                                                            columnNumber: 23
                                                        }, ("TURBOPACK compile-time value", void 0))
                                                    ]
                                                }, day, true, {
                                                    fileName: "[project]/Documents/help/HRMS/src/components/AdminPanel/index.js",
                                                    lineNumber: 430,
                                                    columnNumber: 21
                                                }, ("TURBOPACK compile-time value", void 0)))
                                        }, void 0, false, {
                                            fileName: "[project]/Documents/help/HRMS/src/components/AdminPanel/index.js",
                                            lineNumber: 428,
                                            columnNumber: 17
                                        }, ("TURBOPACK compile-time value", void 0))
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Documents/help/HRMS/src/components/AdminPanel/index.js",
                                    lineNumber: 426,
                                    columnNumber: 15
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$help$2f$HRMS$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    style: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$help$2f$HRMS$2f$src$2f$styles$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["styles"].card,
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$help$2f$HRMS$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                            style: {
                                                fontSize: '16px',
                                                fontWeight: '800',
                                                marginBottom: '24px'
                                            },
                                            children: "Public Holidays"
                                        }, void 0, false, {
                                            fileName: "[project]/Documents/help/HRMS/src/components/AdminPanel/index.js",
                                            lineNumber: 440,
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
                                                    lineNumber: 442,
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
                                                    lineNumber: 443,
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
                                                    lineNumber: 444,
                                                    columnNumber: 19
                                                }, ("TURBOPACK compile-time value", void 0))
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/Documents/help/HRMS/src/components/AdminPanel/index.js",
                                            lineNumber: 441,
                                            columnNumber: 17
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$help$2f$HRMS$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            style: {
                                                display: 'flex',
                                                flexDirection: 'column',
                                                gap: '8px'
                                            },
                                            children: [
                                                holidays.sort((a, b)=>new Date(a.date) - new Date(b.date)).map((h)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$help$2f$HRMS$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        style: {
                                                            display: 'flex',
                                                            justifyContent: 'space-between',
                                                            alignItems: 'center',
                                                            padding: '12px 14px',
                                                            borderRadius: '10px',
                                                            background: '#F8FAFC',
                                                            border: `1px solid ${__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$help$2f$HRMS$2f$src$2f$styles$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["tokens"].colors.border}`
                                                        },
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$help$2f$HRMS$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                style: {
                                                                    fontWeight: '600',
                                                                    color: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$help$2f$HRMS$2f$src$2f$styles$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["tokens"].colors.primary,
                                                                    fontSize: '14px'
                                                                },
                                                                children: h.name
                                                            }, void 0, false, {
                                                                fileName: "[project]/Documents/help/HRMS/src/components/AdminPanel/index.js",
                                                                lineNumber: 450,
                                                                columnNumber: 23
                                                            }, ("TURBOPACK compile-time value", void 0)),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$help$2f$HRMS$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                style: {
                                                                    color: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$help$2f$HRMS$2f$src$2f$styles$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["tokens"].colors.secondary,
                                                                    fontSize: '13px'
                                                                },
                                                                children: new Date(h.date).toLocaleDateString(undefined, {
                                                                    month: 'short',
                                                                    day: 'numeric',
                                                                    year: 'numeric'
                                                                })
                                                            }, void 0, false, {
                                                                fileName: "[project]/Documents/help/HRMS/src/components/AdminPanel/index.js",
                                                                lineNumber: 451,
                                                                columnNumber: 23
                                                            }, ("TURBOPACK compile-time value", void 0))
                                                        ]
                                                    }, h.id, true, {
                                                        fileName: "[project]/Documents/help/HRMS/src/components/AdminPanel/index.js",
                                                        lineNumber: 449,
                                                        columnNumber: 21
                                                    }, ("TURBOPACK compile-time value", void 0))),
                                                holidays.length === 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$help$2f$HRMS$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    style: {
                                                        textAlign: 'center',
                                                        padding: '32px',
                                                        color: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$help$2f$HRMS$2f$src$2f$styles$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["tokens"].colors.secondary,
                                                        fontSize: '14px'
                                                    },
                                                    children: "No holidays added yet."
                                                }, void 0, false, {
                                                    fileName: "[project]/Documents/help/HRMS/src/components/AdminPanel/index.js",
                                                    lineNumber: 454,
                                                    columnNumber: 45
                                                }, ("TURBOPACK compile-time value", void 0))
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/Documents/help/HRMS/src/components/AdminPanel/index.js",
                                            lineNumber: 447,
                                            columnNumber: 17
                                        }, ("TURBOPACK compile-time value", void 0))
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Documents/help/HRMS/src/components/AdminPanel/index.js",
                                    lineNumber: 439,
                                    columnNumber: 15
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Documents/help/HRMS/src/components/AdminPanel/index.js",
                            lineNumber: 424,
                            columnNumber: 13
                        }, ("TURBOPACK compile-time value", void 0))
                    ]
                }, void 0, true, {
                    fileName: "[project]/Documents/help/HRMS/src/components/AdminPanel/index.js",
                    lineNumber: 368,
                    columnNumber: 11
                }, ("TURBOPACK compile-time value", void 0));
            default:
                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$help$2f$HRMS$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    style: {
                        textAlign: 'center',
                        padding: '100px',
                        color: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$help$2f$HRMS$2f$src$2f$styles$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["tokens"].colors.secondary
                    },
                    children: "Module not found."
                }, void 0, false, {
                    fileName: "[project]/Documents/help/HRMS/src/components/AdminPanel/index.js",
                    lineNumber: 462,
                    columnNumber: 16
                }, ("TURBOPACK compile-time value", void 0));
        }
    };
    return renderModule();
};
const __TURBOPACK__default__export__ = AdminPanel;
}),
];

//# sourceMappingURL=Documents_help_HRMS_src_components_AdminPanel_index_8f2a1f6a.js.map