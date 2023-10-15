const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");
let idx = 1;

const dx = [1, -1, 0, 0];
const dy = [0, 0, 1, -1];

function dfs(x, y, field, visited) {
  if (
    x < 0 ||
    y < 0 ||
    x >= field[0].length ||
    y >= field.length ||
    visited[y][x] ||
    field[y][x] === 0
  ) {
    return;
  }

  visited[y][x] = true;

  for (let i = 0; i < 4; i++) {
    dfs(x + dx[i], y + dy[i], field, visited);
  }
}

const T = parseInt(input[0]);

for (let t = 0; t < T; t++) {
  const [M, N, K] = input[idx++].split(" ").map(Number);
  const field = Array.from({ length: N }, () => Array(M).fill(0));
  const visited = Array.from({ length: N }, () => Array(M).fill(false));

  for (let k = 0; k < K; k++) {
    const [x, y] = input[idx++].split(" ").map(Number);
    field[y][x] = 1;
  }

  let count = 0;
  for (let i = 0; i < N; i++) {
    for (let j = 0; j < M; j++) {
      if (field[i][j] === 1 && !visited[i][j]) {
        dfs(j, i, field, visited);
        count++;
      }
    }
  }

  console.log(count);
}
