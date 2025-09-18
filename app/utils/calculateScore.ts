import { Answer, MultipleChoice, Result } from "../data/types";

//Tar inn oppgavene, svarene til brukeren og fasiten
export function calculateScore(
  userAnswers: Answer[],
  tasks: MultipleChoice[]
): { score: number; results: Result[] } {

  const results: Result[] = tasks.map((task) => {
    const userAnswer = userAnswers.find(
      (answer) => answer.taskId === task.id
    );

const correctOptionText = task.options[task.correctOptionIndex]

    return {
      taskId: task.id,
      question: task.question,
      userSelected: userAnswer?.selectedOption ?? null,
      correctOption: correctOptionText,
      correct: userAnswer?.selectedOption === correctOptionText,
    };
  });

  const score = results.filter((result) => result.correct).length;
  return { score, results };
}
