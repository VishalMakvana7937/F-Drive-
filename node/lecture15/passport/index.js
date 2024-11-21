const express = require('express');
const bodyparser = require('body-parser');
const app = express();
const port = 3000;
const routes = require('./route/route');
const db = require('./config/db');
const cookie_parser = require('cookie-parser');
// const flash = require('flash');
const passport = require('passport');
const session = require('express-session');
// const LocalStrategy = require('passport-local').Strategy;


app.set('view engine', 'ejs');
app.use(bodyparser.urlencoded({ extended: false }));
// app.use(flash());
app.use(express.static('upload'));
app.use(cookie_parser());
app.use(session({
    secret: 'your-secret-key',
    resave: false,
    saveUninitialized: true,
    cookie: {secure: false}
}));
app.use(express.static('public'));
app.use(passport.initialize());
app.use(passport.session());
app.use('/', routes);

app.listen(port, () => {
    console.log("server start....3000");
})