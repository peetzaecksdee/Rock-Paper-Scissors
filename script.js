// real game
let playerScore = 0;
let computerScore = 0;
let winner;

function getComputerChoice(array) {
    let randomNumber = Math.floor(Math.random() * 3);
    switch (randomNumber) {
        case 0:
            return "rock";
        case 1:
            return "paper";
        case 2:
            return "scissors";
    }
}

function playRound(playerSelection, computerSelection) {
    if (playerSelection === computerSelection) {
        winner = "tie";
    }

    if (
        (playerSelection === "rock" && computerSelection === "scissors") ||
        (playerSelection === "scissors" && computerSelection === "paper") ||
        (playerSelection === "paper" && computerSelection === "rock")
    ) {
        playerScore++;
        winner = "player";
    }

    if (
        (computerSelection === "rock" && playerSelection === "scissors") ||
        (computerSelection === "scissors" && playerSelection === "paper") ||
        (computerSelection === "paper" && playerSelection === "rock")
    ) {
        computerScore++;
        winner = "computer";
    }
}

function gameOver() {
    return playerScore === 5 || computerScore === 5;
}

// UI thingys

const rock = document.querySelector("#rock");
const paper = document.querySelector("#paper");
const scissors = document.querySelector("#scissors");
const playerIcon = document.querySelector("#player-selection");
const computerIcon = document.querySelector("#computer-selection");
const winnerText = document.querySelector("#winner");
const contextText = document.querySelector("#context");
const playerScoreText = document.querySelector("#player-score");
const computerScoreText = document.querySelector("#computer-score");
const replay = document.querySelector(".replay");
const replayText = document.querySelector("#replayText");
const replayButton = document.querySelector("#replayButton");

rock.addEventListener("click", () => handleClick("rock"));
paper.addEventListener("click", () => handleClick("paper"));
scissors.addEventListener("click", () => handleClick("scissors"));
replayButton.addEventListener("click", () => replayGame())

function handleClick(playerSelection) {
    if (gameOver()) {
        return;
    }

    const computerSelection = getComputerChoice();
    playRound(playerSelection, computerSelection);
    selectionIconChange(playerSelection, computerSelection);
    updateTextContext(playerSelection, computerSelection);
    updateScores();
    
    if (gameOver()) {
        replay.style.visibility = "visible";
        replayText.textContent =
            winner === "player" ? "You win! :)" : "You lose :(";
        return;
    }
}

function selectionIconChange(player, computer) {
    switch (player) {
        case "rock":
            playerIcon.textContent = "✊🏻";
            break;

        case "paper":
            playerIcon.textContent = "✋🏻";
            break;

        case "scissors":
            playerIcon.textContent = "✌🏻";
            break;
    }

    switch (computer) {
        case "rock":
            computerIcon.textContent = "✊🏻";
            break;

        case "paper":
            computerIcon.textContent = "✋🏻";
            break;

        case "scissors":
            computerIcon.textContent = "✌🏻";
            break;
    }
}

function updateScores() {
    if (winner === "tie") {
        winnerText.textContent = "It's a tie!";
    } else if (winner === "player") {
        winnerText.textContent = "You win!";
    } else if (winner === "computer") {
        winnerText.textContent = "You lose!";
    }

    playerScoreText.textContent = `${playerScore}`;
    computerScoreText.textContent = `${computerScore}`;
}

function updateTextContext(playerSelection, computerSelection) {
    if (winner === "player") {
        contextText.textContent = `${
            playerSelection.charAt(0).toUpperCase() + playerSelection.slice(1)
        } beats ${
            computerSelection.charAt(0).toUpperCase() +
            computerSelection.slice(1)
        }`;
        return;
    }

    if (winner === "computer") {
        contextText.textContent = `${
            computerSelection.charAt(0).toUpperCase() +
            computerSelection.slice(1)
        } beats ${
            playerSelection.charAt(0).toUpperCase() + playerSelection.slice(1)
        }`;
        return;
    }

    contextText.textContent = `${
        playerSelection.charAt(0).toUpperCase() + playerSelection.slice(1)
    } ties with ${
        computerSelection.charAt(0).toUpperCase() + computerSelection.slice(1)
    }`;
}

function replayGame() {
    replay.style.visibility = "hidden";
    replayText.textContent = "";
    playerScore = 0;
    computerScore = 0;
    winner = "";
    playerIcon.textContent = "❔";
    computerIcon.textContent = "❔";
    playerScoreText.textContent = 0;
    computerScoreText.textContent = 0;
    winnerText.textContent = "Please select your choice.";
    contextText.textContent = "First to 5 scores win";
}