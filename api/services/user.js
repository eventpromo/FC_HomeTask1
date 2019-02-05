const CrudService = require('./crud');
const User = require('../db/user');

class UserService extends CrudService {
  constructor() {
    super(User);
  }
}

module.exports = UserService;
