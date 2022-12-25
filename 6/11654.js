const input = require("fs").readFileSync("dev/stdin").toString().trim();

let arr = [];
let answer = "";
for (let i = 0; i < 26; i++) {
  arr[i] = -1;
}
for (let i of input.toString().split("")) {
  const index = input.indexOf(i);
  // console.log(i.charCodeAt() - 97, index);
  arr[i.charCodeAt() - 97] = index;
}
for (let i = 0; i < 26; i++) {
  answer += arr[i] + " ";
}
console.log(answer);
