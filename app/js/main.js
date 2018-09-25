var turn = 0;
var ticToe = [,];
var board = [];
var player = 'x';
var xPoints = 0;
var oPoints = 0;
var usedBox = 0;

board[0] = new Array(3);
board[1] = new Array(3);
board[2] = new Array(3);

function checkWin() {
    for (var i = 0; i < board.length; i++) {
        var raw = (board[0][i] + board[1][i] + board[2][i]);
        var line = (board[i][0] + board[i][1] + board[i][2]);
        var win1 = (board[0][2] + board[1][1] + board[2][0]);
        var win2 = (board[0][0] + board[1][1] + board[2][2]);
        if (raw == 0 || raw == 3 || line == 0 || line == 3) {
            if (player == 'x') { xPoints++; }
            else { oPoints++; }
            console.log(player, xPoints, oPoints);
            
            gameOver();
        }
        if (win1 == 0 || win1 == 3 || win2 == 0 || win2 == 3) {
            if (player == 'x') { xPoints++; }
            else { oPoints++; }
            gameOver();
        }
    }
}

function isClicked() {
    this.removeEventListener('click', isClicked);
    if (turn === 0) { player = 'x'; turn = 1; this.id = 'x'; }
    else { player = 'o'; turn = 0; this.id = 'o'; }
    var message = document.getElementById('console');
    if (turn == 0) {
        message.innerHTML = 'X Turn';
        message.style.color = 'red';
    }
    else {
        message.innerHTML = 'O Turn';
        message.style.color = 'blue';
    }
    this.innerHTML = player;
    var pos = this.getAttribute('data-pos').split(',');
    board[pos[0]][pos[1]] = turn == '1' ? 0 : 1;
    usedBox++;
    if (usedBox === 9) { document.getElementById('console').innerHTML = 'Draw'; }
    else { checkWin(); }
}

function gameOver() {
    board = [];
    board[0] = new Array(3);
    board[1] = new Array(3);
    board[2] = new Array(3);
    var xpnt = document.getElementById('xpnt');
    xpnt.innerHTML = (xPoints);
    var opnt = document.getElementById('opnt');
    opnt.innerHTML = (oPoints);
    player = 'x';
    turn = 0;
    usedBox = 0;
    document.getElementById('console').innerHTML = player + ' Wins';
    var boxes = document.querySelectorAll('h');
    for (var i = 0; i < boxes.length; i++) {
        boxes[i].removeEventListener('click', isClicked);
    }
}

function reset() {
    var boxes = document.querySelectorAll('h');
    for (var i = 0; i < boxes.length; i++) {
        boxes[i].addEventListener('click', isClicked);
        boxes[i].innerHTML = '';
    }
}

window.onload = function () {

    var xpnt = document.getElementById('xpnt');
    xpnt.innerHTML = (xPoints);
    var opnt = document.getElementById('opnt');
    opnt.innerHTML = (oPoints);
    var message = document.getElementById('console');
    message.innerHTML = 'X Turn';
    reset();

    // var box = document.getElementById('gBoard');
    // var boxs = document.getElementsByClassName('grid');
    // boxes.addEventListener('click', function (turn) {
    //     turn = (turn + 1) % 2
    //     console.log(turn);
    //$(this).replaceWith('<h class="clicked" id="box-' + player + '">' + player + '</h>');

    // });
    // for (var index = 0; index > 9; index++) {

    // }

}
