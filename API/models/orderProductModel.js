const mongoose = require('mongoose');

var Schema =  mongoose.Schema;

var orderProductSchema = new Schema({
    id_product:{
        type: Number,
        required: true
    },
    id_order:{
        type: Number,
        required: true
    }
});
module.exports = mongoose.model('orderProduct', orderProductSchema);
