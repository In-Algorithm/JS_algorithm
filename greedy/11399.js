const [n, input] = require("fs")
  .readFileSync("dev/stdin")
  .toString()
  .trim()
  .split("\n");

const sortedArr = input.split(" ").sort((a, b) => a - b);
let answer = 0;
let prev = 0;
sortedArr.forEach((value) => {
  prev += Number(value);
  answer += prev;
});
console.log(answer);
