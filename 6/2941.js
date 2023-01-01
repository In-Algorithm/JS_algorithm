let input = require("fs").readFileSync("dev/stdin").toString().trim();

let replaced_str = input;
let croatiaAlphabet = ["c=", "c-", "dz=", "d-", "lj", "nj", "s=", "z="];
let count = 0;
for (let i of croatiaAlphabet) {
  if (input.includes(i)) {
    const letter = i;
    const regexAllCase = new RegExp(letter, "g");
    const counts = replaced_str.split(i).length - 1;
    replaced_str = replaced_str.replace(regexAllCase, " ");
    count += counts;
  }
}
const letter = " ";
const regexAllCase = new RegExp(letter, "g");
replaced_str = replaced_str.replace(regexAllCase, "");
count += replaced_str.length;
console.log(count);
