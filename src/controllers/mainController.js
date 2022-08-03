const fs = require('fs');
const jsonDB = require('../model/jsonDatabase');
const productModel = jsonDB('bicisMtb');


const controlador = {

    index : (req, res) => {
        const bicisMtb = productModel.readFile();
        
        res.render('main/index', {
            bicisMtb: bicisMtb
        });
    }
};

module.exports = controlador;