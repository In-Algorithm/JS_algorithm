const input = require("fs")
  .readFileSync("dev/stdin")
  .toString()
  .trim()
  .split("\n")
  .slice(1);

for (let str of input) {
  let count = 0;
  let isValid = true;

  // 문자열의 각 문자를 순회
  for (let char of str) {
    if (char === "(") {
      count++;
    } else if (char === ")") {
      count--;
    }

    // 닫는 괄호가 여는 괄호보다 많으면 즉시 실패
    if (count < 0) {
      isValid = false;
      break;
    }
  }

  // 모든 괄호가 짝을 이뤄야 함
  if (isValid && count === 0) {
    console.log("YES");
  } else {
    console.log("NO");
  }
}
