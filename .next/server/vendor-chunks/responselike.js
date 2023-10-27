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

eval("\nmodule.exports = (object)=>{\n    const result = {};\n    for (const [key, value] of Object.entries(object)){\n        result[key.toLowerCase()] = value;\n    }\n    return result;\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9ub2RlX21vZHVsZXMvcmVzcG9uc2VsaWtlL25vZGVfbW9kdWxlcy9sb3dlcmNhc2Uta2V5cy9pbmRleC5qcyIsIm1hcHBpbmdzIjoiQUFBQTtBQUNBQSxPQUFPQyxPQUFPLEdBQUdDLENBQUFBO0lBQ2hCLE1BQU1DLFNBQVMsQ0FBQztJQUVoQixLQUFLLE1BQU0sQ0FBQ0MsS0FBS0MsTUFBTSxJQUFJQyxPQUFPQyxPQUFPLENBQUNMLFFBQVM7UUFDbERDLE1BQU0sQ0FBQ0MsSUFBSUksV0FBVyxHQUFHLEdBQUdIO0lBQzdCO0lBRUEsT0FBT0Y7QUFDUiIsInNvdXJjZXMiOlsid2VicGFjazovL25vdGlvbi14LWV4YW1wbGUtZnVsbC8uL25vZGVfbW9kdWxlcy9yZXNwb25zZWxpa2Uvbm9kZV9tb2R1bGVzL2xvd2VyY2FzZS1rZXlzL2luZGV4LmpzP2U0YTAiXSwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzdHJpY3QnO1xubW9kdWxlLmV4cG9ydHMgPSBvYmplY3QgPT4ge1xuXHRjb25zdCByZXN1bHQgPSB7fTtcblxuXHRmb3IgKGNvbnN0IFtrZXksIHZhbHVlXSBvZiBPYmplY3QuZW50cmllcyhvYmplY3QpKSB7XG5cdFx0cmVzdWx0W2tleS50b0xvd2VyQ2FzZSgpXSA9IHZhbHVlO1xuXHR9XG5cblx0cmV0dXJuIHJlc3VsdDtcbn07XG4iXSwibmFtZXMiOlsibW9kdWxlIiwiZXhwb3J0cyIsIm9iamVjdCIsInJlc3VsdCIsImtleSIsInZhbHVlIiwiT2JqZWN0IiwiZW50cmllcyIsInRvTG93ZXJDYXNlIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(rsc)/./node_modules/responselike/node_modules/lowercase-keys/index.js\n");

/***/ }),

