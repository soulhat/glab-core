'use strict';

var express = require('express');
var cons = require('consolidate');
var favicon = require('serve-favicon');
var path = require('path');
var routes = require('./routes');
var app = express();

app.engine('html', cons.handlebars);
app.set('view engine', 'html');
app.set('views', path.join(__dirname, 'views'));

// middleware
app.use(express.static(path.join(__dirname, 'public')));// 静态目录
app.use(favicon(__dirname + '/static/favicon.ico'));// favicon
app.use(express.logger('dev'));
app.use(express.bodyParser());
app.use(express.methodOverride());
app.use(routes);


// 如果有任何错误都会设置成 404错误
app.use(function(req, res, next) {
    var err = new Error('Not Found');
    err.status = 404;
    next(err);
});

// 如果环境设置成 开发模式，那么会打印出详细的错误信息
if (app.get('env') === 'development') {
    app.use(function(err, req, res, next) {
        res.status(err.status || 500);
        res.render('error', {
            message: err.message,
            error: err
        });
    });
}

// 生产模式下，不会泄漏error
app.use(function(err, req, res, next) {
    res.status(err.status || 500);
    res.render('error', {
        message: err.message,
        error: {}  // 不会泄漏error
    });
});

module.exports = app;