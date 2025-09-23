"use client";

import { useAnswerStore } from "../store/useAnswerStore";
import { SubmiButtonProps } from "../data/types";

export default function SubmitButton({ onSubmit }: SubmiButtonProps) {
  //Henter kun ut svarene til brukeren for å slippe re-rendring av hele storen
  const answers = useAnswerStore((state) => state.answers);

  function handleClick() {
    onSubmit();
  }

  return <button type="button" onClick={handleClick}>Send inn svar</button>;
}
