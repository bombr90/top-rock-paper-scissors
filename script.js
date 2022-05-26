/*Script.js*/

//------------------------
//Helper Functions
//------------------------
//Function 'computerPlay' - to randomly 'Rock', 'Paper' Scissors'
function computerPlay() {
//Randomly generate number 'tmp' between 0 and 2
    let tmp = Math.floor(Math.random()*3), tmp2;
//Map Rock = 0, Paper = 1, Scissors = 2 and set tmp2 and return
    switch(tmp) {
        case 0:
            tmp2='rock';
            break;
        case 1:
            tmp2='paper';
            break;
        case 2:
            tmp2='scissors';
    }
    return tmp2;
}

//Function 'getPlayerSelection' - Prompt player to type input RPS
function getPlayerSelection()   {
//Prompt user for selection (rock, paper, scissors)
    let tmp = prompt('Enter your selection (rock, paper or scissors)');
//Transform input to lower case
    let tmp2 = tmp.toLowerCase();
//Check that selection is valid rock||paper||scissors or return false (boolean)
//If valid input, return tmp2
    return (tmp2 === 'rock')||(tmp2 === 'paper')||(tmp2 === 'scissors') ? tmp2 : false; 
}

//------------------------
//Functions
//------------------------

//Function 'playRound(playerSelection, computerSelection)' - to play
//single round of RPS
function playRound(playerSelection, computerSelection) {
//Declare local variables
    let result, tmp1, tmp2;
    const arr = [];
//Set playerSelection and computerSelection using helper functions
//Loop until valid choice has been inputted
    do  {
        playerSelection = getPlayerSelection();
        if(!playerSelection)    {
            console.log('Invalid input. Please try again \n(type in "rock", "paper" or "scissors").');
        }
    }   while(!playerSelection);
    computerSelection = computerPlay();
//Compare playerSelection to computerSelection to determine 'result' (win, lose, tie)
//Set tmp1 and tmp2 variables to winning and losing selection respectively 
    if(
    (playerSelection === 'rock' && computerSelection === 'rock') ||
    (playerSelection === 'paper' && computerSelection === 'paper') ||
    (playerSelection === 'scissors' && computerSelection === 'scissors'))  {
        result = 'tie';
        tmp1 = tmp2 = playerSelection;
    }   else if(    
    (playerSelection === 'rock' && computerSelection === 'paper') ||
    (playerSelection === 'paper' && computerSelection === 'scissors') ||
    (playerSelection === 'scissors' && computerSelection === 'rock'))  {
        result = 'lose';
        tmp1 = computerSelection;
        tmp2 = playerSelection;
    }   else    {
    result = 'win';
    tmp1 = playerSelection;
    tmp2 = computerSelection;
    }
//Return populated array `You ${result}! ${tmp1} beats/ties ${tmp2}` and result
    (result === 'win' || result === 'lose') ?
        arr[0]=`You ${result}! ${tmp1} beats ${tmp2}` :
        arr[0]=`You ${result}! ${tmp1} ties ${tmp2}`;
    arr[1]=result;
    return arr;
    }

//Function 'game())' - to play multiple games of RPS and declare winner
function game() {
//Declare local variables
    let playerSelect,
        computerSelect,
        playerScore = 0, 
        computerScore = 0, 
        tmp, 
        arr = [];
//Play five rounds (playRound())
    for (let i = 0; i < 5; i++) {
        arr = playRound(playerSelect, computerSelect);
        console.log(arr[0]);
//Keep score 
        if(arr[1]==='win')    {
            playerScore++;
        }   else if(arr[1]==='lose') {
            computerScore++;
        }
    }
//Report Winner out of best out of five
    tmp = (playerScore > computerScore) ? 'Player wins best out of five!' :
        (playerScore < computerScore) ? 'Computer wins best out of five!' :
        'Player and Computer Tie!';
    console.log(`Player Wins: ${playerScore} \nComputer Wins: ${computerScore} \n${tmp}`);
}

//------------------------
//Main
//------------------------
game();
