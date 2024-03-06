document.addEventListener("DOMContentLoaded", () => {
  const textInput = document.getElementById("text");
  const resultElement = document.getElementById("result");

  let letters = [];
  function onAdd() {
    const rawText = textInput.value;
    const parsed = rawText.replace(/[^a-z]/gi, "");
    parsed.split("").forEach((letter) => {
      if (!letters.includes(letter)) {
        letters.push(letter);
      }
    });

    resultElement.innerHTML = `Result: ${letters.join(", ")}`;
  }

  function onReset() {
    letters = [];
    textInput.value = "";
    resultElement.innerHTML = "";
  }

  addBtn = document.getElementById("add-btn");
  addBtn.addEventListener("click", onAdd);

  resetBtn = document.getElementById("reset-btn");
  resetBtn.addEventListener("click", onReset);
});
