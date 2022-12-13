var fs = require("fs");
var input = fs
  .readFileSync("input.txt")
  .toString()
  .split("\n")[0]
  .toString()
  .split(" ");
var hour = Number(input[0]);
var minute = Number(input[1]);
var timer = Number(fs.readFileSync("input.txt").toString().split("\n")[1]);
let leftTime = minute + timer;
let result_hour = 0;
let result_minute = 0;
let count = 0;

if (leftTime < 60) {
  return console.log(hour, minute + timer);
}

do {
  count++;
  result_hour += 1;
  result_minute = minute + timer - 60 * count;
  leftTime -= 60;
} while (leftTime >= 60);
console.log(
  hour + result_hour >= 24 ? hour + result_hour - 24 : hour + result_hour,
  result_minute
);
