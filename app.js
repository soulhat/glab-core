'use strict';

var express = require('express');
var ejs = require('ejs');
var favicon = require('serve-favicon');

var app = express();
app.use(favicon(__dirname + '/static/favicon.ico'));
app.get('/', function (req, res) {
    res.send('Hello World!');
});

module.exports = app;