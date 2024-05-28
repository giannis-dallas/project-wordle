import React from "react";

import { checkGuess } from "../../game-helpers";
import { NUM_OF_GUESSES_ALLOWED } from "../../constants";
import { range } from "../../utils";
import Guess from "../Guess/Guess";

function GuessResults({ guesses, answer }) {
  console.log(guesses);
  console.log(range(NUM_OF_GUESSES_ALLOWED));
  return (
    <>
      <div className="guess-results">
        {range(NUM_OF_GUESSES_ALLOWED).map((num, index) => {
          console.log(index, guesses[index]);
          let guess = guesses[index] ? checkGuess(guesses[index],answer) : Array(5).fill("");
          console.log(guess);
          return (
            <Guess value={guess} ndex={index} key={index} i></Guess>
          );
        })}
      </div>
    </>
  );
}

export default GuessResults;
