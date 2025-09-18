//Rendrer cards for hvert spørsmål med multiple choice format.
"use client";
import "./TaskCard.css";
import { type TaskCardProps } from "../tasks/page";
import { useAnswerStore } from "../store/useAnswerStore";
import { useEffect, useState } from "react";


export default function TaskCard({ tasks }: TaskCardProps) {
  const { answers, setAnswer } = useAnswerStore();
   const [submitted, setsubmitted] = useState<boolean>(false);

  //Logger de lagrede svarene fra Zustand-store
  useEffect(() => {
    console.log("Lagrede svar:", answers);
  }, [answers]);

  //Sjekker resultatene
  
  function handelSubmit(): void{
    let score = 0;

    setsubmitted(true)

    tasks.forEach((task)=>{
    const userAnswer = answers.find((answer) => answer.taskId === task.id);
    if(userAnswer?.selectedOption === task.correct){
      score++;
    }
  })
 
   alert(`Du fikk ${score} av ${tasks.length} riktig`)
  }

  return (
    <article>
      {tasks.map((task) => {
        const selected = answers.find(
          (answer) => answer.taskId === task.id
        )?.selectedOption;
const isCorrect = selected === task.correct;
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
             {submitted && (
                  <p style ={{
                    color: isCorrect ? "green" : "red",
                    fontWeight: "bold",
                  }}
                  >
                    {isCorrect ? "Riktig" : "Feil"}
                  </p>
                )}
          </div>
      
        );
      })}
      <button type="button" onClick={handelSubmit}>Send inn svar</button>
    </article>
  );
}
