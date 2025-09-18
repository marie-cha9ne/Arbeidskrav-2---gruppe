export type Answer = {
  taskId: number;
  selectedOption: string;
};

export type MultipleChoice = {
  id: number;
  question: string;
  option1: string;
  option2: string;
  option3: string;
  image?: string;
};

export type TaskCardProps = {
  tasks: MultipleChoice[];
};