
let nums = [6, 1, 4, 2, 5];

// let output = nums.reduce((acc,curr) => acc += curr)

// console.log(output);

let max = nums.reduce((acc, curr) => {
    
    if(acc <= curr){
        acc = curr
    }
    return acc
})
console.log(max);

