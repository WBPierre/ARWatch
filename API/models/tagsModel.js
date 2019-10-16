const mongoose = require('mongoose');

var Schema =  mongoose.Schema;

var tagsSchema = new Schema({

});
module.exports = mongoose.model('tags', tagsSchema);
