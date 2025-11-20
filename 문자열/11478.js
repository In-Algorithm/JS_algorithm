const input = require("fs").readFileSync("dev/stdin").toString().trim();

const substrings = new Set();

// 모든 부분 문자열 생성
for (let i = 0; i < input.length; i++) {
  for (let j = i + 1; j <= input.length; j++) {
    substrings.add(input.substring(i, j));
  }
}

console.log(substrings.size);
