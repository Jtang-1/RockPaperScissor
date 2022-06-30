function computerPlay(){
    let options = ["rock", "paper", "scissor"];
    return options[Math.floor(Math.random()*options.length)];
}

function playRound(playerSelection, computerSelection){
    playerSelection = playerSelection.toLowerCase();
    computerSelection = computerSelection.toLowerCase();
    return findResult(playerSelection, computerSelection);

}

function findResult(playerSelection, computerSelection){
    if (playerSelection === computerSelection){
        return "tie";
    } 
    if (playerSelection === "rock"){
        switch (computerSelection){
            case "paper":
                return "lose"
            case "scissor":
                return "win"
        }
    }
    if (playerSelection === "paper"){
        switch (computerSelection){
            case "scissor":
                return "lose"
            case "rock":
                return "win"
        }
    }
    if (playerSelection === "scissor"){
        switch (computerSelection){
            case "rock":
                return "lose"
            case "paper":
                return "win"
        }
    }
}

function loseMessage(playerSelection, computerSelection){
    return `You Lose! ${computerSelection} beats ${playerSelection}`;
}

function winMessage(playerSelection, computerSelection){
    return `You Win! ${playerSelection} beats ${computerSelection}`;
}

function playGame(){
    for (let i = 0; i<5; i++){
        valid = false;
        let playerSelection = prompt("Rock, Paper, or Scissor?");
        if (isValid(playerSelection)){
            valid = true;
        }
        while (!valid){
            playerSelection = prompt("Not a valid selection. Rock, Paper, or Scissor?");
            if (isValid(playerSelection)){
                valid = true;
            }

        }
        console.log(playRound(playerSelection, computerPlay()));
    }
}

function isValid(playerSelection){
    let options = ["rock", "paper", "scissor"];
    return options.includes(playerSelection.toLowerCase());
}

selections = document.querySelectorAll('.selection');
winnerDisplay = document.querySelector('#winner');
playerScoreDisplay = document.querySelector('#playerScore');
computerScoreDisplay = document.querySelector('#computerScore');

let playerScore = 0;
let  computerScore = 0;

selections.forEach(selection => selection.addEventListener('click', play));

function play(e){
    let playerSelection = this.id;
    let result = playRound(playerSelection, computerPlay());
    changeScore(result);
    updateScore(result);
    displayWinner();
    

}

function changeScore(result){
    if (result === "tie") return;
    (result === 'win') ? ++playerScore : ++ computerScore;
}

function updateScore(){
    playerScoreDisplay.textContent = `Player Score: ${playerScore}`;
    computerScoreDisplay.textContent =`Computer Score: ${computerScore}`;
}

function displayWinner(){
    if (playerScore >= 5){
        winnerDisplay.textContent = "YOU WIN!"
        resetGame();
    }else if(computerScore>=5){
        winnerDisplay.textContent = "You Lost :("
        resetGame();
    }else{
        winnerDisplay.textContent = "";
    }
}

function resetGame(){
    playerScore = 0;
    computerScore = 0;
    updateScore();
}