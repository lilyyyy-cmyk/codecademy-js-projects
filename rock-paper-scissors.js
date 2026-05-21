const getUserChoice = userInput => {
  userInput = userInput.toLowerCase();
  if (userInput === 'bomb') {
    return userInput;
  }
  if (userInput !== 'rock' && userInput !== 'paper' && userInput !== 'scissors') {
    return 'Choice invalid. Try again.';
  }
  return userInput;
};
const getComputerChoice = () => {
  let randomNum = Math.floor(Math.random() * 3);
  switch (randomNum) {
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
};
const determineWinner = (userChoice, computerChoice) => {
  if (userChoice === computerChoice) {
    return 'Tie!';
  }
  if (userChoice === 'rock') {
    if (computerChoice === 'paper') {
      return 'Computer wins!';
    }
    return 'User wins!';
  } 
  if (userChoice === 'paper') {
    if (computerChoice === 'scissors') {
      return 'Computer wins!';
    }
    return 'User wins!';
  }
  if (userChoice === 'scissors') {
    if (computerChoice === 'rock') {
      return 'Computer wins!';
    }
    return 'User wins!'
  }
  if (userChoice === 'bomb') {
    return 'User wins!'
  }
};
const playGame = () => {
  let userChoice = getUserChoice('rock');
  let computerChoice = getComputerChoice();
  console.log(userChoice, computerChoice);
  console.log(determineWinner(userChoice, computerChoice));
};
playGame();
