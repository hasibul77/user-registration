/*const Project = require('../models/project');
const { uploadFile, deleteFile } = require('../supabase/projectUpload');

// Create a new project
const createProject = async (req, res) => {
  try {
    const project = new Project(req.body);

    if (req.files && req.files.length > 0) {
      const fileUrls = await Promise.all(
        req.files.map(async (file) => await uploadFile(file))
      );
      project.projectMedia = fileUrls;
    }

    await project.save();
    res.status(201).json(project);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// ✅ Get all projects
const getAllProjects = async (req, res) => {
  try {
    const projects = await Project.find();
    res.status(200).json(projects);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// ✅ Get project by ID
const getProjectById = async (req, res) => {
  try {
    const { id } = req.params;
    const project = await Project.findById(id);
    if (!project) {
      return res.status(404).json({ error: 'Project not found' });
    }
    res.status(200).json(project);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// ✅ Update full project by ID
const updateProject = async (req, res) => {
  try {
    const { id } = req.params;

    if (req.files && req.files.length > 0) {
      const fileUrls = await Promise.all(
        req.files.map(async (file) => await uploadFile(file))
      );
      req.body.projectMedia = fileUrls;
    }

    const updated = await Project.findByIdAndUpdate(id, req.body, { new: true });
    if (!updated) {
      return res.status(404).json({ error: 'Project not found' });
    }

    res.status(200).json(updated);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// ✅ Delete project by ID
const deleteProject = async (req, res) => {
  try {
    const { id } = req.params;
    const project = await Project.findByIdAndDelete(id);
    if (!project) {
      return res.status(404).json({ error: 'Project not found' });
    }

    // Optional: Delete project media from Supabase
    if (project.projectMedia && Array.isArray(project.projectMedia)) {
      for (const fileUrl of project.projectMedia) {
        const fileName = fileUrl.split('/').pop();
        await deleteFile(fileName);
      }
    }

    res.status(200).json({ message: 'Project deleted successfully' });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

module.exports = {
  createProject,
  getAllProjects,
  getProjectById,
  updateProject,
  deleteProject,
};
*/

//added arabic
const Project = require('../models/project');
const { uploadFile, deleteFile } = require('../supabase/projectUpload');

// Create a new project
/*const createProject = async (req, res) => {
  try {
    const projectData = { ...req.body };

    if (req.files?.length) {
      const fileUrls = await Promise.all(req.files.map(uploadFile));
      projectData.projectMedia = fileUrls;
    }

    const project = new Project(projectData);
    await project.save();

    res.status(201).json(project);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
*/
// Create a new project
const createProject = async (req, res) => {
  try {
    const project = new Project(req.body);

    if (req.files && req.files.length > 0) {
      const fileUrls = await Promise.all(
        req.files.map(async (file) => await uploadFile(file))
      );
      project.projectMedia = fileUrls;
    }

    await project.save();

    res.status(201).json({ message: 'Project created successfully' }); // ✅ Custom message
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
// Get all projects
const getAllProjects = async (req, res) => {
  try {
    const projects = await Project.find();
    res.status(200).json(projects);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Get project by ID
const getProjectById = async (req, res) => {
  try {
    const project = await Project.findById(req.params.id);
    if (!project) return res.status(404).json({ error: 'Project not found' });

    res.status(200).json(project);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Update project
const updateProject = async (req, res) => {
  try {
    const updates = { ...req.body };

    if (req.files?.length) {
      const fileUrls = await Promise.all(req.files.map(uploadFile));
      updates.projectMedia = fileUrls;
    }

    const updatedProject = await Project.findByIdAndUpdate(req.params.id, updates, { new: true });
    if (!updatedProject) return res.status(404).json({ error: 'Project not found' });

    res.status(200).json(updatedProject);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Delete project
const deleteProject = async (req, res) => {
  try {
    const project = await Project.findByIdAndDelete(req.params.id);
    if (!project) return res.status(404).json({ error: 'Project not found' });

    if (project.projectMedia?.length) {
      for (const url of project.projectMedia) {
        const fileName = url.split('/').pop();
        await deleteFile(fileName);
      }
    }

    res.status(200).json({ message: 'Project deleted successfully' });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

module.exports = {
  createProject,
  getAllProjects,
  getProjectById,
  updateProject,
  deleteProject
};
