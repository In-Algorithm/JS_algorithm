let input = Number(require("fs").readFileSync("dev/stdin").toString().trim());

let count = 0;
const increase = [];
const decrease = [];
while (input > 0) {
  count++;
  input -= count;
}
for (let i = 0; i < count; i++) {
  increase.push(i + 1);
  decrease.push(count - i);
}
if (count % 2 === 0) {
  console.log(`${increase[input + count - 1]}/${decrease[input + count - 1]}`);
} else {
  console.log(`${decrease[input + count - 1]}/${increase[input + count - 1]}`);
}
