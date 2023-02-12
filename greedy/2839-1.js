const input = require("fs").readFileSync("dev/stdin").toString().trim();

let answer = 0;
let quotient = Math.floor(input / 5);

// 5가 포함
for (let i = quotient; i >= 0; i--) {
  let sum = input;
  if ((sum - i * 5) % 3 === 0) {
    sum -= i * 5;
    while (sum >= 3) {
      answer++;
      sum -= 3;
    }
    return console.log(answer + i);
  }
}

if (input % 3 === 0) {
  return console.log(input / 3);
}
// 둘다 안포함
console.log("-1");
