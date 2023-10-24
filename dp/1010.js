const input = require("fs")
  .readFileSync("dev/stdin")
  .toString()
  .trim()
  .split("\n");

const testCase = input.shift();

const factorial = (n) => {
  let dp = Array(n).fill(0);
  if (n == 0) {
    return 1;
  }
  if (n == 1) {
    return 1;
  }
  if (n == 2) {
    return 2;
  }
  dp[1] = 1;
  dp[2] = 2;
  for (let i = 3; i <= n; i++) {
    dp[i] = dp[i - 1] * i;
  }
  return dp[n];
};

for (let i = 0; i < testCase; i++) {
  const [n, m] = input.shift().split(" ").map(Number);
  const maxValue = Math.max(n, m);
  const minValue = Math.min(n, m);
  console.log(
    Math.round(
      factorial(maxValue) /
        (factorial(minValue) * factorial(maxValue - minValue))
    )
  );
}
