//Tar inn komponenter: TaskCard
//Tar etterhvert inn en button og som sender inn svarene og redirecter til resultatside

import TaskCard from "../components/TaskCard";
import { Tasks } from "../data/tasks";
import type { TaskCardProps } from "../data/types";
import SubmitButton from "../components/SubmitButton";

//Definerer props-typen for komponenten TypeCard

export default function TasksPage() {
  return (
    <main>
      <h1>Oppgaver</h1>
      <TaskCard tasks={Tasks}></TaskCard>
      <SubmitButton />
    </main>
  );
}
