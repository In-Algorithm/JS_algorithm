const input = require("fs")
  .readFileSync("dev/stdin")
  .toString()
  .trim()
  .split("\n");

const length = input[0];
let max = 0;
let sum = 0;
const arr = input.splice(1, 1).toString().split(" ");

for (let i of arr) {
  if (max < Number(i)) {
    max = Number(i);
  }
  sum += Number(i);
}
console.log(parseFloat((sum / length / max) * 100));
