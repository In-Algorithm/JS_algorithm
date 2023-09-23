const fs = require("fs");

const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");
const n = 10; // 버섯의 개수는 항상 10개입니다.
const mushrooms = input.map(Number);

let total = 0;
for (let i = 0; i < n; i++) {
  // 현재 버섯을 먹은 경우의 점수를 계산
  if (Math.abs(100 - total) >= Math.abs(100 - (total + mushrooms[i]))) {
    total += mushrooms[i];
  } else {
    break;
  }
}

console.log(total);
