const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    name : {
        type : String,
        required : true
    },
    emai : {
        type: String,
        required : true,
        unique : true
    },
    phone : {
        type : Number,
        default : 0
    },
    password: {
        type : String,
        required : true,
    },
    confirmPassword: {
        type : String,
        required : true,
    }
});

const User = mongoose.model('User',userSchema);

module.exports = User;