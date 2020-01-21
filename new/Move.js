class Move {
    constructor(active) {
        this.active = active;
    }

    players = ['X', 'O'];
    colors = ['blue', 'red', 'green', 'pink'];
    done = false;

    play() {
        if (!board.boardArr[this.j][this.i]) {
            board.boardArr[this.j][this.i] = this.players[this.active];
            this.done = true;
            this.nextTurn();
        }
    }

    getMouseIndex(mx, my) {
        for (let i = 0; i < board.boardArr.length; i++) {
            for (let j = 0; j < board.boardArr[i].length; j++) {
                if (mx > i * board.w && mx < (i * board.w) + board.w) {
                    if (my > j * board.h && my < (j * board.h) + board.h) {
                        if (!board.boardArr[j][i]) {
                            this.i = i;
                            this.j = j;
                            this.play();
                        }
                    }
                }
            }
        }
    }

    nextTurn() {
        Index++
        moves[Index] = new Move(1 - this.active);

        if (!moves[Index].active) {
            bestMove();
        }
    }

    show() {
        if (this.done) {
            ctx.font = '4rem sans-serif';
            ctx.fillStyle = this.colors[this.active];
            ctx.fillText(board.boardArr[this.j][this.i], (this.i * board.w) + (board.w / 2), (this.j * board.h) + (board.h / 2), board.w);
        }
    }
}