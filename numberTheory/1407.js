const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split(" ");
const a = parseInt(input[0]);
const b = parseInt(input[1]);

function calc(number) {
  if (number === 0) {
    return 0;
  } else if (number === 1) {
    return 1;
  } else if (number % 2 === 0) {
    return number / 2 + 2 * calc(number / 2);
  } else if (number % 2 === 1) {
    return number / 2 + 2 * calc(Math.floor(number / 2)) + 1;
  }
}

console.log(calc(b) - calc(a - 1));
