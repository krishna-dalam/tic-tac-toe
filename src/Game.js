import React, { useState } from "react";
import { Button, ButtonGroup } from "react-bootstrap";

const Game = () => {
  // const winSequences = [
  //   [1, 2, 3],
  //   [4, 5, 6],
  //   [7, 8, 9],
  //   [1, 4, 7],
  //   [2, 5, 8],
  //   [3, 6, 9],
  //   [1, 5, 9],
  //   [3, 5, 7]
  // ];

  // const [player1, setPlayer1] = useState([]);
  // const [player2, setPlayer2] = useState([]);

  const [gameState, setGameState] = useState("Player1");

  // const playerWin = () => {};

  const successColor = "success";
  const warningColor = "warning";

  const [changedColor, setChangedColor] = useState("primary");

  // const changeGameState = props => {
  //   if (gameState === "Player1") {
  //     setGameState("Player2");
  //     setPlayer1({ ...player1, ...props });
  //     //changedColor = successColor;
  //   } else {
  //     setGameState("Player1");
  //     setPlayer2({ ...player2, ...props });
  //     //changedColor = warningColor;
  //   }
  // };

  // const changeColor = color => setChangedColor(color);

  // const numbers = ["1", "2", "3", "4", "5", "6", "7", "8", "9"];

  const togglePlayer = () => {
    if (gameState === "Player1") {
      setGameState("Player2");
      return successColor;
    } else {
      setGameState("Player1");
      return warningColor;
    }
  };

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh"
      }}
    >
      <p>
        <ButtonGroup>
          <Button
            variant={changedColor}
            onClick={() => setChangedColor(togglePlayer())}
          >
            1
          </Button>
          <Button
            variant={changedColor}
            onClick={() => setChangedColor(togglePlayer())}
          >
            2
          </Button>
          <Button> 3 </Button>
        </ButtonGroup>
        <br />
        <ButtonGroup>
          <Button> 4 </Button>
          <Button> 5 </Button>
          <Button> 6 </Button>
        </ButtonGroup>
        <br />
        <ButtonGroup>
          <Button> 7 </Button>
          <Button> 8 </Button>
          <Button> 9 </Button>
        </ButtonGroup>
      </p>
    </div>
  );
};

export default Game;

