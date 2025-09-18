export type Answer = {
  taskId: number;
  selectedOption: string;
};

export type MultipleChoice = {
  id: number;
  question: string;
  options: string[];
  image?: string;
  correctOptionIndex: number;
};

export type TaskCardProps = {
  tasks: MultipleChoice[];
};

export type Result = {
  taskId: number;
  question: string;
  userSelected: string | null;
  correctOption: string;
  correct: boolean;
};

export type ResultsProps = {
  userAnswers: Answer[];
};

export type SubmiButtonProps = {
  onSubmit: () => void;
};
