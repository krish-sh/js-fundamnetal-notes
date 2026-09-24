let p1 = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     resolve("P1 success");
//   }, 3000);
  setTimeout(() => {
    reject("P1 fail");
  }, 3000);
});
let p2 = new Promise((resolve, reject) => {
  //   setTimeout(() => {
  //     resolve("P2 success");
  //   }, 1000);
  setTimeout(() => {
    reject("P2 reject");
  }, 1000);
});
let p3 = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     resolve("P3 success");
//   }, 5000);
  setTimeout(() => {
    reject("P3 fail");
  }, 5000);
});

Promise.any([p1, p2, p3])
  .then((res) => {
    console.log(res);
  })
  .catch((res) => {
    console.error(res);
  });
