// callback function

let cart = ["shoes", "shirt", "pant"];

//  this is a callback hell example

api.getCart(cart, function(){

    api.proceddToPayment(function(){

        api.showOrderSummary(function(){

            api.updateWallet(function(){


            })
        })
    })
})