// async is used to run the async function
// it always return a promise
// if the return value is not promise it pack the return value into the promise and then return it

 async function getData() {
    return "Hello"
}

let data = getData()

console.log(data);
