const input = require("fs")
  .readFileSync("dev/stdin")
  .toString()
  .trim()
  .split("\n")
  .splice(1)
  .map(BigInt);

for (let i of input) {
  for (let j = 2; j < 1000001; j++) {
    if (i % BigInt(j) == 0) {
      console.log("NO");
      break;
    }
    if (j == 1000000) {
      console.log("YES");
    }
  }
}
