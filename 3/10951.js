const input = require("fs")
  .readFileSync("input.txt")
  .toString()
  .trim()
  .split("\n");
for (let i of input) {
  const a = i.toString().split(" ")[0];
  const b = i.toString().split(" ")[1];
  console.log(Number(a) + Number(b));
}
