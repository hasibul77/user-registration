const { z } = require('zod');

// Zod validation schema for the project
const projectSchema = z.object({
  meetModernLife: z.object({
    title: z.string().min(1),
    description: z.string().min(1),
    price: z.number(),
    type: z.string().min(1),
    status: z.string().min(1)
  }),
  homeBreaths: z.object({
    title: z.string().min(1),
    description: z.string().min(1),
    benefits: z.array(z.string().min(1))
  }),
  insideExperience: z.object({
    carousel: z.array(z.string().url())
  }),
  tailoredSpaces: z.array(z.object({
    title: z.string().min(1),
    type: z.string().min(1),
    area: z.string().min(1),
    layout: z.string().min(1),
    images: z.array(z.string().url()),
    download: z.string().url()
  })),
  communityMap: z.object({
    title: z.string().min(1),
    description: z.string().min(1),
    nearby: z.array(z.string().min(1)),
    mapImages: z.array(z.string().url()),
    download: z.string().url()
  }),
  amenities: z.object({
    title: z.string().min(1),
    description: z.string().min(1),
    nearby: z.array(z.string().min(1))
  }),
  location: z.object({
    title: z.string().min(1),
    location: z.string().min(1),
    from_airport: z.string().min(1),
    from_topSchool: z.string().min(1),
    from_kingRoad: z.string().min(1),
    from_mall: z.string().min(1),
    from_jeddahWaterFront: z.string().min(1),
    view: z.string().min(1)
  }),
  testimonials: z.object({
    title: z.string().min(1),
    description: z.string().min(1),
    quotes: z.array(z.string().min(1))
  })
});

module.exports = { projectSchema };