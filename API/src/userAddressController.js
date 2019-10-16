User = require('../models/userModel');
UserAddress = require('../models/userAddressModel');
const config = require('../config/secrets');

exports.add_address = async function(req, res){
    const address = new UserAddress(req.body);
    address.save(function(err,user){
        if(err) res.send(err);
        res.json(user);
    })
};

exports.get_all_address = async function(req, res) {
    UserAddress.find({}, function (err, product) {
        if (err) {
            res.send(err);
        }
        else {
            res.json(product);
        }
    });
};

exports.get_address_by_user = async function(req, res) {
    UserAddress.find({id_user: req.params.id_user}, function(err, address){
        if (err) {
            res.send(err);
        }
        else {
            res.json(address);
        }
    });
};

exports.update_address = async function(req, res) {
    UserAddress.findOne({id: req.body.id}, function(err, product){
        if (err) {
            res.send(err);
        }
        else {
            res.json(product);
        }
    });
};
