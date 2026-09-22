// Promise chaining

let cart = ["shoes", "pants", "socks"];

// if we chain through the promises we want to return the value to the next promise with the return statement. if we dont return the value it will be undefined and not be accessed from the next promise in the chain.

createOrder(cart)
  .then(function (orderId) {
    return proceddToPayment(orderId);
  })
  .then(function (paymentInfo) {
    return showOrderSummary(paymentInfo);
  })
  .then(function (balanceInfo) {
    return updateWalletBalance(balanceInfo);
  });
