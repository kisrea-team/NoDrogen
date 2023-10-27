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

eval("\nconst PassThrough = (__webpack_require__(/*! stream */ \"stream\").PassThrough);\nconst mimicResponse = __webpack_require__(/*! mimic-response */ \"(rsc)/./node_modules/mimic-response/index.js\");\nconst cloneResponse = (response)=>{\n    if (!(response && response.pipe)) {\n        throw new TypeError(\"Parameter `response` must be a response stream.\");\n    }\n    const clone = new PassThrough();\n    mimicResponse(response, clone);\n    return response.pipe(clone);\n};\nmodule.exports = cloneResponse;\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9ub2RlX21vZHVsZXMvY2xvbmUtcmVzcG9uc2Uvc3JjL2luZGV4LmpzIiwibWFwcGluZ3MiOiJBQUFBO0FBRUEsTUFBTUEsY0FBY0MseURBQTZCO0FBQ2pELE1BQU1DLGdCQUFnQkQsbUJBQU9BLENBQUM7QUFFOUIsTUFBTUUsZ0JBQWdCQyxDQUFBQTtJQUNyQixJQUFJLENBQUVBLENBQUFBLFlBQVlBLFNBQVNDLElBQUksR0FBRztRQUNqQyxNQUFNLElBQUlDLFVBQVU7SUFDckI7SUFFQSxNQUFNQyxRQUFRLElBQUlQO0lBQ2xCRSxjQUFjRSxVQUFVRztJQUV4QixPQUFPSCxTQUFTQyxJQUFJLENBQUNFO0FBQ3RCO0FBRUFDLE9BQU9DLE9BQU8sR0FBR04iLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9ub3Rpb24teC1leGFtcGxlLWZ1bGwvLi9ub2RlX21vZHVsZXMvY2xvbmUtcmVzcG9uc2Uvc3JjL2luZGV4LmpzP2FhZGEiXSwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzdHJpY3QnO1xuXG5jb25zdCBQYXNzVGhyb3VnaCA9IHJlcXVpcmUoJ3N0cmVhbScpLlBhc3NUaHJvdWdoO1xuY29uc3QgbWltaWNSZXNwb25zZSA9IHJlcXVpcmUoJ21pbWljLXJlc3BvbnNlJyk7XG5cbmNvbnN0IGNsb25lUmVzcG9uc2UgPSByZXNwb25zZSA9PiB7XG5cdGlmICghKHJlc3BvbnNlICYmIHJlc3BvbnNlLnBpcGUpKSB7XG5cdFx0dGhyb3cgbmV3IFR5cGVFcnJvcignUGFyYW1ldGVyIGByZXNwb25zZWAgbXVzdCBiZSBhIHJlc3BvbnNlIHN0cmVhbS4nKTtcblx0fVxuXG5cdGNvbnN0IGNsb25lID0gbmV3IFBhc3NUaHJvdWdoKCk7XG5cdG1pbWljUmVzcG9uc2UocmVzcG9uc2UsIGNsb25lKTtcblxuXHRyZXR1cm4gcmVzcG9uc2UucGlwZShjbG9uZSk7XG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IGNsb25lUmVzcG9uc2U7XG4iXSwibmFtZXMiOlsiUGFzc1Rocm91Z2giLCJyZXF1aXJlIiwibWltaWNSZXNwb25zZSIsImNsb25lUmVzcG9uc2UiLCJyZXNwb25zZSIsInBpcGUiLCJUeXBlRXJyb3IiLCJjbG9uZSIsIm1vZHVsZSIsImV4cG9ydHMiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(rsc)/./node_modules/clone-response/src/index.js\n");

/***/ })

};
;