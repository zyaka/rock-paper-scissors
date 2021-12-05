const playObjects = ["rock", "paper", "scissors"];
const random = Math.floor(Math.random() * playObjects.length);

function computerPlay() {
    return playObjects[random];
}

console.log(computerPlay());
const playerSelection = prompt("enter an object:", "");
console.log(playerSelection);
const computerSelection = computerPlay();


function playRound(computerSelection, playerSelection) {
    if (playerSelection != "rock" && "paper" && "scissors") {
        alert("Sorry, please enter rock, paper, or scissors");
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

console.log(playRound(computerSelection, playerSelection));