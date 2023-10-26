const input = Number(require("fs").readFileSync("dev/stdin").toString().trim());

const getCountAandB = (n) => {
  const dp = Array.from(n).fill([0, 0]);
  dp[1] = [0, 1];
  dp[2] = [1, 1];
  for (let i = 3; i <= n; i++) {
    dp[i] = [dp[i - 1][1], dp[i - 1][0] + dp[i - 1][1]];
  }
  return dp[n].toString().replace(/,/g, " ");
};

console.log(getCountAandB(input));
