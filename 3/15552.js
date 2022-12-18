const fs = require("fs");
const input = fs.readFileSync("input.txt").toString().split("\n");
input.splice(0, 1);
let answer = "";
for (let i of input) {
  const a = i.toString().split(" ")[0];
  const b = i.toString().split(" ")[1];
  answer += Number(a) + Number(b) + "\n";
}
console.log(answer);
