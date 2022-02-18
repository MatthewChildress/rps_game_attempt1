// lets computer pick from array choices
function computerPlay() {
    const cpuArray = ['rock', 'paper', 'scissors'];
    compPick = cpuArray[Math.floor(Math.random() * cpuArray.length)];
    return compPick;
}
// plays a round. Add integer value to player,computer, and tie score
function playRound(playerSelection, computerSelection) {
    if (playerSelection.toLowerCase() == 'rock') {
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
    else if (playerSelection.toLowerCase() == 'paper') {
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
    else if (playerSelection.toLowerCase() == 'scissors') {
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
// parseInt(0) starts at zero and goes up each round depending on condition
let playerScore = parseInt(0);
let computerScore = parseInt(0);
let tieScore = parseInt(0);
let win = "You win!"
let lose = "You lose!"
let tie = "It is a tie! You picked the same as the computer."
//loop, spits out score.
for (let i = 0; i < 5; i++) {
    let playerSelection = prompt("Rock, Paper, or Scissors?");
    const computerSelection = computerPlay()
    console.log(playRound(playerSelection, computerSelection))
    console.log("Your score: " + playerScore);
    console.log("Computer's score: " + computerScore);
}