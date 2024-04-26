import React from "react";

function GuessResults({ guesses }) {
  console.log(guesses);
  return (
    <>
      <div className="guess-results">
        <p className="guess">FIRST</p>
        {/* {guesses.map((guess) => (
          <p className="guess">{guess}</p>
        ))} */}
      </div>
    </>
  );
}

export default GuessResults;
