const express = require('express');
const bodyparser = require('body-parser');
const app = express();
const port = 3000;
const router = require('./routes/routte.js');
const db = require('./configs/db.js')

app.set("view engine", 'ejs');
// app.use(bodyparser.json());
app.use(bodyparser.urlencoded({ extended: true }));
app.use(express.static('public'));
app.use('/', router);


app.listen(port, () => {
    console.log('Server start...');
}) 