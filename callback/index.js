// callback function

let cart = ["shoes", "shirt", "pant"];

api.getCart(cart, function(){

    api.proceddToPayment(function(){

        api.showOrderSummary(function(){

            api.updateWallet(function(){

                
            })
        })
    })
})