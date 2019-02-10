const jwt = require('jsonwebtoken');

const jwtsecret = 'mysecretkey';

module.exports = {
  jwtsecret,
  generate(user) {
    const payload = {
      // eslint-disable-next-line no-underscore-dangle
      id: user._id,
      name: user.name,
      email: user.email,
    };
    return jwt.sign(payload, jwtsecret);
  },
};
