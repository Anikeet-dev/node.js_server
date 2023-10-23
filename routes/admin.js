const express = require('express');

const router = express.Router();

router.get('/add-product', (req, res, next) => {

    res.send('<form action="/admin/add-product" method="POST"><input type="text" name="title" placeholder="Product Title"><br><input type="text" name="size" placeholder="Product Size"><br><button type="submit">Add Product</button></form>');
  });
  
  router.post('/add-product', (req, res, next) => {
  
    const title = req.body.title;
    const size = req.body.size;
    console.log('Product Title:', title);
    console.log('Product Size:', size);
    res.redirect('/');
  });

module.exports = router;