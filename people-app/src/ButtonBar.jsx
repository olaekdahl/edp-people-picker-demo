/* eslint-disable react/prop-types */
import React, { useState } from "react";
import Confetti from "react-confetti";

export function ButtonBar({ reset, pickRandomPerson }) {
  const [showConfetti, setShowConfetti] = useState(false);

  const handlePickRandomPerson = () => {
    pickRandomPerson();
    setShowConfetti(true);
    setTimeout(() => setShowConfetti(false), 6000); // Confetti will disappear after 3 seconds
  };

  return (
    <section>
      <button className="btn btn-outline-danger" onClick={reset}>
        Reset
      </button>
      <button
        className="btn btn-outline-success m-2"
        onClick={handlePickRandomPerson}
      >
        Pick Random Person
      </button>
      {showConfetti && <Confetti />}
    </section>
  );
}