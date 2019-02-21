const jwt = require('../utils/jwt');
const User = require('../models/user');

module.exports = {
  async login(request, response) {
    if (request.user) {
      response.status(200).send(jwt.generate(request.user));
    } else {
      response.status(400).send('Incorrect login or password');
    }
  },
  async register(request, response) {
    const {
      email,
      password,
      name,
    } = request.body;
    try {
      const user = await new User({
        email,
        password,
        name,
      }).save();
      response.status(200).send(jwt.generate(user));
    } catch (e) {
      response.status(500).send(e);
    }
  },
};
