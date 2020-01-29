import { Button } from './Button';
import { Cell } from './Cell';
import { board } from './main';

export function createMenuButtons() {
    let txt = {
        h1: 'Choose a game',
        tic: 'Tic Tac Toe',
        four: 'Four in a row'
    }
    let opt = {
        bgc: '#61cfff',
        color: 'black',
        font: '1rem sans-serif'
    }
    let opt2 = {
        bgc: '#1414',
        color: 'black',
        font: '0.7rem sans-serif',
        animate: {
            x: 10,
            y: 10,
            op: 0,
            rate: 15
        }
    }
    board.buttons.push(
        new Button(board.width / 2, board.height / 2, board.width, board.height, '', 'bg', 'menu', opt),
        new Button(board.width / 2, board.height * 0.2, 150, 65, txt.h1, 'h1', 'menu', opt),
        new Button(board.w - 100, board.height / 2, 150, 65, txt.tic, 'tic', 'menu', opt2),
        new Button(board.w + 100, board.height / 2, 150, 65, txt.four, 'four', 'menu', opt2),
    );
}

export function createGameButtons() {
    let opt = {
        font: '0.7rem sans-serif',
        bgc: 'grey',
        color: 'white'
    }
    board.buttons.push(
        new Button((board.width / 2) - 125, board.ygap / 2, 100, 30, 'Reset score', 'localStorageClear', 'tic', opt),
        new Button(board.width / 2, board.ygap / 2, 100, 30, 'Menu', 'menu', 'tic', opt),
        new Button((board.width / 2) + 125, board.ygap / 2, 100, 30, 'New Game', 'restart', 'tic', opt),
        new Button((board.width / 2) - 125, board.height - 15, 100, 30, board.getPoints().X, 'X', 'score', opt),
        new Button((board.width / 2) + 125, board.height - 15, 100, 30, board.getPoints().O, 'O', 'score', opt)
    );
    const opt2 = {
        font: '1rem sans-serif',
        bgc: 'aqua',
        color: 'black'
    }
    board.buttons.push(new Button(55, 15, 110, 30, '', 'turn', 'turn', opt2))
}

export function createEndGameButtons(score) {
    let txt = '';
        if (score === 'tie') {
            txt = 'Its a tie';
        }
        else {
            txt = `${score} Wins!`
        }
    let options = { font: 'bold 1.2rem sans-serif' };
    board.buttons.push(new Button(board.width / 2, board.height / 2, 300, 100, txt, 'end1', 'end'));
}

export function createCellButtons() {
    let h = board.h * 0.9;
    let hgap = board.height * 0.1
    let w = board.w;
    let opt = {
        bgc: 'rgba(42, 204, 232, 0.3)'
    }

    for (let i = 0; i < board.game.row; i++) {
        for (let j = 0; j < board.game.col; j++) {
            // createCellButtons();
            board.buttons.push(new Cell((i * w), (j * h) + hgap, w, h, '', i + j, 'cell', opt, i, j))
        }
    }
}
