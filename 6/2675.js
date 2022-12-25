const input = require("fs")
  .readFileSync("dev/stdin")
  .toString()
  .trim()
  .split("\n")
  .splice(1);
let answer = "";
for (let i of input) {
  const repeat = Number(i.toString().split(" ")[0]);
  const str = i.toString().split(" ")[1];
  for (let j of str) {
    for (let k = 0; k < repeat; k++) {
      answer += j;
    }
  }
  answer += "\n";
}
console.log(answer);
