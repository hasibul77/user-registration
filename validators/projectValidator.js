/*const { z } = require('zod');

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
*/

//added arabic
const { z } = require('zod');

const projectSchema = z.object({
  meetModernLife: z.object({
    title: z.string(),
    title_ar: z.string().optional(),
    description: z.string(),
    description_ar: z.string().optional(),
    price: z.number(),
    price_ar: z.number().optional(),
    type: z.string(),
    type_ar: z.string().optional(),
    status: z.string(),
    status_ar: z.string().optional()
  }),
  homeBreaths: z.object({
    title: z.string(),
    title_ar: z.string().optional(),
    description: z.string(),
    description_ar: z.string().optional(),
    benefits: z.array(z.string()),
    benefits_ar: z.array(z.string()).optional()
  }),
  insideExperience: z.object({
    carousel: z.array(z.string().url())
  }),
  tailoredSpaces: z.array(z.object({
    title: z.string(),
    title_ar: z.string().optional(),
    type: z.string(),
    type_ar: z.string().optional(),
    area: z.string(),
    area_ar: z.string().optional(),
    layout: z.string(),
    layout_ar: z.string().optional(),
    images: z.array(z.string().url()),
    download: z.string().url()
  })),
  communityMap: z.object({
    title: z.string(),
    title_ar: z.string().optional(),
    description: z.string(),
    description_ar: z.string().optional(),
    nearby: z.array(z.string()),
    nearby_ar: z.array(z.string()).optional(),
    mapImages: z.array(z.string().url()),
    download: z.string().url()
  }),
  amenities: z.object({
    title: z.string(),
    title_ar: z.string().optional(),
    description: z.string(),
    description_ar: z.string().optional(),
    nearby: z.array(z.string()),
    nearby_ar: z.array(z.string()).optional()
  }),
  location: z.object({
    title: z.string(),
    title_ar: z.string().optional(),
    location: z.string(),
    location_ar: z.string().optional(),
    from_airport: z.string(),
    from_airport_ar: z.string().optional(),
    from_topSchool: z.string(),
    from_topSchool_ar: z.string().optional(),
    from_kingRoad: z.string(),
    from_kingRoad_ar: z.string().optional(),
    from_mall: z.string(),
    from_mall_ar: z.string().optional(),
    from_jeddahWaterFront: z.string(),
    from_jeddahWaterFront_ar: z.string().optional(),
    view: z.string(),
    view_ar: z.string().optional()
  }),
  testimonials: z.object({
    title: z.string(),
    title_ar: z.string().optional(),
    description: z.string(),
    description_ar: z.string().optional(),
    quotes: z.array(z.string()),
    quotes_ar: z.array(z.string()).optional()
  })
});

module.exports = { projectSchema };
