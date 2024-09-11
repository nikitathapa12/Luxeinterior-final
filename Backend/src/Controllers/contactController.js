// controllers/contactController.js
const Contact = require('../Models/contactModel');

// Function to create a new contact message
const createContact = async (req, res) => {
  try {
    const { name, email, phone, subject, message } = req.body;

    if (!name || !email || !subject || !message) {
      return res.status(400).json({ message: 'All fields are required.' });
    }

    const contact = new Contact({ name, email, phone, subject, message });
    await contact.save();

    res.status(201).json({ message: 'Message sent successfully!' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server error. Please try again later.' });
  }
};

// Function to fetch all contact messages
const getAllMessages = async (req, res) => {
  try {
    const messages = await Contact.find().sort({ createdAt: -1 }); // Sort by latest messages
    res.status(200).json(messages);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server error. Please try again later.' });
  }
};

module.exports = {
  createContact,
  getAllMessages,
};
