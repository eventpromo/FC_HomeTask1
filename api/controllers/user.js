const User = require('../models/user');
const CrudController = require('./crud');

class UserController extends CrudController {
  constructor() {
    super(User, (request) => {
      const {
        email,
        password,
        name,
      } = request.body;
      return {
        email,
        password,
        name,
      };
    });
  }
}

module.exports = new UserController();
