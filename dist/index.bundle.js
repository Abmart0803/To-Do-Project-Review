/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
___CSS_LOADER_EXPORT___.push([module.id, "@import url(https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700&display=swap);"]);
// Module
___CSS_LOADER_EXPORT___.push([module.id, "body {\r\n  background-color: bisque;\r\n  overflow: hidden;\r\n  box-sizing: border-box;\r\n  font-family: \"Poppins\", sans-serif;\r\n}\r\n\r\n.clear.active {\r\n  opacity: 0.9;\r\n  pointer-events: auto;\r\n}\r\n\r\n.clear:active {\r\n  transform: scale(0.93);\r\n}\r\n\r\nlabel {\r\n  display: flex;\r\n  justify-content: flex-start;\r\n  align-items: center;\r\n}\r\n\r\ninput p.checkbox {\r\n  text-decoration: line-through;\r\n}\r\n\r\nli {\r\n  list-style: none;\r\n}\r\n\r\n.wrapper {\r\n  max-width: 400px;\r\n  margin: 130px auto;\r\n  background-color: white;\r\n  border: 7px;\r\n}\r\n\r\n.todo-heder {\r\n  width: 400px;\r\n  margin-left: 7%;\r\n}\r\n\r\nh1 {\r\n  padding: 1rem 0 0 1rem;\r\n  font-size: 17px;\r\n  color: rgb(42, 37, 37);\r\n}\r\n\r\ninput {\r\n  border: none;\r\n  padding: 5px;\r\n  background-color: transparent;\r\n}\r\n\r\nlabel input {\r\n  margin: 1rem;\r\n}\r\n\r\n#todo {\r\n  height: 30px;\r\n  width: 21rem;\r\n  margin: auto;\r\n  margin-left: 6%;\r\n}\r\n\r\n.task-list {\r\n  margin: 0;\r\n  padding: 0;\r\n  display: flex;\r\n}\r\n\r\n.task label {\r\n  display: flex;\r\n  align-items: center;\r\n}\r\n\r\nhr {\r\n  background: rgb(252, 251, 251);\r\n  width: 100%;\r\n}\r\n\r\n.task .menu {\r\n  cursor: pointer;\r\n  position: relative;\r\n}\r\n\r\np {\r\n  margin: 0;\r\n  padding-left: 15px;\r\n}\r\n\r\n.task-menu {\r\n  display: flex;\r\n  justify-content: space-between;\r\n  margin: 5%;\r\n}\r\n\r\narticle {\r\n  display: flex;\r\n  position: relative;\r\n}\r\n\r\n.menulist {\r\n  width: 50px;\r\n  cursor: pointer;\r\n  left: -40px;\r\n  top: -29px;\r\n  z-index: 2;\r\n  border-radius: 4px;\r\n  padding: 5px 0;\r\n  box-shadow: 0 0 6px rgb(0, 0, 0, 0.15);\r\n  transform: scale(0);\r\n}\r\n\r\n.uil-ellipsis-v:hover .menulist {\r\n  transform: scale(1);\r\n  position: relative;\r\n}\r\n\r\nbutton {\r\n  margin: 10%;\r\n}\r\n\r\n.menulist button {\r\n  cursor: pointer;\r\n}\r\n\r\n.task-menu li {\r\n  height: 25px;\r\n  font-size: 16px;\r\n  align-items: center;\r\n}\r\n\r\n.uil-ellipsis-v {\r\n  margin-left: 90px;\r\n}\r\n\r\n.task-menu li i {\r\n  padding: 8px;\r\n}\r\n\r\n#save input {\r\n  height: 20px;\r\n  align-items: center;\r\n  margin-top: 7%;\r\n}\r\n\r\n#clear {\r\n  display: flex;\r\n  justify-content: center;\r\n}\r\n\r\n#clear button {\r\n  cursor: pointer;\r\n  width: 400px;\r\n  height: 55px;\r\n  border: 1px;\r\n  font-size: 16px;\r\n  font-weight: 300;\r\n  color: rgb(36, 31, 26);\r\n}\r\n\r\nh2 {\r\n  display: flex;\r\n  justify-content: flex-start;\r\n  font-size: 15px;\r\n  margin: 11px 0 0;\r\n  color: rgb(51, 49, 49);\r\n}\r\n\r\n#toDoContainer {\r\n  /* display: flex; */\r\n  justify-content: center;\r\n  align-items: center;\r\n  flex-direction: column;\r\n  box-shadow: 4px 11px 16px rgb(217, 216, 216);\r\n  background-color: lightgray;\r\n}\r\n\r\n#toDoContainer p {\r\n  cursor: pointer;\r\n  margin-top: 0;\r\n}\r\n\r\nul {\r\n  padding: 0;\r\n}\r\n\r\n.todo-input {\r\n  outline: none;\r\n  border: navajowhite !important;\r\n  border-bottom: none;\r\n  background-color: transparent;\r\n  width: 90%;\r\n  appearance: none;\r\n  font-style: italic;\r\n  display: flex;\r\n  justify-content: space-between;\r\n}\r\n\r\n.uil-refreshe {\r\n  cursor: pointer;\r\n  left: -50px;\r\n  height: 20px;\r\n  background-color: transparent;\r\n  align-items: center;\r\n}\r\n\r\n.list {\r\n  display: flex;\r\n  justify-content: flex-start;\r\n}\r\n", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AAEA;EACE,wBAAwB;EACxB,gBAAgB;EAChB,sBAAsB;EACtB,kCAAkC;AACpC;;AAEA;EACE,YAAY;EACZ,oBAAoB;AACtB;;AAEA;EACE,sBAAsB;AACxB;;AAEA;EACE,aAAa;EACb,2BAA2B;EAC3B,mBAAmB;AACrB;;AAEA;EACE,6BAA6B;AAC/B;;AAEA;EACE,gBAAgB;AAClB;;AAEA;EACE,gBAAgB;EAChB,kBAAkB;EAClB,uBAAuB;EACvB,WAAW;AACb;;AAEA;EACE,YAAY;EACZ,eAAe;AACjB;;AAEA;EACE,sBAAsB;EACtB,eAAe;EACf,sBAAsB;AACxB;;AAEA;EACE,YAAY;EACZ,YAAY;EACZ,6BAA6B;AAC/B;;AAEA;EACE,YAAY;AACd;;AAEA;EACE,YAAY;EACZ,YAAY;EACZ,YAAY;EACZ,eAAe;AACjB;;AAEA;EACE,SAAS;EACT,UAAU;EACV,aAAa;AACf;;AAEA;EACE,aAAa;EACb,mBAAmB;AACrB;;AAEA;EACE,8BAA8B;EAC9B,WAAW;AACb;;AAEA;EACE,eAAe;EACf,kBAAkB;AACpB;;AAEA;EACE,SAAS;EACT,kBAAkB;AACpB;;AAEA;EACE,aAAa;EACb,8BAA8B;EAC9B,UAAU;AACZ;;AAEA;EACE,aAAa;EACb,kBAAkB;AACpB;;AAEA;EACE,WAAW;EACX,eAAe;EACf,WAAW;EACX,UAAU;EACV,UAAU;EACV,kBAAkB;EAClB,cAAc;EACd,sCAAsC;EACtC,mBAAmB;AACrB;;AAEA;EACE,mBAAmB;EACnB,kBAAkB;AACpB;;AAEA;EACE,WAAW;AACb;;AAEA;EACE,eAAe;AACjB;;AAEA;EACE,YAAY;EACZ,eAAe;EACf,mBAAmB;AACrB;;AAEA;EACE,iBAAiB;AACnB;;AAEA;EACE,YAAY;AACd;;AAEA;EACE,YAAY;EACZ,mBAAmB;EACnB,cAAc;AAChB;;AAEA;EACE,aAAa;EACb,uBAAuB;AACzB;;AAEA;EACE,eAAe;EACf,YAAY;EACZ,YAAY;EACZ,WAAW;EACX,eAAe;EACf,gBAAgB;EAChB,sBAAsB;AACxB;;AAEA;EACE,aAAa;EACb,2BAA2B;EAC3B,eAAe;EACf,gBAAgB;EAChB,sBAAsB;AACxB;;AAEA;EACE,mBAAmB;EACnB,uBAAuB;EACvB,mBAAmB;EACnB,sBAAsB;EACtB,4CAA4C;EAC5C,2BAA2B;AAC7B;;AAEA;EACE,eAAe;EACf,aAAa;AACf;;AAEA;EACE,UAAU;AACZ;;AAEA;EACE,aAAa;EACb,8BAA8B;EAC9B,mBAAmB;EACnB,6BAA6B;EAC7B,UAAU;EACV,gBAAgB;EAChB,kBAAkB;EAClB,aAAa;EACb,8BAA8B;AAChC;;AAEA;EACE,eAAe;EACf,WAAW;EACX,YAAY;EACZ,6BAA6B;EAC7B,mBAAmB;AACrB;;AAEA;EACE,aAAa;EACb,2BAA2B;AAC7B","sourcesContent":["@import url(\"https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700&display=swap\");\r\n\r\nbody {\r\n  background-color: bisque;\r\n  overflow: hidden;\r\n  box-sizing: border-box;\r\n  font-family: \"Poppins\", sans-serif;\r\n}\r\n\r\n.clear.active {\r\n  opacity: 0.9;\r\n  pointer-events: auto;\r\n}\r\n\r\n.clear:active {\r\n  transform: scale(0.93);\r\n}\r\n\r\nlabel {\r\n  display: flex;\r\n  justify-content: flex-start;\r\n  align-items: center;\r\n}\r\n\r\ninput p.checkbox {\r\n  text-decoration: line-through;\r\n}\r\n\r\nli {\r\n  list-style: none;\r\n}\r\n\r\n.wrapper {\r\n  max-width: 400px;\r\n  margin: 130px auto;\r\n  background-color: white;\r\n  border: 7px;\r\n}\r\n\r\n.todo-heder {\r\n  width: 400px;\r\n  margin-left: 7%;\r\n}\r\n\r\nh1 {\r\n  padding: 1rem 0 0 1rem;\r\n  font-size: 17px;\r\n  color: rgb(42, 37, 37);\r\n}\r\n\r\ninput {\r\n  border: none;\r\n  padding: 5px;\r\n  background-color: transparent;\r\n}\r\n\r\nlabel input {\r\n  margin: 1rem;\r\n}\r\n\r\n#todo {\r\n  height: 30px;\r\n  width: 21rem;\r\n  margin: auto;\r\n  margin-left: 6%;\r\n}\r\n\r\n.task-list {\r\n  margin: 0;\r\n  padding: 0;\r\n  display: flex;\r\n}\r\n\r\n.task label {\r\n  display: flex;\r\n  align-items: center;\r\n}\r\n\r\nhr {\r\n  background: rgb(252, 251, 251);\r\n  width: 100%;\r\n}\r\n\r\n.task .menu {\r\n  cursor: pointer;\r\n  position: relative;\r\n}\r\n\r\np {\r\n  margin: 0;\r\n  padding-left: 15px;\r\n}\r\n\r\n.task-menu {\r\n  display: flex;\r\n  justify-content: space-between;\r\n  margin: 5%;\r\n}\r\n\r\narticle {\r\n  display: flex;\r\n  position: relative;\r\n}\r\n\r\n.menulist {\r\n  width: 50px;\r\n  cursor: pointer;\r\n  left: -40px;\r\n  top: -29px;\r\n  z-index: 2;\r\n  border-radius: 4px;\r\n  padding: 5px 0;\r\n  box-shadow: 0 0 6px rgb(0, 0, 0, 0.15);\r\n  transform: scale(0);\r\n}\r\n\r\n.uil-ellipsis-v:hover .menulist {\r\n  transform: scale(1);\r\n  position: relative;\r\n}\r\n\r\nbutton {\r\n  margin: 10%;\r\n}\r\n\r\n.menulist button {\r\n  cursor: pointer;\r\n}\r\n\r\n.task-menu li {\r\n  height: 25px;\r\n  font-size: 16px;\r\n  align-items: center;\r\n}\r\n\r\n.uil-ellipsis-v {\r\n  margin-left: 90px;\r\n}\r\n\r\n.task-menu li i {\r\n  padding: 8px;\r\n}\r\n\r\n#save input {\r\n  height: 20px;\r\n  align-items: center;\r\n  margin-top: 7%;\r\n}\r\n\r\n#clear {\r\n  display: flex;\r\n  justify-content: center;\r\n}\r\n\r\n#clear button {\r\n  cursor: pointer;\r\n  width: 400px;\r\n  height: 55px;\r\n  border: 1px;\r\n  font-size: 16px;\r\n  font-weight: 300;\r\n  color: rgb(36, 31, 26);\r\n}\r\n\r\nh2 {\r\n  display: flex;\r\n  justify-content: flex-start;\r\n  font-size: 15px;\r\n  margin: 11px 0 0;\r\n  color: rgb(51, 49, 49);\r\n}\r\n\r\n#toDoContainer {\r\n  /* display: flex; */\r\n  justify-content: center;\r\n  align-items: center;\r\n  flex-direction: column;\r\n  box-shadow: 4px 11px 16px rgb(217, 216, 216);\r\n  background-color: lightgray;\r\n}\r\n\r\n#toDoContainer p {\r\n  cursor: pointer;\r\n  margin-top: 0;\r\n}\r\n\r\nul {\r\n  padding: 0;\r\n}\r\n\r\n.todo-input {\r\n  outline: none;\r\n  border: navajowhite !important;\r\n  border-bottom: none;\r\n  background-color: transparent;\r\n  width: 90%;\r\n  appearance: none;\r\n  font-style: italic;\r\n  display: flex;\r\n  justify-content: space-between;\r\n}\r\n\r\n.uil-refreshe {\r\n  cursor: pointer;\r\n  left: -50px;\r\n  height: 20px;\r\n  background-color: transparent;\r\n  align-items: center;\r\n}\r\n\r\n.list {\r\n  display: flex;\r\n  justify-content: flex-start;\r\n}\r\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = [];

  // return the list of modules as css string
  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";
      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }
      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }
      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }
      content += cssWithMappingToString(item);
      if (needLayer) {
        content += "}";
      }
      if (item[2]) {
        content += "}";
      }
      if (item[4]) {
        content += "}";
      }
      return content;
    }).join("");
  };

  // import a list of modules into the list
  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }
    var alreadyImportedModules = {};
    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];
        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }
    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);
      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }
      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }
      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }
      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }
      list.push(item);
    }
  };
  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];
  if (!cssMapping) {
    return content;
  }
  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    return [content].concat([sourceMapping]).join("\n");
  }
  return [content].join("\n");
};

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./src/style.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];
function getIndexByIdentifier(identifier) {
  var result = -1;
  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }
  return result;
}
function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];
  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };
    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }
    identifiers.push(identifier);
  }
  return identifiers;
}
function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);
  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }
      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };
  return updater;
}
module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];
    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }
    var newLastIdentifiers = modulesToDom(newList, options);
    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];
      var _index = getIndexByIdentifier(_identifier);
      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();
        stylesInDOM.splice(_index, 1);
      }
    }
    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};

