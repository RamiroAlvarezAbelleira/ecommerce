const express = require('express');
const router = express.Router();
const productController = require('../controllers/productController');

/*RUTAS*/
router.get('/detalle/:id', productController.productDetail)
router.get('/crear', productController.productCreateForm)
router.post('/crear', productController.create)

module.exports = router;