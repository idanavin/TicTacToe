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
/* harmony import */ var _Move__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Move */ "./src/Move.js");
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
      this.moves = [new _Move__WEBPACK_IMPORTED_MODULE_0__["Move"](0)];
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
/* harmony import */ var _minimax__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./minimax */ "./src/minimax.js");
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
        if (_main__WEBPACK_IMPORTED_MODULE_1__["board"].checkWin()) {
          Object(_main__WEBPACK_IMPORTED_MODULE_1__["loop"])();
        }

        _main__WEBPACK_IMPORTED_MODULE_1__["board"].setArrays();
        Object(_main__WEBPACK_IMPORTED_MODULE_1__["newGame"])();

        if (_main__WEBPACK_IMPORTED_MODULE_1__["board"].game.row === 3) {
          Object(_minimax__WEBPACK_IMPORTED_MODULE_3__["bestMove"])();
        }
      }

      if (this.id === 'tic') {
        _main__WEBPACK_IMPORTED_MODULE_1__["board"].getGame(3, 3);
        _main__WEBPACK_IMPORTED_MODULE_1__["board"].setArrays();
        Object(_main__WEBPACK_IMPORTED_MODULE_1__["newGame"])();
        Object(_minimax__WEBPACK_IMPORTED_MODULE_3__["bestMove"])();
      }

      if (this.id === 'four') {
        _main__WEBPACK_IMPORTED_MODULE_1__["board"].getGame(7, 7);
        _main__WEBPACK_IMPORTED_MODULE_1__["board"].setArrays();
        Object(_main__WEBPACK_IMPORTED_MODULE_1__["newGame"])();
      }

      if (this.id === 'menu') {
        Object(_main__WEBPACK_IMPORTED_MODULE_1__["resetBoardObj"])();
        _main__WEBPACK_IMPORTED_MODULE_1__["board"].getCanvas();
        _main__WEBPACK_IMPORTED_MODULE_1__["board"].setListener();
        Object(_buttons__WEBPACK_IMPORTED_MODULE_2__["createMenuButtons"])();

        if (_main__WEBPACK_IMPORTED_MODULE_1__["board"].checkWin()) {
          Object(_main__WEBPACK_IMPORTED_MODULE_1__["loop"])();
        }
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
      _main__WEBPACK_IMPORTED_MODULE_0__["board"].moves.push(new Move(1 - this.active));

      if (this.active && _main__WEBPACK_IMPORTED_MODULE_0__["board"].game.row === 3) {
        Object(_minimax__WEBPACK_IMPORTED_MODULE_1__["bestMove"])();
      }
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
  var opt2 = {
    font: '1rem sans-serif',
    bgc: 'aqua',
    color: 'black'
  };
  _main__WEBPACK_IMPORTED_MODULE_2__["board"].buttons.push(new _Button__WEBPACK_IMPORTED_MODULE_0__["Button"](55, 15, 110, 30, '', 'turn', 'turn', opt2));
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
  board.init(); // board.moves = [new Move(0)];

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
        var button = board.buttons[_m];
        button.show();

        if (button.c === 'score') {
          var id = button.id;
          button.txt = board.getPoints()[id];
        }

        if (button.c === 'turn') {
          var preTxt = 'Turn: ';

          if (board.moves) {
            var move = board.moves[board.moves.length - 1];
            var turn = move.players[move.active];
            button.txt = preTxt + turn;
          }
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL3N0eWxlLmNzcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvQm9hcmQuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL0J1dHRvbi5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvQ2VsbC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvTW92ZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvYnV0dG9ucy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvbWFpbi5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvbWluaW1heC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc3R5bGUuY3NzPzcxNjMiXSwibmFtZXMiOlsiQm9hcmQiLCJjb2xvcnMiLCJwbGF5ZXJzIiwiY2FudiIsImRvY3VtZW50IiwicXVlcnlTZWxlY3RvciIsImN0eCIsImdldENvbnRleHQiLCJjYW52YXNTaXplIiwid2lkdGgiLCJjbGllbnRXaWR0aCIsImhlaWdodCIsImNsaWVudEhlaWdodCIsInlnYXAiLCJ3IiwiaCIsInNldEFycmF5cyIsIm1vdmVzIiwiTW92ZSIsImJ1dHRvbnMiLCJwb2ludHMiLCJYIiwiTyIsImFkZEV2ZW50TGlzdGVuZXIiLCJlIiwiYiIsImNhbnZhc0NsaWNrIiwiYm9hcmRBcnIiLCJpIiwiZ2FtZSIsInJvdyIsImoiLCJjb2wiLCJjbGVhclJlY3QiLCJsIiwiYXJyIiwibGVuZ3RoIiwid2lubmVyIiwid2luQ29uZGl0aW9uIiwidG9DaGVjayIsImsiLCJwdXNoIiwidCIsImNoZWNrRXF1YWxzIiwic2NvcmUiLCJwcmV2IiwiZ2V0UG9pbnRzIiwic2V0UG9pbnRzIiwiZmlsdGVyIiwidiIsImMiLCJlbmRUZXh0IiwiY3JlYXRlRW5kR2FtZUJ1dHRvbnMiLCJOdW1iZXIiLCJsb2NhbFN0b3JhZ2UiLCJnZXRJdGVtIiwicHJldlMiLCJzIiwic2V0SXRlbSIsImNsZWFyIiwiQnV0dG9uIiwieCIsInkiLCJ0eHQiLCJpZCIsIm9wdCIsIm9wYWNpdHkiLCJjZW50ZXIiLCJhbmltYXRlIiwibW91c2V4Iiwib2Zmc2V0WCIsIm1vdXNleSIsIm9mZnNldFkiLCJhY3QiLCJmcm9tIiwiZW5kVmFsIiwib3AiLCJzZXRUaW1lb3V0IiwiYm9hcmQiLCJjaGVja1dpbiIsImxvb3AiLCJuZXdHYW1lIiwiYmVzdE1vdmUiLCJnZXRHYW1lIiwicmVzZXRCb2FyZE9iaiIsImdldENhbnZhcyIsInNldExpc3RlbmVyIiwiY3JlYXRlTWVudUJ1dHRvbnMiLCJyZXNldFBvaW50cyIsIkluZGV4IiwiZG9uZSIsImdldE1vdXNlSW5kZXgiLCJ0cmFuc2xhdGUiLCJnbG9iYWxBbHBoYSIsInRleHRBbGlnbiIsInRleHRCYXNlbGluZSIsImZvbnQiLCJmaWxsU3R5bGUiLCJiZ2MiLCJmaWxsUmVjdCIsImNvbG9yIiwiZmlsbFRleHQiLCJDZWxsIiwiaW5kZXgiLCJwbGF5Iiwic3Ryb2tlUmVjdCIsImFjdGl2ZSIsIm5leHRUdXJuIiwiZm91ckluQVJvdyIsIm1heCIsImhnYXAiLCJoMSIsInRpYyIsImZvdXIiLCJvcHQyIiwicmF0ZSIsImNyZWF0ZUdhbWVCdXR0b25zIiwib3B0aW9ucyIsImNyZWF0ZUNlbGxCdXR0b25zIiwiaW5pdCIsInNldEludGVydmFsIiwibSIsInNob3ciLCJlbmRHYW1lIiwicmVtb3ZlQ2VsbHMiLCJjbGVhckludGVydmFsIiwiYnV0dG9uIiwicHJlVHh0IiwibW92ZSIsInR1cm4iLCJ3aW5kb3ciLCJvbmxvYWQiLCJiZXN0U2NvcmUiLCJJbmZpbml0eSIsIm1pbmltYXgiLCJzY29yZXMiLCJ0aWUiLCJtbnhCb2FyZCIsImRlcHRoIiwiaXNNYXhpbWl6aW5nIiwicmVzdWx0IiwiTWF0aCIsIm1p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MEIiLCJmaWxlIjoibWFpbi5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vc3JjL21haW4uanNcIik7XG4iLCIvLyBJbXBvcnRzXG52YXIgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fID0gcmVxdWlyZShcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIik7XG5leHBvcnRzID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKGZhbHNlKTtcbi8vIE1vZHVsZVxuZXhwb3J0cy5wdXNoKFttb2R1bGUuaWQsIFwiKiB7XFxyXFxuICAgIG1hcmdpbjogMDtcXHJcXG4gICAgcGFkZGluZzogMDtcXHJcXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXHJcXG59XFxyXFxuXFxyXFxuYm9keSB7XFxyXFxuICAgIHdpZHRoOiAxMDAlO1xcclxcbiAgICBoZWlnaHQ6IDEwMHZoO1xcclxcbn1cXHJcXG5cXHJcXG5oZWFkZXIge1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBoZWlnaHQ6IDEwJTtcXHJcXG4gICAgd2lkdGg6IDEwMCU7XFxyXFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxufVxcclxcblxcclxcbm1haW4ge1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWV2ZW5seTtcXHJcXG4gICAgaGVpZ2h0OiA5MCU7XFxyXFxufVxcclxcblxcclxcbnNwYW4ge1xcclxcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxufVxcclxcbmNhbnZhcyB7XFxyXFxuICAgIHdpZHRoOiAxMDAlO1xcclxcbiAgICBoZWlnaHQ6IDEwMCU7XFxyXFxuICAgIG1heC13aWR0aDogNjAwcHg7XFxyXFxuICAgIG1heC1oZWlnaHQ6IDYwMHB4O1xcclxcbn1cIiwgXCJcIl0pO1xuLy8gRXhwb3J0c1xubW9kdWxlLmV4cG9ydHMgPSBleHBvcnRzO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG4vLyBjc3MgYmFzZSBjb2RlLCBpbmplY3RlZCBieSB0aGUgY3NzLWxvYWRlclxuLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGZ1bmMtbmFtZXNcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKHVzZVNvdXJjZU1hcCkge1xuICB2YXIgbGlzdCA9IFtdOyAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG5cbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0sIHVzZVNvdXJjZU1hcCk7XG5cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIHJldHVybiBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoY29udGVudCwgXCJ9XCIpO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKCcnKTtcbiAgfTsgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGZ1bmMtbmFtZXNcblxuXG4gIGxpc3QuaSA9IGZ1bmN0aW9uIChtb2R1bGVzLCBtZWRpYVF1ZXJ5LCBkZWR1cGUpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09ICdzdHJpbmcnKSB7XG4gICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tcGFyYW0tcmVhc3NpZ25cbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsICcnXV07XG4gICAgfVxuXG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcblxuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdGhpcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgcHJlZmVyLWRlc3RydWN0dXJpbmdcbiAgICAgICAgdmFyIGlkID0gdGhpc1tpXVswXTtcblxuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBtb2R1bGVzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfaV0pO1xuXG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLWNvbnRpbnVlXG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuXG4gICAgICBpZiAobWVkaWFRdWVyeSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWFRdWVyeTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzJdID0gXCJcIi5jb25jYXQobWVkaWFRdWVyeSwgXCIgYW5kIFwiKS5jb25jYXQoaXRlbVsyXSk7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gbGlzdDtcbn07XG5cbmZ1bmN0aW9uIGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSwgdXNlU291cmNlTWFwKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXSB8fCAnJzsgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIHByZWZlci1kZXN0cnVjdHVyaW5nXG5cbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuXG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG5cbiAgaWYgKHVzZVNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSA9PT0gJ2Z1bmN0aW9uJykge1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gdG9Db21tZW50KGNzc01hcHBpbmcpO1xuICAgIHZhciBzb3VyY2VVUkxzID0gY3NzTWFwcGluZy5zb3VyY2VzLm1hcChmdW5jdGlvbiAoc291cmNlKSB7XG4gICAgICByZXR1cm4gXCIvKiMgc291cmNlVVJMPVwiLmNvbmNhdChjc3NNYXBwaW5nLnNvdXJjZVJvb3QgfHwgJycpLmNvbmNhdChzb3VyY2UsIFwiICovXCIpO1xuICAgIH0pO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KHNvdXJjZVVSTHMpLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oJ1xcbicpO1xuICB9XG5cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKCdcXG4nKTtcbn0gLy8gQWRhcHRlZCBmcm9tIGNvbnZlcnQtc291cmNlLW1hcCAoTUlUKVxuXG5cbmZ1bmN0aW9uIHRvQ29tbWVudChzb3VyY2VNYXApIHtcbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXVuZGVmXG4gIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpO1xuICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gIHJldHVybiBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG59IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBpc09sZElFID0gZnVuY3Rpb24gaXNPbGRJRSgpIHtcbiAgdmFyIG1lbW87XG4gIHJldHVybiBmdW5jdGlvbiBtZW1vcml6ZSgpIHtcbiAgICBpZiAodHlwZW9mIG1lbW8gPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAvLyBUZXN0IGZvciBJRSA8PSA5IGFzIHByb3Bvc2VkIGJ5IEJyb3dzZXJoYWNrc1xuICAgICAgLy8gQHNlZSBodHRwOi8vYnJvd3NlcmhhY2tzLmNvbS8jaGFjay1lNzFkODY5MmY2NTMzNDE3M2ZlZTcxNWMyMjJjYjgwNVxuICAgICAgLy8gVGVzdHMgZm9yIGV4aXN0ZW5jZSBvZiBzdGFuZGFyZCBnbG9iYWxzIGlzIHRvIGFsbG93IHN0eWxlLWxvYWRlclxuICAgICAgLy8gdG8gb3BlcmF0ZSBjb3JyZWN0bHkgaW50byBub24tc3RhbmRhcmQgZW52aXJvbm1lbnRzXG4gICAgICAvLyBAc2VlIGh0dHBzOi8vZ2l0aHViLmNvbS93ZWJwYWNrLWNvbnRyaWIvc3R5bGUtbG9hZGVyL2lzc3Vlcy8xNzdcbiAgICAgIG1lbW8gPSBCb29sZWFuKHdpbmRvdyAmJiBkb2N1bWVudCAmJiBkb2N1bWVudC5hbGwgJiYgIXdpbmRvdy5hdG9iKTtcbiAgICB9XG5cbiAgICByZXR1cm4gbWVtbztcbiAgfTtcbn0oKTtcblxudmFyIGdldFRhcmdldCA9IGZ1bmN0aW9uIGdldFRhcmdldCgpIHtcbiAgdmFyIG1lbW8gPSB7fTtcbiAgcmV0dXJuIGZ1bmN0aW9uIG1lbW9yaXplKHRhcmdldCkge1xuICAgIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSAndW5kZWZpbmVkJykge1xuICAgICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpOyAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuXG4gICAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgICB9XG5cbiAgICByZXR1cm4gbWVtb1t0YXJnZXRdO1xuICB9O1xufSgpO1xuXG52YXIgc3R5bGVzSW5Eb20gPSBbXTtcblxuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRvbS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRvbVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdXG4gICAgfTtcblxuICAgIGlmIChpbmRleCAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRG9tW2luZGV4XS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRvbVtpbmRleF0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBzdHlsZXNJbkRvbS5wdXNoKHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogYWRkU3R5bGUob2JqLCBvcHRpb25zKSxcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuXG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cblxuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIHN0eWxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3R5bGUnKTtcbiAgdmFyIGF0dHJpYnV0ZXMgPSBvcHRpb25zLmF0dHJpYnV0ZXMgfHwge307XG5cbiAgaWYgKHR5cGVvZiBhdHRyaWJ1dGVzLm5vbmNlID09PSAndW5kZWZpbmVkJykge1xuICAgIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gJ3VuZGVmaW5lZCcgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG5cbiAgICBpZiAobm9uY2UpIHtcbiAgICAgIGF0dHJpYnV0ZXMubm9uY2UgPSBub25jZTtcbiAgICB9XG4gIH1cblxuICBPYmplY3Qua2V5cyhhdHRyaWJ1dGVzKS5mb3JFYWNoKGZ1bmN0aW9uIChrZXkpIHtcbiAgICBzdHlsZS5zZXRBdHRyaWJ1dGUoa2V5LCBhdHRyaWJ1dGVzW2tleV0pO1xuICB9KTtcblxuICBpZiAodHlwZW9mIG9wdGlvbnMuaW5zZXJ0ID09PSAnZnVuY3Rpb24nKSB7XG4gICAgb3B0aW9ucy5pbnNlcnQoc3R5bGUpO1xuICB9IGVsc2Uge1xuICAgIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQob3B0aW9ucy5pbnNlcnQgfHwgJ2hlYWQnKTtcblxuICAgIGlmICghdGFyZ2V0KSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICAgIH1cblxuICAgIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG4gIH1cblxuICByZXR1cm4gc3R5bGU7XG59XG5cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZSkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlLnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBzdHlsZS5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlKTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbnZhciByZXBsYWNlVGV4dCA9IGZ1bmN0aW9uIHJlcGxhY2VUZXh0KCkge1xuICB2YXIgdGV4dFN0b3JlID0gW107XG4gIHJldHVybiBmdW5jdGlvbiByZXBsYWNlKGluZGV4LCByZXBsYWNlbWVudCkge1xuICAgIHRleHRTdG9yZVtpbmRleF0gPSByZXBsYWNlbWVudDtcbiAgICByZXR1cm4gdGV4dFN0b3JlLmZpbHRlcihCb29sZWFuKS5qb2luKCdcXG4nKTtcbiAgfTtcbn0oKTtcblxuZnVuY3Rpb24gYXBwbHlUb1NpbmdsZXRvblRhZyhzdHlsZSwgaW5kZXgsIHJlbW92ZSwgb2JqKSB7XG4gIHZhciBjc3MgPSByZW1vdmUgPyAnJyA6IG9iai5tZWRpYSA/IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIikuY29uY2F0KG9iai5jc3MsIFwifVwiKSA6IG9iai5jc3M7IC8vIEZvciBvbGQgSUVcblxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG5cbiAgaWYgKHN0eWxlLnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZS5zdHlsZVNoZWV0LmNzc1RleHQgPSByZXBsYWNlVGV4dChpbmRleCwgY3NzKTtcbiAgfSBlbHNlIHtcbiAgICB2YXIgY3NzTm9kZSA9IGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcyk7XG4gICAgdmFyIGNoaWxkTm9kZXMgPSBzdHlsZS5jaGlsZE5vZGVzO1xuXG4gICAgaWYgKGNoaWxkTm9kZXNbaW5kZXhdKSB7XG4gICAgICBzdHlsZS5yZW1vdmVDaGlsZChjaGlsZE5vZGVzW2luZGV4XSk7XG4gICAgfVxuXG4gICAgaWYgKGNoaWxkTm9kZXMubGVuZ3RoKSB7XG4gICAgICBzdHlsZS5pbnNlcnRCZWZvcmUoY3NzTm9kZSwgY2hpbGROb2Rlc1tpbmRleF0pO1xuICAgIH0gZWxzZSB7XG4gICAgICBzdHlsZS5hcHBlbmRDaGlsZChjc3NOb2RlKTtcbiAgICB9XG4gIH1cbn1cblxuZnVuY3Rpb24gYXBwbHlUb1RhZyhzdHlsZSwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBvYmouY3NzO1xuICB2YXIgbWVkaWEgPSBvYmoubWVkaWE7XG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuXG4gIGlmIChtZWRpYSkge1xuICAgIHN0eWxlLnNldEF0dHJpYnV0ZSgnbWVkaWEnLCBtZWRpYSk7XG4gIH0gZWxzZSB7XG4gICAgc3R5bGUucmVtb3ZlQXR0cmlidXRlKCdtZWRpYScpO1xuICB9XG5cbiAgaWYgKHNvdXJjZU1hcCAmJiBidG9hKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH0gLy8gRm9yIG9sZCBJRVxuXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cblxuXG4gIGlmIChzdHlsZS5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGUuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZS5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZS5yZW1vdmVDaGlsZChzdHlsZS5maXJzdENoaWxkKTtcbiAgICB9XG5cbiAgICBzdHlsZS5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxuXG52YXIgc2luZ2xldG9uID0gbnVsbDtcbnZhciBzaW5nbGV0b25Db3VudGVyID0gMDtcblxuZnVuY3Rpb24gYWRkU3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBzdHlsZTtcbiAgdmFyIHVwZGF0ZTtcbiAgdmFyIHJlbW92ZTtcblxuICBpZiAob3B0aW9ucy5zaW5nbGV0b24pIHtcbiAgICB2YXIgc3R5bGVJbmRleCA9IHNpbmdsZXRvbkNvdW50ZXIrKztcbiAgICBzdHlsZSA9IHNpbmdsZXRvbiB8fCAoc2luZ2xldG9uID0gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpKTtcbiAgICB1cGRhdGUgPSBhcHBseVRvU2luZ2xldG9uVGFnLmJpbmQobnVsbCwgc3R5bGUsIHN0eWxlSW5kZXgsIGZhbHNlKTtcbiAgICByZW1vdmUgPSBhcHBseVRvU2luZ2xldG9uVGFnLmJpbmQobnVsbCwgc3R5bGUsIHN0eWxlSW5kZXgsIHRydWUpO1xuICB9IGVsc2Uge1xuICAgIHN0eWxlID0gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICAgIHVwZGF0ZSA9IGFwcGx5VG9UYWcuYmluZChudWxsLCBzdHlsZSwgb3B0aW9ucyk7XG5cbiAgICByZW1vdmUgPSBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGUpO1xuICAgIH07XG4gIH1cblxuICB1cGRhdGUob2JqKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZVN0eWxlKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXApIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICB1cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgcmVtb3ZlKCk7XG4gICAgfVxuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9OyAvLyBGb3JjZSBzaW5nbGUtdGFnIHNvbHV0aW9uIG9uIElFNi05LCB3aGljaCBoYXMgYSBoYXJkIGxpbWl0IG9uIHRoZSAjIG9mIDxzdHlsZT5cbiAgLy8gdGFncyBpdCB3aWxsIGFsbG93IG9uIGEgcGFnZVxuXG4gIGlmICghb3B0aW9ucy5zaW5nbGV0b24gJiYgdHlwZW9mIG9wdGlvbnMuc2luZ2xldG9uICE9PSAnYm9vbGVhbicpIHtcbiAgICBvcHRpb25zLnNpbmdsZXRvbiA9IGlzT2xkSUUoKTtcbiAgfVxuXG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcblxuICAgIGlmIChPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwobmV3TGlzdCkgIT09ICdbb2JqZWN0IEFycmF5XScpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRG9tW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuXG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcblxuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuXG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuXG4gICAgICBpZiAoc3R5bGVzSW5Eb21bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRG9tW19pbmRleF0udXBkYXRlcigpO1xuXG4gICAgICAgIHN0eWxlc0luRG9tLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiaW1wb3J0IHsgTW92ZSB9IGZyb20gXCIuL01vdmVcIjtcclxuXHJcbmV4cG9ydCBjbGFzcyBCb2FyZCB7XHJcbiAgICBjb25zdHJ1Y3RvcigpIHtcclxuICAgICAgICB0aGlzLmNvbG9ycyA9IFsnZ3JlZW4nLCAncGluayddO1xyXG4gICAgICAgIHRoaXMucGxheWVycyA9IFsnWCcsICdPJ107XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0Q2FudmFzKCkge1xyXG4gICAgICAgIHRoaXMuY2FudiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJjYW52YXNcIik7XHJcbiAgICAgICAgdGhpcy5jdHggPSB0aGlzLmNhbnYuZ2V0Q29udGV4dCgnMmQnKTtcclxuICAgICAgICB0aGlzLmNhbnZhc1NpemUoKTtcclxuICAgIH1cclxuXHJcbiAgICBjYW52YXNTaXplKCkge1xyXG4gICAgICAgIHRoaXMuY2Fudi53aWR0aCA9IHRoaXMuY2Fudi5jbGllbnRXaWR0aDtcclxuICAgICAgICB0aGlzLmNhbnYuaGVpZ2h0ID0gdGhpcy5jYW52LmNsaWVudEhlaWdodDtcclxuICAgICAgICB0aGlzLndpZHRoID0gdGhpcy5jYW52LndpZHRoO1xyXG4gICAgICAgIHRoaXMuaGVpZ2h0ID0gdGhpcy5jYW52LmhlaWdodDtcclxuICAgICAgICB0aGlzLnlnYXAgPSB0aGlzLmhlaWdodCAqIDAuMTtcclxuICAgICAgICB0aGlzLncgPSB0aGlzLndpZHRoIC8gMjtcclxuICAgICAgICB0aGlzLmggPSB0aGlzLmhlaWdodCAvIDI7XHJcbiAgICAgICAgdGhpcy5zZXRBcnJheXMoKTtcclxuICAgIH1cclxuXHJcbiAgICBzZXRBcnJheXMoKSB7XHJcbiAgICAgICAgdGhpcy5tb3ZlcyA9IFtuZXcgTW92ZSgwKV07XHJcbiAgICAgICAgdGhpcy5idXR0b25zID0gW107XHJcbiAgICAgICAgdGhpcy5wb2ludHMgPSB7IFg6IDAsIE86IDAgfTtcclxuICAgIH1cclxuXHJcbiAgICBzZXRMaXN0ZW5lcigpIHtcclxuICAgICAgICB0aGlzLmNhbnYuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xyXG4gICAgICAgICAgICBmb3IgKGxldCBiIGluIHRoaXMuYnV0dG9ucykge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5idXR0b25zW2JdLmNhbnZhc0NsaWNrKGUpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgaW5pdCgpIHtcclxuICAgICAgICB0aGlzLmJvYXJkQXJyID0gW107XHJcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLmdhbWUucm93OyBpKyspIHtcclxuICAgICAgICAgICAgdGhpcy5ib2FyZEFycltpXSA9IFtdO1xyXG4gICAgICAgICAgICBmb3IgKGxldCBqID0gMDsgaiA8IHRoaXMuZ2FtZS5jb2w7IGorKykge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5ib2FyZEFycltpXVtqXSA9ICcnO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMuY3R4LmNsZWFyUmVjdCgwLCAwLCB0aGlzLndpZHRoLCB0aGlzLmhlaWdodCk7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0R2FtZShyb3csIGNvbCkge1xyXG4gICAgICAgIHRoaXMuZ2FtZSA9IHsgcm93LCBjb2wgfTtcclxuICAgICAgICB0aGlzLmwgPSByb3cgKiBjb2w7XHJcbiAgICAgICAgdGhpcy53ID0gdGhpcy53aWR0aCAvIHJvdztcclxuICAgICAgICB0aGlzLmggPSB0aGlzLmhlaWdodCAvIGNvbDtcclxuICAgIH1cclxuXHJcbiAgICBjaGVja0VxdWFscyhhcnIpIHtcclxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGFyci5sZW5ndGggLSAxOyBpKyspIHtcclxuICAgICAgICAgICAgaWYgKGFycltpXSAhPT0gYXJyW2kgKyAxXSkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHRydWVcclxuICAgIH1cclxuXHJcbiAgICBjaGVja1dpbigpIHtcclxuICAgICAgICBsZXQgd2lubmVyID0gbnVsbDtcclxuICAgICAgICBsZXQgd2luQ29uZGl0aW9uID0gdGhpcy5nYW1lLnJvdyA9PT0gMyA/IDMgOiA0O1xyXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5nYW1lLnJvdzsgaSsrKSB7XHJcbiAgICAgICAgICAgIGZvciAobGV0IGogPSAwOyBqIDwgdGhpcy5nYW1lLmNvbDsgaisrKSB7XHJcbiAgICAgICAgICAgICAgICBsZXQgdG9DaGVjayA9IFtbXSwgW10sIFtdLCBbXV07XHJcbiAgICAgICAgICAgICAgICBmb3IgKGxldCBrID0gMDsgayA8IHdpbkNvbmRpdGlvbjsgaysrKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgLy9Ib3Jpem9udGFsXHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMuYm9hcmRBcnJbaV1baiArIGtdKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRvQ2hlY2tbMF0ucHVzaCh0aGlzLmJvYXJkQXJyW2ldW2ogKyBrXSk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIC8vVmVydGljYWxcclxuICAgICAgICAgICAgICAgICAgICBpZiAoaSA+PSB3aW5Db25kaXRpb24gLSAxKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLmJvYXJkQXJyW2kgLSBrXVtqXSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdG9DaGVja1sxXS5wdXNoKHRoaXMuYm9hcmRBcnJbaSAtIGtdW2pdKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAvL0RpYWdvbmFsIHJpZ2h0XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLmJvYXJkQXJyW2kgLSBrXVtqICsga10pIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRvQ2hlY2tbMl0ucHVzaCh0aGlzLmJvYXJkQXJyW2kgLSBrXVtqICsga10pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vRGlhZ29uYWwgbGVmdFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoaiA+PSB3aW5Db25kaXRpb24gLSAxKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy5ib2FyZEFycltpIC0ga11baiAtIGtdKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdG9DaGVja1szXS5wdXNoKHRoaXMuYm9hcmRBcnJbaSAtIGtdW2ogLSBrXSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAvL0NhbGwgY2hlY2sgZXF1YWxzXHJcbiAgICAgICAgICAgICAgICBmb3IgKGxldCB0ID0gMDsgdCA8IHRvQ2hlY2subGVuZ3RoOyB0KyspIHtcclxuICAgICAgICAgICAgICAgICAgICBpZiAodG9DaGVja1t0XS5sZW5ndGggPT09IHdpbkNvbmRpdGlvbikge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLmNoZWNrRXF1YWxzKHRvQ2hlY2tbdF0pKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aW5uZXIgPSB0aGlzLmJvYXJkQXJyW2ldW2pdO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICh0aGlzLm1vdmVzLmxlbmd0aCA+IHRoaXMubCAmJiAhd2lubmVyKSB7XHJcbiAgICAgICAgICAgIHdpbm5lciA9ICd0aWUnO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gd2lubmVyXHJcbiAgICB9XHJcblxyXG4gICAgZW5kR2FtZShzY29yZSkge1xyXG4gICAgICAgIGlmIChzY29yZSAhPT0gJ3RpZScpIHtcclxuICAgICAgICAgICAgbGV0IHByZXYgPSB0aGlzLmdldFBvaW50cygpO1xyXG4gICAgICAgICAgICB0aGlzLnNldFBvaW50cyhzY29yZSwgcHJldltzY29yZV0pO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICByZW1vdmVDZWxscygpIHtcclxuICAgICAgICB0aGlzLmJ1dHRvbnMgPSB0aGlzLmJ1dHRvbnMuZmlsdGVyKCh2LCBpKSA9PiB7XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmJ1dHRvbnNbaV0uYyAhPT0gJ2NlbGwnO1xyXG4gICAgICAgIH0pXHJcbiAgICB9XHJcbiAgICBjcmVhdGVFbmRCdXR0b24oc2NvcmUpIHtcclxuICAgICAgICBsZXQgZW5kVGV4dCA9ICcnO1xyXG4gICAgICAgIGlmIChzY29yZSA9PT0gJ3RpZScpIHtcclxuICAgICAgICAgICAgZW5kVGV4dCA9ICdJdHMgYSB0aWUnO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgZW5kVGV4dCA9IGAke3Njb3JlfSBXaW5zIWBcclxuICAgICAgICB9XHJcbiAgICAgICAgY3JlYXRlRW5kR2FtZUJ1dHRvbnMoZW5kVGV4dCk7XHJcbiAgICB9XHJcblxyXG4gICAgYnV0dG9uc0NsaWNrKGUpIHtcclxuICAgICAgICBmb3IgKGxldCBiIGluIHRoaXMuYnV0dG9ucykge1xyXG4gICAgICAgICAgICB0aGlzLmJ1dHRvbnNbYl0uY2FudmFzQ2xpY2soZSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuXHJcbiAgICBnZXRQb2ludHMoKSB7XHJcbiAgICAgICAgbGV0IFggPSBOdW1iZXIobG9jYWxTdG9yYWdlLmdldEl0ZW0oJ1gnKSk7XHJcbiAgICAgICAgbGV0IE8gPSBOdW1iZXIobG9jYWxTdG9yYWdlLmdldEl0ZW0oJ08nKSk7XHJcbiAgICAgICAgcmV0dXJuIHsgWCwgTyB9XHJcbiAgICB9XHJcblxyXG4gICAgc2V0UG9pbnRzKHdpbm5lciwgcHJldlMpIHtcclxuICAgICAgICBsZXQgcyA9IHByZXZTICsgMTtcclxuICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSh3aW5uZXIsIHMpO1xyXG4gICAgICAgIHRoaXMucG9pbnRzW3dpbm5lcl0gPSBzO1xyXG4gICAgfVxyXG5cclxuICAgIHJlc2V0UG9pbnRzKCkge1xyXG4gICAgICAgIGxvY2FsU3RvcmFnZS5jbGVhcigpO1xyXG4gICAgICAgIHRoaXMucG9pbnRzID0geyBYOiAwLCBPOiAwIH07XHJcbiAgICB9XHJcblxyXG59IiwiLy8gaW1wb3J0IHsgY3R4LCBib2FyZCwgYnV0dG9ucywgbmV3R2FtZSwgbG9vcCB9IGZyb20gJy4vbWFpbic7XHJcbi8vIGxldCBtYWluID0gcmVxdWlyZSgnLi9tYWluLmpzJylcclxuaW1wb3J0IHsgQm9hcmQgfSBmcm9tICcuL0JvYXJkJ1xyXG5pbXBvcnQgeyBib2FyZCwgbmV3R2FtZSwgbG9vcCwgcmVzZXRCb2FyZE9iaiB9IGZyb20gJy4vbWFpbic7XHJcbmltcG9ydCB7IGNyZWF0ZU1lbnVCdXR0b25zIH0gZnJvbSAnLi9idXR0b25zJ1xyXG5pbXBvcnQgeyBiZXN0TW92ZSB9IGZyb20gJy4vbWluaW1heCc7XHJcblxyXG5leHBvcnQgY2xhc3MgQnV0dG9uIHtcclxuICAgIGNvbnN0cnVjdG9yKHgsIHksIHcsIGgsIHR4dCwgaWQsIGMsIG9wdCkge1xyXG4gICAgICAgIHRoaXMueCA9IHg7XHJcbiAgICAgICAgdGhpcy55ID0geTtcclxuICAgICAgICB0aGlzLncgPSB3O1xyXG4gICAgICAgIHRoaXMuaCA9IGg7XHJcbiAgICAgICAgdGhpcy50eHQgPSB0eHRcclxuICAgICAgICB0aGlzLmlkID0gaWRcclxuICAgICAgICB0aGlzLm9wYWNpdHkgPSAxO1xyXG4gICAgICAgIHRoaXMuY2VudGVyID0geyB4OiAodGhpcy54IC0gKHRoaXMudyAvIDIpKSwgeTogKHRoaXMueSAtICh0aGlzLmggLyAyKSkgfTtcclxuICAgICAgICBpZiAob3B0KSB7XHJcbiAgICAgICAgICAgIHRoaXMub3B0ID0gb3B0O1xyXG4gICAgICAgICAgICBpZiAob3B0LmFuaW1hdGUpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuYW5pbWF0ZShvcHQuYW5pbWF0ZSlcclxuICAgICAgICAgICAgICAgIC8vIHRoaXMub3BhY2l0eSA9IG9wdC5hbmltYXRlLm9wO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmIChjKSB7XHJcbiAgICAgICAgICAgIHRoaXMuYyA9IGNcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5jb2xvcnMgPSBbJ2dyZXknLCAnd2hpdGUnXTtcclxuICAgIH1cclxuXHJcblxyXG5cclxuICAgIGNhbnZhc0NsaWNrKGUpIHtcclxuICAgICAgICBsZXQgbW91c2V4ID0gZS5vZmZzZXRYO1xyXG4gICAgICAgIGxldCBtb3VzZXkgPSBlLm9mZnNldFk7XHJcbiAgICAgICAgaWYgKG1vdXNleCA+IHRoaXMuY2VudGVyLnggJiYgbW91c2V4IDwgdGhpcy5jZW50ZXIueCArIHRoaXMudykge1xyXG4gICAgICAgICAgICBpZiAobW91c2V5ID4gdGhpcy5jZW50ZXIueSAmJiBtb3VzZXkgPCB0aGlzLmNlbnRlci55ICsgdGhpcy5oKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmFjdCgpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGFuaW1hdGUoZnJvbSkge1xyXG4gICAgICAgIGxldCBlbmRWYWwgPSB7IHg6IHRoaXMueCwgeTogdGhpcy55IH1cclxuICAgICAgICB0aGlzLnggLT0gZnJvbS54O1xyXG4gICAgICAgIHRoaXMuY2VudGVyLnggLT0gZnJvbS54O1xyXG4gICAgICAgIHRoaXMueSAtPSBmcm9tLnk7XHJcbiAgICAgICAgdGhpcy5jZW50ZXIueSAtPSBmcm9tLnk7XHJcbiAgICAgICAgdGhpcy5vcGFjaXR5ID0gZnJvbS5vcDtcclxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IDEwMDsgaSsrKSB7XHJcbiAgICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgaWYgKHRoaXMueCAhPT0gZW5kVmFsLngpIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnggKz0gKGZyb20ueCAqIDAuMDEpO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuY2VudGVyLnggKz0gKGZyb20ueCAqIDAuMDEpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgaWYgKGZyb20ueSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMueSArPSAoZnJvbS55ICogMC4wMSk7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5jZW50ZXIueSArPSAoZnJvbS55ICogMC4wMSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5vcGFjaXR5ICE9PSAxKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5vcGFjaXR5ICs9IDAuMDE7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0sIChpICogNSkpXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgYWN0KCkge1xyXG4gICAgICAgIC8vUGxheSBhZ2FpbiBidXR0b25cclxuICAgICAgICBpZiAodGhpcy5pZCA9PT0gJ3Jlc3RhcnQnKSB7XHJcbiAgICAgICAgICAgIC8vIGJ1dHRvbnMgPSBidXR0b25zLmZpbHRlcigodmFsdWUsIGluZGV4KSA9PiB7XHJcbiAgICAgICAgICAgIC8vICAgICByZXR1cm4gYnV0dG9uc1tpbmRleF0uYyAhPT0gJ2VuZCc7XHJcbiAgICAgICAgICAgIC8vIH0pO1xyXG4gICAgICAgICAgICBpZiAoYm9hcmQuY2hlY2tXaW4oKSkge1xyXG4gICAgICAgICAgICAgICAgbG9vcCgpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGJvYXJkLnNldEFycmF5cygpO1xyXG4gICAgICAgICAgICBuZXdHYW1lKCk7XHJcbiAgICAgICAgICAgIGlmIChib2FyZC5nYW1lLnJvdyA9PT0gMykge1xyXG4gICAgICAgICAgICAgICAgYmVzdE1vdmUoKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAodGhpcy5pZCA9PT0gJ3RpYycpIHtcclxuICAgICAgICAgICAgYm9hcmQuZ2V0R2FtZSgzLCAzKTtcclxuICAgICAgICAgICAgYm9hcmQuc2V0QXJyYXlzKCk7XHJcbiAgICAgICAgICAgIG5ld0dhbWUoKTtcclxuICAgICAgICAgICAgYmVzdE1vdmUoKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKHRoaXMuaWQgPT09ICdmb3VyJykge1xyXG4gICAgICAgICAgICBib2FyZC5nZXRHYW1lKDcsIDcpO1xyXG4gICAgICAgICAgICBib2FyZC5zZXRBcnJheXMoKTtcclxuICAgICAgICAgICAgbmV3R2FtZSgpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAodGhpcy5pZCA9PT0gJ21lbnUnKSB7XHJcbiAgICAgICAgICAgIHJlc2V0Qm9hcmRPYmooKTtcclxuICAgICAgICAgICAgYm9hcmQuZ2V0Q2FudmFzKCk7XHJcbiAgICAgICAgICAgIGJvYXJkLnNldExpc3RlbmVyKCk7XHJcbiAgICAgICAgICAgIGNyZWF0ZU1lbnVCdXR0b25zKCk7XHJcbiAgICAgICAgICAgIGlmIChib2FyZC5jaGVja1dpbigpKSB7XHJcbiAgICAgICAgICAgICAgICBsb29wKCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKHRoaXMuaWQgPT09ICdsb2NhbFN0b3JhZ2VDbGVhcicpIHtcclxuICAgICAgICAgICAgYm9hcmQucmVzZXRQb2ludHMoKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKHRoaXMuaWQgPT09ICdjZWxsJykge1xyXG4gICAgICAgICAgICBsZXQgbW91c2V4ID0gZS5vZmZzZXRYO1xyXG4gICAgICAgICAgICBsZXQgbW91c2V5ID0gZS5vZmZzZXRZO1xyXG4gICAgICAgICAgICBpZiAoIWJvYXJkLm1vdmVzW0luZGV4XS5kb25lKSB7XHJcbiAgICAgICAgICAgICAgICBib2FyZC5tb3Zlc1tJbmRleF0uZ2V0TW91c2VJbmRleChtb3VzZXgsIG1vdXNleSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgc2hvdygpIHtcclxuXHJcbiAgICAgICAgaWYgKHRoaXMub3B0ICYmIHRoaXMub3B0LmFuaW1hdGUpIHtcclxuICAgICAgICAgICAgLy8gdGhpcy5hbmltYXRlKHRoaXMub3B0LmFuaW1hdGUpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBib2FyZC5jdHgudHJhbnNsYXRlKDAsIDApO1xyXG4gICAgICAgIC8vIGNvbnNvbGUubG9nKHRoaXMub3BhY2l0eSk7XHJcblxyXG4gICAgICAgIGJvYXJkLmN0eC5nbG9iYWxBbHBoYSA9IHRoaXMub3BhY2l0eTtcclxuICAgICAgICBib2FyZC5jdHgudGV4dEFsaWduID0gJ2NlbnRlcic7XHJcbiAgICAgICAgYm9hcmQuY3R4LnRleHRCYXNlbGluZSA9ICdtaWRkbGUnO1xyXG4gICAgICAgIGJvYXJkLmN0eC5mb250ID0gdGhpcy5vcHQgJiYgdGhpcy5vcHQuZm9udCA/IHRoaXMub3B0LmZvbnQgOiAnYm9sZCAzLjVyZW0gc2Fucy1zZXJpZic7XHJcbiAgICAgICAgYm9hcmQuY3R4LmZpbGxTdHlsZSA9IHRoaXMub3B0ICYmIHRoaXMub3B0LmJnYyA/IHRoaXMub3B0LmJnYyA6IHRoaXMuY29sb3JzWzBdO1xyXG4gICAgICAgIGJvYXJkLmN0eC5maWxsUmVjdCh0aGlzLmNlbnRlci54LCB0aGlzLmNlbnRlci55LCB0aGlzLncsIHRoaXMuaCk7XHJcbiAgICAgICAgYm9hcmQuY3R4LmZpbGxTdHlsZSA9IHRoaXMub3B0ICYmIHRoaXMub3B0LmNvbG9yID8gdGhpcy5vcHQuY29sb3IgOiB0aGlzLmNvbG9yc1sxXTtcclxuICAgICAgICBib2FyZC5jdHguZmlsbFRleHQodGhpcy50eHQsIHRoaXMueCwgdGhpcy55KTtcclxuICAgICAgICAvLyBjdHgudHJhbnNsYXRlKDAsIDApXHJcbiAgICB9XHJcbn0iLCJpbXBvcnQgeyBCdXR0b24gfSBmcm9tICcuL0J1dHRvbic7XHJcbmltcG9ydCB7IGJvYXJkIH0gZnJvbSAnLi9tYWluJztcclxuXHJcbmV4cG9ydCBjbGFzcyBDZWxsIGV4dGVuZHMgQnV0dG9uIHtcclxuICAgIGNvbnN0cnVjdG9yKHgsIHksIHcsIGgsIHR4dCwgaWQsIGMsIG9wdCwgaSwgaikge1xyXG4gICAgICAgIHN1cGVyKHgsIHksIHcsIGgsIHR4dCwgaWQsIGMsIG9wdCk7XHJcbiAgICAgICAgdGhpcy5pID0gaTtcclxuICAgICAgICB0aGlzLmogPSBqO1xyXG4gICAgfVxyXG5cclxuICAgIGNhbnZhc0NsaWNrKGUpIHtcclxuICAgICAgICBsZXQgbW91c2V4ID0gZS5vZmZzZXRYO1xyXG4gICAgICAgIGxldCBtb3VzZXkgPSBlLm9mZnNldFk7XHJcbiAgICAgICAgaWYgKG1vdXNleCA+IHRoaXMueCAmJiBtb3VzZXggPCB0aGlzLnggKyB0aGlzLncpIHtcclxuICAgICAgICAgICAgaWYgKG1vdXNleSA+IHRoaXMueSAmJiBtb3VzZXkgPCB0aGlzLnkgKyB0aGlzLmgpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuYWN0KCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgYWN0KCkge1xyXG4gICAgICAgIGxldCBpbmRleCA9IGJvYXJkLm1vdmVzLmxlbmd0aCAtIDE7XHJcbiAgICAgICAgYm9hcmQubW92ZXNbaW5kZXhdLnBsYXkodGhpcy5pLCB0aGlzLmopO1xyXG4gICAgfVxyXG5cclxuXHJcbiAgICBzaG93KCkge1xyXG4gICAgICAgIGJvYXJkLmN0eC5mb250ID0gdGhpcy5vcHQgJiYgdGhpcy5vcHQuZm9udCA/IHRoaXMub3B0LmZvbnQgOiAnYm9sZCAzLjVyZW0gc2Fucy1zZXJpZic7XHJcbiAgICAgICAgYm9hcmQuY3R4LmZpbGxTdHlsZSA9IHRoaXMub3B0ICYmIHRoaXMub3B0LmJnYyA/IHRoaXMub3B0LmJnYyA6ICd3aGl0ZSc7XHJcbiAgICAgICAgYm9hcmQuY3R4LmZpbGxSZWN0KHRoaXMueCwgdGhpcy55LCB0aGlzLncsIHRoaXMuaCk7XHJcbiAgICAgICAgYm9hcmQuY3R4LnN0cm9rZVJlY3QodGhpcy54LCB0aGlzLnksIHRoaXMudywgdGhpcy5oKTtcclxuICAgIH1cclxufSIsImltcG9ydCB7IGJvYXJkIH0gZnJvbSAnLi9tYWluJztcclxuaW1wb3J0IHsgYmVzdE1vdmUgfSBmcm9tICcuL21pbmltYXgnO1xyXG5cclxuZXhwb3J0IGNsYXNzIE1vdmUge1xyXG4gICAgY29uc3RydWN0b3IoYWN0aXZlKSB7XHJcbiAgICAgICAgdGhpcy5hY3RpdmUgPSBhY3RpdmU7XHJcbiAgICAgICAgdGhpcy5wbGF5ZXJzID0gWydYJywgJ08nXTtcclxuICAgICAgICB0aGlzLmNvbG9ycyA9IFsnYmx1ZScsICdyZWQnLCAnZ3JlZW4nLCAncGluayddO1xyXG4gICAgICAgIHRoaXMuZG9uZSA9IGZhbHNlO1xyXG4gICAgfVxyXG5cclxuXHJcbiAgICBwbGF5KGksIGopIHtcclxuICAgICAgICBpZiAoYm9hcmQuZ2FtZS5yb3cgPT09IDMpIHtcclxuICAgICAgICAgICAgaWYgKCFib2FyZC5ib2FyZEFycltqXVtpXSkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5pID0gaTtcclxuICAgICAgICAgICAgICAgIHRoaXMuaiA9IGo7XHJcbiAgICAgICAgICAgICAgICBib2FyZC5ib2FyZEFycltqXVtpXSA9IHRoaXMucGxheWVyc1t0aGlzLmFjdGl2ZV07XHJcbiAgICAgICAgICAgICAgICB0aGlzLmRvbmUgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5uZXh0VHVybigpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2UgaWYoYm9hcmQuZ2FtZS5yb3cgPT09IDcpIHtcclxuICAgICAgICAgICAgLy8gY29uc29sZS5sb2coYm9hcmQuYm9hcmRBcnIpO1xyXG4gICAgICAgICAgICB0aGlzLmZvdXJJbkFSb3coaSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGZvdXJJbkFSb3coaSkge1xyXG4gICAgICAgIGxldCBtYXggPSBib2FyZC5ib2FyZEFycltpXS5sZW5ndGggLSAxXHJcbiAgICAgICAgZm9yIChsZXQgaiA9IG1heDsgaiA+PSAwOyBqLS0pIHtcclxuICAgICAgICAgICAgaWYgKCFib2FyZC5ib2FyZEFycltqXVtpXSkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5pID0gaTtcclxuICAgICAgICAgICAgICAgIHRoaXMuaiA9IGo7XHJcbiAgICAgICAgICAgICAgICBib2FyZC5ib2FyZEFycltqXVtpXSA9IHRoaXMucGxheWVyc1t0aGlzLmFjdGl2ZV07XHJcbiAgICAgICAgICAgICAgICB0aGlzLmRvbmUgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5uZXh0VHVybigpO1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIG5leHRUdXJuKCkge1xyXG4gICAgICAgIGJvYXJkLm1vdmVzLnB1c2gobmV3IE1vdmUoMSAtIHRoaXMuYWN0aXZlKSk7XHJcbiAgICAgICAgaWYgKHRoaXMuYWN0aXZlICYmIGJvYXJkLmdhbWUucm93ID09PSAzKSB7XHJcbiAgICAgICAgICAgIGJlc3RNb3ZlKCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHNob3coKSB7XHJcbiAgICAgICAgbGV0IGggPSBib2FyZC5oICogMC45O1xyXG4gICAgICAgIGxldCBoZ2FwID0gYm9hcmQuaGVpZ2h0ICogMC4xXHJcbiAgICAgICAgbGV0IHcgPSBib2FyZC53O1xyXG4gICAgICAgIGlmICh0aGlzLmRvbmUpIHtcclxuICAgICAgICAgICAgYm9hcmQuY3R4LmZvbnQgPSAnNHJlbSBzYW5zLXNlcmlmJztcclxuICAgICAgICAgICAgYm9hcmQuY3R4LmZpbGxTdHlsZSA9IHRoaXMuY29sb3JzW3RoaXMuYWN0aXZlXTtcclxuICAgICAgICAgICAgYm9hcmQuY3R4LmZpbGxUZXh0KGJvYXJkLmJvYXJkQXJyW3RoaXMual1bdGhpcy5pXSwgKHRoaXMuaSAqIHcpICsgKHcgLyAyKSwgKHRoaXMuaiAqIGgpICsgaGdhcCArIChoIC8gMiksIHcpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufSIsImltcG9ydCB7IEJ1dHRvbiB9IGZyb20gJy4vQnV0dG9uJztcclxuaW1wb3J0IHsgQ2VsbCB9IGZyb20gJy4vQ2VsbCc7XHJcbmltcG9ydCB7IGJvYXJkIH0gZnJvbSAnLi9tYWluJztcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBjcmVhdGVNZW51QnV0dG9ucygpIHtcclxuICAgIGxldCB0eHQgPSB7XHJcbiAgICAgICAgaDE6ICdDaG9vc2UgYSBnYW1lJyxcclxuICAgICAgICB0aWM6ICdUaWMgVGFjIFRvZScsXHJcbiAgICAgICAgZm91cjogJ0ZvdXIgaW4gYSByb3cnXHJcbiAgICB9XHJcbiAgICBsZXQgb3B0ID0ge1xyXG4gICAgICAgIGJnYzogJyM2MWNmZmYnLFxyXG4gICAgICAgIGNvbG9yOiAnYmxhY2snLFxyXG4gICAgICAgIGZvbnQ6ICcxcmVtIHNhbnMtc2VyaWYnXHJcbiAgICB9XHJcbiAgICBsZXQgb3B0MiA9IHtcclxuICAgICAgICBiZ2M6ICcjMTQxNCcsXHJcbiAgICAgICAgY29sb3I6ICdibGFjaycsXHJcbiAgICAgICAgZm9udDogJzAuN3JlbSBzYW5zLXNlcmlmJyxcclxuICAgICAgICBhbmltYXRlOiB7XHJcbiAgICAgICAgICAgIHg6IDEwLFxyXG4gICAgICAgICAgICB5OiAxMCxcclxuICAgICAgICAgICAgb3A6IDAsXHJcbiAgICAgICAgICAgIHJhdGU6IDE1XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgYm9hcmQuYnV0dG9ucy5wdXNoKFxyXG4gICAgICAgIG5ldyBCdXR0b24oYm9hcmQud2lkdGggLyAyLCBib2FyZC5oZWlnaHQgLyAyLCBib2FyZC53aWR0aCwgYm9hcmQuaGVpZ2h0LCAnJywgJ2JnJywgJ21lbnUnLCBvcHQpLFxyXG4gICAgICAgIG5ldyBCdXR0b24oYm9hcmQud2lkdGggLyAyLCBib2FyZC5oZWlnaHQgKiAwLjIsIDE1MCwgNjUsIHR4dC5oMSwgJ2gxJywgJ21lbnUnLCBvcHQpLFxyXG4gICAgICAgIG5ldyBCdXR0b24oYm9hcmQudyAtIDEwMCwgYm9hcmQuaGVpZ2h0IC8gMiwgMTUwLCA2NSwgdHh0LnRpYywgJ3RpYycsICdtZW51Jywgb3B0MiksXHJcbiAgICAgICAgbmV3IEJ1dHRvbihib2FyZC53ICsgMTAwLCBib2FyZC5oZWlnaHQgLyAyLCAxNTAsIDY1LCB0eHQuZm91ciwgJ2ZvdXInLCAnbWVudScsIG9wdDIpLFxyXG4gICAgKTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZUdhbWVCdXR0b25zKCkge1xyXG4gICAgbGV0IG9wdCA9IHtcclxuICAgICAgICBmb250OiAnMC43cmVtIHNhbnMtc2VyaWYnLFxyXG4gICAgICAgIGJnYzogJ2dyZXknLFxyXG4gICAgICAgIGNvbG9yOiAnd2hpdGUnXHJcbiAgICB9XHJcbiAgICBib2FyZC5idXR0b25zLnB1c2goXHJcbiAgICAgICAgbmV3IEJ1dHRvbigoYm9hcmQud2lkdGggLyAyKSAtIDEyNSwgYm9hcmQueWdhcCAvIDIsIDEwMCwgMzAsICdSZXNldCBzY29yZScsICdsb2NhbFN0b3JhZ2VDbGVhcicsICd0aWMnLCBvcHQpLFxyXG4gICAgICAgIG5ldyBCdXR0b24oYm9hcmQud2lkdGggLyAyLCBib2FyZC55Z2FwIC8gMiwgMTAwLCAzMCwgJ01lbnUnLCAnbWVudScsICd0aWMnLCBvcHQpLFxyXG4gICAgICAgIG5ldyBCdXR0b24oKGJvYXJkLndpZHRoIC8gMikgKyAxMjUsIGJvYXJkLnlnYXAgLyAyLCAxMDAsIDMwLCAnTmV3IEdhbWUnLCAncmVzdGFydCcsICd0aWMnLCBvcHQpLFxyXG4gICAgICAgIG5ldyBCdXR0b24oKGJvYXJkLndpZHRoIC8gMikgLSAxMjUsIGJvYXJkLmhlaWdodCAtIDE1LCAxMDAsIDMwLCBib2FyZC5nZXRQb2ludHMoKS5YLCAnWCcsICdzY29yZScsIG9wdCksXHJcbiAgICAgICAgbmV3IEJ1dHRvbigoYm9hcmQud2lkdGggLyAyKSArIDEyNSwgYm9hcmQuaGVpZ2h0IC0gMTUsIDEwMCwgMzAsIGJvYXJkLmdldFBvaW50cygpLk8sICdPJywgJ3Njb3JlJywgb3B0KVxyXG4gICAgKTtcclxuICAgIGNvbnN0IG9wdDIgPSB7XHJcbiAgICAgICAgZm9udDogJzFyZW0gc2Fucy1zZXJpZicsXHJcbiAgICAgICAgYmdjOiAnYXF1YScsXHJcbiAgICAgICAgY29sb3I6ICdibGFjaydcclxuICAgIH1cclxuICAgIGJvYXJkLmJ1dHRvbnMucHVzaChuZXcgQnV0dG9uKDU1LCAxNSwgMTEwLCAzMCwgJycsICd0dXJuJywgJ3R1cm4nLCBvcHQyKSlcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZUVuZEdhbWVCdXR0b25zKHNjb3JlKSB7XHJcbiAgICBsZXQgdHh0ID0gJyc7XHJcbiAgICAgICAgaWYgKHNjb3JlID09PSAndGllJykge1xyXG4gICAgICAgICAgICB0eHQgPSAnSXRzIGEgdGllJztcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgIHR4dCA9IGAke3Njb3JlfSBXaW5zIWBcclxuICAgICAgICB9XHJcbiAgICBsZXQgb3B0aW9ucyA9IHsgZm9udDogJ2JvbGQgMS4ycmVtIHNhbnMtc2VyaWYnIH07XHJcbiAgICBib2FyZC5idXR0b25zLnB1c2gobmV3IEJ1dHRvbihib2FyZC53aWR0aCAvIDIsIGJvYXJkLmhlaWdodCAvIDIsIDMwMCwgMTAwLCB0eHQsICdlbmQxJywgJ2VuZCcpKTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZUNlbGxCdXR0b25zKCkge1xyXG4gICAgbGV0IGggPSBib2FyZC5oICogMC45O1xyXG4gICAgbGV0IGhnYXAgPSBib2FyZC5oZWlnaHQgKiAwLjFcclxuICAgIGxldCB3ID0gYm9hcmQudztcclxuICAgIGxldCBvcHQgPSB7XHJcbiAgICAgICAgYmdjOiAncmdiYSg0MiwgMjA0LCAyMzIsIDAuMyknXHJcbiAgICB9XHJcblxyXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBib2FyZC5nYW1lLnJvdzsgaSsrKSB7XHJcbiAgICAgICAgZm9yIChsZXQgaiA9IDA7IGogPCBib2FyZC5nYW1lLmNvbDsgaisrKSB7XHJcbiAgICAgICAgICAgIC8vIGNyZWF0ZUNlbGxCdXR0b25zKCk7XHJcbiAgICAgICAgICAgIGJvYXJkLmJ1dHRvbnMucHVzaChuZXcgQ2VsbCgoaSAqIHcpLCAoaiAqIGgpICsgaGdhcCwgdywgaCwgJycsIGkgKyBqLCAnY2VsbCcsIG9wdCwgaSwgaikpXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcbiIsImltcG9ydCAnLi9zdHlsZS5jc3MnO1xyXG5pbXBvcnQgeyBCb2FyZCB9IGZyb20gJy4vQm9hcmQnO1xyXG5pbXBvcnQgeyBNb3ZlIH0gZnJvbSAnLi9Nb3ZlJztcclxuaW1wb3J0IHsgY3JlYXRlTWVudUJ1dHRvbnMsIGNyZWF0ZUdhbWVCdXR0b25zLCBjcmVhdGVDZWxsQnV0dG9ucywgY3JlYXRlRW5kR2FtZUJ1dHRvbnMgfSBmcm9tICcuL2J1dHRvbnMnXHJcbmltcG9ydCB7IGJlc3RNb3ZlIH0gZnJvbSAnLi9taW5pbWF4JztcclxuXHJcbmV4cG9ydCBsZXQgYm9hcmQ7XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gcmVzZXRCb2FyZE9iaigpIHtcclxuICAgIGJvYXJkID0gbmV3IEJvYXJkKCk7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBuZXdHYW1lKCkge1xyXG4gICAgYm9hcmQuaW5pdCgpO1xyXG4gICAgLy8gYm9hcmQubW92ZXMgPSBbbmV3IE1vdmUoMCldO1xyXG4gICAgY3JlYXRlR2FtZUJ1dHRvbnMoKTtcclxuICAgIGNyZWF0ZUNlbGxCdXR0b25zKCk7XHJcbiAgICBpZiAobG9jYWxTdG9yYWdlLmxlbmd0aCA9PSAwKSB7XHJcbiAgICAgICAgYm9hcmQucmVzZXRQb2ludHMoKTtcclxuICAgIH1cclxuICAgIGJvYXJkLnBvaW50cyA9IGJvYXJkLmdldFBvaW50cygpO1xyXG4gICAgLy8gYmVzdE1vdmUoKTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGxvb3AoKSB7XHJcbiAgICBsZXQgbCA9IHNldEludGVydmFsKGZ1bmN0aW9uICgpIHtcclxuICAgICAgICBmb3IgKGxldCBtIGluIGJvYXJkLm1vdmVzKSB7XHJcbiAgICAgICAgICAgIGJvYXJkLm1vdmVzW21dLnNob3coKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKGJvYXJkLmJvYXJkQXJyKSB7XHJcbiAgICAgICAgICAgIGxldCB3aW5uZXIgPSBib2FyZC5jaGVja1dpbigpO1xyXG4gICAgICAgICAgICBpZiAod2lubmVyKSB7XHJcbiAgICAgICAgICAgICAgICBib2FyZC5lbmRHYW1lKHdpbm5lcik7XHJcbiAgICAgICAgICAgICAgICBib2FyZC5yZW1vdmVDZWxscygpO1xyXG4gICAgICAgICAgICAgICAgY3JlYXRlRW5kR2FtZUJ1dHRvbnMod2lubmVyKTtcclxuICAgICAgICAgICAgICAgIGNsZWFySW50ZXJ2YWwobClcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoYm9hcmQuYnV0dG9ucykge1xyXG4gICAgICAgICAgICBmb3IgKGxldCBtIGluIGJvYXJkLmJ1dHRvbnMpIHtcclxuICAgICAgICAgICAgICAgIGxldCBidXR0b24gPSBib2FyZC5idXR0b25zW21dXHJcbiAgICAgICAgICAgICAgICBidXR0b24uc2hvdygpO1xyXG5cclxuICAgICAgICAgICAgICAgIGlmIChidXR0b24uYyA9PT0gJ3Njb3JlJykge1xyXG4gICAgICAgICAgICAgICAgICAgIGxldCBpZCA9IGJ1dHRvbi5pZDtcclxuICAgICAgICAgICAgICAgICAgICBidXR0b24udHh0ID0gYm9hcmQuZ2V0UG9pbnRzKClbaWRdO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgaWYgKGJ1dHRvbi5jID09PSAndHVybicpIHtcclxuICAgICAgICAgICAgICAgICAgICBjb25zdCBwcmVUeHQgPSAnVHVybjogJztcclxuICAgICAgICAgICAgICAgICAgICBpZiAoYm9hcmQubW92ZXMpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbGV0IG1vdmUgPSBib2FyZC5tb3Zlc1tib2FyZC5tb3Zlcy5sZW5ndGggLSAxXVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBsZXQgdHVybiA9IG1vdmUucGxheWVyc1ttb3ZlLmFjdGl2ZV07XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJ1dHRvbi50eHQgPSBwcmVUeHQgKyB0dXJuO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH0sIDUwKTtcclxufVxyXG5cclxud2luZG93Lm9ubG9hZCA9IGZ1bmN0aW9uICgpIHtcclxuICAgIHJlc2V0Qm9hcmRPYmooKTtcclxuICAgIC8vIHNldENhbnZhc1NpemUoKTtcclxuICAgIGJvYXJkLmdldENhbnZhcygpO1xyXG4gICAgLy8gYm9hcmQuZ2V0U2l6ZSgpO1xyXG4gICAgLy8gYm9hcmQuY2FudmFzU2l6ZSgpO1xyXG4gICAgLy8gYm9hcmQuc2V0QXJyYXlzKCk7XHJcbiAgICBib2FyZC5zZXRMaXN0ZW5lcigpOyAgICBcclxuICAgIGNyZWF0ZU1lbnVCdXR0b25zKCk7XHJcbiAgICBsb29wKCk7XHJcbn07IiwiLy8gVGljIFRhYyBUb2UgQUkgd2l0aCBNaW5pbWF4IEFsZ29yaXRobVxyXG4vLyBUaGUgQ29kaW5nIFRyYWluIC8gRGFuaWVsIFNoaWZmbWFuXHJcbi8vIGh0dHBzOi8vdGhlY29kaW5ndHJhaW4uY29tL0NvZGluZ0NoYWxsZW5nZXMvMTU0LXRpYy10YWMtdG9lLW1pbmltYXguaHRtbFxyXG4vLyBodHRwczovL3lvdXR1LmJlL0k2NC1VVE9SVmZVXHJcbi8vIGh0dHBzOi8vZWRpdG9yLnA1anMub3JnL2NvZGluZ3RyYWluL3NrZXRjaGVzLzB6eVVoWmRKRFxyXG5pbXBvcnQgeyBib2FyZCB9IGZyb20gJy4vbWFpbic7XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gYmVzdE1vdmUoKSB7XHJcbiAgLy8gQUkgdG8gbWFrZSBpdHMgdHVyblxyXG4gIGxldCBiZXN0U2NvcmUgPSAtSW5maW5pdHk7XHJcbiAgbGV0IG1vdmU7XHJcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCAzOyBpKyspIHtcclxuICAgIGZvciAobGV0IGogPSAwOyBqIDwgMzsgaisrKSB7XHJcbiAgICAgIC8vIElzIHRoZSBzcG90IGF2YWlsYWJsZT9cclxuICAgICAgaWYgKGJvYXJkLmJvYXJkQXJyW2pdW2ldID09ICcnKSB7XHJcbiAgICAgICAgYm9hcmQuYm9hcmRBcnJbal1baV0gPSBib2FyZC5wbGF5ZXJzWzBdO1xyXG4gICAgICAgIGxldCBzY29yZSA9IG1pbmltYXgoYm9hcmQuYm9hcmRBcnIsIDAsIGZhbHNlKTtcclxuICAgICAgICBib2FyZC5ib2FyZEFycltqXVtpXSA9ICcnO1xyXG4gICAgICAgIGlmIChzY29yZSA+IGJlc3RTY29yZSkge1xyXG4gICAgICAgICAgYmVzdFNjb3JlID0gc2NvcmU7XHJcbiAgICAgICAgICBtb3ZlID0geyBpLCBqIH07XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG4gIGxldCBpbmRleCA9IGJvYXJkLm1vdmVzLmxlbmd0aCAtIDFcclxuICBpZiAoIWJvYXJkLm1vdmVzW2luZGV4XS5kb25lKSB7XHJcbiAgICBib2FyZC5tb3Zlc1tpbmRleF0ucGxheShtb3ZlLmksIG1vdmUuaik7XHJcbiAgfVxyXG59XHJcblxyXG5sZXQgc2NvcmVzID0ge1xyXG4gIFg6IDEwLFxyXG4gIE86IC0xMCxcclxuICB0aWU6IDBcclxufTtcclxuXHJcbmZ1bmN0aW9uIG1pbmltYXgobW54Qm9hcmQsIGRlcHRoLCBpc01heGltaXppbmcpIHtcclxuICBsZXQgcmVzdWx0ID0gYm9hcmQuY2hlY2tXaW4oKTtcclxuICBpZiAocmVzdWx0ICE9PSBudWxsKSB7XHJcbiAgICByZXR1cm4gc2NvcmVzW3Jlc3VsdF07XHJcbiAgfVxyXG5cclxuICBpZiAoaXNNYXhpbWl6aW5nKSB7XHJcbiAgICBsZXQgYmVzdFNjb3JlID0gLUluZmluaXR5O1xyXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCAzOyBpKyspIHtcclxuICAgICAgZm9yIChsZXQgaiA9IDA7IGogPCAzOyBqKyspIHtcclxuICAgICAgICAvLyBJcyB0aGUgc3BvdCBhdmFpbGFibGU/XHJcbiAgICAgICAgaWYgKG1ueEJvYXJkW2pdW2ldID09ICcnKSB7XHJcbiAgICAgICAgICBtbnhCb2FyZFtqXVtpXSA9IGJvYXJkLnBsYXllcnNbMF07XHJcbiAgICAgICAgICBsZXQgc2NvcmUgPSBtaW5pbWF4KG1ueEJvYXJkLCBkZXB0aCArIDEsIGZhbHNlKTtcclxuICAgICAgICAgIG1ueEJvYXJkW2pdW2ldID0gJyc7XHJcbiAgICAgICAgICBiZXN0U2NvcmUgPSBNYXRoLm1heChzY29yZSwgYmVzdFNjb3JlKTtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIHJldHVybiBiZXN0U2NvcmU7XHJcbiAgfSBlbHNlIHtcclxuICAgIGxldCBiZXN0U2NvcmUgPSBJbmZpbml0eTtcclxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgMzsgaSsrKSB7XHJcbiAgICAgIGZvciAobGV0IGogPSAwOyBqIDwgMzsgaisrKSB7XHJcbiAgICAgICAgLy8gSXMgdGhlIHNwb3QgYXZhaWxhYmxlP1xyXG4gICAgICAgIGlmIChtbnhCb2FyZFtqXVtpXSA9PSAnJykge1xyXG4gICAgICAgICAgbW54Qm9hcmRbal1baV0gPSBib2FyZC5wbGF5ZXJzWzFdO1xyXG4gICAgICAgICAgbGV0IHNjb3JlID0gbWluaW1heChtbnhCb2FyZCwgZGVwdGggKyAxLCB0cnVlKTtcclxuICAgICAgICAgIG1ueEJvYXJkW2pdW2ldID0gJyc7XHJcbiAgICAgICAgICBiZXN0U2NvcmUgPSBNYXRoLm1pbihzY29yZSwgYmVzdFNjb3JlKTtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIHJldHVybiBiZXN0U2NvcmU7XHJcbiAgfVxyXG59XHJcbiIsInZhciBhcGkgPSByZXF1aXJlKFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiKTtcbiAgICAgICAgICAgIHZhciBjb250ZW50ID0gcmVxdWlyZShcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIik7XG5cbiAgICAgICAgICAgIGNvbnRlbnQgPSBjb250ZW50Ll9fZXNNb2R1bGUgPyBjb250ZW50LmRlZmF1bHQgOiBjb250ZW50O1xuXG4gICAgICAgICAgICBpZiAodHlwZW9mIGNvbnRlbnQgPT09ICdzdHJpbmcnKSB7XG4gICAgICAgICAgICAgIGNvbnRlbnQgPSBbW21vZHVsZS5pZCwgY29udGVudCwgJyddXTtcbiAgICAgICAgICAgIH1cblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5pbnNlcnQgPSBcImhlYWRcIjtcbm9wdGlvbnMuc2luZ2xldG9uID0gZmFsc2U7XG5cbnZhciB1cGRhdGUgPSBhcGkoY29udGVudCwgb3B0aW9ucyk7XG5cbnZhciBleHBvcnRlZCA9IGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB7fTtcblxuXG5cbm1vZHVsZS5leHBvcnRzID0gZXhwb3J0ZWQ7Il0sInNvdXJjZVJvb3QiOiIifQ==