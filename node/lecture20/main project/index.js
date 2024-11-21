import dotenv from 'dotenv';
dotenv.config();
import express from 'express'
const app = express();
const port = process.env.PORT;
import bodyParser from 'body-parser';
import studentroute from './route/students.js';
import routes from './route/index.js';
import adminsroute from './route/admin.js'
import db from './config/db.js';

app.use(bodyParser.json());
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use('/',routes);
app.use('/', studentroute);
app.use('/', adminsroute);

app.listen(port, () => {
    console.log("server run...", port);
})

