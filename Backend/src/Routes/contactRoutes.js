// routes/contactRoutes.js
const express = require('express');
const router = express.Router();
const contactController = require('../Controllers/contactController');

// POST route to handle contact form submissions
router.post('/', contactController.createContact);

// GET route to fetch all messages (for the admin)
router.get('/messages', contactController.getAllMessages);

module.exports = router;
