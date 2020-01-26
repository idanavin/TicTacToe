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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/main.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, "* {\r\n    margin: 0;\r\n    padding: 0;\r\n    box-sizing: border-box;\r\n}\r\n\r\nbody {\r\n    width: 100%;\r\n    height: 100vh;\r\n}\r\n\r\nheader {\r\n    display: flex;\r\n    height: 10%;\r\n    width: 100%;\r\n    flex-direction: column;\r\n    align-items: center;\r\n}\r\n\r\nmain {\r\n    display: flex;\r\n    align-items: center;\r\n    justify-content: space-evenly;\r\n    height: 90%;\r\n}\r\n\r\nspan {\r\n    text-align: center;\r\n}\r\ncanvas {\r\n    width: 100%;\r\n    height: 100%;\r\n    max-width: 600px;\r\n    max-height: 600px;\r\n}", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
// eslint-disable-next-line func-names
module.exports = function (useSourceMap) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = cssWithMappingToString(item, useSourceMap);

      if (item[2]) {
        return "@media ".concat(item[2], " {").concat(content, "}");
      }

      return content;
    }).join('');
  }; // import a list of modules into the list
  // eslint-disable-next-line func-names


  list.i = function (modules, mediaQuery, dedupe) {
    if (typeof modules === 'string') {
      // eslint-disable-next-line no-param-reassign
      modules = [[null, modules, '']];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var i = 0; i < this.length; i++) {
        // eslint-disable-next-line prefer-destructuring
        var id = this[i][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _i = 0; _i < modules.length; _i++) {
      var item = [].concat(modules[_i]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        // eslint-disable-next-line no-continue
        continue;
      }

      if (mediaQuery) {
        if (!item[2]) {
          item[2] = mediaQuery;
        } else {
          item[2] = "".concat(mediaQuery, " and ").concat(item[2]);
        }
      }

      list.push(item);
    }
  };

  return list;
};

function cssWithMappingToString(item, useSourceMap) {
  var content = item[1] || ''; // eslint-disable-next-line prefer-destructuring

  var cssMapping = item[3];

  if (!cssMapping) {
    return content;
  }

  if (useSourceMap && typeof btoa === 'function') {
    var sourceMapping = toComment(cssMapping);
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || '').concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
  }

  return [content].join('\n');
} // Adapted from convert-source-map (MIT)


function toComment(sourceMap) {
  // eslint-disable-next-line no-undef
  var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));
  var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
  return "/*# ".concat(data, " */");
}

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var isOldIE = function isOldIE() {
  var memo;
  return function memorize() {
    if (typeof memo === 'undefined') {
      // Test for IE <= 9 as proposed by Browserhacks
      // @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
      // Tests for existence of standard globals is to allow style-loader
      // to operate correctly into non-standard environments
      // @see https://github.com/webpack-contrib/style-loader/issues/177
      memo = Boolean(window && document && document.all && !window.atob);
    }

    return memo;
  };
}();

var getTarget = function getTarget() {
  var memo = {};
  return function memorize(target) {
    if (typeof memo[target] === 'undefined') {
      var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

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
  };
}();

var stylesInDom = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDom.length; i++) {
    if (stylesInDom[i].identifier === identifier) {
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
    var index = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3]
    };

    if (index !== -1) {
      stylesInDom[index].references++;
      stylesInDom[index].updater(obj);
    } else {
      stylesInDom.push({
        identifier: identifier,
        updater: addStyle(obj, options),
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function insertStyleElement(options) {
  var style = document.createElement('style');
  var attributes = options.attributes || {};

  if (typeof attributes.nonce === 'undefined') {
    var nonce =  true ? __webpack_require__.nc : undefined;

    if (nonce) {
      attributes.nonce = nonce;
    }
  }

  Object.keys(attributes).forEach(function (key) {
    style.setAttribute(key, attributes[key]);
  });

  if (typeof options.insert === 'function') {
    options.insert(style);
  } else {
    var target = getTarget(options.insert || 'head');

    if (!target) {
      throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
    }

    target.appendChild(style);
  }

  return style;
}

function removeStyleElement(style) {
  // istanbul ignore if
  if (style.parentNode === null) {
    return false;
  }

  style.parentNode.removeChild(style);
}
/* istanbul ignore next  */


var replaceText = function replaceText() {
  var textStore = [];
  return function replace(index, replacement) {
    textStore[index] = replacement;
    return textStore.filter(Boolean).join('\n');
  };
}();

function applyToSingletonTag(style, index, remove, obj) {
  var css = remove ? '' : obj.media ? "@media ".concat(obj.media, " {").concat(obj.css, "}") : obj.css; // For old IE

  /* istanbul ignore if  */

  if (style.styleSheet) {
    style.styleSheet.cssText = replaceText(index, css);
  } else {
    var cssNode = document.createTextNode(css);
    var childNodes = style.childNodes;

    if (childNodes[index]) {
      style.removeChild(childNodes[index]);
    }

    if (childNodes.length) {
      style.insertBefore(cssNode, childNodes[index]);
    } else {
      style.appendChild(cssNode);
    }
  }
}

function applyToTag(style, options, obj) {
  var css = obj.css;
  var media = obj.media;
  var sourceMap = obj.sourceMap;

  if (media) {
    style.setAttribute('media', media);
  } else {
    style.removeAttribute('media');
  }

  if (sourceMap && btoa) {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  if (style.styleSheet) {
    style.styleSheet.cssText = css;
  } else {
    while (style.firstChild) {
      style.removeChild(style.firstChild);
    }

    style.appendChild(document.createTextNode(css));
  }
}

var singleton = null;
var singletonCounter = 0;

function addStyle(obj, options) {
  var style;
  var update;
  var remove;

  if (options.singleton) {
    var styleIndex = singletonCounter++;
    style = singleton || (singleton = insertStyleElement(options));
    update = applyToSingletonTag.bind(null, style, styleIndex, false);
    remove = applyToSingletonTag.bind(null, style, styleIndex, true);
  } else {
    style = insertStyleElement(options);
    update = applyToTag.bind(null, style, options);

    remove = function remove() {
      removeStyleElement(style);
    };
  }

  update(obj);
  return function updateStyle(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap) {
        return;
      }

      update(obj = newObj);
    } else {
      remove();
    }
  };
}

module.exports = function (list, options) {
  options = options || {}; // Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
  // tags it will allow on a page

  if (!options.singleton && typeof options.singleton !== 'boolean') {
    options.singleton = isOldIE();
  }

  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    if (Object.prototype.toString.call(newList) !== '[object Array]') {
      return;
    }

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDom[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDom[_index].references === 0) {
        stylesInDom[_index].updater();

        stylesInDom.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./src/Board.js":
/*!**********************!*\
  !*** ./src/Board.js ***!
  \**********************/
/*! exports provided: Board */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Board", function() { return Board; });
/* harmony import */ var _main__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./main */ "./src/main.js");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }


var Board =
/*#__PURE__*/
function () {
  function Board() {
    _classCallCheck(this, Board);

    this.colors = ['green', 'pink'];
    this.players = ['X', 'O'];
  }

  _createClass(Board, [{
    key: "getCanvas",
    value: function getCanvas() {
      this.canv = document.querySelector("canvas");
      this.ctx = this.canv.getContext('2d');
      this.canvasSize();
    }
  }, {
    key: "canvasSize",
    value: function canvasSize() {
      this.canv.width = this.canv.clientWidth;
      this.canv.height = this.canv.clientHeight;
      this.width = this.canv.width;
      this.height = this.canv.height;
      this.ygap = this.height * 0.1;
      this.w = this.width / 2;
      this.h = this.height / 2;
      this.setArrays();
    }
  }, {
    key: "setArrays",
    value: function setArrays() {
      this.moves = [];
      this.buttons = [];
      this.points = {
        X: 0,
        O: 0
      };
    }
  }, {
    key: "setListener",
    value: function setListener() {
      var _this = this;

      this.canv.addEventListener('click', function (e) {
        for (var b in _this.buttons) {
          _this.buttons[b].canvasClick(e);
        }
      });
    }
  }, {
    key: "init",
    value: function init() {
      this.boardArr = [];

      for (var i = 0; i < this.game.row; i++) {
        this.boardArr[i] = [];

        for (var j = 0; j < this.game.col; j++) {
          this.boardArr[i][j] = '';
        }
      }

      this.ctx.clearRect(0, 0, this.width, this.height);
      this.ctx.font = 'bold 3.5rem sans-serif';
      this.ctx.textAlign = 'center';
      this.ctx.textBaseline = 'middle';
    }
  }, {
    key: "getGame",
    value: function getGame(row, col) {
      this.game = {
        row: row,
        col: col
      };
      this.l = row * col;
      this.w = this.width / row;
      this.h = this.height / col;
    }
  }, {
    key: "checkEquals",
    value: function checkEquals(arr) {
      for (var i = 0; i < arr.length - 1; i++) {
        if (arr[i] !== arr[i + 1]) {
          return false;
        }
      }

      return true;
    }
  }, {
    key: "checkWin",
    value: function checkWin() {
      var winner = null;
      var winCondition = this.game.row === 3 ? 3 : 4;

      for (var i = 0; i < this.game.row; i++) {
        for (var j = 0; j < this.game.col; j++) {
          var toCheck = [[], [], [], []];

          for (var k = 0; k < winCondition; k++) {
            //Horizontal
            if (this.boardArr[i][j + k]) {
              toCheck[0].push(this.boardArr[i][j + k]);
            } //Vertical


            if (i >= winCondition - 1) {
              if (this.boardArr[i - k][j]) {
                toCheck[1].push(this.boardArr[i - k][j]);
              } //Diagonal right


              if (this.boardArr[i - k][j + k]) {
                toCheck[2].push(this.boardArr[i - k][j + k]);
              } //Diagonal left


              if (j >= winCondition - 1) {
                if (this.boardArr[i - k][j - k]) {
                  toCheck[3].push(this.boardArr[i - k][j - k]);
                }
              }
            }
          } //Call check equals


          for (var t = 0; t < toCheck.length; t++) {
            if (toCheck[t].length === winCondition) {
              if (this.checkEquals(toCheck[t])) {
                winner = this.boardArr[i][j];
              }
            }
          }
        }
      }

      if (this.moves.length > this.l && !winner) {
        winner = 'tie';
      }

      return winner;
    }
  }, {
    key: "endGame",
    value: function endGame(score) {
      if (score !== 'tie') {
        var prev = this.getPoints();
        this.setPoints(score, prev[score]);
      }
    }
  }, {
    key: "removeCells",
    value: function removeCells() {
      var _this2 = this;

      this.buttons = this.buttons.filter(function (v, i) {
        return _this2.buttons[i].c !== 'cell';
      });
    }
  }, {
    key: "createEndButton",
    value: function createEndButton(score) {
      var endText = '';

      if (score === 'tie') {
        endText = 'Its a tie';
      } else {
        endText = "".concat(score, " Wins!");
      }

      createEndGameButtons(endText);
    }
  }, {
    key: "buttonsClick",
    value: function buttonsClick(e) {
      for (var b in this.buttons) {
        this.buttons[b].canvasClick(e);
      }
    }
  }, {
    key: "getPoints",
    value: function getPoints() {
      var X = Number(localStorage.getItem('X'));
      var O = Number(localStorage.getItem('O'));
      return {
        X: X,
        O: O
      };
    }
  }, {
    key: "setPoints",
    value: function setPoints(winner, prevS) {
      var s = prevS + 1;
      localStorage.setItem(winner, s);
      this.points[winner] = s;
    }
  }, {
    key: "resetPoints",
    value: function resetPoints() {
      localStorage.clear();
      this.points = {
        X: 0,
        O: 0
      };
    }
  }]);

  return Board;
}();

/***/ }),

/***/ "./src/Button.js":
/*!***********************!*\
  !*** ./src/Button.js ***!
  \***********************/
/*! exports provided: Button */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Button", function() { return Button; });
/* harmony import */ var _Board__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Board */ "./src/Board.js");
/* harmony import */ var _main__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./main */ "./src/main.js");
/* harmony import */ var _buttons__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./buttons */ "./src/buttons.js");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

// import { ctx, board, buttons, newGame, loop } from './main';
// let main = require('./main.js')



