//list the choices (rock paper scissors)
const choices = ["rock", "paper", "scissors"];

//function that randomly returns either rock, paper or scrissors
function getComputerChoice() {
    const choice = choices[Math.floor(Math.random() * choices.length)];
    return choice;
}

//function to get player input
function getPlayerInput() {
    validateInput = false;
    while (validateInput == false) {
        const choice = prompt("Rock, paper or scrissors?");
        if (choice == null) {
            continue;
        }
        const choiceToLower = choice.toLowerCase();
        if (choices.includes(choiceToLower)) {
            validateInput = true;
            return choiceToLower;
        }
    }
}


//function to check for winner
function checkWinner(playerSelection, computerSelection) {
    //player wins
    if (playerSelection == "rock" && computerSelection == "scissors" || playerSelection == "paper" &&          computerSelection == "rock" || playerSelection == "scissors" && computerSelection == "paper") {
        return "Player"
    }
    //tie
    else if (playerSelection == computerSelection) {
        return "Tie";
    }
    //computer wins
    else {
        return "Computer";
    }
}

//function that that takes the players and the computers choice and plays one round of rock paper scissors
function play(playerSelection, computerSelection) {

    const result = checkWinner(playerSelection, computerSelection);
    if (result == "Tie") {
        return "It's a tie!";
    }
    else if (result == "Player") {
        return `You win! ${playerSelection} beats ${computerSelection}`;
    }
    else {
        return `You loose! ${computerSelection} beats ${playerSelection}`;
    }
}

//function that plays 5 games of rock paper sicssors and keeps track of scores and announces a winner at the end
 function game() {
    //decalre variables to keep track of scores
    let playerScore = 0;
    let computerScore = 0;
    //loop to play 5 times 
    for (let i = 0; i < 5; i++) {
        //declare varaible for the players selection
        let playerSelection = getPlayerInput();
        //declare variable for the computers selection
        let computerSelection = getComputerChoice();
        console.log(play(playerSelection, computerSelection)); 
        if (checkWinner(playerSelection, computerSelection) == "Player") {
            playerScore++;
        }
        else if (checkWinner(playerSelection, computerSelection) == "Computer") {
            computerScore++;
        }
    }
    //print scores
    console.log(`Your score is ${playerScore}.`);
    console.log(`The computers Score is ${computerScore}.`);
    //declare Winner
    if (playerScore > computerScore) {
        console.log("You win!");
    }
    else if (computerScore > playerScore) {
        console.log("The computer wins!");
    }
    else {
        console.log("It's a tie!");
    }
}

game();