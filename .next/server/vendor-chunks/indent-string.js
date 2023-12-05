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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ indentString)\n/* harmony export */ });\nfunction indentString(string, count = 1, options = {}) {\n    const { indent = \" \", includeEmptyLines = false } = options;\n    if (typeof string !== \"string\") {\n        throw new TypeError(`Expected \\`input\\` to be a \\`string\\`, got \\`${typeof string}\\``);\n    }\n    if (typeof count !== \"number\") {\n        throw new TypeError(`Expected \\`count\\` to be a \\`number\\`, got \\`${typeof count}\\``);\n    }\n    if (count < 0) {\n        throw new RangeError(`Expected \\`count\\` to be at least 0, got \\`${count}\\``);\n    }\n    if (typeof indent !== \"string\") {\n        throw new TypeError(`Expected \\`options.indent\\` to be a \\`string\\`, got \\`${typeof indent}\\``);\n    }\n    if (count === 0) {\n        return string;\n    }\n    const regex = includeEmptyLines ? /^/gm : /^(?!\\s*$)/gm;\n    return string.replace(regex, indent.repeat(count));\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9ub2RlX21vZHVsZXMvaW5kZW50LXN0cmluZy9pbmRleC5qcyIsIm1hcHBpbmdzIjoiOzs7O0FBQWUsU0FBU0EsYUFBYUMsTUFBTSxFQUFFQyxRQUFRLENBQUMsRUFBRUMsVUFBVSxDQUFDLENBQUM7SUFDbkUsTUFBTSxFQUNMQyxTQUFTLEdBQUcsRUFDWkMsb0JBQW9CLEtBQUssRUFDekIsR0FBR0Y7SUFFSixJQUFJLE9BQU9GLFdBQVcsVUFBVTtRQUMvQixNQUFNLElBQUlLLFVBQ1QsQ0FBQyw2Q0FBNkMsRUFBRSxPQUFPTCxPQUFPLEVBQUUsQ0FBQztJQUVuRTtJQUVBLElBQUksT0FBT0MsVUFBVSxVQUFVO1FBQzlCLE1BQU0sSUFBSUksVUFDVCxDQUFDLDZDQUE2QyxFQUFFLE9BQU9KLE1BQU0sRUFBRSxDQUFDO0lBRWxFO0lBRUEsSUFBSUEsUUFBUSxHQUFHO1FBQ2QsTUFBTSxJQUFJSyxXQUNULENBQUMsMkNBQTJDLEVBQUVMLE1BQU0sRUFBRSxDQUFDO0lBRXpEO0lBRUEsSUFBSSxPQUFPRSxXQUFXLFVBQVU7UUFDL0IsTUFBTSxJQUFJRSxVQUNULENBQUMsc0RBQXNELEVBQUUsT0FBT0YsT0FBTyxFQUFFLENBQUM7SUFFNUU7SUFFQSxJQUFJRixVQUFVLEdBQUc7UUFDaEIsT0FBT0Q7SUFDUjtJQUVBLE1BQU1PLFFBQVFILG9CQUFvQixRQUFRO0lBRTFDLE9BQU9KLE9BQU9RLE9BQU8sQ0FBQ0QsT0FBT0osT0FBT00sTUFBTSxDQUFDUjtBQUM1QyIsInNvdXJjZXMiOlsid2VicGFjazovL25vdGlvbi14LWZ1bGwvLi9ub2RlX21vZHVsZXMvaW5kZW50LXN0cmluZy9pbmRleC5qcz80YzRmIl0sInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGluZGVudFN0cmluZyhzdHJpbmcsIGNvdW50ID0gMSwgb3B0aW9ucyA9IHt9KSB7XG5cdGNvbnN0IHtcblx0XHRpbmRlbnQgPSAnICcsXG5cdFx0aW5jbHVkZUVtcHR5TGluZXMgPSBmYWxzZVxuXHR9ID0gb3B0aW9ucztcblxuXHRpZiAodHlwZW9mIHN0cmluZyAhPT0gJ3N0cmluZycpIHtcblx0XHR0aHJvdyBuZXcgVHlwZUVycm9yKFxuXHRcdFx0YEV4cGVjdGVkIFxcYGlucHV0XFxgIHRvIGJlIGEgXFxgc3RyaW5nXFxgLCBnb3QgXFxgJHt0eXBlb2Ygc3RyaW5nfVxcYGBcblx0XHQpO1xuXHR9XG5cblx0aWYgKHR5cGVvZiBjb3VudCAhPT0gJ251bWJlcicpIHtcblx0XHR0aHJvdyBuZXcgVHlwZUVycm9yKFxuXHRcdFx0YEV4cGVjdGVkIFxcYGNvdW50XFxgIHRvIGJlIGEgXFxgbnVtYmVyXFxgLCBnb3QgXFxgJHt0eXBlb2YgY291bnR9XFxgYFxuXHRcdCk7XG5cdH1cblxuXHRpZiAoY291bnQgPCAwKSB7XG5cdFx0dGhyb3cgbmV3IFJhbmdlRXJyb3IoXG5cdFx0XHRgRXhwZWN0ZWQgXFxgY291bnRcXGAgdG8gYmUgYXQgbGVhc3QgMCwgZ290IFxcYCR7Y291bnR9XFxgYFxuXHRcdCk7XG5cdH1cblxuXHRpZiAodHlwZW9mIGluZGVudCAhPT0gJ3N0cmluZycpIHtcblx0XHR0aHJvdyBuZXcgVHlwZUVycm9yKFxuXHRcdFx0YEV4cGVjdGVkIFxcYG9wdGlvbnMuaW5kZW50XFxgIHRvIGJlIGEgXFxgc3RyaW5nXFxgLCBnb3QgXFxgJHt0eXBlb2YgaW5kZW50fVxcYGBcblx0XHQpO1xuXHR9XG5cblx0aWYgKGNvdW50ID09PSAwKSB7XG5cdFx0cmV0dXJuIHN0cmluZztcblx0fVxuXG5cdGNvbnN0IHJlZ2V4ID0gaW5jbHVkZUVtcHR5TGluZXMgPyAvXi9nbSA6IC9eKD8hXFxzKiQpL2dtO1xuXG5cdHJldHVybiBzdHJpbmcucmVwbGFjZShyZWdleCwgaW5kZW50LnJlcGVhdChjb3VudCkpO1xufVxuIl0sIm5hbWVzIjpbImluZGVudFN0cmluZyIsInN0cmluZyIsImNvdW50Iiwib3B0aW9ucyIsImluZGVudCIsImluY2x1ZGVFbXB0eUxpbmVzIiwiVHlwZUVycm9yIiwiUmFuZ2VFcnJvciIsInJlZ2V4IiwicmVwbGFjZSIsInJlcGVhdCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(rsc)/./node_modules/indent-string/index.js\n");

/***/ })

};
;