var Button =
/*#__PURE__*/
function () {
  function Button(x, y, w, h, txt, id, c, opt) {
    _classCallCheck(this, Button);

    this.x = x;
    this.y = y;
    this.w = w;
    this.h = h;
    this.txt = txt;
    this.id = id;
    this.opacity = 1;
    this.center = {
      x: this.x - this.w / 2,
      y: this.y - this.h / 2
    };

    if (opt) {
      this.opt = opt;

      if (opt.animate) {
        this.animate(opt.animate); // this.opacity = opt.animate.op;
      }
    }

    if (c) {
      this.c = c;
    }

    this.colors = ['grey', 'white'];
  }

  _createClass(Button, [{
    key: "canvasClick",
    value: function canvasClick(e) {
      var mousex = e.offsetX;
      var mousey = e.offsetY;

      if (mousex > this.center.x && mousex < this.center.x + this.w) {
        if (mousey > this.center.y && mousey < this.center.y + this.h) {
          this.act();
        }
      }
    }
  }, {
    key: "animate",
    value: function animate(from) {
      var _this = this;

      var endVal = {
        x: this.x,
        y: this.y
      };
      this.x -= from.x;
      this.center.x -= from.x;
      this.y -= from.y;
      this.center.y -= from.y;
      this.opacity = from.op;

      for (var i = 0; i < 100; i++) {
        setTimeout(function () {
          if (_this.x !== endVal.x) {
            _this.x += from.x * 0.01;
            _this.center.x += from.x * 0.01;
          }

          if (from.y) {
            _this.y += from.y * 0.01;
            _this.center.y += from.y * 0.01;
          }

          if (_this.opacity !== 1) {
            _this.opacity += 0.01;
          }
        }, i * 5);
      }
    }
  }, {
    key: "act",
    value: function act() {
      //Play again button
      if (this.id === 'restart') {
        // buttons = buttons.filter((value, index) => {
        //     return buttons[index].c !== 'end';
        // });
        _main__WEBPACK_IMPORTED_MODULE_1__["board"].buttons = [];
        _main__WEBPACK_IMPORTED_MODULE_1__["board"].removeCells();
        Object(_main__WEBPACK_IMPORTED_MODULE_1__["newGame"])();
        Object(_main__WEBPACK_IMPORTED_MODULE_1__["loop"])();
      }

      if (this.id === 'tic') {
        _main__WEBPACK_IMPORTED_MODULE_1__["board"].getGame(3, 3);
        _main__WEBPACK_IMPORTED_MODULE_1__["board"].setArrays();
        Object(_main__WEBPACK_IMPORTED_MODULE_1__["newGame"])();
      }

      if (this.id === 'four') {
        _main__WEBPACK_IMPORTED_MODULE_1__["board"].getGame(7, 7);
        _main__WEBPACK_IMPORTED_MODULE_1__["board"].setArrays();
        Object(_main__WEBPACK_IMPORTED_MODULE_1__["newGame"])();
      }

      if (this.id === 'menu') {
        if (_main__WEBPACK_IMPORTED_MODULE_1__["board"].checkWin()) {
          Object(_main__WEBPACK_IMPORTED_MODULE_1__["loop"])();
        }

        Object(_main__WEBPACK_IMPORTED_MODULE_1__["resetBoardObj"])();
        _main__WEBPACK_IMPORTED_MODULE_1__["board"].getCanvas();
        _main__WEBPACK_IMPORTED_MODULE_1__["board"].setListener();
        Object(_buttons__WEBPACK_IMPORTED_MODULE_2__["createMenuButtons"])();
      }

      if (this.id === 'localStorageClear') {
        _main__WEBPACK_IMPORTED_MODULE_1__["board"].resetPoints();
      }

      if (this.id === 'cell') {
        var mousex = e.offsetX;
        var mousey = e.offsetY;

        if (!_main__WEBPACK_IMPORTED_MODULE_1__["board"].moves[Index].done) {
          _main__WEBPACK_IMPORTED_MODULE_1__["board"].moves[Index].getMouseIndex(mousex, mousey);
        }
      }
    }
  }, {
    key: "show",
    value: function show() {
      if (this.opt && this.opt.animate) {// this.animate(this.opt.animate);
      }

      _main__WEBPACK_IMPORTED_MODULE_1__["board"].ctx.translate(0, 0); // console.log(this.opacity);

      _main__WEBPACK_IMPORTED_MODULE_1__["board"].ctx.globalAlpha = this.opacity;
      _main__WEBPACK_IMPORTED_MODULE_1__["board"].ctx.textAlign = 'center';
      _main__WEBPACK_IMPORTED_MODULE_1__["board"].ctx.textBaseline = 'middle';
      _main__WEBPACK_IMPORTED_MODULE_1__["board"].ctx.font = this.opt && this.opt.font ? this.opt.font : 'bold 3.5rem sans-serif';
      _main__WEBPACK_IMPORTED_MODULE_1__["board"].ctx.fillStyle = this.opt && this.opt.bgc ? this.opt.bgc : this.colors[0];
      _main__WEBPACK_IMPORTED_MODULE_1__["board"].ctx.fillRect(this.center.x, this.center.y, this.w, this.h);
      _main__WEBPACK_IMPORTED_MODULE_1__["board"].ctx.fillStyle = this.opt && this.opt.color ? this.opt.color : this.colors[1];
      _main__WEBPACK_IMPORTED_MODULE_1__["board"].ctx.fillText(this.txt, this.x, this.y); // ctx.translate(0, 0)
    }
  }]);

  return Button;
}();

/***/ }),

/***/ "./src/Cell.js":
/*!*********************!*\
  !*** ./src/Cell.js ***!
  \*********************/
/*! exports provided: Cell */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Cell", function() { return Cell; });
/* harmony import */ var _Button__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Button */ "./src/Button.js");
/* harmony import */ var _main__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./main */ "./src/main.js");
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }



var Cell =
/*#__PURE__*/
function (_Button) {
  _inherits(Cell, _Button);

  function Cell(x, y, w, h, txt, id, c, opt, i, j) {
    var _this;

    _classCallCheck(this, Cell);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(Cell).call(this, x, y, w, h, txt, id, c, opt));
    _this.i = i;
    _this.j = j;
    return _this;
  }

  _createClass(Cell, [{
    key: "canvasClick",
    value: function canvasClick(e) {
      var mousex = e.offsetX;
      var mousey = e.offsetY;

      if (mousex > this.x && mousex < this.x + this.w) {
        if (mousey > this.y && mousey < this.y + this.h) {
          this.act();
        }
      }
    }
  }, {
    key: "act",
    value: function act() {
      var index = _main__WEBPACK_IMPORTED_MODULE_1__["board"].moves.length - 1;
      _main__WEBPACK_IMPORTED_MODULE_1__["board"].moves[index].play(this.i, this.j);
    }
  }, {
    key: "show",
    value: function show() {
      _main__WEBPACK_IMPORTED_MODULE_1__["board"].ctx.font = this.opt && this.opt.font ? this.opt.font : 'bold 3.5rem sans-serif';
      _main__WEBPACK_IMPORTED_MODULE_1__["board"].ctx.fillStyle = this.opt && this.opt.bgc ? this.opt.bgc : 'white';
      _main__WEBPACK_IMPORTED_MODULE_1__["board"].ctx.fillRect(this.x, this.y, this.w, this.h);
      _main__WEBPACK_IMPORTED_MODULE_1__["board"].ctx.strokeRect(this.x, this.y, this.w, this.h);
    }
  }]);

  return Cell;
}(_Button__WEBPACK_IMPORTED_MODULE_0__["Button"]);

/***/ }),

/***/ "./src/Move.js":
/*!*********************!*\
  !*** ./src/Move.js ***!
  \*********************/
/*! exports provided: Move */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Move", function() { return Move; });
/* harmony import */ var _main__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./main */ "./src/main.js");
/* harmony import */ var _minimax__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./minimax */ "./src/minimax.js");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }



var Move =
/*#__PURE__*/
function () {
  function Move(active) {
    _classCallCheck(this, Move);

    this.active = active;
    this.players = ['X', 'O'];
    this.colors = ['blue', 'red', 'green', 'pink'];
    this.done = false;
  }

  _createClass(Move, [{
    key: "play",
    value: function play(i, j) {
      if (_main__WEBPACK_IMPORTED_MODULE_0__["board"].game.row === 3) {
        if (!_main__WEBPACK_IMPORTED_MODULE_0__["board"].boardArr[j][i]) {
          this.i = i;
          this.j = j;
          _main__WEBPACK_IMPORTED_MODULE_0__["board"].boardArr[j][i] = this.players[this.active];
          this.done = true;
          this.nextTurn();
        }
      } else if (_main__WEBPACK_IMPORTED_MODULE_0__["board"].game.row === 7) {
        // console.log(board.boardArr);
        this.fourInARow(i);
      }
    }
  }, {
    key: "fourInARow",
    value: function fourInARow(i) {
      var max = _main__WEBPACK_IMPORTED_MODULE_0__["board"].boardArr[i].length - 1;

      for (var j = max; j >= 0; j--) {
        if (!_main__WEBPACK_IMPORTED_MODULE_0__["board"].boardArr[j][i]) {
          this.i = i;
          this.j = j;
          _main__WEBPACK_IMPORTED_MODULE_0__["board"].boardArr[j][i] = this.players[this.active];
          this.done = true;
          this.nextTurn();
          return;
        }
      }
    }
  }, {
    key: "nextTurn",
    value: function nextTurn() {
      _main__WEBPACK_IMPORTED_MODULE_0__["board"].moves.push(new Move(1 - this.active)); // if (this.active) {
      //     bestMove();
      // }
    }
  }, {
    key: "show",
    value: function show() {
      var h = _main__WEBPACK_IMPORTED_MODULE_0__["board"].h * 0.9;
      var hgap = _main__WEBPACK_IMPORTED_MODULE_0__["board"].height * 0.1;
      var w = _main__WEBPACK_IMPORTED_MODULE_0__["board"].w;

      if (this.done) {
        _main__WEBPACK_IMPORTED_MODULE_0__["board"].ctx.font = '4rem sans-serif';
        _main__WEBPACK_IMPORTED_MODULE_0__["board"].ctx.fillStyle = this.colors[this.active];
        _main__WEBPACK_IMPORTED_MODULE_0__["board"].ctx.fillText(_main__WEBPACK_IMPORTED_MODULE_0__["board"].boardArr[this.j][this.i], this.i * w + w / 2, this.j * h + hgap + h / 2, w);
      }
    }
  }]);

  return Move;
}();

/***/ }),

/***/ "./src/buttons.js":
/*!************************!*\
  !*** ./src/buttons.js ***!
  \************************/
/*! exports provided: createMenuButtons, createGameButtons, createEndGameButtons, createCellButtons */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createMenuButtons", function() { return createMenuButtons; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createGameButtons", function() { return createGameButtons; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createEndGameButtons", function() { return createEndGameButtons; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createCellButtons", function() { return createCellButtons; });
/* harmony import */ var _Button__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Button */ "./src/Button.js");
/* harmony import */ var _Cell__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Cell */ "./src/Cell.js");
/* harmony import */ var _main__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./main */ "./src/main.js");



