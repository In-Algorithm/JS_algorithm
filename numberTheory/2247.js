const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");
const N = parseInt(input[0]);

function counting_star(N) {
  const matrix = [];
  for (let i = 0; i < 3 * N.length; i++) {
    if (Math.floor(i / N.length) === 1) {
      matrix.push(N[i % N.length] + " ".repeat(N.length) + N[i % N.length]);
    } else {
      matrix.push(N[i % N.length].repeat(3));
    }
  }
  return matrix;
}

let star = ["***", "* *", "***"];
let k = 0;

while (N !== 3) {
  N = Math.floor(N / 3);
  k += 1;
}

for (let i = 0; i < k; i++) {
  star = counting_star(star);
}

for (let i = 0; i < star.length; i++) {
  console.log(star[i]);
}
