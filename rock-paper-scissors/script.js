const playObjects = ["rock", "paper", "scissors", "rock"];
let computerScore, playerScore;

function computerPlay() {
    let randomNumber = Math.floor(Math.random() * playObjects.length);
    return playObjects[randomNumber];
}

function playRound() {
    const computerSelection = computerPlay();
    const playerSelection = prompt("enter an object:", "");

    let ixPlayer = playObjects.indexOf(playerSelection);
    if (ixPlayer == -1)
        console.log("Incorrect word")
    else {
        let msg = "";
        if (playerSelection == computerSelection) {
            computerScore++;
            playerScore++;
            msg = "Tie!";
        } else {
            if (playObjects[ixPlayer + 1] == computerSelection) {
                computerScore++;
                msg = "Cpu wins!";
            } else {
                playerScore++;
                msg = "Player wins";
            }
        }
        console.log("Cpu: " + computerSelection + ", Player: " + playerSelection + ", " + msg)
    }
}

function game() {
    computerScore = 0;
    playerScore = 0;
    for (i = 0; i < 5; i++) {
        playRound();
    }
    declareWinner();
}

function declareWinner() {
    let msg = "";
    if (playerScore > computerScore)
        msg = "I won the game!"
    else if (playerScore < computerScore)
        msg = "Computer won the game!"
    else
        msg = "Tie"
    console.log("The score is: Computer " + computerScore + ", Player " + playerScore + ", " + msg)
}

game();