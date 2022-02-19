// lets computer pick from array choices
function computerPlay() {
    const cpuArray = ['rock', 'paper', 'scissors'];
    compPick = cpuArray[Math.floor(Math.random() * cpuArray.length)];
    return compPick;
}

const rockButton = document.querySelector('.rock');
const paperButton = document.querySelector('.paper');
const scissorsButton = document.querySelector('.scissors');







// plays a round. Add integer value to player,computer, and tie score
function playRound(playerSelection, computerSelection) {
    this.classList.add('userClick');
    if (playerSelection == 'rock') {
        if (computerSelection == 'rock') {
            tieScore++;
            return tie;
        }
        else if (computerSelection == 'paper') {
            computerScore++;
            return lose;
        }
        else if (computerSelection == 'scissors') {
            playerScore++;
            return win;
        }
    }
    else if (playerSelection == 'paper') {
        if (computerSelection == 'rock') {
            playerScore++;
            return win;
        }
        else if (computerSelection == 'paper') {
            tieScore++;
            return tie;
        }
        else if (computerSelection == 'scissors') {
            computerScore++;
            return lose;
        }
    }
    else if (playerSelection == 'scissors') {
        if (computerSelection == 'rock') {
            computerScore++;
            return lose;
        }
        else if (computerSelection == 'paper') {
            playerScore++;
            return win;
        }
        else if (computerSelection == 'scissors') {
            tieScore++;
            return tie;
        }
    }
}




let win = "You win!"
let lose = "You lose!"
let tie = "It is a tie! You picked the same as the computer."
//loop, spits out score.

for (let i = 0; i < 5; i++) {
    playerSelection = this.dataset.button;
    const computerSelection = computerPlay()
    console.log(playRound(playerSelection, computerSelection))
}

rockButton.addEventListener('click', playRound());
paperButton.addEventListener('click', playRound());
scissorsButton.addEventListener('click', playRound());




let count = 0;

