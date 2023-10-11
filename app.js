//function that randomly returns either rock, paper or scrissors
function getComputerChoice() {
    const choices = ["rock", "paper", "scissors"];
    const randomIndex = Math.floor(Math.random() * choices.length);
    return choices[randomIndex];
}

//function that that takes the players and the computers choice and plays one round of rock paper scissors
function play(playerSelection, computerSelection) {
    //make parameters case insensitive
    playerSelection = playerSelection.toLowerCase();
    computerSelection = computerSelection.toLowerCase();

    //decalre variables for different possible results
    let result;
    const win = "You win! " + playerSelection + " beats " + computerSelection;
    const loss = "You loose! " + computerSelection + " beats " + playerSelection;
    const tie = "Tie!";
    const typo = "Please choose between Rock, Paper or Scissors (not case sensitive)";

    //if player wins
    if (playerSelection == "rock" && computerSelection == "scissors" || playerSelection == "paper" &&          computerSelection == "rock" || playerSelection == "scissors" && computerSelection == "paper") {
        return result = win;
    }
    //if player looses
    else if (playerSelection == "rock" && computerSelection == "paper" || playerSelection == "paper" && computerSelection == "scissors" || playerSelection == "scissors" && computerSelection == "rock") {
        return result = loss;
    }
    //if its a tie
    else if (playerSelection == "rock" && computerSelection == "rock" || playerSelection == "paper" &&          computerSelection == "paper" || playerSelection == "scissors" && computerSelection == "scissors") {
        return result = tie;
    }
    //if typo
    else {
        return result = typo;
    }
}

//function that plays 5 games of rock paper sicssors and keeps track of scores and announces a winner at the end
 function game() {
  

    //loop to play 5 times 
    for (let i = 0; i < 5; i++) {
        let playerScore;
        //declare variable for player choice
        const playerSelection = prompt("Your Choice?");
        //decalre variable for computers choice
        const computerSelection = getComputerChoice();

        console.log(play(playerSelection, computerSelection));  
    }
 }

game();
