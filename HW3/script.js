document.addEventListener("DOMContentLoaded", () => {
  const inputElement = document.getElementById("temperature-input");
  const resultElement = document.getElementById("converted-result");
  const convertElement = document.getElementById("convert-btn");

  function onConvert() {
    const rawValue = inputElement.value;
    const fValue = Number(inputElement.value);
    if (rawValue === "") {
      resultElement.innerHTML = "";
    } else if (fValue < -250 || fValue > 250) {
      resultElement.innerHTML = "Please input value in range";
    } else {
      const converted = ((fValue - 32) * 5) / 9;
      resultElement.innerHTML = converted;
    }
  }

  convertElement.addEventListener("click", onConvert);
});
