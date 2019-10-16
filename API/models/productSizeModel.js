const mongoose = require('mongoose');

var Schema =  mongoose.Schema;

var product_sizeSchema = new Schema({

});
module.exports = mongoose.model('product_size', product_sizeSchema);
