import { useState, React } from "react";

import { checkGuess } from "../../game-helpers";

function GuessInputWrapper({
  answer,
  guesses,
  setGuesses,
  gameStatus,
  num_of_guesses_allowed,
  handleGameResult,
}) {
  const [input, setInput] = useState("");

  function handleSubmit(event) {
    event.preventDefault();

    let newGuess = input;
    setInput("");

    if (guesses.length < num_of_guesses_allowed) {
      const newGuessess = [...guesses, newGuess];

      newGuessess.map((guess, index) => {
        let result = guess ? checkGuess(guess, answer) : null;
        if (result && result.every((item) => item.status === "correct")) {
          handleGameResult("won");
        }

        return null;
      });

      if (newGuessess.length === num_of_guesses_allowed) {
        handleGameResult("lost");
      }

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
          pattern="[a-zA-Z]{5}"
          title="5 letter words only"
          required
          disabled={gameStatus !== "ongoing"}
        />
      </form>

      {gameStatus === "won" && (
        <div className="happy banner">
          <p>
            <strong>Congratulations!</strong> Got it in
            <strong>{guesses.length} guesses</strong>.
          </p>
        </div>
      )}
      {gameStatus === "lost" && (
        <div className=" sad banner">
          <p>
            Sorry, the correct answer is <strong>{answer}</strong>.
          </p>
        </div>
      )}
    </>
  );
}

export default GuessInputWrapper;
