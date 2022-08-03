const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');
const multerMW = require('../middleware/multerMW');
const upload = multerMW('users', 'user-');
const validations = require('../middleware/validatorMW')

/*RUTAS*/

router.get('/login', userController.login)
router.get('/register', userController.registerForm);
router.post('/register', upload.array('image'), validations, userController.register);


module.exports = router;