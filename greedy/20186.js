const input = require("fs")
  .readFileSync("dev/stdin")
  .toString()
  .trim()
  .split("\n");

const count = Number(input[0].split(" ")[1]);
const randomNumber = input[1]
  .split(" ")
  .map(Number)
  .sort((a, b) => b - a);
let answer = 0;
for (let i = 0; i < count; i++) {
  answer += randomNumber[i] - i;
}

console.log(answer);
