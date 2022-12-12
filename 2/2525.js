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
let result_hour = -1;
let result_minute = -1;
let count = 0;

do {
  count++;
  result_hour += 1;
  result_minute = 60 * count - (minute + timer);
  leftTime -= 60;
} while (leftTime >= 60);

if (result_hour !== -1 && result_minute !== -1) {
  console.log(
    hour + result_hour >= 24 ? hour + result_hour - 24 : hour + result_hour,
    result_minute
  );
} else {
  console.log(hour, minute + timer);
}
