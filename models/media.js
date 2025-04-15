const mongoose = require('mongoose');

const mediaSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  title_ar: {
    type: String,
    required: false,
  },
  description: {
    type: String,
    required: true,
  },
  description_ar: {
    type: String,
    required: false,
  },
  thumbnail_image: {
    type: String,
    required: true,
  },
  thumbnail_image_ar: {
    type: String,
    required:false,
  },
  photos: {
    type: [String],
    validate: [arrayLimit, '{PATH} exceeds the limit of 3'],
  },
  photos_ar: {
    type: [String],
    //validate: [arrayLimit, '{PATH} exceeds the limit of 3'],
  },
  video: {
    type: String,
  },
  video_ar: {
    type: String,
  },
}, { timestamps: true });

function arrayLimit(val) {
  return val.length <= 3;
}

module.exports = mongoose.model('Media', mediaSchema);