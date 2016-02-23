'use strict';


const Player = require('../models/login');


module.exports.index = (req, res) => {
    res.render('register');
};

module.exports.post = (req, res) => {
    if (req.body.password === req.body.verify) {
        console.log("0");
        Player.findOne({email: req.body.email}, (err, user) => {
            console.log("1");
            if (err) throw (err);

            if (user) {
                console.log("2");
                res.redirect('/login');
            } else {
                console.log("2.5");
                Player.create(req.body, (err) => {
                    console.log("3");
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

