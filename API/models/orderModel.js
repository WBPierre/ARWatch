const mongoose = require('mongoose');

var Schema =  mongoose.Schema;

var orderSchema = new Schema({

});
module.exports = mongoose.model('order', orderSchema);
