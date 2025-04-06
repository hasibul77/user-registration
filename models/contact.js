const mongoose = require('mongoose');

const contactSchema = new mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
      required: false
    },
    name: { type: String, required: true, trim: true },
    email: { type: String, required: true, trim: true },
    phone: { type: String },
    subject: { type: String, required: true },
    message: { type: String, required: true }
  },
  {
    timestamps: true
  }
);

module.exports = mongoose.model('Contact', contactSchema);
