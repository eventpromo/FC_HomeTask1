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
    this.salt = this.generateSalt();
    return crypto.createHmac('sha1', this.salt).update(plainPassword).digest('hex');
  },
  verify(plainPassword) {
    return this.encryptPassword(plainPassword) === this.passwordHash;
  },
  generateSalt() {
    return `${Math.round((new Date().valueOf() * Math.random()))}`;
  },
};
UserSchema.setters = {
  password(password) {
    this.passwordHash = this.encryptPassword(password);
  },
};
UserSchema.indexes = [
  [{ email: 1 }, { unique: true }],
];

module.exports = mongoose.model('User', UserSchema);
