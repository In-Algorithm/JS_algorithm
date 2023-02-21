const input = require("fs")
  .readFileSync("dev/stdin")
  .toString()
  .trim()
  .split("\n");

let arr1 = input[1].split(" ").sort((a, b) => a - b);
let arr2 = input[2].split(" ").sort((a, b) => b - a);
let answer = 0;

for (let i = 0; i < input[0]; i++) {
  answer += arr1[i] * arr2[i];
}
console.log(answer);
