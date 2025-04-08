const { mediaSchema } = require('../validators/mediaValidator');

const validateMedia = (req, res, next) => {
  try {
    mediaSchema.parse(req.body);
    next();
  } catch (error) {
    return res.status(400).json({ errors: error.errors });
  }
};

module.exports = { validateMedia };