const express = require('express');
const router = express.Router();
const {
  createProject,
  getAllProjects,
  getProjectById,
  updateProject,
  deleteProject
} = require('../controllers/projectController');

const validateProject = require('../middlewares/projectValidation');

// POST: Create a new project
router.post('/', validateProject, createProject);

// GET: All projects
router.get('/', getAllProjects);

//  GET: Get project by ID
router.get('/:id', getProjectById);

//  PUT: Update project by ID
router.put('/:id', validateProject, updateProject);

// DELETE: Delete project by ID
router.delete('/:id', deleteProject);

module.exports = router;
