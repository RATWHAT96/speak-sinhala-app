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

  return (
    <div>
      <QuizStep {...steps[currentStep]} nextStep={nextStep} />
    </div>
  );
};

export default Quiz;
