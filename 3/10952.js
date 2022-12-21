const fs = require("fs");
const input = fs.readFileSync("input.txt").toString().trim().split("\n");

for (let i = 0; i < input.length - 1; i++) {
  const a = Number(input[i].toString().split(" ")[0]);
  const b = Number(input[i].toString().split(" ")[1]);
  console.log(a + b);
}
