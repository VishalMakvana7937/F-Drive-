const express = require('express');
const bodyparser = require('body-parser');
const app = express();
const port = 3000;
const routes = require('./route/route');
const db = require('./config/db');
const cookie_parser = require('cookie-parser');


app.set('view engine', 'ejs');
app.use(bodyparser.urlencoded({ extended: false }));
app.use(express.static('public'));
app.use(cookie_parser());

app.use('/', routes);

app.listen(port, () => {
    console.log("server start....3000");
})