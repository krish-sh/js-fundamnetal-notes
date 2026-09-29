"use strict";

function x() {
  console.log(this);
}
//  this return undefined
// x();

// if we call this function with another method then it will work differently

// this return global object
window.x();
