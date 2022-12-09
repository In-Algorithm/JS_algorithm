const func = () => {
  fetch("안녕");
};

const func2 = async (value) => {
  const a = await server(value);
  console.log(a);
};
const fetch = async (value) => {
  const a = await server(value);
  console.log(a);
};

const server = (value) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      return resolve(value);
    }, 1000);
  });
};

console.time("loading");
setTimeout(() => {
  console.log("33");
}, 1000);
console.timeEnd("loading");
console.time("function");
func();
console.timeEnd("function");
console.time("function2");
func2("hi2");
console.timeEnd("function2");
console.time("function3");
func();
console.timeEnd("function3");
console.time("function4");
func2("hi4");
console.timeEnd("function4");
console.time("function5");
func2("hi5");
console.timeEnd("function5");
