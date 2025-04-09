const Project = require('../models/project');
const { uploadFile, deleteFile } = require('../supabase/projectUpload');  // Import from projectUpload.js

// Create a new project
const createProject = async (req, res) => {
  try {
    const project = new Project(req.body);  // Ensure req.body is correct

    // If files are uploaded (e.g., images or PDFs), handle the file upload
    if (req.files && req.files.length > 0) {
      const fileUrls = await Promise.all(
        req.files.map(async (file) => await uploadFile(file))  // Upload the files to 'project-media'
      );
      project.projectMedia = fileUrls;  // Store the uploaded file URLs in the project model
    }

    await project.save();
    res.status(201).json(project);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Get the project details
const getProject = async (req, res) => {
  try {
    const project = await Project.findOne(); // Ensure your query works correctly
    res.status(200).json(project);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Update a specific section of the project (example)
const updateProject = async (req, res) => {
  try {
    const { projectId, sectionName } = req.params;

    // If there are any files (images or PDFs) for this section, handle the file upload
    if (req.files && req.files.length > 0) {
      const fileUrls = await Promise.all(
        req.files.map(async (file) => await uploadFile(file))  // Upload the files to 'project-media'
      );
      req.body[sectionName] = fileUrls;  // Store the uploaded file URLs in the specified section
    }

    // Update the project section with the provided data
    const updatedProject = await Project.findByIdAndUpdate(
      projectId,
      { [`${sectionName}`]: req.body[sectionName] },
      { new: true }
    );
    res.status(200).json(updatedProject);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Delete a specific section of the project (example)
const deleteProject = async (req, res) => {
  try {
    const { projectId, sectionName } = req.params;
    const project = await Project.findById(projectId);
    if (!project) {
      return res.status(404).json({ error: 'Project not found' });
    }

    // If the section to be deleted contains any files, delete those files from Supabase
    if (project[sectionName]) {
      const filesToDelete = project[sectionName].filter((fileUrl) => fileUrl.startsWith('https://'));
      if (filesToDelete.length > 0) {
        for (const fileUrl of filesToDelete) {
          const fileName = fileUrl.split('/').pop();
          await deleteFile(fileName);  // Delete the file from the 'project-media' bucket
        }
      }
    }

    // Delete the section from the project
    delete project[sectionName];
    await project.save();
    res.status(200).json({ message: 'Section deleted successfully' });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

module.exports = {
  createProject,
  getProject,
  updateProject,
  deleteProject
};
