const mongoose = require('mongoose');

var Schema =  mongoose.Schema;

var user_addressSchema = new Schema({

});
module.exports = mongoose.model('user_address', user_addressSchema);
