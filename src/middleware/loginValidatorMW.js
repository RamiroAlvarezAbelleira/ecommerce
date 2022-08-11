const { body } = require('express-validator');
const jsonDB = require('../model/jsonDatabase');
const userModel = jsonDB('users');
const bcryptjs = require('bcryptjs');

const validations = [
    body('email').notEmpty().withMessage('Debe ingresar un email').bail()
    .custom((value, { req }) => {
        let itExists = userModel.findEmail(value);
        if(itExists == undefined) {
            throw new Error('mail o contraseña incorrecto');
        }
        return true;
    }).bail(),
    body('password').notEmpty().withMessage('mail o contraseña incorrecto').bail()
    .custom((value, { req }) => {
        let user = userModel.findEmail(req.body.email);
        if(!bcryptjs.compareSync(value, user.password)) {
            throw new Error('mail o contraseña incorrecto')
        }
        return true;
    })
]

module.exports = validations