//create function that returns rock paper or scissors: Array?
//function that plays a single round of RPS

const rockPaperScissors = [
    'Rock',
    'Paper',
    'Scissors',
]

function getComputerChoice(rps) {
    const randomChoice = Math.floor(Math.random() * 3);
    const computerChoice = rps[randomChoice];
    return computerChoice;
}

const result = getComputerChoice(rockPaperScissors);
console.log(result)