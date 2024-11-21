const express = require('express');
const productmodel = require('../models/product.js');
const routes = express();

routes.get('/', (req, res) => {
    res.render('index', { title: 'Home' });

    const productdata = new productmodel({
        product_name: 'Laptop',
        rate: 3.2,
        catagory: "electronic"
    })

    productdata.save();

    res.render('index', { title: 'Home' });
})

routes.get('/aboute', (req, res) => {
    res.render('aboute', { title: 'About' });
})

module.exports = routes;