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
  const [gameStatus, setGameStatus] = useState(["ongoing"]);

  return (
    <>
      <GuessResults
        answer={answer}
        guesses={guesses}
        num_of_guesses_allowed={NUM_OF_GUESSES_ALLOWED}
      />
      <GuessInputWrapper
        guesses={guesses}
        setGuesses={setGuesses}
        gameStatus={gameStatus}
        setGameStatus={setGameStatus}
        num_of_guesses_allowed={NUM_OF_GUESSES_ALLOWED}
      />
    </>
  );
}

export default Game;
