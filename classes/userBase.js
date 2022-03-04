const User = require('./user')

class UserBase {
  constructor(users) {
    this.users = users;
  };

  count() {
    return this.users.length;
  };

  getNames() {
    return this.users.map(person => {
      return person.getName();
    }); 
  };

  getIntroductions() {
    return this.users.map(person => {
      return person.getIntroduction();
    })
  }
}

module.exports = UserBase;