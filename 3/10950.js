const fs = require("fs");
const input = fs.readFileSync("input.txt").toString().split("\n");

for (let arr of input) {
  const x = Number(arr.toString().split(" ")[0]);
  const y = Number(arr.toString().split(" ")[1]);
  if (y) {
    console.log(x + y);
  }
}
