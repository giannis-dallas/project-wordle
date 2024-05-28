import React from "react";

function Guess({ value, index }) {
  return (
    <p className="guess" key={index}>
      {value.map((letter, i) => (
        <span className="cell" key={i}>
          {letter}
        </span>
      ))}
    </p>
  );
}

export default Guess;
