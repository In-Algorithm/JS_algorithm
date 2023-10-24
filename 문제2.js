function solution(a, b) {
  let result = 1;
  a = a % 100000;

  while (b > 0) {
    if (b % 2 !== 0) {
      result = (result * a) % 100000;
    }
    a = (a * a) % 100000;
    b = Math.floor(b / 2);
  }
  return result;
}
console.log(solution(2, 2));
