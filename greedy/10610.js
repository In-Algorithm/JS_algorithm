const input = require("fs").readFileSync("dev/stdin").toString().trim();

let arr = input.split("").sort((a, b) => b - a);
let answer = "";

if (!arr.includes("0")) {
  return console.log(-1);
}

for (let i of arr) {
  answer += i;
}

if (BigInt(answer) % BigInt(30) === BigInt(0)) {
  console.log(answer);
} else {
  console.log(-1);\
  
}
