let board;
let winner = null;
let active;
const players = ['X', 'O'];
const colors = ['blue', 'red', 'green', 'pink'];
let canv = document.createElement("canvas");
document.body.append(canv);
let ctx = canv.getContext('2d');

function drawBoard() {
    canvSize = getSize(canv);

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
    return {width, height, w, h}
}

function play(mousex, mousey) {
    let canvSize = getSize(canv);
    let played = false;
    for (let i = 0; i < 3; i++) {
        for (let j = 0; j < 3; j++) {
            if (mousex > i * canvSize.w && mousex < (i * canvSize.w) + canvSize.w) {
                if (mousey > j * canvSize.h && mousey < (j * canvSize.h) + canvSize.h) {
                    if (!board[i][j]) {
                        board[i].splice(j, 1, players[active]);
                        ctx.fillStyle = colors[active];
                        ctx.fillText(players[active], (i * canvSize.w) + (canvSize.w / 2), (j * canvSize.h) + (canvSize.h / 2), canvSize.w);
                        played = true;
                    }
                }
            }
        }
    }
    return played;
}

function checkWinner() {
    let notAvailable = [];
    for (let i = 0; i < 3; i++) {
        //Horizontal
        if (board[i][0] === board[i][1] && board[i][1] === board[i][2] && board[i][0]) {
            winner = players[active];
        }
        if (board[0][i] === board[1][i] && board[1][i] === board[2][i] && board[0][i]) {
            winner = players[active];
        }
        //Vertical
        if (board[0][0] === board[1][1] && board[1][1] === board[2][2] && board[1][1]) {
            winner = players[active];
        }
        if (board[0][2] === board[1][1] && board[1][1] === board[2][0] && board[1][1]) {
            winner = players[active];
        }
    }
    //check for spots taken
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
}

function endGame(score) {
    let canvSize = getSize(canv);
    let endText = '';
    if (score === 'tie') {
        endText = 'Its a tie';
    }
    else {
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

function nextTurn() {
    if (winner) {
        endGame(winner);
    }
    else {
        active = 1 - active;
    }
}

function getMousePos(e) {
    let mousex =  e.offsetX;
    let mousey = e.offsetY;
    let isPlayed = play(mousex, mousey);
    if (isPlayed) {
        checkWinner();
        nextTurn();  
    }
}

function newGame() {

    board = [
        ['', '', '',],
        ['', '', '',],
        ['', '', '']
    ];
    active = 0;
    let canvSize = getSize(canv)
    ctx.clearRect(0, 0, canvSize.width, canvSize.height);
    //Reset canvas to css size
    canv.width = canv.clientWidth;
    canv.height = canv.clientHeight;
    ctx.font = 'bold 48px sans-serif';
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    drawBoard();
    canv.removeEventListener('click', newGame)
    canv.addEventListener('click', getMousePos);
}

window.onload = function () {
    newGame();
};