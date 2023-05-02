const input = Number(require("fs").readFileSync("dev/stdin").toString().trim());

const changes = [500, 100, 50, 10, 5, 1];
let cost = 1000 - input;
let count = 0;
for (let change of changes) {
  while (cost >= change) {
    if (change <= cost) {
      cost -= change;
      count++;
    }
  }
}
console.log(count);
