const mongoose = require('mongoose');
const crypto = require('crypto');

const { Schema } = mongoose;

const UserSchema = new Schema({
  email: {
    type: String,
    required: true,
  },
  firstName: {
    type: String,
    required: true,
  },
  lastName: {
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
  methods: {
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
  },
  setters: {
    password(password) {
      this.passwordHash = this.encryptPassword(password);
    },
  },
  indexes: [
    [{ email: 1 }, { unique: true }],
  ],
});

module.exports = mongoose.model('User', UserSchema);
