'use strict';


const passport = require('passport');
// const User = require('../models/login');
require('./local');

module.exports.index = (req, res) => {
    res.render('login');
};


module.exports.post =
    passport.authenticate('local', {
        successRedirect: '/team',
        failureRedirect:'/login'
        }
    )
;
