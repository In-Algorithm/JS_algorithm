const input = require("fs").readFileSync("dev/stdin").toString().trim().split();

let arr = [];
for (let i = 0; i < 26; i++) {
  arr.push(-1);
}
for (let i of input.toString().split("")) {
  console.log(input, i);
  const index = input.indexOf(Number(i));
  console.log(index);
  // arr[Number(i) - 97] = index;
}

console.log(arr[0]);
