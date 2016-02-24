'use strict';


const express = require('express');
const router = express.Router();
const ctrl = require('../controllers/login');

router.get('/login', ctrl.index);
router.post('/login', ctrl.post);

module.exports = router;
