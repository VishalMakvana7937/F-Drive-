const express = require('express');
const productmodel = require('../models/product');
const router = express.Router();

router.get('/', (req, res) => {
    res.render('index', { title: 'Home' });
})

router.get('/views', async (req, res) => {
    console.log('..........', req.body);

    let pro = await productmodel.find({});

    res.render('views', { pro });

})

router.post('/delete/:Id', async (req, res) => {
    const Id = req.params.Id;
    console.log('id.........',Id);
    await productmodel.deleteOne({_id:Id});
    res.redirect('/views');
});

router.get('/aboute', (req, res) => {
    res.render('aboute', { title: 'About' });
})

router.post('/addPro', (req, res) => {
    console.log(req.body);

    const productData = new productmodel({
        productname: req.body.name,
        rate: req.body.rating,
        category: req.body.category
    });

    console.log("Error...............", productData);

    productData.save();

    res.redirect('/views');
})
module.exports = router;