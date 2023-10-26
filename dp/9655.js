const input = Number(require("fs").readFileSync("dev/stdin").toString().trim());

const getStone = (n) => {
  const dp = Array(n + 1).fill(false);
  if (n === 1) return "SK";
  if (n === 2) return "CY";
  dp[1] = true;
  dp[2] = false;
  for (let i = 3; i <= n; i++) {
    dp[i] = !dp[i - 1];
  }
  return dp[n] ? "SK" : "CY";
};

console.log(getStone(input));
