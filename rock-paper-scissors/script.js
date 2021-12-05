const playObjects = ["Rock", "Paper", "Scissors"];
const random = Math.floor(Math.random() * playObjects.length);

function computerPlay() {
    return playObjects[random];
}

console.log(computerPlay());
let playerSelection;
let computerSelection;

function playRound(computerSelection, playerSelection) {

}