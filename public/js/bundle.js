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
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./client/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./client/index.js":
/*!*************************!*\
  !*** ./client/index.js ***!
  \*************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _rollFateDice_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./rollFateDice.js */ \"./client/rollFateDice.js\");\n\nvar NAME = 'Rose 🐶'; // Make sure the output starts cleared\n\nelmOutput.value = ''; // Listen for roll clicks\n\nwindow.btnRoll.addEventListener('click', function (event) {\n  var result = Object(_rollFateDice_js__WEBPACK_IMPORTED_MODULE_0__[\"rollFateDice\"])(); // const result = roll1dF();\n\n  elmOutput.value += \"\".concat(NAME, \" rolled a \").concat(result, \"\\n\");\n});\n\n//# sourceURL=webpack:///./client/index.js?");

/***/ }),

/***/ "./client/rollFateDice.js":
/*!********************************!*\
  !*** ./client/rollFateDice.js ***!
  \********************************/
/*! exports provided: rollFateDice, d6, roll1dF */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"rollFateDice\", function() { return rollFateDice; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"d6\", function() { return d6; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"roll1dF\", function() { return roll1dF; });\n/**\n * Rolls 4 Fate/Fudge dice (1dF) and returns the result.\n * @return {Number} a number between -4 and +4\n */\nfunction rollFateDice() {\n  return roll1dF().reduce(function (total, diceValue) {\n    return total + diceValue;\n  }, 0); // const rolls = [\n  //   d6(), d6(), d6(), d6()\n  // ];\n  //\n  // return rolls.reduce((acc, rollResult) => {\n  //   if (rollResult <= 2) {\n  //     acc--;\n  //   }\n  //   else if (rollResult >= 5) {\n  //     acc++;\n  //   }\n  //   return acc;\n  // }, 0);\n}\nfunction d6() {\n  return 0 | Math.random() * 6 + 1;\n}\nfunction roll1dF() {\n  var rolls = [d6(), d6(), d6(), d6()];\n  return rolls.map(function (value) {\n    if (value <= 2) {\n      return -1;\n    }\n\n    if (value >= 5) {\n      return +1;\n    }\n\n    return 0;\n  });\n}\n\n//# sourceURL=webpack:///./client/rollFateDice.js?");

/***/ })

/******/ });