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
//Function 'getPlayerSelection' - Prompt player to type input RPS
function getPlayerSelection()   {   
    let input = prompt('Enter your selection (rock, paper or scissors)'); //Prompt user for selection
    let tmp = input.toLowerCase();   //Transform input to lower case
    return (tmp === 'rock')||(tmp === 'paper')||(tmp === 'scissors') ? tmp : false; //return valid input
}   

//------------------------
//Game Functions
//------------------------
//Function 'playRound(playerSelection, computerSelection)' - to play round of RPS
function playRound(playerSelection, computerSelection) {    
    const sel = [], arr = [];
    do  {   //Set selections using helper functions. Loop until receive valid input from prompt
        playerSelection = getPlayerSelection();
        if(!playerSelection)    {
            console.log('Invalid input. Please try again \n(type in "rock", "paper" or "scissors").');
        }
    }   while(!playerSelection);
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
//Function 'game())' - to play multiple games of RPS and declare winner
function game() {   
    let playerSelect, computerSelect, playerScore = 0, computerScore = 0, str, arr = [];
    for (let i = 0; i < 5; i++) {   //Play five rounds of (playRound())
        arr = playRound(playerSelect, computerSelect);
        console.log(arr[0]);
        if(arr[1]==='win')    { //Keep cumulative score 
            playerScore++;
        }   else if(arr[1]==='lose') {
            computerScore++;    
        }
    }
    str =   (playerScore > computerScore) ? 'Player wins best out of five!' : //Report Winner
            (playerScore < computerScore) ? 'Computer wins best out of five!' :
            'Player and Computer Tie!';
    console.log(`Player Wins: ${playerScore} \nComputer Wins: ${computerScore} \n${str}`);
}

//------------------------
//Main
//------------------------
game();
