const input = require("fs")
  .readFileSync("dev/stdin")
  .toString()
  .trim()
  .split("\n");

let N = parseInt(input[0]);
let A = input[1].split(" ").map(Number);

let cards = [];
for (let i = 0; i < N; i++) {
  if (A[i] > cards.length + 1) continue;
  let left = 0,
    right = cards.length;
  while (left < right) {
    let mid = Math.floor((left + right) / 2);
    if (cards[mid] < A[i]) {
      left = mid + 1;
    } else {
      right = mid;
    }
  }
  if (left == cards.length) {
    cards.push(A[i]);
  } else {
    cards[left] = A[i];
  }
}

console.log(N - cards.length);
