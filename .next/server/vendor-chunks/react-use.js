"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
exports.id = "vendor-chunks/react-use";
exports.ids = ["vendor-chunks/react-use"];
exports.modules = {

/***/ "(ssr)/./node_modules/react-use/esm/misc/util.js":
/*!*************************************************!*\
  !*** ./node_modules/react-use/esm/misc/util.js ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   isBrowser: () => (/* binding */ isBrowser),\n/* harmony export */   isNavigator: () => (/* binding */ isNavigator),\n/* harmony export */   noop: () => (/* binding */ noop),\n/* harmony export */   off: () => (/* binding */ off),\n/* harmony export */   on: () => (/* binding */ on)\n/* harmony export */ });\nvar noop = function () { };\nfunction on(obj) {\n    var args = [];\n    for (var _i = 1; _i < arguments.length; _i++) {\n        args[_i - 1] = arguments[_i];\n    }\n    if (obj && obj.addEventListener) {\n        obj.addEventListener.apply(obj, args);\n    }\n}\nfunction off(obj) {\n    var args = [];\n    for (var _i = 1; _i < arguments.length; _i++) {\n        args[_i - 1] = arguments[_i];\n    }\n    if (obj && obj.removeEventListener) {\n        obj.removeEventListener.apply(obj, args);\n    }\n}\nvar isBrowser = typeof window !== 'undefined';\nvar isNavigator = typeof navigator !== 'undefined';\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHNzcikvLi9ub2RlX21vZHVsZXMvcmVhY3QtdXNlL2VzbS9taXNjL3V0aWwuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBTztBQUNBO0FBQ1A7QUFDQSxxQkFBcUIsdUJBQXVCO0FBQzVDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNPO0FBQ1A7QUFDQSxxQkFBcUIsdUJBQXVCO0FBQzVDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNPO0FBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9ub3Rpb24teC1leGFtcGxlLWZ1bGwvLi9ub2RlX21vZHVsZXMvcmVhY3QtdXNlL2VzbS9taXNjL3V0aWwuanM/M2VkZiJdLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgdmFyIG5vb3AgPSBmdW5jdGlvbiAoKSB7IH07XG5leHBvcnQgZnVuY3Rpb24gb24ob2JqKSB7XG4gICAgdmFyIGFyZ3MgPSBbXTtcbiAgICBmb3IgKHZhciBfaSA9IDE7IF9pIDwgYXJndW1lbnRzLmxlbmd0aDsgX2krKykge1xuICAgICAgICBhcmdzW19pIC0gMV0gPSBhcmd1bWVudHNbX2ldO1xuICAgIH1cbiAgICBpZiAob2JqICYmIG9iai5hZGRFdmVudExpc3RlbmVyKSB7XG4gICAgICAgIG9iai5hZGRFdmVudExpc3RlbmVyLmFwcGx5KG9iaiwgYXJncyk7XG4gICAgfVxufVxuZXhwb3J0IGZ1bmN0aW9uIG9mZihvYmopIHtcbiAgICB2YXIgYXJncyA9IFtdO1xuICAgIGZvciAodmFyIF9pID0gMTsgX2kgPCBhcmd1bWVudHMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICAgIGFyZ3NbX2kgLSAxXSA9IGFyZ3VtZW50c1tfaV07XG4gICAgfVxuICAgIGlmIChvYmogJiYgb2JqLnJlbW92ZUV2ZW50TGlzdGVuZXIpIHtcbiAgICAgICAgb2JqLnJlbW92ZUV2ZW50TGlzdGVuZXIuYXBwbHkob2JqLCBhcmdzKTtcbiAgICB9XG59XG5leHBvcnQgdmFyIGlzQnJvd3NlciA9IHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnO1xuZXhwb3J0IHZhciBpc05hdmlnYXRvciA9IHR5cGVvZiBuYXZpZ2F0b3IgIT09ICd1bmRlZmluZWQnO1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(ssr)/./node_modules/react-use/esm/misc/util.js\n");

/***/ }),

