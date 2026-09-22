let cart = ["shoes", "pants", "socks"];

// without promises

createOrder(cart, function (orderId) {
  proceddToPayment(orderId);
});

// with promises

let promise = createOrder(cart);

promise.then(function (orderId) {
  proceddToPayment(orderId);
});

