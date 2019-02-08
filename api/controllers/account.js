const jwt = require('../utils/jwt');


module.exports = {
  login(request, response) {
    if (request.user) {
      response.status(200).send(jwt.generate(request.user));
    } else {
      response.status(400).send('Incorrect login or password');
    }
  },
};
