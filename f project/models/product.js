const mongoose = require('mongoose');

const productscema = new mongoose.Schema({
    product_name: String,
    rate: Number,
    catagory: String
})

const productmodel = mongoose.model("product", productscema);
module.exports = productmodel;