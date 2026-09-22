let cart = ["pant", "shoes", "shirt"];

// consumer part

createOrder(cart)
  .then((orderId) => {
    console.log(orderId);
    return orderId;
  }) // Promise chain
  .then(function (orderId) {
    return proccedToPayment(orderId);
  })
  //Error handling
  .catch(function (err) {
    console.log(err.message);
  });

// Producer

function createOrder() {
  const pr = new Promise(function (resolve, reject) {
    // create Order

    //  vaidate Order

    // order Id

    if (!validateCart(cart)) {
      let err = new Error("Error in validate cart");
      reject(err);
    }

    const orderId = "12345";

    if (orderId) {
      setTimeout(() => resolve(orderId), 5000);
    }
  });

  return pr;
}

function validateCart() {
  return true;
}

function proccedToPayment(orderId) {
  return new Promise((resolve, reject) => {
    resolve("Payment successfully");
    console.log("done");
    
    
  });
}
