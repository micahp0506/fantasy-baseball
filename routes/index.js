'use strict';


const express = require('express');
const router = express.Router();
const ctrl = require('../controllers/index');
const login = require('./login');
const register = require('./register');
const team = require('./team');

router.get('/', ctrl.index);
router.use(login);
router.use(register);
router.use(team);


module.exports = router;
