console.log("Welcome To RPS");

function getComputerChoice(){
    let randomNumber = Math.floor((Math.random()) * 3);
    if (randomNumber === 1){
        return "rock";
    }else if (randomNumber === 2){
        return "paper";
    }else{
        return "scissors";
    }
}

function getHumanChoice(){
    let humanValue = prompt("Rock, Paper or Scissors: ");
    humanValue = humanValue.toLowerCase();
    return humanValue;
}

var humanScore = 0;
var computerScore = 0;

function playRound(humanChoice, computerChoice){
    if (humanChoice === "rock" && computerChoice === "rock" ||
        humanChoice === "paper" && computerChoice === "paper" ||
        humanChoice === "scissors" && computerChoice === "scissors"
    ){
        console.log("Tie!");
    }else if (humanChoice === "rock" && computerChoice === "paper"){
        console.log("You Lose! Paper beats Rock");
    }else if (humanChoice === "rock" && computerChoice === "scissors"){
        console.log("You Win! Rock beats Scissors");
    }else if (humanChoice === "paper" && computerChoice === "rock"){
        console.log("You Win! Paper beats Rock");
    }else if (humanChoice === "paper" && computerChoice === "scissors"){
        console.log("You Lose! Scissors beats Paper");
    }else if (humanChoice === "scissors" && computerChoice === "rock"){
        console.log("You Lose! Rock beats Scissors");
    }else if (humanChoice === "scissors" && computerChoice === "paper"){
        console.log("You Win! Scissors beats Paper");
    }else{
        console.log("Wrond input entered, Use Rock, Papper or Scissors :)")
    }
}

playRound(getHumanChoice(), getComputerChoice());
