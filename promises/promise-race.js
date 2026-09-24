let p1 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("P1 success");
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
  setTimeout(() => {
    resolve("P3 success");
  }, 5000);
});

Promise.race([p1, p2, p3])
  .then((res) => {
    console.log(res);
  })
  .catch((res) => {
    console.error(res);
  });
