const jsonDB = require('../model/jsonDatabase');
const userModel = jsonDB('users');
const { validationResult } = require('express-validator');
const bcryptjs = require('bcryptjs');

const controlador = {

    login: (req, res) => {
        res.render('users/login');
    },

    registerForm: (req, res) => {
        res.render('users/register');
    },

    register: (req, res) => {
        const resultValidation = validationResult(req);
        if(resultValidation.errors.length > 0) {
            const oldData = req.body
            res.render('users/register', {
                errors : resultValidation.mapped(),
                oldData
            });
        }
        else {
            let password = req.body.password;
            let user = {
                ...req.body,
                password: bcryptjs.hashSync(password)
            }
            delete user['user-confirm-password']
            delete user.userTerms
            let imagenes = [];
            for (let i = 0; i < req.files.length; i++) {
                imagenes.push(req.files[i].filename)
            }
            user.image = imagenes.length > 0 ? imagenes : ['default-user.png'];
            userModel.create(user);

            res.redirect('/');
            }
    }
}

module.exports = controlador;