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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ isUrl)\n/* harmony export */ });\nfunction isUrl(string, {lenient = false} = {}) {\n\tif (typeof string !== 'string') {\n\t\tthrow new TypeError('Expected a string');\n\t}\n\n\tstring = string.trim();\n\tif (string.includes(' ')) {\n\t\treturn false;\n\t}\n\n\ttry {\n\t\tnew URL(string); // eslint-disable-line no-new\n\t\treturn true;\n\t} catch {\n\t\tif (lenient) {\n\t\t\treturn isUrl(`https://${string}`);\n\t\t}\n\n\t\treturn false;\n\t}\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHNzcikvLi9ub2RlX21vZHVsZXMvaXMtdXJsLXN1cGVyYi9pbmRleC5qcyIsIm1hcHBpbmdzIjoiOzs7O0FBQWUsd0JBQXdCLGlCQUFpQixJQUFJO0FBQzVEO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLG1CQUFtQjtBQUNuQjtBQUNBLEdBQUc7QUFDSDtBQUNBLDJCQUEyQixPQUFPO0FBQ2xDOztBQUVBO0FBQ0E7QUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL25vdGlvbi14LWV4YW1wbGUtZnVsbC8uL25vZGVfbW9kdWxlcy9pcy11cmwtc3VwZXJiL2luZGV4LmpzPzBiNjgiXSwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gaXNVcmwoc3RyaW5nLCB7bGVuaWVudCA9IGZhbHNlfSA9IHt9KSB7XG5cdGlmICh0eXBlb2Ygc3RyaW5nICE9PSAnc3RyaW5nJykge1xuXHRcdHRocm93IG5ldyBUeXBlRXJyb3IoJ0V4cGVjdGVkIGEgc3RyaW5nJyk7XG5cdH1cblxuXHRzdHJpbmcgPSBzdHJpbmcudHJpbSgpO1xuXHRpZiAoc3RyaW5nLmluY2x1ZGVzKCcgJykpIHtcblx0XHRyZXR1cm4gZmFsc2U7XG5cdH1cblxuXHR0cnkge1xuXHRcdG5ldyBVUkwoc3RyaW5nKTsgLy8gZXNsaW50LWRpc2FibGUtbGluZSBuby1uZXdcblx0XHRyZXR1cm4gdHJ1ZTtcblx0fSBjYXRjaCB7XG5cdFx0aWYgKGxlbmllbnQpIHtcblx0XHRcdHJldHVybiBpc1VybChgaHR0cHM6Ly8ke3N0cmluZ31gKTtcblx0XHR9XG5cblx0XHRyZXR1cm4gZmFsc2U7XG5cdH1cbn1cbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(ssr)/./node_modules/is-url-superb/index.js\n");

/***/ }),

/***/ "(rsc)/./node_modules/is-url-superb/index.js":
/*!*********************************************!*\
  !*** ./node_modules/is-url-superb/index.js ***!
  \*********************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ isUrl)\n/* harmony export */ });\nfunction isUrl(string, { lenient = false } = {}) {\n    if (typeof string !== \"string\") {\n        throw new TypeError(\"Expected a string\");\n    }\n    string = string.trim();\n    if (string.includes(\" \")) {\n        return false;\n    }\n    try {\n        new URL(string); // eslint-disable-line no-new\n        return true;\n    } catch  {\n        if (lenient) {\n            return isUrl(`https://${string}`);\n        }\n        return false;\n    }\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9ub2RlX21vZHVsZXMvaXMtdXJsLXN1cGVyYi9pbmRleC5qcyIsIm1hcHBpbmdzIjoiOzs7O0FBQWUsU0FBU0EsTUFBTUMsTUFBTSxFQUFFLEVBQUNDLFVBQVUsS0FBSyxFQUFDLEdBQUcsQ0FBQyxDQUFDO0lBQzNELElBQUksT0FBT0QsV0FBVyxVQUFVO1FBQy9CLE1BQU0sSUFBSUUsVUFBVTtJQUNyQjtJQUVBRixTQUFTQSxPQUFPRyxJQUFJO0lBQ3BCLElBQUlILE9BQU9JLFFBQVEsQ0FBQyxNQUFNO1FBQ3pCLE9BQU87SUFDUjtJQUVBLElBQUk7UUFDSCxJQUFJQyxJQUFJTCxTQUFTLDZCQUE2QjtRQUM5QyxPQUFPO0lBQ1IsRUFBRSxPQUFNO1FBQ1AsSUFBSUMsU0FBUztZQUNaLE9BQU9GLE1BQU0sQ0FBQyxRQUFRLEVBQUVDLE9BQU8sQ0FBQztRQUNqQztRQUVBLE9BQU87SUFDUjtBQUNEIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vbm90aW9uLXgtZXhhbXBsZS1mdWxsLy4vbm9kZV9tb2R1bGVzL2lzLXVybC1zdXBlcmIvaW5kZXguanM/MDQ5NyJdLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBpc1VybChzdHJpbmcsIHtsZW5pZW50ID0gZmFsc2V9ID0ge30pIHtcblx0aWYgKHR5cGVvZiBzdHJpbmcgIT09ICdzdHJpbmcnKSB7XG5cdFx0dGhyb3cgbmV3IFR5cGVFcnJvcignRXhwZWN0ZWQgYSBzdHJpbmcnKTtcblx0fVxuXG5cdHN0cmluZyA9IHN0cmluZy50cmltKCk7XG5cdGlmIChzdHJpbmcuaW5jbHVkZXMoJyAnKSkge1xuXHRcdHJldHVybiBmYWxzZTtcblx0fVxuXG5cdHRyeSB7XG5cdFx0bmV3IFVSTChzdHJpbmcpOyAvLyBlc2xpbnQtZGlzYWJsZS1saW5lIG5vLW5ld1xuXHRcdHJldHVybiB0cnVlO1xuXHR9IGNhdGNoIHtcblx0XHRpZiAobGVuaWVudCkge1xuXHRcdFx0cmV0dXJuIGlzVXJsKGBodHRwczovLyR7c3RyaW5nfWApO1xuXHRcdH1cblxuXHRcdHJldHVybiBmYWxzZTtcblx0fVxufVxuIl0sIm5hbWVzIjpbImlzVXJsIiwic3RyaW5nIiwibGVuaWVudCIsIlR5cGVFcnJvciIsInRyaW0iLCJpbmNsdWRlcyIsIlVSTCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(rsc)/./node_modules/is-url-superb/index.js\n");

/***/ })

};
;