const mongoose = require('mongoose');

const productschema = new mongoose.Schema({
    productname: String,
    rate: Number,
    catagory: String
})

const productmodel = mongoose.model("product", productschema);

module.exports = productmodel;