import { board } from './main';
import { bestMove } from './minimax';

export class Move {
    constructor(active) {
        this.active = active;
        this.players = ['X', 'O'];
        this.colors = ['blue', 'red', 'green', 'pink'];
        this.done = false;
    }


    play(i, j) {
        if (board.game.row === 3) {
            if (!board.boardArr[j][i]) {
                this.i = i;
                this.j = j;
                board.boardArr[j][i] = this.players[this.active];
                this.done = true;
                this.nextTurn();
            }
        }
        else if(board.game.row === 7) {
            // console.log(board.boardArr);
            this.fourInARow(i);
        }
    }

    fourInARow(i) {
        let max = board.boardArr[i].length - 1
        for (let j = max; j >= 0; j--) {
            if (!board.boardArr[j][i]) {
                this.i = i;
                this.j = j;
                board.boardArr[j][i] = this.players[this.active];
                this.done = true;
                this.nextTurn();
                return
            }
            
        }
    }

    nextTurn() {
        board.moves.push(new Move(1 - this.active));
        // if (this.active) {
        //     bestMove();
        // }
    }

    show() {
        let h = board.h * 0.9;
        let hgap = board.height * 0.1
        let w = board.w;
        if (this.done) {
            board.ctx.font = '4rem sans-serif';
            board.ctx.fillStyle = this.colors[this.active];
            board.ctx.fillText(board.boardArr[this.j][this.i], (this.i * w) + (w / 2), (this.j * h) + hgap + (h / 2), w);
        }
    }
}