/***/ "(ssr)/./node_modules/react-use/esm/useEffectOnce.js":
/*!*****************************************************!*\
  !*** ./node_modules/react-use/esm/useEffectOnce.js ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"(ssr)/./node_modules/next/dist/server/future/route-modules/app-page/vendored/ssr/react.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n\nvar useEffectOnce = function (effect) {\n    (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(effect, []);\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (useEffectOnce);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHNzcikvLi9ub2RlX21vZHVsZXMvcmVhY3QtdXNlL2VzbS91c2VFZmZlY3RPbmNlLmpzIiwibWFwcGluZ3MiOiI7Ozs7OztBQUFrQztBQUNsQztBQUNBLElBQUksZ0RBQVM7QUFDYjtBQUNBLGlFQUFlLGFBQWEsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL25vdGlvbi14LWV4YW1wbGUtZnVsbC8uL25vZGVfbW9kdWxlcy9yZWFjdC11c2UvZXNtL3VzZUVmZmVjdE9uY2UuanM/NTNmNCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCc7XG52YXIgdXNlRWZmZWN0T25jZSA9IGZ1bmN0aW9uIChlZmZlY3QpIHtcbiAgICB1c2VFZmZlY3QoZWZmZWN0LCBbXSk7XG59O1xuZXhwb3J0IGRlZmF1bHQgdXNlRWZmZWN0T25jZTtcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(ssr)/./node_modules/react-use/esm/useEffectOnce.js\n");

/***/ }),

