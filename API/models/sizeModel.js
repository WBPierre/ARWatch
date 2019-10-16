const mongoose = require('mongoose');

var Schema =  mongoose.Schema;

var sizeSchema = new Schema({

});
module.exports = mongoose.model('sizeModel.js', sizeSchema);
