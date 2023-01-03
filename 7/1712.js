const input = require("fs")
  .readFileSync("dev/stdin")
  .toString()
  .trim()
  .split(" ");

const material = Number(input[0]);
const cost = Number(input[1]);
const price = Number(input[2]);

const margin = price - cost;
const count = Math.floor(material / margin) + 1;

console.log(margin <= 0 ? -1 : count);
