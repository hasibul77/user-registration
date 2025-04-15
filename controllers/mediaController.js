const Media = require('../models/media');
const { uploadFile } = require('../supabase/upload');

// Create Media
/*const createMedia = async (req, res) => {
  try {
    const {
      title,
      title_ar,
      description,
      description_ar,
      video,
      video_ar
    } = req.body;

    const files = req.files || {};

    // Upload images
    const thumbnailImage = files.thumbnail_image
      ? await uploadFile(files.thumbnail_image[0])
      : null;

    const thumbnailImageAr = files.thumbnail_image_ar
      ? await uploadFile(files.thumbnail_image_ar[0])
      : null;

    const photoLinks = files.photos
      ? await Promise.all(files.photos.map(file => uploadFile(file)))
      : [];

    const photoLinksAr = files.photos_ar
      ? await Promise.all(files.photos_ar.map(file => uploadFile(file)))
      : [];

    // Manual max file check (optional)
    if (photoLinks.length > 3 || photoLinksAr.length > 3) {
      return res.status(400).json({ message: 'You can upload up to 3 photos only.' });
    }

    const media = await Media.create({
      title,
      title_ar,
      description,
      description_ar,
      thumbnail_image: thumbnailImage,
      thumbnail_image_ar: thumbnailImageAr,
      photos: photoLinks,
      photos_ar: photoLinksAr,
      video,
      video_ar
    });

    res.status(201).json(media);
  } catch (error) {
    res.status(500).json({ message: 'Server error', error });
  }
};
*/
const createMedia = async (req, res) => {
  try {
    const {
      title,
      title_ar,
      description,
      description_ar,
      video,
      video_ar
    } = req.body;

    const files = req.files || {};

    const thumbnailImage = files.thumbnail_image
      ? await uploadFile(files.thumbnail_image[0])
      : null;

    const thumbnailImageAr = files.thumbnail_image_ar
      ? await uploadFile(files.thumbnail_image_ar[0])
      : null;

    const photoLinks = files.photos
      ? await Promise.all(files.photos.map(file => uploadFile(file)))
      : [];

    const photoLinksAr = files.photos_ar
      ? await Promise.all(files.photos_ar.map(file => uploadFile(file)))
      : [];

    if (photoLinks.length > 3 || photoLinksAr.length > 3) {
      return res.status(400).json({ message: 'You can upload up to 3 photos only.' });
    }

    await Media.create({
      title,
      title_ar,
      description,
      description_ar,
      thumbnail_image: thumbnailImage,
      thumbnail_image_ar: thumbnailImageAr,
      photos: photoLinks,
      photos_ar: photoLinksAr,
      video,
      video_ar
    });

    res.status(201).json({ message: 'Media created successfully' });
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

    const {
      title,
      title_ar,
      description,
      description_ar,
      video,
      video_ar
    } = req.body;

    const files = req.files || {};

    // Upload updated images if available
    if (files.thumbnail_image) {
      const thumb = await uploadFile(files.thumbnail_image[0]);
      media.thumbnail_image = thumb;
    }

    if (files.thumbnail_image_ar) {
      const thumbAr = await uploadFile(files.thumbnail_image_ar[0]);
      media.thumbnail_image_ar = thumbAr;
    }

    if (files.photos) {
      if (files.photos.length > 3) {
        return res.status(400).json({ message: 'You can upload up to 3 photos only.' });
      }
      media.photos = await Promise.all(files.photos.map(file => uploadFile(file)));
    }

    if (files.photos_ar) {
      if (files.photos_ar.length > 3) {
        return res.status(400).json({ message: 'You can upload up to 3 photos_ar only.' });
      }
      media.photos_ar = await Promise.all(files.photos_ar.map(file => uploadFile(file)));
    }

    // Update other fields
    media.title = title || media.title;
    media.title_ar = title_ar || media.title_ar;
    media.description = description || media.description;
    media.description_ar = description_ar || media.description_ar;
    media.video = video || media.video;
    media.video_ar = video_ar || media.video_ar;

    await media.save();
    res.json({ message: 'Media updated successfully', media });
  } catch (error) {
    res.status(500).json({ message: 'Server error', error });
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
