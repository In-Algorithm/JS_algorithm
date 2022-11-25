var fs = require("fs");
var input = fs.readFileSync("input.txt").toString().trim();

const year = Number(input);
const condition1 = year % 4 === 0;
const condition2 = year % 100 !== 0;
const condition3 = year % 400 === 0;

if (condition1 && (condition2 || condition3)) {
  console.log("1");
} else {
  console.log("0");
}
