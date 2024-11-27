import React, { useState } from "react";
import QuestionScreen from "../questionSection/QuestionScreen.jsx";
import "../global/global.css";

const Personalize = () => {
  const [step, setStep] = useState(1);

  const totalSteps = 9; // Fixed to 9 steps
  const questions = [
    { question: "What type of home do you live in?", options: ["Condo/Apartment", "Detached House", "Townhouse", "Farmhouse", "Other"] },
    { question: "How many rooms are there in your home?", options: ["1-2", "3-4", "5-7", "8-10", "I don’t want to answer"] },
    { question: "What else do you have? Select from below:", options: ["Garage", "Car Porch", "Frontyard","Backyard", "Sideyard", "Pool Area", "Basement"] },
    { question: "Tell us about your landscape, what do you have?", options: ["Shrubs", "Vines","Trees", "Orchard", "Fish Pond"] },
    { question: "What kind of air conditioning system do you have?", options: ["HVAC", "Individual AC Units", "Both",] },
    { question: "What kind of furnace do you have?", options: ["Gas", "Electric", "None"] },
    { question: "Do you have a solar panel system?", options: ["Yes", "No"] },
    { question: "Do you have any pets in your household?", options: ["Cat", "Dog", "Fish", "Birds", "Reptiles", "Rodents"] },
    { question: "Do you want to receive notifications?", options: ["Yes", "Maybe Later"] },
  ];

  const handleNext = () => {
    if (step < totalSteps) setStep(step + 1);
  };

  return (
    <div className="Personalize-container">
      {step <= questions.length ? (
        <QuestionScreen
          step={step}
          totalSteps={totalSteps}
          question={questions[step - 1].question}
          options={questions[step - 1].options}
          onNext={handleNext}
        />
      ) : (
        <div className="completion-message">Thank you for completing the program!</div>
      )}
    </div>
  );
};

export default Personalize;
