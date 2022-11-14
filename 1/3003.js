let fs = require("fs");
let input = fs.readFileSync("input.txt").toString().split(" ");
let arr = [1, 1, 2, 2, 2, 8];
let answer = "";
for (let i = 0; i < input.length; i++) {
  answer += arr[i] - input[i] + " ";
}
console.log(answer);
