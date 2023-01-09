const input = require("fs")
  .readFileSync("dev/stdin")
  .toString()
  .trim()
  .split("");

for (let i of input) {
  const regex = /[\{\}\*\?]/g;
  result = i.match(regex);
  console.log(result, i, input);
}
