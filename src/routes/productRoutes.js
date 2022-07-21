const express = require('express');
const router = express.Router();
const productController = require('../controllers/productController');

/*RUTAS*/
router.get('/detalle/:id', productController.productDetail)
router.get('/crear', productController.productCreateForm)
router.post('/crear', productController.create)
router.get('/editar/:id', productController.productEditForm);
router.put('/editar/:id', productController.edit);
router.delete('/eliminar/:id', productController.delete);

module.exports = router;