document.addEventListener('DOMContentLoaded',  () => {
    console.log("Welcome to tic tac toe")
    let intro = new Audio("elements/game-start-317318.mp3");
    let changeTurn_sfx = new Audio("elements/click-tap-computer-mouse-352734.mp3");
    let gameOver_sfx = new Audio("elements/game-bonus-144751.mp3");

    let turn = 'X';
    let gameOver = false;

    const changeTurn = () => {
        return turn === 'X'?'O': 'X';
    }

    const over = () => {
        wins = [
            [0, 1, 2],
            [3, 4, 5],
            [6, 7, 8],
            [0, 3, 6],
            [1, 4, 7],
            [2, 5, 8],
            [0, 4, 8],
            [2, 4, 6]
        ];
        boxtextList = document.getElementsByClassName('boxtext');
        wins.forEach(e => {
            if((boxtextList[e[0]].innerText !== '') && (boxtextList[e[0]].innerText === boxtextList[e[1]].innerText) && (boxtextList[e[1]].innerText === boxtextList[e[2]].innerText)) {
                document.querySelector('.info').innerText = boxtextList[e[0]].innerText + "Won";
                gameOver = true;
            }
        })
    }

    let boxes = document.getElementsByClassName("box");
    Array.from(boxes).forEach(element => {
        let boxtext = element.querySelector('.boxtext');
        element.addEventListener('click', () => {
            if(boxtext.innerText === '') {
                boxtext.innerText = turn;
                turn = changeTurn();
                changeTurn_sfx.play();
                over();
                if(!gameOver) {
                    document.getElementsByClassName("info")[0].innerText = 'Turn for ' + turn;
                }
                if(gameOver) {
                    gameOver_sfx.play();
                }
            }
        });
    });

    resetBtn = document.getElementById('reset');
    resetBtn.addEventListener('click', () => {
        boxtextList = document.getElementsByClassName('boxtext');
        Array.from(boxtextList).forEach(boxtext => {
            boxtext.innerText = '';
            gameOver =  false;
            turn = 'X';
            document.getElementsByClassName("info")[0].innerText = 'Turn for ' + turn;
        });
    });
});