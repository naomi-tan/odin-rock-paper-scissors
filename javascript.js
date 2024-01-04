function getComputerChoice(){
    // Return random option rock, paper or scissors when called
    const choices = ["rock", "paper", "scissors"]; // store possible choices as array of strings
    let randInt = Math.round((Math.random() * 2)); // random integer 0-2
    let computerChoice = choices[randInt]; // map integer to array index
    console.log("Computer Choice: ", computerChoice)
    return computerChoice;
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
            console.log("Hah, you lose.. ", computerSelection, " beats ", playerSelection, ".")
            break;
        }
    return outcome;
}

function game(playerSelection){
    console.log("Player Choice: " + playerSelection);
    computerSelection = getComputerChoice();
    outcome = playRound(playerSelection, computerSelection);
    if (outcome === "win") {
        ++playerScore;
    }
    else if (outcome === "lose") {
        ++computerScore;
    }
    console.log("Computer Score: " + computerScore + ", Player Score: " + playerScore)
    if (playerScore >= numWins){
        console.log("You win - I'll beat you next time!");
        init()
    }
    if (computerScore >= numWins) {
        console.log("I win - Better luck next time!");
        init()
    }
}


function init() {
    console.log("-----NEW GAME-----")
    computerScore = 0;
    playerScore = 0;
}


let computerScore;
let playerScore;
let numWins = 5;

init();

let rockButton = document.querySelector("#rock");
let paperButton = document.querySelector("#paper");
let scissorsButton = document.querySelector("#scissors");

// if button pressed, play game with selection
rockButton.addEventListener("click", (function(event) {
    game("rock");
}));
paperButton.addEventListener("click", (function(event) {
    game("paper");
}));
scissorsButton.addEventListener("click", (function(event) {
    game("scissors");
}));
