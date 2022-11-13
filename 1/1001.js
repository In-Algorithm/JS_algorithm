var fs = require("fs");
var input = fs.readFileSync("input.txt").toString().split(" ");
console.log(Number(input[0]) - Number(input[1]));
