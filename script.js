const rockPaperScissors = [
    'rock',
    'paper',
    'scissors',
]

let playerScore = 0;
let computerScore = 0;
let turns = 0;

function getComputerChoice(rps) {
    const randomChoice = Math.floor(Math.random() * 3);
    const computerChoice = rps[randomChoice];
    return computerChoice;
}
// function used to play against computer in the console
function letsPlay() {
    let playerSelection = prompt('Rock, Paper, or Scissors?').toLowerCase();
    let computerSelection = getComputerChoice(rockPaperScissors);
    return game(playerSelection,computerSelection) + console.log(`computer chose ${computerSelection}` + ` Player Score: ${playerScore} Computer Score: ${computerScore} Turns Played: ${turns}`);
}

function game(playerSelection, computerSelection) {
    if(playerSelection === computerSelection){
        console.log('Tie! Try again!');
        turns++;
    } else if(playerSelection === 'rock'){
        if(computerSelection === 'paper'){
            console.log('You Lose! paper beats rock');
            computerScore++;
            turns++;
        } else {
            console.log('You Won! rock beats scissors');
            playerScore++;
            turns++;
        }
    } else if(playerSelection === 'scissors'){
        if(computerSelection === 'rock'){
            console.log('You Lose! rock beats scissors');
            computerScore++;
            turns++;
        }else {
            console.log('You Won! scissors beats paper');
            playerScore++;
            turns++;
        }
    } else if(playerSelection === 'paper'){
        if(computerSelection === 'scissors'){
            console.log('You Lose! scissors beats paper');
            computerScore++;
            turns++;
        }else {
            console.log('You Won! paper beats rock');
            playerScore++;
            turns++;
        }
}
}
// added a way to click rock paper or scissors on the webpage to play a round of the game
function rock() {
    let playerSelection = 'rock';
    let computerSelection = getComputerChoice(rockPaperScissors);
    return game(playerSelection,computerSelection) + console.log(`computer chose ${computerSelection}` + ` Player Score: ${playerScore} Computer Score: ${computerScore} Turns Played: ${turns}`);
}
function paper() {
    let playerSelection = 'paper';
    let computerSelection = getComputerChoice(rockPaperScissors);
    return game(playerSelection,computerSelection) + console.log(`computer chose ${computerSelection}` + ` Player Score: ${playerScore} Computer Score: ${computerScore} Turns Played: ${turns}`);
}
function scissors() {
    let playerSelection = 'scissors';
    let computerSelection = getComputerChoice(rockPaperScissors);
    return game(playerSelection,computerSelection) + console.log(`computer chose ${computerSelection}` + ` Player Score: ${playerScore} Computer Score: ${computerScore} Turns Played: ${turns}`);
}
