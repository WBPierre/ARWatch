const mongoose = require('mongoose');

var Schema =  mongoose.Schema;

var productSchema = new Schema({
    viewed_times: {
        type: Number,
        required: true,
    },
});
module.exports = mongoose.model('product', productSchema);
