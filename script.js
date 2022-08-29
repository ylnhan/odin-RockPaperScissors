function playRound(playerSelection, computerSelection) {
    // your code here!
    const playerInput = playerSelection[0].toUpperCase() + playerSelection.slice(1).toLowerCase();
    let result;
    const isWin = playerInput === 'Rock' && computerSelection === 'Scissors' 
                  || playerInput === 'Paper' && computerSelection === 'Rock'
                  || playerInput === 'Scissors' && computerSelection === 'Paper';
    
    playerInput === computerSelection
      ? result = 'Tie!'
      : isWin 
        ? result = `You Win! ${playerInput} beats ${computerSelection}`
        : result = `You Lose! ${computerSelection} beats ${playerInput}`
    ;
    return result;

}   
      
function getComputerChoice() {
    return choiceArray[Math.floor(Math.random() * 3)];
}

function game() {

  let score = 0;
  let playerSelection = '';

  for (let i = 0; i < 5; i++) {
    let isValid = false;
    while (!isValid) {
      playerSelection = prompt('Your Selection: Rock or Paper or Scissors?');
      if (playerSelection === '') continue;  
      choiceArray.includes(playerSelection[0].toUpperCase() + playerSelection.slice(1).toLowerCase())
        ? isValid = true 
        : isValid = false
      ;
    };

    let computerSelection = getComputerChoice();
    let result = playRound(playerSelection, computerSelection);
    if (result.includes('Win')) score += 1;
    console.log(`${result}, scores: ${score}`);
    
  };
  
  score >= 3 
    ? console.log(`Your scores: ${score}. You Win!`)
    : console.log(`Your scores: ${score}. You Lose!`)
  ;
}


const choiceArray = ['Rock', 'Paper', 'Scissors'];
game();

