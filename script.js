//need computerPlay that will randomly return rock,paper,scissors
//playRound does single round of rock,paper,scissors
//need strings to RETURN results declaring winner
// parameters playerSelection & computerSelection are each choice
//assign values to rock paper scissors
//create an array for computer and/or player choices
// .toLowerCase will make prompt output lowercase
//try to be as efficient as possible
//think how each interaction plays against global
// be mindful of var/let/const clutter


function computerPlay() {
    const cpuArray = ['rock', 'paper', 'scissors'];
    compPick = cpuArray[Math.floor(Math.random() * cpuArray.length)];
    return compPick;

}


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

//player input made lowercase and assigned value


const computerSelection = computerPlay();
const playerSelection = playerPlay();

console.log(playerSelection);
console.log(computerSelection);



function playRound(playerSelection, computerSelection) {
    if (playerSelection == 'rock') {
        if (computerSelection == 'rock') {
            matchResult = "T";
            return matchResult;
        }
        else if (computerSelection == 'paper') {
            matchResult = "L";
            return matchResult;
        }
        else if (computerSelection == 'scissors') {
            matchResult = "W";
            return matchResult;
        }
    }
    else if (playerSelection == 'paper') {
        if (computerSelection == 'rock') {
            matchResult = "W";
            return matchResult;
        }
        else if (computerSelection == 'paper') {
            matchResult = "T";
            return matchResult;
        }
        else if (computerSelection == 'scissors') {
            matchResult = "L";
            return matchResult;
        }
    }
    else if (playerSelection == 'scissors') {
        if (computerSelection == 'rock') {
            matchResult = "L";
            return matchResult;
        }
        else if (computerSelection == 'paper') {
            matchResult = "W";
            return matchResult;
        }
        else if (computerSelection == 'scissors') {
            matchResult = "T";
            return matchResult;
        }
    }
}


console.log(playRound(playerSelection, computerSelection));

function game() {


    for (let i = 0; i < 5; i++) {
        
    }
}



//use prompt to get player info