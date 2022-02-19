const rockButton = document.querySelector('#rockbutton');
const paperButton = document.querySelector('#paperbutton');
const scissorsButton = document.querySelector('#scissorsbutton');
const playerScore_span = document.getElementById("player-score");
const computerScore_span = document.getElementById("computer-score");
const tieScore_span = document.getElementById("tie-score");
const h2Score = document.getElementById("h2Score");
const h3Score = document.getElementById("h3Score");





// lets computer pick from array choices
function computerPlay() {
    const cpuArray = ['rock', 'paper', 'scissors'];
    compPick = cpuArray[Math.floor(Math.random() * cpuArray.length)];
    return compPick;
}

// plays a round. Add integer value to player,computer, and tie score
function playRound(playerSelection, computerSelection) {
    let playerScore = parseInt(0);
    let computerScore = parseInt(0);
    let tieScore = parseInt(0);
    if (playerSelection == 'rock') {
        if (computerSelection == 'rock') {
            tieScore++;
            tieScore_span.textContent = tieScore;
            h2Score.textContent = "You Tied!";
            h3Score.textcontent = "Rock Just Kinda Clunks Against Rock?";
        }
        else if (computerSelection == 'paper') {
            computerScore++;
            computerScore_span.textContent = computerScore;
            h2Score.textContent = "You Lost!";
            h3Score.textContent = "Paper Bores Rock Into Submission!";
        }
        else if (computerSelection == 'scissors') {
            playerScore++;
            playerScore_span.textContent = playerScore;
            h2Score.textContent = "You Win!";
            h3Score.textContent = "Rock Hit Scissors! Rock Do Good!"
        }
    }
    else if (playerSelection == 'paper') {
        if (computerSelection == 'rock') {
            playerScore++;
            playerScore_span.textContent = playerScore;
            h2Score.textContent = "You Win!";
            h3Score.textContent = "Paper Bores Rock Into Submission!";
        }
        else if (computerSelection == 'paper') {
            tieScore++;
            tieScore_span.textContent = tieScore;
            h2Score.textContent = "You Tied!";
            h3Score.textcontent = "Paper And Paper Would Rather Discuss Theory Together?";
        }
        else if (computerSelection == 'scissors') {
            computerScore++;
            computerScore_span.textContent = computerScore;
            h2Score.textContent = "You Lost!";
            h3Score.textContent = "Scissors Cuts Paper's Life Into Pieces As A Last Resort!";
        }
    }
    else if (playerSelection == 'scissors') {
        if (computerSelection == 'rock') {
            computerScore++;
            computerScore_span.textContent = computerScore;
            h2Score.textContent = "You Win!";
            h3Score.textContent = "Rock Hit Scissors! Rock Do Good!";
        }
        else if (computerSelection == 'paper') {
            playerScore++;
            playerScore_span.textContent = playerScore;
            h2Score.textContent = "You Win!";
            h3Score.textContent = "Scissors Cuts Paper's Life Into Pieces As A Last Resort!";
        }
        else if (computerSelection == 'scissors') {
            tieScore++;
            tieScore_span.textContent = tieScore;
            h2Score.textContent = "You Tied!";
            h3Score.textcontent = "Well This Is Awkward.";            
        }
    }
}

//loop, spits out score.
for (let i = 0; i < 5; i++) {
    rockButton.addEventListener("click", function() {
        let playerSelection = 'rock';
        let computerSelection = computerPlay();
        playRound(playerSelection,computerSelection);
    });
    
    paperButton.addEventListener("click", function() {
        let playerSelection = 'paper';
        let computerSelection = computerPlay();
        playRound(playerSelection,computerSelection);
    });
    
    scissorsButton.addEventListener("click", function() {
        let playerSelection = 'scissors';
        let computerSelection = computerPlay();
        playRound(playerSelection,computerSelection);
    });
    console.log(playRound(playerSelection,computerSelection));
}