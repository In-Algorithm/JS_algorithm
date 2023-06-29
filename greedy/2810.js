const [N, seat] = require("fs")
  .readFileSync("dev/stdin")
  .toString()
  .trim()
  .split("\n");
const cupHolder = seat.split(/S|LL/g).length;
console.log(Math.min(N, cupHolder));
