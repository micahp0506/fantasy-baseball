'use strict';


const User = require('../models/login');


module.exports.index = (req, res) => {
    res.render('register');
};

module.exports.post = (req, res) => {
    if (req.body.password === req.body.verify) {
        User.findOne({email: req.body.email}, (err, user) => {
            if (err) throw (err);

            if (user) {
                res.redirect('/login');
            } else {
                User.create(req.body, (err) => {
                    if (err) throw (err);

                    res.redirect('/login');
                });
            }
        });
    }   else {
            res.render('register', {
                email: req.body.email,
                message: 'Passwords do not match'
            });
        }
}

