const fs = require('fs');
const jsonDB = require('../model/jsonDatabase');
const productModel = jsonDB('bicisMtb');

const controlador = {

    list: (req, res) => {
        const products = productModel.readFile();
        res.render('products/products', {products});
    },

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
    },

    productEditForm: (req, res) => {
        let id = Number(req.params.id);
        let productsJSON = fs.readFileSync('database/bicisMtb.json', {encoding: 'utf-8'});
        let products = JSON.parse(productsJSON);
        let product = products.find(producto => producto.id == id);

        res.render('products/productEdit', {product});
    },

    edit: (req, res) => {
        let id = Number(req.params.id);
        let productsJSON = fs.readFileSync('database/bicisMtb.json', {encoding: 'utf-8'});
        let products = JSON.parse(productsJSON);
        products.forEach((producto) => {
            if(producto.id == id) {
                producto.id = req.body.id;
                producto.product = req.body.product;
                producto.type = req.body.type;
                producto.description = req.body.description;
                producto.image = req.body.image;
                producto.price = req.body.price;
                producto.discount = req.body.discount;
                producto.brand = req.body.brand;
                producto.model = req.body.model;
                producto.size = req.body.size;
                producto.color = req.body.color;
                producto.rolled = req.body.rolled;
                producto.frame = req.body.frame;
                producto.shifter = req.body.shifter;
                producto.brakes = req.body.brakes;
                producto.suspention = req.body.suspention;
                producto.tires = req.body.tires;
                producto.info = req.body.info;
            }
        });
        newProductsJSON = JSON.stringify(products);
        fs.writeFileSync('database/bicisMtb.json', newProductsJSON);

        res.redirect(`/productos/detalle/${id}`);
    },

    delete: (req, res) => {
        let id = Number(req.params.id);
        let productsJSON = fs.readFileSync('database/bicisMtb.json', {encoding: 'utf-8'});
        let products = JSON.parse(productsJSON);
        for (let i = 0; i < products.length; i++) {
            if(products[i].id == id) {
                products.splice(i);
            }
        }
        let newProductsJSON = JSON.stringify(products);
        fs.writeFileSync('database/bicisMtb.json', newProductsJSON)
        res.redirect('/');
    }
}

module.exports = controlador;