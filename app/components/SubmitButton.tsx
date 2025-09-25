"use client";
import "../tasks/tasks.css";
import { SubmiButtonProps } from "../data/types";

export default function SubmitButton({ onSubmit }: SubmiButtonProps) {
  function handleClick() {
    onSubmit();
  }

  return (
    <button type="button" onClick={handleClick} className="submit-button">
      Send inn svar
    </button>
  );
}
