module.exports = {

"[externals]/ [external] (next/dist/compiled/next-server/app-page.runtime.dev.js, cjs)": (function(__turbopack_context__) {

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, m: module, e: exports, t: require } = __turbopack_context__;
{
const mod = __turbopack_external_require__("next/dist/compiled/next-server/app-page.runtime.dev.js");

module.exports = mod;
}}),
"[project]/lib/utils/utils.ts [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: require } = __turbopack_context__;
{
__turbopack_esm__({
    "ParseAllObjects": (()=>ParseAllObjects),
    "cn": (()=>cn),
    "createQueryString": (()=>createQueryString)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/clsx/dist/clsx.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$tailwind$2d$merge$2f$dist$2f$bundle$2d$mjs$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/tailwind-merge/dist/bundle-mjs.mjs [app-ssr] (ecmascript)");
;
;
function cn(...inputs) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$tailwind$2d$merge$2f$dist$2f$bundle$2d$mjs$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["twMerge"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["clsx"])(inputs));
}
function ParseAllObjects(json) {
    try {
        const jsonString = JSON.stringify(json);
        return JSON.parse(jsonString);
    } catch (error) {
        console.error("Error parsing JSON:", error);
        return null;
    }
}
const createQueryString = (name, value)=>{
    const params = new URLSearchParams();
    params.set(name, value);
    return params.toString();
};
}}),
"[project]/components/ui/tooltip.tsx [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: require } = __turbopack_context__;
{
__turbopack_esm__({
    "Tooltip": (()=>Tooltip),
    "TooltipContent": (()=>TooltipContent),
    "TooltipProvider": (()=>TooltipProvider),
    "TooltipTrigger": (()=>TooltipTrigger)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/lib/utils/utils.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$tooltip$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@radix-ui/react-tooltip/dist/index.mjs [app-ssr] (ecmascript)");
"use client";
;
;
;
;
const TooltipProvider = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$tooltip$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__.Provider;
const Tooltip = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$tooltip$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__.Root;
const TooltipTrigger = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$tooltip$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__.Trigger;
const TooltipContent = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__.forwardRef(({ className, sideOffset = 4, ...props }, ref)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$tooltip$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__.Content, {
        ref: ref,
        sideOffset: sideOffset,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("z-50 overflow-hidden rounded-md border bg-popover px-3 py-1.5 text-sm text-popover-foreground shadow-md animate-in fade-in-0 zoom-in-95 data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/components/ui/tooltip.tsx",
        lineNumber: 18,
        columnNumber: 3
    }, this));
TooltipContent.displayName = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$tooltip$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__.Content.displayName;
;
}}),
"[externals]/ [external] (next/dist/server/app-render/action-async-storage.external.js, cjs)": (function(__turbopack_context__) {

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, m: module, e: exports, t: require } = __turbopack_context__;
{
const mod = __turbopack_external_require__("next/dist/server/app-render/action-async-storage.external.js");

module.exports = mod;
}}),
"[externals]/ [external] (next/dist/server/app-render/work-unit-async-storage.external.js, cjs)": (function(__turbopack_context__) {

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, m: module, e: exports, t: require } = __turbopack_context__;
{
const mod = __turbopack_external_require__("next/dist/server/app-render/work-unit-async-storage.external.js");

module.exports = mod;
}}),
"[externals]/ [external] (next/dist/server/app-render/work-async-storage.external.js, cjs)": (function(__turbopack_context__) {

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, m: module, e: exports, t: require } = __turbopack_context__;
{
const mod = __turbopack_external_require__("next/dist/server/app-render/work-async-storage.external.js");

module.exports = mod;
}}),
"[project]/app/nav-item.tsx [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: require } = __turbopack_context__;
{
__turbopack_esm__({
    "NavItem": (()=>NavItem)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$tooltip$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/components/ui/tooltip.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/clsx/dist/clsx.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/link.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/navigation.js [app-ssr] (ecmascript)");
'use client';
;
;
;
;
;
function NavItem({ href, label, children }) {
    const pathname = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["usePathname"])();
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$tooltip$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Tooltip"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$tooltip$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["TooltipTrigger"], {
                asChild: true,
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                    href: href,
                    className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])('flex h-9 w-9 items-center justify-center rounded-lg text-muted-foreground transition-colors hover:text-foreground md:h-8 md:w-8', {
                        'bg-accent text-black': pathname === href
                    }),
                    children: [
                        children,
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "sr-only",
                            children: label
                        }, void 0, false, {
                            fileName: "[project]/app/nav-item.tsx",
                            lineNumber: 36,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/app/nav-item.tsx",
                    lineNumber: 26,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/app/nav-item.tsx",
                lineNumber: 25,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$tooltip$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["TooltipContent"], {
                side: "right",
                children: label
            }, void 0, false, {
                fileName: "[project]/app/nav-item.tsx",
                lineNumber: 39,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/app/nav-item.tsx",
        lineNumber: 24,
        columnNumber: 5
    }, this);
}
}}),
"[project]/lib/provider/providers.tsx [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: require } = __turbopack_context__;
{
__turbopack_esm__({
    "default": (()=>Providers)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$tooltip$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/components/ui/tooltip.tsx [app-ssr] (ecmascript)");
'use client';
;
;
function Providers({ children }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$tooltip$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["TooltipProvider"], {
        children: children
    }, void 0, false, {
        fileName: "[project]/lib/provider/providers.tsx",
        lineNumber: 6,
        columnNumber: 10
    }, this);
}
}}),
"[project]/lib/app.slice.ts [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: require } = __turbopack_context__;
{
__turbopack_esm__({
    "createAppSlice": (()=>createAppSlice)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$reduxjs$2f$toolkit$2f$dist$2f$redux$2d$toolkit$2e$modern$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_import__("[project]/node_modules/@reduxjs/toolkit/dist/redux-toolkit.modern.mjs [app-ssr] (ecmascript) <locals>");
;
const createAppSlice = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$reduxjs$2f$toolkit$2f$dist$2f$redux$2d$toolkit$2e$modern$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["buildCreateSlice"])({
    creators: {
        asyncThunk: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$reduxjs$2f$toolkit$2f$dist$2f$redux$2d$toolkit$2e$modern$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["asyncThunkCreator"]
    }
});
}}),
"[project]/lib/data/documents.json (json)": ((__turbopack_context__) => {

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, t: require } = __turbopack_context__;
{
__turbopack_export_value__(JSON.parse("[{\"filename\":\"IMG_6361.jpeg\",\"default_language\":\"jp\",\"en\":{\"type\":\"receipt\",\"vendor\":\"Charcoal Grilled Chicken Wadachi\",\"place\":\"Charcoal Grilled Chicken Wadachi\",\"item\":\"Charcoal Grilled Chicken Wadachi\",\"item_type\":\"meal\",\"qty\":1,\"date\":\"13/12/2001 00:00:00\",\"checkin_time\":\"13/12/2001 00:00:00\",\"checkout_time\":\"13/12/2001 00:00:00\",\"currency\":\"usd\",\"amount\":\"$ 5,100\"},\"jp\":{\"type\":\"receipt\",\"vendor\":\"炭火焼鳥 わ だ ち\",\"place\":\"炭火焼鳥 わ だ ち\",\"item\":\"炭火焼鳥 わ だ ち\",\"item_type\":\"meal\",\"qty\":1,\"date\":\"13/12/2001 00:00:00\",\"checkin_time\":\"13/12/2001 00:00:00\",\"checkout_time\":\"13/12/2001 00:00:00\",\"currency\":\"jpy\",\"amount\":\"¥ 5,100\"}},{\"filename\":\"IMG_6363.jpeg\",\"default_language\":\"jp\",\"en\":{\"type\":\"voucher\",\"vendor\":\"IMS24 Co., Ltd.\",\"place\":\"Ichimo Yokohama Minamisai Parking Lot\",\"item\":\"Parking Ticket\",\"item_type\":\"transportation\",\"qty\":1,\"date\":\"21/12/2007 00:00:00\",\"checkin_time\":\"21/12/2007 15:11:00\",\"checkout_time\":\"21/12/2007 15:20:00\",\"currency\":\"usd\",\"amount\":\"$ 440\"},\"jp\":{\"type\":\"voucher\",\"vendor\":\"イムズ 24 株式会社\",\"place\":\"一下横浜南幸駐車場\",\"item\":\"駐車場代として\",\"item_type\":\"transportation\",\"qty\":1,\"date\":\"21/12/2007 00:00:00\",\"checkin_time\":\"21/12/2007 15:11:00\",\"checkout_time\":\"21/12/2007 15:20:00\",\"currency\":\"jpy\",\"amount\":\"¥ 440\"}},{\"filename\":\"IMG_6365.jpeg\",\"default_language\":\"jp\",\"en\":{\"type\":\"receipt\",\"vendor\":\"Shokai Co., Ltd.\",\"place\":\"Dr. Drive Sunrich Koyasu Yokohama City Kanagawa Ward Koyasu Street\",\"item\":\"Tires Replacement Charges\",\"item_type\":\"expense\",\"qty\":1,\"date\":\"25/12/2013 00:00:00\",\"checkin_time\":\"25/12/2013 00:00:00\",\"checkout_time\":\"25/12/2013 00:00:00\",\"currency\":\"usd\",\"amount\":\"$ 8,000\"},\"jp\":{\"type\":\"receipt\",\"vendor\":\"株式会社商会\",\"place\":\"Dr.Drive サンリッチ子安 横浜市神奈川区子安通\",\"item\":\"スタッドレス交換代として\",\"item_type\":\"expense\",\"qty\":1,\"date\":\"25/12/2013 00:00:00\",\"checkin_time\":\"25/12/2013 00:00:00\",\"checkout_time\":\"25/12/2013 00:00:00\",\"currency\":\"jpy\",\"amount\":\"¥ 8,000\"}},{\"filename\":\"IMG_6366.jpeg\",\"default_language\":\"jp\",\"en\":{\"type\":\"receipt\",\"vendor\":\"Yutaka Co., Ltd.\",\"place\":\"Dr. Drive Sunrich Koyasu Yokohama City Kanagawa Ward Koyasu Street\",\"item\":\"Oil and Parts Replacement Charges\",\"item_type\":\"expense\",\"qty\":1,\"date\":\"08/11/2013 00:00:00\",\"checkin_time\":\"08/11/2013 00:00:00\",\"checkout_time\":\"08/11/2013 00:00:00\",\"currency\":\"usd\",\"amount\":\"$ 6,000\"},\"jp\":{\"type\":\"receipt\",\"vendor\":\"株式会社豊\",\"place\":\"Dr.Drive サンリッチ子安 横浜市神奈川区子安通\",\"item\":\"オイルエレメント交換代として\",\"item_type\":\"expense\",\"qty\":1,\"date\":\"08/11/2013 00:00:00\",\"checkin_time\":\"08/11/2013 00:00:00\",\"checkout_time\":\"08/11/2013 00:00:00\",\"currency\":\"jpy\",\"amount\":\"¥ 6,000\"}},{\"filename\":\"IMG_6367.jpeg\",\"default_language\":\"jp\",\"en\":{\"type\":\"voucher\",\"vendor\":\"Hotel Daiei\",\"place\":\"Ginza, Chuo Ward, Tokyo\",\"item\":\"Parking Ticket\",\"item_type\":\"transportation\",\"qty\":1,\"date\":\"06/11/2021 00:00:00\",\"checkin_time\":\"06/11/2021 00:00:00\",\"checkout_time\":\"06/11/2021 00:00:00\",\"currency\":\"usd\",\"amount\":\"$ 1,500\"},\"jp\":{\"type\":\"voucher\",\"vendor\":\"ホテルダイエー\",\"place\":\"東京都中央区銀座\",\"item\":\"駐車場代として\",\"item_type\":\"transportation\",\"qty\":1,\"date\":\"06/11/2021 00:00:00\",\"checkin_time\":\"06/11/2021 00:00:00\",\"checkout_time\":\"06/11/2021 00:00:00\",\"currency\":\"jpy\",\"amount\":\"¥ 1,500\"}},{\"filename\":\"IMG_6368.jpeg\",\"default_language\":\"jp\",\"en\":{\"type\":\"receipt\",\"vendor\":\"Quality Store\",\"place\":\"New Stage Yokohama Store\",\"item\":\"Kirite\",\"item_type\":\"expense\",\"qty\":10,\"date\":\"01/11/2021 00:00:00\",\"checkin_time\":\"01/11/2021 00:00:00\",\"checkout_time\":\"01/11/2021 00:00:00\",\"currency\":\"usd\",\"amount\":\"$ 100\"},\"jp\":{\"type\":\"receipt\",\"vendor\":\"Quality Store\",\"place\":\"ニューステージ横浜店\",\"item\":\"キツテ\",\"item_type\":\"expense\",\"qty\":10,\"date\":\"01/11/2021 00:00:00\",\"checkin_time\":\"01/11/2021 00:00:00\",\"checkout_time\":\"01/11/2021 00:00:00\",\"currency\":\"jpy\",\"amount\":\"¥ 100\"}},{\"filename\":\"IMG_6369.jpeg\",\"default_language\":\"jp\",\"en\":{\"type\":\"voucher\",\"vendor\":\"Coin Park Co., Ltd.\",\"place\":\"B - 979 Higashi-Kanagawa Station Building\",\"item\":\"Parking Ticket\",\"item_type\":\"transportation\",\"qty\":1,\"date\":\"04/11/2021 00:00:00\",\"checkin_time\":\"04/11/2021 12:16:00\",\"checkout_time\":\"04/11/2021 12:57:00\",\"currency\":\"usd\",\"amount\":\"$ 300\"},\"jp\":{\"type\":\"voucher\",\"vendor\":\"株コインパーク\",\"place\":\"B - 979 東神奈川駅ビル\",\"item\":\"駐車場代として\",\"item_type\":\"transportation\",\"qty\":1,\"date\":\"04/11/2021 00:00:00\",\"checkin_time\":\"04/11/2021 12:16:00\",\"checkout_time\":\"04/11/2021 12:57:00\",\"currency\":\"jpy\",\"amount\":\"¥ 300\"}},{\"filename\":\"IMG_6370.jpeg\",\"default_language\":\"jp\",\"en\":{\"type\":\"voucher\",\"vendor\":\"Nihon Kotsu Group\",\"place\":\"Keihin Hire Co., Ltd. Hodogaya Office\",\"item\":\"Parking Ticket\",\"item_type\":\"transportation\",\"qty\":1,\"date\":\"06/11/2021 00:00:00\",\"checkin_time\":\"06/11/2021 00:00:00\",\"checkout_time\":\"06/11/2021 00:00:00\",\"currency\":\"usd\",\"amount\":\"$ 1,700\"},\"jp\":{\"type\":\"voucher\",\"vendor\":\"日本交通グループ\",\"place\":\"京浜ハイヤー ( 株 ) 保土ヶ谷営業所\",\"item\":\"駐車場代として\",\"item_type\":\"transportation\",\"qty\":1,\"date\":\"06/11/2021 00:00:00\",\"checkin_time\":\"06/11/2021 00:00:00\",\"checkout_time\":\"06/11/2021 00:00:00\",\"currency\":\"jpy\",\"amount\":\"¥ 1,700\"}}]"));}}),
"[project]/lib/data/dbconfig.ts [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: require } = __turbopack_context__;
{
__turbopack_esm__({
    "DBConfig": (()=>DBConfig)
});
const DBConfig = {
    name: "docs_digitization",
    version: 1,
    invoiceTable: "invoice-table"
};
}}),
"[project]/lib/utils/indexeddb-helper.ts [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: require } = __turbopack_context__;
{
__turbopack_esm__({
    "useIndexedDB": (()=>useIndexedDB)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$data$2f$dbconfig$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/lib/data/dbconfig.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$moment$2f$moment$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/moment/moment.js [app-ssr] (ecmascript)");
;
;
const useIndexedDB = (databaseName, tableNames)=>{
    let db = null;
    let isDBConnecting = true;
    const initDB = ()=>{
        const request = indexedDB.open(databaseName, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$data$2f$dbconfig$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["DBConfig"].version);
        // Handle database upgrade
        request.onupgradeneeded = ()=>{
            const database = request.result;
            tableNames.forEach((tableName)=>{
                if (!database.objectStoreNames.contains(tableName)) {
                    let objectStore = database.createObjectStore(tableName, {
                        autoIncrement: true,
                        keyPath: "id"
                    });
                    objectStore.createIndex("imageIndex", "filename", {
                        unique: false
                    });
                    objectStore.createIndex("currencyIndex", "currency", {
                        unique: false
                    });
                // objectStore.createIndex("dateIndex", "date", { unique: false });
                // objectStore.createIndex("typeIndex", "type", { unique: false });
                // objectStore.createIndex("itemTypeIndex", "item_type", { unique: false });
                }
            });
        };
        // Handle successful database connection
        request.onsuccess = ()=>{
            console.info("Success initializing IndexedDB >> helper");
            db = request.result;
            isDBConnecting = false;
        };
        // Handle errors in database connection
        request.onerror = ()=>{
            console.error("Error initializing IndexedDB:", request.error);
            isDBConnecting = false;
        };
    };
    if (!db) {
        initDB();
    }
    // Helper function to get a transaction for a specific table
    const getTransaction = (tableName, mode)=>{
        if (!db) throw new Error("Database is not initialized");
        return db.transaction(tableName, mode).objectStore(tableName);
    };
    // Function to get a specific value from the table by ID
    const getValue = (tableName, id)=>{
        return new Promise((resolve, reject)=>{
            try {
                const store = getTransaction(tableName, "readonly");
                const request = store.get(id);
                request.onsuccess = ()=>resolve(request.result);
                request.onerror = ()=>reject(request.error);
            } catch (error) {
                reject(error);
            }
        });
    };
    // Function to get a specific value from the table by Filter
    const getValueByFilter = (tableName, fromDate, toDate, type, itemType)=>{
        return new Promise((resolve, reject)=>{
            try {
                const store = getTransaction(tableName, "readonly");
                const request = store.getAll();
                request.onsuccess = ()=>{
                    let result = request.result;
                    if (itemType != "") result = result.filter((data)=>data.item_type == itemType);
                    if (type != "") result = result.filter((data)=>data.type == type);
                    if (fromDate != null && toDate == null) {
                        console.log("FILTERS >> ", (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$moment$2f$moment$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])(fromDate, "DD/MM/YYYY hh:mm:ss").toDate());
                        result = result.filter((data)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$moment$2f$moment$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])(data.date).toDate() >= (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$moment$2f$moment$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])(fromDate).toDate());
                    } else if (fromDate == null && toDate != null) result = result.filter((data)=>data.date <= toDate);
                    else if (fromDate != null && toDate != null) result = result.filter((data)=>data.date >= fromDate && data.date <= toDate);
                    resolve(result);
                };
                request.onerror = ()=>reject(request.error);
            } catch (error) {
                reject(error);
            }
        });
    };
    // Function to get all values from a specific table
    const getAllValue = (tableName)=>{
        return new Promise((resolve, reject)=>{
            try {
                const store = getTransaction(tableName, "readonly");
                const request = store.getAll();
                request.onsuccess = ()=>resolve(request.result);
                request.onerror = ()=>reject(request.error);
            } catch (error) {
                reject(error);
            }
        });
    };
    // Function to insert or update a single value in a specific table
    const putValue = (tableName, value)=>{
        return new Promise((resolve, reject)=>{
            try {
                const store = getTransaction(tableName, "readwrite");
                const imageIndex = store.index("imageIndex");
                console.log("Find IMG NAME >> ", value.filename);
                const request = imageIndex.get(value.filename);
                request.onsuccess = ()=>{
                    const data = request.result;
                    console.log("FOUND >> ", request);
                    if (data) {
                        reject("Duplicate Data!");
                    } else {
                        const requestInsert = store.put(value);
                        requestInsert.onsuccess = ()=>resolve(requestInsert.result);
                        requestInsert.onerror = ()=>reject(requestInsert.error);
                    }
                };
            } catch (error) {
                reject(error);
            }
        });
    };
    // Function to insert or update multiple values in a specific table
    const putBulkValue = async (tableName, values)=>{
        try {
            const store = getTransaction(tableName, "readwrite");
            values.forEach((value)=>store.put(value));
            return getAllValue(tableName);
        } catch (error) {
            throw new Error("Bulk insert failed: " + error);
        }
    };
    // Function to update a specific value by ID in a specific table
    // const updateValue = ({
    //   tableName,
    //   id,
    //   newItem,
    // }: {
    //   tableName: string;
    //   id: number;
    //   newItem: any;
    // }) => {
    //   try {
    //     const store = getTransaction(tableName, "readwrite");
    //     const request = store.get(id);
    //     request.onsuccess = () => {
    //       const data = request.result;
    //       const updatedItem = data ? { ...data, ...newItem } : { id, newItem };
    //       store.put(updatedItem);
    //     };
    //   } catch (error) {
    //     console.error("Update value failed: ", error);
    //   }
    // };
    const updateValue = async (tableName, id, newItem)=>{
        return new Promise((resolve, reject)=>{
            try {
                const store = getTransaction(tableName, "readwrite");
                const request = store.get(id);
                request.onsuccess = ()=>{
                    const data = request.result;
                    const updatedItem = data ? {
                        ...data,
                        ...newItem
                    } : {
                        id,
                        newItem
                    };
                    const requestUpdate = store.put(updatedItem);
                    requestUpdate.onsuccess = ()=>resolve(requestUpdate.result);
                    requestUpdate.onerror = ()=>reject(requestUpdate.error);
                };
            } catch (error) {
                reject(error);
            }
        });
    };
    // Function to delete a specific value by ID from a specific table
    const deleteValue = (tableName, id)=>{
        try {
            const store = getTransaction(tableName, "readwrite");
            console.log("DELETE ID >> ", id);
            store.delete(id);
            return id;
        } catch (error) {
            console.error("Delete value failed: ", error);
            return null;
        }
    };
    // Function to delete all values from a specific table
    const deleteAll = (tableName)=>{
        try {
            const store = getTransaction(tableName, "readwrite");
            store.clear();
        } catch (error) {
            console.error("Delete all values failed: ", error);
        }
    };
    return {
        initDB,
        getValue,
        getValueByFilter,
        getAllValue,
        putValue,
        putBulkValue,
        updateValue,
        deleteValue,
        deleteAll,
        isDBConnecting
    };
};
}}),
"[project]/lib/features/document_ocr/document.slice.ts [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: require } = __turbopack_context__;
{
__turbopack_esm__({
    "deleteByID": (()=>deleteByID),
    "documentSlice": (()=>documentSlice),
    "getAllInvoices": (()=>getAllInvoices),
    "getInvoice": (()=>getInvoice),
    "resetStatus": (()=>resetStatus),
    "saveData": (()=>saveData),
    "selectData": (()=>selectData),
    "selectErrorMessage": (()=>selectErrorMessage),
    "selectItemList": (()=>selectItemList),
    "selectStatus": (()=>selectStatus),
    "updateData": (()=>updateData),
    "upload": (()=>upload)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$app$2e$slice$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/lib/app.slice.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$data$2f$documents$2e$json__$28$json$29$__ = __turbopack_import__("[project]/lib/data/documents.json (json)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2f$indexeddb$2d$helper$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/lib/utils/indexeddb-helper.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$data$2f$dbconfig$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/lib/data/dbconfig.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/lib/utils/utils.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2f$constants$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/lib/utils/constants.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$moment$2f$moment$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/moment/moment.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$reduxjs$2f$toolkit$2f$dist$2f$redux$2d$toolkit$2e$modern$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_import__("[project]/node_modules/@reduxjs/toolkit/dist/redux-toolkit.modern.mjs [app-ssr] (ecmascript) <locals>");
;
;
;
;
;
;
;
;
const dataInvoice = __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$data$2f$documents$2e$json__$28$json$29$__["default"];
const initialState = {
    data: null,
    itemList: null,
    errorMessage: "",
    status: "idle"
};
const { initDB, putValue, getValue, getValueByFilter, getAllValue, updateValue, deleteValue, isDBConnecting } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2f$indexeddb$2d$helper$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useIndexedDB"])(__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$data$2f$dbconfig$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["DBConfig"].name, [
    __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$data$2f$dbconfig$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["DBConfig"].invoiceTable
]);
const saveData = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$reduxjs$2f$toolkit$2f$dist$2f$redux$2d$toolkit$2e$modern$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["createAsyncThunk"])('saveData', async (formData)=>{
    const response = await putValue(__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$data$2f$dbconfig$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["DBConfig"].invoiceTable, formData.data);
    return response;
});
const updateData = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$reduxjs$2f$toolkit$2f$dist$2f$redux$2d$toolkit$2e$modern$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["createAsyncThunk"])('updateData', async (formData)=>{
    const response = await updateValue(__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$data$2f$dbconfig$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["DBConfig"].invoiceTable, Number(formData.id), formData.data);
    return response;
});
const getAllInvoices = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$reduxjs$2f$toolkit$2f$dist$2f$redux$2d$toolkit$2e$modern$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["createAsyncThunk"])('getAllInvoices', async (filterDate)=>{
    const response = await getValueByFilter(__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$data$2f$dbconfig$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["DBConfig"].invoiceTable, filterDate.fromDate, filterDate.toDate, filterDate.type, filterDate.itemType);
    // const response = await getAllValue(DBConfig.invoiceTable);
    return response;
});
const getInvoice = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$reduxjs$2f$toolkit$2f$dist$2f$redux$2d$toolkit$2e$modern$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["createAsyncThunk"])('getInvoice', async (id)=>{
    console.log("SELECTED EDIT ITEM in SLICE >>> ", id);
    const response = await getValue(__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$data$2f$dbconfig$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["DBConfig"].invoiceTable, Number(id));
    return response;
});
const documentSlice = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$app$2e$slice$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createAppSlice"])({
    name: "document",
    // `createSlice` will infer the state type from the `initialState` argument
    initialState,
    // The `reducers` field lets us define reducers and generate associated actions
    reducers: (create)=>({
            resetStatus: (state)=>{
                state.status = "idle";
                console.log("RESET STATUS >> ", state.status);
            },
            upload: (state, action)=>{
                // Redux Toolkit allows us to write "mutating" logic in reducers. It
                // doesn't actually mutate the state because it uses the Immer library,
                // which detects changes to a "draft state" and produces a brand new
                // immutable state based off those changes
                const { file, filename, language } = action.payload;
                // state.file = file;
                // state.filename = filename;
                let invoiceData = dataInvoice.find((item)=>{
                    return item.filename == filename;
                });
                const defaultLanguage = invoiceData.default_language;
                invoiceData = invoiceData[language == "" ? invoiceData.default_language : language];
                invoiceData.id = 0;
                invoiceData.file = file;
                invoiceData.filename = filename;
                invoiceData.default_language = language == "" ? defaultLanguage : language;
                if (invoiceData != null) {
                    invoiceData.date = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$moment$2f$moment$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])(invoiceData.date, "DD/MM/YYYY hh:mm:ss");
                    invoiceData.checkin_time = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$moment$2f$moment$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])(invoiceData.checkin_time, "DD/MM/YYYY hh:mm:ss");
                    invoiceData.checkout_time = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$moment$2f$moment$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])(invoiceData.checkout_time, "DD/MM/YYYY hh:mm:ss");
                }
                console.log("UPLOAD >>", invoiceData);
                state.data = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ParseAllObjects"])(invoiceData);
                state.data.amount = state.data.amount = state.data.default_language == "en" ? state.data.amount.slice(0, 1) + ' ' + (Number(state.data.amount.slice(2, state.data.amount.length).replace(/[\s,]/g, '')) * __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2f$constants$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["JPY_to_USD"]).toFixed(2).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",") : state.data.amount;
                state.status = "uploaded";
            },
            deleteByID: (state, action)=>{
                if (!isDBConnecting) initDB();
                const { id } = action.payload;
                deleteValue(__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$data$2f$dbconfig$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["DBConfig"].invoiceTable, Number(id));
                state.itemList = null;
                state.status = "deleted";
            }
        }),
    extraReducers (builder) {
        builder.addCase(saveData.pending, (state)=>{
            state.status = 'loading';
        }).addCase(saveData.fulfilled, (state, action)=>{
            if (action.payload != null && action.payload > 0) {
                state.itemList = null;
                state.status = "success";
            } else {
                state.status = "failed";
            }
        }).addCase(saveData.rejected, (state, action)=>{
            console.log("REJECT with ERROR >> ", action.error.message);
            state.errorMessage = action.error.message ? action.error.message : "";
            state.status = 'failed';
        }).addCase(updateData.pending, (state)=>{
            state.status = 'loading';
        }).addCase(updateData.fulfilled, (state, action)=>{
            console.log("UPD PAYLOAD >> ", action.payload);
            if (action.payload != null && action.payload > 0) {
                state.itemList = null;
                state.status = "success";
            } else {
                state.status = "failed";
            }
        }).addCase(updateData.rejected, (state, action)=>{
            state.status = 'failed';
            console.log("ERROR : ", action.payload);
        }).addCase(getAllInvoices.pending, (state)=>{
            state.status = 'loading';
        }).addCase(getAllInvoices.fulfilled, (state, action)=>{
            if (action.payload) {
                state.itemList = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ParseAllObjects"])(action.payload);
                state.status = 'loaded';
            }
        }).addCase(getAllInvoices.rejected, (state, action)=>{
            state.status = 'failed';
        }).addCase(getInvoice.pending, (state)=>{
            state.status = 'loading';
        }).addCase(getInvoice.fulfilled, (state, action)=>{
            console.log("SELECTED EDIT ITEM in SLICE >>> ", action.payload);
            if (action.payload) {
                state.data = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ParseAllObjects"])(action.payload);
                state.itemList = null;
                state.status = "edit";
            }
        }).addCase(getInvoice.rejected, (state, action)=>{
            state.status = 'failed';
        });
    },
    // You can define your selectors here. These selectors receive the slice
    // state as their first argument.
    selectors: {
        selectData: (document)=>document.data,
        selectItemList: (document)=>document.itemList,
        selectErrorMessage: (document)=>document.errorMessage,
        selectStatus: (document)=>document.status
    }
});
const { upload, deleteByID, resetStatus } = documentSlice.actions;
const { selectErrorMessage, selectData, selectItemList, selectStatus } = documentSlice.selectors;
}}),
"[project]/lib/features/document_ocr/dashboard.slice.ts [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: require } = __turbopack_context__;
{
__turbopack_esm__({
    "dashboardSlice": (()=>dashboardSlice),
    "getDashboardData": (()=>getDashboardData),
    "resetStatus": (()=>resetStatus),
    "selectData": (()=>selectData),
    "selectStatus": (()=>selectStatus)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$app$2e$slice$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/lib/app.slice.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2f$indexeddb$2d$helper$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/lib/utils/indexeddb-helper.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$data$2f$dbconfig$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/lib/data/dbconfig.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/lib/utils/utils.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$reduxjs$2f$toolkit$2f$dist$2f$redux$2d$toolkit$2e$modern$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_import__("[project]/node_modules/@reduxjs/toolkit/dist/redux-toolkit.modern.mjs [app-ssr] (ecmascript) <locals>");
;
;
;
;
;
const initialState = {
    data: {
        countMeal: 0,
        countTransportation: 0,
        countGeneral: 0,
        values: [],
        labels: []
    },
    status: "idle"
};
const { initDB, putValue, getValue, getValueByFilter, getAllValue, updateValue, deleteValue, isDBConnecting } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2f$indexeddb$2d$helper$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useIndexedDB"])(__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$data$2f$dbconfig$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["DBConfig"].name, [
    __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$data$2f$dbconfig$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["DBConfig"].invoiceTable
]);
let selectedCurrency = "jpy";
const getDashboardData = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$reduxjs$2f$toolkit$2f$dist$2f$redux$2d$toolkit$2e$modern$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["createAsyncThunk"])('getDashboardData', async (filterData)=>{
    console.log("Dashboard Slice");
    selectedCurrency = filterData.currency;
    const response = await getAllValue(__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$data$2f$dbconfig$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["DBConfig"].invoiceTable);
    return response;
});
const dashboardSlice = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$app$2e$slice$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createAppSlice"])({
    name: "dashboard",
    // `createSlice` will infer the state type from the `initialState` argument
    initialState,
    // The `reducers` field lets us define reducers and generate associated actions
    reducers: (create)=>({
            resetStatus: (state)=>{
                state.status = "idle";
                console.log("RESET STATUS IN SLICE >> ", state.status);
            }
        }),
    extraReducers (builder) {
        builder.addCase(getDashboardData.pending, (state)=>{
            state.status = 'loading';
        }).addCase(getDashboardData.fulfilled, (state, action)=>{
            let totalMeal = 0;
            let totalTransportation = 0;
            let totalGeneral = 0;
            let countMeal = 0;
            let countTransportation = 0;
            let countGeneral = 0;
            console.log("SELECTED CURRENCY >> ", selectedCurrency);
            if (action.payload) {
                const itemList = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ParseAllObjects"])(action.payload);
                if (itemList?.length) {
                    itemList?.map((invoice)=>{
                        if (invoice.item_type == "meal") {
                            countMeal++;
                            if (invoice.currency == selectedCurrency) totalMeal = totalMeal + Number(invoice.amount.slice(2, invoice.amount.length).replace(/[\s,]/g, ''));
                        } else if (invoice.item_type == "transportation") {
                            countTransportation++;
                            if (invoice.currency == selectedCurrency) totalTransportation = totalTransportation + Number(invoice.amount.slice(2, invoice.amount.length).replace(/[\s,]/g, ''));
                        } else if (invoice.item_type == "expense") {
                            countGeneral++;
                            if (invoice.currency == selectedCurrency) totalGeneral = totalGeneral + Number(invoice.amount.slice(2, invoice.amount.length).replace(/[\s,]/g, ''));
                        }
                    });
                }
            }
            state.data.labels = [];
            state.data.values = [];
            state.data.labels.push("Transportation");
            state.data.values.push(totalTransportation.toFixed(2));
            state.data.labels.push("Meal");
            state.data.values.push(totalMeal.toFixed(2));
            state.data.labels.push("General");
            state.data.values.push(totalGeneral.toFixed(2));
            state.data.countMeal = countMeal;
            state.data.countTransportation = countTransportation;
            state.data.countGeneral = countGeneral;
            state.status = 'success';
        }).addCase(getDashboardData.rejected, (state, action)=>{
            state.status = 'failed';
        });
    },
    // You can define your selectors here. These selectors receive the slice
    // state as their first argument.
    selectors: {
        selectData: (dashboard)=>dashboard.data,
        selectStatus: (dashboard)=>dashboard.status
    }
});
const { resetStatus } = dashboardSlice.actions;
const { selectData, selectStatus } = dashboardSlice.selectors;
}}),
"[project]/lib/store.ts [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: require } = __turbopack_context__;
{
__turbopack_esm__({
    "makeStore": (()=>makeStore)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$features$2f$document_ocr$2f$document$2e$slice$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/lib/features/document_ocr/document.slice.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$features$2f$document_ocr$2f$dashboard$2e$slice$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/lib/features/document_ocr/dashboard.slice.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$reduxjs$2f$toolkit$2f$dist$2f$redux$2d$toolkit$2e$modern$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_import__("[project]/node_modules/@reduxjs/toolkit/dist/redux-toolkit.modern.mjs [app-ssr] (ecmascript) <locals>");
;
;
;
// `combineSlices` automatically combines the reducers using
// their `reducerPath`s, therefore we no longer need to call `combineReducers`.
const rootReducer = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$reduxjs$2f$toolkit$2f$dist$2f$redux$2d$toolkit$2e$modern$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["combineSlices"])(__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$features$2f$document_ocr$2f$document$2e$slice$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["documentSlice"], __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$features$2f$document_ocr$2f$dashboard$2e$slice$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["dashboardSlice"]);
const makeStore = ()=>{
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$reduxjs$2f$toolkit$2f$dist$2f$redux$2d$toolkit$2e$modern$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["configureStore"])({
        reducer: rootReducer,
        // Adding the api middleware enables caching, invalidation, polling,
        // and other useful features of `rtk-query`.
        middleware: (getDefaultMiddleware)=>{
            return getDefaultMiddleware({
                serializableCheck: false
            });
        }
    });
};
}}),
"[project]/lib/provider/store-provider.tsx [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: require } = __turbopack_context__;
{
__turbopack_esm__({
    "StoreProvider": (()=>StoreProvider)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$store$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/lib/store.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$reduxjs$2f$toolkit$2f$dist$2f$query$2f$rtk$2d$query$2e$modern$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@reduxjs/toolkit/dist/query/rtk-query.modern.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$redux$2f$dist$2f$react$2d$redux$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/react-redux/dist/react-redux.mjs [app-ssr] (ecmascript)");
"use client";
;
;
;
;
;
const StoreProvider = ({ children })=>{
    const storeRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    if (!storeRef.current) {
        // Create the store instance the first time this renders
        storeRef.current = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$store$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["makeStore"])();
    }
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (storeRef.current != null) {
            // configure listeners using the provided defaults
            // optional, but required for `refetchOnFocus`/`refetchOnReconnect` behaviors
            const unsubscribe = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$reduxjs$2f$toolkit$2f$dist$2f$query$2f$rtk$2d$query$2e$modern$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["setupListeners"])(storeRef.current.dispatch);
            return unsubscribe;
        }
    }, []);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$redux$2f$dist$2f$react$2d$redux$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Provider"], {
        store: storeRef.current,
        children: children
    }, void 0, false, {
        fileName: "[project]/lib/provider/store-provider.tsx",
        lineNumber: 30,
        columnNumber: 10
    }, this);
};
}}),
"[project]/lib/provider/toast-provider.tsx [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: require } = __turbopack_context__;
{
__turbopack_esm__({
    "default": (()=>ToastProvider)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$toastify$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/react-toastify/dist/index.mjs [app-ssr] (ecmascript)");
"use client";
;
;
;
function ToastProvider() {
    const contextClass = {
        success: "bg-blue-600",
        error: "bg-red-600",
        info: "bg-gray-600",
        warning: "bg-orange-400",
        default: "bg-indigo-600",
        dark: "bg-white-600 font-gray-300"
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$toastify$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ToastContainer"], {
        position: "top-right",
        autoClose: 10000
    }, void 0, false, {
        fileName: "[project]/lib/provider/toast-provider.tsx",
        lineNumber: 17,
        columnNumber: 5
    }, this);
}
}}),
"[project]/app/layout.tsx [app-rsc] (ecmascript, Next.js server component, client modules ssr)": ((__turbopack_context__) => {

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, t: require } = __turbopack_context__;
{
}}),

};

//# sourceMappingURL=%5Broot%20of%20the%20server%5D__0bc312._.js.map