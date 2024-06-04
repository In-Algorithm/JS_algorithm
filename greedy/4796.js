const input = require("fs")
  .readFileSync("dev/stdin")
  .toString()
  .trim()
  .split("\n");

input.pop();
answer = [];
for (let i of input) {
  const [L, P, V] = i.split(" ").map(Number);
  answer.push(Math.floor(V / P) * L + Math.min(V % P, L));
}

for (let i = 0; i < answer.length; i++) {
  console.log(`Case ${i + 1}: ${answer[i]}`);
}
