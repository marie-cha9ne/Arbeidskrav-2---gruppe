"use client";
import styles from "./TaskCard.module.css";
import Image from "next/image";
import { type TaskCardProps } from "../data/types";
import { useAnswerStore } from "../store/useAnswerStore";
import { useEffect } from "react";

export default function TaskCard({ tasks, submitted }: TaskCardProps) {
  const { answers, setAnswer } = useAnswerStore();

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
          <div key={task.id} className={styles.radioButtonDiv}>
            <h2>
              {task.id}: {task.question}
            </h2>

            {task.image && (
              <Image
                src={task.image}
                alt="Eksempelkode"
                width={task.imageWidth}
                height={task.imageHeight}
              ></Image>
            )}

            {task.options.map((optionText, optionIndex) => (
              <label key={optionIndex} className={styles.taskLabel}>
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
            {submitted && (
              <p
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
