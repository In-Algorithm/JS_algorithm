const fs = require("fs");

const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");
const [n, m] = input[0].split(" ").map(Number);
const arr = input.slice(1, n + 1).map((line) => line.split(" ").map(Number));

// 누적합 계산
const dp = Array.from({ length: n + 1 }, () => Array(m + 1).fill(0));
for (let i = 1; i <= n; i++) {
  for (let j = 1; j <= m; j++) {
    dp[i][j] =
      arr[i - 1][j - 1] + dp[i - 1][j] + dp[i][j - 1] - dp[i - 1][j - 1];
  }
}

const k = Number(input[n + 1]);
for (let idx = n + 2; idx < n + 2 + k; idx++) {
  const [i, j, x, y] = input[idx].split(" ").map(Number);
  console.log(dp[x][y] - dp[i - 1][y] - dp[x][j - 1] + dp[i - 1][j - 1]);
}
