//  Global space

console.log(this); //global object


// inside a funciton

function x(){
    // the value depend on strict / non-strict mode 
    console.log(this);
}
x()