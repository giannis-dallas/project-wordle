import React, { useState } from "react";

function GuessInput({ guesses, setGuesses }) {
  const [guess, setGuess] = useState("");

  function onSubmit(e) {
    e.preventDefault();
    console.log(`Current Guess: ${guess}`);
    let newGuesses = [...guesses, guess];

    if(newGuesses.length >= 6){
      return
    }
    
    setGuesses(newGuesses) ; 
    setGuess("");
  }

  return (
    <>
      <form
        onSubmit={onSubmit}
        className="guess-input-wrapper
    "
      >
        <label htmlFor="guess-input">Enter a five letter guess:</label>

        <input
          id="guess-input"
          type="text"
          value={guess}
          pattern="[A-Z]{5}"
          onChange={(e) => setGuess(e.target.value.toUpperCase())}
        />
      </form>
    </>
  );
}

export default GuessInput;
