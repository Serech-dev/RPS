const choices = ["Rock!", "Paper!", "Scissors!"]
let playerChoice = "none"
let running = true
let computerWins = 0;
let playerWins = 0;
let targetWins = 3;

/*Getting computer choice via a randomly generated number from 0 to 2, returning just the number*/
function getComputerChoice() {
    let randomIndex = Math.floor(Math.random() * 3);
    //console.log(randomIndex);
    console.log("Computer threw "+choices[randomIndex]);
    return(randomIndex);
}

/* Depending on which button is pressed, could also get player input via text*/
function playerRock() {
    if (running == true) {
        playerChoice = 0;
        choiceName = choices[0];
        console.log("Player threw "+choiceName);
        playGame()
    }
    else if (playerWins >= 3){
        console.log("Game over, you won! \nReload the page to play again!")
    }
    else if (computerWins >= 3) {
        console.log("Game over, you lost. \nReload the page to play again!")
    }
}
function playerPaper() {
    if (running == true) {
        playerChoice = 1;
        choiceName = choices[1];
        console.log("Player threw "+choiceName);
        playGame()
    }
    else if (playerWins >= 3){
        console.log("Game over, you won! \nReload the page to play again!")
    }
    else if (computerWins >= 3) {
        console.log("Game over, you lost. \nReload the page to play again!")
    }
}
function playerScissors() {
    if (running == true) {
        playerChoice = 2;
        choiceName = choices[2];
        console.log("Player threw "+choiceName);
        playGame()
    }
    else if (playerWins >= 3){
        console.log("Game over, you won! \nReload the page to play again!")
    }
    else if (computerWins >= 3) {
        console.log("Game over, you lost. \nReload the page to play again!")
    }
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
        //console.log("Oh no, you lost!");
        computerWins ++; 
        console.log("Computer won, "+(targetWins-computerWins)+" more wins and they win the match!")
        if (computerWins >= 3) {
            running = false;
        }
        else {
            console.log("Go next!")
        }
    }
    else if (computerChoice == 2 && playerChoice == 0 || 
        computerChoice == 0 && playerChoice == 1 || 
        computerChoice == 1 && playerChoice == 2) {
        //console.log("Congrats, you won!");
        playerWins ++;
        console.log("Player won, "+(targetWins-playerWins)+" more wins and they win the match!")
        if (playerWins >= 3) {
            running = false;
        }
        else {
            console.log("Go next!")
        }
    }
    else if (computerChoice == playerChoice) {
        console.log("Tied, go again!");
    }
    else (console.log("Invalid result."))
}

/* function to play a match of games
loop for the desired amount of wins 
(bo3 = loop till 2 wins on one side)
(first to x = loop till x wins on one side)
loop the game call and increase the win counter 
or not in case of tie */

/*function playMatch() {
    let computerWins = 0;
    let playerWins = 0;
    const targetWins = 3;

    while () {
        
    }
}*/

