document.addEventListener("DOMContentLoaded", () => {
  const inputElement = document.getElementById("temperature-input");
  const resultElement = document.getElementById("converted-result");
  const formElement = document.getElementById("temperature-form");

  function onConvert(e) {
    e.preventDefault();
    const fValue = Number(inputElement.value);

    const converted = ((fValue - 32) * 5) / 9;
    resultElement.innerHTML = converted;
  }

  formElement.addEventListener("submit", onConvert);
});
