var fs = require("fs");
var input = fs.readFileSync("input.txt").toString().split(" ");

const prev = Number(input[0]);
const next = Number(input[1]);

if (prev > next) {
  console.log(">");
} else if (prev < next) {
  console.log("<");
} else {
  console.log("==");
}
