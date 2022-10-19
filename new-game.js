
const buttons = document.querySelectorAll('.btn');

// Initiate the amount of lives and score each player has at beginning//
let playerScore = 0;
let compScore = 0;
let choices = ['rock', 'paper', 'scissors'];

const player = document.querySelector("#player-score");
player.textContent = `Player Score: ${playerScore}`;

const computer = document.querySelector("#comp-score");
computer.textContent = `Computer Score: ${compScore}`;

const output = document.querySelector("#output");
output.textContent = "May the Best Person Win!"

//get computer choice function//
function getComputerChoice() {
    return choices[Math.floor(Math.random() * choices.length)]; //getting a random float 0-3 then flooring to whole number, selecting random indice in string vector 
}


//get user selection//
function getPlayerChoice() {
    let flag = true;
    while (flag == true){
        const playerChoice = "Rock".toLowerCase(); //TEST
        //const playerChoice = prompt("Which would you choose: 'Rock, Paper, or Scissors'?").toLowerCase();
        if (playerChoice == null){
            continue;
        }
        if (choices.includes(playerChoice)){
        flag = false;
        return playerChoice;}
    }
    
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

//create a for loop for 5 games (GAME FUNCTION)
function game(){
    //console.log('First to 5 wins') //This is a best of five not first to 5 
    while (compScore<2 && playerScore<2){
                //Play game rounds now 
                console.log(`Player score: ${playerScore}`);
                console.log(`Computer score: ${compScore}`);
                    const computerSelection = getComputerChoice();
                    const playerSelection = getPlayerChoice();
                    console.log(oneRound(playerSelection, computerSelection));
                    console.log('----------------')
        
                    if(whoWins(playerSelection, computerSelection) == 'Computer'){
                        compScore++}
        
                    else if(whoWins(playerSelection, computerSelection) == 'Player'){
                    playerScore++}
    }

if(playerScore == 2 ){
    console.log(`Game over, YOU WON by a score of ${playerScore} to ${compScore}`)
    }
else if(compScore == 2) { 
         console.log(`Game over, YOU LOST by a score of ${playerScore} to ${compScore}`)
    }
        
}
game()