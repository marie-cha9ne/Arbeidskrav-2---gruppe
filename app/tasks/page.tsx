//Hovedside for oppgaver: Alle oppgavene vises på denne siden
//Hver oppgave har en type: MultipleChoice
//Tar inn komponenter: TaskCard
//Tar etterhvert inn en button og som sender inn svarene og redirecter til resultatside

import TaskCard from "../components/TaskCard";

type MultipleChoice = {
  id: number;
  question: string;
  option1: string;
  option2: string;
  option3: string;
};

//Definerer props-typen for komponenten TypeCard
export type TaskCardProps = {
  tasks: MultipleChoice[];
};

export default function TasksPage() {
  const Tasks: MultipleChoice[] = [
    {
      id: 1,
      question: "Hva er de fem ulike “Design Thinking”-metodene?",
      option1: "Empati, definere, idéer, prototype, teste",
      option2: "Definere, empati, idéer, designe, teste",
      option3: "Snakke, tenke, dele, tegne, løse",
    },
    {
      id: 2,
      question:
        "Hva kalles teksten man legger på bilde-elementer i HTML for at brukere skal få med seg hva bildet er om de ikke kan se det?",
      option1: "Bildetekst",
      option2: "alt-tekst",
      option3: "Universaltekst",
    },
  ];

  return (
    <main>
      <h1>Oppgaver</h1>
      <TaskCard tasks={Tasks}></TaskCard>
    </main>
  );
}
