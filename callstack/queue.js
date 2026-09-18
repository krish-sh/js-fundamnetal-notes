// callback queue / event loop
console.log("start");

setTimeout(function cb(){
    console.log("Callback");
}, 5000)

console.log("end");

