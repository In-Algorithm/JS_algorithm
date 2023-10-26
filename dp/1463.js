const input = require("fs").readFileSync("dev/stdin").toString().trim();

const functionDP = (n) => {
  const dp = Array.from(n).fill(0);
  dp[1] = 0;
  dp[2] = 1;
  dp[3] = 1;
  for (let i = 4; i <= n; i++) {
    const case1 = i % 3 == 0 ? dp[i / 3] + 1 : Number.POSITIVE_INFINITY;
    const case2 = i % 2 == 0 ? dp[i / 2] + 1 : Number.POSITIVE_INFINITY;
    const case3 = dp[i - 1] + 1;
    const minNum = Math.min(case1, case2, case3);
    dp[i] = minNum;
  }
  return dp[n];
};

console.log(functionDP(input));
