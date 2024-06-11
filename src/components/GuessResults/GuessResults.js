import React from "react";

import { range } from "../../utils";
import Guess from "../Guess/Guess";

import { checkGuess } from "../../game-helpers";

function GuessResults({
  answer,
  guesses,
  num_of_guesses_allowed
}) {

  return (
    <>
      <div className="guess-results">
        {range(num_of_guesses_allowed).map((num, index) => {
          let guess = guesses[index]
            ? guesses[index].split("")
            : Array(5).fill("");

          let result = guesses[index] ? checkGuess(guesses[index], answer) : null;

          return (
            <Guess
              value={guess}
              index={index}
              result={result}
              key={index}
            ></Guess>
          );
        })}
      </div>
    </>
  );
}

export default GuessResults;
