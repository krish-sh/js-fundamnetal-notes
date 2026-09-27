const p = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("Success in promise function");
  }, 5000);
});
const p1 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("Success in promise 1 function");
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
//   // this await keyword is run parallely at the same time
//   const data = await p;
//   console.log(data);
//   console.log("Hello");

//   const data2 = await p1;
//   console.log(data2);
//   console.log("Hello2");
// }

// handlePromise();



//  Real life example


const API_URL = "https://api.github.com/users/akshaymarch7"

async function handlePromise(){
   try {
     let data = await fetch(API_URL);

     if (!data) {
       console.log("Not data found");
     } else {
       let d = await data.json();
       console.log(d);
     }
   } catch (err) {
    console.log(err);
    
   }
}


handlePromise()