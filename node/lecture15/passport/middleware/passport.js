const passport = require('passport');
const admin_model = require('../models/admin-models');
const bcrypt = require('bcrypt');
const LocalStrategy = require('passport-local').Strategy;

passport.use(new LocalStrategy({
    usernameField: 'email',
    passwordField: 'password'
},
    function (email, password, done) {
        admin_model.findOne({ email: email })
            .then(admin => {
                if (!admin) {
                    return done(null, false);
                }
                bcrypt.compare(password, admin.password)
                    .then(result => {
                        if (result) {
                            return done(null, admin);
                        } else {
                            return done(null, false);
                        }
                    })
                    .catch(err => {
                        return done(err);
                    });
            })
            .catch(err => {
                return done(err);
            });
    }));


passport.serializeUser(function (admin, done) {
    console.log('serializeUser success', admin);
    return done(null, admin._id);
});

passport.deserializeUser(async (id, done) =>  {
    try {
        console.log('deserializeUser...', id);
        const admin = await admin_model.findById(id);
        done(null, admin);
    } catch (err) {
        done(err);
    }

});

module.exports = passport;
