const p = new Promise((resolve, reject) => {
  console.log("Handle promise success");
});

// without async-await, this is the code how we handle promise

// function getData() {
//   p.then((res) => console.log(res));
// }
// getData()

// with the async-await

async function handlePromise() {
    let data = await p
    console.log(data);
}

handlePromise()