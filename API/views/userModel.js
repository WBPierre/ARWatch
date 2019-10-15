const mongoose = require('mongoose');

var Schema =  mongoose.Schema;

var userSchema = new Schema({
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    }
});
module.exports = mongoose.model('Users', userSchema);

/*
Possible var :
default: "Unknown"
type : String, Boolean, Number, Date (Date.now)
 */