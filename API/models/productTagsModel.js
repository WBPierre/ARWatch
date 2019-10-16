const mongoose = require('mongoose');

var Schema =  mongoose.Schema;

var product_tagsSchema = new Schema({

});
module.exports = mongoose.model('product_tags', product_tagsSchema);
