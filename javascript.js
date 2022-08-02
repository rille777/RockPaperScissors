let playerScore = 0;
let computerScore = 0;
let draw = 0;
let rounds = 0;

function getComputerChoice() {
    const computerChoice = ["Rock", "Paper", "Scissors"];

    //Math.random will return a value between 0-1.
    //Math.floor returns the highest value from math.random, 1.7 --> 1
    const random = Math.floor(Math.random() * computerChoice.length); 
    console.log(computerChoice[random]);  
    return computerChoice[random];
  }

  function getPlayerChoice () {
    return prompt("Please select between rock, paper and scissors");
  }
  
  

  function playRound(playerSelection, computerSelection) {
    
    const Rock = "rock";
    const Scissors = "scissors";
    const Paper = "paper";

    if (playerSelection.toLowerCase() === computerSelection.toLowerCase()) {
        console.log("It's a draw");
        draw++;
    } else {
        switch (playerSelection.toLowerCase()) {
            case Rock: 
                if (computerSelection.toLowerCase() === Scissors) {
                    console.log("You Win! Rock beats Scissors");
                    playerScore++;            
                } else {
                    console.log("You Lose! " + computerSelection + " beats Rock");  
                    computerScore++;                  
                }
                break;
            case Scissors:     
                if (computerSelection.toLowerCase() === Paper) {
                    console.log("You Win! Scissors beats Paper");
                    playerScore++;            
                } else {
                    console.log("You Lose! " + computerSelection + " beats Scissors");
                    computerScore++;
                }
                break;
            case Paper: 
                if  (computerSelection.toLowerCase() === Rock) {
                    console.log("You Win! Paper beats Rock");
                    playerScore++;                  
                } else {
                  console.log("You Lose! " + computerSelection + " beats Paper");
                  computerScore++;
                }
                break;
        }        
      }
    }
    
      function getGame() {       
        
        for (let i = 0; i < 5; i++) {
          let playerSelection = getPlayerChoice();
          playRound(playerSelection, getComputerChoice());
          rounds++;
        } 
        
        console.log(rounds);
        console.log(playerScore);
        console.log(computerScore);
        console.log(draw);
      }


     
   
  
 


