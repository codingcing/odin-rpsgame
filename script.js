let userChoice, computerChoice, userScore, computerScore;

document.getElementById("rock").addEventListener("click", () => {
    userChoice = "Rock";
    getUserChoice();
});
document.getElementById("paper").addEventListener("click", () => {
    userChoice = "Paper";
    getUserChoice();
});
document.getElementById("scissors").addEventListener("click", () => {
    userChoice = "Scissors";
    getUserChoice();
});
// In future, we don't want this to be a function. The game should automatically begin when a user presses a button, and only reset
// in case the score reaches 5

function getComputerChoice(){
    let nonce = Math.floor(Math.random()*3)+1;
    let computerChoice;
    switch (nonce){
        case 1:
            computerChoice = "Rock";
            break;
        case 2:
            computerChoice = "Paper"
            break;
        case 3:
            computerChoice = "Scissors";
            break;
        default:
    }
    return computerChoice;
}

function getUserChoice(){
    console.log(userChoice);
}

function getWinner(x,y){
    if (x === y && (x === "Rock" || x === "Paper" || x === "Scissors") && (y === "Rock" || y === "Paper" || y === "Scissors")) {
        return "It's a draw"
    } else if (x === "Rock" && y === "Scissors") {
        return `${x} wins`
    } else if (x === "Scissors" && y === "Paper") {
        return `${x} wins`
    } else if (x === "Paper" && y === "Rock") {
        return `${x} wins`
    } else if (y === "Rock" && x === "Scissors") {
        return `${y} wins`
    } else if (y === "Scissors" && x === "Paper") {
        return `${y} wins`
    } else if (y === "Paper" && x === "Rock") {
        return `${y} wins`
    } else {
        return "One or both inputs are invalid..."
    }
    // we want this function to also reset both of the values for x and y, and build into the game 
    // the idea that both x and y must be defined for getWinner to run
}

