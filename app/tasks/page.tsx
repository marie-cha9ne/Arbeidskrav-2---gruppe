//Tar inn komponenter: TaskCard
//Tar etterhvert inn en button og som sender inn svarene og redirecter til resultatside

import TaskCard from "../components/TaskCard";
import Button from "../components/Button";
import { Tasks } from "../data/tasks";
import type { MultipleChoice } from "../data/tasks";

//Definerer props-typen for komponenten TypeCard
export type TaskCardProps = {
  tasks: MultipleChoice[];
};

export default function TasksPage() {
  return (
    <main>
      <h1>Oppgaver</h1>
      <TaskCard tasks={Tasks}></TaskCard>
      <Button />
    </main>
  );
}
