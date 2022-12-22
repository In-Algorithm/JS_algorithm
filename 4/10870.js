const input = require("fs")
  .readFileSync("input.txt")
  .toString()
  .trim()
  .split("\n");
let count = 0;
const arr = input.splice(1, 1).toString().split(" ");
const number = input[1];
for (let i of arr) {
  if (number === i) {
    count++;
  }
}

console.log(count);
