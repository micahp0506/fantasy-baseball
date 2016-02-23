'use strict';


const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const app = express();
const PORT = process.env.PORT || 3000;

app.set('view engine', 'jade');
// Middleware
app.use(bodyParser.urlencoded({ extended: false }));



app.get('/', (req, res) => {
    res.render('index');
});



mongoose.connect('mongodb://localhost:27017/fantasy-baseball', (err) => {
    if (err) throw (err)

    app.listen(PORT, () => {
        console.log(`App listening on port ${PORT}`);
    });
});
