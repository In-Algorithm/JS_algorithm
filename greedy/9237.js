const input = require("fs")
  .readFileSync("dev/stdin")
  .toString()
  .trim()
  .split("\n");
const totalDate = Number(input[0]);
const treeSize = input[1]
  .split(" ")
  .map(Number)
  .sort((a, b) => b - a);

let result = 0;
for (let i = 0; i < totalDate; i++) {
  result = Math.max(result, treeSize[i] + i + 1);
}
result += 1;
console.log(result);
