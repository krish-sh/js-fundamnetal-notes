let cart = ["pant", "shoes", "shirt"];

// consumer part

let promise = createOrder(cart);

promise.then((orderId) => {
    console.log(orderId);
    
//   ProcceddToPayment(orderId);
});

// Producer

function createOrder() {
  const pr = new Promise(function (resolve, reject) {
    // create Order

   

    //  vaidate Order

    // order Id

    if (!validateCart) {
      let err = new Error("Error in validate cart");
      reject(err);
    }

     let orderId = "12345";

     if (orderId) {
       resolve(orderId);
     } else {
       reject("Error on Order Id");
     }
  });

  return pr;
}


function validateCart(){
    return true
}