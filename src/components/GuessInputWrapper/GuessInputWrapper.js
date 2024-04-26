import { useState, React } from "react";

function GuessInputWrapper({ guesses, setGuesses}) {
  const [guess, setGuess] = useState("");
  const [input, setInput] = useState("");

  function handleSubmit(event) {
    event.preventDefault();

    let newGuess = input;
    console.log(newGuess);
    console.log(guesses);
    setInput("");

    // const newGuessess = [...guesses];
    // setGuesses(newGuessess.push(newGuess));
  }

  return (
    <>
      <form onSubmit={handleSubmit} className="guess-input-wrapper">
        <label htmlFor="guess-input">Enter guess:</label>
        <input
          id="guess-input"
          type="text"
          value={input}
          onChange={(event) => setInput(event.target.value.toUpperCase() )}
          minLength={5}
          maxLength={5}
          pattern="^[a-zA-Z]{5}$"
        />
      </form>
    </>
  );
}

export default GuessInputWrapper;
