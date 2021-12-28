const getUserChoice = userInput => {
    userInput = userInput.toLowerCase();
    
    if(userInput === 'rock' || userInput === 'paper' || userInput === 'scissor'){
      return userInput;
    }
    else{
      console.log('Error Message');
    }
    }
    function getComputerChoice(){
     const randomNumber = Math.floor(Math.random() * 3)
    switch (randomNumber) {
      case 0:
        return 'rock';
      case 1:
        return 'paper';
      case 2:
        return 'scissors';
    }
    } 
    function determineWinner(userChoice, computerChoice){
      if(userChoice === computerChoice){
    return 'Tie Game'
      }
    if (userChoice === 'rock') {
      if (computerChoice === 'paper') {
        return 'The computer won!';
      } else {
        return 'You won!';
      }
    }
     if (userChoice === 'paper') {
      if (computerChoice === 'scissors') {
        return 'The computer won!';
      } else {
        return 'You won!';
      }
    }
      if (userChoice === 'scissors') {
      if (computerChoice === 'rock') {
        return 'The computer won!';
      } else {
        return 'You won!';
      }
    }
    }
    const playGame = () => {
    const userChoice = getUserChoice('rock')
    const computerChoice = getComputerChoice()
    console.log('You threw: ' + userChoice);
    console.log('The computer threw:' + computerChoice);
       console.log(determineWinner(userChoice, computerChoice));
    };
    playGame();