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

/***/ "./src/generateField.js":
/*!******************************!*\
  !*** ./src/generateField.js ***!
  \******************************/
/*! exports provided: ROWS_COUNT, COLS_COUNT, generateCols, generateRows */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ROWS_COUNT", function() { return ROWS_COUNT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "COLS_COUNT", function() { return COLS_COUNT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "generateCols", function() { return generateCols; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "generateRows", function() { return generateRows; });
var ROWS_COUNT = 3;
var COLS_COUNT = 3;
var field = document.querySelector('.field');
function generateCols(row, colsCount, rowId) {
  for (var i = 0; i < colsCount; i++) {
    var id = rowId * colsCount + i;
    var col = document.createElement('div');
    col.id = "c-".concat(id);
    col.dataset.id = id;
    col.className = 'cell';
    row.appendChild(col);
  }
}
function generateRows(rowsCount, colsCount) {
  for (var i = 0; i < rowsCount; i++) {
    var row = document.createElement('div');
    row.className = 'row';
    row.id = "r-".concat(i);
    generateCols(row, colsCount, i);
    field.appendChild(row);
  }
} // generateRows(ROWS_COUNT, COLS_COUNT);

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! exports provided: wonTitleBlock, wonMessageBlock, undoBtn, redoBtn, fieldSize */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "wonTitleBlock", function() { return wonTitleBlock; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "wonMessageBlock", function() { return wonMessageBlock; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "undoBtn", function() { return undoBtn; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "redoBtn", function() { return redoBtn; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fieldSize", function() { return fieldSize; });
/* harmony import */ var _generateField_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./generateField.js */ "./src/generateField.js");
/* harmony import */ var _winChecker_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./winChecker.js */ "./src/winChecker.js");


Object(_generateField_js__WEBPACK_IMPORTED_MODULE_0__["generateRows"])(_generateField_js__WEBPACK_IMPORTED_MODULE_0__["ROWS_COUNT"], _generateField_js__WEBPACK_IMPORTED_MODULE_0__["COLS_COUNT"]);
var wonTitleBlock = document.querySelector('.won-title');
var wonMessageBlock = document.querySelector('.won-message');
var undoBtn = document.querySelector('.undo-btn');
var redoBtn = document.querySelector('.redo-btn');
var restartBtn = document.querySelector('.restart-btn');
var players = [{
  name: 'cross',
  className: 'ch',
  plural: 'Crosses'
}, {
  name: 'round',
  className: 'r',
  plural: 'Toes'
}];
var winClassesNames = ['horizontal', 'vertical', 'diagonal-right', 'diagonal-left'];
var moves = [];
var cancelledMoves = [];
var fieldObject = [];
var fieldNode = document.querySelector('.field');
fieldNode.querySelectorAll('.row').forEach(function (e) {
  var cells = e.querySelectorAll('.cell');
  var row = [];
  cells.forEach(function (c) {
    row.push(c);
    c.addEventListener('click', cellClickHandler);
  });
  fieldObject.push(row);
});
var fieldSize = fieldObject.length;
var stored_steps = JSON.parse(localStorage.getItem('history'));

if (stored_steps && stored_steps.length > 0) {
  var stored_stepsMoves = stored_steps[0];
  var stored_stepsCancelledMoves = stored_steps[1];
  stored_stepsMoves.forEach(function (e) {
    return move(fromCellID(e.target), e.player);
  });
  if (stored_stepsCancelledMoves && stored_stepsCancelledMoves.length > 0) cancelledMoves = stored_stepsCancelledMoves;
}

function manageDoButtons() {
  redoBtn.disabled = cancelledMoves.length === 0;
  undoBtn.disabled = moves.length === 0;

  if (!wonTitleBlock.classList.contains('hidden')) {
    redoBtn.disabled = undoBtn.disabled = true;
  }
}

window.addEventListener('storage', function (event) {
  if (event.key === 'history' && event.oldValue !== event.newValue) {
    var _stored_steps = event.newValue;
    gameRestart(true);
    var _stored_stepsCancelledMoves = JSON.parse(_stored_steps)[1];
    var _stored_stepsMoves = JSON.parse(_stored_steps)[0];
    if (_stored_stepsMoves) _stored_stepsMoves.forEach(function (e) {
      return move(fromCellID(e.target), e.player, true);
    });
    if (_stored_stepsCancelledMoves && _stored_stepsCancelledMoves.length > 0) cancelledMoves = _stored_stepsCancelledMoves;
    manageDoButtons();
  }
});

function gameRestart() {
  var copied = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
  fieldNode.querySelectorAll('.cell').forEach(function (e) {
    players.forEach(function (p) {
      return e.classList.remove(p.className);
    });
    winClassesNames.forEach(function (p) {
      return e.classList.remove(p);
    });
    e.classList.remove('win');
  });
  undoBtn.disabled = true;
  redoBtn.disabled = true;
  wonTitleBlock.classList.add('hidden');
  moves = [];
  cancelledMoves = [];

  if (!copied) {
    localStorage.setItem('history', JSON.stringify([]));
  }
}

function cellClickHandler(e) {
  if (wonTitleBlock.classList.contains('hidden')) {
    var player = players[moves.length % players.length];
    move(e.target, player);
  }
}

function move(target, player) {
  var copied = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
  cancelledMoves = [];
  target.classList.add(player.className);
  moves.push({
    target: target.id,
    player: player
  });
  manageDoButtons();
  Object(_winChecker_js__WEBPACK_IMPORTED_MODULE_1__["checkForWin"])(target, fieldObject, player);
  if (!copied) localStorage.setItem('history', JSON.stringify([moves, cancelledMoves]));
}

function fromCellID(id) {
  return document.querySelector('#' + id);
}

function undo() {
  var move = moves.pop();
  cancelledMoves.push(move);
  players.forEach(function (e) {
    fromCellID(move.target).classList.remove(e.className);
  });
  manageDoButtons();
  updateLocalStorage();
}

function redo() {
  var move = cancelledMoves.pop();
  moves.push(move);
  fromCellID(move.target).classList.add(move.player.className);
  manageDoButtons();
  updateLocalStorage();
}

function updateLocalStorage() {
  localStorage.setItem('history', JSON.stringify([moves, cancelledMoves]));

  if (cancelledMoves.length > 0) {
    redoBtn.disabled = false;
  }
}

updateLocalStorage();
undoBtn.addEventListener('click', undo);
redoBtn.addEventListener('click', redo);
restartBtn.addEventListener('click', gameRestart);

/***/ }),

