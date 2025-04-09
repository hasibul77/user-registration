const express = require('express');
const router = express.Router();
const { createProject, getProject, updateProject, deleteProject } = require('../controllers/projectController'); // Ensure proper import
const validateProject = require('../middlewares/projectValidation');
//const authenticate = require('../middlewares/authMiddleware');

// POST: Create a new project
router.post('/',  validateProject, createProject);

// GET: Get project details
router.get('/', getProject);

// PUT: Update a specific section of a project
router.put('/:id',  validateProject, updateProject);

// DELETE: Delete a specific section of a project
router.delete('/:id',  deleteProject);

module.exports = router;
