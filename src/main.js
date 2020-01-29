import './style.css';
import { Board } from './Board';
import { Move } from './Move';
import { createMenuButtons, createGameButtons, createCellButtons, createEndGameButtons } from './buttons'
import { bestMove } from './minimax';

export let board;

export function resetBoardObj() {
    board = new Board();
}

export function newGame() {
    board.init();
    // board.moves = [new Move(0)];
    createGameButtons();
    createCellButtons();
    if (localStorage.length == 0) {
        board.resetPoints();
    }
    board.points = board.getPoints();
    // bestMove();
}

export function loop() {
    let l = setInterval(function () {
        for (let m in board.moves) {
            board.moves[m].show();
        }
        if (board.boardArr) {
            let winner = board.checkWin();
            if (winner) {
                board.endGame(winner);
                board.removeCells();
                createEndGameButtons(winner);
                clearInterval(l)
            }
        }
        if (board.buttons) {
            for (let m in board.buttons) {
                let button = board.buttons[m]
                button.show();

                if (button.c === 'score') {
                    let id = button.id;
                    button.txt = board.getPoints()[id];
                }
                if (button.c === 'turn') {
                    const preTxt = 'Turn: ';
                    if (board.moves) {
                        let move = board.moves[board.moves.length - 1]
                        let turn = move.players[move.active];
                        button.txt = preTxt + turn;
                    }
                }
            }
        }
    }, 50);
}

window.onload = function () {
    resetBoardObj();
    // setCanvasSize();
    board.getCanvas();
    // board.getSize();
    // board.canvasSize();
    // board.setArrays();
    board.setListener();    
    createMenuButtons();
    loop();
};