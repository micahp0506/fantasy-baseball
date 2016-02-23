'use strict';


const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

const BCRYPT_DIFFICULTY = 11;

const UserSchema = mongoose.Schema({
    email: String,
    password: String
});

UserSchema.methods.authenticate = function (password, callback) {
    bcrypt.compare(password, this.password, callback);
};

UserSchema.pre('save', function(next) {
    bcrypt.hash(this.password, BCRYPT_DIFFICULTY, (err, hash) => {
        if (err) throw (err);
        console.log("5");
        this.password = hash;
        console.log("6");
        next();
    });
});

module.exports = mongoose.model('Player', UserSchema);
