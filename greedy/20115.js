const input = require("fs")
  .readFileSync("dev/stdin")
  .toString()
  .trim()
  .split("\n");

const drinkCount = Number(input[0]);
const drinkAmount = input[1]
  .split(" ")
  .map(Number)
  .sort((a, b) => b - a);
let answer = drinkAmount[0];

for (let i = 1; i < drinkCount; i++) {
  answer += drinkAmount[i] / 2;
}

console.log(answer);
