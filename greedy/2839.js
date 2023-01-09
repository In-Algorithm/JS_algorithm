const input = Number(require("fs").readFileSync("dev/stdin").toString().trim());
let result = 5000;
for (let i = 0; i <= input / 3; i++) {
  const low = 3;
  const high = 5;
  rest = Math.floor((input - low * i) / high);
  if (low * i + high * rest === input && result > i + rest) {
    result = i + rest;
  }
}

console.log(result >= 5000 ? -1 : result);
