const fs = require('fs');
const jsonDB = require('../model/jsonDatabase');
const productModel = jsonDB('bicisMtb');
const path = require('path');

const controlador = {

    list: (req, res) => {
        const products = productModel.readFile();
        res.render('products/products', {products});
    },

    productDetail : (req, res) => {
        let id = Number(req.params.id);
        let products = productModel.readFile();
        let product = products.find(producto => producto.id == id);

        res.render('products/productDetail', {product});

    },

    productCreateForm : (req, res) => {
        res.render('products/productCreate');
    },

    create : (req, res) => {
        
        let articulo = req.body
        let imagenes = [];
        for (let i = 0; i < req.files.length; i++) {
            imagenes.push(req.files[i].filename)
        }
        articulo.image = imagenes.length > 0 ? imagenes : ['default-product.jpg']
        productModel.create(articulo);
        res.redirect('/productos');
    },

    productEditForm: (req, res) => {
        let id = Number(req.params.id);
        let products = productModel.readFile();
        let product = products.find(producto => producto.id == id);

        res.render('products/productEdit', {product});
    },

    edit: (req, res) => {
        let id = Number(req.params.id);
        let product = productModel.find(id);
        let updatedProduct = req.body;
        let imagenes = [];
        console.log(req.files);
        for (let i = 0; i < req.files.length; i++) {
            imagenes.push(req.files[i].filename)
        }
        updatedProduct.image = imagenes.length > 0 ? imagenes : product.image
        productModel.update(updatedProduct)

        res.redirect(`/productos/detalle/${id}`);
    },

    delete: (req, res) => {
        let id = Number(req.params.id);
        let product = productModel.find(id);
        let pathToImage = path.join(__dirname, '../../public/images/products/'+ product.image[0]);
        fs.unlinkSync( pathToImage );
        productModel.delete(id);
        res.redirect('/');
    }
}

module.exports = controlador;