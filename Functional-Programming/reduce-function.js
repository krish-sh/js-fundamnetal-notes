// let nums = [6, 1, 4, 2, 5];

// let output = nums.reduce((acc,curr) => acc += curr)

// console.log(output);

// let max = nums.reduce((acc, curr) => {

//     if(acc <= curr){
//         acc = curr
//     }
//     return acc
// })
// console.log(max);

const users = [
  { firstName: "akshay", lastName: "saini", Age: 26 },
  { firstName: "donald", lastName: "trump", Age: 75 },
  { firstName: "elon", lastName: "musk", Age: 50 },
  { firstName: "deepika", lastName: "padukone", Age: 26 },
];

let output = users.reduce((acc, curr) => {
  if (acc[curr.Age]) {
    acc[curr.Age] += 1;
  } else {
    acc[curr.Age] = 1;
  }

   return acc
}, {});

console.log(output);

