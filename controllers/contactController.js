const Contact = require('../models/contact');

// Create contact (already defined)
const submitContactForm = async (req, res) => {
  try {
    const { name, email, phone, subject, message } = req.body;

    const contact = new Contact({
      name,
      email,
      phone,
      subject,
      message,
      user: req.user ? req.user._id : null
    });

    await contact.save();
    res.status(201).json({ message: 'Message sent successfully' });
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
};

// Get all contacts
const getContacts = async (req, res) => {
  try {
    const contacts = await Contact.find().sort({ createdAt: -1 });
    res.json(contacts);
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
};

// Get single contact
const getContactById = async (req, res) => {
  try {
    const contact = await Contact.findById(req.params.id);
    if (!contact) return res.status(404).json({ message: 'Contact not found' });

    res.json(contact);
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
};

// Update contact
const updateContact = async (req, res) => {
  try {
    const contact = await Contact.findById(req.params.id);
    if (!contact) return res.status(404).json({ message: 'Contact not found' });

    const { name, email, phone, subject, message } = req.body;

    contact.name = name || contact.name;
    contact.email = email || contact.email;
    contact.phone = phone || contact.phone;
    contact.subject = subject || contact.subject;
    contact.message = message || contact.message;

    await contact.save();
    res.json({ message: 'Contact updated', contact });
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
};

// Alternative: deleteContact using findByIdAndDelete
const deleteContact = async (req, res) => {
    try {
      const contact = await Contact.findByIdAndDelete(req.params.id);
      if (!contact) return res.status(404).json({ message: 'Contact not found' });
  
      res.json({ message: 'Contact deleted' });
    } catch (error) {
      res.status(500).json({ message: 'Server error' });
    }
  };

module.exports = {
  submitContactForm,
  getContacts,
  getContactById,
  updateContact,
  deleteContact
};
