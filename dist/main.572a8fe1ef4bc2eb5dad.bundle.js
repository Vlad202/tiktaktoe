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
/* harmony import */ var _generateField_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./generateField.js */ "./src/generateField.js");
 // import { checkForWin } from './winChecker.js'

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

function checkForWin(target, field, player) {
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
    var main_diagonal = Array.from(document.querySelectorAll('.cell')).filter(function (e) {
      return +e.id.slice(2) % (fieldSize + 1) === 0;
    });

    if (main_diagonal.every(function (e) {
      return e.classList.contains(player.className);
    })) {
      return endGame(player, [main_diagonal, 'diagonal-right']);
    }
  }

  if (+target.id.slice(2) % (fieldSize - 1) === 0) {
    var secondary_diagonal = Array.from(document.querySelectorAll('.cell')).filter(function (e) {
      return +e.id.slice(2) % (fieldSize - 1) === 0 && +e.id.slice(2) !== 0 && +e.id.slice(2) !== fieldSize * fieldSize - 1;
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
}

function endGame() {
  var player = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
  var cells = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
  wonTitleBlock.classList.remove('hidden');

  if (player) {
    wonMessageBlock.textContent = player.plural + ' won!';
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
  checkForWin(target, fieldObject, player);
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

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2dlbmVyYXRlRmllbGQuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2luZGV4LmpzIl0sIm5hbWVzIjpbIlJPV1NfQ09VTlQiLCJDT0xTX0NPVU5UIiwiZmllbGQiLCJkb2N1bWVudCIsInF1ZXJ5U2VsZWN0b3IiLCJnZW5lcmF0ZUNvbHMiLCJyb3ciLCJjb2xzQ291bnQiLCJyb3dJZCIsImkiLCJpZCIsImNvbCIsImNyZWF0ZUVsZW1lbnQiLCJkYXRhc2V0IiwiY2xhc3NOYW1lIiwiYXBwZW5kQ2hpbGQiLCJnZW5lcmF0ZVJvd3MiLCJyb3dzQ291bnQiLCJ3b25UaXRsZUJsb2NrIiwid29uTWVzc2FnZUJsb2NrIiwidW5kb0J0biIsInJlZG9CdG4iLCJyZXN0YXJ0QnRuIiwicGxheWVycyIsIm5hbWUiLCJwbHVyYWwiLCJ3aW5DbGFzc2VzTmFtZXMiLCJtb3ZlcyIsImNhbmNlbGxlZE1vdmVzIiwiZmllbGRPYmplY3QiLCJmaWVsZE5vZGUiLCJxdWVyeVNlbGVjdG9yQWxsIiwiZm9yRWFjaCIsImUiLCJjZWxscyIsImMiLCJwdXNoIiwiYWRkRXZlbnRMaXN0ZW5lciIsImNlbGxDbGlja0hhbmRsZXIiLCJmaWVsZFNpemUiLCJsZW5ndGgiLCJzdG9yZWRfc3RlcHMiLCJKU09OIiwicGFyc2UiLCJsb2NhbFN0b3JhZ2UiLCJnZXRJdGVtIiwic3RvcmVkX3N0ZXBzTW92ZXMiLCJzdG9yZWRfc3RlcHNDYW5jZWxsZWRNb3ZlcyIsIm1vdmUiLCJmcm9tQ2VsbElEIiwidGFyZ2V0IiwicGxheWVyIiwibWFuYWdlRG9CdXR0b25zIiwiZGlzYWJsZWQiLCJjbGFzc0xpc3QiLCJjb250YWlucyIsIndpbmRvdyIsImV2ZW50Iiwia2V5Iiwib2xkVmFsdWUiLCJuZXdWYWx1ZSIsImdhbWVSZXN0YXJ0IiwiY2hlY2tGb3JXaW4iLCJob3Jpem9udGFsIiwiZmlsdGVyIiwiaW5jbHVkZXMiLCJldmVyeSIsImVuZEdhbWUiLCJ2ZXJ0aWNhbCIsIkFycmF5IiwiZnJvbSIsInNsaWNlIiwidG9TdHJpbmciLCJtYWluX2RpYWdvbmFsIiwic2Vjb25kYXJ5X2RpYWdvbmFsIiwicmVtb3ZlIiwidGV4dENvbnRlbnQiLCJhZGQiLCJjb3BpZWQiLCJwIiwic2V0SXRlbSIsInN0cmluZ2lmeSIsInVuZG8iLCJwb3AiLCJ1cGRhdGVMb2NhbFN0b3JhZ2UiLCJyZWRvIl0sIm1hcHBpbmdzIjoiO1FBQUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7OztRQUdBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwwQ0FBMEMsZ0NBQWdDO1FBQzFFO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0Esd0RBQXdELGtCQUFrQjtRQUMxRTtRQUNBLGlEQUFpRCxjQUFjO1FBQy9EOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSx5Q0FBeUMsaUNBQWlDO1FBQzFFLGdIQUFnSCxtQkFBbUIsRUFBRTtRQUNySTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDJCQUEyQiwwQkFBMEIsRUFBRTtRQUN2RCxpQ0FBaUMsZUFBZTtRQUNoRDtRQUNBO1FBQ0E7O1FBRUE7UUFDQSxzREFBc0QsK0RBQStEOztRQUVySDtRQUNBOzs7UUFHQTtRQUNBOzs7Ozs7Ozs7Ozs7O0FDbEZBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBTyxJQUFNQSxVQUFVLEdBQUcsQ0FBbkI7QUFDQSxJQUFNQyxVQUFVLEdBQUcsQ0FBbkI7QUFDUCxJQUFNQyxLQUFLLEdBQUdDLFFBQVEsQ0FBQ0MsYUFBVCxDQUF1QixRQUF2QixDQUFkO0FBRU8sU0FBU0MsWUFBVCxDQUFzQkMsR0FBdEIsRUFBMkJDLFNBQTNCLEVBQXNDQyxLQUF0QyxFQUE2QztBQUNsRCxPQUFLLElBQUlDLENBQUMsR0FBRyxDQUFiLEVBQWdCQSxDQUFDLEdBQUdGLFNBQXBCLEVBQStCRSxDQUFDLEVBQWhDLEVBQW9DO0FBQ2xDLFFBQU1DLEVBQUUsR0FBR0YsS0FBSyxHQUFHRCxTQUFSLEdBQW9CRSxDQUEvQjtBQUNBLFFBQU1FLEdBQUcsR0FBR1IsUUFBUSxDQUFDUyxhQUFULENBQXVCLEtBQXZCLENBQVo7QUFDQUQsT0FBRyxDQUFDRCxFQUFKLGVBQWNBLEVBQWQ7QUFDQUMsT0FBRyxDQUFDRSxPQUFKLENBQVlILEVBQVosR0FBaUJBLEVBQWpCO0FBQ0FDLE9BQUcsQ0FBQ0csU0FBSixHQUFnQixNQUFoQjtBQUNBUixPQUFHLENBQUNTLFdBQUosQ0FBZ0JKLEdBQWhCO0FBQ0Q7QUFDRjtBQUVNLFNBQVNLLFlBQVQsQ0FBc0JDLFNBQXRCLEVBQWlDVixTQUFqQyxFQUE0QztBQUNqRCxPQUFLLElBQUlFLENBQUMsR0FBRyxDQUFiLEVBQWdCQSxDQUFDLEdBQUdRLFNBQXBCLEVBQStCUixDQUFDLEVBQWhDLEVBQW9DO0FBQ2xDLFFBQU1ILEdBQUcsR0FBR0gsUUFBUSxDQUFDUyxhQUFULENBQXVCLEtBQXZCLENBQVo7QUFDQU4sT0FBRyxDQUFDUSxTQUFKLEdBQWdCLEtBQWhCO0FBQ0FSLE9BQUcsQ0FBQ0ksRUFBSixlQUFjRCxDQUFkO0FBQ0FKLGdCQUFZLENBQUNDLEdBQUQsRUFBTUMsU0FBTixFQUFpQkUsQ0FBakIsQ0FBWjtBQUNBUCxTQUFLLENBQUNhLFdBQU4sQ0FBa0JULEdBQWxCO0FBQ0Q7QUFDRixDLENBRUQsd0M7Ozs7Ozs7Ozs7OztBQ3pCQTtBQUFBO0NBQ0E7O0FBRUFVLHNFQUFZLENBQUNoQiw0REFBRCxFQUFhQyw0REFBYixDQUFaO0FBRUEsSUFBTWlCLGFBQWEsR0FBR2YsUUFBUSxDQUFDQyxhQUFULENBQXVCLFlBQXZCLENBQXRCO0FBQ0EsSUFBTWUsZUFBZSxHQUFHaEIsUUFBUSxDQUFDQyxhQUFULENBQXVCLGNBQXZCLENBQXhCO0FBQ0EsSUFBTWdCLE9BQU8sR0FBR2pCLFFBQVEsQ0FBQ0MsYUFBVCxDQUF1QixXQUF2QixDQUFoQjtBQUNBLElBQU1pQixPQUFPLEdBQUdsQixRQUFRLENBQUNDLGFBQVQsQ0FBdUIsV0FBdkIsQ0FBaEI7QUFDQSxJQUFNa0IsVUFBVSxHQUFHbkIsUUFBUSxDQUFDQyxhQUFULENBQXVCLGNBQXZCLENBQW5CO0FBQ0EsSUFBTW1CLE9BQU8sR0FBRyxDQUNaO0FBQUVDLE1BQUksRUFBRSxPQUFSO0FBQWlCVixXQUFTLEVBQUUsSUFBNUI7QUFBa0NXLFFBQU0sRUFBRTtBQUExQyxDQURZLEVBRVo7QUFBRUQsTUFBSSxFQUFFLE9BQVI7QUFBaUJWLFdBQVMsRUFBRSxHQUE1QjtBQUFpQ1csUUFBTSxFQUFFO0FBQXpDLENBRlksQ0FBaEI7QUFJQSxJQUFNQyxlQUFlLEdBQUcsQ0FBQyxZQUFELEVBQWUsVUFBZixFQUEyQixnQkFBM0IsRUFBNkMsZUFBN0MsQ0FBeEI7QUFDQSxJQUFJQyxLQUFLLEdBQUcsRUFBWjtBQUNBLElBQUlDLGNBQWMsR0FBRyxFQUFyQjtBQUNBLElBQU1DLFdBQVcsR0FBRyxFQUFwQjtBQUNBLElBQU1DLFNBQVMsR0FBRzNCLFFBQVEsQ0FBQ0MsYUFBVCxDQUF1QixRQUF2QixDQUFsQjtBQUNBMEIsU0FBUyxDQUFDQyxnQkFBVixDQUEyQixNQUEzQixFQUFtQ0MsT0FBbkMsQ0FBMkMsVUFBQUMsQ0FBQyxFQUFJO0FBQzVDLE1BQU1DLEtBQUssR0FBR0QsQ0FBQyxDQUFDRixnQkFBRixDQUFtQixPQUFuQixDQUFkO0FBQ0EsTUFBTXpCLEdBQUcsR0FBRyxFQUFaO0FBQ0E0QixPQUFLLENBQUNGLE9BQU4sQ0FBYyxVQUFBRyxDQUFDLEVBQUk7QUFDZjdCLE9BQUcsQ0FBQzhCLElBQUosQ0FBU0QsQ0FBVDtBQUNBQSxLQUFDLENBQUNFLGdCQUFGLENBQW1CLE9BQW5CLEVBQTRCQyxnQkFBNUI7QUFDSCxHQUhEO0FBSUFULGFBQVcsQ0FBQ08sSUFBWixDQUFpQjlCLEdBQWpCO0FBQ0gsQ0FSRDtBQVNBLElBQU1pQyxTQUFTLEdBQUdWLFdBQVcsQ0FBQ1csTUFBOUI7QUFFQSxJQUFNQyxZQUFZLEdBQUdDLElBQUksQ0FBQ0MsS0FBTCxDQUFXQyxZQUFZLENBQUNDLE9BQWIsQ0FBcUIsU0FBckIsQ0FBWCxDQUFyQjs7QUFDQSxJQUFJSixZQUFZLElBQUlBLFlBQVksQ0FBQ0QsTUFBYixHQUFzQixDQUExQyxFQUE2QztBQUN6QyxNQUFNTSxpQkFBaUIsR0FBR0wsWUFBWSxDQUFDLENBQUQsQ0FBdEM7QUFDQSxNQUFNTSwwQkFBMEIsR0FBR04sWUFBWSxDQUFDLENBQUQsQ0FBL0M7QUFDQUssbUJBQWlCLENBQUNkLE9BQWxCLENBQTBCLFVBQUFDLENBQUM7QUFBQSxXQUFJZSxJQUFJLENBQUNDLFVBQVUsQ0FBQ2hCLENBQUMsQ0FBQ2lCLE1BQUgsQ0FBWCxFQUF1QmpCLENBQUMsQ0FBQ2tCLE1BQXpCLENBQVI7QUFBQSxHQUEzQjtBQUNBLE1BQUlKLDBCQUEwQixJQUFJQSwwQkFBMEIsQ0FBQ1AsTUFBM0IsR0FBb0MsQ0FBdEUsRUFBeUVaLGNBQWMsR0FBR21CLDBCQUFqQjtBQUM1RTs7QUFFRCxTQUFTSyxlQUFULEdBQTJCO0FBQ3ZCL0IsU0FBTyxDQUFDZ0MsUUFBUixHQUFtQnpCLGNBQWMsQ0FBQ1ksTUFBZixLQUEwQixDQUE3QztBQUNBcEIsU0FBTyxDQUFDaUMsUUFBUixHQUFtQjFCLEtBQUssQ0FBQ2EsTUFBTixLQUFpQixDQUFwQzs7QUFDQSxNQUFJLENBQUN0QixhQUFhLENBQUNvQyxTQUFkLENBQXdCQyxRQUF4QixDQUFpQyxRQUFqQyxDQUFMLEVBQWlEO0FBQzdDbEMsV0FBTyxDQUFDZ0MsUUFBUixHQUFtQmpDLE9BQU8sQ0FBQ2lDLFFBQVIsR0FBbUIsSUFBdEM7QUFDSDtBQUNKOztBQUVERyxNQUFNLENBQUNuQixnQkFBUCxDQUF3QixTQUF4QixFQUFtQyxVQUFTb0IsS0FBVCxFQUFnQjtBQUMvQyxNQUFJQSxLQUFLLENBQUNDLEdBQU4sS0FBYyxTQUFkLElBQTJCRCxLQUFLLENBQUNFLFFBQU4sS0FBbUJGLEtBQUssQ0FBQ0csUUFBeEQsRUFBa0U7QUFDOUQsUUFBSW5CLGFBQVksR0FBR2dCLEtBQUssQ0FBQ0csUUFBekI7QUFDQUMsZUFBVyxDQUFDLElBQUQsQ0FBWDtBQUNBLFFBQUlkLDJCQUEwQixHQUFHTCxJQUFJLENBQUNDLEtBQUwsQ0FBV0YsYUFBWCxFQUF5QixDQUF6QixDQUFqQztBQUNBLFFBQUlLLGtCQUFpQixHQUFHSixJQUFJLENBQUNDLEtBQUwsQ0FBV0YsYUFBWCxFQUF5QixDQUF6QixDQUF4QjtBQUNBLFFBQUlLLGtCQUFKLEVBQXVCQSxrQkFBaUIsQ0FBQ2QsT0FBbEIsQ0FBMEIsVUFBQUMsQ0FBQztBQUFBLGFBQUllLElBQUksQ0FBQ0MsVUFBVSxDQUFDaEIsQ0FBQyxDQUFDaUIsTUFBSCxDQUFYLEVBQXVCakIsQ0FBQyxDQUFDa0IsTUFBekIsRUFBaUMsSUFBakMsQ0FBUjtBQUFBLEtBQTNCO0FBQ3ZCLFFBQUlKLDJCQUEwQixJQUFJQSwyQkFBMEIsQ0FBQ1AsTUFBM0IsR0FBb0MsQ0FBdEUsRUFBeUVaLGNBQWMsR0FBR21CLDJCQUFqQjtBQUN6RUssbUJBQWU7QUFDbEI7QUFDSixDQVZEOztBQVlBLFNBQVNVLFdBQVQsQ0FBcUJaLE1BQXJCLEVBQTZCaEQsS0FBN0IsRUFBb0NpRCxNQUFwQyxFQUE0QztBQUN4QyxNQUFJWSxVQUFVLEdBQUc3RCxLQUFLLENBQUM4RCxNQUFOLENBQWEsVUFBQS9CLENBQUM7QUFBQSxXQUFJQSxDQUFDLENBQUNnQyxRQUFGLENBQVdmLE1BQVgsQ0FBSjtBQUFBLEdBQWQsRUFBc0MsQ0FBdEMsQ0FBakI7O0FBQ0EsTUFBSWEsVUFBVSxDQUFDRyxLQUFYLENBQWlCLFVBQUFqQyxDQUFDO0FBQUEsV0FBSUEsQ0FBQyxDQUFDcUIsU0FBRixDQUFZQyxRQUFaLENBQXFCSixNQUFNLENBQUNyQyxTQUE1QixDQUFKO0FBQUEsR0FBbEIsQ0FBSixFQUFtRTtBQUMvRCxXQUFPcUQsT0FBTyxDQUFDaEIsTUFBRCxFQUFTLENBQUNZLFVBQUQsRUFBYSxZQUFiLENBQVQsQ0FBZDtBQUNIOztBQUNELE1BQUlLLFFBQVEsR0FBR0MsS0FBSyxDQUFDQyxJQUFOLENBQ1huRSxRQUFRLENBQUM0QixnQkFBVCxDQUEwQix3QkFBd0IsQ0FBRSxDQUFDbUIsTUFBTSxDQUFDeEMsRUFBUCxDQUFVNkQsS0FBVixDQUFnQixDQUFoQixDQUFELEdBQXNCLENBQXZCLEdBQTRCLENBQTdCLEVBQWdDQyxRQUFoQyxFQUF4QixHQUFxRSxHQUEvRixDQURXLENBQWY7O0FBR0EsTUFBSUosUUFBUSxDQUFDRixLQUFULENBQWUsVUFBQWpDLENBQUM7QUFBQSxXQUFJQSxDQUFDLENBQUNxQixTQUFGLENBQVlDLFFBQVosQ0FBcUJKLE1BQU0sQ0FBQ3JDLFNBQTVCLENBQUo7QUFBQSxHQUFoQixDQUFKLEVBQWlFO0FBQzdELFdBQU9xRCxPQUFPLENBQUNoQixNQUFELEVBQVMsQ0FBQ2lCLFFBQUQsRUFBVyxVQUFYLENBQVQsQ0FBZDtBQUNIOztBQUNELE1BQUksQ0FBQ2xCLE1BQU0sQ0FBQ3hDLEVBQVAsQ0FBVTZELEtBQVYsQ0FBZ0IsQ0FBaEIsQ0FBRCxJQUF1QmhDLFNBQVMsR0FBRyxDQUFuQyxNQUEwQyxDQUE5QyxFQUFpRDtBQUM3QyxRQUFJa0MsYUFBYSxHQUFHSixLQUFLLENBQUNDLElBQU4sQ0FBV25FLFFBQVEsQ0FBQzRCLGdCQUFULENBQTBCLE9BQTFCLENBQVgsRUFBK0NpQyxNQUEvQyxDQUNoQixVQUFBL0IsQ0FBQztBQUFBLGFBQUksQ0FBQ0EsQ0FBQyxDQUFDdkIsRUFBRixDQUFLNkQsS0FBTCxDQUFXLENBQVgsQ0FBRCxJQUFrQmhDLFNBQVMsR0FBRyxDQUE5QixNQUFxQyxDQUF6QztBQUFBLEtBRGUsQ0FBcEI7O0FBR0EsUUFBSWtDLGFBQWEsQ0FBQ1AsS0FBZCxDQUFvQixVQUFBakMsQ0FBQztBQUFBLGFBQUlBLENBQUMsQ0FBQ3FCLFNBQUYsQ0FBWUMsUUFBWixDQUFxQkosTUFBTSxDQUFDckMsU0FBNUIsQ0FBSjtBQUFBLEtBQXJCLENBQUosRUFBc0U7QUFDbEUsYUFBT3FELE9BQU8sQ0FBQ2hCLE1BQUQsRUFBUyxDQUFDc0IsYUFBRCxFQUFnQixnQkFBaEIsQ0FBVCxDQUFkO0FBQ0g7QUFDSjs7QUFDRCxNQUFJLENBQUN2QixNQUFNLENBQUN4QyxFQUFQLENBQVU2RCxLQUFWLENBQWdCLENBQWhCLENBQUQsSUFBdUJoQyxTQUFTLEdBQUcsQ0FBbkMsTUFBMEMsQ0FBOUMsRUFBaUQ7QUFDN0MsUUFBSW1DLGtCQUFrQixHQUFHTCxLQUFLLENBQUNDLElBQU4sQ0FBV25FLFFBQVEsQ0FBQzRCLGdCQUFULENBQTBCLE9BQTFCLENBQVgsRUFBK0NpQyxNQUEvQyxDQUNyQixVQUFBL0IsQ0FBQztBQUFBLGFBQ0csQ0FBQ0EsQ0FBQyxDQUFDdkIsRUFBRixDQUFLNkQsS0FBTCxDQUFXLENBQVgsQ0FBRCxJQUFrQmhDLFNBQVMsR0FBRyxDQUE5QixNQUFxQyxDQUFyQyxJQUEwQyxDQUFDTixDQUFDLENBQUN2QixFQUFGLENBQUs2RCxLQUFMLENBQVcsQ0FBWCxDQUFELEtBQW1CLENBQTdELElBQWtFLENBQUN0QyxDQUFDLENBQUN2QixFQUFGLENBQUs2RCxLQUFMLENBQVcsQ0FBWCxDQUFELEtBQW1CaEMsU0FBUyxHQUFHQSxTQUFaLEdBQXdCLENBRGhIO0FBQUEsS0FEb0IsQ0FBekI7O0FBSUEsUUFBSW1DLGtCQUFrQixDQUFDUixLQUFuQixDQUF5QixVQUFBakMsQ0FBQztBQUFBLGFBQUlBLENBQUMsQ0FBQ3FCLFNBQUYsQ0FBWUMsUUFBWixDQUFxQkosTUFBTSxDQUFDckMsU0FBNUIsQ0FBSjtBQUFBLEtBQTFCLENBQUosRUFBMkU7QUFDdkUsYUFBT3FELE9BQU8sQ0FBQ2hCLE1BQUQsRUFBUyxDQUFDdUIsa0JBQUQsRUFBcUIsZUFBckIsQ0FBVCxDQUFkO0FBQ0g7QUFDSjs7QUFDRCxNQUFJdkUsUUFBUSxDQUFDNEIsZ0JBQVQsQ0FBMEIseUJBQTFCLEVBQXFEUyxNQUFyRCxLQUFnRSxDQUFwRSxFQUF1RTtBQUNuRSxXQUFPMkIsT0FBTyxDQUFDLEtBQUQsQ0FBZDtBQUNIOztBQUNELFNBQU8sS0FBUDtBQUNIOztBQUVELFNBQVNBLE9BQVQsR0FBK0M7QUFBQSxNQUE5QmhCLE1BQThCLHVFQUFyQixLQUFxQjtBQUFBLE1BQWRqQixLQUFjLHVFQUFOLElBQU07QUFDM0NoQixlQUFhLENBQUNvQyxTQUFkLENBQXdCcUIsTUFBeEIsQ0FBK0IsUUFBL0I7O0FBQ0EsTUFBSXhCLE1BQUosRUFBWTtBQUNSaEMsbUJBQWUsQ0FBQ3lELFdBQWhCLEdBQThCekIsTUFBTSxDQUFDMUIsTUFBUCxHQUFnQixPQUE5QztBQUNBUyxTQUFLLENBQUMsQ0FBRCxDQUFMLENBQVNGLE9BQVQsQ0FBaUIsVUFBQUMsQ0FBQyxFQUFJO0FBQ2xCQSxPQUFDLENBQUNxQixTQUFGLENBQVl1QixHQUFaLENBQWdCM0MsS0FBSyxDQUFDLENBQUQsQ0FBckI7QUFDQUQsT0FBQyxDQUFDcUIsU0FBRixDQUFZdUIsR0FBWixDQUFnQixLQUFoQjtBQUNILEtBSEQ7QUFJSCxHQU5ELE1BTU87QUFDSDFELG1CQUFlLENBQUN5RCxXQUFoQixHQUE4QixjQUE5QjtBQUNIOztBQUNEdkQsU0FBTyxDQUFDZ0MsUUFBUixHQUFtQixJQUFuQjtBQUNBakMsU0FBTyxDQUFDaUMsUUFBUixHQUFtQixJQUFuQjtBQUNBLFNBQU8sSUFBUDtBQUNIOztBQUVELFNBQVNRLFdBQVQsR0FBcUM7QUFBQSxNQUFoQmlCLE1BQWdCLHVFQUFQLEtBQU87QUFDakNoRCxXQUFTLENBQUNDLGdCQUFWLENBQTJCLE9BQTNCLEVBQW9DQyxPQUFwQyxDQUE0QyxVQUFBQyxDQUFDLEVBQUk7QUFDN0NWLFdBQU8sQ0FBQ1MsT0FBUixDQUFnQixVQUFBK0MsQ0FBQztBQUFBLGFBQUk5QyxDQUFDLENBQUNxQixTQUFGLENBQVlxQixNQUFaLENBQW1CSSxDQUFDLENBQUNqRSxTQUFyQixDQUFKO0FBQUEsS0FBakI7QUFDQVksbUJBQWUsQ0FBQ00sT0FBaEIsQ0FBd0IsVUFBQStDLENBQUM7QUFBQSxhQUFJOUMsQ0FBQyxDQUFDcUIsU0FBRixDQUFZcUIsTUFBWixDQUFtQkksQ0FBbkIsQ0FBSjtBQUFBLEtBQXpCO0FBQ0E5QyxLQUFDLENBQUNxQixTQUFGLENBQVlxQixNQUFaLENBQW1CLEtBQW5CO0FBQ0gsR0FKRDtBQUtBdkQsU0FBTyxDQUFDaUMsUUFBUixHQUFtQixJQUFuQjtBQUNBaEMsU0FBTyxDQUFDZ0MsUUFBUixHQUFtQixJQUFuQjtBQUNBbkMsZUFBYSxDQUFDb0MsU0FBZCxDQUF3QnVCLEdBQXhCLENBQTRCLFFBQTVCO0FBQ0FsRCxPQUFLLEdBQUcsRUFBUjtBQUNBQyxnQkFBYyxHQUFHLEVBQWpCOztBQUNBLE1BQUksQ0FBQ2tELE1BQUwsRUFBYTtBQUNUbEMsZ0JBQVksQ0FBQ29DLE9BQWIsQ0FBcUIsU0FBckIsRUFBZ0N0QyxJQUFJLENBQUN1QyxTQUFMLENBQWUsRUFBZixDQUFoQztBQUNIO0FBQ0o7O0FBRUQsU0FBUzNDLGdCQUFULENBQTBCTCxDQUExQixFQUE2QjtBQUN6QixNQUFJZixhQUFhLENBQUNvQyxTQUFkLENBQXdCQyxRQUF4QixDQUFpQyxRQUFqQyxDQUFKLEVBQWdEO0FBQzVDLFFBQU1KLE1BQU0sR0FBRzVCLE9BQU8sQ0FBQ0ksS0FBSyxDQUFDYSxNQUFOLEdBQWVqQixPQUFPLENBQUNpQixNQUF4QixDQUF0QjtBQUNBUSxRQUFJLENBQUNmLENBQUMsQ0FBQ2lCLE1BQUgsRUFBV0MsTUFBWCxDQUFKO0FBQ0g7QUFDSjs7QUFFRCxTQUFTSCxJQUFULENBQWNFLE1BQWQsRUFBc0JDLE1BQXRCLEVBQThDO0FBQUEsTUFBaEIyQixNQUFnQix1RUFBUCxLQUFPO0FBQzFDbEQsZ0JBQWMsR0FBRyxFQUFqQjtBQUNBc0IsUUFBTSxDQUFDSSxTQUFQLENBQWlCdUIsR0FBakIsQ0FBcUIxQixNQUFNLENBQUNyQyxTQUE1QjtBQUNBYSxPQUFLLENBQUNTLElBQU4sQ0FBVztBQUFFYyxVQUFNLEVBQUVBLE1BQU0sQ0FBQ3hDLEVBQWpCO0FBQXFCeUMsVUFBTSxFQUFFQTtBQUE3QixHQUFYO0FBQ0FDLGlCQUFlO0FBQ2ZVLGFBQVcsQ0FBQ1osTUFBRCxFQUFTckIsV0FBVCxFQUFzQnNCLE1BQXRCLENBQVg7QUFDQSxNQUFJLENBQUMyQixNQUFMLEVBQWFsQyxZQUFZLENBQUNvQyxPQUFiLENBQXFCLFNBQXJCLEVBQWdDdEMsSUFBSSxDQUFDdUMsU0FBTCxDQUFlLENBQUN0RCxLQUFELEVBQVFDLGNBQVIsQ0FBZixDQUFoQztBQUNoQjs7QUFFRCxTQUFTcUIsVUFBVCxDQUFvQnZDLEVBQXBCLEVBQXdCO0FBQ3BCLFNBQU9QLFFBQVEsQ0FBQ0MsYUFBVCxDQUF1QixNQUFNTSxFQUE3QixDQUFQO0FBQ0g7O0FBRUQsU0FBU3dFLElBQVQsR0FBZ0I7QUFDZCxNQUFJbEMsSUFBSSxHQUFHckIsS0FBSyxDQUFDd0QsR0FBTixFQUFYO0FBQ0F2RCxnQkFBYyxDQUFDUSxJQUFmLENBQW9CWSxJQUFwQjtBQUNBekIsU0FBTyxDQUFDUyxPQUFSLENBQWdCLFVBQUFDLENBQUMsRUFBSTtBQUNqQmdCLGNBQVUsQ0FBQ0QsSUFBSSxDQUFDRSxNQUFOLENBQVYsQ0FBd0JJLFNBQXhCLENBQWtDcUIsTUFBbEMsQ0FBeUMxQyxDQUFDLENBQUNuQixTQUEzQztBQUNILEdBRkQ7QUFHQXNDLGlCQUFlO0FBQ2ZnQyxvQkFBa0I7QUFDbkI7O0FBRUQsU0FBU0MsSUFBVCxHQUFnQjtBQUNkLE1BQUlyQyxJQUFJLEdBQUdwQixjQUFjLENBQUN1RCxHQUFmLEVBQVg7QUFDQXhELE9BQUssQ0FBQ1MsSUFBTixDQUFXWSxJQUFYO0FBQ0FDLFlBQVUsQ0FBQ0QsSUFBSSxDQUFDRSxNQUFOLENBQVYsQ0FBd0JJLFNBQXhCLENBQWtDdUIsR0FBbEMsQ0FBc0M3QixJQUFJLENBQUNHLE1BQUwsQ0FBWXJDLFNBQWxEO0FBQ0FzQyxpQkFBZTtBQUNmZ0Msb0JBQWtCO0FBQ25COztBQUVELFNBQVNBLGtCQUFULEdBQThCO0FBQzFCeEMsY0FBWSxDQUFDb0MsT0FBYixDQUFxQixTQUFyQixFQUFnQ3RDLElBQUksQ0FBQ3VDLFNBQUwsQ0FBZSxDQUFDdEQsS0FBRCxFQUFRQyxjQUFSLENBQWYsQ0FBaEM7O0FBQ0EsTUFBR0EsY0FBYyxDQUFDWSxNQUFmLEdBQXdCLENBQTNCLEVBQThCO0FBQzFCbkIsV0FBTyxDQUFDZ0MsUUFBUixHQUFtQixLQUFuQjtBQUNIO0FBQ0o7O0FBQ0QrQixrQkFBa0I7QUFFbEJoRSxPQUFPLENBQUNpQixnQkFBUixDQUF5QixPQUF6QixFQUFrQzZDLElBQWxDO0FBQ0E3RCxPQUFPLENBQUNnQixnQkFBUixDQUF5QixPQUF6QixFQUFrQ2dELElBQWxDO0FBQ0EvRCxVQUFVLENBQUNlLGdCQUFYLENBQTRCLE9BQTVCLEVBQXFDd0IsV0FBckMsRSIsImZpbGUiOiJtYWluLjU3MmE4ZmUxZWY0YmMyZWI1ZGFkLmJ1bmRsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vc3JjL2luZGV4LmpzXCIpO1xuIiwiZXhwb3J0IGNvbnN0IFJPV1NfQ09VTlQgPSAzO1xuZXhwb3J0IGNvbnN0IENPTFNfQ09VTlQgPSAzO1xuY29uc3QgZmllbGQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZmllbGQnKTtcblxuZXhwb3J0IGZ1bmN0aW9uIGdlbmVyYXRlQ29scyhyb3csIGNvbHNDb3VudCwgcm93SWQpIHtcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBjb2xzQ291bnQ7IGkrKykge1xuICAgIGNvbnN0IGlkID0gcm93SWQgKiBjb2xzQ291bnQgKyBpO1xuICAgIGNvbnN0IGNvbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGNvbC5pZCA9IGBjLSR7aWR9YDtcbiAgICBjb2wuZGF0YXNldC5pZCA9IGlkO1xuICAgIGNvbC5jbGFzc05hbWUgPSAnY2VsbCc7XG4gICAgcm93LmFwcGVuZENoaWxkKGNvbCk7XG4gIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdlbmVyYXRlUm93cyhyb3dzQ291bnQsIGNvbHNDb3VudCkge1xuICBmb3IgKGxldCBpID0gMDsgaSA8IHJvd3NDb3VudDsgaSsrKSB7XG4gICAgY29uc3Qgcm93ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgcm93LmNsYXNzTmFtZSA9ICdyb3cnO1xuICAgIHJvdy5pZCA9IGByLSR7aX1gO1xuICAgIGdlbmVyYXRlQ29scyhyb3csIGNvbHNDb3VudCwgaSk7XG4gICAgZmllbGQuYXBwZW5kQ2hpbGQocm93KTtcbiAgfVxufVxuXG4vLyBnZW5lcmF0ZVJvd3MoUk9XU19DT1VOVCwgQ09MU19DT1VOVCk7IiwiaW1wb3J0IHsgUk9XU19DT1VOVCwgQ09MU19DT1VOVCwgZ2VuZXJhdGVSb3dzIH0gZnJvbSAnLi9nZW5lcmF0ZUZpZWxkLmpzJztcbi8vIGltcG9ydCB7IGNoZWNrRm9yV2luIH0gZnJvbSAnLi93aW5DaGVja2VyLmpzJ1xuXG5nZW5lcmF0ZVJvd3MoUk9XU19DT1VOVCwgQ09MU19DT1VOVCk7XG5cbmNvbnN0IHdvblRpdGxlQmxvY2sgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcud29uLXRpdGxlJyk7XG5jb25zdCB3b25NZXNzYWdlQmxvY2sgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcud29uLW1lc3NhZ2UnKTtcbmNvbnN0IHVuZG9CdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudW5kby1idG4nKTtcbmNvbnN0IHJlZG9CdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucmVkby1idG4nKTtcbmNvbnN0IHJlc3RhcnRCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucmVzdGFydC1idG4nKTtcbmNvbnN0IHBsYXllcnMgPSBbXG4gICAgeyBuYW1lOiAnY3Jvc3MnLCBjbGFzc05hbWU6ICdjaCcsIHBsdXJhbDogJ0Nyb3NzZXMnIH0sXG4gICAgeyBuYW1lOiAncm91bmQnLCBjbGFzc05hbWU6ICdyJywgcGx1cmFsOiAnVG9lcycgfVxuXTtcbmNvbnN0IHdpbkNsYXNzZXNOYW1lcyA9IFsnaG9yaXpvbnRhbCcsICd2ZXJ0aWNhbCcsICdkaWFnb25hbC1yaWdodCcsICdkaWFnb25hbC1sZWZ0J107XG5sZXQgbW92ZXMgPSBbXTtcbmxldCBjYW5jZWxsZWRNb3ZlcyA9IFtdO1xuY29uc3QgZmllbGRPYmplY3QgPSBbXTtcbmNvbnN0IGZpZWxkTm9kZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5maWVsZCcpO1xuZmllbGROb2RlLnF1ZXJ5U2VsZWN0b3JBbGwoJy5yb3cnKS5mb3JFYWNoKGUgPT4ge1xuICAgIGNvbnN0IGNlbGxzID0gZS5xdWVyeVNlbGVjdG9yQWxsKCcuY2VsbCcpO1xuICAgIGNvbnN0IHJvdyA9IFtdO1xuICAgIGNlbGxzLmZvckVhY2goYyA9PiB7XG4gICAgICAgIHJvdy5wdXNoKGMpO1xuICAgICAgICBjLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgY2VsbENsaWNrSGFuZGxlcik7XG4gICAgfSk7XG4gICAgZmllbGRPYmplY3QucHVzaChyb3cpO1xufSk7XG5jb25zdCBmaWVsZFNpemUgPSBmaWVsZE9iamVjdC5sZW5ndGg7XG5cbmNvbnN0IHN0b3JlZF9zdGVwcyA9IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oJ2hpc3RvcnknKSk7XG5pZiAoc3RvcmVkX3N0ZXBzICYmIHN0b3JlZF9zdGVwcy5sZW5ndGggPiAwKSB7XG4gICAgY29uc3Qgc3RvcmVkX3N0ZXBzTW92ZXMgPSBzdG9yZWRfc3RlcHNbMF07XG4gICAgY29uc3Qgc3RvcmVkX3N0ZXBzQ2FuY2VsbGVkTW92ZXMgPSBzdG9yZWRfc3RlcHNbMV07XG4gICAgc3RvcmVkX3N0ZXBzTW92ZXMuZm9yRWFjaChlID0+IG1vdmUoZnJvbUNlbGxJRChlLnRhcmdldCksIGUucGxheWVyKSk7XG4gICAgaWYgKHN0b3JlZF9zdGVwc0NhbmNlbGxlZE1vdmVzICYmIHN0b3JlZF9zdGVwc0NhbmNlbGxlZE1vdmVzLmxlbmd0aCA+IDApIGNhbmNlbGxlZE1vdmVzID0gc3RvcmVkX3N0ZXBzQ2FuY2VsbGVkTW92ZXM7XG59XG5cbmZ1bmN0aW9uIG1hbmFnZURvQnV0dG9ucygpIHtcbiAgICByZWRvQnRuLmRpc2FibGVkID0gY2FuY2VsbGVkTW92ZXMubGVuZ3RoID09PSAwO1xuICAgIHVuZG9CdG4uZGlzYWJsZWQgPSBtb3Zlcy5sZW5ndGggPT09IDA7XG4gICAgaWYgKCF3b25UaXRsZUJsb2NrLmNsYXNzTGlzdC5jb250YWlucygnaGlkZGVuJykpIHtcbiAgICAgICAgcmVkb0J0bi5kaXNhYmxlZCA9IHVuZG9CdG4uZGlzYWJsZWQgPSB0cnVlO1xuICAgIH1cbn1cblxud2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3N0b3JhZ2UnLCBmdW5jdGlvbihldmVudCkge1xuICAgIGlmIChldmVudC5rZXkgPT09ICdoaXN0b3J5JyAmJiBldmVudC5vbGRWYWx1ZSAhPT0gZXZlbnQubmV3VmFsdWUpIHtcbiAgICAgICAgbGV0IHN0b3JlZF9zdGVwcyA9IGV2ZW50Lm5ld1ZhbHVlO1xuICAgICAgICBnYW1lUmVzdGFydCh0cnVlKTtcbiAgICAgICAgbGV0IHN0b3JlZF9zdGVwc0NhbmNlbGxlZE1vdmVzID0gSlNPTi5wYXJzZShzdG9yZWRfc3RlcHMpWzFdO1xuICAgICAgICBsZXQgc3RvcmVkX3N0ZXBzTW92ZXMgPSBKU09OLnBhcnNlKHN0b3JlZF9zdGVwcylbMF07XG4gICAgICAgIGlmIChzdG9yZWRfc3RlcHNNb3Zlcykgc3RvcmVkX3N0ZXBzTW92ZXMuZm9yRWFjaChlID0+IG1vdmUoZnJvbUNlbGxJRChlLnRhcmdldCksIGUucGxheWVyLCB0cnVlKSk7XG4gICAgICAgIGlmIChzdG9yZWRfc3RlcHNDYW5jZWxsZWRNb3ZlcyAmJiBzdG9yZWRfc3RlcHNDYW5jZWxsZWRNb3Zlcy5sZW5ndGggPiAwKSBjYW5jZWxsZWRNb3ZlcyA9IHN0b3JlZF9zdGVwc0NhbmNlbGxlZE1vdmVzO1xuICAgICAgICBtYW5hZ2VEb0J1dHRvbnMoKTtcbiAgICB9XG59KTtcblxuZnVuY3Rpb24gY2hlY2tGb3JXaW4odGFyZ2V0LCBmaWVsZCwgcGxheWVyKSB7XG4gICAgbGV0IGhvcml6b250YWwgPSBmaWVsZC5maWx0ZXIoZSA9PiBlLmluY2x1ZGVzKHRhcmdldCkpWzBdO1xuICAgIGlmIChob3Jpem9udGFsLmV2ZXJ5KGUgPT4gZS5jbGFzc0xpc3QuY29udGFpbnMocGxheWVyLmNsYXNzTmFtZSkpKSB7XG4gICAgICAgIHJldHVybiBlbmRHYW1lKHBsYXllciwgW2hvcml6b250YWwsICdob3Jpem9udGFsJ10pO1xuICAgIH1cbiAgICBsZXQgdmVydGljYWwgPSBBcnJheS5mcm9tKFxuICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuY2VsbDpudGgtY2hpbGQoM24rJyArICgoK3RhcmdldC5pZC5zbGljZSgyKSAlIDMpICsgMSkudG9TdHJpbmcoKSArICcpJylcbiAgICApO1xuICAgIGlmICh2ZXJ0aWNhbC5ldmVyeShlID0+IGUuY2xhc3NMaXN0LmNvbnRhaW5zKHBsYXllci5jbGFzc05hbWUpKSkge1xuICAgICAgICByZXR1cm4gZW5kR2FtZShwbGF5ZXIsIFt2ZXJ0aWNhbCwgJ3ZlcnRpY2FsJ10pO1xuICAgIH1cbiAgICBpZiAoK3RhcmdldC5pZC5zbGljZSgyKSAlIChmaWVsZFNpemUgKyAxKSA9PT0gMCkge1xuICAgICAgICBsZXQgbWFpbl9kaWFnb25hbCA9IEFycmF5LmZyb20oZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmNlbGwnKSkuZmlsdGVyKFxuICAgICAgICAgICAgZSA9PiArZS5pZC5zbGljZSgyKSAlIChmaWVsZFNpemUgKyAxKSA9PT0gMFxuICAgICAgICApO1xuICAgICAgICBpZiAobWFpbl9kaWFnb25hbC5ldmVyeShlID0+IGUuY2xhc3NMaXN0LmNvbnRhaW5zKHBsYXllci5jbGFzc05hbWUpKSkge1xuICAgICAgICAgICAgcmV0dXJuIGVuZEdhbWUocGxheWVyLCBbbWFpbl9kaWFnb25hbCwgJ2RpYWdvbmFsLXJpZ2h0J10pO1xuICAgICAgICB9XG4gICAgfVxuICAgIGlmICgrdGFyZ2V0LmlkLnNsaWNlKDIpICUgKGZpZWxkU2l6ZSAtIDEpID09PSAwKSB7XG4gICAgICAgIGxldCBzZWNvbmRhcnlfZGlhZ29uYWwgPSBBcnJheS5mcm9tKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5jZWxsJykpLmZpbHRlcihcbiAgICAgICAgICAgIGUgPT5cbiAgICAgICAgICAgICAgICArZS5pZC5zbGljZSgyKSAlIChmaWVsZFNpemUgLSAxKSA9PT0gMCAmJiArZS5pZC5zbGljZSgyKSAhPT0gMCAmJiArZS5pZC5zbGljZSgyKSAhPT0gZmllbGRTaXplICogZmllbGRTaXplIC0gMVxuICAgICAgICApO1xuICAgICAgICBpZiAoc2Vjb25kYXJ5X2RpYWdvbmFsLmV2ZXJ5KGUgPT4gZS5jbGFzc0xpc3QuY29udGFpbnMocGxheWVyLmNsYXNzTmFtZSkpKSB7XG4gICAgICAgICAgICByZXR1cm4gZW5kR2FtZShwbGF5ZXIsIFtzZWNvbmRhcnlfZGlhZ29uYWwsICdkaWFnb25hbC1sZWZ0J10pO1xuICAgICAgICB9XG4gICAgfVxuICAgIGlmIChkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuY2VsbDpub3QoLmNoKTpub3QoLnIpICcpLmxlbmd0aCA9PT0gMCkge1xuICAgICAgICByZXR1cm4gZW5kR2FtZShmYWxzZSk7XG4gICAgfVxuICAgIHJldHVybiBmYWxzZTtcbn1cblxuZnVuY3Rpb24gZW5kR2FtZShwbGF5ZXIgPSBmYWxzZSwgY2VsbHMgPSBudWxsKSB7XG4gICAgd29uVGl0bGVCbG9jay5jbGFzc0xpc3QucmVtb3ZlKCdoaWRkZW4nKTtcbiAgICBpZiAocGxheWVyKSB7XG4gICAgICAgIHdvbk1lc3NhZ2VCbG9jay50ZXh0Q29udGVudCA9IHBsYXllci5wbHVyYWwgKyAnIHdvbiEnO1xuICAgICAgICBjZWxsc1swXS5mb3JFYWNoKGUgPT4ge1xuICAgICAgICAgICAgZS5jbGFzc0xpc3QuYWRkKGNlbGxzWzFdKTtcbiAgICAgICAgICAgIGUuY2xhc3NMaXN0LmFkZCgnd2luJyk7XG4gICAgICAgIH0pO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIHdvbk1lc3NhZ2VCbG9jay50ZXh0Q29udGVudCA9ICdJdGBzIGEgZHJhdyEnO1xuICAgIH1cbiAgICByZWRvQnRuLmRpc2FibGVkID0gdHJ1ZTtcbiAgICB1bmRvQnRuLmRpc2FibGVkID0gdHJ1ZTtcbiAgICByZXR1cm4gdHJ1ZTtcbn1cblxuZnVuY3Rpb24gZ2FtZVJlc3RhcnQoY29waWVkID0gZmFsc2UpIHtcbiAgICBmaWVsZE5vZGUucXVlcnlTZWxlY3RvckFsbCgnLmNlbGwnKS5mb3JFYWNoKGUgPT4ge1xuICAgICAgICBwbGF5ZXJzLmZvckVhY2gocCA9PiBlLmNsYXNzTGlzdC5yZW1vdmUocC5jbGFzc05hbWUpKTtcbiAgICAgICAgd2luQ2xhc3Nlc05hbWVzLmZvckVhY2gocCA9PiBlLmNsYXNzTGlzdC5yZW1vdmUocCkpO1xuICAgICAgICBlLmNsYXNzTGlzdC5yZW1vdmUoJ3dpbicpO1xuICAgIH0pO1xuICAgIHVuZG9CdG4uZGlzYWJsZWQgPSB0cnVlO1xuICAgIHJlZG9CdG4uZGlzYWJsZWQgPSB0cnVlO1xuICAgIHdvblRpdGxlQmxvY2suY2xhc3NMaXN0LmFkZCgnaGlkZGVuJyk7XG4gICAgbW92ZXMgPSBbXTtcbiAgICBjYW5jZWxsZWRNb3ZlcyA9IFtdO1xuICAgIGlmICghY29waWVkKSB7XG4gICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCdoaXN0b3J5JywgSlNPTi5zdHJpbmdpZnkoW10pKTtcbiAgICB9XG59XG5cbmZ1bmN0aW9uIGNlbGxDbGlja0hhbmRsZXIoZSkge1xuICAgIGlmICh3b25UaXRsZUJsb2NrLmNsYXNzTGlzdC5jb250YWlucygnaGlkZGVuJykpIHtcbiAgICAgICAgY29uc3QgcGxheWVyID0gcGxheWVyc1ttb3Zlcy5sZW5ndGggJSBwbGF5ZXJzLmxlbmd0aF07XG4gICAgICAgIG1vdmUoZS50YXJnZXQsIHBsYXllcik7XG4gICAgfVxufVxuXG5mdW5jdGlvbiBtb3ZlKHRhcmdldCwgcGxheWVyLCBjb3BpZWQgPSBmYWxzZSkge1xuICAgIGNhbmNlbGxlZE1vdmVzID0gW107XG4gICAgdGFyZ2V0LmNsYXNzTGlzdC5hZGQocGxheWVyLmNsYXNzTmFtZSk7XG4gICAgbW92ZXMucHVzaCh7IHRhcmdldDogdGFyZ2V0LmlkLCBwbGF5ZXI6IHBsYXllciB9KTtcbiAgICBtYW5hZ2VEb0J1dHRvbnMoKTtcbiAgICBjaGVja0Zvcldpbih0YXJnZXQsIGZpZWxkT2JqZWN0LCBwbGF5ZXIpO1xuICAgIGlmICghY29waWVkKSBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgnaGlzdG9yeScsIEpTT04uc3RyaW5naWZ5KFttb3ZlcywgY2FuY2VsbGVkTW92ZXNdKSk7XG59XG5cbmZ1bmN0aW9uIGZyb21DZWxsSUQoaWQpIHtcbiAgICByZXR1cm4gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignIycgKyBpZCk7XG59XG5cbmZ1bmN0aW9uIHVuZG8oKSB7XG4gIGxldCBtb3ZlID0gbW92ZXMucG9wKCk7XG4gIGNhbmNlbGxlZE1vdmVzLnB1c2gobW92ZSk7XG4gIHBsYXllcnMuZm9yRWFjaChlID0+IHtcbiAgICAgIGZyb21DZWxsSUQobW92ZS50YXJnZXQpLmNsYXNzTGlzdC5yZW1vdmUoZS5jbGFzc05hbWUpO1xuICB9KTtcbiAgbWFuYWdlRG9CdXR0b25zKCk7XG4gIHVwZGF0ZUxvY2FsU3RvcmFnZSgpO1xufVxuXG5mdW5jdGlvbiByZWRvKCkge1xuICBsZXQgbW92ZSA9IGNhbmNlbGxlZE1vdmVzLnBvcCgpO1xuICBtb3Zlcy5wdXNoKG1vdmUpO1xuICBmcm9tQ2VsbElEKG1vdmUudGFyZ2V0KS5jbGFzc0xpc3QuYWRkKG1vdmUucGxheWVyLmNsYXNzTmFtZSk7XG4gIG1hbmFnZURvQnV0dG9ucygpO1xuICB1cGRhdGVMb2NhbFN0b3JhZ2UoKTtcbn1cblxuZnVuY3Rpb24gdXBkYXRlTG9jYWxTdG9yYWdlKCkge1xuICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCdoaXN0b3J5JywgSlNPTi5zdHJpbmdpZnkoW21vdmVzLCBjYW5jZWxsZWRNb3Zlc10pKTtcbiAgICBpZihjYW5jZWxsZWRNb3Zlcy5sZW5ndGggPiAwKSB7XG4gICAgICAgIHJlZG9CdG4uZGlzYWJsZWQgPSBmYWxzZTtcbiAgICB9XG59XG51cGRhdGVMb2NhbFN0b3JhZ2UoKTtcblxudW5kb0J0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHVuZG8pO1xucmVkb0J0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHJlZG8pO1xucmVzdGFydEJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGdhbWVSZXN0YXJ0KTsiXSwic291cmNlUm9vdCI6IiJ9