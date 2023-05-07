const input = require("fs")
  .readFileSync("dev/stdin")
  .toString()
  .trim()
  .split("\n");

let arr = input[1].split(" ").map(x => parseInt(x));
arr.sort((a, b) => a - b);

let answer = 0;
let total = 0;
for (let i of arr) {
  total += i;
  answer += total;
}
console.log(answer);
