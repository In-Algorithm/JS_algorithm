const input = require("fs")
  .readFileSync("dev/stdin")
  .toString()
  .trim()
  .split("");

let time = 0;
let currentPos = "A".charCodeAt(0);

for (let i = 0; i < input.length; i++) {
  let nextPos = input[i].charCodeAt(0);
  let clockWise = Math.abs(nextPos - currentPos);
  let counterClockWise = 26 - clockWise;
  time += Math.min(clockWise, counterClockWise);
  currentPos = nextPos;
}

console.log(time);
