const fs = require("fs");
const model_user = require('../models/admin-models');
const bloguuser = require('../models/blog-models')
const bcrypt = require('bcrypt');
const otpGenerator = require('otp-generator');
const { render } = require("ejs");
const nodemailer = require('nodemailer');

// Create a transporter using SMTP transport
const transporter = nodemailer.createTransport({
    service: 'Gmail',
    port: 465,
    secure: true,
    auth: {
        user: 'vm4595228@gmail.com',
        pass: 'wkozynytywcdcngb',
    }
});

const defaultcontroller = async (req, res) => {
    // const { session } = req.cookies;
    // console.log('Session store', session);
    // try {
    //     const userId = req.cookies.session;
    //     const user = await model_user.findById(userId);
    //     if (session) {
    //         if (user) {
    //             res.render('Home', { user    : user });
    //         }
    //     } else {
    //         res.redirect('/Signin');
    //     }
    // } catch (err) {
    //     console.log(err);
    // }

    const allBlogs = await bloguuser.find();
    console.log('allBlogs......',allBlogs);
    res.render('Home',{ blogs: allBlogs });
}

const Allblogcontroller = async (req, res) => {
    const allBlogs = await bloguuser.find();
    console.log('allBlogs......',allBlogs);
    res.render('Allblog',{ blogs: allBlogs });
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


// const signinaddcontroller = async (req, res) => {
//     try {
//         const { email, password } = req.body;

//         const admin = await model_user.find({ email });
//         console.log('Signin user', admin);

//         // if (admin.length != 0) {
//         //     bcrypt.compare(password, admin[0].password).then((result) => {
//         //         console.log(result);
//         //         if (result) {

//         //             res.cookie("session", admin[0].id);
//         //             res.redirect('/');

//         //         } else {

//         //             res.redirect('/Signin');

//         //         }
//         //     }).catch((err) => {
//         //         console.log(err);
//         //     })
//         // }
//     } catch (err) {

//         console.log("err", err);

//     }
// }

const signinaddcontroller = async (req, res) => {
    res.redirect('/Signin');
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
        if (!req.user) {
            return res.redirect('/signin');
        }

        const { title, author, type } = req.body;
        const userId = req.user._id; 

        const newBlog = new bloguuser({
            title,
            avatar: req.file.filename,
            author,
            userId,
            type
        });

        await newBlog.save();
        console.log('New blog:', newBlog);
        res.redirect('/Table',{newBlog: newBlog});
    } catch (err) {
        console.log(err);
    }
}

