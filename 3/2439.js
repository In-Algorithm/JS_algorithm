const fs = require("fs");
const input = fs.readFileSync("input.txt").toString().trim();

let answer = "";
for (let i = 0; i < input; i++) {
  for (let j = input - 1; j > i; j--) {
    answer += " ";
  }
  for (let k = 0; k <= i; k++) {
    answer += "*";
  }
  answer += "\n";
}
console.log(answer);
