const choices = ['rock', 'paper', 'scissors'];
let pPoints = 0;
let cPoints = 0;

function computerPlay() {
    let num = Math.floor(Math.random() * 3);
    let play = choices[num];
    return play;
}

const buttons = document.querySelector('#buttons');
buttons.addEventListener("click", function (e){
    let play = computerPlay();
    let results = playRound(play, e.target.id, false);
    e.target.classList.remove('onclick');
    void e.target.offsetHeight;
    e.target.classList.add('onclick');
    let compPlay = document.getElementById(`${play}` + '2')
    compPlay.classList.remove('onclick2')
    void compPlay.offsetHeight;
    compPlay.classList.add('onclick2');
    document.getElementById("score2").textContent = results[1]
    document.getElementById("score").textContent = results[2]
    const reset = document.querySelector('#reset');
    reset.addEventListener('click', function (e){
        e.target.classList.remove('onclick');
        void e.target.offsetHeight;
        e.target.classList.add('onclick');
        let tmp = playRound(0, 0, true);
        document.getElementById("score").textContent = tmp[1]
        document.getElementById("score2").textContent = tmp[0]
    })
    if (results[2] === 5) {
        document.getElementById("score2").textContent = "LOSE"
        document.getElementById("score").textContent = "WIN"
        tmp = playRound(0, 0, true);
    }
    else if (results[1] === 5) {
        document.getElementById("score2").textContent = "WIN"
        document.getElementById("score").textContent = "LOSE"
        tmp = playRound(0, 0, true);
    }

})

function playRound(computerSelection, playerSelection, tmp){
    let result = null;
    if (tmp === true) {
        cPoints = 0;
        pPoints = 0;
        return [cPoints, pPoints];
    }
    computerSelection = computerSelection.toUpperCase();
    playerSelection = playerSelection.toUpperCase();
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