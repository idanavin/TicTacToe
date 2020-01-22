let points = { X: 0, O: 0 };
let canv = document.querySelector("canvas");
let ctx = canv.getContext('2d');

let board = new Board();
let moves = [];
let buttons = [];

function newGame() {
    
    moves = [new Move(0)];
    // board.getSize(canv);
    board.init();
    createGameButtons();
    board.createCell();
    if (localStorage.length == 0) {
        board.resetPoints();
    }
    points = board.getPoints();
    bestMove();
}

function setCanvasSize() {
    canv.width = canv.clientWidth;
    canv.height = canv.clientHeight;
}


window.onload = function () {
    setCanvasSize();
    board.getSize(canv);
    createMenuButtons();
    loop();
    canv.addEventListener('click', (e) => {
        for (let b in buttons) {
            buttons[b].canvasClick(e);
        }
    });
};

function loop() {
    let l = setInterval(function () {
        for (let m in moves) {
            moves[m].show();
        }
        if (board.boardArr) {
            let winner = board.checkWin();
            if (winner) {
                board.endGame(winner);
                board.removeCells();
                board.createEndButton(winner);
                clearInterval(l)
            }
        }
        if (buttons) {
            for (let m in buttons) {
                buttons[m].show();

                if (buttons[m].c === 'score') {
                    let id = buttons[m].id;
                    buttons[m].txt = board.getPoints()[id];
                }
            }
        }
    }, 50);
}