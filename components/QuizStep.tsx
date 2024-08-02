"use client";

import { AudioPlayer } from "@/components/AudioPlayer";
import { Button } from "@/components/Button";
import Image from "next/image";

type Answer = {
  buttonLabel: string;
  value: string;
};

export interface QuizStepProps {
  question: string;
  answers: Answer[];
  imagePath: string;
  audioPath: string;
}

export const QuizStep: React.FC<QuizStepProps> = ({
  question,
  answers,
  imagePath,
  audioPath,
}) => {
  const handleAnswer = (answer: string) => {
    console.log(answer);
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
    </div>
  );
};
