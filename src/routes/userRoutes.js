const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');

/*RUTAS*/

router.get('/login', userController.login)
router.get('/register', userController.registerForm);
router.post('/register', userController.register);


module.exports = router;