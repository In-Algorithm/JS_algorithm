const input = Number(require("fs").readFileSync("input.txt").toString().trim());
// const digit1 = input % 10;
// const digit10 = parseInt(input / 10);
let count = 0;
let sum = input;
do {
  const digit1 = sum % 10;
  const digit10 = parseInt(sum / 10);
  sum = digit1 * 10 + ((digit1 + digit10) % 10);
  count++;
} while (sum !== input);
console.log(count);
