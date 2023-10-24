function solution(p, m, d) {
  for (let k = 0; k <= 100; k++) {
    let rate = k / 100;
    let compoundInterest = p * Math.pow(1 + rate, m);
    if (compoundInterest >= d) {
      return k;
    }
  }

  return compoundInterest(p, m, d) * 100;
}
