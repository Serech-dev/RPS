const computerChoices = ["Rock!", "Paper!", "Scissors!"]
let playerChoice = "none"

/*Getting computer choice via a randomly generated number from 0 to 2, returning just the number*/
function getComputerChoice() {
    let randomIndex = Math.floor(Math.random() * 3);
    console.log(randomIndex);
    console.log("Computer threw "+choices[randomIndex]);
    return(randomIndex);
}

/* Depending on which button is pressed, could also get player input via text*/
function playerRock() {
    playerChoice = choices[0];
    console.log("Player threw "+playerChoice);
}
function playerPaper() {
    playerChoice = choices[1];
    console.log("Player threw "+playerChoice);
}
function playerScissors() {
    playerChoice = choices[2];
    console.log("Player threw "+playerChoice);
}

