const { count } = require("console");

const input = require("fs")
  .readFileSync("dev/stdin")
  .toString()
  .trim()
  .split("\n")
  .map(Number);

const fibo = (n) => {
  if (n === 0) return [1, 0];
  if (n === 1) return [0, 1];

  let dp = Array(n + 1).fill([0, 0]);
  dp[0] = [1, 0];
  dp[1] = [0, 1];

  for (let i = 2; i <= n; i++) {
    dp[i][0] = dp[i - 1][0] + dp[i - 2][0];
    dp[i][1] = dp[i - 1][1] + dp[i - 2][1];
  }

  return dp[n];
};

for (let i = 1; i <= input[0]; i++) {
  console.log(fibo(input[i]));
}
