const fs = require("fs");
const input = fs.readFileSync("input.txt").toString().split("\n");
const max = input[0];
let answer = "";
for (let i = 1; i <= max; i++) {
  const a = input[i].split(" ")[0];
  const b = input[i].split(" ")[1];
  answer += `Case #${i}: ` + (Number(a) + Number(b)) + "\n";
}
console.log(answer);
