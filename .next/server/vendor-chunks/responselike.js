"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
exports.id = "vendor-chunks/responselike";
exports.ids = ["vendor-chunks/responselike"];
exports.modules = {

/***/ "(rsc)/./node_modules/responselike/node_modules/lowercase-keys/index.js":
/*!************************************************************************!*\
  !*** ./node_modules/responselike/node_modules/lowercase-keys/index.js ***!
  \************************************************************************/
/***/ ((module) => {

eval("\nmodule.exports = (object)=>{\n    const result = {};\n    for (const [key, value] of Object.entries(object)){\n        result[key.toLowerCase()] = value;\n    }\n    return result;\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9ub2RlX21vZHVsZXMvcmVzcG9uc2VsaWtlL25vZGVfbW9kdWxlcy9sb3dlcmNhc2Uta2V5cy9pbmRleC5qcyIsIm1hcHBpbmdzIjoiQUFBQTtBQUNBQSxPQUFPQyxPQUFPLEdBQUdDLENBQUFBO0lBQ2hCLE1BQU1DLFNBQVMsQ0FBQztJQUVoQixLQUFLLE1BQU0sQ0FBQ0MsS0FBS0MsTUFBTSxJQUFJQyxPQUFPQyxPQUFPLENBQUNMLFFBQVM7UUFDbERDLE1BQU0sQ0FBQ0MsSUFBSUksV0FBVyxHQUFHLEdBQUdIO0lBQzdCO0lBRUEsT0FBT0Y7QUFDUiIsInNvdXJjZXMiOlsid2VicGFjazovL25vdGlvbi14LWZ1bGwvLi9ub2RlX21vZHVsZXMvcmVzcG9uc2VsaWtlL25vZGVfbW9kdWxlcy9sb3dlcmNhc2Uta2V5cy9pbmRleC5qcz9lNGEwIl0sInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0Jztcbm1vZHVsZS5leHBvcnRzID0gb2JqZWN0ID0+IHtcblx0Y29uc3QgcmVzdWx0ID0ge307XG5cblx0Zm9yIChjb25zdCBba2V5LCB2YWx1ZV0gb2YgT2JqZWN0LmVudHJpZXMob2JqZWN0KSkge1xuXHRcdHJlc3VsdFtrZXkudG9Mb3dlckNhc2UoKV0gPSB2YWx1ZTtcblx0fVxuXG5cdHJldHVybiByZXN1bHQ7XG59O1xuIl0sIm5hbWVzIjpbIm1vZHVsZSIsImV4cG9ydHMiLCJvYmplY3QiLCJyZXN1bHQiLCJrZXkiLCJ2YWx1ZSIsIk9iamVjdCIsImVudHJpZXMiLCJ0b0xvd2VyQ2FzZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(rsc)/./node_modules/responselike/node_modules/lowercase-keys/index.js\n");

/***/ }),

/***/ "(rsc)/./node_modules/responselike/src/index.js":
/*!************************************************!*\
  !*** ./node_modules/responselike/src/index.js ***!
  \************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\nconst Readable = (__webpack_require__(/*! stream */ \"stream\").Readable);\nconst lowercaseKeys = __webpack_require__(/*! lowercase-keys */ \"(rsc)/./node_modules/responselike/node_modules/lowercase-keys/index.js\");\nclass Response extends Readable {\n    constructor(statusCode, headers, body, url){\n        if (typeof statusCode !== \"number\") {\n            throw new TypeError(\"Argument `statusCode` should be a number\");\n        }\n        if (typeof headers !== \"object\") {\n            throw new TypeError(\"Argument `headers` should be an object\");\n        }\n        if (!(body instanceof Buffer)) {\n            throw new TypeError(\"Argument `body` should be a buffer\");\n        }\n        if (typeof url !== \"string\") {\n            throw new TypeError(\"Argument `url` should be a string\");\n        }\n        super();\n        this.statusCode = statusCode;\n        this.headers = lowercaseKeys(headers);\n        this.body = body;\n        this.url = url;\n    }\n    _read() {\n        this.push(this.body);\n        this.push(null);\n    }\n}\nmodule.exports = Response;\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9ub2RlX21vZHVsZXMvcmVzcG9uc2VsaWtlL3NyYy9pbmRleC5qcyIsIm1hcHBpbmdzIjoiQUFBQTtBQUVBLE1BQU1BLFdBQVdDLHNEQUEwQjtBQUMzQyxNQUFNQyxnQkFBZ0JELG1CQUFPQSxDQUFDO0FBRTlCLE1BQU1FLGlCQUFpQkg7SUFDdEJJLFlBQVlDLFVBQVUsRUFBRUMsT0FBTyxFQUFFQyxJQUFJLEVBQUVDLEdBQUcsQ0FBRTtRQUMzQyxJQUFJLE9BQU9ILGVBQWUsVUFBVTtZQUNuQyxNQUFNLElBQUlJLFVBQVU7UUFDckI7UUFDQSxJQUFJLE9BQU9ILFlBQVksVUFBVTtZQUNoQyxNQUFNLElBQUlHLFVBQVU7UUFDckI7UUFDQSxJQUFJLENBQUVGLENBQUFBLGdCQUFnQkcsTUFBSyxHQUFJO1lBQzlCLE1BQU0sSUFBSUQsVUFBVTtRQUNyQjtRQUNBLElBQUksT0FBT0QsUUFBUSxVQUFVO1lBQzVCLE1BQU0sSUFBSUMsVUFBVTtRQUNyQjtRQUVBLEtBQUs7UUFDTCxJQUFJLENBQUNKLFVBQVUsR0FBR0E7UUFDbEIsSUFBSSxDQUFDQyxPQUFPLEdBQUdKLGNBQWNJO1FBQzdCLElBQUksQ0FBQ0MsSUFBSSxHQUFHQTtRQUNaLElBQUksQ0FBQ0MsR0FBRyxHQUFHQTtJQUNaO0lBRUFHLFFBQVE7UUFDUCxJQUFJLENBQUNDLElBQUksQ0FBQyxJQUFJLENBQUNMLElBQUk7UUFDbkIsSUFBSSxDQUFDSyxJQUFJLENBQUM7SUFDWDtBQUNEO0FBRUFDLE9BQU9DLE9BQU8sR0FBR1giLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9ub3Rpb24teC1mdWxsLy4vbm9kZV9tb2R1bGVzL3Jlc3BvbnNlbGlrZS9zcmMvaW5kZXguanM/NTk1NSJdLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCc7XG5cbmNvbnN0IFJlYWRhYmxlID0gcmVxdWlyZSgnc3RyZWFtJykuUmVhZGFibGU7XG5jb25zdCBsb3dlcmNhc2VLZXlzID0gcmVxdWlyZSgnbG93ZXJjYXNlLWtleXMnKTtcblxuY2xhc3MgUmVzcG9uc2UgZXh0ZW5kcyBSZWFkYWJsZSB7XG5cdGNvbnN0cnVjdG9yKHN0YXR1c0NvZGUsIGhlYWRlcnMsIGJvZHksIHVybCkge1xuXHRcdGlmICh0eXBlb2Ygc3RhdHVzQ29kZSAhPT0gJ251bWJlcicpIHtcblx0XHRcdHRocm93IG5ldyBUeXBlRXJyb3IoJ0FyZ3VtZW50IGBzdGF0dXNDb2RlYCBzaG91bGQgYmUgYSBudW1iZXInKTtcblx0XHR9XG5cdFx0aWYgKHR5cGVvZiBoZWFkZXJzICE9PSAnb2JqZWN0Jykge1xuXHRcdFx0dGhyb3cgbmV3IFR5cGVFcnJvcignQXJndW1lbnQgYGhlYWRlcnNgIHNob3VsZCBiZSBhbiBvYmplY3QnKTtcblx0XHR9XG5cdFx0aWYgKCEoYm9keSBpbnN0YW5jZW9mIEJ1ZmZlcikpIHtcblx0XHRcdHRocm93IG5ldyBUeXBlRXJyb3IoJ0FyZ3VtZW50IGBib2R5YCBzaG91bGQgYmUgYSBidWZmZXInKTtcblx0XHR9XG5cdFx0aWYgKHR5cGVvZiB1cmwgIT09ICdzdHJpbmcnKSB7XG5cdFx0XHR0aHJvdyBuZXcgVHlwZUVycm9yKCdBcmd1bWVudCBgdXJsYCBzaG91bGQgYmUgYSBzdHJpbmcnKTtcblx0XHR9XG5cblx0XHRzdXBlcigpO1xuXHRcdHRoaXMuc3RhdHVzQ29kZSA9IHN0YXR1c0NvZGU7XG5cdFx0dGhpcy5oZWFkZXJzID0gbG93ZXJjYXNlS2V5cyhoZWFkZXJzKTtcblx0XHR0aGlzLmJvZHkgPSBib2R5O1xuXHRcdHRoaXMudXJsID0gdXJsO1xuXHR9XG5cblx0X3JlYWQoKSB7XG5cdFx0dGhpcy5wdXNoKHRoaXMuYm9keSk7XG5cdFx0dGhpcy5wdXNoKG51bGwpO1xuXHR9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gUmVzcG9uc2U7XG4iXSwibmFtZXMiOlsiUmVhZGFibGUiLCJyZXF1aXJlIiwibG93ZXJjYXNlS2V5cyIsIlJlc3BvbnNlIiwiY29uc3RydWN0b3IiLCJzdGF0dXNDb2RlIiwiaGVhZGVycyIsImJvZHkiLCJ1cmwiLCJUeXBlRXJyb3IiLCJCdWZmZXIiLCJfcmVhZCIsInB1c2giLCJtb2R1bGUiLCJleHBvcnRzIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(rsc)/./node_modules/responselike/src/index.js\n");

/***/ })

};
;