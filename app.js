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
    resetBtn.classList.add("resetBtn");
    btnContainer.appendChild(resetBtn);
    resetBtn.addEventListener("click", () => {
        location.reload();
    })
}

function announceWinner(playerScore, computerScore) {
    const roundsToPlay = 5;
    //remove buttons as soon as the game ends | empty choice dispaly | add replay button | change vsText to dispay winner announcement
    if (computerScore === roundsToPlay || playerScore === roundsToPlay) {
        removeButtons();
        reset();
        outcome.textContent += ". Game Over!";
        winnerAnnouncement.classList.add("fade");
    }
    if (computerScore === roundsToPlay) {
        winnerAnnouncement.textContent = "YOU LOST!";
        winnerAnnouncement.style.color = "red";
    }
    else if (playerScore === roundsToPlay) {
        winnerAnnouncement.textContent = "YOU WON!";
        winnerAnnouncement.style.color = "rgb(120, 200, 0)"; 
    }
}

function removeButtons() {
    let rock = document.getElementById("rock");
    let paper = document.getElementById("paper");
    let scissors = document.getElementById("scissors");
    btnContainer.removeChild(rock);
    btnContainer.removeChild(paper);
    btnContainer.removeChild(scissors);
}

function updateVsDisplay (playerChoice, computerChoice) {
    let rock = "./icons/RockPixelArt.png"
    let paper = "./icons/PaperPixelArt.png"
    let scissors = "./icons/scissors.png"

    if (playerChoice === "rock") {
        playerChoiceDisplay.src = rock;
    }
    else if(playerChoice === "paper") {
        playerChoiceDisplay.src = paper;
    }
    else {
        playerChoiceDisplay.src = scissors;
    }
    if (computerChoice === "rock") {
        computerChoiceDisplay.src = rock;
    }
    else if(computerChoice === "paper") {
        computerChoiceDisplay.src = paper;
    }
    else {
        computerChoiceDisplay.src = scissors;
    }
    playerChoiceDisplay.style.width = "60px";
    playerChoiceDisplay.style.height = "60px";
    computerChoiceDisplay.style.width = "60px";
    computerChoiceDisplay.style.height = "60px";
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

//outcome text animation
function onTick () {
    outcome.classList.add("fade");
    playerChoiceDisplay.classList.add("fade");
    computerChoiceDisplay.classList.add("fade");
}

const buttons = document.querySelectorAll("button");
buttons.forEach((button) => {
    button.addEventListener("click", () => {
        let timer = setInterval(onTick, 80);
        outcome.classList.remove("fade");
    })
})

//get reference to outcomeDiv to append outcome messages
const outcomeDiv = document.querySelector("#outcome");

//get reference to button container to append reset button after game ends
const btnContainer = document.querySelector("#container");

//get reference to winnerAnnouncement text
const winnerAnnouncement = document.querySelector("#winnerAnnouncement");

//get reference to displayed player/pc choices
const playerChoiceDisplay = document.querySelector("#playerChoiceDisplay");
const computerChoiceDisplay = document.querySelector("#computerChoiceDisplay");
playerChoiceDisplay.classList.add("hideLeft");
computerChoiceDisplay.classList.add("hideRight");

//create paragraph for the play function to display the outcome of a around
const outcome = document.createElement("p");
outcome.textContent = "placeholder";
outcome.classList.add("hide");
outcomeDiv.appendChild(outcome);


game ();
