const input = require("fs")
  .readFileSync("dev/stdin")
  .toString()
  .trim()
  .split("\n");

const n = parseInt(input[0]);
const triangle = input
  .slice(1, n + 1)
  .map((line) => line.split(" ").map(Number));

// DP 테이블 초기화
const dp = Array.from({ length: n }, () => Array(n).fill(0));
dp[0][0] = triangle[0][0];

// DP를 사용하여 문제 해결
for (let i = 1; i < n; i++) {
  for (let j = 0; j <= i; j++) {
    if (j === 0) {
      dp[i][j] = dp[i - 1][j] + triangle[i][j];
    } else if (j === i) {
      dp[i][j] = dp[i - 1][j - 1] + triangle[i][j];
    } else {
      dp[i][j] = Math.max(dp[i - 1][j - 1], dp[i - 1][j]) + triangle[i][j];
    }
  }
}

console.log(Math.max(...dp[n - 1]));
