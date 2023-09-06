const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");
const n = Number(input[0]);
const numbers = input[1].split(" ").map(Number);
let sosu = 0;
for (let num of numbers) {
  let error = 0;
  if (num > 1) {
    for (let i = 2; i < num; i++) {
      if (num % i === 0) {
        error += 1;
      }
    }
    if (error === 0) {
      sosu += 1;
    }
  }
}
console.log(sosu);
