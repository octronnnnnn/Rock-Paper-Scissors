//plays 5 rounds of rock paper scissors and keeps track of scores to declare a winner at the end
/* function game() {
    //declare varaibles to keep track of scores
    let playerScore = 0;
    let computerScore = 0;
    //loop to play 5 rounds
    for (i = 0; i < 5; i++) {
        //declare variables for players and computers choice to pass to play and checkWinner functions
        const playerChoice = getPlayerChoice();
        const computerChoice = getComputerChoice();
        //play the game and log the result
        console.log(play(playerChoice, computerChoice));
        //increse scores based on who won the round
        if (checkWinner(playerChoice, computerChoice) == "player") {
            playerScore++;
        }
        else if (checkWinner(playerChoice, computerChoice) == "computer") {
            computerScore++;
        }
    }
    //display players and computers scores and announce the winner
    console.log(`Your score: ${playerScore}
Computers score: ${computerScore}`);
    announceWinner(playerScore, computerScore); */

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

const scoreDiv = document.querySelector("#scoreDiv");
const playerScoreSpan = document.querySelector("#playerScoreSpan");
const computerScoreSpan = document.querySelector("#computerScoreSpan");

function updateScore (playerScore, computerScore) {
    playerScoreSpan.textContent =  `Player Score: ${playerScore}`;
    computerScoreSpan.textContent = `Computer Score: ${computerScore}`;
}

function announceWinner(playerScore, computerScore) {
    const container = document.querySelector("#container");
    const announcement = document.createElement("h2");
    if (computerScore === 5) {
        announcement.textContent = "You lost!!!"
        container.appendChild(announcement);
    }
    else if (playerScore === 5) {
        announcement.textContent = "You won!!!";
        container.appendChild(announcement);
    }
}

//plays one round of rock paper scissors 
function play(playerChoice, computerChoice) {
    //declare variable to get result from checkWinner function to use in if statements
    const result = checkWinner(playerChoice, computerChoice);
    const outcomeDiv = document.querySelector("#outcome");
    if (result == "player") {
        const p = document.createElement("p");
        p.textContent = `You win! ${playerChoice} beats ${computerChoice}`;
        outcomeDiv.appendChild(p);
        playerScore++;
    }
    else if (result == "tie") {
        const p = document.createElement("p");
        p.textContent = "It's a tie!";
        outcomeDiv.appendChild(p);
    }
    else {
        const p = document.createElement("p");
        p.textContent = `You loose! ${computerChoice} beats ${playerChoice}`;
        outcomeDiv.appendChild(p);
        computerScore++;
    }
}

//UI

const rockBtn = document.querySelector("#rock");
const paperBtn = document.querySelector("#paper");
const scissorsBtn = document.querySelector("#scissors");

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
    const playerChoice = "paper";
    play(playerChoice, computerChoice);
    updateScore(playerScore, computerScore);
    announceWinner(playerScore, computerScore);
})

