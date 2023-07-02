function solve(n, l, problems) {
  problems.sort((a, b) => {
    if (a[1] <= l && b[1] > l) return -1;
    if (a[1] > l && b[1] <= l) return 1;
    if (a[0] > b[0]) return -1;
    if (a[0] < b[0]) return 1;
    return 0;
  });

  let score = 0;
  let time = 0;
  let hardCount = 0;

  for (let i = 0; i < n; i++) {
    if (problems[i][1] <= l - time) {
      score += 140;
      time += problems[i][1];
      hardCount++;
    } else if (problems[i][0] <= l - time) {
      score += 100;
      time += problems[i][0];
    }
  }

  score += Math.min(hardCount, l - time) * 40;

  return score;
}
const input = require("fs")
  .readFileSync("dev/stdin")
  .toString()
  .trim()
  .split("\n");
const [n, l] = input[0].split(" ").map(Number);
const problems = input.slice(1).map(line => line.split(" ").map(Number));

console.log(solve(n, l, problems));
