const input = require("fs").readFileSync("dev/stdin").toString().trim();
const N = parseInt(input);

let count = 0;

for (let a = 2; a < N; a += 2) {
  for (let b = 1; b < N; b++) {
    let c = N - a - b;
    if (c > b + 1) {
      if (a > 0 && b > 0 && c > 0) {
        count++;
      }
    }
  }
}

console.log(count);
