const User = require('./user');

describe('User', () => {
  it('Know its name', () => {
    const user = new User('Uma');
    expect(user.getName()).toBe('Uma');
  });

  it('Returns a string introducing the user', () => {
    const user = new User('Uma');
    expect(user.getIntroduction()).toBe('Hi, my name is Uma');
  })
});