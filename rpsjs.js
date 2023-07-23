const choices = ["Rock!", "Paper!", "Scissors!"]
let playerChoice = "none"

/*Getting computer choice via a randomly generated number from 0 to 2, returning just the number*/
function getComputerChoice() {
    let randomIndex = Math.floor(Math.random() * 3);
    //console.log(randomIndex);
    console.log("Computer threw "+choices[randomIndex]);
    return(randomIndex);
}

/* Depending on which button is pressed, could also get player input via text*/
function playerRock() {
    playerChoice = 0;
    choiceName = choices[0];
    console.log("Player threw "+choiceName);
    playGame()
}
function playerPaper() {
    playerChoice = 1;
    choiceName = choices[1];
    console.log("Player threw "+choiceName);
    playGame()
}
function playerScissors() {
    playerChoice = 2;
    choiceName = choices[2];
    console.log("Player threw "+choiceName);
    playGame()
}

/*function to play the game
start by retrieving player and computer choices
make if x || x || x statements to choose a winner
declare a winner
make if x == x statement for ties
declare a tie and play again*/

function playGame() {
    let computerChoice = getComputerChoice()
    if (computerChoice == 0 && playerChoice == 2 || 
        computerChoice == 1 && playerChoice == 0 || 
        computerChoice == 2 && playerChoice == 1) {
        console.log("Oh no, you lost!"); 
    }
    else if (computerChoice == 2 && playerChoice == 0 || 
        computerChoice == 0 && playerChoice == 1 || 
        computerChoice == 1 && playerChoice == 2) {
        console.log("Congrats, you won!");
    }
    else if (computerChoice == playerChoice) {
        console.log("Tied, go again!");
    }
    else (console.log("Invalid result."))
}

