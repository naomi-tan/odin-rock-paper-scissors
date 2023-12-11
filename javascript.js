// Store possible choices as array of strings
const choices = ["rock", "paper", "scissors"];

function getComputerChoice(){
    // Return random option rock, paper or scissors when called
    let randInt = Math.round((Math.random() * 2)); // random integer 0-2
    let computerChoice = choices[randInt]; // map integer to array index
    console.log("Computer Choice: ", computerChoice)
    return computerChoice;
}

getComputerChoice();