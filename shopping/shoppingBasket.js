const Candy = require('./candy')

class ShoppingBasket {
  constructor() {
    this.contents = [];
  };

  getTotalPrice() {
    // const sum = 0;

    const total = this.contents.map(amount => {
      return amount.getPrice();
    })
    
    // .reduce((a, b) => {
    //   return a + b, sum;
    // });

    return Number(total);
  };

  addItem(candy) {
    this.contents.push(candy);
  };
}

module.exports = ShoppingBasket;