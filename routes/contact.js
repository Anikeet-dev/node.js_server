const express = require('express');
const path = require('path');
const rootDir = require('../util/path');

const router = express.Router();
const contactController = require('../controllers/contactPage');

router.get('/contact-us', contactController.getContact);

module.exports = router;