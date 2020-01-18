let board;
let active;
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

function play(e) {
    for (let i = 0; i < 3; i++) {
        for (let j = 0; j < 3; j++) {
            if (e.offsetX > i * w && e.offsetX < (i * w) + w) {
                if (e.offsetY > j * h && e.offsetY < (j * h) + h) {
                    if (!board[i][j]) {
                        board[i].splice(j, 1, players[active]);
                        ctx.fillStyle = colors[active];
                        ctx.fillText(players[active], (i * w) + (w / 2), (j * h) + (h / 2), w);
                        checkWinner();
                        active = 1 - active;
                    }
                }
            }
        }
    }
}

function checkWinner() {
    let winner = null;
    for (let i = 0; i < 3; i++) {
        if (board[i][0] === board[i][1] && board[i][1] === board[i][2] && board[i][0]) {
            winner = players[active];
        }
        if (board[0][i] === board[1][i] && board[1][i] === board[2][i] && board[0][i]) {
            winner = players[active];
        }
        if (board[0][0] === board[1][1] && board[1][1] === board[2][2] && board[1][1]) {
            winner = players[active];
        }
        if (board[0][2] === board[1][1] && board[1][1] === board[2][0] && board[1][1]) {
            winner = players[active];
        }
    }
    if (winner) {
        endGame();
    }
}

function endGame() {
    ctx.font = 'bold 72px sans-serif';
    ctx.fillStyle = colors[3];
    ctx.fillRect(w / 2, h / 2, 2 * w, 2 * h);
    ctx.fillStyle = colors[2];
    ctx.fillText(`${players[active]} Wins`, width / 2, height / 2 - 100);
    ctx.fillText(`Play again?`, width / 2, height / 2 + 100);
    canv.removeEventListener('click', play);
    canv.addEventListener('click', newGame);
}

function newGame() {

    board = [
        ['', '', '',],
        ['', '', '',],
        ['', '', '']
    ];
    active = 0;
    ctx.clearRect(0, 0, width, height);
    canv.width = canv.clientWidth;
    canv.height = canv.clientHeight;
    ctx.font = 'bold 48px sans-serif';
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    drawBoard(canv);
    canv.removeEventListener('click', newGame)
    canv.addEventListener('click', play);
}

window.onload = function () {
    newGame();
};