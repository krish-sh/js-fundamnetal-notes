// it will take the value of global object
// this keyword in arrow fun work on the enclosing lexical content principle
// where the function is enclosed they return that value

let arrowFunction = {
  a: 10,
  x: () => {
    console.log(this);
  },
};

// arrowFunction.x();

let arrowFunction2 = {
  a: 10,
  x: function () {
   const y = () => {
      console.log(this);
    };
    y()
  },
};
arrowFunction2.x();
