"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/_app",{

/***/ "./helpers/http.js":
/*!*************************!*\
  !*** ./helpers/http.js ***!
  \*************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"http\": function() { return /* binding */ http; }\n/* harmony export */ });\n/* harmony import */ var _swc_helpers_src_async_to_generator_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @swc/helpers/src/_async_to_generator.mjs */ \"./node_modules/@swc/helpers/src/_async_to_generator.mjs\");\n/* harmony import */ var _swc_helpers_src_object_spread_mjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @swc/helpers/src/_object_spread.mjs */ \"./node_modules/@swc/helpers/src/_object_spread.mjs\");\n/* harmony import */ var _swc_helpers_src_ts_generator_mjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @swc/helpers/src/_ts_generator.mjs */ \"./node_modules/@swc/helpers/src/_ts_generator.mjs\");\n/* harmony import */ var _services_user_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../services/user.service */ \"./services/user.service.js\");\n\n\n\n\nvar http = {\n    get: get,\n    post: post\n};\nfunction get(url) {\n    return _get.apply(this, arguments);\n}\nfunction _get() {\n    _get = (0,_swc_helpers_src_async_to_generator_mjs__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(function(url) {\n        var requestOptions, response;\n        return (0,_swc_helpers_src_ts_generator_mjs__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(this, function(_state) {\n            switch(_state.label){\n                case 0:\n                    requestOptions = {\n                        method: \"GET\",\n                        headers: (0,_swc_helpers_src_object_spread_mjs__WEBPACK_IMPORTED_MODULE_3__[\"default\"])({\n                            \"Content-Type\": \"application/json\"\n                        }, authHeader())\n                    };\n                    return [\n                        4,\n                        fetch(url, requestOptions)\n                    ];\n                case 1:\n                    response = _state.sent();\n                    return [\n                        4,\n                        response.json()\n                    ];\n                case 2:\n                    return [\n                        2,\n                        _state.sent()\n                    ];\n            }\n        });\n    });\n    return _get.apply(this, arguments);\n}\nfunction post(url, body) {\n    return _post.apply(this, arguments);\n}\nfunction _post() {\n    _post = (0,_swc_helpers_src_async_to_generator_mjs__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(function(url, body) {\n        var requestOptions, response;\n        return (0,_swc_helpers_src_ts_generator_mjs__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(this, function(_state) {\n            switch(_state.label){\n                case 0:\n                    requestOptions = {\n                        method: \"POST\",\n                        headers: (0,_swc_helpers_src_object_spread_mjs__WEBPACK_IMPORTED_MODULE_3__[\"default\"])({\n                            \"Content-Type\": \"application/json\"\n                        }, authHeader()),\n                        body: JSON.stringify(body)\n                    };\n                    return [\n                        4,\n                        fetch(url, requestOptions)\n                    ];\n                case 1:\n                    response = _state.sent();\n                    return [\n                        4,\n                        response.json()\n                    ];\n                case 2:\n                    return [\n                        2,\n                        _state.sent()\n                    ];\n            }\n        });\n    });\n    return _post.apply(this, arguments);\n}\nfunction authHeader() {\n    var user = _services_user_service__WEBPACK_IMPORTED_MODULE_0__.userService.user;\n    var isLoggedIn = user && user.data.access_token;\n    if (isLoggedIn) {\n        return {\n            \"access-token\": user.data.access_token\n        };\n    } else {\n        return {};\n    }\n}\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9oZWxwZXJzL2h0dHAuanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFFQTs7O0FBQXVEO0FBQ2hELElBQU1DLElBQUksR0FBRztJQUNoQkMsR0FBRyxFQUFIQSxHQUFHO0lBQ0hDLElBQUksRUFBSkEsSUFBSTtDQUNQLENBQUM7U0FFYUQsR0FBRyxDQUFDRSxHQUFHO1dBQVBGLElBQUc7O1NBQUhBLElBQUc7SUFBSEEsSUFBRyxHQUFsQiw2RkFBbUJFLEdBQUcsRUFBRTtZQUNkQyxjQUFjLEVBSWRDLFFBQVE7Ozs7b0JBSlJELGNBQWMsR0FBRzt3QkFDbkJFLE1BQU0sRUFBRSxLQUFLO3dCQUNiQyxPQUFPLEVBQUU7NEJBQUUsY0FBYyxFQUFFLGtCQUFrQjsyQkFBS0MsVUFBVSxFQUFFLENBQUU7cUJBQ25FLENBQUM7b0JBQ2U7O3dCQUFNQyxLQUFLLENBQUNOLEdBQUcsRUFBRUMsY0FBYyxDQUFDO3NCQUFBOztvQkFBM0NDLFFBQVEsR0FBRyxhQUFnQztvQkFDMUM7O3dCQUFNQSxRQUFRLENBQUNLLElBQUksRUFBRTtzQkFBQTs7b0JBQTVCOzt3QkFBTyxhQUFxQjtzQkFBQzs7O0lBQ2pDLENBQUM7V0FQY1QsSUFBRzs7U0FRSEMsSUFBSSxDQUFDQyxHQUFHLEVBQUVRLElBQUk7V0FBZFQsS0FBSTs7U0FBSkEsS0FBSTtJQUFKQSxLQUFJLEdBQW5CLDZGQUFvQkMsR0FBRyxFQUFFUSxJQUFJLEVBQUU7WUFDckJQLGNBQWMsRUFLZEMsUUFBUTs7OztvQkFMUkQsY0FBYyxHQUFHO3dCQUNuQkUsTUFBTSxFQUFFLE1BQU07d0JBQ2RDLE9BQU8sRUFBRTs0QkFBRSxjQUFjLEVBQUUsa0JBQWtCOzJCQUFLQyxVQUFVLEVBQUUsQ0FBRTt3QkFDaEVHLElBQUksRUFBRUMsSUFBSSxDQUFDQyxTQUFTLENBQUNGLElBQUksQ0FBQztxQkFDN0IsQ0FBQztvQkFDZTs7d0JBQU1GLEtBQUssQ0FBQ04sR0FBRyxFQUFFQyxjQUFjLENBQUM7c0JBQUE7O29CQUEzQ0MsUUFBUSxHQUFHLGFBQWdDO29CQUMxQzs7d0JBQU1BLFFBQVEsQ0FBQ0ssSUFBSSxFQUFFO3NCQUFBOztvQkFBNUI7O3dCQUFPLGFBQXFCO3NCQUFDOzs7SUFDakMsQ0FBQztXQVJjUixLQUFJOztBQVVuQixTQUFTTSxVQUFVLEdBQUc7SUFDbEIsSUFBTU0sSUFBSSxHQUFHZixvRUFBZ0I7SUFDN0IsSUFBTWdCLFVBQVUsR0FBR0QsSUFBSSxJQUFJQSxJQUFJLENBQUNFLElBQUksQ0FBQ0MsWUFBWTtJQUNqRCxJQUFJRixVQUFVLEVBQUU7UUFDWixPQUFPO1lBQUUsY0FBYyxFQUFHRCxJQUFJLENBQUNFLElBQUksQ0FBQ0MsWUFBWTtTQUFDLENBQUM7SUFDdEQsT0FBTztRQUNILE9BQU8sRUFBRSxDQUFDO0lBQ2QsQ0FBQztBQUNMLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vaGVscGVycy9odHRwLmpzPzZlOTAiXSwic291cmNlc0NvbnRlbnQiOlsiXG5cbmltcG9ydCB7IHVzZXJTZXJ2aWNlIH0gZnJvbSAnLi4vc2VydmljZXMvdXNlci5zZXJ2aWNlJztcbmV4cG9ydCBjb25zdCBodHRwID0ge1xuICAgIGdldCxcbiAgICBwb3N0LFxufTtcblxuYXN5bmMgZnVuY3Rpb24gZ2V0KHVybCkge1xuICAgIGNvbnN0IHJlcXVlc3RPcHRpb25zID0ge1xuICAgICAgICBtZXRob2Q6ICdHRVQnLFxuICAgICAgICBoZWFkZXJzOiB7ICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbicsIC4uLmF1dGhIZWFkZXIoKSB9XG4gICAgfTtcbiAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKHVybCwgcmVxdWVzdE9wdGlvbnMpO1xuICAgIHJldHVybiBhd2FpdCByZXNwb25zZS5qc29uKCk7XG59XG5hc3luYyBmdW5jdGlvbiBwb3N0KHVybCwgYm9keSkge1xuICAgIGNvbnN0IHJlcXVlc3RPcHRpb25zID0ge1xuICAgICAgICBtZXRob2Q6ICdQT1NUJyxcbiAgICAgICAgaGVhZGVyczogeyAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nLCAuLi5hdXRoSGVhZGVyKCkgfSxcbiAgICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkoYm9keSlcbiAgICB9O1xuICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2godXJsLCByZXF1ZXN0T3B0aW9ucyk7XG4gICAgcmV0dXJuIGF3YWl0IHJlc3BvbnNlLmpzb24oKTtcbn1cblxuZnVuY3Rpb24gYXV0aEhlYWRlcigpIHtcbiAgICBjb25zdCB1c2VyID0gdXNlclNlcnZpY2UudXNlcjtcbiAgICBjb25zdCBpc0xvZ2dlZEluID0gdXNlciAmJiB1c2VyLmRhdGEuYWNjZXNzX3Rva2VuO1xuICAgIGlmIChpc0xvZ2dlZEluKSB7XG4gICAgICAgIHJldHVybiB7IFwiYWNjZXNzLXRva2VuXCI6ICB1c2VyLmRhdGEuYWNjZXNzX3Rva2VufTtcbiAgICB9IGVsc2Uge1xuICAgICAgICByZXR1cm4ge307XG4gICAgfVxufSJdLCJuYW1lcyI6WyJ1c2VyU2VydmljZSIsImh0dHAiLCJnZXQiLCJwb3N0IiwidXJsIiwicmVxdWVzdE9wdGlvbnMiLCJyZXNwb25zZSIsIm1ldGhvZCIsImhlYWRlcnMiLCJhdXRoSGVhZGVyIiwiZmV0Y2giLCJqc29uIiwiYm9keSIsIkpTT04iLCJzdHJpbmdpZnkiLCJ1c2VyIiwiaXNMb2dnZWRJbiIsImRhdGEiLCJhY2Nlc3NfdG9rZW4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./helpers/http.js\n"));

/***/ })

});