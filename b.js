const input = require("fs")
  .readFileSync("dev/stdin")
  .toString()
  .trim()
  .split("\n");

let distance = input[1].split(" ").map((v) => BigInt(v));
let cost = input[2].split(" ").map((v) => BigInt(v));
let min = Number.MAX_VALUE;

let answer = 0n;
for (let i = 0; i < cost.length; i++) {
  if (cost[i] < min) {
    min = cost[i];
  } else {
    cost[i] = min;
  }
}
for (let i = 0; i < distance.length; i++) {
  answer += distance[i] * cost[i];
}

console.log("test");
// '깃 테스트용1'
// '깃 테스트용2'
// '깃 테스트용3'
// '깃 테스트용4'
// '깃 테스트용5'
// '깃 테스트용6'
// '깃 테스트용7'
// '깃 테스트용8'
// '깃 테스트용9'
// '깃 테스트용10'
// '깃 테스트용11'
// '깃 테스트용12'
// '깃 테스트용13'
// '깃 테스트용14'
// '깃 테스트용15'
// '깃 테스트용16'
// '깃 테스트용17'
// '깃 테스트용18'
// '깃 테스트용19'
// '깃 테스트용20'
// '깃 테스트용21'
// '깃 테스트용22'
// '깃 테스트용22'

console.log(answer.toString());
