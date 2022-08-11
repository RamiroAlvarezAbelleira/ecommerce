const { body } = require('express-validator');
const path = require('path');
const jsonDB = require('../model/jsonDatabase');
const userModel = jsonDB('users');

const validations = [
    body('firstname').notEmpty().withMessage('Debe ingresar un nombre'),
    body('lastname').notEmpty().withMessage('Debe ingresar un apellido'),
    body('birthdate').notEmpty().withMessage('Debe ingresar su fecha de nacimiento'),
    body('email').notEmpty().withMessage('Debe ingresar un email').bail()
    .custom((value, { req }) => {
        let itExists = userModel.findEmail(value);
        console.log(itExists)
        if(itExists != undefined) {
            throw new Error('este mail se encuentra registrado');
        }
        return true;
    }),
    body('password').notEmpty().withMessage('Debe ingresar una contraseña').bail()
    .custom((value, { req }) => {
        if(value != req.body['user-confirm-password']) {
            throw new Error('las contraseñas deben coincidir')
        }
        return true;
    }),
    body('user-confirm-password').notEmpty().withMessage('Debe reingresar la contraseña'),
    body('phonenumber').notEmpty().withMessage('Debe ingresar un numero de telefono'),
    body('userTerms').notEmpty().withMessage('Debe aceptar los terminos de usuario'),
    body('image').custom((value, { req }) => {
        let files = req.files;
        let acceptedExtensions = ['.jpg', '.jpeg', '.png'];
        
        if(files) {
            files.forEach(file => {
                let fileExtension = path.extname(file.originalname);
                if(!acceptedExtensions.includes(fileExtension)) {
                    throw new Error('extensiones aceptadas: .png .jpg .jpeg')
                }
            })
        }
        
        return true;
    })
]

module.exports = validations