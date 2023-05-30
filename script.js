// Tic-Tac-Toe

// Constants
const players = ["X", "O"];
const board = [["", "", ""], ["", "", ""], ["", "", ""]];
let currentPlayer = players[0];
let gameOver = false;

// Function to make a move
function makeMove(row, col) {
  if (gameOver || board[row][col] !== "") {
    return;
  }

  board[row][col] = currentPlayer;
  document.getElementById("board").children[row].children[col].innerText = currentPlayer;

  if (checkWin(currentPlayer)) {
    gameOver = true;
    alert("Player " + currentPlayer + " wins!");
  } else if (checkTie()) {
    gameOver = true;
    alert("It's a tie!");
  } else {
    currentPlayer = players[(players.indexOf(currentPlayer) + 1) % players.length];
  }
}

// Function to check for a winning condition
function checkWin(player) {
  // Check rows
  for (let i = 0; i < 3; i++) {
    if (board[i][0] === player && board[i][1] === player && board[i][2] === player) {
      return true;
    }
  }

  // Check columns
  for (let i = 0; i < 3; i++) {
    if (board[0][i] === player && board[1][i] === player && board[2][i] === player) {
      return true;
    }
  }

  // Check diagonals
  if (board[0][0] === player && board[1][1] === player && board[2][2] === player) {
    return true;
  }
  if (board[0][2] === player && board[1][1] === player && board[2][0] === player) {
    return true;
  }

  return false;
}

// Function to check for a tie
function checkTie() {
  for (let i = 0; i < 3; i++) {
    for (let j = 0; j < 3; j++) {
      if (board[i][j] === "") {
        return false;
      }
    }
  }

  return true;
}

// Function to reset the board
function resetBoard() {
  board.forEach(row => row.fill(""));
  Array.from(document.getElementsByClassName("cell")).forEach(cell => cell.innerText = "");
  currentPlayer = players[0];
  gameOver = false;
}
