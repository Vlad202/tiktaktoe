import { ROWS_COUNT, COLS_COUNT, generateRows } from './generateField';

generateRows(ROWS_COUNT, COLS_COUNT);

const wonTitleBlock = document.querySelector('.won-title');
const wonMessageBlock = document.querySelector('.won-message');
const undoBtn = document.querySelector('.undo-btn');
const redoBtn = document.querySelector('.redo-btn');
const restartBtn = document.querySelector('.restart-btn');
const players = [
  { name: 'cross', className: 'ch', plural: 'Crosses' },
  { name: 'round', className: 'r', plural: 'Toes' },
];
const winClassesNames = ['horizontal', 'vertical', 'diagonal-right', 'diagonal-left'];
let moves = [];
let cancelledMoves = [];
const fieldObject = [];
const fieldNode = document.querySelector('.field');
fieldNode.querySelectorAll('.row').forEach(e => {
  const cells = e.querySelectorAll('.cell');
  const row = [];
  cells.forEach(c => {
    row.push(c);
    c.addEventListener('click', itemHandler);
  });
  fieldObject.push(row);
});
const fieldSize = fieldObject.length;

const storedSteps = JSON.parse(localStorage.getItem('history'));
if (storedSteps && storedSteps.length > 0) {
  const storedStepsMoves = storedSteps[0];
  const storedStepsCancelledMoves = storedSteps[1];
  storedStepsMoves.forEach(e => move(fromCellID(e.target), e.player));
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
  const horizontal = field.filter(e => e.includes(target))[0];
  if (horizontal.every(e => e.classList.contains(player.className))) {
    return endGame(player, [horizontal, 'horizontal']);
  }
  const vertical = Array.from(
    document.querySelectorAll(`.cell:nth-child(3n+${((+target.id.slice(2) % 3) + 1).toString()})`)
  );
  if (vertical.every(e => e.classList.contains(player.className))) {
    return endGame(player, [vertical, 'vertical']);
  }
  if (+target.id.slice(2) % (fieldSize + 1) === 0) {
    const mainDiagonal = Array.from(document.querySelectorAll('.cell')).filter(
      e => +e.id.slice(2) % (fieldSize + 1) === 0
    );
    if (mainDiagonal.every(e => e.classList.contains(player.className))) {
      return endGame(player, [mainDiagonal, 'diagonal-right']);
    }
  }
  if (+target.id.slice(2) % (fieldSize - 1) === 0) {
    const secondaryDiagonal = Array.from(document.querySelectorAll('.cell')).filter(
      e =>
        +e.id.slice(2) % (fieldSize - 1) === 0 && +e.id.slice(2) !== 0 && +e.id.slice(2) !== fieldSize * fieldSize - 1
    );
    if (secondaryDiagonal.every(e => e.classList.contains(player.className))) {
      return endGame(player, [secondaryDiagonal, 'diagonal-left']);
    }
  }
  if (document.querySelectorAll('.cell:not(.ch):not(.r) ').length === 0) {
    return endGame(false);
  }
  return false;
}

function endGame(player = false, cells = null) {
  wonTitleBlock.classList.remove('hidden');
  if (player) {
    wonMessageBlock.textContent = `${player.plural} won!`;
    cells[0].forEach(e => {
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

function gameRestart(copied = false) {
  fieldNode.querySelectorAll('.cell').forEach(e => {
    players.forEach(p => e.classList.remove(p.className));
    winClassesNames.forEach(p => e.classList.remove(p));
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
    const storedSteps = event.newValue;
    gameRestart(true);
    const storedStepsCancelledMoves = JSON.parse(storedSteps)[1];
    const storedStepsMoves = JSON.parse(storedSteps)[0];
    if (storedStepsMoves) storedStepsMoves.forEach(e => move(fromCellID(e.target), e.player, true));
    if (storedStepsCancelledMoves && storedStepsCancelledMoves.length > 0) cancelledMoves = storedStepsCancelledMoves;
    manageDoButtons();
  }
});
function itemHandler(e) {
  if (wonTitleBlock.classList.contains('hidden')) {
    const player = players[moves.length % players.length];
    move(e.target, player);
  }
}

function move(target, player, copied = false) {
  cancelledMoves = [];
  target.classList.add(player.className);
  moves.push({ target: target.id, player });
  manageDoButtons();
  checkForWin(target, fieldObject, player);
  if (!copied) localStorage.setItem('history', JSON.stringify([moves, cancelledMoves]));
}

function fromCellID(id) {
  return document.querySelector(`#${id}`);
}

function undo() {
  const move = moves.pop();
  cancelledMoves.push(move);
  players.forEach(e => {
    fromCellID(move.target).classList.remove(e.className);
  });
  manageDoButtons();
  updateLocalStorage();
}

function redo() {
  const move = cancelledMoves.pop();
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
