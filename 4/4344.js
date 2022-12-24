const input = require("fs")
  .readFileSync("dev/stdin")
  .toString()
  .trim()
  .split("\n");
input.splice(0, 1);
for (let i of input) {
  let sum = 0;
  let length = i.split(" ")[0];
  let avg = 0;
  let count = 0;
  for (let j of i.toString().split(" ").splice(1)) {
    sum += Number(j);
  }
  avg = sum / length;
  for (let k of i.toString().split(" ").splice(1)) {
    if (avg < Number(k)) {
      count++;
    }
  }
  console.log(((count / length) * 100).toFixed(3) + "%");
}
