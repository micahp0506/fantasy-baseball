'use strict';


const express = require('express');
const router = express.Router();
const ctrl = require('../controllers/index');
const login = require('./login');

router.get('/', ctrl.index);
router.use(login);


module.exports = router;
