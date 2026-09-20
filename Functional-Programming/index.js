// this is the generic method
// let radius = [3, 1, 2, 4];

// let area = function (radius) {
//   let output = [];

//   for (let i = 0; i < radius.length; i++) {
//     output.push(Math.floor(Math.PI * (radius[i] * radius[i])));
//   }
//   return output;
// };

// console.log(area(radius));

// let circumferrence = function (radius) {
//   let output = [];

//   for (let i = 0; i < radius.length; i++) {
//     output.push(Math.floor(2 * Math.PI * radius[i]));
//   }
//   return output;
// };

// console.log(circumferrence(radius));

// let Diameter = function (radius) {
//   let output = [];

//   for (let i = 0; i < radius.length; i++) {
//     output.push(Math.floor(2 * radius[i]));
//   }
//   return output;
// };

// console.log(Diameter(radius));

// this is the best method to implement where the 90 percent of code is same

let radius = [3, 1, 2, 4];


let area = function (radius){
    return Math.floor(Math.PI * (radius * radius))
}

let circumferrence = function (radius){
    return Math.floor(Math.PI * radius)
}

let diameter = function (radius){
    return Math.floor(2 * radius)
}

let calculate = function (radius, logic){
    let output = []
    for(let i = 0; i< radius.length; i++){
        output.push(logic(radius[i]))
    }
    return output
}

console.log(calculate(radius, area));
console.log(calculate(radius, circumferrence));
console.log(calculate(radius, diameter));
