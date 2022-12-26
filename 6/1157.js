const input = require("fs")
  .readFileSync("dev/stdin")
  .toString()
  .trim()
  .split("");
let arr = [];
for (let i = 0; i < 26; i++) {
  arr[i] = 0;
}
for (let i of input) {
  index = i.charCodeAt() - 65;
  if (i.charCodeAt() >= 97) {
    index = i.charCodeAt() - 97;
  }
  arr[index] += 1;
}
const max = Math.max.apply(null, arr);
const maxNum = arr.indexOf(max);
const hasMaxNumTwice = arr.indexOf(max, maxNum + 1);
hasMaxNumTwice !== -1
  ? console.log("?")
  : console.log(String.fromCharCode(maxNum + 65));
