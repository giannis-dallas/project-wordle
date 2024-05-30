import { useState, React } from "react";

function GuessInputWrapper({
  guesses,
  setGuesses,
  gameStatus,
  setGameStatus,
  num_of_guesses_allowed,
}) {
  const [input, setInput] = useState("");

  function handleSubmit(event) {
    event.preventDefault();

    let newGuess = input;
    setInput("");

    if (guesses.length < num_of_guesses_allowed) {
      const newGuessess = [...guesses, newGuess];
      setGuesses(newGuessess);
    }

    
  }

  return (
    <>
      {gameStatus && (
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
      )}
      {!gameStatus==="won" && (
        <div class="banner">
          <p>
            <strong>Congratulations!</strong> Got it in
            <strong>3 guesses</strong>.
          </p>
        </div>
      )}
    </>
  );
}

export default GuessInputWrapper;
