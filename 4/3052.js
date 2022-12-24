const input = require("fs")
  .readFileSync("dev/stdin")
  .toString()
  .trim()
  .split("\n");
let answer = [];
for (let i of input) {
  if (answer.indexOf(Number(i) % 42) !== -1) {
    continue;
  }
  answer.push(Number(i) % 42);
}
console.log(answer.length);