/***/ "(ssr)/./node_modules/react-use/esm/useLocalStorage.js":
/*!*******************************************************!*\
  !*** ./node_modules/react-use/esm/useLocalStorage.js ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"(ssr)/./node_modules/next/dist/server/future/route-modules/app-page/vendored/ssr/react.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _misc_util__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./misc/util */ \"(ssr)/./node_modules/react-use/esm/misc/util.js\");\n\n\nvar useLocalStorage = function (key, initialValue, options) {\n    if (!_misc_util__WEBPACK_IMPORTED_MODULE_1__.isBrowser) {\n        return [initialValue, _misc_util__WEBPACK_IMPORTED_MODULE_1__.noop, _misc_util__WEBPACK_IMPORTED_MODULE_1__.noop];\n    }\n    if (!key) {\n        throw new Error('useLocalStorage key may not be falsy');\n    }\n    var deserializer = options\n        ? options.raw\n            ? function (value) { return value; }\n            : options.deserializer\n        : JSON.parse;\n    // eslint-disable-next-line react-hooks/rules-of-hooks\n    var initializer = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(function (key) {\n        try {\n            var serializer = options ? (options.raw ? String : options.serializer) : JSON.stringify;\n            var localStorageValue = localStorage.getItem(key);\n            if (localStorageValue !== null) {\n                return deserializer(localStorageValue);\n            }\n            else {\n                initialValue && localStorage.setItem(key, serializer(initialValue));\n                return initialValue;\n            }\n        }\n        catch (_a) {\n            // If user is in private mode or has storage restriction\n            // localStorage can throw. JSON.parse and JSON.stringify\n            // can throw, too.\n            return initialValue;\n        }\n    });\n    // eslint-disable-next-line react-hooks/rules-of-hooks\n    var _a = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(function () { return initializer.current(key); }), state = _a[0], setState = _a[1];\n    // eslint-disable-next-line react-hooks/rules-of-hooks\n    (0,react__WEBPACK_IMPORTED_MODULE_0__.useLayoutEffect)(function () { return setState(initializer.current(key)); }, [key]);\n    // eslint-disable-next-line react-hooks/rules-of-hooks\n    var set = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(function (valOrFunc) {\n        try {\n            var newState = typeof valOrFunc === 'function' ? valOrFunc(state) : valOrFunc;\n            if (typeof newState === 'undefined')\n                return;\n            var value = void 0;\n            if (options)\n                if (options.raw)\n                    if (typeof newState === 'string')\n                        value = newState;\n                    else\n                        value = JSON.stringify(newState);\n                else if (options.serializer)\n                    value = options.serializer(newState);\n                else\n                    value = JSON.stringify(newState);\n            else\n                value = JSON.stringify(newState);\n            localStorage.setItem(key, value);\n            setState(deserializer(value));\n        }\n        catch (_a) {\n            // If user is in private mode or has storage restriction\n            // localStorage can throw. Also JSON.stringify can throw.\n        }\n    }, [key, setState]);\n    // eslint-disable-next-line react-hooks/rules-of-hooks\n    var remove = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(function () {\n        try {\n            localStorage.removeItem(key);\n            setState(undefined);\n        }\n        catch (_a) {\n            // If user is in private mode or has storage restriction\n            // localStorage can throw.\n        }\n    }, [key, setState]);\n    return [state, set, remove];\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (useLocalStorage);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHNzcikvLi9ub2RlX21vZHVsZXMvcmVhY3QtdXNlL2VzbS91c2VMb2NhbFN0b3JhZ2UuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUF1RTtBQUN6QjtBQUM5QztBQUNBLFNBQVMsaURBQVM7QUFDbEIsOEJBQThCLDRDQUFJLEVBQUUsNENBQUk7QUFDeEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUNBQWlDO0FBQ2pDO0FBQ0E7QUFDQTtBQUNBLHNCQUFzQiw2Q0FBTTtBQUM1QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0EsYUFBYSwrQ0FBUSxlQUFlLGtDQUFrQztBQUN0RTtBQUNBLElBQUksc0RBQWUsZUFBZSw0Q0FBNEM7QUFDOUU7QUFDQSxjQUFjLGtEQUFXO0FBQ3pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBLGlCQUFpQixrREFBVztBQUM1QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSxpRUFBZSxlQUFlLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9ub3Rpb24teC1leGFtcGxlLWZ1bGwvLi9ub2RlX21vZHVsZXMvcmVhY3QtdXNlL2VzbS91c2VMb2NhbFN0b3JhZ2UuanM/YmU3YyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VDYWxsYmFjaywgdXNlU3RhdGUsIHVzZVJlZiwgdXNlTGF5b3V0RWZmZWN0IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgaXNCcm93c2VyLCBub29wIH0gZnJvbSAnLi9taXNjL3V0aWwnO1xudmFyIHVzZUxvY2FsU3RvcmFnZSA9IGZ1bmN0aW9uIChrZXksIGluaXRpYWxWYWx1ZSwgb3B0aW9ucykge1xuICAgIGlmICghaXNCcm93c2VyKSB7XG4gICAgICAgIHJldHVybiBbaW5pdGlhbFZhbHVlLCBub29wLCBub29wXTtcbiAgICB9XG4gICAgaWYgKCFrZXkpIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKCd1c2VMb2NhbFN0b3JhZ2Uga2V5IG1heSBub3QgYmUgZmFsc3knKTtcbiAgICB9XG4gICAgdmFyIGRlc2VyaWFsaXplciA9IG9wdGlvbnNcbiAgICAgICAgPyBvcHRpb25zLnJhd1xuICAgICAgICAgICAgPyBmdW5jdGlvbiAodmFsdWUpIHsgcmV0dXJuIHZhbHVlOyB9XG4gICAgICAgICAgICA6IG9wdGlvbnMuZGVzZXJpYWxpemVyXG4gICAgICAgIDogSlNPTi5wYXJzZTtcbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgcmVhY3QtaG9va3MvcnVsZXMtb2YtaG9va3NcbiAgICB2YXIgaW5pdGlhbGl6ZXIgPSB1c2VSZWYoZnVuY3Rpb24gKGtleSkge1xuICAgICAgICB0cnkge1xuICAgICAgICAgICAgdmFyIHNlcmlhbGl6ZXIgPSBvcHRpb25zID8gKG9wdGlvbnMucmF3ID8gU3RyaW5nIDogb3B0aW9ucy5zZXJpYWxpemVyKSA6IEpTT04uc3RyaW5naWZ5O1xuICAgICAgICAgICAgdmFyIGxvY2FsU3RvcmFnZVZhbHVlID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oa2V5KTtcbiAgICAgICAgICAgIGlmIChsb2NhbFN0b3JhZ2VWYWx1ZSAhPT0gbnVsbCkge1xuICAgICAgICAgICAgICAgIHJldHVybiBkZXNlcmlhbGl6ZXIobG9jYWxTdG9yYWdlVmFsdWUpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgaW5pdGlhbFZhbHVlICYmIGxvY2FsU3RvcmFnZS5zZXRJdGVtKGtleSwgc2VyaWFsaXplcihpbml0aWFsVmFsdWUpKTtcbiAgICAgICAgICAgICAgICByZXR1cm4gaW5pdGlhbFZhbHVlO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGNhdGNoIChfYSkge1xuICAgICAgICAgICAgLy8gSWYgdXNlciBpcyBpbiBwcml2YXRlIG1vZGUgb3IgaGFzIHN0b3JhZ2UgcmVzdHJpY3Rpb25cbiAgICAgICAgICAgIC8vIGxvY2FsU3RvcmFnZSBjYW4gdGhyb3cuIEpTT04ucGFyc2UgYW5kIEpTT04uc3RyaW5naWZ5XG4gICAgICAgICAgICAvLyBjYW4gdGhyb3csIHRvby5cbiAgICAgICAgICAgIHJldHVybiBpbml0aWFsVmFsdWU7XG4gICAgICAgIH1cbiAgICB9KTtcbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgcmVhY3QtaG9va3MvcnVsZXMtb2YtaG9va3NcbiAgICB2YXIgX2EgPSB1c2VTdGF0ZShmdW5jdGlvbiAoKSB7IHJldHVybiBpbml0aWFsaXplci5jdXJyZW50KGtleSk7IH0pLCBzdGF0ZSA9IF9hWzBdLCBzZXRTdGF0ZSA9IF9hWzFdO1xuICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSByZWFjdC1ob29rcy9ydWxlcy1vZi1ob29rc1xuICAgIHVzZUxheW91dEVmZmVjdChmdW5jdGlvbiAoKSB7IHJldHVybiBzZXRTdGF0ZShpbml0aWFsaXplci5jdXJyZW50KGtleSkpOyB9LCBba2V5XSk7XG4gICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIHJlYWN0LWhvb2tzL3J1bGVzLW9mLWhvb2tzXG4gICAgdmFyIHNldCA9IHVzZUNhbGxiYWNrKGZ1bmN0aW9uICh2YWxPckZ1bmMpIHtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIHZhciBuZXdTdGF0ZSA9IHR5cGVvZiB2YWxPckZ1bmMgPT09ICdmdW5jdGlvbicgPyB2YWxPckZ1bmMoc3RhdGUpIDogdmFsT3JGdW5jO1xuICAgICAgICAgICAgaWYgKHR5cGVvZiBuZXdTdGF0ZSA9PT0gJ3VuZGVmaW5lZCcpXG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgdmFyIHZhbHVlID0gdm9pZCAwO1xuICAgICAgICAgICAgaWYgKG9wdGlvbnMpXG4gICAgICAgICAgICAgICAgaWYgKG9wdGlvbnMucmF3KVxuICAgICAgICAgICAgICAgICAgICBpZiAodHlwZW9mIG5ld1N0YXRlID09PSAnc3RyaW5nJylcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlID0gbmV3U3RhdGU7XG4gICAgICAgICAgICAgICAgICAgIGVsc2VcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlID0gSlNPTi5zdHJpbmdpZnkobmV3U3RhdGUpO1xuICAgICAgICAgICAgICAgIGVsc2UgaWYgKG9wdGlvbnMuc2VyaWFsaXplcilcbiAgICAgICAgICAgICAgICAgICAgdmFsdWUgPSBvcHRpb25zLnNlcmlhbGl6ZXIobmV3U3RhdGUpO1xuICAgICAgICAgICAgICAgIGVsc2VcbiAgICAgICAgICAgICAgICAgICAgdmFsdWUgPSBKU09OLnN0cmluZ2lmeShuZXdTdGF0ZSk7XG4gICAgICAgICAgICBlbHNlXG4gICAgICAgICAgICAgICAgdmFsdWUgPSBKU09OLnN0cmluZ2lmeShuZXdTdGF0ZSk7XG4gICAgICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShrZXksIHZhbHVlKTtcbiAgICAgICAgICAgIHNldFN0YXRlKGRlc2VyaWFsaXplcih2YWx1ZSkpO1xuICAgICAgICB9XG4gICAgICAgIGNhdGNoIChfYSkge1xuICAgICAgICAgICAgLy8gSWYgdXNlciBpcyBpbiBwcml2YXRlIG1vZGUgb3IgaGFzIHN0b3JhZ2UgcmVzdHJpY3Rpb25cbiAgICAgICAgICAgIC8vIGxvY2FsU3RvcmFnZSBjYW4gdGhyb3cuIEFsc28gSlNPTi5zdHJpbmdpZnkgY2FuIHRocm93LlxuICAgICAgICB9XG4gICAgfSwgW2tleSwgc2V0U3RhdGVdKTtcbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgcmVhY3QtaG9va3MvcnVsZXMtb2YtaG9va3NcbiAgICB2YXIgcmVtb3ZlID0gdXNlQ2FsbGJhY2soZnVuY3Rpb24gKCkge1xuICAgICAgICB0cnkge1xuICAgICAgICAgICAgbG9jYWxTdG9yYWdlLnJlbW92ZUl0ZW0oa2V5KTtcbiAgICAgICAgICAgIHNldFN0YXRlKHVuZGVmaW5lZCk7XG4gICAgICAgIH1cbiAgICAgICAgY2F0Y2ggKF9hKSB7XG4gICAgICAgICAgICAvLyBJZiB1c2VyIGlzIGluIHByaXZhdGUgbW9kZSBvciBoYXMgc3RvcmFnZSByZXN0cmljdGlvblxuICAgICAgICAgICAgLy8gbG9jYWxTdG9yYWdlIGNhbiB0aHJvdy5cbiAgICAgICAgfVxuICAgIH0sIFtrZXksIHNldFN0YXRlXSk7XG4gICAgcmV0dXJuIFtzdGF0ZSwgc2V0LCByZW1vdmVdO1xufTtcbmV4cG9ydCBkZWZhdWx0IHVzZUxvY2FsU3RvcmFnZTtcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(ssr)/./node_modules/react-use/esm/useLocalStorage.js\n");

