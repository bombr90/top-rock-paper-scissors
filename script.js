/*Script.js*/

//------------------------
//Game Helper Functions
//------------------------
//Function 'computerPlay' - to randomly 'Rock', 'Paper' Scissors'
function computerPlay() {   
    let tmp = Math.floor(Math.random()*3);    //Randomly generate number between 0 and 2
    switch(tmp) {   //Map Rock = 0, Paper = 1, Scissors = 2 and return value
        case 0:
            return 'rock';
            break;
        case 1:
            return 'paper';
            break;
        case 2:
            return 'scissors';
    }
}

//------------------------
//Game Functions
//------------------------
//Function 'playRound(playerSelection, computerSelection)' - to play round of RPS
function playRound(playerSelection, computerSelection) {    
    const sel = [], arr = [];
    computerSelection = computerPlay();
    if(playerSelection === computerSelection)   {
        arr[1] = 'tie';
        sel[0] = sel[1] = playerSelection;
    }   else if(    
    (playerSelection === 'rock' && computerSelection === 'paper') ||
    (playerSelection === 'paper' && computerSelection === 'scissors') ||
    (playerSelection === 'scissors' && computerSelection === 'rock'))  {
        arr[1] = 'lose';
        sel[0] = computerSelection;
        sel[1] = playerSelection;
    }   else    {
        arr[1] = 'win';
        sel[0] = playerSelection;
        sel[1] = computerSelection;
    }
    (arr[1] === 'tie') ?   //Return populated array (string and result)
        arr[0]=`You select ${playerSelection}! ${sel[0]} ties ${sel[1]}` :
        arr[0]=`You select ${playerSelection}! ${sel[0]} beats ${sel[1]}`;
    return arr;
    }

//------------------------
//User interface globals and events
//------------------------
let playerScore = 0, computerScore = 0;
const container = document.querySelector('#results');

const btns = document.querySelectorAll('.btns');
btns.forEach(button => button.addEventListener('click',clickChoice));

function clickChoice(e)    {
    let playerSelect, computerSelect, arr = [];   
    switch(e.target.id) {
        case 'btnRock':
            playerSelect = 'rock';
            break;
        case 'btnPaper':
            playerSelect = 'paper';
            break;
        case 'btnScissors':
            playerSelect = 'scissors';
            break;
        case 'btnReset':
            resetGame();
            return
            break;    
    }
    if(playerScore<5 && computerScore<5)    {
        arr = playRound(playerSelect, computerSelect);
        writeResult(arr, true);
        writeResult(updateScore(arr));
    } else {
        writeResult('Press "Reset" to play again', true);
    }
}

//------------------------
//UI Helper Functions
//------------------------(
function writeResult(string, clear = false)  {
    const result = document.createElement('div')
    result.textContent = string;
    if(clear)   {
        container.innerHTML='';
    }
    container.append(result);    
}

function updateScore(arr) {  
    let maxWins = 5;  
    if(arr[1]==='win')    {
        playerScore++;
    }   else if(arr[1]==='lose') {
        computerScore++;    
    }
    if(playerScore === maxWins || computerScore === maxWins)    {
        container.classList.add('bold');
    }
    return  (playerScore === maxWins) ? `Player wins ${maxWins} rounds, congrats!` :
            (computerScore === maxWins) ? `Computer wins ${maxWins} rounds, nice try` :
            `Player Wins: ${playerScore} \nComputer Wins: ${computerScore}`;
}

function resetGame()    {
    writeResult('Game Reset', true);
    playerScore = 0;
    computerScore = 0; 
    container.classList.remove('bold');
}