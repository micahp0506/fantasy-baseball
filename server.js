'use strict';


const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const session = require('express-session');
const RedisStore = require('connect-redis')(session);
const path = require('path');
const index = require('./routes/');

const app = express();
const PORT = process.env.PORT || 3000;
const SESSION_SECRET = process.env.SESSION_SECRET || 'secret';

app.set('view engine', 'jade');
// Middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));
app.use(bodyParser.json());
app.use(index);

app.use(require('node-sass-middleware')({
  src: path.join(__dirname, 'public'),
  dest: path.join(__dirname, 'public'),
  indentedSyntax: true,
  sourceMap: true
}));


app.use(session({
  secret: SESSION_SECRET,
  store: new RedisStore()
}));


mongoose.connect('mongodb://localhost:27017/fantasy-baseball', (err) => {
    if (err) throw (err)

    app.listen(PORT, () => {
        console.log(`App listening on port ${PORT}`);
    });
});

module.exports = app;
