//Rendrer cards for hvert spørsmål med multiple choice format.
"use client";
import "./TaskCard.css";
import { type TaskCardProps } from "../tasks/page";
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
      {tasks.map((task) => (
        <div key={task.id} className="radioButtonDiv">
          <h2>
            {task.id}: {task.question}
          </h2>
          <div className="radioButtonDiv">
            <label>
              <input
                type="radio"
                name={task.question}
                value="option1"
                onChange={() => {
                  console.log(`Oppgave ${task.id}: Bruker valgte alternativ 1`);
                  setAnswer(task.id, task.option1);
                }}
              />
              {task.option1}
            </label>
            <label>
              <input
                type="radio"
                name={task.question}
                value="option2"
                onChange={() => {
                  console.log(`Oppgave ${task.id}: Bruker valgte alternativ 2`);
                  setAnswer(task.id, task.option2);
                }}
              />
              {task.option2}
            </label>
            <label>
              <input
                type="radio"
                name={task.question}
                value="option3"
                onChange={() => {
                  console.log(`Oppgave ${task.id}: Bruker valgte alternativ 3`);
                  setAnswer(task.id, task.option3);
                }}
              />
              {task.option3}
            </label>
          </div>
        </div>
      ))}
      {/* Knapp som bør være en komponent etterhvert som vi blir enig */}
      <button>Send inn svar</button>
    </article>
  );
}
