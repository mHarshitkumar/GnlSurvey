(globalThis["TURBOPACK"] || (globalThis["TURBOPACK"] = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/src/app/page.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Home
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$layout$2f$AppShell$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/layout/AppShell.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$survey$2f$CapabilityReviewSection$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/survey/CapabilityReviewSection.tsx [app-client] (ecmascript)");
(()=>{
    const e = new Error("Cannot find module '@/components/survey/ReviewSubmitSection'");
    e.code = 'MODULE_NOT_FOUND';
    throw e;
})();
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$survey$2f$SurveyCard$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/survey/SurveyCard.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$survey$2f$SurveyFooterActions$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/survey/SurveyFooterActions.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$survey$2f$SurveyHeader$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/survey/SurveyHeader.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$survey$2f$SurveyStepper$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/survey/SurveyStepper.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$survey$2f$surveyMath$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/survey/surveyMath.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$survey$2f$surveyState$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/survey/surveyState.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$capabilityReviewData$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/data/capabilityReviewData.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$surveyData$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/data/surveyData.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/navigation.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
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
const flowStorageKey = "annual-labour-cost-survey-state";
function collectL3Nodes(nodes) {
    const rows = [];
    const visit = (node)=>{
        if (node.level === 3) {
            rows.push(node);
        }
        node.children?.forEach(visit);
    };
    nodes.forEach(visit);
    return rows;
}
function isSurveyStep(value) {
    return value === 1 || value === 2 || value === 3;
}
function hasNumericValue(value) {
    return Number.isFinite(Number.parseFloat(value ?? ""));
}
function Home() {
    _s();
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"])();
    const l3Rows = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "Home.useMemo[l3Rows]": ()=>collectL3Nodes(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$surveyData$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["surveyData"])
    }["Home.useMemo[l3Rows]"], []);
    const [currentStep, setCurrentStep] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(2);
    const [savedMessage, setSavedMessage] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [validationErrors, setValidationErrors] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({});
    const [workingState, setWorkingState] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({
        "Home.useState": ()=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$survey$2f$surveyState$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["collectInitialWorkingState"])()
    }["Home.useState"]);
    const [capabilitySelections, setCapabilitySelections] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({
        "Home.useState": ()=>Object.fromEntries(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$capabilityReviewData$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["capabilityReviewData"].map({
                "Home.useState": (capability)=>[
                        capability.id,
                        true
                    ]
            }["Home.useState"]))
    }["Home.useState"]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Home.useEffect": ()=>{
            const restoreTimer = window.setTimeout({
                "Home.useEffect.restoreTimer": ()=>{
                    const savedState = window.localStorage.getItem(flowStorageKey);
                    if (!savedState) {
                        return;
                    }
                    try {
                        const parsed = JSON.parse(savedState);
                        if (parsed.capabilitySelections) {
                            setCapabilitySelections({
                                "Home.useEffect.restoreTimer": (previous)=>({
                                        ...previous,
                                        ...parsed.capabilitySelections
                                    })
                            }["Home.useEffect.restoreTimer"]);
                        }
                        if (parsed.workingState) {
                            const restoredWorkingState = parsed.workingState;
                            setWorkingState({
                                "Home.useEffect.restoreTimer": (previous)=>({
                                        commentaryValues: {
                                            ...previous.commentaryValues,
                                            ...restoredWorkingState.commentaryValues
                                        },
                                        currentValues: {
                                            ...previous.currentValues,
                                            ...restoredWorkingState.currentValues
                                        },
                                        detailValues: {
                                            ...previous.detailValues,
                                            ...restoredWorkingState.detailValues
                                        },
                                        expanded: {
                                            ...previous.expanded,
                                            ...restoredWorkingState.expanded
                                        },
                                        priorValues: {
                                            ...previous.priorValues,
                                            ...restoredWorkingState.priorValues
                                        }
                                    })
                            }["Home.useEffect.restoreTimer"]);
                        }
                        if (isSurveyStep(parsed.currentStep)) {
                            setCurrentStep(parsed.currentStep);
                        }
                    } catch  {
                        window.localStorage.removeItem(flowStorageKey);
                    }
                }
            }["Home.useEffect.restoreTimer"], 0);
            return ({
                "Home.useEffect": ()=>window.clearTimeout(restoreTimer)
            })["Home.useEffect"];
        }
    }["Home.useEffect"], []);
    const showSavedMessage = (message)=>{
        setSavedMessage(message);
        window.setTimeout(()=>setSavedMessage(""), 1800);
    };
    const persistFlowState = (step = currentStep)=>{
        window.localStorage.setItem(flowStorageKey, JSON.stringify({
            capabilitySelections,
            currentStep: step,
            workingState
        }));
    };
    const saveFlowState = ()=>{
        persistFlowState();
        showSavedMessage("Saved");
    };
    const handleExit = ()=>{
        router.push("/labour-cost-insights");
    };
    const validateWorkingData = ()=>{
        const errors = {};
        l3Rows.forEach((row)=>{
            const priorValue = workingState.priorValues[row.id];
            const currentValue = workingState.currentValues[row.id];
            if (!hasNumericValue(priorValue) || !hasNumericValue(currentValue)) {
                errors[row.id] = "Prior and Current values are required.";
                return;
            }
            if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$survey$2f$surveyMath$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["needsCommentary"])(priorValue, currentValue) && !workingState.commentaryValues[row.id]?.trim()) {
                errors[row.id] = "Commentary is required for this variance.";
            }
        });
        setValidationErrors(errors);
        return Object.keys(errors).length === 0;
    };
    const handleContinue = ()=>{
        if (currentStep === 1) {
            persistFlowState(2);
            setValidationErrors({});
            setCurrentStep(2);
            return;
        }
        if (currentStep === 2) {
            if (!validateWorkingData()) {
                return;
            }
            persistFlowState(3);
            setCurrentStep(3);
            return;
        }
        saveFlowState();
    };
    const handleBack = ()=>{
        setCurrentStep((step)=>step > 1 ? step - 1 : step);
    };
    const handleCapabilitySelectionChange = (id, isActive)=>{
        setCapabilitySelections((previous)=>({
                ...previous,
                [id]: isActive
            }));
    };
    const clearValidationError = (id)=>{
        setValidationErrors((previous)=>{
            if (!previous[id]) {
                return previous;
            }
            const next = {
                ...previous
            };
            delete next[id];
            return next;
        });
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$layout$2f$AppShell$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AppShell"], {
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
            className: "min-h-[calc(100vh-76px)] bg-[#F5F6F8] px-10 pb-0 pt-8 text-survey-text max-md:px-5",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "w-full",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$survey$2f$SurveyHeader$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SurveyHeader"], {}, void 0, false, {
                        fileName: "[project]/src/app/page.tsx",
                        lineNumber: 223,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$survey$2f$SurveyStepper$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SurveyStepper"], {
                        currentStep: currentStep
                    }, void 0, false, {
                        fileName: "[project]/src/app/page.tsx",
                        lineNumber: 224,
                        columnNumber: 11
                    }, this),
                    currentStep === 1 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$survey$2f$CapabilityReviewSection$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CapabilityReviewSection"], {
                        capabilities: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$capabilityReviewData$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["capabilityReviewData"],
                        selections: capabilitySelections,
                        onSelectionChange: handleCapabilitySelectionChange
                    }, void 0, false, {
                        fileName: "[project]/src/app/page.tsx",
                        lineNumber: 226,
                        columnNumber: 13
                    }, this) : null,
                    currentStep === 2 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$survey$2f$SurveyCard$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SurveyCard"], {
                        onValidationErrorClear: clearValidationError,
                        setWorkingState: setWorkingState,
                        validationErrors: validationErrors,
                        workingState: workingState
                    }, void 0, false, {
                        fileName: "[project]/src/app/page.tsx",
                        lineNumber: 233,
                        columnNumber: 13
                    }, this) : null,
                    currentStep === 3 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(ReviewSubmitSection, {}, void 0, false, {
                        fileName: "[project]/src/app/page.tsx",
                        lineNumber: 240,
                        columnNumber: 32
                    }, this) : null,
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$survey$2f$SurveyFooterActions$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SurveyFooterActions"], {
                        savedMessage: savedMessage,
                        showBack: currentStep > 1,
                        onBack: handleBack,
                        onContinue: handleContinue,
                        onExit: handleExit,
                        onSaveLater: saveFlowState
                    }, void 0, false, {
                        fileName: "[project]/src/app/page.tsx",
                        lineNumber: 241,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/page.tsx",
                lineNumber: 222,
                columnNumber: 9
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/app/page.tsx",
            lineNumber: 221,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/app/page.tsx",
        lineNumber: 220,
        columnNumber: 5
    }, this);
}
_s(Home, "QfxpxZ1BB+uTYET+EXvKSATvaUg=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"]
    ];
});
_c = Home;
var _c;
__turbopack_context__.k.register(_c, "Home");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/layout/AppHeader.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "AppHeader",
    ()=>AppHeader
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$bell$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Bell$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/bell.js [app-client] (ecmascript) <export default as Bell>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$down$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronDown$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/chevron-down.js [app-client] (ecmascript) <export default as ChevronDown>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$menu$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Menu$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/menu.js [app-client] (ecmascript) <export default as Menu>");
"use client";
;
;
function AppHeader({ onMenuClick }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("header", {
        className: "sticky top-0 z-30 flex h-[76px] items-center justify-between border-b border-[#E5E7EB] bg-white px-7",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex min-w-0 items-center gap-5",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        "aria-label": "Toggle navigation",
                        className: "rounded-md p-1 text-[#595F66] transition-colors hover:bg-[#F3F4F6] focus:outline-none focus:ring-2 focus:ring-[#D1D5DB]",
                        onClick: onMenuClick,
                        type: "button",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$menu$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Menu$3e$__["Menu"], {
                            className: "h-5 w-5",
                            strokeWidth: 1.8
                        }, void 0, false, {
                            fileName: "[project]/src/components/layout/AppHeader.tsx",
                            lineNumber: 19,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/components/layout/AppHeader.tsx",
                        lineNumber: 13,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                        className: "truncate text-[17px] font-semibold leading-6 text-[#252525]",
                        children: "Global Tech & NIS Leadership Platform"
                    }, void 0, false, {
                        fileName: "[project]/src/components/layout/AppHeader.tsx",
                        lineNumber: 21,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/layout/AppHeader.tsx",
                lineNumber: 12,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex items-center gap-5",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        className: "flex h-10 items-center gap-3 rounded-[10px] border border-[#E5E7EB] bg-white px-4 text-[15px] font-semibold text-[#4B4B4B] shadow-[0_2px_7px_rgba(15,23,42,0.10)]",
                        type: "button",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "h-2.5 w-2.5 rounded-full bg-[#D04A02]"
                            }, void 0, false, {
                                fileName: "[project]/src/components/layout/AppHeader.tsx",
                                lineNumber: 31,
                                columnNumber: 11
                            }, this),
                            "Global Leadership",
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$down$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronDown$3e$__["ChevronDown"], {
                                className: "h-4 w-4 text-[#7A828A]",
                                strokeWidth: 1.8
                            }, void 0, false, {
                                fileName: "[project]/src/components/layout/AppHeader.tsx",
                                lineNumber: 33,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/layout/AppHeader.tsx",
                        lineNumber: 27,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        "aria-label": "Notifications",
                        className: "relative rounded-md p-1.5 text-[#5F6368] transition-colors hover:bg-[#F3F4F6] focus:outline-none focus:ring-2 focus:ring-[#D1D5DB]",
                        type: "button",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$bell$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Bell$3e$__["Bell"], {
                                className: "h-5 w-5",
                                strokeWidth: 1.7
                            }, void 0, false, {
                                fileName: "[project]/src/components/layout/AppHeader.tsx",
                                lineNumber: 41,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "absolute -right-1 -top-1 flex h-5 min-w-5 items-center justify-center rounded-full bg-[#D04A02] px-1 text-[11px] font-bold leading-none text-white",
                                children: "6"
                            }, void 0, false, {
                                fileName: "[project]/src/components/layout/AppHeader.tsx",
                                lineNumber: 42,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/layout/AppHeader.tsx",
                        lineNumber: 36,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/layout/AppHeader.tsx",
                lineNumber: 26,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/layout/AppHeader.tsx",
        lineNumber: 11,
        columnNumber: 5
    }, this);
}
_c = AppHeader;
var _c;
__turbopack_context__.k.register(_c, "AppHeader");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/layout/AppShell.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "AppShell",
    ()=>AppShell
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$layout$2f$AppHeader$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/layout/AppHeader.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$layout$2f$Sidebar$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/layout/Sidebar.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
function AppShell({ children }) {
    _s();
    const [sidebarOpen, setSidebarOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "min-h-screen bg-[#F5F6F8] text-[#111827]",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$layout$2f$Sidebar$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Sidebar"], {
                isOpen: sidebarOpen
            }, void 0, false, {
                fileName: "[project]/src/components/layout/AppShell.tsx",
                lineNumber: 16,
                columnNumber: 7
            }, this),
            sidebarOpen ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                "aria-label": "Close navigation",
                className: "fixed inset-0 z-30 bg-slate-950/20 lg:hidden",
                onClick: ()=>setSidebarOpen(false),
                type: "button"
            }, void 0, false, {
                fileName: "[project]/src/components/layout/AppShell.tsx",
                lineNumber: 18,
                columnNumber: 9
            }, this) : null,
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "min-h-screen lg:pl-[280px]",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$layout$2f$AppHeader$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AppHeader"], {
                        onMenuClick: ()=>setSidebarOpen((isOpen)=>!isOpen)
                    }, void 0, false, {
                        fileName: "[project]/src/components/layout/AppShell.tsx",
                        lineNumber: 26,
                        columnNumber: 9
                    }, this),
                    children
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/layout/AppShell.tsx",
                lineNumber: 25,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/layout/AppShell.tsx",
        lineNumber: 15,
        columnNumber: 5
    }, this);
}
_s(AppShell, "5rGDkYpGQ8fHM9RkMWnKOwsxadk=");
_c = AppShell;
var _c;
__turbopack_context__.k.register(_c, "AppShell");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/layout/Sidebar.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Sidebar",
    ()=>Sidebar
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/image.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$building$2d$2$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Building2$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/building-2.js [app-client] (ecmascript) <export default as Building2>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$layout$2d$grid$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__LayoutGrid$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/layout-grid.js [app-client] (ecmascript) <export default as LayoutGrid>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chart$2d$line$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__LineChart$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/chart-line.js [app-client] (ecmascript) <export default as LineChart>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$route$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Route$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/route.js [app-client] (ecmascript) <export default as Route>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$layout$2f$SidebarItem$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/layout/SidebarItem.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$layout$2f$UserProfileCard$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/layout/UserProfileCard.tsx [app-client] (ecmascript)");
;
;
;
;
;
function Sidebar({ isOpen }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("aside", {
        className: [
            "fixed inset-y-0 left-0 z-40 flex w-[280px] flex-col border-r border-[#E5E7EB] bg-white transition-transform duration-200 lg:translate-x-0",
            isOpen ? "translate-x-0" : "-translate-x-full"
        ].join(" "),
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex h-[76px] items-center px-5",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                    alt: "PwC",
                    className: "h-auto w-[82px]",
                    height: 58,
                    priority: true,
                    src: "/pwc-logo.png",
                    width: 118
                }, void 0, false, {
                    fileName: "[project]/src/components/layout/Sidebar.tsx",
                    lineNumber: 19,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/layout/Sidebar.tsx",
                lineNumber: 18,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("nav", {
                className: "mt-4 space-y-2 px-3.5",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$layout$2f$SidebarItem$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SidebarItem"], {
                        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$layout$2d$grid$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__LayoutGrid$3e$__["LayoutGrid"],
                        label: "Dashboard"
                    }, void 0, false, {
                        fileName: "[project]/src/components/layout/Sidebar.tsx",
                        lineNumber: 30,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$layout$2f$SidebarItem$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SidebarItem"], {
                        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$route$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Route$3e$__["Route"],
                        label: "Programme Roadmaps"
                    }, void 0, false, {
                        fileName: "[project]/src/components/layout/Sidebar.tsx",
                        lineNumber: 31,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$layout$2f$SidebarItem$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SidebarItem"], {
                        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$building$2d$2$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Building2$3e$__["Building2"],
                        label: "Member Firm Profile"
                    }, void 0, false, {
                        fileName: "[project]/src/components/layout/Sidebar.tsx",
                        lineNumber: 32,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$layout$2f$SidebarItem$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SidebarItem"], {
                        active: true,
                        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chart$2d$line$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__LineChart$3e$__["LineChart"],
                        label: "Labour & Cost Insights"
                    }, void 0, false, {
                        fileName: "[project]/src/components/layout/Sidebar.tsx",
                        lineNumber: 33,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/layout/Sidebar.tsx",
                lineNumber: 29,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "mt-auto",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$layout$2f$UserProfileCard$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["UserProfileCard"], {}, void 0, false, {
                    fileName: "[project]/src/components/layout/Sidebar.tsx",
                    lineNumber: 37,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/layout/Sidebar.tsx",
                lineNumber: 36,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/layout/Sidebar.tsx",
        lineNumber: 12,
        columnNumber: 5
    }, this);
}
_c = Sidebar;
var _c;
__turbopack_context__.k.register(_c, "Sidebar");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/layout/SidebarItem.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "SidebarItem",
    ()=>SidebarItem
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
;
function SidebarItem({ active = false, icon: Icon, label }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
        className: [
            "flex h-[46px] w-full items-center gap-3.5 rounded-[10px] px-4 text-left text-[15px] font-semibold transition-colors",
            active ? "bg-[#FBD9CB] text-[#8A1F0A]" : "text-[#1F2937] hover:bg-[#F8FAFC]"
        ].join(" "),
        type: "button",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Icon, {
                className: active ? "text-[#D04A02]" : "text-[#8C9197]",
                size: 20,
                strokeWidth: 1.9
            }, void 0, false, {
                fileName: "[project]/src/components/layout/SidebarItem.tsx",
                lineNumber: 20,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                children: label
            }, void 0, false, {
                fileName: "[project]/src/components/layout/SidebarItem.tsx",
                lineNumber: 25,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/layout/SidebarItem.tsx",
        lineNumber: 11,
        columnNumber: 5
    }, this);
}
_c = SidebarItem;
var _c;
__turbopack_context__.k.register(_c, "SidebarItem");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/layout/UserProfileCard.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "UserProfileCard",
    ()=>UserProfileCard
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
;
function UserProfileCard() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "mx-4 mb-4 flex h-[68px] items-center gap-3 rounded-xl bg-[#F6F7F9] px-3",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#1E2A44] text-[13px] font-semibold text-white",
                children: "PB"
            }, void 0, false, {
                fileName: "[project]/src/components/layout/UserProfileCard.tsx",
                lineNumber: 4,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "min-w-0",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "truncate text-[15px] font-semibold leading-5 text-[#1F2937]",
                        children: "Patrick Beyers"
                    }, void 0, false, {
                        fileName: "[project]/src/components/layout/UserProfileCard.tsx",
                        lineNumber: 8,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "truncate text-[12px] leading-4 text-[#6B7280]",
                        children: "Senior Manager"
                    }, void 0, false, {
                        fileName: "[project]/src/components/layout/UserProfileCard.tsx",
                        lineNumber: 11,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/layout/UserProfileCard.tsx",
                lineNumber: 7,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/layout/UserProfileCard.tsx",
        lineNumber: 3,
        columnNumber: 5
    }, this);
}
_c = UserProfileCard;
var _c;
__turbopack_context__.k.register(_c, "UserProfileCard");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/survey/CapabilityReviewSection.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "CapabilityReviewSection",
    ()=>CapabilityReviewSection
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$check$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Check$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/check.js [app-client] (ecmascript) <export default as Check>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$lock$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Lock$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/lock.js [app-client] (ecmascript) <export default as Lock>");
"use client";
;
;
function CapabilityReviewSection({ capabilities, selections, onSelectionChange }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        className: "overflow-hidden rounded-lg border border-survey-border bg-white shadow-card",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex items-start gap-3 border-b border-survey-border px-5 py-[18px]",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex h-8 w-8 shrink-0 items-center justify-center rounded-md bg-survey-orangeSoft text-survey-orange",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "flex h-4 w-4 flex-col justify-between",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "h-1 rounded-sm border border-current"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/survey/CapabilityReviewSection.tsx",
                                    lineNumber: 22,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "h-1 rounded-sm border border-current"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/survey/CapabilityReviewSection.tsx",
                                    lineNumber: 23,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "h-1 rounded-sm border border-current"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/survey/CapabilityReviewSection.tsx",
                                    lineNumber: 24,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/survey/CapabilityReviewSection.tsx",
                            lineNumber: 21,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/components/survey/CapabilityReviewSection.tsx",
                        lineNumber: 20,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "min-w-0",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                className: "text-[13px] font-semibold leading-4 text-[#0F172A]",
                                children: "Section 1 · Capability Review"
                            }, void 0, false, {
                                fileName: "[project]/src/components/survey/CapabilityReviewSection.tsx",
                                lineNumber: 28,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "mt-1 text-[13px] leading-5 text-[#374151]",
                                children: "Mark each capability Active or Not Applicable. Required capabilities are always in scope."
                            }, void 0, false, {
                                fileName: "[project]/src/components/survey/CapabilityReviewSection.tsx",
                                lineNumber: 31,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/survey/CapabilityReviewSection.tsx",
                        lineNumber: 27,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/survey/CapabilityReviewSection.tsx",
                lineNumber: 19,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "grid grid-cols-2 gap-5 p-6 max-lg:grid-cols-1",
                children: capabilities.map((capability)=>{
                    const isActive = selections[capability.id] ?? true;
                    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("article", {
                        className: "rounded-xl border border-[#FDBA74] bg-white p-5",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "mb-2 flex items-center gap-2",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                        className: "text-[18px] font-semibold leading-6 text-[#111827]",
                                        children: capability.name
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/survey/CapabilityReviewSection.tsx",
                                        lineNumber: 47,
                                        columnNumber: 17
                                    }, this),
                                    capability.required ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "rounded-md bg-[#FFF7ED] px-2 py-1 text-[12px] font-bold uppercase leading-none text-[#9A3412]",
                                        children: "Required"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/survey/CapabilityReviewSection.tsx",
                                        lineNumber: 51,
                                        columnNumber: 19
                                    }, this) : null
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/survey/CapabilityReviewSection.tsx",
                                lineNumber: 46,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "mb-4 text-[15px] leading-5 text-[#6B7280]",
                                children: capability.description
                            }, void 0, false, {
                                fileName: "[project]/src/components/survey/CapabilityReviewSection.tsx",
                                lineNumber: 56,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "mb-4 flex h-12 overflow-hidden rounded-lg border border-[#E5E7EB] bg-[#EEF2F6] p-1",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        className: [
                                            "h-full rounded-md px-5 text-[15px] font-semibold transition",
                                            isActive ? "bg-[#16A34A] text-white" : "text-[#5F6B7A]"
                                        ].join(" "),
                                        onClick: ()=>onSelectionChange(capability.id, true),
                                        type: "button",
                                        children: "Active"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/survey/CapabilityReviewSection.tsx",
                                        lineNumber: 61,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        className: [
                                            "h-full rounded-md px-5 text-[15px] font-semibold transition",
                                            !isActive ? "bg-white text-[#111827] shadow-sm" : capability.required ? "cursor-not-allowed text-[#B9BDC4]" : "text-[#5F6B7A]"
                                        ].join(" "),
                                        disabled: capability.required,
                                        onClick: ()=>onSelectionChange(capability.id, false),
                                        type: "button",
                                        children: "Not Applicable"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/survey/CapabilityReviewSection.tsx",
                                        lineNumber: 71,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/survey/CapabilityReviewSection.tsx",
                                lineNumber: 60,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center gap-2 text-[14px] leading-5 text-[#6B7280]",
                                children: capability.required ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$lock$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Lock$3e$__["Lock"], {
                                            className: "h-4 w-4",
                                            strokeWidth: 1.8
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/survey/CapabilityReviewSection.tsx",
                                            lineNumber: 91,
                                            columnNumber: 21
                                        }, this),
                                        "Required capability — cannot be marked Not Applicable."
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/survey/CapabilityReviewSection.tsx",
                                    lineNumber: 90,
                                    columnNumber: 19
                                }, this) : isActive ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$check$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Check$3e$__["Check"], {
                                            className: "h-4 w-4",
                                            strokeWidth: 1.8
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/survey/CapabilityReviewSection.tsx",
                                            lineNumber: 96,
                                            columnNumber: 21
                                        }, this),
                                        "Working-data lines for this capability will be enabled in Section 2."
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/survey/CapabilityReviewSection.tsx",
                                    lineNumber: 95,
                                    columnNumber: 19
                                }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$check$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Check$3e$__["Check"], {
                                            className: "h-4 w-4",
                                            strokeWidth: 1.8
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/survey/CapabilityReviewSection.tsx",
                                            lineNumber: 101,
                                            columnNumber: 21
                                        }, this),
                                        "Capability will be excluded from Section 2."
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/survey/CapabilityReviewSection.tsx",
                                    lineNumber: 100,
                                    columnNumber: 19
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/components/survey/CapabilityReviewSection.tsx",
                                lineNumber: 88,
                                columnNumber: 15
                            }, this)
                        ]
                    }, capability.id, true, {
                        fileName: "[project]/src/components/survey/CapabilityReviewSection.tsx",
                        lineNumber: 42,
                        columnNumber: 13
                    }, this);
                })
            }, void 0, false, {
                fileName: "[project]/src/components/survey/CapabilityReviewSection.tsx",
                lineNumber: 37,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/survey/CapabilityReviewSection.tsx",
        lineNumber: 18,
        columnNumber: 5
    }, this);
}
_c = CapabilityReviewSection;
var _c;
__turbopack_context__.k.register(_c, "CapabilityReviewSection");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/survey/CapabilitySection.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "CapabilitySection",
    ()=>CapabilitySection
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$down$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronDown$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/chevron-down.js [app-client] (ecmascript) <export default as ChevronDown>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$survey$2f$DataRow$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/survey/DataRow.tsx [app-client] (ecmascript)");
;
;
;
const levelPadding = {
    1: "pl-4",
    2: "pl-8",
    3: "pl-14"
};
function hasChildren(node) {
    return Boolean(node.children?.length);
}
function CapabilitySection({ currentValues, priorValues, expanded, node, validationErrors = {}, selectedNodeId, commentaryValues, onCommentaryChange, onCurrentChange, onPriorChange, onSelectNode, onToggle }) {
    const isParent = hasChildren(node);
    const isOpen = expanded[node.id] ?? true;
    if (node.level === 3) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$survey$2f$DataRow$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DataRow"], {
            commentary: commentaryValues[node.id] ?? "",
            currentValue: currentValues[node.id] ?? "",
            error: validationErrors[node.id],
            isSelected: selectedNodeId === node.id,
            node: node,
            onCommentaryChange: onCommentaryChange,
            onCurrentChange: onCurrentChange,
            onPriorChange: onPriorChange,
            onSelect: onSelectNode,
            priorValue: priorValues[node.id] ?? ""
        }, void 0, false, {
            fileName: "[project]/src/components/survey/CapabilitySection.tsx",
            lineNumber: 49,
            columnNumber: 7
        }, this);
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                "aria-expanded": isOpen,
                className: [
                    "survey-grid w-full border-b border-[#EDEFF2] bg-white px-4 text-left text-[12px] leading-4 text-[#111827] max-[420px]:px-3",
                    node.level === 1 ? "min-h-[42px] font-semibold" : "min-h-[40px] font-medium"
                ].join(" "),
                onClick: ()=>onToggle(node.id),
                type: "button",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: [
                            "flex min-w-0 items-center gap-2 pr-3",
                            levelPadding[node.level]
                        ].join(" "),
                        children: [
                            isParent ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$down$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronDown$3e$__["ChevronDown"], {
                                className: [
                                    "h-3.5 w-3.5 shrink-0 text-[#9CA3AF] transition-transform",
                                    isOpen ? "" : "-rotate-90"
                                ].join(" "),
                                strokeWidth: 2
                            }, void 0, false, {
                                fileName: "[project]/src/components/survey/CapabilitySection.tsx",
                                lineNumber: 82,
                                columnNumber: 13
                            }, this) : null,
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "truncate",
                                children: node.name
                            }, void 0, false, {
                                fileName: "[project]/src/components/survey/CapabilitySection.tsx",
                                lineNumber: 90,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/survey/CapabilitySection.tsx",
                        lineNumber: 75,
                        columnNumber: 9
                    }, this),
                    node.level === 1 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "text-right text-[12px] font-normal text-[#111827]",
                                children: "Prior ($m)"
                            }, void 0, false, {
                                fileName: "[project]/src/components/survey/CapabilitySection.tsx",
                                lineNumber: 95,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "text-center text-[12px] font-normal text-[#111827]",
                                children: "Current ($m)"
                            }, void 0, false, {
                                fileName: "[project]/src/components/survey/CapabilitySection.tsx",
                                lineNumber: 98,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "text-right text-[12px] font-normal text-[#111827]",
                                children: "Variance"
                            }, void 0, false, {
                                fileName: "[project]/src/components/survey/CapabilitySection.tsx",
                                lineNumber: 101,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/survey/CapabilitySection.tsx",
                        lineNumber: 94,
                        columnNumber: 11
                    }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {}, void 0, false, {
                                fileName: "[project]/src/components/survey/CapabilitySection.tsx",
                                lineNumber: 107,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {}, void 0, false, {
                                fileName: "[project]/src/components/survey/CapabilitySection.tsx",
                                lineNumber: 108,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {}, void 0, false, {
                                fileName: "[project]/src/components/survey/CapabilitySection.tsx",
                                lineNumber: 109,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/survey/CapabilitySection.tsx",
                        lineNumber: 106,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/survey/CapabilitySection.tsx",
                lineNumber: 66,
                columnNumber: 7
            }, this),
            isOpen ? node.children?.map((child)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(CapabilitySection, {
                    commentaryValues: commentaryValues,
                    currentValues: currentValues,
                    expanded: expanded,
                    node: child,
                    priorValues: priorValues,
                    selectedNodeId: selectedNodeId,
                    validationErrors: validationErrors,
                    onCommentaryChange: onCommentaryChange,
                    onCurrentChange: onCurrentChange,
                    onPriorChange: onPriorChange,
                    onSelectNode: onSelectNode,
                    onToggle: onToggle
                }, child.id, false, {
                    fileName: "[project]/src/components/survey/CapabilitySection.tsx",
                    lineNumber: 116,
                    columnNumber: 13
                }, this)) : null
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/survey/CapabilitySection.tsx",
        lineNumber: 65,
        columnNumber: 5
    }, this);
}
_c = CapabilitySection;
var _c;
__turbopack_context__.k.register(_c, "CapabilitySection");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/survey/CapabilityTree.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "CapabilityTree",
    ()=>CapabilityTree
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$survey$2f$CapabilitySection$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/survey/CapabilitySection.tsx [app-client] (ecmascript)");
;
;
function CapabilityTree({ currentValues, data, expanded, priorValues, validationErrors = {}, selectedNodeId, commentaryValues, onCommentaryChange, onCurrentChange, onPriorChange, onSelectNode, onToggle }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "pb-3",
        children: data.map((node)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$survey$2f$CapabilitySection$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CapabilitySection"], {
                commentaryValues: commentaryValues,
                currentValues: currentValues,
                expanded: expanded,
                node: node,
                priorValues: priorValues,
                selectedNodeId: selectedNodeId,
                validationErrors: validationErrors,
                onCommentaryChange: onCommentaryChange,
                onCurrentChange: onCurrentChange,
                onPriorChange: onPriorChange,
                onSelectNode: onSelectNode,
                onToggle: onToggle
            }, node.id, false, {
                fileName: "[project]/src/components/survey/CapabilityTree.tsx",
                lineNumber: 36,
                columnNumber: 9
            }, this))
    }, void 0, false, {
        fileName: "[project]/src/components/survey/CapabilityTree.tsx",
        lineNumber: 34,
        columnNumber: 5
    }, this);
}
_c = CapabilityTree;
var _c;
__turbopack_context__.k.register(_c, "CapabilityTree");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/survey/CommentaryField.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "CommentaryField",
    ()=>CommentaryField
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$triangle$2d$alert$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__AlertTriangle$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/triangle-alert.js [app-client] (ecmascript) <export default as AlertTriangle>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$survey$2f$InfoTooltip$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/survey/InfoTooltip.tsx [app-client] (ecmascript)");
;
;
;
function CommentaryField({ error, value, onChange, infoTooltipText, maxLength, requiresCommentary = true }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: [
            "px-4 py-2 max-[420px]:px-3",
            requiresCommentary ? "border-y border-[#FED7AA] bg-survey-warning" : "border-y border-[#E5E7EB] bg-white"
        ].join(" "),
        children: [
            requiresCommentary ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "mb-1.5 flex items-center gap-2 text-[11px] font-medium leading-4 text-[#C2410C]",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$triangle$2d$alert$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__AlertTriangle$3e$__["AlertTriangle"], {
                        className: "h-4 w-4 shrink-0",
                        strokeWidth: 1.8
                    }, void 0, false, {
                        fileName: "[project]/src/components/survey/CommentaryField.tsx",
                        lineNumber: 32,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        children: "Commentary required — variance exceeds ±15%"
                    }, void 0, false, {
                        fileName: "[project]/src/components/survey/CommentaryField.tsx",
                        lineNumber: 33,
                        columnNumber: 11
                    }, this),
                    infoTooltipText ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$survey$2f$InfoTooltip$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["InfoTooltip"], {
                        text: infoTooltipText
                    }, void 0, false, {
                        fileName: "[project]/src/components/survey/CommentaryField.tsx",
                        lineNumber: 34,
                        columnNumber: 30
                    }, this) : null
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/survey/CommentaryField.tsx",
                lineNumber: 31,
                columnNumber: 9
            }, this) : null,
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("textarea", {
                "aria-label": "Variance commentary",
                className: [
                    "h-[52px] w-full resize-y rounded-md bg-white px-3 py-2 text-[11px] leading-4 text-survey-text outline-none placeholder:text-[#6B7280] focus:ring-2",
                    requiresCommentary ? "border border-[#F97316] focus:ring-orange-100" : "border border-[#E5E7EB] focus:border-[#B9C2D0] focus:ring-slate-100"
                ].join(" "),
                maxLength: maxLength,
                onChange: (event)=>onChange(event.target.value),
                onClick: (event)=>event.stopPropagation(),
                onKeyDown: (event)=>event.stopPropagation(),
                onMouseDown: (event)=>event.stopPropagation(),
                placeholder: "Explain the change (e.g. new contract, migration, decommission)...",
                value: value
            }, void 0, false, {
                fileName: "[project]/src/components/survey/CommentaryField.tsx",
                lineNumber: 37,
                columnNumber: 7
            }, this),
            error ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: "mt-1 text-[11px] font-medium leading-4 text-[#DC2626]",
                children: error
            }, void 0, false, {
                fileName: "[project]/src/components/survey/CommentaryField.tsx",
                lineNumber: 54,
                columnNumber: 9
            }, this) : null
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/survey/CommentaryField.tsx",
        lineNumber: 22,
        columnNumber: 5
    }, this);
}
_c = CommentaryField;
var _c;
__turbopack_context__.k.register(_c, "CommentaryField");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/survey/DataRow.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "DataRow",
    ()=>DataRow
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$triangle$2d$alert$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__AlertTriangle$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/triangle-alert.js [app-client] (ecmascript) <export default as AlertTriangle>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$survey$2f$CommentaryField$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/survey/CommentaryField.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$survey$2f$surveyMath$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/survey/surveyMath.ts [app-client] (ecmascript)");
;
;
;
;
function DataRow({ node, priorValue, currentValue, commentary, error, isSelected, onCommentaryChange, onCurrentChange, onPriorChange, onSelect }) {
    const variance = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$survey$2f$surveyMath$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["calculateVariance"])(priorValue, currentValue);
    const requiresCommentary = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$survey$2f$surveyMath$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["needsCommentary"])(priorValue, currentValue);
    const varianceColor = variance === null ? "text-survey-muted" : variance >= 0 ? "text-survey-red" : "text-survey-green";
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                "aria-label": `Open details for ${node.name}`,
                className: [
                    "survey-grid min-h-[44px] cursor-pointer border-b border-[#EEF0F3] px-4 text-[12px] leading-4 transition-colors max-[420px]:px-3",
                    isSelected ? "bg-[#EAF4FF]" : requiresCommentary ? "bg-[#FFFDF6] hover:bg-[#FFF9ED]" : "bg-white hover:bg-[#F8FBFF]"
                ].join(" "),
                onClick: ()=>onSelect(node),
                onKeyDown: (event)=>{
                    if (event.key === "Enter" || event.key === " ") {
                        event.preventDefault();
                        onSelect(node);
                    }
                },
                role: "button",
                tabIndex: 0,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "min-w-0 truncate pl-[54px] pr-3 text-[#223044] sm:pl-[56px]",
                        children: node.name
                    }, void 0, false, {
                        fileName: "[project]/src/components/survey/DataRow.tsx",
                        lineNumber: 66,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex justify-end",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                            "aria-label": `${node.name} prior value`,
                            className: "current-value-input h-7 rounded-md border border-survey-border bg-white px-2 text-center text-[11px] font-medium text-[#111827] outline-none transition focus:border-[#B9C2D0] focus:ring-2 focus:ring-slate-100",
                            inputMode: "decimal",
                            onChange: (event)=>onPriorChange(node.id, event.target.value),
                            onClick: (event)=>event.stopPropagation(),
                            onKeyDown: (event)=>event.stopPropagation(),
                            onMouseDown: (event)=>event.stopPropagation(),
                            step: "0.1",
                            type: "number",
                            value: priorValue
                        }, void 0, false, {
                            fileName: "[project]/src/components/survey/DataRow.tsx",
                            lineNumber: 70,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/components/survey/DataRow.tsx",
                        lineNumber: 69,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex justify-center",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                            "aria-label": `${node.name} current value`,
                            className: [
                                "current-value-input h-7 rounded-md border bg-white px-2 text-center text-[11px] font-medium text-[#111827] outline-none transition focus:ring-2",
                                requiresCommentary ? "border-[#F97316] focus:ring-orange-100" : "border-survey-border focus:border-[#B9C2D0] focus:ring-slate-100"
                            ].join(" "),
                            inputMode: "decimal",
                            onChange: (event)=>onCurrentChange(node.id, event.target.value),
                            onClick: (event)=>event.stopPropagation(),
                            onKeyDown: (event)=>event.stopPropagation(),
                            onMouseDown: (event)=>event.stopPropagation(),
                            type: "number",
                            step: "0.1",
                            value: currentValue
                        }, void 0, false, {
                            fileName: "[project]/src/components/survey/DataRow.tsx",
                            lineNumber: 84,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/components/survey/DataRow.tsx",
                        lineNumber: 83,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: [
                            "flex items-center justify-end gap-1.5 text-[12px] font-semibold",
                            varianceColor
                        ].join(" "),
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$survey$2f$surveyMath$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["formatVariance"])(variance)
                            }, void 0, false, {
                                fileName: "[project]/src/components/survey/DataRow.tsx",
                                lineNumber: 108,
                                columnNumber: 11
                            }, this),
                            requiresCommentary ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$triangle$2d$alert$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__AlertTriangle$3e$__["AlertTriangle"], {
                                className: "h-4 w-4 text-[#F97316]",
                                strokeWidth: 1.8
                            }, void 0, false, {
                                fileName: "[project]/src/components/survey/DataRow.tsx",
                                lineNumber: 110,
                                columnNumber: 13
                            }, this) : null
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/survey/DataRow.tsx",
                        lineNumber: 102,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/survey/DataRow.tsx",
                lineNumber: 46,
                columnNumber: 7
            }, this),
            requiresCommentary ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$survey$2f$CommentaryField$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CommentaryField"], {
                error: error,
                onChange: (value)=>onCommentaryChange(node.id, value),
                value: commentary
            }, void 0, false, {
                fileName: "[project]/src/components/survey/DataRow.tsx",
                lineNumber: 116,
                columnNumber: 9
            }, this) : error ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "border-b border-[#FECACA] bg-[#FEF2F2] px-4 py-2 text-[11px] font-medium leading-4 text-[#DC2626] max-[420px]:px-3",
                children: error
            }, void 0, false, {
                fileName: "[project]/src/components/survey/DataRow.tsx",
                lineNumber: 122,
                columnNumber: 9
            }, this) : null
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/survey/DataRow.tsx",
        lineNumber: 45,
        columnNumber: 5
    }, this);
}
_c = DataRow;
var _c;
__turbopack_context__.k.register(_c, "DataRow");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/survey/InfoTooltip.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "InfoTooltip",
    ()=>InfoTooltip
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$info$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Info$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/info.js [app-client] (ecmascript) <export default as Info>");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
function InfoTooltip({ text }) {
    _s();
    const id = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useId"])();
    const [isOpen, setIsOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
        className: "relative inline-flex",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                "aria-describedby": isOpen ? id : undefined,
                "aria-label": text,
                className: "inline-flex h-3.5 w-3.5 items-center justify-center rounded-full text-[#8191AC] outline-none transition hover:text-[#52627A] focus:text-[#52627A] focus:ring-1 focus:ring-[#B9C2D0]",
                onBlur: ()=>setIsOpen(false),
                onClick: (event)=>event.stopPropagation(),
                onFocus: ()=>setIsOpen(true),
                onMouseEnter: ()=>setIsOpen(true),
                onMouseLeave: ()=>setIsOpen(false),
                type: "button",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$info$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Info$3e$__["Info"], {
                    className: "h-3.5 w-3.5",
                    strokeWidth: 2
                }, void 0, false, {
                    fileName: "[project]/src/components/survey/InfoTooltip.tsx",
                    lineNumber: 27,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/survey/InfoTooltip.tsx",
                lineNumber: 16,
                columnNumber: 7
            }, this),
            isOpen ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                className: "absolute left-1/2 top-[calc(100%+6px)] z-[60] w-max max-w-[240px] -translate-x-1/2 rounded-md bg-[#111827] px-2.5 py-1.5 text-[10px] font-medium leading-4 text-white shadow-lg",
                id: id,
                role: "tooltip",
                children: text
            }, void 0, false, {
                fileName: "[project]/src/components/survey/InfoTooltip.tsx",
                lineNumber: 30,
                columnNumber: 9
            }, this) : null
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/survey/InfoTooltip.tsx",
        lineNumber: 15,
        columnNumber: 5
    }, this);
}
_s(InfoTooltip, "u7ElMONSIAnrDSww3DhB3HadGS4=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useId"]
    ];
});
_c = InfoTooltip;
var _c;
__turbopack_context__.k.register(_c, "InfoTooltip");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/survey/L3DetailDrawer.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "L3DetailDrawer",
    ()=>L3DetailDrawer
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$down$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronDown$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/chevron-down.js [app-client] (ecmascript) <export default as ChevronDown>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/x.js [app-client] (ecmascript) <export default as X>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$survey$2f$CommentaryField$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/survey/CommentaryField.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$survey$2f$InfoTooltip$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/survey/InfoTooltip.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$survey$2f$surveyMath$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/survey/surveyMath.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
const deploymentModels = [
    "Multi-cloud",
    "Hybrid",
    "Private cloud",
    "Public cloud"
];
const hostingTypes = [
    "IaaS",
    "PaaS",
    "SaaS",
    "On-prem",
    "Managed network",
    "Edge"
];
const statuses = [
    "In Production",
    "Pilot",
    "Planned",
    "Retiring"
];
const riskLevels = [
    "Low",
    "Medium",
    "High"
];
const fieldTooltips = {
    annualBudget: "Enter the annual budget allocated to this capability.",
    commentary: "Required when the absolute variance exceeds ±15%. Explain the reason for the change.",
    current: "Enter the current-year value for this capability.",
    deploymentModel: "Select the primary deployment model used for this capability.",
    expectedSavings: "Enter the expected savings associated with this capability.",
    hostingType: "Select the hosting arrangement used for this capability.",
    prior: "Previous-year value for this capability.",
    riskLevel: "Select the current risk level for this capability.",
    status: "Select the current operational status of this capability.",
    strategicTechnology: "Indicate whether this capability is considered strategically important.",
    variance: "Percentage change between Prior and Current values."
};
function toDraft(currentValue, commentary, detail) {
    return {
        ...detail,
        current: currentValue,
        commentary,
        annualBudget: detail.annualBudget.toFixed(1),
        expectedSavings: detail.expectedSavings.toFixed(1)
    };
}
function FieldLabel({ children, required = false, tooltip }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
        className: "mb-1.5 flex items-center gap-1.5 text-[11px] font-semibold leading-4 text-[#24324B]",
        children: [
            children,
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$survey$2f$InfoTooltip$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["InfoTooltip"], {
                text: tooltip
            }, void 0, false, {
                fileName: "[project]/src/components/survey/L3DetailDrawer.tsx",
                lineNumber: 71,
                columnNumber: 7
            }, this),
            required ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                className: "text-[#EA580C]",
                children: "*"
            }, void 0, false, {
                fileName: "[project]/src/components/survey/L3DetailDrawer.tsx",
                lineNumber: 72,
                columnNumber: 19
            }, this) : null
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/survey/L3DetailDrawer.tsx",
        lineNumber: 69,
        columnNumber: 5
    }, this);
}
_c = FieldLabel;
function SelectField({ label, onChange, options, required, tooltip, value }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
        className: "block",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(FieldLabel, {
                required: required,
                tooltip: tooltip,
                children: label
            }, void 0, false, {
                fileName: "[project]/src/components/survey/L3DetailDrawer.tsx",
                lineNumber: 94,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                className: "relative block",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                        className: "h-9 w-full appearance-none rounded-md border border-[#D8DEE8] bg-white px-3 pr-9 text-[12px] text-[#0F172A] outline-none transition focus:border-[#93A3BA] focus:ring-2 focus:ring-[#E7EEF7]",
                        onChange: (event)=>onChange(event.target.value),
                        value: value,
                        children: options.map((option)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                value: option,
                                children: option
                            }, option, false, {
                                fileName: "[project]/src/components/survey/L3DetailDrawer.tsx",
                                lineNumber: 102,
                                columnNumber: 13
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/src/components/survey/L3DetailDrawer.tsx",
                        lineNumber: 96,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$down$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronDown$3e$__["ChevronDown"], {
                        "aria-hidden": "true",
                        className: "pointer-events-none absolute right-3 top-1/2 h-3.5 w-3.5 -translate-y-1/2 text-[#66758F]",
                        strokeWidth: 2
                    }, void 0, false, {
                        fileName: "[project]/src/components/survey/L3DetailDrawer.tsx",
                        lineNumber: 107,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/survey/L3DetailDrawer.tsx",
                lineNumber: 95,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/survey/L3DetailDrawer.tsx",
        lineNumber: 93,
        columnNumber: 5
    }, this);
}
_c1 = SelectField;
function CurrencyInput({ label, onChange, readOnly = false, required, tooltip, value }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
        className: "block",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(FieldLabel, {
                required: required,
                tooltip: tooltip,
                children: label
            }, void 0, false, {
                fileName: "[project]/src/components/survey/L3DetailDrawer.tsx",
                lineNumber: 134,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                className: "flex h-9 overflow-hidden rounded-md border border-[#D8DEE8] bg-white focus-within:border-[#93A3BA] focus-within:ring-2 focus-within:ring-[#E7EEF7]",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "flex w-8 items-center justify-center border-r border-[#E5E7EB] bg-[#F8FAFC] text-[12px] text-[#64748B]",
                        children: "$"
                    }, void 0, false, {
                        fileName: "[project]/src/components/survey/L3DetailDrawer.tsx",
                        lineNumber: 136,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                        className: "min-w-0 flex-1 bg-transparent px-3 text-[12px] text-[#0F172A] outline-none",
                        inputMode: "decimal",
                        onChange: (event)=>onChange?.(event.target.value),
                        readOnly: readOnly,
                        step: "0.1",
                        type: "number",
                        value: value
                    }, void 0, false, {
                        fileName: "[project]/src/components/survey/L3DetailDrawer.tsx",
                        lineNumber: 139,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/survey/L3DetailDrawer.tsx",
                lineNumber: 135,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/survey/L3DetailDrawer.tsx",
        lineNumber: 133,
        columnNumber: 5
    }, this);
}
_c2 = CurrencyInput;
function RadioGroup({ label, onChange, options, required, tooltip, value }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("fieldset", {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(FieldLabel, {
                required: required,
                tooltip: tooltip,
                children: label
            }, void 0, false, {
                fileName: "[project]/src/components/survey/L3DetailDrawer.tsx",
                lineNumber: 170,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex flex-wrap gap-x-5 gap-y-2 pt-0.5",
                children: options.map((option)=>{
                    const checked = option.value === value;
                    const tone = option.tone === "green" ? "border-[#16A34A] bg-[#16A34A]" : option.tone === "red" ? "border-[#DC2626] bg-white" : "border-[#EA580C] bg-[#EA580C]";
                    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                        className: "inline-flex cursor-pointer items-center gap-2 text-[12px] font-medium text-[#0F172A]",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                checked: checked,
                                className: "sr-only",
                                onChange: ()=>onChange(option.value),
                                type: "radio"
                            }, void 0, false, {
                                fileName: "[project]/src/components/survey/L3DetailDrawer.tsx",
                                lineNumber: 186,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: [
                                    "flex h-4 w-4 items-center justify-center rounded-full border-2 transition",
                                    checked ? tone : "border-[#A7B2C3] bg-white"
                                ].join(" "),
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: [
                                        "h-2 w-2 rounded-full",
                                        checked ? option.tone === "red" ? "bg-[#DC2626]" : "bg-white" : "bg-transparent"
                                    ].join(" ")
                                }, void 0, false, {
                                    fileName: "[project]/src/components/survey/L3DetailDrawer.tsx",
                                    lineNumber: 198,
                                    columnNumber: 17
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/components/survey/L3DetailDrawer.tsx",
                                lineNumber: 192,
                                columnNumber: 15
                            }, this),
                            option.label
                        ]
                    }, option.label, true, {
                        fileName: "[project]/src/components/survey/L3DetailDrawer.tsx",
                        lineNumber: 182,
                        columnNumber: 13
                    }, this);
                })
            }, void 0, false, {
                fileName: "[project]/src/components/survey/L3DetailDrawer.tsx",
                lineNumber: 171,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/survey/L3DetailDrawer.tsx",
        lineNumber: 169,
        columnNumber: 5
    }, this);
}
_c3 = RadioGroup;
function L3DetailDrawer({ breadcrumb, commentary, currentValue, detail, node, onClose, onSave, priorValue }) {
    _s();
    const closeButtonRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const [draft, setDraft] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({
        "L3DetailDrawer.useState": ()=>toDraft(currentValue, commentary, detail)
    }["L3DetailDrawer.useState"]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "L3DetailDrawer.useEffect": ()=>{
            window.setTimeout({
                "L3DetailDrawer.useEffect": ()=>closeButtonRef.current?.focus()
            }["L3DetailDrawer.useEffect"], 0);
        }
    }["L3DetailDrawer.useEffect"], [
        node.id
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "L3DetailDrawer.useEffect": ()=>{
            const handleKeyDown = {
                "L3DetailDrawer.useEffect.handleKeyDown": (event)=>{
                    if (event.key === "Escape") {
                        onClose();
                    }
                }
            }["L3DetailDrawer.useEffect.handleKeyDown"];
            window.addEventListener("keydown", handleKeyDown);
            return ({
                "L3DetailDrawer.useEffect": ()=>window.removeEventListener("keydown", handleKeyDown)
            })["L3DetailDrawer.useEffect"];
        }
    }["L3DetailDrawer.useEffect"], [
        onClose
    ]);
    const variance = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$survey$2f$surveyMath$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["calculateVariance"])(priorValue, draft.current);
    const requiresCommentary = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$survey$2f$surveyMath$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["needsCommentary"])(priorValue, draft.current);
    const setDraftField = (key, value)=>{
        setDraft((previous)=>({
                ...previous,
                [key]: value
            }));
    };
    const handleSubmit = (event)=>{
        event.preventDefault();
        onSave(node.id, draft);
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        "aria-live": "polite",
        className: "fixed inset-0 z-50",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                "aria-label": "Close details panel",
                className: "absolute inset-0 bg-[#0F172A]/10",
                onClick: onClose,
                type: "button"
            }, void 0, false, {
                fileName: "[project]/src/components/survey/L3DetailDrawer.tsx",
                lineNumber: 266,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("aside", {
                "aria-label": `${node.name} details`,
                "aria-modal": "true",
                className: "absolute inset-y-0 right-0 flex h-full w-full max-w-[90vw] animate-[drawer-in_180ms_ease-out] flex-col border-l border-[#E5E7EB] bg-white shadow-[-12px_0_32px_rgba(15,23,42,0.12)] sm:w-[450px]",
                role: "dialog",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
                    className: "flex min-h-0 flex-1 flex-col",
                    onSubmit: handleSubmit,
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "min-h-0 flex-1 overflow-y-auto px-5 py-5",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "mb-5 flex items-start justify-between gap-4",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "min-w-0",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                                    className: "truncate text-[18px] font-semibold leading-6 text-[#0B1328]",
                                                    children: node.name
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/survey/L3DetailDrawer.tsx",
                                                    lineNumber: 282,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "mt-3 flex flex-wrap items-center gap-1.5 text-[11px] leading-4 text-[#66758F]",
                                                    children: breadcrumb.map((item, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "contents",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                    children: item
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/components/survey/L3DetailDrawer.tsx",
                                                                    lineNumber: 288,
                                                                    columnNumber: 23
                                                                }, this),
                                                                index < breadcrumb.length - 1 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                    children: ">"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/components/survey/L3DetailDrawer.tsx",
                                                                    lineNumber: 289,
                                                                    columnNumber: 56
                                                                }, this) : null
                                                            ]
                                                        }, item, true, {
                                                            fileName: "[project]/src/components/survey/L3DetailDrawer.tsx",
                                                            lineNumber: 287,
                                                            columnNumber: 21
                                                        }, this))
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/survey/L3DetailDrawer.tsx",
                                                    lineNumber: 285,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/survey/L3DetailDrawer.tsx",
                                            lineNumber: 281,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            "aria-label": "Close details panel",
                                            className: "rounded-md p-1 text-[#24324B] outline-none transition hover:bg-[#F1F5F9] focus:ring-2 focus:ring-[#E7EEF7]",
                                            onClick: onClose,
                                            ref: closeButtonRef,
                                            type: "button",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__["X"], {
                                                className: "h-4 w-4",
                                                strokeWidth: 2
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/survey/L3DetailDrawer.tsx",
                                                lineNumber: 302,
                                                columnNumber: 17
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/survey/L3DetailDrawer.tsx",
                                            lineNumber: 295,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/survey/L3DetailDrawer.tsx",
                                    lineNumber: 280,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "grid grid-cols-3 gap-3",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(CurrencyInput, {
                                            label: "Prior ($m)",
                                            readOnly: true,
                                            tooltip: fieldTooltips.prior,
                                            value: priorValue
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/survey/L3DetailDrawer.tsx",
                                            lineNumber: 307,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(CurrencyInput, {
                                            label: "Current ($m)",
                                            onChange: (value)=>setDraftField("current", value),
                                            tooltip: fieldTooltips.current,
                                            value: draft.current
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/survey/L3DetailDrawer.tsx",
                                            lineNumber: 313,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                            className: "block",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(FieldLabel, {
                                                    tooltip: fieldTooltips.variance,
                                                    children: "Variance"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/survey/L3DetailDrawer.tsx",
                                                    lineNumber: 320,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: [
                                                        "flex h-9 items-center rounded-md border border-[#D8DEE8] bg-[#F8FAFC] px-3 text-[12px] font-semibold",
                                                        variance !== null && variance >= 0 ? "text-survey-red" : "text-survey-green"
                                                    ].join(" "),
                                                    children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$survey$2f$surveyMath$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["formatVariance"])(variance)
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/survey/L3DetailDrawer.tsx",
                                                    lineNumber: 321,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/survey/L3DetailDrawer.tsx",
                                            lineNumber: 319,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/survey/L3DetailDrawer.tsx",
                                    lineNumber: 306,
                                    columnNumber: 13
                                }, this),
                                requiresCommentary ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "mt-5 overflow-hidden rounded-md",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$survey$2f$CommentaryField$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CommentaryField"], {
                                        infoTooltipText: fieldTooltips.commentary,
                                        maxLength: 500,
                                        onChange: (value)=>setDraftField("commentary", value),
                                        value: draft.commentary
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/survey/L3DetailDrawer.tsx",
                                        lineNumber: 336,
                                        columnNumber: 17
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/components/survey/L3DetailDrawer.tsx",
                                    lineNumber: 335,
                                    columnNumber: 15
                                }, this) : null,
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "mt-5 grid grid-cols-2 gap-x-5 gap-y-5",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(SelectField, {
                                            label: "Deployment Model",
                                            onChange: (value)=>setDraftField("deploymentModel", value),
                                            options: deploymentModels,
                                            required: true,
                                            tooltip: fieldTooltips.deploymentModel,
                                            value: draft.deploymentModel
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/survey/L3DetailDrawer.tsx",
                                            lineNumber: 346,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(SelectField, {
                                            label: "Hosting Type",
                                            onChange: (value)=>setDraftField("hostingType", value),
                                            options: hostingTypes,
                                            required: true,
                                            tooltip: fieldTooltips.hostingType,
                                            value: draft.hostingType
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/survey/L3DetailDrawer.tsx",
                                            lineNumber: 354,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(RadioGroup, {
                                            label: "Strategic Technology?",
                                            onChange: (value)=>setDraftField("strategicTechnology", value),
                                            options: [
                                                {
                                                    label: "Yes",
                                                    value: true
                                                },
                                                {
                                                    label: "No",
                                                    value: false
                                                }
                                            ],
                                            required: true,
                                            tooltip: fieldTooltips.strategicTechnology,
                                            value: draft.strategicTechnology
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/survey/L3DetailDrawer.tsx",
                                            lineNumber: 362,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(SelectField, {
                                            label: "Status",
                                            onChange: (value)=>setDraftField("status", value),
                                            options: statuses,
                                            required: true,
                                            tooltip: fieldTooltips.status,
                                            value: draft.status
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/survey/L3DetailDrawer.tsx",
                                            lineNumber: 373,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(CurrencyInput, {
                                            label: "Annual Budget ($m)",
                                            onChange: (value)=>setDraftField("annualBudget", value),
                                            tooltip: fieldTooltips.annualBudget,
                                            value: draft.annualBudget
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/survey/L3DetailDrawer.tsx",
                                            lineNumber: 381,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(CurrencyInput, {
                                            label: "Expected Savings ($m)",
                                            onChange: (value)=>setDraftField("expectedSavings", value),
                                            tooltip: fieldTooltips.expectedSavings,
                                            value: draft.expectedSavings
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/survey/L3DetailDrawer.tsx",
                                            lineNumber: 387,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "col-span-2",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(RadioGroup, {
                                                label: "Risk Level",
                                                onChange: (value)=>setDraftField("riskLevel", value),
                                                options: riskLevels.map((level)=>({
                                                        label: level,
                                                        tone: level === "Low" ? "green" : level === "High" ? "red" : "orange",
                                                        value: level
                                                    })),
                                                required: true,
                                                tooltip: fieldTooltips.riskLevel,
                                                value: draft.riskLevel
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/survey/L3DetailDrawer.tsx",
                                                lineNumber: 394,
                                                columnNumber: 17
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/survey/L3DetailDrawer.tsx",
                                            lineNumber: 393,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/survey/L3DetailDrawer.tsx",
                                    lineNumber: 345,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/survey/L3DetailDrawer.tsx",
                            lineNumber: 279,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex justify-end gap-3 border-t border-[#E5E7EB] px-5 py-4",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    className: "h-9 rounded-md border border-[#D8DEE8] bg-white px-5 text-[12px] font-semibold text-[#0F172A] transition hover:bg-[#F8FAFC] focus:outline-none focus:ring-2 focus:ring-[#E7EEF7]",
                                    onClick: onClose,
                                    type: "button",
                                    children: "Cancel"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/survey/L3DetailDrawer.tsx",
                                    lineNumber: 416,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    className: "h-9 rounded-md bg-[#EA580C] px-5 text-[12px] font-semibold text-white shadow-sm transition hover:bg-[#C2410C] focus:outline-none focus:ring-2 focus:ring-orange-200",
                                    type: "submit",
                                    children: "Save changes"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/survey/L3DetailDrawer.tsx",
                                    lineNumber: 423,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/survey/L3DetailDrawer.tsx",
                            lineNumber: 415,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/survey/L3DetailDrawer.tsx",
                    lineNumber: 278,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/survey/L3DetailDrawer.tsx",
                lineNumber: 272,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/survey/L3DetailDrawer.tsx",
        lineNumber: 265,
        columnNumber: 5
    }, this);
}
_s(L3DetailDrawer, "knqrZj17bri2G1B+XhIa683d//c=");
_c4 = L3DetailDrawer;
var _c, _c1, _c2, _c3, _c4;
__turbopack_context__.k.register(_c, "FieldLabel");
__turbopack_context__.k.register(_c1, "SelectField");
__turbopack_context__.k.register(_c2, "CurrencyInput");
__turbopack_context__.k.register(_c3, "RadioGroup");
__turbopack_context__.k.register(_c4, "L3DetailDrawer");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/survey/SurveyCard.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "SurveyCard",
    ()=>SurveyCard
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chart$2d$column$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__BarChart3$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/chart-column.js [app-client] (ecmascript) <export default as BarChart3>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$survey$2f$CapabilityTree$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/survey/CapabilityTree.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$survey$2f$L3DetailDrawer$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/survey/L3DetailDrawer.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$survey$2f$SurveyTabs$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/survey/SurveyTabs.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$survey$2f$surveyMath$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/survey/surveyMath.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$survey$2f$surveyState$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/survey/surveyState.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$surveyData$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/data/surveyData.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
;
;
;
function hasNumericValue(value) {
    return Number.isFinite(Number.parseFloat(value ?? ""));
}
function SurveyCard({ onValidationErrorClear, setWorkingState, validationErrors = {}, workingState }) {
    _s();
    const [activeTab] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("core-technology");
    const [selectedNodeId, setSelectedNodeId] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const { commentaryValues, currentValues, detailValues, expanded, priorValues } = workingState;
    const selectedContext = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "SurveyCard.useMemo[selectedContext]": ()=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$survey$2f$surveyState$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["findSelectedContext"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$surveyData$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["surveyData"], selectedNodeId)
    }["SurveyCard.useMemo[selectedContext]"], [
        selectedNodeId
    ]);
    const handleToggle = (id)=>{
        setWorkingState((previous)=>({
                ...previous,
                expanded: {
                    ...previous.expanded,
                    [id]: !(previous.expanded[id] ?? true)
                }
            }));
    };
    const handleCurrentChange = (id, value)=>{
        const commentary = commentaryValues[id] ?? "";
        if (validationErrors[id] && hasNumericValue(priorValues[id]) && hasNumericValue(value) && (!(0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$survey$2f$surveyMath$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["needsCommentary"])(priorValues[id], value) || commentary.trim())) {
            onValidationErrorClear?.(id);
        }
        setWorkingState((previous)=>({
                ...previous,
                currentValues: {
                    ...previous.currentValues,
                    [id]: value
                }
            }));
    };
    const handlePriorChange = (id, value)=>{
        const commentary = commentaryValues[id] ?? "";
        if (validationErrors[id] && hasNumericValue(value) && hasNumericValue(currentValues[id]) && (!(0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$survey$2f$surveyMath$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["needsCommentary"])(value, currentValues[id]) || commentary.trim())) {
            onValidationErrorClear?.(id);
        }
        setWorkingState((previous)=>({
                ...previous,
                priorValues: {
                    ...previous.priorValues,
                    [id]: value
                }
            }));
    };
    const handleCommentaryChange = (id, value)=>{
        if (validationErrors[id] && hasNumericValue(priorValues[id]) && hasNumericValue(currentValues[id]) && (!(0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$survey$2f$surveyMath$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["needsCommentary"])(priorValues[id], currentValues[id]) || value.trim())) {
            onValidationErrorClear?.(id);
        }
        setWorkingState((previous)=>({
                ...previous,
                commentaryValues: {
                    ...previous.commentaryValues,
                    [id]: value
                }
            }));
    };
    const handleSelectNode = (node)=>{
        if (node.level === 3) {
            setSelectedNodeId(node.id);
        }
    };
    const handleSaveDetails = (id, draft)=>{
        setWorkingState((previous)=>{
            const existing = previous.detailValues[id];
            return {
                ...previous,
                commentaryValues: {
                    ...previous.commentaryValues,
                    [id]: draft.commentary
                },
                currentValues: {
                    ...previous.currentValues,
                    [id]: draft.current
                },
                detailValues: {
                    ...previous.detailValues,
                    [id]: {
                        commentary: draft.commentary,
                        current: draft.current,
                        deploymentModel: draft.deploymentModel,
                        hostingType: draft.hostingType,
                        strategicTechnology: draft.strategicTechnology,
                        status: draft.status,
                        annualBudget: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$survey$2f$surveyState$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["parseFormNumber"])(draft.annualBudget, existing?.annualBudget ?? 0),
                        expectedSavings: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$survey$2f$surveyState$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["parseFormNumber"])(draft.expectedSavings, existing?.expectedSavings ?? 0),
                        riskLevel: draft.riskLevel
                    }
                }
            };
        });
        setSelectedNodeId(null);
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                className: "overflow-hidden rounded-lg border border-survey-border bg-white shadow-card",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-start gap-3 border-b border-survey-border px-5 py-[18px]",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex h-8 w-8 shrink-0 items-center justify-center rounded-md bg-survey-orangeSoft text-survey-orange",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chart$2d$column$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__BarChart3$3e$__["BarChart3"], {
                                    className: "h-4 w-4",
                                    strokeWidth: 2
                                }, void 0, false, {
                                    fileName: "[project]/src/components/survey/SurveyCard.tsx",
                                    lineNumber: 160,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/components/survey/SurveyCard.tsx",
                                lineNumber: 159,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "min-w-0",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                        className: "text-[13px] font-semibold leading-4 text-[#0F172A]",
                                        children: "Section 2 · Working Data"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/survey/SurveyCard.tsx",
                                        lineNumber: 163,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "mt-1 text-[11px] leading-4 text-[#374151]",
                                        children: "Enter current-year values. A warning appears when variance exceeds ±15%, and commentary becomes mandatory."
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/survey/SurveyCard.tsx",
                                        lineNumber: 166,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/survey/SurveyCard.tsx",
                                lineNumber: 162,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/survey/SurveyCard.tsx",
                        lineNumber: 158,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$survey$2f$SurveyTabs$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SurveyTabs"], {
                        activeTab: activeTab,
                        tabs: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$surveyData$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["surveyTabs"]
                    }, void 0, false, {
                        fileName: "[project]/src/components/survey/SurveyCard.tsx",
                        lineNumber: 172,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$survey$2f$CapabilityTree$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CapabilityTree"], {
                        commentaryValues: commentaryValues,
                        currentValues: currentValues,
                        data: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$surveyData$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["surveyData"],
                        expanded: expanded,
                        priorValues: priorValues,
                        selectedNodeId: selectedNodeId,
                        validationErrors: validationErrors,
                        onCommentaryChange: handleCommentaryChange,
                        onCurrentChange: handleCurrentChange,
                        onPriorChange: handlePriorChange,
                        onSelectNode: handleSelectNode,
                        onToggle: handleToggle
                    }, void 0, false, {
                        fileName: "[project]/src/components/survey/SurveyCard.tsx",
                        lineNumber: 174,
                        columnNumber: 9
                    }, this),
                    Object.keys(validationErrors).length ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "border-t border-[#FED7AA] bg-[#FFF7ED] px-5 py-3 text-[12px] font-medium text-[#C2410C]",
                        children: "Please complete required row values and add commentary where variance exceeds ±15%."
                    }, void 0, false, {
                        fileName: "[project]/src/components/survey/SurveyCard.tsx",
                        lineNumber: 189,
                        columnNumber: 11
                    }, this) : null
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/survey/SurveyCard.tsx",
                lineNumber: 157,
                columnNumber: 7
            }, this),
            selectedContext && selectedNodeId && detailValues[selectedNodeId] ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$survey$2f$L3DetailDrawer$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["L3DetailDrawer"], {
                breadcrumb: selectedContext.breadcrumb,
                commentary: commentaryValues[selectedNodeId] ?? "",
                currentValue: currentValues[selectedNodeId] ?? "",
                detail: detailValues[selectedNodeId],
                node: selectedContext.node,
                onClose: ()=>setSelectedNodeId(null),
                onSave: handleSaveDetails,
                priorValue: priorValues[selectedNodeId] ?? ""
            }, selectedNodeId, false, {
                fileName: "[project]/src/components/survey/SurveyCard.tsx",
                lineNumber: 196,
                columnNumber: 9
            }, this) : null
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/survey/SurveyCard.tsx",
        lineNumber: 156,
        columnNumber: 5
    }, this);
}
_s(SurveyCard, "TaDNfBAhA5xCcOezKvp8SsB6Wf8=");
_c = SurveyCard;
var _c;
__turbopack_context__.k.register(_c, "SurveyCard");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/survey/SurveyFooterActions.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "SurveyFooterActions",
    ()=>SurveyFooterActions
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$left$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowLeft$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/arrow-left.js [app-client] (ecmascript) <export default as ArrowLeft>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$right$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowRight$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/arrow-right.js [app-client] (ecmascript) <export default as ArrowRight>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$save$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Save$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/save.js [app-client] (ecmascript) <export default as Save>");
;
;
function SurveyFooterActions({ continueLabel = "Save & continue", onBack, onContinue, onExit, onSaveLater, savedMessage, showBack = true }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "sticky bottom-0 z-20 -mx-10 mt-8 border-t border-[#E5E7EB] bg-[#F5F6F8] px-10 py-4 max-md:-mx-5 max-md:px-5",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex items-center justify-between gap-4 max-md:flex-col max-md:items-stretch",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex items-center gap-3 max-sm:flex-wrap",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            className: "inline-flex h-11 items-center gap-2 rounded-lg border border-[#E5E7EB] bg-white px-5 text-[13px] font-semibold text-[#5F6368] shadow-sm transition hover:bg-[#F8FAFC]",
                            onClick: onSaveLater,
                            type: "button",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$save$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Save$3e$__["Save"], {
                                    className: "h-4 w-4",
                                    strokeWidth: 1.8
                                }, void 0, false, {
                                    fileName: "[project]/src/components/survey/SurveyFooterActions.tsx",
                                    lineNumber: 31,
                                    columnNumber: 13
                                }, this),
                                "Save & Continue Later"
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/survey/SurveyFooterActions.tsx",
                            lineNumber: 26,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            className: "h-11 rounded-lg border border-[#E5E7EB] bg-white px-5 text-[13px] font-semibold text-[#5F6368] shadow-sm transition hover:bg-[#F8FAFC]",
                            onClick: onExit,
                            type: "button",
                            children: "Exit"
                        }, void 0, false, {
                            fileName: "[project]/src/components/survey/SurveyFooterActions.tsx",
                            lineNumber: 34,
                            columnNumber: 11
                        }, this),
                        savedMessage ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "text-[12px] font-medium text-[#15803D]",
                            children: savedMessage
                        }, void 0, false, {
                            fileName: "[project]/src/components/survey/SurveyFooterActions.tsx",
                            lineNumber: 42,
                            columnNumber: 13
                        }, this) : null
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/survey/SurveyFooterActions.tsx",
                    lineNumber: 25,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex items-center justify-end gap-3 max-sm:justify-start",
                    children: [
                        showBack ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            className: "inline-flex h-11 items-center gap-2 rounded-lg border border-[#E5E7EB] bg-white px-5 text-[13px] font-semibold text-[#111827] shadow-sm transition hover:bg-[#F8FAFC]",
                            onClick: onBack,
                            type: "button",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$left$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowLeft$3e$__["ArrowLeft"], {
                                    className: "h-4 w-4",
                                    strokeWidth: 1.8
                                }, void 0, false, {
                                    fileName: "[project]/src/components/survey/SurveyFooterActions.tsx",
                                    lineNumber: 55,
                                    columnNumber: 15
                                }, this),
                                "Back"
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/survey/SurveyFooterActions.tsx",
                            lineNumber: 50,
                            columnNumber: 13
                        }, this) : null,
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            className: "inline-flex h-11 items-center gap-2 rounded-lg bg-[#D94F00] px-6 text-[13px] font-semibold text-white shadow-sm transition hover:bg-[#B94700]",
                            onClick: onContinue,
                            type: "button",
                            children: [
                                continueLabel,
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$right$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowRight$3e$__["ArrowRight"], {
                                    className: "h-4 w-4",
                                    strokeWidth: 1.8
                                }, void 0, false, {
                                    fileName: "[project]/src/components/survey/SurveyFooterActions.tsx",
                                    lineNumber: 65,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/survey/SurveyFooterActions.tsx",
                            lineNumber: 59,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/survey/SurveyFooterActions.tsx",
                    lineNumber: 48,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/survey/SurveyFooterActions.tsx",
            lineNumber: 24,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/components/survey/SurveyFooterActions.tsx",
        lineNumber: 23,
        columnNumber: 5
    }, this);
}
_c = SurveyFooterActions;
var _c;
__turbopack_context__.k.register(_c, "SurveyFooterActions");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/survey/SurveyHeader.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "SurveyHeader",
    ()=>SurveyHeader
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Circle$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/circle.js [app-client] (ecmascript) <export default as Circle>");
;
;
function SurveyHeader() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("header", {
        className: "flex items-start justify-between gap-4",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                        className: "text-[24px] font-semibold leading-8 tracking-normal text-[#07111f]",
                        children: "Annual Labour & Cost Survey"
                    }, void 0, false, {
                        fileName: "[project]/src/components/survey/SurveyHeader.tsx",
                        lineNumber: 7,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "mt-1 text-[14px] leading-5 text-survey-muted",
                        children: "FY26 · Territory: UK"
                    }, void 0, false, {
                        fileName: "[project]/src/components/survey/SurveyHeader.tsx",
                        lineNumber: 10,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/survey/SurveyHeader.tsx",
                lineNumber: 6,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "mt-2 inline-flex h-9 items-center gap-2 rounded-full bg-[#EEF7FF] px-4 text-[14px] font-semibold text-[#5A718A]",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Circle$3e$__["Circle"], {
                        className: "h-4 w-4 fill-transparent stroke-[#7D96B1]",
                        strokeWidth: 2
                    }, void 0, false, {
                        fileName: "[project]/src/components/survey/SurveyHeader.tsx",
                        lineNumber: 16,
                        columnNumber: 9
                    }, this),
                    "Auto-save on"
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/survey/SurveyHeader.tsx",
                lineNumber: 15,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/survey/SurveyHeader.tsx",
        lineNumber: 5,
        columnNumber: 5
    }, this);
}
_c = SurveyHeader;
var _c;
__turbopack_context__.k.register(_c, "SurveyHeader");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/survey/SurveyStepper.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "SurveyStepper",
    ()=>SurveyStepper
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$check$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Check$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/check.js [app-client] (ecmascript) <export default as Check>");
;
;
const steps = [
    {
        id: 1,
        label: "Capability Review"
    },
    {
        id: 2,
        label: "Working Data"
    },
    {
        id: 3,
        label: "Review & Submit"
    }
];
function SurveyStepper({ currentStep }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("nav", {
        "aria-label": "Survey progress",
        className: "my-7 flex items-center",
        children: steps.map((step, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex min-w-0 flex-1 items-center last:flex-none",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex shrink-0 items-center gap-3",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: [
                                    "flex h-9 w-9 items-center justify-center rounded-full text-[14px] font-semibold",
                                    step.id < currentStep ? "bg-[#16A34A] text-white" : step.id === currentStep ? "bg-survey-orange text-white shadow-[0_0_0_3px_rgba(234,88,12,0.11)]" : "bg-survey-step text-[#66809B]"
                                ].join(" "),
                                children: step.id < currentStep ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$check$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Check$3e$__["Check"], {
                                    className: "h-4.5 w-4.5",
                                    strokeWidth: 2.7
                                }, void 0, false, {
                                    fileName: "[project]/src/components/survey/SurveyStepper.tsx",
                                    lineNumber: 33,
                                    columnNumber: 17
                                }, this) : step.id
                            }, void 0, false, {
                                fileName: "[project]/src/components/survey/SurveyStepper.tsx",
                                lineNumber: 22,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: [
                                    "whitespace-nowrap text-[14px] leading-5",
                                    step.id === currentStep ? "font-semibold text-[#111827]" : "font-medium text-[#52616F]"
                                ].join(" "),
                                children: step.label
                            }, void 0, false, {
                                fileName: "[project]/src/components/survey/SurveyStepper.tsx",
                                lineNumber: 38,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/survey/SurveyStepper.tsx",
                        lineNumber: 21,
                        columnNumber: 11
                    }, this),
                    index < steps.length - 1 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: [
                            "mx-6 h-px min-w-10 flex-1",
                            step.id < currentStep ? "bg-[#16A34A]" : "bg-[#DDE6F0]"
                        ].join(" ")
                    }, void 0, false, {
                        fileName: "[project]/src/components/survey/SurveyStepper.tsx",
                        lineNumber: 51,
                        columnNumber: 13
                    }, this) : null
                ]
            }, step.id, true, {
                fileName: "[project]/src/components/survey/SurveyStepper.tsx",
                lineNumber: 17,
                columnNumber: 9
            }, this))
    }, void 0, false, {
        fileName: "[project]/src/components/survey/SurveyStepper.tsx",
        lineNumber: 15,
        columnNumber: 5
    }, this);
}
_c = SurveyStepper;
var _c;
__turbopack_context__.k.register(_c, "SurveyStepper");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/survey/SurveyTabs.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "SurveyTabs",
    ()=>SurveyTabs
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
;
function SurveyTabs({ activeTab, tabs }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "border-b border-survey-border px-5 pt-[19px]",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex h-[34px] items-end gap-7",
            children: tabs.map((tab)=>{
                const isActive = tab.id === activeTab;
                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                    className: [
                        "relative h-full whitespace-nowrap px-0 text-[12px] leading-8 transition-colors",
                        isActive ? "font-medium text-[#C2410C]" : "text-[#4B5563]"
                    ].join(" "),
                    type: "button",
                    children: [
                        tab.label,
                        isActive ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "absolute inset-x-0 bottom-[-1px] h-px bg-survey-orange"
                        }, void 0, false, {
                            fileName: "[project]/src/components/survey/SurveyTabs.tsx",
                            lineNumber: 26,
                            columnNumber: 17
                        }, this) : null
                    ]
                }, tab.id, true, {
                    fileName: "[project]/src/components/survey/SurveyTabs.tsx",
                    lineNumber: 16,
                    columnNumber: 13
                }, this);
            })
        }, void 0, false, {
            fileName: "[project]/src/components/survey/SurveyTabs.tsx",
            lineNumber: 11,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/components/survey/SurveyTabs.tsx",
        lineNumber: 10,
        columnNumber: 5
    }, this);
}
_c = SurveyTabs;
var _c;
__turbopack_context__.k.register(_c, "SurveyTabs");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/survey/surveyMath.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "calculateVariance",
    ()=>calculateVariance,
    "formatVariance",
    ()=>formatVariance,
    "needsCommentary",
    ()=>needsCommentary
]);
function toNumber(value) {
    if (typeof value === "number") {
        return value;
    }
    const parsed = Number.parseFloat(value ?? "");
    return Number.isFinite(parsed) ? parsed : null;
}
function calculateVariance(priorValue = 0, currentValue) {
    const prior = toNumber(priorValue);
    const current = typeof currentValue === "number" ? currentValue : Number.parseFloat(currentValue);
    if (prior === null || !Number.isFinite(current) || prior === 0) {
        return null;
    }
    return (current - prior) / prior * 100;
}
function needsCommentary(priorValue, currentValue) {
    const variance = calculateVariance(priorValue, currentValue);
    return variance !== null && Math.abs(variance) > 15;
}
function formatVariance(variance) {
    if (variance === null) {
        return "-";
    }
    const prefix = variance > 0 ? "+" : "";
    return `${prefix}${variance.toFixed(1)}%`;
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/survey/surveyState.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "collectInitialWorkingState",
    ()=>collectInitialWorkingState,
    "findSelectedContext",
    ()=>findSelectedContext,
    "parseFormNumber",
    ()=>parseFormNumber
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$surveyData$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/data/surveyData.ts [app-client] (ecmascript)");
;
function collectInitialWorkingState(nodes = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$surveyData$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["surveyData"]) {
    const priorValues = {};
    const currentValues = {};
    const commentaryValues = {};
    const detailValues = {};
    const expanded = {};
    const visit = (node)=>{
        if (node.prior !== undefined) {
            priorValues[node.id] = node.prior.toFixed(1);
        }
        if (node.current !== undefined) {
            currentValues[node.id] = node.current.toFixed(1);
        }
        if (node.commentary !== undefined) {
            commentaryValues[node.id] = node.commentary;
        }
        if (node.level === 3) {
            const current = node.current?.toFixed(1) ?? "";
            const commentary = node.commentary ?? "";
            detailValues[node.id] = {
                annualBudget: node.annualBudget ?? node.current ?? 0,
                commentary,
                current,
                deploymentModel: node.deploymentModel ?? "Hybrid",
                expectedSavings: node.expectedSavings ?? 0,
                hostingType: node.hostingType ?? "IaaS",
                riskLevel: node.riskLevel ?? "Medium",
                status: node.status ?? "In Production",
                strategicTechnology: node.strategicTechnology ?? false
            };
        }
        if (node.children?.length) {
            expanded[node.id] = true;
            node.children.forEach(visit);
        }
    };
    nodes.forEach(visit);
    return {
        priorValues,
        currentValues,
        commentaryValues,
        detailValues,
        expanded
    };
}
function findSelectedContext(nodes, id, parents = [
    "Core Technology"
]) {
    if (!id) {
        return null;
    }
    for (const node of nodes){
        if (node.id === id && node.level === 3) {
            return {
                breadcrumb: parents,
                node
            };
        }
        if (node.children?.length) {
            const found = findSelectedContext(node.children, id, [
                ...parents,
                node.name
            ]);
            if (found) {
                return found;
            }
        }
    }
    return null;
}
function parseFormNumber(value, fallback) {
    const parsed = Number.parseFloat(value);
    return Number.isFinite(parsed) ? parsed : fallback;
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/data/capabilityReviewData.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "capabilityReviewData",
    ()=>capabilityReviewData
]);
const capabilityReviewData = [
    {
        id: "infrastructure-cloud",
        name: "Infrastructure & Cloud",
        description: "Compute, network, hosting, end-user compute",
        required: true
    },
    {
        id: "applications-software",
        name: "Applications & Software",
        description: "SaaS, enterprise platforms, bespoke",
        required: true
    },
    {
        id: "data-ai",
        name: "Data & AI",
        description: "Data platforms, analytics, AI services"
    },
    {
        id: "security-risk",
        name: "Security & Risk",
        description: "Identity, threat, compliance",
        required: true
    },
    {
        id: "service-support",
        name: "Service & Support",
        description: "Service desk, managed services"
    },
    {
        id: "emerging-technology",
        name: "Emerging Technology",
        description: "Innovation pilots, R&D spend"
    }
];
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/data/surveyData.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "surveyData",
    ()=>surveyData,
    "surveyTabs",
    ()=>surveyTabs
]);
const surveyTabs = [
    {
        id: "core-technology",
        label: "Core Technology"
    },
    {
        id: "business-line",
        label: "Business Line"
    },
    {
        id: "business-services",
        label: "Business Services"
    }
];
const surveyData = [
    {
        id: "infrastructure-cloud",
        name: "Infrastructure & Cloud",
        level: 1,
        children: [
            {
                id: "compute-hosting",
                name: "Compute & Hosting",
                level: 2,
                children: [
                    {
                        id: "public-cloud",
                        name: "Public cloud (IaaS/PaaS)",
                        level: 3,
                        prior: 22.4,
                        current: 24.8,
                        commentary: "",
                        deploymentModel: "Multi-cloud",
                        hostingType: "IaaS",
                        strategicTechnology: true,
                        status: "In Production",
                        annualBudget: 28.0,
                        expectedSavings: 5.5,
                        riskLevel: "Low",
                        completion: "2/3"
                    },
                    {
                        id: "private-on-prem",
                        name: "Private / on-prem hosting",
                        level: 3,
                        prior: 14.1,
                        current: 11.6,
                        commentary: "",
                        deploymentModel: "Private cloud",
                        hostingType: "On-prem",
                        strategicTechnology: false,
                        status: "In Production",
                        annualBudget: 15.0,
                        expectedSavings: 2.4,
                        riskLevel: "Medium",
                        completion: "1/3"
                    },
                    {
                        id: "container-orchestration",
                        name: "Container & orchestration",
                        level: 3,
                        prior: 4.2,
                        current: 5.9,
                        commentary: "",
                        deploymentModel: "Hybrid",
                        hostingType: "PaaS",
                        strategicTechnology: true,
                        status: "Pilot",
                        annualBudget: 6.3,
                        expectedSavings: 1.1,
                        riskLevel: "Medium",
                        completion: "1/3"
                    }
                ]
            },
            {
                id: "network-connectivity",
                name: "Network & Connectivity",
                level: 2,
                children: [
                    {
                        id: "wan-sdwan",
                        name: "WAN / SD-WAN",
                        level: 3,
                        prior: 9.8,
                        current: 9.2,
                        commentary: "",
                        deploymentModel: "Hybrid",
                        hostingType: "Managed network",
                        strategicTechnology: false,
                        status: "In Production",
                        annualBudget: 10.5,
                        expectedSavings: 1.8,
                        riskLevel: "Low",
                        completion: "3/3"
                    },
                    {
                        id: "internet-edge",
                        name: "Internet & edge",
                        level: 3,
                        prior: 3.1,
                        current: 3.4,
                        commentary: "",
                        deploymentModel: "Public cloud",
                        hostingType: "Edge",
                        strategicTechnology: true,
                        status: "In Production",
                        annualBudget: 3.8,
                        expectedSavings: 0.7,
                        riskLevel: "Medium",
                        completion: "2/3"
                    }
                ]
            }
        ]
    },
    {
        id: "applications-software",
        name: "Applications & Software",
        level: 1,
        children: [
            {
                id: "enterprise-platforms",
                name: "Enterprise Platforms",
                level: 2,
                children: [
                    {
                        id: "application-integration-layer",
                        name: "Application integration layer",
                        level: 3,
                        prior: 8.4,
                        current: 10.7,
                        commentary: "",
                        deploymentModel: "Hybrid",
                        hostingType: "SaaS",
                        strategicTechnology: true,
                        status: "In Production",
                        annualBudget: 11.2,
                        expectedSavings: 1.9,
                        riskLevel: "Medium",
                        completion: "1/3"
                    }
                ]
            }
        ]
    },
    {
        id: "data-ai",
        name: "Data & AI",
        level: 1,
        children: [
            {
                id: "data-platforms",
                name: "Data Platforms",
                level: 2,
                children: [
                    {
                        id: "data-extraction-tooling",
                        name: "Data extraction tooling",
                        level: 3,
                        prior: 5.3,
                        current: 7.4,
                        commentary: "",
                        deploymentModel: "Multi-cloud",
                        hostingType: "PaaS",
                        strategicTechnology: true,
                        status: "In Production",
                        annualBudget: 7.8,
                        expectedSavings: 1.2,
                        riskLevel: "Medium",
                        completion: "1/3"
                    },
                    {
                        id: "analytics-platform",
                        name: "Analytics platform",
                        level: 3,
                        prior: 6.5,
                        current: 6.9,
                        commentary: "",
                        deploymentModel: "Public cloud",
                        hostingType: "SaaS",
                        strategicTechnology: true,
                        status: "In Production",
                        annualBudget: 7.1,
                        expectedSavings: 1.0,
                        riskLevel: "Low",
                        completion: "3/3"
                    }
                ]
            }
        ]
    },
    {
        id: "security-risk",
        name: "Security & Risk",
        level: 1,
        children: [
            {
                id: "identity-access",
                name: "Identity & Access",
                level: 2,
                children: [
                    {
                        id: "iam-platform",
                        name: "IAM platform",
                        level: 3,
                        prior: 6.0,
                        current: 7.9,
                        commentary: "",
                        deploymentModel: "Multi-cloud",
                        hostingType: "SaaS",
                        strategicTechnology: true,
                        status: "In Production",
                        annualBudget: 8.4,
                        expectedSavings: 1.6,
                        riskLevel: "High",
                        completion: "1/3"
                    }
                ]
            }
        ]
    },
    {
        id: "service-support",
        name: "Service & Support",
        level: 1,
        children: [
            {
                id: "service-operations",
                name: "Service Operations",
                level: 2,
                children: [
                    {
                        id: "self-service-automation",
                        name: "Self-service & automation",
                        level: 3,
                        prior: 4.4,
                        current: 6.2,
                        commentary: "",
                        deploymentModel: "Hybrid",
                        hostingType: "SaaS",
                        strategicTechnology: true,
                        status: "Pilot",
                        annualBudget: 6.6,
                        expectedSavings: 2.1,
                        riskLevel: "Medium",
                        completion: "1/3"
                    },
                    {
                        id: "grc-tooling",
                        name: "GRC tooling",
                        level: 3,
                        prior: 3.3,
                        current: 3.2,
                        commentary: "",
                        deploymentModel: "Private cloud",
                        hostingType: "SaaS",
                        strategicTechnology: false,
                        status: "In Production",
                        annualBudget: 3.5,
                        expectedSavings: 0.4,
                        riskLevel: "Low",
                        completion: "3/3"
                    }
                ]
            }
        ]
    }
];
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=src_09qf2d5._.js.map