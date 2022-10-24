
//DOM
const playerScoreDigit = document.querySelector("#playerScore");
const compScoreDigit = document.querySelector("#compScore");
const roundResult = document.querySelector("#roundResult");
const buttons = document.querySelectorAll(".buttons button");  // See what will happen if you remove the button part (end) 

//Game Logic 
let playerScore = 0;
let compScore = 0; 

//Function that gets the computer selection 
const getComputerChoice = () => {
    let computerChoice;
    let randomNumber = Math.floor(Math.random() * (3) + 1);

    if(randomNumber === 1){
        computerChoice = "Rock";
    }
    else if(randomNumber === 2){
        computerChoice = "Paper";
    }
    else if(randomNumber === 3){
        computerChoice = "Scissors";
    }
    return computerChoice;
};

const playRound = (player, comp) => {
    let finalResult = player + comp;

    if(player === comp) roundResult.textContent = "TIE";
    else if(
        finalResult === "RockScissors" ||
        finalResult === "ScissorsPaper" ||
        finalResult === "PaperRock"
    ){
        roundResult.textContent = `You WIN! ${player} beats ${comp}`;
        playerScore++;
        playerScoreDigit.textContent = playerScore;
    }
    else{
        roundResult.textContent = `You LOST! ${comp} beats ${player}`;
        compScore++;
        compScoreDigit.textContent = compScore;
    }
};

//Create a function that actually plays a game (first to 5)
const game = (player,comp) => {
    if(playerScore < 5 && compScore < 5) playRound(player,comp)

    if(playerScore === 5){
        roundResult.textContent = "Congrats! YOU WON THE GAME!!"
        return;
    }
    else if(compScore === 5){
        roundResult.textContent = "Better luck next time, YOU LOST THE GAME!"
        return;
    }
};

//Initialize the game 
for (const button of buttons) {
    button.addEventListener("click",function () {
        game(button.value,getComputerChoice());
    });
};