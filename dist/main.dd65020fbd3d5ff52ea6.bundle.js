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
/*! exports provided: ROWS_COUNT, COLS_COUNT, generateRows */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ROWS_COUNT", function() { return ROWS_COUNT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "COLS_COUNT", function() { return COLS_COUNT; });
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
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _generateField_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./generateField.js */ "./src/generateField.js");

Object(_generateField_js__WEBPACK_IMPORTED_MODULE_0__["generateRows"])(_generateField_js__WEBPACK_IMPORTED_MODULE_0__["ROWS_COUNT"], _generateField_js__WEBPACK_IMPORTED_MODULE_0__["COLS_COUNT"]);
var wonTitleElement = document.querySelector('.won-title');
var wonMessageElement = document.querySelector('.won-message');
var undoButton = document.querySelector('.undo-btn');
var redoButton = document.querySelector('.redo-btn');
var restartButton = document.querySelector('.restart-btn');
var fieldObject = [];
var fieldNode = document.querySelector('.field');
var winClassesNames = ['horizontal', 'vertical', 'diagonal-right', 'diagonal-left'];
var moves = [];
var cancelledMoves = [];

var cellClickHandler = function cellClickHandler(e) {
  if (wonTitleElement.classList.contains('hidden')) {
    var player = players[moves.length % players.length];
    move(e.target, player);
  }
};

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
var players = [{
  name: 'cross',
  className: 'ch',
  plural: 'Crosses'
}, {
  name: 'round',
  className: 'r',
  plural: 'Toes'
}];
var saved = JSON.parse(localStorage.getItem('ticTacToeMoves'));

if (saved && saved.length > 0) {
  var savedMoves = saved[0];
  var savedCancelledMoves = saved[1];
  savedMoves.forEach(function (e) {
    return move(fromCellID(e.target), e.player);
  });
  if (savedCancelledMoves && savedCancelledMoves.length > 0) cancelledMoves = savedCancelledMoves;
}

;

var manageDoButtons = function manageDoButtons() {
  redoButton.disabled = cancelledMoves.length === 0;
  undoButton.disabled = moves.length === 0;

  if (!wonTitleElement.classList.contains('hidden')) {
    redoButton.disabled = undoButton.disabled = true;
  }
};

var resetGame = function resetGame() {
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
  undoButton.disabled = true;
  redoButton.disabled = true;
  wonTitleElement.classList.add('hidden');
  moves = [];
  cancelledMoves = [];
  if (copied !== true) localStorage.setItem('ticTacToeMoves', JSON.stringify([]));
};

window.addEventListener('storage', function (event) {
  if (event.key === 'ticTacToeMoves' && event.oldValue !== event.newValue) {
    var _saved = event.newValue;
    resetGame(true);
    var _savedCancelledMoves = JSON.parse(_saved)[1];
    var _savedMoves = JSON.parse(_saved)[0];
    if (_savedMoves) _savedMoves.forEach(function (e) {
      return move(fromCellID(e.target), e.player, true);
    });
    if (_savedCancelledMoves && _savedCancelledMoves.length > 0) cancelledMoves = _savedCancelledMoves;
    manageDoButtons();
  }
});

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

  if (+target.id.slice(2) % (fieldSize + 1) === 0) {
    var diagonalMajor = Array.from(document.querySelectorAll('.cell')).filter(function (e) {
      return +e.id.slice(2) % (fieldSize + 1) === 0;
    });

    if (diagonalMajor.every(function (e) {
      return e.classList.contains(player.className);
    })) {
      return endGame(player, [diagonalMajor, 'diagonal-right']);
    }
  }

  if (+target.id.slice(2) % (fieldSize - 1) === 0) {
    var diagonalMinor = Array.from(document.querySelectorAll('.cell')).filter(function (e) {
      return +e.id.slice(2) % (fieldSize - 1) === 0 && +e.id.slice(2) !== 0 && +e.id.slice(2) !== fieldSize * fieldSize - 1;
    });

    if (diagonalMinor.every(function (e) {
      return e.classList.contains(player.className);
    })) {
      return endGame(player, [diagonalMinor, 'diagonal-left']);
    }
  }

  if (document.querySelectorAll('.cell:not(.ch):not(.r) ').length === 0) {
    return endGame(false);
  }

  return false;
};

