const input = require("fs")
  .readFileSync("dev/stdin")
  .toString()
  .trim()
  .split("-");

let answer = 0;
let isFirst = true;
for (let i of input) {
  let basket = 0;
  for (let j of i.split("+")) {
    basket += Number(j);
  }
  isFirst ? (answer += basket) : (answer -= basket);
  isFirst = false;
}
console.log(answer);
