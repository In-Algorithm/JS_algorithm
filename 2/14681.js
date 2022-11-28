// var fs = require("fs");
// var input = fs.readFileSync("input.txt").toString().split("\n");

// var x = input[0];
// var y = input[1];

// if (x > 0) {
//   if (y < 0) {
//     return console.log("3");
//   } else {
//     return console.log("1");
//   }
// } else {
//   if (y < 0) {
//     return console.log("4");
//   } else {
//     return console.log("2");
//   }
// }

//fs 모듈 사용해서 제출시 오류남
const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let input = [];

rl.on("line", function (line) {
  input.push(parseInt(line));
}).on("close", function () {
  const x = input[0];
  const y = input[1];
  if (x > 0) {
    if (y < 0) {
      console.log("4");
    } else {
      console.log("1");
    }
  } else {
    if (y < 0) {
      console.log("3");
    } else {
      console.log("2");
    }
  }
  process.exit();
});
