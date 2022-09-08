import React, { useState } from "react";
import questions from "../questions";
import Answer from "./Answer";
const Quiz = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [showScore, setShowScore] = useState(false);
  const [correct, setCorrect] = useState(false);
  const [showCorrect, setShowCorrect] = useState(false);

  const getAnswer = () => {
    if(showCorrect) {
        return correct ? (
          <Answer text="correct" />
        ) : (
          <Answer text="incorrect" />
        );
    }
    else {
        return null
    }
  }
  const handleCorrect = (answered) => {
    if(answered === questions[currentQuestion].correct_answer){
        setScore(score+1)
        setCorrect(true);
        setShowCorrect(true)
        
    }
    else{
        setScore(score)
        setCorrect(false)
        setShowCorrect(true);
    }
  }
  
  console.log(score)
  return (
    <div className="main">
      <div className="inner">
        <div>
          <h4 className="category">{questions[currentQuestion].category}</h4>
          <div className="questionNum">
            Question {currentQuestion + 1} of {questions.length}
          </div>
          <p className="difficulty"> Difficulty Level: {questions[currentQuestion].difficulty}</p>
          <h3>{questions[currentQuestion].question} </h3>
          <div className="options">
            {
              <button
                className="option-button"
                onClick={() =>
                  handleCorrect(questions[currentQuestion].correct_answer)
                }
              >
                {questions[currentQuestion].correct_answer}
              </button>
            }
            {questions[currentQuestion].incorrect_answers.map((option, idx) => (
              <button
                className="option-button"
                onClick={() => handleCorrect(option)}
                key={idx}
              >
                {" "}
                {option}{" "}
              </button>
            ))}
          </div>

          <div className="nextQuestion">
            <button
              className="nextButton"
              onClick={() => {
                setShowCorrect(false);
                setCurrentQuestion(currentQuestion + 1);
              }}
            >
              {" "}
              Next Question{" "}
            </button>
          </div>
          {getAnswer()}
          <h3> min-score can be: {(score / questions.length) * 100}% </h3>
          <h3>
            {" "}
            max-score can be:{" "}
            {((score + questions.length - currentQuestion) / questions.length) *
              100}
            {"% "}
          </h3>
        </div>
      </div>
    </div>
  );
};

export default Quiz;
