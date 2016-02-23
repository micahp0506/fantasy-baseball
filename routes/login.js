'use strict';


const express = require('express');
const router = express.Router();
const ctrl = require('../controllers/login');

router.get('/login', ctrl.index);


module.exports = router;
