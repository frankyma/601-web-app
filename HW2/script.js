const zodiacLookup = [
  {
    name: "monkey",
    description:
      "People born in the year of the monkey, the ninth Chinese zodiac, are well rounded and fun; they will be the sun in a cloudy day. In addition, they are intelligent and witty; also, just like the rat they are deep thinkers.",
  },
  {
    name: "rooster",
    description:
      "The Rooster is often regarded as a symbol of perseverance, hard work, punctuality, timekeeping, and being alert. People born in the year of Rooster are usually self-assured, confident, and ambitious.",
  },
  {
    name: "dog",
    description:
      "People born in the Year of the Dog possess the best traits of human nature. They have a deep sense of loyalty, are honest, and inspire other people´s confidence because they know how to keep secrets.",
  },
  {
    name: "pig",
    description:
      "People born in the year of the pig are innocent, and they enjoy happiness. They are laid-back, caring, considerate, and kind, which makes them the best friends to have. Unfortunately, no one is perfect.",
  },
  {
    name: "rat",
    description:
      "As the first animal in the cycle, the rat is believed to usher in a period of new beginnings. Those born in the year are considered to be smart, quick-witted, flexible, adaptable, and outgoing.",
  },
  {
    name: "ox",
    description:
      "The ox symbolizes diligence and patience. The people with this age have progressed steadily and owns persistent strength. They are very determined but stubborn.",
  },
  {
    name: "tiger",
    description:
      "The tiger is associated with power, rebellion, adventure and unpredictability. People born in the Year of the Tiger are characterized as having strong ethics and following their passions.",
  },
  {
    name: "rabbit",
    description:
      "People born in the Year of the Rabbit are believed to be quiet, kind, polite, restrained and thoughtful. They also tend to hesitate and wait, proceeding with caution or reservation, which can cause them to miss opportunities.",
  },
  {
    name: "dragon",
    description:
      "Throughout Chinese history, the dragon has represented good luck, justice, prosperity and strength. People born in the year of the dragon are seen as charismatic, intelligent, confident, powerful, naturally lucky and gifted.",
  },
  {
    name: "snake",
    description:
      "In Chinese zodiac, the snake is associated with wisdom, charm, elegance, and transformation. People born in the Year of the Snake are believed to be intuitive, strategic, and intelligent.",
  },
  {
    name: "horse",
    description:
      "Power, beauty, and freedom symbolize the horse in the Chinese culture. People born in the year of the horse are very high-spirited, active and energetic.",
  },
  {
    name: "sheep",
    description:
      "In China, the sheep symbolizes peace and prosperity. People in this year are soft, creative, and artistic. They do tend to be shy and reserved, but they can stand up for themselves.",
  },
];

document.addEventListener("DOMContentLoaded", () => {
  const imgElement = document.getElementById("zodiac-img");
  const numberElement = document.getElementById("year");
  const nameElement = document.getElementById("name");
  const descriptionElement = document.getElementById("description");

  function onGet() {
    const year = Number(numberElement.value);
    const { name, description } = zodiacLookup[year % 12];
    imgElement.src = `images/${name}.jpg`;
    nameElement.innerHTML = name;
    descriptionElement.innerHTML = description;
  }

  addBtn = document.getElementById("add-btn");
  addBtn.addEventListener("click", onGet);

  function onReset() {
    numberElement.value = undefined;
    imgElement.src = "images/template.jpg";
    nameElement.innerHTML = "";
    descriptionElement.innerHTML = "";
  }

  addBtn = document.getElementById("reset-btn");
  addBtn.addEventListener("click", onReset);
});
