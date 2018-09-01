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
/*! no static exports found */
/***/ (function(module, exports) {

eval("var socket = null; // Make sure the output starts cleared\n\nelmOutput.value = ''; // Listen for roll clicks\n\nwindow.btnRoll.addEventListener('click', function (event) {\n  if (!socket || socket.readyState !== socket.OPEN) {\n    return;\n  } // const result = rollFateDice();\n  // const result = roll1dF();\n  // elmOutput.value = `${NAME} rolled a ${result}\\n` + elmOutput.value;\n  // Ask for a dice roll\n\n\n  socket.send(JSON.stringify({\n    type: 'roll',\n    userName: userName\n  }));\n});\nbtnLogin.addEventListener('click', function (event) {\n  var name = inputName.value;\n\n  if (!name || name === '') {\n    alert('Need a name dude!');\n    return;\n  }\n\n  userName = name;\n  window.socket = socket = new WebSocket(\"ws:/\".concat(location.host, \"/\")); // wait for connection\n\n  socket.addEventListener('open', function () {\n    elmSocketStatus.setAttribute('state', 'opened'); // Send login info\n\n    socket.send(JSON.stringify({\n      type: 'login',\n      userName: userName\n    }));\n  }); // If the connection is lost, update the ui to show it.\n\n  socket.addEventListener('close', function () {\n    elmSocketStatus.setAttribute('state', 'closed');\n  }); // If the connection is lost, update the ui to show it.\n\n  socket.addEventListener('message', function (event) {\n    var payload;\n\n    try {\n      payload = JSON.parse(event.data);\n    } catch (e) {\n      throw new Error('Could not parse message', event);\n      return;\n    }\n\n    switch (payload.type) {\n      case 'response-roll':\n        updateRolls(payload);\n        break;\n\n      default:\n        console.log('message', payload);\n    }\n  });\n});\n\nfunction updateRolls(_ref) {\n  var userName = _ref.userName,\n      total = _ref.total;\n  elmOutput.value = \"\".concat(userName, \" rolled a \").concat(total, \"\\n\") + elmOutput.value;\n}\n\n//# sourceURL=webpack:///./client/index.js?");

/***/ })

/******/ });