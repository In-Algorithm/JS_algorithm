// const func = () => {
//   fetch("안녕");
// };

// const func2 = async (value) => {
//   const a = await server(value);
//   console.log(a);
// };
// const fetch = async (value) => {
//   const a = await server(value);
//   console.log(a);
// };

// const server = (value) => {
//   return new Promise((resolve) => {
//     setTimeout(() => {
//       return resolve(value);
//     }, 1000);
//   });
// };

// console.time("loading");
// setTimeout(() => {
//   console.log("33");
// }, 1000);
// console.timeEnd("loading");
// console.time("function");
// func();
// console.timeEnd("function");
// console.time("function2");
// func2("hi2");
// console.timeEnd("function2");
// console.time("function3");
// func();
// console.timeEnd("function3");
// console.time("function4");
// func2("hi4");
// console.timeEnd("function4");
// console.time("function5");
// func2("hi5");
// console.timeEnd("function5");

// const fetch = async (value) => {
//   const answer = await value;
//   setTimeout(() => {
//     console.log("동작 완료", answer);
//   }, 3000);
// };

// const func1 = () => {
//   fetch("안녕");
// };

// // Test 2 (코드 내부에서 실행)

// const func2 = () => {
//   setTimeout(() => {
//     console.log("동작 완료, 안녕");
//   }, 3000);
// };

// const func3 = async () => {

// };

// Test 1 (코드 내부에서 실행)

const func1 = (value) => {
  // const answer = await value;
  // setTimeout(() => {
  //   console.log("동작 완료1, ", answer);
  // }, 3000);
  const hello = setTimeout(() => {
    console.log("동작 완료1, ", value);
  }, 3000);
};

// Test 2 (코드 외부로 뺐을때)
const fetch = async (value) => {
  const answer = await value;
  setTimeout(() => {
    console.log("동작 완료2, ", answer);
  }, 3000);
};

const func2 = () => {
  fetch("안녕");
};

// console.time("function0");
// console.log("hello");
// console.timeEnd("function0");
console.time("function2");
// func1("안녕");
// func2();
fetch("안녕");
console.timeEnd("function2");
// console.time("function2");
// func2();
// console.timeEnd("function2");
// console.time("function3");
// func1("안녕");
// console.timeEnd("function3");
