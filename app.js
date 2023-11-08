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
    playerScoreSpan.textContent = `Player: ${playerScore}`;
    computerScoreSpan.textContent = `Computer: ${computerScore}`;
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

function reset () {
    //create reset button
    const resetBtn = document.createElement("button");
    resetBtn.textContent = "Play again";
    btnContainer.appendChild(resetBtn);
    resetBtn.addEventListener("click", () => {
        location.reload();
    })
}

function announceWinner(playerScore, computerScore) {
    const roundsToPlay = 3;
    //remove buttons as soon as the game ends | empty choice dispaly | add replay button | change vsText to dispay winner announcement
    if (computerScore === roundsToPlay || playerScore === roundsToPlay) {
        removeChildren();
        removeChoiceDisplay();
        reset();
        vsText.style.fontSize = "32px";
        vsText.style.fontWeight = "900";
        vsText.style.marginTop = "12px";
        vsText.style.marginBottom = "0px";
        outcome.textContent = "Game over!";
    }
    if (computerScore === roundsToPlay) {
        vsText.textContent = "You lost"
        vsText.style.color = "#E74C3C";
    }
    else if (playerScore === roundsToPlay) {
        vsText.textContent = "You won";
        vsText.style.color = "#2ECC71";        
    }
}

function removeChildren() {
    let rock = document.getElementById("rock");
    let paper = document.getElementById("paper");
    let scissors = document.getElementById("scissors");
    btnContainer.removeChild(rock);
    btnContainer.removeChild(paper);
    btnContainer.removeChild(scissors);
}

function removeChoiceDisplay() {
    displayComputerChoice.textContent = "";
    displayPlayerChoice.textContent = "";
}

function updateVsDisplay (playerChoice, computerChoice) {
    const playerDisplay = document.querySelector("#displayPlayer p");
    playerDisplay.textContent = playerChoice;
    
    const computerDisplay = document.querySelector("#displayComputer p");
    computerDisplay.textContent = computerChoice;
}

function game () {
    //get reference to all buttons 
    const buttons = document.querySelectorAll("button");
    //give each button an eventListener
    buttons.forEach((button) => {
    button.addEventListener("click", () => {
        const playerChoice = button.id;
        const computerChoice = getComputerChoice();
        play(playerChoice, computerChoice)
        updateVsDisplay(playerChoice, computerChoice);
        updateScore(playerScore, computerScore);
        announceWinner(playerScore, computerScore);
    })
})
}

//declare global variables to keep track of scores and for other functions to use
let computerScore = 0;
let playerScore = 0;


//UI

//get reference to outcomeDiv to append outcome messages
const outcomeDiv = document.querySelector("#outcome");

//get reference to button container to append reset button after game ends
const btnContainer = document.querySelector("#container");

//get reference to VS text
const vsText = document.querySelector("#vs");

//get reference to displayed player/pc choices
const displayPlayerChoice = document.querySelector("#displayPlayer p");
const displayComputerChoice = document.querySelector("#displayComputer p");

//create paragraph for the play function to display the outcome of a around
const outcome = document.createElement("p");
outcome.textContent = "Make your Choice!";
outcome.style.color = "#1B4F72";
outcomeDiv.appendChild(outcome);


game ();
