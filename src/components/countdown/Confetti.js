import React from "react";

import Confetti from "react-confetti";
const Confettis = ({ category }) => {
  return (
    <div className="confetti">
      <div className="scroll-text">
        <h1 className="text">Happy {category}</h1>
      </div>
      <Confetti numberOfPieces={1000} />;
    </div>
  );
};
export default Confettis;
