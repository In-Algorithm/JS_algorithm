const input = Number(require("fs").readFileSync("dev/stdin").toString().trim());

const getMinCoin = (n) => {
  const dp = Array(n).fill(0);
  dp[1] = -1;
  dp[2] = 1;
  dp[3] = -1;
  dp[4] = 2;
  dp[5] = 1;
  dp[6] = 3;
  dp[7] = 2;
  dp[8] = 4;
  dp[9] = 3;
  dp[10] = 2;
  for (let i = 11; i <= n; i++) {
    dp[i] = dp[i - 5] + 1;
  }
  return dp[n];
};

console.log(getMinCoin(input));
