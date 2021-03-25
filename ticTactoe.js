const boardElement = document.getElementById('board');
var board = [];
const resetBtn = document.getElementById('reset-button')
var currentClick = 'X';
var players = ['X','0']

let playerXCount = document.getElementById("playerXScore");
let playerOCount = document.getElementById("playerOScore");
let playerXScore = 0;
let playerOScore = 0;
let playsCounter = [];
let winState = '';

const checkScore = function(player) {

    if (board[0][0].innerHTML == player && board[0][1].innerHTML == player && board[0][2].innerHTML == player) {
        winState = `${player} wins!`;
        $(".board-slot").prop("onclick", null).off("click");
    } else if (board[1][0].innerHTML == player && board[1][1].innerHTML == player && board[1][2].innerHTML == player) {
        winState = `${player} wins!`
        $(".board-slot").prop("onclick", null).off("click");
    } else if (board[2][0].innerHTML == player && board[2][1].innerHTML == player && board[2][2].innerHTML == player) {
        winState = `${player} wins!`
        $(".board-slot").prop("onclick", null).off("click");
    } else if (board[0][0].innerHTML == player && board[1][0].innerHTML == player && board[2][0].innerHTML == player) {
        winState = `${player} wins!`
        $(".board-slot").prop("onclick", null).off("click");
    } else if (board[0][1].innerHTML == player && board[1][1].innerHTML == player && board[2][1].innerHTML == player) {
        winState = `${player} wins!`
        $(".board-slot").prop("onclick", null).off("click");
    } else if (board[0][2].innerHTML == player && board[1][2].innerHTML == player && board[2][2].innerHTML == player) {
        winState = `${player} wins!`
        $(".board-slot").prop("onclick", null).off("click");
    } else if (board[0][0].innerHTML == player && board[1][1].innerHTML == player && board[2][2].innerHTML == player) {
        winState = `${player} wins!`
        $(".board-slot").prop("onclick", null).off("click");
    } else if (board[0][2].innerHTML == player && board[1][1].innerHTML == player && board[2][0].innerHTML == player) {
        winState = `${player} wins!`
        $(".board-slot").prop("onclick", null).off("click");
    }
}


const playHandler = function(param) {
    if(currentClick == 'X') {
        console.log(param);
        console.log(currentClick);
        param.innerHTML = 'X';
        param.style.backgroundColor="#77efff";
        currentClick = 'O';
        param.removeAttribute("onclick");
        console.log(currentClick);
    } else {
        console.log(param);
        console.log(currentClick);
        param.innerHTML = 'O';
        param.style.backgroundColor="#ffbaa1";
        currentClick = 'X';
        param.removeAttribute("onclick");
        console.log(currentClick);
    }

    // keep track of ties
    playsCounter.push(currentClick);

    checkScore('X');
    checkScore('O');
    
    if (winState == 'X wins!') {
        playerXScore++;
        playerXCount.innerHTML = playerXScore;
    } else if (winState == 'O wins!') {
        playerOScore++;
        playerOCount.innerHTML = playerOScore;
    }

    if (playsCounter.length === 9) {
        alert('Game has tied! Please click the reset button.')
    }
}

resetBtn.addEventListener('click', function(e) {
    console.log('clicked');
    e.preventDefault();
    while (boardElement.firstChild) {
        boardElement.removeChild(boardElement.firstChild)
    };
    board = [];
    currentClick = 'X';
    winState = '';
    playsCounter = [];
    init();
});

const init = function() {
    for(var i=0; i<3; i++) {

        if(board[i] == undefined) {
            board[i] = [];
        }

        for(var j=0; j<3; j++) {
            if(board[i][j] == undefined) {
                var slot = document.createElement('div');
                slot.className = 'board-slot'
                slot.setAttribute('onclick', 'playHandler(this)');
                board[i][j] = slot;
                boardElement.appendChild(slot);
            }
        }
    }
}

init();