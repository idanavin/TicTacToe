// import { ctx, board, buttons, newGame, loop } from './main';
// let main = require('./main.js')
import { Board } from './Board'
import { board, newGame, loop, resetBoardObj } from './main';
import { createMenuButtons } from './buttons'
import { bestMove } from './minimax';

export class Button {
    constructor(x, y, w, h, txt, id, c, opt) {
        this.x = x;
        this.y = y;
        this.w = w;
        this.h = h;
        this.txt = txt
        this.id = id
        this.opacity = 1;
        this.center = { x: (this.x - (this.w / 2)), y: (this.y - (this.h / 2)) };
        if (opt) {
            this.opt = opt;
            if (opt.animate) {
                this.animate(opt.animate)
                // this.opacity = opt.animate.op;
            }
        }
        if (c) {
            this.c = c
        }
        this.colors = ['grey', 'white'];
    }



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
        let endVal = { x: this.x, y: this.y }
        this.x -= from.x;
        this.center.x -= from.x;
        this.y -= from.y;
        this.center.y -= from.y;
        this.opacity = from.op;
        for (let i = 0; i < 100; i++) {
            setTimeout(() => {
                if (this.x !== endVal.x) {
                    this.x += (from.x * 0.01);
                    this.center.x += (from.x * 0.01);
                }
                if (from.y) {
                    this.y += (from.y * 0.01);
                    this.center.y += (from.y * 0.01);
                }
                if (this.opacity !== 1) {
                    this.opacity += 0.01;
                }
            }, (i * 5))
        }
    }
    act() {
        //Play again button
        if (this.id === 'restart') {
            // buttons = buttons.filter((value, index) => {
            //     return buttons[index].c !== 'end';
            // });
            if (board.checkWin()) {
                loop();
            }
            board.setArrays();
            newGame();
            if (board.game.row === 3) {
                bestMove();
            }
        }
        if (this.id === 'tic') {
            board.getGame(3, 3);
            board.setArrays();
            newGame();
            bestMove();
        }
        if (this.id === 'four') {
            board.getGame(7, 7);
            board.setArrays();
            newGame();
        }
        if (this.id === 'menu') {
            resetBoardObj();
            board.getCanvas();
            board.setListener();
            createMenuButtons();
            if (board.checkWin()) {
                loop();
            }
        }
        if (this.id === 'localStorageClear') {
            board.resetPoints();
        }
        if (this.id === 'cell') {
            let mousex = e.offsetX;
            let mousey = e.offsetY;
            if (!board.moves[Index].done) {
                board.moves[Index].getMouseIndex(mousex, mousey);
            }
        }
    }

    show() {

        if (this.opt && this.opt.animate) {
            // this.animate(this.opt.animate);
        }
        board.ctx.translate(0, 0);
        // console.log(this.opacity);

        board.ctx.globalAlpha = this.opacity;
        board.ctx.textAlign = 'center';
        board.ctx.textBaseline = 'middle';
        board.ctx.font = this.opt && this.opt.font ? this.opt.font : 'bold 3.5rem sans-serif';
        board.ctx.fillStyle = this.opt && this.opt.bgc ? this.opt.bgc : this.colors[0];
        board.ctx.fillRect(this.center.x, this.center.y, this.w, this.h);
        board.ctx.fillStyle = this.opt && this.opt.color ? this.opt.color : this.colors[1];
        board.ctx.fillText(this.txt, this.x, this.y);
        // ctx.translate(0, 0)
    }
}