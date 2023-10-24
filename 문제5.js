function dfs(current, destination, maxFuel, visited, graph) {
  if (current === destination) return maxFuel;
  visited[current] = true;
  let minFuel = Number.MAX_SAFE_INTEGER;
  for (const [next, fuel] of graph[current]) {
    if (!visited[next]) {
      const newMaxFuel = Math.max(fuel, maxFuel);
      const result = dfs(next, destination, newMaxFuel, visited, graph);
      minFuel = Math.min(minFuel, result);
    }
  }
  visited[current] = false;
  return minFuel;
}
function solution(n, route) {
  const graph = Array.from(Array(n + 1), () => Array());

  for (const [start, destination, fuel] of route) {
    graph[start].push([destination, fuel]);
    graph[destination].push([start, fuel]);
  }
  const visited = Array(n + 1).fill(false);
  return dfs(1, n, 0, visited, graph);
}

const route = [
  [1, 2, 1],
  [1, 3, 4],
  [2, 3, 2],
];
let result1 = solution(3, route);
console.log("result1", result1);

// let result2 = solution(123456789, 12345);
// console.log("result2", result2);