var move = function move(target, player) {
  var copied = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
  cancelledMoves = [];
  target.classList.add(player.className);
  moves.push({
    target: target.id,
    player: player
  });
  manageDoButtons();
  checkForWin(target, fieldObject, player);
  if (!copied) localStorage.setItem('ticTacToeMoves', JSON.stringify([moves, cancelledMoves]));
};

var endGame = function endGame() {
  var player = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
  var cells = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
  wonTitleElement.classList.remove('hidden');

  if (player) {
    wonMessageElement.textContent = player.plural + ' won!';
    cells[0].forEach(function (e) {
      e.classList.add(cells[1]);
      e.classList.add('win');
    });
  } else {
    wonMessageElement.textContent = 'It`s a draw!';
  }

  redoButton.disabled = true;
  undoButton.disabled = true;
  return true;
};

var fromCellID = function fromCellID(id) {
  return document.querySelector('#' + id);
};

var updateLocalStorage = function updateLocalStorage() {
  localStorage.setItem('ticTacToeMoves', JSON.stringify([moves, cancelledMoves]));

  if (cancelledMoves.length > 0) {
    redoButton.disabled = false;
  }
};

updateLocalStorage();

var undo = function undo() {
  var move = moves.pop();
  cancelledMoves.push(move);
  players.forEach(function (e) {
    fromCellID(move.target).classList.remove(e.className);
  });
  manageDoButtons();
  updateLocalStorage();
};

var redo = function redo() {
  var move = cancelledMoves.pop();
  moves.push(move);
  fromCellID(move.target).classList.add(move.player.className);
  manageDoButtons();
  updateLocalStorage();
};

