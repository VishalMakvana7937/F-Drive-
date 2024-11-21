const mongoose = require('mongoose');

const myurlSchema = new mongoose.Schema({
    name: {
        type: String,
        // required: true,
    },
    email: {
        type: String,
        // required: true,
    },
    contact: {
        type: String,
        // required: true,
    }
});

const urlModel = mongoose.model('admincollection', myurlSchema);

module.exports = urlModel;
