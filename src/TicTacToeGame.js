import React, { useReducer } from "react";
import { Button, ButtonGroup } from "react-bootstrap";
import ticTacToeGameStyles from "./TicTacToeGameStyles.module.css";

import ticTacToeGameReducer from "./ticTacToeGameReducer.js";

const initialGameState = {
  disableButton: [-1, -1, -1, -1, -1, -1, -1, -1, -1],
  headerText: "Player X Turn",
  buttonText: ["", "", "", "", "", "", "", "", ""],
  player1: [],
  player2: []
};

export default function TicTacToeGame() {
  let [gameState, dispatch] = useReducer(
    ticTacToeGameReducer,
    initialGameState
  );

  return (
    <div className={ticTacToeGameStyles.alignCenter}>
      <>
        <h3>{gameState.headerText}</h3>
        <ButtonGroup>
          {[1, 2, 3].map(uniqueButtonKey => (
            <Button
              key={uniqueButtonKey}
              className={ticTacToeGameStyles.button}
              onClick={() => dispatch({ key: uniqueButtonKey })}
              disabled={gameState.disableButton[uniqueButtonKey - 1] !== -1}
            >
              {gameState.buttonText[uniqueButtonKey - 1]}
            </Button>
          ))}
        </ButtonGroup>
        <br />
        <ButtonGroup>
          {[4, 5, 6].map(uniqueButtonKey => (
            <Button
              key={uniqueButtonKey}
              className={ticTacToeGameStyles.button}
              onClick={() => dispatch({ key: uniqueButtonKey })}
              disabled={gameState.disableButton[uniqueButtonKey - 1] !== -1}
            >
              {gameState.buttonText[uniqueButtonKey - 1]}
            </Button>
          ))}
        </ButtonGroup>
        <br />
        <ButtonGroup>
          {[7, 8, 9].map(uniqueButtonKey => (
            <Button
              key={uniqueButtonKey}
              className={ticTacToeGameStyles.button}
              onClick={() => dispatch({ key: uniqueButtonKey })}
              disabled={gameState.disableButton[uniqueButtonKey - 1] !== -1}
            >
              {gameState.buttonText[uniqueButtonKey - 1]}
            </Button>
          ))}
        </ButtonGroup>
        <br /> <br />
        <Button size="lg" onClick={() => dispatch({ key: 100 })}>
          Play Again
        </Button>
      </>
    </div>
  );
}