undoButton.addEventListener('click', undo);
redoButton.addEventListener('click', redo);
restartButton.addEventListener('click', resetGame);

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2dlbmVyYXRlRmllbGQuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2luZGV4LmpzIl0sIm5hbWVzIjpbIlJPV1NfQ09VTlQiLCJDT0xTX0NPVU5UIiwiZmllbGQiLCJkb2N1bWVudCIsInF1ZXJ5U2VsZWN0b3IiLCJnZW5lcmF0ZUNvbHMiLCJyb3ciLCJjb2xzQ291bnQiLCJyb3dJZCIsImkiLCJpZCIsImNvbCIsImNyZWF0ZUVsZW1lbnQiLCJkYXRhc2V0IiwiY2xhc3NOYW1lIiwiYXBwZW5kQ2hpbGQiLCJnZW5lcmF0ZVJvd3MiLCJyb3dzQ291bnQiLCJ3b25UaXRsZUVsZW1lbnQiLCJ3b25NZXNzYWdlRWxlbWVudCIsInVuZG9CdXR0b24iLCJyZWRvQnV0dG9uIiwicmVzdGFydEJ1dHRvbiIsImZpZWxkT2JqZWN0IiwiZmllbGROb2RlIiwid2luQ2xhc3Nlc05hbWVzIiwibW92ZXMiLCJjYW5jZWxsZWRNb3ZlcyIsImNlbGxDbGlja0hhbmRsZXIiLCJlIiwiY2xhc3NMaXN0IiwiY29udGFpbnMiLCJwbGF5ZXIiLCJwbGF5ZXJzIiwibGVuZ3RoIiwibW92ZSIsInRhcmdldCIsInF1ZXJ5U2VsZWN0b3JBbGwiLCJmb3JFYWNoIiwiY2VsbHMiLCJjIiwicHVzaCIsImFkZEV2ZW50TGlzdGVuZXIiLCJmaWVsZFNpemUiLCJuYW1lIiwicGx1cmFsIiwic2F2ZWQiLCJKU09OIiwicGFyc2UiLCJsb2NhbFN0b3JhZ2UiLCJnZXRJdGVtIiwic2F2ZWRNb3ZlcyIsInNhdmVkQ2FuY2VsbGVkTW92ZXMiLCJmcm9tQ2VsbElEIiwibWFuYWdlRG9CdXR0b25zIiwiZGlzYWJsZWQiLCJyZXNldEdhbWUiLCJjb3BpZWQiLCJwIiwicmVtb3ZlIiwiYWRkIiwic2V0SXRlbSIsInN0cmluZ2lmeSIsIndpbmRvdyIsImV2ZW50Iiwia2V5Iiwib2xkVmFsdWUiLCJuZXdWYWx1ZSIsImNoZWNrRm9yV2luIiwiaG9yaXpvbnRhbCIsImZpbHRlciIsImluY2x1ZGVzIiwiZXZlcnkiLCJlbmRHYW1lIiwidmVydGljYWwiLCJBcnJheSIsImZyb20iLCJzbGljZSIsInRvU3RyaW5nIiwiZGlhZ29uYWxNYWpvciIsImRpYWdvbmFsTWlub3IiLCJ0ZXh0Q29udGVudCIsInVwZGF0ZUxvY2FsU3RvcmFnZSIsInVuZG8iLCJwb3AiLCJyZWRvIl0sIm1hcHBpbmdzIjoiO1FBQUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7OztRQUdBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwwQ0FBMEMsZ0NBQWdDO1FBQzFFO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0Esd0RBQXdELGtCQUFrQjtRQUMxRTtRQUNBLGlEQUFpRCxjQUFjO1FBQy9EOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSx5Q0FBeUMsaUNBQWlDO1FBQzFFLGdIQUFnSCxtQkFBbUIsRUFBRTtRQUNySTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDJCQUEyQiwwQkFBMEIsRUFBRTtRQUN2RCxpQ0FBaUMsZUFBZTtRQUNoRDtRQUNBO1FBQ0E7O1FBRUE7UUFDQSxzREFBc0QsK0RBQStEOztRQUVySDtRQUNBOzs7UUFHQTtRQUNBOzs7Ozs7Ozs7Ozs7O0FDbEZBO0FBQUE7QUFBQTtBQUFBO0FBQU8sSUFBTUEsVUFBVSxHQUFHLENBQW5CO0FBQ0EsSUFBTUMsVUFBVSxHQUFHLENBQW5CO0FBQ1AsSUFBTUMsS0FBSyxHQUFHQyxRQUFRLENBQUNDLGFBQVQsQ0FBdUIsUUFBdkIsQ0FBZDs7QUFFQSxTQUFTQyxZQUFULENBQXNCQyxHQUF0QixFQUEyQkMsU0FBM0IsRUFBc0NDLEtBQXRDLEVBQTZDO0FBQzNDLE9BQUssSUFBSUMs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QXdDLGlCQUFlO0FBQ2Y0QixvQkFBa0I7QUFDbkIsQ0FSRDs7QUFTQSxJQUFNRyxJQUFJLEdBQUcsU0FBUEEsSUFBTyxHQUFNO0FBQ2pCLE1BQU1sRCxJQUFJLEdBQUdSLGNBQWMsQ0FBQ3lELEdBQWYsRUFBYjtBQUNBMUQsT0FBSyxDQUFDZSxJQUFOLENBQVdOLElBQVg7QUFDQWtCLFlBQVUsQ0FBQ2xCLElBQUksQ0FBQ0MsTUFBTixDQUFWLENBQXdCTixTQUF4QixDQUFrQzhCLEdBQWxDLENBQXNDekIsSUFBSSxDQUFDSCxNQUFMLENBQVlsQixTQUFsRDtBQUNBd0MsaUJBQWU7QUFDZjRCLG9CQUFrQjtBQUNuQixDQU5EOztBQVFBOUQsVUFBVSxDQUFDc0IsZ0JBQVgsQ0FBNEIsT0FBNUIsRUFBcUN5QyxJQUFyQztBQUNBOUQsVUFBVSxDQUFDcUIsZ0JBQVgsQ0FBNEIsT0FBNUIsRUFBcUMyQyxJQUFyQztBQUNBL0QsYUFBYSxDQUFDb0IsZ0JBQWQsQ0FBK0IsT0FBL0IsRUFBd0NjLFNBQXhDLEUiLCJmaWxlIjoibWFpbi5kZDY1MDIwZmJkM2Q1ZmY1MmVhNi5idW5kbGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL3NyYy9pbmRleC5qc1wiKTtcbiIsImV4cG9ydCBjb25zdCBST1dTX0NPVU5UID0gMztcbmV4cG9ydCBjb25zdCBDT0xTX0NPVU5UID0gMztcbmNvbnN0IGZpZWxkID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmZpZWxkJyk7XG5cbmZ1bmN0aW9uIGdlbmVyYXRlQ29scyhyb3csIGNvbHNDb3VudCwgcm93SWQpIHtcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBjb2xzQ291bnQ7IGkrKykge1xuICAgIGNvbnN0IGlkID0gcm93SWQgKiBjb2xzQ291bnQgKyBpO1xuICAgIGNvbnN0IGNvbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGNvbC5pZCA9IGBjLSR7aWR9YDtcbiAgICBjb2wuZGF0YXNldC5pZCA9IGlkO1xuICAgIGNvbC5jbGFzc05hbWUgPSAnY2VsbCc7XG4gICAgcm93LmFwcGVuZENoaWxkKGNvbCk7XG4gIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdlbmVyYXRlUm93cyhyb3dzQ291bnQsIGNvbHNDb3VudCkge1xuICBmb3IgKGxldCBpID0gMDsgaSA8IHJvd3NDb3VudDsgaSsrKSB7XG4gICAgY29uc3Qgcm93ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgcm93LmNsYXNzTmFtZSA9ICdyb3cnO1xuICAgIHJvdy5pZCA9IGByLSR7aX1gO1xuICAgIGdlbmVyYXRlQ29scyhyb3csIGNvbHNDb3VudCwgaSk7XG4gICAgZmllbGQuYXBwZW5kQ2hpbGQocm93KTtcbiAgfVxufVxuXG4vLyBnZW5lcmF0ZVJvd3MoUk9XU19DT1VOVCwgQ09MU19DT1VOVCk7IiwiaW1wb3J0IHsgUk9XU19DT1VOVCwgQ09MU19DT1VOVCwgZ2VuZXJhdGVSb3dzIH0gZnJvbSAnLi9nZW5lcmF0ZUZpZWxkLmpzJztcblxuZ2VuZXJhdGVSb3dzKFJPV1NfQ09VTlQsIENPTFNfQ09VTlQpO1xuY29uc3Qgd29uVGl0bGVFbGVtZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLndvbi10aXRsZScpO1xuY29uc3Qgd29uTWVzc2FnZUVsZW1lbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcud29uLW1lc3NhZ2UnKTtcbmNvbnN0IHVuZG9CdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudW5kby1idG4nKTtcbmNvbnN0IHJlZG9CdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucmVkby1idG4nKTtcbmNvbnN0IHJlc3RhcnRCdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucmVzdGFydC1idG4nKTtcbmNvbnN0IGZpZWxkT2JqZWN0ID0gW107XG5jb25zdCBmaWVsZE5vZGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZmllbGQnKTtcbmNvbnN0IHdpbkNsYXNzZXNOYW1lcyA9IFsnaG9yaXpvbnRhbCcsICd2ZXJ0aWNhbCcsICdkaWFnb25hbC1yaWdodCcsICdkaWFnb25hbC1sZWZ0J107XG5sZXQgbW92ZXMgPSBbXTtcbmxldCBjYW5jZWxsZWRNb3ZlcyA9IFtdO1xuY29uc3QgY2VsbENsaWNrSGFuZGxlciA9IGUgPT4ge1xuICAgIGlmICh3b25UaXRsZUVsZW1lbnQuY2xhc3NMaXN0LmNvbnRhaW5zKCdoaWRkZW4nKSkge1xuICAgICAgICBjb25zdCBwbGF5ZXIgPSBwbGF5ZXJzW21vdmVzLmxlbmd0aCAlIHBsYXllcnMubGVuZ3RoXTtcbiAgICAgICAgbW92ZShlLnRhcmdldCwgcGxheWVyKTtcbiAgICB9XG59O1xuZmllbGROb2RlLnF1ZXJ5U2VsZWN0b3JBbGwoJy5yb3cnKS5mb3JFYWNoKGUgPT4ge1xuICAgIGNvbnN0IGNlbGxzID0gZS5xdWVyeVNlbGVjdG9yQWxsKCcuY2VsbCcpO1xuICAgIGNvbnN0IHJvdyA9IFtdO1xuICAgIGNlbGxzLmZvckVhY2goYyA9PiB7XG4gICAgICAgIHJvdy5wdXNoKGMpO1xuICAgICAgICBjLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgY2VsbENsaWNrSGFuZGxlcik7XG4gICAgfSk7XG4gICAgZmllbGRPYmplY3QucHVzaChyb3cpO1xufSk7XG5jb25zdCBmaWVsZFNpemUgPSBmaWVsZE9iamVjdC5sZW5ndGg7XG5jb25zdCBwbGF5ZXJzID0gW1xuICAgIHsgbmFtZTogJ2Nyb3NzJywgY2xhc3NOYW1lOiAnY2gnLCBwbHVyYWw6ICdDcm9zc2VzJyB9LFxuICAgIHsgbmFtZTogJ3JvdW5kJywgY2xhc3NOYW1lOiAncicsIHBsdXJhbDogJ1RvZXMnIH1cbl07XG5cbmNvbnN0IHNhdmVkID0gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgndGljVGFjVG9lTW92ZXMnKSk7XG5pZiAoc2F2ZWQgJiYgc2F2ZWQubGVuZ3RoID4gMCkge1xuICAgIGNvbnN0IHNhdmVkTW92ZXMgPSBzYXZlZFswXTtcbiAgICBjb25zdCBzYXZlZENhbmNlbGxlZE1vdmVzID0gc2F2ZWRbMV07XG4gICAgc2F2ZWRNb3Zlcy5mb3JFYWNoKGUgPT4gbW92ZShmcm9tQ2VsbElEKGUudGFyZ2V0KSwgZS5wbGF5ZXIpKTtcbiAgICBpZiAoc2F2ZWRDYW5jZWxsZWRNb3ZlcyAmJiBzYXZlZENhbmNlbGxlZE1vdmVzLmxlbmd0aCA+IDApIGNhbmNlbGxlZE1vdmVzID0gc2F2ZWRDYW5jZWxsZWRNb3Zlcztcbn07XG5cbmNvbnN0IG1hbmFnZURvQnV0dG9ucyA9ICgpID0+IHtcbiAgICByZWRvQnV0dG9uLmRpc2FibGVkID0gY2FuY2VsbGVkTW92ZXMubGVuZ3RoID09PSAwO1xuICAgIHVuZG9CdXR0b24uZGlzYWJsZWQgPSBtb3Zlcy5sZW5ndGggPT09IDA7XG4gICAgaWYgKCF3b25UaXRsZUVsZW1lbnQuY2xhc3NMaXN0LmNvbnRhaW5zKCdoaWRkZW4nKSkge1xuICAgICAgICByZWRvQnV0dG9uLmRpc2FibGVkID0gdW5kb0J1dHRvbi5kaXNhYmxlZCA9IHRydWU7XG4gICAgfVxufTtcbmNvbnN0IHJlc2V0R2FtZSA9IChjb3BpZWQgPSBmYWxzZSkgPT4ge1xuICAgIGZpZWxkTm9kZS5xdWVyeVNlbGVjdG9yQWxsKCcuY2VsbCcpLmZvckVhY2goZSA9PiB7XG4gICAgICAgIHBsYXllcnMuZm9yRWFjaChwID0+IGUuY2xhc3NMaXN0LnJlbW92ZShwLmNsYXNzTmFtZSkpO1xuICAgICAgICB3aW5DbGFzc2VzTmFtZXMuZm9yRWFjaChwID0+IGUuY2xhc3NMaXN0LnJlbW92ZShwKSk7XG4gICAgICAgIGUuY2xhc3NMaXN0LnJlbW92ZSgnd2luJyk7XG4gICAgfSk7XG4gICAgdW5kb0J1dHRvbi5kaXNhYmxlZCA9IHRydWU7XG4gICAgcmVkb0J1dHRvbi5kaXNhYmxlZCA9IHRydWU7XG4gICAgd29uVGl0bGVFbGVtZW50LmNsYXNzTGlzdC5hZGQoJ2hpZGRlbicpO1xuICAgIG1vdmVzID0gW107XG4gICAgY2FuY2VsbGVkTW92ZXMgPSBbXTtcbiAgICBpZiAoY29waWVkICE9PSB0cnVlKSBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgndGljVGFjVG9lTW92ZXMnLCBKU09OLnN0cmluZ2lmeShbXSkpO1xufTtcbndpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdzdG9yYWdlJywgZnVuY3Rpb24oZXZlbnQpIHtcbiAgICBpZiAoZXZlbnQua2V5ID09PSAndGljVGFjVG9lTW92ZXMnICYmIGV2ZW50Lm9sZFZhbHVlICE9PSBldmVudC5uZXdWYWx1ZSkge1xuICAgICAgICBjb25zdCBzYXZlZCA9IGV2ZW50Lm5ld1ZhbHVlO1xuICAgICAgICByZXNldEdhbWUodHJ1ZSk7XG4gICAgICAgIGNvbnN0IHNhdmVkQ2FuY2VsbGVkTW92ZXMgPSBKU09OLnBhcnNlKHNhdmVkKVsxXTtcbiAgICAgICAgY29uc3Qgc2F2ZWRNb3ZlcyA9IEpTT04ucGFyc2Uoc2F2ZWQpWzBdO1xuICAgICAgICBpZiAoc2F2ZWRNb3Zlcykgc2F2ZWRNb3Zlcy5mb3JFYWNoKGUgPT4gbW92ZShmcm9tQ2VsbElEKGUudGFyZ2V0KSwgZS5wbGF5ZXIsIHRydWUpKTtcbiAgICAgICAgaWYgKHNhdmVkQ2FuY2VsbGVkTW92ZXMgJiYgc2F2ZWRDYW5jZWxsZWRNb3Zlcy5sZW5ndGggPiAwKSBjYW5jZWxsZWRNb3ZlcyA9IHNhdmVkQ2FuY2VsbGVkTW92ZXM7XG4gICAgICAgIG1hbmFnZURvQnV0dG9ucygpO1xuICAgIH1cbn0pO1xuY29uc3QgY2hlY2tGb3JXaW4gPSAodGFyZ2V0LCBmaWVsZCwgcGxheWVyKSA9PiB7XG4gICAgY29uc3QgaG9yaXpvbnRhbCA9IGZpZWxkLmZpbHRlcihlID0+IGUuaW5jbHVkZXModGFyZ2V0KSlbMF07XG4gICAgaWYgKGhvcml6b250YWwuZXZlcnkoZSA9PiBlLmNsYXNzTGlzdC5jb250YWlucyhwbGF5ZXIuY2xhc3NOYW1lKSkpIHtcbiAgICAgICAgcmV0dXJuIGVuZEdhbWUocGxheWVyLCBbaG9yaXpvbnRhbCwgJ2hvcml6b250YWwnXSk7XG4gICAgfVxuICAgIGNvbnN0IHZlcnRpY2FsID0gQXJyYXkuZnJvbShcbiAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmNlbGw6bnRoLWNoaWxkKDNuKycgKyAoKCt0YXJnZXQuaWQuc2xpY2UoMikgJSAzKSArIDEpLnRvU3RyaW5nKCkgKyAnKScpXG4gICAgKTtcbiAgICBpZiAodmVydGljYWwuZXZlcnkoZSA9PiBlLmNsYXNzTGlzdC5jb250YWlucyhwbGF5ZXIuY2xhc3NOYW1lKSkpIHtcbiAgICAgICAgcmV0dXJuIGVuZEdhbWUocGxheWVyLCBbdmVydGljYWwsICd2ZXJ0aWNhbCddKTtcbiAgICB9XG4gICAgaWYgKCt0YXJnZXQuaWQuc2xpY2UoMikgJSAoZmllbGRTaXplICsgMSkgPT09IDApIHtcbiAgICAgICAgY29uc3QgZGlhZ29uYWxNYWpvciA9IEFycmF5LmZyb20oZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmNlbGwnKSkuZmlsdGVyKFxuICAgICAgICAgICAgZSA9PiArZS5pZC5zbGljZSgyKSAlIChmaWVsZFNpemUgKyAxKSA9PT0gMFxuICAgICAgICApO1xuICAgICAgICBpZiAoZGlhZ29uYWxNYWpvci5ldmVyeShlID0+IGUuY2xhc3NMaXN0LmNvbnRhaW5zKHBsYXllci5jbGFzc05hbWUpKSkge1xuICAgICAgICAgICAgcmV0dXJuIGVuZEdhbWUocGxheWVyLCBbZGlhZ29uYWxNYWpvciwgJ2RpYWdvbmFsLXJpZ2h0J10pO1xuICAgICAgICB9XG4gICAgfVxuICAgIGlmICgrdGFyZ2V0LmlkLnNsaWNlKDIpICUgKGZpZWxkU2l6ZSAtIDEpID09PSAwKSB7XG4gICAgICAgIGNvbnN0IGRpYWdvbmFsTWlub3IgPSBBcnJheS5mcm9tKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5jZWxsJykpLmZpbHRlciggXG4gICAgICAgICAgICBlID0+ICtlLmlkLnNsaWNlKDIpICUgKGZpZWxkU2l6ZSAtIDEpID09PSAwICYmICtlLmlkLnNsaWNlKDIpICE9PSAwICYmICtlLmlkLnNsaWNlKDIpICE9PSBmaWVsZFNpemUgKiBmaWVsZFNpemUgLSAxXG4gICAgICAgICk7XG4gICAgICAgIGlmIChkaWFnb25hbE1pbm9yLmV2ZXJ5KGUgPT4gZS5jbGFzc0xpc3QuY29udGFpbnMocGxheWVyLmNsYXNzTmFtZSkpKSB7XG4gICAgICAgICAgICByZXR1cm4gZW5kR2FtZShwbGF5ZXIsIFtkaWFnb25hbE1pbm9yLCAnZGlhZ29uYWwtbGVmdCddKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBpZiAoZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmNlbGw6bm90KC5jaCk6bm90KC5yKSAnKS5sZW5ndGggPT09IDApIHtcbiAgICAgICAgcmV0dXJuIGVuZEdhbWUoZmFsc2UpO1xuICAgIH1cbiAgICByZXR1cm4gZmFsc2U7XG59O1xuY29uc3QgbW92ZSA9ICh0YXJnZXQsIHBsYXllciwgY29waWVkID0gZmFsc2UpID0+IHtcbiAgICBjYW5jZWxsZWRNb3ZlcyA9IFtdO1xuICAgIHRhcmdldC5jbGFzc0xpc3QuYWRkKHBsYXllci5jbGFzc05hbWUpO1xuICAgIG1vdmVzLnB1c2goeyB0YXJnZXQ6IHRhcmdldC5pZCwgcGxheWVyOiBwbGF5ZXIgfSk7XG4gICAgbWFuYWdlRG9CdXR0b25zKCk7XG4gICAgY2hlY2tGb3JXaW4odGFyZ2V0LCBmaWVsZE9iamVjdCwgcGxheWVyKTtcbiAgICBpZiAoIWNvcGllZCkgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ3RpY1RhY1RvZU1vdmVzJywgSlNPTi5zdHJpbmdpZnkoW21vdmVzLCBjYW5jZWxsZWRNb3Zlc10pKTtcbn07XG5jb25zdCBlbmRHYW1lID0gKHBsYXllciA9IGZhbHNlLCBjZWxscyA9IG51bGwpID0+IHtcbiAgICB3b25UaXRsZUVsZW1lbnQuY2xhc3NMaXN0LnJlbW92ZSgnaGlkZGVuJyk7XG4gICAgaWYgKHBsYXllcikge1xuICAgICAgICB3b25NZXNzYWdlRWxlbWVudC50ZXh0Q29udGVudCA9IHBsYXllci5wbHVyYWwgKyAnIHdvbiEnO1xuICAgICAgICBjZWxsc1swXS5mb3JFYWNoKGUgPT4ge1xuICAgICAgICAgICAgZS5jbGFzc0xpc3QuYWRkKGNlbGxzWzFdKTtcbiAgICAgICAgICAgIGUuY2xhc3NMaXN0LmFkZCgnd2luJyk7XG4gICAgICAgIH0pO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIHdvbk1lc3NhZ2VFbGVtZW50LnRleHRDb250ZW50ID0gJ0l0YHMgYSBkcmF3ISc7XG4gICAgfVxuICAgIHJlZG9CdXR0b24uZGlzYWJsZWQgPSB0cnVlO1xuICAgIHVuZG9CdXR0b24uZGlzYWJsZWQgPSB0cnVlO1xuICAgIHJldHVybiB0cnVlO1xufTtcbmNvbnN0IGZyb21DZWxsSUQgPSBpZCA9PiB7XG4gICAgcmV0dXJuIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyMnICsgaWQpO1xufTtcbmNvbnN0IHVwZGF0ZUxvY2FsU3RvcmFnZSA9ICgpID0+IHtcbiAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgndGljVGFjVG9lTW92ZXMnLCBKU09OLnN0cmluZ2lmeShbbW92ZXMsIGNhbmNlbGxlZE1vdmVzXSkpO1xuICAgIGlmKGNhbmNlbGxlZE1vdmVzLmxlbmd0aCA+IDApIHtcbiAgICAgICAgcmVkb0J1dHRvbi5kaXNhYmxlZCA9IGZhbHNlO1xuICAgIH1cbn07XG51cGRhdGVMb2NhbFN0b3JhZ2UoKTtcbmNvbnN0IHVuZG8gPSAoKSA9PiB7XG4gIGNvbnN0IG1vdmUgPSBtb3Zlcy5wb3AoKTtcbiAgY2FuY2VsbGVkTW92ZXMucHVzaChtb3ZlKTtcbiAgcGxheWVycy5mb3JFYWNoKGUgPT4ge1xuICAgICAgZnJvbUNlbGxJRChtb3ZlLnRhcmdldCkuY2xhc3NMaXN0LnJlbW92ZShlLmNsYXNzTmFtZSk7XG4gIH0pO1xuICBtYW5hZ2VEb0J1dHRvbnMoKTtcbiAgdXBkYXRlTG9jYWxTdG9yYWdlKCk7XG59O1xuY29uc3QgcmVkbyA9ICgpID0+IHtcbiAgY29uc3QgbW92ZSA9IGNhbmNlbGxlZE1vdmVzLnBvcCgpO1xuICBtb3Zlcy5wdXNoKG1vdmUpO1xuICBmcm9tQ2VsbElEKG1vdmUudGFyZ2V0KS5jbGFzc0xpc3QuYWRkKG1vdmUucGxheWVyLmNsYXNzTmFtZSk7XG4gIG1hbmFnZURvQnV0dG9ucygpO1xuICB1cGRhdGVMb2NhbFN0b3JhZ2UoKTtcbn07XG5cbnVuZG9CdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCB1bmRvKTtcbnJlZG9CdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCByZWRvKTtcbnJlc3RhcnRCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCByZXNldEdhbWUpOyJdLCJzb3VyY2VSb290IjoiIn0=