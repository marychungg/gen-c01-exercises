const getUserChoice = userInput => {
    userInput = userInput.toLowerCase();
    if (userInput === 'rock' || userInput === 'paper' || userInput === 'scissors') {
      return userInput
    } else {
      console.log('error error')
    }
  }
  
  const getComputerChoice = () => {
    randomNumber = Math.floor(Math.random() * 3);
    switch (randomNumber) {
      case 0:
      return 'rock';
      break;
      case 1:
      return 'paper';
      break;
      case 2:
      return 'scissors';
      break;
    }
  }
  
  const determineWinner = (userChoice, computerChoice) => {
    if (userChoice === computerChoice){
      return 'Tie, again!';
    }
  
    if (userChoice === 'rock') {
      if (computerChoice === 'paper') {
      return 'Computer won!'}
      } else {
        return 'You won!'
      }
  
    if (userChoice === 'scissors') {
      if (computerChoice === 'rock') {
      return 'Computer won!'}
      } else {
        return 'You won!'
      }
  
    if (userChoice === 'bomb') {
      return 'Wonnnnnnn!'
    }
    }
  
  const playGame = () => {
    const userChoice = getUserChoice('rock');
    const computerChoice = getComputerChoice();
    console.log(userChoice);
    console.log(computerChoice);
    console.log(determineWinner(userChoice, computerChoice))
  }
  
  playGame()
  