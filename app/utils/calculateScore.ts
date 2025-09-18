import { Answer } from "../data/types";

//Tar inn svarene til brukeren og fasiten
export function calculateScore(userAnswers: Answer[],
  correctAnswers: Answer[]) {

  const results = correctAnswers.map((correct) => {
    const userAnswer = userAnswers.find(
      (answer) => answer.taskId === correct.taskId
    );
    return {
      taskId: correct.taskId,
      correct: userAnswer?.selectedOption === correct.selectedOption,
    };
  });

  const score = results.filter((result) => result.correct).length;
  return { score, results };
}
