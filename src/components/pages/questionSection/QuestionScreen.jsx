import React from "react";
import ProgressBar from "../../progressbar/ProgressBar";
import Button from "../../pages/button/Button";
import "./QuestionScreen.css";

const QuestionScreen = ({ step, totalSteps, question, options, onNext }) => {
  return (
    <div className="question-screen">
      <header className="header">
        <h2>Personalize Your Program</h2>
        <span>{`${step}/${totalSteps}`}</span>
      </header>
      <ProgressBar step={step} totalSteps={totalSteps} />
      <main className="main-content">
        <h3 className="question">{question}</h3>
        <div className="options">
          {options.map((option, index) => (
            <div key={index} className="option">
              <input type="radio" id={`option-${index}`} name="answer" />
              <label htmlFor={`option-${index}`}>{option}</label>
            </div>
          ))}
        </div>
      </main>
      <footer className="footer">
        <Button label="Next" onClick={onNext} />
      </footer>
    </div>
  );
};

export default QuestionScreen;
