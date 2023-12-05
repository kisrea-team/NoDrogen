"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
exports.id = "vendor-chunks/escape-string-regexp";
exports.ids = ["vendor-chunks/escape-string-regexp"];
exports.modules = {

/***/ "(rsc)/./node_modules/escape-string-regexp/index.js":
/*!****************************************************!*\
  !*** ./node_modules/escape-string-regexp/index.js ***!
  \****************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ escapeStringRegexp)\n/* harmony export */ });\nfunction escapeStringRegexp(string) {\n    if (typeof string !== \"string\") {\n        throw new TypeError(\"Expected a string\");\n    }\n    // Escape characters with special meaning either inside or outside character sets.\n    // Use a simple backslash escape when it’s always valid, and a `\\xnn` escape when the simpler form would be disallowed by Unicode patterns’ stricter grammar.\n    return string.replace(/[|\\\\{}()[\\]^$+*?.]/g, \"\\\\$&\").replace(/-/g, \"\\\\x2d\");\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9ub2RlX21vZHVsZXMvZXNjYXBlLXN0cmluZy1yZWdleHAvaW5kZXguanMiLCJtYXBwaW5ncyI6Ijs7OztBQUFlLFNBQVNBLG1CQUFtQkMsTUFBTTtJQUNoRCxJQUFJLE9BQU9BLFdBQVcsVUFBVTtRQUMvQixNQUFNLElBQUlDLFVBQVU7SUFDckI7SUFFQSxrRkFBa0Y7SUFDbEYsNkpBQTZKO0lBQzdKLE9BQU9ELE9BQ0xFLE9BQU8sQ0FBQyx1QkFBdUIsUUFDL0JBLE9BQU8sQ0FBQyxNQUFNO0FBQ2pCIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vbm90aW9uLXgtZnVsbC8uL25vZGVfbW9kdWxlcy9lc2NhcGUtc3RyaW5nLXJlZ2V4cC9pbmRleC5qcz9hODczIl0sInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGVzY2FwZVN0cmluZ1JlZ2V4cChzdHJpbmcpIHtcblx0aWYgKHR5cGVvZiBzdHJpbmcgIT09ICdzdHJpbmcnKSB7XG5cdFx0dGhyb3cgbmV3IFR5cGVFcnJvcignRXhwZWN0ZWQgYSBzdHJpbmcnKTtcblx0fVxuXG5cdC8vIEVzY2FwZSBjaGFyYWN0ZXJzIHdpdGggc3BlY2lhbCBtZWFuaW5nIGVpdGhlciBpbnNpZGUgb3Igb3V0c2lkZSBjaGFyYWN0ZXIgc2V0cy5cblx0Ly8gVXNlIGEgc2ltcGxlIGJhY2tzbGFzaCBlc2NhcGUgd2hlbiBpdOKAmXMgYWx3YXlzIHZhbGlkLCBhbmQgYSBgXFx4bm5gIGVzY2FwZSB3aGVuIHRoZSBzaW1wbGVyIGZvcm0gd291bGQgYmUgZGlzYWxsb3dlZCBieSBVbmljb2RlIHBhdHRlcm5z4oCZIHN0cmljdGVyIGdyYW1tYXIuXG5cdHJldHVybiBzdHJpbmdcblx0XHQucmVwbGFjZSgvW3xcXFxce30oKVtcXF1eJCsqPy5dL2csICdcXFxcJCYnKVxuXHRcdC5yZXBsYWNlKC8tL2csICdcXFxceDJkJyk7XG59XG4iXSwibmFtZXMiOlsiZXNjYXBlU3RyaW5nUmVnZXhwIiwic3RyaW5nIiwiVHlwZUVycm9yIiwicmVwbGFjZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(rsc)/./node_modules/escape-string-regexp/index.js\n");

/***/ })

};
;