const mongoose = require('mongoose');

var Schema =  mongoose.Schema;

var productCollectionSchema = new Schema({
    id_product: {
        type: Number,
        required: true
    },
    id_collection:{
        type: Number,
        required: true
    }
});
module.exports = mongoose.model('productCollection', productCollectionSchema);
