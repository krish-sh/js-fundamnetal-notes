const p = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("Handle promise success")
  }, 10000);
});

// without async-await, this is the code how we handle promise
// this function cant wait for the promise to execute thet go to the next line 

// function getData() {
//   p.then((res) => console.log(res));
//   console.log("hello");
  
// }
// getData()

// with the async-await
// async funciton is wait for the code to respond on the await line then the code go to another line

// async function handlePromise() {
//   let data = await p;
//   console.log(data);
//   console.log("Hello");
// }

// handlePromise();
