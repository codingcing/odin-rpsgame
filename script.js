let userChoice, computerChoice, userScore = 0, computerScore = 0, currentScore = 0, explan1 = "", explan2 = "";
// currentScore will eventually tell us which of the computer and the user has won the most 'games' - each game is 5 rounds

updateHTML();

document.getElementById("rock").addEventListener("click", () => {
    userChoice = "Rock";
    getComputerChoice();
    getWinner(userChoice,computerChoice);
    updateHTML();
});
document.getElementById("paper").addEventListener("click", () => {
    userChoice = "Paper";
    getComputerChoice();
    getWinner(userChoice,computerChoice);
    updateHTML();
});
document.getElementById("scissors").addEventListener("click", () => {
    userChoice = "Scissors";
    getComputerChoice();
    getWinner(userChoice,computerChoice);
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
        explan1 = "";
        explan2 = "";
        return;
    } else if (x === "Rock" && y === "Scissors") {
        // return `${x} wins`;
        userScore += 1;
        explan1 = "Rock BEATS Scissors!";
    } else if (x === "Scissors" && y === "Paper") {
        // return `${x} wins`;
        userScore += 1;
        explan1 = "Scissors BEATS Paper!";
    } else if (x === "Paper" && y === "Rock") {
        // return `${x} wins`;
        userScore += 1;
        explan1 = "Paper BEATS Rock!";
    } else if (y === "Rock" && x === "Scissors") {
        // return `${y} wins`;
        computerScore += 1;
        explan2 = "Rock BEATS Scissors!";
    } else if (y === "Scissors" && x === "Paper") {
        // return `${y} wins`;
        computerScore += 1;
        explan2 = "Scissors BEATS Paper!";
    } else if (y === "Paper" && x === "Rock") {
        // return `${y} wins`;
        computerScore += 1;
        explan2 = "Paper BEATS Rock!";
    } else {
        // return "One or both inputs are invalid..."
    } 
    // we want this function to also reset both of the values for x and y, and build into the game 
    // the idea that both x and y must be defined for getWinner to run
}

function updateHTML(){
    (userChoice)? document.getElementById("userChoice").innerHTML = userChoice : document.getElementById("userChoice").innerHTML = "";
    (computerChoice)? document.getElementById("computerChoice").innerHTML = computerChoice : document.getElementById("computerChoice").innerHTML = "";
    (userScore)? document.getElementById("userScore").innerHTML = userScore : document.getElementById("userScore").innerHTML = 0;
    (computerScore)? document.getElementById("computerScore").innerHTML = computerScore : document.getElementById("computerScore").innerHTML = 0;
    (currentScore)? document.getElementById("currentScore").innerHTML = currentScore : document.getElementById("currentScore").innerHTML = 0;
    (explan1)? document.getElementById("explan1").innerHTML = explan1 : document.getElementById("explan1").innerHTML = "";
    (explan2)? document.getElementById("explan2").innerHTML = explan2 : document.getElementById("explan2").innerHTML = "";
}
