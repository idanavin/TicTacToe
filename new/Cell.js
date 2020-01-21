class Cell extends Button {
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
        let index = moves.length - 1;
        moves[index].play(this.i, this.j);
    }


    show() {
        let h = this.h * 0.9;
        let hgap = this.h * 0.1
        ctx.font = this.opt && this.opt.font ? this.opt.font : 'bold 3.5rem sans-serif';
        ctx.strokeRect(this.x, this.y, this.w, this.h);
    }
}