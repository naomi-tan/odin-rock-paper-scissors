// Store possible choices as array of strings
const choices = ["rock", "paper", "scissors"];

function getComputerChoice(){
    // Return random option rock, paper or scissors when called
    let randInt = Math.round((Math.random() * 2)); // random integer 0-2
    let computerChoice = choices[randInt]; // map integer to array index
    console.log("Computer Choice: ", computerChoice)
    return computerChoice;
}

function getPlayerChoice(){
    // Get user input and convert string to all lower case
    let playerSelection = prompt("Enter rock, paper, or scissors: ").toLowerCase();
    console.log("Player Choice: ", playerSelection)
    return playerSelection;
}

function playRound(playerSelection, computerSelection){
    // Return outcome of the round
    let outcome;
    if (playerSelection === computerSelection){ // check for draw first
        outcome = "draw"
    }
    else { // get outcome if not a draw
        switch (playerSelection){
            case "rock":
                if (computerSelection === "paper"){
                    outcome = "lose"
                }
                else if (computerSelection === "scissors"){
                    outcome = "win"
                }
                break;
            case "paper":
                if (computerSelection === "scissors"){
                    outcome = "lose"
                }
                else if (computerSelection === "rock"){
                    outcome = "win"
                }
                break;
            case "scissors":
                if (computerSelection === "rock"){
                    outcome = "lose"
                }
                else if (computerSelection === "paper"){
                    outcome = "win"
                }
                break;
            }
    }
    switch (outcome){ // use outcome to print to console
        case "draw":
            console.log("It's a draw - I demand a rematch!")
            break;
        case "win":
            console.log("You win this time.. ", playerSelection, " beats ", computerSelection, ".")
            break;
        case "lose":
            console.log("You lose.. ", computerSelection, " beats ", playerSelection, ".")
            break;
        }
    return outcome;
}

function game(){
    // Play best of 5 and keep score
}

let round = 0;
let score = 0;
let outcome;
do{ // if outcome is a draw, replay round
    const playerSelection = getPlayerChoice();
    const computerSelection = getComputerChoice();
    outcome = playRound(playerSelection, computerSelection);
} while(outcome === "draw");
