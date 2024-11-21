const fs = require("fs");
const model_user = require('../models/admin-models');
// const cookie_parser = require('cookie-parser');

const defaultcontroller = (req, res) => {
    const { session } = req.cookies;
    console.log('Session store', session);
    try {
        if (session) {
            res.render('Home');
        } else {
            res.redirect('/Signin');
        }
    } catch (err) {
        console.log(err);
    }
}

const chartecontroller = (req, res) => {
    res.render('Charte');
}

const signincontroller = (req, res) => {
    try {
        res.render('Signin');
    } catch (err) {
        console.log('Error', err);
    }
}

const signupcontroller = (req, res) => {
    try {
        res.render('Signup');
    } catch (err) {
        console.log('Error', err);
    }
}

const signupaddcontroller = async (req, res) => {
    try {
        const { username, email, password } = req.body;
        const signupuser = new model_user({
            username,
            email,
            password
        });
        await signupuser.save();
        console.log('Newly created user:', signupuser);
        return res.render('Signin');
    } catch (err) {
        console.log('Error:', err);
    }
}


const signinaddcontroller = async (req, res) => {
    try {
        const { email, password } = req.body;

        const admin = await model_user.find({ email });
        console.log('Signin user', admin);

        if (admin.length != 0) {

            if (admin[0].password == password) {

                res.cookie("session", admin[0].id);
                res.redirect('/');

            } else {

                res.redirect('/Signin');

            }
        }
    } catch (err) {

        console.log("err", err);

    }
}

const logoutaddcontroller = (req, res) => {
    res.clearCookie('session');
    res.redirect("/Signin");
}

const formaddcontroller = (req,res) => {
    try{
        res.render('Form');
    }catch(err){
        console.log(err);
    }
}

module.exports = { defaultcontroller, chartecontroller, signincontroller, signupcontroller, signupaddcontroller, signinaddcontroller, logoutaddcontroller, formaddcontroller };