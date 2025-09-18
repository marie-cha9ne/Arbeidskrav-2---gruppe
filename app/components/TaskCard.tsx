//Rendrer cards for hvert spørsmål med multiple choice format.
"use client";
import "./TaskCard.css";
import { type TaskCardProps } from "../data/types";
import { useAnswerStore } from "../store/useAnswerStore";
import { useEffect } from "react";

export default function TaskCard({ tasks }: TaskCardProps) {
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

        return (
          <div key={task.id} className="radioButtonDiv">
            <h2>
              {task.id}: {task.question}
            </h2>
            {task.options.map((optionText, optionIndex) => (
              <label key={optionIndex}>
                <input
                  type="radio"
                  name={task.id.toString()}
                  value={optionText}
                  checked={selected === optionText}
                  onChange={() => setAnswer(task.id, optionText)}
                />
                {optionText}
              </label>
            ))}
          </div>
        );
      })}
    </article>
  );
}
