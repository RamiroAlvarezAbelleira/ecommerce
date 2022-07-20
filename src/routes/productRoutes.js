const express = require('express');
const router = express.Router();
const productController = require('../controllers/productController');

router.get('/crear', productController.productCreateForm)
router.post('/crear', productController.create)

module.exports = router;