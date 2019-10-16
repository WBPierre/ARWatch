Product = require('../models/productModel');
ProductSize = require('../models/productSizeModel');
ProductTags = require('../models/productTagsModel');

const jwt = require('jsonwebtoken');
const config = require('../config/secrets');

exports.getAllProducts = function(req, res){
    Product.find({}, function (err, product) {
        if (err) {
            res.send(err);
        }
        else {
            res.json(product);
        }
    });
};

exports.getProduct = function(req, res){
    Product.findOne({id: req.body.id}, function(err, product){
        if (err) {
            res.send(err);
        }
        else {
            res.json(product);
        }
    });
};