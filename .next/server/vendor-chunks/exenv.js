/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
exports.id = "vendor-chunks/exenv";
exports.ids = ["vendor-chunks/exenv"];
exports.modules = {

/***/ "(ssr)/./node_modules/exenv/index.js":
/*!*************************************!*\
  !*** ./node_modules/exenv/index.js ***!
  \*************************************/
/***/ ((module, exports, __webpack_require__) => {

eval("var __WEBPACK_AMD_DEFINE_RESULT__;/*!\n  Copyright (c) 2015 Jed Watson.\n  Based on code that is Copyright 2013-2015, Facebook, Inc.\n  All rights reserved.\n*/\n/* global define */\n\n(function () {\n\t'use strict';\n\n\tvar canUseDOM = !!(\n\t\ttypeof window !== 'undefined' &&\n\t\twindow.document &&\n\t\twindow.document.createElement\n\t);\n\n\tvar ExecutionEnvironment = {\n\n\t\tcanUseDOM: canUseDOM,\n\n\t\tcanUseWorkers: typeof Worker !== 'undefined',\n\n\t\tcanUseEventListeners:\n\t\t\tcanUseDOM && !!(window.addEventListener || window.attachEvent),\n\n\t\tcanUseViewport: canUseDOM && !!window.screen\n\n\t};\n\n\tif (true) {\n\t\t!(__WEBPACK_AMD_DEFINE_RESULT__ = (function () {\n\t\t\treturn ExecutionEnvironment;\n\t\t}).call(exports, __webpack_require__, exports, module),\n\t\t__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));\n\t} else {}\n\n}());\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHNzcikvLi9ub2RlX21vZHVsZXMvZXhlbnYvaW5kZXguanMiLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBOztBQUVBLEtBQUssSUFBNEU7QUFDakYsRUFBRSxtQ0FBTztBQUNUO0FBQ0EsR0FBRztBQUFBLGtHQUFDO0FBQ0osR0FBRyxLQUFLLEVBSU47O0FBRUYsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL25vdGlvbi14LWZ1bGwvLi9ub2RlX21vZHVsZXMvZXhlbnYvaW5kZXguanM/ZWRlZSJdLCJzb3VyY2VzQ29udGVudCI6WyIvKiFcbiAgQ29weXJpZ2h0IChjKSAyMDE1IEplZCBXYXRzb24uXG4gIEJhc2VkIG9uIGNvZGUgdGhhdCBpcyBDb3B5cmlnaHQgMjAxMy0yMDE1LCBGYWNlYm9vaywgSW5jLlxuICBBbGwgcmlnaHRzIHJlc2VydmVkLlxuKi9cbi8qIGdsb2JhbCBkZWZpbmUgKi9cblxuKGZ1bmN0aW9uICgpIHtcblx0J3VzZSBzdHJpY3QnO1xuXG5cdHZhciBjYW5Vc2VET00gPSAhIShcblx0XHR0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJyAmJlxuXHRcdHdpbmRvdy5kb2N1bWVudCAmJlxuXHRcdHdpbmRvdy5kb2N1bWVudC5jcmVhdGVFbGVtZW50XG5cdCk7XG5cblx0dmFyIEV4ZWN1dGlvbkVudmlyb25tZW50ID0ge1xuXG5cdFx0Y2FuVXNlRE9NOiBjYW5Vc2VET00sXG5cblx0XHRjYW5Vc2VXb3JrZXJzOiB0eXBlb2YgV29ya2VyICE9PSAndW5kZWZpbmVkJyxcblxuXHRcdGNhblVzZUV2ZW50TGlzdGVuZXJzOlxuXHRcdFx0Y2FuVXNlRE9NICYmICEhKHdpbmRvdy5hZGRFdmVudExpc3RlbmVyIHx8IHdpbmRvdy5hdHRhY2hFdmVudCksXG5cblx0XHRjYW5Vc2VWaWV3cG9ydDogY2FuVXNlRE9NICYmICEhd2luZG93LnNjcmVlblxuXG5cdH07XG5cblx0aWYgKHR5cGVvZiBkZWZpbmUgPT09ICdmdW5jdGlvbicgJiYgdHlwZW9mIGRlZmluZS5hbWQgPT09ICdvYmplY3QnICYmIGRlZmluZS5hbWQpIHtcblx0XHRkZWZpbmUoZnVuY3Rpb24gKCkge1xuXHRcdFx0cmV0dXJuIEV4ZWN1dGlvbkVudmlyb25tZW50O1xuXHRcdH0pO1xuXHR9IGVsc2UgaWYgKHR5cGVvZiBtb2R1bGUgIT09ICd1bmRlZmluZWQnICYmIG1vZHVsZS5leHBvcnRzKSB7XG5cdFx0bW9kdWxlLmV4cG9ydHMgPSBFeGVjdXRpb25FbnZpcm9ubWVudDtcblx0fSBlbHNlIHtcblx0XHR3aW5kb3cuRXhlY3V0aW9uRW52aXJvbm1lbnQgPSBFeGVjdXRpb25FbnZpcm9ubWVudDtcblx0fVxuXG59KCkpO1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(ssr)/./node_modules/exenv/index.js\n");

/***/ })

};
;