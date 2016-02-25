'use strict';

const request = require('request');


module.exports.index = (req, res) => {
    const url = 'http://api.cbssports.com/fantasy/sports?version=3.0&response_format=JSON';
    request.get(url, (err, respnse, body) => {
    if (err) throw err;


    let result = JSON.parse(body);
    // console.log(result.body.sports[0]);
    console.log(result.body.sports[0]);
    res.header('Access-Controll-Allow-Origin', '*');
    res.render('team');
  });
};

