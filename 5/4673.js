const arange = 10000 + 1;
let count = 1;
let arr = [];
const hasSelfNum = (num) => {
  let constructor = 0;
  constructor += num;
  for (let i of num.toString()) {
    constructor += Number(i);
  }
  arr.push(constructor);
};

do {
  hasSelfNum(count);
  count++;
} while (count < arange);
count = 1;
do {
  if (arr.indexOf(count) === -1) {
    console.log(count);
  }
  count++;
} while (count < arange);
