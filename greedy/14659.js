const input = require("fs")
  .readFileSync("dev/stdin")
  .toString()
  .trim()
  .split("\n")
  .splice(1);
let idx = 0;
let count = 0;
let maxValue = 0;
const arr = input.toString().trim().split(" ").map(Number);
for (let i = 1; i < arr.length; i++) {
  if (arr[idx] < arr[i]) {
    idx = i;
    count = 0;
  } else {
    count++;
    maxValue = Math.max(maxValue, count);
  }
}
console.log(maxValue);