/***/ }),

/***/ "(ssr)/./node_modules/react-use/esm/useRafState.js":
/*!***************************************************!*\
  !*** ./node_modules/react-use/esm/useRafState.js ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"(ssr)/./node_modules/next/dist/server/future/route-modules/app-page/vendored/ssr/react.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _useUnmount__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./useUnmount */ \"(ssr)/./node_modules/react-use/esm/useUnmount.js\");\n\n\nvar useRafState = function (initialState) {\n    var frame = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(0);\n    var _a = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(initialState), state = _a[0], setState = _a[1];\n    var setRafState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(function (value) {\n        cancelAnimationFrame(frame.current);\n        frame.current = requestAnimationFrame(function () {\n            setState(value);\n        });\n    }, []);\n    (0,_useUnmount__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(function () {\n        cancelAnimationFrame(frame.current);\n    });\n    return [state, setRafState];\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (useRafState);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHNzcikvLi9ub2RlX21vZHVsZXMvcmVhY3QtdXNlL2VzbS91c2VSYWZTdGF0ZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQXNEO0FBQ2hCO0FBQ3RDO0FBQ0EsZ0JBQWdCLDZDQUFNO0FBQ3RCLGFBQWEsK0NBQVE7QUFDckIsc0JBQXNCLGtEQUFXO0FBQ2pDO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVCxLQUFLO0FBQ0wsSUFBSSx1REFBVTtBQUNkO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSxpRUFBZSxXQUFXLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9ub3Rpb24teC1leGFtcGxlLWZ1bGwvLi9ub2RlX21vZHVsZXMvcmVhY3QtdXNlL2VzbS91c2VSYWZTdGF0ZS5qcz80ZjM2Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZUNhbGxiYWNrLCB1c2VSZWYsIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHVzZVVubW91bnQgZnJvbSAnLi91c2VVbm1vdW50JztcbnZhciB1c2VSYWZTdGF0ZSA9IGZ1bmN0aW9uIChpbml0aWFsU3RhdGUpIHtcbiAgICB2YXIgZnJhbWUgPSB1c2VSZWYoMCk7XG4gICAgdmFyIF9hID0gdXNlU3RhdGUoaW5pdGlhbFN0YXRlKSwgc3RhdGUgPSBfYVswXSwgc2V0U3RhdGUgPSBfYVsxXTtcbiAgICB2YXIgc2V0UmFmU3RhdGUgPSB1c2VDYWxsYmFjayhmdW5jdGlvbiAodmFsdWUpIHtcbiAgICAgICAgY2FuY2VsQW5pbWF0aW9uRnJhbWUoZnJhbWUuY3VycmVudCk7XG4gICAgICAgIGZyYW1lLmN1cnJlbnQgPSByZXF1ZXN0QW5pbWF0aW9uRnJhbWUoZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgc2V0U3RhdGUodmFsdWUpO1xuICAgICAgICB9KTtcbiAgICB9LCBbXSk7XG4gICAgdXNlVW5tb3VudChmdW5jdGlvbiAoKSB7XG4gICAgICAgIGNhbmNlbEFuaW1hdGlvbkZyYW1lKGZyYW1lLmN1cnJlbnQpO1xuICAgIH0pO1xuICAgIHJldHVybiBbc3RhdGUsIHNldFJhZlN0YXRlXTtcbn07XG5leHBvcnQgZGVmYXVsdCB1c2VSYWZTdGF0ZTtcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(ssr)/./node_modules/react-use/esm/useRafState.js\n");

