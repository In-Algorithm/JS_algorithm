const input = require("fs")
  .readFileSync("dev/stdin")
  .toString()
  .trim()
  .split("\n")
  .splice(1);

let cowTime = [];
for (let i of input) {
  let arrange = i.split(" ").map(Number);
  cowTime.push(arrange);
}

cowTime.sort((a, b) => a[0] - b[0]);
let answer = 0;
for (let time of cowTime) {
  let arriveTime = time[0];
  const checkTime = time[1];
  if (answer > arriveTime) {
    arriveTime = answer;
  }
  answer = arriveTime + checkTime;
}

console.log(answer);
