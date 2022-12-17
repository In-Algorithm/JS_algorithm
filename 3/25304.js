const fs = require("fs");
const input = fs.readFileSync("input.txt").toString().split("\n");
const total = input[0];
const count = input[1];
let sum = 0;

for (let i of input) {
  if (total === i || count === i) {
    continue;
  }
  const amount = Number(i.toString().split(" ")[0]);
  const num = Number(i.toString().split(" ")[1]);
  sum += amount * num;
}
if (total == sum) {
  console.log("Yes");
} else {
  console.log("No");
}
