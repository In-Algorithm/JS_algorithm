let input = Number(require("fs").readFileSync("dev/stdin").toString().trim());

let count = 1;
while (input > 1) {
  input -= 6 * count;
  count++;
}
console.log(count);
