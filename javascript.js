function computerPlay(){
    let options = ["rock", "paper", "scissor"];
    return options[Math.floor(Math.random()*options.length)];
}

function playRound(playerSelection, computerSelection){
    playerSelection = playerSelection.toLowerCase();
    computerSelection = computerSelection.toLowerCase();
    return result(playerSelection, computerSelection);

}

function result(playerSelection, computerSelection){
    if (playerSelection === computerSelection){
        return "Tie!";
    } 
    if (playerSelection === "rock"){
        switch (computerSelection){
            case "paper":
                return loseMessage(playerSelection, computerSelection);
            case "scissor":
                return winMessage(playerSelection, computerSelection);
        }
    }
    if (playerSelection === "paper"){
        switch (computerSelection){
            case "scissor":
                return loseMessage(playerSelection, computerSelection);
            case "rock":
                return winMessage(playerSelection, computerSelection);
        }
    }
    if (playerSelection === "scissor"){
        switch (computerSelection){
            case "rock":
                return loseMessage(playerSelection, computerSelection);
            case "paper":
                return winMessage(playerSelection, computerSelection);
        }
    }
}

function loseMessage(playerSelection, computerSelection){
    return `You Lose! ${computerSelection} beats ${playerSelection}`;
}

function winMessage(playerSelection, computerSelection){
    return `You Win! ${playerSelection} beats ${computerSelection}`;
}

function game(){
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
// console.log(playRound("rock","rock")); //tie
// console.log(playRound("rock","paper")); //lose
// console.log(playRound("rock","scissor")); //win

// console.log(playRound("scissor","rock")); //lose
// console.log(playRound("scissor","paper")); //win
// console.log(playRound("scissor","scissor")); //tie


// console.log(playRound("paPEr","rock")); //win
// console.log(playRound("paper","PapEr")); //tie
// console.log(playRound("paper","scissor")); //lose

game();