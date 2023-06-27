const input = require("fs")
  .readFileSync("dev/stdin")
  .toString()
  .trim()
  .split("\n")
  .splice(1)
  .toString()
  .split(" ")
  .map(Number);

let answer = 0;
let before = -1;

for (let milk of input) {
  if (milk === 0 && before === 2) {
    answer++;
    before = milk;
    continue;
  }
  if (milk - 1 === before) {
    answer++;
    before = milk;
  }
}

console.log(answer);
