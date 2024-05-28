import { useState, React } from "react";
import { NUM_OF_GUESSES_ALLOWED } from "../../constants";

function GuessInputWrapper({ guesses, setGuesses }) {
  const [input, setInput] = useState("");

  function handleSubmit(event) {
    event.preventDefault();

    let newGuess = input;
    setInput("");

    if (guesses.length < NUM_OF_GUESSES_ALLOWED) {
      const newGuessess = [...guesses, newGuess];
      setGuesses(newGuessess);
    }
  }

  return (
    <>
      <form onSubmit={handleSubmit} className="guess-input-wrapper">
        <label htmlFor="guess-input">Enter guess:</label>
        <input
          id="guess-input"
          type="text"
          value={input}
          onChange={(event) => setInput(event.target.value.toUpperCase())}
          minLength={5}
          maxLength={5}
          pattern="^[a-zA-Z]{5}$"
          title="5 letter words only"
        />
      </form>
    </>
  );
}

export default GuessInputWrapper;
