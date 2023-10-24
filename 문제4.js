function solution(total_sp, skills) {
  const higherSkill = Array.from(Array(skills.length + 2), () => []);
  const graph = Array.from(Array(skills.length + 2), () => []);
  let skill_multiple = [];
  for (let [x, y] of skills) {
    graph[x].push(y);
    higherSkill[y].push(x);
  }
  console.log("graph", graph);
  console.log("higherSkill", higherSkill);

  let highestSkillNode = -1;
  for (let i = 1; i < higherSkill.length; i++) {
    if (higherSkill[i].length === 0) {
      highestSkillNode = i;
      break;
    }
  }
  function dfs(node) {
    let sum = 0;
    if (graph[node].length === 0) {
      sum = 1;
    }
    for (const num of graph[node]) {
      sum += dfs(num);
    }

    skill_multiple[node] = sum;

    return sum;
  }
  dfs(highestSkillNode);
  const skillPointSum = skill_multiple.reduce((accumulator, currentValue) => {
    return accumulator + currentValue;
  }, 0);

  const factor = total_sp / skillPointSum;
  const result = [];
  for (let i = 1; i < skill_multiple.length; i++) {
    result[i - 1] = skill_multiple[i] * factor;
  }
  return result;
}

console.log(
  solution(121, [
    [1, 2],
    [1, 3],
    [3, 6],
    [3, 4],
    [3, 5],
  ])
);
