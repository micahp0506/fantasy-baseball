'use strict';


const express = require('express');
const router = express.Router();
const ctrl = require('../controllers/team');

router.get('/team', ctrl.index);

module.exports = router;
