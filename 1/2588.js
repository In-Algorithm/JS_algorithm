let fs = require("fs");
let input = fs.readFileSync("input.txt").toString().split("\n");

const A = Number(input[0]);
const B = Number(input[1]);

console.log(A * (B % 10));
console.log(A * Math.floor((B / 10) % 10));
console.log(A * Math.floor((B / 100) % 10));
console.log(A * B);
