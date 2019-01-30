const mongoose = require('mongoose');

const { Schema } = mongoose;

const NewsSchema = new Schema();

module.exports = mongoose.model('News', NewsSchema);