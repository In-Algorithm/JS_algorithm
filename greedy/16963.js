const input = require("fs")
  .readFileSync("dev/stdin")
  .toString()
  .trim()
  .split(" ");

let startNum = Number(input[0]);
let endNum = Number(input[1]);
let count = 0;
console.log(startNum, endNum);
while (startNum !== endNum) {
  startNum *= 2;
  count++;
  console.log("test", startNum, endNum, count);
  if (count > 10) {
    return;
  }
}

console.log(count);
