const express = require('express');
const router = express.Router();

const {
  submitContactForm,
  getContacts,
  getContactById,
  updateContact,
  deleteContact
} = require('../controllers/contactController');

const { validateContact } = require('../middlewares/contactValidation');
const { protect } = require('../middlewares/authMiddleware');

// Create contact (requires login)
router.post('/', protect, validateContact, submitContactForm);

// Get all contacts (requires login)
router.get('/', protect, getContacts);

// Get single contact
router.get('/:id', protect, getContactById);

// Update contact
router.put('/:id', protect, validateContact, updateContact);

// Delete contact
router.delete('/:id', protect, deleteContact);

module.exports = router;
