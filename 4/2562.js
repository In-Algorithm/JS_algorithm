const input = require("fs")
  .readFileSync("dev/stdin")
  .toString()
  .trim()
  .split("\n");

let max = 0;
let index = 0;
for (let i of input) {
  if (max < Number(i)) {
    max = i;
    index = input.indexOf(i) + 1;
  }
}
console.log(max);
console.log(index);
