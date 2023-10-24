function solution(n) {
  const binaryCount = n.toString(2).split("1").length - 1;
  let result = 0;
  for (let i = 1; i < n; i++) {
    const currentBinaryCount = i.toString(2).split("1").length - 1;
    if (currentBinaryCount === binaryCount) result++;
  }
  return result;
}

const n = 100000000; // 10^9 (2^30)
console.time("createPDF");
solution(n);
console.timeEnd("createPDF");
