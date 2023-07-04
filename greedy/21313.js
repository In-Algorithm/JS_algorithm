const input = require("fs")
  .readFileSync("dev/stdin")
  .toString()
  .trim()
  .split("\n");

let N = parseInt(input[0]);

let result = [];
for (let i = 1; i <= N; i++) {
  if (i % 2 === 1) {
    result.push(1);
  } else {
    result.push(2);
  }
}

if (N % 2 === 1) {
  result[N - 1] = 1;
}

console.log(result.join(" "));
