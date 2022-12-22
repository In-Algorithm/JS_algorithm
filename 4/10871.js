const input = require("fs")
  .readFileSync("input.txt")
  .toString()
  .trim()
  .split("\n");

const maxNum = Number(input[0].toString().split(" ")[1]);
const arr = input.splice(1, 1).toString().split(" ");
let answer = "";
for (let i of arr) {
  if (Number(i) < maxNum) {
    answer += i + " ";
  }
}
console.log(answer);
