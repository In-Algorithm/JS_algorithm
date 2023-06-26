const input = require("fs")
  .readFileSync("dev/stdin")
  .toString()
  .trim()
  .split("\n")
  .splice(1);

const solution = () => {
  const [candies, box_count] = [input[0].split(" ")[0], input[0].split(" ")[1]];
  let count = 0;
  let sum_weight = 0;
  const new_box = [];

  // 가로 * 세로로 박스가 담을 수 있는 사탕의 수를 계산
  input.splice(1).forEach(each => {
    new_box.push(each.split(" ")[0] * each.split(" ")[1]);
  });

  // 내림차순으로 정렬
  new_box.sort((a, b) => b - a);

  for (let i = 0; i < new_box.length; i++) {
    sum_weight += new_box[i];
    count += 1;
    // 박스의 크기로 j보다 많이 담을 수 있으면 개수를 출력
    if (sum_weight >= candies) {
      return console.log(count);
    }
  }
};

solution();
