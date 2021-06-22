const gameControls = (() => {
  const playGame = playerChoice => {
    console.log(gameLogic.checkForWin(gameLogic.playerMove(playerChoice), gameLogic.computerMove()));
  }

  return { playGame }
})();


const gameLogic = (() => {
  const MOVES = {
    'rock': { win: 'scissors', lose: 'paper'},
    'paper': { win: 'rock', lose: 'scissors' },
    'scissors': { win: 'paper', lose: 'rock' }
  }
  const moveChoices = Object.keys(MOVES);

  const playerMove = (playerChoice = '') => {
    if (!moveChoices.includes(playerChoice.toLowerCase())) {
      console.log(`${playerChoice} is not a valid choice.`);
    } else {
      return playerChoice;
    }
  }

  const computerMove = () => {
    let computerChoice = moveChoices[Math.floor(Math.random() * moveChoices.length)];
    return computerChoice;
  }


  const checkForWin = (playerChoice, computerChoice) => {
    console.log(`${playerChoice.toLowerCase()} vs. ${computerChoice}`);

    if (MOVES[playerChoice.toLowerCase()].win === computerChoice) {
      return 'Player Wins!';
    } else if (MOVES[computerChoice].win === playerChoice.toLowerCase()) {
      return 'Computer Wins!';
    } else {
      return "It's a tie!";
    }
  }

  return { computerMove, playerMove, checkForWin }
})();

