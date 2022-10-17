function randomNumberGenerator(number) {
  return Math.floor(Math.random() * number);
}

function getComputerChoice() {
  return ["Rock", "Paper", "Scissors"][randomNumberGenerator(3)];
}

function playRound(playerSelection, computerSelection) {
  if (
    (playerSelection === "Rock" && computerSelection === "Scissors") ||
    (playerSelection === "Scissors" && computerSelection === "Paper") ||
    (playerSelection === "Paper" && computerSelection === "Rock")
  ) {
    winner = "player";
    playerScore++;
  } else if (
    (computerSelection === "Rock" && playerSelection === "Scissors") ||
    (computerSelection === "Scissors" && playerSelection === "Paper") ||
    (computerSelection === "Paper" && playerSelection === "Rock")
  ) {
    winner = "computer";
    computerScore++;
  } else {
    winner = "tie";
  }
}

function game(playerSelection) {
  if (computerScore === 5 || playerScore === 5) {
    endGame();
    return;
  }

  playerChoice = playerSelection;
  computerChoice = getComputerChoice();
  playRound(playerChoice, computerChoice);

  broadcastWin();
  updateChoice();
  updateScore();

  if (computerScore === 5 || playerScore === 5) {
    endGame();
    return;
  }
}

function broadcastWin() {
  if (winner === "player") {
    winnerText.textContent = "You win! 🥳";
    broadcastText.textContent = `${playerChoice} beats ${computerChoice}`;
  } else if (winner === "computer") {
    winnerText.textContent = "You loses... 😟";
    broadcastText.textContent = `${computerChoice} beats ${playerChoice}`;
  } else if (winner === "tie") {
    winnerText.textContent = "No one wins. 🗿";
    broadcastText.textContent = `${computerChoice} ties with ${playerChoice}`;
  }
}

function updateChoice() {
  switch (playerChoice) {
    case "Rock":
      playerEmoji.textContent = "🗿";
      break;
    case "Paper":
      playerEmoji.textContent = "📄";
      break;
    case "Scissors":
      playerEmoji.textContent = "✂";
      break;
    default:
      playerEmoji.textContent = "❔";
      break;
  }
  switch (computerChoice) {
    case "Rock":
      computerEmoji.textContent = "🗿";
      break;
    case "Paper":
      computerEmoji.textContent = "📄";
      break;
    case "Scissors":
      computerEmoji.textContent = "✂";
      break;
    default:
      computerEmoji.textContent = "❔";
      break;
  }
}

function updateScore() {
  playerScoreText.textContent = playerScore;
  computerScoreText.textContent = computerScore;
}

function endGame() {
  if (playerScore === 5) {
    replayText.textContent = "You win!";
  } else {
    replayText.textContent = "You lose...";
  }
  replay.classList.remove("hidden");
}

function replayGame() {
  playerScore = 0;
  computerScore = 0;
  winner, playerChoice, (computerChoice = null);
  replay.classList.add("hidden");
  updateScore();
  computerEmoji.textContent = "❔";
  playerEmoji.textContent = "❔";
  winnerText.textContent = "Please make a choice.";
  broadcastText.textContent = "First to five win.";
}

let playerChoice, computerChoice, winner;
let playerScore = 0;
let computerScore = 0;

const rockBtn = document.querySelector("#rock");
const paperBtn = document.querySelector("#paper");
const scissorsBtn = document.querySelector("#scissors");
const winnerText = document.querySelector(".winner");
const broadcastText = document.querySelector(".broadcast");
const playerEmoji = document.querySelector("#player-choice");
const playerScoreText = document.querySelector("#player-score");
const computerEmoji = document.querySelector("#computer-choice");
const computerScoreText = document.querySelector("#computer-score");
const replay = document.querySelector(".replay");
const replayText = document.querySelector(".replay-text");
const replayBtn = document.querySelector(".replay-button");

rockBtn.addEventListener("click", () => game("Rock"));
paperBtn.addEventListener("click", () => game("Paper"));
scissorsBtn.addEventListener("click", () => game("Scissors"));
replayBtn.addEventListener("click", () => replayGame());
