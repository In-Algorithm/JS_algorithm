let [a, b] = require("fs")
  .readFileSync("dev/stdin")
  .toString()
  .trim()
  .split(" ")
  .map((v) => +v);

let answer = -1;
const DFS = (A, B, cnt) => {
  if (A === B) {
    answer = cnt + 1;
    return;
  } else {
    if (A * 2 <= B) DFS(A * 2, B, cnt + 1);
    if (A * 10 + 1 <= B) DFS(A * 10 + 1, B, cnt + 1);
  }
};

DFS(a, b, 0);
console.log(answer);
