const jsonDB = require('../model/jsonDatabase');
const { User } = require('../database/models');
const { Op } = require('sequelize');
const { validationResult } = require('express-validator');
const bcryptjs = require('bcryptjs');

const controlador = {

    loginForm: (req, res) => {
        res.render('users/login');
    },

    login: async (req, res) => {
        const resultValidation = validationResult(req);

        try {
            if(resultValidation.errors.length > 0) {
                res.render('users/login', {
                    errors : resultValidation.mapped(),
                });
            } else {
                let user = await User.findOne({
                    where: {
                        email: {[Op.like]: req.body.email}
                    }
                });
                delete user.password;
                req.session.userLogged = user;
                res.redirect('/usuarios/profile')
            }
        } catch (error) {
            res.json(error.message)
        }

        
        
    },

    registerForm: (req, res) => {
        res.render('users/register');
    },

    register: async (req, res) => {
        const resultValidation = validationResult(req);

        try {
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
                    password: bcryptjs.hashSync(password, 10),
                    roleId: 2
                }
                delete user['user-confirm-password']
                delete user.userTerms
                user.image = req.files.length > 0 ? req.files.filename : 'default-user.png';
                await User.create(user)
                res.redirect('/usuarios/login');
                }
        } catch (error) {
            res.json(error.message)
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