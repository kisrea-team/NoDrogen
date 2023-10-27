"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
exports.id = "vendor-chunks/indent-string";
exports.ids = ["vendor-chunks/indent-string"];
exports.modules = {

/***/ "(rsc)/./node_modules/indent-string/index.js":
/*!*********************************************!*\
  !*** ./node_modules/indent-string/index.js ***!
  \*********************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ indentString)\n/* harmony export */ });\nfunction indentString(string, count = 1, options = {}) {\n    const { indent = \" \", includeEmptyLines = false } = options;\n    if (typeof string !== \"string\") {\n        throw new TypeError(`Expected \\`input\\` to be a \\`string\\`, got \\`${typeof string}\\``);\n    }\n    if (typeof count !== \"number\") {\n        throw new TypeError(`Expected \\`count\\` to be a \\`number\\`, got \\`${typeof count}\\``);\n    }\n    if (count < 0) {\n        throw new RangeError(`Expected \\`count\\` to be at least 0, got \\`${count}\\``);\n    }\n    if (typeof indent !== \"string\") {\n        throw new TypeError(`Expected \\`options.indent\\` to be a \\`string\\`, got \\`${typeof indent}\\``);\n    }\n    if (count === 0) {\n        return string;\n    }\n    const regex = includeEmptyLines ? /^/gm : /^(?!\\s*$)/gm;\n    return string.replace(regex, indent.repeat(count));\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9ub2RlX21vZHVsZXMvaW5kZW50LXN0cmluZy9pbmRleC5qcyIsIm1hcHBpbmdzIjoiOzs7O0FBQWUsU0FBU0EsYUFBYUMsTUFBTSxFQUFFQyxRQUFRLENBQUMsRUFBRUMsVUFBVSxDQUFDLENBQUM7SUFDbkUsTUFBTSxFQUNMQyxTQUFTLEdBQUcsRUFDWkMsb0JBQW9CLEtBQUssRUFDekIsR0FBR0Y7SUFFSixJQUFJLE9BQU9GLFdBQVcsVUFBVTtRQUMvQixNQUFNLElBQUlLLFVBQ1QsQ0FBQyw2Q0FBNkMsRUFBRSxPQUFPTCxPQUFPLEVBQUUsQ0FBQztJQUVuRTtJQUVBLElBQUksT0FBT0MsVUFBVSxVQUFVO1FBQzlCLE1BQU0sSUFBSUksVUFDVCxDQUFDLDZDQUE2QyxFQUFFLE9BQU9KLE1BQU0sRUFBRSxDQUFDO0lBRWxFO0lBRUEsSUFBSUEsUUFBUSxHQUFHO1FBQ2QsTUFBTSxJQUFJSyxXQUNULENBQUMsMkNBQTJDLEVBQUVMLE1BQU0sRUFBRSxDQUFDO0lBRXpEO0lBRUEsSUFBSSxPQUFPRSxXQUFXLFVBQVU7UUFDL0IsTUFBTSxJQUFJRSxVQUNULENBQUMsc0RBQXNELEVBQUUsT0FBT0YsT0FBTyxFQUFFLENBQUM7SUFFNUU7SUFFQSxJQUFJRixVQUFVLEdBQUc7UUFDaEIsT0FBT0Q7SUFDUjtJQUVBLE1BQU1PLFFBQVFILG9CQUFvQixRQUFRO0lBRTFDLE9BQU9KLE9BQU9RLE9BQU8sQ0FBQ0QsT0FBT0osT0FBT00sTUFBTSxDQUFDUjtBQUM1QyIsInNvdXJjZXMiOlsid2VicGFjazovL25vdGlvbi14LWV4YW1wbGUtZnVsbC8uL25vZGVfbW9kdWxlcy9pbmRlbnQtc3RyaW5nL2luZGV4LmpzPzRjNGYiXSwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gaW5kZW50U3RyaW5nKHN0cmluZywgY291bnQgPSAxLCBvcHRpb25zID0ge30pIHtcblx0Y29uc3Qge1xuXHRcdGluZGVudCA9ICcgJyxcblx0XHRpbmNsdWRlRW1wdHlMaW5lcyA9IGZhbHNlXG5cdH0gPSBvcHRpb25zO1xuXG5cdGlmICh0eXBlb2Ygc3RyaW5nICE9PSAnc3RyaW5nJykge1xuXHRcdHRocm93IG5ldyBUeXBlRXJyb3IoXG5cdFx0XHRgRXhwZWN0ZWQgXFxgaW5wdXRcXGAgdG8gYmUgYSBcXGBzdHJpbmdcXGAsIGdvdCBcXGAke3R5cGVvZiBzdHJpbmd9XFxgYFxuXHRcdCk7XG5cdH1cblxuXHRpZiAodHlwZW9mIGNvdW50ICE9PSAnbnVtYmVyJykge1xuXHRcdHRocm93IG5ldyBUeXBlRXJyb3IoXG5cdFx0XHRgRXhwZWN0ZWQgXFxgY291bnRcXGAgdG8gYmUgYSBcXGBudW1iZXJcXGAsIGdvdCBcXGAke3R5cGVvZiBjb3VudH1cXGBgXG5cdFx0KTtcblx0fVxuXG5cdGlmIChjb3VudCA8IDApIHtcblx0XHR0aHJvdyBuZXcgUmFuZ2VFcnJvcihcblx0XHRcdGBFeHBlY3RlZCBcXGBjb3VudFxcYCB0byBiZSBhdCBsZWFzdCAwLCBnb3QgXFxgJHtjb3VudH1cXGBgXG5cdFx0KTtcblx0fVxuXG5cdGlmICh0eXBlb2YgaW5kZW50ICE9PSAnc3RyaW5nJykge1xuXHRcdHRocm93IG5ldyBUeXBlRXJyb3IoXG5cdFx0XHRgRXhwZWN0ZWQgXFxgb3B0aW9ucy5pbmRlbnRcXGAgdG8gYmUgYSBcXGBzdHJpbmdcXGAsIGdvdCBcXGAke3R5cGVvZiBpbmRlbnR9XFxgYFxuXHRcdCk7XG5cdH1cblxuXHRpZiAoY291bnQgPT09IDApIHtcblx0XHRyZXR1cm4gc3RyaW5nO1xuXHR9XG5cblx0Y29uc3QgcmVnZXggPSBpbmNsdWRlRW1wdHlMaW5lcyA/IC9eL2dtIDogL14oPyFcXHMqJCkvZ207XG5cblx0cmV0dXJuIHN0cmluZy5yZXBsYWNlKHJlZ2V4LCBpbmRlbnQucmVwZWF0KGNvdW50KSk7XG59XG4iXSwibmFtZXMiOlsiaW5kZW50U3RyaW5nIiwic3RyaW5nIiwiY291bnQiLCJvcHRpb25zIiwiaW5kZW50IiwiaW5jbHVkZUVtcHR5TGluZXMiLCJUeXBlRXJyb3IiLCJSYW5nZUVycm9yIiwicmVnZXgiLCJyZXBsYWNlIiwicmVwZWF0Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(rsc)/./node_modules/indent-string/index.js\n");

/***/ })

};
;