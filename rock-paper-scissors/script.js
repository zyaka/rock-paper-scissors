const playObjects = ["rock", "paper", "scissors", "rock"];
let computerScore, playerScore;

function computerPlay() {
    let randomNumber = Math.floor(Math.random() * playObjects.length);
    return playObjects[randomNumber];
}

function playRound(object) {
    const computerSelection = computerPlay();
    // const playerSelection = prompt("enter an object:", "");
    const playerSelection = object;
    console.log("you clicked on " + playerSelection);

    let personPlay = playObjects.indexOf(playerSelection);
    if (personPlay == -1)
        alert("Incorrect word");
    else {
        let msg = "";
        if (playerSelection == computerSelection) {
            computerScore++;
            playerScore++;
            msg = "Tie!";
            console.log("Tie!");
        } else {
            if (playObjects[personPlay + 1] == computerSelection) {
                computerScore++;
                msg = "Cpu wins!";
                console.log("Cpu wins!");
            } else {
                playerScore++;
                msg = "Player wins";
                console.log("Player wins!");
            }
        }
        console.log("Cpu: " + computerSelection + ", Player: " + playerSelection + ", " + msg)
    }
}

function game() {
    computerScore = 0;
    playerScore = 0;
    // for (i = 0; i < 5; i++) {
    //     playRound();
    // }
    playRound();
    declareWinner();
}

function declareWinner() {
    let msg = "";
    if (playerScore > computerScore)
        alert("You won the game!")
    else if (playerScore < computerScore)
        alert("Computer won the game!")
    else
        alert("Tie")
    console.log("The score is: Computer " + computerScore + ", Player " + playerScore + ", " + msg)
}
// game();

document.getElementById("rock").btnFunction;
document.getElementById("paper").btnFunction;
document.getElementById("scissors").btnFunction;


let btnFunction = addEventListener('click', (e) => {
    playRound(e.target.id);
});