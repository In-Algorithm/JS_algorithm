const input = require("fs")
  .readFileSync("dev/stdin")
  .toString()
  .trim()
  .split(" ");
let biggestNum = 0;
for (let i of input) {
  const reverse = i.split("").reverse().join("");
  if (biggestNum < Number(reverse)) {
    biggestNum = reverse;
  }
}
console.log(biggestNum);
