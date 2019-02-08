const jwt = require('jsonwebtoken');

const jwtsecret = 'mysecretkey';

module.exports = {
  jwtsecret,
  generate(user) {
    const payload = {
      name: user.name,
      email: user.email,
    };
    return jwt.sign(payload, jwtsecret);
  },
};
