"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
exports.id = "vendor-chunks/wrappy";
exports.ids = ["vendor-chunks/wrappy"];
exports.modules = {

/***/ "(rsc)/./node_modules/wrappy/wrappy.js":
/*!***************************************!*\
  !*** ./node_modules/wrappy/wrappy.js ***!
  \***************************************/
/***/ ((module) => {

eval("// Returns a wrapper function that returns a wrapped callback\n// The wrapper function should do some stuff, and return a\n// presumably different callback function.\n// This makes sure that own properties are retained, so that\n// decorations and such are not lost along the way.\n\nmodule.exports = wrappy;\nfunction wrappy(fn, cb) {\n    if (fn && cb) return wrappy(fn)(cb);\n    if (typeof fn !== \"function\") throw new TypeError(\"need wrapper function\");\n    Object.keys(fn).forEach(function(k) {\n        wrapper[k] = fn[k];\n    });\n    return wrapper;\n    function wrapper() {\n        var args = new Array(arguments.length);\n        for(var i = 0; i < args.length; i++){\n            args[i] = arguments[i];\n        }\n        var ret = fn.apply(this, args);\n        var cb = args[args.length - 1];\n        if (typeof ret === \"function\" && ret !== cb) {\n            Object.keys(cb).forEach(function(k) {\n                ret[k] = cb[k];\n            });\n        }\n        return ret;\n    }\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9ub2RlX21vZHVsZXMvd3JhcHB5L3dyYXBweS5qcyIsIm1hcHBpbmdzIjoiQUFBQSw2REFBNkQ7QUFDN0QsMERBQTBEO0FBQzFELDBDQUEwQztBQUMxQyw0REFBNEQ7QUFDNUQsbURBQW1EOztBQUNuREEsT0FBT0MsT0FBTyxHQUFHQztBQUNqQixTQUFTQSxPQUFRQyxFQUFFLEVBQUVDLEVBQUU7SUFDckIsSUFBSUQsTUFBTUMsSUFBSSxPQUFPRixPQUFPQyxJQUFJQztJQUVoQyxJQUFJLE9BQU9ELE9BQU8sWUFDaEIsTUFBTSxJQUFJRSxVQUFVO0lBRXRCQyxPQUFPQyxJQUFJLENBQUNKLElBQUlLLE9BQU8sQ0FBQyxTQUFVQyxDQUFDO1FBQ2pDQyxPQUFPLENBQUNELEVBQUUsR0FBR04sRUFBRSxDQUFDTSxFQUFFO0lBQ3BCO0lBRUEsT0FBT0M7SUFFUCxTQUFTQTtRQUNQLElBQUlDLE9BQU8sSUFBSUMsTUFBTUMsVUFBVUMsTUFBTTtRQUNyQyxJQUFLLElBQUlDLElBQUksR0FBR0EsSUFBSUosS0FBS0csTUFBTSxFQUFFQyxJQUFLO1lBQ3BDSixJQUFJLENBQUNJLEVBQUUsR0FBR0YsU0FBUyxDQUFDRSxFQUFFO1FBQ3hCO1FBQ0EsSUFBSUMsTUFBTWIsR0FBR2MsS0FBSyxDQUFDLElBQUksRUFBRU47UUFDekIsSUFBSVAsS0FBS08sSUFBSSxDQUFDQSxLQUFLRyxNQUFNLEdBQUMsRUFBRTtRQUM1QixJQUFJLE9BQU9FLFFBQVEsY0FBY0EsUUFBUVosSUFBSTtZQUMzQ0UsT0FBT0MsSUFBSSxDQUFDSCxJQUFJSSxPQUFPLENBQUMsU0FBVUMsQ0FBQztnQkFDakNPLEdBQUcsQ0FBQ1AsRUFBRSxHQUFHTCxFQUFFLENBQUNLLEVBQUU7WUFDaEI7UUFDRjtRQUNBLE9BQU9PO0lBQ1Q7QUFDRiIsInNvdXJjZXMiOlsid2VicGFjazovL25vdGlvbi14LWZ1bGwvLi9ub2RlX21vZHVsZXMvd3JhcHB5L3dyYXBweS5qcz85NGQ2Il0sInNvdXJjZXNDb250ZW50IjpbIi8vIFJldHVybnMgYSB3cmFwcGVyIGZ1bmN0aW9uIHRoYXQgcmV0dXJucyBhIHdyYXBwZWQgY2FsbGJhY2tcbi8vIFRoZSB3cmFwcGVyIGZ1bmN0aW9uIHNob3VsZCBkbyBzb21lIHN0dWZmLCBhbmQgcmV0dXJuIGFcbi8vIHByZXN1bWFibHkgZGlmZmVyZW50IGNhbGxiYWNrIGZ1bmN0aW9uLlxuLy8gVGhpcyBtYWtlcyBzdXJlIHRoYXQgb3duIHByb3BlcnRpZXMgYXJlIHJldGFpbmVkLCBzbyB0aGF0XG4vLyBkZWNvcmF0aW9ucyBhbmQgc3VjaCBhcmUgbm90IGxvc3QgYWxvbmcgdGhlIHdheS5cbm1vZHVsZS5leHBvcnRzID0gd3JhcHB5XG5mdW5jdGlvbiB3cmFwcHkgKGZuLCBjYikge1xuICBpZiAoZm4gJiYgY2IpIHJldHVybiB3cmFwcHkoZm4pKGNiKVxuXG4gIGlmICh0eXBlb2YgZm4gIT09ICdmdW5jdGlvbicpXG4gICAgdGhyb3cgbmV3IFR5cGVFcnJvcignbmVlZCB3cmFwcGVyIGZ1bmN0aW9uJylcblxuICBPYmplY3Qua2V5cyhmbikuZm9yRWFjaChmdW5jdGlvbiAoaykge1xuICAgIHdyYXBwZXJba10gPSBmbltrXVxuICB9KVxuXG4gIHJldHVybiB3cmFwcGVyXG5cbiAgZnVuY3Rpb24gd3JhcHBlcigpIHtcbiAgICB2YXIgYXJncyA9IG5ldyBBcnJheShhcmd1bWVudHMubGVuZ3RoKVxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgYXJncy5sZW5ndGg7IGkrKykge1xuICAgICAgYXJnc1tpXSA9IGFyZ3VtZW50c1tpXVxuICAgIH1cbiAgICB2YXIgcmV0ID0gZm4uYXBwbHkodGhpcywgYXJncylcbiAgICB2YXIgY2IgPSBhcmdzW2FyZ3MubGVuZ3RoLTFdXG4gICAgaWYgKHR5cGVvZiByZXQgPT09ICdmdW5jdGlvbicgJiYgcmV0ICE9PSBjYikge1xuICAgICAgT2JqZWN0LmtleXMoY2IpLmZvckVhY2goZnVuY3Rpb24gKGspIHtcbiAgICAgICAgcmV0W2tdID0gY2Jba11cbiAgICAgIH0pXG4gICAgfVxuICAgIHJldHVybiByZXRcbiAgfVxufVxuIl0sIm5hbWVzIjpbIm1vZHVsZSIsImV4cG9ydHMiLCJ3cmFwcHkiLCJmbiIsImNiIiwiVHlwZUVycm9yIiwiT2JqZWN0Iiwia2V5cyIsImZvckVhY2giLCJrIiwid3JhcHBlciIsImFyZ3MiLCJBcnJheSIsImFyZ3VtZW50cyIsImxlbmd0aCIsImkiLCJyZXQiLCJhcHBseSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(rsc)/./node_modules/wrappy/wrappy.js\n");

/***/ })

};
;