// Map function is used to transform and array

// let arr = [5, 1, 3, 2, 6];

// function double(num){
//     return num * 2
// }

// let output = arr.map(double)
// console.log(output);

const users = [
  { firstName: "akshay", lastName: "saini", Age: 29 },
  { firstName: "donald", lastName: "trump", Age: 75 },
  { firstName: "elon", lastName: "musk", Age: 50 },
  { firstName: "deepika", lastName: "padukone", Age: 26 },
];


// find the full name of all the user from the list and print

let output = users.map(x => x.firstName + x.lastName)

console.log(output);
