//Rendrer cards for hvert spørsmål med multiple choice format.
"use client";
import "./TaskCard.css";
import Image from "next/image";
import { type TaskCardProps } from "../data/types";
import { useAnswerStore } from "../store/useAnswerStore";
import { useEffect } from "react";

export default function TaskCard({ tasks, submitted }: TaskCardProps) {
  const { answers, setAnswer } = useAnswerStore();

  //Logger de lagrede svarene fra Zustand-store
  useEffect(() => {
    console.log("Lagrede svar:", answers);
  }, [answers]);

  return (
    <article>
      {tasks.map((task) => {
        const selected = answers.find(
          (answer) => answer.taskId === task.id
        )?.selectedOption;

        const isCorrect =
          selected !== undefined &&
          selected === task.options[task.correctIndex];

        return (
          <div key={task.id} className="radioButtonDiv" role="group" aria-labelledby={`question-${task.id}`}>
            <h2 id={`question-${task.id}`}>
              {task.id}: {task.question}
            </h2>

            {task.image && <Image src={task.image} alt="Eksempelkode" width={task.imageWidth} height={task.imageHeight}></Image>}

            {task.options.map((optionText, optionIndex) => (
              <label key={optionIndex}>
                <input
                  type="radio"
                  name={task.id.toString()}
                  value={optionText}
                  checked={selected === optionText}
                  onChange={() => setAnswer(task.id, optionText)}
                  aria-describedby={`feedback-${task.id}`}
                />
                {optionText}
              </label>
            ))}
            {submitted && (
              <p
              id={`feedback-${task.id}`}
              role="status"
                style={{
                  color: isCorrect ? "green" : "red",
                  fontWeight: "bold",
                }}
              >
                {isCorrect
                  ? "Riktig!"
                  : `Feil, riktig svar er: ${task.options[task.correctIndex]}`}
              </p>
            )}
          </div>
        );
      })}
    </article>
  );
}
