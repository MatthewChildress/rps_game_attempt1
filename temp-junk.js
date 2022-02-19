for (let i = 0; i < 5; i++) {
    let playerSelection = prompt("Rock, Paper, or Scissors?");
    const computerSelection = computerPlay()
    console.log(playRound(playerSelection, computerSelection))
    console.log("Your score: " + playerScore);
    console.log("Computer's score: " + computerScore);
}


// parseInt(0) starts at zero and goes up each round depending on condition
let playerScore = parseInt(0);
let computerScore = parseInt(0);
let tieScore = parseInt(0);
let win = "You win!"
let lose = "You lose!"
let tie = "It is a tie! You picked the same as the computer."
//loop, spits out score.



const h2 = document.querySelector(#h2);
const h3 = document.querySelector(#h3);
const game = document.querySelector(#game);
const container = document.querySelector(#container);
const scorechoice = document.querySelector(#score-choice);
const playerchoice = document.querySelector(#player-choice);
const cpuchoice = document.querySelector(#cpuchoice);
const rock = document.querySelector(#rock);
const paper = document.querySelector(#paper);
const scissors = document.querySelector(#scissors);

rockbtn.addEventListener('click', function() {
    return playerSelection = 'rock';
 });
 
 paperbtn.addEventListener('click', function() {
    return playerSelection = 'paper';
 });
 
 scissorsbtn.addEventListener('click', function() {
    return playerSelection = 'scissors';
 });


 document.querySelector("rockbtn").addEventListener("click", function() {
    playerSelection = 'rock';
});
document.querySelector("paperbtn").addEventListener("click", function() {
    playerSelection = 'paper';
});
document.querySelector("scissorsbtn").addEventListener("click", function() {
    playerSelection = 'scissors';
});

rockButton.addEventListener('click', playRound());
paperButton.addEventListener('click', playRound());
scissorsButton.addEventListener('click', playRound());


const rockButton = document.querySelector('rock');
const paperButton = document.querySelector('paper');
const scissorsButton = document.querySelector('scissors');

document.getElementById('rock').oneclick = user;
document.getElementById('paper').oneclick = user;
document.getElementById('scissors').oneclick = user;

function user() {
    let playerSelection =this.dataset;
    console.log("Player: " + playerSelection)
}



let count = 0;

function clickListener(event) {
    if(event.target.tagName !== "button") {
        return;
    }
    const playerSelection = event.target.dataset.sign;
    const computerSelection = computerPlay();
    playRound(playerSelection, computerSelection);
}

result_p.innerHTML = `${convertToWord(userChoice)}${smallUserWord} loses to ${convertToWord(computerChoice)}${smallCompWord}. You lost!`;
}



for (let i = 0; i < 5; i++) {
    
    console.log(playRound(playerSelection,computerSelection));
}


buttons.forEach((button) => {
    button.addEventListener("click", => {
        const img = button.querySelector("img");
        playerSelection = img.alt.toLowerCase();

        playRound(playerSelection, computerSelection);

        if (playerScore === 5 || computerScore === 5) {
            declareWinner();
        }
    });
});

const buttons = document.querySelector("#button");
buttons.forEach((button) => {
    button.addEventListener("click", () => {
      const img = button.querySelector("img");
      playerSelection = img.alt.toLowerCase();
  
      playRound(playerSelection, computerSelection);
  
      if (playerScore === 5 || computerScore === 5) {
        declareWinner();
      }
    });
  });

const rockButton = document.querySelector('#rockbutton');
const paperButton = document.querySelector('#paperbutton');
const scissorsButton = document.querySelector('#scissorsbutton');


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
