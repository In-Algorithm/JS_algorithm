const input = require("fs")
  .readFileSync("dev/stdin")
  .toString()
  .trim()
  .split("");
let arr = [];
for (let i of input) {
  console.log(i);
}
