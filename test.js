// const a = () => {
//   setTimeout(() => {
//     throw new Error("error");
//   }, 1000);
// };

// const b = () => {
//   a();
// };

// const c = () => {
//   b();
// };

// try {
//   setTimeout(() => {
//     console.log("byebye");
//     throw new Error("error1");
//   }, 1000);
//   // c();
//   // const a = new Error("error");
//   // console.log(a);
// } catch (e) {
//   console.log("에러", e);
// }

const a = () => {
  new Promise((resolve, reject) => {
    reject("hihi");
  });
};

(async () => {
  try {
    await a();
  } catch (e) {
    console.log("에러", e);
  } finally {
    console.log("33333");
  }
  console.log("byebye");
})();
