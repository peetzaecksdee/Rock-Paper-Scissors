function randomNumberGenerator(number) {
  return Math.floor(Math.random() * number);
}

function getComputerChoice() {
  return ["rock", "paper", "scissors"][randomNumberGenerator(3)];
}

function getPlayerChoice() {
  choice = prompt("Please select your choice");
  return choice;
}

function playRound(playerSelection, computerSelection) {
  if (
    (playerSelection === "rock" && computerSelection === "scissors") ||
    (playerSelection === "scissors" && computerSelection === "paper") ||
    (playerSelection === "paper" && computerSelection === "rock")
  ) {
    return `You wins! ${playerSelection} beats ${computerSelection}!`
  }
  if (
    (computerSelection === "rock" && playerSelection === "scissors") ||
    (computerSelection === "scissors" && playerSelection === "paper") ||
    (computerSelection === "paper" && playerSelection === "rock")
  ) {
    return `You loses... ${computerSelection} beats ${playerSelection}!`
  }
  return `It's a tie. ${playerSelection} ties with ${computerSelection}`
}

function game() {
  for (let i = 0; i < 5; i++) {
    computerChoice = getComputerChoice();
    playerChoice = getPlayerChoice();
    console.log(playRound(playerChoice, computerChoice));
  }
}

let winner;
let computerChoice;
let playerChoice;

game();
