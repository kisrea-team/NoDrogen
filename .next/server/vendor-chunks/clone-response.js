"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
exports.id = "vendor-chunks/clone-response";
exports.ids = ["vendor-chunks/clone-response"];
exports.modules = {

/***/ "(rsc)/./node_modules/clone-response/src/index.js":
/*!**************************************************!*\
  !*** ./node_modules/clone-response/src/index.js ***!
  \**************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\nconst PassThrough = (__webpack_require__(/*! stream */ \"stream\").PassThrough);\nconst mimicResponse = __webpack_require__(/*! mimic-response */ \"(rsc)/./node_modules/mimic-response/index.js\");\nconst cloneResponse = (response)=>{\n    if (!(response && response.pipe)) {\n        throw new TypeError(\"Parameter `response` must be a response stream.\");\n    }\n    const clone = new PassThrough();\n    mimicResponse(response, clone);\n    return response.pipe(clone);\n};\nmodule.exports = cloneResponse;\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9ub2RlX21vZHVsZXMvY2xvbmUtcmVzcG9uc2Uvc3JjL2luZGV4LmpzIiwibWFwcGluZ3MiOiJBQUFBO0FBRUEsTUFBTUEsY0FBY0MseURBQTZCO0FBQ2pELE1BQU1DLGdCQUFnQkQsbUJBQU9BLENBQUM7QUFFOUIsTUFBTUUsZ0JBQWdCQyxDQUFBQTtJQUNyQixJQUFJLENBQUVBLENBQUFBLFlBQVlBLFNBQVNDLElBQUksR0FBRztRQUNqQyxNQUFNLElBQUlDLFVBQVU7SUFDckI7SUFFQSxNQUFNQyxRQUFRLElBQUlQO0lBQ2xCRSxjQUFjRSxVQUFVRztJQUV4QixPQUFPSCxTQUFTQyxJQUFJLENBQUNFO0FBQ3RCO0FBRUFDLE9BQU9DLE9BQU8sR0FBR04iLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9ub3Rpb24teC1mdWxsLy4vbm9kZV9tb2R1bGVzL2Nsb25lLXJlc3BvbnNlL3NyYy9pbmRleC5qcz9hYWRhIl0sInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0JztcblxuY29uc3QgUGFzc1Rocm91Z2ggPSByZXF1aXJlKCdzdHJlYW0nKS5QYXNzVGhyb3VnaDtcbmNvbnN0IG1pbWljUmVzcG9uc2UgPSByZXF1aXJlKCdtaW1pYy1yZXNwb25zZScpO1xuXG5jb25zdCBjbG9uZVJlc3BvbnNlID0gcmVzcG9uc2UgPT4ge1xuXHRpZiAoIShyZXNwb25zZSAmJiByZXNwb25zZS5waXBlKSkge1xuXHRcdHRocm93IG5ldyBUeXBlRXJyb3IoJ1BhcmFtZXRlciBgcmVzcG9uc2VgIG11c3QgYmUgYSByZXNwb25zZSBzdHJlYW0uJyk7XG5cdH1cblxuXHRjb25zdCBjbG9uZSA9IG5ldyBQYXNzVGhyb3VnaCgpO1xuXHRtaW1pY1Jlc3BvbnNlKHJlc3BvbnNlLCBjbG9uZSk7XG5cblx0cmV0dXJuIHJlc3BvbnNlLnBpcGUoY2xvbmUpO1xufTtcblxubW9kdWxlLmV4cG9ydHMgPSBjbG9uZVJlc3BvbnNlO1xuIl0sIm5hbWVzIjpbIlBhc3NUaHJvdWdoIiwicmVxdWlyZSIsIm1pbWljUmVzcG9uc2UiLCJjbG9uZVJlc3BvbnNlIiwicmVzcG9uc2UiLCJwaXBlIiwiVHlwZUVycm9yIiwiY2xvbmUiLCJtb2R1bGUiLCJleHBvcnRzIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(rsc)/./node_modules/clone-response/src/index.js\n");

/***/ })

};
;