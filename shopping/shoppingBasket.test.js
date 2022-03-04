const ShoppingBasket = require('./shoppingBasket');
const Candy = require('./candy');

describe('ShoppingBasket', () => {
  const basket = new ShoppingBasket();

  it('Returns the total price of the basket', () => {
    expect(basket.getTotalPrice()).toBe(0);
  });

  it('Adds an candy to the shopping basket', () => {
    const candy = new Candy('Mars', 4.99);
    basket.addItem(candy);

    expect(basket.contents.length).toBe(1);
  });

  it('Returns the total price of one candy', () => {
    const candy = new Candy('Mars', 4.99);

    expect(basket.getTotalPrice()).toBe(4.99);
  });

  it('Returns the total price of three candies', () => {
    const candy = new Candy('Mars', 4.99);
    basket.addItem(candy);
  });
})