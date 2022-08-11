const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');
const multerMW = require('../middleware/multerMW');
const upload = multerMW('users', 'user-');
const validations = require('../middleware/validatorMW')
const loginValidations = require('../middleware/loginValidatorMW')
const guestRedMW = require('../middleware/guestRedMW')
const loggedUserRedMW = require('../middleware/loggedUserRedMW')

/*RUTAS*/

router.get('/login', guestRedMW, userController.loginForm);
router.post('/login', loginValidations, userController.login);
router.get('/register', guestRedMW, userController.registerForm);
router.post('/register', upload.array('image'), validations, userController.register);
router.get('/profile', loggedUserRedMW, userController.profile);
router.get('/logout', userController.logout);


module.exports = router;