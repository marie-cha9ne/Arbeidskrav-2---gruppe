"use client";

import { useAnswerStore } from "../store/useAnswerStore";
import { calculateScore } from "../utils/calculateScore";
import { correctAnswers } from "../data/correctAnswers";

export default function SubmitButton() {
  //Henter kun ut svarene til brukeren med å selektere for å slippe re-rendring av hele storen
  const answers = useAnswerStore((selected) => selected.answers);

  function handleClick() {
    const { score, results } = calculateScore(answers, correctAnswers);
    console.log(
      `${score} av ${correctAnswers.length} poeng. Resultat: ${JSON.stringify(
        results
      )}`
    );
  }

  return <button onClick={handleClick}>Send inn svar</button>;
}
