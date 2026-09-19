// Concurrency 

let startDate = new Date().getTime()
let endDate = startDate

setTimeout(function cb(){
    console.log("hello");
    
}, 5000)

while(endDate < startDate + 10000){
    endDate = new Date().getTime()
}
console.log("Loop finished");
