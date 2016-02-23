'use strict';


const express = require('express');
const router = express.Router();
const ctrl = require('../controllers/register');

router.get('/register', ctrl.index);
// router.post('/login', ctrl.post);

module.exports = router;