/* istanbul ignore next  */
function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target);

    // Special case to return head of iframe instead of iframe itself
    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }
    memo[target] = styleTarget;
  }
  return memo[target];
}

/* istanbul ignore next  */
function insertBySelector(insert, style) {
  var target = getTarget(insert);
  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }
  target.appendChild(style);
}
module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}
module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;
  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}
module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";
  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }
  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }
  var needLayer = typeof obj.layer !== "undefined";
  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }
  css += obj.css;
  if (needLayer) {
    css += "}";
  }
  if (obj.media) {
    css += "}";
  }
  if (obj.supports) {
    css += "}";
  }
  var sourceMap = obj.sourceMap;
  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  }

  // For old IE
  /* istanbul ignore if  */
  options.styleTagTransform(css, styleElement, options.options);
}
function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }
  styleElement.parentNode.removeChild(styleElement);
}

/* istanbul ignore next  */
function domAPI(options) {
  if (typeof document === "undefined") {
    return {
      update: function update() {},
      remove: function remove() {}
    };
  }
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}
module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }
    styleElement.appendChild(document.createTextNode(css));
  }
}
module.exports = styleTagTransform;

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ "./src/style.css");
/* harmony import */ var _module_clearAll_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./module/clearAll.js */ "./src/module/clearAll.js");
/* module decorator */ module = __webpack_require__.hmd(module);



