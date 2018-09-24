var turn = 0;
var ticToe = [,];
var board = ['', '', '', '', '', '', '', '', ''];
var player = 'x';

function checkMoves() {
    var isClicked = document.querySelectorAll('h');
    if (isClicked > 0) {
        checkWin();
    }
    else {
        document.getElementById('winner').innerHTML = 'Draw';
    }
}

window.onload = function () {

    var boxes = document.querySelectorAll('li');
    for (var i = 0; i < boxes.length; i++) {
        boxes[i].addEventListener('click', function () {
            if (turn === 0) { player = 'x'; turn = 1; }
            else { player = 'o'; turn = 0; }
            board.splice(boxes[i], 1, player); //boexes[i] = 0?
            console.log(board);
            
            $(this).replaceWith('<h class="clicked" id="box-' + player + '">' + player + '</h>');
            //checkMoves();
        });
    }

    // var box = document.getElementById('gBoard');
    // var boxs = document.getElementsByClassName('grid');
    // boxes.addEventListener('click', function (turn) {
    //     turn = (turn + 1) % 1
    //     console.log(turn);

    // });
    // for (var index = 0; index > 9; index++) {

    // }

}
