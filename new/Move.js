class Move {
    constructor(active) {
        this.active = active;
    }

    players = ['X', 'O'];
    colors = ['blue', 'red', 'green', 'pink'];
    done = false;

    play(i, j) {
        if (!board.boardArr[j][i]) {
            this.i = i;
            this.j = j;
            board.boardArr[j][i] = this.players[this.active];
            this.done = true;
            this.nextTurn();
        }
    }

    // getMouseIndex(mx, my) {
    //     for (let i = 0; i < board.boardArr.length; i++) {
    //         for (let j = 0; j < board.boardArr[i].length; j++) {
    //             if (mx > i * board.w && mx < (i * board.w) + board.w) {
    //                 if (my > j * board.h && my < (j * board.h) + board.h) {
    //                     if (!board.boardArr[j][i]) {
    //                         this.i = i;
    //                         this.j = j;
    //                         this.play();
    //                     }
    //                 }
    //             }
    //         }
    //     }
    // }

    nextTurn() {
        moves.push(new Move(1 - this.active));
        if (this.active) {
            bestMove();
        }
    }

    show() {
        let h = board.h * 0.9;
        let hgap = board.height * 0.1
        let w = board.w;
        if (this.done) {
            ctx.font = '4rem sans-serif';
            ctx.fillStyle = this.colors[this.active];
            ctx.fillText(board.boardArr[this.j][this.i], (this.i * w) + (w / 2), (this.j * h) + hgap + (h / 2), w);
        }
    }
}