const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("");
let k = parseInt(input.join(""));
let j = [];

for (let i = 2; i <= Math.ceil(Math.sqrt(k)); i++) {
  while (k % i === 0) {
    j.push(i);
    k = Math.floor(k / i);
  }
}

if (k !== 1) {
  j.push(k);
}

console.log(j.length);
console.log(j.join(" "));
