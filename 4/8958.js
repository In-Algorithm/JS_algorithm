const input = require("fs")
  .readFileSync("dev/stdin")
  .toString()
  .trim()
  .split("\n");

input.splice(0, 1);
let continuous = 0;
let answer = 0;
for (let i of input) {
  for (let j of i) {
    if (j === "O") {
      continuous += 1;
    } else {
      continuous = 0;
    }
    answer += continuous;
  }
  console.log(answer);
  answer = 0;
  continuous = 0;
}