let addButton = document.getElementById('add');
let input = document.getElementById('todo');
let listContainer = document.getElementById('task-list');
let clearAll = document.getElementById('clearAll');
let newTodo = '';
let toDoList = [
  {
    description: 'Wash Car',
    completed: true,
    index: 0,
  },
  {
    description: 'Service Car',
    completed: true,
    index: 1,
  },
  {
    description: 'Finish To do List',
    completed: true,
    index: 2,
  },
];

const handleCheckbox = (e) => {
  const index = Number(e.target.parentNode.getAttribute('id'));
  toDoList[index - 1].completed = !toDoList[index - 1].completed;
  localStorage.setItem('taskList', JSON.stringify(toDoList));
};
const deleteTask = (e) => {
  const task = e.target.parentNode.parentNode.parentNode;
  const li = task.querySelector('li');
  const taskList = document.getElementById('task-list');
  taskList.removeChild(task);
  toDoList.splice(Number(li.getAttribute('id') - 1), 1);
  toDoList.forEach((task, index) => {
    document.getElementById(task.index).setAttribute('id', index + 1);
    task.index = index + 1;
  });
  localStorage.setItem('taskList', JSON.stringify(toDoList));
};

const saveEditTask = (e) => {
  const li = e.target.parentNode.parentNode;
  const target = li.querySelector('#save');
  const input = li.querySelector('input[type="text"]');
  const text = input.value;
  const P = document.createElement('p');
  P.textContent = text;
  li.replaceChild(P, target);
  toDoList.filter((task) => task.index === Number(li.id))[0].name = text;
  localStorage.setItem('taskList', JSON.stringify(toDoList));
};

const editTask = (e) => {
  const task = e.target.parentNode.parentNode.parentNode;
  const p = task.querySelector('p');
  const li = task.querySelector('li');
  const text = p.textContent;
  const input = document.createElement('input');
  input.setAttribute('type', 'text');
  input.value = text;
  input.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') saveEditTask(e);
  });
  const saveButton = document.createElement('button');
  saveButton.textContent = 'Save';
  saveButton.addEventListener('click', saveEditTask);
  const div = document.createElement('div');
  div.setAttribute('id', 'save');
  div.style.display = 'flex';
  div.appendChild(input);
  div.appendChild(saveButton);
  li.replaceChild(div, p);
  localStorage.setItem('taskList', JSON.stringify(toDoList));
};

const handleAddTask = (name = '', completed = false, newTask = true) => {
  if (!name) return;
  const index = toDoList.length + 1;
  toDoList.push({ name, completed, index });
  const deleteButton = document.createElement('button');
  deleteButton.setAttribute('class', 'uil uil-trash');
  deleteButton.addEventListener('click', deleteTask);
  const editButton = document.createElement('button');
  editButton.setAttribute('class', 'uil uil-pen');
  editButton.addEventListener('click', editTask);
  const menu = document.createElement('li');
  menu.setAttribute('class', 'uil uil-ellipsis-v');
  const taskmenu = document.createElement('article');
  taskmenu.setAttribute('class', 'menulist');
  const checkbox = document.createElement('input');
  checkbox.setAttribute('type', 'checkbox');
  checkbox.setAttribute('class', 'checkbox');
  checkbox.checked = completed;
  checkbox.addEventListener('change', handleCheckbox);
  const task = document.createElement('div');
  task.setAttribute('class', 'task-menu');
  const li = document.createElement('li');
  li.setAttribute('id', toDoList.length);
  li.setAttribute('class', 'list');
  const horizontal = document.createElement('hr');
  const p = document.createElement('p');
  p.textContent = name;

  li.appendChild(checkbox);
  li.appendChild(p);
  task.appendChild(li);
  taskmenu.appendChild(deleteButton);
  taskmenu.appendChild(editButton);
  task.appendChild(taskmenu);
  menu.appendChild(taskmenu);
  task.appendChild(menu);
  listContainer.appendChild(horizontal);
  listContainer.appendChild(task);
  input.value = '';
  newTodo = '';
  if (newTask) {
    localStorage.setItem('taskList', JSON.stringify(toDoList));
  }
};

function dom() {
  addButton = document.getElementById('add');
  input = document.getElementById('todo');
  listContainer = document.getElementById('task-list');
  clearAll = document.getElementById('clearAll');
}

document.addEventListener('DOMContentLoaded', () => {
  addButton = document.getElementById('add');
  input = document.getElementById('todo');
  listContainer = document.getElementById('task-list');
  clearAll = document.getElementById('clearAll');

  input.addEventListener('input', (e) => {
    newTodo = e.target.value;
  });

  addButton.addEventListener('click', () => handleAddTask(newTodo));

  input.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') handleAddTask(newTodo);
  });

  clearAll.addEventListener('click', () => {
    const newLists = (0,_module_clearAll_js__WEBPACK_IMPORTED_MODULE_1__["default"])(toDoList);
    toDoList = [];
    localStorage.setItem('taskList', JSON.stringify(newLists));
    listContainer.innerHTML = '';
    newLists.forEach((task) => handleAddTask(task.name, task.completed, false));
  });
  const initialList = localStorage.getItem('taskList')
    ? JSON.parse(localStorage.getItem('taskList'))
    : [
      {
        description: 'Wash Car',
        completed: true,
        index: 0,
      },
      {
        description: 'Service Car',
        completed: true,
        index: 1,
      },
      {
        description: 'Finish To do List',
        completed: true,
        index: 2,
      },
    ];
  initialList.forEach((task) => handleAddTask(task.description, task.completed, false));
});

module.exports = {
  deleteTask,
  handleAddTask,
  clearCompleted: _module_clearAll_js__WEBPACK_IMPORTED_MODULE_1__["default"],
  dom,
};


/***/ }),

