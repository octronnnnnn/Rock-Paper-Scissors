//array of possible choices other functions can use
const choices = ["rock", "paper", "scissors"];

function getComputerChoice() {
    const randomIndex = Math.floor(Math.random() * choices.length);
    return choices[randomIndex];
}

function getPlayerChoice() {
    //loop to repeat prompt in case the player gives unwanted input
    inputValdation = false;
    while (inputValdation == false) {
        const input = prompt("Rock, paper or scissors?");
        if (input == null) {
            continue;
        }
        const inputToLowerCase = input.toLowerCase();
        if (choices.includes(inputToLowerCase)) {
            inputValdation = true;
            return inputToLowerCase;
        }
    }
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

function announceWinner(playerScore, computerScore) {
    if (playerScore > computerScore) {
        console.log("You won!!!");
    }
    else if (playerScore == computerScore) {
        console.log("It's a tie!!!");
    }
    else {
        console.log("You lost!!!")
    }
}

//plays one round of rock paper scissors 
function play(playerChoice, computerChoice) {
    //declare variable to get result from checkWinner function to use in if statements
    const result = checkWinner(playerChoice, computerChoice);
    if (result == "player") {
        return `You win! ${playerChoice} beats ${computerChoice}`;
    }
    else if (result == "tie") {
        return "It's a tie!";
    }
    else {
        return `You loose! ${computerChoice} beats ${playerChoice}`; 
    }
}

//plays 5 rounds of rock paper scissors and keeps track of scores to declare a winner at the end
function game() {
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
    announceWinner(playerScore, computerScore);

}

game();