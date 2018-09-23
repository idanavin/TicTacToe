var turn = 0;
var ticToe = [ , ];
var board = [];

board[0] = new Array(3);
board[1] = new Array(3);
board[2] = new Array(3);

function whosTurn() {  

}

window.onload = function () {  

    var boxes = document.querySelectorAll('li');

    for(var i = 0; i < boxes.length; i++) {
        boxes[i].addEventListener('click', function () {  
            
        });
    }

    var box = document.getElementById('gBoard');
    var boxs = document.getElementsByClassName('grid');
    boxs.addEventListener('click', function (turn) {
        var clicked = document.createElement('img');
        clicked.src = ticToe[turn];
        clicked.id = turn;
        
        // this.src = ticToe[turn]
        turn = (turn + 1) % 1
        console.log(turn);
        
    });
    for (var index = 0; index > 9; index++) {

    }

}
