"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/article_list",{

/***/ "./pages/article_list.js":
/*!*******************************!*\
  !*** ./pages/article_list.js ***!
  \*******************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _services_user_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../services/user.service */ \"./services/user.service.js\");\nvar _this = undefined;\n\nvar _s = $RefreshSig$();\n\n\n\n\nvar ArticleList = function() {\n    _s();\n    var router = (0,next_router__WEBPACK_IMPORTED_MODULE_3__.useRouter)();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null), articles = ref[0], setArticles = ref[1];\n    var ref1 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false), isLoading = ref1[0], setLoading = ref1[1];\n    //check if user is not logged in , redired to login \n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function() {\n        if (!_services_user_service__WEBPACK_IMPORTED_MODULE_4__.userService.user) {\n            alert(\"Please login to see the articles\");\n            router.push(\"/login\");\n        }\n    }, []);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function() {\n        var user_id = router.query.user_id;\n        _services_user_service__WEBPACK_IMPORTED_MODULE_4__.userService.fetchSingleUserArticles(user_id).then(function(data) {\n            setArticles(data);\n            setLoading(false);\n        });\n    }, []);\n    if (isLoading) return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n        children: \"Loading...\"\n    }, void 0, false, {\n        fileName: \"/Users/abduljabbar/Documents/Coding Tests/RIMARKBL/frontend/pages/article_list.js\",\n        lineNumber: 24,\n        columnNumber: 27\n    }, _this);\n    if (!articles) return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n        children: \"No Articles data\"\n    }, void 0, false, {\n        fileName: \"/Users/abduljabbar/Documents/Coding Tests/RIMARKBL/frontend/pages/article_list.js\",\n        lineNumber: 25,\n        columnNumber: 27\n    }, _this);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"container mx-auto\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            \"aria-label\": \"group of cards\",\n            tabindex: \"0\",\n            className: \"focus:outline-none py-8 w-full\",\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"lg:flex items-center justify-center w-full basis-3/6\",\n                children: articles.data.map(function(article) {\n                    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"focus:outline-none lg:w-6/12 lg:mr-7 lg:mb-0 mb-7 bg-white dark:bg-gray-800 p-6 shadow rounded\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"flex items-center border-b border-gray-200 dark:border-gray-700 pb-6\",\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_2___default()), {\n                                        src: \"/article.png\",\n                                        alt: \"coin avatar\",\n                                        width: 48,\n                                        height: 48,\n                                        className: \"rounded-full\"\n                                    }, void 0, false, {\n                                        fileName: \"/Users/abduljabbar/Documents/Coding Tests/RIMARKBL/frontend/pages/article_list.js\",\n                                        lineNumber: 34,\n                                        columnNumber: 33\n                                    }, _this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                        className: \"flex items-start justify-between w-full\",\n                                        children: [\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                                className: \"pl-3 w-full\",\n                                                children: [\n                                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                                        tabindex: \"0\",\n                                                        className: \"focus:outline-none text-xl font-medium leading-5 text-gray-800 dark:text-white \",\n                                                        children: article.title\n                                                    }, void 0, false, {\n                                                        fileName: \"/Users/abduljabbar/Documents/Coding Tests/RIMARKBL/frontend/pages/article_list.js\",\n                                                        lineNumber: 37,\n                                                        columnNumber: 41\n                                                    }, _this),\n                                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                                        tabindex: \"0\",\n                                                        className: \"focus:outline-none text-sm leading-normal pt-2 text-gray-500 dark:text-gray-200 \",\n                                                        children: \"36 members\"\n                                                    }, void 0, false, {\n                                                        fileName: \"/Users/abduljabbar/Documents/Coding Tests/RIMARKBL/frontend/pages/article_list.js\",\n                                                        lineNumber: 38,\n                                                        columnNumber: 41\n                                                    }, _this)\n                                                ]\n                                            }, void 0, true, {\n                                                fileName: \"/Users/abduljabbar/Documents/Coding Tests/RIMARKBL/frontend/pages/article_list.js\",\n                                                lineNumber: 36,\n                                                columnNumber: 37\n                                            }, _this),\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                                role: \"img\",\n                                                \"aria-label\": \"bookmark\",\n                                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"svg\", {\n                                                    className: \"focus:outline-none dark:text-white text-gray-800\",\n                                                    width: \"28\",\n                                                    height: \"28\",\n                                                    viewBox: \"0 0 28 28\",\n                                                    fill: \"none\",\n                                                    xmlns: \"http://www.w3.org/2000/svg\",\n                                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"path\", {\n                                                        d: \"M10.5001 4.66667H17.5001C18.1189 4.66667 18.7124 4.9125 19.15 5.35009C19.5876 5.78767 19.8334 6.38117 19.8334 7V23.3333L14.0001 19.8333L8.16675 23.3333V7C8.16675 6.38117 8.41258 5.78767 8.85017 5.35009C9.28775 4.9125 9.88124 4.66667 10.5001 4.66667Z\",\n                                                        stroke: \"currentColor\",\n                                                        \"stroke-width\": \"1.25\",\n                                                        \"stroke-linecap\": \"round\",\n                                                        \"stroke-linejoin\": \"round\"\n                                                    }, void 0, false, {\n                                                        fileName: \"/Users/abduljabbar/Documents/Coding Tests/RIMARKBL/frontend/pages/article_list.js\",\n                                                        lineNumber: 42,\n                                                        columnNumber: 45\n                                                    }, _this)\n                                                }, void 0, false, {\n                                                    fileName: \"/Users/abduljabbar/Documents/Coding Tests/RIMARKBL/frontend/pages/article_list.js\",\n                                                    lineNumber: 41,\n                                                    columnNumber: 41\n                                                }, _this)\n                                            }, void 0, false, {\n                                                fileName: \"/Users/abduljabbar/Documents/Coding Tests/RIMARKBL/frontend/pages/article_list.js\",\n                                                lineNumber: 40,\n                                                columnNumber: 37\n                                            }, _this)\n                                        ]\n                                    }, void 0, true, {\n                                        fileName: \"/Users/abduljabbar/Documents/Coding Tests/RIMARKBL/frontend/pages/article_list.js\",\n                                        lineNumber: 35,\n                                        columnNumber: 33\n                                    }, _this)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/Users/abduljabbar/Documents/Coding Tests/RIMARKBL/frontend/pages/article_list.js\",\n                                lineNumber: 33,\n                                columnNumber: 29\n                            }, _this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"px-2\",\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                        tabindex: \"0\",\n                                        className: \"focus:outline-none text-sm leading-5 py-4 text-gray-600 dark:text-gray-200 \",\n                                        children: article.content\n                                    }, void 0, false, {\n                                        fileName: \"/Users/abduljabbar/Documents/Coding Tests/RIMARKBL/frontend/pages/article_list.js\",\n                                        lineNumber: 48,\n                                        columnNumber: 33\n                                    }, _this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                        tabindex: \"0\",\n                                        className: \"focus:outline-none flex\",\n                                        children: [\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                                className: \"py-2 px-4 text-xs leading-3 text-indigo-700 rounded-full bg-indigo-100\",\n                                                children: [\n                                                    \"#\",\n                                                    article.country\n                                                ]\n                                            }, void 0, true, {\n                                                fileName: \"/Users/abduljabbar/Documents/Coding Tests/RIMARKBL/frontend/pages/article_list.js\",\n                                                lineNumber: 50,\n                                                columnNumber: 37\n                                            }, _this),\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                                className: \"py-2 px-4 ml-3 text-xs leading-3 text-indigo-700 rounded-full bg-indigo-100\",\n                                                children: [\n                                                    \"#\",\n                                                    article.city\n                                                ]\n                                            }, void 0, true, {\n                                                fileName: \"/Users/abduljabbar/Documents/Coding Tests/RIMARKBL/frontend/pages/article_list.js\",\n                                                lineNumber: 51,\n                                                columnNumber: 37\n                                            }, _this)\n                                        ]\n                                    }, void 0, true, {\n                                        fileName: \"/Users/abduljabbar/Documents/Coding Tests/RIMARKBL/frontend/pages/article_list.js\",\n                                        lineNumber: 49,\n                                        columnNumber: 33\n                                    }, _this)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/Users/abduljabbar/Documents/Coding Tests/RIMARKBL/frontend/pages/article_list.js\",\n                                lineNumber: 47,\n                                columnNumber: 29\n                            }, _this)\n                        ]\n                    }, article._id, true, {\n                        fileName: \"/Users/abduljabbar/Documents/Coding Tests/RIMARKBL/frontend/pages/article_list.js\",\n                        lineNumber: 32,\n                        columnNumber: 33\n                    }, _this);\n                })\n            }, void 0, false, {\n                fileName: \"/Users/abduljabbar/Documents/Coding Tests/RIMARKBL/frontend/pages/article_list.js\",\n                lineNumber: 30,\n                columnNumber: 17\n            }, _this)\n        }, void 0, false, {\n            fileName: \"/Users/abduljabbar/Documents/Coding Tests/RIMARKBL/frontend/pages/article_list.js\",\n            lineNumber: 28,\n            columnNumber: 13\n        }, _this)\n    }, void 0, false, {\n        fileName: \"/Users/abduljabbar/Documents/Coding Tests/RIMARKBL/frontend/pages/article_list.js\",\n        lineNumber: 27,\n        columnNumber: 9\n    }, _this);\n};\n_s(ArticleList, \"UAuW/b+61Kpg0+qN8mpb8a/MOXA=\", false, function() {\n    return [\n        next_router__WEBPACK_IMPORTED_MODULE_3__.useRouter\n    ];\n});\n_c = ArticleList;\n/* harmony default export */ __webpack_exports__[\"default\"] = (ArticleList);\nvar _c;\n$RefreshReg$(_c, \"ArticleList\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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b3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBSZWFjdCwgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IEltYWdlIGZyb20gJ25leHQvaW1hZ2UnXG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tICduZXh0L3JvdXRlcic7XG5pbXBvcnQgeyB1c2VyU2VydmljZSB9IGZyb20gJy4uL3NlcnZpY2VzL3VzZXIuc2VydmljZSc7XG5cbmNvbnN0IEFydGljbGVMaXN0ID0gKCkgPT4ge1xuICAgIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xuICAgIGNvbnN0IFthcnRpY2xlcywgc2V0QXJ0aWNsZXNdID0gdXNlU3RhdGUobnVsbCk7XG4gICAgY29uc3QgW2lzTG9hZGluZywgc2V0TG9hZGluZ10gPSB1c2VTdGF0ZShmYWxzZSk7XG4gICAgLy9jaGVjayBpZiB1c2VyIGlzIG5vdCBsb2dnZWQgaW4gLCByZWRpcmVkIHRvIGxvZ2luIFxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgICAgIGlmICghdXNlclNlcnZpY2UudXNlcikge1xuICAgICAgICAgICAgYWxlcnQoXCJQbGVhc2UgbG9naW4gdG8gc2VlIHRoZSBhcnRpY2xlc1wiKVxuICAgICAgICAgICAgcm91dGVyLnB1c2goJy9sb2dpbicpXG4gICAgICAgIH1cbiAgICB9LCBbXSk7XG4gICAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICAgICAgY29uc3QgeyB1c2VyX2lkIH0gPSByb3V0ZXIucXVlcnk7XG4gICAgICAgIHVzZXJTZXJ2aWNlLmZldGNoU2luZ2xlVXNlckFydGljbGVzKHVzZXJfaWQpLnRoZW4oKGRhdGEpID0+IHtcbiAgICAgICAgICAgIHNldEFydGljbGVzKGRhdGEpXG4gICAgICAgICAgICBzZXRMb2FkaW5nKGZhbHNlKVxuICAgICAgICB9KTtcbiAgICB9LCBbXSk7XG4gICAgaWYgKGlzTG9hZGluZykgcmV0dXJuIDxwPkxvYWRpbmcuLi48L3A+XG4gICAgaWYgKCFhcnRpY2xlcykgcmV0dXJuIDxwPk5vIEFydGljbGVzIGRhdGE8L3A+XG4gICAgcmV0dXJuIChcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9J2NvbnRhaW5lciBteC1hdXRvJz5cbiAgICAgICAgICAgIDxkaXYgYXJpYS1sYWJlbD1cImdyb3VwIG9mIGNhcmRzXCIgdGFiaW5kZXg9XCIwXCIgY2xhc3NOYW1lPVwiZm9jdXM6b3V0bGluZS1ub25lIHB5LTggdy1mdWxsXCI+XG5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImxnOmZsZXggaXRlbXMtY2VudGVyIGp1c3RpZnktY2VudGVyIHctZnVsbCBiYXNpcy0zLzZcIj5cbiAgICAgICAgICAgICAgICAgICAge2FydGljbGVzLmRhdGEubWFwKGFydGljbGUgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuICg8ZGl2IGNsYXNzTmFtZT1cImZvY3VzOm91dGxpbmUtbm9uZSBsZzp3LTYvMTIgbGc6bXItNyBsZzptYi0wIG1iLTcgYmctd2hpdGUgZGFyazpiZy1ncmF5LTgwMCAgcC02IHNoYWRvdyByb3VuZGVkXCIga2V5PXthcnRpY2xlLl9pZH0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGl0ZW1zLWNlbnRlciBib3JkZXItYiBib3JkZXItZ3JheS0yMDAgZGFyazpib3JkZXItZ3JheS03MDAgIHBiLTZcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEltYWdlIHNyYz1cIi9hcnRpY2xlLnBuZ1wiIGFsdD1cImNvaW4gYXZhdGFyXCIgd2lkdGg9ezQ4fSBoZWlnaHQ9ezQ4fSBjbGFzc05hbWU9XCJyb3VuZGVkLWZ1bGxcIiAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggaXRlbXMtc3RhcnQganVzdGlmeS1iZXR3ZWVuIHctZnVsbFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwbC0zIHctZnVsbFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwIHRhYmluZGV4PVwiMFwiIGNsYXNzTmFtZT1cImZvY3VzOm91dGxpbmUtbm9uZSB0ZXh0LXhsIGZvbnQtbWVkaXVtIGxlYWRpbmctNSB0ZXh0LWdyYXktODAwIGRhcms6dGV4dC13aGl0ZSBcIj57YXJ0aWNsZS50aXRsZX08L3A+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHAgdGFiaW5kZXg9XCIwXCIgY2xhc3NOYW1lPVwiZm9jdXM6b3V0bGluZS1ub25lIHRleHQtc20gbGVhZGluZy1ub3JtYWwgcHQtMiB0ZXh0LWdyYXktNTAwIGRhcms6dGV4dC1ncmF5LTIwMCBcIj4zNiBtZW1iZXJzPC9wPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IHJvbGU9XCJpbWdcIiBhcmlhLWxhYmVsPVwiYm9va21hcmtcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3ZnIGNsYXNzTmFtZT1cImZvY3VzOm91dGxpbmUtbm9uZSBkYXJrOnRleHQtd2hpdGUgdGV4dC1ncmF5LTgwMFwiIHdpZHRoPVwiMjhcIiBoZWlnaHQ9XCIyOFwiIHZpZXdCb3g9XCIwIDAgMjggMjhcIiBmaWxsPVwibm9uZVwiIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHBhdGggZD1cIk0xMC41MDAxIDQuNjY2NjdIMTcuNTAwMUMxOC4xMTg5IDQuNjY2NjcgMTguNzEyNCA0LjkxMjUgMTkuMTUgNS4zNTAwOUMxOS41ODc2IDUuNzg3NjcgMTkuODMzNCA2LjM4MTE3IDE5LjgzMzQgN1YyMy4zMzMzTDE0LjAwMDEgMTkuODMzM0w4LjE2Njc1IDIzLjMzMzNWN0M4LjE2Njc1IDYuMzgxMTcgOC40MTI1OCA1Ljc4NzY3IDguODUwMTcgNS4zNTAwOUM5LjI4Nzc1IDQuOTEyNSA5Ljg4MTI0IDQuNjY2NjcgMTAuNTAwMSA0LjY2NjY3WlwiIHN0cm9rZT1cImN1cnJlbnRDb2xvclwiIHN0cm9rZS13aWR0aD1cIjEuMjVcIiBzdHJva2UtbGluZWNhcD1cInJvdW5kXCIgc3Ryb2tlLWxpbmVqb2luPVwicm91bmRcIiAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvc3ZnPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicHgtMlwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cCB0YWJpbmRleD1cIjBcIiBjbGFzc05hbWU9XCJmb2N1czpvdXRsaW5lLW5vbmUgdGV4dC1zbSBsZWFkaW5nLTUgcHktNCB0ZXh0LWdyYXktNjAwIGRhcms6dGV4dC1ncmF5LTIwMCBcIj57YXJ0aWNsZS5jb250ZW50fTwvcD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiB0YWJpbmRleD1cIjBcIiBjbGFzc05hbWU9XCJmb2N1czpvdXRsaW5lLW5vbmUgZmxleFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJweS0yIHB4LTQgdGV4dC14cyBsZWFkaW5nLTMgdGV4dC1pbmRpZ28tNzAwIHJvdW5kZWQtZnVsbCBiZy1pbmRpZ28tMTAwXCI+I3thcnRpY2xlLmNvdW50cnl9PC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInB5LTIgcHgtNCBtbC0zIHRleHQteHMgbGVhZGluZy0zIHRleHQtaW5kaWdvLTcwMCByb3VuZGVkLWZ1bGwgYmctaW5kaWdvLTEwMFwiPiN7YXJ0aWNsZS5jaXR5fTwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PilcbiAgICAgICAgICAgICAgICAgICAgfSl9XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICA8L2Rpdj5cbiAgICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IEFydGljbGVMaXN0Il0sIm5hbWVzIjpbIlJlYWN0IiwidXNlRWZmZWN0IiwidXNlU3RhdGUiLCJJbWFnZSIsInVzZVJvdXRlciIsInVzZXJTZXJ2aWNlIiwiQXJ0aWNsZUxpc3QiLCJyb3V0ZXIiLCJhcnRpY2xlcyIsInNldEFydGljbGVzIiwiaXNMb2FkaW5nIiwic2V0TG9hZGluZyIsInVzZXIiLCJhbGVydCIsInB1c2giLCJ1c2VyX2lkIiwicXVlcnkiLCJmZXRjaFNpbmdsZVVzZXJBcnRpY2xlcyIsInRoZW4iLCJkYXRhIiwicCIsImRpdiIsImNsYXNzTmFtZSIsImFyaWEtbGFiZWwiLCJ0YWJpbmRleCIsIm1hcCIsImFydGljbGUiLCJzcmMiLCJhbHQiLCJ3aWR0aCIsImhlaWdodCIsInRpdGxlIiwicm9sZSIsInN2ZyIsInZpZXdCb3giLCJmaWxsIiwieG1sbnMiLCJwYXRoIiwiZCIsInN0cm9rZSIsInN0cm9rZS13aWR0aCIsInN0cm9rZS1saW5lY2FwIiwic3Ryb2tlLWxpbmVqb2luIiwiY29udGVudCIsImNvdW50cnkiLCJjaXR5IiwiX2lkIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/article_list.js\n"));

/***/ })

});