/***/ "./src/winChecker.js":
/*!***************************!*\
  !*** ./src/winChecker.js ***!
  \***************************/
/*! exports provided: checkForWin */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "checkForWin", function() { return checkForWin; });
/* harmony import */ var _index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.js */ "./src/index.js");


function endGame() {
  var player = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
  var cells = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
  _index_js__WEBPACK_IMPORTED_MODULE_0__["wonTitleBlock"].classList.remove('hidden');

  if (player) {
    _index_js__WEBPACK_IMPORTED_MODULE_0__["wonMessageBlock"].textContent = player.plural + ' won!';
    cells[0].forEach(function (e) {
      e.classList.add(cells[1]);
      e.classList.add('win');
    });
  } else {
    _index_js__WEBPACK_IMPORTED_MODULE_0__["wonMessageBlock"].textContent = 'It`s a draw!';
  }

  _index_js__WEBPACK_IMPORTED_MODULE_0__["redoBtn"].disabled = true;
  _index_js__WEBPACK_IMPORTED_MODULE_0__["undoBtn"].disabled = true;
  return true;
}

var checkForWin = function checkForWin(target, field, player) {
  var horizontal = field.filter(function (e) {
    return e.includes(target);
  })[0];

  if (horizontal.every(function (e) {
    return e.classList.contains(player.className);
  })) {
    return endGame(player, [horizontal, 'horizontal']);
  }

  var vertical = Array.from(document.querySelectorAll('.cell:nth-child(3n+' + (+target.id.slice(2) % 3 + 1).toString() + ')'));

  if (vertical.every(function (e) {
    return e.classList.contains(player.className);
  })) {
    return endGame(player, [vertical, 'vertical']);
  }

  if (+target.id.slice(2) % (_index_js__WEBPACK_IMPORTED_MODULE_0__["fieldSize"] + 1) === 0) {
    var main_diagonal = Array.from(document.querySelectorAll('.cell')).filter(function (e) {
      return +e.id.slice(2) % (_index_js__WEBPACK_IMPORTED_MODULE_0__["fieldSize"] + 1) === 0;
    });

    if (main_diagonal.every(function (e) {
      return e.classList.contains(player.className);
    })) {
      return endGame(player, [main_diagonal, 'diagonal-right']);
    }
  }

  if (+target.id.slice(2) % (_index_js__WEBPACK_IMPORTED_MODULE_0__["fieldSize"] - 1) === 0) {
    var secondary_diagonal = Array.from(document.querySelectorAll('.cell')).filter(function (e) {
      return +e.id.slice(2) % (_index_js__WEBPACK_IMPORTED_MODULE_0__["fieldSize"] - 1) === 0 && +e.id.slice(2) !== 0 && +e.id.slice(2) !== _index_js__WEBPACK_IMPORTED_MODULE_0__["fieldSize"] * _index_js__WEBPACK_IMPORTED_MODULE_0__["fieldSize"] - 1;
    });

    if (secondary_diagonal.every(function (e) {
      return e.classList.contains(player.className);
    })) {
      return endGame(player, [secondary_diagonal, 'diagonal-left']);
    }
  }

  if (document.querySelectorAll('.cell:not(.ch):not(.r) ').length === 0) {
    return endGame(false);
  }

  return false;
};

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2dlbmVyYXRlRmllbGQuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy93aW5DaGVja2VyLmpzIl0sIm5hbWVzIjpbIlJPV1NfQ09VTlQiLCJDT0xTX0NPVU5UIiwiZmllbGQiLCJkb2N1bWVudCIsInF1ZXJ5U2VsZWN0b3IiLCJnZW5lcmF0ZUNvbHMiLCJyb3ciLCJjb2xzQ291bnQiLCJyb3dJZCIsImkiLCJpZCIsImNvbCIsImNyZWF0ZUVsZW1lbnQiLCJkYXRhc2V0IiwiY2xhc3NOYW1lIiwiYXBwZW5kQ2hpbGQiLCJnZW5lcmF0ZVJvd3MiLCJyb3dzQ291bnQiLCJ3b25UaXRsZUJsb2NrIiwid29uTWVzc2FnZUJsb2NrIiwidW5kb0J0biIsInJlZG9CdG4iLCJyZXN0YXJ0QnRuIiwicGxheWVycyIsIm5hbWUiLCJwbHVyYWwiLCJ3aW5DbGFzc2VzTmFtZXMiLCJtb3ZlcyIsImNhbmNlbGxlZE1vdmVzIiwiZmllbGRPYmplY3QiLCJmaWVsZE5vZGUiLCJxdWVyeVNlbGVjdG9yQWxsIiwiZm9yRWFjaCIsImUiLCJjZWxscyIsImMiLCJwdXNoIiwiYWRkRXZlbnRMaXN0ZW5lciIsImNlbGxDbGlja0hhbmRsZXIiLCJmaWVsZFNpemUiLCJsZW5ndGgiLCJzdG9yZWRfc3RlcHMiLCJKU09OIiwicGFyc2UiLCJsb2NhbFN0b3JhZ2UiLCJnZXRJdGVtIiwic3RvcmVkX3N0ZXBzTW92ZXMiLCJzdG9yZWRfc3RlcHNDYW5jZWxsZWRNb3ZlcyIsIm1vdmUiLCJmcm9tQ2VsbElEIiwidGFyZ2V0IiwicGxheWVyIiwibWFuYWdlRG9CdXR0b25zIiwiZGlzYWJsZWQiLCJjbGFzc0xpc3QiLCJjb250YWlucyIsIndpbmRvdyIsImV2ZW50Iiwia2V5Iiwib2xkVmFsdWUiLCJuZXdWYWx1ZSIsImdhbWVSZXN0YXJ0IiwiY29waWVkIiwicCIsInJlbW92ZSIsImFkZCIsInNldEl0ZW0iLCJzdHJpbmdpZnkiLCJjaGVja0ZvcldpbiIsInVuZG8iLCJwb3AiLCJ1cGRhdGVMb2NhbFN0b3JhZ2UiLCJyZWRvIiwiZW5kR2FtZSIsInRleHRDb250ZW50IiwiaG9yaXpvbnRhbCIsImZpbHRlciIsImluY2x1ZGVzIiwiZXZlcnkiLCJ2ZXJ0aWNhbCIsIkFycmF5IiwiZnJvbSIsInNsaWNlIiwidG9TdHJpbmciLCJtYWluX2RpYWdvbmFsIiwic2Vjb25kYXJ5X2RpYWdvbmFsIl0sIm1hcHBpbmdzIjoiO1FBQUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7OztRQUdBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwwQ0FBMEMsZ0NBQWdDO1FBQzFFO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0Esd0RBQXdELGtCQUFrQjtRQUMxRTtRQUNBLGlEQUFpRCxjQUFjO1FBQy9EOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSx5Q0FBeUMsaUNBQWlDO1FBQzFFLGdIQUFnSCxtQkFBbUIsRUFBRTtRQUNySTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDJCQUEyQiwwQkFBMEIsRUFBRTtRQUN2RCxpQ0FBaUMsZUFBZTtRQUNoRDtRQUNBO1FBQ0E7O1FBRUE7UUFDQSxzREFBc0QsK0RBQStEOztRQUVySDtRQUNBOzs7UUFHQTtRQUNBOzs7Ozs7Ozs7Ozs7O0FDbEZBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBTyxJQUFNQSxVQUFVLEdBQUcsQ0FBbkI7QUFDQSxJQUFNQyxVQUFVLEdBQUcsQ0FBbkI7QUFDUCxJQUFNQyxLQUFLLEdBQUdDLFFBQVEsQ0FBQ0MsYUFBVCxDQUF1QixRQUF2QixDQUFkO0FBRU8sU0FBU0MsWUFBVCxDQUFzQkMsR0FB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LEdBQUdBLG1EQUFaLEdBQXdCLENBRGhIO0FBQUEsS0FEb0IsQ0FBekI7O0FBSUEsUUFBSThDLGtCQUFrQixDQUFDUCxLQUFuQixDQUF5QixVQUFBN0MsQ0FBQztBQUFBLGFBQUlBLENBQUMsQ0FBQ3FCLFNBQUYsQ0FBWUMsUUFBWixDQUFxQkosTUFBTSxDQUFDckMsU0FBNUIsQ0FBSjtBQUFBLEtBQTFCLENBQUosRUFBMkU7QUFDdkUsYUFBTzJELE9BQU8sQ0FBQ3RCLE1BQUQsRUFBUyxDQUFDa0Msa0JBQUQsRUFBcUIsZUFBckIsQ0FBVCxDQUFkO0FBQ0g7QUFDSjs7QUFDRCxNQUFJbEYsUUFBUSxDQUFDNEIsZ0JBQVQsQ0FBMEIseUJBQTFCLEVBQXFEUyxNQUFyRCxLQUFnRSxDQUFwRSxFQUF1RTtBQUNuRSxXQUFPaUMsT0FBTyxDQUFDLEtBQUQsQ0FBZDtBQUNIOztBQUNELFNBQU8sS0FBUDtBQUNILENBaENNLEMiLCJmaWxlIjoibWFpbi5lZGIzYjMxNTlkMGQyZWEyMzNjYi5idW5kbGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL3NyYy9pbmRleC5qc1wiKTtcbiIsImV4cG9ydCBjb25zdCBST1dTX0NPVU5UID0gMztcbmV4cG9ydCBjb25zdCBDT0xTX0NPVU5UID0gMztcbmNvbnN0IGZpZWxkID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmZpZWxkJyk7XG5cbmV4cG9ydCBmdW5jdGlvbiBnZW5lcmF0ZUNvbHMocm93LCBjb2xzQ291bnQsIHJvd0lkKSB7XG4gIGZvciAobGV0IGkgPSAwOyBpIDwgY29sc0NvdW50OyBpKyspIHtcbiAgICBjb25zdCBpZCA9IHJvd0lkICogY29sc0NvdW50ICsgaTtcbiAgICBjb25zdCBjb2wgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBjb2wuaWQgPSBgYy0ke2lkfWA7XG4gICAgY29sLmRhdGFzZXQuaWQgPSBpZDtcbiAgICBjb2wuY2xhc3NOYW1lID0gJ2NlbGwnO1xuICAgIHJvdy5hcHBlbmRDaGlsZChjb2wpO1xuICB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZW5lcmF0ZVJvd3Mocm93c0NvdW50LCBjb2xzQ291bnQpIHtcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCByb3dzQ291bnQ7IGkrKykge1xuICAgIGNvbnN0IHJvdyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIHJvdy5jbGFzc05hbWUgPSAncm93JztcbiAgICByb3cuaWQgPSBgci0ke2l9YDtcbiAgICBnZW5lcmF0ZUNvbHMocm93LCBjb2xzQ291bnQsIGkpO1xuICAgIGZpZWxkLmFwcGVuZENoaWxkKHJvdyk7XG4gIH1cbn1cblxuLy8gZ2VuZXJhdGVSb3dzKFJPV1NfQ09VTlQsIENPTFNfQ09VTlQpOyIsImltcG9ydCB7IFJPV1NfQ09VTlQsIENPTFNfQ09VTlQsIGdlbmVyYXRlUm93cyB9IGZyb20gJy4vZ2VuZXJhdGVGaWVsZC5qcyc7XG5pbXBvcnQgeyBjaGVja0ZvcldpbiB9IGZyb20gJy4vd2luQ2hlY2tlci5qcydcblxuZ2VuZXJhdGVSb3dzKFJPV1NfQ09VTlQsIENPTFNfQ09VTlQpO1xuXG5leHBvcnQgY29uc3Qgd29uVGl0bGVCbG9jayA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy53b24tdGl0bGUnKTtcbmV4cG9ydCBjb25zdCB3b25NZXNzYWdlQmxvY2sgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcud29uLW1lc3NhZ2UnKTtcbmV4cG9ydCBjb25zdCB1bmRvQnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnVuZG8tYnRuJyk7XG5leHBvcnQgY29uc3QgcmVkb0J0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5yZWRvLWJ0bicpO1xuY29uc3QgcmVzdGFydEJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5yZXN0YXJ0LWJ0bicpO1xuY29uc3QgcGxheWVycyA9IFtcbiAgICB7IG5hbWU6ICdjcm9zcycsIGNsYXNzTmFtZTogJ2NoJywgcGx1cmFsOiAnQ3Jvc3NlcycgfSxcbiAgICB7IG5hbWU6ICdyb3VuZCcsIGNsYXNzTmFtZTogJ3InLCBwbHVyYWw6ICdUb2VzJyB9XG5dO1xuY29uc3Qgd2luQ2xhc3Nlc05hbWVzID0gWydob3Jpem9udGFsJywgJ3ZlcnRpY2FsJywgJ2RpYWdvbmFsLXJpZ2h0JywgJ2RpYWdvbmFsLWxlZnQnXTtcbmxldCBtb3ZlcyA9IFtdO1xubGV0IGNhbmNlbGxlZE1vdmVzID0gW107XG5jb25zdCBmaWVsZE9iamVjdCA9IFtdO1xuY29uc3QgZmllbGROb2RlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmZpZWxkJyk7XG5maWVsZE5vZGUucXVlcnlTZWxlY3RvckFsbCgnLnJvdycpLmZvckVhY2goZSA9PiB7XG4gICAgY29uc3QgY2VsbHMgPSBlLnF1ZXJ5U2VsZWN0b3JBbGwoJy5jZWxsJyk7XG4gICAgY29uc3Qgcm93ID0gW107XG4gICAgY2VsbHMuZm9yRWFjaChjID0+IHtcbiAgICAgICAgcm93LnB1c2goYyk7XG4gICAgICAgIGMuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBjZWxsQ2xpY2tIYW5kbGVyKTtcbiAgICB9KTtcbiAgICBmaWVsZE9iamVjdC5wdXNoKHJvdyk7XG59KTtcbmV4cG9ydCBjb25zdCBmaWVsZFNpemUgPSBmaWVsZE9iamVjdC5sZW5ndGg7XG5cbmNvbnN0IHN0b3JlZF9zdGVwcyA9IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oJ2hpc3RvcnknKSk7XG5pZiAoc3RvcmVkX3N0ZXBzICYmIHN0b3JlZF9zdGVwcy5sZW5ndGggPiAwKSB7XG4gICAgY29uc3Qgc3RvcmVkX3N0ZXBzTW92ZXMgPSBzdG9yZWRfc3RlcHNbMF07XG4gICAgY29uc3Qgc3RvcmVkX3N0ZXBzQ2FuY2VsbGVkTW92ZXMgPSBzdG9yZWRfc3RlcHNbMV07XG4gICAgc3RvcmVkX3N0ZXBzTW92ZXMuZm9yRWFjaChlID0+IG1vdmUoZnJvbUNlbGxJRChlLnRhcmdldCksIGUucGxheWVyKSk7XG4gICAgaWYgKHN0b3JlZF9zdGVwc0NhbmNlbGxlZE1vdmVzICYmIHN0b3JlZF9zdGVwc0NhbmNlbGxlZE1vdmVzLmxlbmd0aCA+IDApIGNhbmNlbGxlZE1vdmVzID0gc3RvcmVkX3N0ZXBzQ2FuY2VsbGVkTW92ZXM7XG59XG5cbmZ1bmN0aW9uIG1hbmFnZURvQnV0dG9ucygpIHtcbiAgICByZWRvQnRuLmRpc2FibGVkID0gY2FuY2VsbGVkTW92ZXMubGVuZ3RoID09PSAwO1xuICAgIHVuZG9CdG4uZGlzYWJsZWQgPSBtb3Zlcy5sZW5ndGggPT09IDA7XG4gICAgaWYgKCF3b25UaXRsZUJsb2NrLmNsYXNzTGlzdC5jb250YWlucygnaGlkZGVuJykpIHtcbiAgICAgICAgcmVkb0J0bi5kaXNhYmxlZCA9IHVuZG9CdG4uZGlzYWJsZWQgPSB0cnVlO1xuICAgIH1cbn1cblxud2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3N0b3JhZ2UnLCBmdW5jdGlvbihldmVudCkge1xuICAgIGlmIChldmVudC5rZXkgPT09ICdoaXN0b3J5JyAmJiBldmVudC5vbGRWYWx1ZSAhPT0gZXZlbnQubmV3VmFsdWUpIHtcbiAgICAgICAgbGV0IHN0b3JlZF9zdGVwcyA9IGV2ZW50Lm5ld1ZhbHVlO1xuICAgICAgICBnYW1lUmVzdGFydCh0cnVlKTtcbiAgICAgICAgbGV0IHN0b3JlZF9zdGVwc0NhbmNlbGxlZE1vdmVzID0gSlNPTi5wYXJzZShzdG9yZWRfc3RlcHMpWzFdO1xuICAgICAgICBsZXQgc3RvcmVkX3N0ZXBzTW92ZXMgPSBKU09OLnBhcnNlKHN0b3JlZF9zdGVwcylbMF07XG4gICAgICAgIGlmIChzdG9yZWRfc3RlcHNNb3Zlcykgc3RvcmVkX3N0ZXBzTW92ZXMuZm9yRWFjaChlID0+IG1vdmUoZnJvbUNlbGxJRChlLnRhcmdldCksIGUucGxheWVyLCB0cnVlKSk7XG4gICAgICAgIGlmIChzdG9yZWRfc3RlcHNDYW5jZWxsZWRNb3ZlcyAmJiBzdG9yZWRfc3RlcHNDYW5jZWxsZWRNb3Zlcy5sZW5ndGggPiAwKSBjYW5jZWxsZWRNb3ZlcyA9IHN0b3JlZF9zdGVwc0NhbmNlbGxlZE1vdmVzO1xuICAgICAgICBtYW5hZ2VEb0J1dHRvbnMoKTtcbiAgICB9XG59KTtcblxuZnVuY3Rpb24gZ2FtZVJlc3RhcnQoY29waWVkID0gZmFsc2UpIHtcbiAgICBmaWVsZE5vZGUucXVlcnlTZWxlY3RvckFsbCgnLmNlbGwnKS5mb3JFYWNoKGUgPT4ge1xuICAgICAgICBwbGF5ZXJzLmZvckVhY2gocCA9PiBlLmNsYXNzTGlzdC5yZW1vdmUocC5jbGFzc05hbWUpKTtcbiAgICAgICAgd2luQ2xhc3Nlc05hbWVzLmZvckVhY2gocCA9PiBlLmNsYXNzTGlzdC5yZW1vdmUocCkpO1xuICAgICAgICBlLmNsYXNzTGlzdC5yZW1vdmUoJ3dpbicpO1xuICAgIH0pO1xuICAgIHVuZG9CdG4uZGlzYWJsZWQgPSB0cnVlO1xuICAgIHJlZG9CdG4uZGlzYWJsZWQgPSB0cnVlO1xuICAgIHdvblRpdGxlQmxvY2suY2xhc3NMaXN0LmFkZCgnaGlkZGVuJyk7XG4gICAgbW92ZXMgPSBbXTtcbiAgICBjYW5jZWxsZWRNb3ZlcyA9IFtdO1xuICAgIGlmICghY29waWVkKSB7XG4gICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCdoaXN0b3J5JywgSlNPTi5zdHJpbmdpZnkoW10pKTtcbiAgICB9XG59XG5cbmZ1bmN0aW9uIGNlbGxDbGlja0hhbmRsZXIoZSkge1xuICAgIGlmICh3b25UaXRsZUJsb2NrLmNsYXNzTGlzdC5jb250YWlucygnaGlkZGVuJykpIHtcbiAgICAgICAgY29uc3QgcGxheWVyID0gcGxheWVyc1ttb3Zlcy5sZW5ndGggJSBwbGF5ZXJzLmxlbmd0aF07XG4gICAgICAgIG1vdmUoZS50YXJnZXQsIHBsYXllcik7XG4gICAgfVxufVxuXG5mdW5jdGlvbiBtb3ZlKHRhcmdldCwgcGxheWVyLCBjb3BpZWQgPSBmYWxzZSkge1xuICAgIGNhbmNlbGxlZE1vdmVzID0gW107XG4gICAgdGFyZ2V0LmNsYXNzTGlzdC5hZGQocGxheWVyLmNsYXNzTmFtZSk7XG4gICAgbW92ZXMucHVzaCh7IHRhcmdldDogdGFyZ2V0LmlkLCBwbGF5ZXI6IHBsYXllciB9KTtcbiAgICBtYW5hZ2VEb0J1dHRvbnMoKTtcbiAgICBjaGVja0Zvcldpbih0YXJnZXQsIGZpZWxkT2JqZWN0LCBwbGF5ZXIpO1xuICAgIGlmICghY29waWVkKSBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgnaGlzdG9yeScsIEpTT04uc3RyaW5naWZ5KFttb3ZlcywgY2FuY2VsbGVkTW92ZXNdKSk7XG59XG5cbmZ1bmN0aW9uIGZyb21DZWxsSUQoaWQpIHtcbiAgICByZXR1cm4gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignIycgKyBpZCk7XG59XG5cbmZ1bmN0aW9uIHVuZG8oKSB7XG4gIGxldCBtb3ZlID0gbW92ZXMucG9wKCk7XG4gIGNhbmNlbGxlZE1vdmVzLnB1c2gobW92ZSk7XG4gIHBsYXllcnMuZm9yRWFjaChlID0+IHtcbiAgICAgIGZyb21DZWxsSUQobW92ZS50YXJnZXQpLmNsYXNzTGlzdC5yZW1vdmUoZS5jbGFzc05hbWUpO1xuICB9KTtcbiAgbWFuYWdlRG9CdXR0b25zKCk7XG4gIHVwZGF0ZUxvY2FsU3RvcmFnZSgpO1xufVxuXG5mdW5jdGlvbiByZWRvKCkge1xuICBsZXQgbW92ZSA9IGNhbmNlbGxlZE1vdmVzLnBvcCgpO1xuICBtb3Zlcy5wdXNoKG1vdmUpO1xuICBmcm9tQ2VsbElEKG1vdmUudGFyZ2V0KS5jbGFzc0xpc3QuYWRkKG1vdmUucGxheWVyLmNsYXNzTmFtZSk7XG4gIG1hbmFnZURvQnV0dG9ucygpO1xuICB1cGRhdGVMb2NhbFN0b3JhZ2UoKTtcbn1cblxuZnVuY3Rpb24gdXBkYXRlTG9jYWxTdG9yYWdlKCkge1xuICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCdoaXN0b3J5JywgSlNPTi5zdHJpbmdpZnkoW21vdmVzLCBjYW5jZWxsZWRNb3Zlc10pKTtcbiAgICBpZihjYW5jZWxsZWRNb3Zlcy5sZW5ndGggPiAwKSB7XG4gICAgICAgIHJlZG9CdG4uZGlzYWJsZWQgPSBmYWxzZTtcbiAgICB9XG59XG51cGRhdGVMb2NhbFN0b3JhZ2UoKTtcblxudW5kb0J0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHVuZG8pO1xucmVkb0J0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHJlZG8pO1xucmVzdGFydEJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGdhbWVSZXN0YXJ0KTsiLCJpbXBvcnQgeyBmaWVsZFNpemUsIHdvblRpdGxlQmxvY2ssIHdvbk1lc3NhZ2VCbG9jaywgcmVkb0J0biwgdW5kb0J0biB9IGZyb20gJy4vaW5kZXguanMnXHJcblxyXG5mdW5jdGlvbiBlbmRHYW1lKHBsYXllciA9IGZhbHNlLCBjZWxscyA9IG51bGwpIHtcclxuICAgIHdvblRpdGxlQmxvY2suY2xhc3NMaXN0LnJlbW92ZSgnaGlkZGVuJyk7XHJcbiAgICBpZiAocGxheWVyKSB7XHJcbiAgICAgICAgd29uTWVzc2FnZUJsb2NrLnRleHRDb250ZW50ID0gcGxheWVyLnBsdXJhbCArICcgd29uISc7XHJcbiAgICAgICAgY2VsbHNbMF0uZm9yRWFjaChlID0+IHtcclxuICAgICAgICAgICAgZS5jbGFzc0xpc3QuYWRkKGNlbGxzWzFdKTtcclxuICAgICAgICAgICAgZS5jbGFzc0xpc3QuYWRkKCd3aW4nKTtcclxuICAgICAgICB9KTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgICAgd29uTWVzc2FnZUJsb2NrLnRleHRDb250ZW50ID0gJ0l0YHMgYSBkcmF3ISc7XHJcbiAgICB9XHJcbiAgICByZWRvQnRuLmRpc2FibGVkID0gdHJ1ZTtcclxuICAgIHVuZG9CdG4uZGlzYWJsZWQgPSB0cnVlO1xyXG4gICAgcmV0dXJuIHRydWU7XHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBjaGVja0ZvcldpbiA9ICh0YXJnZXQsIGZpZWxkLCBwbGF5ZXIpID0+IHtcclxuICAgIGxldCBob3Jpem9udGFsID0gZmllbGQuZmlsdGVyKGUgPT4gZS5pbmNsdWRlcyh0YXJnZXQpKVswXTtcclxuICAgIGlmIChob3Jpem9udGFsLmV2ZXJ5KGUgPT4gZS5jbGFzc0xpc3QuY29udGFpbnMocGxheWVyLmNsYXNzTmFtZSkpKSB7XHJcbiAgICAgICAgcmV0dXJuIGVuZEdhbWUocGxheWVyLCBbaG9yaXpvbnRhbCwgJ2hvcml6b250YWwnXSk7XHJcbiAgICB9XHJcbiAgICBsZXQgdmVydGljYWwgPSBBcnJheS5mcm9tKFxyXG4gICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5jZWxsOm50aC1jaGlsZCgzbisnICsgKCgrdGFyZ2V0LmlkLnNsaWNlKDIpICUgMykgKyAxKS50b1N0cmluZygpICsgJyknKVxyXG4gICAgKTtcclxuICAgIGlmICh2ZXJ0aWNhbC5ldmVyeShlID0+IGUuY2xhc3NMaXN0LmNvbnRhaW5zKHBsYXllci5jbGFzc05hbWUpKSkge1xyXG4gICAgICAgIHJldHVybiBlbmRHYW1lKHBsYXllciwgW3ZlcnRpY2FsLCAndmVydGljYWwnXSk7XHJcbiAgICB9XHJcbiAgICBpZiAoK3RhcmdldC5pZC5zbGljZSgyKSAlIChmaWVsZFNpemUgKyAxKSA9PT0gMCkge1xyXG4gICAgICAgIGxldCBtYWluX2RpYWdvbmFsID0gQXJyYXkuZnJvbShkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuY2VsbCcpKS5maWx0ZXIoXHJcbiAgICAgICAgICAgIGUgPT4gK2UuaWQuc2xpY2UoMikgJSAoZmllbGRTaXplICsgMSkgPT09IDBcclxuICAgICAgICApO1xyXG4gICAgICAgIGlmIChtYWluX2RpYWdvbmFsLmV2ZXJ5KGUgPT4gZS5jbGFzc0xpc3QuY29udGFpbnMocGxheWVyLmNsYXNzTmFtZSkpKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBlbmRHYW1lKHBsYXllciwgW21haW5fZGlhZ29uYWwsICdkaWFnb25hbC1yaWdodCddKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBpZiAoK3RhcmdldC5pZC5zbGljZSgyKSAlIChmaWVsZFNpemUgLSAxKSA9PT0gMCkge1xyXG4gICAgICAgIGxldCBzZWNvbmRhcnlfZGlhZ29uYWwgPSBBcnJheS5mcm9tKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5jZWxsJykpLmZpbHRlcihcclxuICAgICAgICAgICAgZSA9PlxyXG4gICAgICAgICAgICAgICAgK2UuaWQuc2xpY2UoMikgJSAoZmllbGRTaXplIC0gMSkgPT09IDAgJiYgK2UuaWQuc2xpY2UoMikgIT09IDAgJiYgK2UuaWQuc2xpY2UoMikgIT09IGZpZWxkU2l6ZSAqIGZpZWxkU2l6ZSAtIDFcclxuICAgICAgICApO1xyXG4gICAgICAgIGlmIChzZWNvbmRhcnlfZGlhZ29uYWwuZXZlcnkoZSA9PiBlLmNsYXNzTGlzdC5jb250YWlucyhwbGF5ZXIuY2xhc3NOYW1lKSkpIHtcclxuICAgICAgICAgICAgcmV0dXJuIGVuZEdhbWUocGxheWVyLCBbc2Vjb25kYXJ5X2RpYWdvbmFsLCAnZGlhZ29uYWwtbGVmdCddKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBpZiAoZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmNlbGw6bm90KC5jaCk6bm90KC5yKSAnKS5sZW5ndGggPT09IDApIHtcclxuICAgICAgICByZXR1cm4gZW5kR2FtZShmYWxzZSk7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gZmFsc2U7XHJcbn0iXSwic291cmNlUm9vdCI6IiJ9