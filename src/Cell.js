import { Button } from './Button';
import { board } from './main';

export class Cell extends Button {
    constructor(x, y, w, h, txt, id, c, opt, i, j) {
        super(x, y, w, h, txt, id, c, opt);
        this.i = i;
        this.j = j;
    }

    canvasClick(e) {
        let mousex = e.offsetX;
        let mousey = e.offsetY;
        if (mousex > this.x && mousex < this.x + this.w) {
            if (mousey > this.y && mousey < this.y + this.h) {
                this.act();
            }
        }
    }

    act() {
        let index = board.moves.length - 1;
        board.moves[index].play(this.i, this.j);
    }


    show() {
        board.ctx.font = this.opt && this.opt.font ? this.opt.font : 'bold 3.5rem sans-serif';
        board.ctx.fillStyle = this.opt && this.opt.bgc ? this.opt.bgc : 'white';
        board.ctx.fillRect(this.x, this.y, this.w, this.h);
        board.ctx.strokeRect(this.x, this.y, this.w, this.h);
    }
}