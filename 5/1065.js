const input = require("fs").readFileSync("dev/stdin").toString().trim();
let count = 0;
for (let i = 1; i <= input; i++) {
  if (i < 100) {
    count++;
    continue;
  }
  const [digit1, digit10, digit100] = i.toString();
  if (digit1 - digit10 === digit10 - digit100) {
    count++;
  }
}
console.log(count);
