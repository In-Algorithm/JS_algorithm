const input = require("fs")
  .readFileSync("dev/stdin")
  .toString()
  .trim()
  .split("\n")
  .splice(1)
  .sort((a, b) => a - b);
let answer = 0;
const sol = (n, list) => {
  for (let i = 0; i < n - 1; i++) {
    let card1 = list.shift();
    let card2 = list.shift();
    let sum = Number(card1) + Number(card2);
    answer += sum;
    list.unshift(sum);
  }
};
sol(input.length, input);

console.log(answer);
