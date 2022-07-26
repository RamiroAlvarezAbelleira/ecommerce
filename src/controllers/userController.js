const jsonDB = require('../model/jsonDatabase');
const userModel = jsonDB('users');

const controlador = {

    login: (req, res) => {
        res.render('users/login');
    },

    registerForm: (req, res) => {
        res.render('users/register');
    },

    register: (req, res) => {
        let user = req.body;
        user.image = 'default-user.png';
        userModel.create(user);
    }
}

module.exports = controlador;