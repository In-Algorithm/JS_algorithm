const foo = () => {
  setTimeout(() => {
    throw Error("foo에서 발생한 에러");
  }, 500);
};
const bar = () => {
  foo();
};

const baz = () => {
  bar();
};

try {
  baz();
} catch (err) {
  console.error(err);
  console.log("done");
}
