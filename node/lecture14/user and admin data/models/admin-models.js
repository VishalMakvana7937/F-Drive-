const mongoose = require('mongoose');

const adminSchema = new mongoose.Schema({
    username: {
        type: String,
        // required: true,
        unique: true
    },
    email: {
        type: String,
        // required: true,
        unique: true
    },
    password: {
        type: String,
        // required: true,
    },
    newpassword: {
        type: String,
        // required: true,
    },
    conpassword: {
        type: String,
        // required: true,
    },
    // title: {
    //     type: String
    // },
    bio: {
        type: String,
        require: false
    }
});

const adminModel = mongoose.model('admincollection', adminSchema);

module.exports = adminModel;
