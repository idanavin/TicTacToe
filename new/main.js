let board;
let active;
let winner = null;
const players = ['X', 'O'];
const colors = ['blue', 'red', 'green', 'pink'];
let width;
let height;
let w;
let h;
let canv = document.createElement("canvas");
document.body.append(canv);
let ctx = canv.getContext('2d');

function drawBoard(el) {
    width = el.width;
    height = el.height;
    w = width / 3;
    h = height / 3;

    for (let i = 0; i < 3; i++) {
        for (let j = 0; j < 3; j++) {
            ctx.strokeRect(i * w, j * h, (i * w) + w, (j * h) + h);
        }
    }
}

function play(mousex, mousey) {
    let played = false;
    for (let i = 0; i < 3; i++) {
        for (let j = 0; j < 3; j++) {
            if (mousex > i * w && mousex < (i * w) + w) {
                if (mousey > j * h && mousey < (j * h) + h) {
                    if (!board[i][j]) {
                        board[i].splice(j, 1, players[active]);
                        ctx.fillStyle = colors[active];
                        ctx.fillText(players[active], (i * w) + (w / 2), (j * h) + (h / 2), w);
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
    //Spots taken
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
    let endText = '';
    if (score === 'tie') {
        endText = 'Its a tie';
    }
    else {
        endText = `${score} Wins!`
    }
    ctx.font = 'bold 72px sans-serif';
    ctx.fillStyle = colors[3];
    ctx.fillRect(w / 2, h / 2, 2 * w, 2 * h);
    ctx.fillStyle = colors[2];
    ctx.fillText(endText, width / 2, height / 2 - 100);
    ctx.fillText(`Play again?`, width / 2, height / 2 + 100);
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
    ctx.clearRect(0, 0, width, height);
    //Reset canvas to css size
    canv.width = canv.clientWidth;
    canv.height = canv.clientHeight;
    ctx.font = 'bold 48px sans-serif';
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    drawBoard(canv);
    canv.removeEventListener('click', newGame)
    canv.addEventListener('click', getMousePos);
}

window.onload = function () {
    newGame();
};