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
    }).sort({viewed_times: -1});
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

exports.createProduct = function(req, res){
    var newProduct = new Product(req.body);
    console.log(req.body)
    newProduct.save(function(err,product){
        if(err){
            res.send(err);
        }
        else{
            res.json(product);
        }
    });
}