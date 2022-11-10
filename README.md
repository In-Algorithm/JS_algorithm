# JS_algorithm

JavaScript Algorithm

제출할때는 경로 /dev/stdin 으로 변경하기!

```javascript
var fs = require("fs");

// 문자 하나만 입력받을 경우
var input = fs.readFileSync("/dev/stdin").toString();

// 한칸 띄어쓰기로 구분
// input[0], input[1] 배열에서 꺼내쓰면 된다.
var input = fs.readFileSync("/dev/stdin").toString().split(" ");

// 줄바꿈으로 구분
var input = fs.readFileSync("/dev/stdin").toString().split("\n");

// 만약 인풋값이 숫자라면
var input = fs
  .readFileSync("/dev/stdin")
  .toString()
  .split(" ")
  .map(function (a) {
    return +a;
  });
```

##여러줄 입력시(n, input)

```javascript
function solution(n, input) {
  console.log(n);
  console.log(input);
}

const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});
let input = [];
rl.on("line", function (line) {
  input.push(line);
  //rl.close()가 없어서 계속 입력
  //로컬에서 입력을 중지하려면 입력을 한 후 ctrl+d로 입력 종료
}).on("close", function () {
  let n = parseInt(input[0]);
  let list = input[1].split(" ").map((el) => parseInt(el));
  solution(n, list);
  process.exit();
});
```

##여러줄 입력시(input1, input2)

```javascript
function solution(input1, input2) {
  console.log(input1);
  console.log(input2);
}

const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});
let input = [];
rl.on("line", function (line) {
  input.push(line);
  //rl.close()가 없어서 계속 입력
  //로컬에서 입력을 중지하려면 입력을 한 후 ctrl+d로 입력 종료
}).on("close", function () {
  let list1 = input[0].split(" ").map((el) => parseInt(el));
  let list2 = input[1].split(" ").map((el) => parseInt(el));
  solution(list1, list2);
  process.exit();
});
```
