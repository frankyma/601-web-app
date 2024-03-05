document.addEventListener("DOMContentLoaded", () => {
  const textInput = document.getElementById("text");
  const resultElement = document.getElementById("result");

  function onAdd() {
    const rawText = textInput.value;
    const parsed = rawText.replace(/[^a-z]/gi, "");
    resultElement.innerHTML = `Result: ${parsed}`;
  }

  function onReset() {
    resultElement.innerHTML = "";
  }

  addBtn = document.getElementById("add-btn");
  addBtn.addEventListener("click", onAdd);

  resetBtn = document.getElementById("reset-btn");
  resetBtn.addEventListener("click", onReset);
});
