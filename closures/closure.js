// set timeout closures

// function x(){
//     let a = 1
//     setTimeout(function(){
//         console.log(a)
//     }, 1000)
// }
// x()


// settimout run after the code in the same function

// function y(){
//     let a = 1
//     setTimeout(function(){
//         console.log(a);
        
//     }, 2000)
//     console.log("hello world");
    
// }
// y()


function y(){
    for(var i = 1; i<= 5; i++){
        setTimeout(function(){
            console.log(i);
            
        }, i * 1000)
    }
    console.log("hello")
}
y() // this print  6 6 6 6 6

