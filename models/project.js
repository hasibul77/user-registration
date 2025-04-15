/*const mongoose = require('mongoose');


const projectSchema = new mongoose.Schema({
  meetModernLife: {
    _id: false,
    title: { type: String, required: true },
    description: { type: String, required: true },
    price: { type: Number, required: true },
    type: { type: String, required: false },
    status: { type: String, required: false }
  },
  homeBreaths: {
    _id: false,
    title: { type: String, required: false },
    description: { type: String, required: false },
    benefits: { type: [String], required: false }
  },
  insideExperience: {
    _id: false,
    carousel: { type: [String], required: false } // image URLs
  },
  tailoredSpaces: [{
    _id: false,
    title: { type: String, required: false },
    type: { type: String, required: false },
    area: { type: String, required: false},
    layout: { type: String, required: false },
    images: { type: [String], required: false },
    download: { type: String, required: false } // PDF URL
  }],
  communityMap: {
    _id: false,
    title: { type: String, required: false },
    description: { type: String, required: false },
    nearby: { type: [String], required: false },
    mapImages: { type: [String], required: false },
    download: { type: String, required: false } // PDF URL
  },
  amenities: {
    _id: false,
    title: { type: String, required: false },
    description: { type: String, required: false },
    nearby: { type: [String], required: false }
  },
  location: {
    _id: false,
    title: { type: String, required: false },
    location: { type: String, required: false },
    from_airport: { type: String, required: false },
    from_topSchool: { type: String, required: false },
    from_kingRoad: { type: String, required: false },
    from_mall: { type: String, required: false },
    from_jeddahWaterFront: { type: String, required: false },
    view: { type: String, required: false }
  },
  testimonials: {
    _id: false,
    title: { type: String, required: false },
    description: { type: String, required: false },
    quotes: { type: [String], required: false }
  }
}, { timestamps: true });

module.exports = mongoose.model('Project', projectSchema);
*/

//added arabic
const mongoose = require('mongoose');

const projectSchema = new mongoose.Schema({
  meetModernLife: {
    _id: false,
    title: { type: String, required: false },
    title_ar: { type: String, required: false },
    description: { type: String, required: false },
    description_ar: { type: String, required: false },
    price: { type: Number, required: false },
    price_ar: { type: Number, required: false },
    type: { type: String, required: false },
    type_ar: { type: String, required: false },
    status: { type: String, required: false },
    status_ar: { type: String, required: false }
  },
  homeBreaths: {
    _id: false,
    title: { type: String, required: false },
    title_ar: { type: String, required: false },
    description: { type: String, required: false },
    description_ar: { type: String, required: false },
    benefits: { type: [String], required: false },
    benefits_ar: { type: [String], required: false }
  },
  insideExperience: {
    _id: false,
    carousel: { type: [String], required: false } // image URLs
  },
  tailoredSpaces: [{
    _id: false,
    title: { type: String, required: false },
    title_ar: { type: String, required: false },
    type: { type: String, required: false },
    type_ar: { type: String, required: false },
    area: { type: String, required: false },
    area_ar: { type: String, required: false },
    layout: { type: String, required: false },
    layout_ar: { type: String, required: false },
    images: { type: [String], required: false },
    download: { type: String, required: false } // PDF URL
  }],
  communityMap: {
    _id: false,
    title: { type: String, required: false },
    title_ar: { type: String, required: false },
    description: { type: String, required: false },
    description_ar: { type: String, required: false },
    nearby: { type: [String], required: false },
    nearby_ar: { type: [String], required: false },
    mapImages: { type: [String], required: false },
    download: { type: String, required: false } // PDF URL
  },
  amenities: {
    _id: false,
    title: { type: String, required: false },
    title_ar: { type: String, required: false },
    description: { type: String, required: false },
    description_ar: { type: String, required: false },
    nearby: { type: [String], required: false },
    nearby_ar: { type: [String], required: false }
  },
  location: {
    _id: false,
    title: { type: String, required: false },
    title_ar: { type: String, required: false },
    location: { type: String, required: false },
    location_ar: { type: String, required: false },
    from_airport: { type: String, required: false },
    from_airport_ar: { type: String, required: false },
    from_topSchool: { type: String, required: false },
    from_topSchool_ar: { type: String, required: false },
    from_kingRoad: { type: String, required: false },
    from_kingRoad_ar: { type: String, required: false },
    from_mall: { type: String, required: false },
    from_mall_ar: { type: String, required: false },
    from_jeddahWaterFront: { type: String, required: false },
    from_jeddahWaterFront_ar: { type: String, required: false },
    view: { type: String, required: false },
    view_ar: { type: String, required: false }
  },
  testimonials: {
    _id: false,
    title: { type: String, required: false },
    title_ar: { type: String, required: false },
    description: { type: String, required: false },
    description_ar: { type: String, required: false },
    quotes: { type: [String], required: false },
    quotes_ar: { type: [String], required: false }
  }
}, { timestamps: true });

module.exports = mongoose.model('Project', projectSchema);
