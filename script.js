//create function that returns rock paper or scissors: Array?
//function that plays a single round of RPS


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

const computerSelection = getComputerChoice(rockPaperScissors);

function letsPlay() {
    let playerSelection = prompt('Rock, Paper, or Scissors?').toLowerCase();
    
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



//function letsPlay(playerSelection, computerSelection) {
//    if (playerSelection === 'rock' && computerSelection === 'paper') {
//        console.log('You Lose! paper beats rock!');
//    } else if (playerSelection === 'rock' && computerSelection === 'rock') {
//        console.log('Tie! Try again!');
//    } else if (playerSelection === 'rock' && computerSelection === 'scissors') {
//        console.log('You Win! rock beats scissors!');
//    } else if (playerSelection === 'paper' && computerSelection === 'rock') {
//        console.log('You Win! paper beats rock!');
//    } else if (playerSelection === 'paper' && computerSelection === 'paper') {
//        console.log('Tie! Try again!');
//    } else if (playerSelection === 'paper' && computerSelection === 'scissors') {
//        console.log('You Lose! scissors beats paper!');
//    } else if (playerSelection === 'scissors' && computerSelection === 'rock') {
//        console.log('You Lose! rock beats scissors!');
//    } else if (playerSelection === 'scissors' && computerSelection === 'scissors') {
//        console.log('Tie! Try again!');
//    } else if (playerSelection === 'scissors' && computerSelection === 'paper') {
//        console.log('You Win! scissors beats paper!');
//    }
//}