const tablecontroller = async (req, res) => {
    try {
        if (!req.user) {
            return res.redirect('/signin');
        }

        const userId = req.user._id; // Assuming the user object contains the user's ID
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

const aditblog = async (req, res) => {
    try {
        const { id } = req.params;
        const blog = await bloguuser.findById(id);
        if (!blog) {
            return res.redirect('/Table');
        }
        res.render('Editblog', { blog: blog });
    } catch (err) {
        console.error(err);
        res.redirect('/Table');
    }
}

const editblogcontroller = async (req, res) => {
    try {
        const { id } = req.params;
        const { title, author, type } = req.body;
        const blog = await bloguuser.findById(id);
        if (!blog) {
            return res.redirect('/Table');
        }

        blog.title = title;
        blog.author = author;

        if (req.file) {

            blog.avatar = req.file.filename;
        }

        // Save the updated blog post
        await blog.save();


        res.redirect('/Table');
    } catch (err) {
        console.error(err);
        res.redirect('/Table');
    }
}


const profilecontroller = async (req, res) => {
    try {
        if (req.user) {
            const user = req.user;
            console.log(user);
            res.render('Profile', { user: user });
        } else {
            res.redirect('/signin');
        }
    } catch (error) {
        console.error(error);
    }
}

const profileeditcontroller = async (req, res) => {
    try {
        if (req.user) {
            const userId = req.user._id;
            const { name, email, username, bio } = req.body;
            console.log('User ID:', userId);
            console.log('Request Body:', req.body);

            const user = await model_user.findById(userId);
            console.log('User:', user);

            if (user) {
                user.name = name;
                user.email = email;
                user.username = username;
                user.bio = bio;

                console.log('Updated User:', user);

                await user.save();
                console.log('User saved successfully');

                return res.redirect('/Profile');
            } else {
                console.log('User not found');
                return res.redirect('/Signin');
            }
        } else {
            console.log('User not authenticated');
            return res.redirect('/Signin');
        }
    } catch (err) {
        console.error('Error editing profile:', err);
        return res.redirect('/Signin');
    }
};



const profileeditcontroller1 = async (req, res) => {
    try {
        if (req.user) {
            const user = req.user;
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
        const userId = req.user._id;
        const { password, newpassword, conpassword } = req.body;

        const user = await model_user.findById(userId);
        if (!user) {
            return res.redirect('/signin');
        }

        const isPasswordValid = await bcrypt.compare(password, user.password);
        if (!isPasswordValid) {
            return res.render('changepassword', { error: 'Old password is incorrect' });
        }

        if (newpassword !== conpassword) {
            return res.render('changepassword', { error: 'New password and confirm password do not match' });
        }

        const hashedNewPassword = await bcrypt.hash(newpassword, 10);
        user.password = hashedNewPassword;
        await user.save();

        res.redirect('/Profile');
    } catch (err) {
        console.error(err);
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

const fogetnewpassword = (req, res) => {
    try {
        res.render('Fpassword')
    } catch (err) {
        console.log(err);
    }
}

const fogenewpassword = async (req, res) => {
    let email = req.body.email;
    var user = await model_user.findOne({ "email": email }).then((user) => {
        const Otp = otpGenerator.generate(4, { lowerCaseAlphabets: false, upperCaseAlphabets: false, specialChars: false });


        // Email data
        const mailOptions = {
            from: 'vm4595228@gmail.com',
            to: user.email,
            subject: 'Node.js Email Tutorial massage',
            text: `your Forgot password otp ${Otp}`,
        };

        // Send the email
        transporter.sendMail(mailOptions, (error, info) => {
            if (error) {
                console.error('Error sending email:', error);
            } else {
                console.log('Email sent:', info.response);
            }
        });

        console.log("OTP", Otp);
        res.cookie('opt', otp);
        res.cookie('Id',user.id);
        res.redirect('/Otp');
    }).catch(() => {
        console.log("User Not Found");
    })

}

const otp = async (req, res) => {
    try {
        res.render('Otp')
    } catch (err) {
        console.log(err);
    }
}

const otpp = async (req, res) => {
    let { otp } = req.cookies;
    let { Otp } = req.body;
    try {
        if (otp == Otp) {
            res.redirect("/changenpass");
            console.log('Otp match');
        }
    } catch (err) {
        console.log(err);
    }
}

const chngennewpass1 = async (req, res) => {
    try {
        res.render('Fogetnewpassword');
    } catch (err) {
        console.log(err);
    }
}

const changenewpasscontroller = async (req, res) => {
    try {
        const { Id } = req.cookies; // Retrieve user ID from cookie
        const { newpassword, conpassword } = req.body;
        console.log('User.......', Id);

        if(newpassword == conpassword){
            const hashedNewPassword = await bcrypt.hash(newpassword,10);
            await model_user.updateOne({ _id: Id }, { password: hashedNewPassword });
            res.redirect('/Signin')
        }

    } catch (err) {
        console.log(err);
        return res.status(500).send('Internal Server Error');
    }
}



module.exports = { defaultcontroller, Allblogcontroller, signincontroller, signupcontroller, signupaddcontroller, signinaddcontroller, logoutaddcontroller, formaddcontroller, blogdetailadd, tablecontroller, deletcontroller, profilecontroller, profileeditcontroller1, profileeditcontroller, changepasswordcontroller1, changepacontroller1, typecontroller, typescontroller, otp, fogetnewpassword, fogenewpassword, otpp, chngennewpass1, aditblog, editblogcontroller, changenewpasscontroller };