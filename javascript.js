function getComputerChoice(){
    // Return random option rock, paper or scissors when called
    const choices = ["rock", "paper", "scissors"]; // store possible choices as array of strings
    let randInt = Math.round((Math.random() * 2)); // random integer 0-2
    let computerChoice = choices[randInt]; // map integer to array index
    console.log("Computer Choice: ", computerChoice)
    return computerChoice;
}

function getPlayerChoice(){
    // Get user input and convert string to all lower case
    let playerSelection;
    do{ // prompt again if user cancels prompt
        playerSelection = prompt("Enter rock, paper, or scissors: ");
    }while(checkUserInput(playerSelection) === "invalid")
    console.log("Player Choice: ", playerSelection)
    return playerSelection.toLowerCase();
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

function game(){
    // Play best of 5 and keep score
    let playerSelection;
    let computerSelection;
    let round = 0;
    let score = 0;
    let outcome;
    while(round < 5){
        console.log("ROUND ", round + 1)
        do{ // if outcome is a draw, replay round
            playerSelection = getPlayerChoice();
            computerSelection = getComputerChoice();
            outcome = playRound(playerSelection, computerSelection);
        } while(outcome === "draw");
        if (outcome === "win"){
            ++score;
        }
        ++round; // increment round counter
    }
    if (score >= 3){
        console.log("You win - I'll beat you next time!")
    }
    else{
        console.log("I win - Better luck next time!")
    }
}

function checkUserInput(userInput){
    if (userInput === null){
        console.log("Stop being a wimp and fight me!")
        return "invalid";
    }
    if (userInput === ""){
        console.log("Nervous? You entered nothing!")
        return "invalid";
    }
    if ((userInput.toLowerCase() === "rock") || (userInput.toLowerCase() === "paper") || (userInput.toLowerCase() === "scissors")){
        return "valid";
    }
    else{
        console.log("Do I need to spell it for you?.. Invalid entry.")
        return "invalid";
    }
}

game();