/***/ "(rsc)/./node_modules/responselike/src/index.js":
/*!************************************************!*\
  !*** ./node_modules/responselike/src/index.js ***!
  \************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\nconst Readable = (__webpack_require__(/*! stream */ \"stream\").Readable);\nconst lowercaseKeys = __webpack_require__(/*! lowercase-keys */ \"(rsc)/./node_modules/responselike/node_modules/lowercase-keys/index.js\");\nclass Response extends Readable {\n    constructor(statusCode, headers, body, url){\n        if (typeof statusCode !== \"number\") {\n            throw new TypeError(\"Argument `statusCode` should be a number\");\n        }\n        if (typeof headers !== \"object\") {\n            throw new TypeError(\"Argument `headers` should be an object\");\n        }\n        if (!(body instanceof Buffer)) {\n            throw new TypeError(\"Argument `body` should be a buffer\");\n        }\n        if (typeof url !== \"string\") {\n            throw new TypeError(\"Argument `url` should be a string\");\n        }\n        super();\n        this.statusCode = statusCode;\n        this.headers = lowercaseKeys(headers);\n        this.body = body;\n        this.url = url;\n    }\n    _read() {\n        this.push(this.body);\n        this.push(null);\n    }\n}\nmodule.exports = Response;\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9ub2RlX21vZHVsZXMvcmVzcG9uc2VsaWtlL3NyYy9pbmRleC5qcyIsIm1hcHBpbmdzIjoiQUFBQTtBQUVBLE1BQU1BLFdBQVdDLHNEQUEwQjtBQUMzQyxNQUFNQyxnQkFBZ0JELG1CQUFPQSxDQUFDO0FBRTlCLE1BQU1FLGlCQUFpQkg7SUFDdEJJLFlBQVlDLFVBQVUsRUFBRUMsT0FBTyxFQUFFQyxJQUFJLEVBQUVDLEdBQUcsQ0FBRTtRQUMzQyxJQUFJLE9BQU9ILGVBQWUsVUFBVTtZQUNuQyxNQUFNLElBQUlJLFVBQVU7UUFDckI7UUFDQSxJQUFJLE9BQU9ILFlBQVksVUFBVTtZQUNoQyxNQUFNLElBQUlHLFVBQVU7UUFDckI7UUFDQSxJQUFJLENBQUVGLENBQUFBLGdCQUFnQkcsTUFBSyxHQUFJO1lBQzlCLE1BQU0sSUFBSUQsVUFBVTtRQUNyQjtRQUNBLElBQUksT0FBT0QsUUFBUSxVQUFVO1lBQzVCLE1BQU0sSUFBSUMsVUFBVTtRQUNyQjtRQUVBLEtBQUs7UUFDTCxJQUFJLENBQUNKLFVBQVUsR0FBR0E7UUFDbEIsSUFBSSxDQUFDQyxPQUFPLEdBQUdKLGNBQWNJO1FBQzdCLElBQUksQ0FBQ0MsSUFBSSxHQUFHQTtRQUNaLElBQUksQ0FBQ0MsR0FBRyxHQUFHQTtJQUNaO0lBRUFHLFFBQVE7UUFDUCxJQUFJLENBQUNDLElBQUksQ0FBQyxJQUFJLENBQUNMLElBQUk7UUFDbkIsSUFBSSxDQUFDSyxJQUFJLENBQUM7SUFDWDtBQUNEO0FBRUFDLE9BQU9DLE9BQU8sR0FBR1giLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9ub3Rpb24teC1leGFtcGxlLWZ1bGwvLi9ub2RlX21vZHVsZXMvcmVzcG9uc2VsaWtlL3NyYy9pbmRleC5qcz81OTU1Il0sInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0JztcblxuY29uc3QgUmVhZGFibGUgPSByZXF1aXJlKCdzdHJlYW0nKS5SZWFkYWJsZTtcbmNvbnN0IGxvd2VyY2FzZUtleXMgPSByZXF1aXJlKCdsb3dlcmNhc2Uta2V5cycpO1xuXG5jbGFzcyBSZXNwb25zZSBleHRlbmRzIFJlYWRhYmxlIHtcblx0Y29uc3RydWN0b3Ioc3RhdHVzQ29kZSwgaGVhZGVycywgYm9keSwgdXJsKSB7XG5cdFx0aWYgKHR5cGVvZiBzdGF0dXNDb2RlICE9PSAnbnVtYmVyJykge1xuXHRcdFx0dGhyb3cgbmV3IFR5cGVFcnJvcignQXJndW1lbnQgYHN0YXR1c0NvZGVgIHNob3VsZCBiZSBhIG51bWJlcicpO1xuXHRcdH1cblx0XHRpZiAodHlwZW9mIGhlYWRlcnMgIT09ICdvYmplY3QnKSB7XG5cdFx0XHR0aHJvdyBuZXcgVHlwZUVycm9yKCdBcmd1bWVudCBgaGVhZGVyc2Agc2hvdWxkIGJlIGFuIG9iamVjdCcpO1xuXHRcdH1cblx0XHRpZiAoIShib2R5IGluc3RhbmNlb2YgQnVmZmVyKSkge1xuXHRcdFx0dGhyb3cgbmV3IFR5cGVFcnJvcignQXJndW1lbnQgYGJvZHlgIHNob3VsZCBiZSBhIGJ1ZmZlcicpO1xuXHRcdH1cblx0XHRpZiAodHlwZW9mIHVybCAhPT0gJ3N0cmluZycpIHtcblx0XHRcdHRocm93IG5ldyBUeXBlRXJyb3IoJ0FyZ3VtZW50IGB1cmxgIHNob3VsZCBiZSBhIHN0cmluZycpO1xuXHRcdH1cblxuXHRcdHN1cGVyKCk7XG5cdFx0dGhpcy5zdGF0dXNDb2RlID0gc3RhdHVzQ29kZTtcblx0XHR0aGlzLmhlYWRlcnMgPSBsb3dlcmNhc2VLZXlzKGhlYWRlcnMpO1xuXHRcdHRoaXMuYm9keSA9IGJvZHk7XG5cdFx0dGhpcy51cmwgPSB1cmw7XG5cdH1cblxuXHRfcmVhZCgpIHtcblx0XHR0aGlzLnB1c2godGhpcy5ib2R5KTtcblx0XHR0aGlzLnB1c2gobnVsbCk7XG5cdH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBSZXNwb25zZTtcbiJdLCJuYW1lcyI6WyJSZWFkYWJsZSIsInJlcXVpcmUiLCJsb3dlcmNhc2VLZXlzIiwiUmVzcG9uc2UiLCJjb25zdHJ1Y3RvciIsInN0YXR1c0NvZGUiLCJoZWFkZXJzIiwiYm9keSIsInVybCIsIlR5cGVFcnJvciIsIkJ1ZmZlciIsIl9yZWFkIiwicHVzaCIsIm1vZHVsZSIsImV4cG9ydHMiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(rsc)/./node_modules/responselike/src/index.js\n");

/***/ })

};
;