function createMenuButtons() {
  var txt = {
    h1: 'Choose a game',
    tic: 'Tic Tac Toe',
    four: 'Four in a row'
  };
  var opt = {
    bgc: '#61cfff',
    color: 'black',
    font: '1rem sans-serif'
  };
  var opt2 = {
    bgc: '#1414',
    color: 'black',
    font: '0.7rem sans-serif',
    animate: {
      x: 10,
      y: 10,
      op: 0,
      rate: 15
    }
  };
  _main__WEBPACK_IMPORTED_MODULE_2__["board"].buttons.push(new _Button__WEBPACK_IMPORTED_MODULE_0__["Button"](_main__WEBPACK_IMPORTED_MODULE_2__["board"].width / 2, _main__WEBPACK_IMPORTED_MODULE_2__["board"].height / 2, _main__WEBPACK_IMPORTED_MODULE_2__["board"].width, _main__WEBPACK_IMPORTED_MODULE_2__["board"].height, '', 'bg', 'menu', opt), new _Button__WEBPACK_IMPORTED_MODULE_0__["Button"](_main__WEBPACK_IMPORTED_MODULE_2__["board"].width / 2, _main__WEBPACK_IMPORTED_MODULE_2__["board"].height * 0.2, 150, 65, txt.h1, 'h1', 'menu', opt), new _Button__WEBPACK_IMPORTED_MODULE_0__["Button"](_main__WEBPACK_IMPORTED_MODULE_2__["board"].w - 100, _main__WEBPACK_IMPORTED_MODULE_2__["board"].height / 2, 150, 65, txt.tic, 'tic', 'menu', opt2), new _Button__WEBPACK_IMPORTED_MODULE_0__["Button"](_main__WEBPACK_IMPORTED_MODULE_2__["board"].w + 100, _main__WEBPACK_IMPORTED_MODULE_2__["board"].height / 2, 150, 65, txt.four, 'four', 'menu', opt2));
}
function createGameButtons() {
  var opt = {
    font: '0.7rem sans-serif',
    bgc: 'grey',
    color: 'white'
  };
  _main__WEBPACK_IMPORTED_MODULE_2__["board"].buttons.push(new _Button__WEBPACK_IMPORTED_MODULE_0__["Button"](_main__WEBPACK_IMPORTED_MODULE_2__["board"].width / 2 - 125, _main__WEBPACK_IMPORTED_MODULE_2__["board"].ygap / 2, 100, 30, 'Reset score', 'localStorageClear', 'tic', opt), new _Button__WEBPACK_IMPORTED_MODULE_0__["Button"](_main__WEBPACK_IMPORTED_MODULE_2__["board"].width / 2, _main__WEBPACK_IMPORTED_MODULE_2__["board"].ygap / 2, 100, 30, 'Menu', 'menu', 'tic', opt), new _Button__WEBPACK_IMPORTED_MODULE_0__["Button"](_main__WEBPACK_IMPORTED_MODULE_2__["board"].width / 2 + 125, _main__WEBPACK_IMPORTED_MODULE_2__["board"].ygap / 2, 100, 30, 'New Game', 'restart', 'tic', opt), new _Button__WEBPACK_IMPORTED_MODULE_0__["Button"](_main__WEBPACK_IMPORTED_MODULE_2__["board"].width / 2 - 125, _main__WEBPACK_IMPORTED_MODULE_2__["board"].height - 15, 100, 30, _main__WEBPACK_IMPORTED_MODULE_2__["board"].getPoints().X, 'X', 'score', opt), new _Button__WEBPACK_IMPORTED_MODULE_0__["Button"](_main__WEBPACK_IMPORTED_MODULE_2__["board"].width / 2 + 125, _main__WEBPACK_IMPORTED_MODULE_2__["board"].height - 15, 100, 30, _main__WEBPACK_IMPORTED_MODULE_2__["board"].getPoints().O, 'O', 'score', opt));
}
function createEndGameButtons(score) {
  var txt = '';

  if (score === 'tie') {
    txt = 'Its a tie';
  } else {
    txt = "".concat(score, " Wins!");
  }

  var options = {
    font: 'bold 1.2rem sans-serif'
  };
  _main__WEBPACK_IMPORTED_MODULE_2__["board"].buttons.push(new _Button__WEBPACK_IMPORTED_MODULE_0__["Button"](_main__WEBPACK_IMPORTED_MODULE_2__["board"].width / 2, _main__WEBPACK_IMPORTED_MODULE_2__["board"].height / 2, 300, 100, txt, 'end1', 'end'));
}
function createCellButtons() {
  var h = _main__WEBPACK_IMPORTED_MODULE_2__["board"].h * 0.9;
  var hgap = _main__WEBPACK_IMPORTED_MODULE_2__["board"].height * 0.1;
  var w = _main__WEBPACK_IMPORTED_MODULE_2__["board"].w;
  var opt = {
    bgc: 'rgba(42, 204, 232, 0.3)'
  };

  for (var i = 0; i < _main__WEBPACK_IMPORTED_MODULE_2__["board"].game.row; i++) {
    for (var j = 0; j < _main__WEBPACK_IMPORTED_MODULE_2__["board"].game.col; j++) {
      // createCellButtons();
      _main__WEBPACK_IMPORTED_MODULE_2__["board"].buttons.push(new _Cell__WEBPACK_IMPORTED_MODULE_1__["Cell"](i * w, j * h + hgap, w, h, '', i + j, 'cell', opt, i, j));
    }
  }
}

/***/ }),

/***/ "./src/main.js":
/*!*********************!*\
  !*** ./src/main.js ***!
  \*********************/
/*! exports provided: board, resetBoardObj, newGame, loop */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "board", function() { return board; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "resetBoardObj", function() { return resetBoardObj; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "newGame", function() { return newGame; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "loop", function() { return loop; });
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ "./src/style.css");
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_style_css__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Board__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Board */ "./src/Board.js");
/* harmony import */ var _Move__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Move */ "./src/Move.js");
/* harmony import */ var _buttons__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./buttons */ "./src/buttons.js");
/* harmony import */ var _minimax__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./minimax */ "./src/minimax.js");





var board;
function resetBoardObj() {
  board = new _Board__WEBPACK_IMPORTED_MODULE_1__["Board"]();
}
function newGame() {
  board.init();
  board.moves = [new _Move__WEBPACK_IMPORTED_MODULE_2__["Move"](0)];
  Object(_buttons__WEBPACK_IMPORTED_MODULE_3__["createGameButtons"])();
  Object(_buttons__WEBPACK_IMPORTED_MODULE_3__["createCellButtons"])();

  if (localStorage.length == 0) {
    board.resetPoints();
  }

  board.points = board.getPoints(); // bestMove();
}
function loop() {
  var l = setInterval(function () {
    for (var m in board.moves) {
      board.moves[m].show();
    }

    if (board.boardArr) {
      var winner = board.checkWin();

      if (winner) {
        board.endGame(winner);
        board.removeCells();
        Object(_buttons__WEBPACK_IMPORTED_MODULE_3__["createEndGameButtons"])(winner);
        clearInterval(l);
      }
    }

    if (board.buttons) {
      for (var _m in board.buttons) {
        board.buttons[_m].show();

        if (board.buttons[_m].c === 'score') {
          var id = board.buttons[_m].id;
          board.buttons[_m].txt = board.getPoints()[id];
        }
      }
    }
  }, 50);
}

window.onload = function () {
  resetBoardObj(); // setCanvasSize();

  board.getCanvas(); // board.getSize();
  // board.canvasSize();
  // board.setArrays();

  board.setListener();
  Object(_buttons__WEBPACK_IMPORTED_MODULE_3__["createMenuButtons"])();
  loop();
};

/***/ }),

/***/ "./src/minimax.js":
/*!************************!*\
  !*** ./src/minimax.js ***!
  \************************/
/*! exports provided: bestMove */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "bestMove", function() { return bestMove; });
/* harmony import */ var _main__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./main */ "./src/main.js");
// Tic Tac Toe AI with Minimax Algorithm
// The Coding Train / Daniel Shiffman
// https://thecodingtrain.com/CodingChallenges/154-tic-tac-toe-minimax.html
// https://youtu.be/I64-UTORVfU
// https://editor.p5js.org/codingtrain/sketches/0zyUhZdJD

function bestMove() {
  // AI to make its turn
  var bestScore = -Infinity;
  var move;

  for (var i = 0; i < 3; i++) {
    for (var j = 0; j < 3; j++) {
      // Is the spot available?
      if (_main__WEBPACK_IMPORTED_MODULE_0__["board"].boardArr[j][i] == '') {
        _main__WEBPACK_IMPORTED_MODULE_0__["board"].boardArr[j][i] = _main__WEBPACK_IMPORTED_MODULE_0__["board"].players[0];
        var score = minimax(_main__WEBPACK_IMPORTED_MODULE_0__["board"].boardArr, 0, false);
        _main__WEBPACK_IMPORTED_MODULE_0__["board"].boardArr[j][i] = '';

        if (score > bestScore) {
          bestScore = score;
          move = {
            i: i,
            j: j
          };
        }
      }
    }
  }

  var index = _main__WEBPACK_IMPORTED_MODULE_0__["board"].moves.length - 1;

  if (!_main__WEBPACK_IMPORTED_MODULE_0__["board"].moves[index].done) {
    _main__WEBPACK_IMPORTED_MODULE_0__["board"].moves[index].play(move.i, move.j);
  }
}
var scores = {
  X: 10,
  O: -10,
  tie: 0
};

