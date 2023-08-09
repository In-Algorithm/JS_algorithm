const input = require("fs").readFileSync("dev/stdin").toString().trim();

const N = Number(input);

function permutation(arr, selectNum) {
  let result = [];
  if (selectNum === 1) return arr.map(v => [v]);

  arr.forEach((v, idx, arr) => {
    const fixed = v;
    const restArr = arr.filter((_, index) => index !== idx);
    const permuteArr = permutation(restArr, selectNum - 1);
    const combineFix = permuteArr.map(v => [fixed, ...v]);
    result.push(...combineFix);
  });
  return result;
}

const output = permutation(
  [...Array(N).keys()].map(v => v + 1),
  N
);
output.forEach(v => console.log(v.join(" ")));
