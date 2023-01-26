const input = require("fs")
  .readFileSync("dev/stdin")
  .toString()
  .trim()
  .split("\n")
  .splice(1);

const arr1 = input[0].split(" ").sort((a, b) => a - b);
const arr2 = input[1].split(" ").sort((a, b) => b - a);
let answer = 0;
arr1.forEach((value, i) => (answer += Number(value) * Number(arr2[i])));
console.log(answer);
