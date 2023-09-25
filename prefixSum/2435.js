const fs = require("fs");

const [nkLine, tempsLine] = fs
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");
const [n, k] = nkLine.split(" ").map(Number);
const temps = tempsLine.split(" ").map(Number);

// 연속된 k일 동안의 기온 합을 계산
const sums = [];
for (let i = 0; i <= n - k; i++) {
  let sum = 0;
  for (let j = 0; j < k; j++) {
    sum += temps[i + j];
  }
  sums.push(sum);
}

console.log(Math.max(...sums));
