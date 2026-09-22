let cart = ["pant", "shoes", "shirt"];

// consumer part

// Create order
createOrder(cart)
  .then((orderId) => {
    console.log(orderId);
    return orderId;
  }) // Promise chain // procced to payment
  .then(function (orderId) {
    return proccedToPayment(orderId);
  }) // show order summary
  .then(function (items, orderId) {
   return showOrderSummary(items);
  }) // Update walllet
  .then((wallet) => {
    return updateWallet()
  })//Error handling
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
    console.log("Payment successfully");
  });
}

function showOrderSummary() {
  return new Promise((resolve, reject) => {
    const items = cart;
    if (items) {
      console.log(items);
      resolve(items);
    }
    let err = new Error("Error in order summary");
    resolve(err);
  });
}

 function updateWallet()  {
    return new Promise((resolve, reject) => {
        let bal = 1000
        let orderItem = 300
      const wallet =  bal - orderItem
      bal = wallet
      resolve(wallet)
      console.log(wallet);
      
    })
}