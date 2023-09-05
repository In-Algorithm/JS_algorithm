const input = require("fs").readFileSync("dev/stdin").toString().trim();

const answer = Number(input) ** 0.5;

console.log(Math.floor(answer));
