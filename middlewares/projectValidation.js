const { projectSchema } = require('../validators/projectValidator');

const validateProject = (req, res, next) => {
  try {
    // Validate the body of the incoming request based on the schema
    projectSchema.parse(req.body);
    next();  // Proceed to the next middleware or controller
  } catch (err) {
    // If validation fails, return the validation errors
    console.error('Validation error:', err.errors);  // Optional, for logging
    res.status(400).json({
      message: 'Validation failed',
      errors: err.errors  // Return the detailed error messages
    });
  }
};

module.exports = validateProject;
