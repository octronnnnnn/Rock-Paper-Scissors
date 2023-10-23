//array of possible choices other functions can use
const choices = ["rock", "paper", "scissors"];

function getComputerChoice() {
    const randomIndex = Math.floor(Math.random() * choices.length);
    return choices[randomIndex];
}

function checkWinner(playerChoice, computerChoice) {
    if (playerChoice == "rock" && computerChoice == "scissors" || playerChoice == "paper" && computerChoice ==      "rock" || playerChoice == "scissors" && computerChoice == "paper") {
        return "player";
    }
    else if (playerChoice == computerChoice) {
        return "tie";
    }
    else {
        return "computer";
    }
}

let computerScore = 0;
let playerScore = 0;

const scoreDiv = document.querySelector("#score");
const playerScoreSpan = document.querySelector("#playerScoreSpan");
const computerScoreSpan = document.querySelector("#computerScoreSpan");

function updateScore (playerScore, computerScore) {
    playerScoreSpan.textContent =  `Player Score: ${playerScore}`;
    computerScoreSpan.textContent = `Computer Score: ${computerScore}`;
}

function announceWinner(playerScore, computerScore) {
    const container = document.querySelector("#container");
    const announcement = document.createElement("h2");
    //disable buttons as soon as either the player or the computer reaches 5 points
    if (computerScore === 5 || playerScore === 5) {
        document.getElementById("1").disabled = true;
        document.getElementById("2").disabled = true;
        document.getElementById("3").disabled = true; 
    }
    if (computerScore === 5) {
        announcement.textContent = "You lost!"
        announcement.style.color = "red";
        container.appendChild(announcement);
    }
    else if (playerScore === 5) {
        announcement.textContent = "You won!";
        announcement.style.color = "lightgreen";
        container.appendChild(announcement);
    }
}

const containerDiv = document.querySelector("#container");

const outcome = document.createElement("p");
outcome.textContent = "";
containerDiv.appendChild(outcome);


//plays one round of rock paper scissors 
function play(playerChoice, computerChoice) {
    //declare variable to get result from checkWinner function to use in if statements
    const result = checkWinner(playerChoice, computerChoice);
    if (result == "player") {
        console.log(`You win! ${playerChoice} beats ${computerChoice}`);
        outcome.textContent = `You win! ${playerChoice} beats ${computerChoice}`;     
        playerScore++;
    }
    else if (result == "tie") {
        console.log("It's a tie!");
        outcome.textContent = "It's a tie!";
    }
    else {
        console.log(`You loose! ${computerChoice} beats ${playerChoice}`);
        outcome.textContent = `You loose! ${computerChoice} beats ${playerChoice}`;
        computerScore++;
    }
}

//UI

const rockBtn = document.querySelector(".rock");
const paperBtn = document.querySelector(".paper");
const scissorsBtn = document.querySelector(".scissors");

rockBtn.addEventListener("click", () => {
    const computerChoice = getComputerChoice();
    const playerChoice = "rock";
    play(playerChoice, computerChoice)
    updateScore(playerScore, computerScore);
    announceWinner(playerScore, computerScore);
});

paperBtn.addEventListener("click", () => {
    const computerChoice = getComputerChoice();
    const playerChoice = "paper";
    play(playerChoice, computerChoice);
    updateScore(playerScore, computerScore);
    announceWinner(playerScore, computerScore);
});

scissorsBtn.addEventListener("click", () => {
    const computerChoice = getComputerChoice();
    const playerChoice = "scissors";
    play(playerChoice, computerChoice);
    updateScore(playerScore, computerScore);
    announceWinner(playerScore, computerScore);
})

//todo: add reset button    add some styling