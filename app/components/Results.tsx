import { Answer, MultipleChoice, ResultsProps } from "../data/types";
import { calculateScore } from "../utils/calculateScore";
import { Tasks } from "../data/tasks";
import "./Results.css";

export default function Results({ userAnswers }: ResultsProps) {
  const finalResult = calculateScore(userAnswers, Tasks);
  const score = finalResult.score;
  const results = finalResult.results;

  return (
    <article>
      {score > 7 ? (
        <h1>Gratulerer, du fikk {score} poeng og har bestått!</h1>
      ) : (
        <div>
          <h1>Dessverre, du fikk bare {score} poeng og har ikke bestått.</h1>
          
        </div>
      )}
    </article>
  );
}