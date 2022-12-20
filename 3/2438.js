const fs = require("fs");
const input = fs.readFileSync("input.txt").toString().trim();
let answer = "";
for (let i = 0; i < input; i++) {
  for (let j = 0; j <= i; j++) {
    answer += "*";
  }
  answer += "\n";
}
console.log(answer);
