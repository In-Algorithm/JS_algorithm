const input = require("fs")
  .readFileSync("dev/stdin")
  .toString()
  .trim()
  .split("\n")
  .splice(1);
let arr = [];
let prev = "";
let count = 0;
let dontCount = false;
const resetArr = () => {
  for (let i = 0; i < 26; i++) {
    arr[i] = true;
  }
  dontCount = false;
};

for (let i of input) {
  resetArr();
  for (let j of i) {
    if (arr[j.charCodeAt() - 97] || prev === j) {
      prev = j;
      arr[j.charCodeAt() - 97] = false;
    } else {
      arr[j.charCodeAt() - 97] = false;
      dontCount = true;
    }
  }
  if (!dontCount) {
    count++;
  }
}
console.log(count);
