document.addEventListener("DOMContentLoaded", () => {
  const departInput = document.getElementById("depart");
  const returnInput = document.getElementById("return");
  const resultElement = document.getElementById("result");

  function onChange() {
    const departDate = departInput.valueAsDate;
    const returnDate = returnInput.valueAsDate;

    if (departDate && returnDate) {
      resultElement.innerHTML = "";
      const difference = returnDate.getTime() - departDate.getTime();

      const dayDifference = difference / (1000 * 60 * 60 * 24);
      if (dayDifference < 0) {
        resultElement.innerHTML =
          "It appears your dates are inverted, please correct";
      } else if (dayDifference > 365) {
        resultElement.innerHTML =
          "It appears your travel duration is greater than 1 year, please make sure your dates are correct";
      } else if (dayDifference > 30) {
        resultElement.innerHTML =
          "You have a 30+ day duration, please make sure your dates are correct";
      } else if (dayDifference === 0) {
        resultElement.innerHTML =
          "It appears you are coming back on the same day as your departure, please make sure your dates are correct";
      }
    }
  }

  departInput.addEventListener("change", onChange);

  returnInput.addEventListener("change", onChange);
});
