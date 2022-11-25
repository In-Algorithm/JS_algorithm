var fs = require("fs");
var input = fs.readFileSync("input.txt").toString().trim();

const score = Number(input);
switch (Math.floor(score / 10)) {
  case 10:
    console.log("A");
    break;
  case 9:
    console.log("A");
    break;
  case 8:
    console.log("B");
    break;
  case 7:
    console.log("C");
    break;
  case 6:
    console.log("D");
    break;
  default:
    console.log("F");
    break;
}
