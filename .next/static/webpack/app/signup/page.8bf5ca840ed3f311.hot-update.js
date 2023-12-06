"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/signup/page",{

/***/ "(app-pages-browser)/./src/app/signup/page.js":
/*!********************************!*\
  !*** ./src/app/signup/page.js ***!
  \********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _css_signup_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../css/signup.css */ \"(app-pages-browser)/./src/app/css/signup.css\");\n// pages/signup.js\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\nconst Signup = ()=>{\n    _s();\n    const [formData, setFormData] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({\n        username: \"\",\n        password: \"\",\n        displayName: \"\",\n        location: \"\"\n    });\n    const handleChange = (e)=>{\n        const { name, value } = e.target;\n        setFormData((prevData)=>({\n                ...prevData,\n                [name]: value\n            }));\n    };\n    const handleSubmit = (e)=>{\n        e.preventDefault();\n        // Handle form submission, you can add your logic here like sending data to an API, etc.\n        console.log(formData); // For example, logging the form data\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"min-h-screen flex flex-col items-center justify-center bg-purple-100 px-4 md:px-0 bg-[url('/background.jpg')] bg-cover\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                className: \"text-3xl lg:text-4xl font-bold mb-5 text-center text-white\",\n                children: \"Join Us\"\n            }, void 0, false, {\n                fileName: \"D:\\\\Documents\\\\Advanced Web Design\\\\filmBloggingReactProject\\\\src\\\\app\\\\signup\\\\page.js\",\n                lineNumber: 30,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n                onSubmit: handleSubmit,\n                className: \"bg-white p-8 md:mx-4 rounded-2xl max-w-md w-full lg:max-w-3xl md:max-w-2xl border-2 border-gray-600\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"mb-4\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                                htmlFor: \"username\",\n                                className: \"block text-gray-700 mb-2\",\n                                children: \"Username\"\n                            }, void 0, false, {\n                                fileName: \"D:\\\\Documents\\\\Advanced Web Design\\\\filmBloggingReactProject\\\\src\\\\app\\\\signup\\\\page.js\",\n                                lineNumber: 35,\n                                columnNumber: 11\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                type: \"text\",\n                                id: \"username\",\n                                name: \"username\",\n                                value: formData.username,\n                                onChange: handleChange,\n                                className: \"border rounded px-4 py-2 w-full focus:outline-none focus:border-blue-500\",\n                                required: true\n                            }, void 0, false, {\n                                fileName: \"D:\\\\Documents\\\\Advanced Web Design\\\\filmBloggingReactProject\\\\src\\\\app\\\\signup\\\\page.js\",\n                                lineNumber: 38,\n                                columnNumber: 11\n                            }, undefined)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"D:\\\\Documents\\\\Advanced Web Design\\\\filmBloggingReactProject\\\\src\\\\app\\\\signup\\\\page.js\",\n                        lineNumber: 34,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"mb-4\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                                htmlFor: \"password\",\n                                className: \"block text-gray-700 mb-2\",\n                                children: \"Password\"\n                            }, void 0, false, {\n                                fileName: \"D:\\\\Documents\\\\Advanced Web Design\\\\filmBloggingReactProject\\\\src\\\\app\\\\signup\\\\page.js\",\n                                lineNumber: 50,\n                                columnNumber: 11\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                type: \"password\",\n                                id: \"password\",\n                                name: \"password\",\n                                value: formData.password,\n                                onChange: handleChange,\n                                className: \"border rounded px-4 py-2 w-full focus:outline-none focus:border-blue-500\",\n                                required: true\n                            }, void 0, false, {\n                                fileName: \"D:\\\\Documents\\\\Advanced Web Design\\\\filmBloggingReactProject\\\\src\\\\app\\\\signup\\\\page.js\",\n                                lineNumber: 53,\n                                columnNumber: 11\n                            }, undefined)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"D:\\\\Documents\\\\Advanced Web Design\\\\filmBloggingReactProject\\\\src\\\\app\\\\signup\\\\page.js\",\n                        lineNumber: 49,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"mb-4\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                                htmlFor: \"displayName\",\n                                className: \"block text-gray-700 mb-2\",\n                                children: \"Display Name\"\n                            }, void 0, false, {\n                                fileName: \"D:\\\\Documents\\\\Advanced Web Design\\\\filmBloggingReactProject\\\\src\\\\app\\\\signup\\\\page.js\",\n                                lineNumber: 64,\n                                columnNumber: 11\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                type: \"text\",\n                                id: \"displayName\",\n                                name: \"displayName\",\n                                value: formData.displayName,\n                                onChange: handleChange,\n                                className: \"border rounded px-4 py-2 w-full focus:outline-none focus:border-blue-500\",\n                                required: true\n                            }, void 0, false, {\n                                fileName: \"D:\\\\Documents\\\\Advanced Web Design\\\\filmBloggingReactProject\\\\src\\\\app\\\\signup\\\\page.js\",\n                                lineNumber: 67,\n                                columnNumber: 11\n                            }, undefined)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"D:\\\\Documents\\\\Advanced Web Design\\\\filmBloggingReactProject\\\\src\\\\app\\\\signup\\\\page.js\",\n                        lineNumber: 63,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"mb-4\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                                htmlFor: \"location\",\n                                className: \"block text-gray-700 mb-2\",\n                                children: \"Location\"\n                            }, void 0, false, {\n                                fileName: \"D:\\\\Documents\\\\Advanced Web Design\\\\filmBloggingReactProject\\\\src\\\\app\\\\signup\\\\page.js\",\n                                lineNumber: 78,\n                                columnNumber: 11\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                type: \"text\",\n                                id: \"location\",\n                                name: \"location\",\n                                value: formData.location,\n                                onChange: handleChange,\n                                className: \"border rounded px-4 py-2 w-full focus:outline-none focus:border-blue-500\",\n                                required: true\n                            }, void 0, false, {\n                                fileName: \"D:\\\\Documents\\\\Advanced Web Design\\\\filmBloggingReactProject\\\\src\\\\app\\\\signup\\\\page.js\",\n                                lineNumber: 81,\n                                columnNumber: 11\n                            }, undefined)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"D:\\\\Documents\\\\Advanced Web Design\\\\filmBloggingReactProject\\\\src\\\\app\\\\signup\\\\page.js\",\n                        lineNumber: 77,\n                        columnNumber: 9\n                    }, undefined),\n                    \" \",\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"mt-6 flex justify-center\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                            type: \"submit\",\n                            className: \"bg-purple-800 text-white px-4 py-2 rounded hover:bg-purple-600 focus:outline-none w-full transition duration-500 ease-in-out\",\n                            children: \"Sign Up\"\n                        }, void 0, false, {\n                            fileName: \"D:\\\\Documents\\\\Advanced Web Design\\\\filmBloggingReactProject\\\\src\\\\app\\\\signup\\\\page.js\",\n                            lineNumber: 92,\n                            columnNumber: 11\n                        }, undefined)\n                    }, void 0, false, {\n                        fileName: \"D:\\\\Documents\\\\Advanced Web Design\\\\filmBloggingReactProject\\\\src\\\\app\\\\signup\\\\page.js\",\n                        lineNumber: 91,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"flex flex-col text-center mt-3\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                className: \"font-italic\",\n                                children: \"Already have an account?\"\n                            }, void 0, false, {\n                                fileName: \"D:\\\\Documents\\\\Advanced Web Design\\\\filmBloggingReactProject\\\\src\\\\app\\\\signup\\\\page.js\",\n                                lineNumber: 97,\n                                columnNumber: 11\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                                href: \"/signin\",\n                                className: \"text-purple-600 hover:underline\",\n                                children: \"Sign in\"\n                            }, void 0, false, {\n                                fileName: \"D:\\\\Documents\\\\Advanced Web Design\\\\filmBloggingReactProject\\\\src\\\\app\\\\signup\\\\page.js\",\n                                lineNumber: 98,\n                                columnNumber: 11\n                            }, undefined)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"D:\\\\Documents\\\\Advanced Web Design\\\\filmBloggingReactProject\\\\src\\\\app\\\\signup\\\\page.js\",\n                        lineNumber: 96,\n                        columnNumber: 9\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"D:\\\\Documents\\\\Advanced Web Design\\\\filmBloggingReactProject\\\\src\\\\app\\\\signup\\\\page.js\",\n                lineNumber: 33,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"D:\\\\Documents\\\\Advanced Web Design\\\\filmBloggingReactProject\\\\src\\\\app\\\\signup\\\\page.js\",\n        lineNumber: 29,\n        columnNumber: 5\n    }, undefined);\n};\n_s(Signup, \"r1HVweJJUysXhu+8LDG4EzNqTSY=\");\n_c = Signup;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Signup);\nvar _c;\n$RefreshReg$(_c, \"Signup\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9hcHAvc2lnbnVwL3BhZ2UuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxrQkFBa0I7OztBQUVzQjtBQUNEO0FBRXZDLE1BQU1HLFNBQVM7O0lBQ2IsTUFBTSxDQUFDQyxVQUFVQyxZQUFZLEdBQUdKLCtDQUFRQSxDQUFDO1FBQ3ZDSyxVQUFVO1FBQ1ZDLFVBQVU7UUFDVkMsYUFBYTtRQUNiQyxVQUFVO0lBQ1o7SUFFQSxNQUFNQyxlQUFlLENBQUNDO1FBQ3BCLE1BQU0sRUFBRUMsSUFBSSxFQUFFQyxLQUFLLEVBQUUsR0FBR0YsRUFBRUcsTUFBTTtRQUNoQ1QsWUFBWSxDQUFDVSxXQUFjO2dCQUN6QixHQUFHQSxRQUFRO2dCQUNYLENBQUNILEtBQUssRUFBRUM7WUFDVjtJQUNGO0lBRUEsTUFBTUcsZUFBZSxDQUFDTDtRQUNwQkEsRUFBRU0sY0FBYztRQUNoQix3RkFBd0Y7UUFDeEZDLFFBQVFDLEdBQUcsQ0FBQ2YsV0FBVyxxQ0FBcUM7SUFDOUQ7SUFFQSxxQkFDRSw4REFBQ2dCO1FBQUlDLFdBQVU7OzBCQUNiLDhEQUFDQztnQkFBR0QsV0FBVTswQkFBNkQ7Ozs7OzswQkFHM0UsOERBQUNFO2dCQUFLQyxVQUFVUjtnQkFBY0ssV0FBVTs7a0NBQ3RDLDhEQUFDRDt3QkFBSUMsV0FBVTs7MENBQ2IsOERBQUNJO2dDQUFNQyxTQUFRO2dDQUFXTCxXQUFVOzBDQUEyQjs7Ozs7OzBDQUcvRCw4REFBQ007Z0NBQ0NDLE1BQUs7Z0NBQ0xDLElBQUc7Z0NBQ0hqQixNQUFLO2dDQUNMQyxPQUFPVCxTQUFTRSxRQUFRO2dDQUN4QndCLFVBQVVwQjtnQ0FDVlcsV0FBVTtnQ0FDVlUsUUFBUTs7Ozs7Ozs7Ozs7O2tDQUlaLDhEQUFDWDt3QkFBSUMsV0FBVTs7MENBQ2IsOERBQUNJO2dDQUFNQyxTQUFRO2dDQUFXTCxXQUFVOzBDQUEyQjs7Ozs7OzBDQUcvRCw4REFBQ007Z0NBQ0NDLE1BQUs7Z0NBQ0xDLElBQUc7Z0NBQ0hqQixNQUFLO2dDQUNMQyxPQUFPVCxTQUFTRyxRQUFRO2dDQUN4QnVCLFVBQVVwQjtnQ0FDVlcsV0FBVTtnQ0FDVlUsUUFBUTs7Ozs7Ozs7Ozs7O2tDQUdaLDhEQUFDWDt3QkFBSUMsV0FBVTs7MENBQ2IsOERBQUNJO2dDQUFNQyxTQUFRO2dDQUFjTCxXQUFVOzBDQUEyQjs7Ozs7OzBDQUdsRSw4REFBQ007Z0NBQ0NDLE1BQUs7Z0NBQ0xDLElBQUc7Z0NBQ0hqQixNQUFLO2dDQUNMQyxPQUFPVCxTQUFTSSxXQUFXO2dDQUMzQnNCLFVBQVVwQjtnQ0FDVlcsV0FBVTtnQ0FDVlUsUUFBUTs7Ozs7Ozs7Ozs7O2tDQUdaLDhEQUFDWDt3QkFBSUMsV0FBVTs7MENBQ2IsOERBQUNJO2dDQUFNQyxTQUFRO2dDQUFXTCxXQUFVOzBDQUEyQjs7Ozs7OzBDQUcvRCw4REFBQ007Z0NBQ0NDLE1BQUs7Z0NBQ0xDLElBQUc7Z0NBQ0hqQixNQUFLO2dDQUNMQyxPQUFPVCxTQUFTSyxRQUFRO2dDQUN4QnFCLFVBQVVwQjtnQ0FDVlcsV0FBVTtnQ0FDVlUsUUFBUTs7Ozs7Ozs7Ozs7O29CQUVMO2tDQUNQLDhEQUFDWDt3QkFBSUMsV0FBVTtrQ0FDYiw0RUFBQ1c7NEJBQU9KLE1BQUs7NEJBQVNQLFdBQVU7c0NBQStIOzs7Ozs7Ozs7OztrQ0FJakssOERBQUNEO3dCQUFJQyxXQUFVOzswQ0FDYiw4REFBQ1k7Z0NBQUVaLFdBQVU7MENBQWM7Ozs7OzswQ0FDM0IsOERBQUNhO2dDQUFFQyxNQUFLO2dDQUFVZCxXQUFVOzBDQUFrQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBS3hFO0dBakdNbEI7S0FBQUE7QUFtR04sK0RBQWVBLE1BQU1BLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2FwcC9zaWdudXAvcGFnZS5qcz82ZWZlIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIHBhZ2VzL3NpZ251cC5qc1xyXG5cInVzZSBjbGllbnRcIjtcclxuaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBzdHlsZXMgZnJvbSBcIi4uL2Nzcy9zaWdudXAuY3NzXCI7XHJcblxyXG5jb25zdCBTaWdudXAgPSAoKSA9PiB7XHJcbiAgY29uc3QgW2Zvcm1EYXRhLCBzZXRGb3JtRGF0YV0gPSB1c2VTdGF0ZSh7XHJcbiAgICB1c2VybmFtZTogXCJcIixcclxuICAgIHBhc3N3b3JkOiBcIlwiLFxyXG4gICAgZGlzcGxheU5hbWU6IFwiXCIsXHJcbiAgICBsb2NhdGlvbjogXCJcIixcclxuICB9KTtcclxuXHJcbiAgY29uc3QgaGFuZGxlQ2hhbmdlID0gKGUpID0+IHtcclxuICAgIGNvbnN0IHsgbmFtZSwgdmFsdWUgfSA9IGUudGFyZ2V0O1xyXG4gICAgc2V0Rm9ybURhdGEoKHByZXZEYXRhKSA9PiAoe1xyXG4gICAgICAuLi5wcmV2RGF0YSxcclxuICAgICAgW25hbWVdOiB2YWx1ZSxcclxuICAgIH0pKTtcclxuICB9O1xyXG5cclxuICBjb25zdCBoYW5kbGVTdWJtaXQgPSAoZSkgPT4ge1xyXG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgLy8gSGFuZGxlIGZvcm0gc3VibWlzc2lvbiwgeW91IGNhbiBhZGQgeW91ciBsb2dpYyBoZXJlIGxpa2Ugc2VuZGluZyBkYXRhIHRvIGFuIEFQSSwgZXRjLlxyXG4gICAgY29uc29sZS5sb2coZm9ybURhdGEpOyAvLyBGb3IgZXhhbXBsZSwgbG9nZ2luZyB0aGUgZm9ybSBkYXRhXHJcbiAgfTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgY2xhc3NOYW1lPVwibWluLWgtc2NyZWVuIGZsZXggZmxleC1jb2wgaXRlbXMtY2VudGVyIGp1c3RpZnktY2VudGVyIGJnLXB1cnBsZS0xMDAgcHgtNCBtZDpweC0wIGJnLVt1cmwoJy9iYWNrZ3JvdW5kLmpwZycpXSBiZy1jb3ZlclwiPlxyXG4gICAgICA8aDEgY2xhc3NOYW1lPVwidGV4dC0zeGwgbGc6dGV4dC00eGwgZm9udC1ib2xkIG1iLTUgdGV4dC1jZW50ZXIgdGV4dC13aGl0ZVwiPlxyXG4gICAgICAgIEpvaW4gVXNcclxuICAgICAgPC9oMT5cclxuICAgICAgPGZvcm0gb25TdWJtaXQ9e2hhbmRsZVN1Ym1pdH0gY2xhc3NOYW1lPVwiYmctd2hpdGUgcC04IG1kOm14LTQgcm91bmRlZC0yeGwgbWF4LXctbWQgdy1mdWxsIGxnOm1heC13LTN4bCBtZDptYXgtdy0yeGwgYm9yZGVyLTIgYm9yZGVyLWdyYXktNjAwXCI+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtYi00XCI+XHJcbiAgICAgICAgICA8bGFiZWwgaHRtbEZvcj1cInVzZXJuYW1lXCIgY2xhc3NOYW1lPVwiYmxvY2sgdGV4dC1ncmF5LTcwMCBtYi0yXCI+XHJcbiAgICAgICAgICAgIFVzZXJuYW1lXHJcbiAgICAgICAgICA8L2xhYmVsPlxyXG4gICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcclxuICAgICAgICAgICAgaWQ9XCJ1c2VybmFtZVwiXHJcbiAgICAgICAgICAgIG5hbWU9XCJ1c2VybmFtZVwiXHJcbiAgICAgICAgICAgIHZhbHVlPXtmb3JtRGF0YS51c2VybmFtZX1cclxuICAgICAgICAgICAgb25DaGFuZ2U9e2hhbmRsZUNoYW5nZX1cclxuICAgICAgICAgICAgY2xhc3NOYW1lPVwiYm9yZGVyIHJvdW5kZWQgcHgtNCBweS0yIHctZnVsbCBmb2N1czpvdXRsaW5lLW5vbmUgZm9jdXM6Ym9yZGVyLWJsdWUtNTAwXCJcclxuICAgICAgICAgICAgcmVxdWlyZWRcclxuICAgICAgICAgIC8+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgey8qIFJlcGVhdCBzaW1pbGFyIGNvZGUgZm9yIG90aGVyIGlucHV0cyAqL31cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1iLTRcIj5cclxuICAgICAgICAgIDxsYWJlbCBodG1sRm9yPVwicGFzc3dvcmRcIiBjbGFzc05hbWU9XCJibG9jayB0ZXh0LWdyYXktNzAwIG1iLTJcIj5cclxuICAgICAgICAgICAgUGFzc3dvcmRcclxuICAgICAgICAgIDwvbGFiZWw+XHJcbiAgICAgICAgICA8aW5wdXRcclxuICAgICAgICAgICAgdHlwZT1cInBhc3N3b3JkXCJcclxuICAgICAgICAgICAgaWQ9XCJwYXNzd29yZFwiXHJcbiAgICAgICAgICAgIG5hbWU9XCJwYXNzd29yZFwiXHJcbiAgICAgICAgICAgIHZhbHVlPXtmb3JtRGF0YS5wYXNzd29yZH1cclxuICAgICAgICAgICAgb25DaGFuZ2U9e2hhbmRsZUNoYW5nZX1cclxuICAgICAgICAgICAgY2xhc3NOYW1lPVwiYm9yZGVyIHJvdW5kZWQgcHgtNCBweS0yIHctZnVsbCBmb2N1czpvdXRsaW5lLW5vbmUgZm9jdXM6Ym9yZGVyLWJsdWUtNTAwXCJcclxuICAgICAgICAgICAgcmVxdWlyZWRcclxuICAgICAgICAgIC8+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtYi00XCI+XHJcbiAgICAgICAgICA8bGFiZWwgaHRtbEZvcj1cImRpc3BsYXlOYW1lXCIgY2xhc3NOYW1lPVwiYmxvY2sgdGV4dC1ncmF5LTcwMCBtYi0yXCI+XHJcbiAgICAgICAgICAgIERpc3BsYXkgTmFtZVxyXG4gICAgICAgICAgPC9sYWJlbD5cclxuICAgICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICB0eXBlPVwidGV4dFwiXHJcbiAgICAgICAgICAgIGlkPVwiZGlzcGxheU5hbWVcIlxyXG4gICAgICAgICAgICBuYW1lPVwiZGlzcGxheU5hbWVcIlxyXG4gICAgICAgICAgICB2YWx1ZT17Zm9ybURhdGEuZGlzcGxheU5hbWV9XHJcbiAgICAgICAgICAgIG9uQ2hhbmdlPXtoYW5kbGVDaGFuZ2V9XHJcbiAgICAgICAgICAgIGNsYXNzTmFtZT1cImJvcmRlciByb3VuZGVkIHB4LTQgcHktMiB3LWZ1bGwgZm9jdXM6b3V0bGluZS1ub25lIGZvY3VzOmJvcmRlci1ibHVlLTUwMFwiXHJcbiAgICAgICAgICAgIHJlcXVpcmVkXHJcbiAgICAgICAgICAvPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWItNFwiPlxyXG4gICAgICAgICAgPGxhYmVsIGh0bWxGb3I9XCJsb2NhdGlvblwiIGNsYXNzTmFtZT1cImJsb2NrIHRleHQtZ3JheS03MDAgbWItMlwiPlxyXG4gICAgICAgICAgICBMb2NhdGlvblxyXG4gICAgICAgICAgPC9sYWJlbD5cclxuICAgICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICB0eXBlPVwidGV4dFwiXHJcbiAgICAgICAgICAgIGlkPVwibG9jYXRpb25cIlxyXG4gICAgICAgICAgICBuYW1lPVwibG9jYXRpb25cIlxyXG4gICAgICAgICAgICB2YWx1ZT17Zm9ybURhdGEubG9jYXRpb259XHJcbiAgICAgICAgICAgIG9uQ2hhbmdlPXtoYW5kbGVDaGFuZ2V9XHJcbiAgICAgICAgICAgIGNsYXNzTmFtZT1cImJvcmRlciByb3VuZGVkIHB4LTQgcHktMiB3LWZ1bGwgZm9jdXM6b3V0bGluZS1ub25lIGZvY3VzOmJvcmRlci1ibHVlLTUwMFwiXHJcbiAgICAgICAgICAgIHJlcXVpcmVkXHJcbiAgICAgICAgICAvPlxyXG4gICAgICAgIDwvZGl2PntcIiBcIn1cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm10LTYgZmxleCBqdXN0aWZ5LWNlbnRlclwiPlxyXG4gICAgICAgICAgPGJ1dHRvbiB0eXBlPVwic3VibWl0XCIgY2xhc3NOYW1lPVwiYmctcHVycGxlLTgwMCB0ZXh0LXdoaXRlIHB4LTQgcHktMiByb3VuZGVkIGhvdmVyOmJnLXB1cnBsZS02MDAgZm9jdXM6b3V0bGluZS1ub25lIHctZnVsbCB0cmFuc2l0aW9uIGR1cmF0aW9uLTUwMCBlYXNlLWluLW91dFwiPlxyXG4gICAgICAgICAgICBTaWduIFVwXHJcbiAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggZmxleC1jb2wgdGV4dC1jZW50ZXIgbXQtM1wiPlxyXG4gICAgICAgICAgPHAgY2xhc3NOYW1lPVwiZm9udC1pdGFsaWNcIj5BbHJlYWR5IGhhdmUgYW4gYWNjb3VudD88L3A+XHJcbiAgICAgICAgICA8YSBocmVmPVwiL3NpZ25pblwiIGNsYXNzTmFtZT1cInRleHQtcHVycGxlLTYwMCBob3Zlcjp1bmRlcmxpbmVcIj5TaWduIGluPC9hPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L2Zvcm0+XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgU2lnbnVwO1xyXG4iXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VTdGF0ZSIsInN0eWxlcyIsIlNpZ251cCIsImZvcm1EYXRhIiwic2V0Rm9ybURhdGEiLCJ1c2VybmFtZSIsInBhc3N3b3JkIiwiZGlzcGxheU5hbWUiLCJsb2NhdGlvbiIsImhhbmRsZUNoYW5nZSIsImUiLCJuYW1lIiwidmFsdWUiLCJ0YXJnZXQiLCJwcmV2RGF0YSIsImhhbmRsZVN1Ym1pdCIsInByZXZlbnREZWZhdWx0IiwiY29uc29sZSIsImxvZyIsImRpdiIsImNsYXNzTmFtZSIsImgxIiwiZm9ybSIsIm9uU3VibWl0IiwibGFiZWwiLCJodG1sRm9yIiwiaW5wdXQiLCJ0eXBlIiwiaWQiLCJvbkNoYW5nZSIsInJlcXVpcmVkIiwiYnV0dG9uIiwicCIsImEiLCJocmVmIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/signup/page.js\n"));

/***/ })

});