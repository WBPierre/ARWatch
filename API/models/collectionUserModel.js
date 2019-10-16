const mongoose = require('mongoose');

var Schema =  mongoose.Schema;

var collection_userSchema = new Schema({

});
module.exports = mongoose.model('collection_user', collection_userSchema);
