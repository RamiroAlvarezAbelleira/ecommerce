const { body } = require('express-validator');

const validations = [
    body('firstname').notEmpty().withMessage('Debe ingresar un nombre'),
    body('lastname').notEmpty().withMessage('Debe ingresar un apellido'),
    body('birthdate').notEmpty().withMessage('Debe ingresar su fecha de nacimiento'),
    body('email').notEmpty().withMessage('Debe ingresar un email'),
    body('password').notEmpty().withMessage('Debe ingresar una contraseña'),
    body('user-confirm-password').notEmpty().withMessage('Debe reingresar la contraseña'),
    body('phonenumber').notEmpty().withMessage('Debe ingresar un numero de telefono'),
    body('userTerms').notEmpty().withMessage('Debe aceptar los terminos de usuario')
]

module.exports = validations