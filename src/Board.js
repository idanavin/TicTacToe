import { Move } from "./Move";

export class Board {
    constructor() {
        this.colors = ['green', 'pink'];
        this.players = ['X', 'O'];
    }

    getCanvas() {
        this.canv = document.querySelector("canvas");
        this.ctx = this.canv.getContext('2d');
        this.canvasSize();
    }

    canvasSize() {
        this.canv.width = this.canv.clientWidth;
        this.canv.height = this.canv.clientHeight;
        this.width = this.canv.width;
        this.height = this.canv.height;
        this.ygap = this.height * 0.1;
        this.w = this.width / 2;
        this.h = this.height / 2;
        this.setArrays();
    }

    setArrays() {
        this.moves = [new Move(0)];
        this.buttons = [];
        this.points = { X: 0, O: 0 };
    }

    setListener() {
        this.canv.addEventListener('click', (e) => {
            for (let b in this.buttons) {
                this.buttons[b].canvasClick(e);
            }
        });
    }

    init() {
        this.boardArr = [];
        for (let i = 0; i < this.game.row; i++) {
            this.boardArr[i] = [];
            for (let j = 0; j < this.game.col; j++) {
                this.boardArr[i][j] = '';
            }
        }
        this.ctx.clearRect(0, 0, this.width, this.height);
    }

    getGame(row, col) {
        this.game = { row, col };
        this.l = row * col;
        this.w = this.width / row;
        this.h = this.height / col;
    }

    checkEquals(arr) {
        for (let i = 0; i < arr.length - 1; i++) {
            if (arr[i] !== arr[i + 1]) {
                return false
            }
        }
        return true
    }

    checkWin() {
        let winner = null;
        let winCondition = this.game.row === 3 ? 3 : 4;
        for (let i = 0; i < this.game.row; i++) {
            for (let j = 0; j < this.game.col; j++) {
                let toCheck = [[], [], [], []];
                for (let k = 0; k < winCondition; k++) {
                    //Horizontal
                    if (this.boardArr[i][j + k]) {
                        toCheck[0].push(this.boardArr[i][j + k]);
                    }
                    //Vertical
                    if (i >= winCondition - 1) {
                        if (this.boardArr[i - k][j]) {
                            toCheck[1].push(this.boardArr[i - k][j]);
                        }
                        //Diagonal right
                        if (this.boardArr[i - k][j + k]) {
                            toCheck[2].push(this.boardArr[i - k][j + k]);
                        }
                        //Diagonal left
                        if (j >= winCondition - 1) {
                            if (this.boardArr[i - k][j - k]) {
                                toCheck[3].push(this.boardArr[i - k][j - k]);
                            }
                        }
                    }
                }
                //Call check equals
                for (let t = 0; t < toCheck.length; t++) {
                    if (toCheck[t].length === winCondition) {
                        
                        
                        if (this.checkEquals(toCheck[t])) {
                            winner = this.boardArr[i][j];
                        }
                    }
                }
            }
        }
        if (this.moves.length > this.l && !winner) {
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
        this.buttons = this.buttons.filter((v, i) => {
            return this.buttons[i].c !== 'cell';
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
        for (let b in this.buttons) {
            this.buttons[b].canvasClick(e);
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
        this.points[winner] = s;
    }

    resetPoints() {
        localStorage.clear();
        this.points = { X: 0, O: 0 };
    }

}