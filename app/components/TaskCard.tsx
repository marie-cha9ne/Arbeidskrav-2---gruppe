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
      {tasks.map((task) => {
        const selected = answers.find(
          (answer) => answer.taskId === task.id
        )?.selectedOption;

        return (
          <div key={task.id} className="radioButtonDiv">
            <h2>
              {task.id}: {task.question}
            </h2>
            {task.image && <img src={task.image}></img>}
            <div className="radioButtonDiv">
              <label>
                <input
                  type="radio"
                  name={`task-${task.id}`}
                  value="option1"
                  checked={selected === "option1"}
                  onChange={() => setAnswer(task.id, "option1")}
                />
                {task.option1}
              </label>
              <label>
                <input
                  type="radio"
                  name={`task-${task.id}`}
                  value="option2"
                  checked={selected === "option2"}
                  onChange={() => setAnswer(task.id, "option2")}
                />
                {task.option2}
              </label>
              <label>
                <input
                  type="radio"
                  name={`task-${task.id}`}
                  value="option3"
                  checked={selected === "option3"}
                  onChange={() => setAnswer(task.id, "option3")}
                />
                {task.option3}
              </label>
            </div>
          </div>
        );
      })}
    </article>
  );
}
