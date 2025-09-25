import { ResultsProps } from "../data/types";
import { calculateScore } from "../utils/calculateScore";
import { Tasks } from "../data/tasks";
import styles from "./Results.module.css";

export default function Results({ userAnswers }: ResultsProps) {
  const finalResult = calculateScore(userAnswers, Tasks);
  const score = finalResult.score;

  return (
    <article className={styles.resultSummary}>
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
