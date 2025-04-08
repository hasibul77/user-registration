const mongoose = require('mongoose');

const mediaSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  thumbnail_image: {
    type: String,
    required: true,
  },
  photos: {
    type: [String],
    validate: [arrayLimit, '{PATH} exceeds the limit of 3'],
  },
  video: {
    type: String,
  },
}, { timestamps: true });

function arrayLimit(val) {
  return val.length <= 3;
}

module.exports = mongoose.model('Media', mediaSchema);