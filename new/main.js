let points = { X: 0, O: 0 };
let canv = document.querySelector("canvas");
let ctx = canv.getContext('2d');

let board = new Board(3, 3);
let moves = [];
let Index = 0

function updateScore() {
    let e = document.querySelectorAll('.score');

    for (let i = 0; i < e.length; i++) {
        e[i].innerHTML = points[board.players[i]];
    }
}

function getMousePos(e) {
    let mousex = e.offsetX;
    let mousey = e.offsetY;
    if (!moves[Index].done) {
        moves[Index].getMouseIndex(mousex, mousey);
    }
}

function newGame() {
    moves = [new Move(0)];
    Index = 0;
    canv.width = canv.clientWidth;
    canv.height = canv.clientHeight;
    board.getSize(canv);
    board.init();
    board.show();
    bestMove();
    canv.removeEventListener('click', newGame);
    canv.addEventListener('click', getMousePos);
    loop();
}

window.onload = function () {
    newGame();
    updateScore();
};

function loop() {
    let l = setInterval(function () {
        for (let m in moves) {
            moves[m].show();
        }
        let winner = board.checkWin();
        if (winner) {
            board.endGame(winner);
            clearInterval(l)
        }
    }, 100);
}