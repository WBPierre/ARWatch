const mongoose = require('mongoose');

var Schema =  mongoose.Schema;

var collectionSchema = new Schema({
    viewed_times: {
        type: Number,
        required: true,
    },
});
module.exports = mongoose.model('collection', collectionSchema);
