function Options({ question, dispatch, answer }) {
  const hasAnswered = answer !== null;
  return (
    <div className="options">
      {question.answers.map((option, index) => (
        <button
          className={`  btn-option ${index === answer ? "answer" : ""} 
          ${
            hasAnswered
              ? index === question.correctIndex
                ? "correct"
                : "wrong"
              : ""
          }   ${hasAnswered ? "disabled" : "btn"} `}
          key={option}
          disabled={hasAnswered}
          onClick={() => dispatch({ type: "newAnswer", payload: index })}
        >
          {option}
        </button>
      ))}
    </div>
  );
}
export default Options;
