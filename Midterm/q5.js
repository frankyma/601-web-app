const ntcPromise = new Promise((resolve, reject) => {
  setTimeout(function () {
    resolve("Jumping on my trauma. Already wear pajamas");
  }, 2000);
});

ntcPromise.then((data) => {
  console.log(data + " 11");
});

ntcPromise.then((data) => {
  console.log(data + " 22");
});

ntcPromise.then((data) => {
  console.log(data + " 33");
});

// Output will be:
// Jumping on my trauma. Already wear pajamas 11
// Jumping on my trauma. Already wear pajamas 22
// Jumping on my trauma. Already wear pajamas 33