/***/ "./src/module/clearAll.js":
/*!********************************!*\
  !*** ./src/module/clearAll.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((tasks) => tasks.filter((task) => !task.completed));

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			loaded: false,
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/harmony module decorator */
/******/ 	(() => {
/******/ 		__webpack_require__.hmd = (module) => {
/******/ 			module = Object.create(module);
/******/ 			if (!module.children) module.children = [];
/******/ 			Object.defineProperty(module, 'exports', {
/******/ 				enumerable: true,
/******/ 				set: () => {
/******/ 					throw new Error('ES Modules may not assign module.exports or exports.*, Use ESM export syntax, instead: ' + module.id);
/******/ 				}
/******/ 			});
/******/ 			return module;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module is referenced by other modules so it can't be inlined
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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OztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrQ0FBa0M7QUFDbEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7O0FDNURhOztBQUViO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7OztBQ2JxQjtBQUM2QjtBQUNsRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtCQUFrQix3QkFBd0I7QUFDMUM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxxQkFBcUIsK0RBQWM7QUFDbkM7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQTtBQUNBLGdCQUFnQjtBQUNoQjtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7QUNyTEEsaUVBQWUsa0RBQWtEOzs7Ozs7VUNBakU7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3pCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsaUNBQWlDLFdBQVc7V0FDNUM7V0FDQTs7Ozs7V0NQQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQSxFQUFFO1dBQ0Y7V0FDQTs7Ozs7V0NWQTs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7O1dDTkE7Ozs7O1VFQUE7VUFDQTtVQUNBO1VBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90by1kby1saXN0LXdpdGgtd2VicGFjay8uL3NyYy9zdHlsZS5jc3MiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC13aXRoLXdlYnBhY2svLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL3RvLWRvLWxpc3Qtd2l0aC13ZWJwYWNrLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC13aXRoLXdlYnBhY2svLi9zcmMvc3R5bGUuY3NzPzcxNjMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC13aXRoLXdlYnBhY2svLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC13aXRoLXdlYnBhY2svLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL3RvLWRvLWxpc3Qtd2l0aC13ZWJwYWNrLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL3RvLWRvLWxpc3Qtd2l0aC13ZWJwYWNrLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL3RvLWRvLWxpc3Qtd2l0aC13ZWJwYWNrLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC13aXRoLXdlYnBhY2svLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0LXdpdGgtd2VicGFjay8uL3NyYy9pbmRleC5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0LXdpdGgtd2VicGFjay8uL3NyYy9tb2R1bGUvY2xlYXJBbGwuanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC13aXRoLXdlYnBhY2svd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC13aXRoLXdlYnBhY2svd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC13aXRoLXdlYnBhY2svd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3RvLWRvLWxpc3Qtd2l0aC13ZWJwYWNrL3dlYnBhY2svcnVudGltZS9oYXJtb255IG1vZHVsZSBkZWNvcmF0b3IiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC13aXRoLXdlYnBhY2svd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly90by1kby1saXN0LXdpdGgtd2VicGFjay93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3RvLWRvLWxpc3Qtd2l0aC13ZWJwYWNrL3dlYnBhY2svcnVudGltZS9ub25jZSIsIndlYnBhY2s6Ly90by1kby1saXN0LXdpdGgtd2VicGFjay93ZWJwYWNrL2JlZm9yZS1zdGFydHVwIiwid2VicGFjazovL3RvLWRvLWxpc3Qtd2l0aC13ZWJwYWNrL3dlYnBhY2svc3RhcnR1cCIsIndlYnBhY2s6Ly90by1kby1saXN0LXdpdGgtd2VicGFjay93ZWJwYWNrL2FmdGVyLXN0YXJ0dXAiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiQGltcG9ydCB1cmwoaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1Qb3BwaW5zOndnaHRANDAwOzUwMDs2MDA7NzAwJmRpc3BsYXk9c3dhcCk7XCJdKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcImJvZHkge1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogYmlzcXVlO1xcclxcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcXHJcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxyXFxuICBmb250LWZhbWlseTogXFxcIlBvcHBpbnNcXFwiLCBzYW5zLXNlcmlmO1xcclxcbn1cXHJcXG5cXHJcXG4uY2xlYXIuYWN0aXZlIHtcXHJcXG4gIG9wYWNpdHk6IDAuOTtcXHJcXG4gIHBvaW50ZXItZXZlbnRzOiBhdXRvO1xcclxcbn1cXHJcXG5cXHJcXG4uY2xlYXI6YWN0aXZlIHtcXHJcXG4gIHRyYW5zZm9ybTogc2NhbGUoMC45Myk7XFxyXFxufVxcclxcblxcclxcbmxhYmVsIHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbn1cXHJcXG5cXHJcXG5pbnB1dCBwLmNoZWNrYm94IHtcXHJcXG4gIHRleHQtZGVjb3JhdGlvbjogbGluZS10aHJvdWdoO1xcclxcbn1cXHJcXG5cXHJcXG5saSB7XFxyXFxuICBsaXN0LXN0eWxlOiBub25lO1xcclxcbn1cXHJcXG5cXHJcXG4ud3JhcHBlciB7XFxyXFxuICBtYXgtd2lkdGg6IDQwMHB4O1xcclxcbiAgbWFyZ2luOiAxMzBweCBhdXRvO1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxyXFxuICBib3JkZXI6IDdweDtcXHJcXG59XFxyXFxuXFxyXFxuLnRvZG8taGVkZXIge1xcclxcbiAgd2lkdGg6IDQwMHB4O1xcclxcbiAgbWFyZ2luLWxlZnQ6IDclO1xcclxcbn1cXHJcXG5cXHJcXG5oMSB7XFxyXFxuICBwYWRkaW5nOiAxcmVtIDAgMCAxcmVtO1xcclxcbiAgZm9udC1zaXplOiAxN3B4O1xcclxcbiAgY29sb3I6IHJnYig0MiwgMzcsIDM3KTtcXHJcXG59XFxyXFxuXFxyXFxuaW5wdXQge1xcclxcbiAgYm9yZGVyOiBub25lO1xcclxcbiAgcGFkZGluZzogNXB4O1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XFxyXFxufVxcclxcblxcclxcbmxhYmVsIGlucHV0IHtcXHJcXG4gIG1hcmdpbjogMXJlbTtcXHJcXG59XFxyXFxuXFxyXFxuI3RvZG8ge1xcclxcbiAgaGVpZ2h0OiAzMHB4O1xcclxcbiAgd2lkdGg6IDIxcmVtO1xcclxcbiAgbWFyZ2luOiBhdXRvO1xcclxcbiAgbWFyZ2luLWxlZnQ6IDYlO1xcclxcbn1cXHJcXG5cXHJcXG4udGFzay1saXN0IHtcXHJcXG4gIG1hcmdpbjogMDtcXHJcXG4gIHBhZGRpbmc6IDA7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbn1cXHJcXG5cXHJcXG4udGFzayBsYWJlbCB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuaHIge1xcclxcbiAgYmFja2dyb3VuZDogcmdiKDI1MiwgMjUxLCAyNTEpO1xcclxcbiAgd2lkdGg6IDEwMCU7XFxyXFxufVxcclxcblxcclxcbi50YXNrIC5tZW51IHtcXHJcXG4gIGN1cnNvcjogcG9pbnRlcjtcXHJcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXHJcXG59XFxyXFxuXFxyXFxucCB7XFxyXFxuICBtYXJnaW46IDA7XFxyXFxuICBwYWRkaW5nLWxlZnQ6IDE1cHg7XFxyXFxufVxcclxcblxcclxcbi50YXNrLW1lbnUge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXHJcXG4gIG1hcmdpbjogNSU7XFxyXFxufVxcclxcblxcclxcbmFydGljbGUge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXHJcXG59XFxyXFxuXFxyXFxuLm1lbnVsaXN0IHtcXHJcXG4gIHdpZHRoOiA1MHB4O1xcclxcbiAgY3Vyc29yOiBwb2ludGVyO1xcclxcbiAgbGVmdDogLTQwcHg7XFxyXFxuICB0b3A6IC0yOXB4O1xcclxcbiAgei1pbmRleDogMjtcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDRweDtcXHJcXG4gIHBhZGRpbmc6IDVweCAwO1xcclxcbiAgYm94LXNoYWRvdzogMCAwIDZweCByZ2IoMCwgMCwgMCwgMC4xNSk7XFxyXFxuICB0cmFuc2Zvcm06IHNjYWxlKDApO1xcclxcbn1cXHJcXG5cXHJcXG4udWlsLWVsbGlwc2lzLXY6aG92ZXIgLm1lbnVsaXN0IHtcXHJcXG4gIHRyYW5zZm9ybTogc2NhbGUoMSk7XFxyXFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxyXFxufVxcclxcblxcclxcbmJ1dHRvbiB7XFxyXFxuICBtYXJnaW46IDEwJTtcXHJcXG59XFxyXFxuXFxyXFxuLm1lbnVsaXN0IGJ1dHRvbiB7XFxyXFxuICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxufVxcclxcblxcclxcbi50YXNrLW1lbnUgbGkge1xcclxcbiAgaGVpZ2h0OiAyNXB4O1xcclxcbiAgZm9udC1zaXplOiAxNnB4O1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuLnVpbC1lbGxpcHNpcy12IHtcXHJcXG4gIG1hcmdpbi1sZWZ0OiA5MHB4O1xcclxcbn1cXHJcXG5cXHJcXG4udGFzay1tZW51IGxpIGkge1xcclxcbiAgcGFkZGluZzogOHB4O1xcclxcbn1cXHJcXG5cXHJcXG4jc2F2ZSBpbnB1dCB7XFxyXFxuICBoZWlnaHQ6IDIwcHg7XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgbWFyZ2luLXRvcDogNyU7XFxyXFxufVxcclxcblxcclxcbiNjbGVhciB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxufVxcclxcblxcclxcbiNjbGVhciBidXR0b24ge1xcclxcbiAgY3Vyc29yOiBwb2ludGVyO1xcclxcbiAgd2lkdGg6IDQwMHB4O1xcclxcbiAgaGVpZ2h0OiA1NXB4O1xcclxcbiAgYm9yZGVyOiAxcHg7XFxyXFxuICBmb250LXNpemU6IDE2cHg7XFxyXFxuICBmb250LXdlaWdodDogMzAwO1xcclxcbiAgY29sb3I6IHJnYigzNiwgMzEsIDI2KTtcXHJcXG59XFxyXFxuXFxyXFxuaDIge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcXHJcXG4gIGZvbnQtc2l6ZTogMTVweDtcXHJcXG4gIG1hcmdpbjogMTFweCAwIDA7XFxyXFxuICBjb2xvcjogcmdiKDUxLCA0OSwgNDkpO1xcclxcbn1cXHJcXG5cXHJcXG4jdG9Eb0NvbnRhaW5lciB7XFxyXFxuICAvKiBkaXNwbGF5OiBmbGV4OyAqL1xcclxcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gIGJveC1zaGFkb3c6IDRweCAxMXB4IDE2cHggcmdiKDIxNywgMjE2LCAyMTYpO1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogbGlnaHRncmF5O1xcclxcbn1cXHJcXG5cXHJcXG4jdG9Eb0NvbnRhaW5lciBwIHtcXHJcXG4gIGN1cnNvcjogcG9pbnRlcjtcXHJcXG4gIG1hcmdpbi10b3A6IDA7XFxyXFxufVxcclxcblxcclxcbnVsIHtcXHJcXG4gIHBhZGRpbmc6IDA7XFxyXFxufVxcclxcblxcclxcbi50b2RvLWlucHV0IHtcXHJcXG4gIG91dGxpbmU6IG5vbmU7XFxyXFxuICBib3JkZXI6IG5hdmFqb3doaXRlICFpbXBvcnRhbnQ7XFxyXFxuICBib3JkZXItYm90dG9tOiBub25lO1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XFxyXFxuICB3aWR0aDogOTAlO1xcclxcbiAgYXBwZWFyYW5jZTogbm9uZTtcXHJcXG4gIGZvbnQtc3R5bGU6IGl0YWxpYztcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxyXFxufVxcclxcblxcclxcbi51aWwtcmVmcmVzaGUge1xcclxcbiAgY3Vyc29yOiBwb2ludGVyO1xcclxcbiAgbGVmdDogLTUwcHg7XFxyXFxuICBoZWlnaHQ6IDIwcHg7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxufVxcclxcblxcclxcbi5saXN0IHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XFxyXFxufVxcclxcblwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZS5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBRUE7RUFDRSx3QkFBd0I7RUFDeEIsZ0JBQWdCO0VBQ2hCLHNCQUFzQjtFQUN0QixrQ0FBa0M7QUFDcEM7O0FBRUE7RUFDRSxZQUFZO0VBQ1osb0JBQW9CO0FBQ3RCOztBQUVBO0VBQ0Usc0JBQXNCO0FBQ3hCOztBQUVBO0VBQ0UsYUFBYTtFQUNiLDJCQUEyQjtFQUMzQixtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSw2QkFBNkI7QUFDL0I7O0FBRUE7RUFDRSxnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSxnQkFBZ0I7RUFDaEIsa0JBQWtCO0VBQ2xCLHVCQUF1QjtFQUN2QixXQUFXO0FBQ2I7O0FBRUE7RUFDRSxZQUFZO0VBQ1osZUFBZTtBQUNqQjs7QUFFQTtFQUNFLHNCQUFzQjtFQUN0QixlQUFlO0VBQ2Ysc0JBQXNCO0FBQ3hCOztBQUVBO0VBQ0UsWUFBWTtFQUNaLFlBQVk7RUFDWiw2QkFBNkI7QUFDL0I7O0FBRUE7RUFDRSxZQUFZO0FBQ2Q7O0FBRUE7RUFDRSxZQUFZO0VBQ1osWUFBWTtFQUNaLFlBQVk7RUFDWixlQUFlO0FBQ2pCOztBQUVBO0VBQ0UsU0FBUztFQUNULFVBQVU7RUFDVixhQUFhO0FBQ2Y7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0UsOEJBQThCO0VBQzlCLFdBQVc7QUFDYjs7QUFFQTtFQUNFLGVBQWU7RUFDZixrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxTQUFTO0VBQ1Qsa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0UsYUFBYTtFQUNiLDhCQUE4QjtFQUM5QixVQUFVO0FBQ1o7O0FBRUE7RUFDRSxhQUFhO0VBQ2Isa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0UsV0FBVztFQUNYLGVBQWU7RUFDZixXQUFXO0VBQ1gsVUFBVTtFQUNWLFVBQVU7RUFDVixrQkFBa0I7RUFDbEIsY0FBYztFQUNkLHNDQUFzQztFQUN0QyxtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxtQkFBbUI7RUFDbkIsa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0UsV0FBVztBQUNiOztBQUVBO0VBQ0UsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLFlBQVk7RUFDWixlQUFlO0VBQ2YsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0UsaUJBQWlCO0FBQ25COztBQUVBO0VBQ0UsWUFBWTtBQUNkOztBQUVBO0VBQ0UsWUFBWTtFQUNaLG1CQUFtQjtFQUNuQixjQUFjO0FBQ2hCOztBQUVBO0VBQ0UsYUFBYTtFQUNiLHVCQUF1QjtBQUN6Qjs7QUFFQTtFQUNFLGVBQWU7RUFDZixZQUFZO0VBQ1osWUFBWTtFQUNaLFdBQVc7RUFDWCxlQUFlO0VBQ2YsZ0JBQWdCO0VBQ2hCLHNCQUFzQjtBQUN4Qjs7QUFFQTtFQUNFLGFBQWE7RUFDYiwyQkFBMkI7RUFDM0IsZUFBZTtFQUNmLGdCQUFnQjtFQUNoQixzQkFBc0I7QUFDeEI7O0FBRUE7RUFDRSxtQkFBbUI7RUFDbkIsdUJBQXVCO0VBQ3ZCLG1CQUFtQjtFQUNuQixzQkFBc0I7RUFDdEIsNENBQTRDO0VBQzVDLDJCQUEyQjtBQUM3Qjs7QUFFQTtFQUNFLGVBQWU7RUFDZixhQUFhO0FBQ2Y7O0FBRUE7RUFDRSxVQUFVO0FBQ1o7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsOEJBQThCO0VBQzlCLG1CQUFtQjtFQUNuQiw2QkFBNkI7RUFDN0IsVUFBVTtFQUNWLGdCQUFnQjtFQUNoQixrQkFBa0I7RUFDbEIsYUFBYTtFQUNiLDhCQUE4QjtBQUNoQzs7QUFFQTtFQUNFLGVBQWU7RUFDZixXQUFXO0VBQ1gsWUFBWTtFQUNaLDZCQUE2QjtFQUM3QixtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsMkJBQTJCO0FBQzdCXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIkBpbXBvcnQgdXJsKFxcXCJodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PVBvcHBpbnM6d2dodEA0MDA7NTAwOzYwMDs3MDAmZGlzcGxheT1zd2FwXFxcIik7XFxyXFxuXFxyXFxuYm9keSB7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBiaXNxdWU7XFxyXFxuICBvdmVyZmxvdzogaGlkZGVuO1xcclxcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXHJcXG4gIGZvbnQtZmFtaWx5OiBcXFwiUG9wcGluc1xcXCIsIHNhbnMtc2VyaWY7XFxyXFxufVxcclxcblxcclxcbi5jbGVhci5hY3RpdmUge1xcclxcbiAgb3BhY2l0eTogMC45O1xcclxcbiAgcG9pbnRlci1ldmVudHM6IGF1dG87XFxyXFxufVxcclxcblxcclxcbi5jbGVhcjphY3RpdmUge1xcclxcbiAgdHJhbnNmb3JtOiBzY2FsZSgwLjkzKTtcXHJcXG59XFxyXFxuXFxyXFxubGFiZWwge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxufVxcclxcblxcclxcbmlucHV0IHAuY2hlY2tib3gge1xcclxcbiAgdGV4dC1kZWNvcmF0aW9uOiBsaW5lLXRocm91Z2g7XFxyXFxufVxcclxcblxcclxcbmxpIHtcXHJcXG4gIGxpc3Qtc3R5bGU6IG5vbmU7XFxyXFxufVxcclxcblxcclxcbi53cmFwcGVyIHtcXHJcXG4gIG1heC13aWR0aDogNDAwcHg7XFxyXFxuICBtYXJnaW46IDEzMHB4IGF1dG87XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXHJcXG4gIGJvcmRlcjogN3B4O1xcclxcbn1cXHJcXG5cXHJcXG4udG9kby1oZWRlciB7XFxyXFxuICB3aWR0aDogNDAwcHg7XFxyXFxuICBtYXJnaW4tbGVmdDogNyU7XFxyXFxufVxcclxcblxcclxcbmgxIHtcXHJcXG4gIHBhZGRpbmc6IDFyZW0gMCAwIDFyZW07XFxyXFxuICBmb250LXNpemU6IDE3cHg7XFxyXFxuICBjb2xvcjogcmdiKDQyLCAzNywgMzcpO1xcclxcbn1cXHJcXG5cXHJcXG5pbnB1dCB7XFxyXFxuICBib3JkZXI6IG5vbmU7XFxyXFxuICBwYWRkaW5nOiA1cHg7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcXHJcXG59XFxyXFxuXFxyXFxubGFiZWwgaW5wdXQge1xcclxcbiAgbWFyZ2luOiAxcmVtO1xcclxcbn1cXHJcXG5cXHJcXG4jdG9kbyB7XFxyXFxuICBoZWlnaHQ6IDMwcHg7XFxyXFxuICB3aWR0aDogMjFyZW07XFxyXFxuICBtYXJnaW46IGF1dG87XFxyXFxuICBtYXJnaW4tbGVmdDogNiU7XFxyXFxufVxcclxcblxcclxcbi50YXNrLWxpc3Qge1xcclxcbiAgbWFyZ2luOiAwO1xcclxcbiAgcGFkZGluZzogMDtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxufVxcclxcblxcclxcbi50YXNrIGxhYmVsIHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbn1cXHJcXG5cXHJcXG5ociB7XFxyXFxuICBiYWNrZ3JvdW5kOiByZ2IoMjUyLCAyNTEsIDI1MSk7XFxyXFxuICB3aWR0aDogMTAwJTtcXHJcXG59XFxyXFxuXFxyXFxuLnRhc2sgLm1lbnUge1xcclxcbiAgY3Vyc29yOiBwb2ludGVyO1xcclxcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcclxcbn1cXHJcXG5cXHJcXG5wIHtcXHJcXG4gIG1hcmdpbjogMDtcXHJcXG4gIHBhZGRpbmctbGVmdDogMTVweDtcXHJcXG59XFxyXFxuXFxyXFxuLnRhc2stbWVudSB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcclxcbiAgbWFyZ2luOiA1JTtcXHJcXG59XFxyXFxuXFxyXFxuYXJ0aWNsZSB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcclxcbn1cXHJcXG5cXHJcXG4ubWVudWxpc3Qge1xcclxcbiAgd2lkdGg6IDUwcHg7XFxyXFxuICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxuICBsZWZ0OiAtNDBweDtcXHJcXG4gIHRvcDogLTI5cHg7XFxyXFxuICB6LWluZGV4OiAyO1xcclxcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xcclxcbiAgcGFkZGluZzogNXB4IDA7XFxyXFxuICBib3gtc2hhZG93OiAwIDAgNnB4IHJnYigwLCAwLCAwLCAwLjE1KTtcXHJcXG4gIHRyYW5zZm9ybTogc2NhbGUoMCk7XFxyXFxufVxcclxcblxcclxcbi51aWwtZWxsaXBzaXMtdjpob3ZlciAubWVudWxpc3Qge1xcclxcbiAgdHJhbnNmb3JtOiBzY2FsZSgxKTtcXHJcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXHJcXG59XFxyXFxuXFxyXFxuYnV0dG9uIHtcXHJcXG4gIG1hcmdpbjogMTAlO1xcclxcbn1cXHJcXG5cXHJcXG4ubWVudWxpc3QgYnV0dG9uIHtcXHJcXG4gIGN1cnNvcjogcG9pbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuLnRhc2stbWVudSBsaSB7XFxyXFxuICBoZWlnaHQ6IDI1cHg7XFxyXFxuICBmb250LXNpemU6IDE2cHg7XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbn1cXHJcXG5cXHJcXG4udWlsLWVsbGlwc2lzLXYge1xcclxcbiAgbWFyZ2luLWxlZnQ6IDkwcHg7XFxyXFxufVxcclxcblxcclxcbi50YXNrLW1lbnUgbGkgaSB7XFxyXFxuICBwYWRkaW5nOiA4cHg7XFxyXFxufVxcclxcblxcclxcbiNzYXZlIGlucHV0IHtcXHJcXG4gIGhlaWdodDogMjBweDtcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICBtYXJnaW4tdG9wOiA3JTtcXHJcXG59XFxyXFxuXFxyXFxuI2NsZWFyIHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuI2NsZWFyIGJ1dHRvbiB7XFxyXFxuICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxuICB3aWR0aDogNDAwcHg7XFxyXFxuICBoZWlnaHQ6IDU1cHg7XFxyXFxuICBib3JkZXI6IDFweDtcXHJcXG4gIGZvbnQtc2l6ZTogMTZweDtcXHJcXG4gIGZvbnQtd2VpZ2h0OiAzMDA7XFxyXFxuICBjb2xvcjogcmdiKDM2LCAzMSwgMjYpO1xcclxcbn1cXHJcXG5cXHJcXG5oMiB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xcclxcbiAgZm9udC1zaXplOiAxNXB4O1xcclxcbiAgbWFyZ2luOiAxMXB4IDAgMDtcXHJcXG4gIGNvbG9yOiByZ2IoNTEsIDQ5LCA0OSk7XFxyXFxufVxcclxcblxcclxcbiN0b0RvQ29udGFpbmVyIHtcXHJcXG4gIC8qIGRpc3BsYXk6IGZsZXg7ICovXFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgYm94LXNoYWRvdzogNHB4IDExcHggMTZweCByZ2IoMjE3LCAyMTYsIDIxNik7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBsaWdodGdyYXk7XFxyXFxufVxcclxcblxcclxcbiN0b0RvQ29udGFpbmVyIHAge1xcclxcbiAgY3Vyc29yOiBwb2ludGVyO1xcclxcbiAgbWFyZ2luLXRvcDogMDtcXHJcXG59XFxyXFxuXFxyXFxudWwge1xcclxcbiAgcGFkZGluZzogMDtcXHJcXG59XFxyXFxuXFxyXFxuLnRvZG8taW5wdXQge1xcclxcbiAgb3V0bGluZTogbm9uZTtcXHJcXG4gIGJvcmRlcjogbmF2YWpvd2hpdGUgIWltcG9ydGFudDtcXHJcXG4gIGJvcmRlci1ib3R0b206IG5vbmU7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcXHJcXG4gIHdpZHRoOiA5MCU7XFxyXFxuICBhcHBlYXJhbmNlOiBub25lO1xcclxcbiAgZm9udC1zdHlsZTogaXRhbGljO1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXHJcXG59XFxyXFxuXFxyXFxuLnVpbC1yZWZyZXNoZSB7XFxyXFxuICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxuICBsZWZ0OiAtNTBweDtcXHJcXG4gIGhlaWdodDogMjBweDtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuLmxpc3Qge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcXHJcXG59XFxyXFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdO1xuXG4gIC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9O1xuXG4gIC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG4gIHJldHVybiByZXN1bHQ7XG59XG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gdXBkYXRlcjtcbn1cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTtcblxuICAgIC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuICBjc3MgKz0gb2JqLmNzcztcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfVxuXG4gIC8vIEZvciBvbGQgSUVcbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgaWYgKHR5cGVvZiBkb2N1bWVudCA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHJldHVybiB7XG4gICAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZSgpIHt9LFxuICAgICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7fVxuICAgIH07XG4gIH1cbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsImltcG9ydCAnLi9zdHlsZS5jc3MnO1xyXG5pbXBvcnQgY2xlYXJDb21wbGV0ZWQgZnJvbSAnLi9tb2R1bGUvY2xlYXJBbGwuanMnO1xyXG5cclxubGV0IGFkZEJ1dHRvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdhZGQnKTtcclxubGV0IGlucHV0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3RvZG8nKTtcclxubGV0IGxpc3RDb250YWluZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndGFzay1saXN0Jyk7XHJcbmxldCBjbGVhckFsbCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjbGVhckFsbCcpO1xyXG5sZXQgbmV3VG9kbyA9ICcnO1xyXG5sZXQgdG9Eb0xpc3QgPSBbXHJcbiAge1xyXG4gICAgZGVzY3JpcHRpb246ICdXYXNoIENhcicsXHJcbiAgICBjb21wbGV0ZWQ6IHRydWUsXHJcbiAgICBpbmRleDogMCxcclxuICB9LFxyXG4gIHtcclxuICAgIGRlc2NyaXB0aW9uOiAnU2VydmljZSBDYXInLFxyXG4gICAgY29tcGxldGVkOiB0cnVlLFxyXG4gICAgaW5kZXg6IDEsXHJcbiAgfSxcclxuICB7XHJcbiAgICBkZXNjcmlwdGlvbjogJ0ZpbmlzaCBUbyBkbyBMaXN0JyxcclxuICAgIGNvbXBsZXRlZDogdHJ1ZSxcclxuICAgIGluZGV4OiAyLFxyXG4gIH0sXHJcbl07XHJcblxyXG5jb25zdCBoYW5kbGVDaGVja2JveCA9IChlKSA9PiB7XHJcbiAgY29uc3QgaW5kZXggPSBOdW1iZXIoZS50YXJnZXQucGFyZW50Tm9kZS5nZXRBdHRyaWJ1dGUoJ2lkJykpO1xyXG4gIHRvRG9MaXN0W2luZGV4IC0gMV0uY29tcGxldGVkID0gIXRvRG9MaXN0W2luZGV4IC0gMV0uY29tcGxldGVkO1xyXG4gIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCd0YXNrTGlzdCcsIEpTT04uc3RyaW5naWZ5KHRvRG9MaXN0KSk7XHJcbn07XHJcbmNvbnN0IGRlbGV0ZVRhc2sgPSAoZSkgPT4ge1xyXG4gIGNvbnN0IHRhc2sgPSBlLnRhcmdldC5wYXJlbnROb2RlLnBhcmVudE5vZGUucGFyZW50Tm9kZTtcclxuICBjb25zdCBsaSA9IHRhc2sucXVlcnlTZWxlY3RvcignbGknKTtcclxuICBjb25zdCB0YXNrTGlzdCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd0YXNrLWxpc3QnKTtcclxuICB0YXNrTGlzdC5yZW1vdmVDaGlsZCh0YXNrKTtcclxuICB0b0RvTGlzdC5zcGxpY2UoTnVtYmVyKGxpLmdldEF0dHJpYnV0ZSgnaWQnKSAtIDEpLCAxKTtcclxuICB0b0RvTGlzdC5mb3JFYWNoKCh0YXNrLCBpbmRleCkgPT4ge1xyXG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQodGFzay5pbmRleCkuc2V0QXR0cmlidXRlKCdpZCcsIGluZGV4ICsgMSk7XHJcbiAgICB0YXNrLmluZGV4ID0gaW5kZXggKyAxO1xyXG4gIH0pO1xyXG4gIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCd0YXNrTGlzdCcsIEpTT04uc3RyaW5naWZ5KHRvRG9MaXN0KSk7XHJcbn07XHJcblxyXG5jb25zdCBzYXZlRWRpdFRhc2sgPSAoZSkgPT4ge1xyXG4gIGNvbnN0IGxpID0gZS50YXJnZXQucGFyZW50Tm9kZS5wYXJlbnROb2RlO1xyXG4gIGNvbnN0IHRhcmdldCA9IGxpLnF1ZXJ5U2VsZWN0b3IoJyNzYXZlJyk7XHJcbiAgY29uc3QgaW5wdXQgPSBsaS5xdWVyeVNlbGVjdG9yKCdpbnB1dFt0eXBlPVwidGV4dFwiXScpO1xyXG4gIGNvbnN0IHRleHQgPSBpbnB1dC52YWx1ZTtcclxuICBjb25zdCBQID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xyXG4gIFAudGV4dENvbnRlbnQgPSB0ZXh0O1xyXG4gIGxpLnJlcGxhY2VDaGlsZChQLCB0YXJnZXQpO1xyXG4gIHRvRG9MaXN0LmZpbHRlcigodGFzaykgPT4gdGFzay5pbmRleCA9PT0gTnVtYmVyKGxpLmlkKSlbMF0ubmFtZSA9IHRleHQ7XHJcbiAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ3Rhc2tMaXN0JywgSlNPTi5zdHJpbmdpZnkodG9Eb0xpc3QpKTtcclxufTtcclxuXHJcbmNvbnN0IGVkaXRUYXNrID0gKGUpID0+IHtcclxuICBjb25zdCB0YXNrID0gZS50YXJnZXQucGFyZW50Tm9kZS5wYXJlbnROb2RlLnBhcmVudE5vZGU7XHJcbiAgY29uc3QgcCA9IHRhc2sucXVlcnlTZWxlY3RvcigncCcpO1xyXG4gIGNvbnN0IGxpID0gdGFzay5xdWVyeVNlbGVjdG9yKCdsaScpO1xyXG4gIGNvbnN0IHRleHQgPSBwLnRleHRDb250ZW50O1xyXG4gIGNvbnN0IGlucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcclxuICBpbnB1dC5zZXRBdHRyaWJ1dGUoJ3R5cGUnLCAndGV4dCcpO1xyXG4gIGlucHV0LnZhbHVlID0gdGV4dDtcclxuICBpbnB1dC5hZGRFdmVudExpc3RlbmVyKCdrZXlwcmVzcycsIChlKSA9PiB7XHJcbiAgICBpZiAoZS5rZXkgPT09ICdFbnRlcicpIHNhdmVFZGl0VGFzayhlKTtcclxuICB9KTtcclxuICBjb25zdCBzYXZlQnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XHJcbiAgc2F2ZUJ1dHRvbi50ZXh0Q29udGVudCA9ICdTYXZlJztcclxuICBzYXZlQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgc2F2ZUVkaXRUYXNrKTtcclxuICBjb25zdCBkaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICBkaXYuc2V0QXR0cmlidXRlKCdpZCcsICdzYXZlJyk7XHJcbiAgZGl2LnN0eWxlLmRpc3BsYXkgPSAnZmxleCc7XHJcbiAgZGl2LmFwcGVuZENoaWxkKGlucHV0KTtcclxuICBkaXYuYXBwZW5kQ2hpbGQoc2F2ZUJ1dHRvbik7XHJcbiAgbGkucmVwbGFjZUNoaWxkKGRpdiwgcCk7XHJcbiAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ3Rhc2tMaXN0JywgSlNPTi5zdHJpbmdpZnkodG9Eb0xpc3QpKTtcclxufTtcclxuXHJcbmNvbnN0IGhhbmRsZUFkZFRhc2sgPSAobmFtZSA9ICcnLCBjb21wbGV0ZWQgPSBmYWxzZSwgbmV3VGFzayA9IHRydWUpID0+IHtcclxuICBpZiAoIW5hbWUpIHJldHVybjtcclxuICBjb25zdCBpbmRleCA9IHRvRG9MaXN0Lmxlbmd0aCArIDE7XHJcbiAgdG9Eb0xpc3QucHVzaCh7IG5hbWUsIGNvbXBsZXRlZCwgaW5kZXggfSk7XHJcbiAgY29uc3QgZGVsZXRlQnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XHJcbiAgZGVsZXRlQnV0dG9uLnNldEF0dHJpYnV0ZSgnY2xhc3MnLCAndWlsIHVpbC10cmFzaCcpO1xyXG4gIGRlbGV0ZUJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGRlbGV0ZVRhc2spO1xyXG4gIGNvbnN0IGVkaXRCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcclxuICBlZGl0QnV0dG9uLnNldEF0dHJpYnV0ZSgnY2xhc3MnLCAndWlsIHVpbC1wZW4nKTtcclxuICBlZGl0QnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZWRpdFRhc2spO1xyXG4gIGNvbnN0IG1lbnUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsaScpO1xyXG4gIG1lbnUuc2V0QXR0cmlidXRlKCdjbGFzcycsICd1aWwgdWlsLWVsbGlwc2lzLXYnKTtcclxuICBjb25zdCB0YXNrbWVudSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2FydGljbGUnKTtcclxuICB0YXNrbWVudS5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgJ21lbnVsaXN0Jyk7XHJcbiAgY29uc3QgY2hlY2tib3ggPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xyXG4gIGNoZWNrYm94LnNldEF0dHJpYnV0ZSgndHlwZScsICdjaGVja2JveCcpO1xyXG4gIGNoZWNrYm94LnNldEF0dHJpYnV0ZSgnY2xhc3MnLCAnY2hlY2tib3gnKTtcclxuICBjaGVja2JveC5jaGVja2VkID0gY29tcGxldGVkO1xyXG4gIGNoZWNrYm94LmFkZEV2ZW50TGlzdGVuZXIoJ2NoYW5nZScsIGhhbmRsZUNoZWNrYm94KTtcclxuICBjb25zdCB0YXNrID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgdGFzay5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgJ3Rhc2stbWVudScpO1xyXG4gIGNvbnN0IGxpID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGknKTtcclxuICBsaS5zZXRBdHRyaWJ1dGUoJ2lkJywgdG9Eb0xpc3QubGVuZ3RoKTtcclxuICBsaS5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgJ2xpc3QnKTtcclxuICBjb25zdCBob3Jpem9udGFsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaHInKTtcclxuICBjb25zdCBwID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xyXG4gIHAudGV4dENvbnRlbnQgPSBuYW1lO1xyXG5cclxuICBsaS5hcHBlbmRDaGlsZChjaGVja2JveCk7XHJcbiAgbGkuYXBwZW5kQ2hpbGQocCk7XHJcbiAgdGFzay5hcHBlbmRDaGlsZChsaSk7XHJcbiAgdGFza21lbnUuYXBwZW5kQ2hpbGQoZGVsZXRlQnV0dG9uKTtcclxuICB0YXNrbWVudS5hcHBlbmRDaGlsZChlZGl0QnV0dG9uKTtcclxuICB0YXNrLmFwcGVuZENoaWxkKHRhc2ttZW51KTtcclxuICBtZW51LmFwcGVuZENoaWxkKHRhc2ttZW51KTtcclxuICB0YXNrLmFwcGVuZENoaWxkKG1lbnUpO1xyXG4gIGxpc3RDb250YWluZXIuYXBwZW5kQ2hpbGQoaG9yaXpvbnRhbCk7XHJcbiAgbGlzdENvbnRhaW5lci5hcHBlbmRDaGlsZCh0YXNrKTtcclxuICBpbnB1dC52YWx1ZSA9ICcnO1xyXG4gIG5ld1RvZG8gPSAnJztcclxuICBpZiAobmV3VGFzaykge1xyXG4gICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ3Rhc2tMaXN0JywgSlNPTi5zdHJpbmdpZnkodG9Eb0xpc3QpKTtcclxuICB9XHJcbn07XHJcblxyXG5mdW5jdGlvbiBkb20oKSB7XHJcbiAgYWRkQnV0dG9uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2FkZCcpO1xyXG4gIGlucHV0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3RvZG8nKTtcclxuICBsaXN0Q29udGFpbmVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3Rhc2stbGlzdCcpO1xyXG4gIGNsZWFyQWxsID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NsZWFyQWxsJyk7XHJcbn1cclxuXHJcbmRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ0RPTUNvbnRlbnRMb2FkZWQnLCAoKSA9PiB7XHJcbiAgYWRkQnV0dG9uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2FkZCcpO1xyXG4gIGlucHV0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3RvZG8nKTtcclxuICBsaXN0Q29udGFpbmVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3Rhc2stbGlzdCcpO1xyXG4gIGNsZWFyQWxsID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NsZWFyQWxsJyk7XHJcblxyXG4gIGlucHV0LmFkZEV2ZW50TGlzdGVuZXIoJ2lucHV0JywgKGUpID0+IHtcclxuICAgIG5ld1RvZG8gPSBlLnRhcmdldC52YWx1ZTtcclxuICB9KTtcclxuXHJcbiAgYWRkQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4gaGFuZGxlQWRkVGFzayhuZXdUb2RvKSk7XHJcblxyXG4gIGlucHV0LmFkZEV2ZW50TGlzdGVuZXIoJ2tleXByZXNzJywgKGUpID0+IHtcclxuICAgIGlmIChlLmtleSA9PT0gJ0VudGVyJykgaGFuZGxlQWRkVGFzayhuZXdUb2RvKTtcclxuICB9KTtcclxuXHJcbiAgY2xlYXJBbGwuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XHJcbiAgICBjb25zdCBuZXdMaXN0cyA9IGNsZWFyQ29tcGxldGVkKHRvRG9MaXN0KTtcclxuICAgIHRvRG9MaXN0ID0gW107XHJcbiAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgndGFza0xpc3QnLCBKU09OLnN0cmluZ2lmeShuZXdMaXN0cykpO1xyXG4gICAgbGlzdENvbnRhaW5lci5pbm5lckhUTUwgPSAnJztcclxuICAgIG5ld0xpc3RzLmZvckVhY2goKHRhc2spID0+IGhhbmRsZUFkZFRhc2sodGFzay5uYW1lLCB0YXNrLmNvbXBsZXRlZCwgZmFsc2UpKTtcclxuICB9KTtcclxuICBjb25zdCBpbml0aWFsTGlzdCA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKCd0YXNrTGlzdCcpXHJcbiAgICA/IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3Rhc2tMaXN0JykpXHJcbiAgICA6IFtcclxuICAgICAge1xyXG4gICAgICAgIGRlc2NyaXB0aW9uOiAnV2FzaCBDYXInLFxyXG4gICAgICAgIGNvbXBsZXRlZDogdHJ1ZSxcclxuICAgICAgICBpbmRleDogMCxcclxuICAgICAgfSxcclxuICAgICAge1xyXG4gICAgICAgIGRlc2NyaXB0aW9uOiAnU2VydmljZSBDYXInLFxyXG4gICAgICAgIGNvbXBsZXRlZDogdHJ1ZSxcclxuICAgICAgICBpbmRleDogMSxcclxuICAgICAgfSxcclxuICAgICAge1xyXG4gICAgICAgIGRlc2NyaXB0aW9uOiAnRmluaXNoIFRvIGRvIExpc3QnLFxyXG4gICAgICAgIGNvbXBsZXRlZDogdHJ1ZSxcclxuICAgICAgICBpbmRleDogMixcclxuICAgICAgfSxcclxuICAgIF07XHJcbiAgaW5pdGlhbExpc3QuZm9yRWFjaCgodGFzaykgPT4gaGFuZGxlQWRkVGFzayh0YXNrLmRlc2NyaXB0aW9uLCB0YXNrLmNvbXBsZXRlZCwgZmFsc2UpKTtcclxufSk7XHJcblxyXG5tb2R1bGUuZXhwb3J0cyA9IHtcclxuICBkZWxldGVUYXNrLFxyXG4gIGhhbmRsZUFkZFRhc2ssXHJcbiAgY2xlYXJDb21wbGV0ZWQsXHJcbiAgZG9tLFxyXG59O1xyXG4iLCJleHBvcnQgZGVmYXVsdCAodGFza3MpID0+IHRhc2tzLmZpbHRlcigodGFzaykgPT4gIXRhc2suY29tcGxldGVkKTsiLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHRsb2FkZWQ6IGZhbHNlLFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcblx0bW9kdWxlLmxvYWRlZCA9IHRydWU7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18uaG1kID0gKG1vZHVsZSkgPT4ge1xuXHRtb2R1bGUgPSBPYmplY3QuY3JlYXRlKG1vZHVsZSk7XG5cdGlmICghbW9kdWxlLmNoaWxkcmVuKSBtb2R1bGUuY2hpbGRyZW4gPSBbXTtcblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG1vZHVsZSwgJ2V4cG9ydHMnLCB7XG5cdFx0ZW51bWVyYWJsZTogdHJ1ZSxcblx0XHRzZXQ6ICgpID0+IHtcblx0XHRcdHRocm93IG5ldyBFcnJvcignRVMgTW9kdWxlcyBtYXkgbm90IGFzc2lnbiBtb2R1bGUuZXhwb3J0cyBvciBleHBvcnRzLiosIFVzZSBFU00gZXhwb3J0IHN5bnRheCwgaW5zdGVhZDogJyArIG1vZHVsZS5pZCk7XG5cdFx0fVxuXHR9KTtcblx0cmV0dXJuIG1vZHVsZTtcbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubmMgPSB1bmRlZmluZWQ7IiwiIiwiLy8gc3RhcnR1cFxuLy8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4vLyBUaGlzIGVudHJ5IG1vZHVsZSBpcyByZWZlcmVuY2VkIGJ5IG90aGVyIG1vZHVsZXMgc28gaXQgY2FuJ3QgYmUgaW5saW5lZFxudmFyIF9fd2VicGFja19leHBvcnRzX18gPSBfX3dlYnBhY2tfcmVxdWlyZV9fKFwiLi9zcmMvaW5kZXguanNcIik7XG4iLCIiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=