import React from "react";

const Answer = ({text}) => {
  return (
    <div className= {text === 'correct' ? "correct" : "incorrect"} >
      <h3> {text}</h3>
    </div>
  );
};

export default Answer;
