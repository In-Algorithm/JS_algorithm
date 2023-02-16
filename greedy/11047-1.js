const input = require("fs")
  .readFileSync("dev/stdin")
  .toString()
  .trim()
  .split("\n");

let [num, sum] = input[0].split(" ");
const arr = input.splice(1).sort((a, b) => b - a);
let answer = 0;
for (let i of arr) {
  while (Number(sum) >= i) {
    sum -= i;
    answer++;
  }
  if (sum === 0) {
    return console.log(answer);
  }
}
