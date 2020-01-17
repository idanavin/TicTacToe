let canv = document.createElement("canvas");
let ctx;
let board = ['', '', '',
    '', '', '',
    '', '', ''];
let active = 0;
let players = ['X', 'O'];
let width;
let height;
let w;
let h;

function drawBoard(el) {
    width = el.width;
    height = el.height;
    w = width / 3;
    h = height / 3;
    ctx = el.getContext('2d');

    for (let i = 0; i < 3; i++) {
        for (let j = 0; j < 3; j++) {
            ctx.strokeRect(i * w, j * h, (i * w) + w, (j * h) + h);
        }
    }
}

function play(e) {
    let index = 0;
    for (let i = 0; i < 3; i++) {
        for (let j = 0; j < 3; j++) {
            if (e.offsetX > i * w && e.offsetX < (i * w) + w) {
                if (e.offsetY > j * h && e.offsetY < (j * h) + h) {
                    if (!board[index]) {
                        board.splice(index, 1, players[active]);
                        ctx.font = 'bold 48px';
                        ctx.fillText(players[active], (i * w) + (w / 2), (j * h) + (h / 2), w)
                        active = 1 - active;
                    }
                }
            }
            index++
        }
    }
}

window.onload = function () {
    document.body.append(canv);
    canv.width = canv.clientWidth;
    canv.height = canv.clientHeight;
    drawBoard(canv);

    canv.addEventListener('click', play);
};