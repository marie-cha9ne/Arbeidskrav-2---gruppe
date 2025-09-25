export default function ResetButton() {
  function clearAnswers() {
    localStorage.removeItem("user-answers");
    window.location.replace(window.location.pathname);
  }

  return (
    <button type="button" onClick={clearAnswers} className="reset-button">
      Prøv på nytt
    </button>
  );
}
