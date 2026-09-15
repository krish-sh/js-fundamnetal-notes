function x (){
    let a = 3
    function y() {
        console.log(a);
    }
    return y
}

let z  = x()
z()