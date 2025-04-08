const express = require('express');
const router = express.Router();
const {createMedia,getAllMedia,getMediaById,updateMedia,deleteMedia} = require('../controllers/mediaController');
const { validateMedia } = require('../middlewares/validateMedia');
const { protect } = require('../middlewares/authMiddleware');
const multer = require('multer');
const upload = multer();

// Create Media
router.post(
  '/',
  protect,
  upload.fields([
    { name: 'thumbnail_image', maxCount: 1 },
    { name: 'photos', maxCount: 3 }
  ]),
  validateMedia,
  createMedia
);

// Read All Media
router.get('/', protect, getAllMedia);

// Read Single Media by ID
router.get('/:id', protect, getMediaById);

// Update Media
router.put(
  '/:id',
  protect,
  upload.fields([
    { name: 'thumbnail_image', maxCount: 1 },
    { name: 'photos', maxCount: 3 }
  ]),
  validateMedia,
  updateMedia
);

// Delete Media
router.delete('/:id', protect, deleteMedia);

module.exports = router;
