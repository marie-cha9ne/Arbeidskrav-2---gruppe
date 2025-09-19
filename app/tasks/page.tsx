"use client";
import "./tasks.css";
import { useState } from "react";
import { Tasks } from "../data/tasks";
import { useAnswerStore } from "../store/useAnswerStore";
import TasksHeader from "../components/TasksHeader";
import TaskCard from "../components/TaskCard";
import SubmitButton from "../components/SubmitButton";
import Results from "../components/Results";

export default function TasksPage() {
  const [submitted, setSubmitted] = useState(false);
  const userAnswers = useAnswerStore((state) => state.answers);

  return (
    <main className="main-container">
      <TasksHeader />
      <TaskCard tasks={Tasks} submitted={submitted} />
      <SubmitButton onSubmit={() => setSubmitted(true)} />
      {submitted && <Results userAnswers={userAnswers} />}
    </main>
  );
}
