import React from "react";

import Confetti from "react-confetti";
const Confettis = ({ category }) => {
  return (
    <div className="confetti">
      <Confetti numberOfPieces={1000} />;
    </div>
  );
};
export default Confettis;
