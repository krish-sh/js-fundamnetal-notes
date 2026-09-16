// Fucntion statement

function greet() {
  console.log("its a function statment");
}
// greet()

// Function expression

let b = function () {
  console.log("function expression");
};
// b()

// function decleration

function sum(a, b) {
  return a + b;
}
// console.log(sum(1, 2));

// Anonymous function

let c = function () {
  console.log("Anonymous function");
};
// c()

// Named function expression

let d = function xyz() {
  console.log("Name function expression");
  console.log(xyz);
};
// d()

// First class function

function firstClass() {
  return function xyz() {
    console.log("First class function");
  };
}
firstClass()()
