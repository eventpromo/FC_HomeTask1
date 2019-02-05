const UserService = require('../services/user');
const CrudController = require('./crud');

class UserController extends CrudController {
  constructor() {
    super(new UserService(), (request) => {
      const {
        email,
        password,
        firstName,
        lastName,
      } = request.body;
      return {
        email,
        password,
        firstName,
        lastName,
      };
    });
  }
}

module.exports = new UserController();
