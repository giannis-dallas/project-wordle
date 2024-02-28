import React, { useState } from "react";

import { sample } from "../../utils";
import { WORDS } from "../../data";
import GuessInput from "../GuessInput/GuessInput";

// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });

function Game() {
  const [guesses, setGuesses] = useState([]);

  return (
    <>
      <div class="guess-results">
        {guesses.map((guess) => {
          return <p className="guess">{guess}</p>;
        })}
      </div>
      <GuessInput guesses={guesses} setGuesses={setGuesses} />
    </>
  );
}

export default Game;
