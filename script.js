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

    // Method that allows an animation to be repeated. Animation for players buttons
    e.target.classList.remove('onclick'); 
    void e.target.offsetHeight;
    e.target.classList.add('onclick');

    // Animations for the opponents buttons
    let compPlay = document.getElementById(`${play}` + '2')
    compPlay.classList.remove('onclick2')
    void compPlay.offsetHeight;
    compPlay.classList.add('onclick2');

    // Displaying scores
    document.getElementById("score2").textContent = results[0];
    document.getElementById("score").textContent = results[1];
    
    // Function to reset points if 'RESET' button is clicked
    const reset = document.querySelector('#reset');
    reset.addEventListener('click', function (e){ 
        e.target.classList.remove('onclick');
        void e.target.offsetHeight;
        e.target.classList.add('onclick');
        let end = playRound(0, 0, true);
        document.getElementById("score").textContent = end[1]
        document.getElementById("score2").textContent = end[0]
    })

    // Determine who is the winner after 5 rounds then reset points to zero
    if (results[1] === 5) {
        document.getElementById("score2").textContent = "LOSE"
        document.getElementById("score").textContent = "WIN"
        end = playRound(0, 0, true);
    }
    else if (results[0] === 5) {
        document.getElementById("score2").textContent = "WIN"
        document.getElementById("score").textContent = "LOSE"
        end = playRound(0, 0, true);
    }

})

function playRound(computerSelection, playerSelection, end){
    // If input is true the points will be reset
    let result = null;
    if (end === true) {
        cPoints = 0;
        pPoints = 0;
        return [cPoints, pPoints];
    }

    // Converting to upper case to avoid having to check multiple possible inputs styles
    computerSelection = computerSelection.toUpperCase(); 
    playerSelection = playerSelection.toUpperCase();

    // Determine result of one round
    if (computerSelection === playerSelection){
        result = "TIE";
    }
    else if (computerSelection === "ROCK" && playerSelection === "SCISSORS"){
        cPoints++;
    }
    else if (computerSelection === "SCISSORS" && playerSelection === "PAPER"){
        cPoints++;
    }
    else if (computerSelection === "PAPER" && playerSelection === "ROCK"){
        cPoints++
    }
    else if (computerSelection === "PAPER" && playerSelection === "SCISSORS"){
        pPoints++;
    }
    else if (computerSelection === "SCISSORS" && playerSelection === "ROCK"){
        pPoints++;
    }
    else if (computerSelection === "ROCK" && playerSelection === "PAPER"){
        pPoints++;
    }
    // Results are in array form as js does not allow multiple individual return values
    return [cPoints, pPoints]; // return winner for this round
}