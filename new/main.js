let board;
let active;
let points = {X: 0, O: 0};
const players = ['X', 'O'];
const colors = ['blue', 'red', 'green', 'pink'];
let canv = document.querySelector("canvas");
let ctx = canv.getContext('2d');
let canvSize;

function drawBoard() {
    for (let i = 0; i < 3; i++) {
        for (let j = 0; j < 3; j++) {
            ctx.strokeRect(i * canvSize.w, j * canvSize.h, (i * canvSize.w) + canvSize.w, (j * canvSize.h) + canvSize.h);
        }
    }
}
function getSize(el) {
    let width = el.width;
    let height = el.height;
    let w = width / 3;
    let h = height / 3;
    return { width, height, w, h }
}

function play(mousex, mousey) {
    for (let i = 0; i < 3; i++) {
        for (let j = 0; j < 3; j++) {
            if (mousex > i * canvSize.w && mousex < (i * canvSize.w) + canvSize.w) {
                if (mousey > j * canvSize.h && mousey < (j * canvSize.h) + canvSize.h) {
                    if (!board[i][j]) {
                        // board[i].splice(j, 1, players[active]);
                        board[i][j] = players[active];
                        drawMove(i, j);
                        let winner = checkWinner();
                        nextTurn();

                    }
                }
            }
        }
    }
}

function drawMove(i, j) {
    ctx.fillStyle = colors[active];
    ctx.fillText(players[active], (i * canvSize.w) + (canvSize.w / 2), (j * canvSize.h) + (canvSize.h / 2), canvSize.w);
}

function checkWinner() {
    let winner = null;
    let notAvailable = [];
    for (let i = 0; i < 3; i++) {
        //Horizontal
        if (board[i][0] === board[i][1] && board[i][1] === board[i][2] && board[i][0]) {
            winner = board[i][0];
        }
        if (board[0][i] === board[1][i] && board[1][i] === board[2][i] && board[0][i]) {
            winner = board[0][i];
        }
        //Vertical
        if (board[0][0] === board[1][1] && board[1][1] === board[2][2] && board[1][1]) {
            winner = board[1][1];
        }
        if (board[0][2] === board[1][1] && board[1][1] === board[2][0] && board[1][1]) {
            winner = board[1][1];
        }
    }
    //check for spots taken (for tie)
    for (let i = 0; i < 3; i++) {
        for (let j = 0; j < 3; j++) {
            if (board[i][j]) {
                notAvailable.push([i, j]);
            }
        }
    }
    if (notAvailable.length > 8 && !winner) {
        winner = 'tie';
    }
    return winner
}

function endGame(score) {
    let endText = '';
    if (score === 'tie') {
        endText = 'Its a tie';
    }
    else {
        points[score] += 1;
        updateScore();
        endText = `${score} Wins!`
    }
    ctx.font = 'bold 72px sans-serif';
    ctx.fillStyle = colors[3];
    ctx.fillRect(canvSize.w / 2, canvSize.h / 2, 2 * canvSize.w, 2 * canvSize.h);
    ctx.fillStyle = colors[2];
    ctx.fillText(endText, canvSize.width / 2, canvSize.height / 2 - 100);
    ctx.fillText(`Play again?`, canvSize.width / 2, canvSize.height / 2 + 100);
    canv.removeEventListener('click', getMousePos);
    canv.addEventListener('click', newGame);
    winner = null;
}

function updateScore() {
    let e = document.querySelectorAll('.score');

    for (let i = 0; i < e.length; i++) {  
        e[i].innerHTML = points[players[i]];
    }
}

function nextTurn() {
    active = 1 - active;
    if (active === 0) {
        bestMove();
    }
}

function getMousePos(e) {
    if (active === 1) {
        let mousex = e.offsetX;
        let mousey = e.offsetY;
        play(mousex, mousey);
    }
}

function newGame() {
    board = [
        ['', '', '',],
        ['', '', '',],
        ['', '', '']
    ];
    active = 0;
    ctx.clearRect(0, 0, canvSize.width, canvSize.height);
    ctx.font = 'bold 48px sans-serif';
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    drawBoard();
    bestMove();
    canv.removeEventListener('click', newGame);
    canv.addEventListener('click', getMousePos);
    loop();
}

window.onload = function () {
    canv.width = canv.clientWidth;
    canv.height = canv.clientHeight;
    canvSize = getSize(canv);
    newGame();
    updateScore();
};

function loop() {
    let l = setInterval(function () {
        let winner = checkWinner();
        if (winner) {
            endGame(winner);
            clearInterval(l)
        }
    }, 200);
}