function minimax(mnxBoard, depth, isMaximizing) {
  var result = _main__WEBPACK_IMPORTED_MODULE_0__["board"].checkWin();

  if (result !== null) {
    return scores[result];
  }

  if (isMaximizing) {
    var bestScore = -Infinity;

    for (var i = 0; i < 3; i++) {
      for (var j = 0; j < 3; j++) {
        // Is the spot available?
        if (mnxBoard[j][i] == '') {
          mnxBoard[j][i] = _main__WEBPACK_IMPORTED_MODULE_0__["board"].players[0];
          var score = minimax(mnxBoard, depth + 1, false);
          mnxBoard[j][i] = '';
          bestScore = Math.max(score, bestScore);
        }
      }
    }

    return bestScore;
  } else {
    var _bestScore = Infinity;

    for (var _i = 0; _i < 3; _i++) {
      for (var _j = 0; _j < 3; _j++) {
        // Is the spot available?
        if (mnxBoard[_j][_i] == '') {
          mnxBoard[_j][_i] = _main__WEBPACK_IMPORTED_MODULE_0__["board"].players[1];

          var _score = minimax(mnxBoard, depth + 1, true);

          mnxBoard[_j][_i] = '';
          _bestScore = Math.min(_score, _bestScore);
        }
      }
    }

    return _bestScore;
  }
}

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var api = __webpack_require__(/*! ../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
            var content = __webpack_require__(/*! !../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./src/style.css");

            content = content.__esModule ? content.default : content;

            if (typeof content === 'string') {
              content = [[module.i, content, '']];
            }

var options = {};

options.insert = "head";
options.singleton = false;

var update = api(content, options);

var exported = content.locals ? content.locals : {};



module.exports = exported;

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL3N0eWxlLmNzcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvQm9hcmQuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL0J1dHRvbi5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvQ2VsbC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvTW92ZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvYnV0dG9ucy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvbWFpbi5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvbWluaW1heC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc3R5bGUuY3NzPzcxNjMiXSwibmFtZXMiOlsiQm9hcmQiLCJjb2xvcnMiLCJwbGF5ZXJzIiwiY2FudiIsImRvY3VtZW50IiwicXVlcnlTZWxlY3RvciIsImN0eCIsImdldENvbnRleHQiLCJjYW52YXNTaXplIiwid2lkdGgiLCJjbGllbnRXaWR0aCIsImhlaWdodCIsImNsaWVudEhlaWdodCIsInlnYXAiLCJ3IiwiaCIsInNldEFycmF5cyIsIm1vdmVzIiwiYnV0dG9ucyIsInBvaW50cyIsIlgiLCJPIiwiYWRkRXZlbnRMaXN0ZW5lciIsImUiLCJiIiwiY2FudmFzQ2xpY2siLCJib2FyZEFyciIsImkiLCJnYW1lIiwicm93IiwiaiIsImNvbCIsImNsZWFyUmVjdCIsImZvbnQiLCJ0ZXh0QWxpZ24iLCJ0ZXh0QmFzZWxpbmUiLCJsIiwiYXJyIiwibGVuZ3RoIiwid2lubmVyIiwid2luQ29uZGl0aW9uIiwidG9DaGVjayIsImsiLCJwdXNoIiwidCIsImNoZWNrRXF1YWxzIiwic2NvcmUiLCJwcmV2IiwiZ2V0UG9pbnRzIiwic2V0UG9pbnRzIiwiZmlsdGVyIiwidiIsImMiLCJlbmRUZXh0IiwiY3JlYXRlRW5kR2FtZUJ1dHRvbnMiLCJOdW1iZXIiLCJsb2NhbFN0b3JhZ2UiLCJnZXRJdGVtIiwicHJldlMiLCJzIiwic2V0SXRlbSIsImNsZWFyIiwiQnV0dG9uIiwieCIsInkiLCJ0eHQiLCJpZCIsIm9wdCIsIm9wYWNpdHkiLCJjZW50ZXIiLCJhbmltYXRlIiwibW91c2V4Iiwib2Zmc2V0WCIsIm1vdXNleSIsIm9mZnNldFkiLCJhY3QiLCJmcm9tIiwiZW5kVmFsIiwib3AiLCJzZXRUaW1lb3V0IiwiYm9hcmQiLCJyZW1vdmVDZWxscyIsIm5ld0dhbWUiLCJsb29wIiwiZ2V0R2FtZSIsImNoZWNrV2luIiwicmVzZXRCb2FyZE9iaiIsImdldENhbnZhcyIsInNldExpc3RlbmVyIiwiY3JlYXRlTWVudUJ1dHRvbnMiLCJyZXNldFBvaW50cyIsIkluZGV4IiwiZG9uZSIsImdldE1vdXNlSW5kZXgiLCJ0cmFuc2xhdGUiLCJnbG9iYWxBbHBoYSIsImZpbGxTdHlsZSIsImJnYyIsImZpbGxSZWN0IiwiY29sb3IiLCJmaWxsVGV4dCIsIkNlbGwiLCJpbmRleCIsInBsYXkiLCJzdHJva2VSZWN0IiwiTW92ZSIsImFjdGl2ZSIsIm5leHRUdXJuIiwiZm91ckluQVJvdyIsIm1heCIsImhnYXAiLCJoMSIsInRpYyIsImZvdXIiLCJvcHQyIiwicmF0ZSIsImNyZWF0ZUdhbWVCdXR0b25zIiwib3B0aW9ucyIsImNyZWF0ZUNlbGxCdXR0b25zIiwiaW5pdCIsInNldEludGVydmFsIiwibSIsInNob3ciLCJlbmRHYW1lIiwiY2xlYXJJbnRlcnZhbCIsIndpbmRvdyIsIm9ubG9hZCIsImJlc3RNb3ZlIiwiYmVzdFNjb3JlIiwiSW5maW5pdHkiLCJtb3ZlIiwibWluaW1heCIsInNjb3JlcyIsInRpZSIsIm1ueEJvYXJkIiwiZGVwdGgiLCJpc01heGltaXppbmciLCJyZXN1bHQiLCJNYXRoIiwibWluIl0sIm1hcHBpbmdzIjoiO1FBQUE7UUFD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a0JBQVEsQ0FBQ3hHLEVBQUQsQ0FBUixDQUFZSCxFQUFaLElBQWlCLEVBQWpCO0FBQ0FxRyxvQkFBUyxHQUFHVSxJQUFJLENBQUNDLEdBQUwsQ0FBUzdGLE1BQVQsRUFBZ0JrRixVQUFoQixDQUFaO0FBQ0Q7QUFDRjtBQUNGOztBQUNELFdBQU9BLFVBQVA7QUFDRDtBQUNGLEM7Ozs7Ozs7Ozs7O0FDeEVELFVBQVUsbUJBQU8sQ0FBQyxtSkFBd0U7QUFDMUYsMEJBQTBCLG1CQUFPLENBQUMsa0hBQXNEOztBQUV4Rjs7QUFFQTtBQUNBLDBCQUEwQixRQUFTO0FBQ25DOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7Ozs7QUFJQSwwQiIsImZpbGUiOiJtYWluLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9zcmMvbWFpbi5qc1wiKTtcbiIsIi8vIEltcG9ydHNcbnZhciBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gPSByZXF1aXJlKFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiKTtcbmV4cG9ydHMgPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oZmFsc2UpO1xuLy8gTW9kdWxlXG5leHBvcnRzLnB1c2goW21vZHVsZS5pZCwgXCIqIHtcXHJcXG4gICAgbWFyZ2luOiAwO1xcclxcbiAgICBwYWRkaW5nOiAwO1xcclxcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcclxcbn1cXHJcXG5cXHJcXG5ib2R5IHtcXHJcXG4gICAgd2lkdGg6IDEwMCU7XFxyXFxuICAgIGhlaWdodDogMTAwdmg7XFxyXFxufVxcclxcblxcclxcbmhlYWRlciB7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGhlaWdodDogMTAlO1xcclxcbiAgICB3aWR0aDogMTAwJTtcXHJcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxubWFpbiB7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtZXZlbmx5O1xcclxcbiAgICBoZWlnaHQ6IDkwJTtcXHJcXG59XFxyXFxuXFxyXFxuc3BhbiB7XFxyXFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG59XFxyXFxuY2FudmFzIHtcXHJcXG4gICAgd2lkdGg6IDEwMCU7XFxyXFxuICAgIGhlaWdodDogMTAwJTtcXHJcXG4gICAgbWF4LXdpZHRoOiA2MDBweDtcXHJcXG4gICAgbWF4LWhlaWdodDogNjAwcHg7XFxyXFxufVwiLCBcIlwiXSk7XG4vLyBFeHBvcnRzXG5tb2R1bGUuZXhwb3J0cyA9IGV4cG9ydHM7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbi8vIGNzcyBiYXNlIGNvZGUsIGluamVjdGVkIGJ5IHRoZSBjc3MtbG9hZGVyXG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgZnVuYy1uYW1lc1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAodXNlU291cmNlTWFwKSB7XG4gIHZhciBsaXN0ID0gW107IC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcblxuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSwgdXNlU291cmNlTWFwKTtcblxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgcmV0dXJuIFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChjb250ZW50LCBcIn1cIik7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oJycpO1xuICB9OyAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgZnVuYy1uYW1lc1xuXG5cbiAgbGlzdC5pID0gZnVuY3Rpb24gKG1vZHVsZXMsIG1lZGlhUXVlcnksIGRlZHVwZSkge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gJ3N0cmluZycpIHtcbiAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1wYXJhbS1yZWFzc2lnblxuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgJyddXTtcbiAgICB9XG5cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuXG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCB0aGlzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBwcmVmZXItZGVzdHJ1Y3R1cmluZ1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2ldWzBdO1xuXG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IG1vZHVsZXMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19pXSk7XG5cbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tY29udGludWVcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG5cbiAgICAgIGlmIChtZWRpYVF1ZXJ5KSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYVF1ZXJ5O1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMl0gPSBcIlwiLmNvbmNhdChtZWRpYVF1ZXJ5LCBcIiBhbmQgXCIpLmNvbmNhdChpdGVtWzJdKTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiBsaXN0O1xufTtcblxuZnVuY3Rpb24gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtLCB1c2VTb3VyY2VNYXApIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdIHx8ICcnOyAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgcHJlZmVyLWRlc3RydWN0dXJpbmdcblxuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG5cbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cblxuICBpZiAodXNlU291cmNlTWFwICYmIHR5cGVvZiBidG9hID09PSAnZnVuY3Rpb24nKSB7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSB0b0NvbW1lbnQoY3NzTWFwcGluZyk7XG4gICAgdmFyIHNvdXJjZVVSTHMgPSBjc3NNYXBwaW5nLnNvdXJjZXMubWFwKGZ1bmN0aW9uIChzb3VyY2UpIHtcbiAgICAgIHJldHVybiBcIi8qIyBzb3VyY2VVUkw9XCIuY29uY2F0KGNzc01hcHBpbmcuc291cmNlUm9vdCB8fCAnJykuY29uY2F0KHNvdXJjZSwgXCIgKi9cIik7XG4gICAgfSk7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoc291cmNlVVJMcykuY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbignXFxuJyk7XG4gIH1cblxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oJ1xcbicpO1xufSAvLyBBZGFwdGVkIGZyb20gY29udmVydC1zb3VyY2UtbWFwIChNSVQpXG5cblxuZnVuY3Rpb24gdG9Db21tZW50KHNvdXJjZU1hcCkge1xuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tdW5kZWZcbiAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSk7XG4gIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgcmV0dXJuIFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbn0iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIGlzT2xkSUUgPSBmdW5jdGlvbiBpc09sZElFKCkge1xuICB2YXIgbWVtbztcbiAgcmV0dXJuIGZ1bmN0aW9uIG1lbW9yaXplKCkge1xuICAgIGlmICh0eXBlb2YgbWVtbyA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgIC8vIFRlc3QgZm9yIElFIDw9IDkgYXMgcHJvcG9zZWQgYnkgQnJvd3NlcmhhY2tzXG4gICAgICAvLyBAc2VlIGh0dHA6Ly9icm93c2VyaGFja3MuY29tLyNoYWNrLWU3MWQ4NjkyZjY1MzM0MTczZmVlNzE1YzIyMmNiODA1XG4gICAgICAvLyBUZXN0cyBmb3IgZXhpc3RlbmNlIG9mIHN0YW5kYXJkIGdsb2JhbHMgaXMgdG8gYWxsb3cgc3R5bGUtbG9hZGVyXG4gICAgICAvLyB0byBvcGVyYXRlIGNvcnJlY3RseSBpbnRvIG5vbi1zdGFuZGFyZCBlbnZpcm9ubWVudHNcbiAgICAgIC8vIEBzZWUgaHR0cHM6Ly9naXRodWIuY29tL3dlYnBhY2stY29udHJpYi9zdHlsZS1sb2FkZXIvaXNzdWVzLzE3N1xuICAgICAgbWVtbyA9IEJvb2xlYW4od2luZG93ICYmIGRvY3VtZW50ICYmIGRvY3VtZW50LmFsbCAmJiAhd2luZG93LmF0b2IpO1xuICAgIH1cblxuICAgIHJldHVybiBtZW1vO1xuICB9O1xufSgpO1xuXG52YXIgZ2V0VGFyZ2V0ID0gZnVuY3Rpb24gZ2V0VGFyZ2V0KCkge1xuICB2YXIgbWVtbyA9IHt9O1xuICByZXR1cm4gZnVuY3Rpb24gbWVtb3JpemUodGFyZ2V0KSB7XG4gICAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7IC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG5cbiAgICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICAgIH1cblxuICAgIHJldHVybiBtZW1vW3RhcmdldF07XG4gIH07XG59KCk7XG5cbnZhciBzdHlsZXNJbkRvbSA9IFtdO1xuXG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRG9tLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRG9tW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cblxuICByZXR1cm4gcmVzdWx0O1xufVxuXG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM11cbiAgICB9O1xuXG4gICAgaWYgKGluZGV4ICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5Eb21baW5kZXhdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRG9tW2luZGV4XS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHN0eWxlc0luRG9tLnB1c2goe1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiBhZGRTdHlsZShvYmosIG9wdGlvbnMpLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG5cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgc3R5bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzdHlsZScpO1xuICB2YXIgYXR0cmlidXRlcyA9IG9wdGlvbnMuYXR0cmlidXRlcyB8fCB7fTtcblxuICBpZiAodHlwZW9mIGF0dHJpYnV0ZXMubm9uY2UgPT09ICd1bmRlZmluZWQnKSB7XG4gICAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSAndW5kZWZpbmVkJyA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcblxuICAgIGlmIChub25jZSkge1xuICAgICAgYXR0cmlidXRlcy5ub25jZSA9IG5vbmNlO1xuICAgIH1cbiAgfVxuXG4gIE9iamVjdC5rZXlzKGF0dHJpYnV0ZXMpLmZvckVhY2goZnVuY3Rpb24gKGtleSkge1xuICAgIHN0eWxlLnNldEF0dHJpYnV0ZShrZXksIGF0dHJpYnV0ZXNba2V5XSk7XG4gIH0pO1xuXG4gIGlmICh0eXBlb2Ygb3B0aW9ucy5pbnNlcnQgPT09ICdmdW5jdGlvbicpIHtcbiAgICBvcHRpb25zLmluc2VydChzdHlsZSk7XG4gIH0gZWxzZSB7XG4gICAgdmFyIHRhcmdldCA9IGdldFRhcmdldChvcHRpb25zLmluc2VydCB8fCAnaGVhZCcpO1xuXG4gICAgaWYgKCF0YXJnZXQpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gICAgfVxuXG4gICAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbiAgfVxuXG4gIHJldHVybiBzdHlsZTtcbn1cblxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlKSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGUucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHN0eWxlLnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGUpO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxudmFyIHJlcGxhY2VUZXh0ID0gZnVuY3Rpb24gcmVwbGFjZVRleHQoKSB7XG4gIHZhciB0ZXh0U3RvcmUgPSBbXTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHJlcGxhY2UoaW5kZXgsIHJlcGxhY2VtZW50KSB7XG4gICAgdGV4dFN0b3JlW2luZGV4XSA9IHJlcGxhY2VtZW50O1xuICAgIHJldHVybiB0ZXh0U3RvcmUuZmlsdGVyKEJvb2xlYW4pLmpvaW4oJ1xcbicpO1xuICB9O1xufSgpO1xuXG5mdW5jdGlvbiBhcHBseVRvU2luZ2xldG9uVGFnKHN0eWxlLCBpbmRleCwgcmVtb3ZlLCBvYmopIHtcbiAgdmFyIGNzcyA9IHJlbW92ZSA/ICcnIDogb2JqLm1lZGlhID8gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKS5jb25jYXQob2JqLmNzcywgXCJ9XCIpIDogb2JqLmNzczsgLy8gRm9yIG9sZCBJRVxuXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cblxuICBpZiAoc3R5bGUuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlLnN0eWxlU2hlZXQuY3NzVGV4dCA9IHJlcGxhY2VUZXh0KGluZGV4LCBjc3MpO1xuICB9IGVsc2Uge1xuICAgIHZhciBjc3NOb2RlID0gZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKTtcbiAgICB2YXIgY2hpbGROb2RlcyA9IHN0eWxlLmNoaWxkTm9kZXM7XG5cbiAgICBpZiAoY2hpbGROb2Rlc1tpbmRleF0pIHtcbiAgICAgIHN0eWxlLnJlbW92ZUNoaWxkKGNoaWxkTm9kZXNbaW5kZXhdKTtcbiAgICB9XG5cbiAgICBpZiAoY2hpbGROb2Rlcy5sZW5ndGgpIHtcbiAgICAgIHN0eWxlLmluc2VydEJlZm9yZShjc3NOb2RlLCBjaGlsZE5vZGVzW2luZGV4XSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHN0eWxlLmFwcGVuZENoaWxkKGNzc05vZGUpO1xuICAgIH1cbiAgfVxufVxuXG5mdW5jdGlvbiBhcHBseVRvVGFnKHN0eWxlLCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IG9iai5jc3M7XG4gIHZhciBtZWRpYSA9IG9iai5tZWRpYTtcbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG5cbiAgaWYgKG1lZGlhKSB7XG4gICAgc3R5bGUuc2V0QXR0cmlidXRlKCdtZWRpYScsIG1lZGlhKTtcbiAgfSBlbHNlIHtcbiAgICBzdHlsZS5yZW1vdmVBdHRyaWJ1dGUoJ21lZGlhJyk7XG4gIH1cblxuICBpZiAoc291cmNlTWFwICYmIGJ0b2EpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfSAvLyBGb3Igb2xkIElFXG5cbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuXG5cbiAgaWYgKHN0eWxlLnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZS5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlLmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlLnJlbW92ZUNoaWxkKHN0eWxlLmZpcnN0Q2hpbGQpO1xuICAgIH1cblxuICAgIHN0eWxlLmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5cbnZhciBzaW5nbGV0b24gPSBudWxsO1xudmFyIHNpbmdsZXRvbkNvdW50ZXIgPSAwO1xuXG5mdW5jdGlvbiBhZGRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIHN0eWxlO1xuICB2YXIgdXBkYXRlO1xuICB2YXIgcmVtb3ZlO1xuXG4gIGlmIChvcHRpb25zLnNpbmdsZXRvbikge1xuICAgIHZhciBzdHlsZUluZGV4ID0gc2luZ2xldG9uQ291bnRlcisrO1xuICAgIHN0eWxlID0gc2luZ2xldG9uIHx8IChzaW5nbGV0b24gPSBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykpO1xuICAgIHVwZGF0ZSA9IGFwcGx5VG9TaW5nbGV0b25UYWcuYmluZChudWxsLCBzdHlsZSwgc3R5bGVJbmRleCwgZmFsc2UpO1xuICAgIHJlbW92ZSA9IGFwcGx5VG9TaW5nbGV0b25UYWcuYmluZChudWxsLCBzdHlsZSwgc3R5bGVJbmRleCwgdHJ1ZSk7XG4gIH0gZWxzZSB7XG4gICAgc3R5bGUgPSBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gICAgdXBkYXRlID0gYXBwbHlUb1RhZy5iaW5kKG51bGwsIHN0eWxlLCBvcHRpb25zKTtcblxuICAgIHJlbW92ZSA9IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZSk7XG4gICAgfTtcbiAgfVxuXG4gIHVwZGF0ZShvYmopO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlU3R5bGUobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIHVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICByZW1vdmUoKTtcbiAgICB9XG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307IC8vIEZvcmNlIHNpbmdsZS10YWcgc29sdXRpb24gb24gSUU2LTksIHdoaWNoIGhhcyBhIGhhcmQgbGltaXQgb24gdGhlICMgb2YgPHN0eWxlPlxuICAvLyB0YWdzIGl0IHdpbGwgYWxsb3cgb24gYSBwYWdlXG5cbiAgaWYgKCFvcHRpb25zLnNpbmdsZXRvbiAmJiB0eXBlb2Ygb3B0aW9ucy5zaW5nbGV0b24gIT09ICdib29sZWFuJykge1xuICAgIG9wdGlvbnMuc2luZ2xldG9uID0gaXNPbGRJRSgpO1xuICB9XG5cbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuXG4gICAgaWYgKE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbChuZXdMaXN0KSAhPT0gJ1tvYmplY3QgQXJyYXldJykge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5Eb21baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG5cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuXG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG5cbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG5cbiAgICAgIGlmIChzdHlsZXNJbkRvbVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5Eb21bX2luZGV4XS51cGRhdGVyKCk7XG5cbiAgICAgICAgc3R5bGVzSW5Eb20uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJpbXBvcnQgeyBib2FyZCB9IGZyb20gXCIuL21haW5cIjtcclxuXHJcbmV4cG9ydCBjbGFzcyBCb2FyZCB7XHJcbiAgICBjb25zdHJ1Y3RvcigpIHtcclxuICAgICAgICB0aGlzLmNvbG9ycyA9IFsnZ3JlZW4nLCAncGluayddO1xyXG4gICAgICAgIHRoaXMucGxheWVycyA9IFsnWCcsICdPJ107XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0Q2FudmFzKCkge1xyXG4gICAgICAgIHRoaXMuY2FudiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJjYW52YXNcIik7XHJcbiAgICAgICAgdGhpcy5jdHggPSB0aGlzLmNhbnYuZ2V0Q29udGV4dCgnMmQnKTtcclxuICAgICAgICB0aGlzLmNhbnZhc1NpemUoKTtcclxuICAgIH1cclxuXHJcbiAgICBjYW52YXNTaXplKCkge1xyXG4gICAgICAgIHRoaXMuY2Fudi53aWR0aCA9IHRoaXMuY2Fudi5jbGllbnRXaWR0aDtcclxuICAgICAgICB0aGlzLmNhbnYuaGVpZ2h0ID0gdGhpcy5jYW52LmNsaWVudEhlaWdodDtcclxuICAgICAgICB0aGlzLndpZHRoID0gdGhpcy5jYW52LndpZHRoO1xyXG4gICAgICAgIHRoaXMuaGVpZ2h0ID0gdGhpcy5jYW52LmhlaWdodDtcclxuICAgICAgICB0aGlzLnlnYXAgPSB0aGlzLmhlaWdodCAqIDAuMTtcclxuICAgICAgICB0aGlzLncgPSB0aGlzLndpZHRoIC8gMjtcclxuICAgICAgICB0aGlzLmggPSB0aGlzLmhlaWdodCAvIDI7XHJcbiAgICAgICAgdGhpcy5zZXRBcnJheXMoKTtcclxuICAgIH1cclxuXHJcbiAgICBzZXRBcnJheXMoKSB7XHJcbiAgICAgICAgdGhpcy5tb3ZlcyA9IFtdO1xyXG4gICAgICAgIHRoaXMuYnV0dG9ucyA9IFtdO1xyXG4gICAgICAgIHRoaXMucG9pbnRzID0geyBYOiAwLCBPOiAwIH07XHJcbiAgICB9XHJcblxyXG4gICAgc2V0TGlzdGVuZXIoKSB7XHJcbiAgICAgICAgdGhpcy5jYW52LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcclxuICAgICAgICAgICAgZm9yIChsZXQgYiBpbiB0aGlzLmJ1dHRvbnMpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuYnV0dG9uc1tiXS5jYW52YXNDbGljayhlKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIGluaXQoKSB7XHJcbiAgICAgICAgdGhpcy5ib2FyZEFyciA9IFtdO1xyXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5nYW1lLnJvdzsgaSsrKSB7XHJcbiAgICAgICAgICAgIHRoaXMuYm9hcmRBcnJbaV0gPSBbXTtcclxuICAgICAgICAgICAgZm9yIChsZXQgaiA9IDA7IGogPCB0aGlzLmdhbWUuY29sOyBqKyspIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuYm9hcmRBcnJbaV1bal0gPSAnJztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLmN0eC5jbGVhclJlY3QoMCwgMCwgdGhpcy53aWR0aCwgdGhpcy5oZWlnaHQpO1xyXG4gICAgICAgIHRoaXMuY3R4LmZvbnQgPSAnYm9sZCAzLjVyZW0gc2Fucy1zZXJpZic7XHJcbiAgICAgICAgdGhpcy5jdHgudGV4dEFsaWduID0gJ2NlbnRlcic7XHJcbiAgICAgICAgdGhpcy5jdHgudGV4dEJhc2VsaW5lID0gJ21pZGRsZSc7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0R2FtZShyb3csIGNvbCkge1xyXG4gICAgICAgIHRoaXMuZ2FtZSA9IHsgcm93LCBjb2wgfTtcclxuICAgICAgICB0aGlzLmwgPSByb3cgKiBjb2w7XHJcbiAgICAgICAgdGhpcy53ID0gdGhpcy53aWR0aCAvIHJvdztcclxuICAgICAgICB0aGlzLmggPSB0aGlzLmhlaWdodCAvIGNvbDtcclxuICAgIH1cclxuXHJcbiAgICBjaGVja0VxdWFscyhhcnIpIHtcclxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGFyci5sZW5ndGggLSAxOyBpKyspIHtcclxuICAgICAgICAgICAgaWYgKGFycltpXSAhPT0gYXJyW2kgKyAxXSkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHRydWVcclxuICAgIH1cclxuXHJcbiAgICBjaGVja1dpbigpIHtcclxuICAgICAgICBsZXQgd2lubmVyID0gbnVsbDtcclxuICAgICAgICBsZXQgd2luQ29uZGl0aW9uID0gdGhpcy5nYW1lLnJvdyA9PT0gMyA/IDMgOiA0O1xyXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5nYW1lLnJvdzsgaSsrKSB7XHJcbiAgICAgICAgICAgIGZvciAobGV0IGogPSAwOyBqIDwgdGhpcy5nYW1lLmNvbDsgaisrKSB7XHJcbiAgICAgICAgICAgICAgICBsZXQgdG9DaGVjayA9IFtbXSwgW10sIFtdLCBbXV07XHJcbiAgICAgICAgICAgICAgICBmb3IgKGxldCBrID0gMDsgayA8IHdpbkNvbmRpdGlvbjsgaysrKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgLy9Ib3Jpem9udGFsXHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMuYm9hcmRBcnJbaV1baiArIGtdKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRvQ2hlY2tbMF0ucHVzaCh0aGlzLmJvYXJkQXJyW2ldW2ogKyBrXSk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIC8vVmVydGljYWxcclxuICAgICAgICAgICAgICAgICAgICBpZiAoaSA+PSB3aW5Db25kaXRpb24gLSAxKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLmJvYXJkQXJyW2kgLSBrXVtqXSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdG9DaGVja1sxXS5wdXNoKHRoaXMuYm9hcmRBcnJbaSAtIGtdW2pdKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAvL0RpYWdvbmFsIHJpZ2h0XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLmJvYXJkQXJyW2kgLSBrXVtqICsga10pIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRvQ2hlY2tbMl0ucHVzaCh0aGlzLmJvYXJkQXJyW2kgLSBrXVtqICsga10pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vRGlhZ29uYWwgbGVmdFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoaiA+PSB3aW5Db25kaXRpb24gLSAxKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy5ib2FyZEFycltpIC0ga11baiAtIGtdKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdG9DaGVja1szXS5wdXNoKHRoaXMuYm9hcmRBcnJbaSAtIGtdW2ogLSBrXSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAvL0NhbGwgY2hlY2sgZXF1YWxzXHJcbiAgICAgICAgICAgICAgICBmb3IgKGxldCB0ID0gMDsgdCA8IHRvQ2hlY2subGVuZ3RoOyB0KyspIHtcclxuICAgICAgICAgICAgICAgICAgICBpZiAodG9DaGVja1t0XS5sZW5ndGggPT09IHdpbkNvbmRpdGlvbikge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLmNoZWNrRXF1YWxzKHRvQ2hlY2tbdF0pKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aW5uZXIgPSB0aGlzLmJvYXJkQXJyW2ldW2pdO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICh0aGlzLm1vdmVzLmxlbmd0aCA+IHRoaXMubCAmJiAhd2lubmVyKSB7XHJcbiAgICAgICAgICAgIHdpbm5lciA9ICd0aWUnO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gd2lubmVyXHJcbiAgICB9XHJcblxyXG4gICAgZW5kR2FtZShzY29yZSkge1xyXG4gICAgICAgIGlmIChzY29yZSAhPT0gJ3RpZScpIHtcclxuICAgICAgICAgICAgbGV0IHByZXYgPSB0aGlzLmdldFBvaW50cygpO1xyXG4gICAgICAgICAgICB0aGlzLnNldFBvaW50cyhzY29yZSwgcHJldltzY29yZV0pO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICByZW1vdmVDZWxscygpIHtcclxuICAgICAgICB0aGlzLmJ1dHRvbnMgPSB0aGlzLmJ1dHRvbnMuZmlsdGVyKCh2LCBpKSA9PiB7XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmJ1dHRvbnNbaV0uYyAhPT0gJ2NlbGwnO1xyXG4gICAgICAgIH0pXHJcbiAgICB9XHJcbiAgICBjcmVhdGVFbmRCdXR0b24oc2NvcmUpIHtcclxuICAgICAgICBsZXQgZW5kVGV4dCA9ICcnO1xyXG4gICAgICAgIGlmIChzY29yZSA9PT0gJ3RpZScpIHtcclxuICAgICAgICAgICAgZW5kVGV4dCA9ICdJdHMgYSB0aWUnO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgZW5kVGV4dCA9IGAke3Njb3JlfSBXaW5zIWBcclxuICAgICAgICB9XHJcbiAgICAgICAgY3JlYXRlRW5kR2FtZUJ1dHRvbnMoZW5kVGV4dCk7XHJcbiAgICB9XHJcblxyXG4gICAgYnV0dG9uc0NsaWNrKGUpIHtcclxuICAgICAgICBmb3IgKGxldCBiIGluIHRoaXMuYnV0dG9ucykge1xyXG4gICAgICAgICAgICB0aGlzLmJ1dHRvbnNbYl0uY2FudmFzQ2xpY2soZSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuXHJcbiAgICBnZXRQb2ludHMoKSB7XHJcbiAgICAgICAgbGV0IFggPSBOdW1iZXIobG9jYWxTdG9yYWdlLmdldEl0ZW0oJ1gnKSk7XHJcbiAgICAgICAgbGV0IE8gPSBOdW1iZXIobG9jYWxTdG9yYWdlLmdldEl0ZW0oJ08nKSk7XHJcbiAgICAgICAgcmV0dXJuIHsgWCwgTyB9XHJcbiAgICB9XHJcblxyXG4gICAgc2V0UG9pbnRzKHdpbm5lciwgcHJldlMpIHtcclxuICAgICAgICBsZXQgcyA9IHByZXZTICsgMTtcclxuICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSh3aW5uZXIsIHMpO1xyXG4gICAgICAgIHRoaXMucG9pbnRzW3dpbm5lcl0gPSBzO1xyXG4gICAgfVxyXG5cclxuICAgIHJlc2V0UG9pbnRzKCkge1xyXG4gICAgICAgIGxvY2FsU3RvcmFnZS5jbGVhcigpO1xyXG4gICAgICAgIHRoaXMucG9pbnRzID0geyBYOiAwLCBPOiAwIH07XHJcbiAgICB9XHJcblxyXG59IiwiLy8gaW1wb3J0IHsgY3R4LCBib2FyZCwgYnV0dG9ucywgbmV3R2FtZSwgbG9vcCB9IGZyb20gJy4vbWFpbic7XHJcbi8vIGxldCBtYWluID0gcmVxdWlyZSgnLi9tYWluLmpzJylcclxuaW1wb3J0IHsgQm9hcmQgfSBmcm9tICcuL0JvYXJkJ1xyXG5pbXBvcnQgeyBib2FyZCwgbmV3R2FtZSwgbG9vcCwgcmVzZXRCb2FyZE9iaiB9IGZyb20gJy4vbWFpbic7XHJcbmltcG9ydCB7IGNyZWF0ZU1lbnVCdXR0b25zIH0gZnJvbSAnLi9idXR0b25zJ1xyXG5cclxuZXhwb3J0IGNsYXNzIEJ1dHRvbiB7XHJcbiAgICBjb25zdHJ1Y3Rvcih4LCB5LCB3LCBoLCB0eHQsIGlkLCBjLCBvcHQpIHtcclxuICAgICAgICB0aGlzLnggPSB4O1xyXG4gICAgICAgIHRoaXMueSA9IHk7XHJcbiAgICAgICAgdGhpcy53ID0gdztcclxuICAgICAgICB0aGlzLmggPSBoO1xyXG4gICAgICAgIHRoaXMudHh0ID0gdHh0XHJcbiAgICAgICAgdGhpcy5pZCA9IGlkXHJcbiAgICAgICAgdGhpcy5vcGFjaXR5ID0gMTtcclxuICAgICAgICB0aGlzLmNlbnRlciA9IHsgeDogKHRoaXMueCAtICh0aGlzLncgLyAyKSksIHk6ICh0aGlzLnkgLSAodGhpcy5oIC8gMikpIH07XHJcbiAgICAgICAgaWYgKG9wdCkge1xyXG4gICAgICAgICAgICB0aGlzLm9wdCA9IG9wdDtcclxuICAgICAgICAgICAgaWYgKG9wdC5hbmltYXRlKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmFuaW1hdGUob3B0LmFuaW1hdGUpXHJcbiAgICAgICAgICAgICAgICAvLyB0aGlzLm9wYWNpdHkgPSBvcHQuYW5pbWF0ZS5vcDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoYykge1xyXG4gICAgICAgICAgICB0aGlzLmMgPSBjXHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMuY29sb3JzID0gWydncmV5JywgJ3doaXRlJ107XHJcbiAgICB9XHJcblxyXG5cclxuXHJcbiAgICBjYW52YXNDbGljayhlKSB7XHJcbiAgICAgICAgbGV0IG1vdXNleCA9IGUub2Zmc2V0WDtcclxuICAgICAgICBsZXQgbW91c2V5ID0gZS5vZmZzZXRZO1xyXG4gICAgICAgIGlmIChtb3VzZXggPiB0aGlzLmNlbnRlci54ICYmIG1vdXNleCA8IHRoaXMuY2VudGVyLnggKyB0aGlzLncpIHtcclxuICAgICAgICAgICAgaWYgKG1vdXNleSA+IHRoaXMuY2VudGVyLnkgJiYgbW91c2V5IDwgdGhpcy5jZW50ZXIueSArIHRoaXMuaCkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5hY3QoKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBhbmltYXRlKGZyb20pIHtcclxuICAgICAgICBsZXQgZW5kVmFsID0geyB4OiB0aGlzLngsIHk6IHRoaXMueSB9XHJcbiAgICAgICAgdGhpcy54IC09IGZyb20ueDtcclxuICAgICAgICB0aGlzLmNlbnRlci54IC09IGZyb20ueDtcclxuICAgICAgICB0aGlzLnkgLT0gZnJvbS55O1xyXG4gICAgICAgIHRoaXMuY2VudGVyLnkgLT0gZnJvbS55O1xyXG4gICAgICAgIHRoaXMub3BhY2l0eSA9IGZyb20ub3A7XHJcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCAxMDA7IGkrKykge1xyXG4gICAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgICAgICAgICAgIGlmICh0aGlzLnggIT09IGVuZFZhbC54KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy54ICs9IChmcm9tLnggKiAwLjAxKTtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmNlbnRlci54ICs9IChmcm9tLnggKiAwLjAxKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGlmIChmcm9tLnkpIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnkgKz0gKGZyb20ueSAqIDAuMDEpO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuY2VudGVyLnkgKz0gKGZyb20ueSAqIDAuMDEpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgaWYgKHRoaXMub3BhY2l0eSAhPT0gMSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMub3BhY2l0eSArPSAwLjAxO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9LCAoaSAqIDUpKVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIGFjdCgpIHtcclxuICAgICAgICAvL1BsYXkgYWdhaW4gYnV0dG9uXHJcbiAgICAgICAgaWYgKHRoaXMuaWQgPT09ICdyZXN0YXJ0Jykge1xyXG4gICAgICAgICAgICAvLyBidXR0b25zID0gYnV0dG9ucy5maWx0ZXIoKHZhbHVlLCBpbmRleCkgPT4ge1xyXG4gICAgICAgICAgICAvLyAgICAgcmV0dXJuIGJ1dHRvbnNbaW5kZXhdLmMgIT09ICdlbmQnO1xyXG4gICAgICAgICAgICAvLyB9KTtcclxuICAgICAgICAgICAgYm9hcmQuYnV0dG9ucyA9IFtdO1xyXG4gICAgICAgICAgICBib2FyZC5yZW1vdmVDZWxscygpO1xyXG4gICAgICAgICAgICBuZXdHYW1lKCk7XHJcbiAgICAgICAgICAgIGxvb3AoKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKHRoaXMuaWQgPT09ICd0aWMnKSB7XHJcbiAgICAgICAgICAgIGJvYXJkLmdldEdhbWUoMywgMyk7XHJcbiAgICAgICAgICAgIGJvYXJkLnNldEFycmF5cygpO1xyXG4gICAgICAgICAgICBuZXdHYW1lKCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICh0aGlzLmlkID09PSAnZm91cicpIHtcclxuICAgICAgICAgICAgYm9hcmQuZ2V0R2FtZSg3LCA3KTtcclxuICAgICAgICAgICAgYm9hcmQuc2V0QXJyYXlzKCk7XHJcbiAgICAgICAgICAgIG5ld0dhbWUoKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKHRoaXMuaWQgPT09ICdtZW51Jykge1xyXG4gICAgICAgICAgICBpZiAoYm9hcmQuY2hlY2tXaW4oKSkge1xyXG4gICAgICAgICAgICAgICAgbG9vcCgpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHJlc2V0Qm9hcmRPYmooKTtcclxuICAgICAgICAgICAgYm9hcmQuZ2V0Q2FudmFzKCk7XHJcbiAgICAgICAgICAgIGJvYXJkLnNldExpc3RlbmVyKCk7XHJcbiAgICAgICAgICAgIGNyZWF0ZU1lbnVCdXR0b25zKCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICh0aGlzLmlkID09PSAnbG9jYWxTdG9yYWdlQ2xlYXInKSB7XHJcbiAgICAgICAgICAgIGJvYXJkLnJlc2V0UG9pbnRzKCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICh0aGlzLmlkID09PSAnY2VsbCcpIHtcclxuICAgICAgICAgICAgbGV0IG1vdXNleCA9IGUub2Zmc2V0WDtcclxuICAgICAgICAgICAgbGV0IG1vdXNleSA9IGUub2Zmc2V0WTtcclxuICAgICAgICAgICAgaWYgKCFib2FyZC5tb3Zlc1tJbmRleF0uZG9uZSkge1xyXG4gICAgICAgICAgICAgICAgYm9hcmQubW92ZXNbSW5kZXhdLmdldE1vdXNlSW5kZXgobW91c2V4LCBtb3VzZXkpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHNob3coKSB7XHJcblxyXG4gICAgICAgIGlmICh0aGlzLm9wdCAmJiB0aGlzLm9wdC5hbmltYXRlKSB7XHJcbiAgICAgICAgICAgIC8vIHRoaXMuYW5pbWF0ZSh0aGlzLm9wdC5hbmltYXRlKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgYm9hcmQuY3R4LnRyYW5zbGF0ZSgwLCAwKTtcclxuICAgICAgICAvLyBjb25zb2xlLmxvZyh0aGlzLm9wYWNpdHkpO1xyXG5cclxuICAgICAgICBib2FyZC5jdHguZ2xvYmFsQWxwaGEgPSB0aGlzLm9wYWNpdHk7XHJcbiAgICAgICAgYm9hcmQuY3R4LnRleHRBbGlnbiA9ICdjZW50ZXInO1xyXG4gICAgICAgIGJvYXJkLmN0eC50ZXh0QmFzZWxpbmUgPSAnbWlkZGxlJztcclxuICAgICAgICBib2FyZC5jdHguZm9udCA9IHRoaXMub3B0ICYmIHRoaXMub3B0LmZvbnQgPyB0aGlzLm9wdC5mb250IDogJ2JvbGQgMy41cmVtIHNhbnMtc2VyaWYnO1xyXG4gICAgICAgIGJvYXJkLmN0eC5maWxsU3R5bGUgPSB0aGlzLm9wdCAmJiB0aGlzLm9wdC5iZ2MgPyB0aGlzLm9wdC5iZ2MgOiB0aGlzLmNvbG9yc1swXTtcclxuICAgICAgICBib2FyZC5jdHguZmlsbFJlY3QodGhpcy5jZW50ZXIueCwgdGhpcy5jZW50ZXIueSwgdGhpcy53LCB0aGlzLmgpO1xyXG4gICAgICAgIGJvYXJkLmN0eC5maWxsU3R5bGUgPSB0aGlzLm9wdCAmJiB0aGlzLm9wdC5jb2xvciA/IHRoaXMub3B0LmNvbG9yIDogdGhpcy5jb2xvcnNbMV07XHJcbiAgICAgICAgYm9hcmQuY3R4LmZpbGxUZXh0KHRoaXMudHh0LCB0aGlzLngsIHRoaXMueSk7XHJcbiAgICAgICAgLy8gY3R4LnRyYW5zbGF0ZSgwLCAwKVxyXG4gICAgfVxyXG59IiwiaW1wb3J0IHsgQnV0dG9uIH0gZnJvbSAnLi9CdXR0b24nO1xyXG5pbXBvcnQgeyBib2FyZCB9IGZyb20gJy4vbWFpbic7XHJcblxyXG5leHBvcnQgY2xhc3MgQ2VsbCBleHRlbmRzIEJ1dHRvbiB7XHJcbiAgICBjb25zdHJ1Y3Rvcih4LCB5LCB3LCBoLCB0eHQsIGlkLCBjLCBvcHQsIGksIGopIHtcclxuICAgICAgICBzdXBlcih4LCB5LCB3LCBoLCB0eHQsIGlkLCBjLCBvcHQpO1xyXG4gICAgICAgIHRoaXMuaSA9IGk7XHJcbiAgICAgICAgdGhpcy5qID0gajtcclxuICAgIH1cclxuXHJcbiAgICBjYW52YXNDbGljayhlKSB7XHJcbiAgICAgICAgbGV0IG1vdXNleCA9IGUub2Zmc2V0WDtcclxuICAgICAgICBsZXQgbW91c2V5ID0gZS5vZmZzZXRZO1xyXG4gICAgICAgIGlmIChtb3VzZXggPiB0aGlzLnggJiYgbW91c2V4IDwgdGhpcy54ICsgdGhpcy53KSB7XHJcbiAgICAgICAgICAgIGlmIChtb3VzZXkgPiB0aGlzLnkgJiYgbW91c2V5IDwgdGhpcy55ICsgdGhpcy5oKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmFjdCgpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGFjdCgpIHtcclxuICAgICAgICBsZXQgaW5kZXggPSBib2FyZC5tb3Zlcy5sZW5ndGggLSAxO1xyXG4gICAgICAgIGJvYXJkLm1vdmVzW2luZGV4XS5wbGF5KHRoaXMuaSwgdGhpcy5qKTtcclxuICAgIH1cclxuXHJcblxyXG4gICAgc2hvdygpIHtcclxuICAgICAgICBib2FyZC5jdHguZm9udCA9IHRoaXMub3B0ICYmIHRoaXMub3B0LmZvbnQgPyB0aGlzLm9wdC5mb250IDogJ2JvbGQgMy41cmVtIHNhbnMtc2VyaWYnO1xyXG4gICAgICAgIGJvYXJkLmN0eC5maWxsU3R5bGUgPSB0aGlzLm9wdCAmJiB0aGlzLm9wdC5iZ2MgPyB0aGlzLm9wdC5iZ2MgOiAnd2hpdGUnO1xyXG4gICAgICAgIGJvYXJkLmN0eC5maWxsUmVjdCh0aGlzLngsIHRoaXMueSwgdGhpcy53LCB0aGlzLmgpO1xyXG4gICAgICAgIGJvYXJkLmN0eC5zdHJva2VSZWN0KHRoaXMueCwgdGhpcy55LCB0aGlzLncsIHRoaXMuaCk7XHJcbiAgICB9XHJcbn0iLCJpbXBvcnQgeyBib2FyZCB9IGZyb20gJy4vbWFpbic7XHJcbmltcG9ydCB7IGJlc3RNb3ZlIH0gZnJvbSAnLi9taW5pbWF4JztcclxuXHJcbmV4cG9ydCBjbGFzcyBNb3ZlIHtcclxuICAgIGNvbnN0cnVjdG9yKGFjdGl2ZSkge1xyXG4gICAgICAgIHRoaXMuYWN0aXZlID0gYWN0aXZlO1xyXG4gICAgICAgIHRoaXMucGxheWVycyA9IFsnWCcsICdPJ107XHJcbiAgICAgICAgdGhpcy5jb2xvcnMgPSBbJ2JsdWUnLCAncmVkJywgJ2dyZWVuJywgJ3BpbmsnXTtcclxuICAgICAgICB0aGlzLmRvbmUgPSBmYWxzZTtcclxuICAgIH1cclxuXHJcblxyXG4gICAgcGxheShpLCBqKSB7XHJcbiAgICAgICAgaWYgKGJvYXJkLmdhbWUucm93ID09PSAzKSB7XHJcbiAgICAgICAgICAgIGlmICghYm9hcmQuYm9hcmRBcnJbal1baV0pIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuaSA9IGk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmogPSBqO1xyXG4gICAgICAgICAgICAgICAgYm9hcmQuYm9hcmRBcnJbal1baV0gPSB0aGlzLnBsYXllcnNbdGhpcy5hY3RpdmVdO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5kb25lID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgIHRoaXMubmV4dFR1cm4oKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIGlmKGJvYXJkLmdhbWUucm93ID09PSA3KSB7XHJcbiAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKGJvYXJkLmJvYXJkQXJyKTtcclxuICAgICAgICAgICAgdGhpcy5mb3VySW5BUm93KGkpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBmb3VySW5BUm93KGkpIHtcclxuICAgICAgICBsZXQgbWF4ID0gYm9hcmQuYm9hcmRBcnJbaV0ubGVuZ3RoIC0gMVxyXG4gICAgICAgIGZvciAobGV0IGogPSBtYXg7IGogPj0gMDsgai0tKSB7XHJcbiAgICAgICAgICAgIGlmICghYm9hcmQuYm9hcmRBcnJbal1baV0pIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuaSA9IGk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmogPSBqO1xyXG4gICAgICAgICAgICAgICAgYm9hcmQuYm9hcmRBcnJbal1baV0gPSB0aGlzLnBsYXllcnNbdGhpcy5hY3RpdmVdO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5kb25lID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgIHRoaXMubmV4dFR1cm4oKTtcclxuICAgICAgICAgICAgICAgIHJldHVyblxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBuZXh0VHVybigpIHtcclxuICAgICAgICBib2FyZC5tb3Zlcy5wdXNoKG5ldyBNb3ZlKDEgLSB0aGlzLmFjdGl2ZSkpO1xyXG4gICAgICAgIC8vIGlmICh0aGlzLmFjdGl2ZSkge1xyXG4gICAgICAgIC8vICAgICBiZXN0TW92ZSgpO1xyXG4gICAgICAgIC8vIH1cclxuICAgIH1cclxuXHJcbiAgICBzaG93KCkge1xyXG4gICAgICAgIGxldCBoID0gYm9hcmQuaCAqIDAuOTtcclxuICAgICAgICBsZXQgaGdhcCA9IGJvYXJkLmhlaWdodCAqIDAuMVxyXG4gICAgICAgIGxldCB3ID0gYm9hcmQudztcclxuICAgICAgICBpZiAodGhpcy5kb25lKSB7XHJcbiAgICAgICAgICAgIGJvYXJkLmN0eC5mb250ID0gJzRyZW0gc2Fucy1zZXJpZic7XHJcbiAgICAgICAgICAgIGJvYXJkLmN0eC5maWxsU3R5bGUgPSB0aGlzLmNvbG9yc1t0aGlzLmFjdGl2ZV07XHJcbiAgICAgICAgICAgIGJvYXJkLmN0eC5maWxsVGV4dChib2FyZC5ib2FyZEFyclt0aGlzLmpdW3RoaXMuaV0sICh0aGlzLmkgKiB3KSArICh3IC8gMiksICh0aGlzLmogKiBoKSArIGhnYXAgKyAoaCAvIDIpLCB3KTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn0iLCJpbXBvcnQgeyBCdXR0b24gfSBmcm9tICcuL0J1dHRvbic7XHJcbmltcG9ydCB7IENlbGwgfSBmcm9tICcuL0NlbGwnO1xyXG5pbXBvcnQgeyBib2FyZCB9IGZyb20gJy4vbWFpbic7XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gY3JlYXRlTWVudUJ1dHRvbnMoKSB7XHJcbiAgICBsZXQgdHh0ID0ge1xyXG4gICAgICAgIGgxOiAnQ2hvb3NlIGEgZ2FtZScsXHJcbiAgICAgICAgdGljOiAnVGljIFRhYyBUb2UnLFxyXG4gICAgICAgIGZvdXI6ICdGb3VyIGluIGEgcm93J1xyXG4gICAgfVxyXG4gICAgbGV0IG9wdCA9IHtcclxuICAgICAgICBiZ2M6ICcjNjFjZmZmJyxcclxuICAgICAgICBjb2xvcjogJ2JsYWNrJyxcclxuICAgICAgICBmb250OiAnMXJlbSBzYW5zLXNlcmlmJ1xyXG4gICAgfVxyXG4gICAgbGV0IG9wdDIgPSB7XHJcbiAgICAgICAgYmdjOiAnIzE0MTQnLFxyXG4gICAgICAgIGNvbG9yOiAnYmxhY2snLFxyXG4gICAgICAgIGZvbnQ6ICcwLjdyZW0gc2Fucy1zZXJpZicsXHJcbiAgICAgICAgYW5pbWF0ZToge1xyXG4gICAgICAgICAgICB4OiAxMCxcclxuICAgICAgICAgICAgeTogMTAsXHJcbiAgICAgICAgICAgIG9wOiAwLFxyXG4gICAgICAgICAgICByYXRlOiAxNVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIGJvYXJkLmJ1dHRvbnMucHVzaChcclxuICAgICAgICBuZXcgQnV0dG9uKGJvYXJkLndpZHRoIC8gMiwgYm9hcmQuaGVpZ2h0IC8gMiwgYm9hcmQud2lkdGgsIGJvYXJkLmhlaWdodCwgJycsICdiZycsICdtZW51Jywgb3B0KSxcclxuICAgICAgICBuZXcgQnV0dG9uKGJvYXJkLndpZHRoIC8gMiwgYm9hcmQuaGVpZ2h0ICogMC4yLCAxNTAsIDY1LCB0eHQuaDEsICdoMScsICdtZW51Jywgb3B0KSxcclxuICAgICAgICBuZXcgQnV0dG9uKGJvYXJkLncgLSAxMDAsIGJvYXJkLmhlaWdodCAvIDIsIDE1MCwgNjUsIHR4dC50aWMsICd0aWMnLCAnbWVudScsIG9wdDIpLFxyXG4gICAgICAgIG5ldyBCdXR0b24oYm9hcmQudyArIDEwMCwgYm9hcmQuaGVpZ2h0IC8gMiwgMTUwLCA2NSwgdHh0LmZvdXIsICdmb3VyJywgJ21lbnUnLCBvcHQyKSxcclxuICAgICk7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBjcmVhdGVHYW1lQnV0dG9ucygpIHtcclxuICAgIGxldCBvcHQgPSB7XHJcbiAgICAgICAgZm9udDogJzAuN3JlbSBzYW5zLXNlcmlmJyxcclxuICAgICAgICBiZ2M6ICdncmV5JyxcclxuICAgICAgICBjb2xvcjogJ3doaXRlJ1xyXG4gICAgfVxyXG4gICAgYm9hcmQuYnV0dG9ucy5wdXNoKFxyXG4gICAgICAgIG5ldyBCdXR0b24oKGJvYXJkLndpZHRoIC8gMikgLSAxMjUsIGJvYXJkLnlnYXAgLyAyLCAxMDAsIDMwLCAnUmVzZXQgc2NvcmUnLCAnbG9jYWxTdG9yYWdlQ2xlYXInLCAndGljJywgb3B0KSxcclxuICAgICAgICBuZXcgQnV0dG9uKGJvYXJkLndpZHRoIC8gMiwgYm9hcmQueWdhcCAvIDIsIDEwMCwgMzAsICdNZW51JywgJ21lbnUnLCAndGljJywgb3B0KSxcclxuICAgICAgICBuZXcgQnV0dG9uKChib2FyZC53aWR0aCAvIDIpICsgMTI1LCBib2FyZC55Z2FwIC8gMiwgMTAwLCAzMCwgJ05ldyBHYW1lJywgJ3Jlc3RhcnQnLCAndGljJywgb3B0KSxcclxuICAgICAgICBuZXcgQnV0dG9uKChib2FyZC53aWR0aCAvIDIpIC0gMTI1LCBib2FyZC5oZWlnaHQgLSAxNSwgMTAwLCAzMCwgYm9hcmQuZ2V0UG9pbnRzKCkuWCwgJ1gnLCAnc2NvcmUnLCBvcHQpLFxyXG4gICAgICAgIG5ldyBCdXR0b24oKGJvYXJkLndpZHRoIC8gMikgKyAxMjUsIGJvYXJkLmhlaWdodCAtIDE1LCAxMDAsIDMwLCBib2FyZC5nZXRQb2ludHMoKS5PLCAnTycsICdzY29yZScsIG9wdClcclxuICAgICk7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBjcmVhdGVFbmRHYW1lQnV0dG9ucyhzY29yZSkge1xyXG4gICAgbGV0IHR4dCA9ICcnO1xyXG4gICAgICAgIGlmIChzY29yZSA9PT0gJ3RpZScpIHtcclxuICAgICAgICAgICAgdHh0ID0gJ0l0cyBhIHRpZSc7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICB0eHQgPSBgJHtzY29yZX0gV2lucyFgXHJcbiAgICAgICAgfVxyXG4gICAgbGV0IG9wdGlvbnMgPSB7IGZvbnQ6ICdib2xkIDEuMnJlbSBzYW5zLXNlcmlmJyB9O1xyXG4gICAgYm9hcmQuYnV0dG9ucy5wdXNoKG5ldyBCdXR0b24oYm9hcmQud2lkdGggLyAyLCBib2FyZC5oZWlnaHQgLyAyLCAzMDAsIDEwMCwgdHh0LCAnZW5kMScsICdlbmQnKSk7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBjcmVhdGVDZWxsQnV0dG9ucygpIHtcclxuICAgIGxldCBoID0gYm9hcmQuaCAqIDAuOTtcclxuICAgIGxldCBoZ2FwID0gYm9hcmQuaGVpZ2h0ICogMC4xXHJcbiAgICBsZXQgdyA9IGJvYXJkLnc7XHJcbiAgICBsZXQgb3B0ID0ge1xyXG4gICAgICAgIGJnYzogJ3JnYmEoNDIsIDIwNCwgMjMyLCAwLjMpJ1xyXG4gICAgfVxyXG5cclxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgYm9hcmQuZ2FtZS5yb3c7IGkrKykge1xyXG4gICAgICAgIGZvciAobGV0IGogPSAwOyBqIDwgYm9hcmQuZ2FtZS5jb2w7IGorKykge1xyXG4gICAgICAgICAgICAvLyBjcmVhdGVDZWxsQnV0dG9ucygpO1xyXG4gICAgICAgICAgICBib2FyZC5idXR0b25zLnB1c2gobmV3IENlbGwoKGkgKiB3KSwgKGogKiBoKSArIGhnYXAsIHcsIGgsICcnLCBpICsgaiwgJ2NlbGwnLCBvcHQsIGksIGopKVxyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG4iLCJpbXBvcnQgJy4vc3R5bGUuY3NzJztcclxuaW1wb3J0IHsgQm9hcmQgfSBmcm9tICcuL0JvYXJkJztcclxuaW1wb3J0IHsgTW92ZSB9IGZyb20gJy4vTW92ZSc7XHJcbmltcG9ydCB7IGNyZWF0ZU1lbnVCdXR0b25zLCBjcmVhdGVHYW1lQnV0dG9ucywgY3JlYXRlQ2VsbEJ1dHRvbnMsIGNyZWF0ZUVuZEdhbWVCdXR0b25zIH0gZnJvbSAnLi9idXR0b25zJ1xyXG5pbXBvcnQgeyBiZXN0TW92ZSB9IGZyb20gJy4vbWluaW1heCc7XHJcblxyXG5leHBvcnQgbGV0IGJvYXJkO1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIHJlc2V0Qm9hcmRPYmooKSB7XHJcbiAgICBib2FyZCA9IG5ldyBCb2FyZCgpO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gbmV3R2FtZSgpIHtcclxuICAgIGJvYXJkLmluaXQoKTtcclxuICAgIGJvYXJkLm1vdmVzID0gW25ldyBNb3ZlKDApXTtcclxuICAgIGNyZWF0ZUdhbWVCdXR0b25zKCk7XHJcbiAgICBjcmVhdGVDZWxsQnV0dG9ucygpO1xyXG4gICAgaWYgKGxvY2FsU3RvcmFnZS5sZW5ndGggPT0gMCkge1xyXG4gICAgICAgIGJvYXJkLnJlc2V0UG9pbnRzKCk7XHJcbiAgICB9XHJcbiAgICBib2FyZC5wb2ludHMgPSBib2FyZC5nZXRQb2ludHMoKTtcclxuICAgIC8vIGJlc3RNb3ZlKCk7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBsb29wKCkge1xyXG4gICAgbGV0IGwgPSBzZXRJbnRlcnZhbChmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgZm9yIChsZXQgbSBpbiBib2FyZC5tb3Zlcykge1xyXG4gICAgICAgICAgICBib2FyZC5tb3Zlc1ttXS5zaG93KCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmIChib2FyZC5ib2FyZEFycikge1xyXG4gICAgICAgICAgICBsZXQgd2lubmVyID0gYm9hcmQuY2hlY2tXaW4oKTtcclxuICAgICAgICAgICAgaWYgKHdpbm5lcikge1xyXG4gICAgICAgICAgICAgICAgYm9hcmQuZW5kR2FtZSh3aW5uZXIpO1xyXG4gICAgICAgICAgICAgICAgYm9hcmQucmVtb3ZlQ2VsbHMoKTtcclxuICAgICAgICAgICAgICAgIGNyZWF0ZUVuZEdhbWVCdXR0b25zKHdpbm5lcik7XHJcbiAgICAgICAgICAgICAgICBjbGVhckludGVydmFsKGwpXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKGJvYXJkLmJ1dHRvbnMpIHtcclxuICAgICAgICAgICAgZm9yIChsZXQgbSBpbiBib2FyZC5idXR0b25zKSB7XHJcbiAgICAgICAgICAgICAgICBib2FyZC5idXR0b25zW21dLnNob3coKTtcclxuXHJcbiAgICAgICAgICAgICAgICBpZiAoYm9hcmQuYnV0dG9uc1ttXS5jID09PSAnc2NvcmUnKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgbGV0IGlkID0gYm9hcmQuYnV0dG9uc1ttXS5pZDtcclxuICAgICAgICAgICAgICAgICAgICBib2FyZC5idXR0b25zW21dLnR4dCA9IGJvYXJkLmdldFBvaW50cygpW2lkXTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH0sIDUwKTtcclxufVxyXG5cclxud2luZG93Lm9ubG9hZCA9IGZ1bmN0aW9uICgpIHtcclxuICAgIHJlc2V0Qm9hcmRPYmooKTtcclxuICAgIC8vIHNldENhbnZhc1NpemUoKTtcclxuICAgIGJvYXJkLmdldENhbnZhcygpO1xyXG4gICAgLy8gYm9hcmQuZ2V0U2l6ZSgpO1xyXG4gICAgLy8gYm9hcmQuY2FudmFzU2l6ZSgpO1xyXG4gICAgLy8gYm9hcmQuc2V0QXJyYXlzKCk7XHJcbiAgICBib2FyZC5zZXRMaXN0ZW5lcigpOyAgICBcclxuICAgIGNyZWF0ZU1lbnVCdXR0b25zKCk7XHJcbiAgICBsb29wKCk7XHJcbn07IiwiLy8gVGljIFRhYyBUb2UgQUkgd2l0aCBNaW5pbWF4IEFsZ29yaXRobVxyXG4vLyBUaGUgQ29kaW5nIFRyYWluIC8gRGFuaWVsIFNoaWZmbWFuXHJcbi8vIGh0dHBzOi8vdGhlY29kaW5ndHJhaW4uY29tL0NvZGluZ0NoYWxsZW5nZXMvMTU0LXRpYy10YWMtdG9lLW1pbmltYXguaHRtbFxyXG4vLyBodHRwczovL3lvdXR1LmJlL0k2NC1VVE9SVmZVXHJcbi8vIGh0dHBzOi8vZWRpdG9yLnA1anMub3JnL2NvZGluZ3RyYWluL3NrZXRjaGVzLzB6eVVoWmRKRFxyXG5pbXBvcnQgeyBib2FyZCB9IGZyb20gJy4vbWFpbic7XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gYmVzdE1vdmUoKSB7XHJcbiAgLy8gQUkgdG8gbWFrZSBpdHMgdHVyblxyXG4gIGxldCBiZXN0U2NvcmUgPSAtSW5maW5pdHk7XHJcbiAgbGV0IG1vdmU7XHJcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCAzOyBpKyspIHtcclxuICAgIGZvciAobGV0IGogPSAwOyBqIDwgMzsgaisrKSB7XHJcbiAgICAgIC8vIElzIHRoZSBzcG90IGF2YWlsYWJsZT9cclxuICAgICAgaWYgKGJvYXJkLmJvYXJkQXJyW2pdW2ldID09ICcnKSB7XHJcbiAgICAgICAgYm9hcmQuYm9hcmRBcnJbal1baV0gPSBib2FyZC5wbGF5ZXJzWzBdO1xyXG4gICAgICAgIGxldCBzY29yZSA9IG1pbmltYXgoYm9hcmQuYm9hcmRBcnIsIDAsIGZhbHNlKTtcclxuICAgICAgICBib2FyZC5ib2FyZEFycltqXVtpXSA9ICcnO1xyXG4gICAgICAgIGlmIChzY29yZSA+IGJlc3RTY29yZSkge1xyXG4gICAgICAgICAgYmVzdFNjb3JlID0gc2NvcmU7XHJcbiAgICAgICAgICBtb3ZlID0geyBpLCBqIH07XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG4gIGxldCBpbmRleCA9IGJvYXJkLm1vdmVzLmxlbmd0aCAtIDFcclxuICBpZiAoIWJvYXJkLm1vdmVzW2luZGV4XS5kb25lKSB7XHJcbiAgICBib2FyZC5tb3Zlc1tpbmRleF0ucGxheShtb3ZlLmksIG1vdmUuaik7XHJcbiAgfVxyXG59XHJcblxyXG5sZXQgc2NvcmVzID0ge1xyXG4gIFg6IDEwLFxyXG4gIE86IC0xMCxcclxuICB0aWU6IDBcclxufTtcclxuXHJcbmZ1bmN0aW9uIG1pbmltYXgobW54Qm9hcmQsIGRlcHRoLCBpc01heGltaXppbmcpIHtcclxuICBsZXQgcmVzdWx0ID0gYm9hcmQuY2hlY2tXaW4oKTtcclxuICBpZiAocmVzdWx0ICE9PSBudWxsKSB7XHJcbiAgICByZXR1cm4gc2NvcmVzW3Jlc3VsdF07XHJcbiAgfVxyXG5cclxuICBpZiAoaXNNYXhpbWl6aW5nKSB7XHJcbiAgICBsZXQgYmVzdFNjb3JlID0gLUluZmluaXR5O1xyXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCAzOyBpKyspIHtcclxuICAgICAgZm9yIChsZXQgaiA9IDA7IGogPCAzOyBqKyspIHtcclxuICAgICAgICAvLyBJcyB0aGUgc3BvdCBhdmFpbGFibGU/XHJcbiAgICAgICAgaWYgKG1ueEJvYXJkW2pdW2ldID09ICcnKSB7XHJcbiAgICAgICAgICBtbnhCb2FyZFtqXVtpXSA9IGJvYXJkLnBsYXllcnNbMF07XHJcbiAgICAgICAgICBsZXQgc2NvcmUgPSBtaW5pbWF4KG1ueEJvYXJkLCBkZXB0aCArIDEsIGZhbHNlKTtcclxuICAgICAgICAgIG1ueEJvYXJkW2pdW2ldID0gJyc7XHJcbiAgICAgICAgICBiZXN0U2NvcmUgPSBNYXRoLm1heChzY29yZSwgYmVzdFNjb3JlKTtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIHJldHVybiBiZXN0U2NvcmU7XHJcbiAgfSBlbHNlIHtcclxuICAgIGxldCBiZXN0U2NvcmUgPSBJbmZpbml0eTtcclxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgMzsgaSsrKSB7XHJcbiAgICAgIGZvciAobGV0IGogPSAwOyBqIDwgMzsgaisrKSB7XHJcbiAgICAgICAgLy8gSXMgdGhlIHNwb3QgYXZhaWxhYmxlP1xyXG4gICAgICAgIGlmIChtbnhCb2FyZFtqXVtpXSA9PSAnJykge1xyXG4gICAgICAgICAgbW54Qm9hcmRbal1baV0gPSBib2FyZC5wbGF5ZXJzWzFdO1xyXG4gICAgICAgICAgbGV0IHNjb3JlID0gbWluaW1heChtbnhCb2FyZCwgZGVwdGggKyAxLCB0cnVlKTtcclxuICAgICAgICAgIG1ueEJvYXJkW2pdW2ldID0gJyc7XHJcbiAgICAgICAgICBiZXN0U2NvcmUgPSBNYXRoLm1pbihzY29yZSwgYmVzdFNjb3JlKTtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIHJldHVybiBiZXN0U2NvcmU7XHJcbiAgfVxyXG59XHJcbiIsInZhciBhcGkgPSByZXF1aXJlKFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiKTtcbiAgICAgICAgICAgIHZhciBjb250ZW50ID0gcmVxdWlyZShcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIik7XG5cbiAgICAgICAgICAgIGNvbnRlbnQgPSBjb250ZW50Ll9fZXNNb2R1bGUgPyBjb250ZW50LmRlZmF1bHQgOiBjb250ZW50O1xuXG4gICAgICAgICAgICBpZiAodHlwZW9mIGNvbnRlbnQgPT09ICdzdHJpbmcnKSB7XG4gICAgICAgICAgICAgIGNvbnRlbnQgPSBbW21vZHVsZS5pZCwgY29udGVudCwgJyddXTtcbiAgICAgICAgICAgIH1cblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5pbnNlcnQgPSBcImhlYWRcIjtcbm9wdGlvbnMuc2luZ2xldG9uID0gZmFsc2U7XG5cbnZhciB1cGRhdGUgPSBhcGkoY29udGVudCwgb3B0aW9ucyk7XG5cbnZhciBleHBvcnRlZCA9IGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB7fTtcblxuXG5cbm1vZHVsZS5leHBvcnRzID0gZXhwb3J0ZWQ7Il0sInNvdXJjZVJvb3QiOiIifQ==