document.addEventListener('DOMContentLoaded', () => {
    console.log("Welcome to tic tac toe");
    let intro = new Audio("elements/game-start-317318.mp3");
    let changeTurn_sfx = new Audio("elements/click-tap-computer-mouse-352734.mp3");
    let gameOver_sfx = new Audio("elements/game-bonus-144751.mp3");

    let turn = 'X';
    let gameOver = false;

    const changeTurn = () => {
        return turn === 'X' ? 'O' : 'X';
    }

    const resetGame = () => {
        const boxtextList = document.getElementsByClassName('boxtext');
        Array.from(boxtextList).forEach(boxtext => {
            boxtext.innerText = '';
        });
        gameOver = false;
        turn = 'X';
        document.getElementsByClassName("info")[0].innerText = 'Turn for ' + turn;
    }

    const over = () => {
        const wins = [
            [0, 1, 2],
            [3, 4, 5],
            [6, 7, 8],
            [0, 3, 6],
            [1, 4, 7],
            [2, 5, 8],
            [0, 4, 8],
            [2, 4, 6]
        ];
        const boxtextList = document.getElementsByClassName('boxtext');
        wins.forEach(e => {
            if ((boxtextList[e[0]].innerText !== '') &&
                (boxtextList[e[0]].innerText === boxtextList[e[1]].innerText) &&
                (boxtextList[e[1]].innerText === boxtextList[e[2]].innerText)) {

                document.querySelector('.info').innerText = boxtextList[e[0]].innerText + " Won";
                gameOver = true;
                gameOver_sfx.play();

                // Auto-reset after 2 seconds
                setTimeout(() => {
                    resetGame();
                }, 2000);
            }
        });
    }

    const boxes = document.getElementsByClassName("box");
    Array.from(boxes).forEach(element => {
        const boxtext = element.querySelector('.boxtext');
        element.addEventListener('click', () => {
            if (boxtext.innerText === '' && !gameOver) {
                boxtext.innerText = turn;
                changeTurn_sfx.play();
                over();
                if (!gameOver) {
                    turn = changeTurn();
                    document.getElementsByClassName("info")[0].innerText = 'Turn for ' + turn;
                }
            }
        });
    });

    const resetBtn = document.getElementById('reset');
    resetBtn.addEventListener('click', () => {
        resetGame();
    });
});
