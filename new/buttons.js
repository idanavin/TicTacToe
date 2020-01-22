function createMenuButtons() {
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
        bgc: '#61cfff',
        color: 'black',
        font: '0.7rem sans-serif',
        animate: {
            // x: 0,
            y: 50,
            op: 0
        }
    }
    buttons.push(
        new Button(board.width / 2, board.height / 2, board.width, board.height, '', 'bg', 'menu', opt),
        new Button(board.width / 2, board.height * 0.2, 150, 65, txt.h1, 'h1', 'menu', opt),
        new Button(board.w - 100, board.height / 2, 150, 65, txt.tic, 'tic', 'menu', opt2),
        new Button(board.w + 100, board.height / 2, 150, 65, txt.four, 'four', 'menu', opt2),
    );
}

function createGameButtons() {
    let opt = {
        font: '0.7rem sans-serif',
        bgc: 'grey',
        color: 'white'
    }
    buttons.push(
        new Button((board.width / 2) - 125, board.ygap / 2, 100, 30, 'Reset score', 'localStorageClear', 'tic', opt),
        new Button(board.width / 2, board.ygap / 2, 100, 30, 'Menu', 'menu', 'tic', opt),
        new Button((board.width / 2) + 125, board.ygap / 2, 100, 30, 'New Game', 'restart', 'tic', opt),
        new Button((board.width / 2) - 125, board.height - 15, 100, 30, board.getPoints().X, 'X', 'score', opt),
        new Button((board.width / 2) + 125, board.height - 15, 100, 30, board.getPoints().O, 'O', 'score', opt)
    );
}

function createEndGameButtons(txt) {
    let options = { font: 'bold 1.2rem sans-serif' };
    buttons.push(new Button(board.width / 2, board.height / 2, 300, 100, txt, 'end1', 'end'));
}