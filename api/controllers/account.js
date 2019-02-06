const jwt = require('../utils/jwt');
const passport = require('../middlewares/passport');

module.exports = {
  async login(request, response) {
    await passport.authenticate('local', (err, user) => {
      if (!user) {
        response.status(400).send('Incorrect login or password');
      } else {
        response.status(200).send(jwt.generate(user));
      }
    });
  },
};
