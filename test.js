const input = require("fs").readFileSync("dev/stdin").toString().trim();
const regex = /[{*?].[}]/g;
const result = input.match(regex);
console.log(result);
