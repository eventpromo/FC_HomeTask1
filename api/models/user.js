const mongoose = require('mongoose');
const crypto = require('crypto');

const { Schema } = mongoose;

const UserSchema = new Schema({
  email: {
    type: String,
    required: true,
    unique: true,
  },
  name: {
    type: String,
    required: true,
  },
  passwordHash: {
    type: String,
    required: true,
  },
  salt: {
    type: String,
    required: true,
  },
});

UserSchema.methods = {
  encryptPassword(plainPassword) {
    return crypto.createHmac('sha1', this.salt).update(plainPassword).digest('hex');
  },
  verify(plainPassword) {
    return this.encryptPassword(plainPassword) === this.passwordHash;
  },
  generateSalt() {
    return `${Math.round((new Date().valueOf() * Math.random()))}`;
  },
};
UserSchema.virtual('password').set(function setPassword(password) {
  this.salt = this.generateSalt();
  this.passwordHash = this.encryptPassword(password);
});

module.exports = mongoose.model('User', UserSchema);
