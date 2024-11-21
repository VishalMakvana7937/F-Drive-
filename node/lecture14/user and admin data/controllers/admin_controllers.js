const fs = require("fs");
const model_user = require('../models/admin-models');
const bloguuser = require('../models/blog-models')
const bcrypt = require('bcrypt')

const defaultcontroller = async (req, res) => {
    const { session } = req.cookies;
    console.log('Session store', session);
    try {
        const userId = req.cookies.session;
        const user = await model_user.findById(userId);
        if (session) {
            if (user) {
                res.render('Home', { user: user });
            }
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
        const { username, email, password, bio, newpassword, conpassword, type } = req.body;
        const hashedPassword = await bcrypt.hash(password, 10);
        const signupuser = new model_user({
            username,
            email,
            password: hashedPassword,
            bio,
            newpassword,
            conpassword,
            type
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
            bcrypt.compare(password, admin[0].password).then((result) => {
                console.log(result);
                if (result) {

                    res.cookie("session", admin[0].id);
                    res.redirect('/');

                } else {

                    res.redirect('/Signin');

                }
            }).catch((err) => {
                console.log(err);
            })
        }
    } catch (err) {

        console.log("err", err);

    }
}

const logoutaddcontroller = (req, res) => {
    res.clearCookie('session');
    res.redirect("/Signin");
}

const formaddcontroller = (req, res) => {
    try {
        res.render('Form');
    } catch (err) {
        console.log(err);
    }
}

const blogdetailadd = async (req, res) => {
    try {
        const { title, author, type } = req.body;
        const userId = req.cookies.session;
        const newBlog = new bloguuser({
            title,
            avatar: req.file.filename,
            author,
            userId,
            type
        });

        await newBlog.save();
        console.log('New blog:', newBlog);
        res.redirect('/Table');
    } catch (err) {
        console.log(err);
    }
}

const tablecontroller = async (req, res) => {
    try {
        const userId = req.cookies.session;

        let blogdata = await bloguuser.find({ userId });
        console.log("Blog data:", blogdata);

        res.render('Table', { blogdata });
    } catch (error) {
        console.error("Error fetching blog data:", error);
    }
}

const deletcontroller = async (req, res) => {
    let { id } = req.params;
    await bloguuser.deleteOne({ _id: id });
    console.log(id);
    res.redirect('/Table');
}

const profilecontroller = async (req, res) => {
    try {
        const userId = req.cookies.session;
        const user = await model_user.findById(userId);
        if (user) {
            res.render('Profile', { user: user });
        } else {
            res.redirect('/signin');
        }
        console.log('User', user);
    } catch (error) {
        console.error(error);
    }
}

const profileeditcontroller = async (req, res) => {
    try {
        const userId = req.cookies.session;
        const { name, email, username, bio } = req.body;


        const user = await model_user.findById(userId);
        if (user) {

            user.name = name;
            user.email = email;
            user.username = username;
            user.bio = bio;

            await user.save();

            res.redirect('/Profile');
        } else {

            res.redirect('/Signin');
        }
    } catch (err) {
        console.error(err);
        res.redirect('/Signin');
    }
};


const profileeditcontroller1 = async (req, res) => {
    try {
        const userId = req.cookies.session;
        const user = await model_user.findById(userId);
        if (user) {
            res.render('Profileedit', { user: user });
        } else {
            res.redirect('/signin');
        }
    } catch (err) {
        console.error(err);
        res.redirect('/signin');

    }
};

const changepasswordcontroller1 = async (req, res) => {
    try {
        res.render('Changepassword');
    } catch (err) {
        console.error(err);
    }
}

const changepacontroller1 = async (req, res) => {
    try {
        const userId = req.cookies.session;
        const { password, newpassword, conpassword } = req.body;

        const user = await model_user.findById(userId);
        if (!user) {
            return res.redirect('/Signin');
        }

        const isPasswordValid = await bcrypt.compare(password, user.password);
        if (!isPasswordValid) {
            return res.render('changepassword', { error: 'Old password is incorrect' });
        }

        // if (user.password !== password) {
        //     return res.render('changepassword', { error: 'Old password is incorrect' });
        // }

        if (newpassword !== conpassword) {
            return res.render('changepassword', { error: 'New password and confirm password do not match' });
        }

        const hashedNewPassword = await bcrypt.hash(newpassword, 10);
        user.password = hashedNewPassword;
        await user.save();

        res.redirect('/Profile');
    } catch (err) {
        console.error(err);
        // res.redirect('/Signin');
    }
}

const typescontroller = async (req, res) => {
    try {
        res.render('Type');
    } catch (err) {
        console.error(err);
    }
}

const typecontroller = async (req, res) => {
    try {
        const { type } = req.body;
        const newtype = new bloguuser({
            type
        });
        await newtype.save();
        console.log('Type data...', newtype);
        res.redirect('/Type');
    } catch (err) {
        console.error(err);
    }
}

module.exports = { defaultcontroller, chartecontroller, signincontroller, signupcontroller, signupaddcontroller, signinaddcontroller, logoutaddcontroller, formaddcontroller, blogdetailadd, tablecontroller, deletcontroller, profilecontroller, profileeditcontroller1, profileeditcontroller, changepasswordcontroller1, changepacontroller1, typecontroller, typescontroller };