const input = require("fs").readFileSync("dev/stdin").toString().trim();

const arr = input.toString().split("-");

let answer = 0;
let isMinus = arr == input;
for (let i of arr) {
  if (i.includes("+") && !isMinus) {
    let arr2 = i.toString().split("+");
    for (let j of arr2) {
      answer -= Number(j);
    }
    continue;
  }
  if (isMinus) {
    let arr2 = i.toString().split("+");
    for (let j of arr2) {
      answer += Number(j);
    }
    continue;
  }
  answer += Number(i);
}
console.log(answer);
