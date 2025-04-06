const { contactSchema } = require('../validators/contactValidator');

const validateContact = (req, res, next) => {
  try {
    contactSchema.parse(req.body);
    next();
  } catch (error) {
    res.status(400).json({ errors: error.errors });
  }
};

module.exports = { validateContact };
