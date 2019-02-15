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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/dom_node_collection.js":
/*!************************************!*\
  !*** ./src/dom_node_collection.js ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("class DomNodeCollection {\n  constructor(array){\n    this.htmlElements = array;\n  }\n\n  html(string){\n    if (string === undefined){\n      return this.htmlElements[0];\n    } else {\n      this.htmlElements.forEach(function(el){\n        el.innerHTML = string;\n      });\n    }\n  }\n  empty(){\n    this.html(\"\");\n  }\n\n  append(arg) {\n    let toAppend = \"\";\n    if (arg instanceof DomNodeCollection) {\n      arg.htmlElements.forEach (function(el) {\n        toAppend += el.outerHTML;\n      });\n    } else if (arg instanceof HTMLElement) {\n      toAppend += arg.outerHTML;\n    } else {\n      toAppend += arg;\n    }\n\n    this.htmlElements.forEach(function(el) {\n      el.innerHTML += toAppend;\n    });\n  }\n\n  attr(attribute){\n    return this.htmlElements[0].getAttribute(attribute);\n  }\n  addClass(className){\n    this.htmlElements.forEach(function(el){\n      el.classList.add(className);\n    });\n  }\n  removeClass(className){\n    this.htmlElements.forEach(function(el){\n      el.classList.remove(className);\n    });\n  }\n\n  children() {\n    let result = [];\n    this.htmlElements.forEach(function(el){\n      result = result.concat(Array.from(el.children));\n    });\n    return new DomNodeCollection(result);\n  }\n\n  parent() {\n    let result = [];\n    this.htmlElements.forEach(function(el){\n      result = result.concat([el.parentElement]);\n    });\n    return new DomNodeCollection(result);\n  }\n\n  find(selector) {\n    let result = [];\n    this.htmlElements.forEach(function(el){\n      result = result.concat(Array.from(el.querySelectorAll(selector)));\n    });\n    return new DomNodeCollection(result);\n  }\n  remove(){\n    this.htmlElements.forEach(function(el){\n      el.outerHTML = \"\";\n    });\n  }\n\n  on(event,fn ){\n    this.htmlElements.forEach(function(el){\n      el.addEventListener(event, fn);\n    })\n  }\n\n  off(event, fn){\n    this.htmlElements.forEach(function(el){\n      el.removeEventListener(event, fn);\n    })\n  }\n\n}\n() => alert(\"clicked!\");\n\nmodule.exports = DomNodeCollection;\n\n//# sourceURL=webpack:///./src/dom_node_collection.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("const DomNodeCollection = __webpack_require__(/*! ./dom_node_collection */ \"./src/dom_node_collection.js\");\n\nWindow.prototype.$l = function(arg) { // .nested-div, #name\n  // debugger\n\n  if (typeof(arg) === \"string\") {\n    const elementList = document.querySelectorAll(arg);\n    const dnc =  new DomNodeCollection(Array.from(elementList));\n    // console.log(elementsList);\n\n    return dnc;\n  } else if (arg instanceof HTMLElement){\n    const dnc = new DomNodeCollection([arg]);\n    return dnc;\n  }\n  \n}\n\n\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ })

/******/ });