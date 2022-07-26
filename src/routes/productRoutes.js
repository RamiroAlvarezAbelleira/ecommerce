const express = require('express');
const router = express.Router();
const productController = require('../controllers/productController');
const path = require('path');
const multer = require('multer');
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, path.join(__dirname, '../../public/images/products'));
    },
    filename: (req, file, cb) => {
        let fileName = 'user-' + Date.now() + path.extname(file.originalname);
        cb(null, fileName);
    }
})
const upload = multer({storage});

/*RUTAS*/
router.get('/', productController.list)
router.get('/detalle/:id', productController.productDetail)
router.get('/crear', productController.productCreateForm)
router.post('/crear', upload.single('image'), productController.create)
router.get('/editar/:id', productController.productEditForm);
router.put('/editar/:id', upload.single('image'), productController.edit);
router.delete('/eliminar/:id', productController.delete);

module.exports = router;