const fs = require("fs");
const input = fs.readFileSync("input.txt").toString().split("\n");
const total = Number(input[0]);
const count = Number(input[1]);
input.splice(0, 2);
let sum = 0;

for (let i = 0; i < count; i++) {
  let [price, num] = input[i].split(" ");
  sum += Number(price) * Number(num);
}

if (total === sum) {
  console.log("Yes");
} else {
  console.log("No");
}
