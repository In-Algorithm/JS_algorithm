const input = require("fs")
  .readFileSync("dev/stdin")
  .toString()
  .trim()
  .split("\n");

const line = input[1].split(" ").map(Number);
const sortLine = line.sort((a, b) => a - b);
let ans = 0;
let prev = 0;

sortLine.forEach((l) => {
  prev += l;
  ans += prev;
});

console.log(ans);

// const fs = require("fs");
// const [n, input] = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

// const answer = input
//   .split(" ")
//   .sort((a, b) => a - b)
//   .reduce((acc, cur, i) => acc + cur * (n - i), 0);

// console.log(answer);
