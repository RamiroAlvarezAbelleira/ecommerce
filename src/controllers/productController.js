const fs = require('fs');

const controlador = {

    productDetail : (req, res) => {
        let id = Number(req.params.id);
        let productsJSON = fs.readFileSync('database/bicisMtb.json', {encoding: 'utf-8'});
        let products = JSON.parse(productsJSON);
        let product = products.find(producto => producto.id == id);

        res.render('products/productDetail', {product});

    },

    productCreateForm : (req, res) => {
        res.render('products/productCreate');
    },

    create : (req, res) => {
        
        let articulo = {
            id: req.body.id,
            product: req.body.product,
            type: req.body.type,
            description: req.body.description,
            image: req.body.image,
            price: req.body.price,
            discount: req.body.discount,
            brand: req.body.brand,
            model: req.body.model,
            size: req.body.size,
            color: req.body.color,
            rolled: req.body.rolled,
            frame: req.body.frame,
            shifter: req.body.shifter,
            brakes: req.body.brakes,
            suspention: req.body.suspention,
            tires: req.body.tires,
            info: req.body.info
        }
        let bicisMtbJSON = fs.readFileSync('database/bicisMtb.json', {encoding: 'utf-8'});
        let bicisMtb
        if (bicisMtbJSON == "") {
            bicisMtb = [];
        }
        else {
            bicisMtb = JSON.parse(bicisMtbJSON);
        }

        
        bicisMtb.push(articulo);
        bicisMtbNewJSON = JSON.stringify(bicisMtb);
        fs.writeFileSync('database/bicisMtb.json', bicisMtbNewJSON);

        res.redirect('/productos/crear');
    }
}

module.exports = controlador;