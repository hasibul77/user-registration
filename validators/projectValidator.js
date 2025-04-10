const { z } = require('zod');

// Zod validation schema for the project
const projectSchema = z.object({
  meetModernLife: z.object({
    title: z.string().min(1),
    description: z.string().min(1),
    price: z.number(),
    type: z.string(),
    status: z.string()
  }),
  homeBreaths: z.object({
    title: z.string(),
    description: z.string(),
    benefits: z.array(z.string())
  }),
  insideExperience: z.object({
    carousel: z.array(z.string().url())
  }),
  tailoredSpaces: z.array(z.object({
    title: z.string(),
    type: z.string(),
    area: z.string(),
    layout: z.string(),
    images: z.array(z.string().url()),
    download: z.string().url()
  })),
  communityMap: z.object({
    title: z.string(),
    description: z.string(),
    nearby: z.array(z.string()),
    mapImages: z.array(z.string().url()),
    download: z.string().url()
  }),
  amenities: z.object({
    title: z.string(),
    description: z.string(),
    nearby: z.array(z.string())
  }),
  location: z.object({
    title: z.string(),
    location: z.string(),
    from_airport: z.string(),
    from_topSchool: z.string(),
    from_kingRoad: z.string(),
    from_mall: z.string(),
    from_jeddahWaterFront: z.string(),
    view: z.string()
  }),
  testimonials: z.object({
    title: z.string(),
    description: z.string(),
    quotes: z.array(z.string())
  })
});

module.exports = { projectSchema };