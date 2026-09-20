// filter function is used to filter the element inside the array

// let nums = [5, 1, 3, 2, 6];

// let output = nums.filter((x) => x % 2)

// console.log(output);

const users = [
  { firstName: "akshay", lastName: "saini", Age: 26 },
  { firstName: "donald", lastName: "trump", Age: 75 },
  { firstName: "elon", lastName: "musk", Age: 50 },
  { firstName: "deepika", lastName: "padukone", Age: 26 },
];

let output = users.filter((x) => x.Age < 30).map((x) => x.firstName)


console.log(output);
