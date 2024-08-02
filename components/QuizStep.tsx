"use client";

import { AudioPlayer } from "@/components/AudioPlayer";
import { Button } from "@/components/Button";
import Image from "next/image";
import { useState } from "react";
import Toast, { ToastType } from "./Toast";

type Answer = {
  buttonLabel: string;
  value: string;
};

export interface QuizStepProps {
  question: string;
  answers: Answer[];
  correctAnswer: string;
  imagePath: string;
  audioPath: string;
  nextStep: () => void;
}

export const QuizStep: React.FC<QuizStepProps> = ({
  question,
  answers,
  correctAnswer,
  imagePath,
  audioPath,
  nextStep,
}) => {
  const [toastMessage, setToastMessage] = useState<string | null>("");
  const [toastType, setToastType] = useState<ToastType>("");

  const handleAnswer = (answer: string) => {
    if (answer === correctAnswer) {
      setToastMessage("Correct");
      setToastType("Correct");
      nextStep();
    } else {
      setToastMessage("Incorrect");
      setToastType("Incorrect");
    }
  };
  const handleAudioEnd = () => {
    console.log("Audio finished playing");
    // Logic to handle end of audio (e.g., play next track)
  };

  return (
    <div>
      <p>{question}</p>
      <Image src={imagePath} alt="Example Image" width={100} height={200} />
      <AudioPlayer src={audioPath} onEnd={handleAudioEnd} />
      <div className="w-1/2 flex flex-wrap justify-around items-center">
        {answers.map((answer) => (
          <Button
            key={answer.buttonLabel}
            callback={() => handleAnswer(answer.value)}
            buttonLabel={answer.buttonLabel}
          />
        ))}
      </div>
      {toastMessage && (
        <Toast
          message={toastMessage}
          onClose={() => setToastMessage(null)}
          toastType={toastType}
        />
      )}
    </div>
  );
};
