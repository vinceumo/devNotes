/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/static";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/js/theme-toggle.js":
/*!********************************!*\
  !*** ./src/js/theme-toggle.js ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("(function () {\n  var themeKey = \"appCurrentTheme\";\n  var body = document.querySelector('body');\n  setTheme(themeKey, body);\n  document.addEventListener(\"DOMContentLoaded\", function (event) {\n    var themeToggleCtas = document.querySelectorAll(\".toggle-theme\");\n    Array.prototype.forEach.call(themeToggleCtas, function (el, i) {\n      var currentCta = themeToggleCtas[i];\n      currentCta.addEventListener(\"click\", function () {\n        toggleTheme(currentCta, themeKey, body);\n      });\n    });\n  });\n\n  function setTheme(key, container) {\n    var currentTheme = localStorage.getItem(key);\n\n    if (currentTheme === null) {\n      localStorage.setItem(key, \"theme-default\");\n      container.setAttribute(\"data-theme\", \"theme-default\");\n    } else {\n      currentTheme = localStorage.getItem(key);\n      container.setAttribute(\"data-theme\", currentTheme);\n    }\n  }\n\n  function toggleTheme(cta, key, container) {\n    var themeClass = cta.getAttribute('data-toggle-theme');\n    localStorage.setItem(key, themeClass);\n    container.setAttribute(\"data-theme\", themeClass);\n  }\n})();\n\n//# sourceURL=webpack:///./src/js/theme-toggle.js?");

/***/ }),

/***/ "./src/scss/screen.scss":
/*!******************************!*\
  !*** ./src/scss/screen.scss ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// extracted by mini-css-extract-plugin\n\n//# sourceURL=webpack:///./src/scss/screen.scss?");

/***/ }),

/***/ 0:
/*!*************************************************************!*\
  !*** multi ./src/js/theme-toggle.js ./src/scss/screen.scss ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("__webpack_require__(/*! ./src/js/theme-toggle.js */\"./src/js/theme-toggle.js\");\nmodule.exports = __webpack_require__(/*! ./src/scss/screen.scss */\"./src/scss/screen.scss\");\n\n\n//# sourceURL=webpack:///multi_./src/js/theme-toggle.js_./src/scss/screen.scss?");

/***/ })

/******/ });