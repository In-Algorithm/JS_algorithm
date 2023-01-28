const input = require("fs")
  .readFileSync("dev/stdin")
  .toString()
  .trim()
  .split("\n");
const count = input[0];
let weights = input.splice(1).sort((a, b) => b - a);
let answer = 0;
for (let i = count; i > 0; i--) {
  Number(weights[i - 1]) * i >= answer
    ? (answer = Number(weights[i - 1]) * i)
    : answer;
}

console.log(answer);
