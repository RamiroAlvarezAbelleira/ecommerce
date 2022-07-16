const path = require('path');

const indexPath = path.join(__dirname, '../views/index.html')

const controlador = {

    index : (req, res) => {
        res.render('index');
    }
};

module.exports = controlador;