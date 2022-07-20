const fs = require('fs');
const path = require('path');


const controlador = {

    index : (req, res) => {
        const bicisMtbJSON = fs.readFileSync('database/bicisMtb.json', {encoding: 'utf-8'});
        let bicisMtb
        if (bicisMtbJSON == "") {
            bicisMtb = [];
        }
        else {
            bicisMtb = JSON.parse(bicisMtbJSON);
        }
        
        res.render('main/index', {
            bicisMtb: bicisMtb
        });
    }
};

module.exports = controlador;