const express = require('express');
const path = require('path');
const rootDir = require('../util/path');

const router = express.Router();

router.get('/success', (req, res, next) => {
    res.sendFile(path.join(rootDir,'views','success.html'));
  });
  router.post('/success', (req, res, next) => {
    const fname = req.body.fname;
    const lname = req.body.lname;
    const email = req.body.email;
    console.log('First name:', fname);
    console.log('Last name:', lname);
    console.log('Email:', email);
    res.redirect('/success');
  });
  
  module.exports = router;