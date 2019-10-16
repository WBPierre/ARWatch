module.exports = function(app){
    const products = require('../src/productController');

    app.route('/products')
        .get(products.getAllProducts);

    app.route('/products/:productId')
        .get(products.getProduct);

    app.route('/products/create')
        .post(products.createProduct);
};



