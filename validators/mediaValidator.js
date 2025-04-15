
/*const { z } = require('zod');

const mediaSchema = z.object({
  title: z.string().min(1),
  description: z.string().min(1),
  video: z.string().url().optional()
});

module.exports = { mediaSchema };
*/


const { z } = require('zod');

const mediaSchema = z.object({
  title: z.string().optional(),
  title_ar: z.string().optional(),
  description: z.string().optional(),
  description_ar: z.string().optional(),
  video: z.string().url().optional(),
  video_ar: z.string().url().optional(),
});

module.exports = { mediaSchema };
