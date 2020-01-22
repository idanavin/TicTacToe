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
    opacity = 1;

    canvasClick(e) {
        let mousex = e.offsetX;
        let mousey = e.offsetY;
        if (mousex > this.center.x && mousex < this.center.x + this.w) {
            if (mousey > this.center.y && mousey < this.center.y + this.h) {
                this.act();
            }
        }
    }

    animate(from) {
        let endState = { x: this.x, y: this.y, w: this.w, h: this.h, op: this.opacity }
        this.x = from.x ? from.x : this.x;
        this.y = from.y ? from.y : this.y;
        this.op = from.op ? from.op : this.op;

        if (this.x !== from.x) {            
            this.x += 10;
        }
        if (this.y !== from.y) {
            this.y += 10;
        }
        if (this.op !== from.op) {
            this.op += 0.1;
        }


    }

    act() {
        //Play again button
        if (this.id === 'restart') {
            // buttons = buttons.filter((value, index) => {
            //     return buttons[index].c !== 'end';
            // });
            buttons = [];
            board.removeCells();
            newGame();
        }
        if (this.id === 'tic') {
            board.getGame(3, 3);
            buttons = [];
            newGame();
            loop();
        }
        if (this.id === 'four') {
            board.getGame(7, 7);
            buttons = [];
            newGame();
            loop();
        }
        if (this.id === 'menu') {
            buttons = [];
            board = new Board();
            board.getSize(canv);
            moves = [];
            createMenuButtons();
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
        if (this.opt && this.opt.animate) {
            // this.animate(this.opt.animate);
        }
        ctx.translate(0, 0);
        ctx.textAlign = 'center';
        ctx.textBaseline = 'middle';
        ctx.font = this.opt && this.opt.font ? this.opt.font : 'bold 3.5rem sans-serif';
        ctx.fillStyle = this.opt && this.opt.bgc ? this.opt.bgc : this.colors[0];
        ctx.fillRect(this.center.x, this.center.y, this.w, this.h);
        ctx.fillStyle = this.opt && this.opt.color ? this.opt.color : this.colors[1];
        ctx.fillText(this.txt, this.x, this.y);
        // ctx.translate(0, 0)
    }
}