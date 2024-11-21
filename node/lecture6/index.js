const express = require('express');
const app = express();
const port = 7000;
const routes = require('./routes/routte.js');
const db = require('./configs/db.js')

app.set("view engine", "ejs");
app.use('/', routes);
app.use(express.static('public'));

app.listen(port, () => {
    console.log('Server start...');
})