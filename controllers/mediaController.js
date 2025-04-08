const Media = require('../models/media');
const { uploadFile } = require('../supabase/upload');

// Create Media
const createMedia = async (req, res) => {
  try {
    const { title, description, video } = req.body;

    const thumbnailImage = await uploadFile(req.files.thumbnail_image[0]);
    const photoLinks = await Promise.all(
      req.files.photos.map(file => uploadFile(file))
    );

    const media = await Media.create({
      title,
      description,
      thumbnail_image: thumbnailImage,
      photos: photoLinks,
      video,
    });

    res.status(201).json(media);
  } catch (error) {
    res.status(500).json({ message: 'Server error', error });
  }
};

// Get All Media
const getAllMedia = async (req, res) => {
  try {
    const media = await Media.find().sort({ createdAt: -1 });
    res.json(media);
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
};

// Get Media by ID
const getMediaById = async (req, res) => {
  try {
    const media = await Media.findById(req.params.id);
    if (!media) return res.status(404).json({ message: 'Media not found' });

    res.json(media);
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
};

// Update Media
const updateMedia = async (req, res) => {
  try {
    const media = await Media.findById(req.params.id);
    if (!media) return res.status(404).json({ message: 'Media not found' });

    const { title, description, video } = req.body;

    if (req.files.thumbnail_image) {
      const newThumb = await uploadFile(req.files.thumbnail_image[0]);
      media.thumbnail_image = newThumb;
    }

    if (req.files.photos && req.files.photos.length > 0) {
      const newPhotos = await Promise.all(
        req.files.photos.map(file => uploadFile(file))
      );
      media.photos = newPhotos;
    }

    media.title = title || media.title;
    media.description = description || media.description;
    media.video = video || media.video;

    await media.save();
    res.json({ message: 'Media updated successfully', media });
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
};

// Delete Media

const deleteMedia = async (req, res) => {
  try {
    const media = await Media.findByIdAndDelete(req.params.id);
    if (!media) {
      return res.status(404).json({ message: 'Media not found' });
    }

    res.json({ message: 'Media deleted successfully' });

  } catch (error) {
    console.error('Delete Error:', error);
    res.status(500).json({ message: 'Server error', error: error.message });
  }
};

module.exports = {
  createMedia,
  getAllMedia,
  getMediaById,
  updateMedia,
  deleteMedia
};
