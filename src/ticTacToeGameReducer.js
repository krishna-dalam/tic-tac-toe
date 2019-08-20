export default function ticTacToeGameReducer(gameState, action) {
  const winSequences = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
    [1, 4, 7],
    [2, 5, 8],
    [3, 6, 9],
    [1, 5, 9],
    [3, 5, 7]
  ];

  const filterDisabledButtons = (value, index) => value === index;

  const isDraw = () => {
    let activeButtons = gameState.disableButton.filter(filterDisabledButtons);
    return activeButtons.length === 9;
  };

  const disable = () => {
    gameState.disableButton[action.key - 1] = action.key - 1;
    return gameState.disableButton;
  };

  const disableAll = () => {
    gameState.disableButton = [10, 10, 10, 10, 10, 10, 10, 10, 10];
  };

  const toggleHeaderText = status => {
    switch (status) {
      case "Draw":
        return "Match Drawn :(";
      default:
        if (gameState.headerText === "Player X Turn") {
          return "Player O Turn";
        } else {
          return "Player X Turn";
        }
    }
  };

  const getButtonText = () => {
    if (gameState.headerText === "Player X Turn") {
      gameState.buttonText[action.key - 1] = "X";
      gameState.player1 = [...gameState.player1, action.key];
    } else {
      gameState.buttonText[action.key - 1] = "O";
      gameState.player2 = [...gameState.player2, action.key];
    }
    return gameState.buttonText;
  };

  const getWinnerGameText = () => {
    let winnerGameText = null;
    gameState.player1.sort();
    gameState.player2.sort();
    winSequences.forEach(seq => {
      if (JSON.stringify(seq) === JSON.stringify(gameState.player1)) {
        winnerGameText = "Player X Won :)";
        disableAll();
      } else if (JSON.stringify(seq) === JSON.stringify(gameState.player2)) {
        winnerGameText = "Player O Won :)";
        disableAll();
      }
    });
    return winnerGameText;
  };

  const getHeaderText = () => {
    return isDraw() ? toggleHeaderText("Draw") : toggleHeaderText("Continue");
  };

  if (action.key === 100) {
    return {
      disableButton: [-1, -1, -1, -1, -1, -1, -1, -1, -1],
      headerText: "Player X Turn",
      buttonText: ["", "", "", "", "", "", "", "", ""],
      player1: [],
      player2: []
    };
  }

  disable();
  let currentButtonText = getButtonText();

  let winnerGameText = getWinnerGameText();

  return {
    disableButton: gameState.disableButton,
    headerText:
      winnerGameText === "Player X Won :)" ||
      winnerGameText === "Player O Won :)"
        ? winnerGameText
        : getHeaderText(),
    buttonText: currentButtonText,
    player1: gameState.player1,
    player2: gameState.player2
  };
}
