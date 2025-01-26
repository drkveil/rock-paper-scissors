console.log("Welcome To RPS");

function getComputerChoice(){
    let randomNumber = Math.floor((Math.random()) * 3);
    return randomNumber;
}

if (getComputerChoice() === 1){
    console.log("Rock");
}else if (getComputerChoice() === 2){
    console.log("Paper");
}else{
    console.log("Scissors");
}
