const choices = ['Rock', 'Paper', 'Scissors'];
let pPoints = 0;
let cPoints = 0;

function computerPlay() {
    let num = Math.floor(Math.random() * 3);
    let play = choices[num];
    return play;
}

function playRound(computerSelection, playerSelection){
    computerSelection = computerSelection.toUpperCase();
    playerSelection = playerSelection.toUpperCase();
    let result = null;
    
    if (computerSelection === playerSelection){
        result = "TIE";
    }
    else if (computerSelection === "ROCK" && playerSelection === "SCISSORS"){
        result = "You lose, Rock beats Scissors";
        cPoints++;
    }
    else if (computerSelection === "PAPER" && playerSelection === "SCISSORS"){
        result = "You win, Scissors beats Paper";
        pPoints++;
    }
    else if (computerSelection === "SCISSORS" && playerSelection === "ROCK"){
        result = "You win, Rock beats Scissors";
        pPoints++;
    }
    else if (computerSelection === "SCISSORS" && playerSelection === "PAPER"){
        result = "You lose, Scissors beats Paper";
        cPoints++;
    }
    else if (computerSelection === "PAPER" && playerSelection === "ROCK"){
        result = "You lose, Paper beats Rock";
        cPoints++
    }
    else if (computerSelection === "ROCK" && playerSelection === "PAPER"){
        result = "You win, Paper beats Rock";
        pPoints++;
    }
    return [result, cPoints, pPoints];
}

function game(){
    playerSelection = prompt("choice: ");
    let computerSelection = computerPlay();
    let array = playRound(computerSelection, playerSelection);
    console.log(array[0]);
    playerSelection = prompt("choice: ");
    computerSelection = computerPlay();
    array = playRound(computerSelection, playerSelection);
    console.log(array[0]);
    playerSelection = prompt("choice: ");
    computerSelection = computerPlay();
    array = playRound(computerSelection, playerSelection);
    console.log(array[0]);
    playerSelection = prompt("choice: ");
    computerSelection = computerPlay();
    array = playRound(computerSelection, playerSelection);
    console.log(array[0]);
    playerSelection = prompt("choice: ");
    computerSelection = computerPlay();
    array = playRound(computerSelection, playerSelection);
    console.log(array[0]);
    if (array[1] > array[2]){
        result = "You lose";
        return result
    }
    else if (array[2] > array[1]){
        result = "You win";
        return result
    }

}
result = game();
console.log(result);