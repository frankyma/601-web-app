document.addEventListener("DOMContentLoaded", () => {
  const inputElement = document.getElementById("temperature-input");
  const resultElement = document.getElementById("converted-result");
  const convertElement = document.getElementById("convert-btn");

  function onConvert() {
    const fValue = Number(inputElement.value);
    const converted = ((fValue - 32) * 5) / 9;
    resultElement.innerHTML = converted;
  }

  convertElement.addEventListener("click", onConvert);
});
