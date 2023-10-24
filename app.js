function getComputerChoice() {
    const choices = ["rock", "paper", "scissors"];
    const randomIndex = Math.floor(Math.random() * choices.length);
    return choices[randomIndex];
}

function checkWinner(playerChoice, computerChoice) {
    if (playerChoice === "rock" && computerChoice === "scissors" || playerChoice === "paper" && computerChoice === "rock" || playerChoice === "scissors" && computerChoice === "paper") {
        return "player";
    }
    else if (playerChoice === computerChoice) {
        return "tie";
    }
    else {
        return "computer";
    }
}

function updateScore (playerScore, computerScore) {
    //get references to player and computer score spans to update scores
    const playerScoreSpan = document.querySelector("#playerScoreSpan");
    const computerScoreSpan = document.querySelector("#computerScoreSpan");
    playerScoreSpan.textContent =  `Player Score: ${playerScore}`;
    computerScoreSpan.textContent = `Computer Score: ${computerScore}`;
}

//plays one round of rock paper scissors and updates scores
function play(playerChoice, computerChoice) {
    //declare variable to get result from checkWinner function to use in if statements to display the rounds result message in the outcome paragraph
    const result = checkWinner(playerChoice, computerChoice);
    if (result === "player") {
        console.log(`You win! ${playerChoice} beats ${computerChoice}`);
        outcome.textContent = `You win! ${playerChoice} beats ${computerChoice}`;     
        playerScore++;
    }
    else if (result === "tie") {
        console.log("It's a tie!");
        outcome.textContent = "It's a tie!";
    }
    else {
        console.log(`You loose! ${computerChoice} beats ${playerChoice}`);
        outcome.textContent = `You loose! ${computerChoice} beats ${playerChoice}`;
        computerScore++;
    }
}

function announceWinner(playerScore, computerScore) {
    const roundsToPlay = 5;
    //get reference to outcomeDiv to append a win/loose message
    const outcomeDiv = document.querySelector("#outcome");
    //create Element to display win/loose message
    const announcement = document.createElement("h1");
    //disable buttons as soon as the game ends
    if (computerScore === roundsToPlay || playerScore === roundsToPlay) {
        document.getElementById("1").disabled = true;
        document.getElementById("2").disabled = true;
        document.getElementById("3").disabled = true; 
        outcome.textContent = "Game over";
    }
    if (computerScore === roundsToPlay) {
        announcement.textContent = "You lost!"
        announcement.style.color = "#E74C3C";
        outcomeDiv.appendChild(announcement);
    }
    else if (playerScore === roundsToPlay) {
        announcement.textContent = "You won!";
        announcement.style.color = "#2ECC71";
        outcomeDiv.appendChild(announcement);
    }
}

//declare global variables to keep track of scores and for other functions to use
let computerScore = 0;
let playerScore = 0;


//UI

//get reference to container element to appends a paragraph that displays the outcome when a round is played
const containerDiv = document.querySelector("#container");
//create paragraph for the play function to display the outcome of a around
const outcome = document.createElement("p");
outcome.textContent = "";
outcome.style.color = "#1B4F72";
containerDiv.appendChild(outcome);

//get references to rock, paper, scissors -buttons 
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

//todo: add reset button   