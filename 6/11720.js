const input = require("fs")
  .readFileSync("dev/stdin")
  .toString()
  .trim()
  .split("\n");

input.splice(0, 1);
let sum = 0;
const arr = input.toString().split("");
for (let i of arr) {
  sum += Number(i);
}

console.log(sum);
