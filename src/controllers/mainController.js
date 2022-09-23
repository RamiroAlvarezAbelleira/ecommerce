const db = require('../database/models');
const toThousand = n => n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");


const controlador = {

    index: async (req, res) => {
        try {
            const products = await db.Product.findAll({
                include: [db.Image]
            });
        
            res.render('main/index', {products, toThousand});
        } catch (error) {
            res.json(error.message)
        }
        
    }
};

module.exports = controlador;