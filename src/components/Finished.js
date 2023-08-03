import React from "react";
function Finished({ points, maxPoints, highscore, dispatch }) {
  const percentage = (points / maxPoints) * 100;
  return (
    <>
      <p>
        You scored <strong>{points}</strong> out of {maxPoints}(
        {Math.round(percentage)}%)
      </p>
      <p className="highscore">(highscore: {highscore} points)</p>
      <button
        className="btn btn-ui"
        onClick={() => dispatch({ type: "restart" })}
      >
        Restart Quiz
      </button>
    </>
  );
}
export default Finished;
