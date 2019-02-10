const mongoose = require('mongoose');

const { Schema } = mongoose;
const { Types } = Schema;


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
    type: Types.ObjectId,
  },
});

module.exports = mongoose.model('News', NewsSchema);
