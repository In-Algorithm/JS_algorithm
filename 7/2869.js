const input = require("fs")
  .readFileSync("dev/stdin")
  .toString()
  .trim()
  .split(" ");

const goal = Number(input[2]);
const day = Number(input[0]);
const night = Number(input[1]);
const oneDay = day - night;
let left = Math.floor(day / oneDay);
let date = Math.floor(goal / oneDay);
let rest = goal % oneDay;

(date - 1) * oneDay + day > goal
  ? console.log("0", date - left + 1)
  : rest > 0
  ? console.log(date + 1)
  : console.log(date);
