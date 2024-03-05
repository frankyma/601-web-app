// the syntax is not valid javascript
// the correct syntax is:
let age = 0.0;

function checkAge() {
  if (age > 1.4 || age < 1.4) {
    return null;
  }
  return 1;
}

const result = checkAge();
console.log("🚀 ~ result:", result);
