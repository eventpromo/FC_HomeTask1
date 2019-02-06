const jwt = require('jsonwebtoken');

const jwtsecret = 'mysecretkey';

module.exports = {
  generate(user) {
    const payload = {
      id: user.id,
      name: user.name,
      email: user.email,
    };
    return jwt.sign(payload, jwtsecret);
  },
};
