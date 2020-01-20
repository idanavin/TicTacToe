// Tic Tac Toe AI with Minimax Algorithm
// The Coding Train / Daniel Shiffman
// https://thecodingtrain.com/CodingChallenges/154-tic-tac-toe-minimax.html
// https://youtu.be/I64-UTORVfU
// https://editor.p5js.org/codingtrain/sketches/0zyUhZdJD

function bestMove() {
  // AI to make its turn
  let bestScore = -Infinity;
  let move;
  for (let i = 0; i < 3; i++) {
    for (let j = 0; j < 3; j++) {
      // Is the spot available?
      if (board.boardArr[j][i] == '') {
        board.boardArr[j][i] = board.players[0];
        let score = minimax(board.boardArr, 0, false);
        board.boardArr[j][i] = '';
        if (score > bestScore) {
          bestScore = score;
          move = { i, j };
        }
      }
    }
  }

  if (!moves[Index].done) {
    console.log(move);
    moves[Index].i = move.i
    moves[Index].j = move.j
    moves[Index].play();
  }
}

let scores = {
  X: 10,
  O: -10,
  tie: 0
};

function minimax(mnxBoard, depth, isMaximizing) {
  let result = board.checkWin();
  if (result !== null) {
    return scores[result];
  }

  if (isMaximizing) {
    let bestScore = -Infinity;
    for (let i = 0; i < 3; i++) {
      for (let j = 0; j < 3; j++) {
        // Is the spot available?
        if (mnxBoard[j][i] == '') {
          mnxBoard[j][i] = board.players[0];
          let score = minimax(mnxBoard, depth + 1, false);
          mnxBoard[j][i] = '';
          bestScore = Math.max(score, bestScore);
        }
      }
    }
    return bestScore;
  } else {
    let bestScore = Infinity;
    for (let i = 0; i < 3; i++) {
      for (let j = 0; j < 3; j++) {
        // Is the spot available?
        if (mnxBoard[j][i] == '') {
          mnxBoard[j][i] = board.players[1];
          let score = minimax(mnxBoard, depth + 1, true);
          mnxBoard[j][i] = '';
          bestScore = Math.min(score, bestScore);
        }
      }
    }
    return bestScore;
  }
}
