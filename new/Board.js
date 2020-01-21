class Board {
    constructor(row, col) {
        this.game = { row, col };
        this.l = row * col;
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
        // canv.removeEventListener('click', getMousePos);
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
        let options = { font: 'bold 1.2rem sans-serif' };
        buttons.push(new Button(this.width / 2, this.h, 300, 100, endText, 'end1', 'end'));
        buttons.push(new Button(60, this.h * 2, 120, 65, 'Play again?', 'restart', 'end', options));
        buttons.push(new Button(this.width - 60, this.h * 2, 120, 65, 'Main menu', 'end3', 'end', options));
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

    // show() {
    //     let h = this.h * 0.9;
    //     let hgap = this.height * 0.1
    //     let w = this.w;
    //     for (let i = 0; i < this.game.row; i++) {
    //         for (let j = 0; j < this.game.col; j++) {  
    //             ctx.strokeRect((i * w), (j * h) + hgap, w, h);
    //         }
    //     }
    // }

    createCell() {
        let h = this.h * 0.9;
        let hgap = this.height * 0.1
        let w = this.w;
        let opt = {
            bgc: 'blue'
        }

        for (let i = 0; i < this.game.row; i++) {
            for (let j = 0; j < this.game.col; j++) {  
                buttons.push(new Cell((i * w), (j * h) + hgap, w, h, '', i +j, 'cell', opt, i, j))
            }
        }
    }

    getSize(el) {
        this.width = el.width;
        this.height = el.height;
        this.ygap = this.height * 0.1;
        this.w = this.width / this.game.row;
        this.h = this.height / this.game.col;
    }

}