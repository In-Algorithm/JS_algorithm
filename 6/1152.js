const input = require("fs")
  .readFileSync("dev/stdin")
  .toString()
  .trim()
  .split(" ");

let count = 0;
for (let i of input) {
  if (i !== "") {
    count++;
  }
}

console.log(count);
