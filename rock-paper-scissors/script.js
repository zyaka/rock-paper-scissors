let computerScore = 0;
let playerScore = 0;

const playObjects = ["rock", "paper", "scissors"];
const randomNumber = Math.floor(Math.random() * playObjects.length);

function computerPlay() {
    return playObjects[randomNumber];
}

function playRound() {
    const computerSelection = computerPlay();
    const playerSelection = prompt("enter an object:", "");

    if (playObjects.indexOf(playerSelection) < 0) {
        console.log("wrong word");
    } else if (computerSelection === playerSelection) {
        return "It's a tie!";
    } else if (computerSelection === "rock") {
        if (playerSelection === "paper") {
            return "You win! Paper beats rock";
        } else {
            return "You lose! Rock beats scissors";
        }
    } else if (computerSelection === "paper") {
        if (playerSelection == "rock") {
            return "You lose! Paper beats rock";
        } else {
            return "You win! Scissors beat paper";
        }
    } else if (computerSelection === "scissors") {
        if (playerSelection === "rock") {
            return "You win! Rock beats scissors";
        } else {
            return "You lose! Scissors beat paper";
        }
    } else {
        return "Something's not right.."
    }
}

function game() {


    for (i = 0; i < 5; i++) {
        computerPlay();
        let result = playRound();
        console.log(result);
    }

}

game();



// if (playRound() == "It's a tie!") {
//     computerScore++;
//     playerScore++;
// } else if (playRound() == "You lose! Paper beats rock" || "You You lose! Rock beats scissors" || "You lose! Scissors beat paper") {
//     computerPlay++;
// } else {
//     playerScore++;
// }

// // winner function

// function winner() {
//     let winner = undefined;
//     if (computerScore > playerScore) {
//         winner = "Computer wins!";
//     } else if (computerScore < playerScore) {
//         winner = "Player wins!";
//     } else {
//         winner = "It's a tie";
//     }
//     return winner;
// }
// return "The score is: Computer " + computerScore + ", Player " + playerScore + winner();
// }