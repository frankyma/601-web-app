import fToC from "./temperature-module.js";

document.addEventListener("DOMContentLoaded", () => {
  const resultElement = document.getElementById("converted-result");
  const formElement = document.getElementById("temperature-form");

  function onSubmit(e) {
    e.preventDefault();
    const formData = new FormData(e.target);
    const tempInput = Number(formData.get("temperature-input"));

    const converted = fToC(tempInput);
    resultElement.innerHTML = converted;
  }

  formElement.addEventListener("submit", onSubmit);
});
