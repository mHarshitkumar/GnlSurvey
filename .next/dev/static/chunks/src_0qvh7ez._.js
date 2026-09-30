(globalThis["TURBOPACK"] || (globalThis["TURBOPACK"] = [])).push([typeof document === "object" ? document.currentScript : undefined,
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
function CapabilitySection({ currentValues, priorValues, expanded, node, selectedNodeId, commentaryValues, onCommentaryChange, onCurrentChange, onPriorChange, onSelectNode, onToggle }) {
    const isParent = hasChildren(node);
    const isOpen = expanded[node.id] ?? true;
    if (node.level === 3) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$survey$2f$DataRow$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DataRow"], {
            commentary: commentaryValues[node.id] ?? "",
            currentValue: currentValues[node.id] ?? "",
            isSelected: selectedNodeId === node.id,
            node: node,
            onCommentaryChange: onCommentaryChange,
            onCurrentChange: onCurrentChange,
            onPriorChange: onPriorChange,
            onSelect: onSelectNode,
            priorValue: priorValues[node.id] ?? ""
        }, void 0, false, {
            fileName: "[project]/src/components/survey/CapabilitySection.tsx",
            lineNumber: 47,
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
                                lineNumber: 79,
                                columnNumber: 13
                            }, this) : null,
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "truncate",
                                children: node.name
                            }, void 0, false, {
                                fileName: "[project]/src/components/survey/CapabilitySection.tsx",
                                lineNumber: 87,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/survey/CapabilitySection.tsx",
                        lineNumber: 72,
                        columnNumber: 9
                    }, this),
                    node.level === 1 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "text-right text-[12px] font-normal text-[#111827]",
                                children: "Prior ($m)"
                            }, void 0, false, {
                                fileName: "[project]/src/components/survey/CapabilitySection.tsx",
                                lineNumber: 92,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "text-center text-[12px] font-normal text-[#111827]",
                                children: "Current ($m)"
                            }, void 0, false, {
                                fileName: "[project]/src/components/survey/CapabilitySection.tsx",
                                lineNumber: 95,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "text-right text-[12px] font-normal text-[#111827]",
                                children: "Variance"
                            }, void 0, false, {
                                fileName: "[project]/src/components/survey/CapabilitySection.tsx",
                                lineNumber: 98,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/survey/CapabilitySection.tsx",
                        lineNumber: 91,
                        columnNumber: 11
                    }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {}, void 0, false, {
                                fileName: "[project]/src/components/survey/CapabilitySection.tsx",
                                lineNumber: 104,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {}, void 0, false, {
                                fileName: "[project]/src/components/survey/CapabilitySection.tsx",
                                lineNumber: 105,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {}, void 0, false, {
                                fileName: "[project]/src/components/survey/CapabilitySection.tsx",
                                lineNumber: 106,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/survey/CapabilitySection.tsx",
                        lineNumber: 103,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/survey/CapabilitySection.tsx",
                lineNumber: 63,
                columnNumber: 7
            }, this),
            isOpen ? node.children?.map((child)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(CapabilitySection, {
                    commentaryValues: commentaryValues,
                    currentValues: currentValues,
                    expanded: expanded,
                    node: child,
                    priorValues: priorValues,
                    selectedNodeId: selectedNodeId,
                    onCommentaryChange: onCommentaryChange,
                    onCurrentChange: onCurrentChange,
                    onPriorChange: onPriorChange,
                    onSelectNode: onSelectNode,
                    onToggle: onToggle
                }, child.id, false, {
                    fileName: "[project]/src/components/survey/CapabilitySection.tsx",
                    lineNumber: 113,
                    columnNumber: 13
                }, this)) : null
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/survey/CapabilitySection.tsx",
        lineNumber: 62,
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
function CapabilityTree({ currentValues, data, expanded, priorValues, selectedNodeId, commentaryValues, onCommentaryChange, onCurrentChange, onPriorChange, onSelectNode, onToggle }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "pb-3",
        children: data.map((node)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$survey$2f$CapabilitySection$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CapabilitySection"], {
                commentaryValues: commentaryValues,
                currentValues: currentValues,
                expanded: expanded,
                node: node,
                priorValues: priorValues,
                selectedNodeId: selectedNodeId,
                onCommentaryChange: onCommentaryChange,
                onCurrentChange: onCurrentChange,
                onPriorChange: onPriorChange,
                onSelectNode: onSelectNode,
                onToggle: onToggle
            }, node.id, false, {
                fileName: "[project]/src/components/survey/CapabilityTree.tsx",
                lineNumber: 34,
                columnNumber: 9
            }, this))
    }, void 0, false, {
        fileName: "[project]/src/components/survey/CapabilityTree.tsx",
        lineNumber: 32,
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
;
;
function CommentaryField({ value, onChange, maxLength, requiresCommentary = true }) {
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
                        lineNumber: 27,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        children: "Commentary required — variance exceeds ±15%"
                    }, void 0, false, {
                        fileName: "[project]/src/components/survey/CommentaryField.tsx",
                        lineNumber: 28,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/survey/CommentaryField.tsx",
                lineNumber: 26,
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
                lineNumber: 31,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/survey/CommentaryField.tsx",
        lineNumber: 17,
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
function DataRow({ node, priorValue, currentValue, commentary, isSelected, onCommentaryChange, onCurrentChange, onPriorChange, onSelect }) {
    const variance = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$survey$2f$surveyMath$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["calculateVariance"])(priorValue, currentValue);
    const requiresCommentary = variance !== null && Math.abs(variance) > 15;
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
                        lineNumber: 60,
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
                            lineNumber: 64,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/components/survey/DataRow.tsx",
                        lineNumber: 63,
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
                            lineNumber: 78,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/components/survey/DataRow.tsx",
                        lineNumber: 77,
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
                                lineNumber: 102,
                                columnNumber: 11
                            }, this),
                            requiresCommentary ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$triangle$2d$alert$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__AlertTriangle$3e$__["AlertTriangle"], {
                                className: "h-4 w-4 text-[#F97316]",
                                strokeWidth: 1.8
                            }, void 0, false, {
                                fileName: "[project]/src/components/survey/DataRow.tsx",
                                lineNumber: 104,
                                columnNumber: 13
                            }, this) : null
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/survey/DataRow.tsx",
                        lineNumber: 96,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/survey/DataRow.tsx",
                lineNumber: 40,
                columnNumber: 7
            }, this),
            requiresCommentary ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$survey$2f$CommentaryField$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CommentaryField"], {
                onChange: (value)=>onCommentaryChange(node.id, value),
                value: commentary
            }, void 0, false, {
                fileName: "[project]/src/components/survey/DataRow.tsx",
                lineNumber: 110,
                columnNumber: 9
            }, this) : null
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/survey/DataRow.tsx",
        lineNumber: 39,
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
"[project]/src/components/survey/L3DetailDrawer.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "L3DetailDrawer",
    ()=>L3DetailDrawer
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$down$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronDown$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/chevron-down.js [app-client] (ecmascript) <export default as ChevronDown>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$info$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Info$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/info.js [app-client] (ecmascript) <export default as Info>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/x.js [app-client] (ecmascript) <export default as X>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$survey$2f$CommentaryField$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/survey/CommentaryField.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$survey$2f$surveyMath$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/survey/surveyMath.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
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
function toDraft(currentValue, commentary, detail) {
    return {
        ...detail,
        current: currentValue,
        commentary,
        annualBudget: detail.annualBudget.toFixed(1),
        expectedSavings: detail.expectedSavings.toFixed(1)
    };
}
function FieldLabel({ children, required = false }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
        className: "mb-1.5 flex items-center gap-1.5 text-[11px] font-semibold leading-4 text-[#24324B]",
        children: [
            children,
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$info$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Info$3e$__["Info"], {
                className: "h-3.5 w-3.5 text-[#8191AC]",
                strokeWidth: 2
            }, void 0, false, {
                fileName: "[project]/src/components/survey/L3DetailDrawer.tsx",
                lineNumber: 49,
                columnNumber: 7
            }, this),
            required ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                className: "text-[#EA580C]",
                children: "*"
            }, void 0, false, {
                fileName: "[project]/src/components/survey/L3DetailDrawer.tsx",
                lineNumber: 50,
                columnNumber: 19
            }, this) : null
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/survey/L3DetailDrawer.tsx",
        lineNumber: 47,
        columnNumber: 5
    }, this);
}
_c = FieldLabel;
function SelectField({ label, onChange, options, required, value }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
        className: "block",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(FieldLabel, {
                required: required,
                children: label
            }, void 0, false, {
                fileName: "[project]/src/components/survey/L3DetailDrawer.tsx",
                lineNumber: 70,
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
                                lineNumber: 78,
                                columnNumber: 13
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/src/components/survey/L3DetailDrawer.tsx",
                        lineNumber: 72,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$down$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronDown$3e$__["ChevronDown"], {
                        "aria-hidden": "true",
                        className: "pointer-events-none absolute right-3 top-1/2 h-3.5 w-3.5 -translate-y-1/2 text-[#66758F]",
                        strokeWidth: 2
                    }, void 0, false, {
                        fileName: "[project]/src/components/survey/L3DetailDrawer.tsx",
                        lineNumber: 83,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/survey/L3DetailDrawer.tsx",
                lineNumber: 71,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/survey/L3DetailDrawer.tsx",
        lineNumber: 69,
        columnNumber: 5
    }, this);
}
_c1 = SelectField;
function CurrencyInput({ label, onChange, readOnly = false, required, value }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
        className: "block",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(FieldLabel, {
                required: required,
                children: label
            }, void 0, false, {
                fileName: "[project]/src/components/survey/L3DetailDrawer.tsx",
                lineNumber: 108,
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
                        lineNumber: 110,
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
                        lineNumber: 113,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/survey/L3DetailDrawer.tsx",
                lineNumber: 109,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/survey/L3DetailDrawer.tsx",
        lineNumber: 107,
        columnNumber: 5
    }, this);
}
_c2 = CurrencyInput;
function RadioGroup({ label, onChange, options, required, value }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("fieldset", {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(FieldLabel, {
                required: required,
                children: label
            }, void 0, false, {
                fileName: "[project]/src/components/survey/L3DetailDrawer.tsx",
                lineNumber: 142,
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
                                lineNumber: 158,
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
                                    lineNumber: 170,
                                    columnNumber: 17
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/components/survey/L3DetailDrawer.tsx",
                                lineNumber: 164,
                                columnNumber: 15
                            }, this),
                            option.label
                        ]
                    }, option.label, true, {
                        fileName: "[project]/src/components/survey/L3DetailDrawer.tsx",
                        lineNumber: 154,
                        columnNumber: 13
                    }, this);
                })
            }, void 0, false, {
                fileName: "[project]/src/components/survey/L3DetailDrawer.tsx",
                lineNumber: 143,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/survey/L3DetailDrawer.tsx",
        lineNumber: 141,
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
    const requiresCommentary = variance !== null && Math.abs(variance) > 15;
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
                lineNumber: 238,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("aside", {
                "aria-label": `${node.name} details`,
                "aria-modal": "true",
                className: "absolute inset-y-0 right-0 flex h-full w-full max-w-[560px] animate-[drawer-in_180ms_ease-out] flex-col border-l border-[#E5E7EB] bg-white shadow-[-12px_0_32px_rgba(15,23,42,0.12)]",
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
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "flex items-center gap-3",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "rounded-md border border-[#D7E8FF] bg-[#EEF7FF] px-2.5 py-1 text-[11px] font-semibold text-[#2563EB]",
                                                            children: "L3"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/survey/L3DetailDrawer.tsx",
                                                            lineNumber: 255,
                                                            columnNumber: 19
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                                            className: "truncate text-[18px] font-semibold leading-6 text-[#0B1328]",
                                                            children: node.name
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/survey/L3DetailDrawer.tsx",
                                                            lineNumber: 258,
                                                            columnNumber: 19
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/components/survey/L3DetailDrawer.tsx",
                                                    lineNumber: 254,
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
                                                                    lineNumber: 265,
                                                                    columnNumber: 23
                                                                }, this),
                                                                index < breadcrumb.length - 1 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                    children: ">"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/components/survey/L3DetailDrawer.tsx",
                                                                    lineNumber: 266,
                                                                    columnNumber: 56
                                                                }, this) : null
                                                            ]
                                                        }, item, true, {
                                                            fileName: "[project]/src/components/survey/L3DetailDrawer.tsx",
                                                            lineNumber: 264,
                                                            columnNumber: 21
                                                        }, this))
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/survey/L3DetailDrawer.tsx",
                                                    lineNumber: 262,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/survey/L3DetailDrawer.tsx",
                                            lineNumber: 253,
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
                                                lineNumber: 279,
                                                columnNumber: 17
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/survey/L3DetailDrawer.tsx",
                                            lineNumber: 272,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/survey/L3DetailDrawer.tsx",
                                    lineNumber: 252,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "grid grid-cols-3 gap-3",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(CurrencyInput, {
                                            label: "Prior ($m)",
                                            readOnly: true,
                                            value: priorValue
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/survey/L3DetailDrawer.tsx",
                                            lineNumber: 284,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(CurrencyInput, {
                                            label: "Current ($m)",
                                            onChange: (value)=>setDraftField("current", value),
                                            value: draft.current
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/survey/L3DetailDrawer.tsx",
                                            lineNumber: 289,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                            className: "block",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(FieldLabel, {
                                                    children: "Variance"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/survey/L3DetailDrawer.tsx",
                                                    lineNumber: 295,
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
                                                    lineNumber: 296,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/survey/L3DetailDrawer.tsx",
                                            lineNumber: 294,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/survey/L3DetailDrawer.tsx",
                                    lineNumber: 283,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "mt-5 overflow-hidden rounded-md",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$survey$2f$CommentaryField$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CommentaryField"], {
                                        maxLength: 500,
                                        onChange: (value)=>setDraftField("commentary", value),
                                        requiresCommentary: requiresCommentary,
                                        value: draft.commentary
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/survey/L3DetailDrawer.tsx",
                                        lineNumber: 310,
                                        columnNumber: 15
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/components/survey/L3DetailDrawer.tsx",
                                    lineNumber: 309,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "mt-5 grid grid-cols-2 gap-x-5 gap-y-5",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(SelectField, {
                                            label: "Deployment Model",
                                            onChange: (value)=>setDraftField("deploymentModel", value),
                                            options: deploymentModels,
                                            required: true,
                                            value: draft.deploymentModel
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/survey/L3DetailDrawer.tsx",
                                            lineNumber: 319,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(SelectField, {
                                            label: "Hosting Type",
                                            onChange: (value)=>setDraftField("hostingType", value),
                                            options: hostingTypes,
                                            required: true,
                                            value: draft.hostingType
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/survey/L3DetailDrawer.tsx",
                                            lineNumber: 326,
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
                                            value: draft.strategicTechnology
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/survey/L3DetailDrawer.tsx",
                                            lineNumber: 333,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(SelectField, {
                                            label: "Status",
                                            onChange: (value)=>setDraftField("status", value),
                                            options: statuses,
                                            required: true,
                                            value: draft.status
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/survey/L3DetailDrawer.tsx",
                                            lineNumber: 343,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(CurrencyInput, {
                                            label: "Annual Budget ($m)",
                                            onChange: (value)=>setDraftField("annualBudget", value),
                                            value: draft.annualBudget
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/survey/L3DetailDrawer.tsx",
                                            lineNumber: 350,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(CurrencyInput, {
                                            label: "Expected Savings ($m)",
                                            onChange: (value)=>setDraftField("expectedSavings", value),
                                            value: draft.expectedSavings
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/survey/L3DetailDrawer.tsx",
                                            lineNumber: 355,
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
                                                value: draft.riskLevel
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/survey/L3DetailDrawer.tsx",
                                                lineNumber: 361,
                                                columnNumber: 17
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/survey/L3DetailDrawer.tsx",
                                            lineNumber: 360,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/survey/L3DetailDrawer.tsx",
                                    lineNumber: 318,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/survey/L3DetailDrawer.tsx",
                            lineNumber: 251,
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
                                    lineNumber: 382,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    className: "h-9 rounded-md bg-[#EA580C] px-5 text-[12px] font-semibold text-white shadow-sm transition hover:bg-[#C2410C] focus:outline-none focus:ring-2 focus:ring-orange-200",
                                    type: "submit",
                                    children: "Save changes"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/survey/L3DetailDrawer.tsx",
                                    lineNumber: 389,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/survey/L3DetailDrawer.tsx",
                            lineNumber: 381,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/survey/L3DetailDrawer.tsx",
                    lineNumber: 250,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/survey/L3DetailDrawer.tsx",
                lineNumber: 244,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/survey/L3DetailDrawer.tsx",
        lineNumber: 237,
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
function collectInitialValues(nodes) {
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
function SurveyCard() {
    _s();
    const initialState = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "SurveyCard.useMemo[initialState]": ()=>collectInitialValues(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$surveyData$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["surveyData"])
    }["SurveyCard.useMemo[initialState]"], []);
    const [activeTab] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("core-technology");
    const [priorValues, setPriorValues] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(initialState.priorValues);
    const [currentValues, setCurrentValues] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(initialState.currentValues);
    const [commentaryValues, setCommentaryValues] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(initialState.commentaryValues);
    const [detailValues, setDetailValues] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(initialState.detailValues);
    const [expanded, setExpanded] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(initialState.expanded);
    const [selectedNodeId, setSelectedNodeId] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const selectedContext = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "SurveyCard.useMemo[selectedContext]": ()=>findSelectedContext(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$surveyData$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["surveyData"], selectedNodeId)
    }["SurveyCard.useMemo[selectedContext]"], [
        selectedNodeId
    ]);
    const handleToggle = (id)=>{
        setExpanded((previous)=>({
                ...previous,
                [id]: !(previous[id] ?? true)
            }));
    };
    const handleCurrentChange = (id, value)=>{
        setCurrentValues((previous)=>({
                ...previous,
                [id]: value
            }));
    };
    const handlePriorChange = (id, value)=>{
        setPriorValues((previous)=>({
                ...previous,
                [id]: value
            }));
    };
    const handleCommentaryChange = (id, value)=>{
        setCommentaryValues((previous)=>({
                ...previous,
                [id]: value
            }));
    };
    const handleSelectNode = (node)=>{
        if (node.level === 3) {
            setSelectedNodeId(node.id);
        }
    };
    const handleSaveDetails = (id, draft)=>{
        setCurrentValues((previous)=>({
                ...previous,
                [id]: draft.current
            }));
        setCommentaryValues((previous)=>({
                ...previous,
                [id]: draft.commentary
            }));
        setDetailValues((previous)=>{
            const existing = previous[id];
            return {
                ...previous,
                [id]: {
                    commentary: draft.commentary,
                    current: draft.current,
                    deploymentModel: draft.deploymentModel,
                    hostingType: draft.hostingType,
                    strategicTechnology: draft.strategicTechnology,
                    status: draft.status,
                    annualBudget: parseFormNumber(draft.annualBudget, existing?.annualBudget ?? 0),
                    expectedSavings: parseFormNumber(draft.expectedSavings, existing?.expectedSavings ?? 0),
                    riskLevel: draft.riskLevel
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
                                    lineNumber: 182,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/components/survey/SurveyCard.tsx",
                                lineNumber: 181,
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
                                        lineNumber: 185,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "mt-1 text-[11px] leading-4 text-[#374151]",
                                        children: "Enter current-year values. A warning appears when variance exceeds ±15%, and commentary becomes mandatory."
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/survey/SurveyCard.tsx",
                                        lineNumber: 188,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/survey/SurveyCard.tsx",
                                lineNumber: 184,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/survey/SurveyCard.tsx",
                        lineNumber: 180,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$survey$2f$SurveyTabs$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SurveyTabs"], {
                        activeTab: activeTab,
                        tabs: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$surveyData$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["surveyTabs"]
                    }, void 0, false, {
                        fileName: "[project]/src/components/survey/SurveyCard.tsx",
                        lineNumber: 194,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$survey$2f$CapabilityTree$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CapabilityTree"], {
                        commentaryValues: commentaryValues,
                        currentValues: currentValues,
                        data: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$surveyData$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["surveyData"],
                        expanded: expanded,
                        priorValues: priorValues,
                        selectedNodeId: selectedNodeId,
                        onCommentaryChange: handleCommentaryChange,
                        onCurrentChange: handleCurrentChange,
                        onPriorChange: handlePriorChange,
                        onSelectNode: handleSelectNode,
                        onToggle: handleToggle
                    }, void 0, false, {
                        fileName: "[project]/src/components/survey/SurveyCard.tsx",
                        lineNumber: 196,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/survey/SurveyCard.tsx",
                lineNumber: 179,
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
                lineNumber: 212,
                columnNumber: 9
            }, this) : null
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/survey/SurveyCard.tsx",
        lineNumber: 178,
        columnNumber: 5
    }, this);
}
_s(SurveyCard, "+OAg+aX5XVPZ92/37pmu1/Nb9J0=");
_c = SurveyCard;
var _c;
__turbopack_context__.k.register(_c, "SurveyCard");
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
    ()=>formatVariance
]);
function calculateVariance(prior = 0, currentValue) {
    const current = typeof currentValue === "number" ? currentValue : Number.parseFloat(currentValue);
    if (!Number.isFinite(current) || prior === 0) {
        return null;
    }
    return (current - prior) / prior * 100;
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
    }
];
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=src_0qvh7ez._.js.map