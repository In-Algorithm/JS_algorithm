const input = require("fs")
  .readFileSync("dev/stdin")
  .toString()
  .trim()
  .split("\n");
const arr = input.splice(1, 1).toString().split(" ");
let max = arr[0];
let min = arr[0];
for (let i of arr) {
  if (max < Number(i)) {
    max = i;
  }
  if (min > Number(i)) {
    min = i;
  }
}

console.log(min, max);
