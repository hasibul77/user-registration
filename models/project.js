const mongoose = require('mongoose');

const projectSchema = new mongoose.Schema({
  meetModernLife: {
    _id: false,
    title: { type: String, required: true },
    description: { type: String, required: true },
    price: { type: Number, required: true },
    type: { type: String, required: true },
    status: { type: String, required: true }
  },
  homeBreaths: {
    _id: false,
    title: { type: String, required: true },
    description: { type: String, required: true },
    benefits: { type: [String], required: true }
  },
  insideExperience: {
    _id: false,
    carousel: { type: [String], required: true } // image URLs
  },
  tailoredSpaces: [{
    _id: false,
    title: { type: String, required: true },
    type: { type: String, required: true },
    area: { type: String, required: true },
    layout: { type: String, required: true },
    images: { type: [String], required: true },
    download: { type: String, required: true } // PDF URL
  }],
  communityMap: {
    _id: false,
    title: { type: String, required: true },
    description: { type: String, required: true },
    nearby: { type: [String], required: true },
    mapImages: { type: [String], required: true },
    download: { type: String, required: true } // PDF URL
  },
  amenities: {
    _id: false,
    title: { type: String, required: true },
    description: { type: String, required: true },
    nearby: { type: [String], required: true }
  },
  location: {
    _id: false,
    title: { type: String, required: true },
    location: { type: String, required: true },
    from_airport: { type: String, required: true },
    from_topSchool: { type: String, required: true },
    from_kingRoad: { type: String, required: true },
    from_mall: { type: String, required: true },
    from_jeddahWaterFront: { type: String, required: true },
    view: { type: String, required: true }
  },
  testimonials: {
    _id: false,
    title: { type: String, required: true },
    description: { type: String, required: true },
    quotes: { type: [String], required: true }
  }
}, { timestamps: true });

module.exports = mongoose.model('Project', projectSchema);
