const input = require("fs")
  .readFileSync("dev/stdin")
  .toString()
  .trim()
  .split("\n")
  .splice(1)
  .toString()
  .split(" ")
  .map(Number)
  .sort((a, b) => a - b);
let answer = 0;
for (let i = 0; i < input.length - 1; i++) {
  answer += input[i];
}

console.log(answer);
