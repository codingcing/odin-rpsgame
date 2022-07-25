let userChoice, computerChoice, userScore, computerScore, currentScore;

document.getElementById("rock").addEventListener("click", () => {
    userChoice = "Rock";
    getComputerChoice();
    updateHTML();
});
document.getElementById("paper").addEventListener("click", () => {
    userChoice = "Paper";
    getComputerChoice();
    updateHTML();
});
document.getElementById("scissors").addEventListener("click", () => {
    userChoice = "Scissors";
    getComputerChoice();
    updateHTML();
});
// In future, we don't want this to be a function. The game should automatically begin when a user presses a button, and only reset
// in case the score reaches 5

function getComputerChoice(){
    let nonce = Math.floor(Math.random()*3)+1;
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

function updateHTML(){
    document.getElementById("userChoice").innerHTML = userChoice;
    document.getElementById("computerChoice").innerHTML = computerChoice;
    document.getElementById("userScore").innerHTML = userScore;
    document.getElementById("computerScore").innerHTML = computerScore;
    document.getElementById("currentScore").innerHTML = currentScore;
}
