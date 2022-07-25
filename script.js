let userChoice, computerChoice, userScore = 0, computerScore = 0, currentScore = 0, explan1 = "", explan2 = "", roundOn = true, userWins = 0, computerWins = 0;

updateHTML();

document.getElementById("rock").addEventListener("click", () => {
    userChoice = "Rock";
    getComputerChoice();
    getBattWinner(userChoice,computerChoice);
    getRoundWinner();
    explan1 = "";
    explan2 = "";
});
document.getElementById("paper").addEventListener("click", () => {
    userChoice = "Paper";
    getComputerChoice();
    getBattWinner(userChoice,computerChoice);
    getRoundWinner();
    explan1 = "";
    explan2 = "";
});
document.getElementById("scissors").addEventListener("click", () => {
    userChoice = "Scissors";
    getComputerChoice();
    getBattWinner(userChoice,computerChoice);
    getRoundWinner();
    explan1 = "";
    explan2 = "";
});

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

function getBattWinner(x,y){
    if (x === y && (x === "Rock" || x === "Paper" || x === "Scissors") && (y === "Rock" || y === "Paper" || y === "Scissors")) {
        explan1 = "Draw!";
        explan2 = "Draw!";
        return;
    } else if (x === "Rock" && y === "Scissors") {
        userScore += 1;
        explan1 = "Rock BEATS Scissors!";
    } else if (x === "Scissors" && y === "Paper") {
        userScore += 1;
        explan1 = "Scissors BEATS Paper!";
    } else if (x === "Paper" && y === "Rock") {
        userScore += 1;
        explan1 = "Paper BEATS Rock!";
    } else if (y === "Rock" && x === "Scissors") {
        computerScore += 1;
        explan2 = "Rock BEATS Scissors!";
    } else if (y === "Scissors" && x === "Paper") {
        computerScore += 1;
        explan2 = "Scissors BEATS Paper!";
    } else if (y === "Paper" && x === "Rock") {
        computerScore += 1;
        explan2 = "Paper BEATS Rock!";
    } else {
        return;
    } return;
}

function updateHTML(){
    (userChoice)? document.getElementById("userChoice").innerHTML = userChoice : document.getElementById("userChoice").innerHTML = "";
    (computerChoice)? document.getElementById("computerChoice").innerHTML = computerChoice : document.getElementById("computerChoice").innerHTML = "";
    (userScore)? document.getElementById("userScore").innerHTML = userScore : document.getElementById("userScore").innerHTML = 0;
    (computerScore)? document.getElementById("computerScore").innerHTML = computerScore : document.getElementById("computerScore").innerHTML = 0;
    (userWins)? document.getElementById("userWins").innerHTML = userWins : document.getElementById("userWins").innerHTML = 0;
    (computerWins)? document.getElementById("computerWins").innerHTML = computerWins : document.getElementById("computerWins").innerHTML = 0;
    (explan1)? document.getElementById("explan1").innerHTML = explan1 : document.getElementById("explan1").innerHTML = "";
    (explan2)? document.getElementById("explan2").innerHTML = explan2 : document.getElementById("explan2").innerHTML = "";
}

function newRound(){
    userChoice = "";
    computerChoice = "";
    userScore = 0;
    computerScore = 0;
    roundOn = true;
    explan1 = "";
    explan2 = "";
    document.getElementById("rock").removeAttribute("disabled");
    document.getElementById("paper").removeAttribute("disabled");
    document.getElementById("scissors").removeAttribute("disabled");
}

function getRoundWinner(){
    if (userScore === 5){
        userWins += 1;
        document.getElementById("rock").setAttribute("disabled", true);
        document.getElementById("paper").setAttribute("disabled", true);
        document.getElementById("scissors").setAttribute("disabled", true);
        updateHTML();
        setTimeout(newRound,2000);
        setTimeout(updateHTML,2001);
    } else if (computerScore === 5){
        computerWins += 1;
        document.getElementById("rock").setAttribute("disabled", true);
        document.getElementById("paper").setAttribute("disabled", true);
        document.getElementById("scissors").setAttribute("disabled", true);
        updateHTML();
        setTimeout(newRound,2000);
        setTimeout(updateHTML,2001);
    } else{
        updateHTML();
    };
}