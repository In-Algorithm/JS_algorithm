let input = Number(require("fs").readFileSync("dev/stdin").toString().trim());
const timers = [300, 60, 10];
if (input % 10 !== 0) return console.log(-1);
let answer = [0, 0, 0];
for (let [index, value] of timers.entries()) {
  while (input >= value) {
    input -= value;
    answer[index]++;
  }
}
console.log(answer[0], answer[1], answer[2]);
