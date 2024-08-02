import { QuizStep } from "@/components/QuizStep";

export default function Letters() {
  const question = "Choose the correct letter";
  const imagePath = "/testImage.webp";
  const audioPath = "/test.mp3";
  const answers = [
    { buttonLabel: "A", value: "A" },
    { buttonLabel: "B", value: "B" },
    { buttonLabel: "C", value: "C" },
    { buttonLabel: "D", value: "D" },
  ];

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24 bg-skin-base">
      <QuizStep
        question={question}
        answers={answers}
        imagePath={imagePath}
        audioPath={audioPath}
      />
    </main>
  );
}
