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
    board.moves = [new Move(0)];
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
                board.buttons[m].show();

                if (board.buttons[m].c === 'score') {
                    let id = board.buttons[m].id;
                    board.buttons[m].txt = board.getPoints()[id];
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