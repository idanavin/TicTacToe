let points = { X: 0, O: 0 };
let canv = document.querySelector("canvas");
let ctx = canv.getContext('2d');

let board = new Board(3, 3);
let moves = [];
let buttons = [];

function getMousePos(e) {
    let mousex = e.offsetX;
    let mousey = e.offsetY;
    if (!moves[Index].done) {
        moves[Index].getMouseIndex(mousex, mousey);
    }
}

function newGame() {
    moves = [new Move(0)];
    canv.width = canv.clientWidth;
    canv.height = canv.clientHeight;
    board.getSize(canv);
    board.init();
    // board.show();
    board.createCell();;
    if (localStorage.length == 0) {
        board.resetPoints();
    }
    points = board.getPoints();
    bestMove();

    loop();
}

window.onload = function () {
    newGame();
    buttons.push(
        new Button(board.w * 0.5, board.ygap / 2, 100, 30, 'reset score', 'localStorageClear', 'home', {
            font: '0.7rem sans-serif',
            bgc: 'grey',
            color: 'white'
        }),
        new Button(board.w * 2.5, board.ygap / 2, 100, 30, 'New Game', 'restart', 'home', {
            font: '0.7rem sans-serif',
            bgc: 'grey',
            color: 'white'
        }),
        new Button(board.w * 0.5, board.height - 15, 100, 30, board.getPoints().X, 'X', 'score', {
            font: '0.7rem sans-serif',
            bgc: 'grey',
            color: 'white'
        }),
        new Button(board.w * 2.5, board.height - 15, 100, 30, board.getPoints().O, 'O', 'score', {
            font: '0.7rem sans-serif',
            bgc: 'grey',
            color: 'white'
        })
    );
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
        let winner = board.checkWin();
        if (winner) {
            board.endGame(winner);
            board.removeCells();
            board.createEndButton(winner);
            clearInterval(l)
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
    }, 100);
}