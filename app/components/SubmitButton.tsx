"use client";
import "../tasks/tasks.css";
import { useAnswerStore } from "../store/useAnswerStore";
import { SubmiButtonProps } from "../data/types";

export default function SubmitButton({ onSubmit }: SubmiButtonProps) {
  //Henter kun ut svarene til brukeren for å slippe re-rendring av hele storen
  const answers = useAnswerStore((state) => state.answers);

  function handleClick() {
    onSubmit();
  }

  return (
    <button onClick={handleClick} className="submit-button">
      Send inn svar
    </button>
  );
}
