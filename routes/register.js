'use strict';


const express = require('express');
const router = express.Router();
const ctrl = require('../controllers/register');

router.get('/register', ctrl.index);
router.post('/register', ctrl.post);

module.exports = router;
