export type Answer = {
  taskId: number;
  selectedOption: string;
};

export type MultipleChoice = {
  id: number;
  question: string;
  options: string[];
  image?: string;
  imageWidth?: number;
  imageHeight?: number;
  correctIndex: number;
};

export type TaskCardProps = {
  tasks: MultipleChoice[];
  submitted: boolean;
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

export type ArticleSection = {
  title: string,
  body?: string[],
  list?: string[],
  code?: string,
  note?: string,
  noteCode?: string,
  moreText?: string,
  subSections?: ArticleSection[],
  images?: string[],
}
