"use stirct";

// const obj = {
//   a: 10,
//   x: function () {
//     console.log(this);
//   },
// };
// obj.x()

// .call method

// const student = {
//     name: "Krish",
//     printName: function(){
//         console.log(this.name);
//     }
// }

// student.printName()

// const student2 = {
//     name: "Harish"
// }
// if we want to print this 2nd student name without making method in the second object we use the call method to do this work for us

// this is called the function borrowing

// student.printName.call(student2)

const Name = {
  firstName: "Krish",
  lastName: "Sharma",
};

let printName = function (city) {
  console.log(this.firstName + " " + this.lastName + " from " + city);
};

// .call also work like this
printName.call(Name, "gurdaspur")

// .apply 
// in this we pass the argument in the array

printName.apply(Name, ["gurdaspur"])

// .bind method
// it's same as call method but it store in the variable to call it later
// it is a function

let printFullName = printName.bind(Name, "gurdaspur")
printFullName()