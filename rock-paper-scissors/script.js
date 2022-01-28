const playObjects = ["rock", "paper", "scissors", "rock"];

const container = document.getElementById('output');

const setOutput = (message) => {
    container.innerHTML = message + '<br />';
}

document.getElementById("rock").btnFunction;
document.getElementById("paper").btnFunction;
document.getElementById("scissors").btnFunction;

let btnFunction = addEventListener('click', (e) => {
    playRound(e.target.id);
});

function computerPlay() {
    let randomNumber = Math.floor(Math.random() * playObjects.length);
    return playObjects[randomNumber];
}
// let gameCounter = 1;
let computerScore = 0;
let playerScore = 0;

const setCpuScore = () => {
    document.getElementById("cpu-score").innerHTML = "Cpu: " + computerScore;
}
const setPlayerScore = () => {
    document.getElementById("player-score").innerHTML = "Player: " + playerScore;
}

setCpuScore();
setPlayerScore();


function playRound(object) {

    const computerSelection = computerPlay();
    // const playerSelection = prompt("enter an object:", "");
    const playerSelection = object;
    // setOutput("you clicked on " + playerSelection);

    let personPlay = playObjects.indexOf(playerSelection);
    let msg = "";
    if (playerSelection == computerSelection) {
        // computerScore++;
        // playerScore++;
        msg = "Tie!";
        setOutput("Tie!");
        // setCpuScore();
        // setPlayerScore();
        // console.log("game count is " + gameCounter);
        console.log("player is: " + playerScore + " cpu is: " + computerScore)



    } else {
        if (playObjects[personPlay + 1] == computerSelection) {
            computerScore++;
            msg = "Cpu wins!";
            setOutput("Cpu wins!");
            setCpuScore();
            // console.log("game count is " + gameCounter);
            console.log("player is: " + playerScore + " cpu is: " + computerScore)

        } else {
            playerScore++;
            msg = "Player wins";
            setOutput("Player wins!");
            setPlayerScore();
            // console.log("game count is " + gameCounter);
            console.log("player is: " + playerScore + " cpu is: " + computerScore)

        }
        if (playerScore == 5 || computerScore == 5) {
            setCpuScore();
            setPlayerScore()
            declareWinner();
            reset();
        }
    }
    setOutput("Cpu: " + computerSelection + ", Player: " + playerSelection + ", " + msg)
        // gameCounter++;
        // if (gameCounter == 6) {
        //     setCpuScore();
        //     setPlayerScore()
        //     declareWinner();
        //     reset();
        // }

}

function declareWinner() {
    let msg = "";
    if (playerScore > computerScore)
        alert("You won the game!")
    else if (playerScore < computerScore)
        alert("Computer won the game!")
    else
        alert("Tie")
    setOutput("The score is: Computer " + computerScore + ", Player " + playerScore + ", " + msg)
}

const reset = () => {
    playerScore = 0;
    computerScore = 0;
    gameCounter = 1;
    setPlayerScore();
    setCpuScore();
    setOutput("");
}