function init() {
    console.log("-----NEW GAME-----")
    computerScore = 0;
    playerScore = 0;
    playerScoreDisplay.textContent = playerScore;
    computerScoreDisplay.textContent = computerScore;
}


function dispPlayerSelect() {
    clearScene();
    let playerButtons = document.createElement('ul');
    playerButtons.className = 'button-list';

    let rockli = document.createElement('li');
    let rockButton = document.createElement('button');
    rockButton.textContent = 'rock';
    rockButton.id = 'rock';
    rockli.appendChild(rockButton);
    playerButtons.appendChild(rockli);

    let paperli = document.createElement('li');
    let paperButton = document.createElement('button');
    paperButton.textContent = 'paper';
    paperButton.id = 'paper';
    paperli.appendChild(paperButton);
    playerButtons.appendChild(paperli);

    let scissorsli = document.createElement('li');
    let scissorsButton = document.createElement('button');
    scissorsButton.textContent = 'scissors';
    scissorsButton.id = 'scissors';
    scissorsli.appendChild(scissorsButton);
    playerButtons.appendChild(scissorsli);
    sceneDisplay.appendChild(playerButtons);

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
}


function game(playerSelection){
    clearScene();
    console.log("Player Choice: " + playerSelection);
    let computerSelection = getComputerChoice();
    dispPlayers(playerSelection, computerSelection);
    setTimeout(() => {
        playRound(playerSelection, computerSelection);
    }, 1000);    
}


function playRound(playerSelection, computerSelection){
    clearScene();
    dispFight();
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
    setTimeout(() => {
        showOutcome(playerSelection, computerSelection, outcome);
    }, 1000);
}


function showOutcome(playerSelection, computerSelection, outcome) {
    clearScene();
    dispPlayers(playerSelection, computerSelection);
    switch (outcome){ // use outcome to print to console
        case "draw":
            console.log("It's a draw - I demand a rematch!");
            dispOutcome("It's a draw - I demand a rematch!");
            break;
        case "win":
            console.log("You win this time.. ", playerSelection, " beats ", computerSelection, ".");
            dispOutcome("You win this time.. " + playerSelection + " beats " + computerSelection + ".");
            break;
        case "lose":
            console.log("Hah, you lose.. ", computerSelection, " beats ", playerSelection, ".");
            dispOutcome("Hah, you lose.. " + computerSelection + " beats " + playerSelection + ".");
            break;
        }

    if (outcome === "win") {
        ++playerScore;
    }
    else if (outcome === "lose") {
        ++computerScore;
    }

    console.log("Computer Score: " + computerScore + ", Player Score: " + playerScore)
    playerScoreDisplay.textContent = playerScore;
    computerScoreDisplay.textContent = computerScore;

    if (playerScore >= numWins){
        console.log("You win - I'll beat you next time!");
        clearScene();
        dispOutcome("You win - I'll beat you next time!");
        init()
    }
    if (computerScore >= numWins) {
        console.log("I win - Better luck next time!");
        clearScene();
        dispOutcome("I win - Better luck next time!");
        init()
    }
    let nextRoundButton = document.createElement('button');
    nextRoundButton.textContent = 'Next Round';
    sceneDisplay.appendChild(nextRoundButton);
    nextRoundButton.addEventListener('click', (function(event) {
        dispPlayerSelect();
    }))
}


function getComputerChoice(){
    // Return random option rock, paper or scissors when called
    const choices = ["rock", "paper", "scissors"]; // store possible choices as array of strings
    let randInt = Math.round((Math.random() * 2)); // random integer 0-2
    let computerChoice = choices[randInt]; // map integer to array index
    console.log("Computer Choice: ", computerChoice)
    return computerChoice;
}


function dispPlayers(playerSelection, computerSelection) {
    selections = [playerSelection, computerSelection];
    let playerImg = document.createElement('img');
    let computerImg = document.createElement('img');
    imgs = [playerImg, computerImg];
    for (let i = 0; i < 2; i++) {
        selection = selections[i];
        img = imgs[i]
        if (selection === 'rock') {
            selectionPath = 'imgs/rock.png';
        }
        else if (selection === 'paper') {
            selectionPath = 'imgs/paper.png';
        }
        else {
            selectionPath = 'imgs/scissors.png';
        }
        img.setAttribute('src', selectionPath);
        sceneDisplay.appendChild(img);
    }
}


function dispFight() {
    let fight = document.createElement('img');
    fight.setAttribute('src', 'imgs/fight.png');
    sceneDisplay.appendChild(fight);
}


function dispOutcome(text) {
    let outcomeDisplay = document.createElement('div');
    outcomeDisplay.textContent = text;
    outcomeDisplay.className = 'outcome';
    sceneDisplay.appendChild(outcomeDisplay);
}


function clearScene() {
    let childNodes = sceneDisplay.children;
    let len = childNodes.length;
    for (let i = 0; i < len; i++) {
        sceneDisplay.removeChild(childNodes[0]);
    }
}


let computerScore;
let playerScore;
let numWins = 5;

let computerScoreDisplay = document.querySelector(".computerScore")
let playerScoreDisplay = document.querySelector(".playerScore")

let sceneDisplay = document.querySelector(".scene");

init();
dispPlayerSelect();
