//Rendrer cards for hvert spørsmål med multiple choice format.
"use client";
import "./TaskCard.css";
import { type TaskCardProps } from "../tasks/page";

export default function TaskCard({ tasks }: TaskCardProps) {
  return (
    <article>
      {tasks.map((task) => (
        <div key={task.index} className="radioButtonDiv">
          <h2>
            {task.index}: {task.question}
          </h2>
          <div className="radioButtonDiv">
            <label>
              <input
                type="radio"
                name={task.question}
                value="option1"
                onChange={() => {
                  console.log(
                    `Oppgave ${task.index}: Bruker valgte alternativ 1`
                  );
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
                  console.log(
                    `Oppgave ${task.index}: Bruker valgte alternativ 2`
                  );
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
                  console.log(
                    `Oppgave ${task.index}: Bruker valgte alternativ 3`
                  );
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
