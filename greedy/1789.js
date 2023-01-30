const input = require("fs").readFileSync("dev/stdin").toString().trim();

let sum = Number(input);
let answer = 0;
while (((answer + 1) * answer) / 2 < sum) {
  answer++;
}
if ((answer * (answer - 1)) / 2 + answer > sum) {
  answer--;
}
console.log(answer);
