const fs = require("fs");

const [nmLine, numsLine] = fs
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");
const [n, m] = nmLine.split(" ").map(Number);
const nums = numsLine.split(" ").map(Number);

let start = 0,
  end = 0;
let total = 0;
let count = 0;

while (true) {
  if (total >= m) {
    total -= nums[start];
    start++;
  } else if (end === n) {
    break;
  } else {
    total += nums[end];
    end++;
  }

  if (total === m) {
    count++;
  }
}

console.log(count);
