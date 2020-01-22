class Board {
    constructor() {

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
        ctx.font = 'bold 3.5rem sans-serif';
        ctx.textAlign = 'center';
        ctx.textBaseline = 'middle';
    }

    getGame(row, col) {
        this.game = { row, col };
        this.l = row * col;
        this.w = this.width / row;
        this.h = this.height / col;
    }

    checkWin() {
        let winner = null;
        // let notAvailable = [];
        for (let i = 0; i < 3; i++) {
            //Horizontal
            if (this.boardArr[i][0] === this.boardArr[i][1] && this.boardArr[i][1] === this.boardArr[i][2] && this.boardArr[i][0]) {
                winner = this.boardArr[i][0];
            }
            if (this.boardArr[0][i] === this.boardArr[1][i] && this.boardArr[1][i] === this.boardArr[2][i] && this.boardArr[0][i]) {
                winner = this.boardArr[0][i];
            }
            //Vertical
            if (this.boardArr[0][0] === this.boardArr[1][1] && this.boardArr[1][1] === this.boardArr[2][2] && this.boardArr[1][1]) {
                winner = this.boardArr[1][1];
            }
            if (this.boardArr[0][2] === this.boardArr[1][1] && this.boardArr[1][1] === this.boardArr[2][0] && this.boardArr[1][1]) {
                winner = this.boardArr[1][1];
            }
        }
        if (moves.length > this.l && !winner) {
            winner = 'tie';
        }
        return winner
    }

    endGame(score) {
        if (score !== 'tie') {
            let prev = this.getPoints();
            this.setPoints(score, prev[score]);
        }
    }

    removeCells() {
        buttons = buttons.filter((v, i) => {
            return buttons[i].c !== 'cell';
        })
    }
    createEndButton(score) {
        let endText = '';
        if (score === 'tie') {
            endText = 'Its a tie';
        }
        else {
            endText = `${score} Wins!`
        }
        createEndGameButtons(endText);
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

    createCell() {
        let h = this.h * 0.9;
        let hgap = this.height * 0.1
        let w = this.w;
        let opt = {
            bgc: 'rgba(42, 204, 232, 0.3)'
        }

        for (let i = 0; i < this.game.row; i++) {
            for (let j = 0; j < this.game.col; j++) {
                buttons.push(new Cell((i * w), (j * h) + hgap, w, h, '', i + j, 'cell', opt, i, j))
            }
        }
    }

    getSize(el) {
        this.width = el.width;
        this.height = el.height;
        this.ygap = this.height * 0.1;
        this.w = this.width / 2;
        this.h = this.height / 2;
    }

}