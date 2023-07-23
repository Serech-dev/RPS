const choices = ["Rock!", "Paper!", "Scissors!"]
let playerChoice = "none"
let running = true
let computerWins = 0;
let playerWins = 0;
let targetWins = 3;

/* TO DO:
Button to restart match/reload page
Button to random
Button to change targetWins before match starts
Once match starts show buttons for choices
Reorder functions/move bigger functions to different files
*/

/*Getting computer choice via a randomly generated number from 0 to 2, returning just the number*/
function getComputerChoice() {
    let randomIndex = Math.floor(Math.random() * 3);
    //console.log(randomIndex);
    console.log("Computer threw "+choices[randomIndex]);
    return(randomIndex);
}

/* Depending on which button is pressed gets player input and runs game
while running is true keep playing
at set wins running is false and the game is over 
requiring a page reload to restart*/
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
declare a winner and raise win counter
announce wins left to win and turn off "running" if 0
make if x == x statement for ties*/
function playGame() {
    let computerChoice = getComputerChoice()
    if (computerChoice == 0 && playerChoice == 2 || 
        computerChoice == 1 && playerChoice == 0 || 
        computerChoice == 2 && playerChoice == 1) {
        //console.log("Oh no, you lost!");
        computerWins ++; 
        console.log("Computer won, "+(targetWins-computerWins)+" more and they win the match!")
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
        console.log("Player won, "+(targetWins-playerWins)+" more and they win the match!")
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


