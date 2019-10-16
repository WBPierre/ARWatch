const mongoose = require('mongoose');

var Schema =  mongoose.Schema;

var productSchema = new Schema({
    viewed_times: {
        type: Number,
        required: true,
    },
    price: {
        type: Number,
        required: true,
    },
    name: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    }
});
module.exports = mongoose.model('product', productSchema);
