'use strict';


const passport = require('passport');
// const User = require('../models/login');

module.exports.index = (req, res) => {
    res.render('login');
};


module.exports.post = () => {
    console.log("login1");
    passport.authenticate('local', {
        successRedirect: '/team',
        failureRedirect:'/login'
        }
    )
};
