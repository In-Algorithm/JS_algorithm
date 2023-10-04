const fs = require("fs");

const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");
const nums = input[1].split(" ").map(Number);

let total = nums.reduce((acc, curr) => acc + curr, 0);
let result = 0;

for (let num of nums) {
  total -= num;
  result += num * total;
}

console.log(result);
