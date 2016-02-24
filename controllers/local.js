'use strict';


const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;

const User =require('../models/login');

passport.serializeUser((user, done) => {
    console.log("1");
  done(null, user._id);
});

passport.deserializeUser((id, done) => {
    console.log("2");
  User.findById(id, done);
});

passport.use(new LocalStrategy({
    usernameField: 'email'
    },
    (email, password, done) => {
        console.log("3");
        User.findOne({email: email}, (err, user) => {
            if (err) throw (err);

            if (user) {
                user.authenticate(password, (err, valid) => {
                    console.log("4");
                    if (err) throw err;

                    if (valid) {
                        console.log("5");
                        done(null, user)
                    } else {
                        console.log("6");
                        done();
                    }
                });
            } else {
                console.log("7");
                done();
            }
        });
    }
));
