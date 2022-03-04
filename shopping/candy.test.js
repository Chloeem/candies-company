const Candy = require('./candy')

describe('Candy', () => {
  const candy = new Candy('Mars', 4.99);

  it('Returns the candy called Mars', () => {
    expect(candy.getName()).toBe('Mars');
  });

  it('Return the candies price', () => {
    expect(candy.getPrice()).toBe(4.99);
  });
})