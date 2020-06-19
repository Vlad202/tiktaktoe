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
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _generateField__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./generateField */ "./src/generateField.js");
 // import { checkForWin } from './winChecker.js'

Object(_generateField__WEBPACK_IMPORTED_MODULE_0__["generateRows"])(_generateField__WEBPACK_IMPORTED_MODULE_0__["ROWS_COUNT"], _generateField__WEBPACK_IMPORTED_MODULE_0__["COLS_COUNT"]);
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
var storedSteps = JSON.parse(localStorage.getItem('history'));

if (storedSteps && storedSteps.length > 0) {
  var storedStepsMoves = storedSteps[0];
  var storedStepsCancelledMoves = storedSteps[1];
  storedStepsMoves.forEach(function (e) {
    return move(fromCellID(e.target), e.player);
  });
  if (storedStepsCancelledMoves && storedStepsCancelledMoves.length > 0) cancelledMoves = storedStepsCancelledMoves;
}

function manageDoButtons() {
  redoBtn.disabled = cancelledMoves.length === 0;
  undoBtn.disabled = moves.length === 0;

  if (!wonTitleBlock.classList.contains('hidden')) {
    redoBtn.disabled = true;
    undoBtn.disabled = true;
  }
}

function checkForWin(target, field, player) {
  var horizontal = field.filter(function (e) {
    return e.includes(target);
  })[0];

  if (horizontal.every(function (e) {
    return e.classList.contains(player.className);
  })) {
    return endGame(player, [horizontal, 'horizontal']);
  }

  var vertical = Array.from(document.querySelectorAll(".cell:nth-child(3n+".concat((+target.id.slice(2) % 3 + 1).toString(), ")")));

  if (vertical.every(function (e) {
    return e.classList.contains(player.className);
  })) {
    return endGame(player, [vertical, 'vertical']);
  }

  if (+target.id.slice(2) % (fieldSize + 1) === 0) {
    var mainDiagonal = Array.from(document.querySelectorAll('.cell')).filter(function (e) {
      return +e.id.slice(2) % (fieldSize + 1) === 0;
    });

    if (mainDiagonal.every(function (e) {
      return e.classList.contains(player.className);
    })) {
      return endGame(player, [mainDiagonal, 'diagonal-right']);
    }
  }

  if (+target.id.slice(2) % (fieldSize - 1) === 0) {
    var secondaryDiagonal = Array.from(document.querySelectorAll('.cell')).filter(function (e) {
      return +e.id.slice(2) % (fieldSize - 1) === 0 && +e.id.slice(2) !== 0 && +e.id.slice(2) !== fieldSize * fieldSize - 1;
    });

    if (secondaryDiagonal.every(function (e) {
      return e.classList.contains(player.className);
    })) {
      return endGame(player, [secondaryDiagonal, 'diagonal-left']);
    }
  }

  if (document.querySelectorAll('.cell:not(.ch):not(.r) ').length === 0) {
    return endGame(false);
  }

  return false;
}

function endGame() {
  var player = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
  var cells = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
  wonTitleBlock.classList.remove('hidden');

  if (player) {
    wonMessageBlock.textContent = "".concat(player.plural, " won!");
    cells[0].forEach(function (e) {
      e.classList.add(cells[1]);
      e.classList.add('win');
    });
  } else {
    wonMessageBlock.textContent = 'It`s a draw!';
  }

  redoBtn.disabled = true;
  undoBtn.disabled = true;
  return true;
}

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
  if (copied !== true) localStorage.setItem('history', JSON.stringify([]));
}

window.addEventListener('storage', function onStorage(event) {
  if (event.key === 'history' && event.oldValue !== event.newValue) {
    var _storedSteps = event.newValue;
    gameRestart(true);
    var _storedStepsCancelledMoves = JSON.parse(_storedSteps)[1];
    var _storedStepsMoves = JSON.parse(_storedSteps)[0];
    if (_storedStepsMoves) _storedStepsMoves.forEach(function (e) {
      return move(fromCellID(e.target), e.player, true);
    });
    if (_storedStepsCancelledMoves && _storedStepsCancelledMoves.length > 0) cancelledMoves = _storedStepsCancelledMoves;
    manageDoButtons();
  }
});

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
  checkForWin(target, fieldObject, player);
  if (!copied) localStorage.setItem('history', JSON.stringify([moves, cancelledMoves]));
}

