const jsonDB = require('../model/jsonDatabase');
const userModel = jsonDB('users');
const { validationResult } = require('express-validator');
const bcryptjs = require('bcryptjs');

const controlador = {

    loginForm: (req, res) => {
        res.render('users/login');
    },

    login: (req, res) => {
        const resultValidation = validationResult(req);
        if(resultValidation.errors.length > 0) {
            res.render('users/login', {
                errors : resultValidation.mapped(),
            });
        } else {
            let user = userModel.findEmail(req.body.email);
            delete user.password;
            req.session.userLogged = user;
            res.redirect('/usuarios/profile')
        }
        
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
                password: bcryptjs.hashSync(password, 10)
            }
            delete user['user-confirm-password']
            delete user.userTerms
            let imagenes = [];
            for (let i = 0; i < req.files.length; i++) {
                imagenes.push(req.files[i].filename)
            }
            user.image = imagenes.length > 0 ? imagenes : ['default-user.png'];
            userModel.create(user);

            res.redirect('/usuarios/login');
            }
    },

    profile: (req, res) => {
        res.render('users/profile', {
            user: req.session.userLogged
        });
    },

    logout: (req, res) => {
        req.session.destroy()
        res.redirect('/');
    }
}

module.exports = controlador;