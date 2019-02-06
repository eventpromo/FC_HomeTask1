const mongoose = require('mongoose');

const { Schema } = mongoose;

const NewsSchema = new Schema({
  title: {
    type: String,
    required: true,
  },
  subTitle: {
    type: String,
  },
  image: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  date: {
    type: Date,
    required: true,
  },
  author: {
    type: String,
  },
});

module.exports = mongoose.model('News', NewsSchema);