function fromCellID(id) {
  return document.querySelector("#".concat(id));
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

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2dlbmVyYXRlRmllbGQuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2luZGV4LmpzIl0sIm5hbWVzIjpbIlJPV1NfQ09VTlQiLCJDT0xTX0NPVU5UIiwiZmllbGQiLCJkb2N1bWVudCIsInF1ZXJ5U2VsZWN0b3IiLCJnZW5lcmF0ZUNvbHMiLCJyb3ciLCJjb2xzQ291bnQiLCJyb3dJZCIsImkiLCJpZCIsImNvbCIsImNyZWF0ZUVsZW1lbnQiLCJkYXRhc2V0IiwiY2xhc3NOYW1lIiwiYXBwZW5kQ2hpbGQiLCJnZW5lcmF0ZVJvd3MiLCJyb3dzQ291bnQiLCJ3b25UaXRsZUJsb2NrIiwid29uTWVzc2FnZUJsb2NrIiwidW5kb0J0biIsInJlZG9CdG4iLCJyZXN0YXJ0QnRuIiwicGxheWVycyIsIm5hbWUiLCJwbHVyYWwiLCJ3aW5DbGFzc2VzTmFtZXMiLCJtb3ZlcyIsImNhbmNlbGxlZE1vdmVzIiwiZmllbGRPYmplY3QiLCJmaWVsZE5vZGUiLCJxdWVyeVNlbGVjdG9yQWxsIiwiZm9yRWFjaCIsImUiLCJjZWxscyIsImMiLCJwdXNoIiwiYWRkRXZlbnRMaXN0ZW5lciIsImNlbGxDbGlja0hhbmRsZXIiLCJmaWVsZFNpemUiLCJsZW5ndGgiLCJzdG9yZWRTdGVwcyIsIkpTT04iLCJwYXJzZSIsImxvY2FsU3RvcmFnZSIsImdldEl0ZW0iLCJzdG9yZWRTdGVwc01vdmVzIiwic3RvcmVkU3RlcHNDYW5jZWxsZWRNb3ZlcyIsIm1vdmUiLCJmcm9tQ2VsbElEIiwidGFyZ2V0IiwicGxheWVyIiwibWFuYWdlRG9CdXR0b25zIiwiZGlzYWJsZWQiLCJjbGFzc0xpc3QiLCJjb250YWlucyIsImNoZWNrRm9yV2luIiwiaG9yaXpvbnRhbCIsImZpbHRlciIsImluY2x1ZGVzIiwiZXZlcnkiLCJlbmRHYW1lIiwidmVydGljYWwiLCJBcnJheSIsImZyb20iLCJzbGljZSIsInRvU3RyaW5nIiwibWFpbkRpYWdvbmFsIiwic2Vjb25kYXJ5RGlhZ29uYWwiLCJyZW1vdmUiLCJ0ZXh0Q29udGVudCIsImFkZCIsImdhbWVSZXN0YXJ0IiwiY29waWVkIiwicCIsInNldEl0ZW0iLCJzdHJpbmdpZnkiLCJ3aW5kb3ciLCJvblN0b3JhZ2UiLCJldmVudCIsImtleSIsIm9sZFZhbHVlIiwibmV3VmFsdWUiLCJ1bmRvIiwicG9wIiwidXBkYXRlTG9jYWxTdG9yYWdlIiwicmVkbyJdLCJtYXBwaW5ncyI6IjtRQUFBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBOzs7UUFHQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMENBQTBDLGdDQUFnQztRQUMxRTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLHdEQUF3RCxrQkFBa0I7UUFDMUU7UUFDQSxpREFBaUQsY0FBYztRQUMvRDs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EseUNBQXlDLGlDQUFpQztRQUMxRSxnSEFBZ0gsbUJBQW1CLEVBQUU7UUFDckk7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwyQkFBMkIsMEJBQTBCLEVBQUU7UUFDdkQsaUNBQWlDLGVBQWU7UUFDaEQ7UUFDQTtRQUNBOztRQUVBO1FBQ0Esc0RBQXNELCtEQUErRDs7UUFFckg7UUFDQTs7O1FBR0E7UUFDQTs7Ozs7Ozs7Ozs7OztBQ2xGQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQU8sSUFBTUEsVUFBVSxHQUFHLENBQW5CO0FBQ0EsSUFBTUMsVUFBVSxHQUFHLENBQW5CO0FBQ1AsSUFBTUMsS0FBSyxHQUFHQyxRQUFRLENBQUNDLGFBQVQsQ0FBdUIsUUFBdkIsQ0FBZDtBQUVPLFNBQVNDLFlBQVQsQ0FBc0JDLEdBQXRCLEVBQTJCQyxTQUEzQixFQUFzQ0MsS0FBdEMsRUFBNkM7QUFDbEQsT0FBSyxJQUFJQyxDQUFDLEdBQUcsQ0FBYixFQUFnQkEsQ0FBQyxHQUFHRixTQUFwQixFQUErQkUsQ0FBQyxFQUFoQyxFQUFvQztBQUNsQyxRQUFNQyxFQUFFLEdBQUdGLEtBQUssR0FBR0QsU0FBUixHQUFvQkUsQ0FBL0I7QUFDQSxRQUFNRSxHQUFHLEdBQUdSLFFBQVEsQ0FBQ1MsYUFBVCxDQUF1QixLQUF2QixDQUFaO0FBQ0FELE9BQUcsQ0FBQ0QsRUFBSixlQUFjQSxFQUFkO0FBQ0FDLE9BQUcsQ0FBQ0UsT0FBSixDQUFZSCxFQUFaLEdBQWlCQSxFQUFqQjtBQUNBQyxPQUFHLENBQUNHLFNBQUosR0FBZ0IsTUFBaEI7QUFDQVIsT0FBRyxDQUFDUyxXQUFKLENBQWdCSixHQUFoQjtBQUNEO0FBQ0Y7QUFFTSxTQUFTSyxZQUFULENBQXNCQyxTQUF0QixFQUFpQ1YsU0FBakMsRUFBNEM7QUFDakQsT0FBSyxJQUFJRSxDQUFDLEdBQUcsQ0FBYixFQUFnQkEsQ0FBQyxHQUFHUSxTQUFwQixFQUErQlIsQ0FBQyxFQUFoQyxFQUFvQztBQUNsQyxRQUFNSCxHQUFHLEdBQUdILFFBQVEsQ0FBQ1MsYUFBVCxDQUF1QixLQUF2QixDQUFaO0FBQ0FOLE9BQUcsQ0FBQ1EsU0FBSixHQUFnQixLQUFoQjtBQUNBUixPQUFHLENBQUNJLEVBQUosZUFBY0QsQ0FBZDtBQUNBSixnQkFBWSxDQUFDQyxHQUFELEVBQU1DLFNBQU4sRUFBaUJFLENBQWpCLENBQVo7QUFDQVAsU0FBSyxDQUFDYSxXQUFOLENBQWtCVCxHQUFsQjtBQUNEO0FBQ0YsQyxDQUVELHdDOzs7Ozs7Ozs7Ozs7QUN6QkE7QUFBQTtDQUNBOztBQUVBVSxtRUFBWSxDQUFDaEIseURBQUQsRUFBYUMseURBQWIsQ0FBWjtBQUVBLElBQU1pQixhQUFhLEdBQUdmLFFBQVEsQ0FBQ0MsYUFBVCxDQUF1QixZQUF2QixDQUF0QjtBQUNBLElBQU1lLGVBQWUsR0FBR2hCLFFBQVEsQ0FBQ0MsYUFBVCxDQUF1QixjQUF2QixDQUF4QjtBQUNBLElBQU1nQixPQUFPLEdBQUdqQixRQUFRLENBQUNDLGFBQVQsQ0FBdUIsV0FBdkIsQ0FBaEI7QUFDQSxJQUFNaUIsT0FBTyxHQUFHbEIsUUFBUSxDQUFDQyxhQUFULENBQXVCLFdBQXZCLENBQWhCO0FBQ0EsSUFBTWtCLFVBQVUsR0FBR25CLFFBQVEsQ0FBQ0MsYUFBVCxDQUF1QixjQUF2QixDQUFuQjtBQUNBLElBQU1tQixPQUFPLEdBQUcsQ0FDZDtBQUFFQyxNQUFJLEVBQUUsT0FBUjtBQUFpQlYsV0FBUyxFQUFFLElBQTVCO0FBQWtDVyxRQUFNLEVBQUU7QUFBMUMsQ0FEYyxFQUVkO0FBQUVELE1BQUksRUFBRSxPQUFSO0FBQWlCVixXQUFTLEVBQUUsR0FBNUI7QUFBaUNXLFFBQU0sRUFBRTtBQUF6QyxDQUZjLENBQWhCO0FBSUEsSUFBTUMsZUFBZSxHQUFHLENBQUMsWUFBRCxFQUFlLFVBQWYsRUFBMkIsZ0JBQTNCLEVBQTZDLGVBQTdDLENBQXhCO0FBQ0EsSUFBSUMsS0FBSyxHQUFHLEVBQVo7QUFDQSxJQUFJQyxjQUFjLEdBQUcsRUFBckI7QUFDQSxJQUFNQyxXQUFXLEdBQUcsRUFBcEI7QUFDQSxJQUFNQyxTQUFTLEdBQUczQixRQUFRLENBQUNDLGFBQVQsQ0FBdUIsUUFBdkIsQ0FBbEI7QUFDQTBCLFNBQVMsQ0FBQ0MsZ0JBQVYsQ0FBMkIsTUFBM0IsRUFBbUNDLE9BQW5DLENBQTJDLFVBQUFDLENBQUMsRUFBSTtBQUM5QyxNQUFNQyxLQUFLLEdBQUdELENBQUMsQ0FBQ0YsZ0JBQUYsQ0FBbUIsT0FBbkIsQ0FBZDtBQUNBLE1BQU16QixHQUFHLEdBQUcsRUFBWjtBQUNBNEIsT0FBSyxDQUFDRixPQUFOLENBQWMsVUFBQUcsQ0FBQyxFQUFJO0FBQ2pCN0IsT0FBRyxDQUFDOEIsSUFBSixDQUFTRCxDQUFUO0FBQ0FBLEtBQUMsQ0FBQ0UsZ0JBQUYsQ0FBbUIsT0FBbkIsRUFBNEJDLGdCQUE1QjtBQUNELEdBSEQ7QUFJQVQsYUFBVyxDQUFDTyxJQUFaLENBQWlCOUIsR0FBakI7QUFDRCxDQVJEO0FBU0EsSUFBTWlDLFNBQVMsR0FBR1YsV0FBVyxDQUFDVyxNQUE5QjtBQUVBLElBQU1DLFdBQVcsR0FBR0MsSUFBSSxDQUFDQyxLQUFMLENBQVdDLFlBQVksQ0FBQ0MsT0FBYixDQUFxQixTQUFyQixDQUFYLENBQXBCOztBQUNBLElBQUlKLFdBQVcsSUFBSUEsV0FBVyxDQUFDRCxNQUFaLEdBQXFCLENBQXhDLEVBQTJDO0FBQ3pDLE1BQU1NLGdCQUFnQixHQUFHTCxXQUFXLENBQUMsQ0FBRCxDQUFwQztBQUNBLE1BQU1NLHlCQUF5QixHQUFHTixXQUFXLENBQUMsQ0FBRCxDQUE3QztBQUNBSyxrQkFBZ0IsQ0FBQ2QsT0FBakIsQ0FBeUIsVUFBQUMsQ0FBQztBQUFBLFdBQUllLElBQUksQ0FBQ0MsVUFBVSxDQUFDaEIsQ0FBQyxDQUFDaUIsTUFBSCxDQUFYLEVBQXVCakIsQ0FBQyxDQUFDa0IsTUFBekIsQ0FBUjtBQUFBLEdBQTFCO0FBQ0EsTUFBSUoseUJBQXlCLElBQUlBLHlCQUF5QixDQUFDUCxNQUExQixHQUFtQyxDQUFwRSxFQUF1RVosY0FBYyxHQUFHbUIseUJBQWpCO0FBQ3hFOztBQUVELFNBQVNLLGVBQVQsR0FBMkI7QUFDekIvQixTQUFPLENBQUNnQyxRQUFSLEdBQW1CekIsY0FBYyxDQUFDWSxNQUFmLEtBQTBCLENBQTdDO0FBQ0FwQixTQUFPLENBQUNpQyxRQUFSLEdBQW1CMUIsS0FBSyxDQUFDYSxNQUFOLEtBQWlCLENBQXBDOztBQUNBLE1BQUksQ0FBQ3RCLGFBQWEsQ0FBQ29DLFNBQWQsQ0FBd0JDLFFBQXhCLENBQWlDLFFBQWpDLENBQUwsRUFBaUQ7QUFDL0NsQyxXQUFPLENBQUNnQyxRQUFSLEdBQW1CLElBQW5CO0FBQ0FqQyxXQUFPLENBQUNpQyxRQUFSLEdBQW1CLElBQW5CO0FBQ0Q7QUFDRjs7QUFFRCxTQUFTRyxXQUFULENBQXFCTixNQUFyQixFQUE2QmhELEtBQTdCLEVBQW9DaUQsTUFBcEMsRUFBNEM7QUFDMUMsTUFBTU0sVUFBVSxHQUFHdkQsS0FBSyxDQUFDd0QsTUFBTixDQUFhLFVBQUF6QixDQUFDO0FBQUEsV0FBSUEsQ0FBQyxDQUFDMEIsUUFBRixDQUFXVCxNQUFYLENBQUo7QUFBQSxHQUFkLEVBQXNDLENBQXRDLENBQW5COztBQUNBLE1BQUlPLFVBQVUsQ0FBQ0csS0FBWCxDQUFpQixVQUFBM0IsQ0FBQztBQUFBLFdBQUlBLENBQUMsQ0FBQ3FCLFNBQUYsQ0FBWUMsUUFBWixDQUFxQkosTUFBTSxDQUFDckMsU0FBNUIsQ0FBSjtBQUFBLEdBQWxCLENBQUosRUFBbUU7QUFDakUsV0FBTytDLE9BQU8sQ0FBQ1YsTUFBRCxFQUFTLENBQUNNLFVBQUQsRUFBYSxZQUFiLENBQVQsQ0FBZDtBQUNEOztBQUNELE1BQU1LLFFBQVEsR0FBR0MsS0FBSyxDQUFDQyxJQUFOLENBQ2Y3RCxRQUFRLENBQUM0QixnQkFBVCw4QkFBZ0QsQ0FBRSxDQUFDbUIsTUFBTSxDQUFDeEMsRUFBUCxDQUFVdUQsS0FBVixDQUFnQixDQUFoQixDQUFELEdBQXNCLENBQXZCLEdBQTRCLENBQTdCLEVBQWdDQyxRQUFoQyxFQUFoRCxPQURlLENBQWpCOztBQUdBLE1BQUlKLFFBQVEsQ0FBQ0YsS0FBVCxDQUFlLFVBQUEzQixDQUFDO0FBQUEsV0FBSUEsQ0FBQyxDQUFDcUIsU0FBRixDQUFZQyxRQUFaLENBQXFCSixNQUFNLENBQUNyQyxTQUE1QixDQUFKO0FBQUEsR0FBaEIsQ0FBSixFQUFpRTtBQUMvRCxXQUFPK0MsT0FBTyxDQUFDVixNQUFELEVBQVMsQ0FBQ1csUUFBRCxFQUFXLFVBQVgsQ0FBVCxDQUFkO0FBQ0Q7O0FBQ0QsTUFBSSxDQUFDWixNQUFNLENBQUN4QyxFQUFQLENBQVV1RCxLQUFWLENBQWdCLENBQWhCLENBQUQsSUFBdUIxQixTQUFTLEdBQUcsQ0FBbkMsTUFBMEMsQ0FBOUMsRUFBaUQ7QUFDL0MsUUFBTTRCLFlBQVksR0FBR0osS0FBSyxDQUFDQyxJQUFOLENBQVc3RCxRQUFRLENBQUM0QixnQkFBVCxDQUEwQixPQUExQixDQUFYLEVBQStDMkIsTUFBL0MsQ0FDbkIsVUFBQXpCLENBQUM7QUFBQSxhQUFJLENBQUNBLENBQUMsQ0FBQ3ZCLEVBQUYsQ0FBS3VELEtBQUwsQ0FBVyxDQUFYLENBQUQsSUFBa0IxQixTQUFTLEdBQUcsQ0FBOUIsTUFBcUMsQ0FBekM7QUFBQSxLQURrQixDQUFyQjs7QUFHQSxRQUFJNEIsWUFBWSxDQUFDUCxLQUFiLENBQW1CLFVBQUEzQixDQUFDO0FBQUEsYUFBSUEsQ0FBQyxDQUFDcUIsU0FBRixDQUFZQyxRQUFaLENBQXFCSixNQUFNLENBQUNyQyxTQUE1QixDQUFKO0FBQUEsS0FBcEIsQ0FBSixFQUFxRTtBQUNuRSxhQUFPK0MsT0FBTyxDQUFDVixNQUFELEVBQVMsQ0FBQ2dCLFlBQUQsRUFBZSxnQkFBZixDQUFULENBQWQ7QUFDRDtBQUNGOztBQUNELE1BQUksQ0FBQ2pCLE1BQU0sQ0FBQ3hDLEVBQVAsQ0FBVXVELEtBQVYsQ0FBZ0IsQ0FBaEIsQ0FBRCxJQUF1QjFCLFNBQVMsR0FBRyxDQUFuQyxNQUEwQyxDQUE5QyxFQUFpRDtBQUMvQyxRQUFNNkIsaUJBQWlCLEdBQUdMLEtBQUssQ0FBQ0MsSUFBTixDQUFXN0QsUUFBUSxDQUFDNEIsZ0JBQVQsQ0FBMEIsT0FBMUIsQ0FBWCxFQUErQzJCLE1BQS9DLENBQ3hCLFVBQUF6QixDQUFDO0FBQUEsYUFDQyxDQUFDQSxDQUFDLENBQUN2QixFQUFGLENBQUt1RCxLQUFMLENBQVcsQ0FBWCxDQUFELElBQWtCMUIsU0FBUyxHQUFHLENBQTlCLE1BQXFDLENBQXJDLElBQTBDLENBQUNOLENBQUMsQ0FBQ3ZCLEVBQUYsQ0FBS3VELEtBQUwsQ0FBVyxDQUFYLENBQUQsS0FBbUIsQ0FBN0QsSUFBa0UsQ0FBQ2hDLENBQUMsQ0FBQ3ZCLEVBQUYsQ0FBS3VELEtBQUwsQ0FBVyxDQUFYLENBQUQsS0FBbUIxQixTQUFTLEdBQUdBLFNBQVosR0FBd0IsQ0FEOUc7QUFBQSxLQUR1QixDQUExQjs7QUFJQSxRQUFJNkIsaUJBQWlCLENBQUNSLEtBQWxCLENBQXdCLFVBQUEzQixDQUFDO0FBQUEsYUFBSUEsQ0FBQyxDQUFDcUIsU0FBRixDQUFZQyxRQUFaLENBQXFCSixNQUFNLENBQUNyQyxTQUE1QixDQUFKO0FBQUEsS0FBekIsQ0FBSixFQUEwRTtBQUN4RSxhQUFPK0MsT0FBTyxDQUFDVixNQUFELEVBQVMsQ0FBQ2lCLGlCQUFELEVBQW9CLGVBQXBCLENBQVQsQ0FBZDtBQUNEO0FBQ0Y7O0FBQ0QsTUFBSWpFLFFBQVEsQ0FBQzRCLGdCQUFULENBQTBCLHlCQUExQixFQUFxRFMsTUFBckQsS0FBZ0UsQ0FBcEUsRUFBdUU7QUFDckUsV0FBT3FCLE9BQU8sQ0FBQyxLQUFELENBQWQ7QUFDRDs7QUFDRCxTQUFPLEtBQVA7QUFDRDs7QUFFRCxTQUFTQSxPQUFULEdBQStDO0FBQUEsTUFBOUJWLE1BQThCLHVFQUFyQixLQUFxQjtBQUFBLE1BQWRqQixLQUFjLHVFQUFOLElBQU07QUFDN0NoQixlQUFhLENBQUNvQyxTQUFkLENBQXdCZSxNQUF4QixDQUErQixRQUEvQjs7QUFDQSxNQUFJbEIsTUFBSixFQUFZO0FBQ1ZoQyxtQkFBZSxDQUFDbUQsV0FBaEIsYUFBaUNuQixNQUFNLENBQUMxQixNQUF4QztBQUNBUyxTQUFLLENBQUMsQ0FBRCxDQUFMLENBQVNGLE9BQVQsQ0FBaUIsVUFBQUMsQ0FBQyxFQUFJO0FBQ3BCQSxPQUFDLENBQUNxQixTQUFGLENBQVlpQixHQUFaLENBQWdCckMsS0FBSyxDQUFDLENBQUQsQ0FBckI7QUFDQUQsT0FBQyxDQUFDcUIsU0FBRixDQUFZaUIsR0FBWixDQUFnQixLQUFoQjtBQUNELEtBSEQ7QUFJRCxHQU5ELE1BTU87QUFDTHBELG1CQUFlLENBQUNtRCxXQUFoQixHQUE4QixjQUE5QjtBQUNEOztBQUNEakQsU0FBTyxDQUFDZ0MsUUFBUixHQUFtQixJQUFuQjtBQUNBakMsU0FBTyxDQUFDaUMsUUFBUixHQUFtQixJQUFuQjtBQUNBLFNBQU8sSUFBUDtBQUNEOztBQUVELFNBQVNtQixXQUFULEdBQXFDO0FBQUEsTUFBaEJDLE1BQWdCLHVFQUFQLEtBQU87QUFDbkMzQyxXQUFTLENBQUNDLGdCQUFWLENBQTJCLE9BQTNCLEVBQW9DQyxPQUFwQyxDQUE0QyxVQUFBQyxDQUFDLEVBQUk7QUFDL0NWLFdBQU8sQ0FBQ1MsT0FBUixDQUFnQixVQUFBMEMsQ0FBQztBQUFBLGFBQUl6QyxDQUFDLENBQUNxQixTQUFGLENBQVllLE1BQVosQ0FBbUJLLENBQUMsQ0FBQzVELFNBQXJCLENBQUo7QUFBQSxLQUFqQjtBQUNBWSxtQkFBZSxDQUFDTSxPQUFoQixDQUF3QixVQUFBMEMsQ0FBQztBQUFBLGFBQUl6QyxDQUFDLENBQUNxQixTQUFGLENBQVllLE1BQVosQ0FBbUJLLENBQW5CLENBQUo7QUFBQSxLQUF6QjtBQUNBekMsS0FBQyxDQUFDcUIsU0FBRixDQUFZZSxNQUFaLENBQW1CLEtBQW5CO0FBQ0QsR0FKRDtBQUtBakQsU0FBTyxDQUFDaUMsUUFBUixHQUFtQixJQUFuQjtBQUNBaEMsU0FBTyxDQUFDZ0MsUUFBUixHQUFtQixJQUFuQjtBQUNBbkMsZUFBYSxDQUFDb0MsU0FBZCxDQUF3QmlCLEdBQXhCLENBQTRCLFFBQTVCO0FBQ0E1QyxPQUFLLEdBQUcsRUFBUjtBQUNBQyxnQkFBYyxHQUFHLEVBQWpCO0FBQ0EsTUFBSTZDLE1BQU0sS0FBSyxJQUFmLEVBQXFCN0IsWUFBWSxDQUFDK0IsT0FBYixDQUFxQixTQUFyQixFQUFnQ2pDLElBQUksQ0FBQ2tDLFNBQUwsQ0FBZSxFQUFmLENBQWhDO0FBQ3RCOztBQUNEQyxNQUFNLENBQUN4QyxnQkFBUCxDQUF3QixTQUF4QixFQUFtQyxTQUFTeUMsU0FBVCxDQUFtQkMsS0FBbkIsRUFBMEI7QUFDM0QsTUFBSUEsS0FBSyxDQUFDQyxHQUFOLEtBQWMsU0FBZCxJQUEyQkQsS0FBSyxDQUFDRSxRQUFOLEtBQW1CRixLQUFLLENBQUNHLFFBQXhELEVBQWtFO0FBQ2hFLFFBQU16QyxZQUFXLEdBQUdzQyxLQUFLLENBQUNHLFFBQTFCO0FBQ0FWLGVBQVcsQ0FBQyxJQUFELENBQVg7QUFDQSxRQUFNekIsMEJBQXlCLEdBQUdMLElBQUksQ0FBQ0MsS0FBTCxDQUFXRixZQUFYLEVBQXdCLENBQXhCLENBQWxDO0FBQ0EsUUFBTUssaUJBQWdCLEdBQUdKLElBQUksQ0FBQ0MsS0FBTCxDQUFXRixZQUFYLEVBQXdCLENBQXhCLENBQXpCO0FBQ0EsUUFBSUssaUJBQUosRUFBc0JBLGlCQUFnQixDQUFDZCxPQUFqQixDQUF5QixVQUFBQyxDQUFDO0FBQUEsYUFBSWUsSUFBSSxDQUFDQyxVQUFVLENBQUNoQixDQUFDLENBQUNpQixNQUFILENBQVgsRUFBdUJqQixDQUFDLENBQUNrQixNQUF6QixFQUFpQyxJQUFqQyxDQUFSO0FBQUEsS0FBMUI7QUFDdEIsUUFBSUosMEJBQXlCLElBQUlBLDBCQUF5QixDQUFDUCxNQUExQixHQUFtQyxDQUFwRSxFQUF1RVosY0FBYyxHQUFHbUIsMEJBQWpCO0FBQ3ZFSyxtQkFBZTtBQUNoQjtBQUNGLENBVkQ7O0FBV0EsU0FBU2QsZ0JBQVQsQ0FBMEJMLENBQTFCLEVBQTZCO0FBQzNCLE1BQUlmLGFBQWEsQ0FBQ29DLFNBQWQsQ0FBd0JDLFFBQXhCLENBQWlDLFFBQWpDLENBQUosRUFBZ0Q7QUFDOUMsUUFBTUosTUFBTSxHQUFHNUIsT0FBTyxDQUFDSSxLQUFLLENBQUNhLE1BQU4sR0FBZWpCLE9BQU8sQ0FBQ2lCLE1BQXhCLENBQXRCO0FBQ0FRLFFBQUksQ0FBQ2YsQ0FBQyxDQUFDaUIsTUFBSCxFQUFXQyxNQUFYLENBQUo7QUFDRDtBQUNGOztBQUVELFNBQVNILElBQVQsQ0FBY0UsTUFBZCxFQUFzQkMsTUFBdEIsRUFBOEM7QUFBQSxNQUFoQnNCLE1BQWdCLHVFQUFQLEtBQU87QUFDNUM3QyxnQkFBYyxHQUFHLEVBQWpCO0FBQ0FzQixRQUFNLENBQUNJLFNBQVAsQ0FBaUJpQixHQUFqQixDQUFxQnBCLE1BQU0sQ0FBQ3JDLFNBQTVCO0FBQ0FhLE9BQUssQ0FBQ1MsSUFBTixDQUFXO0FBQUVjLFVBQU0sRUFBRUEsTUFBTSxDQUFDeEMsRUFBakI7QUFBcUJ5QyxVQUFNLEVBQU5BO0FBQXJCLEdBQVg7QUFDQUMsaUJBQWU7QUFDZkksYUFBVyxDQUFDTixNQUFELEVBQVNyQixXQUFULEVBQXNCc0IsTUFBdEIsQ0FBWDtBQUNBLE1BQUksQ0FBQ3NCLE1BQUwsRUFBYTdCLFlBQVksQ0FBQytCLE9BQWIsQ0FBcUIsU0FBckIsRUFBZ0NqQyxJQUFJLENBQUNrQyxTQUFMLENBQWUsQ0FBQ2pELEtBQUQsRUFBUUMsY0FBUixDQUFmLENBQWhDO0FBQ2Q7O0FBRUQsU0FBU3FCLFVBQVQsQ0FBb0J2QyxFQUFwQixFQUF3QjtBQUN0QixTQUFPUCxRQUFRLENBQUNDLGFBQVQsWUFBMkJNLEVBQTNCLEVBQVA7QUFDRDs7QUFFRCxTQUFTeUUsSUFBVCxHQUFnQjtBQUNkLE1BQU1uQyxJQUFJLEdBQUdyQixLQUFLLENBQUN5RCxHQUFOLEVBQWI7QUFDQXhELGdCQUFjLENBQUNRLElBQWYsQ0FBb0JZLElBQXBCO0FBQ0F6QixTQUFPLENBQUNTLE9BQVIsQ0FBZ0IsVUFBQUMsQ0FBQyxFQUFJO0FBQ25CZ0IsY0FBVSxDQUFDRCxJQUFJLENBQUNFLE1BQU4sQ0FBVixDQUF3QkksU0FBeEIsQ0FBa0NlLE1BQWxDLENBQXlDcEMsQ0FBQyxDQUFDbkIsU0FBM0M7QUFDRCxHQUZEO0FBR0FzQyxpQkFBZTtBQUNmaUMsb0JBQWtCO0FBQ25COztBQUVELFNBQVNDLElBQVQsR0FBZ0I7QUFDZCxNQUFNdEMsSUFBSSxHQUFHcEIsY0FBYyxDQUFDd0QsR0FBZixFQUFiO0FBQ0F6RCxPQUFLLENBQUNTLElBQU4sQ0FBV1ksSUFBWDtBQUNBQyxZQUFVLENBQUNELElBQUksQ0FBQ0UsTUFBTixDQUFWLENBQXdCSSxTQUF4QixDQUFrQ2lCLEdBQWxDLENBQXNDdkIsSUFBSSxDQUFDRyxNQUFMLENBQVlyQyxTQUFsRDtBQUNBc0MsaUJBQWU7QUFDZmlDLG9CQUFrQjtBQUNuQjs7QUFFRCxTQUFTQSxrQkFBVCxHQUE4QjtBQUM1QnpDLGNBQVksQ0FBQytCLE9BQWIsQ0FBcUIsU0FBckIsRUFBZ0NqQyxJQUFJLENBQUNrQyxTQUFMLENBQWUsQ0FBQ2pELEtBQUQsRUFBUUMsY0FBUixDQUFmLENBQWhDOztBQUNBLE1BQUlBLGNBQWMsQ0FBQ1ksTUFBZixHQUF3QixDQUE1QixFQUErQjtBQUM3Qm5CLFdBQU8sQ0FBQ2dDLFFBQVIsR0FBbUIsS0FBbkI7QUFDRDtBQUNGOztBQUNEZ0Msa0JBQWtCO0FBRWxCakUsT0FBTyxDQUFDaUIsZ0JBQVIsQ0FBeUIsT0FBekIsRUFBa0M4QyxJQUFsQztBQUNBOUQsT0FBTyxDQUFDZ0IsZ0JBQVIsQ0FBeUIsT0FBekIsRUFBa0NpRCxJQUFsQztBQUNBaEUsVUFBVSxDQUFDZSxnQkFBWCxDQUE0QixPQUE1QixFQUFxQ21DLFdBQXJDLEUiLCJmaWxlIjoibWFpbi5kODdhZGY2OGVlNTY3ODg0ZDFlOC5idW5kbGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL3NyYy9pbmRleC5qc1wiKTtcbiIsImV4cG9ydCBjb25zdCBST1dTX0NPVU5UID0gMztcbmV4cG9ydCBjb25zdCBDT0xTX0NPVU5UID0gMztcbmNvbnN0IGZpZWxkID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmZpZWxkJyk7XG5cbmV4cG9ydCBmdW5jdGlvbiBnZW5lcmF0ZUNvbHMocm93LCBjb2xzQ291bnQsIHJvd0lkKSB7XG4gIGZvciAobGV0IGkgPSAwOyBpIDwgY29sc0NvdW50OyBpKyspIHtcbiAgICBjb25zdCBpZCA9IHJvd0lkICogY29sc0NvdW50ICsgaTtcbiAgICBjb25zdCBjb2wgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBjb2wuaWQgPSBgYy0ke2lkfWA7XG4gICAgY29sLmRhdGFzZXQuaWQgPSBpZDtcbiAgICBjb2wuY2xhc3NOYW1lID0gJ2NlbGwnO1xuICAgIHJvdy5hcHBlbmRDaGlsZChjb2wpO1xuICB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZW5lcmF0ZVJvd3Mocm93c0NvdW50LCBjb2xzQ291bnQpIHtcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCByb3dzQ291bnQ7IGkrKykge1xuICAgIGNvbnN0IHJvdyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIHJvdy5jbGFzc05hbWUgPSAncm93JztcbiAgICByb3cuaWQgPSBgci0ke2l9YDtcbiAgICBnZW5lcmF0ZUNvbHMocm93LCBjb2xzQ291bnQsIGkpO1xuICAgIGZpZWxkLmFwcGVuZENoaWxkKHJvdyk7XG4gIH1cbn1cblxuLy8gZ2VuZXJhdGVSb3dzKFJPV1NfQ09VTlQsIENPTFNfQ09VTlQpOyIsImltcG9ydCB7IFJPV1NfQ09VTlQsIENPTFNfQ09VTlQsIGdlbmVyYXRlUm93cyB9IGZyb20gJy4vZ2VuZXJhdGVGaWVsZCc7XG4vLyBpbXBvcnQgeyBjaGVja0ZvcldpbiB9IGZyb20gJy4vd2luQ2hlY2tlci5qcydcblxuZ2VuZXJhdGVSb3dzKFJPV1NfQ09VTlQsIENPTFNfQ09VTlQpO1xuXG5jb25zdCB3b25UaXRsZUJsb2NrID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLndvbi10aXRsZScpO1xuY29uc3Qgd29uTWVzc2FnZUJsb2NrID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLndvbi1tZXNzYWdlJyk7XG5jb25zdCB1bmRvQnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnVuZG8tYnRuJyk7XG5jb25zdCByZWRvQnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnJlZG8tYnRuJyk7XG5jb25zdCByZXN0YXJ0QnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnJlc3RhcnQtYnRuJyk7XG5jb25zdCBwbGF5ZXJzID0gW1xuICB7IG5hbWU6ICdjcm9zcycsIGNsYXNzTmFtZTogJ2NoJywgcGx1cmFsOiAnQ3Jvc3NlcycgfSxcbiAgeyBuYW1lOiAncm91bmQnLCBjbGFzc05hbWU6ICdyJywgcGx1cmFsOiAnVG9lcycgfSxcbl07XG5jb25zdCB3aW5DbGFzc2VzTmFtZXMgPSBbJ2hvcml6b250YWwnLCAndmVydGljYWwnLCAnZGlhZ29uYWwtcmlnaHQnLCAnZGlhZ29uYWwtbGVmdCddO1xubGV0IG1vdmVzID0gW107XG5sZXQgY2FuY2VsbGVkTW92ZXMgPSBbXTtcbmNvbnN0IGZpZWxkT2JqZWN0ID0gW107XG5jb25zdCBmaWVsZE5vZGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZmllbGQnKTtcbmZpZWxkTm9kZS5xdWVyeVNlbGVjdG9yQWxsKCcucm93JykuZm9yRWFjaChlID0+IHtcbiAgY29uc3QgY2VsbHMgPSBlLnF1ZXJ5U2VsZWN0b3JBbGwoJy5jZWxsJyk7XG4gIGNvbnN0IHJvdyA9IFtdO1xuICBjZWxscy5mb3JFYWNoKGMgPT4ge1xuICAgIHJvdy5wdXNoKGMpO1xuICAgIGMuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBjZWxsQ2xpY2tIYW5kbGVyKTtcbiAgfSk7XG4gIGZpZWxkT2JqZWN0LnB1c2gocm93KTtcbn0pO1xuY29uc3QgZmllbGRTaXplID0gZmllbGRPYmplY3QubGVuZ3RoO1xuXG5jb25zdCBzdG9yZWRTdGVwcyA9IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oJ2hpc3RvcnknKSk7XG5pZiAoc3RvcmVkU3RlcHMgJiYgc3RvcmVkU3RlcHMubGVuZ3RoID4gMCkge1xuICBjb25zdCBzdG9yZWRTdGVwc01vdmVzID0gc3RvcmVkU3RlcHNbMF07XG4gIGNvbnN0IHN0b3JlZFN0ZXBzQ2FuY2VsbGVkTW92ZXMgPSBzdG9yZWRTdGVwc1sxXTtcbiAgc3RvcmVkU3RlcHNNb3Zlcy5mb3JFYWNoKGUgPT4gbW92ZShmcm9tQ2VsbElEKGUudGFyZ2V0KSwgZS5wbGF5ZXIpKTtcbiAgaWYgKHN0b3JlZFN0ZXBzQ2FuY2VsbGVkTW92ZXMgJiYgc3RvcmVkU3RlcHNDYW5jZWxsZWRNb3Zlcy5sZW5ndGggPiAwKSBjYW5jZWxsZWRNb3ZlcyA9IHN0b3JlZFN0ZXBzQ2FuY2VsbGVkTW92ZXM7XG59XG5cbmZ1bmN0aW9uIG1hbmFnZURvQnV0dG9ucygpIHtcbiAgcmVkb0J0bi5kaXNhYmxlZCA9IGNhbmNlbGxlZE1vdmVzLmxlbmd0aCA9PT0gMDtcbiAgdW5kb0J0bi5kaXNhYmxlZCA9IG1vdmVzLmxlbmd0aCA9PT0gMDtcbiAgaWYgKCF3b25UaXRsZUJsb2NrLmNsYXNzTGlzdC5jb250YWlucygnaGlkZGVuJykpIHtcbiAgICByZWRvQnRuLmRpc2FibGVkID0gdHJ1ZTtcbiAgICB1bmRvQnRuLmRpc2FibGVkID0gdHJ1ZTtcbiAgfVxufVxuXG5mdW5jdGlvbiBjaGVja0Zvcldpbih0YXJnZXQsIGZpZWxkLCBwbGF5ZXIpIHtcbiAgY29uc3QgaG9yaXpvbnRhbCA9IGZpZWxkLmZpbHRlcihlID0+IGUuaW5jbHVkZXModGFyZ2V0KSlbMF07XG4gIGlmIChob3Jpem9udGFsLmV2ZXJ5KGUgPT4gZS5jbGFzc0xpc3QuY29udGFpbnMocGxheWVyLmNsYXNzTmFtZSkpKSB7XG4gICAgcmV0dXJuIGVuZEdhbWUocGxheWVyLCBbaG9yaXpvbnRhbCwgJ2hvcml6b250YWwnXSk7XG4gIH1cbiAgY29uc3QgdmVydGljYWwgPSBBcnJheS5mcm9tKFxuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoYC5jZWxsOm50aC1jaGlsZCgzbiskeygoK3RhcmdldC5pZC5zbGljZSgyKSAlIDMpICsgMSkudG9TdHJpbmcoKX0pYClcbiAgKTtcbiAgaWYgKHZlcnRpY2FsLmV2ZXJ5KGUgPT4gZS5jbGFzc0xpc3QuY29udGFpbnMocGxheWVyLmNsYXNzTmFtZSkpKSB7XG4gICAgcmV0dXJuIGVuZEdhbWUocGxheWVyLCBbdmVydGljYWwsICd2ZXJ0aWNhbCddKTtcbiAgfVxuICBpZiAoK3RhcmdldC5pZC5zbGljZSgyKSAlIChmaWVsZFNpemUgKyAxKSA9PT0gMCkge1xuICAgIGNvbnN0IG1haW5EaWFnb25hbCA9IEFycmF5LmZyb20oZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmNlbGwnKSkuZmlsdGVyKFxuICAgICAgZSA9PiArZS5pZC5zbGljZSgyKSAlIChmaWVsZFNpemUgKyAxKSA9PT0gMFxuICAgICk7XG4gICAgaWYgKG1haW5EaWFnb25hbC5ldmVyeShlID0+IGUuY2xhc3NMaXN0LmNvbnRhaW5zKHBsYXllci5jbGFzc05hbWUpKSkge1xuICAgICAgcmV0dXJuIGVuZEdhbWUocGxheWVyLCBbbWFpbkRpYWdvbmFsLCAnZGlhZ29uYWwtcmlnaHQnXSk7XG4gICAgfVxuICB9XG4gIGlmICgrdGFyZ2V0LmlkLnNsaWNlKDIpICUgKGZpZWxkU2l6ZSAtIDEpID09PSAwKSB7XG4gICAgY29uc3Qgc2Vjb25kYXJ5RGlhZ29uYWwgPSBBcnJheS5mcm9tKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5jZWxsJykpLmZpbHRlcihcbiAgICAgIGUgPT5cbiAgICAgICAgK2UuaWQuc2xpY2UoMikgJSAoZmllbGRTaXplIC0gMSkgPT09IDAgJiYgK2UuaWQuc2xpY2UoMikgIT09IDAgJiYgK2UuaWQuc2xpY2UoMikgIT09IGZpZWxkU2l6ZSAqIGZpZWxkU2l6ZSAtIDFcbiAgICApO1xuICAgIGlmIChzZWNvbmRhcnlEaWFnb25hbC5ldmVyeShlID0+IGUuY2xhc3NMaXN0LmNvbnRhaW5zKHBsYXllci5jbGFzc05hbWUpKSkge1xuICAgICAgcmV0dXJuIGVuZEdhbWUocGxheWVyLCBbc2Vjb25kYXJ5RGlhZ29uYWwsICdkaWFnb25hbC1sZWZ0J10pO1xuICAgIH1cbiAgfVxuICBpZiAoZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmNlbGw6bm90KC5jaCk6bm90KC5yKSAnKS5sZW5ndGggPT09IDApIHtcbiAgICByZXR1cm4gZW5kR2FtZShmYWxzZSk7XG4gIH1cbiAgcmV0dXJuIGZhbHNlO1xufVxuXG5mdW5jdGlvbiBlbmRHYW1lKHBsYXllciA9IGZhbHNlLCBjZWxscyA9IG51bGwpIHtcbiAgd29uVGl0bGVCbG9jay5jbGFzc0xpc3QucmVtb3ZlKCdoaWRkZW4nKTtcbiAgaWYgKHBsYXllcikge1xuICAgIHdvbk1lc3NhZ2VCbG9jay50ZXh0Q29udGVudCA9IGAke3BsYXllci5wbHVyYWx9IHdvbiFgO1xuICAgIGNlbGxzWzBdLmZvckVhY2goZSA9PiB7XG4gICAgICBlLmNsYXNzTGlzdC5hZGQoY2VsbHNbMV0pO1xuICAgICAgZS5jbGFzc0xpc3QuYWRkKCd3aW4nKTtcbiAgICB9KTtcbiAgfSBlbHNlIHtcbiAgICB3b25NZXNzYWdlQmxvY2sudGV4dENvbnRlbnQgPSAnSXRgcyBhIGRyYXchJztcbiAgfVxuICByZWRvQnRuLmRpc2FibGVkID0gdHJ1ZTtcbiAgdW5kb0J0bi5kaXNhYmxlZCA9IHRydWU7XG4gIHJldHVybiB0cnVlO1xufVxuXG5mdW5jdGlvbiBnYW1lUmVzdGFydChjb3BpZWQgPSBmYWxzZSkge1xuICBmaWVsZE5vZGUucXVlcnlTZWxlY3RvckFsbCgnLmNlbGwnKS5mb3JFYWNoKGUgPT4ge1xuICAgIHBsYXllcnMuZm9yRWFjaChwID0+IGUuY2xhc3NMaXN0LnJlbW92ZShwLmNsYXNzTmFtZSkpO1xuICAgIHdpbkNsYXNzZXNOYW1lcy5mb3JFYWNoKHAgPT4gZS5jbGFzc0xpc3QucmVtb3ZlKHApKTtcbiAgICBlLmNsYXNzTGlzdC5yZW1vdmUoJ3dpbicpO1xuICB9KTtcbiAgdW5kb0J0bi5kaXNhYmxlZCA9IHRydWU7XG4gIHJlZG9CdG4uZGlzYWJsZWQgPSB0cnVlO1xuICB3b25UaXRsZUJsb2NrLmNsYXNzTGlzdC5hZGQoJ2hpZGRlbicpO1xuICBtb3ZlcyA9IFtdO1xuICBjYW5jZWxsZWRNb3ZlcyA9IFtdO1xuICBpZiAoY29waWVkICE9PSB0cnVlKSBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgnaGlzdG9yeScsIEpTT04uc3RyaW5naWZ5KFtdKSk7XG59XG53aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignc3RvcmFnZScsIGZ1bmN0aW9uIG9uU3RvcmFnZShldmVudCkge1xuICBpZiAoZXZlbnQua2V5ID09PSAnaGlzdG9yeScgJiYgZXZlbnQub2xkVmFsdWUgIT09IGV2ZW50Lm5ld1ZhbHVlKSB7XG4gICAgY29uc3Qgc3RvcmVkU3RlcHMgPSBldmVudC5uZXdWYWx1ZTtcbiAgICBnYW1lUmVzdGFydCh0cnVlKTtcbiAgICBjb25zdCBzdG9yZWRTdGVwc0NhbmNlbGxlZE1vdmVzID0gSlNPTi5wYXJzZShzdG9yZWRTdGVwcylbMV07XG4gICAgY29uc3Qgc3RvcmVkU3RlcHNNb3ZlcyA9IEpTT04ucGFyc2Uoc3RvcmVkU3RlcHMpWzBdO1xuICAgIGlmIChzdG9yZWRTdGVwc01vdmVzKSBzdG9yZWRTdGVwc01vdmVzLmZvckVhY2goZSA9PiBtb3ZlKGZyb21DZWxsSUQoZS50YXJnZXQpLCBlLnBsYXllciwgdHJ1ZSkpO1xuICAgIGlmIChzdG9yZWRTdGVwc0NhbmNlbGxlZE1vdmVzICYmIHN0b3JlZFN0ZXBzQ2FuY2VsbGVkTW92ZXMubGVuZ3RoID4gMCkgY2FuY2VsbGVkTW92ZXMgPSBzdG9yZWRTdGVwc0NhbmNlbGxlZE1vdmVzO1xuICAgIG1hbmFnZURvQnV0dG9ucygpO1xuICB9XG59KTtcbmZ1bmN0aW9uIGNlbGxDbGlja0hhbmRsZXIoZSkge1xuICBpZiAod29uVGl0bGVCbG9jay5jbGFzc0xpc3QuY29udGFpbnMoJ2hpZGRlbicpKSB7XG4gICAgY29uc3QgcGxheWVyID0gcGxheWVyc1ttb3Zlcy5sZW5ndGggJSBwbGF5ZXJzLmxlbmd0aF07XG4gICAgbW92ZShlLnRhcmdldCwgcGxheWVyKTtcbiAgfVxufVxuXG5mdW5jdGlvbiBtb3ZlKHRhcmdldCwgcGxheWVyLCBjb3BpZWQgPSBmYWxzZSkge1xuICBjYW5jZWxsZWRNb3ZlcyA9IFtdO1xuICB0YXJnZXQuY2xhc3NMaXN0LmFkZChwbGF5ZXIuY2xhc3NOYW1lKTtcbiAgbW92ZXMucHVzaCh7IHRhcmdldDogdGFyZ2V0LmlkLCBwbGF5ZXIgfSk7XG4gIG1hbmFnZURvQnV0dG9ucygpO1xuICBjaGVja0Zvcldpbih0YXJnZXQsIGZpZWxkT2JqZWN0LCBwbGF5ZXIpO1xuICBpZiAoIWNvcGllZCkgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ2hpc3RvcnknLCBKU09OLnN0cmluZ2lmeShbbW92ZXMsIGNhbmNlbGxlZE1vdmVzXSkpO1xufVxuXG5mdW5jdGlvbiBmcm9tQ2VsbElEKGlkKSB7XG4gIHJldHVybiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGAjJHtpZH1gKTtcbn1cblxuZnVuY3Rpb24gdW5kbygpIHtcbiAgY29uc3QgbW92ZSA9IG1vdmVzLnBvcCgpO1xuICBjYW5jZWxsZWRNb3Zlcy5wdXNoKG1vdmUpO1xuICBwbGF5ZXJzLmZvckVhY2goZSA9PiB7XG4gICAgZnJvbUNlbGxJRChtb3ZlLnRhcmdldCkuY2xhc3NMaXN0LnJlbW92ZShlLmNsYXNzTmFtZSk7XG4gIH0pO1xuICBtYW5hZ2VEb0J1dHRvbnMoKTtcbiAgdXBkYXRlTG9jYWxTdG9yYWdlKCk7XG59XG5cbmZ1bmN0aW9uIHJlZG8oKSB7XG4gIGNvbnN0IG1vdmUgPSBjYW5jZWxsZWRNb3Zlcy5wb3AoKTtcbiAgbW92ZXMucHVzaChtb3ZlKTtcbiAgZnJvbUNlbGxJRChtb3ZlLnRhcmdldCkuY2xhc3NMaXN0LmFkZChtb3ZlLnBsYXllci5jbGFzc05hbWUpO1xuICBtYW5hZ2VEb0J1dHRvbnMoKTtcbiAgdXBkYXRlTG9jYWxTdG9yYWdlKCk7XG59XG5cbmZ1bmN0aW9uIHVwZGF0ZUxvY2FsU3RvcmFnZSgpIHtcbiAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ2hpc3RvcnknLCBKU09OLnN0cmluZ2lmeShbbW92ZXMsIGNhbmNlbGxlZE1vdmVzXSkpO1xuICBpZiAoY2FuY2VsbGVkTW92ZXMubGVuZ3RoID4gMCkge1xuICAgIHJlZG9CdG4uZGlzYWJsZWQgPSBmYWxzZTtcbiAgfVxufVxudXBkYXRlTG9jYWxTdG9yYWdlKCk7XG5cbnVuZG9CdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCB1bmRvKTtcbnJlZG9CdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCByZWRvKTtcbnJlc3RhcnRCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBnYW1lUmVzdGFydCk7XG4iXSwic291cmNlUm9vdCI6IiJ9