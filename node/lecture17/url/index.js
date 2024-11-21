const express = require('express');
const bodyparser = require('body-parser');
const routes = require('./route/route');
const app = express();
require('dotenv').config();
const db = require('./config/db');
const port = process.env.DB_HOST;

app.use(bodyparser.urlencoded({ extended: false }));
app.use(bodyparser.json());

app.use('/', routes);

app.listen(port, () => {
    console.log("server start....3000");
})