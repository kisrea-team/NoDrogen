"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
exports.id = "vendor-chunks/is-url-superb";
exports.ids = ["vendor-chunks/is-url-superb"];
exports.modules = {

/***/ "(ssr)/./node_modules/is-url-superb/index.js":
/*!*********************************************!*\
  !*** ./node_modules/is-url-superb/index.js ***!
  \*********************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ isUrl)\n/* harmony export */ });\nfunction isUrl(string, {lenient = false} = {}) {\n\tif (typeof string !== 'string') {\n\t\tthrow new TypeError('Expected a string');\n\t}\n\n\tstring = string.trim();\n\tif (string.includes(' ')) {\n\t\treturn false;\n\t}\n\n\ttry {\n\t\tnew URL(string); // eslint-disable-line no-new\n\t\treturn true;\n\t} catch {\n\t\tif (lenient) {\n\t\t\treturn isUrl(`https://${string}`);\n\t\t}\n\n\t\treturn false;\n\t}\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHNzcikvLi9ub2RlX21vZHVsZXMvaXMtdXJsLXN1cGVyYi9pbmRleC5qcyIsIm1hcHBpbmdzIjoiOzs7O0FBQWUsd0JBQXdCLGlCQUFpQixJQUFJO0FBQzVEO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLG1CQUFtQjtBQUNuQjtBQUNBLEdBQUc7QUFDSDtBQUNBLDJCQUEyQixPQUFPO0FBQ2xDOztBQUVBO0FBQ0E7QUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL25vdGlvbi14LWZ1bGwvLi9ub2RlX21vZHVsZXMvaXMtdXJsLXN1cGVyYi9pbmRleC5qcz8wYjY4Il0sInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGlzVXJsKHN0cmluZywge2xlbmllbnQgPSBmYWxzZX0gPSB7fSkge1xuXHRpZiAodHlwZW9mIHN0cmluZyAhPT0gJ3N0cmluZycpIHtcblx0XHR0aHJvdyBuZXcgVHlwZUVycm9yKCdFeHBlY3RlZCBhIHN0cmluZycpO1xuXHR9XG5cblx0c3RyaW5nID0gc3RyaW5nLnRyaW0oKTtcblx0aWYgKHN0cmluZy5pbmNsdWRlcygnICcpKSB7XG5cdFx0cmV0dXJuIGZhbHNlO1xuXHR9XG5cblx0dHJ5IHtcblx0XHRuZXcgVVJMKHN0cmluZyk7IC8vIGVzbGludC1kaXNhYmxlLWxpbmUgbm8tbmV3XG5cdFx0cmV0dXJuIHRydWU7XG5cdH0gY2F0Y2gge1xuXHRcdGlmIChsZW5pZW50KSB7XG5cdFx0XHRyZXR1cm4gaXNVcmwoYGh0dHBzOi8vJHtzdHJpbmd9YCk7XG5cdFx0fVxuXG5cdFx0cmV0dXJuIGZhbHNlO1xuXHR9XG59XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(ssr)/./node_modules/is-url-superb/index.js\n");

/***/ }),

/***/ "(rsc)/./node_modules/is-url-superb/index.js":
/*!*********************************************!*\
  !*** ./node_modules/is-url-superb/index.js ***!
  \*********************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ isUrl)\n/* harmony export */ });\nfunction isUrl(string, { lenient = false } = {}) {\n    if (typeof string !== \"string\") {\n        throw new TypeError(\"Expected a string\");\n    }\n    string = string.trim();\n    if (string.includes(\" \")) {\n        return false;\n    }\n    try {\n        new URL(string); // eslint-disable-line no-new\n        return true;\n    } catch  {\n        if (lenient) {\n            return isUrl(`https://${string}`);\n        }\n        return false;\n    }\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9ub2RlX21vZHVsZXMvaXMtdXJsLXN1cGVyYi9pbmRleC5qcyIsIm1hcHBpbmdzIjoiOzs7O0FBQWUsU0FBU0EsTUFBTUMsTUFBTSxFQUFFLEVBQUNDLFVBQVUsS0FBSyxFQUFDLEdBQUcsQ0FBQyxDQUFDO0lBQzNELElBQUksT0FBT0QsV0FBVyxVQUFVO1FBQy9CLE1BQU0sSUFBSUUsVUFBVTtJQUNyQjtJQUVBRixTQUFTQSxPQUFPRyxJQUFJO0lBQ3BCLElBQUlILE9BQU9JLFFBQVEsQ0FBQyxNQUFNO1FBQ3pCLE9BQU87SUFDUjtJQUVBLElBQUk7UUFDSCxJQUFJQyxJQUFJTCxTQUFTLDZCQUE2QjtRQUM5QyxPQUFPO0lBQ1IsRUFBRSxPQUFNO1FBQ1AsSUFBSUMsU0FBUztZQUNaLE9BQU9GLE1BQU0sQ0FBQyxRQUFRLEVBQUVDLE9BQU8sQ0FBQztRQUNqQztRQUVBLE9BQU87SUFDUjtBQUNEIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vbm90aW9uLXgtZnVsbC8uL25vZGVfbW9kdWxlcy9pcy11cmwtc3VwZXJiL2luZGV4LmpzPzA0OTciXSwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gaXNVcmwoc3RyaW5nLCB7bGVuaWVudCA9IGZhbHNlfSA9IHt9KSB7XG5cdGlmICh0eXBlb2Ygc3RyaW5nICE9PSAnc3RyaW5nJykge1xuXHRcdHRocm93IG5ldyBUeXBlRXJyb3IoJ0V4cGVjdGVkIGEgc3RyaW5nJyk7XG5cdH1cblxuXHRzdHJpbmcgPSBzdHJpbmcudHJpbSgpO1xuXHRpZiAoc3RyaW5nLmluY2x1ZGVzKCcgJykpIHtcblx0XHRyZXR1cm4gZmFsc2U7XG5cdH1cblxuXHR0cnkge1xuXHRcdG5ldyBVUkwoc3RyaW5nKTsgLy8gZXNsaW50LWRpc2FibGUtbGluZSBuby1uZXdcblx0XHRyZXR1cm4gdHJ1ZTtcblx0fSBjYXRjaCB7XG5cdFx0aWYgKGxlbmllbnQpIHtcblx0XHRcdHJldHVybiBpc1VybChgaHR0cHM6Ly8ke3N0cmluZ31gKTtcblx0XHR9XG5cblx0XHRyZXR1cm4gZmFsc2U7XG5cdH1cbn1cbiJdLCJuYW1lcyI6WyJpc1VybCIsInN0cmluZyIsImxlbmllbnQiLCJUeXBlRXJyb3IiLCJ0cmltIiwiaW5jbHVkZXMiLCJVUkwiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(rsc)/./node_modules/is-url-superb/index.js\n");

/***/ })

};
;