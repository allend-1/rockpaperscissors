// Initiate the amount of lives and score each player has at beginning//
let playerLives = 5;
let computerLives = 5;

let playerScore = 0;
let computerScore = 0;





//get computer choice function//
function getComputerChoice() {
    let choices = ['rock', 'paper', 'scissors']
    return choices[Math.floor(Math.random() * choices.length)]; //getting a random float 0-3 then flooring to whole number, selecting random indice in string vector 
}


//get user selection//
function getUserSelection() {
    prompt("Which would you choose: 'Rock, Paper, or Scissors'?").toLowerCase()
    
}



//check who won 
function whoWins(playerSelection, computerSelection){
    if(playerSelection==computerSelection){
        return 'Tie';}

    else if((playerSelection == 'rock' && computerSelection == 'scissors')  || 
            (playerSelection == 'scissors' && computerSelection == 'paper') ||
            (playerSelection == 'paper' && computerSelection == 'rock')){
            return 'Player';}
    else {
        return 'Computer'}
}

function oneRound(playerSelection, computerSelection){
    const result = whoWins(playerSelection, computerSelection);
    if (result == 'Tie'){
        return 'Tie Game'
    }
    else if(result=='Player'){
        return `You Won! ${playerSelection} beats ${computerSelection}`}

    else if(result == 'Computer'){
         return `You lost ${computerSelection} beats ${playerSelection}`}

}

//create a for loop for 5 games 
function game(){
    for (let i = 0; i<5, i++){
        
    }
}
