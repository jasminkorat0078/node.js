const path = require('path');

const express = require('express');

const rootDir = require('../util/path');
const adminData = require('./admin');

const router = express.Router();

router.get('/', (req, res, next) => {
    console.log(adminData.products);
    const products = adminData.products;
  //res.sendFile(path.join(rootDir, 'views', 'shop.html'));
  res.render('shop',{prods:products,docTitle:'Shop Product'})
});

module.exports = router;
