const k = 10;
const eightBall = "grilled cheese";

for (let i = 1; i < k; i++) {
  const listElement = document.createElement("li");
  listElement.innerHTML = `I'd like to have tomatoes with my ${eightBall} and a slice of avocado on the side, please.`;
  document.getElementById("output").appendChild(listElement);
}
