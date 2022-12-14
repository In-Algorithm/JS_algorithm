const fs = require("fs");
const input = fs.readFileSync("input.txt").toString().split(" ");
const num1 = Number(input[0]);
const num2 = Number(input[1]);
const num3 = Number(input[2]);
let count = 1;
let sameNum = 0;
let bigNum = 0;
const isSameCount = () => {
  if (num1 === num2) {
    count++;
    sameNum = num1;
  }
  if (num1 === num3) {
    count++;
    sameNum = num1;
  }
  if (num2 === num3) {
    count++;
    sameNum = num2;
  }
};
const biggestNum = () => {
  input.sort();
  bigNum = input[2];
};
isSameCount();
biggestNum();
if (count >= 3) {
  console.log(10000 + sameNum * 1000);
} else if (count >= 2) {
  console.log(1000 + sameNum * 100);
} else {
  console.log(bigNum * 100);
}
