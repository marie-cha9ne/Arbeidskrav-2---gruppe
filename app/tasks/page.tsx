"use client";

import { useState } from "react";
import { Tasks } from "../data/tasks";
import { useAnswerStore } from "../store/useAnswerStore";
import TaskCard from "../components/TaskCard";
import SubmitButton from "../components/SubmitButton";
import Results from "../components/Results";

export default function TasksPage() {
  const [submitted, setSubmitted] = useState(false);
  const userAnswers = useAnswerStore((state) => state.answers);

  return (
    <main>
      <h1>Oppgaver</h1>
      <TaskCard tasks={Tasks} />
      <SubmitButton onSubmit={() => setSubmitted(true)} />
      {submitted && <Results userAnswers={userAnswers} />}
    </main>
  );
}
