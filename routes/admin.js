const express = require('express');
const path = require('path');
const rootDir = require('../util/path');

const router = express.Router();

router.get('/add-product', (req, res, next) => {

    res.sendFile(path.join(rootDir,'views','add-product.html'));
  });
    
  router.post('/add-product', (req, res, next) => {
  
    const title = req.body.title;
    const size = req.body.size;
    console.log('Product Title:', title);
    console.log('Product Size:', size);
    res.redirect('/add-product');
  });

module.exports = router;