const Candy = require('./candy');

class ShoppingBasket {
  constructor() {
    this.contents = [];
  };

  getTotalPrice() {
    // const sum = 0;

    const total = this.contents.map(amount => {
      return amount.getPrice();
    });
    
    total.reduce(function(a, b) {
      return a + b;
    });

    // return Number(total); // if this is commented out the output is "undefined"
  };

  addItem(candy) {
    this.contents.push(candy);
  };
}

module.exports = ShoppingBasket;