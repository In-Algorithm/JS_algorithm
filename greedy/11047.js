const input = require("fs")
  .readFileSync("dev/stdin")
  .toString()
  .trim()
  .split("\n");
let [count, total] = input[0].split(" ");
let answer = 0;
const sortedArr = input.splice(1).sort((a, b) => b - a);

for (let i of sortedArr) {
  while (total - i >= 0) {
    answer++;
    total -= i;
  }
  if (total === 0) {
    console.log(answer);
    return;
  }
}
