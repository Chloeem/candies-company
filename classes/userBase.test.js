const UserBase = require('./userbase');
const User = require('./user');

describe('UserBase', () => {
  const users = [
    new User('Uma'),
    new User('Josh'),
    new User('Ollie')
  ];

  const userBase = new UserBase(users);

  it('Returns a count of the user instances in an array', () => {
    expect(userBase.count()).toBe(3);
  });

  it('Returns an array of user names', () => {
    expect(userBase.getNames()).toEqual([ 'Uma', 'Josh', 'Ollie' ]);
  });

  it('Returns an array of introductions', () => {
    expect(userBase.getIntroductions()).toEqual([
      'Hi, my name is Uma',
      'Hi, my name is Josh',
      'Hi, my name is Ollie'
    ]);
  });
});