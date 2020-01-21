class Board {
    constructor(row, col) {
        this.game = { row, col }
    }

    colors = ['green', 'pink'];
    players = ['X', 'O'];

    init() {
        this.boardArr = [];
        for (let i = 0; i < this.game.row; i++) {
            this.boardArr[i] = [];
            for (let j = 0; j < this.game.col; j++) {
                this.boardArr[i][j] = '';
            }
        }
        ctx.clearRect(0, 0, this.width, this.height);
        ctx.font = 'bold 48px sans-serif';
        ctx.textAlign = 'center';
        ctx.textBaseline = 'middle';
    }

    checkWin() {
        let winner = null;
        // let notAvailable = [];
        for (let i = 0; i < 3; i++) {
            //Horizontal
            if (board.boardArr[i][0] === board.boardArr[i][1] && board.boardArr[i][1] === board.boardArr[i][2] && board.boardArr[i][0]) {
                winner = board.boardArr[i][0];
            }
            if (board.boardArr[0][i] === board.boardArr[1][i] && board.boardArr[1][i] === board.boardArr[2][i] && board.boardArr[0][i]) {
                winner = board.boardArr[0][i];
            }
            //Vertical
            if (board.boardArr[0][0] === board.boardArr[1][1] && board.boardArr[1][1] === board.boardArr[2][2] && board.boardArr[1][1]) {
                winner = board.boardArr[1][1];
            }
            if (board.boardArr[0][2] === board.boardArr[1][1] && board.boardArr[1][1] === board.boardArr[2][0] && board.boardArr[1][1]) {
                winner = board.boardArr[1][1];
            }
        }
        if (Index > 8 && !winner) {
            winner = 'tie';
        }
        return winner
    }

    endGame(score) {
        if (score !== 'tie') {
            let prev = this.getPoints();
            this.setPoints(score, prev[score]);
        }
        canv.removeEventListener('click', getMousePos);
    }

    createEndButton(score) {
        let endText = '';
        if (score === 'tie') {
            endText = 'Its a tie';
        }
        else {
            endText = `${score} Wins!`
        }
        let options = { font: 'bold 1.2rem sans-serif' };
        buttons.push(new Button(this.width / 2, this.h, 300, 100, endText, 'end1', 'end'));
        buttons.push(new Button(60, this.h * 2, 120, 65, 'Play again?', 'restart', 'end', options));
        buttons.push(new Button(this.width - 60, this.h * 2, 120, 65, 'Main menu', 'end3', 'end', options));
        canv.addEventListener('click', this.buttonsClick, true);
    }

    buttonsClick(e) {
        for (let b in buttons) {
            buttons[b].canvasClick(e);
        }
    }


    getPoints() {
        let X = Number(localStorage.getItem('X'));
        let O = Number(localStorage.getItem('O'));
        return { X, O }
    }

    setPoints(winner, prevS) {
        let s = prevS + 1;
        localStorage.setItem(winner, s);
        points[winner] = s;
    }

    resetPoints() {
        localStorage.clear();
        points = { X: 0, O: 0 };
    }

    show() {
        for (let i = 0; i < this.game.row; i++) {
            for (let j = 0; j < this.game.col; j++) {
                ctx.strokeRect(i * this.w, j * this.h, (i * this.w) + this.w, (j * this.h) + this.h);
            }
        }
    }

    getSize(el) {
        this.width = el.width;
        this.height = el.height * 0.9;
        this.w = this.width / this.game.row;
        this.h = this.height / this.game.col;
    }

}