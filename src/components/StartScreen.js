import React from "react";
function StartScreen(props) {
  return (
    <div className="start">
      <h2>Welcome to Quiz</h2>
      <h3>{props.numQuestions} questions</h3>
      <button
        className="btn btn-ui"
        onClick={() => props.dispatch({ type: "start" })}
      >
        Let's Start
      </button>
    </div>
  );
}
export default StartScreen;
