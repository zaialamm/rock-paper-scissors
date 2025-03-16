// rock paper scissors game

const choices = ["rock", "paper", "scissors"];
const playerDisplay = document.getElementById("playerDisplay");
const computerDisplay = document.getElementById("computerDisplay");
const resultDisplay = document.getElementById("resultDisplay");
const playerScoreDisplay = document.getElementById("playerScoreDisplay");
const computerScoreDisplay = document.getElementById("computerScoreDisplay");

let playerScore = 0;
let computerScore = 0;

function playGame(playerChoice) {
    const computerChoice = choices[Math.floor(Math.random()*3)];

    let result = "";

    if (playerChoice === computerChoice) {
        result = "IT'S A TIE!";
 
    } else {
        switch (playerChoice) {
            case "rock":
                result = computerChoice === "scissors" ? "YOU WIN!" : "YOU LOSE!";
                break;
            case "paper":
                result = computerChoice === "rock" ? "YOU WIN!" : "YOU LOSE!";
                break;
            case "scissors":
                result = computerChoice === "paper" ? "YOU WIN!" : "YOU LOSE!";
                break;

        }
    }


    playerDisplay.textContent = `PLAYER: ${playerChoice}`;
    computerDisplay.textContent = `COMPUTER: ${computerChoice}`;
    resultDisplay.textContent = result;

    resultDisplay.classList.remove("greenText", "redText");

    switch(result) {
        case "YOU WIN!":
            resultDisplay.classList.add("greenText");
            playerScore += 1;
            playerScoreDisplay.textContent = playerScore;
            break;
        case "YOU LOSE!":
            resultDisplay.classList.add("redText");
            computerScore += 1;
            computerScoreDisplay.textContent = computerScore;
            break;
    }

    checkForWinner();
 
}

function checkForWinner() {
    if (playerScore === 5) {
        alert("Congratulations! You win the game!");
        resetGame();
    } else if (computerScore === 5) {
        alert("You lose the game! Better luck next time!");
        resetGame();
    }
}
    
function resetGame() {
    playerScore = 0;
    computerScore = 0;
    playerScoreDisplay.textContent = playerScore;
    computerScoreDisplay.textContent = computerScore;
    playerDisplay.textContent = "PLAYER: ";
    computerDisplay.textContent = "COMPUTER: ";
    resultDisplay.textContent = "";
    resultDisplay.classList.remove("greenText", "redText");
}