const input = require("fs")
  .readFileSync("dev/stdin")
  .toString()
  .trim()
  .split("\n");

let answer = [];
for (let i = 1; i <= 30; i++) {
  answer.push(i);
}
for (let i of input) {
  const index = answer.indexOf(Number(i));
  answer.splice(index, 1);
}
for (let i of answer) {
  console.log(i);
}
