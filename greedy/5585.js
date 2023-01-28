const input = Number(require("fs").readFileSync("dev/stdin").toString().trim());

const change = [500, 100, 50, 10, 5, 1];
let answer = 0;
let total = 1000 - input;
for (let i of change) {
  while (i <= total) {
    total -= i;
    answer++;
  }
}

console.log(answer);
