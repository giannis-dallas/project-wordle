import { React, useState } from "react";

import { sample } from "../../utils";
import { WORDS } from "../../data";
import GuessInputWrapper from "../GuessInputWrapper/GuessInputWrapper";
import GuessResults from "../GuessResults/GuessResults";

import { NUM_OF_GUESSES_ALLOWED } from "../../constants";

// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });

function Game() {
  const [guesses, setGuesses] = useState([]);

  // status: ongoing, won. lost
  const [gameStatus, setGameStatus] = useState("ongoing");

  const handleGameResult = (result) => {
    if (result === "won") {
      setGameStatus("won");
    } else if (result === "lost") {
      setGameStatus("lost");
    }
  };

  return (
    <>
      <GuessResults
        answer={answer}
        guesses={guesses}
        num_of_guesses_allowed={NUM_OF_GUESSES_ALLOWED}
      />
      <GuessInputWrapper
        answer={answer}
        guesses={guesses}
        setGuesses={setGuesses}
        gameStatus={gameStatus}
        num_of_guesses_allowed={NUM_OF_GUESSES_ALLOWED}
        handleGameResult={handleGameResult}
      />
    </>
  );
}

export default Game;
