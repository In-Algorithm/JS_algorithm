const fs = require("fs");
const input = fs.readFileSync("input.txt").toString().trim();

for (i = 1; i < 10; i++) {
  console.log(`${input} * ${i} = ${input * i}`);
}
