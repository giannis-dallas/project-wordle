import { React, useState } from "react";

import { sample } from "../../utils";
import { WORDS } from "../../data";
import GuessInputWrapper from "../GuessInputWrapper/GuessInputWrapper";
import GuessResults from "../GuessResults/GuessResults";

// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });

function Game() {
  
  const [guesses, setGuesses] = useState([]);

  return (
    <>
      <GuessResults guesses={guesses} answer={answer} />
      <GuessInputWrapper guesses={guesses} setGuesses={setGuesses} />
    </>
  );
}

export default Game;
