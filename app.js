// UI
// get references to elements
const outcomeDiv = document.querySelector("#outcome");
const btnContainer = document.querySelector("#container");
const winnerAnnouncement = document.querySelector("#winnerAnnouncement");
const playerChoiceDisplay = document.querySelector("#playerChoiceDisplay");
const computerChoiceDisplay = document.querySelector("#computerChoiceDisplay");

//create element to display the outcome of a around in the outcomeDiv
const outcome = document.createElement("p");
outcome.textContent = "placeholder";
outcome.classList.add("hide");
outcomeDiv.appendChild(outcome);

// slide-fade-in animation
function setAnimationClass () {
    outcome.classList.add("fade");
    playerChoiceDisplay.classList.add("fade");
    computerChoiceDisplay.classList.add("fade");
}

function animate() {
    const buttons = document.querySelectorAll("button");
    buttons.forEach((button) => {
        button.addEventListener("click", () => {
            setTimeout(setAnimationClass, 0);
            outcome.classList.remove("fade");
            playerChoiceDisplay.classList.remove("fade");
            computerChoiceDisplay.classList.remove("fade");
        })
    })
}


// game
let computerScore = 0;
let playerScore = 0;
const roundsToPlay = 5;

function game () {
    animate();
    const buttons = document.querySelectorAll("button");
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

function getComputerChoice() {
    const choices = ["rock", "paper", "scissors"];
    const randomIndex = Math.floor(Math.random() * choices.length);
    return choices[randomIndex];
}

//plays one round of rock paper scissors and updates scores
function play(playerChoice, computerChoice) {
    const result = checkWinner(playerChoice, computerChoice);
    if (result === "player") {
        outcome.textContent = `You win! ${playerChoice} beats ${computerChoice}`;     
        playerScore++;
    }
    else if (result === "tie") {
        outcome.textContent = "It's a tie!";
    }
    else {
        outcome.textContent = `You loose! ${computerChoice} beats ${playerChoice}`;
        computerScore++;
    }
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

function updateVsDisplay (playerChoice, computerChoice) {
    let rockImg = "./icons/RockPixelArt.png";
    let paperImg = "./icons/PaperPixelArt.png";
    let scissorsImg = "./icons/scissors.png";

    if (playerChoice === "rock") {
        playerChoiceDisplay.src = rockImg;
    }
    else if (playerChoice === "paper") {
        playerChoiceDisplay.src = paperImg;
    }
    else {
        playerChoiceDisplay.src = scissorsImg;
    }
    if (computerChoice === "rock") {
        computerChoiceDisplay.src = rockImg;
    }
    else if (computerChoice === "paper") {
        computerChoiceDisplay.src = paperImg;
    }
    else {
        computerChoiceDisplay.src = scissorsImg;
    }
}

function updateScore (playerScore, computerScore) {
    const playerScoreSpan = document.querySelector("#playerScoreSpan");
    const computerScoreSpan = document.querySelector("#computerScoreSpan");
    playerScoreSpan.textContent = `Player: ${playerScore}`;
    computerScoreSpan.textContent = `Computer: ${computerScore}`;
}

function announceWinner(playerScore, computerScore) {
    // remove buttons as soon as the game ends | add replay button 
    if (computerScore === roundsToPlay || playerScore === roundsToPlay) {
        removeButtons();
        resetGame();
        outcome.textContent = "Game Over!";
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

function resetGame() {
    //create replay button
    const resetBtn = document.createElement("button");
    resetBtn.textContent = "Play again";
    resetBtn.classList.add("resetBtn");
    btnContainer.appendChild(resetBtn);
    //reset the game
    resetBtn.addEventListener("click", () => {
        playerScore = 0;
        computerScore = 0;
        resetAnimationClasses();
        createNewButtons();
        btnContainer.removeChild(resetBtn);
        updateScore(playerScore, computerScore);       
        game();
    })
}

function resetAnimationClasses() {
    playerChoiceDisplay.classList.remove("fade");
    computerChoiceDisplay.classList.remove("fade");
    winnerAnnouncement.classList.remove("fade");
    outcome.classList.add("hide");
    outcome.classList.remove("fade");    
}

function createNewButtons() {
    let rock = document.createElement("button");
    let paper = document.createElement("button");
    let scissors = document.createElement("button");
    rock.classList.add("selectionBtn");
    paper.classList.add("selectionBtn");
    scissors.classList.add("selectionBtn");
    rock.id = "rock";
    paper.id = "paper";
    scissors.id = "scissors";
    rock.innerHTML = '<img src="./icons/RockPixelArt.png"/>';
    paper.innerHTML = '<img src="./icons/PaperPixelArt.png"/>';
    scissors.innerHTML = '<img src="./icons/scissors.png"/>';
    btnContainer.appendChild(rock);
    btnContainer.appendChild(paper);
    btnContainer.appendChild(scissors);
}


game ();