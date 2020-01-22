class Button {
    constructor(x, y, w, h, txt, id, c, opt) {
        this.x = x;
        this.y = y;
        this.w = w;
        this.h = h;
        this.txt = txt
        this.id = id
        if (opt) {
            this.opt = opt;
        }
        if (c) {
            this.c = c
        }
        this.center = { x: (this.x - (this.w / 2)), y: (this.y - (this.h / 2)) };
    }



    colors = ['grey', 'white'];

    canvasClick(e) {
        let mousex = e.offsetX;
        let mousey = e.offsetY;
        if (mousex > this.center.x && mousex < this.center.x + this.w) {
            if (mousey > this.center.y && mousey < this.center.y + this.h) {
                this.act();
            }
        }
    }

    act() {
        //Play again button
        if (this.id === 'restart') {
            buttons = buttons.filter((value, index) => {
                return buttons[index].c !== 'end';
            });
            // for (var i = 0; i < buttons.length; i++) {
            //     if (buttons[i].c === 'end') {
            //         buttons.splice(i, 1);
            //         i--;
            //     }
            // }
            board.removeCells();
            newGame();
        }
        if (this.id === 'localStorageClear') {
            board.resetPoints();
        }
        if (this.id === 'cell') {
            let mousex = e.offsetX;
            let mousey = e.offsetY;
            if (!moves[Index].done) {
                moves[Index].getMouseIndex(mousex, mousey);
            }
        }
    }

    show() {
        ctx.translate(0, 0);
        ctx.font = this.opt && this.opt.font ? this.opt.font : 'bold 3.5rem sans-serif';
        ctx.fillStyle = this.opt && this.opt.bgc ? this.opt.bgc : this.colors[0];
        ctx.fillRect(this.center.x, this.center.y, this.w, this.h);
        ctx.fillStyle = this.opt && this.opt.color ? this.opt.color : this.colors[1];
        ctx.fillText(this.txt, this.x, this.y);
        // ctx.translate(0, 0)
    }
}