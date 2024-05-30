import React from "react";

function Guess({ value, index, result }) {
  return (
    <p className="guess" key={index}>
      {value.map((letter, i) => (
        <span
          className={`cell ${
            result && result[i].status ? result[i].status : ""
          }`}
          key={i}
        >
          {letter}
        </span>
      ))}
    </p>
  );
}

export default Guess;
