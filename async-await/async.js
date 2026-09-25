// async is used to create the async function
// it always return a promise
// if the return value is not promise it pack the return value into the promise and then return it


let p = new Promise((resolve,reject) => {
    resolve("Promise Resolved value")
})

// if we return a promise value it not wrap into a new promise it always sent into a promise 

 async function getData() {
    return p
}

let data = getData()

console.log(data);


//  To only print the resolve value or return  value we use this

data.then((res) => console.log(res))