/***/ }),

/***/ "(ssr)/./node_modules/react-use/esm/useUnmount.js":
/*!**************************************************!*\
  !*** ./node_modules/react-use/esm/useUnmount.js ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"(ssr)/./node_modules/next/dist/server/future/route-modules/app-page/vendored/ssr/react.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _useEffectOnce__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./useEffectOnce */ \"(ssr)/./node_modules/react-use/esm/useEffectOnce.js\");\n\n\nvar useUnmount = function (fn) {\n    var fnRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(fn);\n    // update the ref each render so if it change the newest callback will be invoked\n    fnRef.current = fn;\n    (0,_useEffectOnce__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(function () { return function () { return fnRef.current(); }; });\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (useUnmount);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHNzcikvLi9ub2RlX21vZHVsZXMvcmVhY3QtdXNlL2VzbS91c2VVbm1vdW50LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBK0I7QUFDYTtBQUM1QztBQUNBLGdCQUFnQiw2Q0FBTTtBQUN0QjtBQUNBO0FBQ0EsSUFBSSwwREFBYSxlQUFlLHFCQUFxQiw0QkFBNEI7QUFDakY7QUFDQSxpRUFBZSxVQUFVLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9ub3Rpb24teC1leGFtcGxlLWZ1bGwvLi9ub2RlX21vZHVsZXMvcmVhY3QtdXNlL2VzbS91c2VVbm1vdW50LmpzPzhjYjUiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlUmVmIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHVzZUVmZmVjdE9uY2UgZnJvbSAnLi91c2VFZmZlY3RPbmNlJztcbnZhciB1c2VVbm1vdW50ID0gZnVuY3Rpb24gKGZuKSB7XG4gICAgdmFyIGZuUmVmID0gdXNlUmVmKGZuKTtcbiAgICAvLyB1cGRhdGUgdGhlIHJlZiBlYWNoIHJlbmRlciBzbyBpZiBpdCBjaGFuZ2UgdGhlIG5ld2VzdCBjYWxsYmFjayB3aWxsIGJlIGludm9rZWRcbiAgICBmblJlZi5jdXJyZW50ID0gZm47XG4gICAgdXNlRWZmZWN0T25jZShmdW5jdGlvbiAoKSB7IHJldHVybiBmdW5jdGlvbiAoKSB7IHJldHVybiBmblJlZi5jdXJyZW50KCk7IH07IH0pO1xufTtcbmV4cG9ydCBkZWZhdWx0IHVzZVVubW91bnQ7XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(ssr)/./node_modules/react-use/esm/useUnmount.js\n");

