// Initiate the amount of lives and score each player has at beginning//
let playerLives = 5;
let computerLives = 5;

let playerScore = 0;
let computerScore = 0;


let choices = ['rock', 'paper', 'scissors'];


//get computer choice function//
function getComputerChoice() {
    return choices[Math.floor(Math.random() * choices.length)]; //getting a random float 0-3 then flooring to whole number, selecting random indice in string vector 
}


//get user selection//
function getPlayerChoice() {
    let flag = true;
    while (flag == true){
        const playerChoice = prompt("Which would you choose: 'Rock, Paper, or Scissors'?").toLowerCase();
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
    let playerScore = 0;
    let compScore =0;

    console.log('First to 5 wins')
    for (let i = 0; i<5; i++) {
        const computerSelection = getComputerChoice();
        const playerSelection = getPlayerChoice();
        console.log(oneRound(playerSelection, computerSelection));
        console.log('----------------')

        if(whoWins(playerSelection, computerSelection) == 'Computer'){
            compScore++}

        else if(whoWins(playerSelection, computerSelection) == 'Player'){
        playerScore++}

        console.log(`Player Score is ${playerScore}`)
        console.log(`Computer Score is ${compScore}`)

    }
    console.log("Game Over!")
    if(playerScore>compScore){
        console.log('You WON the battle!')
    }
    else if(playerScore<compScore){
        console.log('You have LOST the battle!')
    }
    else if(playerScore == compScore){
        console.log('TIE BATTLE')
    }
}

game()