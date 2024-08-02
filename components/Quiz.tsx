"use client";

import React, { useState } from "react";
import { QuizStep, QuizStepProps } from "./QuizStep";

interface QuizProps {
  steps: QuizStepProps[];
}

const Quiz: React.FC<QuizProps> = ({ steps }) => {
  const [currentStep, setCurrentStep] = useState(0);

  const nextStep = () => {
    setCurrentStep((prevStep) => Math.min(prevStep + 1, steps.length - 1));
  };

  const prevStep = () => {
    setCurrentStep((prevStep) => Math.max(prevStep - 1, 0));
  };

  return (
    <div>
      <QuizStep {...steps[currentStep]} />
      <div>
        {currentStep > 0 && (
          <button className="bg-white" onClick={prevStep}>
            Previous
          </button>
        )}
        {currentStep < steps.length - 1 && (
          <button className="bg-white" onClick={nextStep}>
            Next
          </button>
        )}
      </div>
    </div>
  );
};

export default Quiz;
