var fs = require("fs");
var input = fs.readFileSync("input.txt").toString().split(" ");

let hour = input[0];
let minute = input[1];

if (minute >= 45) {
  console.log(hour, minute - 45);
} else {
  console.log(hour == 0 ? 23 : hour - 1, 60 - (45 - minute));
}
