//need strings to RETURN results declaring winner
//assign values to rock paper scissors
//create an array for computer and/or player choices
// .toLowerCase will make prompt output lowercase
//think how each interaction plays against global

// sets up player score
let playerScore = 0;
let computerScore = 0;
// computer pick random choice from array
function computerPlay() {
    const cpuArray = ['rock', 'paper', 'scissors'];
    compPick = cpuArray[Math.floor(Math.random() * cpuArray.length)];
    return compPick;
}
//prompt changes to lowercase and returns player choice
function playerPlay() {
    playerPick = prompt("Rock, Paper, or Scissors?").toLowerCase();
    if (playerPick == 'rock') {
        return playerPick;
    }
    else if (playerPick == 'paper') {
        return playerPick;
    }
    else if (playerPick == 'scissors') {
        return playerPick;
    }
}
// declares variables for function results
const computerSelection = computerPlay();
const playerSelection = playerPlay();
// shows me what choices were to play test
console.log(playerSelection);
console.log(computerSelection);
// long if, else if to determine winner for a round
function playRound(playerSelection, computerSelection) {
    if (playerSelection == 'rock') {
        if (computerSelection == 'rock') {
            matchResult = "T";
            return matchResult;
        }
        else if (computerSelection == 'paper') {
            matchResult = "L";
            computerScore++;
            return matchResult;
        }
        else if (computerSelection == 'scissors') {
            matchResult = "W";
            playerScore++;
            return matchResult;
        }
    }
    else if (playerSelection == 'paper') {
        if (computerSelection == 'rock') {
            matchResult = "W";
            playerScore++;
            return matchResult;
        }
        else if (computerSelection == 'paper') {
            matchResult = "T";
            return matchResult;
        }
        else if (computerSelection == 'scissors') {
            matchResult = "L";
            computerScore++;
            return matchResult;
        }
    }
    else if (playerSelection == 'scissors') {
        if (computerSelection == 'rock') {
            matchResult = "L";
            computerScore++;
            return matchResult;
        }
        else if (computerSelection == 'paper') {
            matchResult = "W";
            playerScore++;
            return matchResult;
        }
        else if (computerSelection == 'scissors') {
            matchResult = "T";
            return matchResult;
        }
    }
}
// outputs matchResult
console.log(playRound(playerSelection, computerSelection));
console.log('Player Score:',playerScore,'COmputer Score:',computerScore);

function game() {
    for (let i = 0; i < 5; i++) {
        
    }
}



//use prompt to get player info