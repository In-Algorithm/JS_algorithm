const input = require("fs")
  .readFileSync("dev/stdin")
  .toString()
  .trim()
  .split("\n");

const teamCount = Number(input[0]);
let codingCapability = input[1]
  .split(" ")
  .map(Number)
  .sort((a, b) => a - b);

let teamCapabilities = [];
const solve = () => {
  for (let i = 0; i < teamCount; i++) {
    let teamCapability = 0;
    teamCapability += codingCapability.shift() + codingCapability.pop();
    teamCapabilities.push(teamCapability);
  }
  console.log(Math.min(...teamCapabilities));
};

solve();
