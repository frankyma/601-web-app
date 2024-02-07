import fToC from "./temperature-module.js";

document.addEventListener("DOMContentLoaded", () => {
  const inputElement = document.getElementById("temperature-input");
  const resultElement = document.getElementById("converted-result");
  const formElement = document.getElementById("temperature-form");

  function onConvert(e) {
    e.preventDefault();
    const fValue = Number(inputElement.value);

    const converted = fToC(fValue);
    resultElement.innerHTML = converted;
  }

  formElement.addEventListener("submit", onConvert);
});
