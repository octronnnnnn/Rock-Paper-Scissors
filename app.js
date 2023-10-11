// function that randomly returns either rock, paper or scrissors
function getComputerChoice() {
    const choices = ["rock", "paper", "scissors"];
    const randomIndex = Math.floor(Math.random() * choices.length);
    return choices[randomIndex];
}

// declare variable for player selection
const playerSelection = prompt("Your Choice?");

// decalre variable for computerSelection
const computerSelection = getComputerChoice();

// function that that takes players and computers choice and plays one round of rock paper scissors

function play(playerSelection, computerSelection) {
    playerSelection = playerSelection.toLowerCase();
    computerSelection = computerSelection.toLowerCase();
    let result;
    const win = "You win! " + playerSelection + " beats " + computerSelection;
    const loss = "You loose! " + computerSelection + " beats " + playerSelection;
    const tie = "Tie!";

    if (playerSelection == "rock" && computerSelection == "paper" || playerSelection == "paper" && computerSelection == "scissors" || playerSelection == "scissors" && computerSelection == "rock") {
        return result = loss;
    }
    else if (playerSelection == "rock" && computerSelection == "scissors" || playerSelection == "paper" &&          computerSelection == "rock" || playerSelection == "scissors" && computerSelection == "paper") {
        return result = win;
    }
    else if (playerSelection == "rock" && computerSelection == "rock" || playerSelection == "paper" &&          computerSelection == "paper" || playerSelection == "scissors" && computerSelection == "scissors") {
        return result = tie;
    }
    else {
        return result = "Please choose between Rock, Paper or Scissors (not case sensitive)";
    }
}

 play(playerSelection, computerSelection);
 