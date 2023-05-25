const input = require("fs")
  .readFileSync("dev/stdin")
  .toString()
  .trim()
  .split("\n")
  .splice(1)
  .map(Number);

const changes = [25, 10, 5, 1];
for (let costs of input) {
  let exchanges = "";
  changes.map(change => {
    const leftMoney = Math.floor(costs / change);
    exchanges += leftMoney + " ";
    costs -= leftMoney * change;
  });
  console.log(exchanges);
}
