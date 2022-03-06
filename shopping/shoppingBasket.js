const Candy = require('./candy');

class ShoppingBasket {
  constructor() {
    this.contents = [];
  };

  getTotalPrice() {
    const total = this.contents.map(amount => {
      return amount.getPrice();
    }).reduce((a, b) => a + b, 0);

    return Number(total); 
  };

  addItem(candy) {
    this.contents.push(candy);
  };
}

module.exports = ShoppingBasket;