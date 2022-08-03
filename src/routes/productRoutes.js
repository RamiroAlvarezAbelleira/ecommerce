const express = require('express');
const router = express.Router();
const productController = require('../controllers/productController');
const multerMW = require('../middleware/multerMW');
const upload = multerMW('products', 'product-');

/*RUTAS*/
router.get('/', productController.list)
router.get('/detalle/:id', productController.productDetail)
router.get('/crear', productController.productCreateForm)
router.post('/crear', upload.array('image'), productController.create)
router.get('/editar/:id', productController.productEditForm);
router.put('/editar/:id', upload.array('image'), productController.edit);
router.delete('/eliminar/:id', productController.delete);

module.exports = router;