/***/ }),

/***/ "(ssr)/./node_modules/react-use/esm/useWindowSize.js":
/*!*****************************************************!*\
  !*** ./node_modules/react-use/esm/useWindowSize.js ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"(ssr)/./node_modules/next/dist/server/future/route-modules/app-page/vendored/ssr/react.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _useRafState__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./useRafState */ \"(ssr)/./node_modules/react-use/esm/useRafState.js\");\n/* harmony import */ var _misc_util__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./misc/util */ \"(ssr)/./node_modules/react-use/esm/misc/util.js\");\n\n\n\nvar useWindowSize = function (initialWidth, initialHeight) {\n    if (initialWidth === void 0) { initialWidth = Infinity; }\n    if (initialHeight === void 0) { initialHeight = Infinity; }\n    var _a = (0,_useRafState__WEBPACK_IMPORTED_MODULE_1__[\"default\"])({\n        width: _misc_util__WEBPACK_IMPORTED_MODULE_2__.isBrowser ? window.innerWidth : initialWidth,\n        height: _misc_util__WEBPACK_IMPORTED_MODULE_2__.isBrowser ? window.innerHeight : initialHeight,\n    }), state = _a[0], setState = _a[1];\n    (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {\n        if (_misc_util__WEBPACK_IMPORTED_MODULE_2__.isBrowser) {\n            var handler_1 = function () {\n                setState({\n                    width: window.innerWidth,\n                    height: window.innerHeight,\n                });\n            };\n            (0,_misc_util__WEBPACK_IMPORTED_MODULE_2__.on)(window, 'resize', handler_1);\n            return function () {\n                (0,_misc_util__WEBPACK_IMPORTED_MODULE_2__.off)(window, 'resize', handler_1);\n            };\n        }\n    }, []);\n    return state;\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (useWindowSize);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHNzcikvLi9ub2RlX21vZHVsZXMvcmVhY3QtdXNlL2VzbS91c2VXaW5kb3dTaXplLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQWtDO0FBQ007QUFDUztBQUNqRDtBQUNBLG1DQUFtQztBQUNuQyxvQ0FBb0M7QUFDcEMsYUFBYSx3REFBVztBQUN4QixlQUFlLGlEQUFTO0FBQ3hCLGdCQUFnQixpREFBUztBQUN6QixLQUFLO0FBQ0wsSUFBSSxnREFBUztBQUNiLFlBQVksaURBQVM7QUFDckI7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUI7QUFDakI7QUFDQSxZQUFZLDhDQUFFO0FBQ2Q7QUFDQSxnQkFBZ0IsK0NBQUc7QUFDbkI7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0EsaUVBQWUsYUFBYSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vbm90aW9uLXgtZXhhbXBsZS1mdWxsLy4vbm9kZV9tb2R1bGVzL3JlYWN0LXVzZS9lc20vdXNlV2luZG93U2l6ZS5qcz85ZmZmIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB1c2VSYWZTdGF0ZSBmcm9tICcuL3VzZVJhZlN0YXRlJztcbmltcG9ydCB7IGlzQnJvd3Nlciwgb2ZmLCBvbiB9IGZyb20gJy4vbWlzYy91dGlsJztcbnZhciB1c2VXaW5kb3dTaXplID0gZnVuY3Rpb24gKGluaXRpYWxXaWR0aCwgaW5pdGlhbEhlaWdodCkge1xuICAgIGlmIChpbml0aWFsV2lkdGggPT09IHZvaWQgMCkgeyBpbml0aWFsV2lkdGggPSBJbmZpbml0eTsgfVxuICAgIGlmIChpbml0aWFsSGVpZ2h0ID09PSB2b2lkIDApIHsgaW5pdGlhbEhlaWdodCA9IEluZmluaXR5OyB9XG4gICAgdmFyIF9hID0gdXNlUmFmU3RhdGUoe1xuICAgICAgICB3aWR0aDogaXNCcm93c2VyID8gd2luZG93LmlubmVyV2lkdGggOiBpbml0aWFsV2lkdGgsXG4gICAgICAgIGhlaWdodDogaXNCcm93c2VyID8gd2luZG93LmlubmVySGVpZ2h0IDogaW5pdGlhbEhlaWdodCxcbiAgICB9KSwgc3RhdGUgPSBfYVswXSwgc2V0U3RhdGUgPSBfYVsxXTtcbiAgICB1c2VFZmZlY3QoZnVuY3Rpb24gKCkge1xuICAgICAgICBpZiAoaXNCcm93c2VyKSB7XG4gICAgICAgICAgICB2YXIgaGFuZGxlcl8xID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgIHNldFN0YXRlKHtcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6IHdpbmRvdy5pbm5lcldpZHRoLFxuICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IHdpbmRvdy5pbm5lckhlaWdodCxcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH07XG4gICAgICAgICAgICBvbih3aW5kb3csICdyZXNpemUnLCBoYW5kbGVyXzEpO1xuICAgICAgICAgICAgcmV0dXJuIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICBvZmYod2luZG93LCAncmVzaXplJywgaGFuZGxlcl8xKTtcbiAgICAgICAgICAgIH07XG4gICAgICAgIH1cbiAgICB9LCBbXSk7XG4gICAgcmV0dXJuIHN0YXRlO1xufTtcbmV4cG9ydCBkZWZhdWx0IHVzZVdpbmRvd1NpemU7XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(ssr)/./node_modules/react-use/esm/useWindowSize.js\n");

/***/ })

};
;