const input = require("fs")
  .readFileSync("dev/stdin")
  .toString()
  .trim()
  .split("\n")
  .splice(1);

const arr = input
  .toString()
  .split(" ")
  .sort((a, b) => a - b);

let answer = 0;
let prev = 0;
for (let i of arr) {
  prev += Number(i);
  answer += prev;
}
console.log(answer);
