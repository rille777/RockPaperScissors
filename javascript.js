let playerScore = 0;
let computerScore = 0;

//To update text content with the selections of player and computer in the boxes.
const playaSign = document.getElementById('playaSign');
const compSign = document.getElementById('computerSign');

//Update the h1 and h2 text with the result the round
const won = document.getElementById('winner');
const result = document.getElementById('roundResult');

//Update the span with the player and computer score
const pScore = document.getElementById('playaScore');
const compScore = document.getElementById('compScore');

//Reset the h1 and h2 texts after a winner have been decided
const origHead1 = document.getElementById('winner');
const origHead2 = document.getElementById('roundResult');

//Restart button to Play again
const endGame = document.getElementById('end')
const restartButton = document.getElementById('restart');
restartButton.addEventListener('click', playAgain);


function getComputerChoice() {
    const computerChoice = ["rock", "paper", "scissors"];

    //Math.random will return a value between 0-1.
    //Math.floor returns the highest value from math.random, 1.7 --> 1
    const random = Math.floor(Math.random() * computerChoice.length); 
    console.log(computerChoice[random]);  
    return computerChoice[random];
  }

  
  function playRound(playerSelection) {
    
    computerSelection = getComputerChoice();
    
    const Rock = "rock";
    const Scissors = "scissors";
    const Paper = "paper";

    //Add the player's selection on the player's box
    if (playerSelection === Rock) {
      playaSign.textContent = '✊';
    } else if (playerSelection === Paper) {
      playaSign.textContent = '✋';    
    } else {
      playaSign.textContent = '✌';     
    }

    //Add the computer's selection on the computer's box
    if (computerSelection === Rock) {
      compSign.textContent = '✊';
    } else if (computerSelection === Paper) {
      compSign.textContent = '✋';
    } else {
      compSign.textContent = '✌';
    }


    if (playerSelection === computerSelection) {
        result.textContent = "It's a draw";
        won.textContent = "";
        
    } else {
        switch (playerSelection) {
            case Rock: 
                if (computerSelection === Scissors) {
                    result.textContent = "Rock beats Scissors";
                    won.textContent = "You Win!";
                    playerScore++;       
                    pScore.textContent = playerScore;                        
                } else { 
                    result.textContent = computerSelection + " beats Rock";
                    won.textContent = "You Lose!";
                    computerScore++;   
                    compScore.textContent = computerScore;       
                }
                break;
            case Scissors:     
                if (computerSelection === Paper) {
                    result.textContent = "Scissors beats Paper";
                    won.textContent = "You Win!";
                    playerScore++;      
                    pScore.textContent = playerScore;        
                } else {
                    result.textContent = computerSelection + " beats Scissors";
                    won.textContent = "You Lose!";
                    computerScore++;
                    compScore.textContent = computerScore; 
                }
                break;
            case Paper: 
                if  (computerSelection === Rock) {
                    result.textContent = "Paper beats Rock";
                    won.textContent = "You Win!";
                    playerScore++;     
                    pScore.textContent = playerScore;               
                } else {
                  result.textContent = computerSelection + " beats Paper";
                  won.textContent = "You Lose!";
                  computerScore++;
                  compScore.textContent = computerScore; 
                }
                break;
        }        
      }
      updateResult(playerScore, computerScore);
      
    }

    function updateResult(player, computer) {
      if (player === 5) {
        won.textContent = "You Won!";
        result.textContent = "";
        won.style.color = 'green'; //This set the text to green "You Won!"

        //Disable the rock, paper and scissors buttons
        document.getElementById('rock').disabled=true;
        document.getElementById('paper').disabled=true;
        document.getElementById('scissors').disabled=true;
        restartGame();
        
       
      } else if (computer === 5) {
        won.textContent = "You lost!";
        result.textContent = "";
        won.style.color = 'red';
        document.getElementById('rock').disabled=true;
        document.getElementById('paper').disabled=true;
        document.getElementById('scissors').disabled=true;
        restartGame();
      }
    }

    

    function restartGame() {
      
      document.getElementById('restart').hidden=false;

    }
      
    function playAgain() {
      
      document.getElementById('rock').disabled=false;
      document.getElementById('paper').disabled=false;
      document.getElementById('scissors').disabled=false;
      won.style.color = 'white';
      origHead1.textContent = "Please make your selection!";
      origHead2.textContent = "First to 5, wins the game";
      playaSign.textContent = '?';
      compSign.textContent = '?';
      playerScore = 0;
      computerScore = 0;
      pScore.textContent = 0;
      compScore.textContent = 0;
      document.getElementById('restart').hidden=true;
     
    }
    
      function startGame() {  
        
        document.getElementById('restart').hidden=true;
       
        const rockBtn = document.querySelector('#rock');
        const paperBtn = document.querySelector('#paper');
        const scissorsBtn = document.querySelector('#scissors');

        const buttons = document.querySelectorAll('button');

        buttons.forEach((button) => {

          // and for each one we add a 'click' listener
          button.addEventListener('click', () => {
            playRound(button.id);
          });
        });
       
      }
       
        
     


     
   
  
 


