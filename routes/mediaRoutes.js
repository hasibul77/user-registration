const express = require('express');
const router = express.Router();
const {createMedia,getAllMedia,getMediaById,updateMedia,deleteMedia} = require('../controllers/mediaController');
const { validateMedia } = require('../middlewares/validateMedia');
const { protect } = require('../middlewares/authMiddleware');
const multer = require('multer');
const upload = multer();

// All fields optional, no max count
router.post(
  '/',
  protect,
  upload.fields([
    { name: 'thumbnail_image' },
    { name: 'thumbnail_image_ar' },
    { name: 'photos' },
    { name: 'photos_ar' }
  ]),
  validateMedia,
  createMedia
);

router.get('/', protect, getAllMedia);
router.get('/:id', protect, getMediaById);

router.put(
  '/:id',
  protect,
  upload.fields([
    { name: 'thumbnail_image' },
    { name: 'thumbnail_image_ar' },
    { name: 'photos' },
    { name: 'photos_ar' }
  ]),
  validateMedia,
  updateMedia
);

router.delete('/:id', protect, deleteMedia);

module.exports = router;
