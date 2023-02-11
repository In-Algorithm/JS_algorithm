const input = require("fs").readFileSync("dev/stdin").toString().trim();

let arr = [];
let element = "";

for (let i = 0; i < input.length; i++) {
  if (i === 0) {
    element += input[0];
  } else if (input[i] === input[i - 1]) {
    element += input[i];
  } else {
    arr.push(element);
    element = "";
    element += input[i];
  }
  if (i === input.length - 1) {
    arr.push(element);
  }
}
let leng = arr.length;
if (leng % 2 === 0) {
  console.log(leng / 2);
} else {
  console.log((leng - 1) / 2);
}
